/**
 * Created by Sergio Masellis on 6/9/2017.
 * BfA Talents added by Zach Sedlacek on 2/17/2018.
 */

xtag.register('x-talent', {
    lifecycle: {
        inserted: function(){

            this.innerHTML = '<div class="talent-container talent-affliction"></div>';
            // used to select current spec
            var selectedSpec = this.getAttribute('spec') || "Affliction";
            var selectedTalents = this.getAttribute('talent') || "0000000";
            var talentId = Math.floor(Math.random() * 1000);
            this.id = "tid"+talentId;

            var container = document.querySelector("#"+this.id+' .talent-container');
            var data = {
                Affliction: [],
                Demonology: [],
                Destruction: [],
                BFADemonology: [],
                BFAAffliction: [],
                BFADestruction: []
            };

            // Affliction Specs
            data.Affliction[15] = [
                {
                    name: 'Haunt',
                    url: 'http://www.wowdb.com/spells/48181',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_haunt.jpg'
                },
                {
                    name: 'Writhe in Agony',
                    url: 'http://www.wowdb.com/spells/196102',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_curseofsargeras.jpg'
                },
                {
                    name: 'Malefic Grasp',
                    url: 'http://www.wowdb.com/spells/235155',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_everlastingaffliction.jpg'
                },
            ];
            data.Affliction[30] = [
                {
                    name: 'Contagion',
                    url: 'http://www.wowdb.com/spells/196105-contagion',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_creature_disease_03.jpg'
                },
                {
                    name: 'Absolute Corruption',
                    url: 'http://www.wowdb.com/spells/196103-absolute-corruption',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_bossmannoroth_empoweredmannorothsgaze.jpg'
                },
                {
                    name: 'Empowered Life Tap',
                    url: 'http://ptr.wowdb.com/spells/235157-empowered-life-tap',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_manafeed.jpg'
                },
            ];
            data.Affliction[45] = [
                {
                    name: 'Demonic Circle',
                    url: 'http://www.wowdb.com/spells/48018-demonic-circle',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_demoniccirclesummon.jpg'
                },
                {
                    name: 'Mortal Coil',
                    url: 'http://www.wowdb.com/spells/108396-mortal-coil',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_mortalcoil.jpg'
                },
                {
                    name: 'Howl of Terror',
                    url: 'http://www.wowdb.com/spells/5484-howl-of-terror',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_howlofterror.jpg'
                },
            ];
            data.Affliction[60] = [
                {
                    name: 'Phantom Singularity',
                    url: 'http://www.wowdb.com/spells/205179-phantom-singularity',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/inv_enchant_voidsphere.jpg'
                },
                {
                    name: 'Sow the Seeds',
                    url: 'http://www.wowdb.com/spells/196226-sow-the-seeds',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_seedofdestruction.jpg'
                },
                {
                    name: 'Soul Harvest',
                    url: 'http://www.wowdb.com/spells/196098-soul-harvest',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_warlock_demonsoul.jpg'
                },
            ];
            data.Affliction[75] = [
                {
                    name: 'Demon Skin',
                    url: 'http://www.wowdb.com/spells/219272-demon-skin',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_felarmour.jpg'
                },
                {
                    name: 'Burning Rush',
                    url: 'http://www.wowdb.com/spells/111400-burning-rush',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_deathwing_sealarmorbreachtga.jpg'
                },
                {
                    name: 'Dark Pact',
                    url: 'http://www.wowdb.com/spells/108416-dark-pact',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/warlock_sacrificial_pact.jpg'
                },
            ];
            data.Affliction[90] = [
                {
                    name: 'Grimoire of Supremacy',
                    url: 'http://www.wowdb.com/spells/152107-grimoire-of-supremacy',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/warlock_grimoireofcommand.jpg'
                },
                {
                    name: 'Grimoire of Service',
                    url: 'http://www.wowdb.com/spells/108501-grimoire-of-service',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/warlock_grimoireofservice.jpg'
                },
                {
                    name: 'Grimoire of Sacrifice',
                    url: 'http://www.wowdb.com/spells/108503-grimoire-of-sacrifice',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/warlock_grimoireofsacrifice.jpg'
                },
            ];
            data.Affliction[100] = [
                {
                    name: 'Death\'s Embrace',
                    url: 'http://ptr.wowdb.com/spells/234876-deaths-embrace',
                    img: 'http://media-azeroth.cursecdn.com/wow/icons/24287/large/spell_shadow_deathsembrace.jpg'
                },
                {
                    name: 'Siphon Life',
                    url: 'http://www.wowdb.com/spells/63106-siphon-life',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_requiem.jpg'
                },
                {
                    name: 'Soul Conduit',
                    url: 'http://www.wowdb.com/spells/215941-soul-conduit',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_soulleech_2.jpg'
                },
            ];

            // BFA Affliction
            data.BFAAffliction[15] = [
                {
                    name: 'Nightfall',
                    url: 'https://www.wowhead.com/spell=108558/nightfall',
                    img: 'http://media-azeroth.cursecdn.com/wow/icons/large/spell_shadow_twilight.55cd9357408b38902d2cb83198e4c34521ece10f.jpg'
                },
                {
                    name: 'Drain Soul',
                    url: 'https://www.wowhead.com/spell=198590/drain-soul',
                    img: 'https://media-azeroth.cursecdn.com/wow/icons/large/spell_shadow_haunting.jpg'
                },
                {
                    name: 'Deathbolt',
                    url: 'https://www.wowhead.com/spell=264106/deathbolt',
                    img: 'http://media-azeroth.cursecdn.com/wow/icons/large/spell_fire_twilightflamebolt.e4c7587e194ac25679ea68f403fc75fa143f44fb.jpg'
                },
            ];
            data.BFAAffliction[30] = [
                {
                    name: 'Writhe in Agony',
                    url: 'https://www.wowhead.com/spell=196102/writhe-in-agony',
                    img: 'http://media-azeroth.cursecdn.com/wow/icons/large/spell_shadow_curseofsargeras.f5b31a070776934f900822127efe56db4e65141b.jpg'
                },
                {
                    name: 'Absolute Corruption',
                    url: 'https://www.wowhead.com/spell=196103/absolute-corruption',
                    img: 'http://media-azeroth.cursecdn.com/wow/icons/large/ability_bossmannoroth_empoweredmannorothsgaze.06e1b5095df19e817c90b4b167917d244bce0731.jpg'
                },
                {
                    name: 'Siphon Life',
                    url: 'https://www.wowhead.com/spell=63106/siphon-life',
                    img: 'http://media-azeroth.cursecdn.com/wow/icons/large/spell_shadow_requiem.d508a94cdabfdf542a7e6f7ad888d50550f65398.jpg'
                },
            ];
            data.BFAAffliction[45] = [
                {
                    name: 'Demon Skin',
                    url: 'https://www.wowhead.com/spell=219272/demon-skin',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_felarmour.jpg'
                },
                {
                    name: 'Burning Rush',
                    url: 'https://www.wowhead.com/spell=111400/burning-rush',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_deathwing_sealarmorbreachtga.jpg'
                },
                {
                    name: 'Dark Pact',
                    url: 'https://www.wowhead.com/spell=108416/dark-pact',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/warlock_sacrificial_pact.jpg'
                },
            ];
            data.BFAAffliction[60] = [
                {
                    name: 'Sow the Seeds',
                    url: 'https://www.wowhead.com/spell=196226/sow-the-seeds',
                    img: 'http://media-azeroth.cursecdn.com/wow/icons/large/spell_shadow_seedofdestruction.40526df7f72274a376554474a1e62bd39399d062.jpg'
                },
                {
                    name: 'Phantom Singularity',
                    url: 'https://www.wowhead.com/spell=205179/phantom-singularity',
                    img: 'http://media-azeroth.cursecdn.com/wow/icons/large/inv_enchant_voidsphere.61af3a262db10b3929f443b1381a155e2c329435.jpg'
                },
                {
                    name: 'Vile Taint',
                    url: 'https://www.wowhead.com/spell=278350/vile-taint',
                    img: 'https://media-azeroth.cursecdn.com/wow/icons/large/sha_spell_shadow_shadesofdarkness_nightborne.jpg'
                },
            ];
            data.BFAAffliction[75] = [
                {
                    name: 'Darkfury',
                    url: 'https://www.wowhead.com/spell=264874/darkfury',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_shadowfurytga.jpg'
                },
                {
                    name: 'Mortal Coil',
                    url: 'https://www.wowhead.com/spell=6789/mortal-coil',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_mortalcoil.jpg'
                },
                {
                    name: 'Demonic Circle',
                    url: 'https://www.wowhead.com/spell=268358/demonic-circle',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_demoniccirclesummon.jpg'
                },
            ];
            data.BFAAffliction[90] = [
                {
                    name: 'Shadow Embrace',
                    url: 'https://www.wowhead.com/spell=32388/shadow-embrace',
                    img: 'http://media-azeroth.cursecdn.com/wow/icons/large/spell_shadow_shadowembrace.381c7f8b9bbb7ed8aa1f4d7b34645bac46748f9b.jpg'
                },
                {
                    name: 'Haunt',
                    url: 'https://www.wowhead.com/spell=48181/haunt',
                    img: 'http://media-azeroth.cursecdn.com/wow/icons/large/ability_warlock_haunt.60e8cab6e64f16b4dee5cdbede14b9ae5e26c183.jpg'
                },
                {
                    name: 'Grimoire of Sacrifice',
                    url: 'https://www.wowhead.com/spell=108503/grimoire-of-sacrifice',
                    img: 'http://media-azeroth.cursecdn.com/wow/icons/large/warlock_grimoireofsacrifice.d36a1443aee2da141a379a10e4e3312158495174.jpg'
                },
            ];
            data.BFAAffliction[100] = [
                {
                    name: 'Soul Conduit',
                    url: 'https://www.wowhead.com/spell=215941/soul-conduit',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_soulleech_2.jpg'
                },
                {
                    name: 'Creeping Death',
                    url: 'https://www.wowhead.com/spell=264000/creeping-death',
                    img: 'http://media-azeroth.cursecdn.com/wow/icons/large/ability_creature_cursed_03.7c98f35544ab159e3ffd0e6e0991b0cf91702436.jpg'
                },
                {
                    name: 'Dark Soul: Misery',
                    url: 'https://www.wowhead.com/spell=113860/dark-soul-misery',
                    img: 'https://media-azeroth.cursecdn.com/wow/icons/large/spell_warlock_soulburn.jpg'
                },
            ];

            // Demonlogy
            data.Demonology[15] = [
                {
                    name: 'Shadowy Inspiration',
                    url: 'http://www.wowdb.com/spells/196269-shadowy-inspiration',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/warlock_curse_shadow.jpg'
                },
                {
                    name: 'Shadowflame',
                    url: 'http://www.wowdb.com/spells/205181-shadowflame',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_shadowflame.jpg'
                },
                {
                    name: 'Demonic Calling',
                    url: 'http://www.wowdb.com/spells/205145-demonic-calling',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_impoweredimp.jpg'
                },
            ];
            data.Demonology[30] = [
                {
                    name: 'Impending Doom',
                    url: 'http://www.wowdb.com/spells/196270-impending-doom',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_impphaseshift.jpg'
                },
                {
                    name: 'Improved Dreadstalkers',
                    url: 'http://www.wowdb.com/spells/196272-improved-dreadstalkers',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_empoweredimp.jpg'
                },
                {
                    name: 'Implosion',
                    url: 'http://www.wowdb.com/spells/196277-implosion',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_shadowandflame.jpg'
                },
            ];
            data.Demonology[45] = [
                {
                    name: 'Demonic Circle',
                    url: 'http://www.wowdb.com/spells/48018-demonic-circle',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_demoniccirclesummon.jpg'
                },
                {
                    name: 'Mortal Coil',
                    url: 'http://www.wowdb.com/spells/108396-mortal-coil',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_mortalcoil.jpg'
                },
                {
                    name: 'Shadowfury',
                    url: 'http://www.wowdb.com/spells/30283-shadowfury',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_shadowfurytga.jpg'
                },
            ];
            data.Demonology[60] = [
                {
                    name: 'Hand of Doom',
                    url: 'http://www.wowdb.com/spells/196283-hand-of-doom',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_handofguldan.jpg'
                },
                {
                    name: 'Power Trip',
                    url: 'http://www.wowdb.com/spells/196605-power-trip',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_demonictactics.jpg'
                },
                {
                    name: 'Soul Harvest',
                    url: 'http://www.wowdb.com/spells/196098-soul-harvest',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_warlock_demonsoul.jpg'
                },
            ];
            data.Demonology[75] = [
                {
                    name: 'Demon Skin',
                    url: 'http://www.wowdb.com/spells/219272-demon-skin',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_felarmour.jpg'
                },
                {
                    name: 'Burning Rush',
                    url: 'http://www.wowdb.com/spells/111400-burning-rush',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_deathwing_sealarmorbreachtga.jpg'
                },
                {
                    name: 'Dark Pact',
                    url: 'http://www.wowdb.com/spells/108416-dark-pact',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/warlock_sacrificial_pact.jpg'
                },
            ];
            data.Demonology[90] = [
                {
                    name: 'Grimoire of Supremacy',
                    url: 'http://www.wowdb.com/spells/152107-grimoire-of-supremacy',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/warlock_grimoireofcommand.jpg'
                },
                {
                    name: 'Grimoire of Service',
                    url: 'http://www.wowdb.com/spells/108501-grimoire-of-service',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/warlock_grimoireofservice.jpg'
                },
                {
                    name: 'Grimoire of Synergy',
                    url: 'http://www.wowdb.com/spells/171975-grimoire-of-synergy',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/warlock_grimoireofsacrifice.jpg'
                },
            ];
            data.Demonology[100] = [
                {
                    name: 'Summon Darkglare',
                    url: 'http://www.wowdb.com/spells/205180-summon-darkglare',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/achievement_boss_durumu.jpg'
                },
                {
                    name: 'Demonbolt',
                    url: 'http://www.wowdb.com/spells/157695-demonbolt',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_warlock_demonbolt.jpg'
                },
                {
                    name: 'Soul Conduit',
                    url: 'http://www.wowdb.com/spells/215941-soul-conduit',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_soulleech_2.jpg'
                },
            ];

            // BFA Demonlogy
            data.BFADemonology[15] = [
                {
                    name: 'Dreadlash',
                    url: 'https://www.wowhead.com/spell=264078/dreadlash',
                    img: 'https://media-azeroth.cursecdn.com/wow/icons/large/spell_shadow_summonvoidwalker.jpg'
                },
                {
                    name: 'Demonic Strength',
                    url: 'https://www.wowhead.com/spell=267171/demonic-strength',
                    img: 'http://media-azeroth.cursecdn.com/wow/icons/large/ability_warlock_demonicempowerment.f74cd065dabf21dff8cd55178c94445120becb22.jpg'
                },
                {
                    name: 'Bilescourge Bombers',
                    url: 'https://www.wowhead.com/spell=267211/bilescourge-bombers',
                    img: 'http://media-azeroth.cursecdn.com/wow/icons/large/ability_hunter_pet_bat.4b98ab4e9d0bae001bd82761cbaaf7c1ccb4ffbb.jpg'
                },
            ];
            data.BFADemonology[30] = [
                {
                    name: 'Demonic Calling',
                    url: 'https://www.wowhead.com/spell=205145/demonic-calling',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_impoweredimp.jpg'
                },
                {
                    name: 'Power Siphon',
                    url: 'https://www.wowhead.com/spell=264130/power-siphon',
                    img: 'http://media-azeroth.cursecdn.com/wow/icons/large/ability_warlock_backdraft.32342ceaa5f8b67cc47c51d02a543f82febb507a.jpg'
                },
                {
                    name: 'Doom',
                    url: 'https://www.wowhead.com/spell=265412/doom',
                    img: 'http://media-azeroth.cursecdn.com/wow/icons/large/spell_shadow_auraofdarkness.801acd7236672952f66846356dcff587f734865f.jpg'
                },
            ];
            data.BFADemonology[45] = [
                {
                    name: 'Demon Skin',
                    url: 'https://www.wowhead.com/spell=219272/demon-skin',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_felarmour.jpg'
                },
                {
                    name: 'Burning Rush',
                    url: 'https://www.wowhead.com/spell=111400/burning-rush',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_deathwing_sealarmorbreachtga.jpg'
                },
                {
                    name: 'Dark Pact',
                    url: 'https://www.wowhead.com/spell=108416/dark-pact',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/warlock_sacrificial_pact.jpg'
                },
            ];
            data.BFADemonology[60] = [
                {
                    name: 'From the Shadows',
                    url: 'https://www.wowhead.com/spell=267170/from-the-shadows',
                    img: 'https://media-azeroth.cursecdn.com/wow/icons/large/spell_warlock_calldreadstalkers.3f17013a9fd7009fad1feed22cd63d6b13ff0d2a.jpg'
                },
                {
                    name: 'Soul Strike',
                    url: 'https://www.wowhead.com/spell=264057/soul-strike',
                    img: 'https://media-azeroth.cursecdn.com/wow/icons/large/inv_polearm_2h_fellord_04.c82c7c28657b09f45b82a453a8f4a936b9438bb4.jpg'
                },
                {
                    name: 'Summon Vilefiend',
                    url: 'https://www.wowhead.com/spell=264119/summon-vilefiend',
                    img: 'http://media-azeroth.cursecdn.com/wow/icons/large/inv_argusfelstalkermount.90996e938f73c9c98badca3ec92b8cf275602c62.jpg'
                },
            ];
            data.BFADemonology[75] = [
                {
                    name: 'Darkfury',
                    url: 'https://www.wowhead.com/spell=264874/darkfury',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_shadowfurytga.jpg'
                },
                {
                    name: 'Mortal Coil',
                    url: 'https://www.wowhead.com/spell=6789/mortal-coil',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_mortalcoil.jpg'
                },
                {
                    name: 'Demonic Circle',
                    url: 'https://www.wowhead.com/spell=268358/demonic-circle',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_demoniccirclesummon.jpg'
                },
            ];
            data.BFADemonology[90] = [
                {
                    name: 'Soul Conduit',
                    url: 'https://www.wowhead.com/spell=215941/soul-conduit',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_soulleech_2.jpg'
                },
                {
                    name: 'Inner Demons',
                    url: 'https://www.wowhead.com/spell=267216/inner-demons',
                    img: 'http://media-azeroth.cursecdn.com/wow/icons/large/ability_warlock_eradication.3af47ada116062f96515af05ba718c30b034f8a3.jpg'
                },
                {
                    name: 'Grimoire: Felguard',
                    url: 'https://www.wowhead.com/spell=111898/grimoire-felguard',
                    img: 'https://media-azeroth.cursecdn.com/wow/icons/large/spell_shadow_summonfelguard.jpg'
                },
            ];
            data.BFADemonology[100] = [
                {
                    name: 'Sacrificed Souls',
                    url: 'https://www.wowhead.com/spell=267214/sacrificed-souls',
                    img: 'http://media-azeroth.cursecdn.com/wow/icons/large/ability_creature_disease_05.3dfe2c4aca2c65eb7bf5d588a6670940142dc956.jpg'
                },
                {
                    name: 'Demonic Consumption',
                    url: 'https://www.wowhead.com/spell=267215/demonic-consumption',
                    img: 'http://media-azeroth.cursecdn.com/wow/icons/large/spell_warlock_soulburn.e27c49660a6eb6d557d1755d728f7bd6613189be.jpg'
                },
                {
                    name: 'Nether Portal',
                    url: 'https://www.wowhead.com/spell=267217/nether-portal',
                    img: 'http://media-azeroth.cursecdn.com/wow/icons/large/spell_warlock_demonicportal_green.79241940d3be099c0d7a3cdaf29589108a4ac614.jpg'
                },
            ];

            // Destro
            data.Destruction[15] = [
                {
                    name: 'Backdraft',
                    url: 'http://www.wowdb.com/spells/196406-backdraft',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_backdraft.jpg'
                },
                {
                    name: 'Roaring Blaze',
                    url: 'http://www.wowdb.com/spells/205184-roaring-blaze',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_inferno.jpg'
                },
                {
                    name: 'Shadowburn',
                    url: 'http://www.wowdb.com/spells/17877-shadowburn',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_scourgebuild.jpg'
                },
            ];
            data.Destruction[30] = [
                {
                    name: 'Reverse Entropy',
                    url: 'http://www.wowdb.com/spells/205148-reverse-entropy',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_backdraftgreen.jpg'
                },
                {
                    name: 'Eradication',
                    url: 'http://www.wowdb.com/spells/196412-eradication',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_eradication.jpg'
                },
                {
                    name: 'Empowered Life Tap',
                    url: 'http://www.wowdb.com/spells/235157-empowered-life-tap',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_manafeed.jpg'
                },
            ];
            data.Destruction[45] = [
                {
                    name: 'Demonic Circle',
                    url: 'http://www.wowdb.com/spells/48018-demonic-circle',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_demoniccirclesummon.jpg'
                },
                {
                    name: 'Mortal Coil',
                    url: 'http://www.wowdb.com/spells/108396-mortal-coil',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_mortalcoil.jpg'
                },
                {
                    name: 'Shadowfury',
                    url: 'http://www.wowdb.com/spells/30283-shadowfury',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_shadowfurytga.jpg'
                },
            ];
            data.Destruction[60] = [
                {
                    name: 'Cataclysm',
                    url: 'http://www.wowdb.com/spells/152108-cataclysm',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/achievement_zone_cataclysm.jpg'
                },
                {
                    name: 'Fire and Brimstone',
                    url: 'http://www.wowdb.com/spells/196408-fire-and-brimstone',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_fireandbrimstone.jpg'
                },
                {
                    name: 'Soul Harvest',
                    url: 'http://www.wowdb.com/spells/196098-soul-harvest',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_warlock_demonsoul.jpg'
                },
            ];
            data.Destruction[75] = [
                {
                    name: 'Demon Skin',
                    url: 'http://www.wowdb.com/spells/219272-demon-skin',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_felarmour.jpg'
                },
                {
                    name: 'Burning Rush',
                    url: 'http://www.wowdb.com/spells/111400-burning-rush',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_deathwing_sealarmorbreachtga.jpg'
                },
                {
                    name: 'Dark Pact',
                    url: 'http://www.wowdb.com/spells/108416-dark-pact',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/warlock_sacrificial_pact.jpg'
                },
            ];
            data.Destruction[90] = [
                {
                    name: 'Grimoire of Supremacy',
                    url: 'http://www.wowdb.com/spells/152107-grimoire-of-supremacy',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/warlock_grimoireofcommand.jpg'
                },
                {
                    name: 'Grimoire of Service',
                    url: 'http://www.wowdb.com/spells/108501-grimoire-of-service',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/warlock_grimoireofservice.jpg'
                },
                {
                    name: 'Grimoire of Sacrifice',
                    url: 'http://www.wowdb.com/spells/108503-grimoire-of-sacrifice',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/warlock_grimoireofsacrifice.jpg'
                },
            ];
            data.Destruction[100] = [
                {
                    name: 'Wreak Havoc',
                    url: 'http://www.wowdb.com/spells/196410-wreak-havoc',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_baneofhavoc.jpg'
                },
                {
                    name: 'Channel Demonfire',
                    url: 'http://www.wowdb.com/spells/196447-channel-demonfire',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_fire_ragnaros_lavaboltgreen.jpg'
                },
                {
                    name: 'Soul Conduit',
                    url: 'http://www.wowdb.com/spells/215941-soul-conduit',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_soulleech_2.jpg'
                },
            ];


            // BFADestro
            data.BFADestruction[15] = [
                {
                    name: 'Flashover',
                    url: 'https://www.wowhead.com/spell=267115/flashover',
                    img: 'http://media-azeroth.cursecdn.com/wow/icons/large/ability_warlock_backdraft.32342ceaa5f8b67cc47c51d02a543f82febb507a.jpg'
                },
                {
                    name: 'Eradication',
                    url: 'https://www.wowhead.com/spell=196412/eradication',
                    img: 'http://media-azeroth.cursecdn.com/wow/icons/large/ability_warlock_eradication.3af47ada116062f96515af05ba718c30b034f8a3.jpg'
                },
                {
                    name: 'Soul Fire',
                    url: 'https://www.wowhead.com/spell=6353/soul-fire',
                    img: 'http://media-azeroth.cursecdn.com/wow/icons/large/spell_fire_fireball02.f1f1341295ba5387c8b8f81d3dd07fbf0a7b0934.jpg'
                },
            ];
            data.BFADestruction[30] = [
                {
                    name: 'Reverse Entropy',
                    url: 'https://www.wowhead.com/spell=205148/reverse-entropy',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_backdraftgreen.jpg'
                },
                {
                    name: 'Internal Combustion',
                    url: 'https://www.wowhead.com/spell=266134/internal-combustion',
                    img: 'http://media-azeroth.cursecdn.com/wow/icons/large/ability_mage_livingbomb.b18a0dea8715737b85b6151642e6051784113021.jpg'
                },
                {
                    name: 'Shadowburn',
                    url: 'https://www.wowhead.com/spell=17877/shadowburn',
                    img: 'http://media-azeroth.cursecdn.com/wow/icons/large/spell_shadow_scourgebuild.2cc6b5919f794d08da7e1e2c88dab477371af8bd.jpg'
                },
            ];
            data.BFADestruction[45] = [
                {
                    name: 'Demon Skin',
                    url: 'https://www.wowhead.com/spell=219272/demon-skin',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_felarmour.jpg'
                },
                {
                    name: 'Burning Rush',
                    url: 'https://www.wowhead.com/spell=111400/burning-rush',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_deathwing_sealarmorbreachtga.jpg'
                },
                {
                    name: 'Dark Pact',
                    url: 'https://www.wowhead.com/spell=108416/dark-pact',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/warlock_sacrificial_pact.jpg'
                },
            ];
            data.BFADestruction[60] = [
                {
                    name: 'Inferno',
                    url: 'https://www.wowhead.com/spell=270545/inferno',
                    img: 'https://media-azeroth.cursecdn.com/wow/icons/large/spell_shadow_rainoffire.4fddda9e25a991c00d14750510d47e32f56c122f.jpg'
                },
                {
                    name: 'Fire and Brimstone',
                    url: 'https://www.wowhead.com/spell=196408/fire-and-brimstone',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_fireandbrimstone.jpg'
                },
                {
                    name: 'Cataclysm',
                    url: 'https://www.wowhead.com/spell=152108/cataclysm',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/achievement_zone_cataclysm.jpg'
                },
            ];
            data.BFADestruction[75] = [
                {
                    name: 'Darkfury',
                    url: 'https://www.wowhead.com/spell=264874/darkfury',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_shadowfurytga.jpg'
                },
                {
                    name: 'Mortal Coil',
                    url: 'https://www.wowhead.com/spell=6789/mortal-coil',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_mortalcoil.jpg'
                },
                {
                    name: 'Demonic Circle',
                    url: 'https://www.wowhead.com/spell=268358/demonic-circle',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_demoniccirclesummon.jpg'
                },
            ];
            data.BFADestruction[90] = [
                {
                    name: 'Roaring Blaze',
                    url: 'https://www.wowhead.com/spell=205184/roaring-blaze',
                    img: 'http://media-azeroth.cursecdn.com/wow/icons/large/ability_warlock_inferno.63558dacaeed5b4be7b889beb6670b67ab665e98.jpg'
                },
                {
                    name: 'Grimoire of Supremacy',
                    url: 'https://www.wowhead.com/spell=266086/grimoire-of-supremacy',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/warlock_grimoireofcommand.jpg'
                },
                {
                    name: 'Grimoire of Sacrifice',
                    url: 'https://www.wowhead.com/spell=108503/grimoire-of-sacrifice',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/warlock_grimoireofsacrifice.jpg'
                },
            ];
            data.BFADestruction[100] = [
                {
                    name: 'Soul Conduit',
                    url: 'https://www.wowhead.com/spell=215941/soul-conduit',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_soulleech_2.jpg'
                },
                {
                    name: 'Channel Demonfire',
                    url: 'https://www.wowhead.com/spell=196447/channel-demonfire',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_fire_ragnaros_lavaboltgreen.jpg'
                },
                {
                    name: 'Dark Soul: Instability',
                    url: 'https://www.wowhead.com/spell=113858/dark-soul-instability',
                    img: 'http://media-azeroth.cursecdn.com/wow/icons/large/spell_warlock_soulburn.e27c49660a6eb6d557d1755d728f7bd6613189be.jpg'
                },
            ];

            data[selectedSpec].forEach(function (e, i) {
                container.innerHTML += `
                <div data-talent-id="${talentId}" class="talent-id-${talentId} talent-row">
                    <div class="talent-level"><h2>${i}</h2></div>
                    <div class="talent talent-1"><a href="${e[0].url}"><i class="icon" style="background-image: url(${e[0].img});"></i><h2>${e[0].name}</h2></a></div>
                    <div class="talent talent-2"><a href="${e[1].url}"><i class="icon" style="background-image: url(${e[1].img});"></i><h2>${e[1].name}</h2></a></div>
                    <div class="talent talent-3"><a href="${e[2].url}"><i class="icon" style="background-image: url(${e[2].img});"></i><h2>${e[2].name}</h2></a></div>
                </div>`;
            });


            // if selectedTalents contains | use new algo
            if(selectedTalents.includes('|')){
                // add active class
                selectedTalents.split('|').forEach(function (talents, i) {
                    talents.split('').forEach(function (e, j) {
                        var selectedTalent = document.querySelectorAll('.talent-id-' + talentId + '.talent-row:nth-child(' + (i + 1) + ') .talent-' + e)[0];
                        if (selectedTalent) selectedTalent.classList.add('active');
                    });
                });
            } else {
                // add active class
                selectedTalents.split('').forEach(function (e, i) {
                    var selectedTalent = document.querySelectorAll('.talent-id-' + talentId + '.talent-row:nth-child(' + (i + 1) + ') .talent-' + e)[0];
                    if (selectedTalent) selectedTalent.classList.add('active');
                });
            }
            
        }
    },
    methods: {

    },
    events: {

    }
});
