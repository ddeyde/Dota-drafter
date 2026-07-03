const fs = require('fs');
let data = fs.readFileSync('src/data/dotaData.ts', 'utf-8');

const heroTags = {
  'Phantom Assassin': { 'Inherent_Evasion': 1, 'Physical_Burst': 1 },
  'Bristleback': { 'Directional_Passive_Damage_Reduction': 1, 'High_Health_Regen': 1 },
  'Morphling': { 'High_Health_Regen': 1, 'Healing_Dependency': 1 },
  'Necrophos': { 'High_Health_Regen': 1, 'Healing_Dependency': 1 },
  'Timbersaw': { 'Passive_Armor_Regen_Gain': 1, 'High_Health_Regen': 1 },
  'Bane': { 'Single_target_Disabler': 1, 'Pure_Damage': 1, 'Magic_debuffs': 1 },
  'Viper': { 'Passive_Abilities_Core': 1 },
  'Huskar': { 'Passive_Abilities_Core': 1, 'Healing_Dependency': 1, 'High_Health_Regen': 1 },
  'Slark': { 'Save_In_Invis': 1 },
  'Riki': { 'Save_In_Invis': 1, 'Inherent_Evasion': 1 },
  'Bounty Hunter': { 'Save_In_Invis': 1 },
  'Treant Protector': { 'Save_In_Invis': 1 },
  'Axe': { 'High_Armor_Physical': 1 },
  'Tidehunter': { 'High_Armor_Physical': 1, 'Passive_Abilities_Core': 1 },
  'Dragon Knight': { 'High_Armor_Physical': 1, 'Passive_Armor_Regen_Gain': 1 },
  'Faceless Void': { 'Passive_Abilities_Core': 1 }
};

const itemTags = {
  'Monkey King Bar': { 'True_Strike': 1 },
  'Silver Edge': { 'Break': 1, 'Save_In_Invis': 1 },
  'Spirit Vessel': { 'Regen_Reduction': 1 },
  'Eye of Skadi': { 'Regen_Reduction': 1 },
  'Shiva\'s Guard': { 'Regen_Reduction': 1, 'Armor_Corruption': 1 },
  'Bloodthorn': { 'True_Strike_On_Target': 1, 'True_Strike': 1, 'Silence': 1 },
  'Desolator': { 'Armor_Corruption': 1 },
  'Assault Cuirass': { 'Armor_Corruption': 1 },
  'Mjollnir': { 'Magic_Damage': 1 },
  'Radiance': { 'Magic_Damage': 1, 'Item_Evasion': 1 },
  'Dust of Appearance': { 'True_Sight': 1, 'Catch': 1 },
  'Gem of True Sight': { 'True_Sight': 1 },
  'Scythe of Vyse': { 'Catch': 1 },
  'Orchid Malevolence': { 'Catch': 1, 'Silence': 1 },
  'Butterfly': { 'Item_Evasion': 1 },
  'Heaven\'s Halberd': { 'Item_Evasion': 1 }
};

for (const [hero, tags] of Object.entries(heroTags)) {
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

for (const [item, tags] of Object.entries(itemTags)) {
    const regex = new RegExp(`("name": "${item}"[\\s\\S]*?"tags": \\{)`, 'm');
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
