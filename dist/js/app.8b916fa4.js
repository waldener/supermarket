(function(t){function e(e){for(var r,a,c=e[0],s=e[1],u=e[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-5b051897":"744ecab9","chunk-67072720":"32ad20a9","chunk-69252d85":"1bc7726a","chunk-118dfde5":"85a3de25","chunk-97ff585c":"f29a8f1f","chunk-da59b2fa":"24112ddb","chunk-f1fbbbf2":"a3920d84"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-5b051897":1,"chunk-67072720":1,"chunk-69252d85":1,"chunk-118dfde5":1,"chunk-97ff585c":1,"chunk-da59b2fa":1,"chunk-f1fbbbf2":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-5b051897":"feed6589","chunk-67072720":"927b13ea","chunk-69252d85":"bafde116","chunk-118dfde5":"2d7204f8","chunk-97ff585c":"da9f7745","chunk-da59b2fa":"d43f23e3","chunk-f1fbbbf2":"1d3b0837"}[t]+".css",o=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],l=u.getAttribute("data-href");if(l===r||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],d.parentNode.removeChild(d),n(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("08a0")},"08a0":function(t,e,n){},2872:function(t,e,n){t.exports=n.p+"img/shopcart.c68224ce.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",{attrs:{exclude:"Detail"}},[n("router-view")],1),n("MainTabBar")],1)},o=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("TabBar",{attrs:{id:"tab-bar"}},[r("tab-bar-item",{attrs:{path:"/home",activeColor:"var(--color-tint)"}},[r("img",{attrs:{slot:"item-icon",src:n("9443"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("b508"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("首页")])]),r("tab-bar-item",{attrs:{path:"/category",activeColor:"var(--color-tint)"}},[r("img",{attrs:{slot:"item-icon",src:n("57cd"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("a5ef"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("分类")])]),r("tab-bar-item",{attrs:{path:"/cart",activeColor:"var(--color-tint)"}},[r("img",{attrs:{slot:"item-icon",src:n("2872"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("c3f8"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("购物车")])]),r("tab-bar-item",{attrs:{path:"/profile",activeColor:"var(--color-tint)"}},[r("img",{attrs:{slot:"item-icon",src:n("e55d"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("d151"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("我的")])])],1)},c=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tab-bar"}},[t._t("default")],2)},u=[],l={name:"TabBar"},f=l,d=(n("5c28"),n("2877")),p=Object(d["a"])(f,s,u,!1,null,"1dfb67f6",null),h=p.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-bar-item",on:{click:t.itemClick}},[t.isActive?t._t("item-icon-active"):t._t("item-icon"),n("div",{style:t.activeStyle},[t._t("item-text")],2)],2)},b=[],v=(n("c975"),n("ac1f"),n("5319"),{name:"TabBarItem",props:{path:String,activeColor:{type:String,default:"red"}},computed:{isActive:function(){return-1!=this.$route.path.indexOf(this.path)},activeStyle:function(){return this.isActive?{color:this.activeColor}:{}}},methods:{itemClick:function(){if(this.$route.path==this.path)return!0;this.$router.replace(this.path)}}}),g=v,k=(n("f8f4"),Object(d["a"])(g,m,b,!1,null,"2e121d3c",null)),y=k.exports,_={name:"MainTabBar",components:{TabBar:h,TabBarItem:y}},x=_,w=(n("fae5"),Object(d["a"])(x,i,c,!1,null,"923c35d8",null)),O=w.exports,C={name:"App",components:{MainTabBar:O}},S=C,T=(n("034f"),Object(d["a"])(S,a,o,!1,null,null,null)),j=T.exports,E=(n("d3b7"),n("8c4f")),L=function(){return Promise.all([n.e("chunk-5b051897"),n.e("chunk-69252d85"),n.e("chunk-118dfde5")]).then(n.bind(null,"b3d7"))},P=function(){return Promise.all([n.e("chunk-5b051897"),n.e("chunk-69252d85"),n.e("chunk-da59b2fa")]).then(n.bind(null,"bb51"))},$=function(){return Promise.all([n.e("chunk-5b051897"),n.e("chunk-67072720")]).then(n.bind(null,"c228"))},B=function(){return n.e("chunk-f1fbbbf2").then(n.bind(null,"3b42"))},A=function(){return Promise.all([n.e("chunk-5b051897"),n.e("chunk-69252d85"),n.e("chunk-97ff585c")]).then(n.bind(null,"6ab7"))};r["a"].use(E["a"]);var N,M=new E["a"]({routes:[{path:"",redirect:"/home"},{path:"/home",component:L},{path:"/category",component:P},{path:"/cart",component:$},{path:"/profile",component:B},{path:"/detail",component:A}],mode:"history"}),D=M,I=n("2f62"),q=(n("7db0"),"add_to_cart"),J="increment_count",F={addToCart:function(t,e){var n=t.state,r=t.commit;return new Promise((function(t){var a=n.cartList.find((function(t){return t.iid==e.iid}));if(a){var o=n.cartList.indexOf(a);r(J,o)}else e.count=1,e.checked=!0,r(q,e);t()}))}},H=n("ade3"),K=(N={},Object(H["a"])(N,q,(function(t,e){t.cartList.push(e)})),Object(H["a"])(N,J,(function(t,e){t.cartList[e].count+=1})),N),U={cartLength:function(t){return t.cartList.length},cartList:function(t){return t.cartList}};r["a"].use(I["a"]);var z={cartList:[]},G=new I["a"].Store({state:z,mutations:K,actions:F,getters:U}),Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"toast"},[t._v(" "+t._s(t.message)+" ")])])},R=[],V={name:"Toast",data:function(){return{message:"默认弹窗",isShow:!1}}},W=V,X=(n("a772"),Object(d["a"])(W,Q,R,!1,null,"4743fc5a",null)),Y=X.exports,Z={};function tt(t){t.target.parentNode&&t.target.parentNode.removeChild(t.target)}Z.install=function(t){var e=t.extend(Y);e.prototype.close=function(){this.isShow=!1,this.$el.addEventListener("transitionend",tt)},t.prototype.$toast=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=new e;n.$mount(document.createElement("div")),document.body.appendChild(n.$el);var r=t.duration||2500;n.message=t.message,n.isShow=!0,setTimeout((function(){n.close()}),r)}};var et=Z,nt=n("816c"),rt=n.n(nt),at=n("697a");r["a"].config.productionTip=!1,r["a"].prototype.$bus=new r["a"],r["a"].use(et),rt.a.attach(document.body),r["a"].use(at["a"],{loading:n("bc5e")}),new r["a"]({router:D,store:G,render:function(t){return t(j)}}).$mount("#app")},"57cd":function(t,e,n){t.exports=n.p+"img/category.12bedb89.svg"},"5c28":function(t,e,n){"use strict";n("7502")},7502:function(t,e,n){},9443:function(t,e,n){t.exports=n.p+"img/home.7210ddcb.svg"},"9be9":function(t,e,n){},a5ef:function(t,e,n){t.exports=n.p+"img/category_active.cb2cc09f.svg"},a772:function(t,e,n){"use strict";n("e469")},aa1a:function(t,e,n){},b508:function(t,e,n){t.exports=n.p+"img/home_active.cc40b6f2.svg"},bc5e:function(t,e,n){t.exports=n.p+"img/placeholder.48bcea0d.png"},c3f8:function(t,e,n){t.exports=n.p+"img/shopcart_active.3f0a2016.svg"},d151:function(t,e,n){t.exports=n.p+"img/profile_active.fd66b281.svg"},e469:function(t,e,n){},e55d:function(t,e,n){t.exports=n.p+"img/profile.42d7cf12.svg"},f8f4:function(t,e,n){"use strict";n("aa1a")},fae5:function(t,e,n){"use strict";n("9be9")}});
//# sourceMappingURL=app.8b916fa4.js.map