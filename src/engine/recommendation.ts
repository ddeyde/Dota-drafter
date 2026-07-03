import { Hero, Item, HEROES, ITEMS, Role } from '../data/dotaData';
import { TAG_COUNTERS, TAG_SYNERGIES } from './tags';

export interface HeroRecommendation {
  hero: Hero;
  score: number;
  reasoning: string[];
}

export interface RecommendationResult {
  heroes: HeroRecommendation[];
  warnings: string[];
}

export function recommendHeroes(
  allies: Hero[],
  enemies: Hero[],
  desiredRole: Role
): RecommendationResult {
  // --- KIT 1: DYNAMIC THREAT PROFILE & ENEMY VULNERABILITY VECTORS ---
  let enemySustain = 0;           // Healing, health regeneration, lifesteal dependency
  let enemyIllusionSummon = 0;    // Illusion and summon unit reliance
  let enemyPassive = 0;           // Passive skill reliance (e.g., Bristleback, Spectre, Huskar)
  let enemyMobility = 0;          // Escape and mobility mechanisms (e.g., Storm, Puck, AM)
  let enemyPhysical = 0;          // Physical damage output and armor corruption
  let enemyMagic = 0;             // Magical damage and single-target spell nukes
  let enemyLaneBully = 0;         // High-pressure early game lane presence
  let enemyPushTempo = 0;         // High push and game-ending tempo (e.g., Lycan, Leshrac)
  let enemyDebuffImmunity = 0;    // BKB-reliant or built-in immunity (e.g., Lifestealer, Juggernaut)
  let enemyDispellableBuffs = 0;  // Reliant on buffs that can be purged (e.g., Windrun, Ghost Shroud)
  let enemyLaneStrength = 0;      // Overall lane oppressiveness

  enemies.forEach(e => {
    enemySustain += (e.tags['sustain'] || 0) * 1.0 + (e.tags['healing'] || 0) * 0.8 + (e.tags['lifesteal'] || 0) * 0.8;
    enemyIllusionSummon += (e.tags['illusioner'] || 0) * 1.2 + (e.tags['summoning'] || 0) * 1.0;
    enemyPassive += (e.tags['passive_reliant'] || 0) * 1.2 + (e.tags['passive_tank'] || 0) * 1.0;
    enemyMobility += (e.tags['mobility'] || 0) * 1.0 + (e.tags['escape'] || 0) * 1.2;
    enemyPhysical += (e.tags['physical_damage'] || 0) + (e.tags['armor_corruption'] || 0) + (e.tags['carry'] || 0) * 0.8;
    enemyMagic += (e.tags['magic_damage'] || 0) + (e.tags['nuker'] || 0) + (e.tags['aoe_magic'] || 0) * 0.8;
    enemyLaneBully += (e.tags['lane_bully'] || 0) + (e.tags['harass_heavy'] || 0);
    enemyPushTempo += (e.tags['push_tempo'] || 0) + (e.tags['pusher'] || 0) * 0.5;
    enemyDebuffImmunity += (e.tags['debuff_immunity'] || 0) + (e.tags['bkb_reliant'] || 0);
    enemyDispellableBuffs += (e.tags['dispellable_buff'] || 0);
    enemyLaneStrength += (e.tags['lane_strength'] || 5); // Default to average 5
  });

  const highSustainActive = enemySustain > 1.2;
  const highIllusionActive = enemyIllusionSummon > 1.2;
  const highPassiveActive = enemyPassive > 1.2;
  const highMobilityActive = enemyMobility > 1.2;
  const highPushTempoActive = enemyPushTempo > 3.0;
  const highDebuffImmunityActive = enemyDebuffImmunity > 0.5;
  const highDispellableBuffsActive = enemyDispellableBuffs > 0.5;

  const heroesToEvaluate = HEROES.filter(
    h => !allies.some(a => a.id === h.id) &&
         !enemies.some(e => e.id === h.id)
  );

  const evaluatedHeroes = heroesToEvaluate.map(hero => {
    let score = 0;
    const reasoning: string[] = [];
    const hTags = hero.tags;

    // Baseline Weight based on Role Meta viability
    const roleWeight = hero.roleWeights?.[desiredRole] || (hero.roles.includes(desiredRole) ? 1.0 : 0);
    score += roleWeight * 15.0; // Base baseline score
    if (roleWeight === 0) {
      score -= 35.0; // Overridable penalty for completely off-role, allowing extreme counters to shine
      reasoning.push(`Unconventional Role: This is an extreme flex pick for ${desiredRole}.`);
    } else if (roleWeight < 0.4) {
      score -= 15.0; // Massive penalty for off-meta roles
    } else if (roleWeight < 0.6) {
      score -= 5.0; // Moderate penalty for flex roles
    }

    // -------------------------------------------------------------------------
    // KITS 2 & 3: THE MECHANIC INTERSECTION MATRIX & THE KEY-LOCK SEARCH
    // -------------------------------------------------------------------------

    // Lock 1: Extreme Sustain (Huskar, Alchemist, Lifestealer)
    // Key: Heal Inhibition / Anti-Heal (Ancient Apparition, Doom)
    if (highSustainActive) {
      const heroAntiHeal = (hTags['anti_heal'] || 0) + (hTags['heal_inhibition'] || 0);
      if (heroAntiHeal > 0) {
        const boost = heroAntiHeal * enemySustain * 12.0; 
        score += boost;
        reasoning.push(`[+${boost.toFixed(1)}] Extreme priority: Direct counter to enemy's high healing/sustain dependency.`);
      }
    }

    // Lock 2: Passive Reliance (Bristleback, Spectre, PA, Enchantress)
    // Key: Break (Viper, Hoodwink)
    if (highPassiveActive) {
      const heroBreak = (hTags['break'] || 0);
      if (heroBreak > 0) {
        const boost = heroBreak * enemyPassive * 8.0; 
        score += boost;
        reasoning.push(`[+${boost.toFixed(1)}] High priority: 'Break' mechanic disables crucial enemy passive abilities.`);
      }
    }

    // Lock 3: Illusion/Summon Swarms (Chaos Knight, PL, Enchantress summons)
    // Key: Cleave, AoE Damage, Anti-Illusion (Sven, Axe, Earthshaker, Sand King)
    if (highIllusionActive) {
      const heroAoE = (hTags['cleave'] || 0) * 4.0 + 
                     (hTags['aoe_damage'] || 0) * 2.5 + 
                     (hTags['anti_illusion'] || 0) * 5.0 + 
                     (hTags['aoe_magic'] || 0) * 1.5;
      if (heroAoE > 0) {
        const boost = heroAoE * enemyIllusionSummon * 3.5; 
        score += boost;
        reasoning.push(`[+${boost.toFixed(1)}] Crucial AoE/Cleave to easily clear enemy illusions and swarm units.`);
      } else {
        score -= 4.0; // Lacking AoE against illusioners gets penalized
      }
    }

    // Lock 4: High Mobility & Escape (Storm Spirit, Weaver, AM, Puck)
    // Key: Leash, Root, Silence, Hard Control, Catch
    if (highMobilityActive) {
      const heroLockdown = (hTags['hard_control'] || 0) * 2.0 + 
                           (hTags['root'] || 0) * 1.5 + 
                           (hTags['catch'] || 0) * 1.5 + 
                           (hTags['silence'] || 0) * 1.0 + 
                           (hTags['leash'] || 0) * 2.0;
      if (heroLockdown > 0) {
        const boost = heroLockdown * enemyMobility * 2.5; 
        score += boost;
        reasoning.push(`[+${boost.toFixed(1)}] Strong Lockdown/Silence to prevent high-mobility enemy escapes.`);
      }
    }

    // Lock 5: Timing Pressure & High Tempo (Lycan, Broodmother, Leshrac)
    // Key: AoE Def / High Tempo Core
    if (highPushTempoActive) {
      const heroAoEDef = (hTags['aoe_def'] || 0) * 5.0 + (hTags['wave_clear'] || 0) * 3.0 + (hTags['pusher'] || 0) * 2.0;
      if (heroAoEDef > 0) {
        const boost = heroAoEDef * enemyPushTempo * 1.5;
        score += boost;
        reasoning.push(`[+${boost.toFixed(1)}] Extreme priority: AoE Defense and wave clear to stop the enemy's aggressive push tempo.`);
      }
    }

    // Lock 6: Debuff Immunity & Spell Immunity (Lifestealer, Juggernaut)
    // Key: BKB-Piercing Control
    if (highDebuffImmunityActive) {
      const piercesBKB = (hTags['pierces_bkb'] || 0);
      const regularControl = (hTags['hard_control'] || 0) + (hTags['silence'] || 0) + (hTags['root'] || 0);
      
      if (piercesBKB > 0) {
        const boost = piercesBKB * enemyDebuffImmunity * 12.0;
        score += boost;
        reasoning.push(`[+${boost.toFixed(1)}] Extreme priority: BKB-piercing control to lock down spell-immune enemies.`);
      } else if (regularControl > 0) {
        const penalty = regularControl * enemyDebuffImmunity * 4.0;
        score -= penalty;
        reasoning.push(`[-${penalty.toFixed(1)}] Warning: Standard control abilities are useless against enemy spell immunity.`);
      }
    }

    // Lock 7: Dispellable Buffs (Windranger, Necrophos)
    // Key: Offensive Dispel
    if (highDispellableBuffsActive) {
      const offensiveDispel = (hTags['offensive_dispel'] || 0);
      if (offensiveDispel > 0) {
        const boost = offensiveDispel * enemyDispellableBuffs * 8.0;
        score += boost;
        reasoning.push(`[+${boost.toFixed(1)}] Extreme priority: Built-in dispel removes crucial enemy defensive buffs.`);
      }
    }

    // -------------------------------------------------------------------------
    // MICRO-COUNTER LAYER (STATIC TAG INTERSECTION)
    // -------------------------------------------------------------------------
    const microCountersByEnemy: Record<string, {score: number, interactions: string[]}> = {};
    enemies.forEach(enemy => {
      let enemyCounterScore = 0;
      Object.entries(hTags).forEach(([heroTag, heroTagWeight]) => {
        const counterMapping = TAG_COUNTERS[heroTag];
        if (counterMapping) {
          Object.entries(counterMapping).forEach(([enemyTag, multiplier]) => {
            const enemyTagWeight = enemy.tags[enemyTag] || (enemy.id === enemyTag ? 1.0 : 0);
            if (enemyTagWeight > 0) {
              const addedScore = heroTagWeight * enemyTagWeight * multiplier * 1.0;
              enemyCounterScore += addedScore;
              if (addedScore > 0.8) {
                if (!microCountersByEnemy[enemy.name]) microCountersByEnemy[enemy.name] = {score: 0, interactions: []};
                microCountersByEnemy[enemy.name].interactions.push(`${heroTag.replace(/_/g, ' ')} -> ${enemyTag.replace(/_/g, ' ')}`);
              }
            }
          });
        }
      });
      // Cap max counter score from a single enemy so one hero doesn't dominate the draft logic
      let finalEnemyScore = enemyCounterScore;
      if (enemyCounterScore > 15) {
         finalEnemyScore = 15 + (enemyCounterScore - 15) * 0.2; // Soft cap
      }
      score += finalEnemyScore;
      if (microCountersByEnemy[enemy.name]) {
         microCountersByEnemy[enemy.name].score = finalEnemyScore;
      }
    });

    Object.entries(microCountersByEnemy).forEach(([enemyName, data]) => {
        if (data.interactions.length > 0) {
            reasoning.push(`Counters ${enemyName} [+${data.score.toFixed(1)}]: ${data.interactions.slice(0, 2).join(', ')}`);
        }
    });

    // -------------------------------------------------------------------------
    // SYSTEMIC TEAM COMPOSITION & ECO/LANING CONTROLS
    // -------------------------------------------------------------------------

    if (allies.length > 0) {
      let teamInitiation = 0;
      let teamWaveClear = 0;
      let teamFarmNeed = 0;
      let teamMeleeCount = 0;
      let teamDurable = 0;
      let teamFarmWeightTotal = 0;

      allies.forEach(a => {
        teamInitiation += (a.tags['initiator'] || 0) + (a.tags['catch'] || 0) + (a.tags['hard_control'] || 0);
        teamWaveClear += (a.tags['pusher'] || 0) + (a.tags['aoe_damage'] || 0) + (a.tags['aoe_magic'] || 0);
        teamFarmNeed += (a.tags['carry'] || 0) + (a.tags['farming'] || 0);
        teamDurable += (a.tags['durable'] || 0) + (a.tags['tuff'] || 0) + (a.tags['tank'] || 0);
        teamFarmWeightTotal += (a.tags['farm_weight'] || 2); // Default to average 2 if missing
        if ((a.tags['melee'] || 0) > 0) teamMeleeCount++;
      });

      const hMagic = (hTags['nuker'] || 0) + (hTags['magic_damage'] || 0) + (hTags['aoe_magic'] || 0);
      const hPhysical = (hTags['physical_damage'] || 0) + (hTags['carry'] || 0) + (hTags['agility_core'] || 0) + (hTags['armor_corruption'] || 0) + (hTags['cleave'] || 0);
      const hDurable = (hTags['durable'] || 0) + (hTags['tuff'] || 0) + (hTags['tank'] || 0);
      const hInitiation = (hTags['initiator'] || 0) + (hTags['catch'] || 0) + (hTags['hard_control'] || 0);
      const hWaveClear = (hTags['pusher'] || 0) + (hTags['aoe_damage'] || 0) + (hTags['aoe_magic'] || 0);
      const hFarmWeight = (hTags['farm_weight'] || (hTags['carry'] || 0) > 0.5 ? 4 : 2);

      // Melee Limit Prevention
      if (teamMeleeCount >= 3 && (hTags['melee'] || 0) > 0) {
        score -= 20.0;
        reasoning.push(`Too many melee heroes! Picking another melee hero ruins teamfight spacing.`);
      } else if (teamMeleeCount === 2 && (hTags['melee'] || 0) > 0 && (desiredRole === 'Mid' || desiredRole === 'Soft Support' || desiredRole === 'Hard Support')) {
        score -= 5.0;
        reasoning.push(`Melee counts are high; prefer a ranged hero for better draft spacing.`);
      }

      // Farm Weight (Greed) Matrix
      if (teamFarmWeightTotal >= 10 && desiredRole === 'Offlane') {
         if (hFarmWeight > 2) {
             score -= 50.0;
             reasoning.push(`Critical: Team is already extremely greedy. A core with high farm dependency will starve the map.`);
         } else {
             score += 15.0;
             reasoning.push(`Excellent tempo pick to balance out the team's greedy cores.`);
         }
      } else if (teamFarmWeightTotal >= 10 && desiredRole === 'Mid') {
         if (hFarmWeight > 3) {
             score -= 30.0;
             reasoning.push(`Warning: Team is very greedy. A highly farm-dependent mid will struggle for space.`);
         } else {
             score += 10.0;
             reasoning.push(`Good tempo mid to balance the draft's economy.`);
         }
      } else if (teamFarmWeightTotal >= 10 && desiredRole === 'Carry') {
         if (hFarmWeight >= 4) {
             score -= 15.0;
             reasoning.push(`Warning: Team is already extremely greedy. An ultra-greedy carry might struggle for space.`);
         } else {
             score += 10.0;
             reasoning.push(`Excellent tempo carry to balance out the team's greedy cores.`);
         }
      }

      // Economy Greed Safeguard (Lifestealer on offlane / Carry on off-role)
      if (desiredRole !== 'Carry' && teamFarmNeed > 1.4 && ((hTags['carry'] || 0) > 0.6 || (hTags['farming'] || 0) > 0.6)) {
        const greedPenalty = (teamFarmNeed - 1.0) * 12.0;
        score -= greedPenalty;
        reasoning.push(`Draft is already farm-heavy; selecting a greedy core on an off-role will starve your team of map gold.`);
      }

      // Lane Simulation (Lane Matchup Predictor)
      if (desiredRole === 'Offlane' || desiredRole === 'Mid' || desiredRole === 'Carry') {
        const avgEnemyLaneStrength = enemies.length > 0 ? (enemyLaneStrength / enemies.length) : 5;
        const myLaneStrength = (hTags['lane_strength'] || 5);
        
        if (enemyLaneBully > 1.0 || avgEnemyLaneStrength > 6) {
          if (myLaneStrength < 4) {
             score -= 30.0;
             reasoning.push(`Unplayable lane: Guaranteed to be crushed by oppressive enemy laners in the first 10 minutes.`);
          } else if ((hTags['weak_laner'] || 0) > 0 || ((hTags['melee'] || 0) > 0 && (hTags['durable'] || 0) < 0.7 && (hTags['escape'] || 0) < 0.5)) {
            const laningPenalty = 15.0 * enemyLaneBully;
            score -= laningPenalty;
            reasoning.push(`Extremely risky in lane: vulnerable to intense enemy physical harass and lane bullying.`);
          }
        }
      }

      // Synergy Logic
      Object.entries(hTags).forEach(([heroTag, heroTagWeight]) => {
        const synergyMapping = TAG_SYNERGIES[heroTag];
        if (synergyMapping) {
          Object.entries(synergyMapping).forEach(([allyTag, multiplier]) => {
            let totalAllyWeight = 0;
            const matchingAllies: string[] = [];
            allies.forEach(ally => {
              const allyTagWeight = ally.tags[allyTag] || (ally.id === allyTag ? 1.0 : 0);
              if (allyTagWeight > 0) {
                totalAllyWeight += allyTagWeight;
                matchingAllies.push(ally.name);
              }
            });
            if (totalAllyWeight > 0) {
              const effectiveAllyWeight = Math.min(totalAllyWeight, 1.5);
              const addedScore = heroTagWeight * effectiveAllyWeight * multiplier * 1.5;
              score += addedScore;
              if (addedScore > 0.8) {
                reasoning.push(`Strong synergy: ${hero.name}'s ${heroTag.replace(/_/g, ' ')} complements ${matchingAllies.join(', ')}'s ${allyTag.replace(/_/g, ' ')}.`);
              }
            }
          });
        }
      });

      // Role Complement Checks
      if (teamDurable < 1.0 && hDurable > 1.0) {
        score += 2.5;
        reasoning.push(`Provides much needed frontline durability.`);
      }
      if (teamInitiation < 1.0 && hInitiation > 1.0) {
        score += 2.5;
        reasoning.push(`Provides much needed initiation to start fights.`);
      }
      if (teamWaveClear < 1.0 && hWaveClear > 1.0) {
        score += 2.0;
        reasoning.push(`Provides wave clear and pushing power.`);
      }
    }

    // Role specific validation check
    if (desiredRole === 'Carry') {
      const carryTrait = (hTags['mobility'] || 0) + (hTags['escape'] || 0) + (hTags['durable'] || 0) + (hTags['tuff'] || 0) + (hTags['ranged_carry'] || 0) + (hTags['agility_core'] || 0) + (hTags['hard_carry'] || 0) + (hTags['illusioner'] || 0) + (hTags['brawler'] || 0);
      if (carryTrait < 1.0) {
        score -= 6.0;
        reasoning.push(`${hero.name} lacks the stats, survivability, or mobility typical of a primary carry.`);
      } else {
        score += (hTags['carry'] || 0) * 1.5;
      }
    } else if (desiredRole === 'Offlane') {
      const offlaneTrait = (hTags['durable'] || 0) + (hTags['tuff'] || 0) + (hTags['initiator'] || 0) + (hTags['summoning'] || 0) + (hTags['passive_tank'] || 0) + (hTags['teamfight'] || 0);
      if (offlaneTrait < 1.0) {
        score -= 5.0;
        reasoning.push(`${hero.name} lacks the survivability, stats, or initiation needed for a stable offlane.`);
      }
    } else if (desiredRole === 'Mid') {
      const midTrait = (hTags['mobility'] || 0) + (hTags['escape'] || 0) + (hTags['nuker'] || 0) + (hTags['pusher'] || 0) + (hTags['caster'] || 0) + (hTags['ranged_carry'] || 0) + (hTags['global_presence'] || 0) + (hTags['snowball'] || 0) + (hTags['brawler'] || 0);
      if (midTrait < 1.0) {
        score -= 4.0;
        reasoning.push(`${hero.name} may struggle in mid due to lack of mobility, wave clear, or scaling stats.`);
      }
    } else if (desiredRole === 'Hard Support' || desiredRole === 'Soft Support') {
      const supportTrait = (hTags['support'] || 0) + (hTags['save'] || 0) + (hTags['hard_save'] || 0) + (hTags['disabler'] || 0) + (hTags['teamfight'] || 0) + (hTags['buff'] || 0) + (hTags['healing'] || 0);
      if (supportTrait < 1.0) {
        score -= 4.0;
        reasoning.push(`${hero.name} lacks the utility, saves, or lockdown needed for a support role.`);
      }
    }

    const uniqueReasoning = Array.from(new Set(reasoning));
    return { hero, score, reasoning: uniqueReasoning.slice(0, 3) };
  });

  const sortedHeroes = evaluatedHeroes.sort((a, b) => b.score - a.score).slice(0, 4);

  // --- KIT 3.5: GLOBAL DRAFT WARNINGS & ITEM RECONSTRUCTIONS ---
  const warnings: string[] = [];
  let teamMeleeCount = 0;
  let teamFarmNeed = 0;

  let teamFarmWeightTotal = 0;

  allies.forEach(a => {
    if ((a.tags['melee'] || 0) > 0) teamMeleeCount++;
    teamFarmNeed += (a.tags['carry'] || 0) + (a.tags['farming'] || 0);
    teamFarmWeightTotal += (a.tags['farm_weight'] || 2);
  });

  if (enemySustain > 1.8) {
    const hasAntiHealAlly = allies.some(a => (a.tags['anti_heal'] || 0) > 0.5 || (a.tags['heal_inhibition'] || 0) > 0.5);
    const hasAntiHealRec = sortedHeroes.some(h => (h.hero.tags['anti_heal'] || 0) > 0.5 || (h.hero.tags['heal_inhibition'] || 0) > 0.5);
    if (!hasAntiHealAlly && !hasAntiHealRec) {
      warnings.push(
        `⚠️ **High Sustain Threat**: Enemies rely extremely heavily on health regeneration and healing. If Ancient Apparition or Doom are banned, Cores **MUST** build **Eye of Skadi** or **Shiva's Guard**, and Supports **MUST** purchase **Spirit Vessel** immediately.`
      );
    } else if (!hasAntiHealAlly) {
      warnings.push(
        `💡 **Anti-Heal Key**: Enemies rely heavily on health regeneration/sustain. Selecting **Ancient Apparition** or **Doom** will completely shut down their healing and secure fights.`
      );
    }
  }

  if (enemyPushTempo > 2.5) {
      const hasAoEDefAlly = allies.some(a => (a.tags['aoe_def'] || 0) > 0.5);
      if (!hasAoEDefAlly) {
        warnings.push(`⚠️ **Extreme Timing Pressure**: Enemies have a fast push tempo draft. You desperately need AoE wave clear to drag the game out and defend high ground.`);
      }
  }

  if (enemyDebuffImmunity > 0.5) {
      const hasPiercesBkb = allies.some(a => (a.tags['pierces_bkb'] || 0) > 0.5);
      if (!hasPiercesBkb) {
          warnings.push(`⚠️ **Debuff Immunity Threat**: Enemies have built-in spell immunity. Normal disables will not work. Draft heroes with **BKB-piercing control** like Bane or Beastmaster.`);
      }
  }

  if (enemyDispellableBuffs > 0.5) {
       const hasDispel = allies.some(a => (a.tags['offensive_dispel'] || 0) > 0.5);
       if (!hasDispel) {
           warnings.push(`⚠️ **Buff-Reliant Enemies**: Enemies heavily rely on dispellable defensive buffs (like Windrun or Ghost Shroud). Prioritize an **Offensive Dispel** or build **Nullifier** later.`);
       }
  }

  if (enemyIllusionSummon > 1.8) {
    const hasAoEAlly = allies.some(a => (a.tags['cleave'] || 0) > 0.5 || (a.tags['aoe_damage'] || 0) > 0.5 || (a.tags['anti_illusion'] || 0) > 0.5);
    if (!hasAoEAlly) {
      warnings.push(
        `⚠️ **Illusion/Summon Swarm**: Enemy team features high unit counts or illusion heroes. Cores should prioritize building **Mjolnir**, **Battle Fury** (for Cleave), or **Crimson Guard** to absorb swarm damage.`
      );
    }
  }

  if (enemyPassive > 1.5) {
    const hasBreakAlly = allies.some(a => (a.tags['break'] || 0) > 0.5);
    if (!hasBreakAlly) {
      warnings.push(
        `⚠️ **Passive-Reliant Enemies**: Enemies rely heavily on passive abilities (e.g. Bristleback, Spectre, Huskar). Your Cores should prepare to purchase a **Silver Edge** to apply Break.`
      );
    }
  }

  if (enemyMobility > 1.8) {
    const hasLockdownAlly = allies.some(a => (a.tags['hard_control'] || 0) > 0.5 || (a.tags['root'] || 0) > 0.5 || (a.tags['silence'] || 0) > 0.5);
    if (!hasLockdownAlly) {
      warnings.push(
        `⚠️ **High Mobility Threat**: Enemies are extremely elusive. Your team needs to prioritize **Scythe of Vyse**, **Abyssal Blade**, or **Orchid Malevolence** / **Bloodthorn** to prevent escapes.`
      );
    }
  }

  if (teamMeleeCount >= 3) {
    warnings.push(
      `⚠️ **Melee Over-stacking**: Your team has ${teamMeleeCount} melee heroes. Avoid picking another melee hero to prevent extreme crowding, spacing issues, and vulnerability to enemy AoE control.`
    );
  }

  if (teamFarmWeightTotal >= 10) {
    warnings.push(
      `⚠️ **Critical Farm Weight**: Your draft's economy requirement is extremely high. The map does not have enough gold for all your cores, leading to underleveled and under-farmed heroes. Ensure position 3 is a high-tempo playmaker.`
    );
  } else if (teamFarmNeed > 1.8) {
    warnings.push(
      `⚠️ **High Farm Greed**: Your draft is extremely greedy. Resources on the map are limited, which can starve your support heroes and delay key items.`
    );
  }

  return { heroes: sortedHeroes, warnings };
}

