//lrtracker
!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.lrtrackjs=t():n.lrtrackjs=t()}(this,(function(){return function(n){var t={};function r(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=n,r.c=t,r.d=function(n,t,e){r.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,t){if(1&t&&(n=r(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)r.d(e,o,function(t){return n[t]}.bind(null,o));return e},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="",r(r.s=5)}([function(module,exports,__webpack_require__){(function(global){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!function(n,t){module.exports=t(n)}("undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==global?global:this,(function(global){"use strict";global=global||{};var _Base64=global.Base64,version="2.5.2",buffer;if(module.exports)try{buffer=eval("require('buffer').Buffer")}catch(n){buffer=void 0}var b64chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",b64tab=function(n){for(var t={},r=0,e=n.length;r<e;r++)t[n.charAt(r)]=r;return t}(b64chars),fromCharCode=String.fromCharCode,cb_utob=function(n){if(n.length<2)return(t=n.charCodeAt(0))<128?n:t<2048?fromCharCode(192|t>>>6)+fromCharCode(128|63&t):fromCharCode(224|t>>>12&15)+fromCharCode(128|t>>>6&63)+fromCharCode(128|63&t);var t=65536+1024*(n.charCodeAt(0)-55296)+(n.charCodeAt(1)-56320);return fromCharCode(240|t>>>18&7)+fromCharCode(128|t>>>12&63)+fromCharCode(128|t>>>6&63)+fromCharCode(128|63&t)},re_utob=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,utob=function(n){return n.replace(re_utob,cb_utob)},cb_encode=function(n){var t=[0,2,1][n.length%3],r=n.charCodeAt(0)<<16|(n.length>1?n.charCodeAt(1):0)<<8|(n.length>2?n.charCodeAt(2):0);return[b64chars.charAt(r>>>18),b64chars.charAt(r>>>12&63),t>=2?"=":b64chars.charAt(r>>>6&63),t>=1?"=":b64chars.charAt(63&r)].join("")},btoa=global.btoa?function(n){return global.btoa(n)}:function(n){return n.replace(/[\s\S]{1,3}/g,cb_encode)},_encode=function(n){return"[object Uint8Array]"===Object.prototype.toString.call(n)?n.toString("base64"):btoa(utob(String(n)))},encode=function(n,t){return t?_encode(String(n)).replace(/[+\/]/g,(function(n){return"+"==n?"-":"_"})).replace(/=/g,""):_encode(n)},encodeURI=function(n){return encode(n,!0)},re_btou=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,cb_btou=function(n){switch(n.length){case 4:var t=((7&n.charCodeAt(0))<<18|(63&n.charCodeAt(1))<<12|(63&n.charCodeAt(2))<<6|63&n.charCodeAt(3))-65536;return fromCharCode(55296+(t>>>10))+fromCharCode(56320+(1023&t));case 3:return fromCharCode((15&n.charCodeAt(0))<<12|(63&n.charCodeAt(1))<<6|63&n.charCodeAt(2));default:return fromCharCode((31&n.charCodeAt(0))<<6|63&n.charCodeAt(1))}},btou=function(n){return n.replace(re_btou,cb_btou)},cb_decode=function(n){var t=n.length,r=t%4,e=(t>0?b64tab[n.charAt(0)]<<18:0)|(t>1?b64tab[n.charAt(1)]<<12:0)|(t>2?b64tab[n.charAt(2)]<<6:0)|(t>3?b64tab[n.charAt(3)]:0),o=[fromCharCode(e>>>16),fromCharCode(e>>>8&255),fromCharCode(255&e)];return o.length-=[0,0,2,1][r],o.join("")},_atob=global.atob?function(n){return global.atob(n)}:function(n){return n.replace(/\S{1,4}/g,cb_decode)},atob=function(n){return _atob(String(n).replace(/[^A-Za-z0-9\+\/]/g,""))},_decode=buffer?buffer.from&&Uint8Array&&buffer.from!==Uint8Array.from?function(n){return(n.constructor===buffer.constructor?n:buffer.from(n,"base64")).toString()}:function(n){return(n.constructor===buffer.constructor?n:new buffer(n,"base64")).toString()}:function(n){return btou(_atob(n))},decode=function(n){return _decode(String(n).replace(/[-_]/g,(function(n){return"-"==n?"+":"/"})).replace(/[^A-Za-z0-9\+\/]/g,""))},noConflict=function(){var n=global.Base64;return global.Base64=_Base64,n};if(global.Base64={VERSION:version,atob:atob,btoa:btoa,fromBase64:decode,toBase64:encode,utob:utob,encode:encode,encodeURI:encodeURI,btou:btou,decode:decode,noConflict:noConflict,__buffer__:buffer},"function"==typeof Object.defineProperty){var noEnum=function(n){return{value:n,enumerable:!1,writable:!0,configurable:!0}};global.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",noEnum((function(){return decode(this)}))),Object.defineProperty(String.prototype,"toBase64",noEnum((function(n){return encode(this,n)}))),Object.defineProperty(String.prototype,"toBase64URI",noEnum((function(){return encode(this,!0)})))}}return global.Meteor&&(Base64=global.Base64),module.exports?module.exports.Base64=global.Base64:(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_RESULT__=function(){return global.Base64}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)),{Base64:global.Base64}}))}).call(this,__webpack_require__(1))},function(n,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"==typeof window&&(r=window)}n.exports=r},function(n,t,r){"use strict";var e=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("unable to locate global object")}();n.exports=t=e.fetch,t.default=e.fetch.bind(e),t.Headers=e.Headers,t.Request=e.Request,t.Response=e.Response},function(n,t,r){(function(n,e){var o;(function(){var u="Expected a function",i="__lodash_placeholder__",c=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]],a="[object Arguments]",f="[object Array]",l="[object Boolean]",s="[object Date]",v="[object Error]",d="[object Function]",h="[object GeneratorFunction]",p="[object Map]",_="[object Number]",g="[object Object]",y="[object RegExp]",b="[object Set]",m="[object String]",w="[object Symbol]",x="[object WeakMap]",A="[object ArrayBuffer]",j="[object DataView]",C="[object Float32Array]",k="[object Float64Array]",S="[object Int8Array]",E="[object Int16Array]",O="[object Int32Array]",R="[object Uint8Array]",I="[object Uint16Array]",B="[object Uint32Array]",D=/\b__p \+= '';/g,U=/\b(__p \+=) '' \+/g,z=/(__e\(.*?\)|\b__t\)) \+\n'';/g,P=/&(?:amp|lt|gt|quot|#39);/g,T=/[&<>"']/g,L=RegExp(P.source),W=RegExp(T.source),F=/<%-([\s\S]+?)%>/g,M=/<%([\s\S]+?)%>/g,N=/<%=([\s\S]+?)%>/g,$=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,q=/^\w*$/,K=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,V=/[\\^$.*+?()[\]{}|]/g,Z=RegExp(V.source),G=/^\s+|\s+$/g,H=/^\s+/,Y=/\s+$/,J=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Q=/\{\n\/\* \[wrapped with (.+)\] \*/,X=/,? & /,nn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,tn=/\\(\\)?/g,rn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,en=/\w*$/,on=/^[-+]0x[0-9a-f]+$/i,un=/^0b[01]+$/i,cn=/^\[object .+?Constructor\]$/,an=/^0o[0-7]+$/i,fn=/^(?:0|[1-9]\d*)$/,ln=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,sn=/($^)/,vn=/['\n\r\u2028\u2029\\]/g,dn="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",hn="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",pn="[\\ud800-\\udfff]",_n="["+hn+"]",gn="["+dn+"]",yn="\\d+",bn="[\\u2700-\\u27bf]",mn="[a-z\\xdf-\\xf6\\xf8-\\xff]",wn="[^\\ud800-\\udfff"+hn+yn+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",xn="\\ud83c[\\udffb-\\udfff]",An="[^\\ud800-\\udfff]",jn="(?:\\ud83c[\\udde6-\\uddff]){2}",Cn="[\\ud800-\\udbff][\\udc00-\\udfff]",kn="[A-Z\\xc0-\\xd6\\xd8-\\xde]",Sn="(?:"+mn+"|"+wn+")",En="(?:"+kn+"|"+wn+")",On="(?:"+gn+"|"+xn+")"+"?",Rn="[\\ufe0e\\ufe0f]?"+On+("(?:\\u200d(?:"+[An,jn,Cn].join("|")+")[\\ufe0e\\ufe0f]?"+On+")*"),In="(?:"+[bn,jn,Cn].join("|")+")"+Rn,Bn="(?:"+[An+gn+"?",gn,jn,Cn,pn].join("|")+")",Dn=RegExp("['’]","g"),Un=RegExp(gn,"g"),zn=RegExp(xn+"(?="+xn+")|"+Bn+Rn,"g"),Pn=RegExp([kn+"?"+mn+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[_n,kn,"$"].join("|")+")",En+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[_n,kn+Sn,"$"].join("|")+")",kn+"?"+Sn+"+(?:['’](?:d|ll|m|re|s|t|ve))?",kn+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",yn,In].join("|"),"g"),Tn=RegExp("[\\u200d\\ud800-\\udfff"+dn+"\\ufe0e\\ufe0f]"),Ln=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Wn=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Fn=-1,Mn={};Mn[C]=Mn[k]=Mn[S]=Mn[E]=Mn[O]=Mn[R]=Mn["[object Uint8ClampedArray]"]=Mn[I]=Mn[B]=!0,Mn[a]=Mn[f]=Mn[A]=Mn[l]=Mn[j]=Mn[s]=Mn[v]=Mn[d]=Mn[p]=Mn[_]=Mn[g]=Mn[y]=Mn[b]=Mn[m]=Mn[x]=!1;var Nn={};Nn[a]=Nn[f]=Nn[A]=Nn[j]=Nn[l]=Nn[s]=Nn[C]=Nn[k]=Nn[S]=Nn[E]=Nn[O]=Nn[p]=Nn[_]=Nn[g]=Nn[y]=Nn[b]=Nn[m]=Nn[w]=Nn[R]=Nn["[object Uint8ClampedArray]"]=Nn[I]=Nn[B]=!0,Nn[v]=Nn[d]=Nn[x]=!1;var $n={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},qn=parseFloat,Kn=parseInt,Vn="object"==typeof n&&n&&n.Object===Object&&n,Zn="object"==typeof self&&self&&self.Object===Object&&self,Gn=Vn||Zn||Function("return this")(),Hn=t&&!t.nodeType&&t,Yn=Hn&&"object"==typeof e&&e&&!e.nodeType&&e,Jn=Yn&&Yn.exports===Hn,Qn=Jn&&Vn.process,Xn=function(){try{var n=Yn&&Yn.require&&Yn.require("util").types;return n||Qn&&Qn.binding&&Qn.binding("util")}catch(n){}}(),nt=Xn&&Xn.isArrayBuffer,tt=Xn&&Xn.isDate,rt=Xn&&Xn.isMap,et=Xn&&Xn.isRegExp,ot=Xn&&Xn.isSet,ut=Xn&&Xn.isTypedArray;function it(n,t,r){switch(r.length){case 0:return n.call(t);case 1:return n.call(t,r[0]);case 2:return n.call(t,r[0],r[1]);case 3:return n.call(t,r[0],r[1],r[2])}return n.apply(t,r)}function ct(n,t,r,e){for(var o=-1,u=null==n?0:n.length;++o<u;){var i=n[o];t(e,i,r(i),n)}return e}function at(n,t){for(var r=-1,e=null==n?0:n.length;++r<e&&!1!==t(n[r],r,n););return n}function ft(n,t){for(var r=null==n?0:n.length;r--&&!1!==t(n[r],r,n););return n}function lt(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(!t(n[r],r,n))return!1;return!0}function st(n,t){for(var r=-1,e=null==n?0:n.length,o=0,u=[];++r<e;){var i=n[r];t(i,r,n)&&(u[o++]=i)}return u}function vt(n,t){return!!(null==n?0:n.length)&&xt(n,t,0)>-1}function dt(n,t,r){for(var e=-1,o=null==n?0:n.length;++e<o;)if(r(t,n[e]))return!0;return!1}function ht(n,t){for(var r=-1,e=null==n?0:n.length,o=Array(e);++r<e;)o[r]=t(n[r],r,n);return o}function pt(n,t){for(var r=-1,e=t.length,o=n.length;++r<e;)n[o+r]=t[r];return n}function _t(n,t,r,e){var o=-1,u=null==n?0:n.length;for(e&&u&&(r=n[++o]);++o<u;)r=t(r,n[o],o,n);return r}function gt(n,t,r,e){var o=null==n?0:n.length;for(e&&o&&(r=n[--o]);o--;)r=t(r,n[o],o,n);return r}function yt(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(t(n[r],r,n))return!0;return!1}var bt=kt("length");function mt(n,t,r){var e;return r(n,(function(n,r,o){if(t(n,r,o))return e=r,!1})),e}function wt(n,t,r,e){for(var o=n.length,u=r+(e?1:-1);e?u--:++u<o;)if(t(n[u],u,n))return u;return-1}function xt(n,t,r){return t==t?function(n,t,r){var e=r-1,o=n.length;for(;++e<o;)if(n[e]===t)return e;return-1}(n,t,r):wt(n,jt,r)}function At(n,t,r,e){for(var o=r-1,u=n.length;++o<u;)if(e(n[o],t))return o;return-1}function jt(n){return n!=n}function Ct(n,t){var r=null==n?0:n.length;return r?Ot(n,t)/r:NaN}function kt(n){return function(t){return null==t?void 0:t[n]}}function St(n){return function(t){return null==n?void 0:n[t]}}function Et(n,t,r,e,o){return o(n,(function(n,o,u){r=e?(e=!1,n):t(r,n,o,u)})),r}function Ot(n,t){for(var r,e=-1,o=n.length;++e<o;){var u=t(n[e]);void 0!==u&&(r=void 0===r?u:r+u)}return r}function Rt(n,t){for(var r=-1,e=Array(n);++r<n;)e[r]=t(r);return e}function It(n){return function(t){return n(t)}}function Bt(n,t){return ht(t,(function(t){return n[t]}))}function Dt(n,t){return n.has(t)}function Ut(n,t){for(var r=-1,e=n.length;++r<e&&xt(t,n[r],0)>-1;);return r}function zt(n,t){for(var r=n.length;r--&&xt(t,n[r],0)>-1;);return r}function Pt(n,t){for(var r=n.length,e=0;r--;)n[r]===t&&++e;return e}var Tt=St({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),Lt=St({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function Wt(n){return"\\"+$n[n]}function Ft(n){return Tn.test(n)}function Mt(n){var t=-1,r=Array(n.size);return n.forEach((function(n,e){r[++t]=[e,n]})),r}function Nt(n,t){return function(r){return n(t(r))}}function $t(n,t){for(var r=-1,e=n.length,o=0,u=[];++r<e;){var c=n[r];c!==t&&c!==i||(n[r]=i,u[o++]=r)}return u}function qt(n){var t=-1,r=Array(n.size);return n.forEach((function(n){r[++t]=n})),r}function Kt(n){var t=-1,r=Array(n.size);return n.forEach((function(n){r[++t]=[n,n]})),r}function Vt(n){return Ft(n)?function(n){var t=zn.lastIndex=0;for(;zn.test(n);)++t;return t}(n):bt(n)}function Zt(n){return Ft(n)?function(n){return n.match(zn)||[]}(n):function(n){return n.split("")}(n)}var Gt=St({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});var Ht=function n(t){var r,e=(t=null==t?Gn:Ht.defaults(Gn.Object(),t,Ht.pick(Gn,Wn))).Array,o=t.Date,dn=t.Error,hn=t.Function,pn=t.Math,_n=t.Object,gn=t.RegExp,yn=t.String,bn=t.TypeError,mn=e.prototype,wn=hn.prototype,xn=_n.prototype,An=t["__core-js_shared__"],jn=wn.toString,Cn=xn.hasOwnProperty,kn=0,Sn=(r=/[^.]+$/.exec(An&&An.keys&&An.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"",En=xn.toString,On=jn.call(_n),Rn=Gn._,In=gn("^"+jn.call(Cn).replace(V,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Bn=Jn?t.Buffer:void 0,zn=t.Symbol,Tn=t.Uint8Array,$n=Bn?Bn.allocUnsafe:void 0,Vn=Nt(_n.getPrototypeOf,_n),Zn=_n.create,Hn=xn.propertyIsEnumerable,Yn=mn.splice,Qn=zn?zn.isConcatSpreadable:void 0,Xn=zn?zn.iterator:void 0,bt=zn?zn.toStringTag:void 0,St=function(){try{var n=nu(_n,"defineProperty");return n({},"",{}),n}catch(n){}}(),Yt=t.clearTimeout!==Gn.clearTimeout&&t.clearTimeout,Jt=o&&o.now!==Gn.Date.now&&o.now,Qt=t.setTimeout!==Gn.setTimeout&&t.setTimeout,Xt=pn.ceil,nr=pn.floor,tr=_n.getOwnPropertySymbols,rr=Bn?Bn.isBuffer:void 0,er=t.isFinite,or=mn.join,ur=Nt(_n.keys,_n),ir=pn.max,cr=pn.min,ar=o.now,fr=t.parseInt,lr=pn.random,sr=mn.reverse,vr=nu(t,"DataView"),dr=nu(t,"Map"),hr=nu(t,"Promise"),pr=nu(t,"Set"),_r=nu(t,"WeakMap"),gr=nu(_n,"create"),yr=_r&&new _r,br={},mr=Su(vr),wr=Su(dr),xr=Su(hr),Ar=Su(pr),jr=Su(_r),Cr=zn?zn.prototype:void 0,kr=Cr?Cr.valueOf:void 0,Sr=Cr?Cr.toString:void 0;function Er(n){if(qi(n)&&!Di(n)&&!(n instanceof Br)){if(n instanceof Ir)return n;if(Cn.call(n,"__wrapped__"))return Eu(n)}return new Ir(n)}var Or=function(){function n(){}return function(t){if(!$i(t))return{};if(Zn)return Zn(t);n.prototype=t;var r=new n;return n.prototype=void 0,r}}();function Rr(){}function Ir(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=void 0}function Br(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}function Dr(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Ur(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function zr(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Pr(n){var t=-1,r=null==n?0:n.length;for(this.__data__=new zr;++t<r;)this.add(n[t])}function Tr(n){var t=this.__data__=new Ur(n);this.size=t.size}function Lr(n,t){var r=Di(n),e=!r&&Bi(n),o=!r&&!e&&Ti(n),u=!r&&!e&&!o&&Qi(n),i=r||e||o||u,c=i?Rt(n.length,yn):[],a=c.length;for(var f in n)!t&&!Cn.call(n,f)||i&&("length"==f||o&&("offset"==f||"parent"==f)||u&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||cu(f,a))||c.push(f);return c}function Wr(n){var t=n.length;return t?n[Pe(0,t-1)]:void 0}function Fr(n,t){return ju(yo(n),Hr(t,0,n.length))}function Mr(n){return ju(yo(n))}function Nr(n,t,r){(void 0!==r&&!Oi(n[t],r)||void 0===r&&!(t in n))&&Zr(n,t,r)}function $r(n,t,r){var e=n[t];Cn.call(n,t)&&Oi(e,r)&&(void 0!==r||t in n)||Zr(n,t,r)}function qr(n,t){for(var r=n.length;r--;)if(Oi(n[r][0],t))return r;return-1}function Kr(n,t,r,e){return ne(n,(function(n,o,u){t(e,n,r(n),u)})),e}function Vr(n,t){return n&&bo(t,mc(t),n)}function Zr(n,t,r){"__proto__"==t&&St?St(n,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):n[t]=r}function Gr(n,t){for(var r=-1,o=t.length,u=e(o),i=null==n;++r<o;)u[r]=i?void 0:pc(n,t[r]);return u}function Hr(n,t,r){return n==n&&(void 0!==r&&(n=n<=r?n:r),void 0!==t&&(n=n>=t?n:t)),n}function Yr(n,t,r,e,o,u){var i,c=1&t,f=2&t,v=4&t;if(r&&(i=o?r(n,e,o,u):r(n)),void 0!==i)return i;if(!$i(n))return n;var x=Di(n);if(x){if(i=function(n){var t=n.length,r=new n.constructor(t);t&&"string"==typeof n[0]&&Cn.call(n,"index")&&(r.index=n.index,r.input=n.input);return r}(n),!c)return yo(n,i)}else{var D=eu(n),U=D==d||D==h;if(Ti(n))return so(n,c);if(D==g||D==a||U&&!o){if(i=f||U?{}:uu(n),!c)return f?function(n,t){return bo(n,ru(n),t)}(n,function(n,t){return n&&bo(t,wc(t),n)}(i,n)):function(n,t){return bo(n,tu(n),t)}(n,Vr(i,n))}else{if(!Nn[D])return o?n:{};i=function(n,t,r){var e=n.constructor;switch(t){case A:return vo(n);case l:case s:return new e(+n);case j:return function(n,t){var r=t?vo(n.buffer):n.buffer;return new n.constructor(r,n.byteOffset,n.byteLength)}(n,r);case C:case k:case S:case E:case O:case R:case"[object Uint8ClampedArray]":case I:case B:return ho(n,r);case p:return new e;case _:case m:return new e(n);case y:return function(n){var t=new n.constructor(n.source,en.exec(n));return t.lastIndex=n.lastIndex,t}(n);case b:return new e;case w:return o=n,kr?_n(kr.call(o)):{}}var o}(n,D,c)}}u||(u=new Tr);var z=u.get(n);if(z)return z;u.set(n,i),Hi(n)?n.forEach((function(e){i.add(Yr(e,t,r,e,n,u))})):Ki(n)&&n.forEach((function(e,o){i.set(o,Yr(e,t,r,o,n,u))}));var P=x?void 0:(v?f?Zo:Vo:f?wc:mc)(n);return at(P||n,(function(e,o){P&&(e=n[o=e]),$r(i,o,Yr(e,t,r,o,n,u))})),i}function Jr(n,t,r){var e=r.length;if(null==n)return!e;for(n=_n(n);e--;){var o=r[e],u=t[o],i=n[o];if(void 0===i&&!(o in n)||!u(i))return!1}return!0}function Qr(n,t,r){if("function"!=typeof n)throw new bn(u);return mu((function(){n.apply(void 0,r)}),t)}function Xr(n,t,r,e){var o=-1,u=vt,i=!0,c=n.length,a=[],f=t.length;if(!c)return a;r&&(t=ht(t,It(r))),e?(u=dt,i=!1):t.length>=200&&(u=Dt,i=!1,t=new Pr(t));n:for(;++o<c;){var l=n[o],s=null==r?l:r(l);if(l=e||0!==l?l:0,i&&s==s){for(var v=f;v--;)if(t[v]===s)continue n;a.push(l)}else u(t,s,e)||a.push(l)}return a}Er.templateSettings={escape:F,evaluate:M,interpolate:N,variable:"",imports:{_:Er}},Er.prototype=Rr.prototype,Er.prototype.constructor=Er,Ir.prototype=Or(Rr.prototype),Ir.prototype.constructor=Ir,Br.prototype=Or(Rr.prototype),Br.prototype.constructor=Br,Dr.prototype.clear=function(){this.__data__=gr?gr(null):{},this.size=0},Dr.prototype.delete=function(n){var t=this.has(n)&&delete this.__data__[n];return this.size-=t?1:0,t},Dr.prototype.get=function(n){var t=this.__data__;if(gr){var r=t[n];return"__lodash_hash_undefined__"===r?void 0:r}return Cn.call(t,n)?t[n]:void 0},Dr.prototype.has=function(n){var t=this.__data__;return gr?void 0!==t[n]:Cn.call(t,n)},Dr.prototype.set=function(n,t){var r=this.__data__;return this.size+=this.has(n)?0:1,r[n]=gr&&void 0===t?"__lodash_hash_undefined__":t,this},Ur.prototype.clear=function(){this.__data__=[],this.size=0},Ur.prototype.delete=function(n){var t=this.__data__,r=qr(t,n);return!(r<0)&&(r==t.length-1?t.pop():Yn.call(t,r,1),--this.size,!0)},Ur.prototype.get=function(n){var t=this.__data__,r=qr(t,n);return r<0?void 0:t[r][1]},Ur.prototype.has=function(n){return qr(this.__data__,n)>-1},Ur.prototype.set=function(n,t){var r=this.__data__,e=qr(r,n);return e<0?(++this.size,r.push([n,t])):r[e][1]=t,this},zr.prototype.clear=function(){this.size=0,this.__data__={hash:new Dr,map:new(dr||Ur),string:new Dr}},zr.prototype.delete=function(n){var t=Qo(this,n).delete(n);return this.size-=t?1:0,t},zr.prototype.get=function(n){return Qo(this,n).get(n)},zr.prototype.has=function(n){return Qo(this,n).has(n)},zr.prototype.set=function(n,t){var r=Qo(this,n),e=r.size;return r.set(n,t),this.size+=r.size==e?0:1,this},Pr.prototype.add=Pr.prototype.push=function(n){return this.__data__.set(n,"__lodash_hash_undefined__"),this},Pr.prototype.has=function(n){return this.__data__.has(n)},Tr.prototype.clear=function(){this.__data__=new Ur,this.size=0},Tr.prototype.delete=function(n){var t=this.__data__,r=t.delete(n);return this.size=t.size,r},Tr.prototype.get=function(n){return this.__data__.get(n)},Tr.prototype.has=function(n){return this.__data__.has(n)},Tr.prototype.set=function(n,t){var r=this.__data__;if(r instanceof Ur){var e=r.__data__;if(!dr||e.length<199)return e.push([n,t]),this.size=++r.size,this;r=this.__data__=new zr(e)}return r.set(n,t),this.size=r.size,this};var ne=xo(ae),te=xo(fe,!0);function re(n,t){var r=!0;return ne(n,(function(n,e,o){return r=!!t(n,e,o)})),r}function ee(n,t,r){for(var e=-1,o=n.length;++e<o;){var u=n[e],i=t(u);if(null!=i&&(void 0===c?i==i&&!Ji(i):r(i,c)))var c=i,a=u}return a}function oe(n,t){var r=[];return ne(n,(function(n,e,o){t(n,e,o)&&r.push(n)})),r}function ue(n,t,r,e,o){var u=-1,i=n.length;for(r||(r=iu),o||(o=[]);++u<i;){var c=n[u];t>0&&r(c)?t>1?ue(c,t-1,r,e,o):pt(o,c):e||(o[o.length]=c)}return o}var ie=Ao(),ce=Ao(!0);function ae(n,t){return n&&ie(n,t,mc)}function fe(n,t){return n&&ce(n,t,mc)}function le(n,t){return st(t,(function(t){return Fi(n[t])}))}function se(n,t){for(var r=0,e=(t=co(t,n)).length;null!=n&&r<e;)n=n[ku(t[r++])];return r&&r==e?n:void 0}function ve(n,t,r){var e=t(n);return Di(n)?e:pt(e,r(n))}function de(n){return null==n?void 0===n?"[object Undefined]":"[object Null]":bt&&bt in _n(n)?function(n){var t=Cn.call(n,bt),r=n[bt];try{n[bt]=void 0;var e=!0}catch(n){}var o=En.call(n);e&&(t?n[bt]=r:delete n[bt]);return o}(n):function(n){return En.call(n)}(n)}function he(n,t){return n>t}function pe(n,t){return null!=n&&Cn.call(n,t)}function _e(n,t){return null!=n&&t in _n(n)}function ge(n,t,r){for(var o=r?dt:vt,u=n[0].length,i=n.length,c=i,a=e(i),f=1/0,l=[];c--;){var s=n[c];c&&t&&(s=ht(s,It(t))),f=cr(s.length,f),a[c]=!r&&(t||u>=120&&s.length>=120)?new Pr(c&&s):void 0}s=n[0];var v=-1,d=a[0];n:for(;++v<u&&l.length<f;){var h=s[v],p=t?t(h):h;if(h=r||0!==h?h:0,!(d?Dt(d,p):o(l,p,r))){for(c=i;--c;){var _=a[c];if(!(_?Dt(_,p):o(n[c],p,r)))continue n}d&&d.push(p),l.push(h)}}return l}function ye(n,t,r){var e=null==(n=_u(n,t=co(t,n)))?n:n[ku(Wu(t))];return null==e?void 0:it(e,n,r)}function be(n){return qi(n)&&de(n)==a}function me(n,t,r,e,o){return n===t||(null==n||null==t||!qi(n)&&!qi(t)?n!=n&&t!=t:function(n,t,r,e,o,u){var i=Di(n),c=Di(t),d=i?f:eu(n),h=c?f:eu(t),x=(d=d==a?g:d)==g,C=(h=h==a?g:h)==g,k=d==h;if(k&&Ti(n)){if(!Ti(t))return!1;i=!0,x=!1}if(k&&!x)return u||(u=new Tr),i||Qi(n)?qo(n,t,r,e,o,u):function(n,t,r,e,o,u,i){switch(r){case j:if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)return!1;n=n.buffer,t=t.buffer;case A:return!(n.byteLength!=t.byteLength||!u(new Tn(n),new Tn(t)));case l:case s:case _:return Oi(+n,+t);case v:return n.name==t.name&&n.message==t.message;case y:case m:return n==t+"";case p:var c=Mt;case b:var a=1&e;if(c||(c=qt),n.size!=t.size&&!a)return!1;var f=i.get(n);if(f)return f==t;e|=2,i.set(n,t);var d=qo(c(n),c(t),e,o,u,i);return i.delete(n),d;case w:if(kr)return kr.call(n)==kr.call(t)}return!1}(n,t,d,r,e,o,u);if(!(1&r)){var S=x&&Cn.call(n,"__wrapped__"),E=C&&Cn.call(t,"__wrapped__");if(S||E){var O=S?n.value():n,R=E?t.value():t;return u||(u=new Tr),o(O,R,r,e,u)}}if(!k)return!1;return u||(u=new Tr),function(n,t,r,e,o,u){var i=1&r,c=Vo(n),a=c.length,f=Vo(t).length;if(a!=f&&!i)return!1;var l=a;for(;l--;){var s=c[l];if(!(i?s in t:Cn.call(t,s)))return!1}var v=u.get(n);if(v&&u.get(t))return v==t;var d=!0;u.set(n,t),u.set(t,n);var h=i;for(;++l<a;){s=c[l];var p=n[s],_=t[s];if(e)var g=i?e(_,p,s,t,n,u):e(p,_,s,n,t,u);if(!(void 0===g?p===_||o(p,_,r,e,u):g)){d=!1;break}h||(h="constructor"==s)}if(d&&!h){var y=n.constructor,b=t.constructor;y==b||!("constructor"in n)||!("constructor"in t)||"function"==typeof y&&y instanceof y&&"function"==typeof b&&b instanceof b||(d=!1)}return u.delete(n),u.delete(t),d}(n,t,r,e,o,u)}(n,t,r,e,me,o))}function we(n,t,r,e){var o=r.length,u=o,i=!e;if(null==n)return!u;for(n=_n(n);o--;){var c=r[o];if(i&&c[2]?c[1]!==n[c[0]]:!(c[0]in n))return!1}for(;++o<u;){var a=(c=r[o])[0],f=n[a],l=c[1];if(i&&c[2]){if(void 0===f&&!(a in n))return!1}else{var s=new Tr;if(e)var v=e(f,l,a,n,t,s);if(!(void 0===v?me(l,f,3,e,s):v))return!1}}return!0}function xe(n){return!(!$i(n)||(t=n,Sn&&Sn in t))&&(Fi(n)?In:cn).test(Su(n));var t}function Ae(n){return"function"==typeof n?n:null==n?Vc:"object"==typeof n?Di(n)?Oe(n[0],n[1]):Ee(n):ta(n)}function je(n){if(!vu(n))return ur(n);var t=[];for(var r in _n(n))Cn.call(n,r)&&"constructor"!=r&&t.push(r);return t}function Ce(n){if(!$i(n))return function(n){var t=[];if(null!=n)for(var r in _n(n))t.push(r);return t}(n);var t=vu(n),r=[];for(var e in n)("constructor"!=e||!t&&Cn.call(n,e))&&r.push(e);return r}function ke(n,t){return n<t}function Se(n,t){var r=-1,o=zi(n)?e(n.length):[];return ne(n,(function(n,e,u){o[++r]=t(n,e,u)})),o}function Ee(n){var t=Xo(n);return 1==t.length&&t[0][2]?hu(t[0][0],t[0][1]):function(r){return r===n||we(r,n,t)}}function Oe(n,t){return fu(n)&&du(t)?hu(ku(n),t):function(r){var e=pc(r,n);return void 0===e&&e===t?_c(r,n):me(t,e,3)}}function Re(n,t,r,e,o){n!==t&&ie(t,(function(u,i){if(o||(o=new Tr),$i(u))!function(n,t,r,e,o,u,i){var c=yu(n,r),a=yu(t,r),f=i.get(a);if(f)return void Nr(n,r,f);var l=u?u(c,a,r+"",n,t,i):void 0,s=void 0===l;if(s){var v=Di(a),d=!v&&Ti(a),h=!v&&!d&&Qi(a);l=a,v||d||h?Di(c)?l=c:Pi(c)?l=yo(c):d?(s=!1,l=so(a,!0)):h?(s=!1,l=ho(a,!0)):l=[]:Zi(a)||Bi(a)?(l=c,Bi(c)?l=ic(c):$i(c)&&!Fi(c)||(l=uu(a))):s=!1}s&&(i.set(a,l),o(l,a,e,u,i),i.delete(a));Nr(n,r,l)}(n,t,i,r,Re,e,o);else{var c=e?e(yu(n,i),u,i+"",n,t,o):void 0;void 0===c&&(c=u),Nr(n,i,c)}}),wc)}function Ie(n,t){var r=n.length;if(r)return cu(t+=t<0?r:0,r)?n[t]:void 0}function Be(n,t,r){var e=-1;return t=ht(t.length?t:[Vc],It(Jo())),function(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].value;return n}(Se(n,(function(n,r,o){return{criteria:ht(t,(function(t){return t(n)})),index:++e,value:n}})),(function(n,t){return function(n,t,r){var e=-1,o=n.criteria,u=t.criteria,i=o.length,c=r.length;for(;++e<i;){var a=po(o[e],u[e]);if(a){if(e>=c)return a;var f=r[e];return a*("desc"==f?-1:1)}}return n.index-t.index}(n,t,r)}))}function De(n,t,r){for(var e=-1,o=t.length,u={};++e<o;){var i=t[e],c=se(n,i);r(c,i)&&Me(u,co(i,n),c)}return u}function Ue(n,t,r,e){var o=e?At:xt,u=-1,i=t.length,c=n;for(n===t&&(t=yo(t)),r&&(c=ht(n,It(r)));++u<i;)for(var a=0,f=t[u],l=r?r(f):f;(a=o(c,l,a,e))>-1;)c!==n&&Yn.call(c,a,1),Yn.call(n,a,1);return n}function ze(n,t){for(var r=n?t.length:0,e=r-1;r--;){var o=t[r];if(r==e||o!==u){var u=o;cu(o)?Yn.call(n,o,1):Xe(n,o)}}return n}function Pe(n,t){return n+nr(lr()*(t-n+1))}function Te(n,t){var r="";if(!n||t<1||t>9007199254740991)return r;do{t%2&&(r+=n),(t=nr(t/2))&&(n+=n)}while(t);return r}function Le(n,t){return wu(pu(n,t,Vc),n+"")}function We(n){return Wr(Oc(n))}function Fe(n,t){var r=Oc(n);return ju(r,Hr(t,0,r.length))}function Me(n,t,r,e){if(!$i(n))return n;for(var o=-1,u=(t=co(t,n)).length,i=u-1,c=n;null!=c&&++o<u;){var a=ku(t[o]),f=r;if(o!=i){var l=c[a];void 0===(f=e?e(l,a,c):void 0)&&(f=$i(l)?l:cu(t[o+1])?[]:{})}$r(c,a,f),c=c[a]}return n}var Ne=yr?function(n,t){return yr.set(n,t),n}:Vc,$e=St?function(n,t){return St(n,"toString",{configurable:!0,enumerable:!1,value:$c(t),writable:!0})}:Vc;function qe(n){return ju(Oc(n))}function Ke(n,t,r){var o=-1,u=n.length;t<0&&(t=-t>u?0:u+t),(r=r>u?u:r)<0&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0;for(var i=e(u);++o<u;)i[o]=n[o+t];return i}function Ve(n,t){var r;return ne(n,(function(n,e,o){return!(r=t(n,e,o))})),!!r}function Ze(n,t,r){var e=0,o=null==n?e:n.length;if("number"==typeof t&&t==t&&o<=2147483647){for(;e<o;){var u=e+o>>>1,i=n[u];null!==i&&!Ji(i)&&(r?i<=t:i<t)?e=u+1:o=u}return o}return Ge(n,t,Vc,r)}function Ge(n,t,r,e){t=r(t);for(var o=0,u=null==n?0:n.length,i=t!=t,c=null===t,a=Ji(t),f=void 0===t;o<u;){var l=nr((o+u)/2),s=r(n[l]),v=void 0!==s,d=null===s,h=s==s,p=Ji(s);if(i)var _=e||h;else _=f?h&&(e||v):c?h&&v&&(e||!d):a?h&&v&&!d&&(e||!p):!d&&!p&&(e?s<=t:s<t);_?o=l+1:u=l}return cr(u,4294967294)}function He(n,t){for(var r=-1,e=n.length,o=0,u=[];++r<e;){var i=n[r],c=t?t(i):i;if(!r||!Oi(c,a)){var a=c;u[o++]=0===i?0:i}}return u}function Ye(n){return"number"==typeof n?n:Ji(n)?NaN:+n}function Je(n){if("string"==typeof n)return n;if(Di(n))return ht(n,Je)+"";if(Ji(n))return Sr?Sr.call(n):"";var t=n+"";return"0"==t&&1/n==-1/0?"-0":t}function Qe(n,t,r){var e=-1,o=vt,u=n.length,i=!0,c=[],a=c;if(r)i=!1,o=dt;else if(u>=200){var f=t?null:Lo(n);if(f)return qt(f);i=!1,o=Dt,a=new Pr}else a=t?[]:c;n:for(;++e<u;){var l=n[e],s=t?t(l):l;if(l=r||0!==l?l:0,i&&s==s){for(var v=a.length;v--;)if(a[v]===s)continue n;t&&a.push(s),c.push(l)}else o(a,s,r)||(a!==c&&a.push(s),c.push(l))}return c}function Xe(n,t){return null==(n=_u(n,t=co(t,n)))||delete n[ku(Wu(t))]}function no(n,t,r,e){return Me(n,t,r(se(n,t)),e)}function to(n,t,r,e){for(var o=n.length,u=e?o:-1;(e?u--:++u<o)&&t(n[u],u,n););return r?Ke(n,e?0:u,e?u+1:o):Ke(n,e?u+1:0,e?o:u)}function ro(n,t){var r=n;return r instanceof Br&&(r=r.value()),_t(t,(function(n,t){return t.func.apply(t.thisArg,pt([n],t.args))}),r)}function eo(n,t,r){var o=n.length;if(o<2)return o?Qe(n[0]):[];for(var u=-1,i=e(o);++u<o;)for(var c=n[u],a=-1;++a<o;)a!=u&&(i[u]=Xr(i[u]||c,n[a],t,r));return Qe(ue(i,1),t,r)}function oo(n,t,r){for(var e=-1,o=n.length,u=t.length,i={};++e<o;){var c=e<u?t[e]:void 0;r(i,n[e],c)}return i}function uo(n){return Pi(n)?n:[]}function io(n){return"function"==typeof n?n:Vc}function co(n,t){return Di(n)?n:fu(n,t)?[n]:Cu(cc(n))}var ao=Le;function fo(n,t,r){var e=n.length;return r=void 0===r?e:r,!t&&r>=e?n:Ke(n,t,r)}var lo=Yt||function(n){return Gn.clearTimeout(n)};function so(n,t){if(t)return n.slice();var r=n.length,e=$n?$n(r):new n.constructor(r);return n.copy(e),e}function vo(n){var t=new n.constructor(n.byteLength);return new Tn(t).set(new Tn(n)),t}function ho(n,t){var r=t?vo(n.buffer):n.buffer;return new n.constructor(r,n.byteOffset,n.length)}function po(n,t){if(n!==t){var r=void 0!==n,e=null===n,o=n==n,u=Ji(n),i=void 0!==t,c=null===t,a=t==t,f=Ji(t);if(!c&&!f&&!u&&n>t||u&&i&&a&&!c&&!f||e&&i&&a||!r&&a||!o)return 1;if(!e&&!u&&!f&&n<t||f&&r&&o&&!e&&!u||c&&r&&o||!i&&o||!a)return-1}return 0}function _o(n,t,r,o){for(var u=-1,i=n.length,c=r.length,a=-1,f=t.length,l=ir(i-c,0),s=e(f+l),v=!o;++a<f;)s[a]=t[a];for(;++u<c;)(v||u<i)&&(s[r[u]]=n[u]);for(;l--;)s[a++]=n[u++];return s}function go(n,t,r,o){for(var u=-1,i=n.length,c=-1,a=r.length,f=-1,l=t.length,s=ir(i-a,0),v=e(s+l),d=!o;++u<s;)v[u]=n[u];for(var h=u;++f<l;)v[h+f]=t[f];for(;++c<a;)(d||u<i)&&(v[h+r[c]]=n[u++]);return v}function yo(n,t){var r=-1,o=n.length;for(t||(t=e(o));++r<o;)t[r]=n[r];return t}function bo(n,t,r,e){var o=!r;r||(r={});for(var u=-1,i=t.length;++u<i;){var c=t[u],a=e?e(r[c],n[c],c,r,n):void 0;void 0===a&&(a=n[c]),o?Zr(r,c,a):$r(r,c,a)}return r}function mo(n,t){return function(r,e){var o=Di(r)?ct:Kr,u=t?t():{};return o(r,n,Jo(e,2),u)}}function wo(n){return Le((function(t,r){var e=-1,o=r.length,u=o>1?r[o-1]:void 0,i=o>2?r[2]:void 0;for(u=n.length>3&&"function"==typeof u?(o--,u):void 0,i&&au(r[0],r[1],i)&&(u=o<3?void 0:u,o=1),t=_n(t);++e<o;){var c=r[e];c&&n(t,c,e,u)}return t}))}function xo(n,t){return function(r,e){if(null==r)return r;if(!zi(r))return n(r,e);for(var o=r.length,u=t?o:-1,i=_n(r);(t?u--:++u<o)&&!1!==e(i[u],u,i););return r}}function Ao(n){return function(t,r,e){for(var o=-1,u=_n(t),i=e(t),c=i.length;c--;){var a=i[n?c:++o];if(!1===r(u[a],a,u))break}return t}}function jo(n){return function(t){var r=Ft(t=cc(t))?Zt(t):void 0,e=r?r[0]:t.charAt(0),o=r?fo(r,1).join(""):t.slice(1);return e[n]()+o}}function Co(n){return function(t){return _t(Fc(Bc(t).replace(Dn,"")),n,"")}}function ko(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=Or(n.prototype),e=n.apply(r,t);return $i(e)?e:r}}function So(n){return function(t,r,e){var o=_n(t);if(!zi(t)){var u=Jo(r,3);t=mc(t),r=function(n){return u(o[n],n,o)}}var i=n(t,r,e);return i>-1?o[u?t[i]:i]:void 0}}function Eo(n){return Ko((function(t){var r=t.length,e=r,o=Ir.prototype.thru;for(n&&t.reverse();e--;){var i=t[e];if("function"!=typeof i)throw new bn(u);if(o&&!c&&"wrapper"==Ho(i))var c=new Ir([],!0)}for(e=c?e:r;++e<r;){var a=Ho(i=t[e]),f="wrapper"==a?Go(i):void 0;c=f&&lu(f[0])&&424==f[1]&&!f[4].length&&1==f[9]?c[Ho(f[0])].apply(c,f[3]):1==i.length&&lu(i)?c[a]():c.thru(i)}return function(){var n=arguments,e=n[0];if(c&&1==n.length&&Di(e))return c.plant(e).value();for(var o=0,u=r?t[o].apply(this,n):e;++o<r;)u=t[o].call(this,u);return u}}))}function Oo(n,t,r,o,u,i,c,a,f,l){var s=128&t,v=1&t,d=2&t,h=24&t,p=512&t,_=d?void 0:ko(n);return function g(){for(var y=arguments.length,b=e(y),m=y;m--;)b[m]=arguments[m];if(h)var w=Yo(g),x=Pt(b,w);if(o&&(b=_o(b,o,u,h)),i&&(b=go(b,i,c,h)),y-=x,h&&y<l){var A=$t(b,w);return Po(n,t,Oo,g.placeholder,r,b,A,a,f,l-y)}var j=v?r:this,C=d?j[n]:n;return y=b.length,a?b=gu(b,a):p&&y>1&&b.reverse(),s&&f<y&&(b.length=f),this&&this!==Gn&&this instanceof g&&(C=_||ko(C)),C.apply(j,b)}}function Ro(n,t){return function(r,e){return function(n,t,r,e){return ae(n,(function(n,o,u){t(e,r(n),o,u)})),e}(r,n,t(e),{})}}function Io(n,t){return function(r,e){var o;if(void 0===r&&void 0===e)return t;if(void 0!==r&&(o=r),void 0!==e){if(void 0===o)return e;"string"==typeof r||"string"==typeof e?(r=Je(r),e=Je(e)):(r=Ye(r),e=Ye(e)),o=n(r,e)}return o}}function Bo(n){return Ko((function(t){return t=ht(t,It(Jo())),Le((function(r){var e=this;return n(t,(function(n){return it(n,e,r)}))}))}))}function Do(n,t){var r=(t=void 0===t?" ":Je(t)).length;if(r<2)return r?Te(t,n):t;var e=Te(t,Xt(n/Vt(t)));return Ft(t)?fo(Zt(e),0,n).join(""):e.slice(0,n)}function Uo(n){return function(t,r,o){return o&&"number"!=typeof o&&au(t,r,o)&&(r=o=void 0),t=rc(t),void 0===r?(r=t,t=0):r=rc(r),function(n,t,r,o){for(var u=-1,i=ir(Xt((t-n)/(r||1)),0),c=e(i);i--;)c[o?i:++u]=n,n+=r;return c}(t,r,o=void 0===o?t<r?1:-1:rc(o),n)}}function zo(n){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=uc(t),r=uc(r)),n(t,r)}}function Po(n,t,r,e,o,u,i,c,a,f){var l=8&t;t|=l?32:64,4&(t&=~(l?64:32))||(t&=-4);var s=[n,t,o,l?u:void 0,l?i:void 0,l?void 0:u,l?void 0:i,c,a,f],v=r.apply(void 0,s);return lu(n)&&bu(v,s),v.placeholder=e,xu(v,n,t)}function To(n){var t=pn[n];return function(n,r){if(n=uc(n),(r=null==r?0:cr(ec(r),292))&&er(n)){var e=(cc(n)+"e").split("e");return+((e=(cc(t(e[0]+"e"+(+e[1]+r)))+"e").split("e"))[0]+"e"+(+e[1]-r))}return t(n)}}var Lo=pr&&1/qt(new pr([,-0]))[1]==1/0?function(n){return new pr(n)}:Jc;function Wo(n){return function(t){var r=eu(t);return r==p?Mt(t):r==b?Kt(t):function(n,t){return ht(t,(function(t){return[t,n[t]]}))}(t,n(t))}}function Fo(n,t,r,o,c,a,f,l){var s=2&t;if(!s&&"function"!=typeof n)throw new bn(u);var v=o?o.length:0;if(v||(t&=-97,o=c=void 0),f=void 0===f?f:ir(ec(f),0),l=void 0===l?l:ec(l),v-=c?c.length:0,64&t){var d=o,h=c;o=c=void 0}var p=s?void 0:Go(n),_=[n,t,r,o,c,d,h,a,f,l];if(p&&function(n,t){var r=n[1],e=t[1],o=r|e,u=o<131,c=128==e&&8==r||128==e&&256==r&&n[7].length<=t[8]||384==e&&t[7].length<=t[8]&&8==r;if(!u&&!c)return n;1&e&&(n[2]=t[2],o|=1&r?0:4);var a=t[3];if(a){var f=n[3];n[3]=f?_o(f,a,t[4]):a,n[4]=f?$t(n[3],i):t[4]}(a=t[5])&&(f=n[5],n[5]=f?go(f,a,t[6]):a,n[6]=f?$t(n[5],i):t[6]);(a=t[7])&&(n[7]=a);128&e&&(n[8]=null==n[8]?t[8]:cr(n[8],t[8]));null==n[9]&&(n[9]=t[9]);n[0]=t[0],n[1]=o}(_,p),n=_[0],t=_[1],r=_[2],o=_[3],c=_[4],!(l=_[9]=void 0===_[9]?s?0:n.length:ir(_[9]-v,0))&&24&t&&(t&=-25),t&&1!=t)g=8==t||16==t?function(n,t,r){var o=ko(n);return function u(){for(var i=arguments.length,c=e(i),a=i,f=Yo(u);a--;)c[a]=arguments[a];var l=i<3&&c[0]!==f&&c[i-1]!==f?[]:$t(c,f);if((i-=l.length)<r)return Po(n,t,Oo,u.placeholder,void 0,c,l,void 0,void 0,r-i);var s=this&&this!==Gn&&this instanceof u?o:n;return it(s,this,c)}}(n,t,l):32!=t&&33!=t||c.length?Oo.apply(void 0,_):function(n,t,r,o){var u=1&t,i=ko(n);return function t(){for(var c=-1,a=arguments.length,f=-1,l=o.length,s=e(l+a),v=this&&this!==Gn&&this instanceof t?i:n;++f<l;)s[f]=o[f];for(;a--;)s[f++]=arguments[++c];return it(v,u?r:this,s)}}(n,t,r,o);else var g=function(n,t,r){var e=1&t,o=ko(n);return function t(){var u=this&&this!==Gn&&this instanceof t?o:n;return u.apply(e?r:this,arguments)}}(n,t,r);return xu((p?Ne:bu)(g,_),n,t)}function Mo(n,t,r,e){return void 0===n||Oi(n,xn[r])&&!Cn.call(e,r)?t:n}function No(n,t,r,e,o,u){return $i(n)&&$i(t)&&(u.set(t,n),Re(n,t,void 0,No,u),u.delete(t)),n}function $o(n){return Zi(n)?void 0:n}function qo(n,t,r,e,o,u){var i=1&r,c=n.length,a=t.length;if(c!=a&&!(i&&a>c))return!1;var f=u.get(n);if(f&&u.get(t))return f==t;var l=-1,s=!0,v=2&r?new Pr:void 0;for(u.set(n,t),u.set(t,n);++l<c;){var d=n[l],h=t[l];if(e)var p=i?e(h,d,l,t,n,u):e(d,h,l,n,t,u);if(void 0!==p){if(p)continue;s=!1;break}if(v){if(!yt(t,(function(n,t){if(!Dt(v,t)&&(d===n||o(d,n,r,e,u)))return v.push(t)}))){s=!1;break}}else if(d!==h&&!o(d,h,r,e,u)){s=!1;break}}return u.delete(n),u.delete(t),s}function Ko(n){return wu(pu(n,void 0,Uu),n+"")}function Vo(n){return ve(n,mc,tu)}function Zo(n){return ve(n,wc,ru)}var Go=yr?function(n){return yr.get(n)}:Jc;function Ho(n){for(var t=n.name+"",r=br[t],e=Cn.call(br,t)?r.length:0;e--;){var o=r[e],u=o.func;if(null==u||u==n)return o.name}return t}function Yo(n){return(Cn.call(Er,"placeholder")?Er:n).placeholder}function Jo(){var n=Er.iteratee||Zc;return n=n===Zc?Ae:n,arguments.length?n(arguments[0],arguments[1]):n}function Qo(n,t){var r,e,o=n.__data__;return("string"==(e=typeof(r=t))||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function Xo(n){for(var t=mc(n),r=t.length;r--;){var e=t[r],o=n[e];t[r]=[e,o,du(o)]}return t}function nu(n,t){var r=function(n,t){return null==n?void 0:n[t]}(n,t);return xe(r)?r:void 0}var tu=tr?function(n){return null==n?[]:(n=_n(n),st(tr(n),(function(t){return Hn.call(n,t)})))}:oa,ru=tr?function(n){for(var t=[];n;)pt(t,tu(n)),n=Vn(n);return t}:oa,eu=de;function ou(n,t,r){for(var e=-1,o=(t=co(t,n)).length,u=!1;++e<o;){var i=ku(t[e]);if(!(u=null!=n&&r(n,i)))break;n=n[i]}return u||++e!=o?u:!!(o=null==n?0:n.length)&&Ni(o)&&cu(i,o)&&(Di(n)||Bi(n))}function uu(n){return"function"!=typeof n.constructor||vu(n)?{}:Or(Vn(n))}function iu(n){return Di(n)||Bi(n)||!!(Qn&&n&&n[Qn])}function cu(n,t){var r=typeof n;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&fn.test(n))&&n>-1&&n%1==0&&n<t}function au(n,t,r){if(!$i(r))return!1;var e=typeof t;return!!("number"==e?zi(r)&&cu(t,r.length):"string"==e&&t in r)&&Oi(r[t],n)}function fu(n,t){if(Di(n))return!1;var r=typeof n;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=n&&!Ji(n))||(q.test(n)||!$.test(n)||null!=t&&n in _n(t))}function lu(n){var t=Ho(n),r=Er[t];if("function"!=typeof r||!(t in Br.prototype))return!1;if(n===r)return!0;var e=Go(r);return!!e&&n===e[0]}(vr&&eu(new vr(new ArrayBuffer(1)))!=j||dr&&eu(new dr)!=p||hr&&"[object Promise]"!=eu(hr.resolve())||pr&&eu(new pr)!=b||_r&&eu(new _r)!=x)&&(eu=function(n){var t=de(n),r=t==g?n.constructor:void 0,e=r?Su(r):"";if(e)switch(e){case mr:return j;case wr:return p;case xr:return"[object Promise]";case Ar:return b;case jr:return x}return t});var su=An?Fi:ua;function vu(n){var t=n&&n.constructor;return n===("function"==typeof t&&t.prototype||xn)}function du(n){return n==n&&!$i(n)}function hu(n,t){return function(r){return null!=r&&(r[n]===t&&(void 0!==t||n in _n(r)))}}function pu(n,t,r){return t=ir(void 0===t?n.length-1:t,0),function(){for(var o=arguments,u=-1,i=ir(o.length-t,0),c=e(i);++u<i;)c[u]=o[t+u];u=-1;for(var a=e(t+1);++u<t;)a[u]=o[u];return a[t]=r(c),it(n,this,a)}}function _u(n,t){return t.length<2?n:se(n,Ke(t,0,-1))}function gu(n,t){for(var r=n.length,e=cr(t.length,r),o=yo(n);e--;){var u=t[e];n[e]=cu(u,r)?o[u]:void 0}return n}function yu(n,t){if(("constructor"!==t||"function"!=typeof n[t])&&"__proto__"!=t)return n[t]}var bu=Au(Ne),mu=Qt||function(n,t){return Gn.setTimeout(n,t)},wu=Au($e);function xu(n,t,r){var e=t+"";return wu(n,function(n,t){var r=t.length;if(!r)return n;var e=r-1;return t[e]=(r>1?"& ":"")+t[e],t=t.join(r>2?", ":" "),n.replace(J,"{\n/* [wrapped with "+t+"] */\n")}(e,function(n,t){return at(c,(function(r){var e="_."+r[0];t&r[1]&&!vt(n,e)&&n.push(e)})),n.sort()}(function(n){var t=n.match(Q);return t?t[1].split(X):[]}(e),r)))}function Au(n){var t=0,r=0;return function(){var e=ar(),o=16-(e-r);if(r=e,o>0){if(++t>=800)return arguments[0]}else t=0;return n.apply(void 0,arguments)}}function ju(n,t){var r=-1,e=n.length,o=e-1;for(t=void 0===t?e:t;++r<t;){var u=Pe(r,o),i=n[u];n[u]=n[r],n[r]=i}return n.length=t,n}var Cu=function(n){var t=Ai(n,(function(n){return 500===r.size&&r.clear(),n})),r=t.cache;return t}((function(n){var t=[];return 46===n.charCodeAt(0)&&t.push(""),n.replace(K,(function(n,r,e,o){t.push(e?o.replace(tn,"$1"):r||n)})),t}));function ku(n){if("string"==typeof n||Ji(n))return n;var t=n+"";return"0"==t&&1/n==-1/0?"-0":t}function Su(n){if(null!=n){try{return jn.call(n)}catch(n){}try{return n+""}catch(n){}}return""}function Eu(n){if(n instanceof Br)return n.clone();var t=new Ir(n.__wrapped__,n.__chain__);return t.__actions__=yo(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}var Ou=Le((function(n,t){return Pi(n)?Xr(n,ue(t,1,Pi,!0)):[]})),Ru=Le((function(n,t){var r=Wu(t);return Pi(r)&&(r=void 0),Pi(n)?Xr(n,ue(t,1,Pi,!0),Jo(r,2)):[]})),Iu=Le((function(n,t){var r=Wu(t);return Pi(r)&&(r=void 0),Pi(n)?Xr(n,ue(t,1,Pi,!0),void 0,r):[]}));function Bu(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var o=null==r?0:ec(r);return o<0&&(o=ir(e+o,0)),wt(n,Jo(t,3),o)}function Du(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var o=e-1;return void 0!==r&&(o=ec(r),o=r<0?ir(e+o,0):cr(o,e-1)),wt(n,Jo(t,3),o,!0)}function Uu(n){return(null==n?0:n.length)?ue(n,1):[]}function zu(n){return n&&n.length?n[0]:void 0}var Pu=Le((function(n){var t=ht(n,uo);return t.length&&t[0]===n[0]?ge(t):[]})),Tu=Le((function(n){var t=Wu(n),r=ht(n,uo);return t===Wu(r)?t=void 0:r.pop(),r.length&&r[0]===n[0]?ge(r,Jo(t,2)):[]})),Lu=Le((function(n){var t=Wu(n),r=ht(n,uo);return(t="function"==typeof t?t:void 0)&&r.pop(),r.length&&r[0]===n[0]?ge(r,void 0,t):[]}));function Wu(n){var t=null==n?0:n.length;return t?n[t-1]:void 0}var Fu=Le(Mu);function Mu(n,t){return n&&n.length&&t&&t.length?Ue(n,t):n}var Nu=Ko((function(n,t){var r=null==n?0:n.length,e=Gr(n,t);return ze(n,ht(t,(function(n){return cu(n,r)?+n:n})).sort(po)),e}));function $u(n){return null==n?n:sr.call(n)}var qu=Le((function(n){return Qe(ue(n,1,Pi,!0))})),Ku=Le((function(n){var t=Wu(n);return Pi(t)&&(t=void 0),Qe(ue(n,1,Pi,!0),Jo(t,2))})),Vu=Le((function(n){var t=Wu(n);return t="function"==typeof t?t:void 0,Qe(ue(n,1,Pi,!0),void 0,t)}));function Zu(n){if(!n||!n.length)return[];var t=0;return n=st(n,(function(n){if(Pi(n))return t=ir(n.length,t),!0})),Rt(t,(function(t){return ht(n,kt(t))}))}function Gu(n,t){if(!n||!n.length)return[];var r=Zu(n);return null==t?r:ht(r,(function(n){return it(t,void 0,n)}))}var Hu=Le((function(n,t){return Pi(n)?Xr(n,t):[]})),Yu=Le((function(n){return eo(st(n,Pi))})),Ju=Le((function(n){var t=Wu(n);return Pi(t)&&(t=void 0),eo(st(n,Pi),Jo(t,2))})),Qu=Le((function(n){var t=Wu(n);return t="function"==typeof t?t:void 0,eo(st(n,Pi),void 0,t)})),Xu=Le(Zu);var ni=Le((function(n){var t=n.length,r=t>1?n[t-1]:void 0;return r="function"==typeof r?(n.pop(),r):void 0,Gu(n,r)}));function ti(n){var t=Er(n);return t.__chain__=!0,t}function ri(n,t){return t(n)}var ei=Ko((function(n){var t=n.length,r=t?n[0]:0,e=this.__wrapped__,o=function(t){return Gr(t,n)};return!(t>1||this.__actions__.length)&&e instanceof Br&&cu(r)?((e=e.slice(r,+r+(t?1:0))).__actions__.push({func:ri,args:[o],thisArg:void 0}),new Ir(e,this.__chain__).thru((function(n){return t&&!n.length&&n.push(void 0),n}))):this.thru(o)}));var oi=mo((function(n,t,r){Cn.call(n,r)?++n[r]:Zr(n,r,1)}));var ui=So(Bu),ii=So(Du);function ci(n,t){return(Di(n)?at:ne)(n,Jo(t,3))}function ai(n,t){return(Di(n)?ft:te)(n,Jo(t,3))}var fi=mo((function(n,t,r){Cn.call(n,r)?n[r].push(t):Zr(n,r,[t])}));var li=Le((function(n,t,r){var o=-1,u="function"==typeof t,i=zi(n)?e(n.length):[];return ne(n,(function(n){i[++o]=u?it(t,n,r):ye(n,t,r)})),i})),si=mo((function(n,t,r){Zr(n,r,t)}));function vi(n,t){return(Di(n)?ht:Se)(n,Jo(t,3))}var di=mo((function(n,t,r){n[r?0:1].push(t)}),(function(){return[[],[]]}));var hi=Le((function(n,t){if(null==n)return[];var r=t.length;return r>1&&au(n,t[0],t[1])?t=[]:r>2&&au(t[0],t[1],t[2])&&(t=[t[0]]),Be(n,ue(t,1),[])})),pi=Jt||function(){return Gn.Date.now()};function _i(n,t,r){return t=r?void 0:t,Fo(n,128,void 0,void 0,void 0,void 0,t=n&&null==t?n.length:t)}function gi(n,t){var r;if("function"!=typeof t)throw new bn(u);return n=ec(n),function(){return--n>0&&(r=t.apply(this,arguments)),n<=1&&(t=void 0),r}}var yi=Le((function(n,t,r){var e=1;if(r.length){var o=$t(r,Yo(yi));e|=32}return Fo(n,e,t,r,o)})),bi=Le((function(n,t,r){var e=3;if(r.length){var o=$t(r,Yo(bi));e|=32}return Fo(t,e,n,r,o)}));function mi(n,t,r){var e,o,i,c,a,f,l=0,s=!1,v=!1,d=!0;if("function"!=typeof n)throw new bn(u);function h(t){var r=e,u=o;return e=o=void 0,l=t,c=n.apply(u,r)}function p(n){return l=n,a=mu(g,t),s?h(n):c}function _(n){var r=n-f;return void 0===f||r>=t||r<0||v&&n-l>=i}function g(){var n=pi();if(_(n))return y(n);a=mu(g,function(n){var r=t-(n-f);return v?cr(r,i-(n-l)):r}(n))}function y(n){return a=void 0,d&&e?h(n):(e=o=void 0,c)}function b(){var n=pi(),r=_(n);if(e=arguments,o=this,f=n,r){if(void 0===a)return p(f);if(v)return lo(a),a=mu(g,t),h(f)}return void 0===a&&(a=mu(g,t)),c}return t=uc(t)||0,$i(r)&&(s=!!r.leading,i=(v="maxWait"in r)?ir(uc(r.maxWait)||0,t):i,d="trailing"in r?!!r.trailing:d),b.cancel=function(){void 0!==a&&lo(a),l=0,e=f=o=a=void 0},b.flush=function(){return void 0===a?c:y(pi())},b}var wi=Le((function(n,t){return Qr(n,1,t)})),xi=Le((function(n,t,r){return Qr(n,uc(t)||0,r)}));function Ai(n,t){if("function"!=typeof n||null!=t&&"function"!=typeof t)throw new bn(u);var r=function(){var e=arguments,o=t?t.apply(this,e):e[0],u=r.cache;if(u.has(o))return u.get(o);var i=n.apply(this,e);return r.cache=u.set(o,i)||u,i};return r.cache=new(Ai.Cache||zr),r}function ji(n){if("function"!=typeof n)throw new bn(u);return function(){var t=arguments;switch(t.length){case 0:return!n.call(this);case 1:return!n.call(this,t[0]);case 2:return!n.call(this,t[0],t[1]);case 3:return!n.call(this,t[0],t[1],t[2])}return!n.apply(this,t)}}Ai.Cache=zr;var Ci=ao((function(n,t){var r=(t=1==t.length&&Di(t[0])?ht(t[0],It(Jo())):ht(ue(t,1),It(Jo()))).length;return Le((function(e){for(var o=-1,u=cr(e.length,r);++o<u;)e[o]=t[o].call(this,e[o]);return it(n,this,e)}))})),ki=Le((function(n,t){return Fo(n,32,void 0,t,$t(t,Yo(ki)))})),Si=Le((function(n,t){return Fo(n,64,void 0,t,$t(t,Yo(Si)))})),Ei=Ko((function(n,t){return Fo(n,256,void 0,void 0,void 0,t)}));function Oi(n,t){return n===t||n!=n&&t!=t}var Ri=zo(he),Ii=zo((function(n,t){return n>=t})),Bi=be(function(){return arguments}())?be:function(n){return qi(n)&&Cn.call(n,"callee")&&!Hn.call(n,"callee")},Di=e.isArray,Ui=nt?It(nt):function(n){return qi(n)&&de(n)==A};function zi(n){return null!=n&&Ni(n.length)&&!Fi(n)}function Pi(n){return qi(n)&&zi(n)}var Ti=rr||ua,Li=tt?It(tt):function(n){return qi(n)&&de(n)==s};function Wi(n){if(!qi(n))return!1;var t=de(n);return t==v||"[object DOMException]"==t||"string"==typeof n.message&&"string"==typeof n.name&&!Zi(n)}function Fi(n){if(!$i(n))return!1;var t=de(n);return t==d||t==h||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Mi(n){return"number"==typeof n&&n==ec(n)}function Ni(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=9007199254740991}function $i(n){var t=typeof n;return null!=n&&("object"==t||"function"==t)}function qi(n){return null!=n&&"object"==typeof n}var Ki=rt?It(rt):function(n){return qi(n)&&eu(n)==p};function Vi(n){return"number"==typeof n||qi(n)&&de(n)==_}function Zi(n){if(!qi(n)||de(n)!=g)return!1;var t=Vn(n);if(null===t)return!0;var r=Cn.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&jn.call(r)==On}var Gi=et?It(et):function(n){return qi(n)&&de(n)==y};var Hi=ot?It(ot):function(n){return qi(n)&&eu(n)==b};function Yi(n){return"string"==typeof n||!Di(n)&&qi(n)&&de(n)==m}function Ji(n){return"symbol"==typeof n||qi(n)&&de(n)==w}var Qi=ut?It(ut):function(n){return qi(n)&&Ni(n.length)&&!!Mn[de(n)]};var Xi=zo(ke),nc=zo((function(n,t){return n<=t}));function tc(n){if(!n)return[];if(zi(n))return Yi(n)?Zt(n):yo(n);if(Xn&&n[Xn])return function(n){for(var t,r=[];!(t=n.next()).done;)r.push(t.value);return r}(n[Xn]());var t=eu(n);return(t==p?Mt:t==b?qt:Oc)(n)}function rc(n){return n?(n=uc(n))===1/0||n===-1/0?17976931348623157e292*(n<0?-1:1):n==n?n:0:0===n?n:0}function ec(n){var t=rc(n),r=t%1;return t==t?r?t-r:t:0}function oc(n){return n?Hr(ec(n),0,4294967295):0}function uc(n){if("number"==typeof n)return n;if(Ji(n))return NaN;if($i(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=$i(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(G,"");var r=un.test(n);return r||an.test(n)?Kn(n.slice(2),r?2:8):on.test(n)?NaN:+n}function ic(n){return bo(n,wc(n))}function cc(n){return null==n?"":Je(n)}var ac=wo((function(n,t){if(vu(t)||zi(t))bo(t,mc(t),n);else for(var r in t)Cn.call(t,r)&&$r(n,r,t[r])})),fc=wo((function(n,t){bo(t,wc(t),n)})),lc=wo((function(n,t,r,e){bo(t,wc(t),n,e)})),sc=wo((function(n,t,r,e){bo(t,mc(t),n,e)})),vc=Ko(Gr);var dc=Le((function(n,t){n=_n(n);var r=-1,e=t.length,o=e>2?t[2]:void 0;for(o&&au(t[0],t[1],o)&&(e=1);++r<e;)for(var u=t[r],i=wc(u),c=-1,a=i.length;++c<a;){var f=i[c],l=n[f];(void 0===l||Oi(l,xn[f])&&!Cn.call(n,f))&&(n[f]=u[f])}return n})),hc=Le((function(n){return n.push(void 0,No),it(Ac,void 0,n)}));function pc(n,t,r){var e=null==n?void 0:se(n,t);return void 0===e?r:e}function _c(n,t){return null!=n&&ou(n,t,_e)}var gc=Ro((function(n,t,r){null!=t&&"function"!=typeof t.toString&&(t=En.call(t)),n[t]=r}),$c(Vc)),yc=Ro((function(n,t,r){null!=t&&"function"!=typeof t.toString&&(t=En.call(t)),Cn.call(n,t)?n[t].push(r):n[t]=[r]}),Jo),bc=Le(ye);function mc(n){return zi(n)?Lr(n):je(n)}function wc(n){return zi(n)?Lr(n,!0):Ce(n)}var xc=wo((function(n,t,r){Re(n,t,r)})),Ac=wo((function(n,t,r,e){Re(n,t,r,e)})),jc=Ko((function(n,t){var r={};if(null==n)return r;var e=!1;t=ht(t,(function(t){return t=co(t,n),e||(e=t.length>1),t})),bo(n,Zo(n),r),e&&(r=Yr(r,7,$o));for(var o=t.length;o--;)Xe(r,t[o]);return r}));var Cc=Ko((function(n,t){return null==n?{}:function(n,t){return De(n,t,(function(t,r){return _c(n,r)}))}(n,t)}));function kc(n,t){if(null==n)return{};var r=ht(Zo(n),(function(n){return[n]}));return t=Jo(t),De(n,r,(function(n,r){return t(n,r[0])}))}var Sc=Wo(mc),Ec=Wo(wc);function Oc(n){return null==n?[]:Bt(n,mc(n))}var Rc=Co((function(n,t,r){return t=t.toLowerCase(),n+(r?Ic(t):t)}));function Ic(n){return Wc(cc(n).toLowerCase())}function Bc(n){return(n=cc(n))&&n.replace(ln,Tt).replace(Un,"")}var Dc=Co((function(n,t,r){return n+(r?"-":"")+t.toLowerCase()})),Uc=Co((function(n,t,r){return n+(r?" ":"")+t.toLowerCase()})),zc=jo("toLowerCase");var Pc=Co((function(n,t,r){return n+(r?"_":"")+t.toLowerCase()}));var Tc=Co((function(n,t,r){return n+(r?" ":"")+Wc(t)}));var Lc=Co((function(n,t,r){return n+(r?" ":"")+t.toUpperCase()})),Wc=jo("toUpperCase");function Fc(n,t,r){return n=cc(n),void 0===(t=r?void 0:t)?function(n){return Ln.test(n)}(n)?function(n){return n.match(Pn)||[]}(n):function(n){return n.match(nn)||[]}(n):n.match(t)||[]}var Mc=Le((function(n,t){try{return it(n,void 0,t)}catch(n){return Wi(n)?n:new dn(n)}})),Nc=Ko((function(n,t){return at(t,(function(t){t=ku(t),Zr(n,t,yi(n[t],n))})),n}));function $c(n){return function(){return n}}var qc=Eo(),Kc=Eo(!0);function Vc(n){return n}function Zc(n){return Ae("function"==typeof n?n:Yr(n,1))}var Gc=Le((function(n,t){return function(r){return ye(r,n,t)}})),Hc=Le((function(n,t){return function(r){return ye(n,r,t)}}));function Yc(n,t,r){var e=mc(t),o=le(t,e);null!=r||$i(t)&&(o.length||!e.length)||(r=t,t=n,n=this,o=le(t,mc(t)));var u=!($i(r)&&"chain"in r&&!r.chain),i=Fi(n);return at(o,(function(r){var e=t[r];n[r]=e,i&&(n.prototype[r]=function(){var t=this.__chain__;if(u||t){var r=n(this.__wrapped__),o=r.__actions__=yo(this.__actions__);return o.push({func:e,args:arguments,thisArg:n}),r.__chain__=t,r}return e.apply(n,pt([this.value()],arguments))})})),n}function Jc(){}var Qc=Bo(ht),Xc=Bo(lt),na=Bo(yt);function ta(n){return fu(n)?kt(ku(n)):function(n){return function(t){return se(t,n)}}(n)}var ra=Uo(),ea=Uo(!0);function oa(){return[]}function ua(){return!1}var ia=Io((function(n,t){return n+t}),0),ca=To("ceil"),aa=Io((function(n,t){return n/t}),1),fa=To("floor");var la,sa=Io((function(n,t){return n*t}),1),va=To("round"),da=Io((function(n,t){return n-t}),0);return Er.after=function(n,t){if("function"!=typeof t)throw new bn(u);return n=ec(n),function(){if(--n<1)return t.apply(this,arguments)}},Er.ary=_i,Er.assign=ac,Er.assignIn=fc,Er.assignInWith=lc,Er.assignWith=sc,Er.at=vc,Er.before=gi,Er.bind=yi,Er.bindAll=Nc,Er.bindKey=bi,Er.castArray=function(){if(!arguments.length)return[];var n=arguments[0];return Di(n)?n:[n]},Er.chain=ti,Er.chunk=function(n,t,r){t=(r?au(n,t,r):void 0===t)?1:ir(ec(t),0);var o=null==n?0:n.length;if(!o||t<1)return[];for(var u=0,i=0,c=e(Xt(o/t));u<o;)c[i++]=Ke(n,u,u+=t);return c},Er.compact=function(n){for(var t=-1,r=null==n?0:n.length,e=0,o=[];++t<r;){var u=n[t];u&&(o[e++]=u)}return o},Er.concat=function(){var n=arguments.length;if(!n)return[];for(var t=e(n-1),r=arguments[0],o=n;o--;)t[o-1]=arguments[o];return pt(Di(r)?yo(r):[r],ue(t,1))},Er.cond=function(n){var t=null==n?0:n.length,r=Jo();return n=t?ht(n,(function(n){if("function"!=typeof n[1])throw new bn(u);return[r(n[0]),n[1]]})):[],Le((function(r){for(var e=-1;++e<t;){var o=n[e];if(it(o[0],this,r))return it(o[1],this,r)}}))},Er.conforms=function(n){return function(n){var t=mc(n);return function(r){return Jr(r,n,t)}}(Yr(n,1))},Er.constant=$c,Er.countBy=oi,Er.create=function(n,t){var r=Or(n);return null==t?r:Vr(r,t)},Er.curry=function n(t,r,e){var o=Fo(t,8,void 0,void 0,void 0,void 0,void 0,r=e?void 0:r);return o.placeholder=n.placeholder,o},Er.curryRight=function n(t,r,e){var o=Fo(t,16,void 0,void 0,void 0,void 0,void 0,r=e?void 0:r);return o.placeholder=n.placeholder,o},Er.debounce=mi,Er.defaults=dc,Er.defaultsDeep=hc,Er.defer=wi,Er.delay=xi,Er.difference=Ou,Er.differenceBy=Ru,Er.differenceWith=Iu,Er.drop=function(n,t,r){var e=null==n?0:n.length;return e?Ke(n,(t=r||void 0===t?1:ec(t))<0?0:t,e):[]},Er.dropRight=function(n,t,r){var e=null==n?0:n.length;return e?Ke(n,0,(t=e-(t=r||void 0===t?1:ec(t)))<0?0:t):[]},Er.dropRightWhile=function(n,t){return n&&n.length?to(n,Jo(t,3),!0,!0):[]},Er.dropWhile=function(n,t){return n&&n.length?to(n,Jo(t,3),!0):[]},Er.fill=function(n,t,r,e){var o=null==n?0:n.length;return o?(r&&"number"!=typeof r&&au(n,t,r)&&(r=0,e=o),function(n,t,r,e){var o=n.length;for((r=ec(r))<0&&(r=-r>o?0:o+r),(e=void 0===e||e>o?o:ec(e))<0&&(e+=o),e=r>e?0:oc(e);r<e;)n[r++]=t;return n}(n,t,r,e)):[]},Er.filter=function(n,t){return(Di(n)?st:oe)(n,Jo(t,3))},Er.flatMap=function(n,t){return ue(vi(n,t),1)},Er.flatMapDeep=function(n,t){return ue(vi(n,t),1/0)},Er.flatMapDepth=function(n,t,r){return r=void 0===r?1:ec(r),ue(vi(n,t),r)},Er.flatten=Uu,Er.flattenDeep=function(n){return(null==n?0:n.length)?ue(n,1/0):[]},Er.flattenDepth=function(n,t){return(null==n?0:n.length)?ue(n,t=void 0===t?1:ec(t)):[]},Er.flip=function(n){return Fo(n,512)},Er.flow=qc,Er.flowRight=Kc,Er.fromPairs=function(n){for(var t=-1,r=null==n?0:n.length,e={};++t<r;){var o=n[t];e[o[0]]=o[1]}return e},Er.functions=function(n){return null==n?[]:le(n,mc(n))},Er.functionsIn=function(n){return null==n?[]:le(n,wc(n))},Er.groupBy=fi,Er.initial=function(n){return(null==n?0:n.length)?Ke(n,0,-1):[]},Er.intersection=Pu,Er.intersectionBy=Tu,Er.intersectionWith=Lu,Er.invert=gc,Er.invertBy=yc,Er.invokeMap=li,Er.iteratee=Zc,Er.keyBy=si,Er.keys=mc,Er.keysIn=wc,Er.map=vi,Er.mapKeys=function(n,t){var r={};return t=Jo(t,3),ae(n,(function(n,e,o){Zr(r,t(n,e,o),n)})),r},Er.mapValues=function(n,t){var r={};return t=Jo(t,3),ae(n,(function(n,e,o){Zr(r,e,t(n,e,o))})),r},Er.matches=function(n){return Ee(Yr(n,1))},Er.matchesProperty=function(n,t){return Oe(n,Yr(t,1))},Er.memoize=Ai,Er.merge=xc,Er.mergeWith=Ac,Er.method=Gc,Er.methodOf=Hc,Er.mixin=Yc,Er.negate=ji,Er.nthArg=function(n){return n=ec(n),Le((function(t){return Ie(t,n)}))},Er.omit=jc,Er.omitBy=function(n,t){return kc(n,ji(Jo(t)))},Er.once=function(n){return gi(2,n)},Er.orderBy=function(n,t,r,e){return null==n?[]:(Di(t)||(t=null==t?[]:[t]),Di(r=e?void 0:r)||(r=null==r?[]:[r]),Be(n,t,r))},Er.over=Qc,Er.overArgs=Ci,Er.overEvery=Xc,Er.overSome=na,Er.partial=ki,Er.partialRight=Si,Er.partition=di,Er.pick=Cc,Er.pickBy=kc,Er.property=ta,Er.propertyOf=function(n){return function(t){return null==n?void 0:se(n,t)}},Er.pull=Fu,Er.pullAll=Mu,Er.pullAllBy=function(n,t,r){return n&&n.length&&t&&t.length?Ue(n,t,Jo(r,2)):n},Er.pullAllWith=function(n,t,r){return n&&n.length&&t&&t.length?Ue(n,t,void 0,r):n},Er.pullAt=Nu,Er.range=ra,Er.rangeRight=ea,Er.rearg=Ei,Er.reject=function(n,t){return(Di(n)?st:oe)(n,ji(Jo(t,3)))},Er.remove=function(n,t){var r=[];if(!n||!n.length)return r;var e=-1,o=[],u=n.length;for(t=Jo(t,3);++e<u;){var i=n[e];t(i,e,n)&&(r.push(i),o.push(e))}return ze(n,o),r},Er.rest=function(n,t){if("function"!=typeof n)throw new bn(u);return Le(n,t=void 0===t?t:ec(t))},Er.reverse=$u,Er.sampleSize=function(n,t,r){return t=(r?au(n,t,r):void 0===t)?1:ec(t),(Di(n)?Fr:Fe)(n,t)},Er.set=function(n,t,r){return null==n?n:Me(n,t,r)},Er.setWith=function(n,t,r,e){return e="function"==typeof e?e:void 0,null==n?n:Me(n,t,r,e)},Er.shuffle=function(n){return(Di(n)?Mr:qe)(n)},Er.slice=function(n,t,r){var e=null==n?0:n.length;return e?(r&&"number"!=typeof r&&au(n,t,r)?(t=0,r=e):(t=null==t?0:ec(t),r=void 0===r?e:ec(r)),Ke(n,t,r)):[]},Er.sortBy=hi,Er.sortedUniq=function(n){return n&&n.length?He(n):[]},Er.sortedUniqBy=function(n,t){return n&&n.length?He(n,Jo(t,2)):[]},Er.split=function(n,t,r){return r&&"number"!=typeof r&&au(n,t,r)&&(t=r=void 0),(r=void 0===r?4294967295:r>>>0)?(n=cc(n))&&("string"==typeof t||null!=t&&!Gi(t))&&!(t=Je(t))&&Ft(n)?fo(Zt(n),0,r):n.split(t,r):[]},Er.spread=function(n,t){if("function"!=typeof n)throw new bn(u);return t=null==t?0:ir(ec(t),0),Le((function(r){var e=r[t],o=fo(r,0,t);return e&&pt(o,e),it(n,this,o)}))},Er.tail=function(n){var t=null==n?0:n.length;return t?Ke(n,1,t):[]},Er.take=function(n,t,r){return n&&n.length?Ke(n,0,(t=r||void 0===t?1:ec(t))<0?0:t):[]},Er.takeRight=function(n,t,r){var e=null==n?0:n.length;return e?Ke(n,(t=e-(t=r||void 0===t?1:ec(t)))<0?0:t,e):[]},Er.takeRightWhile=function(n,t){return n&&n.length?to(n,Jo(t,3),!1,!0):[]},Er.takeWhile=function(n,t){return n&&n.length?to(n,Jo(t,3)):[]},Er.tap=function(n,t){return t(n),n},Er.throttle=function(n,t,r){var e=!0,o=!0;if("function"!=typeof n)throw new bn(u);return $i(r)&&(e="leading"in r?!!r.leading:e,o="trailing"in r?!!r.trailing:o),mi(n,t,{leading:e,maxWait:t,trailing:o})},Er.thru=ri,Er.toArray=tc,Er.toPairs=Sc,Er.toPairsIn=Ec,Er.toPath=function(n){return Di(n)?ht(n,ku):Ji(n)?[n]:yo(Cu(cc(n)))},Er.toPlainObject=ic,Er.transform=function(n,t,r){var e=Di(n),o=e||Ti(n)||Qi(n);if(t=Jo(t,4),null==r){var u=n&&n.constructor;r=o?e?new u:[]:$i(n)&&Fi(u)?Or(Vn(n)):{}}return(o?at:ae)(n,(function(n,e,o){return t(r,n,e,o)})),r},Er.unary=function(n){return _i(n,1)},Er.union=qu,Er.unionBy=Ku,Er.unionWith=Vu,Er.uniq=function(n){return n&&n.length?Qe(n):[]},Er.uniqBy=function(n,t){return n&&n.length?Qe(n,Jo(t,2)):[]},Er.uniqWith=function(n,t){return t="function"==typeof t?t:void 0,n&&n.length?Qe(n,void 0,t):[]},Er.unset=function(n,t){return null==n||Xe(n,t)},Er.unzip=Zu,Er.unzipWith=Gu,Er.update=function(n,t,r){return null==n?n:no(n,t,io(r))},Er.updateWith=function(n,t,r,e){return e="function"==typeof e?e:void 0,null==n?n:no(n,t,io(r),e)},Er.values=Oc,Er.valuesIn=function(n){return null==n?[]:Bt(n,wc(n))},Er.without=Hu,Er.words=Fc,Er.wrap=function(n,t){return ki(io(t),n)},Er.xor=Yu,Er.xorBy=Ju,Er.xorWith=Qu,Er.zip=Xu,Er.zipObject=function(n,t){return oo(n||[],t||[],$r)},Er.zipObjectDeep=function(n,t){return oo(n||[],t||[],Me)},Er.zipWith=ni,Er.entries=Sc,Er.entriesIn=Ec,Er.extend=fc,Er.extendWith=lc,Yc(Er,Er),Er.add=ia,Er.attempt=Mc,Er.camelCase=Rc,Er.capitalize=Ic,Er.ceil=ca,Er.clamp=function(n,t,r){return void 0===r&&(r=t,t=void 0),void 0!==r&&(r=(r=uc(r))==r?r:0),void 0!==t&&(t=(t=uc(t))==t?t:0),Hr(uc(n),t,r)},Er.clone=function(n){return Yr(n,4)},Er.cloneDeep=function(n){return Yr(n,5)},Er.cloneDeepWith=function(n,t){return Yr(n,5,t="function"==typeof t?t:void 0)},Er.cloneWith=function(n,t){return Yr(n,4,t="function"==typeof t?t:void 0)},Er.conformsTo=function(n,t){return null==t||Jr(n,t,mc(t))},Er.deburr=Bc,Er.defaultTo=function(n,t){return null==n||n!=n?t:n},Er.divide=aa,Er.endsWith=function(n,t,r){n=cc(n),t=Je(t);var e=n.length,o=r=void 0===r?e:Hr(ec(r),0,e);return(r-=t.length)>=0&&n.slice(r,o)==t},Er.eq=Oi,Er.escape=function(n){return(n=cc(n))&&W.test(n)?n.replace(T,Lt):n},Er.escapeRegExp=function(n){return(n=cc(n))&&Z.test(n)?n.replace(V,"\\$&"):n},Er.every=function(n,t,r){var e=Di(n)?lt:re;return r&&au(n,t,r)&&(t=void 0),e(n,Jo(t,3))},Er.find=ui,Er.findIndex=Bu,Er.findKey=function(n,t){return mt(n,Jo(t,3),ae)},Er.findLast=ii,Er.findLastIndex=Du,Er.findLastKey=function(n,t){return mt(n,Jo(t,3),fe)},Er.floor=fa,Er.forEach=ci,Er.forEachRight=ai,Er.forIn=function(n,t){return null==n?n:ie(n,Jo(t,3),wc)},Er.forInRight=function(n,t){return null==n?n:ce(n,Jo(t,3),wc)},Er.forOwn=function(n,t){return n&&ae(n,Jo(t,3))},Er.forOwnRight=function(n,t){return n&&fe(n,Jo(t,3))},Er.get=pc,Er.gt=Ri,Er.gte=Ii,Er.has=function(n,t){return null!=n&&ou(n,t,pe)},Er.hasIn=_c,Er.head=zu,Er.identity=Vc,Er.includes=function(n,t,r,e){n=zi(n)?n:Oc(n),r=r&&!e?ec(r):0;var o=n.length;return r<0&&(r=ir(o+r,0)),Yi(n)?r<=o&&n.indexOf(t,r)>-1:!!o&&xt(n,t,r)>-1},Er.indexOf=function(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var o=null==r?0:ec(r);return o<0&&(o=ir(e+o,0)),xt(n,t,o)},Er.inRange=function(n,t,r){return t=rc(t),void 0===r?(r=t,t=0):r=rc(r),function(n,t,r){return n>=cr(t,r)&&n<ir(t,r)}(n=uc(n),t,r)},Er.invoke=bc,Er.isArguments=Bi,Er.isArray=Di,Er.isArrayBuffer=Ui,Er.isArrayLike=zi,Er.isArrayLikeObject=Pi,Er.isBoolean=function(n){return!0===n||!1===n||qi(n)&&de(n)==l},Er.isBuffer=Ti,Er.isDate=Li,Er.isElement=function(n){return qi(n)&&1===n.nodeType&&!Zi(n)},Er.isEmpty=function(n){if(null==n)return!0;if(zi(n)&&(Di(n)||"string"==typeof n||"function"==typeof n.splice||Ti(n)||Qi(n)||Bi(n)))return!n.length;var t=eu(n);if(t==p||t==b)return!n.size;if(vu(n))return!je(n).length;for(var r in n)if(Cn.call(n,r))return!1;return!0},Er.isEqual=function(n,t){return me(n,t)},Er.isEqualWith=function(n,t,r){var e=(r="function"==typeof r?r:void 0)?r(n,t):void 0;return void 0===e?me(n,t,void 0,r):!!e},Er.isError=Wi,Er.isFinite=function(n){return"number"==typeof n&&er(n)},Er.isFunction=Fi,Er.isInteger=Mi,Er.isLength=Ni,Er.isMap=Ki,Er.isMatch=function(n,t){return n===t||we(n,t,Xo(t))},Er.isMatchWith=function(n,t,r){return r="function"==typeof r?r:void 0,we(n,t,Xo(t),r)},Er.isNaN=function(n){return Vi(n)&&n!=+n},Er.isNative=function(n){if(su(n))throw new dn("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return xe(n)},Er.isNil=function(n){return null==n},Er.isNull=function(n){return null===n},Er.isNumber=Vi,Er.isObject=$i,Er.isObjectLike=qi,Er.isPlainObject=Zi,Er.isRegExp=Gi,Er.isSafeInteger=function(n){return Mi(n)&&n>=-9007199254740991&&n<=9007199254740991},Er.isSet=Hi,Er.isString=Yi,Er.isSymbol=Ji,Er.isTypedArray=Qi,Er.isUndefined=function(n){return void 0===n},Er.isWeakMap=function(n){return qi(n)&&eu(n)==x},Er.isWeakSet=function(n){return qi(n)&&"[object WeakSet]"==de(n)},Er.join=function(n,t){return null==n?"":or.call(n,t)},Er.kebabCase=Dc,Er.last=Wu,Er.lastIndexOf=function(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var o=e;return void 0!==r&&(o=(o=ec(r))<0?ir(e+o,0):cr(o,e-1)),t==t?function(n,t,r){for(var e=r+1;e--;)if(n[e]===t)return e;return e}(n,t,o):wt(n,jt,o,!0)},Er.lowerCase=Uc,Er.lowerFirst=zc,Er.lt=Xi,Er.lte=nc,Er.max=function(n){return n&&n.length?ee(n,Vc,he):void 0},Er.maxBy=function(n,t){return n&&n.length?ee(n,Jo(t,2),he):void 0},Er.mean=function(n){return Ct(n,Vc)},Er.meanBy=function(n,t){return Ct(n,Jo(t,2))},Er.min=function(n){return n&&n.length?ee(n,Vc,ke):void 0},Er.minBy=function(n,t){return n&&n.length?ee(n,Jo(t,2),ke):void 0},Er.stubArray=oa,Er.stubFalse=ua,Er.stubObject=function(){return{}},Er.stubString=function(){return""},Er.stubTrue=function(){return!0},Er.multiply=sa,Er.nth=function(n,t){return n&&n.length?Ie(n,ec(t)):void 0},Er.noConflict=function(){return Gn._===this&&(Gn._=Rn),this},Er.noop=Jc,Er.now=pi,Er.pad=function(n,t,r){n=cc(n);var e=(t=ec(t))?Vt(n):0;if(!t||e>=t)return n;var o=(t-e)/2;return Do(nr(o),r)+n+Do(Xt(o),r)},Er.padEnd=function(n,t,r){n=cc(n);var e=(t=ec(t))?Vt(n):0;return t&&e<t?n+Do(t-e,r):n},Er.padStart=function(n,t,r){n=cc(n);var e=(t=ec(t))?Vt(n):0;return t&&e<t?Do(t-e,r)+n:n},Er.parseInt=function(n,t,r){return r||null==t?t=0:t&&(t=+t),fr(cc(n).replace(H,""),t||0)},Er.random=function(n,t,r){if(r&&"boolean"!=typeof r&&au(n,t,r)&&(t=r=void 0),void 0===r&&("boolean"==typeof t?(r=t,t=void 0):"boolean"==typeof n&&(r=n,n=void 0)),void 0===n&&void 0===t?(n=0,t=1):(n=rc(n),void 0===t?(t=n,n=0):t=rc(t)),n>t){var e=n;n=t,t=e}if(r||n%1||t%1){var o=lr();return cr(n+o*(t-n+qn("1e-"+((o+"").length-1))),t)}return Pe(n,t)},Er.reduce=function(n,t,r){var e=Di(n)?_t:Et,o=arguments.length<3;return e(n,Jo(t,4),r,o,ne)},Er.reduceRight=function(n,t,r){var e=Di(n)?gt:Et,o=arguments.length<3;return e(n,Jo(t,4),r,o,te)},Er.repeat=function(n,t,r){return t=(r?au(n,t,r):void 0===t)?1:ec(t),Te(cc(n),t)},Er.replace=function(){var n=arguments,t=cc(n[0]);return n.length<3?t:t.replace(n[1],n[2])},Er.result=function(n,t,r){var e=-1,o=(t=co(t,n)).length;for(o||(o=1,n=void 0);++e<o;){var u=null==n?void 0:n[ku(t[e])];void 0===u&&(e=o,u=r),n=Fi(u)?u.call(n):u}return n},Er.round=va,Er.runInContext=n,Er.sample=function(n){return(Di(n)?Wr:We)(n)},Er.size=function(n){if(null==n)return 0;if(zi(n))return Yi(n)?Vt(n):n.length;var t=eu(n);return t==p||t==b?n.size:je(n).length},Er.snakeCase=Pc,Er.some=function(n,t,r){var e=Di(n)?yt:Ve;return r&&au(n,t,r)&&(t=void 0),e(n,Jo(t,3))},Er.sortedIndex=function(n,t){return Ze(n,t)},Er.sortedIndexBy=function(n,t,r){return Ge(n,t,Jo(r,2))},Er.sortedIndexOf=function(n,t){var r=null==n?0:n.length;if(r){var e=Ze(n,t);if(e<r&&Oi(n[e],t))return e}return-1},Er.sortedLastIndex=function(n,t){return Ze(n,t,!0)},Er.sortedLastIndexBy=function(n,t,r){return Ge(n,t,Jo(r,2),!0)},Er.sortedLastIndexOf=function(n,t){if(null==n?0:n.length){var r=Ze(n,t,!0)-1;if(Oi(n[r],t))return r}return-1},Er.startCase=Tc,Er.startsWith=function(n,t,r){return n=cc(n),r=null==r?0:Hr(ec(r),0,n.length),t=Je(t),n.slice(r,r+t.length)==t},Er.subtract=da,Er.sum=function(n){return n&&n.length?Ot(n,Vc):0},Er.sumBy=function(n,t){return n&&n.length?Ot(n,Jo(t,2)):0},Er.template=function(n,t,r){var e=Er.templateSettings;r&&au(n,t,r)&&(t=void 0),n=cc(n),t=lc({},t,e,Mo);var o,u,i=lc({},t.imports,e.imports,Mo),c=mc(i),a=Bt(i,c),f=0,l=t.interpolate||sn,s="__p += '",v=gn((t.escape||sn).source+"|"+l.source+"|"+(l===N?rn:sn).source+"|"+(t.evaluate||sn).source+"|$","g"),d="//# sourceURL="+(Cn.call(t,"sourceURL")?(t.sourceURL+"").replace(/[\r\n]/g," "):"lodash.templateSources["+ ++Fn+"]")+"\n";n.replace(v,(function(t,r,e,i,c,a){return e||(e=i),s+=n.slice(f,a).replace(vn,Wt),r&&(o=!0,s+="' +\n__e("+r+") +\n'"),c&&(u=!0,s+="';\n"+c+";\n__p += '"),e&&(s+="' +\n((__t = ("+e+")) == null ? '' : __t) +\n'"),f=a+t.length,t})),s+="';\n";var h=Cn.call(t,"variable")&&t.variable;h||(s="with (obj) {\n"+s+"\n}\n"),s=(u?s.replace(D,""):s).replace(U,"$1").replace(z,"$1;"),s="function("+(h||"obj")+") {\n"+(h?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(u?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+s+"return __p\n}";var p=Mc((function(){return hn(c,d+"return "+s).apply(void 0,a)}));if(p.source=s,Wi(p))throw p;return p},Er.times=function(n,t){if((n=ec(n))<1||n>9007199254740991)return[];var r=4294967295,e=cr(n,4294967295);n-=4294967295;for(var o=Rt(e,t=Jo(t));++r<n;)t(r);return o},Er.toFinite=rc,Er.toInteger=ec,Er.toLength=oc,Er.toLower=function(n){return cc(n).toLowerCase()},Er.toNumber=uc,Er.toSafeInteger=function(n){return n?Hr(ec(n),-9007199254740991,9007199254740991):0===n?n:0},Er.toString=cc,Er.toUpper=function(n){return cc(n).toUpperCase()},Er.trim=function(n,t,r){if((n=cc(n))&&(r||void 0===t))return n.replace(G,"");if(!n||!(t=Je(t)))return n;var e=Zt(n),o=Zt(t);return fo(e,Ut(e,o),zt(e,o)+1).join("")},Er.trimEnd=function(n,t,r){if((n=cc(n))&&(r||void 0===t))return n.replace(Y,"");if(!n||!(t=Je(t)))return n;var e=Zt(n);return fo(e,0,zt(e,Zt(t))+1).join("")},Er.trimStart=function(n,t,r){if((n=cc(n))&&(r||void 0===t))return n.replace(H,"");if(!n||!(t=Je(t)))return n;var e=Zt(n);return fo(e,Ut(e,Zt(t))).join("")},Er.truncate=function(n,t){var r=30,e="...";if($i(t)){var o="separator"in t?t.separator:o;r="length"in t?ec(t.length):r,e="omission"in t?Je(t.omission):e}var u=(n=cc(n)).length;if(Ft(n)){var i=Zt(n);u=i.length}if(r>=u)return n;var c=r-Vt(e);if(c<1)return e;var a=i?fo(i,0,c).join(""):n.slice(0,c);if(void 0===o)return a+e;if(i&&(c+=a.length-c),Gi(o)){if(n.slice(c).search(o)){var f,l=a;for(o.global||(o=gn(o.source,cc(en.exec(o))+"g")),o.lastIndex=0;f=o.exec(l);)var s=f.index;a=a.slice(0,void 0===s?c:s)}}else if(n.indexOf(Je(o),c)!=c){var v=a.lastIndexOf(o);v>-1&&(a=a.slice(0,v))}return a+e},Er.unescape=function(n){return(n=cc(n))&&L.test(n)?n.replace(P,Gt):n},Er.uniqueId=function(n){var t=++kn;return cc(n)+t},Er.upperCase=Lc,Er.upperFirst=Wc,Er.each=ci,Er.eachRight=ai,Er.first=zu,Yc(Er,(la={},ae(Er,(function(n,t){Cn.call(Er.prototype,t)||(la[t]=n)})),la),{chain:!1}),Er.VERSION="4.17.15",at(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(n){Er[n].placeholder=Er})),at(["drop","take"],(function(n,t){Br.prototype[n]=function(r){r=void 0===r?1:ir(ec(r),0);var e=this.__filtered__&&!t?new Br(this):this.clone();return e.__filtered__?e.__takeCount__=cr(r,e.__takeCount__):e.__views__.push({size:cr(r,4294967295),type:n+(e.__dir__<0?"Right":"")}),e},Br.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}})),at(["filter","map","takeWhile"],(function(n,t){var r=t+1,e=1==r||3==r;Br.prototype[n]=function(n){var t=this.clone();return t.__iteratees__.push({iteratee:Jo(n,3),type:r}),t.__filtered__=t.__filtered__||e,t}})),at(["head","last"],(function(n,t){var r="take"+(t?"Right":"");Br.prototype[n]=function(){return this[r](1).value()[0]}})),at(["initial","tail"],(function(n,t){var r="drop"+(t?"":"Right");Br.prototype[n]=function(){return this.__filtered__?new Br(this):this[r](1)}})),Br.prototype.compact=function(){return this.filter(Vc)},Br.prototype.find=function(n){return this.filter(n).head()},Br.prototype.findLast=function(n){return this.reverse().find(n)},Br.prototype.invokeMap=Le((function(n,t){return"function"==typeof n?new Br(this):this.map((function(r){return ye(r,n,t)}))})),Br.prototype.reject=function(n){return this.filter(ji(Jo(n)))},Br.prototype.slice=function(n,t){n=ec(n);var r=this;return r.__filtered__&&(n>0||t<0)?new Br(r):(n<0?r=r.takeRight(-n):n&&(r=r.drop(n)),void 0!==t&&(r=(t=ec(t))<0?r.dropRight(-t):r.take(t-n)),r)},Br.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Br.prototype.toArray=function(){return this.take(4294967295)},ae(Br.prototype,(function(n,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),e=/^(?:head|last)$/.test(t),o=Er[e?"take"+("last"==t?"Right":""):t],u=e||/^find/.test(t);o&&(Er.prototype[t]=function(){var t=this.__wrapped__,i=e?[1]:arguments,c=t instanceof Br,a=i[0],f=c||Di(t),l=function(n){var t=o.apply(Er,pt([n],i));return e&&s?t[0]:t};f&&r&&"function"==typeof a&&1!=a.length&&(c=f=!1);var s=this.__chain__,v=!!this.__actions__.length,d=u&&!s,h=c&&!v;if(!u&&f){t=h?t:new Br(this);var p=n.apply(t,i);return p.__actions__.push({func:ri,args:[l],thisArg:void 0}),new Ir(p,s)}return d&&h?n.apply(this,i):(p=this.thru(l),d?e?p.value()[0]:p.value():p)})})),at(["pop","push","shift","sort","splice","unshift"],(function(n){var t=mn[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|shift)$/.test(n);Er.prototype[n]=function(){var n=arguments;if(e&&!this.__chain__){var o=this.value();return t.apply(Di(o)?o:[],n)}return this[r]((function(r){return t.apply(Di(r)?r:[],n)}))}})),ae(Br.prototype,(function(n,t){var r=Er[t];if(r){var e=r.name+"";Cn.call(br,e)||(br[e]=[]),br[e].push({name:t,func:r})}})),br[Oo(void 0,2).name]=[{name:"wrapper",func:void 0}],Br.prototype.clone=function(){var n=new Br(this.__wrapped__);return n.__actions__=yo(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=yo(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=yo(this.__views__),n},Br.prototype.reverse=function(){if(this.__filtered__){var n=new Br(this);n.__dir__=-1,n.__filtered__=!0}else(n=this.clone()).__dir__*=-1;return n},Br.prototype.value=function(){var n=this.__wrapped__.value(),t=this.__dir__,r=Di(n),e=t<0,o=r?n.length:0,u=function(n,t,r){var e=-1,o=r.length;for(;++e<o;){var u=r[e],i=u.size;switch(u.type){case"drop":n+=i;break;case"dropRight":t-=i;break;case"take":t=cr(t,n+i);break;case"takeRight":n=ir(n,t-i)}}return{start:n,end:t}}(0,o,this.__views__),i=u.start,c=u.end,a=c-i,f=e?c:i-1,l=this.__iteratees__,s=l.length,v=0,d=cr(a,this.__takeCount__);if(!r||!e&&o==a&&d==a)return ro(n,this.__actions__);var h=[];n:for(;a--&&v<d;){for(var p=-1,_=n[f+=t];++p<s;){var g=l[p],y=g.iteratee,b=g.type,m=y(_);if(2==b)_=m;else if(!m){if(1==b)continue n;break n}}h[v++]=_}return h},Er.prototype.at=ei,Er.prototype.chain=function(){return ti(this)},Er.prototype.commit=function(){return new Ir(this.value(),this.__chain__)},Er.prototype.next=function(){void 0===this.__values__&&(this.__values__=tc(this.value()));var n=this.__index__>=this.__values__.length;return{done:n,value:n?void 0:this.__values__[this.__index__++]}},Er.prototype.plant=function(n){for(var t,r=this;r instanceof Rr;){var e=Eu(r);e.__index__=0,e.__values__=void 0,t?o.__wrapped__=e:t=e;var o=e;r=r.__wrapped__}return o.__wrapped__=n,t},Er.prototype.reverse=function(){var n=this.__wrapped__;if(n instanceof Br){var t=n;return this.__actions__.length&&(t=new Br(this)),(t=t.reverse()).__actions__.push({func:ri,args:[$u],thisArg:void 0}),new Ir(t,this.__chain__)}return this.thru($u)},Er.prototype.toJSON=Er.prototype.valueOf=Er.prototype.value=function(){return ro(this.__wrapped__,this.__actions__)},Er.prototype.first=Er.prototype.head,Xn&&(Er.prototype[Xn]=function(){return this}),Er}();Gn._=Ht,void 0===(o=function(){return Ht}.call(t,r,t,e))||(e.exports=o)}).call(this)}).call(this,r(1),r(4)(n))},function(n,t){n.exports=function(n){return n.webpackPolyfill||(n.deprecate=function(){},n.paths=[],n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),n.webpackPolyfill=1),n}},function(n,t,r){"use strict";r.r(t),r.d(t,"track",(function(){return D}));var e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),o=new Uint8Array(16);function u(){if(!e)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return e(o)}for(var i=[],c=0;c<256;++c)i[c]=(c+256).toString(16).substr(1);var a=function(n,t){var r=t||0,e=i;return[e[n[r++]],e[n[r++]],e[n[r++]],e[n[r++]],"-",e[n[r++]],e[n[r++]],"-",e[n[r++]],e[n[r++]],"-",e[n[r++]],e[n[r++]],"-",e[n[r++]],e[n[r++]],e[n[r++]],e[n[r++]],e[n[r++]],e[n[r++]]].join("")};var f=function(n,t,r){var e=t&&r||0;"string"==typeof n&&(t="binary"===n?new Array(16):null,n=null);var o=(n=n||{}).random||(n.rng||u)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t)for(var i=0;i<16;++i)t[e+i]=o[i];return t||a(o)},l=r(0),s=r(2),v=r.n(s);r(3);function d(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.push.apply(r,e)}return r}function h(n){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){p(n,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))}))}return n}function p(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}function _(n){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var g="object"===("undefined"==typeof window?"undefined":_(window))&&"object"===("undefined"==typeof navigator?"undefined":_(navigator))&&"object"===("undefined"==typeof localStorage?"undefined":_(localStorage))&&"object"===("undefined"==typeof document?"undefined":_(document))&&"string"==typeof document.cookie,y={_v:"v0",baseUrl:null,trackerId:null,cid:null,tcid:null,token:null,isDebug:!1},b=function(n,t,r){var e=new Date;e.setTime(e.getTime()+24*r*60*60*1e3);var o="expires="+e.toUTCString();document.cookie=n+"="+t+";"+o+";path=/"},m=function(n){for(var t=n+"=",r=decodeURIComponent(document.cookie).split(";"),e=0;e<r.length;e++){for(var o=r[e];" "===o.charAt(0);)o=o.substring(1);if(0===o.indexOf(t))return o.substring(t.length,o.length)}return""};function w(){try{return f()}catch(n){return null}}var x=function(n){return"_lrtrack_"+n},A={tcid:x("tcid"),location:x("location"),cid:x("cid"),gcid:x("gcid")},j=function(n,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{cookie:function(){}};g||(r.cookies=h(h({},r.cookies),{},p({},n,t)))},C=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{cookies:{}};return g?m(n):t.cookies[n]},k=function(n,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{cookie:function(){}};g?b(n,t):r.cookie(n,t,{expires:new Date(Date.now()+1314e6),encode:String})},S=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{get:function(){},cookies:{}},t=arguments.length>1?arguments[1]:void 0,r=g?window.location.href:n.protocol+"://"+n.get("host")+n.originalUrl,e=new URL(r),o=e.searchParams.get("tcid");y.tcid=o||C(A.tcid,n)||w(),k(A.tcid,y.tcid,t),j(A.tcid,y.tcid,t)},E=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0;if(y.cid=C(A.cid,t)||null,n&&n!==y.cid)return y.cid=n,k(A.cid,y.cid,r),D(A.cid,{cid:n})},O=function(n){y.token=n},R=function(n,t){if(!n)throw"storeSet key required";return B("store/set",h({_namespace:y.trackerId,_key:n},t))},I=function(n){if(!n)throw"storeGet key required";return B("store/get",{_namespace:y.trackerId,_key:n})},B=function(n,t){return y.isDebug&&console.info("LRTRACK ".concat(n," on:"),t),v()("".concat(y.baseUrl,"/").concat("v0","/").concat(n,"?").concat(l.Base64.encode(JSON.stringify(t))),{method:"GET",headers:{Authorization:y.token?"Bearer ".concat(y.token):"Basic ".concat(l.Base64.encode("statistic:statistic"))}}).then((function(t){return y.isDebug&&console.info("LRTRACK ".concat(n," with status:"),t.status),t}))},D=function(n,t){return B("track",h({_tracker_id:y.trackerId,_tcid:y.tcid,_cid:y.cid,_event:n,resolution:"".concat(window.innerWidth,"x").concat(window.innerHeight)},t))},U=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=C(A.location,n),e="";if(g)e=window.location.href;else{var o,u=null==n||null===(o=n.query)||void 0===o?void 0:o.ampSourceUrl;e=u||n.protocol+"://"+n.get("host")+n.originalUrl}return j(A.location,e,t),r&&r===e?Promise.reject("location the same").catch((function(n){return n})):(k(A.location,e,t),D(A.location,{location:e,useragent:g?navigator.userAgent:n.get("User-Agent")},n))};var z=function(n,t){var r=function(n,t){var r=function(n){if(n)return/^GA\d\./.test(n)?n.replace(/^GA\d\.\d\./,""):/^amp-/.test(n)?n.replace(/^amp-/,""):n;var r="".concat(String(Math.random()).slice(2,15),".").concat(String(Date.now()));return t.cookie("_ga","GA1.2.".concat(r),{expires:new Date(Date.now()+1314e6),encode:String}),r};if(!g)return r(n.cookies._ga);var e=m("_ga");return e?r(e):void 0}(n,t);if(r){var e=C(A.gcid,n);return j(A.gcid,r,t),e&&e===r?void 0:(k(A.gcid,r,t),D(A.gcid,{gcid:r}))}},P=function(n,t,r){return D("trackValues",{location:window.location.href,v:"v1",_context:Object.assign(r || {}, { userAgent: window.navigator.userAgent }),_values:p({},n,t)})},T=function(n,t,r){var e=r.context,o=void 0===e?null:e,u=r.predicat,i=void 0===u?null:u;(i&&i()||!i)&&P(n,t,o)},L=function(n){var t=n.useEffect;return function(n,r,e){var o=e.context,u=void 0===o?null:o,i=e.predicat,c=void 0===i?null:i;t((function(){var t;return(c&&c()||!c)&&(t=setTimeout((function(){P(n,r,u)}),1e3)),function(){return clearTimeout(t)}}),[r])}},W=function(n,t,r){var e=r.context,o=void 0===e?null:e,u=r.predicat,i=void 0===u?null:u;return function(){(i&&i()||!i)&&D("trackClicks",{location:window.location.href,v:"v1",_context:o||{},_values:{target:t}}),"function"==typeof n&&n.call(arguments)}};t.default=function(n){var t=n.trackerId,r=n.baseUrl,e=n.isDebug;if(!t)throw"trackerId required";if(!r)throw"baseUrl required";return y.isDebug=e,function(n){y.trackerId=n}(t),function(n){y.baseUrl=n}(r),S(),E(),O(),{utils:{getStorageKey:x,storageGetItem:C,storageSetItem:k},config:{setTcid:S,setCid:E,setToken:O},store:{set:R,get:I},metrics:{trackLocation:U,trackGoogleClientId:z,getUseTrackValues:L,trackClicks:W,trackValues:T},track:D}}}])}));


(function() {
if (globalThis.tracker || typeof lrtrackjs === 'undefined') { return; }

//ADD STATISTIC lrtrack
let getTracker = lrtrackjs.default;
globalThis.tracker = getTracker({
  trackerId: "55c35f469553770fe8a3c66d",
  baseUrl: "https://statistic.dsh-agency.com",
});

const storageGetItem = (key) =>
  tracker.utils.storageGetItem(tracker.utils.getStorageKey(key));

const storageSetItem = (key, payload) => {
  tracker.utils.storageSetItem(tracker.utils.getStorageKey(key), payload);
};

let trackValues = globalThis.trackValues = tracker.metrics.trackValues;
globalThis.tcid = tracker.utils.storageGetItem(tracker.utils.getStorageKey('tcid'));

globalThis.trackClicks = tracker.metrics.trackClicks;

const previousLocation = storageGetItem('prev_location');
const currentLocation = window.location.href;

if (previousLocation !== currentLocation) {
  storageSetItem('prev_location', currentLocation);

  //"_event":"trackValues"
  trackValues('stage', 'landing', {
    context: {
      moved_from: previousLocation,
      userAgent: window.navigator.userAgent,
    },
  });
}

//"_event":"_lrtrack_location"
tracker.metrics.trackLocation().then(() => {
  tracker.metrics.trackGoogleClientId();
});

//END STATISTIC lrtrack

const { pathname, search, host } = window.location;

if (!sessionStorage.getItem('query')) {
    sessionStorage.setItem(
      'query',
      JSON.stringify({
        path: host + pathname,
        search: search.substring(1).replace(/\+/g, '%2B'),
      })
    );
}
})();


(function() {
'use strict';

// Check if already loaded
if (window.TextBackLoaded) { return; }
window.TextBackLoaded = true;


// Default configuration
let config = {
  phoneValidateUrl: 'https://nerdifyit.com/op/api/v3/phone_validate',
  isExistsUrl: 'https://nerdifyit.com/api/v1/number/is_exists',
  getUserDataUrl: 'https://ana.dsh-agency.com/ipinfo/me?geo=1',
  createLeadUrl: 'https://nerdifyit.com/api/v3/users/client/new',
  textbackUrl: 'https://connect.dsh-agency.com/api/v1/external/messages/textback',
  appPhone: '+17606182740',
  landingGuid: 'gonerdify_com_blog',
  lrtrackerId: '55c35f469553770fe8a3c66d'
};

// CSS Styles
const css = `
:root {
  --tb-primary: #24A652;
  --tb-primary-hover: #1e8a44;
  --tb-error: #ff3363;
  --tb-success: #24A652;
  --tb-text-muted: #797C91;
  --tb-bg: #fff;
  --tb-radius-lg: 10px;
}

.textback *,
.textback *::before,
.textback *::after {
  box-sizing: border-box;
}

.textback__consent {
  margin-bottom: 12px;
}

.consent {
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 4px;
  font-size: 12px;
  color: var(--tb-text-muted);
  line-height: 1.5;
  text-align: left;
  text-align-last: left;
}

.consent__control {
  appearance: auto;
  width: 16px;
  height: 16px;
  padding: 0;
  margin: 0;
  cursor: pointer;
  flex-shrink: 0;
  accent-color: var(--tb-primary);
  opacity: 0.8;
  border: 1px solid var(--tb-text-muted);
  border-radius: 4px;
}

.consent__link {
  color: inherit;
  text-decoration: underline;
}

.textback[data-error] .input-wrapper {
  background-color: var(--tb-error-bg);
  border-color: var(--tb-error);
}

.textback[data-error] .phone-input {
  color: var(--tb-error);
}

.textback[data-error] .textback__message--error {
  display: block;
}

.textback[data-submitted] .textback__message--success {
  display: block;
}

.input-wrapper {
  height: 50px;
  margin-bottom: 10px;    
  border-radius: var(--tb-radius-lg);
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  padding: 0 15px 0 20px;
  background-color: var(--tb-bg);
}

.phone-input {
  display: block;
  font-family: inherit;
  font-size: 20px;
  letter-spacing: 0.27px;
  color: #000;
  background: transparent;
  padding: 0 0 0 25px;
  width: 100%;
  height: 100%;
  text-transform: uppercase;
  border: none;
  outline: none;
}

.submit-button {
  font-size: 20px;
  font-family: inherit;
  display: block;
  text-align: center;
  background-color: var(--tb-primary);
  padding: 15px;
  color: var(--tb-bg);
  font-weight: bold;
  border-radius: var(--tb-radius-lg);
  overflow: hidden;
  transition: background-color 0.3s ease;
  border: none;
  cursor: pointer;
  will-change: transform;
}

.submit-button:disabled {
  opacity: 0.5;
}

.submit-button:not(:disabled):hover {
  background-color: var(--tb-primary-hover);
}

.submit-button--block {
  margin-bottom: 12px;
  width: 100%;
}
  
.submit-button--inline {
  display: none;
}  

.textback__message {
  display: none;
  margin-bottom: 12px;
  font-size: 14px;
  text-align: center;
  font-weight: bold;
}

.textback__message--error {
  color: var(--tb-error);
}

.textback__message--success {
  color: var(--tb-success);
}

.textback__flag {
  display: flex;
  width: 24px;
  aspect-ratio: 1;
  flex-shrink: 0;
}

/* Ripple Effect */
.ripple-js {
  overflow: hidden;
  will-change: transform;
}

.ripple-js .ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);
  transform: scale(0);
  animation: ripple-animation 1000ms linear;
  pointer-events: none;
}

@keyframes ripple-animation {
  to {
    transform: scale3d(4, 4, 1);
    opacity: 0;
  }
}

@media (min-width: 900px) {
  .input-wrapper {
    height: 66px;
  }

  .submit-button--inline {
    position: relative;
    display: inline-block;
  }

  .submit-button--block {
    display: none;
  }    
}
`;

// Masked Phone Number Input Component
class MaskedPhoneNumberInput extends HTMLElement {
  constructor() {
    super();
    // data-live-verification='{"mode": "live", "delay": 1500}'
    // data-live-verification='{"mode": "off"}'>
    this.verification = JSON.parse(this.dataset.liveVerification || '{"mode": "off"}');
  }

  connectedCallback() {
    const input = this.input = this.querySelector('input');
    input.valid = !input.required;
    this.pattern = input.placeholder;
    this.mask = input.dataset.mask;
    this.prefixLength = this.pattern.indexOf(this.mask);
    const prefixStr = this.pattern.slice(0, this.prefixLength);
    this.prefixStrRe = new RegExp(`^${escapeRegex(this.getLeadingPlusAndDigits(prefixStr))}`);
    const prefixDigitsLength = this.getDigits(this.pattern).length;
    const missingPartLength = this.pattern.split('').filter(c => c === this.mask).length
    this.maxLength = prefixDigitsLength + missingPartLength;
    
    input.onbeforeinput = (event) => {
      const { mask, prefixLength, lastkey, caretPosition } = this;
      const inputValue = input.value;
      const isDigitKey = this.isDigitKey = this.isDigit(lastkey);
      const isDeleteOrBackspaceKey = this.isDeleteOrBackspace(lastkey);
      const isInsidePrefix = this.isInsidePrefix = caretPosition < prefixLength;
      const hasPlaceForDigit = inputValue.indexOf(mask) !== -1;

      if ((isDigitKey && !hasPlaceForDigit) || (isDeleteOrBackspaceKey && isInsidePrefix)) {
        this.stopProcessing(event);
      }
      
      this.prevValue = this.input.value;
      this.nextWasDigitOrMask = new RegExp(`\\d|${mask}`).test(inputValue[caretPosition]);      
    }

    input.oninput = ({ target: { value } }) => {
      const { prefixLength, lastkey, prevValue, isInsidePrefix, isDigitKey } = this;
      if (isInsidePrefix && isDigitKey) {
        value = [prevValue.slice(0, prefixLength), lastkey, prevValue.slice(prefixLength)].join('');
        this.caretPosition = prefixLength;
      }
      this.formatAndValidate(this.removePrefixAndGetDigits(value));
    };

    input.onblur = () => {
      if (this.input.value === this.pattern) {
        this.input.value = '';
      }
    }

    input.onfocus = () => {
      if (!this.input.value.length) { this.input.value = this.pattern; }
      this.input.removeAttribute("valid");
    };

    input.onpaste = this.pasteHandler.bind(this);

    input.onkeydown = this.saveKeyAndCaretPosition.bind(this);

    function escapeRegex(string) {
      return string.replace(/[/\-\\^$*+?.()|[\]{}]/g, '\\$&');
    }
  }

  stopProcessing(event) {
    this.lastkey = undefined;
    event.preventDefault();
    event.stopPropagation();
  }

  pasteHandler(event) {
    event.preventDefault();
    const paste = (event.clipboardData || window.clipboardData).getData("text");
    this.formatAndValidate(this.removePrefixAndGetDigits(paste));
  }

  removePrefixAndGetDigits(string) {
    return this.getDigits(this.getLeadingPlusAndDigits(string).replace(this.prefixStrRe, ''));
  }

  getLeadingPlusAndDigits(string) {
    const hasLeadingPlus = string.trim().startsWith('+');
    const digits = string.replace(/\D/g, '');
    return (hasLeadingPlus ? '+' : '') + digits;
  }

  formatAndValidate(digits) {
    this.input.value = this.format(digits);
    this.input.valid = !this.input.required || this.validate();
    this.setCaretPosition();
    
    const { mode, delay } = this.verification;
    if (mode === "live") {
      clearTimeout(this.timeoutID);
      this.timeoutID = setTimeout(() => this.toggleValidationStyle(), this.input.valid ? 0 : delay);
    }
  }

  saveKeyAndCaretPosition(event) {
    this.lastkey = event.key?.toLowerCase();
    this.caretPosition = this.input.selectionStart;
  }

  setCaretPosition() {
    const { caretPosition, isInsidePrefix, nextWasDigitOrMask, lastkey } = this;
    const indexOfLastDigit = this.getLastDigitIndex();
    let afterInputCaretPosition;

    if (lastkey === "delete") {
      afterInputCaretPosition = caretPosition;
    }
    else if (lastkey === "backspace") {
      const caretPositionM1 = caretPosition - 1;
      afterInputCaretPosition = indexOfLastDigit > caretPositionM1 ? caretPositionM1 : this.getLastDigitIndex(caretPosition) + 1;     
    }
    else {
      const indexOfMask = this.getMaskIndex();
      const nextDigitIndex = this.getDigitIndex(caretPosition + 1);
      const caretShift = +!(isInsidePrefix || nextWasDigitOrMask);
      afterInputCaretPosition = caretShift + (indexOfLastDigit > caretPosition ? nextDigitIndex: indexOfMask);
    }
    this.input.setSelectionRange(afterInputCaretPosition, afterInputCaretPosition);
    this.lastkey = undefined;
  }  

  toggleValidationStyle() {    
    this.input.setAttribute('valid', this.input.valid);
  }

  validate(number = this.input.value) {
    return this.getDigits(number).length === this.maxLength;
  }    

  format(digits) {
    let pattern = this.pattern;
    const mask = this.mask;

    for (const digit of digits.split('')) {
      pattern = pattern.replace(mask, digit);
    }
    return pattern;
  }

  getMaskIndex() {
    return this.input.value.indexOf(this.mask);
  }

  getDigitIndex(from = 0) {
    const found = this.input.value.slice(from).search(/\d/);    
    return found === -1 ? found : from + found;
  }

  getLastDigitIndex(from) {
    const value = this.input.value;
    from = from ?? value.length;
    const lastDigit = this.getDigits(value).split('').pop();
    return value.lastIndexOf(lastDigit, from);
  }

  getDigits(value = this.input.value) {
    const notDigit = /\D/g;
    return value.replace(notDigit, '');    
  }

  isDeleteOrBackspace(key) {
    return (/delete|backspace/).test(key)
  }

  isDigit(key) {
    return (/\d/).test(key);
  }

  get number() {
    return `+${this.getDigits()}`
  }

  get valid() {
    this.input.setAttribute('valid', this.input.valid);
    return this.input.valid;
  }
}

// Utility functions
const getCookie = (cname) => {
  let name = cname + '=';
  let decodedCookie = '';

  try {
    decodedCookie = decodeURIComponent(document.cookie);
  } catch (error) {
    console.error("decodedCookie:", error);
  }

  let ca = decodedCookie.split(';');

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};

const getGtagClientId = () => {
  function getCookieInternal(name) {
    const isClient = typeof window !== 'undefined';
    let matches =
      isClient &&
      document.cookie.match(
        new RegExp(
          '(?:^|; )' +
          name.replace(/([?$*|{}\\[\\]\\\\()+^])/g, '\\\\$1') +
          '=([^;]*)'
        )
      );
    let gtagClientId;
    try {
      gtagClientId = decodeURIComponent(matches[1]);
    } catch (error) {
      console.error("getGtagClientId:", error);
    }
    return gtagClientId;
  }

  const _ga = getCookieInternal('_ga');
  if (_ga) {
    if (/^GA\\d\\./.test(_ga)) {
      return _ga.replace(/^GA\\d\\.\\d\\./, '');
    }
    if (/^amp-/.test(_ga)) {
      return _ga.replace(/^amp-/, '');
    }
    return _ga;
  }

  return false;
};

const getSessionStorageQuery = () => {
  const query = JSON.parse(sessionStorage.getItem('query')) || {
    path: '',
    search: '',
  };

  const clientId = getGtagClientId();
  const tcid = window.tcid;

  const gClientQuery = clientId ? `&ga_client_id=${clientId}` : '';
  const tcidQuery = tcid ? `&tcid=${tcid}` : '';

  const gaSessionId = getCookie('_ga_session_id') || '';
  const gaSessionIdQuery = gaSessionId ? `&ga_session_id=${gaSessionId}` : '';

  let search = `${query.search}${gClientQuery}${gaSessionIdQuery}${tcidQuery}`;
  if (search.startsWith('&')) {
    search = search.substring(1);
  }

  return {
    path: query.path,
    search: search,
  };
};

const parseQuery = (search) => {
  const query = {};
  try {
    const pairs = (search[0] === '?' ? search.substr(1) : search).split('&');
    for (let i = 0; i < pairs.length; i++) {
      const pair = pairs[i].split('=');
      query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
  } catch (error) {
    console.error("parseQuery:", error);
  }
  return query;
};

// API functions
async function phoneValidate(phone) {
  const response = await fetch(config.phoneValidateUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ phone })
  });
  if (!response.ok) throw new Error('Phone validation failed');
  return response.json();
}

async function checkLeadExists(phone) {
  const response = await fetch(config.isExistsUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ phone, get_id: true })
  });
  if (!response.ok) throw new Error('Failed to check lead existence');
  return response.json();
}

async function createLead(data) {
  const response = await fetch(config.createLeadUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!response.ok) throw new Error('Failed to create lead');
  return response.json();
}

async function getUserData() {
  const response = await fetch(config.getUserDataUrl, {
    method: 'GET',
  });
  if (!response.ok) throw new Error('Failed to fetch user data');
  return response.json();
}

async function sentTextBack(data) {
  const response = await fetch(config.textbackUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!response.ok) throw new Error('Failed to send text back');
  return response.json();
}

const getConsents = (checkboxes) => {
  const consents = {};
  checkboxes.forEach(cb => consents[cb.name] = cb.checked);
  return consents;
};

// Form submission handler
async function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.target;

  if (form.dataset.submitted) { return; }

  if (!form.refs.phone.valid) {
    form.dataset.error = true;
    return;
  }

  form.refs.submits.forEach(b => b.disabled = true);
  form.refs.consents.forEach(c => c.disabled = true);

  try {
    // Step 1: Phone number validation
    const phoneResponse = await phoneValidate(form.refs.phone.number);
    if (!phoneResponse.ok) {
      form.dataset.error = true;
      form.refs.submits.forEach(b => b.disabled = false);
      form.refs.consents.forEach(c => c.disabled = false);
      return;
    } else {
      form.refs.submits.forEach(b => b.textContent = "Sending SMS...");
    }

    // Step 2: Check for lead existence
    const currentUrl = window.location.href;
    // const { search } = window.location;
    const existsData = await checkLeadExists(form.refs.phone.number);

    if (existsData.result) {
      // Lead exists, send textback
      if (globalThis.tracker && globalThis.tracker.config && globalThis.tracker.config.setCid) {
        globalThis.tracker.config.setCid(existsData?._id);
      }
      if (window.trackValues) {
        window.trackValues('stage', 'textbackSentSuccessfully', {
          context: {
            userAgent: window.navigator.userAgent,
          }
        });
      }

      const textbackData = {
        to_num: form.refs.phone.number,
        landing_guid: config.landingGuid,
        source_url: currentUrl,
        client_id: existsData._id,
        consents: getConsents(form.refs.consents),
      };

      // Step 3.1: If the lead exists, then send the request /textback
      const textbackResponse = await sentTextBack(textbackData);

      if (!textbackResponse.ok) {
        form.dataset.error = true;
        form.refs.submits.forEach(b => b.disabled = false);
        form.refs.consents.forEach(c => c.disabled = false);
      } else {
        form.dataset.submitted = true;
      }

    } else {
      //Lead does not exist, fetch user data and create a new lead

      // Step 4.1: fetch user data
      const userData = await getUserData();
      if (userData) {
        const query = getSessionStorageQuery();

        const data = {
          phone: form.refs.phone.number,
          phone_ref: config.appPhone,
          timezone_str: Intl.DateTimeFormat().resolvedOptions().timeZone,
          country: userData?.country_name,
          geoip_country_code: userData?.country_code,
          geoip_country_name: userData?.country_name,
          profile_landing: query?.path,
          profile_landing_query: parseQuery(query?.search),
          host: config.lrtrackerId,
          ip: userData?.ip_address,
          referral_info: 'Direct',

          textback_options: {
            to_num: form.refs.phone.number,
            landing_guid: config.landingGuid,
            source_url: currentUrl,
            consents: getConsents(form.refs.consents),
          },
        };

        const createLeadData = await createLead(data);
        if (createLeadData?._id) {
          if (globalThis.tracker && globalThis.tracker.config && globalThis.tracker.config.setCid) {
            globalThis.tracker.config.setCid(createLeadData?._id);
          }
          if (window.trackValues) {
            window.trackValues('stage', 'textbackSentSuccessfully', {
              context: {
                userAgent: window.navigator.userAgent,
              },
            });
          }

          form.dataset.submitted = true;
        }
      }
    }
  } catch (error) {
    form.dataset.error = true;
    console.log(error.message);
  } finally {
    const text = form.dataset.submitted ? "Wait for SMS" : "Text me now";
    if (form.dataset.submitted) {
      form.refs.submits.forEach(b => b.textContent = text);
    }

    if (!form.dataset.submitted) {
      form.refs.submits.forEach(b => b.disabled = false);
      form.refs.consents.forEach(c => c.disabled = false);
    }
  }
}

// Ripple effect
function initRippleEffect() {
  document.querySelectorAll('.textback .ripple-js').forEach((button) => {
    button.addEventListener('click', (e) => {
      const ripple = document.createElement('span');
      ripple.className = 'ripple';

      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

      button.appendChild(ripple);

      ripple.addEventListener('animationend', () => {
        ripple.remove();
      });
    });
  });
}

// Create form HTML
function createFormHTML() {
  return `
      <form class="textback">
        <div class="textback__message textback__message--error">Looks like you have mistyped your phone number. &NewLine;Please check and re-enter it.</div>
        <div class="textback__message textback__message--success">Thanks for giving us a try.&NewLine;We'll text you in a second!</div>

        <div class="textback__consent">
          <label class="consent">
            <input class="consent__control" data-id="consent" required name="accept_terms" type="checkbox">
            <span class="consent__text">I accept the <a class="consent__link" href="/terms-and-conditions">Nerdify Terms of Service</a> and have read the <a class="consent__link" href="/privacy-policy">Nerdify Privacy Policy</a></span>
          </label>
        </div>

        <div class="input-wrapper">
          <div class="textback__flag">
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="24" height="24" preserveAspectRatio="xMidYMid meet">
              <circle style="fill:#F0F0F0;" cx="256" cy="256" r="256"/>
              <g>
                <path style="fill:#D80027;" d="M244.87,256H512c0-23.106-3.08-45.49-8.819-66.783H244.87V256z"/>
                <path style="fill:#D80027;" d="M244.87,122.435h229.556c-15.671-25.572-35.708-48.175-59.07-66.783H244.87V122.435z"/>
                <path style="fill:#D80027;" d="M256,512c60.249,0,115.626-20.824,159.356-55.652H96.644C140.374,491.176,195.751,512,256,512z"/>
                <path style="fill:#D80027;" d="M37.574,389.565h436.852c12.581-20.529,22.338-42.969,28.755-66.783H8.819
                  C15.236,346.596,24.993,369.036,37.574,389.565z"/>
              </g>
              <path style="fill:#0052B4;" d="M118.584,39.978h23.329l-21.7,15.765l8.289,25.509l-21.699-15.765L85.104,81.252l7.16-22.037
                C73.158,75.13,56.412,93.776,42.612,114.552h7.475l-13.813,10.035c-2.152,3.59-4.216,7.237-6.194,10.938l6.596,20.301l-12.306-8.941
                c-3.059,6.481-5.857,13.108-8.372,19.873l7.267,22.368h26.822l-21.7,15.765l8.289,25.509l-21.699-15.765l-12.998,9.444
                C0.678,234.537,0,245.189,0,256h256c0-141.384,0-158.052,0-256C205.428,0,158.285,14.67,118.584,39.978z M128.502,230.4
                l-21.699-15.765L85.104,230.4l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822l-21.7,15.765L128.502,230.4z
                M120.213,130.317l8.289,25.509l-21.699-15.765l-21.699,15.765l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822
                L120.213,130.317z M220.328,230.4l-21.699-15.765L176.93,230.4l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822
                l-21.7,15.765L220.328,230.4z M212.039,130.317l8.289,25.509l-21.699-15.765l-21.699,15.765l8.289-25.509l-21.7-15.765h26.822
                l8.288-25.509l8.288,25.509h26.822L212.039,130.317z M212.039,55.743l8.289,25.509l-21.699-15.765L176.93,81.252l8.289-25.509
                l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822L212.039,55.743z"/>
            </svg>
          </div>

          <masked-phone-number-input>
            <input
              type="tel"
              name="phone"
              class="phone-input"
              data-mask="X"
              placeholder="+1 (XXX) XXX - XXXX">
          </masked-phone-number-input>

          <div class="ripple-wrapper" style="margin-left: auto;">
            <button class="submit-button submit-button--inline ripple-js" type="submit" data-gacat="text-back_request" data-gaact="bottom"
              >Text me now</button>
          </div>
        </div>

        <button class="submit-button submit-button--block" type="submit" data-gacat="text-back_request" data-gaact="bottom"
          >Text me now</button>

        <div class="textback__consent">
          <label class="consent">
            <input class="consent__control" data-id="consent" name="accept_updates" type="checkbox">
            <span class="consent__text">OPTIONAL: I would like to receive newsletters and updates about the Nerdify product at the phone number provided. One message per month. Message and data rates may apply. Reply HELP for help or STOP to cancel. <a class="consent__link" href="/sms-terms-of-service">Nerdify SMS Terms of Service</a></span>
          </label>
        </div>
      </form>
  `;
}

// Initialize the embed
function initTextBackEmbed() {
  // Find all elements with data-textback attribute
  const textbackElements = document.querySelectorAll('[data-textback]');

  if (textbackElements.length === 0) {
    console.warn('No elements with data-textback attribute found');
    return;
  }

  // Inject CSS
  const styleSheet = document.createElement('style');
  styleSheet.textContent = css;
  document.head.appendChild(styleSheet);

  // Define custom element for masked phone input
  if (!customElements.get('masked-phone-number-input')) {
    customElements.define('masked-phone-number-input', MaskedPhoneNumberInput);
  }

  // Process each textback element
  textbackElements.forEach((element) => {
    // Insert form HTML
    element.innerHTML = createFormHTML();

    // Initialize form functionality
    const form = element.querySelector('form');
    if (!form) { return; }
    form.refs = {
      consents: form.querySelectorAll('input[data-id="consent"]'),
      submits: form.querySelectorAll("button[type='submit']"),
      phone: form.querySelector('masked-phone-number-input'),
    }
    form.addEventListener("submit", handleFormSubmit);
    form.addEventListener("focusin", () => form.removeAttribute("data-error"));
  });

  // Initialize ripple effects
  initRippleEffect();

  console.log('TextBack Embed initialized successfully');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTextBackEmbed);
} else {
  initTextBackEmbed();
}

// Export public API for manual initialization
window.TextBackEmbed = {
  init: initTextBackEmbed,
  config: function(userConfig) {
    // Store config and return chainable API
    window.TextBackConfig = userConfig;
    return this;
  }
};
})();
