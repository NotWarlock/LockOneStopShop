/**
 * Created by Sergio Masellis on 4/16/2017.
 */

(function () {
    var menuEl = document.getElementById('ml-menu'),
        mlmenu = new MLMenu(menuEl, {
            // breadcrumbsCtrl : true, // show breadcrumbs
            initialBreadcrumb: 'Home', // initial breadcrumb text
            backCtrl: false, // show back button
            // itemsDelayInterval : 60, // delay between each menu item sliding animation
            onItemClick: getPageData // callback: item that doesn´t have a submenu gets clicked - onItemClick([event], [inner HTML of the clicked item])
        }),
        guide = null;

    // mobile menu toggle
    var openMenuCtrl = document.querySelector('.action--open'),
        closeMenuCtrl = document.querySelector('.action--close'),
        specMenuCtrl = document.querySelectorAll('.spec');

    openMenuCtrl.addEventListener('click', openMenu);
    closeMenuCtrl.addEventListener('click', closeMenu);

    // add click event to all spec menu links
    for (var i = 0; i < specMenuCtrl.length; i++) {
        specMenuCtrl[i].addEventListener('click', setSpec);
    }

    function openMenu() {
        classie.add(menuEl, 'menu--open');
    }

    function closeMenu() {
        classie.remove(menuEl, 'menu--open');
    }

    function setSpec(e) {
        window.spec = e.target.text;
    }

    // simulate grid content loading
    var gridWrapper = document.querySelector('.content');
    var guideWrapper = document.querySelector('.guides');
    var loaderWrapper = document.querySelector('.loader');

    // if url filled get pageData
    var urlLocation = window.location.hash.substring(1).split("/");
    window.spec = urlLocation[1] || "";
    var itemName = urlLocation[2] || "";

    // Loading Guides from url path
    if (itemName == 'Sims') {
        $("a:contains('" + window.spec + "')")[0].click();
        gridWrapper.innerHTML = '';
        classie.add(gridWrapper, 'content--loading');
        setTimeout(function () {
            $(".menu__level--current li a:contains('Sims')")[0].click();
            setTimeout(function () {
                $(".menu__level--current li a:contains('" + urlLocation[urlLocation.length - 1] + "')")[0].click();
            }, 2000);
        }, 2000);
    } else if (window.spec == "" && itemName == "") {
        // do nothing
    } else {
        $("a:contains('" + window.spec + "')")[0].click();
        clearActiveMenu();
        $("a:contains('" + itemName + "')").addClass("menu__link--current");
        getPageData("", itemName);
    }

    function clearActiveMenu() {
        $("a.menu__link").removeClass("menu__link--current");
    }

    function getPageData(ev, itemName) {
        if (ev.preventDefault) ev.preventDefault();
        // clearActiveMenu();
        if (ev.target !== undefined && ev.target !== null) classie.add(ev.target, 'menu__link--current')

        closeMenu();
        classie.remove(loaderWrapper, 'hidden');
        classie.add(guideWrapper, 'hidden');

        var request = new XMLHttpRequest();
        if ($("nav a:nth-child(3)")[0] !== undefined && $("nav a:nth-child(3)")[0].text === "Sims") {
            request.open('GET', 'guides/' + window.spec + '/Sims/' + itemName + '.html?_=' + new Date().getTime(), true);
            console.log('itemName:', 'guides/' + window.spec + '/Sims/' + encodeURIComponent(itemName) + '.html?_=' + new Date().getTime());
            window.location.hash = "/" + window.spec + "/Sims/" + encodeURIComponent(itemName);
        } else {
            request.open('GET', 'guides/' + window.spec + '/' + itemName + '.html?_=' + new Date().getTime(), true);
            console.log('itemName:', 'guides/' + window.spec + '/' + encodeURIComponent(itemName) + '.html?_=' + new Date().getTime());
            window.location.hash = "/" + window.spec + "/" + encodeURIComponent(itemName);
        }

        request.onload = function () {
            if (request.status >= 200 && request.status < 400) {
                guide = request.responseText;
                parseBb();
            } else {
                guide = 'Loading Error try again';
            }
        };

        request.onerror = function (e) {
            // There was a connection error of some sort
        };

        request.send();
    }

    function parseBb() {
        var convertedBBtoHtml = XBBCODE.process({
            text: guide,
            removeMisalignedTags: false,
            addInLineBreaks: true
        });

        // add to html
        setTimeout(function () {
            window.scrollTo(0, 0);
            classie.remove(gridWrapper, 'content--loading');
            classie.add(loaderWrapper, 'hidden');
            guideWrapper.innerHTML = convertedBBtoHtml.html;
            setTimeout(function () {
                classie.remove(guideWrapper, 'hidden');
                classie.remove(gridWrapper, 'hidden');
                resetWowDB();
            }, 500);
            setupExpandAndCollapse();
        }, 1700);
    }

    function resetWowDB() {
        var __tip = new CurseTip({
            Url: "http://www.wowdb.com",
            Namespace: "wowdb-tooltip",
            Paths: ["achievements", "currencies", "items", "npcs", "pet-abilities", "quests", "spells", "wod-talents", "world-events", "garrison/abilities", "garrison/buildings", "garrison/followers", "garrison/missions", "garrison/ships", "orderhall/talents",],
            Arguments: ["gems", "itemLevel", "enchantment", "reforge", "extragem", "upgradeNum", "setPieces", "bonusIDs"],
            LoadingText: '<div class="wowdb-tooltip"><div class="db-tooltip"><div class="db-description" style="width: auto">Loading..</div></div></div>',
        });

        function WP_Stretch(a) {
            var b = 600;
            a.find(".db-description").each(function () {
                var e = jQuery(this);
                var c = e.width();
                var d = false;
                e.find(".tooltip-table tr, .db-title, h2, h3, .db-achievement-criteria > li").each(function () {
                    var f = parseInt(jQuery(this).attr("data-height"), 10) || 25;
                    while (jQuery(this).height() > f && c < b) {
                        d = true;
                        c += 10;
                        e.width(c)
                    }
                });
                if (d) {
                    e.width(c + 20)
                }
            })
        }

        if (typeof Azeroth !== "undefined") {
            Azeroth.CurseTip = __tip
        }
        ;
    }

    function setupExpandAndCollapse() {
        //Expand and collapse
        $(".ExpandBtn").on('click', function () {

            if ($(this).text() == 'Expand') {
                $(this).next().animate({
                    height: '100%'
                });
                $(this).text('Colapse');
            } else {
                $(this).next().animate({
                    height: 10
                });
                $(this).text('Expand');
            }

            return false;
        });
    }
})();
