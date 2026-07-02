const fs = require('fs');

const itemRawData = {
    "Blink Dagger": { "cost": 2250, "tier": "Тир-3: Мидгейм", "tags": { "mobility": 1.0, "initiation": 0.9 } },
    "Overwhelming Blink": { "cost": 6800, "tier": "Тир-5: Люкс слоты", "tags": { "aoe_damage": 0.8, "health_boost": 0.9, "slow": 0.7, "mobility": 1.0, "initiation": 0.9 } },
    "Swift Blink": { "cost": 6800, "tier": "Тир-5: Люкс слоты", "tags": { "agility_boost": 1.0, "movement_speed": 0.9, "mobility": 1.0, "initiation": 0.9 } },
    "Arcane Blink": { "cost": 6800, "tier": "Тир-5: Люкс слоты", "tags": { "cast_point_reduction": 1.0, "mana_regen": 0.8, "mobility": 1.0, "initiation": 0.9 } },
    "Blades of Attack": { "cost": 450, "tier": "Тир-1: Начальные предметы", "tags": { "damage": 0.3 } },
    "Broadsword": { "cost": 1000, "tier": "Тир-2: Ранние предметы", "tags": { "damage": 0.5 } },
    "Chainmail": { "cost": 500, "tier": "Тир-2: Ранние предметы", "tags": { "armor": 0.5 } },
    "Splintmail": { "cost": 950, "tier": "Тир-2: Ранние предметы", "tags": { "armor": 0.7 } },
    "Claymore": { "cost": 1350, "tier": "Тир-2: Ранние предметы", "tags": { "damage": 0.6 } },
    "Helm of Iron Will": { "cost": 975, "tier": "Тир-2: Ранние предметы", "tags": { "armor": 0.6, "health_regen": 0.5 } },
    "Javelin": { "cost": 900, "tier": "Тир-2: Ранние предметы", "tags": { "damage": 0.4, "pierce": 0.5 } },
    "Mithril Hammer": { "cost": 1600, "tier": "Тир-2: Ранние предметы", "tags": { "damage": 0.7 } },
    "Platemail": { "cost": 1400, "tier": "Тир-2: Ранние предметы", "tags": { "armor": 0.9 } },
    "Quarterstaff": { "cost": 875, "tier": "Тир-2: Ранние предметы", "tags": { "damage": 0.3, "attack_speed": 0.3 } },
    "Quelling Blade": { "cost": 100, "tier": "Тир-1: Начальные предметы", "tags": { "farming": 0.8 } },
    "Faerie Fire": { "cost": 65, "tier": "Тир-1: Начальные предметы", "tags": { "burst_heal": 0.5, "damage": 0.2 } },
    "Infused Raindrops": { "cost": 225, "tier": "Тир-1: Начальные предметы", "tags": { "magic_block": 0.8, "mana_regen": 0.4 } },
    "Wind Lace": { "cost": 225, "tier": "Тир-1: Начальные предметы", "tags": { "movement_speed": 0.4 } },
    "Ring of Protection": { "cost": 175, "tier": "Тир-1: Начальные предметы", "tags": { "armor": 0.3 } },
    "Stout Shield": { "cost": 100, "tier": "Тир-1: Начальные предметы", "tags": { "damage_block": 0.5 } },
    "Moon Shard": { "cost": 4000, "tier": "Тир-4: Ключевые артефакты", "tags": { "attack_speed": 1.0, "night_vision": 0.8 } },
    "Gauntlets of Strength": { "cost": 140, "tier": "Тир-1: Начальные предметы", "tags": { "health": 0.3 } },
    "Slippers of Agility": { "cost": 140, "tier": "Тир-1: Начальные предметы", "tags": { "agility": 0.3 } },
    "Mantle of Intelligence": { "cost": 140, "tier": "Тир-1: Начальные предметы", "tags": { "mana": 0.3 } },
    "Iron Branch": { "cost": 55, "tier": "Тир-1: Начальные предметы", "tags": { "stats": 0.2, "healing_amp": 0.2 } },
    "Belt of Strength": { "cost": 450, "tier": "Тир-1: Начальные предметы", "tags": { "health": 0.5 } },
    "Band of Elvenskin": { "cost": 450, "tier": "Тир-1: Начальные предметы", "tags": { "agility": 0.5 } },
    "Robe of the Magi": { "cost": 450, "tier": "Тир-1: Начальные предметы", "tags": { "mana": 0.5 } },
    "Circlet": { "cost": 155, "tier": "Тир-1: Начальные предметы", "tags": { "stats": 0.3 } },
    "Crown": { "cost": 450, "tier": "Тир-1: Начальные предметы", "tags": { "stats": 0.5 } },
    "Diadem": { "cost": 1000, "tier": "Тир-2: Ранние предметы", "tags": { "stats": 0.7 } },
    "Ogre Axe": { "cost": 1000, "tier": "Тир-2: Ранние предметы", "tags": { "health": 0.7 } },
    "Blade of Alacrity": { "cost": 1000, "tier": "Тир-2: Ранние предметы", "tags": { "agility": 0.7 } },
    "Staff of Wizardry": { "cost": 1000, "tier": "Тир-2: Ранние предметы", "tags": { "mana": 0.7 } },
    "Ultimate Orb": { "cost": 2800, "tier": "Тир-3: Мидгейм", "tags": { "stats": 0.8 } },
    "Gloves of Haste": { "cost": 450, "tier": "Тир-1: Начальные предметы", "tags": { "attack_speed": 0.4 } },
    "Blitz Knuckles": { "cost": 1000, "tier": "Тир-2: Ранние предметы", "tags": { "attack_speed": 0.6 } },
    "Morbid Mask": { "cost": 900, "tier": "Тир-2: Ранние предметы", "tags": { "lifesteal": 0.6 } },
    "Voodoo Mask": { "cost": 650, "tier": "Тир-2: Ранние предметы", "tags": { "spell_lifesteal": 0.6 } },
    "Ring of Regen": { "cost": 175, "tier": "Тир-1: Начальные предметы", "tags": { "health_regen": 0.3 } },
    "Sage's Mask": { "cost": 175, "tier": "Тир-1: Начальные предметы", "tags": { "mana_regen": 0.3 } },
    "Boots of Speed": { "cost": 500, "tier": "Тир-2: Ранние предметы", "tags": { "movement_speed": 0.6 } },
    "Gem of True Sight": { "cost": 900, "tier": "Тир-2: Ранние предметы", "tags": { "true_sight": 1.0, "high_risk": 1.0 } },
    "Shawl": { "cost": 450, "tier": "Тир-1: Начальные предметы", "tags": { "magic_resistance": 0.8 } },
    "Cloak": { "cost": 900, "tier": "Тир-2: Ранние предметы", "tags": { "magic_resistance": 0.5 } },
    "Talisman of Evasion": { "cost": 1300, "tier": "Тир-2: Ранние предметы", "tags": { "evasion": 0.6 } },
    "Cheese": { "cost": 1000, "tier": "Тир-2: Ранние предметы", "tags": { "burst_heal": 1.0, "burst_mana": 1.0, "save": 0.9 } },
    "Magic Stick": { "cost": 200, "tier": "Тир-1: Начальные предметы", "tags": { "burst_heal": 0.4, "burst_mana": 0.4 } },
    "Magic Wand": { "cost": 460, "tier": "Тир-1: Начальные предметы", "tags": { "burst_heal": 0.6, "burst_mana": 0.6, "stats": 0.3 } },
    "Ghost Scepter": { "cost": 1500, "tier": "Тир-2: Ранние предметы", "tags": { "ethereal": 1.0, "save": 0.8, "physical_immunity": 1.0 } },
    "Clarity": { "cost": 60, "tier": "Тир-1: Начальные предметы", "tags": { "mana_regen": 0.5 } },
    "Enchanted Mango": { "cost": 65, "tier": "Тир-1: Начальные предметы", "tags": { "burst_mana": 0.5, "health_regen": 0.2 } },
    "Blood Grenade": { "cost": 50, "tier": "Тир-1: Начальные предметы", "tags": { "slow": 0.5, "damage_over_time": 0.4, "catch": 0.6 } },
    "Block of Cheese": { "cost": 2, "tier": "Тир-1: Начальные предметы", "tags": { "permanent_shield": 1.0, "survivability": 0.9 } },
    "Healing Salve": { "cost": 100, "tier": "Тир-1: Начальные предметы", "tags": { "health_regen": 0.8 } },
    "Dust of Appearance": { "cost": 80, "tier": "Тир-1: Начальные предметы", "tags": { "true_sight": 0.8, "slow": 0.4 } },
    "Bottle": { "cost": 675, "tier": "Тир-2: Ранние предметы", "tags": { "sustain": 0.8, "rune_control": 1.0 } },
    "Sentry Ward": { "cost": 50, "tier": "Тир-1: Начальные предметы", "tags": { "true_sight": 0.9, "vision": 0.4 } },
    "Observer and Sentry Wards": { "cost": 50, "tier": "Тир-1: Начальные предметы", "tags": { "vision": 1.0, "true_sight": 0.9 } },
    "Tango": { "cost": 90, "tier": "Тир-1: Начальные предметы", "tags": { "health_regen": 0.5 } },
    "Tango (Shared)": { "cost": 30, "tier": "Тир-1: Начальные предметы", "tags": { "health_regen": 0.4 } },
    "Animal Courier": { "cost": 50, "tier": "Тир-1: Начальные предметы", "tags": { "utility": 1.0 } },
    "Flying Courier": { "cost": 100, "tier": "Тир-1: Начальные предметы", "tags": { "utility": 1.0, "mobility": 0.5 } },
    "Town Portal Scroll": { "cost": 100, "tier": "Тир-1: Начальные предметы", "tags": { "global_mobility": 1.0, "save": 0.5 } },
    "Boots of Travel": { "cost": 2500, "tier": "Тир-3: Мидгейм", "tags": { "global_mobility": 1.0, "movement_speed": 0.9, "farming": 0.7 } },
    "Boots of Travel 2": { "cost": 4500, "tier": "Тир-4: Ключевые артефакты", "tags": { "global_mobility": 1.0, "movement_speed": 1.0, "save": 0.6 } },
    "Phase Boots": { "cost": 1450, "tier": "Тир-2: Ранние предметы", "tags": { "movement_speed": 0.8, "armor": 0.5, "damage": 0.4, "unit_walking": 1.0 } },
    "Demon Edge": { "cost": 2200, "tier": "Тир-3: Мидгейм", "tags": { "damage": 0.8 } },
    "Eaglesong": { "cost": 2800, "tier": "Тир-3: Мидгейм", "tags": { "agility": 0.9 } },
    "Reaver": { "cost": 2800, "tier": "Тир-3: Мидгейм", "tags": { "health": 0.9 } },
    "Sacred Relic": { "cost": 3400, "tier": "Тир-3: Мидгейм", "tags": { "damage": 1.0 } },
    "Hyperstone": { "cost": 2000, "tier": "Тир-3: Мидгейм", "tags": { "attack_speed": 0.8 } },
    "Ring of Health": { "cost": 700, "tier": "Тир-2: Ранние предметы", "tags": { "health_regen": 0.6 } },
    "Ring of Tarrasque": { "cost": 1700, "tier": "Тир-2: Ранние предметы", "tags": { "health_regen": 0.7, "health": 0.4 } },
    "Void Stone": { "cost": 700, "tier": "Тир-2: Ранние предметы", "tags": { "mana_regen": 0.6 } },
    "Tiara of Selemene": { "cost": 1700, "tier": "Тир-2: Ранние предметы", "tags": { "mana_regen": 0.8 } },
    "Mystic Staff": { "cost": 2800, "tier": "Тир-3: Мидгейм", "tags": { "mana": 0.9 } },
    "Energy Booster": { "cost": 800, "tier": "Тир-2: Ранние предметы", "tags": { "mana": 0.6 } },
    "Point Booster": { "cost": 1200, "tier": "Тир-2: Ранние предметы", "tags": { "health": 0.5, "mana": 0.5 } },
    "Vitality Booster": { "cost": 1000, "tier": "Тир-2: Ранние предметы", "tags": { "health": 0.6 } },
    "Fluffy Hat": { "cost": 250, "tier": "Тир-1: Начальные предметы", "tags": { "health": 0.4 } },
    "Wizard Hat": { "cost": 250, "tier": "Тир-1: Начальные предметы", "tags": { "mana": 0.4 } },
    "Power Treads": { "cost": 1400, "tier": "Тир-2: Ранние предметы", "tags": { "attack_speed": 0.6, "stats": 0.6 } },
    "Phylactery": { "cost": 2600, "tier": "Тир-3: Мидгейм", "tags": { "spell_damage": 0.8, "slow": 0.7, "stats": 0.5 } },
    "Khanda": { "cost": 5600, "tier": "Тир-5: Люкс слоты", "tags": { "spell_crit": 1.0, "burst_damage": 0.9, "catch": 0.6 } },
    "Hand of Midas": { "cost": 2200, "tier": "Тир-3: Мидгейм", "tags": { "economy": 1.0, "farming": 0.9, "attack_speed": 0.5 } },
    "Oblivion Staff": { "cost": 1625, "tier": "Тир-2: Ранние предметы", "tags": { "mana_regen": 0.5, "damage": 0.4 } },
    "Witch Blade": { "cost": 2775, "tier": "Тир-3: Мидгейм", "tags": { "damage_over_time": 0.7, "armor": 0.5, "attack_speed": 0.6 } },
    "Perseverance": { "cost": 1400, "tier": "Тир-2: Ранние предметы", "tags": { "health_regen": 0.6, "mana_regen": 0.6 } },
    "Cornucopia": { "cost": 1200, "tier": "Тир-2: Ранние предметы", "tags": { "health_regen": 0.7, "mana_regen": 0.7 } },
    "Bracer": { "cost": 505, "tier": "Тир-2: Ранние предметы", "tags": { "health": 0.6, "early_power": 0.8 } },
    "Wraith Band": { "cost": 505, "tier": "Тир-2: Ранние предметы", "tags": { "agility": 0.6, "early_power": 0.8 } },
    "Null Talisman": { "cost": 505, "tier": "Тир-2: Ранние предметы", "tags": { "mana": 0.6, "early_power": 0.8 } },
    "Mekansm": { "cost": 1775, "tier": "Тир-2: Ранние предметы", "tags": { "aoe_heal": 0.9, "aura_armor": 0.5 } },
    "Vladmir's Offering": { "cost": 2200, "tier": "Тир-3: Мидгейм", "tags": { "aura_lifesteal": 1.0, "aura_damage": 0.7, "aura_mana": 0.5 } },
    "Wraith Pact": { "cost": 3800, "tier": "Тир-4: Ключевые артефакты", "tags": { "damage_reduction": 1.0, "aura_lifesteal": 0.8, "pushing": 0.7 } },
    "Buckler": { "cost": 425, "tier": "Тир-1: Начальные предметы", "tags": { "aura_armor": 0.6 } },
    "Ring of Basilius": { "cost": 425, "tier": "Тир-1: Начальные предметы", "tags": { "aura_mana": 0.6 } },
    "Holy Locket": { "cost": 2250, "tier": "Тир-3: Мидгейм", "tags": { "heal_amp": 1.0, "burst_heal": 0.8, "stats": 0.5 } },
    "Pipe of Insight": { "cost": 3725, "tier": "Тир-4: Ключевые артефакты", "tags": { "aura_magic_resistance": 1.0, "magic_shield": 1.0, "save": 0.8 } },
    "Urn of Shadows": { "cost": 825, "tier": "Тир-2: Ранние предметы", "tags": { "damage_over_time": 0.6, "healing": 0.6 } },
    "Headdress": { "cost": 425, "tier": "Тир-1: Начальные предметы", "tags": { "aura_health_regen": 0.6 } },
    "Scythe of Vyse": { "cost": 5200, "tier": "Тир-5: Люкс слоты", "tags": { "control": 0.8, "mana_regen": 0.9 } },
    "Orchid Malevolence": { "cost": 3275, "tier": "Тир-3: Мидгейм", "tags": { "silence": 1.0, "damage_burst": 0.5, "catch": 0.7 } },
    "Bloodthorn": { "cost": 6400, "tier": "Тир-5: Люкс слоты", "tags": { "damage_amp": 1.0, "true_strike": 0.9, "damage_burst": 0.9, "silence": 1.0, "catch": 0.7 } },
    "Echo Sabre": { "cost": 2700, "tier": "Тир-3: Мидгейм", "tags": { "double_attack": 1.0, "catch": 0.6, "stats": 0.6 } },
    "Eul's Scepter of Divinity": { "cost": 2600, "tier": "Тир-3: Мидгейм", "tags": { "cyclone": 1.0, "save": 0.8, "catch": 0.7, "dispel": 0.7 } },
    "Wind Waker": { "cost": 6800, "tier": "Тир-5: Люкс слоты", "tags": { "cyclone": 1.0, "mobility": 0.8, "save": 1.0 } },
    "Aether Lens": { "cost": 2275, "tier": "Тир-3: Мидгейм", "tags": { "cast_range": 1.0, "mana_regen": 0.6 } },
    "Force Staff": { "cost": 2200, "tier": "Тир-3: Мидгейм", "tags": { "mobility": 0.8, "save": 0.9, "repositioning": 1.0 } },
    "Hurricane Pike": { "cost": 4450, "tier": "Тир-4: Ключевые артефакты", "tags": { "mobility": 0.9, "save": 0.8, "attack_range": 1.0 } },
    "Dagon": { "cost": 7650, "tier": "Тир-5: Люкс слоты", "tags": { "burst_damage": 1.0, "spell_lifesteal": 0.6 } },
    "Necronomicon": { "cost": 4550, "tier": "Тир-4: Ключевые артефакты", "tags": { "summoning": 1.0, "pushing": 0.9, "true_sight": 0.8 } },
    "Aghanim's Scepter": { "cost": 4200, "tier": "Тир-4: Ключевые артефакты", "tags": { "spell_upgrade": 1.0, "stats": 0.7 } },
    "Aghanim's Blessing": { "cost": 5800, "tier": "Тир-5: Люкс слоты", "tags": { "spell_upgrade": 1.0, "slot_efficiency": 1.0 } },
    "Aghanim's Blessing - Roshan": { "cost": 5800, "tier": "Тир-5: Люкс слоты", "tags": { "spell_upgrade": 1.0, "slot_efficiency": 1.0 } },
    "Aghanim's Shard": { "cost": 1400, "tier": "Тир-2: Ранние предметы", "tags": { "spell_upgrade": 0.8 } },
    "Aghanim's Shard - Consumable": { "cost": 1400, "tier": "Тир-2: Ранние предметы", "tags": { "spell_upgrade": 0.8 } },
    "Refresher Orb": { "cost": 5000, "tier": "Тир-5: Люкс слоты", "tags": { "cooldown_reset": 1.0, "mana_regen": 0.8 } },
    "Assault Cuirass": { "cost": 5125, "tier": "Тир-5: Люкс слоты", "tags": { "aura_armor": 1.0, "aura_attack_speed": 1.0, "armor_corruption": 0.8, "pushing": 0.9 } },
    "Heart of Tarrasque": { "cost": 5100, "tier": "Тир-5: Люкс слоты", "tags": { "tank": 1.0, "out_of_combat_regen": 1.0, "survivability": 0.9 } },
    "Black King Bar": { "cost": 4050, "tier": "Тир-4: Ключевые артефакты", "tags": { "save": 0.7, "spell_immunity": 1.0, "survivability": 0.8 } },
    "Shiva's Guard": { "cost": 4500, "tier": "Тир-4: Ключевые артефакты", "tags": { "aoe_damage": 0.7, "aoe_slow": 0.9, "aura_attack_slow": 1.0, "anti_heal": 0.8, "armor": 1.0 } },
    "Bloodstone": { "cost": 4700, "tier": "Тир-4: Ключевые артефакты", "tags": { "spell_lifesteal": 1.0, "aoe_mana": 0.8, "tank": 0.7 } },
    "Linken's Sphere": { "cost": 4800, "tier": "Тир-4: Ключевые артефакты", "tags": { "spell_block": 1.0, "save": 0.7, "stats": 0.7 } },
    "Lotus Orb": { "cost": 3850, "tier": "Тир-4: Ключевые артефакты", "tags": { "spell_reflection": 1.0, "dispel": 0.9, "armor": 0.8, "save": 0.8 } },
    "Meteor Hammer": { "cost": 2850, "tier": "Тир-3: Мидгейм", "tags": { "aoe_control": 0.8, "building_damage": 1.0, "farming": 0.7 } },
    "Nullifier": { "cost": 4350, "tier": "Тир-4: Ключевые артефакты", "tags": { "continuous_dispel": 1.0, "anti_save": 1.0 } },
    "Aeon Disk": { "cost": 3000, "tier": "Тир-3: Мидгейм", "tags": { "hard_save": 1.0, "survivability": 1.0, "dispel": 0.9 } },
    "Kaya": { "cost": 2100, "tier": "Тир-3: Мидгейм", "tags": { "spell_amp": 0.6, "spell_lifesteal_amp": 0.5 } },
    "Trident": { "cost": 6301, "tier": "Тир-5: Люкс слоты", "tags": { "extreme_stats": 1.0, "spell_amp": 0.8, "status_resistance": 0.8 } },
    "Refresher Shard": { "cost": 1000, "tier": "Тир-2: Ранние предметы", "tags": { "cooldown_reset": 1.0, "single_use": 1.0 } },
    "Spirit Vessel": { "cost": 2725, "tier": "Тир-3: Мидгейм", "tags": { "anti_heal": 1.0, "damage_over_time": 0.9, "healing": 0.8,
        "summoning": 0.8, "stats": 0.6 } },
    "Essence Distiller": { "cost": 1775, "tier": "Тир-2: Ранние предметы", "tags": { "health": 0.5, "mana": 0.5 } },
    "Vanguard": { "cost": 1700, "tier": "Тир-2: Ранние предметы", "tags": { "tank": 0.8, "damage_block": 1.0 } },
    "Crimson Guard": { "cost": 3725, "tier": "Тир-4: Ключевые артефакты", "tags": { "tank": 0.8, "damage_block": 1.0 } },
    "Blade Mail": { "cost": 2400, "tier": "Тир-3: Мидгейм", "tags": { "damage_reflection": 1.0, "armor": 0.7, "farming": 0.5 } },
    "Soul Booster": { "cost": 3000, "tier": "Тир-3: Мидгейм", "tags": { "health": 0.7, "mana": 0.7 } },
    "Eternal Shroud": { "cost": 3900, "tier": "Тир-4: Ключевые артефакты", "tags": { "magic_resistance": 0.9, "mana_restore": 0.8, "tank": 0.7 } },
    "Consecrated Wraps": { "cost": 2600, "tier": "Тир-3: Мидгейм", "tags": { "healing": 0.8,
        "summoning": 0.8, "save": 0.7 } },
    "Crella's Crozier": { "cost": 4800, "tier": "Тир-4: Ключевые артефакты", "tags": { "control": 0.8, "stats": 0.7 } },
    "Divine Rapier": { "cost": 5600, "tier": "Тир-5: Люкс слоты", "tags": { "extreme_damage": 1.0, "high_risk": 1.0, "true_strike": 0.25 } },
    "Monkey King Bar": { "cost": 5000, "tier": "Тир-5: Люкс слоты", "tags": { "true_strike": 1.0, "damage_proc": 0.9 } },
    "Radiance": { "cost": 4700, "tier": "Тир-4: Ключевые артефакты", "tags": { "aoe_damage": 1.0, "evasion": 0.8, "farming": 0.9 } },
    "Butterfly": { "cost": 5450, "tier": "Тир-5: Люкс слоты", "tags": { "evasion": 1.0, "agility_boost": 1.0 } },
    "Daedalus": { "cost": 5100, "tier": "Тир-5: Люкс слоты", "tags": { "crit": 1.0, "burst_damage": 1.0 } },
    "Skull Basher": { "cost": 2875, "tier": "Тир-3: Мидгейм", "tags": { "bash": 0.8, "control": 0.5 } },
    "Battle Fury": { "cost": 3900, "tier": "Тир-4: Ключевые артефакты", "tags": { "cleave": 1.0, "farming": 1.0, "sustain": 0.7 } },
    "Manta Style": { "cost": 4650, "tier": "Тир-4: Ключевые артефакты", "tags": { "illusions": 1.0, "dispel": 0.9, "pushing": 0.8, "mobility": 0.7 } },
    "Crystalys": { "cost": 2000, "tier": "Тир-3: Мидгейм", "tags": { "crit": 0.6, "damage": 0.5 } },
    "Dragon Lance": { "cost": 1900, "tier": "Тир-2: Ранние предметы", "tags": { "attack_range": 1.0, "stats": 0.6 } },
    "Armlet of Mordiggian": { "cost": 2500, "tier": "Тир-3: Мидгейм", "tags": { "health_drain": 1.0, "survivability": 0.8, "damage": 0.8 } },
    "Shadow Blade": { "cost": 3250, "tier": "Тир-3: Мидгейм", "tags": { "invisibility": 0.8, "initiation": 0.8 } },
    "Silver Edge": { "cost": 5700, "tier": "Тир-5: Люкс слоты", "tags": { "break": 1.0, "invisibility": 0.9, "initiation": 0.8 } },
    "Sange and Yasha": { "cost": 4200, "tier": "Тир-4: Ключевые артефакты", "tags": { "status_resistance": 0.8, "mobility": 0.8, "stats": 0.8 } },
    "Kaya and Sange": { "cost": 4200, "tier": "Тир-4: Ключевые артефакты", "tags": { "status_resistance": 0.8, "spell_amp": 0.8, "stats": 0.8 } },
    "Yasha and Kaya": { "cost": 4200, "tier": "Тир-4: Ключевые артефакты", "tags": { "mobility": 0.8, "spell_amp": 0.8, "stats": 0.8 } },
    "Satanic": { "cost": 5050, "tier": "Тир-5: Люкс слоты", "tags": { "lifesteal_burst": 1.0, "hard_dispel": 0.8, "survivability": 1.0 } },
    "Mjollnir": { "cost": 5500, "tier": "Тир-5: Люкс слоты", "tags": { "farming": 0.9, "aoe_damage": 0.7 } },
    "Eye of Skadi": { "cost": 5900, "tier": "Тир-5: Люкс слоты", "tags": { "anti_heal": 0.5, "power_boost": 0.7, "slow": 0.8, "stats": 0.9 } },
    "Sange": { "cost": 2100, "tier": "Тир-3: Мидгейм", "tags": { "status_resistance": 0.5, "health": 0.5 } },
    "Helm of the Dominator": { "cost": 2550, "tier": "Тир-3: Мидгейм", "tags": { "domination": 0.8, "aura": 0.7, "pushing": 0.7 } },
    "Helm of the Overlord": { "cost": 5650, "tier": "Тир-5: Люкс слоты", "tags": { "ancient_domination": 1.0, "aura": 0.9, "pushing": 0.9 } },
    "Maelstrom": { "cost": 2950, "tier": "Тир-3: Мидгейм", "tags": { "farming": 0.9, "aoe_damage": 0.7 } },
    "Gleipnir": { "cost": 4650, "tier": "Тир-4: Ключевые артефакты", "tags": { "aoe_control": 1.0, "catch": 0.9, "farming": 0.7 } },
    "Desolator": { "cost": 3500, "tier": "Тир-4: Ключевые артефакты", "tags": { "armor_corruption": 1.0, "building_damage": 0.9 } },
    "Yasha": { "cost": 2100, "tier": "Тир-3: Мидгейм", "tags": { "mobility": 0.5, "attack_speed": 0.5 } },
    "Mask of Madness": { "cost": 1900, "tier": "Тир-2: Ранние предметы", "tags": { "attack_speed_burst": 1.0, "lifesteal": 0.7, "silence_self": 1.0, "farming": 0.8 } },
    "Diffusal Blade": { "cost": 3850, "tier": "Тир-4: Ключевые артефакты", "tags": { "mana_drain": 1.0, "slow": 0.6 } },
    "Disperser": { "cost": 6100, "tier": "Тир-5: Люкс слоты", "tags": { "aoe_slow": 0.9, "haste": 0.8, "save": 0.6, "mana_drain": 1.0, "slow": 0.6 } },
    "Ethereal Blade": { "cost": 5200, "tier": "Тир-5: Люкс слоты", "tags": { "ethereal": 1.0, "spell_burst": 0.9, "save": 0.7 } },
    "Soul Ring": { "cost": 805, "tier": "Тир-2: Ранние предметы", "tags": { "mana_burst": 0.8, "health_cost": 1.0, "early_power": 0.6 } },
    "Arcane Boots": { "cost": 1500, "tier": "Тир-2: Ранние предметы", "tags": { "aoe_mana": 1.0, "movement_speed": 0.7 } },
    "Octarine Core": { "cost": 4900, "tier": "Тир-4: Ключевые артефакты", "tags": { "cooldown_reduction": 1.0, "health": 0.8, "mana": 0.8 } },
    "Orb of Venom": { "cost": 350, "tier": "Тир-1: Начальные предметы", "tags": { "slow": 0.4, "damage_over_time": 0.3 } },
    "Orb of Blight": { "cost": 300, "tier": "Тир-1: Начальные предметы", "tags": { "armor_corruption": 0.4 } },
    "Orb of Corrosion": { "cost": 1050, "tier": "Тир-2: Ранние предметы", "tags": { "slow": 0.5, "armor_corruption": 0.6, "damage_over_time": 0.5 } },
    "Orb of Frost": { "cost": 300, "tier": "Тир-1: Начальные предметы", "tags": { "slow": 0.4, "magic_damage": 0.3 } },
    "Falcon Blade": { "cost": 1125, "tier": "Тир-2: Ранние предметы", "tags": { "sustain": 0.7, "early_power": 0.8, "health": 0.5 } },
    "Mage Slayer": { "cost": 3100, "tier": "Тир-3: Мидгейм", "tags": { "spell_damage_reduction": 1.0, "magic_resistance": 0.8, "damage_over_time": 0.6 } },
    "Drum of Endurance": { "cost": 1625, "tier": "Тир-2: Ранние предметы", "tags": { "aura_movement": 0.8, "aura_attack_speed": 0.8, "catch": 0.5 } },
    "Boots of Bearing": { "cost": 4225, "tier": "Тир-4: Ключевые артефакты", "tags": { "haste": 1.0, "aura_movement": 0.9, "save": 0.7 } },
    "Solar Crest": { "cost": 2575, "tier": "Тир-3: Мидгейм", "tags": { "single_target_buff": 1.0, "armor": 0.8, "shield": 0.7, "save": 0.7 } },
    "Pavise": { "cost": 1350, "tier": "Тир-2: Ранние предметы", "tags": { "physical_shield": 1.0, "save": 0.6 } },
    "Smoke of Deceit": { "cost": 50, "tier": "Тир-1: Начальные предметы", "tags": { "invisibility_team": 1.0, "initiation": 1.0, "mobility": 0.5 } },
    "Tome of Knowledge": { "cost": 75, "tier": "Тир-1: Начальные предметы", "tags": { "experience": 1.0 } },
    "Veil of Discord": { "cost": 1700, "tier": "Тир-2: Ранние предметы", "tags": { "spell_amp": 0.8, "aoe_debuff": 0.8, "stats": 0.5 } },
    "Revenant's Brooch": { "cost": 3300, "tier": "Тир-3: Мидгейм", "tags": { "magic_attacks": 1.0, "ethereal_pierce": 1.0, "catch": 0.7 } },
    "Parasma": { "cost": 5975, "tier": "Тир-5: Люкс слоты", "tags": { "magic_attacks": 0.8, "magic_corruption": 1.0, "stats": 0.8 } },
    "Guardian Greaves": { "cost": 4450, "tier": "Тир-4: Ключевые артефакты", "tags": { "aoe_heal": 1.0, "dispel": 0.9, "aura_armor": 0.9, "save": 0.8 } },
    "Rod of Atos": { "cost": 2250, "tier": "Тир-3: Мидгейм", "tags": { "root": 0.9, "catch": 0.8, "stats": 0.6 } },
    "Abyssal Blade": { "cost": 6250, "tier": "Тир-5: Люкс слоты", "tags": { "hard_control": 1.0, "survivability": 0.8, "bash": 0.8, "control": 0.5 } },
    "Heaven's Halberd": { "cost": 3400, "tier": "Тир-3: Мидгейм", "tags": { "disarm": 1.0, "evasion": 0.8, "status_resistance": 0.7, "anti_carry": 0.9 } },
    "Tranquil Boots": { "cost": 900, "tier": "Тир-2: Ранние предметы", "tags": { "health_regen": 0.8, "movement_speed": 0.8, "roaming": 0.9 } },
    "Shadow Amulet": { "cost": 900, "tier": "Тир-2: Ранние предметы", "tags": { "invisibility_stationary": 1.0, "save": 0.4 } },
    "Glimmer Cape": { "cost": 2150, "tier": "Тир-3: Мидгейм", "tags": { "invisibility": 0.9, "magic_shield": 0.8, "save": 0.9 } },
    "Pocket Roshan": { "cost": 1000, "tier": "Тир-2: Ранние предметы", "tags": { "summoning": 1.0, "utility": 0.8 } },
    "Harpoon": { "cost": 4700, "tier": "Тир-4: Ключевые артефакты", "tags": { "catch": 1.0, "mobility": 0.8, "double_attack": 0.8 } },
    "Specialist's Array": { "cost": 2550, "tier": "Тир-3: Мидгейм", "tags": { "multishot": 1.0, "stats": 0.6 } },
    "Hydra's Breath": { "cost": 5900, "tier": "Тир-5: Люкс слоты", "tags": { "aoe_damage": 0.8, "damage_over_time": 0.8 } },
    "Chasm Stone": { "cost": 800, "tier": "Тир-2: Ранние предметы", "tags": { "control": 0.8, "earth_magic": 0.7 } }
};

