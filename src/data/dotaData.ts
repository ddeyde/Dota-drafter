export type Role = 'Carry' | 'Mid' | 'Offlane' | 'Soft Support' | 'Hard Support';

export interface Hero {
  id: string;
  name: string;
  roles: Role[];
  roleWeights: Record<string, number>;
  tags: Record<string, number>;
  imageUrl: string;
}

export interface Item {
  id: string;
  name: string;
  cost: number;
  tier?: string;
  tags: Record<string, number>;
  counters: Record<string, number>;
  synergies: Record<string, number>;
  imageUrl: string;
}

export const HEROES: Hero[] = [
  {
    "id": "anti_mage",
    "name": "Anti-Mage",
    "roles": [
      "Carry"
    ],
    "roleWeights": {
      "Carry": 0.9,
      "Mid": 0,
      "Offlane": 0,
      "Soft Support": 0.12,
      "Hard Support": 0
    },
    "tags": {
      "farm_weight": 5,
      "lane_strength": 3,
      "carry": 0.9,
      "escape": 0.85,
      "nuker": 0.4,
      "mobility": 0.95,
      "mana_burn": 1,
      "agility_core": 0.95,
      "anti_magic": 1,
      "mana_drain": 1.5
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/anti_mage.png"
  },
  {
    "id": "axe",
    "name": "Axe",
    "roles": [
      "Offlane",
      "Soft Support"
    ],
    "roleWeights": {
      "Carry": 0.3,
      "Mid": 0,
      "Offlane": 1,
      "Soft Support": 0.57,
      "Hard Support": 0
    },
    "tags": {
      "High_Armor_Physical": 1,
      "aoe_def": 4,
      "lane_strength": 7,
      "pierces_bkb": 1,
      "melee": 1,
      "initiator": 0.95,
      "durable": 0.8,
      "disabler": 0.85,
      "carry": 0.3,
      "tuff": 0.9,
      "anti_melee": 0.9,
      "aoe_damage": 0.85,
      "pure_damage": 0.85
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/axe.png"
  },
  {
    "id": "bane",
    "name": "Bane",
    "roles": [
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0.18,
      "Offlane": 0.4,
      "Soft Support": 0.9000000000000001,
      "Hard Support": 1
    },
    "tags": {
      "Single_target_Disabler": 1,
      "Pure_Damage": 1,
      "Magic_debuffs": 1,
      "pierces_bkb": 1,
      "lane_strength": 8,
      "ranged": 1,
      "support": 0.9,
      "disabler": 1,
      "nuker": 0.6,
      "durable": 0.4,
      "save": 0.7,
      "single_target_spell": 1
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bane.png"
  },
  {
    "id": "bloodseeker",
    "name": "Bloodseeker",
    "roles": [
      "Carry",
      "Soft Support"
    ],
    "roleWeights": {
      "Carry": 0.8,
      "Mid": 0.5,
      "Offlane": 0.11199999999999999,
      "Soft Support": 0.57,
      "Hard Support": 0
    },
    "tags": {
      "sustain": 0.9,
      "melee": 1,
      "carry": 0.8,
      "disabler": 0.6,
      "nuker": 0.5,
      "initiator": 0.7,
      "agility_core": 0.85,
      "mobility": 0.8,
      "pure_damage": 0.6
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bloodseeker.png"
  },
  {
    "id": "crystal_maiden",
    "name": "Crystal Maiden",
    "roles": [
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0.255,
      "Offlane": 0,
      "Soft Support": 1,
      "Hard Support": 1
    },
    "tags": {
      "ranged": 1,
      "support": 1,
      "disabler": 0.8,
      "nuker": 0.85,
      "mana_dependent": 0.4,
      "squishy_support": 1,
      "aoe_magic": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crystal_maiden.png"
  },
  {
    "id": "drow_ranger",
    "name": "Drow Ranger",
    "roles": [
      "Carry"
    ],
    "roleWeights": {
      "Carry": 0.9,
      "Mid": 0,
      "Offlane": 0,
      "Soft Support": 0,
      "Hard Support": 0
    },
    "tags": {
      "carry": 0.9,
      "disabler": 0.6,
      "pusher": 0.8,
      "agility_core": 0.95,
      "ranged_carry": 1,
      "squishy_early": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/drow_ranger.png"
  },
  {
    "id": "earthshaker",
    "name": "Earthshaker",
    "roles": [
      "Offlane",
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0.21,
      "Offlane": 1,
      "Soft Support": 1,
      "Hard Support": 1
    },
    "tags": {
      "lane_strength": 3,
      "melee": 1,
      "support": 0.85,
      "initiator": 0.95,
      "disabler": 1,
      "nuker": 0.7,
      "tuff": 0.7,
      "aoe_stun": 1,
      "anti_illusion": 1
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/earthshaker.png"
  },
  {
    "id": "juggernaut",
    "name": "Juggernaut",
    "roles": [
      "Carry"
    ],
    "roleWeights": {
      "Carry": 0.9,
      "Mid": 0.4,
      "Offlane": 0,
      "Soft Support": 0,
      "Hard Support": 0
    },
    "tags": {
      "debuff_immunity": 1,
      "farm_weight": 4,
      "lane_strength": 7,
      "carry": 0.9,
      "pusher": 0.7,
      "escape": 0.8,
      "agility_core": 0.9,
      "spell_immunity": 0.8,
      "healing": 0.7
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/juggernaut.png"
  },
  {
    "id": "mirana",
    "name": "Mirana",
    "roles": [
      "Carry",
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0.6,
      "Mid": 0.3525,
      "Offlane": 0,
      "Soft Support": 0.8650000000000001,
      "Hard Support": 0.96
    },
    "tags": {
      "carry": 0.6,
      "support": 0.8,
      "escape": 0.85,
      "nuker": 0.75,
      "disabler": 0.7,
      "agility_core": 0.7,
      "global_mobility": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/mirana.png"
  },
  {
    "id": "morphling",
    "name": "Morphling",
    "roles": [
      "Carry",
      "Mid"
    ],
    "roleWeights": {
      "Carry": 0.95,
      "Mid": 1,
      "Offlane": 0.16000000000000003,
      "Soft Support": 0.255,
      "Hard Support": 0
    },
    "tags": {
      "High_Health_Regen": 1,
      "Healing_Dependency": 1,
      "carry": 0.95,
      "escape": 0.9,
      "durable": 0.8,
      "nuker": 0.85,
      "disabler": 0.4,
      "agility_core": 0.95,
      "complexity": 1
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/morphling.png"
  },
  {
    "id": "shadow_fiend",
    "name": "Shadow Fiend",
    "roles": [
      "Carry",
      "Mid"
    ],
    "roleWeights": {
      "Carry": 0.85,
      "Mid": 0.95,
      "Offlane": 0,
      "Soft Support": 0.285,
      "Hard Support": 0
    },
    "tags": {
      "lane_bully": 0.9,
      "ranged": 1,
      "carry": 0.85,
      "nuker": 0.95,
      "agility_core": 0.85,
      "squishy_early": 0.8,
      "aoe_magic": 0.9,
      "physical_damage": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/shadow_fiend.png"
  },
  {
    "id": "phantom_lancer",
    "name": "Phantom Lancer",
    "roles": [
      "Carry"
    ],
    "roleWeights": {
      "Carry": 0.95,
      "Mid": 0,
      "Offlane": 0,
      "Soft Support": 0.15,
      "Hard Support": 0
    },
    "tags": {
      "carry": 0.95,
      "escape": 0.85,
      "pusher": 0.7,
      "nuker": 0.5,
      "illusioner": 1,
      "agility_core": 0.9,
      "mana_dependent": 0.7
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/phantom_lancer.png"
  },
  {
    "id": "puck",
    "name": "Puck",
    "roles": [
      "Mid",
      "Offlane",
      "Soft Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 1,
      "Offlane": 0.7200000000000001,
      "Soft Support": 0.795,
      "Hard Support": 0
    },
    "tags": {
      "initiator": 0.9,
      "disabler": 0.8,
      "escape": 1,
      "nuker": 0.85,
      "mana_dependent": 0.8,
      "mobility": 1
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/puck.png"
  },
  {
    "id": "pudge",
    "name": "Pudge",
    "roles": [
      "Mid",
      "Soft Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0.6,
      "Offlane": 0.2,
      "Soft Support": 0.9,
      "Hard Support": 0
    },
    "tags": {
      "pierces_bkb": 1,
      "lane_strength": 3,
      "weak_laner": 1,
      "melee": 1,
      "disabler": 0.85,
      "initiator": 0.9,
      "durable": 0.95,
      "nuker": 0.7,
      "tuff": 0.9,
      "catch": 1,
      "pure_damage": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/pudge.png"
  },
  {
    "id": "razor",
    "name": "Razor",
    "roles": [
      "Carry",
      "Mid"
    ],
    "roleWeights": {
      "Carry": 0.85,
      "Mid": 0.6,
      "Offlane": 0.16000000000000003,
      "Soft Support": 0.18,
      "Hard Support": 0
    },
    "tags": {
      "offensive_dispel": 1,
      "lane_strength": 9,
      "carry": 0.85,
      "durable": 0.8,
      "nuker": 0.6,
      "pusher": 0.6,
      "agility_core": 0.8,
      "anti_carry": 0.95
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/razor.png"
  },
  {
    "id": "sand_king",
    "name": "Sand King",
    "roles": [
      "Offlane",
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0,
      "Offlane": 0.7200000000000001,
      "Soft Support": 1,
      "Hard Support": 0.72
    },
    "tags": {
      "aoe_def": 4,
      "lane_strength": 6,
      "melee": 1,
      "initiator": 0.9,
      "disabler": 0.85,
      "support": 0.6,
      "nuker": 0.9,
      "escape": 0.8,
      "aoe_magic": 0.95
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/sand_king.png"
  },
  {
    "id": "storm_spirit",
    "name": "Storm Spirit",
    "roles": [
      "Mid",
      "Soft Support"
    ],
    "roleWeights": {
      "Carry": 0.1,
      "Mid": 1,
      "Offlane": 0.15200000000000002,
      "Soft Support": 0.8099999999999999,
      "Hard Support": 0
    },
    "tags": {
      "carry": 0.85,
      "escape": 0.95,
      "nuker": 0.8,
      "initiator": 0.95,
      "disabler": 0.6,
      "mana_dependent": 1,
      "mobility": 1
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/storm_spirit.png"
  },
  {
    "id": "sven",
    "name": "Sven",
    "roles": [
      "Carry",
      "Soft Support"
    ],
    "roleWeights": {
      "Carry": 0.9,
      "Mid": 0,
      "Offlane": 0.43200000000000005,
      "Soft Support": 0.6,
      "Hard Support": 0
    },
    "tags": {
      "carry": 0.9,
      "disabler": 0.7,
      "initiator": 0.7,
      "durable": 0.8,
      "nuker": 0.6,
      "tuff": 0.8,
      "burst": 0.95,
      "cleave": 1
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/sven.png"
  },
  {
    "id": "tiny",
    "name": "Tiny",
    "roles": [
      "Carry",
      "Mid",
      "Soft Support"
    ],
    "roleWeights": {
      "Carry": 0.8,
      "Mid": 0.9,
      "Offlane": 0.458,
      "Soft Support": 0.75,
      "Hard Support": 0
    },
    "tags": {
      "carry": 0.8,
      "nuker": 0.9,
      "pusher": 0.85,
      "initiator": 0.8,
      "durable": 0.8,
      "disabler": 0.75,
      "tuff": 0.85,
      "burst": 0.95
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tiny.png"
  },
  {
    "id": "vengeful_spirit",
    "name": "Vengeful Spirit",
    "roles": [
      "Offlane",
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0.255,
      "Offlane": 0.6400000000000001,
      "Soft Support": 1,
      "Hard Support": 1
    },
    "tags": {
      "support": 0.9,
      "initiator": 0.8,
      "disabler": 0.85,
      "nuker": 0.6,
      "escape": 0.5,
      "agility_core": 0.5,
      "save": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/vengeful_spirit.png"
  },
  {
    "id": "windranger",
    "name": "Windranger",
    "roles": [
      "Carry",
      "Mid",
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0.8,
      "Mid": 1,
      "Offlane": 0,
      "Soft Support": 0.7999999999999999,
      "Hard Support": 0.84
    },
    "tags": {
      "dispellable_buff": 1,
      "lane_strength": 7,
      "carry": 0.8,
      "support": 0.7,
      "disabler": 0.8,
      "escape": 0.85,
      "nuker": 0.8,
      "mobility": 0.8,
      "physical_damage": 0.85
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/windranger.png"
  },
  {
    "id": "zeus",
    "name": "Zeus",
    "roles": [
      "Carry",
      "Mid"
    ],
    "roleWeights": {
      "Carry": 0.6,
      "Mid": 1,
      "Offlane": 0,
      "Soft Support": 0.3,
      "Hard Support": 0
    },
    "tags": {
      "nuker": 1,
      "carry": 0.6,
      "mana_dependent": 0.9,
      "global_presence": 1,
      "magic_damage": 1
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/zeus.png"
  },
  {
    "id": "kunkka",
    "name": "Kunkka",
    "roles": [
      "Carry",
      "Mid",
      "Offlane",
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0.75,
      "Mid": 0.75,
      "Offlane": 1,
      "Soft Support": 1,
      "Hard Support": 0.72
    },
    "tags": {
      "carry": 0.75,
      "support": 0.6,
      "disabler": 0.8,
      "initiator": 0.8,
      "durable": 0.8,
      "nuker": 0.75,
      "tuff": 0.8,
      "aoe_damage": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/kunkka.png"
  },
  {
    "id": "lina",
    "name": "Lina",
    "roles": [
      "Carry",
      "Mid",
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0.9,
      "Mid": 0.95,
      "Offlane": 0,
      "Soft Support": 0.845,
      "Hard Support": 0.84
    },
    "tags": {
      "lane_bully": 0.8,
      "ranged": 1,
      "support": 0.7,
      "carry": 0.9,
      "nuker": 0.95,
      "disabler": 0.7,
      "mana_dependent": 0.8,
      "attack_speed": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lina.png"
  },
  {
    "id": "lion",
    "name": "Lion",
    "roles": [
      "Offlane",
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0.24,
      "Offlane": 0.5599999999999999,
      "Soft Support": 1,
      "Hard Support": 1
    },
    "tags": {
      "support": 0.95,
      "disabler": 1,
      "nuker": 0.8,
      "initiator": 0.7,
      "mana_dependent": 0.6,
      "single_target_spell": 1,
      "squishy_support": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lion.png"
  },
  {
    "id": "shadow_shaman",
    "name": "Shadow Shaman",
    "roles": [
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0.21,
      "Offlane": 0.48,
      "Soft Support": 1,
      "Hard Support": 1
    },
    "tags": {
      "support": 0.95,
      "pusher": 0.9,
      "disabler": 1,
      "nuker": 0.7,
      "initiator": 0.6,
      "mana_dependent": 0.7,
      "squishy_support": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/shadow_shaman.png"
  },
  {
    "id": "slardar",
    "name": "Slardar",
    "roles": [
      "Offlane"
    ],
    "roleWeights": {
      "Carry": 0.4,
      "Mid": 0,
      "Offlane": 0.9,
      "Soft Support": 0.54,
      "Hard Support": 0
    },
    "tags": {
      "melee": 1,
      "carry": 0.7,
      "durable": 0.8,
      "initiator": 0.9,
      "disabler": 0.85,
      "escape": 0.7,
      "tuff": 0.8,
      "armor_corruption": 1
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/slardar.png"
  },
  {
    "id": "tidehunter",
    "name": "Tidehunter",
    "roles": [
      "Offlane",
      "Soft Support"
    ],
    "roleWeights": {
      "Carry": 0.4,
      "Mid": 0,
      "Offlane": 1,
      "Soft Support": 0.78,
      "Hard Support": 0
    },
    "tags": {
      "High_Armor_Physical": 1,
      "Passive_Abilities_Core": 1,
      "initiator": 1,
      "durable": 0.95,
      "disabler": 0.9,
      "nuker": 0.6,
      "carry": 0.4,
      "tuff": 0.9,
      "aoe_stun": 1
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tidehunter.png"
  },
  {
    "id": "witch_doctor",
    "name": "Witch Doctor",
    "roles": [
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0.255,
      "Offlane": 0,
      "Soft Support": 0.9750000000000001,
      "Hard Support": 1
    },
    "tags": {
      "support": 0.9,
      "nuker": 0.85,
      "disabler": 0.8,
      "mana_dependent": 0.7,
      "healing": 0.8,
      "summoning": 0.8,
      "squishy_support": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/witch_doctor.png"
  },
  {
    "id": "lich",
    "name": "Lich",
    "roles": [
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0.24,
      "Offlane": 0,
      "Soft Support": 0.9600000000000001,
      "Hard Support": 1
    },
    "tags": {
      "support": 0.9,
      "nuker": 0.8,
      "mana_dependent": 0.7,
      "armor": 0.8,
      "teamfight": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lich.png"
  },
  {
    "id": "riki",
    "name": "Riki",
    "roles": [
      "Carry"
    ],
    "roleWeights": {
      "Carry": 0.8,
      "Mid": 0.45,
      "Offlane": 0,
      "Soft Support": 0,
      "Hard Support": 0
    },
    "tags": {
      "Save_In_Invis": 1,
      "Inherent_Evasion": 1,
      "melee": 1,
      "carry": 0.8,
      "escape": 0.9,
      "disabler": 0.6,
      "agility_core": 0.85,
      "invisibility": 1,
      "mobility": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/riki.png"
  },
  {
    "id": "enigma",
    "name": "Enigma",
    "roles": [
      "Offlane",
      "Soft Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0,
      "Offlane": 0.8,
      "Soft Support": 0.6,
      "Hard Support": 0
    },
    "tags": {
      "farm_weight": 3,
      "lane_strength": 5,
      "pierces_bkb": 1,
      "disabler": 0.95,
      "initiator": 1,
      "pusher": 0.8,
      "teamfight": 1,
      "jungler": 0.9,
      "pure_damage": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/enigma.png"
  },
  {
    "id": "tinker",
    "name": "Tinker",
    "roles": [
      "Carry",
      "Mid"
    ],
    "roleWeights": {
      "Carry": 0.85,
      "Mid": 1,
      "Offlane": 0,
      "Soft Support": 0.27,
      "Hard Support": 0
    },
    "tags": {
      "carry": 0.85,
      "nuker": 0.9,
      "pusher": 0.95,
      "mobility": 1,
      "caster": 1,
      "mana_dependent": 0.9,
      "global_mobility": 1
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tinker.png"
  },
  {
    "id": "sniper",
    "name": "Sniper",
    "roles": [
      "Carry",
      "Mid"
    ],
    "roleWeights": {
      "Carry": 0.9,
      "Mid": 0.7,
      "Offlane": 0,
      "Soft Support": 0.21,
      "Hard Support": 0
    },
    "tags": {
      "harass_heavy": 1,
      "lane_strength": 8,
      "farm_weight": 4,
      "lane_bully": 0.9,
      "ranged": 1,
      "carry": 0.9,
      "nuker": 0.7,
      "agility_core": 0.85,
      "ranged_carry": 1,
      "squishy_early": 1
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/sniper.png"
  },
  {
    "id": "necrophos",
    "name": "Necrophos",
    "roles": [
      "Carry",
      "Mid"
    ],
    "roleWeights": {
      "Carry": 0.8,
      "Mid": 0.85,
      "Offlane": 0.16000000000000003,
      "Soft Support": 0.255,
      "Hard Support": 0
    },
    "tags": {
      "High_Health_Regen": 1,
      "Healing_Dependency": 1,
      "dispellable_buff": 1,
      "lane_strength": 8,
      "lane_bully": 0.8,
      "ranged": 1,
      "sustain": 1,
      "carry": 0.8,
      "nuker": 0.85,
      "durable": 0.8,
      "disabler": 0.5,
      "mana_dependent": 0.7,
      "healing": 0.8,
      "summoning": 0.8,
      "anti_tank": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/necrophos.png"
  },
  {
    "id": "warlock",
    "name": "Warlock",
    "roles": [
      "Offlane",
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0,
      "Offlane": 0.68,
      "Soft Support": 1,
      "Hard Support": 1
    },
    "tags": {
      "support": 0.9,
      "initiator": 0.85,
      "disabler": 0.8,
      "mana_dependent": 0.8,
      "teamfight": 0.9,
      "healing": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/warlock.png"
  },
  {
    "id": "beastmaster",
    "name": "Beastmaster",
    "roles": [
      "Offlane",
      "Soft Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0.5,
      "Offlane": 1,
      "Soft Support": 0.6900000000000001,
      "Hard Support": 0
    },
    "tags": {
      "pierces_bkb": 1,
      "lane_strength": 8,
      "push_tempo": 4,
      "initiator": 0.9,
      "disabler": 0.95,
      "durable": 0.8,
      "nuker": 0.5,
      "pusher": 0.9,
      "vision": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/beastmaster.png"
  },
  {
    "id": "queen_of_pain",
    "name": "Queen of Pain",
    "roles": [
      "Carry",
      "Mid"
    ],
    "roleWeights": {
      "Carry": 0.8,
      "Mid": 1,
      "Offlane": 0,
      "Soft Support": 0.27,
      "Hard Support": 0
    },
    "tags": {
      "carry": 0.8,
      "nuker": 0.9,
      "escape": 0.9,
      "mana_dependent": 0.7,
      "mobility": 0.9,
      "aoe_magic": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/queen_of_pain.png"
  },
  {
    "id": "venomancer",
    "name": "Venomancer",
    "roles": [
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0.24,
      "Offlane": 0.48,
      "Soft Support": 1,
      "Hard Support": 0.96
    },
    "tags": {
      "support": 0.8,
      "nuker": 0.8,
      "initiator": 0.6,
      "pusher": 0.85,
      "disabler": 0.7,
      "damage_over_time": 1,
      "vision": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/venomancer.png"
  },
  {
    "id": "faceless_void",
    "name": "Faceless Void",
    "roles": [
      "Carry"
    ],
    "roleWeights": {
      "Carry": 0.95,
      "Mid": 0.425,
      "Offlane": 0.284,
      "Soft Support": 0.54,
      "Hard Support": 0
    },
    "tags": {
      "Passive_Abilities_Core": 1,
      "carry": 0.95,
      "initiator": 0.9,
      "disabler": 0.9,
      "escape": 0.85,
      "durable": 0.7,
      "agility_core": 0.9,
      "late_game": 1
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/faceless_void.png"
  },
  {
    "id": "wraith_king",
    "name": "Wraith King",
    "roles": [
      "Carry",
      "Soft Support"
    ],
    "roleWeights": {
      "Carry": 0.9,
      "Mid": 0,
      "Offlane": 0.462,
      "Soft Support": 0.6599999999999999,
      "Hard Support": 0.36
    },
    "tags": {
      "carry": 0.9,
      "support": 0.3,
      "durable": 0.9,
      "disabler": 0.6,
      "initiator": 0.7,
      "tuff": 0.85,
      "survivability": 1
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/wraith_king.png"
  },
  {
    "id": "death_prophet",
    "name": "Death Prophet",
    "roles": [
      "Carry",
      "Mid"
    ],
    "roleWeights": {
      "Carry": 0.8,
      "Mid": 0.8,
      "Offlane": 0.13999999999999999,
      "Soft Support": 0.24,
      "Hard Support": 0
    },
    "tags": {
      "carry": 0.8,
      "pusher": 0.95,
      "nuker": 0.8,
      "disabler": 0.6,
      "durable": 0.7,
      "sustain": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/death_prophet.png"
  },
  {
    "id": "phantom_assassin",
    "name": "Phantom Assassin",
    "roles": [
      "Carry"
    ],
    "roleWeights": {
      "Carry": 0.95,
      "Mid": 0.35,
      "Offlane": 0,
      "Soft Support": 0,
      "Hard Support": 0
    },
    "tags": {
      "Inherent_Evasion": 1,
      "Physical_Burst": 1,
      "melee": 1,
      "passive_reliant": 1,
      "carry": 0.95,
      "escape": 0.7,
      "agility_core": 0.9,
      "burst": 1,
      "evasion": 1,
      "squishy_early": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/phantom_assassin.png"
  },
  {
    "id": "pugna",
    "name": "Pugna",
    "roles": [
      "Mid"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0.9,
      "Offlane": 0,
      "Soft Support": 0.27,
      "Hard Support": 0
    },
    "tags": {
      "dispellable_buff": 1,
      "lane_strength": 7,
      "nuker": 0.9,
      "pusher": 0.95,
      "mana_dependent": 0.8,
      "anti_magic": 0.8,
      "squishy_support": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/pugna.png"
  },
  {
    "id": "templar_assassin",
    "name": "Templar Assassin",
    "roles": [
      "Carry"
    ],
    "roleWeights": {
      "Carry": 0.9,
      "Mid": 0.3,
      "Offlane": 0,
      "Soft Support": 0,
      "Hard Support": 0
    },
    "tags": {
      "carry": 0.9,
      "escape": 0.6,
      "agility_core": 0.85,
      "burst": 0.9,
      "physical_shield": 0.9,
      "armor_corruption": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/templar_assassin.png"
  },
  {
    "id": "viper",
    "name": "Viper",
    "roles": [
      "Carry"
    ],
    "roleWeights": {
      "Carry": 0.8,
      "Mid": 0,
      "Offlane": 0.25,
      "Soft Support": 0.3,
      "Hard Support": 0
    },
    "tags": {
      "Passive_Abilities_Core": 1,
      "harass_heavy": 1,
      "lane_strength": 9,
      "lane_bully": 1,
      "ranged": 1,
      "carry": 0.8,
      "durable": 0.85,
      "initiator": 0.5,
      "disabler": 0.7,
      "agility_core": 0.7,
      "anti_tank": 0.9,
      "break": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/viper.png"
  },
  {
    "id": "luna",
    "name": "Luna",
    "roles": [
      "Carry",
      "Mid"
    ],
    "roleWeights": {
      "Carry": 0.9,
      "Mid": 0.7,
      "Offlane": 0,
      "Soft Support": 0.21,
      "Hard Support": 0
    },
    "tags": {
      "carry": 0.9,
      "nuker": 0.7,
      "pusher": 0.9,
      "agility_core": 0.9,
      "farming": 0.95,
      "aoe_damage": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/luna.png"
  },
  {
    "id": "dragon_knight",
    "name": "Dragon Knight",
    "roles": [
      "Carry",
      "Soft Support"
    ],
    "roleWeights": {
      "Carry": 0.8,
      "Mid": 0.5,
      "Offlane": 0.472,
      "Soft Support": 0.57,
      "Hard Support": 0
    },
    "tags": {
      "High_Armor_Physical": 1,
      "Passive_Armor_Regen_Gain": 1,
      "melee": 1,
      "passive_reliant": 0.8,
      "sustain": 0.8,
      "carry": 0.8,
      "pusher": 0.85,
      "durable": 0.9,
      "disabler": 0.7,
      "initiator": 0.7,
      "nuker": 0.5,
      "tuff": 0.9,
      "armor": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dragon_knight.png"
  },
  {
    "id": "dazzle",
    "name": "Dazzle",
    "roles": [
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0.18,
      "Offlane": 0,
      "Soft Support": 0.94,
      "Hard Support": 1
    },
    "tags": {
      "support": 0.95,
      "nuker": 0.6,
      "disabler": 0.6,
      "save": 1,
      "armor_corruption": 0.8,
      "healing": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dazzle.png"
  },
  {
    "id": "clockwerk",
    "name": "Clockwerk",
    "roles": [
      "Offlane",
      "Soft Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0,
      "Offlane": 1,
      "Soft Support": 0.8099999999999999,
      "Hard Support": 0
    },
    "tags": {
      "initiator": 1,
      "disabler": 0.9,
      "durable": 0.8,
      "nuker": 0.7,
      "tuff": 0.8,
      "catch": 1
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/clockwerk.png"
  },
  {
    "id": "leshrac",
    "name": "Leshrac",
    "roles": [
      "Carry",
      "Mid",
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0.85,
      "Mid": 0.95,
      "Offlane": 0,
      "Soft Support": 0.7649999999999999,
      "Hard Support": 0.72
    },
    "tags": {
      "push_tempo": 5,
      "farm_weight": 4,
      "lane_strength": 6,
      "carry": 0.85,
      "support": 0.6,
      "nuker": 0.95,
      "pusher": 0.95,
      "disabler": 0.7,
      "mana_dependent": 0.9,
      "aoe_magic": 1
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/leshrac.png"
  },
  {
    "id": "natures_prophet",
    "name": "Nature's Prophet",
    "roles": [
      "Carry",
      "Mid"
    ],
    "roleWeights": {
      "Carry": 0.8,
      "Mid": 0.95,
      "Offlane": 0,
      "Soft Support": 0.18,
      "Hard Support": 0
    },
    "tags": {
      "carry": 0.8,
      "pusher": 1,
      "escape": 0.7,
      "nuker": 0.6,
      "global_mobility": 1,
      "farming": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/natures_prophet.png"
  },
  {
    "id": "lifestealer",
    "name": "Lifestealer",
    "roles": [
      "Carry"
    ],
    "roleWeights": {
      "Carry": 0.9,
      "Mid": 0,
      "Offlane": 0.1,
      "Soft Support": 0,
      "Hard Support": 0
    },
    "tags": {
      "debuff_immunity": 1,
      "farm_weight": 4,
      "lane_strength": 7,
      "melee": 1,
      "sustain": 1,
      "carry": 0.9,
      "durable": 0.85,
      "escape": 0.7,
      "disabler": 0.5,
      "tuff": 0.8,
      "spell_immunity": 0.9,
      "anti_tank": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lifestealer.png"
  },
  {
    "id": "dark_seer",
    "name": "Dark Seer",
    "roles": [
      "Offlane"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0.4,
      "Offlane": 0.6400000000000001,
      "Soft Support": 0.48,
      "Hard Support": 0
    },
    "tags": {
      "initiator": 0.8,
      "escape": 0.8,
      "disabler": 0.7,
      "mana_dependent": 0.7,
      "teamfight": 0.9,
      "farming": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dark_seer.png"
  },
  {
    "id": "clinkz",
    "name": "Clinkz",
    "roles": [
      "Carry"
    ],
    "roleWeights": {
      "Carry": 0.85,
      "Mid": 0.4,
      "Offlane": 0,
      "Soft Support": 0,
      "Hard Support": 0
    },
    "tags": {
      "carry": 0.85,
      "escape": 0.8,
      "pusher": 0.8,
      "agility_core": 0.85,
      "invisibility": 0.9,
      "burst": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/clinkz.png"
  },
  {
    "id": "omniknight",
    "name": "Omniknight",
    "roles": [
      "Offlane",
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0,
      "Offlane": 1,
      "Soft Support": 0.8300000000000001,
      "Hard Support": 1
    },
    "tags": {
      "support": 0.85,
      "durable": 0.8,
      "nuker": 0.5,
      "tuff": 0.7,
      "save": 0.9,
      "healing": 0.8,
      "summoning": 0.8,
      "physical_immunity": 1
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/omniknight.png"
  },
  {
    "id": "enchantress",
    "name": "Enchantress",
    "roles": [
      "Offlane",
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0,
      "Offlane": 0.6,
      "Soft Support": 0.6400000000000001,
      "Hard Support": 0.96
    },
    "tags": {
      "offensive_dispel": 1,
      "lane_strength": 9,
      "harass_heavy": 1,
      "lane_bully": 0.9,
      "passive_reliant": 0.8,
      "sustain": 0.8,
      "ranged": 1,
      "support": 0.8,
      "pusher": 0.7,
      "durable": 0.6,
      "disabler": 0.6,
      "mana_dependent": 0.7,
      "healing": 0.8,
      "summoning": 0.8,
      "anti_physical": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/enchantress.png"
  },
  {
    "id": "huskar",
    "name": "Huskar",
    "roles": [
      "Carry"
    ],
    "roleWeights": {
      "Carry": 0.85,
      "Mid": 0,
      "Offlane": 0.442,
      "Soft Support": 0.42,
      "Hard Support": 0
    },
    "tags": {
      "Passive_Abilities_Core": 1,
      "Healing_Dependency": 1,
      "High_Health_Regen": 1,
      "harass_heavy": 1,
      "lane_strength": 9,
      "lane_bully": 0.9,
      "ranged": 1,
      "passive_reliant": 0.9,
      "sustain": 1,
      "carry": 0.85,
      "durable": 0.8,
      "initiator": 0.7,
      "tuff": 0.85,
      "healing": 0.9,
      "anti_magic": 0.7
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/huskar.png"
  },
  {
    "id": "night_stalker",
    "name": "Night Stalker",
    "roles": [
      "Carry",
      "Offlane",
      "Soft Support"
    ],
    "roleWeights": {
      "Carry": 0.75,
      "Mid": 0,
      "Offlane": 1,
      "Soft Support": 0.72,
      "Hard Support": 0
    },
    "tags": {
      "melee": 1,
      "carry": 0.75,
      "initiator": 0.9,
      "durable": 0.8,
      "disabler": 0.7,
      "nuker": 0.6,
      "tuff": 0.8,
      "vision": 0.9,
      "mobility": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/night_stalker.png"
  },
  {
    "id": "broodmother",
    "name": "Broodmother",
    "roles": [
      "Carry",
      "Mid"
    ],
    "roleWeights": {
      "Carry": 0.85,
      "Mid": 1,
      "Offlane": 0,
      "Soft Support": 0.18,
      "Hard Support": 0
    },
    "tags": {
      "push_tempo": 5,
      "lane_strength": 8,
      "carry": 0.85,
      "pusher": 0.95,
      "escape": 0.8,
      "nuker": 0.6,
      "agility_core": 0.8,
      "farming": 0.9,
      "mobility": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/broodmother.png"
  },
  {
    "id": "bounty_hunter",
    "name": "Bounty Hunter",
    "roles": [
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0,
      "Offlane": 0,
      "Soft Support": 0.8500000000000001,
      "Hard Support": 0.96
    },
    "tags": {
      "Save_In_Invis": 1,
      "support": 0.8,
      "escape": 0.85,
      "nuker": 0.7,
      "agility_core": 0.7,
      "invisibility": 0.9,
      "economy": 1
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bounty_hunter.png"
  },
  {
    "id": "weaver",
    "name": "Weaver",
    "roles": [
      "Carry"
    ],
    "roleWeights": {
      "Carry": 0.85,
      "Mid": 0.475,
      "Offlane": 0,
      "Soft Support": 0,
      "Hard Support": 0
    },
    "tags": {
      "carry": 0.85,
      "escape": 0.95,
      "agility_core": 0.85,
      "mobility": 0.9,
      "survivability": 0.8,
      "squishy_early": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/weaver.png"
  },
  {
    "id": "jakiro",
    "name": "Jakiro",
    "roles": [
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0.24,
      "Offlane": 0,
      "Soft Support": 0.9600000000000001,
      "Hard Support": 1
    },
    "tags": {
      "support": 0.9,
      "nuker": 0.8,
      "pusher": 0.9,
      "disabler": 0.8,
      "mana_dependent": 0.7,
      "aoe_magic": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/jakiro.png"
  },
  {
    "id": "batrider",
    "name": "Batrider",
    "roles": [
      "Offlane",
      "Soft Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0.35,
      "Offlane": 0.8,
      "Soft Support": 0.6,
      "Hard Support": 0
    },
    "tags": {
      "pierces_bkb": 1,
      "lane_strength": 8,
      "initiator": 1,
      "disabler": 0.9,
      "escape": 0.7,
      "catch": 1,
      "mobility": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/batrider.png"
  },
  {
    "id": "chen",
    "name": "Chen",
    "roles": [
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0,
      "Offlane": 0,
      "Soft Support": 0.7200000000000001,
      "Hard Support": 1
    },
    "tags": {
      "support": 0.9,
      "pusher": 0.9,
      "mana_dependent": 0.7,
      "healing": 0.9,
      "domination": 1
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/chen.png"
  },
  {
    "id": "spectre",
    "name": "Spectre",
    "roles": [
      "Carry"
    ],
    "roleWeights": {
      "Carry": 0.95,
      "Mid": 0.35,
      "Offlane": 0.3400000000000001,
      "Soft Support": 0,
      "Hard Support": 0
    },
    "tags": {
      "farm_weight": 5,
      "lane_strength": 3,
      "dispellable_buff": 1,
      "melee": 1,
      "passive_reliant": 1,
      "carry": 0.95,
      "durable": 0.9,
      "escape": 0.7,
      "tuff": 0.8,
      "global_presence": 1,
      "late_game": 1,
      "agility_core": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/spectre.png"
  },
  {
    "id": "ancient_apparition",
    "name": "Ancient Apparition",
    "roles": [
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0.24,
      "Offlane": 0,
      "Soft Support": 0.9600000000000001,
      "Hard Support": 1
    },
    "tags": {
      "lane_strength": 5,
      "ranged": 1,
      "support": 0.9,
      "disabler": 0.7,
      "nuker": 0.8,
      "mana_dependent": 0.7,
      "anti_heal": 1,
      "global_presence": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ancient_apparition.png"
  },
  {
    "id": "doom",
    "name": "Doom",
    "roles": [
      "Carry",
      "Offlane",
      "Soft Support"
    ],
    "roleWeights": {
      "Carry": 0.75,
      "Mid": 0,
      "Offlane": 1,
      "Soft Support": 0.69,
      "Hard Support": 0
    },
    "tags": {
      "melee": 1,
      "anti_heal": 0.8,
      "carry": 0.75,
      "disabler": 1,
      "initiator": 0.8,
      "durable": 0.9,
      "nuker": 0.7,
      "tuff": 0.85,
      "farming": 0.9,
      "anti_save": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/doom.png"
  },
  {
    "id": "ursa",
    "name": "Ursa",
    "roles": [
      "Carry"
    ],
    "roleWeights": {
      "Carry": 0.9,
      "Mid": 0,
      "Offlane": 0.16000000000000003,
      "Soft Support": 0,
      "Hard Support": 0
    },
    "tags": {
      "carry": 0.9,
      "durable": 0.8,
      "disabler": 0.6,
      "agility_core": 0.85,
      "burst": 0.9,
      "anti_tank": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ursa.png"
  },
  {
    "id": "spirit_breaker",
    "name": "Spirit Breaker",
    "roles": [
      "Offlane",
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0.09,
      "Offlane": 1,
      "Soft Support": 1,
      "Hard Support": 0.96
    },
    "tags": {
      "support": 0.8,
      "initiator": 0.95,
      "disabler": 0.9,
      "durable": 0.8,
      "escape": 0.6,
      "tuff": 0.8,
      "global_mobility": 1,
      "catch": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/spirit_breaker.png"
  },
  {
    "id": "gyrocopter",
    "name": "Gyrocopter",
    "roles": [
      "Carry",
      "Mid"
    ],
    "roleWeights": {
      "Carry": 0.85,
      "Mid": 0.8,
      "Offlane": 0,
      "Soft Support": 0.24,
      "Hard Support": 0
    },
    "tags": {
      "carry": 0.85,
      "nuker": 0.8,
      "disabler": 0.6,
      "agility_core": 0.85,
      "aoe_damage": 0.9,
      "teamfight": 0.85
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/gyrocopter.png"
  },
  {
    "id": "alchemist",
    "name": "Alchemist",
    "roles": [
      "Carry",
      "Mid",
      "Soft Support"
    ],
    "roleWeights": {
      "Carry": 0.9,
      "Mid": 0.6,
      "Offlane": 0.426,
      "Soft Support": 0.8600000000000001,
      "Hard Support": 0.48
    },
    "tags": {
      "farm_weight": 5,
      "lane_strength": 4,
      "push_tempo": 3,
      "melee": 1,
      "healing": 1,
      "sustain": 1,
      "carry": 0.9,
      "support": 0.4,
      "durable": 0.85,
      "disabler": 0.7,
      "initiator": 0.6,
      "nuker": 0.6,
      "tuff": 0.8,
      "farming": 1,
      "economy": 1
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/alchemist.png"
  },
  {
    "id": "invoker",
    "name": "Invoker",
    "roles": [
      "Carry",
      "Mid"
    ],
    "roleWeights": {
      "Carry": 0.8,
      "Mid": 1,
      "Offlane": 0,
      "Soft Support": 0.27,
      "Hard Support": 0
    },
    "tags": {
      "carry": 0.8,
      "nuker": 0.9,
      "disabler": 0.85,
      "escape": 0.7,
      "pusher": 0.7,
      "complexity": 1,
      "versatility": 1,
      "caster": 1,
      "mana_dependent": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/invoker.png"
  },
  {
    "id": "silencer",
    "name": "Silencer",
    "roles": [
      "Carry",
      "Offlane",
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0.7,
      "Mid": 0.22499999999999998,
      "Offlane": 0.5599999999999999,
      "Soft Support": 1,
      "Hard Support": 1
    },
    "tags": {
      "carry": 0.7,
      "support": 0.85,
      "disabler": 0.9,
      "initiator": 0.7,
      "nuker": 0.75,
      "mana_dependent": 0.7,
      "silence": 1,
      "global_presence": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/silencer.png"
  },
  {
    "id": "outworld_destroyer",
    "name": "Outworld Destroyer",
    "roles": [
      "Carry",
      "Mid"
    ],
    "roleWeights": {
      "Carry": 0.85,
      "Mid": 0.9,
      "Offlane": 0,
      "Soft Support": 0.27,
      "Hard Support": 0.35
    },
    "tags": {
      "lane_bully": 1,
      "ranged": 1,
      "carry": 0.85,
      "nuker": 0.9,
      "disabler": 0.8,
      "mana_dependent": 0.8,
      "pure_damage": 0.9,
      "save": 0.7
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/outworld_destroyer.png"
  },
  {
    "id": "lycan",
    "name": "Lycan",
    "roles": [
      "Carry"
    ],
    "roleWeights": {
      "Carry": 0.85,
      "Mid": 0.4,
      "Offlane": 0.30000000000000004,
      "Soft Support": 0,
      "Hard Support": 0
    },
    "tags": {
      "push_tempo": 5,
      "lane_strength": 6,
      "carry": 0.85,
      "pusher": 1,
      "durable": 0.8,
      "escape": 0.8,
      "tuff": 0.7,
      "mobility": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lycan.png"
  },
  {
    "id": "brewmaster",
    "name": "Brewmaster",
    "roles": [
      "Carry",
      "Mid",
      "Offlane",
      "Soft Support"
    ],
    "roleWeights": {
      "Carry": 0.7,
      "Mid": 0.6,
      "Offlane": 1,
      "Soft Support": 0.72,
      "Hard Support": 0
    },
    "tags": {
      "offensive_dispel": 1,
      "lane_strength": 6,
      "carry": 0.7,
      "initiator": 0.9,
      "durable": 0.85,
      "disabler": 0.8,
      "nuker": 0.6,
      "teamfight": 0.95,
      "evasion": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/brewmaster.png"
  },
  {
    "id": "shadow_demon",
    "name": "Shadow Demon",
    "roles": [
      "Offlane",
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0.21,
      "Offlane": 0.5599999999999999,
      "Soft Support": 1,
      "Hard Support": 1
    },
    "tags": {
      "pierces_bkb": 1,
      "offensive_dispel": 1,
      "lane_strength": 6,
      "ranged": 1,
      "break": 0.8,
      "support": 0.9,
      "disabler": 0.8,
      "initiator": 0.7,
      "nuker": 0.7,
      "mana_dependent": 0.7,
      "save": 0.9,
      "illusioner": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/shadow_demon.png"
  },
  {
    "id": "lone_druid",
    "name": "Lone Druid",
    "roles": [
      "Carry"
    ],
    "roleWeights": {
      "Carry": 0.9,
      "Mid": 0,
      "Offlane": 0.16000000000000003,
      "Soft Support": 0,
      "Hard Support": 0
    },
    "tags": {
      "carry": 0.9,
      "pusher": 0.9,
      "durable": 0.8,
      "agility_core": 0.85,
      "summoning": 1,
      "farming": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lone_druid.png"
  },
  {
    "id": "chaos_knight",
    "name": "Chaos Knight",
    "roles": [
      "Carry",
      "Offlane"
    ],
    "roleWeights": {
      "Carry": 0.9,
      "Mid": 0,
      "Offlane": 0.6,
      "Soft Support": 0.48,
      "Hard Support": 0
    },
    "tags": {
      "sustain": 0.7,
      "melee": 1,
      "carry": 0.9,
      "disabler": 0.8,
      "durable": 0.85,
      "pusher": 0.7,
      "initiator": 0.8,
      "tuff": 0.85,
      "illusioner": 0.9,
      "burst": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/chaos_knight.png"
  },
  {
    "id": "meepo",
    "name": "Meepo",
    "roles": [
      "Carry",
      "Mid",
      "Soft Support"
    ],
    "roleWeights": {
      "Carry": 0.95,
      "Mid": 1,
      "Offlane": 0.11199999999999999,
      "Soft Support": 0.6599999999999999,
      "Hard Support": 0
    },
    "tags": {
      "carry": 0.95,
      "escape": 0.7,
      "nuker": 0.8,
      "disabler": 0.8,
      "initiator": 0.7,
      "pusher": 0.9,
      "micro": 1,
      "illusioner": 0.3,
      "farming": 1,
      "agility_core": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/meepo.png"
  },
  {
    "id": "treant_protector",
    "name": "Treant Protector",
    "roles": [
      "Offlane",
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0.105,
      "Offlane": 1,
      "Soft Support": 1,
      "Hard Support": 1
    },
    "tags": {
      "Save_In_Invis": 1,
      "support": 0.9,
      "initiator": 0.8,
      "durable": 0.8,
      "disabler": 0.85,
      "escape": 0.7,
      "tuff": 0.8,
      "healing": 0.9,
      "vision": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/treant_protector.png"
  },
  {
    "id": "ogre_magi",
    "name": "Ogre Magi",
    "roles": [
      "Offlane",
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0,
      "Offlane": 1,
      "Soft Support": 1,
      "Hard Support": 1
    },
    "tags": {
      "support": 0.9,
      "nuker": 0.8,
      "disabler": 0.8,
      "durable": 0.85,
      "initiator": 0.6,
      "tuff": 0.85,
      "buff": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ogre_magi.png"
  },
  {
    "id": "undying",
    "name": "Undying",
    "roles": [
      "Offlane",
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0.21,
      "Offlane": 1,
      "Soft Support": 0.93,
      "Hard Support": 1
    },
    "tags": {
      "support": 0.9,
      "durable": 0.85,
      "disabler": 0.5,
      "nuker": 0.7,
      "tuff": 0.9,
      "teamfight": 0.9,
      "healing": 0.7
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/undying.png"
  },
  {
    "id": "rubick",
    "name": "Rubick",
    "roles": [
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0.345,
      "Offlane": 0,
      "Soft Support": 0.93,
      "Hard Support": 1
    },
    "tags": {
      "support": 0.9,
      "disabler": 0.8,
      "nuker": 0.7,
      "mana_dependent": 0.8,
      "versatility": 1,
      "caster": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/rubick.png"
  },
  {
    "id": "disruptor",
    "name": "Disruptor",
    "roles": [
      "Offlane",
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0.21,
      "Offlane": 0.5599999999999999,
      "Soft Support": 1,
      "Hard Support": 1
    },
    "tags": {
      "lane_strength": 7,
      "support": 0.95,
      "disabler": 0.9,
      "nuker": 0.7,
      "initiator": 0.7,
      "mana_dependent": 0.8,
      "catch": 1,
      "teamfight": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/disruptor.png"
  },
  {
    "id": "nyx_assassin",
    "name": "Nyx Assassin",
    "roles": [
      "Offlane",
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0.375,
      "Offlane": 0.7200000000000001,
      "Soft Support": 1,
      "Hard Support": 0.96
    },
    "tags": {
      "support": 0.8,
      "disabler": 0.9,
      "nuker": 0.85,
      "initiator": 0.9,
      "escape": 0.8,
      "invisibility": 0.9,
      "anti_magic": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/nyx_assassin.png"
  },
  {
    "id": "naga_siren",
    "name": "Naga Siren",
    "roles": [
      "Carry",
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0.9,
      "Mid": 0.4,
      "Offlane": 0.11199999999999999,
      "Soft Support": 0.8200000000000001,
      "Hard Support": 0.6
    },
    "tags": {
      "carry": 0.9,
      "support": 0.5,
      "pusher": 0.9,
      "disabler": 0.8,
      "initiator": 0.7,
      "escape": 0.8,
      "agility_core": 0.9,
      "illusioner": 1,
      "farming": 0.95
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/naga_siren.png"
  },
  {
    "id": "keeper_of_the_light",
    "name": "Keeper of the Light",
    "roles": [
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0.24,
      "Offlane": 0,
      "Soft Support": 0.9600000000000001,
      "Hard Support": 1
    },
    "tags": {
      "support": 0.9,
      "nuker": 0.8,
      "disabler": 0.6,
      "mana_dependent": 0.7,
      "mobility": 0.9,
      "mana_restore": 1
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/keeper_of_the_light.png"
  },
  {
    "id": "io",
    "name": "Io",
    "roles": [
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0.285,
      "Offlane": 0,
      "Soft Support": 0.98,
      "Hard Support": 1
    },
    "tags": {
      "support": 1,
      "escape": 0.7,
      "nuker": 0.6,
      "tether": 1,
      "buffer": 1,
      "mobility": 0.7,
      "healing": 0.9,
      "global_mobility": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/io.png"
  },
  {
    "id": "visage",
    "name": "Visage",
    "roles": [
      "Carry",
      "Offlane",
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0.7,
      "Mid": 0.24,
      "Offlane": 0.7,
      "Soft Support": 0.8800000000000001,
      "Hard Support": 0.96
    },
    "tags": {
      "support": 0.8,
      "carry": 0.7,
      "nuker": 0.8,
      "durable": 0.7,
      "disabler": 0.7,
      "pusher": 0.85,
      "summoning": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/visage.png"
  },
  {
    "id": "slark",
    "name": "Slark",
    "roles": [
      "Carry",
      "Mid"
    ],
    "roleWeights": {
      "Carry": 0.9,
      "Mid": 1,
      "Offlane": 0,
      "Soft Support": 0.18,
      "Hard Support": 0
    },
    "tags": {
      "Save_In_Invis": 1,
      "melee": 1,
      "passive_reliant": 0.8,
      "sustain": 0.9,
      "carry": 0.9,
      "escape": 0.95,
      "disabler": 0.7,
      "nuker": 0.6,
      "agility_core": 0.9,
      "mobility": 0.9,
      "dispel": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/slark.png"
  },
  {
    "id": "medusa",
    "name": "Medusa",
    "roles": [
      "Carry"
    ],
    "roleWeights": {
      "Carry": 0.95,
      "Mid": 0,
      "Offlane": 0.19,
      "Soft Support": 0,
      "Hard Support": 0
    },
    "tags": {
      "carry": 0.95,
      "disabler": 0.6,
      "durable": 0.95,
      "agility_core": 0.9,
      "farming": 0.95,
      "tank": 0.9,
      "mana_dependent": 1
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/medusa.png"
  },
  {
    "id": "troll_warlord",
    "name": "Troll Warlord",
    "roles": [
      "Carry"
    ],
    "roleWeights": {
      "Carry": 0.9,
      "Mid": 0,
      "Offlane": 0.16000000000000003,
      "Soft Support": 0,
      "Hard Support": 0
    },
    "tags": {
      "carry": 0.9,
      "pusher": 0.8,
      "disabler": 0.7,
      "durable": 0.8,
      "agility_core": 0.9,
      "survivability": 0.85,
      "attack_speed": 1
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/troll_warlord.png"
  },
  {
    "id": "centaur_warrunner",
    "name": "Centaur Warrunner",
    "roles": [
      "Offlane",
      "Soft Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0,
      "Offlane": 1,
      "Soft Support": 0.75,
      "Hard Support": 0
    },
    "tags": {
      "initiator": 0.9,
      "durable": 0.95,
      "disabler": 0.85,
      "nuker": 0.7,
      "escape": 0.7,
      "tuff": 0.9,
      "tank": 0.9,
      "global_mobility": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/centaur_warrunner.png"
  },
  {
    "id": "magnus",
    "name": "Magnus",
    "roles": [
      "Mid",
      "Offlane",
      "Soft Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0.95,
      "Offlane": 0.8,
      "Soft Support": 0.78,
      "Hard Support": 0
    },
    "tags": {
      "pierces_bkb": 1,
      "lane_strength": 6,
      "melee": 1,
      "initiator": 1,
      "disabler": 0.9,
      "nuker": 0.6,
      "escape": 0.7,
      "buff": 0.9,
      "cleave": 0.9,
      "catch": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/magnus.png"
  },
  {
    "id": "timbersaw",
    "name": "Timbersaw",
    "roles": [
      "Mid",
      "Offlane"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 1,
      "Offlane": 1,
      "Soft Support": 0.255,
      "Hard Support": 0
    },
    "tags": {
      "Passive_Armor_Regen_Gain": 1,
      "High_Health_Regen": 1,
      "melee": 1,
      "passive_reliant": 0.9,
      "sustain": 0.8,
      "nuker": 0.85,
      "durable": 0.9,
      "escape": 0.85,
      "tuff": 0.85,
      "pure_damage": 0.9,
      "tank": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/timbersaw.png"
  },
  {
    "id": "bristleback",
    "name": "Bristleback",
    "roles": [
      "Carry",
      "Soft Support"
    ],
    "roleWeights": {
      "Carry": 0.85,
      "Mid": 0,
      "Offlane": 0.502,
      "Soft Support": 0.63,
      "Hard Support": 0
    },
    "tags": {
      "Directional_Passive_Damage_Reduction": 1,
      "High_Health_Regen": 1,
      "melee": 1,
      "sustain": 0.8,
      "passive_reliant": 1,
      "carry": 0.85,
      "durable": 0.95,
      "initiator": 0.7,
      "nuker": 0.7,
      "tuff": 1,
      "tank": 0.95,
      "brawler": 0.9,
      "physical_damage": 0.8,
      "passive_tank": 1
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bristleback.png"
  },
  {
    "id": "tusk",
    "name": "Tusk",
    "roles": [
      "Offlane",
      "Soft Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0,
      "Offlane": 1,
      "Soft Support": 0.72,
      "Hard Support": 0.4
    },
    "tags": {
      "melee": 1,
      "initiator": 0.85,
      "disabler": 0.85,
      "nuker": 0.7,
      "tuff": 0.7,
      "save": 0.8,
      "catch": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tusk.png"
  },
  {
    "id": "skywrath_mage",
    "name": "Skywrath Mage",
    "roles": [
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0.285,
      "Offlane": 0,
      "Soft Support": 1,
      "Hard Support": 1
    },
    "tags": {
      "support": 0.9,
      "nuker": 0.95,
      "disabler": 0.8,
      "mana_dependent": 0.9,
      "silence": 0.9,
      "squishy_support": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/skywrath_mage.png"
  },
  {
    "id": "abaddon",
    "name": "Abaddon",
    "roles": [
      "Carry",
      "Offlane",
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0.7,
      "Mid": 0,
      "Offlane": 0.9,
      "Soft Support": 0.6400000000000001,
      "Hard Support": 1
    },
    "tags": {
      "support": 0.8,
      "carry": 0.7,
      "durable": 0.9,
      "save": 0.9,
      "dispel": 1,
      "healing": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/abaddon.png"
  },
  {
    "id": "elder_titan",
    "name": "Elder Titan",
    "roles": [
      "Offlane",
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0.21,
      "Offlane": 1,
      "Soft Support": 1,
      "Hard Support": 0.96
    },
    "tags": {
      "support": 0.8,
      "initiator": 0.8,
      "disabler": 0.8,
      "nuker": 0.7,
      "durable": 0.7,
      "tuff": 0.7,
      "anti_tank": 0.9,
      "teamfight": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/elder_titan.png"
  },
  {
    "id": "legion_commander",
    "name": "Legion Commander",
    "roles": [
      "Carry",
      "Soft Support"
    ],
    "roleWeights": {
      "Carry": 0.8,
      "Mid": 0,
      "Offlane": 0.454,
      "Soft Support": 0.72,
      "Hard Support": 0
    },
    "tags": {
      "pierces_bkb": 1,
      "lane_strength": 7,
      "dispellable_buff": 1,
      "sustain": 0.8,
      "melee": 1,
      "carry": 0.8,
      "disabler": 0.9,
      "initiator": 0.9,
      "durable": 0.8,
      "nuker": 0.6,
      "tuff": 0.75,
      "catch": 1,
      "dispel": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/legion_commander.png"
  },
  {
    "id": "techies",
    "name": "Techies",
    "roles": [
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0.27,
      "Offlane": 0,
      "Soft Support": 0.9100000000000001,
      "Hard Support": 0.96
    },
    "tags": {
      "support": 0.8,
      "nuker": 0.9,
      "disabler": 0.7,
      "trapper": 1,
      "magical": 0.9,
      "building_damage": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/techies.png"
  },
  {
    "id": "ember_spirit",
    "name": "Ember Spirit",
    "roles": [
      "Carry",
      "Mid",
      "Soft Support"
    ],
    "roleWeights": {
      "Carry": 0.85,
      "Mid": 1,
      "Offlane": 0.12800000000000003,
      "Soft Support": 0.72,
      "Hard Support": 0
    },
    "tags": {
      "carry": 0.85,
      "escape": 0.95,
      "nuker": 0.8,
      "disabler": 0.7,
      "initiator": 0.8,
      "agility_core": 0.85,
      "mobility": 1,
      "magic_shield": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ember_spirit.png"
  },
  {
    "id": "earth_spirit",
    "name": "Earth Spirit",
    "roles": [
      "Offlane",
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0,
      "Offlane": 1,
      "Soft Support": 1,
      "Hard Support": 1
    },
    "tags": {
      "support": 0.85,
      "nuker": 0.7,
      "escape": 0.85,
      "disabler": 0.9,
      "initiator": 0.9,
      "durable": 0.7,
      "tuff": 0.7,
      "mobility": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/earth_spirit.png"
  },
  {
    "id": "underlord",
    "name": "Underlord",
    "roles": [
      "Offlane",
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0,
      "Offlane": 1,
      "Soft Support": 1,
      "Hard Support": 0.84
    },
    "tags": {
      "aoe_def": 5,
      "lane_strength": 7,
      "support": 0.7,
      "initiator": 0.7,
      "nuker": 0.7,
      "disabler": 0.7,
      "durable": 0.9,
      "escape": 0.7,
      "tuff": 0.85,
      "aura": 0.9,
      "teamfight": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/underlord.png"
  },
  {
    "id": "terrorblade",
    "name": "Terrorblade",
    "roles": [
      "Carry"
    ],
    "roleWeights": {
      "Carry": 0.95,
      "Mid": 0,
      "Offlane": 0,
      "Soft Support": 0.21,
      "Hard Support": 0
    },
    "tags": {
      "carry": 0.95,
      "pusher": 0.9,
      "nuker": 0.7,
      "agility_core": 0.9,
      "illusioner": 0.9,
      "farming": 0.9,
      "armor": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/terrorblade.png"
  },
  {
    "id": "phoenix",
    "name": "Phoenix",
    "roles": [
      "Offlane",
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0.375,
      "Offlane": 1,
      "Soft Support": 1,
      "Hard Support": 1
    },
    "tags": {
      "support": 0.85,
      "nuker": 0.85,
      "initiator": 0.8,
      "escape": 0.8,
      "disabler": 0.7,
      "tuff": 0.7,
      "teamfight": 0.95,
      "healing": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/phoenix.png"
  },
  {
    "id": "oracle",
    "name": "Oracle",
    "roles": [
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0.285,
      "Offlane": 0,
      "Soft Support": 0.97,
      "Hard Support": 1
    },
    "tags": {
      "offensive_dispel": 1,
      "lane_strength": 6,
      "support": 0.95,
      "nuker": 0.7,
      "disabler": 0.6,
      "escape": 0.5,
      "mana_dependent": 0.8,
      "save": 1,
      "dispel": 0.9,
      "healing": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/oracle.png"
  },
  {
    "id": "winter_wyvern",
    "name": "Winter Wyvern",
    "roles": [
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0.21,
      "Offlane": 0,
      "Soft Support": 0.93,
      "Hard Support": 1
    },
    "tags": {
      "support": 0.9,
      "disabler": 0.85,
      "nuker": 0.7,
      "mana_dependent": 0.7,
      "save": 0.9,
      "anti_physical": 0.9,
      "teamfight": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/winter_wyvern.png"
  },
  {
    "id": "arc_warden",
    "name": "Arc Warden",
    "roles": [
      "Carry",
      "Mid"
    ],
    "roleWeights": {
      "Carry": 0.95,
      "Mid": 1,
      "Offlane": 0,
      "Soft Support": 0.24,
      "Hard Support": 0
    },
    "tags": {
      "carry": 0.95,
      "escape": 0.7,
      "nuker": 0.8,
      "pusher": 0.9,
      "agility_core": 0.85,
      "farming": 0.95
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/arc_warden.png"
  },
  {
    "id": "monkey_king",
    "name": "Monkey King",
    "roles": [
      "Carry"
    ],
    "roleWeights": {
      "Carry": 0.85,
      "Mid": 0.4,
      "Offlane": 0.12800000000000003,
      "Soft Support": 0.48,
      "Hard Support": 0
    },
    "tags": {
      "carry": 0.85,
      "escape": 0.8,
      "disabler": 0.7,
      "initiator": 0.8,
      "agility_core": 0.9,
      "mobility": 0.9,
      "brawler": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/monkey_king.png"
  },
  {
    "id": "dark_willow",
    "name": "Dark Willow",
    "roles": [
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0.375,
      "Offlane": 0,
      "Soft Support": 0.9750000000000001,
      "Hard Support": 1
    },
    "tags": {
      "support": 0.9,
      "nuker": 0.85,
      "disabler": 0.9,
      "escape": 0.8,
      "mana_dependent": 0.7,
      "catch": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dark_willow.png"
  },
  {
    "id": "pangolier",
    "name": "Pangolier",
    "roles": [
      "Carry",
      "Mid",
      "Offlane",
      "Soft Support"
    ],
    "roleWeights": {
      "Carry": 0.7,
      "Mid": 1,
      "Offlane": 1,
      "Soft Support": 0.735,
      "Hard Support": 0
    },
    "tags": {
      "carry": 0.7,
      "initiator": 0.85,
      "nuker": 0.75,
      "disabler": 0.8,
      "durable": 0.7,
      "escape": 0.85,
      "mobility": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/pangolier.png"
  },
  {
    "id": "grimstroke",
    "name": "Grimstroke",
    "roles": [
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0.33,
      "Offlane": 0,
      "Soft Support": 0.9600000000000001,
      "Hard Support": 1
    },
    "tags": {
      "harass_heavy": 1,
      "lane_strength": 8,
      "support": 0.9,
      "nuker": 0.8,
      "disabler": 0.85,
      "escape": 0.6,
      "mana_dependent": 0.8,
      "silence": 0.8,
      "teamfight": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/grimstroke.png"
  },
  {
    "id": "hoodwink",
    "name": "Hoodwink",
    "roles": [
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0.38249999999999995,
      "Offlane": 0,
      "Soft Support": 0.935,
      "Hard Support": 1
    },
    "tags": {
      "ranged": 1,
      "break": 0.8,
      "support": 0.85,
      "nuker": 0.85,
      "escape": 0.85,
      "disabler": 0.8,
      "agility_core": 0.7,
      "mobility": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/hoodwink.png"
  },
  {
    "id": "void_spirit",
    "name": "Void Spirit",
    "roles": [
      "Carry",
      "Mid",
      "Soft Support"
    ],
    "roleWeights": {
      "Carry": 0.85,
      "Mid": 1,
      "Offlane": 0.12800000000000003,
      "Soft Support": 0.735,
      "Hard Support": 0
    },
    "tags": {
      "carry": 0.85,
      "escape": 0.95,
      "nuker": 0.85,
      "disabler": 0.7,
      "initiator": 0.8,
      "mobility": 0.95
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/void_spirit.png"
  },
  {
    "id": "snapfire",
    "name": "Snapfire",
    "roles": [
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0.36,
      "Offlane": 0,
      "Soft Support": 0.9500000000000001,
      "Hard Support": 1
    },
    "tags": {
      "support": 0.85,
      "nuker": 0.9,
      "disabler": 0.7,
      "escape": 0.6,
      "teamfight": 0.9,
      "armor_corruption": 0.7
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/snapfire.png"
  },
  {
    "id": "mars",
    "name": "Mars",
    "roles": [
      "Carry",
      "Offlane",
      "Soft Support"
    ],
    "roleWeights": {
      "Carry": 0.7,
      "Mid": 0,
      "Offlane": 1,
      "Soft Support": 0.57,
      "Hard Support": 0
    },
    "tags": {
      "carry": 0.7,
      "initiator": 0.95,
      "disabler": 0.85,
      "durable": 0.85,
      "tuff": 0.8,
      "teamfight": 0.9,
      "anti_physical": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/mars.png"
  },
  {
    "id": "ringmaster",
    "name": "Ringmaster",
    "roles": [
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0.33,
      "Offlane": 0,
      "Soft Support": 0.93,
      "Hard Support": 1
    },
    "tags": {
      "support": 0.9,
      "nuker": 0.7,
      "escape": 0.8,
      "disabler": 0.85,
      "mana_dependent": 0.7,
      "save": 0.8,
      "catch": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ringmaster.png"
  },
  {
    "id": "dawnbreaker",
    "name": "Dawnbreaker",
    "roles": [
      "Carry"
    ],
    "roleWeights": {
      "Carry": 0.8,
      "Mid": 0,
      "Offlane": 0.45600000000000007,
      "Soft Support": 0.51,
      "Hard Support": 0
    },
    "tags": {
      "carry": 0.8,
      "initiator": 0.85,
      "durable": 0.8,
      "tuff": 0.8,
      "healing": 0.8,
      "summoning": 0.8,
      "global_presence": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dawnbreaker.png"
  },
  {
    "id": "marci",
    "name": "Marci",
    "roles": [
      "Carry",
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0.85,
      "Mid": 0.12,
      "Offlane": 0.136,
      "Soft Support": 1,
      "Hard Support": 0.96
    },
    "tags": {
      "support": 0.8,
      "carry": 0.85,
      "initiator": 0.85,
      "disabler": 0.8,
      "escape": 0.8,
      "mobility": 0.85,
      "brawler": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/marci.png"
  },
  {
    "id": "primal_beast",
    "name": "Primal Beast",
    "roles": [
      "Mid",
      "Offlane",
      "Soft Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0.8,
      "Offlane": 1,
      "Soft Support": 0.78,
      "Hard Support": 0
    },
    "tags": {
      "initiator": 0.9,
      "durable": 0.85,
      "disabler": 0.8,
      "nuker": 0.8,
      "tuff": 0.85,
      "mobility": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/primal_beast.png"
  },
  {
    "id": "muerta",
    "name": "Muerta",
    "roles": [
      "Carry",
      "Mid"
    ],
    "roleWeights": {
      "Carry": 0.9,
      "Mid": 0.85,
      "Offlane": 0,
      "Soft Support": 0.255,
      "Hard Support": 0
    },
    "tags": {
      "carry": 0.9,
      "nuker": 0.85,
      "disabler": 0.7,
      "mana_dependent": 0.8,
      "ethereal": 0.9,
      "physical_immunity": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/muerta.png"
  },
  {
    "id": "kez",
    "name": "Kez",
    "roles": [
      "Carry"
    ],
    "roleWeights": {
      "Carry": 0.9,
      "Mid": 0.45,
      "Offlane": 0,
      "Soft Support": 0,
      "Hard Support": 0
    },
    "tags": {
      "carry": 0.9,
      "escape": 0.9,
      "disabler": 0.7,
      "agility_core": 0.9,
      "mobility": 0.9,
      "burst": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/kez.png"
  },
  {
    "id": "largo",
    "name": "Largo",
    "roles": [
      "Offlane",
      "Soft Support",
      "Hard Support"
    ],
    "roleWeights": {
      "Carry": 0,
      "Mid": 0,
      "Offlane": 1,
      "Soft Support": 1,
      "Hard Support": 0.96
    },
    "tags": {
      "durable": 0.85,
      "disabler": 0.8,
      "support": 0.8,
      "tuff": 0.85,
      "initiator": 0.8,
      "tank": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/largo.png"
  }
];

export const ITEMS: Item[] = [
  {
    "id": "blink_dagger",
    "name": "Blink Dagger",
    "cost": 2250,
    "tier": "Тир-3: Мидгейм",
    "tags": {
      "mobility": 1,
      "initiation": 0.9
    },
    "counters": {},
    "synergies": {
      "initiator": 0.9,
      "escape": 0.7
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink_dagger.png"
  },
  {
    "id": "overwhelming_blink",
    "name": "Overwhelming Blink",
    "cost": 6800,
    "tier": "Тир-5: Люкс слоты",
    "tags": {
      "aoe_damage": 0.8,
      "health_boost": 0.9,
      "slow": 0.7,
      "mobility": 1,
      "initiation": 0.9
    },
    "counters": {
      "illusioner": 0.9,
      "pusher": 0.8,
      "summoning": 0.9
    },
    "synergies": {
      "initiator": 0.8,
      "escape": 0.7,
      "support": 0.7,
      "catch": 0.8,
      "nuker": 0.8,
      "farming": 0.8,
      "pusher": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/overwhelming_blink.png"
  },
  {
    "id": "swift_blink",
    "name": "Swift Blink",
    "cost": 6800,
    "tier": "Тир-5: Люкс слоты",
    "tags": {
      "agility_boost": 1,
      "movement_speed": 0.9,
      "mobility": 1,
      "initiation": 0.9
    },
    "counters": {},
    "synergies": {
      "initiator": 0.9,
      "escape": 0.7
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/swift_blink.png"
  },
  {
    "id": "arcane_blink",
    "name": "Arcane Blink",
    "cost": 6800,
    "tier": "Тир-5: Люкс слоты",
    "tags": {
      "cast_point_reduction": 1,
      "mana_regen": 0.8,
      "mobility": 1,
      "initiation": 0.9
    },
    "counters": {},
    "synergies": {
      "initiator": 0.9,
      "escape": 0.7,
      "mana_dependent": 0.9,
      "caster": 0.9,
      "nuker": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/arcane_blink.png"
  },
  {
    "id": "blades_of_attack",
    "name": "Blades of Attack",
    "cost": 450,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "damage": 0.3
    },
    "counters": {},
    "synergies": {
      "carry": 0.8,
      "agility_core": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blades_of_attack.png"
  },
  {
    "id": "broadsword",
    "name": "Broadsword",
    "cost": 1000,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "damage": 0.5
    },
    "counters": {},
    "synergies": {
      "carry": 0.8,
      "agility_core": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/broadsword.png"
  },
  {
    "id": "chainmail",
    "name": "Chainmail",
    "cost": 500,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "armor": 0.5
    },
    "counters": {
      "physical_damage": 0.9,
      "carry": 0.8,
      "agility_core": 0.8,
      "burst": 0.7,
      "armor_corruption": 0.8
    },
    "synergies": {
      "durable": 0.8,
      "tuff": 0.8,
      "tank": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/chainmail.png"
  },
  {
    "id": "splintmail",
    "name": "Splintmail",
    "cost": 950,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "armor": 0.7
    },
    "counters": {
      "physical_damage": 0.9,
      "carry": 0.8,
      "agility_core": 0.8,
      "burst": 0.7,
      "armor_corruption": 0.8
    },
    "synergies": {
      "durable": 0.8,
      "tuff": 0.8,
      "tank": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/splintmail.png"
  },
  {
    "id": "claymore",
    "name": "Claymore",
    "cost": 1350,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "damage": 0.6
    },
    "counters": {},
    "synergies": {
      "carry": 0.8,
      "agility_core": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/claymore.png"
  },
  {
    "id": "helm_of_iron_will",
    "name": "Helm of Iron Will",
    "cost": 975,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "armor": 0.6,
      "health_regen": 0.5
    },
    "counters": {
      "physical_damage": 0.9,
      "carry": 0.8,
      "agility_core": 0.8,
      "burst": 0.7,
      "armor_corruption": 0.8
    },
    "synergies": {
      "durable": 0.8,
      "tuff": 0.8,
      "tank": 0.8,
      "support": 0.8,
      "healing": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/helm_of_iron_will.png"
  },
  {
    "id": "javelin",
    "name": "Javelin",
    "cost": 900,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "damage": 0.4,
      "pierce": 0.5
    },
    "counters": {},
    "synergies": {
      "carry": 0.8,
      "agility_core": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/javelin.png"
  },
  {
    "id": "mithril_hammer",
    "name": "Mithril Hammer",
    "cost": 1600,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "damage": 0.7
    },
    "counters": {},
    "synergies": {
      "carry": 0.8,
      "agility_core": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/mithril_hammer.png"
  },
  {
    "id": "platemail",
    "name": "Platemail",
    "cost": 1400,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "armor": 0.9
    },
    "counters": {
      "physical_damage": 0.9,
      "carry": 0.8,
      "agility_core": 0.8,
      "burst": 0.7,
      "armor_corruption": 0.8
    },
    "synergies": {
      "durable": 0.8,
      "tuff": 0.8,
      "tank": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/platemail.png"
  },
  {
    "id": "quarterstaff",
    "name": "Quarterstaff",
    "cost": 875,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "damage": 0.3,
      "attack_speed": 0.3
    },
    "counters": {},
    "synergies": {
      "carry": 0.9,
      "agility_core": 0.9,
      "attack_speed": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/quarterstaff.png"
  },
  {
    "id": "quelling_blade",
    "name": "Quelling Blade",
    "cost": 100,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "farming": 0.8
    },
    "counters": {},
    "synergies": {
      "carry": 0.9,
      "agility_core": 0.8,
      "farming": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/quelling_blade.png"
  },
  {
    "id": "faerie_fire",
    "name": "Faerie Fire",
    "cost": 65,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "burst_heal": 0.5,
      "damage": 0.2
    },
    "counters": {},
    "synergies": {
      "carry": 0.8,
      "agility_core": 0.8,
      "support": 0.8,
      "healing": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/faerie_fire.png"
  },
  {
    "id": "infused_raindrops",
    "name": "Infused Raindrops",
    "cost": 225,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "magic_block": 0.8,
      "mana_regen": 0.4
    },
    "counters": {
      "magic_damage": 0.9,
      "nuker": 0.9,
      "aoe_magic": 0.8,
      "burst": 0.7
    },
    "synergies": {
      "mana_dependent": 0.9,
      "caster": 0.9,
      "nuker": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/infused_raindrops.png"
  },
  {
    "id": "wind_lace",
    "name": "Wind Lace",
    "cost": 225,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "movement_speed": 0.4
    },
    "counters": {},
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/wind_lace.png"
  },
  {
    "id": "ring_of_protection",
    "name": "Ring of Protection",
    "cost": 175,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "armor": 0.3
    },
    "counters": {
      "physical_damage": 0.9,
      "carry": 0.8,
      "agility_core": 0.8,
      "burst": 0.7,
      "armor_corruption": 0.8
    },
    "synergies": {
      "durable": 0.8,
      "tuff": 0.8,
      "tank": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ring_of_protection.png"
  },
  {
    "id": "stout_shield",
    "name": "Stout Shield",
    "cost": 100,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "damage_block": 0.5
    },
    "counters": {},
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/stout_shield.png"
  },
  {
    "id": "moon_shard",
    "name": "Moon Shard",
    "cost": 4000,
    "tier": "Тир-4: Ключевые артефакты",
    "tags": {
      "attack_speed": 1,
      "night_vision": 0.8
    },
    "counters": {},
    "synergies": {
      "carry": 0.9,
      "agility_core": 0.9,
      "attack_speed": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/moon_shard.png"
  },
  {
    "id": "gauntlets_of_strength",
    "name": "Gauntlets of Strength",
    "cost": 140,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "health": 0.3
    },
    "counters": {},
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/gauntlets_of_strength.png"
  },
  {
    "id": "slippers_of_agility",
    "name": "Slippers of Agility",
    "cost": 140,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "agility": 0.3
    },
    "counters": {},
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/slippers_of_agility.png"
  },
  {
    "id": "mantle_of_intelligence",
    "name": "Mantle of Intelligence",
    "cost": 140,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "mana": 0.3
    },
    "counters": {},
    "synergies": {
      "mana_dependent": 0.9,
      "caster": 0.9,
      "nuker": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/mantle_of_intelligence.png"
  },
  {
    "id": "iron_branch",
    "name": "Iron Branch",
    "cost": 55,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "stats": 0.2,
      "healing_amp": 0.2
    },
    "counters": {},
    "synergies": {
      "carry": 0.7,
      "illusioner": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/iron_branch.png"
  },
  {
    "id": "belt_of_strength",
    "name": "Belt of Strength",
    "cost": 450,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "health": 0.5
    },
    "counters": {},
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/belt_of_strength.png"
  },
  {
    "id": "band_of_elvenskin",
    "name": "Band of Elvenskin",
    "cost": 450,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "agility": 0.5
    },
    "counters": {},
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/band_of_elvenskin.png"
  },
  {
    "id": "robe_of_the_magi",
    "name": "Robe of the Magi",
    "cost": 450,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "mana": 0.5
    },
    "counters": {},
    "synergies": {
      "mana_dependent": 0.9,
      "caster": 0.9,
      "nuker": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/robe_of_the_magi.png"
  },
  {
    "id": "circlet",
    "name": "Circlet",
    "cost": 155,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "stats": 0.3
    },
    "counters": {},
    "synergies": {
      "carry": 0.7,
      "illusioner": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/circlet.png"
  },
  {
    "id": "crown",
    "name": "Crown",
    "cost": 450,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "stats": 0.5
    },
    "counters": {},
    "synergies": {
      "carry": 0.7,
      "illusioner": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/crown.png"
  },
  {
    "id": "diadem",
    "name": "Diadem",
    "cost": 1000,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "stats": 0.7
    },
    "counters": {},
    "synergies": {
      "carry": 0.7,
      "illusioner": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/diadem.png"
  },
  {
    "id": "ogre_axe",
    "name": "Ogre Axe",
    "cost": 1000,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "health": 0.7
    },
    "counters": {},
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ogre_axe.png"
  },
  {
    "id": "blade_of_alacrity",
    "name": "Blade of Alacrity",
    "cost": 1000,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "agility": 0.7
    },
    "counters": {},
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blade_of_alacrity.png"
  },
  {
    "id": "staff_of_wizardry",
    "name": "Staff of Wizardry",
    "cost": 1000,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "mana": 0.7
    },
    "counters": {},
    "synergies": {
      "mana_dependent": 0.9,
      "caster": 0.9,
      "nuker": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/staff_of_wizardry.png"
  },
  {
    "id": "ultimate_orb",
    "name": "Ultimate Orb",
    "cost": 2800,
    "tier": "Тир-3: Мидгейм",
    "tags": {
      "stats": 0.8
    },
    "counters": {},
    "synergies": {
      "carry": 0.7,
      "illusioner": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_orb.png"
  },
  {
    "id": "gloves_of_haste",
    "name": "Gloves of Haste",
    "cost": 450,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "attack_speed": 0.4
    },
    "counters": {},
    "synergies": {
      "carry": 0.9,
      "agility_core": 0.9,
      "attack_speed": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/gloves_of_haste.png"
  },
  {
    "id": "blitz_knuckles",
    "name": "Blitz Knuckles",
    "cost": 1000,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "attack_speed": 0.6
    },
    "counters": {},
    "synergies": {
      "carry": 0.9,
      "agility_core": 0.9,
      "attack_speed": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blitz_knuckles.png"
  },
  {
    "id": "morbid_mask",
    "name": "Morbid Mask",
    "cost": 900,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "lifesteal": 0.6
    },
    "counters": {},
    "synergies": {
      "carry": 0.8,
      "brawler": 0.9,
      "agility_core": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/morbid_mask.png"
  },
  {
    "id": "voodoo_mask",
    "name": "Voodoo Mask",
    "cost": 650,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "spell_lifesteal": 0.6
    },
    "counters": {},
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/voodoo_mask.png"
  },
  {
    "id": "ring_of_regen",
    "name": "Ring of Regen",
    "cost": 175,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "health_regen": 0.3
    },
    "counters": {},
    "synergies": {
      "support": 0.8,
      "healing": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ring_of_regen.png"
  },
  {
    "id": "sages_mask",
    "name": "Sage's Mask",
    "cost": 175,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "mana_regen": 0.3
    },
    "counters": {},
    "synergies": {
      "mana_dependent": 0.9,
      "caster": 0.9,
      "nuker": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/sages_mask.png"
  },
  {
    "id": "boots_of_speed",
    "name": "Boots of Speed",
    "cost": 500,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "movement_speed": 0.6
    },
    "counters": {},
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/boots_of_speed.png"
  },
  {
    "id": "gem_of_true_sight",
    "name": "Gem of True Sight",
    "cost": 900,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "True_Sight": 1,
      "true_sight": 1,
      "high_risk": 1
    },
    "counters": {
      "invisibility": 1,
      "escape": 0.7,
      "juke": 0.8
    },
    "synergies": {
      "support": 0.9,
      "initiator": 0.7
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/gem_of_true_sight.png"
  },
  {
    "id": "shawl",
    "name": "Shawl",
    "cost": 450,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "magic_resistance": 0.8
    },
    "counters": {
      "magic_damage": 0.9,
      "nuker": 0.9,
      "aoe_magic": 0.8,
      "burst": 0.7
    },
    "synergies": {
      "durable": 0.8,
      "tank": 0.8,
      "tuff": 0.8,
      "initiator": 0.7
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/shawl.png"
  },
  {
    "id": "cloak",
    "name": "Cloak",
    "cost": 900,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "magic_resistance": 0.5
    },
    "counters": {
      "magic_damage": 0.9,
      "nuker": 0.9,
      "aoe_magic": 0.8,
      "burst": 0.7
    },
    "synergies": {
      "durable": 0.8,
      "tank": 0.8,
      "tuff": 0.8,
      "initiator": 0.7
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/cloak.png"
  },
  {
    "id": "talisman_of_evasion",
    "name": "Talisman of Evasion",
    "cost": 1300,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "evasion": 0.6
    },
    "counters": {
      "physical_damage": 0.8,
      "carry": 0.8,
      "agility_core": 0.8
    },
    "synergies": {
      "agility_core": 0.9,
      "carry": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/talisman_of_evasion.png"
  },
  {
    "id": "cheese",
    "name": "Cheese",
    "cost": 1000,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "burst_heal": 1,
      "burst_mana": 1,
      "save": 0.9
    },
    "counters": {},
    "synergies": {
      "support": 0.9,
      "healing": 0.8,
      "mana_dependent": 0.9,
      "caster": 0.9,
      "nuker": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/cheese.png"
  },
  {
    "id": "magic_stick",
    "name": "Magic Stick",
    "cost": 200,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "burst_heal": 0.4,
      "burst_mana": 0.4
    },
    "counters": {},
    "synergies": {
      "support": 0.8,
      "healing": 0.8,
      "mana_dependent": 0.9,
      "caster": 0.9,
      "nuker": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_stick.png"
  },
  {
    "id": "magic_wand",
    "name": "Magic Wand",
    "cost": 460,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "burst_heal": 0.6,
      "burst_mana": 0.6,
      "stats": 0.3
    },
    "counters": {},
    "synergies": {
      "support": 0.8,
      "healing": 0.8,
      "mana_dependent": 0.9,
      "caster": 0.9,
      "nuker": 0.8,
      "carry": 0.7,
      "illusioner": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png"
  },
  {
    "id": "ghost_scepter",
    "name": "Ghost Scepter",
    "cost": 1500,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "ethereal": 1,
      "save": 0.8,
      "physical_immunity": 1
    },
    "counters": {
      "physical_damage": 0.9,
      "carry": 0.8,
      "agility_core": 0.8
    },
    "synergies": {
      "support": 0.9,
      "nuker": 0.9,
      "save": 0.8,
      "healing": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ghost_scepter.png"
  },
  {
    "id": "clarity",
    "name": "Clarity",
    "cost": 60,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "mana_regen": 0.5
    },
    "counters": {},
    "synergies": {
      "mana_dependent": 0.9,
      "caster": 0.9,
      "nuker": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/clarity.png"
  },
  {
    "id": "enchanted_mango",
    "name": "Enchanted Mango",
    "cost": 65,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "burst_mana": 0.5,
      "health_regen": 0.2
    },
    "counters": {},
    "synergies": {
      "support": 0.8,
      "healing": 0.8,
      "mana_dependent": 0.9,
      "caster": 0.9,
      "nuker": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/enchanted_mango.png"
  },
  {
    "id": "blood_grenade",
    "name": "Blood Grenade",
    "cost": 50,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "slow": 0.5,
      "damage_over_time": 0.4,
      "catch": 0.6
    },
    "counters": {},
    "synergies": {
      "support": 0.7,
      "initiator": 0.8,
      "catch": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blood_grenade.png"
  },
  {
    "id": "block_of_cheese",
    "name": "Block of Cheese",
    "cost": 2,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "permanent_shield": 1,
      "survivability": 0.9
    },
    "counters": {},
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/block_of_cheese.png"
  },
  {
    "id": "healing_salve",
    "name": "Healing Salve",
    "cost": 100,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "health_regen": 0.8
    },
    "counters": {},
    "synergies": {
      "support": 0.8,
      "healing": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/healing_salve.png"
  },
  {
    "id": "dust_of_appearance",
    "name": "Dust of Appearance",
    "cost": 80,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "True_Sight": 1,
      "Catch": 1,
      "true_sight": 0.8,
      "slow": 0.4
    },
    "counters": {
      "invisibility": 1,
      "escape": 0.7,
      "juke": 0.8
    },
    "synergies": {
      "support": 0.7,
      "initiator": 0.8,
      "catch": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/dust_of_appearance.png"
  },
  {
    "id": "bottle",
    "name": "Bottle",
    "cost": 675,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "sustain": 0.8,
      "rune_control": 1
    },
    "counters": {},
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/bottle.png"
  },
  {
    "id": "sentry_ward",
    "name": "Sentry Ward",
    "cost": 50,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "true_sight": 0.9,
      "vision": 0.4
    },
    "counters": {
      "invisibility": 1,
      "escape": 0.7,
      "juke": 0.8
    },
    "synergies": {
      "support": 0.9,
      "initiator": 0.7
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/sentry_ward.png"
  },
  {
    "id": "observer_and_sentry_wards",
    "name": "Observer and Sentry Wards",
    "cost": 50,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "vision": 1,
      "true_sight": 0.9
    },
    "counters": {
      "invisibility": 1,
      "escape": 0.7,
      "juke": 0.8
    },
    "synergies": {
      "support": 0.9,
      "initiator": 0.7
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/observer_and_sentry_wards.png"
  },
  {
    "id": "tango",
    "name": "Tango",
    "cost": 90,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "health_regen": 0.5
    },
    "counters": {},
    "synergies": {
      "support": 0.8,
      "healing": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png"
  },
  {
    "id": "tango_(shared)",
    "name": "Tango (Shared)",
    "cost": 30,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "health_regen": 0.4
    },
    "counters": {},
    "synergies": {
      "support": 0.8,
      "healing": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango_(shared).png"
  },
  {
    "id": "animal_courier",
    "name": "Animal Courier",
    "cost": 50,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "utility": 1
    },
    "counters": {},
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/animal_courier.png"
  },
  {
    "id": "flying_courier",
    "name": "Flying Courier",
    "cost": 100,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "utility": 1,
      "mobility": 0.5
    },
    "counters": {},
    "synergies": {
      "initiator": 0.9,
      "escape": 0.7
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flying_courier.png"
  },
  {
    "id": "town_portal_scroll",
    "name": "Town Portal Scroll",
    "cost": 100,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "global_mobility": 1,
      "save": 0.5
    },
    "counters": {},
    "synergies": {
      "support": 0.9,
      "healing": 0.8,
      "carry": 0.8,
      "pusher": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/town_portal_scroll.png"
  },
  {
    "id": "boots_of_travel",
    "name": "Boots of Travel",
    "cost": 2500,
    "tier": "Тир-3: Мидгейм",
    "tags": {
      "global_mobility": 1,
      "movement_speed": 0.9,
      "farming": 0.7
    },
    "counters": {},
    "synergies": {
      "carry": 0.8,
      "agility_core": 0.8,
      "farming": 0.9,
      "pusher": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/boots_of_travel.png"
  },
  {
    "id": "boots_of_travel_2",
    "name": "Boots of Travel 2",
    "cost": 4500,
    "tier": "Тир-4: Ключевые артефакты",
    "tags": {
      "global_mobility": 1,
      "movement_speed": 1,
      "save": 0.6
    },
    "counters": {},
    "synergies": {
      "support": 0.9,
      "healing": 0.8,
      "carry": 0.8,
      "pusher": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/boots_of_travel_2.png"
  },
  {
    "id": "phase_boots",
    "name": "Phase Boots",
    "cost": 1450,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "movement_speed": 0.8,
      "armor": 0.5,
      "damage": 0.4,
      "unit_walking": 1
    },
    "counters": {
      "physical_damage": 0.9,
      "carry": 0.8,
      "agility_core": 0.8,
      "burst": 0.7,
      "armor_corruption": 0.8
    },
    "synergies": {
      "carry": 0.8,
      "agility_core": 0.8,
      "durable": 0.8,
      "tuff": 0.8,
      "tank": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/phase_boots.png"
  },
  {
    "id": "demon_edge",
    "name": "Demon Edge",
    "cost": 2200,
    "tier": "Тир-3: Мидгейм",
    "tags": {
      "damage": 0.8
    },
    "counters": {},
    "synergies": {
      "carry": 0.8,
      "agility_core": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/demon_edge.png"
  },
  {
    "id": "eaglesong",
    "name": "Eaglesong",
    "cost": 2800,
    "tier": "Тир-3: Мидгейм",
    "tags": {
      "agility": 0.9
    },
    "counters": {},
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/eaglesong.png"
  },
  {
    "id": "reaver",
    "name": "Reaver",
    "cost": 2800,
    "tier": "Тир-3: Мидгейм",
    "tags": {
      "health": 0.9
    },
    "counters": {},
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/reaver.png"
  },
  {
    "id": "sacred_relic",
    "name": "Sacred Relic",
    "cost": 3400,
    "tier": "Тир-3: Мидгейм",
    "tags": {
      "damage": 1
    },
    "counters": {},
    "synergies": {
      "carry": 0.8,
      "agility_core": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/sacred_relic.png"
  },
  {
    "id": "hyperstone",
    "name": "Hyperstone",
    "cost": 2000,
    "tier": "Тир-3: Мидгейм",
    "tags": {
      "attack_speed": 0.8
    },
    "counters": {},
    "synergies": {
      "carry": 0.9,
      "agility_core": 0.9,
      "attack_speed": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/hyperstone.png"
  },
  {
    "id": "ring_of_health",
    "name": "Ring of Health",
    "cost": 700,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "health_regen": 0.6
    },
    "counters": {},
    "synergies": {
      "support": 0.8,
      "healing": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ring_of_health.png"
  },
  {
    "id": "ring_of_tarrasque",
    "name": "Ring of Tarrasque",
    "cost": 1700,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "health_regen": 0.7,
      "health": 0.4
    },
    "counters": {},
    "synergies": {
      "support": 0.8,
      "healing": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ring_of_tarrasque.png"
  },
  {
    "id": "void_stone",
    "name": "Void Stone",
    "cost": 700,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "mana_regen": 0.6
    },
    "counters": {},
    "synergies": {
      "mana_dependent": 0.9,
      "caster": 0.9,
      "nuker": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/void_stone.png"
  },
  {
    "id": "tiara_of_selemene",
    "name": "Tiara of Selemene",
    "cost": 1700,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "mana_regen": 0.8
    },
    "counters": {},
    "synergies": {
      "mana_dependent": 0.9,
      "caster": 0.9,
      "nuker": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tiara_of_selemene.png"
  },
  {
    "id": "mystic_staff",
    "name": "Mystic Staff",
    "cost": 2800,
    "tier": "Тир-3: Мидгейм",
    "tags": {
      "mana": 0.9
    },
    "counters": {},
    "synergies": {
      "mana_dependent": 0.9,
      "caster": 0.9,
      "nuker": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/mystic_staff.png"
  },
  {
    "id": "energy_booster",
    "name": "Energy Booster",
    "cost": 800,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "mana": 0.6
    },
    "counters": {},
    "synergies": {
      "mana_dependent": 0.9,
      "caster": 0.9,
      "nuker": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/energy_booster.png"
  },
  {
    "id": "point_booster",
    "name": "Point Booster",
    "cost": 1200,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "health": 0.5,
      "mana": 0.5
    },
    "counters": {},
    "synergies": {
      "mana_dependent": 0.9,
      "caster": 0.9,
      "nuker": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/point_booster.png"
  },
  {
    "id": "vitality_booster",
    "name": "Vitality Booster",
    "cost": 1000,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "health": 0.6
    },
    "counters": {},
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/vitality_booster.png"
  },
  {
    "id": "fluffy_hat",
    "name": "Fluffy Hat",
    "cost": 250,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "health": 0.4
    },
    "counters": {},
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/fluffy_hat.png"
  },
  {
    "id": "wizard_hat",
    "name": "Wizard Hat",
    "cost": 250,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "mana": 0.4
    },
    "counters": {},
    "synergies": {
      "mana_dependent": 0.9,
      "caster": 0.9,
      "nuker": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/wizard_hat.png"
  },
  {
    "id": "power_treads",
    "name": "Power Treads",
    "cost": 1400,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "attack_speed": 0.6,
      "stats": 0.6
    },
    "counters": {},
    "synergies": {
      "carry": 0.7,
      "agility_core": 0.9,
      "attack_speed": 0.9,
      "illusioner": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/power_treads.png"
  },
  {
    "id": "phylactery",
    "name": "Phylactery",
    "cost": 2600,
    "tier": "Тир-3: Мидгейм",
    "tags": {
      "spell_damage": 0.8,
      "slow": 0.7,
      "stats": 0.5
    },
    "counters": {},
    "synergies": {
      "carry": 0.7,
      "illusioner": 0.8,
      "support": 0.7,
      "initiator": 0.8,
      "catch": 0.8,
      "nuker": 0.9,
      "caster": 0.9,
      "magic_damage": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/phylactery.png"
  },
  {
    "id": "khanda",
    "name": "Khanda",
    "cost": 5600,
    "tier": "Тир-5: Люкс слоты",
    "tags": {
      "spell_crit": 1,
      "burst_damage": 0.9,
      "catch": 0.6
    },
    "counters": {},
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/khanda.png"
  },
  {
    "id": "hand_of_midas",
    "name": "Hand of Midas",
    "cost": 2200,
    "tier": "Тир-3: Мидгейм",
    "tags": {
      "economy": 1,
      "farming": 0.9,
      "attack_speed": 0.5
    },
    "counters": {},
    "synergies": {
      "carry": 0.9,
      "agility_core": 0.8,
      "attack_speed": 0.9,
      "farming": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/hand_of_midas.png"
  },
  {
    "id": "oblivion_staff",
    "name": "Oblivion Staff",
    "cost": 1625,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "mana_regen": 0.5,
      "damage": 0.4
    },
    "counters": {},
    "synergies": {
      "carry": 0.8,
      "agility_core": 0.8,
      "mana_dependent": 0.9,
      "caster": 0.9,
      "nuker": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/oblivion_staff.png"
  },
  {
    "id": "witch_blade",
    "name": "Witch Blade",
    "cost": 2775,
    "tier": "Тир-3: Мидгейм",
    "tags": {
      "damage_over_time": 0.7,
      "armor": 0.5,
      "attack_speed": 0.6
    },
    "counters": {
      "physical_damage": 0.9,
      "carry": 0.8,
      "agility_core": 0.8,
      "burst": 0.7,
      "armor_corruption": 0.8
    },
    "synergies": {
      "durable": 0.8,
      "tuff": 0.8,
      "tank": 0.8,
      "carry": 0.9,
      "agility_core": 0.9,
      "attack_speed": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/witch_blade.png"
  },
  {
    "id": "perseverance",
    "name": "Perseverance",
    "cost": 1400,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "health_regen": 0.6,
      "mana_regen": 0.6
    },
    "counters": {},
    "synergies": {
      "support": 0.8,
      "healing": 0.8,
      "mana_dependent": 0.9,
      "caster": 0.9,
      "nuker": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/perseverance.png"
  },
  {
    "id": "cornucopia",
    "name": "Cornucopia",
    "cost": 1200,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "health_regen": 0.7,
      "mana_regen": 0.7
    },
    "counters": {},
    "synergies": {
      "support": 0.8,
      "healing": 0.8,
      "mana_dependent": 0.9,
      "caster": 0.9,
      "nuker": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/cornucopia.png"
  },
  {
    "id": "bracer",
    "name": "Bracer",
    "cost": 505,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "health": 0.6,
      "early_power": 0.8
    },
    "counters": {},
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/bracer.png"
  },
  {
    "id": "wraith_band",
    "name": "Wraith Band",
    "cost": 505,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "agility": 0.6,
      "early_power": 0.8
    },
    "counters": {},
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/wraith_band.png"
  },
  {
    "id": "null_talisman",
    "name": "Null Talisman",
    "cost": 505,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "mana": 0.6,
      "early_power": 0.8
    },
    "counters": {},
    "synergies": {
      "mana_dependent": 0.9,
      "caster": 0.9,
      "nuker": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/null_talisman.png"
  },
  {
    "id": "mekansm",
    "name": "Mekansm",
    "cost": 1775,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "aoe_heal": 0.9,
      "aura_armor": 0.5
    },
    "counters": {},
    "synergies": {
      "support": 0.9,
      "healing": 0.8,
      "pusher": 0.8,
      "teamfight": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/mekansm.png"
  },
  {
    "id": "vladmirs_offering",
    "name": "Vladmir's Offering",
    "cost": 2200,
    "tier": "Тир-3: Мидгейм",
    "tags": {
      "aura_lifesteal": 1,
      "aura_damage": 0.7,
      "aura_mana": 0.5
    },
    "counters": {},
    "synergies": {
      "support": 0.9,
      "pusher": 0.8,
      "teamfight": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/vladmirs_offering.png"
  },
  {
    "id": "wraith_pact",
    "name": "Wraith Pact",
    "cost": 3800,
    "tier": "Тир-4: Ключевые артефакты",
    "tags": {
      "damage_reduction": 1,
      "aura_lifesteal": 0.8,
      "pushing": 0.7
    },
    "counters": {},
    "synergies": {
      "support": 0.9,
      "pusher": 0.8,
      "teamfight": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/wraith_pact.png"
  },
  {
    "id": "buckler",
    "name": "Buckler",
    "cost": 425,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "aura_armor": 0.6
    },
    "counters": {},
    "synergies": {
      "support": 0.9,
      "pusher": 0.8,
      "teamfight": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/buckler.png"
  },
  {
    "id": "ring_of_basilius",
    "name": "Ring of Basilius",
    "cost": 425,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "aura_mana": 0.6
    },
    "counters": {},
    "synergies": {
      "support": 0.9,
      "pusher": 0.8,
      "teamfight": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ring_of_basilius.png"
  },
  {
    "id": "holy_locket",
    "name": "Holy Locket",
    "cost": 2250,
    "tier": "Тир-3: Мидгейм",
    "tags": {
      "heal_amp": 1,
      "burst_heal": 0.8,
      "stats": 0.5
    },
    "counters": {},
    "synergies": {
      "support": 0.8,
      "healing": 0.8,
      "carry": 0.7,
      "illusioner": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/holy_locket.png"
  },
  {
    "id": "pipe_of_insight",
    "name": "Pipe of Insight",
    "cost": 3725,
    "tier": "Тир-4: Ключевые артефакты",
    "tags": {
      "aura_magic_resistance": 1,
      "magic_shield": 1,
      "save": 0.8
    },
    "counters": {
      "magic_damage": 0.9,
      "nuker": 0.9,
      "aoe_magic": 0.8,
      "burst": 0.7
    },
    "synergies": {
      "support": 0.9,
      "healing": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/pipe_of_insight.png"
  },
  {
    "id": "urn_of_shadows",
    "name": "Urn of Shadows",
    "cost": 825,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "damage_over_time": 0.6,
      "healing": 0.6
    },
    "counters": {},
    "synergies": {
      "support": 0.8,
      "healing": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/urn_of_shadows.png"
  },
  {
    "id": "headdress",
    "name": "Headdress",
    "cost": 425,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "aura_health_regen": 0.6
    },
    "counters": {},
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/headdress.png"
  },
  {
    "id": "scythe_of_vyse",
    "name": "Scythe of Vyse",
    "cost": 5200,
    "tier": "Тир-5: Люкс слоты",
    "tags": {
      "Catch": 1,
      "control": 0.8,
      "mana_regen": 0.9
    },
    "counters": {},
    "synergies": {
      "mana_dependent": 0.9,
      "caster": 0.9,
      "nuker": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/scythe_of_vyse.png"
  },
  {
    "id": "orchid_malevolence",
    "name": "Orchid Malevolence",
    "cost": 3275,
    "tier": "Тир-3: Мидгейм",
    "tags": {
      "Catch": 1,
      "Silence": 1,
      "silence": 1,
      "damage_burst": 0.5,
      "catch": 0.7
    },
    "counters": {
      "escape": 0.9,
      "caster": 0.9,
      "mana_dependent": 0.9,
      "mobility": 0.8
    },
    "synergies": {
      "catch": 0.9,
      "initiator": 0.8,
      "agility_core": 0.7
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/orchid_malevolence.png"
  },
  {
    "id": "bloodthorn",
    "name": "Bloodthorn",
    "cost": 6400,
    "tier": "Тир-5: Люкс слоты",
    "tags": {
      "True_Strike_On_Target": 1,
      "True_Strike": 1,
      "Silence": 1,
      "damage_amp": 1,
      "true_strike": 0.9,
      "damage_burst": 0.9,
      "silence": 1,
      "catch": 0.7
    },
    "counters": {
      "escape": 0.9,
      "caster": 0.9,
      "mana_dependent": 0.9,
      "mobility": 0.8,
      "evasion": 1
    },
    "synergies": {
      "catch": 0.9,
      "initiator": 0.8,
      "agility_core": 0.7
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/bloodthorn.png"
  },
  {
    "id": "echo_sabre",
    "name": "Echo Sabre",
    "cost": 2700,
    "tier": "Тир-3: Мидгейм",
    "tags": {
      "double_attack": 1,
      "catch": 0.6,
      "stats": 0.6
    },
    "counters": {},
    "synergies": {
      "carry": 0.7,
      "illusioner": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/echo_sabre.png"
  },
  {
    "id": "euls_scepter_of_divinity",
    "name": "Eul's Scepter of Divinity",
    "cost": 2600,
    "tier": "Тир-3: Мидгейм",
    "tags": {
      "cyclone": 1,
      "save": 0.8,
      "catch": 0.7,
      "dispel": 0.7
    },
    "counters": {
      "buff": 0.9,
      "save": 0.9,
      "ethereal": 0.9,
      "physical_shield": 0.9,
      "escape": 0.9,
      "mobility": 0.9,
      "carry": 0.7
    },
    "synergies": {
      "support": 0.8,
      "healing": 0.8,
      "caster": 0.8,
      "save": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/euls_scepter_of_divinity.png"
  },
  {
    "id": "wind_waker",
    "name": "Wind Waker",
    "cost": 6800,
    "tier": "Тир-5: Люкс слоты",
    "tags": {
      "cyclone": 1,
      "mobility": 0.8,
      "save": 1
    },
    "counters": {
      "escape": 0.9,
      "mobility": 0.9,
      "carry": 0.7
    },
    "synergies": {
      "initiator": 0.9,
      "escape": 0.7,
      "support": 0.8,
      "healing": 0.8,
      "caster": 0.8,
      "save": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/wind_waker.png"
  },
  {
    "id": "aether_lens",
    "name": "Aether Lens",
    "cost": 2275,
    "tier": "Тир-3: Мидгейм",
    "tags": {
      "cast_range": 1,
      "mana_regen": 0.6
    },
    "counters": {},
    "synergies": {
      "mana_dependent": 0.9,
      "caster": 0.9,
      "nuker": 0.8,
      "support": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/aether_lens.png"
  },
  {
    "id": "force_staff",
    "name": "Force Staff",
    "cost": 2200,
    "tier": "Тир-3: Мидгейм",
    "tags": {
      "mobility": 0.8,
      "save": 0.9,
      "repositioning": 1
    },
    "counters": {},
    "synergies": {
      "initiator": 0.9,
      "escape": 0.7,
      "support": 0.9,
      "healing": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/force_staff.png"
  },
  {
    "id": "hurricane_pike",
    "name": "Hurricane Pike",
    "cost": 4450,
    "tier": "Тир-4: Ключевые артефакты",
    "tags": {
      "mobility": 0.9,
      "save": 0.8,
      "attack_range": 1
    },
    "counters": {},
    "synergies": {
      "initiator": 0.9,
      "escape": 0.7,
      "support": 0.9,
      "healing": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/hurricane_pike.png"
  },
  {
    "id": "dagon",
    "name": "Dagon",
    "cost": 7650,
    "tier": "Тир-5: Люкс слоты",
    "tags": {
      "burst_damage": 1,
      "spell_lifesteal": 0.6
    },
    "counters": {},
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/dagon.png"
  },
  {
    "id": "necronomicon",
    "name": "Necronomicon",
    "cost": 4550,
    "tier": "Тир-4: Ключевые артефакты",
    "tags": {
      "summoning": 1,
      "pushing": 0.9,
      "true_sight": 0.8
    },
    "counters": {
      "invisibility": 1,
      "escape": 0.7,
      "juke": 0.8
    },
    "synergies": {
      "support": 0.9,
      "initiator": 0.7,
      "pusher": 0.9,
      "domination": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/necronomicon.png"
  },
  {
    "id": "aghanims_scepter",
    "name": "Aghanim's Scepter",
    "cost": 4200,
    "tier": "Тир-4: Ключевые артефакты",
    "tags": {
      "spell_upgrade": 1,
      "stats": 0.7
    },
    "counters": {},
    "synergies": {
      "carry": 0.7,
      "illusioner": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/aghanims_scepter.png"
  },
  {
    "id": "aghanims_blessing",
    "name": "Aghanim's Blessing",
    "cost": 5800,
    "tier": "Тир-5: Люкс слоты",
    "tags": {
      "spell_upgrade": 1,
      "slot_efficiency": 1
    },
    "counters": {},
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/aghanims_blessing.png"
  },
  {
    "id": "aghanims_blessing___roshan",
    "name": "Aghanim's Blessing - Roshan",
    "cost": 5800,
    "tier": "Тир-5: Люкс слоты",
    "tags": {
      "spell_upgrade": 1,
      "slot_efficiency": 1
    },
    "counters": {},
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/aghanims_blessing___roshan.png"
  },
  {
    "id": "aghanims_shard",
    "name": "Aghanim's Shard",
    "cost": 1400,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "spell_upgrade": 0.8
    },
    "counters": {},
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/aghanims_shard.png"
  },
  {
    "id": "aghanims_shard___consumable",
    "name": "Aghanim's Shard - Consumable",
    "cost": 1400,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "spell_upgrade": 0.8
    },
    "counters": {},
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/aghanims_shard___consumable.png"
  },
  {
    "id": "refresher_orb",
    "name": "Refresher Orb",
    "cost": 5000,
    "tier": "Тир-5: Люкс слоты",
    "tags": {
      "cooldown_reset": 1,
      "mana_regen": 0.8
    },
    "counters": {},
    "synergies": {
      "mana_dependent": 0.9,
      "caster": 0.9,
      "nuker": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/refresher_orb.png"
  },
  {
    "id": "assault_cuirass",
    "name": "Assault Cuirass",
    "cost": 5125,
    "tier": "Тир-5: Люкс слоты",
    "tags": {
      "Armor_Corruption": 1,
      "aura_armor": 1,
      "aura_attack_speed": 1,
      "armor_corruption": 0.8,
      "pushing": 0.9
    },
    "counters": {
      "durable": 0.8,
      "tank": 0.8,
      "tuff": 0.8,
      "armor": 0.9
    },
    "synergies": {
      "support": 0.9,
      "pusher": 0.8,
      "teamfight": 0.9,
      "physical_damage": 0.9,
      "carry": 0.8,
      "burst": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/assault_cuirass.png"
  },
  {
    "id": "heart_of_tarrasque",
    "name": "Heart of Tarrasque",
    "cost": 5100,
    "tier": "Тир-5: Люкс слоты",
    "tags": {
      "tank": 1,
      "out_of_combat_regen": 1,
      "survivability": 0.9
    },
    "counters": {},
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart_of_tarrasque.png"
  },
  {
    "id": "black_king_bar",
    "name": "Black King Bar",
    "cost": 4050,
    "tier": "Тир-4: Ключевые артефакты",
    "tags": {
      "save": 0.7,
      "spell_immunity": 1,
      "survivability": 0.8
    },
    "counters": {
      "disabler": 1,
      "nuker": 0.9,
      "magical": 0.9,
      "mana_burn": 0.8,
      "magic_damage": 0.9,
      "aoe_magic": 0.9
    },
    "synergies": {
      "support": 0.9,
      "healing": 0.8,
      "carry": 0.9,
      "initiator": 0.8,
      "brawler": 0.9,
      "agility_core": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png"
  },
  {
    "id": "shivas_guard",
    "name": "Shiva's Guard",
    "cost": 4500,
    "tier": "Тир-4: Ключевые артефакты",
    "tags": {
      "Regen_Reduction": 1,
      "Armor_Corruption": 1,
      "aoe_damage": 0.7,
      "aoe_slow": 0.9,
      "aura_attack_slow": 1,
      "anti_heal": 0.8,
      "armor": 1
    },
    "counters": {
      "high_regen": 1,
      "healing": 1,
      "tank": 0.8,
      "sustain": 0.9,
      "lifesteal": 0.8,
      "physical_damage": 0.9,
      "carry": 0.8,
      "agility_core": 0.8,
      "burst": 0.7,
      "armor_corruption": 0.8,
      "illusioner": 0.9,
      "pusher": 0.8,
      "summoning": 0.9
    },
    "synergies": {
      "durable": 0.8,
      "tuff": 0.8,
      "tank": 0.8,
      "nuker": 0.8,
      "farming": 0.8,
      "pusher": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/shivas_guard.png"
  },
  {
    "id": "bloodstone",
    "name": "Bloodstone",
    "cost": 4700,
    "tier": "Тир-4: Ключевые артефакты",
    "tags": {
      "spell_lifesteal": 1,
      "aoe_mana": 0.8,
      "tank": 0.7
    },
    "counters": {},
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/bloodstone.png"
  },
  {
    "id": "linkens_sphere",
    "name": "Linken's Sphere",
    "cost": 4800,
    "tier": "Тир-4: Ключевые артефакты",
    "tags": {
      "spell_block": 1,
      "save": 0.7,
      "stats": 0.7
    },
    "counters": {
      "single_target_spell": 1,
      "catch": 0.8,
      "initiator": 0.7
    },
    "synergies": {
      "carry": 0.8,
      "illusioner": 0.8,
      "support": 0.9,
      "healing": 0.8,
      "escape": 0.7
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/linkens_sphere.png"
  },
  {
    "id": "lotus_orb",
    "name": "Lotus Orb",
    "cost": 3850,
    "tier": "Тир-4: Ключевые артефакты",
    "tags": {
      "spell_reflection": 1,
      "dispel": 0.9,
      "armor": 0.8,
      "save": 0.8
    },
    "counters": {
      "physical_damage": 0.9,
      "carry": 0.8,
      "agility_core": 0.8,
      "burst": 0.7,
      "armor_corruption": 0.8,
      "buff": 0.9,
      "save": 0.9,
      "ethereal": 0.9,
      "physical_shield": 0.9
    },
    "synergies": {
      "durable": 0.8,
      "tuff": 0.8,
      "tank": 0.8,
      "support": 0.8,
      "healing": 0.8,
      "save": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/lotus_orb.png"
  },
  {
    "id": "meteor_hammer",
    "name": "Meteor Hammer",
    "cost": 2850,
    "tier": "Тир-3: Мидгейм",
    "tags": {
      "aoe_control": 0.8,
      "building_damage": 1,
      "farming": 0.7
    },
    "counters": {},
    "synergies": {
      "carry": 0.9,
      "agility_core": 0.8,
      "farming": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/meteor_hammer.png"
  },
  {
    "id": "nullifier",
    "name": "Nullifier",
    "cost": 4350,
    "tier": "Тир-4: Ключевые артефакты",
    "tags": {
      "continuous_dispel": 1,
      "anti_save": 1
    },
    "counters": {
      "buff": 0.9,
      "save": 0.9,
      "ethereal": 0.9,
      "physical_shield": 0.9
    },
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/nullifier.png"
  },
  {
    "id": "aeon_disk",
    "name": "Aeon Disk",
    "cost": 3000,
    "tier": "Тир-3: Мидгейм",
    "tags": {
      "hard_save": 1,
      "survivability": 1,
      "dispel": 0.9
    },
    "counters": {
      "buff": 0.9,
      "save": 0.9,
      "ethereal": 0.9,
      "physical_shield": 0.9
    },
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/aeon_disk.png"
  },
  {
    "id": "kaya",
    "name": "Kaya",
    "cost": 2100,
    "tier": "Тир-3: Мидгейм",
    "tags": {
      "spell_amp": 0.6,
      "spell_lifesteal_amp": 0.5
    },
    "counters": {},
    "synergies": {
      "nuker": 0.9,
      "caster": 0.9,
      "magic_damage": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/kaya.png"
  },
  {
    "id": "trident",
    "name": "Trident",
    "cost": 6301,
    "tier": "Тир-5: Люкс слоты",
    "tags": {
      "extreme_stats": 1,
      "spell_amp": 0.8,
      "status_resistance": 0.8
    },
    "counters": {},
    "synergies": {
      "nuker": 0.9,
      "caster": 0.9,
      "magic_damage": 0.9,
      "durable": 0.8,
      "carry": 0.8,
      "brawler": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/trident.png"
  },
  {
    "id": "refresher_shard",
    "name": "Refresher Shard",
    "cost": 1000,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "cooldown_reset": 1,
      "single_use": 1
    },
    "counters": {},
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/refresher_shard.png"
  },
  {
    "id": "spirit_vessel",
    "name": "Spirit Vessel",
    "cost": 2725,
    "tier": "Тир-3: Мидгейм",
    "tags": {
      "Regen_Reduction": 1,
      "anti_heal": 1,
      "damage_over_time": 0.9,
      "healing": 0.8,
      "summoning": 0.8,
      "stats": 0.6
    },
    "counters": {
      "high_regen": 1,
      "healing": 1,
      "tank": 0.8,
      "sustain": 0.9,
      "lifesteal": 0.8
    },
    "synergies": {
      "support": 0.8,
      "healing": 0.8,
      "carry": 0.7,
      "illusioner": 0.8,
      "pusher": 0.9,
      "domination": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/spirit_vessel.png"
  },
  {
    "id": "essence_distiller",
    "name": "Essence Distiller",
    "cost": 1775,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "health": 0.5,
      "mana": 0.5
    },
    "counters": {},
    "synergies": {
      "mana_dependent": 0.9,
      "caster": 0.9,
      "nuker": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/essence_distiller.png"
  },
  {
    "id": "vanguard",
    "name": "Vanguard",
    "cost": 1700,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "tank": 0.8,
      "damage_block": 1
    },
    "counters": {},
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/vanguard.png"
  },
  {
    "id": "crimson_guard",
    "name": "Crimson Guard",
    "cost": 3725,
    "tier": "Тир-4: Ключевые артефакты",
    "tags": {
      "tank": 0.8,
      "damage_block": 1
    },
    "counters": {},
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/crimson_guard.png"
  },
  {
    "id": "blade_mail",
    "name": "Blade Mail",
    "cost": 2400,
    "tier": "Тир-3: Мидгейм",
    "tags": {
      "damage_reflection": 1,
      "armor": 0.7,
      "farming": 0.5
    },
    "counters": {
      "physical_damage": 0.9,
      "carry": 0.8,
      "agility_core": 0.8,
      "burst": 0.9,
      "armor_corruption": 0.8,
      "nuker": 0.8,
      "glass_cannon": 0.9,
      "aoe_damage": 0.7
    },
    "synergies": {
      "durable": 0.9,
      "tuff": 0.9,
      "tank": 0.9,
      "carry": 0.9,
      "agility_core": 0.8,
      "farming": 0.9,
      "initiator": 0.8,
      "brawler": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blade_mail.png"
  },
  {
    "id": "soul_booster",
    "name": "Soul Booster",
    "cost": 3000,
    "tier": "Тир-3: Мидгейм",
    "tags": {
      "health": 0.7,
      "mana": 0.7
    },
    "counters": {},
    "synergies": {
      "mana_dependent": 0.9,
      "caster": 0.9,
      "nuker": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/soul_booster.png"
  },
  {
    "id": "eternal_shroud",
    "name": "Eternal Shroud",
    "cost": 3900,
    "tier": "Тир-4: Ключевые артефакты",
    "tags": {
      "magic_resistance": 0.9,
      "mana_restore": 0.8,
      "tank": 0.7
    },
    "counters": {
      "magic_damage": 0.9,
      "nuker": 0.9,
      "aoe_magic": 0.8,
      "burst": 0.7
    },
    "synergies": {
      "durable": 0.8,
      "tank": 0.8,
      "tuff": 0.8,
      "initiator": 0.7
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/eternal_shroud.png"
  },
  {
    "id": "consecrated_wraps",
    "name": "Consecrated Wraps",
    "cost": 2600,
    "tier": "Тир-3: Мидгейм",
    "tags": {
      "healing": 0.8,
      "summoning": 0.8,
      "save": 0.7
    },
    "counters": {},
    "synergies": {
      "support": 0.9,
      "healing": 0.8,
      "pusher": 0.9,
      "domination": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/consecrated_wraps.png"
  },
  {
    "id": "crellas_crozier",
    "name": "Crella's Crozier",
    "cost": 4800,
    "tier": "Тир-4: Ключевые артефакты",
    "tags": {
      "control": 0.8,
      "stats": 0.7
    },
    "counters": {},
    "synergies": {
      "carry": 0.7,
      "illusioner": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/crellas_crozier.png"
  },
  {
    "id": "divine_rapier",
    "name": "Divine Rapier",
    "cost": 5600,
    "tier": "Тир-5: Люкс слоты",
    "tags": {
      "extreme_damage": 1,
      "high_risk": 1,
      "true_strike": 0.25
    },
    "counters": {
      "evasion": 1
    },
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/divine_rapier.png"
  },
  {
    "id": "monkey_king_bar",
    "name": "Monkey King Bar",
    "cost": 5000,
    "tier": "Тир-5: Люкс слоты",
    "tags": {
      "True_Strike": 1,
      "true_strike": 1,
      "damage_proc": 0.9
    },
    "counters": {
      "evasion": 1
    },
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/monkey_king_bar.png"
  },
  {
    "id": "radiance",
    "name": "Radiance",
    "cost": 4700,
    "tier": "Тир-4: Ключевые артефакты",
    "tags": {
      "Magic_Damage": 1,
      "Item_Evasion": 1,
      "aoe_damage": 1,
      "evasion": 0.8,
      "farming": 0.9
    },
    "counters": {
      "physical_damage": 0.8,
      "carry": 0.8,
      "agility_core": 0.8,
      "illusioner": 0.9,
      "pusher": 0.8,
      "summoning": 0.9
    },
    "synergies": {
      "carry": 0.8,
      "agility_core": 0.9,
      "farming": 0.8,
      "nuker": 0.8,
      "pusher": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/radiance.png"
  },
  {
    "id": "butterfly",
    "name": "Butterfly",
    "cost": 5450,
    "tier": "Тир-5: Люкс слоты",
    "tags": {
      "Item_Evasion": 1,
      "evasion": 1,
      "agility_boost": 1
    },
    "counters": {
      "physical_damage": 0.8,
      "carry": 0.8,
      "agility_core": 0.8
    },
    "synergies": {
      "agility_core": 0.9,
      "carry": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/butterfly.png"
  },
  {
    "id": "daedalus",
    "name": "Daedalus",
    "cost": 5100,
    "tier": "Тир-5: Люкс слоты",
    "tags": {
      "crit": 1,
      "burst_damage": 1
    },
    "counters": {},
    "synergies": {
      "carry": 0.9,
      "burst": 0.9,
      "physical_damage": 0.9,
      "agility_core": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/daedalus.png"
  },
  {
    "id": "skull_basher",
    "name": "Skull Basher",
    "cost": 2875,
    "tier": "Тир-3: Мидгейм",
    "tags": {
      "bash": 0.8,
      "control": 0.5
    },
    "counters": {
      "escape": 0.9,
      "mobility": 0.9,
      "carry": 0.7
    },
    "synergies": {
      "carry": 0.8,
      "agility_core": 0.8,
      "brawler": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/skull_basher.png"
  },
  {
    "id": "battle_fury",
    "name": "Battle Fury",
    "cost": 3900,
    "tier": "Тир-4: Ключевые артефакты",
    "tags": {
      "cleave": 1,
      "farming": 1,
      "sustain": 0.7
    },
    "counters": {},
    "synergies": {
      "carry": 0.9,
      "agility_core": 0.8,
      "farming": 0.9,
      "physical_damage": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/battle_fury.png"
  },
  {
    "id": "manta_style",
    "name": "Manta Style",
    "cost": 4650,
    "tier": "Тир-4: Ключевые артефакты",
    "tags": {
      "illusions": 1,
      "dispel": 0.9,
      "pushing": 0.8,
      "mobility": 0.7
    },
    "counters": {
      "buff": 0.9,
      "save": 0.9,
      "ethereal": 0.9,
      "physical_shield": 0.9
    },
    "synergies": {
      "initiator": 0.9,
      "escape": 0.7,
      "agility_core": 0.9,
      "illusioner": 0.9,
      "carry": 0.8,
      "farming": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/manta_style.png"
  },
  {
    "id": "crystalys",
    "name": "Crystalys",
    "cost": 2000,
    "tier": "Тир-3: Мидгейм",
    "tags": {
      "crit": 0.6,
      "damage": 0.5
    },
    "counters": {},
    "synergies": {
      "carry": 0.9,
      "agility_core": 0.9,
      "burst": 0.9,
      "physical_damage": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/crystalys.png"
  },
  {
    "id": "dragon_lance",
    "name": "Dragon Lance",
    "cost": 1900,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "attack_range": 1,
      "stats": 0.6
    },
    "counters": {},
    "synergies": {
      "carry": 0.7,
      "illusioner": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/dragon_lance.png"
  },
  {
    "id": "armlet_of_mordiggian",
    "name": "Armlet of Mordiggian",
    "cost": 2500,
    "tier": "Тир-3: Мидгейм",
    "tags": {
      "health_drain": 1,
      "survivability": 0.8,
      "damage": 0.8
    },
    "counters": {},
    "synergies": {
      "carry": 0.8,
      "agility_core": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/armlet_of_mordiggian.png"
  },
  {
    "id": "shadow_blade",
    "name": "Shadow Blade",
    "cost": 3250,
    "tier": "Тир-3: Мидгейм",
    "tags": {
      "invisibility": 0.8,
      "initiation": 0.8
    },
    "counters": {},
    "synergies": {
      "initiator": 0.8,
      "escape": 0.8,
      "agility_core": 0.7
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/shadow_blade.png"
  },
  {
    "id": "silver_edge",
    "name": "Silver Edge",
    "cost": 5700,
    "tier": "Тир-5: Люкс слоты",
    "tags": {
      "Break": 1,
      "Save_In_Invis": 1,
      "break": 1,
      "invisibility": 0.9,
      "initiation": 0.8
    },
    "counters": {
      "passive_tank": 1,
      "bristleback": 1,
      "durable": 0.8,
      "tuff": 0.8,
      "evasion": 0.7
    },
    "synergies": {
      "initiator": 0.8,
      "escape": 0.8,
      "agility_core": 0.7
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/silver_edge.png"
  },
  {
    "id": "sange_and_yasha",
    "name": "Sange and Yasha",
    "cost": 4200,
    "tier": "Тир-4: Ключевые артефакты",
    "tags": {
      "status_resistance": 0.8,
      "mobility": 0.8,
      "stats": 0.8
    },
    "counters": {},
    "synergies": {
      "initiator": 0.9,
      "escape": 0.7,
      "carry": 0.8,
      "illusioner": 0.8,
      "durable": 0.8,
      "brawler": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/sange_and_yasha.png"
  },
  {
    "id": "kaya_and_sange",
    "name": "Kaya and Sange",
    "cost": 4200,
    "tier": "Тир-4: Ключевые артефакты",
    "tags": {
      "status_resistance": 0.8,
      "spell_amp": 0.8,
      "stats": 0.8
    },
    "counters": {},
    "synergies": {
      "carry": 0.8,
      "illusioner": 0.8,
      "nuker": 0.9,
      "caster": 0.9,
      "magic_damage": 0.9,
      "durable": 0.8,
      "brawler": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/kaya_and_sange.png"
  },
  {
    "id": "yasha_and_kaya",
    "name": "Yasha and Kaya",
    "cost": 4200,
    "tier": "Тир-4: Ключевые артефакты",
    "tags": {
      "mobility": 0.8,
      "spell_amp": 0.8,
      "stats": 0.8
    },
    "counters": {},
    "synergies": {
      "initiator": 0.9,
      "escape": 0.7,
      "carry": 0.7,
      "illusioner": 0.8,
      "nuker": 0.9,
      "caster": 0.9,
      "magic_damage": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/yasha_and_kaya.png"
  },
  {
    "id": "satanic",
    "name": "Satanic",
    "cost": 5050,
    "tier": "Тир-5: Люкс слоты",
    "tags": {
      "lifesteal_burst": 1,
      "hard_dispel": 0.8,
      "survivability": 1
    },
    "counters": {},
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png"
  },
  {
    "id": "mjollnir",
    "name": "Mjollnir",
    "cost": 5500,
    "tier": "Тир-5: Люкс слоты",
    "tags": {
      "Magic_Damage": 1,
      "farming": 0.9,
      "aoe_damage": 0.7
    },
    "counters": {
      "illusioner": 0.9,
      "pusher": 0.8,
      "summoning": 0.9
    },
    "synergies": {
      "carry": 0.9,
      "agility_core": 0.8,
      "farming": 0.8,
      "nuker": 0.8,
      "pusher": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/mjollnir.png"
  },
  {
    "id": "eye_of_skadi",
    "name": "Eye of Skadi",
    "cost": 5900,
    "tier": "Тир-5: Люкс слоты",
    "tags": {
      "Regen_Reduction": 1,
      "anti_heal": 0.5,
      "power_boost": 0.7,
      "slow": 0.8,
      "stats": 0.9
    },
    "counters": {
      "high_regen": 1,
      "healing": 1,
      "tank": 0.8,
      "sustain": 0.9,
      "lifesteal": 0.8
    },
    "synergies": {
      "carry": 0.7,
      "illusioner": 0.8,
      "support": 0.7,
      "initiator": 0.8,
      "catch": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/eye_of_skadi.png"
  },
  {
    "id": "sange",
    "name": "Sange",
    "cost": 2100,
    "tier": "Тир-3: Мидгейм",
    "tags": {
      "status_resistance": 0.5,
      "health": 0.5
    },
    "counters": {},
    "synergies": {
      "durable": 0.8,
      "carry": 0.8,
      "brawler": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/sange.png"
  },
  {
    "id": "helm_of_the_dominator",
    "name": "Helm of the Dominator",
    "cost": 2550,
    "tier": "Тир-3: Мидгейм",
    "tags": {
      "domination": 0.8,
      "aura": 0.7,
      "pushing": 0.7
    },
    "counters": {},
    "synergies": {
      "pusher": 0.9,
      "support": 0.7
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/helm_of_the_dominator.png"
  },
  {
    "id": "helm_of_the_overlord",
    "name": "Helm of the Overlord",
    "cost": 5650,
    "tier": "Тир-5: Люкс слоты",
    "tags": {
      "ancient_domination": 1,
      "aura": 0.9,
      "pushing": 0.9
    },
    "counters": {},
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/helm_of_the_overlord.png"
  },
  {
    "id": "maelstrom",
    "name": "Maelstrom",
    "cost": 2950,
    "tier": "Тир-3: Мидгейм",
    "tags": {
      "farming": 0.9,
      "aoe_damage": 0.7
    },
    "counters": {
      "illusioner": 0.9,
      "pusher": 0.8,
      "summoning": 0.9
    },
    "synergies": {
      "carry": 0.9,
      "agility_core": 0.8,
      "farming": 0.8,
      "nuker": 0.8,
      "pusher": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/maelstrom.png"
  },
  {
    "id": "gleipnir",
    "name": "Gleipnir",
    "cost": 4650,
    "tier": "Тир-4: Ключевые артефакты",
    "tags": {
      "aoe_control": 1,
      "catch": 0.9,
      "farming": 0.7
    },
    "counters": {},
    "synergies": {
      "carry": 0.9,
      "agility_core": 0.8,
      "farming": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/gleipnir.png"
  },
  {
    "id": "desolator",
    "name": "Desolator",
    "cost": 3500,
    "tier": "Тир-4: Ключевые артефакты",
    "tags": {
      "Armor_Corruption": 1,
      "armor_corruption": 1,
      "building_damage": 0.9
    },
    "counters": {
      "durable": 0.8,
      "tank": 0.8,
      "tuff": 0.8,
      "armor": 0.9
    },
    "synergies": {
      "physical_damage": 0.9,
      "carry": 0.8,
      "burst": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/desolator.png"
  },
  {
    "id": "yasha",
    "name": "Yasha",
    "cost": 2100,
    "tier": "Тир-3: Мидгейм",
    "tags": {
      "mobility": 0.5,
      "attack_speed": 0.5
    },
    "counters": {},
    "synergies": {
      "initiator": 0.9,
      "escape": 0.7,
      "carry": 0.9,
      "agility_core": 0.9,
      "attack_speed": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/yasha.png"
  },
  {
    "id": "mask_of_madness",
    "name": "Mask of Madness",
    "cost": 1900,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "attack_speed_burst": 1,
      "lifesteal": 0.7,
      "silence_self": 1,
      "farming": 0.8
    },
    "counters": {},
    "synergies": {
      "carry": 0.8,
      "agility_core": 0.8,
      "farming": 0.9,
      "brawler": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/mask_of_madness.png"
  },
  {
    "id": "diffusal_blade",
    "name": "Diffusal Blade",
    "cost": 3850,
    "tier": "Тир-4: Ключевые артефакты",
    "tags": {
      "mana_drain": 1,
      "slow": 0.6
    },
    "counters": {
      "mana_dependent": 1,
      "caster": 0.9,
      "medusa": 1
    },
    "synergies": {
      "support": 0.7,
      "initiator": 0.8,
      "catch": 0.8,
      "illusioner": 0.9,
      "agility_core": 0.8,
      "mobility": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/diffusal_blade.png"
  },
  {
    "id": "disperser",
    "name": "Disperser",
    "cost": 6100,
    "tier": "Тир-5: Люкс слоты",
    "tags": {
      "aoe_slow": 0.9,
      "haste": 0.8,
      "save": 0.6,
      "mana_drain": 1,
      "slow": 0.6
    },
    "counters": {
      "mana_dependent": 1,
      "caster": 0.9,
      "medusa": 1
    },
    "synergies": {
      "support": 0.9,
      "initiator": 0.8,
      "catch": 0.8,
      "healing": 0.8,
      "illusioner": 0.9,
      "agility_core": 0.8,
      "mobility": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/disperser.png"
  },
  {
    "id": "ethereal_blade",
    "name": "Ethereal Blade",
    "cost": 5200,
    "tier": "Тир-5: Люкс слоты",
    "tags": {
      "ethereal": 1,
      "spell_burst": 0.9,
      "save": 0.7
    },
    "counters": {
      "physical_damage": 0.9,
      "carry": 0.8,
      "agility_core": 0.8
    },
    "synergies": {
      "support": 0.9,
      "nuker": 0.9,
      "save": 0.8,
      "healing": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ethereal_blade.png"
  },
  {
    "id": "soul_ring",
    "name": "Soul Ring",
    "cost": 805,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "mana_burst": 0.8,
      "health_cost": 1,
      "early_power": 0.6
    },
    "counters": {},
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/soul_ring.png"
  },
  {
    "id": "arcane_boots",
    "name": "Arcane Boots",
    "cost": 1500,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "aoe_mana": 1,
      "movement_speed": 0.7
    },
    "counters": {},
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/arcane_boots.png"
  },
  {
    "id": "octarine_core",
    "name": "Octarine Core",
    "cost": 4900,
    "tier": "Тир-4: Ключевые артефакты",
    "tags": {
      "cooldown_reduction": 1,
      "health": 0.8,
      "mana": 0.8
    },
    "counters": {},
    "synergies": {
      "mana_dependent": 0.9,
      "caster": 0.9,
      "nuker": 0.8,
      "teamfight": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/octarine_core.png"
  },
  {
    "id": "orb_of_venom",
    "name": "Orb of Venom",
    "cost": 350,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "slow": 0.4,
      "damage_over_time": 0.3
    },
    "counters": {},
    "synergies": {
      "support": 0.7,
      "initiator": 0.8,
      "catch": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/orb_of_venom.png"
  },
  {
    "id": "orb_of_blight",
    "name": "Orb of Blight",
    "cost": 300,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "armor_corruption": 0.4
    },
    "counters": {
      "durable": 0.8,
      "tank": 0.8,
      "tuff": 0.8,
      "armor": 0.9
    },
    "synergies": {
      "physical_damage": 0.9,
      "carry": 0.8,
      "burst": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/orb_of_blight.png"
  },
  {
    "id": "orb_of_corrosion",
    "name": "Orb of Corrosion",
    "cost": 1050,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "slow": 0.5,
      "armor_corruption": 0.6,
      "damage_over_time": 0.5
    },
    "counters": {
      "durable": 0.8,
      "tank": 0.8,
      "tuff": 0.8,
      "armor": 0.9
    },
    "synergies": {
      "support": 0.7,
      "initiator": 0.8,
      "catch": 0.8,
      "physical_damage": 0.9,
      "carry": 0.8,
      "burst": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/orb_of_corrosion.png"
  },
  {
    "id": "orb_of_frost",
    "name": "Orb of Frost",
    "cost": 300,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "slow": 0.4,
      "magic_damage": 0.3
    },
    "counters": {},
    "synergies": {
      "support": 0.7,
      "initiator": 0.8,
      "catch": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/orb_of_frost.png"
  },
  {
    "id": "falcon_blade",
    "name": "Falcon Blade",
    "cost": 1125,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "sustain": 0.7,
      "early_power": 0.8,
      "health": 0.5
    },
    "counters": {},
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/falcon_blade.png"
  },
  {
    "id": "mage_slayer",
    "name": "Mage Slayer",
    "cost": 3100,
    "tier": "Тир-3: Мидгейм",
    "tags": {
      "spell_damage_reduction": 1,
      "magic_resistance": 0.8,
      "damage_over_time": 0.6
    },
    "counters": {
      "magic_damage": 0.9,
      "nuker": 0.9,
      "aoe_magic": 0.8,
      "burst": 0.7
    },
    "synergies": {
      "durable": 0.8,
      "tank": 0.8,
      "tuff": 0.8,
      "initiator": 0.7
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/mage_slayer.png"
  },
  {
    "id": "drum_of_endurance",
    "name": "Drum of Endurance",
    "cost": 1625,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "aura_movement": 0.8,
      "aura_attack_speed": 0.8,
      "catch": 0.5
    },
    "counters": {},
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/drum_of_endurance.png"
  },
  {
    "id": "boots_of_bearing",
    "name": "Boots of Bearing",
    "cost": 4225,
    "tier": "Тир-4: Ключевые артефакты",
    "tags": {
      "haste": 1,
      "aura_movement": 0.9,
      "save": 0.7
    },
    "counters": {},
    "synergies": {
      "support": 0.9,
      "healing": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/boots_of_bearing.png"
  },
  {
    "id": "solar_crest",
    "name": "Solar Crest",
    "cost": 2575,
    "tier": "Тир-3: Мидгейм",
    "tags": {
      "single_target_buff": 1,
      "armor": 0.8,
      "shield": 0.7,
      "save": 0.7
    },
    "counters": {
      "physical_damage": 0.9,
      "carry": 0.8,
      "agility_core": 0.8,
      "burst": 0.7,
      "armor_corruption": 0.8
    },
    "synergies": {
      "durable": 0.8,
      "tuff": 0.8,
      "tank": 0.8,
      "support": 0.9,
      "healing": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/solar_crest.png"
  },
  {
    "id": "pavise",
    "name": "Pavise",
    "cost": 1350,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "physical_shield": 1,
      "save": 0.6
    },
    "counters": {},
    "synergies": {
      "support": 0.9,
      "healing": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/pavise.png"
  },
  {
    "id": "smoke_of_deceit",
    "name": "Smoke of Deceit",
    "cost": 50,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "invisibility_team": 1,
      "initiation": 1,
      "mobility": 0.5
    },
    "counters": {},
    "synergies": {
      "initiator": 0.8,
      "escape": 0.7,
      "support": 0.9,
      "teamfight": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/smoke_of_deceit.png"
  },
  {
    "id": "tome_of_knowledge",
    "name": "Tome of Knowledge",
    "cost": 75,
    "tier": "Тир-1: Начальные предметы",
    "tags": {
      "experience": 1
    },
    "counters": {},
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tome_of_knowledge.png"
  },
  {
    "id": "veil_of_discord",
    "name": "Veil of Discord",
    "cost": 1700,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "spell_amp": 0.8,
      "aoe_debuff": 0.8,
      "stats": 0.5
    },
    "counters": {},
    "synergies": {
      "carry": 0.7,
      "illusioner": 0.8,
      "nuker": 0.9,
      "caster": 0.9,
      "magic_damage": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/veil_of_discord.png"
  },
  {
    "id": "revenants_brooch",
    "name": "Revenant's Brooch",
    "cost": 3300,
    "tier": "Тир-3: Мидгейм",
    "tags": {
      "magic_attacks": 1,
      "ethereal_pierce": 1,
      "catch": 0.7
    },
    "counters": {},
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/revenants_brooch.png"
  },
  {
    "id": "parasma",
    "name": "Parasma",
    "cost": 5975,
    "tier": "Тир-5: Люкс слоты",
    "tags": {
      "magic_attacks": 0.8,
      "magic_corruption": 1,
      "stats": 0.8
    },
    "counters": {},
    "synergies": {
      "carry": 0.7,
      "illusioner": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/parasma.png"
  },
  {
    "id": "guardian_greaves",
    "name": "Guardian Greaves",
    "cost": 4450,
    "tier": "Тир-4: Ключевые артефакты",
    "tags": {
      "aoe_heal": 1,
      "dispel": 0.9,
      "aura_armor": 0.9,
      "save": 0.8
    },
    "counters": {
      "buff": 0.9,
      "save": 0.9,
      "ethereal": 0.9,
      "physical_shield": 0.9
    },
    "synergies": {
      "support": 0.9,
      "healing": 0.8,
      "pusher": 0.8,
      "teamfight": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/guardian_greaves.png"
  },
  {
    "id": "rod_of_atos",
    "name": "Rod of Atos",
    "cost": 2250,
    "tier": "Тир-3: Мидгейм",
    "tags": {
      "root": 0.9,
      "catch": 0.8,
      "stats": 0.6
    },
    "counters": {
      "escape": 0.9,
      "mobility": 0.9,
      "carry": 0.7
    },
    "synergies": {
      "carry": 0.7,
      "illusioner": 0.8,
      "catch": 0.9,
      "support": 0.8,
      "initiator": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/rod_of_atos.png"
  },
  {
    "id": "abyssal_blade",
    "name": "Abyssal Blade",
    "cost": 6250,
    "tier": "Тир-5: Люкс слоты",
    "tags": {
      "hard_control": 1,
      "survivability": 0.8,
      "bash": 0.8,
      "control": 0.5
    },
    "counters": {
      "escape": 0.9,
      "mobility": 0.9,
      "carry": 0.7
    },
    "synergies": {
      "carry": 0.8,
      "agility_core": 0.8,
      "brawler": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/abyssal_blade.png"
  },
  {
    "id": "heavens_halberd",
    "name": "Heaven's Halberd",
    "cost": 3400,
    "tier": "Тир-3: Мидгейм",
    "tags": {
      "Item_Evasion": 1,
      "disarm": 1,
      "evasion": 0.8,
      "status_resistance": 0.7,
      "anti_carry": 0.9
    },
    "counters": {
      "physical_damage": 0.9,
      "carry": 0.9,
      "agility_core": 0.8,
      "attack_speed": 0.9
    },
    "synergies": {
      "agility_core": 0.9,
      "carry": 0.8,
      "durable": 0.8,
      "brawler": 0.8,
      "support": 0.8,
      "anti_carry": 0.9,
      "anti_physical": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heavens_halberd.png"
  },
  {
    "id": "tranquil_boots",
    "name": "Tranquil Boots",
    "cost": 900,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "health_regen": 0.8,
      "movement_speed": 0.8,
      "roaming": 0.9
    },
    "counters": {},
    "synergies": {
      "support": 0.8,
      "healing": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tranquil_boots.png"
  },
  {
    "id": "shadow_amulet",
    "name": "Shadow Amulet",
    "cost": 900,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "invisibility_stationary": 1,
      "save": 0.4
    },
    "counters": {},
    "synergies": {
      "support": 0.9,
      "healing": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/shadow_amulet.png"
  },
  {
    "id": "glimmer_cape",
    "name": "Glimmer Cape",
    "cost": 2150,
    "tier": "Тир-3: Мидгейм",
    "tags": {
      "invisibility": 0.9,
      "magic_shield": 0.8,
      "save": 0.9
    },
    "counters": {
      "magic_damage": 0.9,
      "nuker": 0.9,
      "aoe_magic": 0.8,
      "burst": 0.7
    },
    "synergies": {
      "support": 0.9,
      "healing": 0.8,
      "initiator": 0.8,
      "escape": 0.8,
      "agility_core": 0.7
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/glimmer_cape.png"
  },
  {
    "id": "pocket_roshan",
    "name": "Pocket Roshan",
    "cost": 1000,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "summoning": 1,
      "utility": 0.8
    },
    "counters": {},
    "synergies": {
      "pusher": 0.9,
      "domination": 0.9
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/pocket_roshan.png"
  },
  {
    "id": "harpoon",
    "name": "Harpoon",
    "cost": 4700,
    "tier": "Тир-4: Ключевые артефакты",
    "tags": {
      "catch": 1,
      "mobility": 0.8,
      "double_attack": 0.8
    },
    "counters": {},
    "synergies": {
      "initiator": 0.9,
      "escape": 0.7
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/harpoon.png"
  },
  {
    "id": "specialists_array",
    "name": "Specialist's Array",
    "cost": 2550,
    "tier": "Тир-3: Мидгейм",
    "tags": {
      "multishot": 1,
      "stats": 0.6
    },
    "counters": {},
    "synergies": {
      "carry": 0.7,
      "illusioner": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/specialists_array.png"
  },
  {
    "id": "hydras_breath",
    "name": "Hydra's Breath",
    "cost": 5900,
    "tier": "Тир-5: Люкс слоты",
    "tags": {
      "aoe_damage": 0.8,
      "damage_over_time": 0.8
    },
    "counters": {
      "illusioner": 0.9,
      "pusher": 0.8,
      "summoning": 0.9
    },
    "synergies": {
      "nuker": 0.8,
      "farming": 0.8,
      "pusher": 0.8
    },
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/hydras_breath.png"
  },
  {
    "id": "chasm_stone",
    "name": "Chasm Stone",
    "cost": 800,
    "tier": "Тир-2: Ранние предметы",
    "tags": {
      "control": 0.8,
      "earth_magic": 0.7
    },
    "counters": {},
    "synergies": {},
    "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/chasm_stone.png"
  }
];
