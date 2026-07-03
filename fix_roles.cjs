const fs = require('fs');

let data = fs.readFileSync('src/data/dotaData.ts', 'utf8');

// The heroes to strip 'Mid' from
const notMids = [
  'Sand King', 'Sven', 'Tidehunter', 'Clockwerk', 'Night Stalker', 
  'Doom', 'Centaur Warrunner', 'Bristleback', 'Tusk', 'Legion Commander', 
  'Underlord', 'Terrorblade', 'Ogre Magi', 'Abaddon', 'Omniknight', 'Earth Spirit',
  'Slardar', 'Wraith King', 'Lifestealer', 'Bounty Hunter'
];

// parse the file
const startIdx = data.indexOf('export const HEROES: Hero[] = [');
if (startIdx !== -1) {
  let before = data.substring(0, startIdx);
  let arrayStr = data.substring(startIdx + 'export const HEROES: Hero[] = '.length);
  // parse the JS array 
  // Wait, it's a TS file so it might have some types or whatever, but actually it looks like pure JSON
  
  // easier way: just regex replace Mid in their roles
  notMids.forEach(name => {
     const regex = new RegExp(`("name": "${name}",\\s*"roles": \\[.*?)\\]`, 's');
     data = data.replace(regex, (match, p1) => {
         // remove "Mid",
         let newRoles = p1.replace(/"Mid",\s*/g, '').replace(/,\s*"Mid"/g, '').replace(/"Mid"/g, '');
         return newRoles + ']';
     });
     
     // also update roleWeights for Mid
     const regexWeights = new RegExp(`("name": "${name}".*?"roleWeights": {.*?)"Mid": [0-9\\.]+`, 's');
     data = data.replace(regexWeights, (match, p1) => {
         return p1 + '"Mid": 0';
     });
  });
  
  fs.writeFileSync('src/data/dotaData.ts', data);
  console.log("Fixed dota data!");
} else {
  console.log("Could not find HEROES array");
}

