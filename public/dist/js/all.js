(function(){var k=!!document.addEventListener;function l(a,b){k?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b)}function v(a){document.body?a():k?document.addEventListener("DOMContentLoaded",a):document.onreadystatechange=function(){"interactive"==document.readyState&&a()}};function w(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.f=document.createElement("span");this.g=-1;this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c)}
function y(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font:"+b+";"}function z(a){var b=a.a.offsetWidth,c=b+100;a.f.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.g!==b?(a.g=b,!0):!1}function A(a,b){function c(){var a=m;z(a)&&null!==a.a.parentNode&&b(a.g)}var m=a;l(a.b,c);l(a.c,c);z(a)};function B(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal"}var C=null,D=null,H=!!window.FontFace;function I(){if(null===D){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif"}catch(b){}D=""!==a.style.font}return D}function J(a,b){return[a.style,a.weight,I()?a.stretch:"","100px",b].join(" ")}
B.prototype.a=function(a,b){var c=this,m=a||"BESbswy",x=b||3E3,E=(new Date).getTime();return new Promise(function(a,b){if(H){var K=new Promise(function(a,b){function e(){(new Date).getTime()-E>=x?b():document.fonts.load(J(c,c.family),m).then(function(c){1<=c.length?a():setTimeout(e,25)},function(){b()})}e()}),L=new Promise(function(a,c){setTimeout(c,x)});Promise.race([L,K]).then(function(){a(c)},function(){b(c)})}else v(function(){function q(){var b;if(b=-1!=f&&-1!=g||-1!=f&&-1!=h||-1!=g&&-1!=h)(b=
f!=g&&f!=h&&g!=h)||(null===C&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),C=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=C&&(f==r&&g==r&&h==r||f==t&&g==t&&h==t||f==u&&g==u&&h==u)),b=!b;b&&(null!==d.parentNode&&d.parentNode.removeChild(d),clearTimeout(G),a(c))}function F(){if((new Date).getTime()-E>=x)null!==d.parentNode&&d.parentNode.removeChild(d),b(c);else{var a=document.hidden;if(!0===a||void 0===a)f=e.a.offsetWidth,g=n.a.offsetWidth,
h=p.a.offsetWidth,q();G=setTimeout(F,50)}}var e=new w(m),n=new w(m),p=new w(m),f=-1,g=-1,h=-1,r=-1,t=-1,u=-1,d=document.createElement("div"),G=0;d.dir="ltr";y(e,J(c,"sans-serif"));y(n,J(c,"serif"));y(p,J(c,"monospace"));d.appendChild(e.a);d.appendChild(n.a);d.appendChild(p.a);document.body.appendChild(d);r=e.a.offsetWidth;t=n.a.offsetWidth;u=p.a.offsetWidth;F();A(e,function(a){f=a;q()});y(e,J(c,'"'+c.family+'",sans-serif'));A(n,function(a){g=a;q()});y(n,J(c,'"'+c.family+'",serif'));A(p,function(a){h=
a;q()});y(p,J(c,'"'+c.family+'",monospace'))})})};window.FontFaceObserver=B;window.FontFaceObserver.prototype.check=B.prototype.a;"undefined"!==typeof module&&(module.exports=window.FontFaceObserver);}());
/* Special thanks to Dennis van Bennekom for providing me with this code */


/*
 * jQuery specifieke code omgezet naar vanilla javascript zodat de jQuery
 * library niet in hoeft geladen te worden. Dit scheelt een stuk in laadtijd.
**/
(function() {
    function init() {
        var links = document.querySelectorAll('a[data-url]');

        [].forEach.call(links, function(link) {
            link.addEventListener('click', function(event) {
                event.preventDefault();

                var url = event.currentTarget.getAttribute('data-url');
                var href = event.currentTarget.href;

                history.pushState(null, null, href);

                loadPage(url);
            });
        });
        window.addEventListener('popstate', function(event) {
            var url = '/api' + window.location.pathname;

            if (url === '/api/') {
                url = '/api/feed';
            }

            loadPage(url)
        });
    }

    function loadPage(url, href) {
        var wrapper = document.querySelector('main');

        fetch(url)
            .then(function(response){
                return response.text()
            })
            .then(function(text){
                wrapper.innerHTML = text;
                ready();
            });
    }

    function appearance() {
        // Appearance page
        var products = document.querySelectorAll('.product');

        products[0].classList.add('product-active');

        var firstIndicator = document.querySelector('.product-indicator[data-uuid="' + products[0].dataset.uuid + '"]');

        firstIndicator.classList.add('product-indicator-active');

        var indicators = document.querySelectorAll('.product-indicator');

        [].forEach.call(indicators, function(indicator) {
            indicator.addEventListener('click', function(event) {
                var id = event.target.dataset.uuid;

                var currentIndicatorActive = document.querySelector('.product-indicator-active');
                currentIndicatorActive.classList.remove('product-indicator-active');

                var newIndicatorActive = event.target;
                newIndicatorActive.classList.add('product-indicator-active');

                var currentActive = document.querySelector('.product-active');
                currentActive.classList.remove('product-active');

                var newActive = document.querySelector('.product[data-uuid="' + id + '"]');
                newActive.classList.add('product-active');
            });
        });
    }
    
    function ready() {
        init();

        // Credit: Robert van Steen
        if (/appearance/.test(window.location.href)) {
            appearance();
        }
    }

    // Service Worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js', { scope: './'})
            .then(function(reg){ console.info('registered sw', reg)})
            .catch(function(err){ console.error('error registering sw', err)})
    } else {
      console.log('ServiceWorker is not supported');
    }

    //Font face observer
    var observer = new FontFaceObserver('Raleway');

    observer.check()
        .then(function (reg) {
            console.log('Raleway is detected')
            document.body.className += " fonts-loaded";
        })
        .catch(function(err) {
            console.log('font is not detected')
        });

    document.addEventListener('DOMContentLoaded', function() {
        ready();
    }, false);
}());