export interface EnemyState {
  hero: Hero;
  items: Item[];
}

export interface ItemRecommendation {
  item: Item;
  score: number;
  reasoning: string[];
}

export function recommendItems(
  myHero: Hero,
  enemies: EnemyState[],
  gameStage: 'Early' | 'Mid' | 'Late'
): ItemRecommendation[] {
  const recommendations = ITEMS.map(item => {
    let score = 0;
    const reasoning: string[] = [];

    // 1. Synergy with my hero
    Object.entries(item.tags).forEach(([itemTag, itemTagWeight]) => {
      const synergyMapping = TAG_SYNERGIES[itemTag];
      if (synergyMapping) {
        Object.entries(synergyMapping).forEach(([heroTag, multiplier]) => {
          const heroTagWeight = myHero.tags[heroTag] || (myHero.id === heroTag ? 1.0 : 0);
          if (heroTagWeight > 0) {
            const addedScore = itemTagWeight * heroTagWeight * multiplier;
            score += addedScore;
            if (addedScore > 0.6) {
              reasoning.push(`Synergizes perfectly with your ${heroTag.replace(/_/g, ' ')} capabilities.`);
            }
          }
        });
      }
    });
    
    // Legacy mapping support from generate_data.cjs (if any direct synergies exist in the item)
    Object.entries(item.synergies || {}).forEach(([tag, weight]) => {
      if (myHero.tags[tag]) {
        score += weight * myHero.tags[tag];
      }
      // Role synergy legacy
      if (myHero.roles.includes(tag as Role)) {
        score += weight;
      }
    });

    // 2. Countering enemies and their specific item builds
    enemies.forEach(enemy => {
      Object.entries(item.tags).forEach(([itemTag, itemTagWeight]) => {
        const counterMapping = TAG_COUNTERS[itemTag];
        if (counterMapping) {
          Object.entries(counterMapping).forEach(([enemyTag, multiplier]) => {
            // Countering the hero's innate tags
            const enemyTagWeight = enemy.hero.tags[enemyTag] || (enemy.hero.id === enemyTag ? 1.0 : 0);
            if (enemyTagWeight > 0) {
              const counterScore = itemTagWeight * enemyTagWeight * multiplier;
              score += counterScore;
              if (counterScore > 0.5) {
                reasoning.push(`Directly counters ${enemy.hero.name}'s ${enemyTag.replace(/_/g, ' ')}.`);
              }
            }
            
            // Countering the enemy's current items (High weight because items are reactive)
            enemy.items.forEach(enemyItem => {
              const enemyItemTagWeight = enemyItem.tags[enemyTag];
              if (enemyItemTagWeight > 0) {
                const counterScore = itemTagWeight * enemyItemTagWeight * multiplier * 2.0; // 2x multiplier
                score += counterScore;
                if (counterScore > 0.4) {
                  reasoning.push(`Counters the ${enemyTag.replace(/_/g, ' ')} from ${enemy.hero.name}'s ${enemyItem.name}.`);
                }
              }
            });
          });
        }
      });
      
      // Legacy mapping support
      Object.entries(item.counters || {}).forEach(([tag, weight]) => {
        if (enemy.hero.tags[tag]) {
           score += weight * enemy.hero.tags[tag];
        }
      });
    });

    return { item, score, reasoning: Array.from(new Set(reasoning)).slice(0, 3) };
  });

  return recommendations.sort((a, b) => b.score - a.score).slice(0, 5);
}