const formatId = (name) => name.toLowerCase().replace(/[\s-]/g, '_').replace(/[']/g, '');

const heroesRawData = {
    "Anti-Mage": {
        "carry": 0.9,
        "escape": 0.85,
        "nuker": 0.4,
        "mobility": 0.95,
        "mana_burn": 1.0,
        "agility_core": 0.95,
        "anti_magic": 1.0,
        "mana_drain": 1.5
    },
    "Axe": {
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
    "Bane": {
        "ranged": 1,
        "support": 0.9,
        "disabler": 1.0,
        "nuker": 0.6,
        "durable": 0.4,
        "save": 0.7,
        "single_target_spell": 1.0
    },
    "Bloodseeker": {
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
    "Crystal Maiden": {
        "ranged": 1,
        "support": 1.0,
        "disabler": 0.8,
        "nuker": 0.85,
        "mana_dependent": 0.4,
        "squishy_support": 1.0,
        "aoe_magic": 0.9
    },
    "Drow Ranger": {
        "carry": 0.9,
        "disabler": 0.6,
        "pusher": 0.8,
        "agility_core": 0.95,
        "ranged_carry": 1.0,
        "squishy_early": 0.9
    },
    "Earthshaker": {
        "melee": 1,
        "support": 0.85,
        "initiator": 0.95,
        "disabler": 1.0,
        "nuker": 0.7,
        "tuff": 0.7,
        "aoe_stun": 1.0,
        "anti_illusion": 1.0
    },
    "Juggernaut": {
        "carry": 0.9,
        "pusher": 0.7,
        "escape": 0.8,
        "agility_core": 0.9,
        "spell_immunity": 0.8,
        "healing": 0.7
    },
    "Mirana": {
        "carry": 0.6,
        "support": 0.8,
        "escape": 0.85,
        "nuker": 0.75,
        "disabler": 0.7,
        "agility_core": 0.7,
        "global_mobility": 0.8
    },
    "Morphling": {
        "carry": 0.95,
        "escape": 0.9,
        "durable": 0.8,
        "nuker": 0.85,
        "disabler": 0.4,
        "agility_core": 0.95,
        "complexity": 1.0
    },
    "Shadow Fiend": {
        "lane_bully": 0.9,
        "ranged": 1,
        "carry": 0.85,
        "nuker": 0.95,
        "agility_core": 0.85,
        "squishy_early": 0.8,
        "aoe_magic": 0.9,
        "physical_damage": 0.9
    },
    "Phantom Lancer": {
        "carry": 0.95,
        "escape": 0.85,
        "pusher": 0.7,
        "nuker": 0.5,
        "illusioner": 1.0,
        "agility_core": 0.9,
        "mana_dependent": 0.7
    },
    "Puck": {
        "initiator": 0.9,
        "disabler": 0.8,
        "escape": 1.0,
        "nuker": 0.85,
        "mana_dependent": 0.8,
        "mobility": 1.0
    },
    "Pudge": {
        "weak_laner": 1,
        "melee": 1,
        "disabler": 0.85,
        "initiator": 0.9,
        "durable": 0.95,
        "nuker": 0.7,
        "tuff": 0.9,
        "catch": 1.0,
        "pure_damage": 0.8
    },
    "Razor": {
        "carry": 0.85,
        "durable": 0.8,
        "nuker": 0.6,
        "pusher": 0.6,
        "agility_core": 0.8,
        "anti_carry": 0.95
    },
    "Sand King": {
        "melee": 1,
        "initiator": 0.9,
        "disabler": 0.85,
        "support": 0.6,
        "nuker": 0.9,
        "escape": 0.8,
        "aoe_magic": 0.95
    },
    "Storm Spirit": {
        "carry": 0.85,
        "escape": 0.95,
        "nuker": 0.8,
        "initiator": 0.95,
        "disabler": 0.6,
        "mana_dependent": 1.0,
        "mobility": 1.0
    },
    "Sven": {
        "carry": 0.9,
        "disabler": 0.7,
        "initiator": 0.7,
        "durable": 0.8,
        "nuker": 0.6,
        "tuff": 0.8,
        "burst": 0.95,
        "cleave": 1.0
    },
    "Tiny": {
        "carry": 0.8,
        "nuker": 0.9,
        "pusher": 0.85,
        "initiator": 0.8,
        "durable": 0.8,
        "disabler": 0.75,
        "tuff": 0.85,
        "burst": 0.95
    },
    "Vengeful Spirit": {
        "support": 0.9,
        "initiator": 0.8,
        "disabler": 0.85,
        "nuker": 0.6,
        "escape": 0.5,
        "agility_core": 0.5,
        "save": 0.9
    },
    "Windranger": {
        "carry": 0.8,
        "support": 0.7,
        "disabler": 0.8,
        "escape": 0.85,
        "nuker": 0.8,
        "mobility": 0.8,
        "physical_damage": 0.85
    },
    "Zeus": {
        "nuker": 1.0,
        "carry": 0.6,
        "mana_dependent": 0.9,
        "global_presence": 1.0,
        "magic_damage": 1.0
    },
    "Kunkka": {
        "carry": 0.75,
        "support": 0.6,
        "disabler": 0.8,
        "initiator": 0.8,
        "durable": 0.8,
        "nuker": 0.75,
        "tuff": 0.8,
        "aoe_damage": 0.9
    },
    "Lina": {
        "lane_bully": 0.8,
        "ranged": 1,
        "support": 0.7,
        "carry": 0.9,
        "nuker": 0.95,
        "disabler": 0.7,
        "mana_dependent": 0.8,
        "attack_speed": 0.9
    },
    "Lion": {
        "support": 0.95,
        "disabler": 1.0,
        "nuker": 0.8,
        "initiator": 0.7,
        "mana_dependent": 0.6,
        "single_target_spell": 1.0,
        "squishy_support": 0.9
    },
    "Shadow Shaman": {
        "support": 0.95,
        "pusher": 0.9,
        "disabler": 1.0,
        "nuker": 0.7,
        "initiator": 0.6,
        "mana_dependent": 0.7,
        "squishy_support": 0.9
    },
    "Slardar": {
        "melee": 1,
        "carry": 0.7,
        "durable": 0.8,
        "initiator": 0.9,
        "disabler": 0.85,
        "escape": 0.7,
        "tuff": 0.8,
        "armor_corruption": 1.0
    },
    "Tidehunter": {
        "initiator": 1.0,
        "durable": 0.95,
        "disabler": 0.9,
        "nuker": 0.6,
        "carry": 0.4,
        "tuff": 0.9,
        "aoe_stun": 1.0
    },
    "Witch Doctor": {
        "support": 0.9,
        "nuker": 0.85,
        "disabler": 0.8,
        "mana_dependent": 0.7,
        "healing": 0.8,
        "summoning": 0.8,
        "squishy_support": 0.9
    },
    "Lich": {
        "support": 0.9,
        "nuker": 0.8,
        "mana_dependent": 0.7,
        "armor": 0.8,
        "teamfight": 0.8
    },
    "Riki": {
        "melee": 1,
        "carry": 0.8,
        "escape": 0.9,
        "disabler": 0.6,
        "agility_core": 0.85,
        "invisibility": 1.0,
        "mobility": 0.8
    },
    "Enigma": {
        "disabler": 0.95,
        "initiator": 1.0,
        "pusher": 0.8,
        "teamfight": 1.0,
        "jungler": 0.9,
        "pure_damage": 0.8
    },
    "Tinker": {
        "carry": 0.85,
        "nuker": 0.9,
        "pusher": 0.95,
        "mobility": 1.0,
        "caster": 1.0,
        "mana_dependent": 0.9,
        "global_mobility": 1.0
    },
    "Sniper": {
        "lane_bully": 0.9,
        "ranged": 1,
        "carry": 0.9,
        "nuker": 0.7,
        "agility_core": 0.85,
        "ranged_carry": 1.0,
        "squishy_early": 1.0
    },
    "Necrophos": {
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
    "Warlock": {
        "support": 0.9,
        "initiator": 0.85,
        "disabler": 0.8,
        "mana_dependent": 0.8,
        "teamfight": 0.9,
        "healing": 0.8
    },
    "Beastmaster": {
        "initiator": 0.9,
        "disabler": 0.95,
        "durable": 0.8,
        "nuker": 0.5,
        "pusher": 0.9,
        "vision": 0.9
    },
    "Queen of Pain": {
        "carry": 0.8,
        "nuker": 0.9,
        "escape": 0.9,
        "mana_dependent": 0.7,
        "mobility": 0.9,
        "aoe_magic": 0.8
    },
    "Venomancer": {
        "support": 0.8,
        "nuker": 0.8,
        "initiator": 0.6,
        "pusher": 0.85,
        "disabler": 0.7,
        "damage_over_time": 1.0,
        "vision": 0.8
    },
    "Faceless Void": {
        "carry": 0.95,
        "initiator": 0.9,
        "disabler": 0.9,
        "escape": 0.85,
        "durable": 0.7,
        "agility_core": 0.9,
        "late_game": 1.0
    },
    "Wraith King": {
        "carry": 0.9,
        "support": 0.3,
        "durable": 0.9,
        "disabler": 0.6,
        "initiator": 0.7,
        "tuff": 0.85,
        "survivability": 1.0
    },
    "Death Prophet": {
        "carry": 0.8,
        "pusher": 0.95,
        "nuker": 0.8,
        "disabler": 0.6,
        "durable": 0.7,
        "sustain": 0.8
    },
    "Phantom Assassin": {
        "melee": 1,
        "passive_reliant": 1,
        "carry": 0.95,
        "escape": 0.7,
        "agility_core": 0.9,
        "burst": 1.0,
        "evasion": 1.0,
        "squishy_early": 0.9
    },
    "Pugna": {
        "nuker": 0.9,
        "pusher": 0.95,
        "mana_dependent": 0.8,
        "anti_magic": 0.8,
        "squishy_support": 0.9
    },
    "Templar Assassin": {
        "carry": 0.9,
        "escape": 0.6,
        "agility_core": 0.85,
        "burst": 0.9,
        "physical_shield": 0.9,
        "armor_corruption": 0.9
    },
    "Viper": {
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
    "Luna": {
        "carry": 0.9,
        "nuker": 0.7,
        "pusher": 0.9,
        "agility_core": 0.9,
        "farming": 0.95,
        "aoe_damage": 0.9
    },
    "Dragon Knight": {
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
    "Dazzle": {
        "support": 0.95,
        "nuker": 0.6,
        "disabler": 0.6,
        "save": 1.0,
        "armor_corruption": 0.8,
        "healing": 0.9
    },
    "Clockwerk": {
        "initiator": 1.0,
        "disabler": 0.9,
        "durable": 0.8,
        "nuker": 0.7,
        "tuff": 0.8,
        "catch": 1.0
    },
    "Leshrac": {
        "carry": 0.85,
        "support": 0.6,
        "nuker": 0.95,
        "pusher": 0.95,
        "disabler": 0.7,
        "mana_dependent": 0.9,
        "aoe_magic": 1.0
    },
    "Nature's Prophet": {
        "carry": 0.8,
        "pusher": 1.0,
        "escape": 0.7,
        "nuker": 0.6,
        "global_mobility": 1.0,
        "farming": 0.9
    },
    "Lifestealer": {
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
    "Dark Seer": {
        "initiator": 0.8,
        "escape": 0.8,
        "disabler": 0.7,
        "mana_dependent": 0.7,
        "teamfight": 0.9,
        "farming": 0.8
    },
    "Clinkz": {
        "carry": 0.85,
        "escape": 0.8,
        "pusher": 0.8,
        "agility_core": 0.85,
        "invisibility": 0.9,
        "burst": 0.9
    },
    "Omniknight": {
        "support": 0.85,
        "durable": 0.8,
        "nuker": 0.5,
        "tuff": 0.7,
        "save": 0.9,
        "healing": 0.8,
        "summoning": 0.8,
        "physical_immunity": 1.0
    },
    "Enchantress": {
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
    "Huskar": {
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
    "Night Stalker": {
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
    "Broodmother": {
        "carry": 0.85,
        "pusher": 0.95,
        "escape": 0.8,
        "nuker": 0.6,
        "agility_core": 0.8,
        "farming": 0.9,
        "mobility": 0.9
    },
    "Bounty Hunter": {
        "support": 0.8,
        "escape": 0.85,
        "nuker": 0.7,
        "agility_core": 0.7,
        "invisibility": 0.9,
        "economy": 1.0
    },
    "Weaver": {
        "carry": 0.85,
        "escape": 0.95,
        "agility_core": 0.85,
        "mobility": 0.9,
        "survivability": 0.8,
        "squishy_early": 0.9
    },
    "Jakiro": {
        "support": 0.9,
        "nuker": 0.8,
        "pusher": 0.9,
        "disabler": 0.8,
        "mana_dependent": 0.7,
        "aoe_magic": 0.9
    },
    "Batrider": {
        "initiator": 1.0,
        "disabler": 0.9,
        "escape": 0.7,
        "catch": 1.0,
        "mobility": 0.8
    },
    "Chen": {
        "support": 0.9,
        "pusher": 0.9,
        "mana_dependent": 0.7,
        "healing": 0.9,
        "domination": 1.0
    },
    "Spectre": {
        "melee": 1,
        "passive_reliant": 1,
        "carry": 0.95,
        "durable": 0.9,
        "escape": 0.7,
        "tuff": 0.8,
        "global_presence": 1.0,
        "late_game": 1.0,
        "agility_core": 0.9
    },
    "Ancient Apparition": {
        "ranged": 1,
        "support": 0.9,
        "disabler": 0.7,
        "nuker": 0.8,
        "mana_dependent": 0.7,
        "anti_heal": 1.0,
        "global_presence": 0.8
    },
    "Doom": {
        "melee": 1,
        "anti_heal": 0.8,
        "carry": 0.75,
        "disabler": 1.0,
        "initiator": 0.8,
        "durable": 0.9,
        "nuker": 0.7,
        "tuff": 0.85,
        "farming": 0.9,
        "anti_save": 0.9
    },
    "Ursa": {
        "carry": 0.9,
        "durable": 0.8,
        "disabler": 0.6,
        "agility_core": 0.85,
        "burst": 0.9,
        "anti_tank": 0.9
    },
    "Spirit Breaker": {
        "support": 0.8,
        "initiator": 0.95,
        "disabler": 0.9,
        "durable": 0.8,
        "escape": 0.6,
        "tuff": 0.8,
        "global_mobility": 1.0,
        "catch": 0.9
    },
    "Gyrocopter": {
        "carry": 0.85,
        "nuker": 0.8,
        "disabler": 0.6,
        "agility_core": 0.85,
        "aoe_damage": 0.9,
        "teamfight": 0.85
    },
    "Alchemist": {
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
        "farming": 1.0,
        "economy": 1.0
    },
    "Invoker": {
        "carry": 0.8,
        "nuker": 0.9,
        "disabler": 0.85,
        "escape": 0.7,
        "pusher": 0.7,
        "complexity": 1.0,
        "versatility": 1.0,
        "caster": 1.0,
        "mana_dependent": 0.8
    },
    "Silencer": {
        "carry": 0.7,
        "support": 0.85,
        "disabler": 0.9,
        "initiator": 0.7,
        "nuker": 0.75,
        "mana_dependent": 0.7,
        "silence": 1.0,
        "global_presence": 0.9
    },
    "Outworld Destroyer": {
        "lane_bully": 1,
        "ranged": 1,
        "carry": 0.85,
        "nuker": 0.9,
        "disabler": 0.8,
        "mana_dependent": 0.8,
        "pure_damage": 0.9,
        "save": 0.7
    },
    "Lycan": {
        "carry": 0.85,
        "pusher": 1.0,
        "durable": 0.8,
        "escape": 0.8,
        "tuff": 0.7,
        "mobility": 0.9
    },
    "Brewmaster": {
        "carry": 0.7,
        "initiator": 0.9,
        "durable": 0.85,
        "disabler": 0.8,
        "nuker": 0.6,
        "teamfight": 0.95,
        "evasion": 0.8
    },
    "Shadow Demon": {
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
    "Lone Druid": {
        "carry": 0.9,
        "pusher": 0.9,
        "durable": 0.8,
        "agility_core": 0.85,
        "summoning": 1.0,
        "farming": 0.8
    },
    "Chaos Knight": {
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
    "Meepo": {
        "carry": 0.95,
        "escape": 0.7,
        "nuker": 0.8,
        "disabler": 0.8,
        "initiator": 0.7,
        "pusher": 0.9,
        "micro": 1.0,
        "illusioner": 0.3,
        "farming": 1.0,
        "agility_core": 0.9
    },
    "Treant Protector": {
        "support": 0.9,
        "initiator": 0.8,
        "durable": 0.8,
        "disabler": 0.85,
        "escape": 0.7,
        "tuff": 0.8,
        "healing": 0.9,
        "vision": 0.8
    },
    "Ogre Magi": {
        "support": 0.9,
        "nuker": 0.8,
        "disabler": 0.8,
        "durable": 0.85,
        "initiator": 0.6,
        "tuff": 0.85,
        "buff": 0.9
    },
    "Undying": {
        "support": 0.9,
        "durable": 0.85,
        "disabler": 0.5,
        "nuker": 0.7,
        "tuff": 0.9,
        "teamfight": 0.9,
        "healing": 0.7
    },
    "Rubick": {
        "support": 0.9,
        "disabler": 0.8,
        "nuker": 0.7,
        "mana_dependent": 0.8,
        "versatility": 1.0,
        "caster": 0.9
    },
    "Disruptor": {
        "support": 0.95,
        "disabler": 0.9,
        "nuker": 0.7,
        "initiator": 0.7,
        "mana_dependent": 0.8,
        "catch": 1.0,
        "teamfight": 0.9
    },
    "Nyx Assassin": {
        "support": 0.8,
        "disabler": 0.9,
        "nuker": 0.85,
        "initiator": 0.9,
        "escape": 0.8,
        "invisibility": 0.9,
        "anti_magic": 0.8
    },
    "Naga Siren": {
        "carry": 0.9,
        "support": 0.5,
        "pusher": 0.9,
        "disabler": 0.8,
        "initiator": 0.7,
        "escape": 0.8,
        "agility_core": 0.9,
        "illusioner": 1.0,
        "farming": 0.95
    },
    "Keeper of the Light": {
        "support": 0.9,
        "nuker": 0.8,
        "disabler": 0.6,
        "mana_dependent": 0.7,
        "mobility": 0.9,
        "mana_restore": 1.0
    },
    "Io": {
        "support": 1.0,
        "escape": 0.7,
        "nuker": 0.6,
        "tether": 1.0,
        "buffer": 1.0,
        "mobility": 0.7,
        "healing": 0.9,
        "global_mobility": 0.9
    },
    "Visage": {
        "support": 0.8,
        "carry": 0.7,
        "nuker": 0.8,
        "durable": 0.7,
        "disabler": 0.7,
        "pusher": 0.85,
        "summoning": 0.9
    },
    "Slark": {
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
    "Medusa": {
        "carry": 0.95,
        "disabler": 0.6,
        "durable": 0.95,
        "agility_core": 0.9,
        "farming": 0.95,
        "tank": 0.9,
        "mana_dependent": 1.0
    },
    "Troll Warlord": {
        "carry": 0.9,
        "pusher": 0.8,
        "disabler": 0.7,
        "durable": 0.8,
        "agility_core": 0.9,
        "survivability": 0.85,
        "attack_speed": 1.0
    },
    "Centaur Warrunner": {
        "initiator": 0.9,
        "durable": 0.95,
        "disabler": 0.85,
        "nuker": 0.7,
        "escape": 0.7,
        "tuff": 0.9,
        "tank": 0.9,
        "global_mobility": 0.8
    },
    "Magnus": {
        "melee": 1,
        "initiator": 1.0,
        "disabler": 0.9,
        "nuker": 0.6,
        "escape": 0.7,
        "buff": 0.9,
        "cleave": 0.9,
        "catch": 0.9
    },
    "Timbersaw": {
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
    "Bristleback": {
        "melee": 1,
        "sustain": 0.8,
        "passive_reliant": 1,
        "carry": 0.85,
        "durable": 0.95,
        "initiator": 0.7,
        "nuker": 0.7,
        "tuff": 1.0,
        "tank": 0.95,
        "brawler": 0.9,
        "physical_damage": 0.8,
        "passive_tank": 1.0
    },
    "Tusk": {
        "melee": 1,
        "initiator": 0.85,
        "disabler": 0.85,
        "nuker": 0.7,
        "tuff": 0.7,
        "save": 0.8,
        "catch": 0.9
    },
    "Skywrath Mage": {
        "support": 0.9,
        "nuker": 0.95,
        "disabler": 0.8,
        "mana_dependent": 0.9,
        "silence": 0.9,
        "squishy_support": 0.9
    },
    "Abaddon": {
        "support": 0.8,
        "carry": 0.7,
        "durable": 0.9,
        "save": 0.9,
        "dispel": 1.0,
        "healing": 0.8
    },
    "Elder Titan": {
        "support": 0.8,
        "initiator": 0.8,
        "disabler": 0.8,
        "nuker": 0.7,
        "durable": 0.7,
        "tuff": 0.7,
        "anti_tank": 0.9,
        "teamfight": 0.9
    },
    "Legion Commander": {
        "sustain": 0.8,
        "melee": 1,
        "carry": 0.8,
        "disabler": 0.9,
        "initiator": 0.9,
        "durable": 0.8,
        "nuker": 0.6,
        "tuff": 0.75,
        "catch": 1.0,
        "dispel": 0.8
    },
    "Techies": {
        "support": 0.8,
        "nuker": 0.9,
        "disabler": 0.7,
        "trapper": 1.0,
        "magical": 0.9,
        "building_damage": 0.8
    },
    "Ember Spirit": {
        "carry": 0.85,
        "escape": 0.95,
        "nuker": 0.8,
        "disabler": 0.7,
        "initiator": 0.8,
        "agility_core": 0.85,
        "mobility": 1.0,
        "magic_shield": 0.8
    },
    "Earth Spirit": {
        "support": 0.85,
        "nuker": 0.7,
        "escape": 0.85,
        "disabler": 0.9,
        "initiator": 0.9,
        "durable": 0.7,
        "tuff": 0.7,
        "mobility": 0.9
    },
    "Underlord": {
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
    "Terrorblade": {
        "carry": 0.95,
        "pusher": 0.9,
        "nuker": 0.7,
        "agility_core": 0.9,
        "illusioner": 0.9,
        "farming": 0.9,
        "armor": 0.9
    },
    "Phoenix": {
        "support": 0.85,
        "nuker": 0.85,
        "initiator": 0.8,
        "escape": 0.8,
        "disabler": 0.7,
        "tuff": 0.7,
        "teamfight": 0.95,
        "healing": 0.8
    },
    "Oracle": {
        "support": 0.95,
        "nuker": 0.7,
        "disabler": 0.6,
        "escape": 0.5,
        "mana_dependent": 0.8,
        "save": 1.0,
        "dispel": 0.9,
        "healing": 0.9
    },
    "Winter Wyvern": {
        "support": 0.9,
        "disabler": 0.85,
        "nuker": 0.7,
        "mana_dependent": 0.7,
        "save": 0.9,
        "anti_physical": 0.9,
        "teamfight": 0.9
    },
    "Arc Warden": {
        "carry": 0.95,
        "escape": 0.7,
        "nuker": 0.8,
        "pusher": 0.9,
        "agility_core": 0.85,
        "farming": 0.95
    },
    "Monkey King": {
        "carry": 0.85,
        "escape": 0.8,
        "disabler": 0.7,
        "initiator": 0.8,
        "agility_core": 0.9,
        "mobility": 0.9,
        "brawler": 0.8
    },
    "Dark Willow": {
        "support": 0.9,
        "nuker": 0.85,
        "disabler": 0.9,
        "escape": 0.8,
        "mana_dependent": 0.7,
        "catch": 0.8
    },
    "Pangolier": {
        "carry": 0.7,
        "initiator": 0.85,
        "nuker": 0.75,
        "disabler": 0.8,
        "durable": 0.7,
        "escape": 0.85,
        "mobility": 0.9
    },
    "Grimstroke": {
        "support": 0.9,
        "nuker": 0.8,
        "disabler": 0.85,
        "escape": 0.6,
        "mana_dependent": 0.8,
        "silence": 0.8,
        "teamfight": 0.9
    },
    "Hoodwink": {
        "ranged": 1,
        "break": 0.8,
        "support": 0.85,
        "nuker": 0.85,
        "escape": 0.85,
        "disabler": 0.8,
        "agility_core": 0.7,
        "mobility": 0.8
    },
    "Void Spirit": {
        "carry": 0.85,
        "escape": 0.95,
        "nuker": 0.85,
        "disabler": 0.7,
        "initiator": 0.8,
        "mobility": 0.95
    },
    "Snapfire": {
        "support": 0.85,
        "nuker": 0.9,
        "disabler": 0.7,
        "escape": 0.6,
        "teamfight": 0.9,
        "armor_corruption": 0.7
    },
    "Mars": {
        "carry": 0.7,
        "initiator": 0.95,
        "disabler": 0.85,
        "durable": 0.85,
        "tuff": 0.8,
        "teamfight": 0.9,
        "anti_physical": 0.8
    },
    "Ringmaster": {
        "support": 0.9,
        "nuker": 0.7,
        "escape": 0.8,
        "disabler": 0.85,
        "mana_dependent": 0.7,
        "save": 0.8,
        "catch": 0.8
    },
    "Dawnbreaker": {
        "carry": 0.8,
        "initiator": 0.85,
        "durable": 0.8,
        "tuff": 0.8,
        "healing": 0.8,
        "summoning": 0.8,
        "global_presence": 0.9
    },
    "Marci": {
        "support": 0.8,
        "carry": 0.85,
        "initiator": 0.85,
        "disabler": 0.8,
        "escape": 0.8,
        "mobility": 0.85,
        "brawler": 0.8
    },
    "Primal Beast": {
        "initiator": 0.9,
        "durable": 0.85,
        "disabler": 0.8,
        "nuker": 0.8,
        "tuff": 0.85,
        "mobility": 0.8
    },
    "Muerta": {
        "carry": 0.9,
        "nuker": 0.85,
        "disabler": 0.7,
        "mana_dependent": 0.8,
        "ethereal": 0.9,
        "physical_immunity": 0.9
    },
    "Kez": {
        "carry": 0.9,
        "escape": 0.9,
        "disabler": 0.7,
        "agility_core": 0.9,
        "mobility": 0.9,
        "burst": 0.8
    },
    "Largo": {
        "durable": 0.85,
        "disabler": 0.8,
        "support": 0.8,
        "tuff": 0.85,
        "initiator": 0.8,
        "tank": 0.8
    }
};

const formatIdHero = (name) => name.toLowerCase().replace(/[\s-]/g, '_').replace(/[']/g, '');

const heroes = Object.entries(heroesRawData).map(([name, tags]) => {
    let roles = [];
    
    let roleWeights = {
        'Carry': tags.carry || 0,
        'Mid': 0,
        'Offlane': 0,
        'Soft Support': 0,
        'Hard Support': 0
    };

    let carryPenalty = (tags.carry || 0) > 0.75 ? 0.2 : 1.0;
    let supportPenalty = (tags.support || 0) > 0.75 ? 0.3 : 1.0;
    
    // Support
    roleWeights['Hard Support'] = Math.min(1.0, (tags.support || 0) * 1.2 + (tags.save || 0) * 0.5);
    roleWeights['Soft Support'] = Math.min(1.0, (tags.support || 0) * 0.8 + (tags.initiator || 0) * 0.6 + (tags.nuker || 0) * 0.3);
    
    // Offlane
    roleWeights['Offlane'] = Math.min(1.0, ((tags.durable || 0) + (tags.initiator || 0) * 0.8 + (tags.tuff || 0)) * carryPenalty);
    
    // Mid
    roleWeights['Mid'] = Math.min(1.0, ((tags.nuker || 0) + (tags.escape || 0) * 0.5 + (tags.caster || 0) * 0.5) * supportPenalty);

    // Specific manual overrides for better accuracy
    if (name === 'Pudge') { roleWeights['Offlane'] = 0.2; roleWeights['Soft Support'] = 0.9; roleWeights['Mid'] = 0.6; }
    if (name === 'Lifestealer') { roleWeights['Offlane'] = 0.1; }
    if (name === 'Anti-Mage') { roleWeights['Mid'] = 0.0; }
    if (name === 'Storm Spirit') { roleWeights['Carry'] = 0.1; roleWeights['Mid'] = 1.0; }
    if (name === 'Phantom Lancer') { roleWeights['Mid'] = 0.0; roleWeights['Offlane'] = 0.0; }
    if (name === 'Chaos Knight') { roleWeights['Carry'] = 0.9; roleWeights['Offlane'] = 0.6; }
    if (name === 'Slardar') { roleWeights['Offlane'] = 0.9; roleWeights['Carry'] = 0.4; }
    
    for (let r in roleWeights) {
        if (roleWeights[r] > 0.55) roles.push(r);
    }

    if (roles.length === 0) {
        let bestRole = Object.keys(roleWeights).reduce((a, b) => roleWeights[a] > roleWeights[b] ? a : b);
        roles.push(bestRole);
    }

    return {
        id: formatIdHero(name),
        name,
        roles,
        roleWeights,
        tags,
        imageUrl: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/' + formatIdHero(name) + '.png'
    };
});

// Synthesize counters and synergies for items based on tags to work with recommendation engine
const formatIdItem = (name) => name.toLowerCase().replace(/[\s-]/g, '_').replace(/[']/g, '');

const items = Object.entries(itemRawData).map(([name, data]) => {
    const tags = data.tags;
    const counters = {};
    const synergies = {};

    // Synthesize synergies based on item tags
    if (tags.mobility) { synergies.initiator = 0.9; synergies.escape = 0.7; }
    if (tags.damage) { synergies.carry = 0.8; synergies.agility_core = 0.8; }
    if (tags.armor) { synergies.durable = 0.8; synergies.tuff = 0.8; synergies.tank = 0.8; }
    if (tags.health_regen || tags.healing || tags.burst_heal || tags.aoe_heal) { synergies.support = 0.8; synergies.healing = 0.8; }
    if (tags.attack_speed) { synergies.carry = 0.9; synergies.agility_core = 0.9; synergies.attack_speed = 0.9; }
    if (tags.farming) { synergies.carry = 0.9; synergies.agility_core = 0.8; synergies.farming = 0.9; }
    if (tags.mana || tags.mana_regen || tags.burst_mana) { synergies.mana_dependent = 0.9; synergies.caster = 0.9; synergies.nuker = 0.8; }
    if (tags.stats) { synergies.carry = 0.7; synergies.illusioner = 0.8; }
    if (tags.lifesteal) { synergies.carry = 0.8; synergies.brawler = 0.9; synergies.agility_core = 0.8; }
    if (tags.true_sight) { synergies.support = 0.9; synergies.initiator = 0.7; }
    if (tags.magic_resistance) { synergies.durable = 0.8; synergies.tank = 0.8; synergies.tuff = 0.8; synergies.initiator = 0.7; }
    if (tags.evasion) { synergies.agility_core = 0.9; synergies.carry = 0.8; }
    if (tags.ethereal) { synergies.support = 0.9; synergies.nuker = 0.9; synergies.save = 0.8; }
    if (tags.slow) { synergies.support = 0.7; synergies.initiator = 0.8; synergies.catch = 0.8; }
    if (tags.save) { synergies.support = 0.9; synergies.healing = 0.8; }
    if (tags.vision) { synergies.support = 0.9; }
    if (tags.global_mobility) { synergies.carry = 0.8; synergies.pusher = 0.8; }
    if (tags.spell_damage || tags.spell_amp) { synergies.nuker = 0.9; synergies.caster = 0.9; synergies.magic_damage = 0.9; }
    if (tags.aura_lifesteal || tags.aura_armor || tags.aura_mana) { synergies.support = 0.9; synergies.pusher = 0.8; synergies.teamfight = 0.9; }
    if (tags.silence) { synergies.catch = 0.9; synergies.initiator = 0.8; synergies.agility_core = 0.7; }
    if (tags.cyclone) { synergies.support = 0.8; synergies.caster = 0.8; synergies.save = 0.8; }
    if (tags.cast_range) { synergies.support = 0.8; synergies.caster = 0.9; synergies.nuker = 0.8; }
    if (tags.summoning) { synergies.pusher = 0.9; synergies.domination = 0.9; }
    if (tags.spell_immunity) { synergies.carry = 0.9; synergies.initiator = 0.8; synergies.brawler = 0.9; synergies.agility_core = 0.9; }
    if (tags.aoe_damage) { synergies.nuker = 0.8; synergies.farming = 0.8; synergies.pusher = 0.8; }
    if (tags.spell_block) { synergies.carry = 0.8; synergies.escape = 0.7; }
    if (tags.spell_reflection) { synergies.durable = 0.8; synergies.support = 0.8; synergies.save = 0.8; }
    if (tags.damage_reflection) { synergies.durable = 0.9; synergies.tuff = 0.9; synergies.tank = 0.9; synergies.initiator = 0.8; synergies.brawler = 0.9; }
    if (tags.crit) { synergies.carry = 0.9; synergies.burst = 0.9; synergies.physical_damage = 0.9; synergies.agility_core = 0.9; }
    if (tags.bash) { synergies.carry = 0.8; synergies.agility_core = 0.8; synergies.brawler = 0.8; }
    if (tags.cleave) { synergies.carry = 0.9; synergies.farming = 0.9; synergies.physical_damage = 0.9; }
    if (tags.illusions) { synergies.agility_core = 0.9; synergies.illusioner = 0.9; synergies.carry = 0.8; synergies.farming = 0.8; }
    if (tags.invisibility) { synergies.initiator = 0.8; synergies.escape = 0.8; synergies.agility_core = 0.7; }
    if (tags.status_resistance) { synergies.durable = 0.8; synergies.carry = 0.8; synergies.brawler = 0.8; }
    if (tags.domination) { synergies.pusher = 0.9; synergies.support = 0.7; }
    if (tags.armor_corruption) { synergies.physical_damage = 0.9; synergies.carry = 0.8; synergies.burst = 0.8; }
    if (tags.mana_drain) { synergies.illusioner = 0.9; synergies.agility_core = 0.8; synergies.mobility = 0.8; }
    if (tags.cooldown_reduction) { synergies.caster = 0.9; synergies.mana_dependent = 0.9; synergies.teamfight = 0.8; }
    if (tags.single_target_buff) { synergies.support = 0.9; }
    if (tags.invisibility_team) { synergies.support = 0.9; synergies.initiator = 0.8; synergies.teamfight = 0.9; }
    if (tags.root) { synergies.catch = 0.9; synergies.support = 0.8; synergies.initiator = 0.8; }
    if (tags.disarm) { synergies.durable = 0.8; synergies.support = 0.8; synergies.anti_carry = 0.9; synergies.anti_physical = 0.9; }

    // Synthesize counters based on item tags
    if (tags.anti_heal) { counters.high_regen = 1.0; counters.healing = 1.0; counters.tank = 0.8; counters.sustain = 0.9; counters.lifesteal = 0.8; }
    if (tags.true_sight) { counters.invisibility = 1.0; counters.escape = 0.7; counters.juke = 0.8; }
    if (tags.armor) { counters.physical_damage = 0.9; counters.carry = 0.8; counters.agility_core = 0.8; counters.burst = 0.7; counters.armor_corruption = 0.8; }
    if (tags.magic_resistance || tags.magic_block || tags.magic_shield) { counters.magic_damage = 0.9; counters.nuker = 0.9; counters.aoe_magic = 0.8; counters.burst = 0.7; }
    if (tags.ethereal) { counters.physical_damage = 0.9; counters.carry = 0.8; counters.agility_core = 0.8; }
    if (tags.silence) { counters.escape = 0.9; counters.caster = 0.9; counters.mana_dependent = 0.9; counters.mobility = 0.8; }
    if (tags.dispel || tags.continuous_dispel) { counters.buff = 0.9; counters.save = 0.9; counters.ethereal = 0.9; counters.physical_shield = 0.9; }
    if (tags.true_strike) { counters.evasion = 1.0; }
    if (tags.armor_corruption) { counters.durable = 0.8; counters.tank = 0.8; counters.tuff = 0.8; counters.armor = 0.9; }
    if (tags.mana_drain) { counters.mana_dependent = 1.0; counters.caster = 0.9; counters.medusa = 1.0; }
    if (tags.break) { counters.passive_tank = 1.0; counters.bristleback = 1.0; counters.durable = 0.8; counters.tuff = 0.8; counters.evasion = 0.7; }
    if (tags.damage_reflection) { counters.nuker = 0.8; counters.carry = 0.8; counters.burst = 0.9; counters.glass_cannon = 0.9; counters.aoe_damage = 0.7; }
    if (tags.spell_immunity) { counters.disabler = 1.0; counters.nuker = 0.9; counters.magical = 0.9; counters.mana_burn = 0.8; counters.magic_damage = 0.9; counters.aoe_magic = 0.9; }
    if (tags.evasion) { counters.physical_damage = 0.8; counters.carry = 0.8; counters.agility_core = 0.8; }
    if (tags.aoe_damage) { counters.illusioner = 0.9; counters.pusher = 0.8; counters.summoning = 0.9; }
    if (tags.hard_control || tags.root || tags.cyclone || tags.bash) { counters.escape = 0.9; counters.mobility = 0.9; counters.carry = 0.7; }
    if (tags.disarm) { counters.physical_damage = 0.9; counters.carry = 0.9; counters.agility_core = 0.8; counters.attack_speed = 0.9; }
    if (tags.spell_block) { counters.single_target_spell = 1.0; counters.catch = 0.8; counters.initiator = 0.7; }

    return {
        id: formatIdItem(name),
        name,
        cost: data.cost,
        tier: data.tier,
        tags,
        counters,
        synergies,
        imageUrl: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/' + formatIdItem(name).replace('recipe_', '') + '.png'
    };
});

let output = `export type Role = 'Carry' | 'Mid' | 'Offlane' | 'Soft Support' | 'Hard Support';\n\n`;
output += `export interface Hero {\n  id: string;\n  name: string;\n  roles: Role[];\n  roleWeights: Record<string, number>;\n  tags: Record<string, number>;\n  imageUrl: string;\n}\n\n`;
output += `export interface Item {\n  id: string;\n  name: string;\n  cost: number;\n  tier?: string;\n  tags: Record<string, number>;\n  counters: Record<string, number>;\n  synergies: Record<string, number>;\n  imageUrl: string;\n}\n\n`;

output += `export const HEROES: Hero[] = ${JSON.stringify(heroes, null, 2)};\n\n`;
output += `export const ITEMS: Item[] = ${JSON.stringify(items, null, 2)};\n`;

fs.writeFileSync('src/data/dotaData.ts', output);
