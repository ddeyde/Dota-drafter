const fs = require('fs');
let data = fs.readFileSync('src/data/dotaData.ts', 'utf-8');

const updates = {
  'Anti-Mage': { farm_weight: 5, lane_strength: 3 },
  'Alchemist': { farm_weight: 5, lane_strength: 4, push_tempo: 3 },
  'Enigma': { farm_weight: 3, lane_strength: 5, pierces_bkb: 1 },
  'Lycan': { push_tempo: 5, lane_strength: 6 },
  'Broodmother': { push_tempo: 5, lane_strength: 8 },
  'Leshrac': { push_tempo: 5, farm_weight: 4, lane_strength: 6 },
  'Axe': { aoe_def: 4, lane_strength: 7, pierces_bkb: 1 },
  'Sand King': { aoe_def: 4, lane_strength: 6 },
  'Underlord': { aoe_def: 5, lane_strength: 7 },
  'Lifestealer': { debuff_immunity: 1, farm_weight: 4, lane_strength: 7 },
  'Juggernaut': { debuff_immunity: 1, farm_weight: 4, lane_strength: 7 },
  'Bane': { pierces_bkb: 1, lane_strength: 8 },
  'Beastmaster': { pierces_bkb: 1, lane_strength: 8, push_tempo: 4 },
  'Shadow Demon': { pierces_bkb: 1, offensive_dispel: 1, lane_strength: 6 },
  'Disruptor': { lane_strength: 7 },
  'Windranger': { dispellable_buff: 1, lane_strength: 7 },
  'Necrophos': { dispellable_buff: 1, lane_strength: 8 },
  'Pugna': { dispellable_buff: 1, lane_strength: 7 },
  'Brewmaster': { offensive_dispel: 1, lane_strength: 6 },
  'Razor': { offensive_dispel: 1, lane_strength: 9 },
  'Oracle': { offensive_dispel: 1, lane_strength: 6 },
  'Enchantress': { offensive_dispel: 1, lane_strength: 9, harass_heavy: 1 },
  'Earthshaker': { lane_strength: 3 }, 
  'Grimstroke': { harass_heavy: 1, lane_strength: 8 },
  'Ancient Apparition': { lane_strength: 5 },
  'Pudge': { pierces_bkb: 1, lane_strength: 3 },
  'Legion Commander': { pierces_bkb: 1, lane_strength: 7, dispellable_buff: 1 },
  'Magnus': { pierces_bkb: 1, lane_strength: 6 },
  'Batrider': { pierces_bkb: 1, lane_strength: 8 },
  'Sniper': { harass_heavy: 1, lane_strength: 8, farm_weight: 4 },
  'Viper': { harass_heavy: 1, lane_strength: 9 },
  'Huskar': { harass_heavy: 1, lane_strength: 9 },
  'Spectre': { farm_weight: 5, lane_strength: 3, dispellable_buff: 1 }
};

for (const [hero, tags] of Object.entries(updates)) {
    const regex = new RegExp(`("name": "${hero}"[\\s\\S]*?"tags": \\{)`, 'm');
    const match = data.match(regex);
    if (match) {
        let block = match[1];
        let tagsBlock = '';
        for (const [tag, value] of Object.entries(tags)) {
            tagsBlock += `\n      "${tag}": ${value},`;
        }
        data = data.replace(regex, `$1${tagsBlock}`);
    }
}

fs.writeFileSync('src/data/dotaData.ts', data);
