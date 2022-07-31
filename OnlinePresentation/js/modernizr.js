window.Modernizr=function(e,t,n){function r(e){u.cssText=e}function o(e,t){return typeof e===t}var a,i,c={},l=t.documentElement,s=t.createElement("modernizr"),u=s.style,f={},d=[],p=d.slice,h={}.hasOwnProperty;for(var m in i=o(h,"undefined")||o(h.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return h.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=p.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var a=new o,i=t.apply(a,n.concat(p.call(arguments)));return Object(i)===i?i:a}return t.apply(e,n.concat(p.call(arguments)))};return r}),f)i(f,m)&&(a=m.toLowerCase(),c[a]=f[m](),d.push((c[a]?"":"no-")+a));return c.addTest=function(e,t){if("object"==typeof e)for(var r in e)i(e,r)&&c.addTest(r,e[r]);else{if(e=e.toLowerCase(),c[e]!==n)return c;t="function"==typeof t?t():t,l.className+=" "+(t?"":"no-")+e,c[e]=t}return c},r(""),s=null,function(e,t){function n(){var e=h.elements;return"string"==typeof e?e.split(" "):e}function r(e){var t=p[e[f]];return t||(t={},d++,e[f]=d,p[d]=t),t}function o(e,n,o){return n||(n=t),c?n.createElement(e):(o||(o=r(n)),!(a=o.cache[e]?o.cache[e].cloneNode():u.test(e)?(o.cache[e]=o.createElem(e)).cloneNode():o.createElem(e)).canHaveChildren||s.test(e)||a.tagUrn?a:o.frag.appendChild(a));var a}function a(e){e||(e=t);var a=r(e);return h.shivCSS&&!i&&!a.hasCSS&&(a.hasCSS=!!function(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),c||function(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return h.shivMethods?o(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/[\w\-]+/g,(function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'}))+");return n}")(h,t.frag)}(e,a),e}var i,c,l=e.html5||{},s=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,u=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f="_html5shiv",d=0,p={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",i="hidden"in e,c=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){i=!0,c=!0}}();var h={elements:l.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:"3.7.0",shivCSS:!1!==l.shivCSS,supportsUnknownElements:c,shivMethods:!1!==l.shivMethods,type:"default",shivDocument:a,createElement:o,createDocumentFragment:function(e,o){if(e||(e=t),c)return e.createDocumentFragment();for(var a=(o=o||r(e)).frag.cloneNode(),i=0,l=n(),s=l.length;i<s;i++)a.createElement(l[i]);return a}};e.html5=h,a(t)}(this,t),c._version="2.8.3",l.className=l.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+" js "+d.join(" "),c}(0,this.document),function(e,t,n){function r(e){return"[object Function]"==y.call(e)}function o(e){return"string"==typeof e}function a(){}function i(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=v.shift();g=1,e?e.t?h((function(){("c"==e.t?d.injectCss:d.injectJs)(e.s,0,e.a,e.x,e.e,1)}),0):(e(),c()):g=0}function l(e,n,r,o,a,l,s){function u(t){if(!p&&i(f.readyState)&&(E.r=p=1,!g&&c(),f.onload=f.onreadystatechange=null,t))for(var r in"img"!=e&&h((function(){j.removeChild(f)}),50),N[n])N[n].hasOwnProperty(r)&&N[n][r].onload()}s=s||d.errorTimeout;var f=t.createElement(e),p=0,y=0,E={t:r,s:n,e:a,a:l,x:s};1===N[n]&&(y=1,N[n]=[]),"object"==e?f.data=n:(f.src=n,f.type=e),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){u.call(this,y)},v.splice(o,0,E),"img"!=e&&(y||2===N[n]?(j.insertBefore(f,b?null:m),h(u,s)):N[n].push(f))}function s(e,t,n,r,a){return g=0,t=t||"j",o(e)?l("c"==t?C:S,e,t,this.i++,n,r,a):(v.splice(this.i++,0,e),1==v.length&&c()),this}function u(){var e=d;return e.loader={load:s,i:0},e}var f,d,p=t.documentElement,h=e.setTimeout,m=t.getElementsByTagName("script")[0],y={}.toString,v=[],g=0,E="MozAppearance"in p.style,b=E&&!!t.createRange().compareNode,j=b?p:m.parentNode,S=(p=e.opera&&"[object Opera]"==y.call(e.opera),p=!!t.attachEvent&&!p,E?"object":p?"script":"img"),C=p?"script":S,w=Array.isArray||function(e){return"[object Array]"==y.call(e)},F=[],N={},x={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};(d=function(e){function t(e,t,n,o,a){var i=function(e){e=e.split("!");var t,n,r,o=F.length,a=e.pop(),i=e.length;for(a={url:a,origUrl:a,prefixes:e},n=0;n<i;n++)r=e[n].split("="),(t=x[r.shift()])&&(a=t(a,r));for(n=0;n<o;n++)a=F[n](a);return a}(e),c=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(t&&(t=r(t)?t:t[e]||t[o]||t[e.split("/").pop().split("?")[0]]),i.instead?i.instead(e,t,n,o,a):(N[i.url]?i.noexec=!0:N[i.url]=1,n.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":undefined,i.noexec,i.attrs,i.timeout),(r(t)||r(c))&&n.load((function(){u(),t&&t(i.origUrl,a,o),c&&c(i.origUrl,a,o),N[i.url]=2}))))}function n(e,n){function i(e,a){if(e){if(o(e))a||(f=function(){var e=[].slice.call(arguments);d.apply(this,e),p()}),t(e,f,n,0,s);else if(Object(e)===e)for(l in c=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(l)&&(!a&&!--c&&(r(f)?f=function(){var e=[].slice.call(arguments);d.apply(this,e),p()}:f[l]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),p()}}(d[l])),t(e[l],f,n,l,s))}else!a&&p()}var c,l,s=!!e.test,u=e.load||e.both,f=e.callback||a,d=f,p=e.complete||a;i(s?e.yep:e.nope,!!u),u&&i(u)}var i,c,l=this.yepnope.loader;if(o(e))t(e,0,l,0);else if(w(e))for(i=0;i<e.length;i++)o(c=e[i])?t(c,0,l,0):w(c)?d(c):Object(c)===c&&n(c,l);else Object(e)===e&&n(e,l)}).addPrefix=function(e,t){x[e]=t},d.addFilter=function(e){F.push(e)},d.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",f=function(){t.removeEventListener("DOMContentLoaded",f,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,r,o,l,s){var u,f,p=t.createElement("script");o=o||d.errorTimeout;for(f in p.src=e,r)p.setAttribute(f,r[f]);n=s?c:n||a,p.onreadystatechange=p.onload=function(){!u&&i(p.readyState)&&(u=1,n(),p.onload=p.onreadystatechange=null)},h((function(){u||(u=1,n(1))}),o),l?p.onload():m.parentNode.insertBefore(p,m)},e.yepnope.injectCss=function(e,n,r,o,i,l){var s;o=t.createElement("link"),n=l?c:n||a;for(s in o.href=e,o.rel="stylesheet",o.type="text/css",r)o.setAttribute(s,r[s]);i||(m.parentNode.insertBefore(o,m),h(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};