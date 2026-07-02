import React, { useState, useMemo } from 'react';
import { Shield, Sword, Users, ChevronRight, Zap, Target, Crosshair, Package } from 'lucide-react';
import { Hero, Item, HEROES, ITEMS, Role } from './data/dotaData';
import { recommendHeroes, recommendItems, EnemyState } from './engine/recommendation';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function App() {
  const [activeTab, setActiveTab] = useState<'draft' | 'build'>('draft');

  // --- Draft State ---
  const [draftRole, setDraftRole] = useState<Role>('Carry');
  const [draftAllies, setDraftAllies] = useState<Hero[]>([]);
  const [draftEnemies, setDraftEnemies] = useState<Hero[]>([]);
  const [heroSearch, setHeroSearch] = useState('');
  const [draftTarget, setDraftTarget] = useState<'ally' | 'enemy'>('ally');

  // --- Build State ---
  const [myHero, setMyHero] = useState<Hero | null>(null);
  const [matchEnemies, setMatchEnemies] = useState<EnemyState[]>([]);
  const [itemSearch, setItemSearch] = useState('');
  const [selectedEnemyId, setSelectedEnemyId] = useState<string | null>(null); // To know who we are giving items to

  // --- Recommendations ---
  const recommendationData = useMemo(() => {
    return recommendHeroes(draftAllies, draftEnemies, draftRole);
  }, [draftAllies, draftEnemies, draftRole]);

  const recommendedHeroes = recommendationData.heroes;
  const draftWarnings = recommendationData.warnings;

  const recommendedItems = useMemo(() => {
    if (!myHero || matchEnemies.length === 0) return [];
    return recommendItems(myHero, matchEnemies, 'Mid');
  }, [myHero, matchEnemies]);

  // --- Helpers ---
  const filteredHeroes = HEROES.filter(h => h.name.toLowerCase().includes(heroSearch.toLowerCase()));
  const filteredItems = ITEMS.filter(i => i.name.toLowerCase().includes(itemSearch.toLowerCase()));

  const handleHeroSelect = (hero: Hero) => {
    if (activeTab === 'draft') {
      const alreadySelected = draftAllies.some(a => a.id === hero.id) || draftEnemies.some(e => e.id === hero.id);
      if (!alreadySelected) {
        if (draftTarget === 'ally' && draftAllies.length < 4) {
          setDraftAllies([...draftAllies, hero]);
        } else if (draftTarget === 'enemy' && draftEnemies.length < 5) {
          setDraftEnemies([...draftEnemies, hero]);
        }
      }
    } else {
      if (!myHero) {
        setMyHero(hero);
      } else if (matchEnemies.length < 5 && !matchEnemies.some(e => e.hero.id === hero.id) && hero.id !== myHero.id) {
        setMatchEnemies([...matchEnemies, { hero, items: [] }]);
        setSelectedEnemyId(hero.id);
      }
    }
  };

  const handleItemSelect = (item: Item) => {
    if (activeTab === 'build' && selectedEnemyId) {
      setMatchEnemies(enemies => enemies.map(e => {
        if (e.hero.id === selectedEnemyId && e.items.length < 6) {
          return { ...e, items: [...e.items, item] };
        }
        return e;
      }));
    }
  };

  return (
    <div className="min-h-screen bg-[#111115] text-slate-200 font-sans selection:bg-red-500/30">
      <header className="bg-gradient-to-r from-red-950/40 to-slate-900/80 border-b border-red-900/20 py-4 px-6 md:px-12 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-red-600 p-2 rounded-lg">
              <Sword className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-white uppercase">Aegis Core</h1>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">Tactical Drafting & Build Engine</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={async () => {
                try {
                  const res = await fetch('/Dota-Draft-Helper.txt');
                  if (!res.ok) throw new Error('Failed to fetch build');
                  const text = await res.text();
                  const blob = new Blob([text], { type: 'text/html' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'Dota-Draft-Helper.html';
                  a.click();
                  URL.revokeObjectURL(url);
                } catch (e) {
                  alert('Ошибка скачивания. Убедитесь, что сборка завершена.');
                }
              }}
              className="px-4 py-2 rounded-md text-sm font-medium transition-colors border border-slate-700 hover:bg-slate-800 text-slate-300 flex items-center gap-2 mr-4"
              title="Скачать цельный HTML файл"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Export HTML
            </button>
            <button
              onClick={() => setActiveTab('draft')}
              className={cn("px-4 py-2 rounded-md text-sm font-medium transition-colors", activeTab === 'draft' ? "bg-red-600 text-white" : "hover:bg-slate-800 text-slate-400")}
            >
              Draft Phase
            </button>
            <button
              onClick={() => setActiveTab('build')}
              className={cn("px-4 py-2 rounded-md text-sm font-medium transition-colors", activeTab === 'build' ? "bg-red-600 text-white" : "hover:bg-slate-800 text-slate-400")}
            >
              Match Phase
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 md:p-12">
        {activeTab === 'draft' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-8">
              {/* Draft Configuration */}
              <div className="grid grid-cols-2 gap-6">
                {/* Allies */}
                <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800/50 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="w-5 h-5 text-emerald-400" />
                    <h2 className="text-lg font-semibold text-white">Allies (Max 4)</h2>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {draftAllies.map(hero => (
                      <div key={hero.id} className="relative group cursor-pointer" onClick={() => setDraftAllies(draftAllies.filter(a => a.id !== hero.id))}>
                        <img src={hero.imageUrl} alt={hero.name} className="w-16 h-16 object-cover rounded shadow-lg border-2 border-emerald-500/50 hover:border-emerald-500 transition-colors" />
                        <div className="absolute inset-0 bg-red-900/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded">
                          <span className="text-white text-xs font-bold">REMOVE</span>
                        </div>
                      </div>
                    ))}
                    {Array.from({ length: 4 - draftAllies.length }).map((_, i) => (
                      <div key={i} className="w-16 h-16 rounded border-2 border-dashed border-slate-700 bg-slate-800/50" />
                    ))}
                  </div>
                </div>

                {/* Enemies */}
                <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800/50 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <Target className="w-5 h-5 text-red-400" />
                    <h2 className="text-lg font-semibold text-white">Enemies (Max 5)</h2>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {draftEnemies.map(hero => (
                      <div key={hero.id} className="relative group cursor-pointer" onClick={() => setDraftEnemies(draftEnemies.filter(a => a.id !== hero.id))}>
                        <img src={hero.imageUrl} alt={hero.name} className="w-16 h-16 object-cover rounded shadow-lg border-2 border-red-500/50 hover:border-red-500 transition-colors" />
                        <div className="absolute inset-0 bg-red-900/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded">
                          <span className="text-white text-xs font-bold">REMOVE</span>
                        </div>
                      </div>
                    ))}
                    {Array.from({ length: 5 - draftEnemies.length }).map((_, i) => (
                      <div key={i} className="w-16 h-16 rounded border-2 border-dashed border-slate-700 bg-slate-800/50" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Hero Selector */}
              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800/50 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <h2 className="text-lg font-semibold text-white">Select Heroes</h2>
                    <div className="flex bg-slate-950 rounded-lg p-1 border border-slate-800">
                      <button
                        onClick={() => setDraftTarget('ally')}
                        className={cn("px-3 py-1 text-xs font-bold rounded-md transition-colors", draftTarget === 'ally' ? "bg-emerald-600 text-white" : "text-slate-400 hover:text-white")}
                      >
                        ADD ALLY
                      </button>
                      <button
                        onClick={() => setDraftTarget('enemy')}
                        className={cn("px-3 py-1 text-xs font-bold rounded-md transition-colors", draftTarget === 'enemy' ? "bg-red-600 text-white" : "text-slate-400 hover:text-white")}
                      >
                        ADD ENEMY
                      </button>
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder="Search heroes..."
                    value={heroSearch}
                    onChange={(e) => setHeroSearch(e.target.value)}
                    className="bg-slate-950 border border-slate-800 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:border-red-500 w-full md:w-64"
                  />
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                  {filteredHeroes.map(hero => (
                    <button
                      key={hero.id}
                      onClick={() => handleHeroSelect(hero)}
                      disabled={draftAllies.some(a => a.id === hero.id) || draftEnemies.some(e => e.id === hero.id)}
                      className="relative rounded overflow-hidden group disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105 transition-transform"
                    >
                      <img src={hero.imageUrl} alt={hero.name} className="w-full aspect-[4/3] object-cover" />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-1">
                        <span className="text-[10px] font-bold text-white truncate block">{hero.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Recommendations Panel */}
            <div className="lg:col-span-4">
              <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-2xl sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-amber-400" />
                    <h2 className="text-lg font-semibold text-white">AI Recommendations</h2>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Desired Role</label>
                  <select
                    value={draftRole}
                    onChange={(e) => setDraftRole(e.target.value as Role)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500"
                  >
                    <option value="Carry">Carry</option>
                    <option value="Mid">Mid</option>
                    <option value="Offlane">Offlane</option>
                    <option value="Soft Support">Soft Support</option>
                    <option value="Hard Support">Hard Support</option>
                  </select>
                </div>

                <div className="space-y-4">
                  {recommendedHeroes.length === 0 ? (
                    <div className="text-center py-8 text-slate-500 text-sm">
                      Select enemies to generate counter-pick recommendations.
                    </div>
                  ) : (
                    <>
                      {draftWarnings.length > 0 && (
                        <div className="space-y-2 mb-4">
                          {draftWarnings.map((warning, index) => (
                            <div key={index} className="bg-amber-950/25 border border-amber-900/30 rounded-lg p-3 text-xs text-amber-200 leading-relaxed font-sans shadow-inner">
                              {warning}
                            </div>
                          ))}
                        </div>
                      )}
                      {recommendedHeroes.map((rec, idx) => (
                        <div key={rec.hero.id} className="bg-slate-950 rounded-lg p-3 border border-slate-800 flex gap-4">
                          <div className="relative">
                            <img src={rec.hero.imageUrl} alt={rec.hero.name} className="w-16 h-16 object-cover rounded shadow-md" />
                            <div className="absolute -top-2 -left-2 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg">
                              {idx + 1}
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h3 className="font-bold text-sm text-white">{rec.hero.name}</h3>
                              <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300 font-mono">
                                SCORE: {rec.score.toFixed(1)}
                              </span>
                            </div>
                            <ul className="text-xs text-slate-400 space-y-1">
                              {rec.reasoning.map((r, i) => (
                                <li key={i} className="flex gap-1.5 items-start">
                                  <ChevronRight className="w-3 h-3 text-red-500 shrink-0 mt-0.5" />
                                  <span className="leading-tight">{r}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Match Setup Panel */}
            <div className="lg:col-span-8 space-y-8">
              
              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800/50 backdrop-blur-sm">
                 <div className="flex items-center gap-2 mb-4">
                    <Shield className="w-5 h-5 text-emerald-400" />
                    <h2 className="text-lg font-semibold text-white">Your Hero</h2>
                 </div>
                 {myHero ? (
                   <div className="flex items-center gap-4">
                     <img src={myHero.imageUrl} alt={myHero.name} className="w-20 h-20 object-cover rounded shadow-lg border-2 border-emerald-500" />
                     <div>
                       <h3 className="text-xl font-bold text-white">{myHero.name}</h3>
                       <button onClick={() => { setMyHero(null); setMatchEnemies([]); setSelectedEnemyId(null); }} className="text-xs text-red-400 hover:text-red-300 uppercase tracking-wider font-semibold mt-1">
                         Change Hero / Reset Match
                       </button>
                     </div>
                   </div>
                 ) : (
                   <div className="text-center py-8 bg-slate-950 rounded-lg border border-slate-800">
                     <p className="text-sm text-slate-400 mb-4">Select your hero from the roster below to start dynamic item generation.</p>
                     <div className="flex flex-col items-center gap-4 max-w-sm mx-auto">
                        <input
                          type="text"
                          placeholder="Search your hero..."
                          value={heroSearch}
                          onChange={(e) => setHeroSearch(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-emerald-500"
                        />
                        <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 w-full max-h-48 overflow-y-auto">
                          {filteredHeroes.map(hero => (
                            <button key={hero.id} onClick={() => setMyHero(hero)} className="relative rounded overflow-hidden hover:scale-105 transition-transform border border-transparent hover:border-emerald-500">
                              <img src={hero.imageUrl} alt={hero.name} className="w-full aspect-[4/3] object-cover" />
                            </button>
                          ))}
                        </div>
                     </div>
                   </div>
                 )}
              </div>

              {myHero && (
                <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800/50 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Crosshair className="w-5 h-5 text-red-400" />
                      <h2 className="text-lg font-semibold text-white">Enemy Roster & Trajectories</h2>
                    </div>
                  </div>
                  
                  {matchEnemies.length === 0 && (
                     <p className="text-sm text-slate-400 mb-4">Add enemy heroes below to start calculating counter-builds.</p>
                  )}

                  <div className="space-y-4">
                    {matchEnemies.map(enemy => (
                      <div 
                        key={enemy.hero.id} 
                        className={cn(
                          "bg-slate-950 p-4 rounded-lg border transition-colors cursor-pointer",
                          selectedEnemyId === enemy.hero.id ? "border-red-500" : "border-slate-800 hover:border-slate-600"
                        )}
                        onClick={() => setSelectedEnemyId(enemy.hero.id)}
                      >
                        <div className="flex items-center gap-4">
                           <div className="relative group">
                              <img src={enemy.hero.imageUrl} alt={enemy.hero.name} className="w-16 h-16 object-cover rounded border border-slate-700" />
                              <button 
                                onClick={(e) => { e.stopPropagation(); setMatchEnemies(enemies => enemies.filter(x => x.hero.id !== enemy.hero.id)); if(selectedEnemyId === enemy.hero.id) setSelectedEnemyId(null); }}
                                className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                X
                              </button>
                           </div>
                           <div className="flex-1">
                              <h3 className="text-sm font-bold text-white mb-2">{enemy.hero.name}'s Vector</h3>
                              <div className="flex gap-2">
                                {enemy.items.map((item, idx) => (
                                  <div key={idx} className="relative group/item" onClick={(e) => { e.stopPropagation(); setMatchEnemies(enemies => enemies.map(en => en.hero.id === enemy.hero.id ? { ...en, items: en.items.filter((_, i) => i !== idx) } : en)); }}>
                                    <img src={item.imageUrl} alt={item.name} className="w-10 h-8 object-cover rounded border border-slate-600" />
                                    <div className="absolute inset-0 bg-red-900/80 flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-opacity rounded">
                                      <span className="text-white text-[8px] font-bold">X</span>
                                    </div>
                                  </div>
                                ))}
                                {Array.from({ length: 6 - enemy.items.length }).map((_, i) => (
                                  <div key={`empty-${i}`} className="w-10 h-8 rounded border border-dashed border-slate-700 bg-slate-900 flex items-center justify-center">
                                    {selectedEnemyId === enemy.hero.id && i === 0 && (
                                       <span className="text-[10px] text-slate-500">+ Item</span>
                                    )}
                                  </div>
                                ))}
                              </div>
                           </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Add Enemy Selector */}
                  {matchEnemies.length < 5 && (
                    <div className="mt-6 pt-6 border-t border-slate-800">
                      <h3 className="text-sm font-semibold text-slate-300 mb-3">Add Enemy Hero</h3>
                      <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
                        {HEROES.filter(h => h.id !== myHero.id && !matchEnemies.some(e => e.hero.id === h.id)).map(hero => (
                          <button key={hero.id} onClick={() => handleHeroSelect(hero)} className="shrink-0 relative rounded overflow-hidden hover:scale-105 transition-transform border border-transparent hover:border-red-500 w-16">
                            <img src={hero.imageUrl} alt={hero.name} className="w-full aspect-[4/3] object-cover" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Add Item Selector */}
                  {selectedEnemyId && (
                     <div className="mt-6 pt-6 border-t border-slate-800 bg-red-950/10 p-4 rounded-lg border border-red-900/20">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-sm font-semibold text-red-200">
                          Add Items to {matchEnemies.find(e => e.hero.id === selectedEnemyId)?.hero.name}
                        </h3>
                        <input
                          type="text"
                          placeholder="Search items..."
                          value={itemSearch}
                          onChange={(e) => setItemSearch(e.target.value)}
                          className="bg-slate-900 border border-slate-700 rounded-md px-2 py-1 text-xs focus:outline-none focus:border-red-500"
                        />
                      </div>
                      <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
                        {filteredItems.map(item => (
                          <button key={item.id} onClick={() => handleItemSelect(item)} className="shrink-0 relative rounded overflow-hidden hover:scale-105 transition-transform border border-slate-700 hover:border-red-400 w-[50px] h-[40px]" title={item.name}>
                            <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* AI Item Recomme */}
            <div className="lg:col-span-4">
              <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-2xl sticky top-24">
                <div className="flex items-center gap-2 mb-6">
                  <Package className="w-5 h-5 text-sky-400" />
                  <h2 className="text-lg font-semibold text-white">Dynamic Build Vector</h2>
                </div>

                <div className="space-y-4">
                  {!myHero ? (
                    <div className="text-center py-8 text-slate-500 text-sm">
                      Select your hero to initialize item core logic.
                    </div>
                  ) : matchEnemies.length === 0 ? (
                    <div className="text-center py-8 text-slate-500 text-sm">
                      Awaiting enemy trajectory data...
                    </div>
                  ) : (
                    recommendedItems.map((rec, idx) => (
                      <div key={rec.item.id} className="bg-slate-950 rounded-lg p-3 border border-slate-800 flex flex-col gap-3 group hover:border-slate-700 transition-colors">
                        <div className="flex items-start gap-3">
                          <img src={rec.item.imageUrl} alt={rec.item.name} className="w-[60px] h-[45px] object-cover rounded shadow-md border border-slate-700" />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-0.5">
                              <h3 className="font-bold text-sm text-white group-hover:text-sky-300 transition-colors">{rec.item.name}</h3>
                              <div className="flex items-center gap-2">
                                {rec.item.tier && (
                                  <span className="text-[9px] text-slate-400 font-medium uppercase tracking-wider">{rec.item.tier.split(':')[0]}</span>
                                )}
                                <span className="text-[10px] text-amber-400 font-mono font-bold">
                                  {rec.item.cost}g
                                </span>
                              </div>
                            </div>
                            <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300 font-mono mb-2 inline-block">
                              FIT SCORE: {rec.score.toFixed(1)}
                            </span>
                          </div>
                        </div>
                        <ul className="text-xs text-slate-400 space-y-1.5 border-t border-slate-800/50 pt-2">
                          {rec.reasoning.map((r, i) => (
                            <li key={i} className="flex gap-1.5 items-start">
                              <ChevronRight className="w-3 h-3 text-sky-500 shrink-0 mt-0.5" />
                              <span className="leading-snug">{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
