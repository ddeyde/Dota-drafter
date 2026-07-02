const fs = require('fs');
let data = fs.readFileSync('generate_data.cjs', 'utf-8');

const updates = {
    'Alchemist': { sustain: 1.0, healing: 1.0, melee: 1.0 },
    'Huskar': { sustain: 1.0, passive_reliant: 0.9, ranged: 1.0, lane_bully: 0.9 },
    'Spectre': { passive_reliant: 1.0, melee: 1.0 },
    'Bristleback': { passive_reliant: 1.0, sustain: 0.8, melee: 1.0 },
    'Phantom Assassin': { passive_reliant: 1.0, melee: 1.0 },
    'Lifestealer': { sustain: 1.0, melee: 1.0 },
    'Necrophos': { sustain: 1.0, healing: 1.0, ranged: 1.0, lane_bully: 0.8 },
    'Slark': { sustain: 0.9, passive_reliant: 0.8, melee: 1.0 },
    'Dragon Knight': { sustain: 0.8, passive_reliant: 0.8, melee: 1.0 },
    'Timbersaw': { sustain: 0.8, passive_reliant: 0.9, melee: 1.0 },
    'Ancient Apparition': { anti_heal: 1.0, ranged: 1.0 },
    'Doom': { anti_heal: 0.8, melee: 1.0 },
    'Viper': { break: 1.0, ranged: 1.0, lane_bully: 1.0 },
    'Shadow Demon': { break: 0.8, ranged: 1.0 },
    'Hoodwink': { break: 0.8, ranged: 1.0 },
    'Legion Commander': { melee: 1.0, sustain: 0.8 },
    'Night Stalker': { melee: 1.0 },
    'Bane': { ranged: 1.0 },
    'Crystal Maiden': { ranged: 1.0 },
    'Lina': { ranged: 1.0, lane_bully: 0.8 },
    'Riki': { melee: 1.0 },
    'Sand King': { melee: 1.0 },
    'Pudge': { melee: 1.0, weak_laner: 1.0 },
    'Magnus': { melee: 1.0 },
    'Slardar': { melee: 1.0 },
    'Axe': { melee: 1.0 },
    'Earthshaker': { melee: 1.0 },
    'Tusk': { melee: 1.0 },
    'Chaos Knight': { melee: 1.0, sustain: 0.7 },
    'Bloodseeker': { melee: 1.0, sustain: 0.9 },
    'Enchantress': { ranged: 1.0, sustain: 0.8, passive_reliant: 0.8, lane_bully: 0.9 },
    'Outworld Destroyer': { ranged: 1.0, lane_bully: 1.0 },
    'Sniper': { ranged: 1.0, lane_bully: 0.9 },
    'Shadow Fiend': { ranged: 1.0, lane_bully: 0.9 }
};

for (const [hero, tags] of Object.entries(updates)) {
    const regex = new RegExp(`("${hero}": \\{[\\s\\S]*?\\})`, 'm');
    const match = data.match(regex);
    if (match) {
        let block = match[1];
        for (const [tag, value] of Object.entries(tags)) {
            if (!block.includes(`"${tag}"`)) {
                block = block.replace('{', `{\n        "${tag}": ${value},`);
            }
        }
        data = data.replace(match[1], block);
    }
}

fs.writeFileSync('generate_data.cjs', data);
