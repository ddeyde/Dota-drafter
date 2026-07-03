import { HEROES } from './src/data/dotaData';
import { recommendHeroes } from './src/engine/recommendation';

const enemies = [
  HEROES.find(h => h.id === 'broodmother')!,
  HEROES.find(h => h.id === 'phantom_lancer')!,
  HEROES.find(h => h.id === 'naga_siren')!,
  HEROES.find(h => h.id === 'meepo')!,
  HEROES.find(h => h.id === 'chen')!
];
const allies = [
  HEROES.find(h => h.id === 'crystal_maiden')!,
  HEROES.find(h => h.id === 'lion')!,
  HEROES.find(h => h.id === 'juggernaut')!,
  HEROES.find(h => h.id === 'centaur')! // might not be exact id
].filter(Boolean);

const result = recommendHeroes(allies, enemies, 'Mid');
console.log(result.heroes.map(h => `${h.hero.name}: ${h.score.toFixed(1)}`).join('\n'));
