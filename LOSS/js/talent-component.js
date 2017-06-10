/**
 * Created by Sergio Masellis on 6/9/2017.
 */
var TalentProto = Object.create(HTMLElement.prototype);

TalentProto.createdCallback = function () {
    this.innerHTML = '<div class="talent-container talent-affliction"></div>';

    var container = this.querySelector('.talent-container');
    var data = {
        Affliction: [],
        Demonology: [],
        Destruction: []
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
            url: 'http://www.wowdb.com/spells/196103-absolute-corruption',
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

    // Destro
    data.Destruction[15] = [
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
    data.Destruction[30] = [
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
            name: 'Howl of Terror',
            url: 'http://www.wowdb.com/spells/5484-howl-of-terror',
            img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_howlofterror.jpg'
        },
    ];
    data.Destruction[60] = [
        {
            name: 'Phantom Singularity',
            url: 'http://www.wowdb.com/spells/196103-absolute-corruption',
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


    // used to select current spec
    var selectedSpec = this.getAttribute('spec') || "Affliction";
    var selectedTalents = this.getAttribute('talent') || "0000000";
    var talentId = Math.floor(Math.random()*1000);

    data[selectedSpec].forEach(function (e, i) {
        container.innerHTML += `
                <div id="talent-id-${talentId}" class="talent-row">
                    <div class="talent-level"><h2>${i}</h2></div>
                    <div class="talent talent-1"><a href="${e[0].url}"><i class="icon" style="background-image: url(${e[0].img});"></i><h2>${e[0].name}</h2></a></div>
                    <div class="talent talent-2"><a href="${e[1].url}"><i class="icon" style="background-image: url(${e[1].img});"></i><h2>${e[1].name}</h2></a></div>
                    <div class="talent talent-3"><a href="${e[2].url}"><i class="icon" style="background-image: url(${e[2].img});"></i><h2>${e[2].name}</h2></a></div>
                </div>`;
    });

    // add active clas
    selectedTalents.split('').forEach(function (e, i) {
        var selectedTalent = document.querySelectorAll('#talent-id-'+talentId+'.talent-row:nth-child(' + (i + 1) + ') .talent-' + e)[0];
        if (selectedTalent) selectedTalent.classList.add('active');
    });

};

var talent = document.registerElement('x-talent', {prototype: TalentProto});
