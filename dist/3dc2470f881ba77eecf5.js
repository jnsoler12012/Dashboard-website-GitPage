!function(){"use strict";var e,r,t,n,o={9994:function(e,r,t){var n=t(7294),o=t(745),a=t(3379),c=(a=t.n(a),t(7795)),i=(c=t.n(c),t(569)),l=(i=t.n(i),t(3565)),u=(l=t.n(l),t(9216)),f=(u=t.n(u),t(4589)),s=(f=t.n(f),t(1424)),b={},m=(b.styleTagTransform=f(),b.setAttributes=l(),b.insert=i().bind(null,"head"),b.domAPI=c(),b.insertStyleElement=u(),a()(s.Z,b),s.Z&&s.Z.locals&&s.Z.locals,t(9617)),d=t(9164),y=t(6346);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,r){var t,n=Object.keys(e);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(e),r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)),n}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a,c,i=[],l=!0,u=!1;try{if(a=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;l=!1}else for(;!(l=(n=a.call(t)).done)&&(i.push(n.value),i.length!==r);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=t.return&&(c=t.return(),Object(c)!==c))return}finally{if(u)throw o}}return i}}(e,r)||function(e,r){var t;if(e)return"string"==typeof e?v(e,r):"Map"===(t="Object"===(t=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:t)||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?v(e,r):void 0}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function S(e,r){var t,n=Object.keys(e);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(e),r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)),n}function O(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?S(Object(t),!0).forEach((function(r){var n,o;n=e,o=t[r],(r=function(e){return e=function(e,r){if("object"!=h(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0===t)return String(e);if("object"!=h(t=t.call(e,"string")))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}(e),"symbol"==h(e)?e:String(e)}(r))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function j(e){var r=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?g(Object(t),!0).forEach((function(r){var n,o;n=e,o=t[r],(r=function(e){return e=function(e,r){if("object"!=p(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0===t)return String(e);if("object"!=p(t=t.call(e,"string")))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}(e),"symbol"==p(e)?e:String(e)}(r))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},"dark"===e?{grey:{100:"#e0e0e0",200:"#c2c2c2",300:"#a3a3a3",400:"#858585",500:"#666666",600:"#525252",700:"#3d3d3d",800:"#292929",900:"#141414"},primary:{100:"#d0d1d5",200:"#a1a4ab",300:"#727681",400:"#1F2A40",500:"#141b2d",600:"#101624",700:"#0c101b",800:"#080b12",900:"#040509"},greenAccent:{100:"#dbf5ee",200:"#b7ebde",300:"#94e2cd",400:"#70d8bd",500:"#4cceac",600:"#3da58a",700:"#2e7c67",800:"#1e5245",900:"#0f2922"},redAccent:{100:"#f8dcdb",200:"#f1b9b7",300:"#e99592",400:"#e2726e",500:"#db4f4a",600:"#af3f3b",700:"#832f2c",800:"#58201e",900:"#2c100f"},blueAccent:{100:"#e1e2fe",200:"#c3c6fd",300:"#a4a9fc",400:"#868dfb",500:"#6870fa",600:"#535ac8",700:"#3e4396",800:"#2a2d64",900:"#151632"}}:{grey:{100:"#141414",200:"#292929",300:"#3d3d3d",400:"#525252",500:"#666666",600:"#858585",700:"#a3a3a3",800:"#c2c2c2",900:"#e0e0e0"},primary:{100:"#040509",200:"#080b12",300:"#0c101b",400:"#f2f0f0",500:"#141b2d",600:"#1F2A40",700:"#727681",800:"#a1a4ab",900:"#d0d1d5"},greenAccent:{100:"#0f2922",200:"#1e5245",300:"#2e7c67",400:"#3da58a",500:"#4cceac",600:"#70d8bd",700:"#94e2cd",800:"#b7ebde",900:"#dbf5ee"},redAccent:{100:"#2c100f",200:"#58201e",300:"#832f2c",400:"#af3f3b",500:"#db4f4a",600:"#e2726e",700:"#e99592",800:"#f1b9b7",900:"#f8dcdb"},blueAccent:{100:"#151632",200:"#2a2d64",300:"#3e4396",400:"#535ac8",500:"#6870fa",600:"#868dfb",700:"#a4a9fc",800:"#c3c6fd",900:"#e1e2fe"}});return{palette:O({mode:e},"dark"===e?{primary:{main:r.primary[500]},secondary:{main:r.greenAccent[500]},neutral:{dark:r.grey[700],main:r.grey[500],light:r.grey[100]},background:{default:r.primary[500]}}:{primary:{main:r.primary[100]},secondary:{main:r.greenAccent[500]},neutral:{dark:r.grey[700],main:r.grey[500],light:r.grey[100]},background:{default:"#fcfcfc"}}),typography:{fontFamily:["Source Sans Pro","sans-serif"].join(","),fontSize:12,h1:{fontFamily:["Source Sans Pro","sans-serif"].join(","),fontSize:40},h2:{fontFamily:["Source Sans Pro","sans-serif"].join(","),fontSize:32},h3:{fontFamily:["Source Sans Pro","sans-serif"].join(","),fontSize:24},h4:{fontFamily:["Source Sans Pro","sans-serif"].join(","),fontSize:20},h5:{fontFamily:["Source Sans Pro","sans-serif"].join(","),fontSize:16},h6:{fontFamily:["Source Sans Pro","sans-serif"].join(","),fontSize:14}}}}var w=(0,n.createContext)({toggleColorMode:function(){}}),E=function(){var e=(t=A((0,n.useState)("dark"),2))[0],r=t[1],t=(0,n.useMemo)((function(){return{toggleColorMode:function(){return r((function(e){return"light"===e?"dark":"light"}))}}}),[]);return[(0,n.useMemo)((function(){return(0,m.Z)(j(e))}),[e]),t]};function P(e){e=e.children;var r=(t=A(E(),2))[0],t=t[1];return n.createElement(w.Provider,{value:t},n.createElement(d.Z,{theme:r},n.createElement(y.ZP,null),e))}var k=t(3727),x=t(6550),C="./dist/assets/fe22f943046f8961be9dd8ebf325294c.png",I=t(4745),F=t(4098);function B(){return n.createElement("div",null,"Abecedario",n.createElement("img",{src:C,alt:""}),n.createElement(I.Z,{variant:"contained"},"Hello world"),";",n.createElement(F.UFB,null))}var T=t(7804);function _(e){var r=e.as,t=e.href,o=e.to;e=e.visualText;return t?n.createElement(T.vj,{as:r,href:t},e):n.createElement(T.vj,{as:r,to:o},e)}function D(){return n.createElement("main",{className:"h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]"},n.createElement("h1",{className:"text-9xl font-extrabold text-white tracking-widest"},"404"),n.createElement("div",{className:"bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute"},"Page Not Found"),n.createElement("button",{className:"mt-5"},n.createElement("a",{className:"relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"},n.createElement("span",{className:"absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"}),n.createElement("span",{className:"relative block px-8 py-3 bg-[#1A2238] border border-current"},n.createElement(_,{as:k.rU,to:"/",visualText:"Go Home"})))))}function N(){return n.createElement(k.UT,null,n.createElement(x.rs,null,n.createElement(x.AW,{exact:!0,path:"/",component:B}),n.createElement(x.AW,{path:"*"},n.createElement(D,null))))}function M(){return n.createElement("div",null,"Sidebar")}function Z(){return n.createElement("div",null,"Topbar")}function z(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}o.createRoot(document.getElementById("root")).render(n.createElement((function(){var e=(r=function(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a,c,i=[],l=!0,u=!1;try{if(a=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;l=!1}else for(;!(l=(n=a.call(t)).done)&&(i.push(n.value),i.length!==r);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=t.return&&(c=t.return(),Object(c)!==c))return}finally{if(u)throw o}}return i}}(e,r)||function(e,r){var t;if(e)return"string"==typeof e?z(e,r):"Map"===(t="Object"===(t=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:t)||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?z(e,r):void 0}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,n.useState)(!0),2))[0],r=r[1];return n.createElement(P,null,n.createElement("div",{className:"app"},n.createElement(M,{isSidebar:e}),n.createElement("main",{className:"content"},n.createElement(Z,{setIsSidebar:r}),n.createElement(N,null))))}),null))},1424:function(e,r,t){var n=t(7537),o=(n=t.n(n),t(3645));(t=t.n(o)()(n())).push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;600;700&display=swap);"]),t.push([e.id,"html,\r\nbody,\r\n#root,\r\n.app,\r\n.content {\r\n    height: 100%;\r\n    width: 100%;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n}\r\n\r\n.app {\r\n    display: flex;\r\n    position: relative;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    width: 10px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n    background: #e0e0e0;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background: #888;\r\n}\r\n\r\n::-webkit-scrollbar-track:hover {\r\n    background: #555;\r\n}","",{version:3,sources:["webpack://./src/index.css"],names:[],mappings:"AAEA;;;;;IAKI,YAAY;IACZ,WAAW;IACX,0CAA0C;AAC9C;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;600;700&display=swap');\r\n\r\nhtml,\r\nbody,\r\n#root,\r\n.app,\r\n.content {\r\n    height: 100%;\r\n    width: 100%;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n}\r\n\r\n.app {\r\n    display: flex;\r\n    position: relative;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    width: 10px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n    background: #e0e0e0;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background: #888;\r\n}\r\n\r\n::-webkit-scrollbar-track:hover {\r\n    background: #555;\r\n}"],sourceRoot:""}]),r.Z=t}},a={};function c(e){var r=a[e];return void 0!==r||(r=a[e]={id:e,exports:{}},o[e](r,r.exports,c)),r.exports}function i(e,r){var t,o,a,i=r[0],l=r[1],u=r[2],f=0;if(i.some((function(e){return 0!==n[e]}))){for(t in l)c.o(l,t)&&(c.m[t]=l[t]);u&&(a=u(c))}for(e&&e(r);f<i.length;f++)o=i[f],c.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return c.O(a)}c.m=o,e=[],c.O=function(r,t,n,o){if(!t){for(var a=1/0,i=0;i<e.length;i++){t=e[i][0],n=e[i][1],o=e[i][2];for(var l,u=!0,f=0;f<t.length;f++)(!1&o||o<=a)&&Object.keys(c.O).every((function(e){return c.O[e](t[f])}))?t.splice(f--,1):(u=!1,o<a&&(a=o));u&&(e.splice(i--,1),void 0!==(l=n()))&&(r=l)}return r}o=o||0;for(i=e.length;0<i&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[t,n,o]},c.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(r,{a:r}),r},t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},c.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null),a=(c.r(o),{});r=r||[null,t({}),t([]),t(t)];for(var i=2&n&&e;"object"==typeof i&&!~r.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((function(r){a[r]=function(){return e[r]}}));return a.default=function(){return e},c.d(o,a),o},c.d=function(e,r){for(var t in r)c.o(r,t)&&!c.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n={179:0},c.O.j=function(e){return 0===n[e]},(l=self.webpackChunkecommerce_shop=self.webpackChunkecommerce_shop||[]).forEach(i.bind(null,0)),l.push=i.bind(null,l.push.bind(l)),c.nc=void 0;var l=c.O(void 0,[741,216],(function(){return c(9994)}));c.O(l)}();