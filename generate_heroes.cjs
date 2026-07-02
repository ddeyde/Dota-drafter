const fs = require('fs');

const rawData = {
    "Anti-Mage": { "carry": 0.9, "escape": 0.7, "nuker": 0.7, "mobility": 0.9, "mana_burn": 1.0, "agility_core": 0.8 },
    "Axe": { "initiator": 0.7, "durable": 0.7, "disabler": 0.7, "carry": 0.7, "tuff": 0.6 },
    "Bane": { "support": 0.7, "disabler": 0.7, "nuker": 0.7, "durable": 0.7 },
    "Bloodseeker": { "carry": 0.7, "disabler": 0.7, "nuker": 0.7, "initiator": 0.7, "agility_core": 0.8 },
    "Crystal Maiden": { "support": 0.7, "disabler": 0.7, "nuker": 0.7, "mana_dependent": 0.8 },
    "Drow Ranger": { "carry": 0.7, "disabler": 0.7, "pusher": 0.7, "agility_core": 0.8 },
    "Earthshaker": { "support": 0.7, "initiator": 0.7, "disabler": 0.7, "nuker": 0.7, "tuff": 0.6 },
    "Juggernaut": { "carry": 0.7, "pusher": 0.7, "escape": 0.7, "agility_core": 0.8 },
    "Mirana": { "carry": 0.7, "support": 0.7, "escape": 0.7, "nuker": 0.7, "disabler": 0.7, "agility_core": 0.8 },
    "Morphling": { "carry": 0.7, "escape": 0.7, "durable": 0.7, "nuker": 0.7, "disabler": 0.7, "agility_core": 0.8 },
    "Shadow Fiend": { "carry": 0.7, "nuker": 0.7, "agility_core": 0.8 },
    "Phantom Lancer": { "carry": 0.85, "escape": 0.6, "pusher": 0.7, "nuker": 0.7, "illusioner": 0.95, "agility_core": 0.8 },
    "Puck": { "initiator": 0.7, "disabler": 0.7, "escape": 0.7, "nuker": 0.7, "mana_dependent": 0.8 },
    "Pudge": { "disabler": 0.7, "initiator": 0.7, "durable": 0.7, "nuker": 0.7, "tuff": 0.6 },
    "Razor": { "carry": 0.7, "durable": 0.7, "nuker": 0.7, "pusher": 0.7, "agility_core": 0.8 },
    "Sand King": { "initiator": 0.7, "disabler": 0.7, "support": 0.7, "nuker": 0.7, "escape": 0.7 },
    "Storm Spirit": { "carry": 0.7, "escape": 0.9, "nuker": 0.7, "initiator": 0.9, "disabler": 0.7, "mana_dependent": 1 },
    "Sven": { "carry": 0.7, "disabler": 0.7, "initiator": 0.7, "durable": 0.7, "nuker": 0.7, "tuff": 0.6 },
    "Tiny": { "carry": 0.7, "nuker": 0.7, "pusher": 0.7, "initiator": 0.7, "durable": 0.7, "disabler": 0.7, "tuff": 0.6 },
    "Vengeful Spirit": { "support": 0.7, "initiator": 0.7, "disabler": 0.7, "nuker": 0.7, "escape": 0.7, "agility_core": 0.8 },
    "Windranger": { "carry": 0.7, "support": 0.7, "disabler": 0.7, "escape": 0.7, "nuker": 0.7 },
    "Zeus": { "nuker": 0.7, "carry": 0.7, "mana_dependent": 0.8 },
    "Kunkka": { "carry": 0.7, "support": 0.7, "disabler": 0.7, "initiator": 0.7, "durable": 0.7, "nuker": 0.7, "tuff": 0.6 },
    "Lina": { "support": 0.7, "carry": 0.7, "nuker": 0.7, "disabler": 0.7, "mana_dependent": 0.8 },
    "Lion": { "support": 0.7, "disabler": 0.7, "nuker": 0.7, "initiator": 0.7, "mana_dependent": 0.8 },
    "Shadow Shaman": { "support": 0.7, "pusher": 0.7, "disabler": 0.7, "nuker": 0.7, "initiator": 0.7, "mana_dependent": 0.8 },
    "Slardar": { "carry": 0.7, "durable": 0.7, "initiator": 0.7, "disabler": 0.7, "escape": 0.7, "tuff": 0.6 },
    "Tidehunter": { "initiator": 0.7, "durable": 0.7, "disabler": 0.7, "nuker": 0.7, "carry": 0.7, "tuff": 0.6 },
    "Witch Doctor": { "support": 0.7, "nuker": 0.7, "disabler": 0.7, "mana_dependent": 0.8 },
    "Lich": { "support": 0.7, "nuker": 0.7, "mana_dependent": 0.8 },
    "Riki": { "carry": 0.7, "escape": 0.7, "disabler": 0.7, "agility_core": 0.8 },
    "Enigma": { "disabler": 0.7, "initiator": 0.7, "pusher": 0.7, "teamfight": 1.0, "jungler": 0.8 },
    "Tinker": { "carry": 0.7, "nuker": 0.7, "pusher": 0.85, "mobility": 0.95, "caster": 0.9, "mana_dependent": 0.8 },
    "Sniper": { "carry": 0.7, "nuker": 0.7, "agility_core": 0.8 },
    "Necrophos": { "carry": 0.7, "nuker": 0.7, "durable": 0.7, "disabler": 0.7, "mana_dependent": 0.8 },
    "Warlock": { "support": 0.7, "initiator": 0.7, "disabler": 0.7, "mana_dependent": 0.8 },
    "Beastmaster": { "initiator": 0.7, "disabler": 0.7, "durable": 0.7, "nuker": 0.7 },
    "Queen of Pain": { "carry": 0.7, "nuker": 0.7, "escape": 0.7, "mana_dependent": 0.8 },
    "Venomancer": { "support": 0.7, "nuker": 0.7, "initiator": 0.7, "pusher": 0.7, "disabler": 0.7 },
    "Faceless Void": { "carry": 0.7, "initiator": 0.7, "disabler": 0.7, "escape": 0.7, "durable": 0.7, "agility_core": 0.8 },
    "Wraith King": { "carry": 0.7, "support": 0.7, "durable": 0.7, "disabler": 0.7, "initiator": 0.7, "tuff": 0.6 },
    "Death Prophet": { "carry": 0.7, "pusher": 0.7, "nuker": 0.7, "disabler": 0.7 },
    "Phantom Assassin": { "carry": 0.7, "escape": 0.7, "agility_core": 0.8 },
    "Pugna": { "nuker": 0.7, "pusher": 0.7, "mana_dependent": 0.8 },
    "Templar Assassin": { "carry": 0.7, "escape": 0.7, "agility_core": 0.8 },
    "Viper": { "carry": 0.7, "durable": 0.7, "initiator": 0.7, "disabler": 0.7, "agility_core": 0.8 },
    "Luna": { "carry": 0.7, "nuker": 0.7, "pusher": 0.7, "agility_core": 0.8 },
    "Dragon Knight": { "carry": 0.7, "pusher": 0.7, "durable": 0.7, "disabler": 0.7, "initiator": 0.7, "nuker": 0.7, "tuff": 0.6 },
    "Dazzle": { "support": 0.7, "nuker": 0.7, "disabler": 0.7 },
    "Clockwerk": { "initiator": 0.7, "disabler": 0.7, "durable": 0.7, "nuker": 0.7, "tuff": 0.6 },
    "Leshrac": { "carry": 0.7, "support": 0.7, "nuker": 0.7, "pusher": 0.7, "disabler": 0.7, "mana_dependent": 0.8 },
    "Nature's Prophet": { "carry": 0.7, "pusher": 0.7, "escape": 0.7, "nuker": 0.7 },
    "Lifestealer": { "carry": 0.7, "durable": 0.7, "escape": 0.7, "disabler": 0.7, "tuff": 0.6 },
    "Dark Seer": { "initiator": 0.7, "escape": 0.7, "disabler": 0.7, "mana_dependent": 0.8 },
    "Clinkz": { "carry": 0.7, "escape": 0.7, "pusher": 0.7, "agility_core": 0.8 },
    "Omniknight": { "support": 0.7, "durable": 0.7, "nuker": 0.7, "tuff": 0.6 },
    "Enchantress": { "support": 0.7, "pusher": 0.7, "durable": 0.7, "disabler": 0.7, "mana_dependent": 0.8 },
    "Huskar": { "carry": 0.7, "durable": 0.7, "initiator": 0.7, "tuff": 0.6 },
    "Night Stalker": { "carry": 0.7, "initiator": 0.7, "durable": 0.7, "disabler": 0.7, "nuker": 0.7, "tuff": 0.6 },
    "Broodmother": { "carry": 0.7, "pusher": 0.7, "escape": 0.7, "nuker": 0.7, "agility_core": 0.8 },
    "Bounty Hunter": { "escape": 0.7, "nuker": 0.7, "agility_core": 0.8 },
    "Weaver": { "carry": 0.7, "escape": 0.7, "agility_core": 0.8 },
    "Jakiro": { "support": 0.7, "nuker": 0.7, "pusher": 0.7, "disabler": 0.7, "mana_dependent": 0.8 },
    "Batrider": { "initiator": 0.7, "disabler": 0.7, "escape": 0.7 },
    "Chen": { "support": 0.7, "pusher": 0.7, "mana_dependent": 0.8 },
    "Spectre": { "carry": 0.7, "durable": 0.7, "escape": 0.7, "tuff": 0.7, "global_presence": 0.9, "late_game": 1.0, "agility_core": 0.8 },
    "Ancient Apparition": { "support": 0.7, "disabler": 0.7, "nuker": 0.7, "mana_dependent": 0.8 },
    "Doom": { "carry": 0.7, "disabler": 0.7, "initiator": 0.7, "durable": 0.7, "nuker": 0.7, "tuff": 0.6 },
    "Ursa": { "carry": 0.7, "durable": 0.7, "disabler": 0.7, "agility_core": 0.8 },
    "Spirit Breaker": { "carry": 0.7, "initiator": 0.7, "disabler": 0.7, "durable": 0.7, "escape": 0.7, "tuff": 0.6 },
    "Gyrocopter": { "carry": 0.7, "nuker": 0.7, "disabler": 0.7, "agility_core": 0.8 },
    "Alchemist": { "carry": 0.7, "support": 0.7, "durable": 0.7, "disabler": 0.7, "initiator": 0.7, "nuker": 0.7, "tuff": 0.6 },
    "Invoker": { "carry": 0.7, "nuker": 0.7, "disabler": 0.7, "escape": 0.7, "pusher": 0.7, "complexity": 1.0, "versatility": 0.9, "caster": 1.0, "mana_dependent": 0.8 },
    "Silencer": { "carry": 0.7, "support": 0.7, "disabler": 0.7, "initiator": 0.7, "nuker": 0.7, "mana_dependent": 0.8 },
    "Outworld Destroyer": { "carry": 0.7, "nuker": 0.7, "disabler": 0.7, "mana_dependent": 0.8 },
    "Lycan": { "carry": 0.7, "pusher": 0.7, "durable": 0.7, "escape": 0.7, "tuff": 0.6 },
    "Brewmaster": { "carry": 0.7, "initiator": 0.7, "durable": 0.7, "disabler": 0.7, "nuker": 0.7 },
    "Shadow Demon": { "support": 0.7, "disabler": 0.7, "initiator": 0.7, "nuker": 0.7, "mana_dependent": 0.8 },
    "Lone Druid": { "carry": 0.7, "pusher": 0.7, "durable": 0.7, "agility_core": 0.8 },
    "Chaos Knight": { "carry": 0.7, "disabler": 0.7, "durable": 0.7, "pusher": 0.7, "initiator": 0.7, "tuff": 0.6 },
    "Meepo": { "carry": 0.7, "escape": 0.7, "nuker": 0.7, "disabler": 0.7, "initiator": 0.7, "pusher": 0.7, "micro": 1.0, "illusioner": 0.3, "farmer": 0.9, "agility_core": 0.8 },
    "Treant Protector": { "support": 0.7, "initiator": 0.7, "durable": 0.7, "disabler": 0.7, "escape": 0.7, "tuff": 0.6 },
    "Ogre Magi": { "support": 0.7, "nuker": 0.7, "disabler": 0.7, "durable": 0.7, "initiator": 0.7, "tuff": 0.6 },
    "Undying": { "support": 0.7, "durable": 0.7, "disabler": 0.7, "nuker": 0.7, "tuff": 0.6 },
    "Rubick": { "support": 0.7, "disabler": 0.7, "nuker": 0.7, "mana_dependent": 0.8 },
    "Disruptor": { "support": 0.7, "disabler": 0.7, "nuker": 0.7, "initiator": 0.7, "mana_dependent": 0.8 },
    "Nyx Assassin": { "disabler": 0.7, "nuker": 0.7, "initiator": 0.7, "escape": 0.7 },
    "Naga Siren": { "carry": 0.7, "support": 0.7, "pusher": 0.7, "disabler": 0.7, "initiator": 0.7, "escape": 0.7, "agility_core": 0.8 },
    "Keeper of the Light": { "support": 0.7, "nuker": 0.7, "disabler": 0.7, "mana_dependent": 0.8 },
    "Io": { "support": 0.7, "escape": 0.7, "nuker": 0.7, "tether": 1.0, "buffer": 0.9, "mobility": 0.7 },
    "Visage": { "support": 0.7, "nuker": 0.7, "durable": 0.7, "disabler": 0.7, "pusher": 0.7 },
    "Slark": { "carry": 0.7, "escape": 0.7, "disabler": 0.7, "nuker": 0.7, "agility_core": 0.8 },
    "Medusa": { "carry": 0.7, "disabler": 0.7, "durable": 0.7, "agility_core": 0.8 },
    "Troll Warlord": { "carry": 0.7, "pusher": 0.7, "disabler": 0.7, "durable": 0.7, "agility_core": 0.8 },
    "Centaur Warrunner": { "durable": 0.7, "initiator": 0.7, "disabler": 0.7, "nuker": 0.7, "escape": 0.7, "tuff": 0.6 },
    "Magnus": { "initiator": 0.7, "disabler": 0.7, "nuker": 0.7, "escape": 0.7 },
    "Timbersaw": { "nuker": 0.7, "durable": 0.7, "escape": 0.7, "tuff": 0.6 },
    "Bristleback": { "carry": 0.7, "durable": 0.7, "initiator": 0.7, "nuker": 0.7, "tuff": 1.0, "tank": 0.85, "brawler": 0.8 },
    "Tusk": { "initiator": 0.7, "disabler": 0.7, "nuker": 0.7, "tuff": 0.6 },
    "Skywrath Mage": { "support": 0.7, "nuker": 0.7, "disabler": 0.7, "mana_dependent": 0.8 },
    "Abaddon": { "support": 0.7, "carry": 0.7, "durable": 0.7 },
    "Elder Titan": { "initiator": 0.7, "disabler": 0.7, "nuker": 0.7, "durable": 0.7, "tuff": 0.6 },
    "Legion Commander": { "carry": 0.7, "disabler": 0.7, "initiator": 0.7, "durable": 0.7, "nuker": 0.7, "tuff": 0.6 },
    "Techies": { "nuker": 0.7, "disabler": 0.7, "trapper": 1.0, "magical": 0.8 },
    "Ember Spirit": { "carry": 0.7, "escape": 0.7, "nuker": 0.7, "disabler": 0.7, "initiator": 0.7, "agility_core": 0.8 },
    "Earth Spirit": { "nuker": 0.7, "escape": 0.7, "disabler": 0.7, "initiator": 0.7, "durable": 0.7, "tuff": 0.6 },
    "Underlord": { "support": 0.7, "nuker": 0.7, "disabler": 0.7, "durable": 0.7, "escape": 0.7, "tuff": 0.6 },
    "Terrorblade": { "carry": 0.7, "pusher": 0.7, "nuker": 0.7, "agility_core": 0.8 },
    "Phoenix": { "support": 0.7, "nuker": 0.7, "initiator": 0.7, "escape": 0.7, "disabler": 0.7, "tuff": 0.6 },
    "Oracle": { "support": 0.7, "nuker": 0.7, "disabler": 0.7, "escape": 0.7, "mana_dependent": 0.8 },
    "Winter Wyvern": { "support": 0.7, "disabler": 0.7, "nuker": 0.7, "mana_dependent": 0.8 },
    "Arc Warden": { "carry": 0.7, "escape": 0.7, "nuker": 0.7 },
    "Monkey King": { "carry": 0.7, "escape": 0.7, "disabler": 0.7, "initiator": 0.7, "agility_core": 0.8 },
    "Dark Willow": { "support": 0.7, "nuker": 0.7, "disabler": 0.7, "escape": 0.7, "mana_dependent": 0.8 },
    "Pangolier": { "carry": 0.7, "nuker": 0.7, "disabler": 0.7, "durable": 0.7, "escape": 0.7, "initiator": 0.7 },
    "Grimstroke": { "support": 0.7, "nuker": 0.7, "disabler": 0.7, "escape": 0.7, "mana_dependent": 0.8 },
    "Hoodwink": { "support": 0.7, "nuker": 0.7, "escape": 0.7, "disabler": 0.7, "agility_core": 0.8 },
    "Void Spirit": { "carry": 0.7, "escape": 0.7, "nuker": 0.7, "disabler": 0.7 },
    "Snapfire": { "support": 0.7, "nuker": 0.7, "disabler": 0.7, "escape": 0.7 },
    "Mars": { "carry": 0.7, "initiator": 0.7, "disabler": 0.7, "durable": 0.7, "tuff": 0.6 },
    "Ringmaster": { "support": 0.7, "nuker": 0.7, "escape": 0.7, "disabler": 0.7, "mana_dependent": 0.8 },
    "Dawnbreaker": { "carry": 0.7, "durable": 0.7, "tuff": 0.6 },
    "Marci": { "support": 0.7, "carry": 0.7, "initiator": 0.7, "disabler": 0.7, "escape": 0.7 },
    "Primal Beast": { "initiator": 0.7, "durable": 0.7, "disabler": 0.7, "tuff": 0.6 },
    "Muerta": { "carry": 0.7, "nuker": 0.7, "disabler": 0.7, "mana_dependent": 0.8 },
    "Kez": { "carry": 0.7, "escape": 0.7, "disabler": 0.7, "agility_core": 0.8 },
    "Largo": { "durable": 0.7, "disabler": 0.7, "support": 0.7, "tuff": 0.6 }
};

