!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=79)}([function(t,e,r){(function(e){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,r(42))},function(t,e){t.exports=function(t){return"function"==typeof t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,r){var n=r(1);t.exports=function(t){return"object"==typeof t?null!==t:n(t)}},function(t,e,r){var n=r(8),o={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return o.call(n(t),e)}},function(t,e,r){var n=r(0),o=r(30),c=r(4),i=r(31),u=r(32),a=r(33),l=o("wks"),s=n.Symbol,f=a?s:s&&s.withoutSetter||i;t.exports=function(t){return c(l,t)&&(u||"string"==typeof l[t])||(u&&c(s,t)?l[t]=s[t]:l[t]=f("Symbol."+t)),l[t]}},function(t,e,r){var n=r(0),o=r(43),c=r(44),i=r(45),u=r(13),a=function(t){if(t&&t.forEach!==i)try{u(t,"forEach",i)}catch(e){t.forEach=i}};for(var l in o)a(n[l]&&n[l].prototype);a(c)},function(t,e,r){var n=r(2);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e,r){var n=r(25);t.exports=function(t){return Object(n(t))}},function(t,e,r){var n=r(26),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},function(t,e,r){var n,o,c=r(0),i=r(11),u=c.process,a=c.Deno,l=u&&u.versions||a&&a.version,s=l&&l.v8;s?o=(n=s.split("."))[0]<4?1:n[0]+n[1]:i&&(!(n=i.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=i.match(/Chrome\/(\d+)/))&&(o=n[1]),t.exports=o&&+o},function(t,e,r){var n=r(12);t.exports=n("navigator","userAgent")||""},function(t,e,r){var n=r(0),o=r(1),c=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?c(n[t]):n[t]&&n[t][e]}},function(t,e,r){var n=r(7),o=r(19),c=r(21);t.exports=n?function(t,e,r){return o.f(t,e,c(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e,r){var n=r(1),o=r(48);t.exports=function(t){if(n(t))return t;throw TypeError(o(t)+" is not a function")}},function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,e,r){var n=r(0),o=r(17),c=n["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=c},function(t,e,r){var n=r(0);t.exports=function(t,e){try{Object.defineProperty(n,t,{value:e,configurable:!0,writable:!0})}catch(r){n[t]=e}return e}},function(t,e,r){var n=r(1),o=r(16),c=Function.toString;n(o.inspectSource)||(o.inspectSource=function(t){return c.call(t)}),t.exports=o.inspectSource},function(t,e,r){var n=r(7),o=r(35),c=r(36),i=r(20),u=Object.defineProperty;e.f=n?u:function(t,e,r){if(c(t),e=i(e),c(r),o)try{return u(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},function(t,e,r){var n=r(53),o=r(37);t.exports=function(t){var e=n(t,"string");return o(e)?e:String(e)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,r){var n=r(24),o=r(25);t.exports=function(t){return n(o(t))}},function(t,e,r){var n=r(0),o=r(3),c=n.document,i=o(c)&&o(c.createElement);t.exports=function(t){return i?c.createElement(t):{}}},function(t,e,r){var n=r(2),o=r(15),c="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?c.call(t,""):Object(t)}:Object},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e){var r=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:r)(t)}},function(t,e,r){var n=r(49);t.exports=function(t,e){return new(n(t))(0===e?0:e)}},function(t,e,r){var n=r(15);t.exports=Array.isArray||function(t){return"Array"==n(t)}},function(t,e,r){var n=r(51),o=r(1),c=r(15),i=r(5)("toStringTag"),u="Arguments"==c(function(){return arguments}());t.exports=n?c:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?r:u?c(e):"Object"==(n=c(e))&&o(e.callee)?"Arguments":n}},function(t,e,r){var n=r(52),o=r(16);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.18.0",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},function(t,e){var r=0,n=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+n).toString(36)}},function(t,e,r){var n=r(10),o=r(2);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},function(t,e,r){var n=r(32);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,r){"use strict";var n=r(2);t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},function(t,e,r){var n=r(7),o=r(2),c=r(23);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(c("div"),"a",{get:function(){return 7}}).a}))},function(t,e,r){var n=r(3);t.exports=function(t){if(n(t))return t;throw TypeError(String(t)+" is not an object")}},function(t,e,r){var n=r(1),o=r(12),c=r(33);t.exports=c?function(t){return"symbol"==typeof t}:function(t){var e=o("Symbol");return n(e)&&Object(t)instanceof e}},function(t,e,r){"use strict";var n=r(39),o=r(2),c=r(28),i=r(3),u=r(8),a=r(9),l=r(71),s=r(27),f=r(72),p=r(5),y=r(10),v=p("isConcatSpreadable"),d=y>=51||!o((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),g=f("concat"),m=function(t){if(!i(t))return!1;var e=t[v];return void 0!==e?!!e:c(t)};n({target:"Array",proto:!0,forced:!d||!g},{concat:function(t){var e,r,n,o,c,i=u(this),f=s(i,0),p=0;for(e=-1,n=arguments.length;e<n;e++)if(m(c=-1===e?i:arguments[e])){if(p+(o=a(c.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(r=0;r<o;r++,p++)r in c&&l(f,p,c[r])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");l(f,p++,c)}return f.length=p,f}})},function(t,e,r){var n=r(0),o=r(40).f,c=r(13),i=r(57),u=r(17),a=r(62),l=r(70);t.exports=function(t,e){var r,s,f,p,y,v=t.target,d=t.global,g=t.stat;if(r=d?n:g?n[v]||u(v,{}):(n[v]||{}).prototype)for(s in e){if(p=e[s],f=t.noTargetGet?(y=o(r,s))&&y.value:r[s],!l(d?s:v+(g?".":"#")+s,t.forced)&&void 0!==f){if(typeof p==typeof f)continue;a(p,f)}(t.sham||f&&f.sham)&&c(p,"sham",!0),i(r,s,p,t)}}},function(t,e,r){var n=r(7),o=r(56),c=r(21),i=r(22),u=r(20),a=r(4),l=r(35),s=Object.getOwnPropertyDescriptor;e.f=n?s:function(t,e){if(t=i(t),e=u(e),l)try{return s(t,e)}catch(t){}if(a(t,e))return c(!o.f.call(t,e),t[e])}},function(t,e){t.exports={}},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,r){var n=r(23)("span").classList,o=n&&n.constructor&&n.constructor.prototype;t.exports=o===Object.prototype?void 0:o},function(t,e,r){"use strict";var n=r(46).forEach,o=r(34)("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,e,r){var n=r(47),o=r(24),c=r(8),i=r(9),u=r(27),a=[].push,l=function(t){var e=1==t,r=2==t,l=3==t,s=4==t,f=6==t,p=7==t,y=5==t||f;return function(v,d,g,m){for(var h,b,S=c(v),_=o(S),x=n(d,g,3),w=i(_.length),L=0,E=m||u,O=e?E(v,w):r||p?E(v,0):void 0;w>L;L++)if((y||L in _)&&(b=x(h=_[L],L,S),t))if(e)O[L]=b;else if(b)switch(t){case 3:return!0;case 5:return h;case 6:return L;case 2:a.call(O,h)}else switch(t){case 4:return!1;case 7:a.call(O,h)}return f?-1:l||s?s:O}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},function(t,e,r){var n=r(14);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){try{return String(t)}catch(t){return"Object"}}},function(t,e,r){var n=r(28),o=r(50),c=r(3),i=r(5)("species");t.exports=function(t){var e;return n(t)&&(e=t.constructor,(o(e)&&(e===Array||n(e.prototype))||c(e)&&null===(e=e[i]))&&(e=void 0)),void 0===e?Array:e}},function(t,e,r){var n=r(2),o=r(1),c=r(29),i=r(12),u=r(18),a=[],l=i("Reflect","construct"),s=/^\s*(?:class|function)\b/,f=s.exec,p=!s.exec((function(){})),y=function(t){if(!o(t))return!1;try{return l(Object,a,t),!0}catch(t){return!1}};t.exports=!l||n((function(){var t;return y(y.call)||!y(Object)||!y((function(){t=!0}))||t}))?function(t){if(!o(t))return!1;switch(c(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return p||!!f.call(s,u(t))}:y},function(t,e,r){var n={};n[r(5)("toStringTag")]="z",t.exports="[object z]"===String(n)},function(t,e){t.exports=!1},function(t,e,r){var n=r(3),o=r(37),c=r(54),i=r(55),u=r(5)("toPrimitive");t.exports=function(t,e){if(!n(t)||o(t))return t;var r,a=c(t,u);if(a){if(void 0===e&&(e="default"),r=a.call(t,e),!n(r)||o(r))return r;throw TypeError("Can't convert object to primitive value")}return void 0===e&&(e="number"),i(t,e)}},function(t,e,r){var n=r(14);t.exports=function(t,e){var r=t[e];return null==r?void 0:n(r)}},function(t,e,r){var n=r(1),o=r(3);t.exports=function(t,e){var r,c;if("string"===e&&n(r=t.toString)&&!o(c=r.call(t)))return c;if(n(r=t.valueOf)&&!o(c=r.call(t)))return c;if("string"!==e&&n(r=t.toString)&&!o(c=r.call(t)))return c;throw TypeError("Can't convert object to primitive value")}},function(t,e,r){"use strict";var n={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,c=o&&!n.call({1:2},1);e.f=c?function(t){var e=o(this,t);return!!e&&e.enumerable}:n},function(t,e,r){var n=r(0),o=r(1),c=r(4),i=r(13),u=r(17),a=r(18),l=r(58),s=r(61).CONFIGURABLE,f=l.get,p=l.enforce,y=String(String).split("String");(t.exports=function(t,e,r,a){var l,f=!!a&&!!a.unsafe,v=!!a&&!!a.enumerable,d=!!a&&!!a.noTargetGet,g=a&&void 0!==a.name?a.name:e;o(r)&&("Symbol("===String(g).slice(0,7)&&(g="["+String(g).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!c(r,"name")||s&&r.name!==g)&&i(r,"name",g),(l=p(r)).source||(l.source=y.join("string"==typeof g?g:""))),t!==n?(f?!d&&t[e]&&(v=!0):delete t[e],v?t[e]=r:i(t,e,r)):v?t[e]=r:u(e,r)})(Function.prototype,"toString",(function(){return o(this)&&f(this).source||a(this)}))},function(t,e,r){var n,o,c,i=r(59),u=r(0),a=r(3),l=r(13),s=r(4),f=r(16),p=r(60),y=r(41),v=u.WeakMap;if(i||f.state){var d=f.state||(f.state=new v),g=d.get,m=d.has,h=d.set;n=function(t,e){if(m.call(d,t))throw new TypeError("Object already initialized");return e.facade=t,h.call(d,t,e),e},o=function(t){return g.call(d,t)||{}},c=function(t){return m.call(d,t)}}else{var b=p("state");y[b]=!0,n=function(t,e){if(s(t,b))throw new TypeError("Object already initialized");return e.facade=t,l(t,b,e),e},o=function(t){return s(t,b)?t[b]:{}},c=function(t){return s(t,b)}}t.exports={set:n,get:o,has:c,enforce:function(t){return c(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!a(e)||(r=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,e,r){var n=r(0),o=r(1),c=r(18),i=n.WeakMap;t.exports=o(i)&&/native code/.test(c(i))},function(t,e,r){var n=r(30),o=r(31),c=n("keys");t.exports=function(t){return c[t]||(c[t]=o(t))}},function(t,e,r){var n=r(7),o=r(4),c=Function.prototype,i=n&&Object.getOwnPropertyDescriptor,u=o(c,"name"),a=u&&"something"===function(){}.name,l=u&&(!n||n&&i(c,"name").configurable);t.exports={EXISTS:u,PROPER:a,CONFIGURABLE:l}},function(t,e,r){var n=r(4),o=r(63),c=r(40),i=r(19);t.exports=function(t,e){for(var r=o(e),u=i.f,a=c.f,l=0;l<r.length;l++){var s=r[l];n(t,s)||u(t,s,a(e,s))}}},function(t,e,r){var n=r(12),o=r(64),c=r(69),i=r(36);t.exports=n("Reflect","ownKeys")||function(t){var e=o.f(i(t)),r=c.f;return r?e.concat(r(t)):e}},function(t,e,r){var n=r(65),o=r(68).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},function(t,e,r){var n=r(4),o=r(22),c=r(66).indexOf,i=r(41);t.exports=function(t,e){var r,u=o(t),a=0,l=[];for(r in u)!n(i,r)&&n(u,r)&&l.push(r);for(;e.length>a;)n(u,r=e[a++])&&(~c(l,r)||l.push(r));return l}},function(t,e,r){var n=r(22),o=r(9),c=r(67),i=function(t){return function(e,r,i){var u,a=n(e),l=o(a.length),s=c(i,l);if(t&&r!=r){for(;l>s;)if((u=a[s++])!=u)return!0}else for(;l>s;s++)if((t||s in a)&&a[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},function(t,e,r){var n=r(26),o=Math.max,c=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):c(r,e)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,r){var n=r(2),o=r(1),c=/#|\.prototype\./,i=function(t,e){var r=a[u(t)];return r==s||r!=l&&(o(e)?n(e):!!e)},u=i.normalize=function(t){return String(t).replace(c,".").toLowerCase()},a=i.data={},l=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},function(t,e,r){"use strict";var n=r(20),o=r(19),c=r(21);t.exports=function(t,e,r){var i=n(e);i in t?o.f(t,i,c(0,r)):t[i]=r}},function(t,e,r){var n=r(2),o=r(5),c=r(10),i=o("species");t.exports=function(t){return c>=51||!n((function(){var e=[];return(e.constructor={})[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},function(t,e,r){"use strict";var n=r(39),o=r(14),c=r(8),i=r(9),u=r(74),a=r(2),l=r(75),s=r(34),f=r(76),p=r(77),y=r(10),v=r(78),d=[],g=d.sort,m=a((function(){d.sort(void 0)})),h=a((function(){d.sort(null)})),b=s("sort"),S=!a((function(){if(y)return y<70;if(!(f&&f>3)){if(p)return!0;if(v)return v<603;var t,e,r,n,o="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(n=0;n<47;n++)d.push({k:e+n,v:r})}for(d.sort((function(t,e){return e.v-t.v})),n=0;n<d.length;n++)e=d[n].k.charAt(0),o.charAt(o.length-1)!==e&&(o+=e);return"DGBEFHACIJK"!==o}}));n({target:"Array",proto:!0,forced:m||!h||!b||!S},{sort:function(t){void 0!==t&&o(t);var e=c(this);if(S)return void 0===t?g.call(e):g.call(e,t);var r,n,a=[],s=i(e.length);for(n=0;n<s;n++)n in e&&a.push(e[n]);for(r=(a=l(a,function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:u(e)>u(r)?1:-1}}(t))).length,n=0;n<r;)e[n]=a[n++];for(;n<s;)delete e[n++];return e}})},function(t,e,r){var n=r(29);t.exports=function(t){if("Symbol"===n(t))throw TypeError("Cannot convert a Symbol value to a string");return String(t)}},function(t,e){var r=Math.floor,n=function(t,e){var i=t.length,u=r(i/2);return i<8?o(t,e):c(n(t.slice(0,u),e),n(t.slice(u),e),e)},o=function(t,e){for(var r,n,o=t.length,c=1;c<o;){for(n=c,r=t[c];n&&e(t[n-1],r)>0;)t[n]=t[--n];n!==c++&&(t[n]=r)}return t},c=function(t,e,r){for(var n=t.length,o=e.length,c=0,i=0,u=[];c<n||i<o;)c<n&&i<o?u.push(r(t[c],e[i])<=0?t[c++]:e[i++]):u.push(c<n?t[c++]:e[i++]);return u};t.exports=n},function(t,e,r){var n=r(11).match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},function(t,e,r){var n=r(11);t.exports=/MSIE|Trident/.test(n)},function(t,e,r){var n=r(11).match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},function(t,e,r){"use strict";r.r(e);r(6);var n=function(t,e,r){var n=document.querySelectorAll(t),o=document.querySelectorAll(r),c=document.querySelector(e);n.forEach((function(t){t.addEventListener("click",(function(e){e.preventDefault(),c.querySelector("iframe").src=t.getAttribute("data-frame"),c.style.display="block"}))})),document.querySelector(".welcome__promo a").addEventListener("click",(function(t){t.preventDefault(),c.querySelector("iframe").src=document.querySelector(".welcome__promo a").getAttribute("data-frame"),c.style.display="block"})),o.forEach((function(t){t.addEventListener("click",(function(){c.style.display="none"}))}))},o=(r(38),function(t){document.querySelectorAll(t).forEach((function(t){t.addEventListener("input",(function(){var t=this.value;console.log(t),this.style.background="linear-gradient(to right, #710707 ".concat(+t,"%, #C4C4C4 ").concat(+t+1,"%)")}))}))}),c=(r(73),function(t,e,r){var n=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];n.sort((function(){return Math.random()-.5})),document.querySelector(t).innerHTML='\n        <img src="img/galery/galery'.concat(n[0],'.webp" alt="picture" class="gallery__img">\n        <img src="img/galery/galery').concat(n[1],'.webp" alt="picture" class="gallery__img">\n        <img src="img/galery/galery').concat(n[2],'.webp" alt="picture" class="gallery__img">\n        <img src="img/galery/galery').concat(n[3],'.webp" alt="picture" class="gallery__img">\n        <img src="img/galery/galery').concat(n[4],'.webp" alt="picture" class="gallery__img">\n    '),document.querySelector(e).innerHTML='\n        <img src="img/galery/galery'.concat(n[5],'.webp" alt="picture" class="gallery__img">\n        <img src="img/galery/galery').concat(n[6],'.webp" alt="picture" class="gallery__img">\n        <img src="img/galery/galery').concat(n[7],'.webp" alt="picture" class="gallery__img">\n        <img src="img/galery/galery').concat(n[8],'.webp" alt="picture" class="gallery__img">\n        <img src="img/galery/galery').concat(n[9],'.webp" alt="picture" class="gallery__img">\n    '),document.querySelector(r).innerHTML='\n        <img src="img/galery/galery'.concat(n[10],'.webp" alt="picture" class="gallery__img">\n        <img src="img/galery/galery').concat(n[11],'.webp" alt="picture" class="gallery__img">\n        <img src="img/galery/galery').concat(n[12],'.webp" alt="picture" class="gallery__img">\n        <img src="img/galery/galery').concat(n[13],'.webp" alt="picture" class="gallery__img">\n        <img src="img/galery/galery').concat(n[14],'.webp" alt="picture" class="gallery__img">\n    ')}),i=function(){var t=document.querySelector("input[type=date]"),e=document.querySelector("input[type=time]"),r=document.querySelector(".overlay__select select"),n=document.querySelectorAll(".overlay__select-li"),o=document.querySelectorAll(".overlay__overview-btn");t.addEventListener("input",(function(){t.classList.remove("hide");try{document.querySelector(".overlay__data-label span").remove()}catch(t){}})),e.addEventListener("input",(function(){try{document.querySelector("#time").remove()}catch(t){}})),document.querySelector(".overlay__select span").addEventListener("click",(function(){document.querySelector(".overlay__select span").remove(),r.click()})),r.addEventListener("click",(function(t){"block"===window.getComputedStyle(r).display&&(r.style.display="none",document.querySelector(".overlay__select-header").style.display="block",document.querySelector(".overlay__select-menu").style.display="block")})),n.forEach((function(t,e){t.addEventListener("click",(function(t){document.querySelector(".overlay__select-header").style.display="none",document.querySelector(".overlay__select-menu").style.display="none",r.style.display="block",r.querySelectorAll("option").forEach((function(t,r){t.removeAttribute("selected"),e===r&&t.setAttribute("selected","selected")}))}))})),window.addEventListener("click",(function(t){"block"!==window.getComputedStyle(r).display&&"SELECT"!==t.target.nodeName&&"SPAN"!==t.target.nodeName&&(document.querySelector(".overlay__select-header").style.display="none",document.querySelector(".overlay__select-menu").style.display="none",r.style.display="block")})),o.forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault();var e=t.clientX,r=t.clientY,n=t.target.offsetTop,o=e-t.target.offsetLeft,c=r-n,i=document.createElement("span");i.classList.add("circle"),i.style.top=c-76+"px",i.style.left=o-290+"px",this.appendChild(i),setTimeout((function(){return i.remove()}),500)}))}))},u=function(t,e,r,n,o){var c=document.querySelector(t),i=document.querySelector(e),u=document.querySelector(r),a=document.querySelector(n);c.addEventListener("click",(function(t){t.preventDefault(),u.style.display="flex",setTimeout((function(){a.classList.add(o)}),200)})),i.addEventListener("click",(function(){a.classList.remove(o),setTimeout((function(){u.style.display="none"}),800)})),u.addEventListener("click",(function(t){t.target.classList.contains("overlay")&&(a.classList.remove(o),setTimeout((function(){u.style.display="none"}),800))}))},a=function(t,e){document.querySelectorAll(t).forEach((function(t){var r=t.querySelectorAll(e),n=r[0],o=r[1],c=t.querySelector("input"),i=c.value;o.addEventListener("click",(function(t){t.preventDefault(),++i>=21&&(i=0),c.value=i})),n.addEventListener("click",(function(t){t.preventDefault(),--i<0&&(i=20),c.value=i}))}))},l=function(t,e,r,n){var o=document.querySelector(t),c=document.querySelector(e);o.addEventListener("click",(function(){o.classList.contains(r)?(o.classList.remove(r),c.classList.remove(n)):(o.classList.add(r),c.classList.add(n))})),c.querySelectorAll("a").forEach((function(t){t.addEventListener("click",(function(){o.classList.remove(r),c.classList.remove(n)}))}))};window.addEventListener("DomContentLoaded",(function(){n(".visiting__item a",".frame",".frame__close"),o('.video__controls input[type="range"]'),c(".gallery__col-one",".gallery__col-two",".gallery__col-three"),i(),u(".tickets__amount-submit",".overlay__close",".overlay",".overlay__window","overlay__window_active"),a(".tickets__amount-input-block",".tickets__amount-btn"),a(".overlay__num-block","button"),l(".header__burger",".welcome__nav","header__burger_click","welcome__nav_active")}))}]);
//# sourceMappingURL=script.js.map