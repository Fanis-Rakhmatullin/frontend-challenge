(function(e){function t(t){for(var r,a,i=t[0],u=t[1],s=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},c={app:0},o=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-3a00581c":"645a8f78","chunk-60e82cc2":"c1492ba7","chunk-89dac722":"5c897696"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-3a00581c":1,"chunk-60e82cc2":1,"chunk-89dac722":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-3a00581c":"58105d98","chunk-60e82cc2":"bb4e2f0e","chunk-89dac722":"c4e864cb"}[e]+".css",c=u.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var s=o[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===c))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===r||l===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],f.parentNode.removeChild(f),n(o)},f.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}c[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("router-view",{attrs:{name:"header"}}),n("router-view")],1)},c=[],o=n("5530"),i=n("2f62"),u={methods:Object(o["a"])({},Object(i["b"])({fetchCats:"fetchCats",fetchLikedCats:"fetchLikedCats"})),created:function(){this.fetchCats(),this.fetchLikedCats()}},s=u,l=(n("5c0b"),n("2877")),d=Object(l["a"])(s,a,c,!1,null,null,null),f=d.exports,h=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));r["a"].use(h["a"]);var p=[{path:"/",name:"Home",components:{default:function(){return n.e("chunk-3a00581c").then(n.bind(null,"bb51"))},header:function(){return n.e("chunk-60e82cc2").then(n.bind(null,"f983"))}}},{path:"/liked",name:"Liked",components:{default:function(){return n.e("chunk-89dac722").then(n.bind(null,"7e6c"))},header:function(){return n.e("chunk-60e82cc2").then(n.bind(null,"f983"))}}}],m=new h["a"]({routes:p}),v=m,b=n("1da1"),k=n("2909");n("96cf"),n("159b"),n("4de4"),n("d81d");r["a"].use(i["a"]);var g=new i["a"].Store({state:{cats:[],likedCats:[]},mutations:{ADD_CATS:function(e,t){var n;(n=e.cats).push.apply(n,Object(k["a"])(t))},ADD_LIKED_CATS_FROM_STORAGE:function(e,t){var n;(n=e.likedCats).push.apply(n,Object(k["a"])(t))},TOGGLE_CAT_LIKE:function(e,t){e.cats.forEach((function(e){e.id===t.id&&(e.liked=!e.liked)}))},ADD_LIKED_CAT:function(e,t){e.likedCats.push(t)},REMOVE_CAT:function(e,t){e.likedCats=e.likedCats.filter((function(e){return e.id!==t.id}))}},actions:{fetchCats:function(e){return Object(b["a"])(regeneratorRuntime.mark((function t(){var n,r,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,fetch("https://api.thecatapi.com/v1/images/search?limit=20",{headers:{"x-api-key":"ef6646b0-b46d-47d5-955a-6687b14819d8"}});case 4:return r=t.sent,t.next=7,r.json();case 7:a=t.sent,c=a.map((function(e){return{id:e.id,url:e.url,liked:!1}})),n("ADD_CATS",c),t.next=15;break;case 12:throw t.prev=12,t.t0=t["catch"](1),new Error("Произошла ошибка");case 15:case"end":return t.stop()}}),t,null,[[1,12]])})))()},likeCat:function(e,t){var n=e.commit,r=e.dispatch;n("TOGGLE_CAT_LIKE",t),n("ADD_LIKED_CAT",t),r("saveToLocalStorage")},unlikeCat:function(e,t){var n=e.commit,r=e.dispatch;n("TOGGLE_CAT_LIKE",t),n("REMOVE_CAT",t),r("saveToLocalStorage")},saveToLocalStorage:function(e){var t=e.state;window.localStorage.setItem("likedCats",JSON.stringify(t.likedCats))},fetchLikedCats:function(e){var t=e.commit,n=window.localStorage.getItem("likedCats");n&&t("ADD_LIKED_CATS_FROM_STORAGE",JSON.parse(n))}}});r["a"].config.productionTip=!1,new r["a"]({router:v,store:g,render:function(e){return e(f)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.2dd950b3.js.map