const formatId = (name) => name.toLowerCase().replace(/[\s-]/g, '_').replace(/[']/g, '');

const heroes = Object.entries(rawData).map(([name, tags]) => {
    let roles = [];
    if (tags.carry) roles.push('Carry');
    if (tags.support) {
        roles.push('Soft Support');
        roles.push('Hard Support');
    }
    if (tags.durable || tags.initiator) roles.push('Offlane');
    if (tags.nuker || tags.escape) roles.push('Mid');
    if (roles.length === 0) roles = ['Carry']; // fallback

    // Deduplicate roles
    roles = [...new Set(roles)];

    return {
        id: formatId(name),
        name,
        roles,
        tags,
        imageUrl: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/' + formatId(name) + '.png'
    };
});

let output = `export type Role = 'Carry' | 'Mid' | 'Offlane' | 'Soft Support' | 'Hard Support';\n\n`;
output += `export interface Hero {\n  id: string;\n  name: string;\n  roles: Role[];\n  tags: Record<string, number>;\n  imageUrl: string;\n}\n\n`;
output += `export interface Item {\n  id: string;\n  name: string;\n  cost: number;\n  tags: Record<string, number>;\n  counters: Record<string, number>;\n  synergies: Record<string, number>;\n  imageUrl: string;\n}\n\n`;

output += `export const HEROES: Hero[] = ${JSON.stringify(heroes, null, 2)};\n\n`;
output += `export const ITEMS: Item[] = [
  { id: 'radiance', name: 'Radiance', cost: 4700, tags: { damage: 1, aoe: 1 }, counters: { illusioner: 0.8, escape: 0.5 }, synergies: { durable: 0.8, tuff: 0.6 }, imageUrl: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/radiance.png' },
  { id: 'eye_of_skadi', name: 'Eye of Skadi', cost: 5300, tags: { stats: 1, slow: 1 }, counters: { escape: 0.6, mobility: 0.7, tuff: 0.5, durable: 0.7 }, synergies: { agility_core: 0.9, carry: 0.8 }, imageUrl: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/skadi.png' },
  { id: 'spirit_vessel', name: 'Spirit Vessel', cost: 2780, tags: { anti_heal: 1 }, counters: { tuff: 1, durable: 0.9, tank: 0.9, high_regen: 1 }, synergies: { support: 0.9, initiator: 0.7 }, imageUrl: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/spirit_vessel.png' },
  { id: 'silver_edge', name: 'Silver Edge', cost: 5450, tags: { invisibility: 1, break: 1 }, counters: { tuff: 1, durable: 0.8, tank: 0.9, brawler: 1 }, synergies: { carry: 0.7, agility_core: 0.6 }, imageUrl: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/silver_edge.png' },
  { id: 'blade_mail', name: 'Blade Mail', cost: 2100, tags: { return_damage: 1, armor: 1 }, counters: { nuker: 0.8, carry: 0.7, agility_core: 0.6, glass_cannon: 0.9 }, synergies: { durable: 0.9, tuff: 0.8, initiator: 0.7, brawler: 0.9 }, imageUrl: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blade_mail.png' },
  { id: 'heart_of_tarrasque', name: 'Heart of Tarrasque', cost: 5200, tags: { high_regen: 1, tank: 1 }, counters: { nuker: 0.6 }, synergies: { durable: 0.9, tuff: 0.9, illusioner: 0.7, brawler: 1 }, imageUrl: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png' },
  { id: 'black_king_bar', name: 'Black King Bar', cost: 4050, tags: { spell_immunity: 1 }, counters: { disabler: 1, nuker: 0.9, magical: 0.8, mana_burn: 0.7 }, synergies: { carry: 1, initiator: 0.8 }, imageUrl: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png' },
  { id: 'manta_style', name: 'Manta Style', cost: 4600, tags: { illusioner: 1, dispel: 1 }, counters: { disabler: 0.7, nuker: 0.5, silence: 0.9 }, synergies: { agility_core: 1, carry: 0.8 }, imageUrl: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/manta.png' },
  { id: 'diffusal_blade', name: 'Diffusal Blade', cost: 2500, tags: { mana_burn: 1, slow: 0.8 }, counters: { mana_dependent: 1, escape: 0.5, medusa: 1 }, synergies: { illusioner: 1, agility_core: 0.8, mobility: 0.6 }, imageUrl: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/diffusal_blade.png' },
  { id: 'blink_dagger', name: 'Blink Dagger', cost: 2250, tags: { mobility: 1, initiator: 1 }, counters: { escape: 0.7, nuker: 0.6 }, synergies: { initiator: 1, disabler: 0.9 }, imageUrl: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink_dagger.png' }
];
`;

fs.writeFileSync('src/data/dotaData.ts', output);
