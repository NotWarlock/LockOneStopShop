/**
 * Created by Sergio Masellis on 4/16/2017.
 */

(function () {
    var menuEl = document.getElementById('ml-menu'),
        mlmenu = new MLMenu(menuEl, {
            breadcrumbsCtrl: true, // show breadcrumbs
            initialBreadcrumb: 'Menu', // initial breadcrumb text
            backCtrl: false, // show back button
            // itemsDelayInterval : 60, // delay between each menu item sliding animation
            onItemClick: getPageData // callback: item that doesn´t have a submenu gets clicked - onItemClick([event], [inner HTML of the clicked item])
        }),
        guide = null;

    // mobile menu toggle and selectors
    var openMenuCtrl = document.querySelector('.action--open'),
        closeMenuCtrl = document.querySelector('.action--close'),
        hamburgerMenuCtrl = document.querySelector('.action--open'),
        specMenuCtrl = document.querySelectorAll('.spec'),
        logoMenuCtrl = document.querySelector('.logo a'),
        bodyCtrl = document.querySelector('body');

    // maintainance
    var maintainance = false;

    // Click events
    openMenuCtrl.addEventListener('click', openMenu);
    closeMenuCtrl.addEventListener('click', closeMenu);
    logoMenuCtrl.addEventListener('click', goHome);

    // Once Page is loaded look for anchors and create events for transitions
    function setAnchorTransition() {
        var guideLinks = document.querySelectorAll('.guide-link');
        if (guideLinks === null) return;
        for (var i = 0; i < guideLinks.length; i++) {
            guideLinks[i].addEventListener("click", function (e) {
                var urlLocation = e.target.href.split('#!/')[1].split("/");
                window.spec = urlLocation[0] || "";
                var itemName = urlLocation[1] || "";
                $("a:contains('" + window.spec + "')")[0].click();
                clearActiveMenu();
                $("a:contains('" + itemName + "')").addClass("menu__link--current");
                // console.log('itemName Sergio', itemName);
                getPageData("", itemName);
            }, false);
        }
    }

    // add click event to all spec menu links
    for (var i = 0; i < specMenuCtrl.length; i++) {
        specMenuCtrl[i].addEventListener('click', setSpec);
    }

    function openMenu() {
        classie.add(menuEl, 'menu--open');
        hamburgerMenuCtrl.style.display = "none";
    }

    function closeMenu() {
        classie.remove(menuEl, 'menu--open');
        hamburgerMenuCtrl.style.display = "block";
    }

    function goHome() {
        $("a:contains('Home')")[0].click();
        clearActiveMenu();
        $("a:contains('" + itemName + "')").addClass("menu__link--current");
    }

    function setSpec(e) {
        window.spec = e.target.text;
    }

    function forEach(array, callback, scope) {
        for (var i = 0; i < array.length; i++) {
            callback.call(scope, i, array[i]); // passes back stuff we need
        }
    }

    // simulate grid content loading
    var gridWrapper = document.querySelector('.content');
    var guideWrapper = document.querySelector('.guides');
    var loaderWrapper = document.querySelector('.loader');
    // var disqus_config = window.disqus_config = null;
    // var disqus_loaded = false;

    // if url filled get pageData
    var urlLocation = window.location.hash.substring(1).split("/");
    window.spec = urlLocation[1] || "";
    var itemName = urlLocation[2] || "";

    //check if has qsp
    if (window.spec.indexOf("?") != -1) {
        window.spec = window.spec.split('?')[0];
    }


    // Loading Guides from url path
    if (maintainance && getCookie('beta') === undefined) {
        $('.container').html('<center><h1>Coming soon</h1></center>');
    } else if (window.spec === "Home" || window.spec === "") {
        $("a:contains('Home')")[0].click();
        clearActiveMenu();
        $(".menu__item a:contains('Home')").addClass("menu__link--current");
    } else {
        function animateMenu(url, index){
            setTimeout(function () {
                $(".menu__level--current li a:contains('"+decodeURIComponent(url[index])+"')")[0].click();
                if(url.length > index+1){
                    animateMenu(url, index+1)
                }
            }, 1500);
        }

        animateMenu(urlLocation, 1);
    }

    function clearActiveMenu() {
        $("a.menu__link, a").removeClass("menu__link--current");
    }

    function getPageData(ev, itemName) {
        if (ev.preventDefault) ev.preventDefault();
        if (ev.target !== undefined && ev.target !== null) classie.add(ev.target, 'menu__link--current');
        // console.log('itemName:', itemName);

        closeMenu();
        classie.remove(loaderWrapper, 'hidden');
        classie.add(guideWrapper, 'hidden');
        window.document.title = "Lock One Stop Shop Loading...";

        var request = null;

        if (itemName === "Home") {
            request = new XMLHttpRequest();
            breadCrumbReady();
            request.open('GET', 'guides/Home.html?_=' + new Date().getTime(), true);
            request.send();
            window.location.hash = "!/" + encodeURIComponent(itemName);
            window.document.title = "Lock One Stop Shop | " + itemName;
        } else {

            setTimeout(function(){
                // Create a url string from the menu breadcrumb
                var url = '';
                var spec = window.spec;
                var $breadCrumb = document.querySelectorAll('nav.menu__breadcrumbs a');

                forEach($breadCrumb, function (index, value) {
                    var urlFragment = value.textContent;
                    if(index > 0) {
                        url += encodeURIComponent(urlFragment) + '/';
                    }
                });
                // go get the html file created from previous code
                request = new XMLHttpRequest();
                breadCrumbReady();
                request.open('GET', 'guides/' + url + itemName + '.html?_=' + new Date().getTime(), true);
                request.send();
                $('link[rel="canonical"]').attr('href', 'http://lockonestopshop.com/' + url);
                window.location.hash = "!/" + url + encodeURIComponent(itemName);
                window.document.title = "Lock One Stop Shop | " + itemName + " guide for " + window.spec;
            }, 1000);

        }

        function breadCrumbReady(){
            request.onload = function () {
                if (request.status >= 200 && request.status < 400) {
                    guide = request.responseText;
                    // window.disqus_config = function () {
                    //     this.page.url = 'http://lockonestopshop.com/'+window.location.hash;  // Replace PAGE_URL with your page's canonical URL variable
                    //     this.page.identifier = window.spec; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
                    // };
                    loadContent();
                } else {
                    guide = 'Loading Error try again';
                }
            };

            request.onerror = function (e) {
                // There was a connection error of some sort
            };
        }
    }

    function loadContent() {
        // add to html
        setTimeout(function () {
            window.scrollTo(0, 0);
            classie.remove(gridWrapper, 'content--loading');
            classie.add(loaderWrapper, 'hidden');
            guideWrapper.innerHTML = guide;
            setTimeout(function () {

                //Reset body class first then add current page class.
                bodyCtrl.className = '';
                bodyCtrl.classList.add(window.spec);

                // Show content
                classie.remove(guideWrapper, 'hidden');
                classie.remove(gridWrapper, 'hidden');

                // If content is NOT home page load disqus
                if (window.location.hash.split("#!/")[1] != "Home") {
                    //     //Load Disqus plugin
                    //     guideWrapper.innerHTML += '<br><br><h2>Discussion</h2><hr/><div id="disqus_thread"></div>';
                    guideWrapper.innerHTML += '<br><br>';
                    //     if(!disqus_loaded) {
                    //         (function () {
                    //             var d = document, s = d.createElement('script');
                    //             s.src = 'https://loss-1.disqus.com/embed.js';
                    //             s.setAttribute('data-timestamp', +new Date());
                    //             (d.head || d.body).appendChild(s);
                    //         })();
                    //         disqus_loaded = true;
                    //     } else if (typeof DISQUS !== "undefined") {
                    //         DISQUS.reset({
                    //             reload: true,
                    //             config: function () {
                    //                 this.page.identifier = window.spec;
                    //                 this.page.url = 'http://lockonestopshop.com/'+window.location.hash;
                    //                 this.page.title = window.document.title;
                    //             }
                    //         });
                    //     }
                    //
                    //
                } else {
                    // Create isotope grid
                    $('.grid').isotope({
                        itemSelector: '.grid-item',
                        masonry: {
                            columnWidth: 200
                        }
                    });
                }
                gaTrack(window.location.hash, 'LOSS ' + window.spec);
                setAnchorTransition();
            }, 500);

            setupExpandAndCollapse();
        }, 1700);
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

    function gaTracker(id) {
        var script = document.createElement('script');
        script.src = '//www.google-analytics.com/ga.js';
        document.getElementsByTagName('head')[0].appendChild(script);
        window.ga = window.ga || function () {
                (ga.q = ga.q || []).push(arguments)
            };
        ga.l = +new Date;
        ga('create', id, 'auto');
        ga('send', 'pageview');
    }
    // Function to track a virtual page view
    function gaTrack(path, title) {
        ga('set', {page: path, title: title});
        ga('send', 'pageview');
    }

    // Initiate the tracker after app has loaded
    gaTracker('UA-93914647-1');

    function getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) return parts.pop().split(";").shift();
    }

})();
