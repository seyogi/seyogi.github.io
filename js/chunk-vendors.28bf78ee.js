(self["webpackChunkhome"]=self["webpackChunkhome"]||[]).push([[998],{9662:function(e,c,t){var n=t(614),a=t(6330),i=TypeError;e.exports=function(e){if(n(e))return e;throw i(a(e)+" is not a function")}},6077:function(e,c,t){var n=t(614),a=String,i=TypeError;e.exports=function(e){if("object"==typeof e||n(e))return e;throw i("Can't set "+a(e)+" as a prototype")}},5787:function(e,c,t){var n=t(7976),a=TypeError;e.exports=function(e,c){if(n(c,e))return e;throw a("Incorrect invocation")}},9670:function(e,c,t){var n=t(111),a=String,i=TypeError;e.exports=function(e){if(n(e))return e;throw i(a(e)+" is not an object")}},3013:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(e,c,t){"use strict";var n,a,i,s=t(3013),r=t(9781),o=t(7854),l=t(614),f=t(111),u=t(2597),h=t(648),m=t(6330),d=t(8880),p=t(8052),z=t(7045),v=t(7976),g=t(9518),H=t(7674),V=t(5112),M=t(9711),C=t(9909),L=C.enforce,y=C.get,b=o.Int8Array,x=b&&b.prototype,w=o.Uint8ClampedArray,N=w&&w.prototype,S=b&&g(b),k=x&&g(x),A=Object.prototype,_=o.TypeError,E=V("toStringTag"),T=M("TYPED_ARRAY_TAG"),I="TypedArrayConstructor",R=s&&!!H&&"Opera"!==h(o.opera),P=!1,O={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},D={BigInt64Array:8,BigUint64Array:8},F=function(e){if(!f(e))return!1;var c=h(e);return"DataView"===c||u(O,c)||u(D,c)},U=function(e){var c=g(e);if(f(c)){var t=y(c);return t&&u(t,I)?t[I]:U(c)}},B=function(e){if(!f(e))return!1;var c=h(e);return u(O,c)||u(D,c)},j=function(e){if(B(e))return e;throw _("Target is not a typed array")},q=function(e){if(l(e)&&(!H||v(S,e)))return e;throw _(m(e)+" is not a typed array constructor")},$=function(e,c,t,n){if(r){if(t)for(var a in O){var i=o[a];if(i&&u(i.prototype,e))try{delete i.prototype[e]}catch(s){try{i.prototype[e]=c}catch(l){}}}k[e]&&!t||p(k,e,t?c:R&&x[e]||c,n)}},G=function(e,c,t){var n,a;if(r){if(H){if(t)for(n in O)if(a=o[n],a&&u(a,e))try{delete a[e]}catch(i){}if(S[e]&&!t)return;try{return p(S,e,t?c:R&&S[e]||c)}catch(i){}}for(n in O)a=o[n],!a||a[e]&&!t||p(a,e,c)}};for(n in O)a=o[n],i=a&&a.prototype,i?L(i)[I]=a:R=!1;for(n in D)a=o[n],i=a&&a.prototype,i&&(L(i)[I]=a);if((!R||!l(S)||S===Function.prototype)&&(S=function(){throw _("Incorrect invocation")},R))for(n in O)o[n]&&H(o[n],S);if((!R||!k||k===A)&&(k=S.prototype,R))for(n in O)o[n]&&H(o[n].prototype,k);if(R&&g(N)!==k&&H(N,k),r&&!u(k,E))for(n in P=!0,z(k,E,{configurable:!0,get:function(){return f(this)?this[T]:void 0}}),O)o[n]&&d(o[n],T,n);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:R,TYPED_ARRAY_TAG:P&&T,aTypedArray:j,aTypedArrayConstructor:q,exportTypedArrayMethod:$,exportTypedArrayStaticMethod:G,getTypedArrayConstructor:U,isView:F,isTypedArray:B,TypedArray:S,TypedArrayPrototype:k}},7745:function(e,c,t){var n=t(6244);e.exports=function(e,c){var t=0,a=n(c),i=new e(a);while(a>t)i[t]=c[t++];return i}},1318:function(e,c,t){var n=t(5656),a=t(1400),i=t(6244),s=function(e){return function(c,t,s){var r,o=n(c),l=i(o),f=a(s,l);if(e&&t!=t){while(l>f)if(r=o[f++],r!=r)return!0}else for(;l>f;f++)if((e||f in o)&&o[f]===t)return e||f||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},3658:function(e,c,t){"use strict";var n=t(9781),a=t(3157),i=TypeError,s=Object.getOwnPropertyDescriptor,r=n&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=r?function(e,c){if(a(e)&&!s(e,"length").writable)throw i("Cannot set read only .length");return e.length=c}:function(e,c){return e.length=c}},1843:function(e,c,t){var n=t(6244);e.exports=function(e,c){for(var t=n(e),a=new c(t),i=0;i<t;i++)a[i]=e[t-i-1];return a}},1572:function(e,c,t){var n=t(6244),a=t(9303),i=RangeError;e.exports=function(e,c,t,s){var r=n(e),o=a(t),l=o<0?r+o:o;if(l>=r||l<0)throw i("Incorrect index");for(var f=new c(r),u=0;u<r;u++)f[u]=u===l?s:e[u];return f}},4326:function(e,c,t){var n=t(1702),a=n({}.toString),i=n("".slice);e.exports=function(e){return i(a(e),8,-1)}},648:function(e,c,t){var n=t(1694),a=t(614),i=t(4326),s=t(5112),r=s("toStringTag"),o=Object,l="Arguments"==i(function(){return arguments}()),f=function(e,c){try{return e[c]}catch(t){}};e.exports=n?i:function(e){var c,t,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(t=f(c=o(e),r))?t:l?i(c):"Object"==(n=i(c))&&a(c.callee)?"Arguments":n}},9920:function(e,c,t){var n=t(2597),a=t(3887),i=t(1236),s=t(3070);e.exports=function(e,c,t){for(var r=a(c),o=s.f,l=i.f,f=0;f<r.length;f++){var u=r[f];n(e,u)||t&&n(t,u)||o(e,u,l(c,u))}}},8544:function(e,c,t){var n=t(7293);e.exports=!n((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},8880:function(e,c,t){var n=t(9781),a=t(3070),i=t(9114);e.exports=n?function(e,c,t){return a.f(e,c,i(1,t))}:function(e,c,t){return e[c]=t,e}},9114:function(e){e.exports=function(e,c){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:c}}},7045:function(e,c,t){var n=t(6339),a=t(3070);e.exports=function(e,c,t){return t.get&&n(t.get,c,{getter:!0}),t.set&&n(t.set,c,{setter:!0}),a.f(e,c,t)}},8052:function(e,c,t){var n=t(614),a=t(3070),i=t(6339),s=t(3072);e.exports=function(e,c,t,r){r||(r={});var o=r.enumerable,l=void 0!==r.name?r.name:c;if(n(t)&&i(t,l,r),r.global)o?e[c]=t:s(c,t);else{try{r.unsafe?e[c]&&(o=!0):delete e[c]}catch(f){}o?e[c]=t:a.f(e,c,{value:t,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return e}},3072:function(e,c,t){var n=t(7854),a=Object.defineProperty;e.exports=function(e,c){try{a(n,e,{value:c,configurable:!0,writable:!0})}catch(t){n[e]=c}return c}},5117:function(e,c,t){"use strict";var n=t(6330),a=TypeError;e.exports=function(e,c){if(!delete e[c])throw a("Cannot delete property "+n(c)+" of "+n(e))}},9781:function(e,c,t){var n=t(7293);e.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){var c="object"==typeof document&&document.all,t="undefined"==typeof c&&void 0!==c;e.exports={all:c,IS_HTMLDDA:t}},317:function(e,c,t){var n=t(7854),a=t(111),i=n.document,s=a(i)&&a(i.createElement);e.exports=function(e){return s?i.createElement(e):{}}},7207:function(e){var c=TypeError,t=9007199254740991;e.exports=function(e){if(e>t)throw c("Maximum allowed index exceeded");return e}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(e,c,t){var n,a,i=t(7854),s=t(8113),r=i.process,o=i.Deno,l=r&&r.versions||o&&o.version,f=l&&l.v8;f&&(n=f.split("."),a=n[0]>0&&n[0]<4?1:+(n[0]+n[1])),!a&&s&&(n=s.match(/Edge\/(\d+)/),(!n||n[1]>=74)&&(n=s.match(/Chrome\/(\d+)/),n&&(a=+n[1]))),e.exports=a},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(e,c,t){var n=t(1702),a=Error,i=n("".replace),s=function(e){return String(a(e).stack)}("zxcasd"),r=/\n\s*at [^:]*:[^\n]*/,o=r.test(s);e.exports=function(e,c){if(o&&"string"==typeof e&&!a.prepareStackTrace)while(c--)e=i(e,r,"");return e}},2109:function(e,c,t){var n=t(7854),a=t(1236).f,i=t(8880),s=t(8052),r=t(3072),o=t(9920),l=t(4705);e.exports=function(e,c){var t,f,u,h,m,d,p=e.target,z=e.global,v=e.stat;if(f=z?n:v?n[p]||r(p,{}):(n[p]||{}).prototype,f)for(u in c){if(m=c[u],e.dontCallGetSet?(d=a(f,u),h=d&&d.value):h=f[u],t=l(z?u:p+(v?".":"#")+u,e.forced),!t&&void 0!==h){if(typeof m==typeof h)continue;o(m,h)}(e.sham||h&&h.sham)&&i(m,"sham",!0),s(f,u,m,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(c){return!0}}},4374:function(e,c,t){var n=t(7293);e.exports=!n((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,c,t){var n=t(4374),a=Function.prototype.call;e.exports=n?a.bind(a):function(){return a.apply(a,arguments)}},6530:function(e,c,t){var n=t(9781),a=t(2597),i=Function.prototype,s=n&&Object.getOwnPropertyDescriptor,r=a(i,"name"),o=r&&"something"===function(){}.name,l=r&&(!n||n&&s(i,"name").configurable);e.exports={EXISTS:r,PROPER:o,CONFIGURABLE:l}},5668:function(e,c,t){var n=t(1702),a=t(9662);e.exports=function(e,c,t){try{return n(a(Object.getOwnPropertyDescriptor(e,c)[t]))}catch(i){}}},1702:function(e,c,t){var n=t(4374),a=Function.prototype,i=a.call,s=n&&a.bind.bind(i,i);e.exports=n?s:function(e){return function(){return i.apply(e,arguments)}}},5005:function(e,c,t){var n=t(7854),a=t(614),i=function(e){return a(e)?e:void 0};e.exports=function(e,c){return arguments.length<2?i(n[e]):n[e]&&n[e][c]}},8173:function(e,c,t){var n=t(9662),a=t(8554);e.exports=function(e,c){var t=e[c];return a(t)?void 0:n(t)}},7854:function(e,c,t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t.g&&t.g)||function(){return this}()||Function("return this")()},2597:function(e,c,t){var n=t(1702),a=t(7908),i=n({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,c){return i(a(e),c)}},3501:function(e){e.exports={}},4664:function(e,c,t){var n=t(9781),a=t(7293),i=t(317);e.exports=!n&&!a((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,c,t){var n=t(1702),a=t(7293),i=t(4326),s=Object,r=n("".split);e.exports=a((function(){return!s("z").propertyIsEnumerable(0)}))?function(e){return"String"==i(e)?r(e,""):s(e)}:s},9587:function(e,c,t){var n=t(614),a=t(111),i=t(7674);e.exports=function(e,c,t){var s,r;return i&&n(s=c.constructor)&&s!==t&&a(r=s.prototype)&&r!==t.prototype&&i(e,r),e}},2788:function(e,c,t){var n=t(1702),a=t(614),i=t(5465),s=n(Function.toString);a(i.inspectSource)||(i.inspectSource=function(e){return s(e)}),e.exports=i.inspectSource},9909:function(e,c,t){var n,a,i,s=t(4811),r=t(7854),o=t(111),l=t(8880),f=t(2597),u=t(5465),h=t(6200),m=t(3501),d="Object already initialized",p=r.TypeError,z=r.WeakMap,v=function(e){return i(e)?a(e):n(e,{})},g=function(e){return function(c){var t;if(!o(c)||(t=a(c)).type!==e)throw p("Incompatible receiver, "+e+" required");return t}};if(s||u.state){var H=u.state||(u.state=new z);H.get=H.get,H.has=H.has,H.set=H.set,n=function(e,c){if(H.has(e))throw p(d);return c.facade=e,H.set(e,c),c},a=function(e){return H.get(e)||{}},i=function(e){return H.has(e)}}else{var V=h("state");m[V]=!0,n=function(e,c){if(f(e,V))throw p(d);return c.facade=e,l(e,V,c),c},a=function(e){return f(e,V)?e[V]:{}},i=function(e){return f(e,V)}}e.exports={set:n,get:a,has:i,enforce:v,getterFor:g}},3157:function(e,c,t){var n=t(4326);e.exports=Array.isArray||function(e){return"Array"==n(e)}},4067:function(e,c,t){var n=t(648);e.exports=function(e){var c=n(e);return"BigInt64Array"==c||"BigUint64Array"==c}},614:function(e,c,t){var n=t(4154),a=n.all;e.exports=n.IS_HTMLDDA?function(e){return"function"==typeof e||e===a}:function(e){return"function"==typeof e}},4705:function(e,c,t){var n=t(7293),a=t(614),i=/#|\.prototype\./,s=function(e,c){var t=o[r(e)];return t==f||t!=l&&(a(c)?n(c):!!c)},r=s.normalize=function(e){return String(e).replace(i,".").toLowerCase()},o=s.data={},l=s.NATIVE="N",f=s.POLYFILL="P";e.exports=s},8554:function(e){e.exports=function(e){return null===e||void 0===e}},111:function(e,c,t){var n=t(614),a=t(4154),i=a.all;e.exports=a.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:n(e)||e===i}:function(e){return"object"==typeof e?null!==e:n(e)}},1913:function(e){e.exports=!1},2190:function(e,c,t){var n=t(5005),a=t(614),i=t(7976),s=t(3307),r=Object;e.exports=s?function(e){return"symbol"==typeof e}:function(e){var c=n("Symbol");return a(c)&&i(c.prototype,r(e))}},6244:function(e,c,t){var n=t(7466);e.exports=function(e){return n(e.length)}},6339:function(e,c,t){var n=t(1702),a=t(7293),i=t(614),s=t(2597),r=t(9781),o=t(6530).CONFIGURABLE,l=t(2788),f=t(9909),u=f.enforce,h=f.get,m=String,d=Object.defineProperty,p=n("".slice),z=n("".replace),v=n([].join),g=r&&!a((function(){return 8!==d((function(){}),"length",{value:8}).length})),H=String(String).split("String"),V=e.exports=function(e,c,t){"Symbol("===p(m(c),0,7)&&(c="["+z(m(c),/^Symbol\(([^)]*)\)/,"$1")+"]"),t&&t.getter&&(c="get "+c),t&&t.setter&&(c="set "+c),(!s(e,"name")||o&&e.name!==c)&&(r?d(e,"name",{value:c,configurable:!0}):e.name=c),g&&t&&s(t,"arity")&&e.length!==t.arity&&d(e,"length",{value:t.arity});try{t&&s(t,"constructor")&&t.constructor?r&&d(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(a){}var n=u(e);return s(n,"source")||(n.source=v(H,"string"==typeof c?c:"")),e};Function.prototype.toString=V((function(){return i(this)&&h(this).source||l(this)}),"toString")},4758:function(e){var c=Math.ceil,t=Math.floor;e.exports=Math.trunc||function(e){var n=+e;return(n>0?t:c)(n)}},6277:function(e,c,t){var n=t(1340);e.exports=function(e,c){return void 0===e?arguments.length<2?"":c:n(e)}},3070:function(e,c,t){var n=t(9781),a=t(4664),i=t(3353),s=t(9670),r=t(4948),o=TypeError,l=Object.defineProperty,f=Object.getOwnPropertyDescriptor,u="enumerable",h="configurable",m="writable";c.f=n?i?function(e,c,t){if(s(e),c=r(c),s(t),"function"===typeof e&&"prototype"===c&&"value"in t&&m in t&&!t[m]){var n=f(e,c);n&&n[m]&&(e[c]=t.value,t={configurable:h in t?t[h]:n[h],enumerable:u in t?t[u]:n[u],writable:!1})}return l(e,c,t)}:l:function(e,c,t){if(s(e),c=r(c),s(t),a)try{return l(e,c,t)}catch(n){}if("get"in t||"set"in t)throw o("Accessors not supported");return"value"in t&&(e[c]=t.value),e}},1236:function(e,c,t){var n=t(9781),a=t(6916),i=t(5296),s=t(9114),r=t(5656),o=t(4948),l=t(2597),f=t(4664),u=Object.getOwnPropertyDescriptor;c.f=n?u:function(e,c){if(e=r(e),c=o(c),f)try{return u(e,c)}catch(t){}if(l(e,c))return s(!a(i.f,e,c),e[c])}},8006:function(e,c,t){var n=t(6324),a=t(748),i=a.concat("length","prototype");c.f=Object.getOwnPropertyNames||function(e){return n(e,i)}},5181:function(e,c){c.f=Object.getOwnPropertySymbols},9518:function(e,c,t){var n=t(2597),a=t(614),i=t(7908),s=t(6200),r=t(8544),o=s("IE_PROTO"),l=Object,f=l.prototype;e.exports=r?l.getPrototypeOf:function(e){var c=i(e);if(n(c,o))return c[o];var t=c.constructor;return a(t)&&c instanceof t?t.prototype:c instanceof l?f:null}},7976:function(e,c,t){var n=t(1702);e.exports=n({}.isPrototypeOf)},6324:function(e,c,t){var n=t(1702),a=t(2597),i=t(5656),s=t(1318).indexOf,r=t(3501),o=n([].push);e.exports=function(e,c){var t,n=i(e),l=0,f=[];for(t in n)!a(r,t)&&a(n,t)&&o(f,t);while(c.length>l)a(n,t=c[l++])&&(~s(f,t)||o(f,t));return f}},5296:function(e,c){"use strict";var t={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,a=n&&!t.call({1:2},1);c.f=a?function(e){var c=n(this,e);return!!c&&c.enumerable}:t},7674:function(e,c,t){var n=t(5668),a=t(9670),i=t(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,c=!1,t={};try{e=n(Object.prototype,"__proto__","set"),e(t,[]),c=t instanceof Array}catch(s){}return function(t,n){return a(t),i(n),c?e(t,n):t.__proto__=n,t}}():void 0)},2140:function(e,c,t){var n=t(6916),a=t(614),i=t(111),s=TypeError;e.exports=function(e,c){var t,r;if("string"===c&&a(t=e.toString)&&!i(r=n(t,e)))return r;if(a(t=e.valueOf)&&!i(r=n(t,e)))return r;if("string"!==c&&a(t=e.toString)&&!i(r=n(t,e)))return r;throw s("Can't convert object to primitive value")}},3887:function(e,c,t){var n=t(5005),a=t(1702),i=t(8006),s=t(5181),r=t(9670),o=a([].concat);e.exports=n("Reflect","ownKeys")||function(e){var c=i.f(r(e)),t=s.f;return t?o(c,t(e)):c}},4488:function(e,c,t){var n=t(8554),a=TypeError;e.exports=function(e){if(n(e))throw a("Can't call method on "+e);return e}},6200:function(e,c,t){var n=t(2309),a=t(9711),i=n("keys");e.exports=function(e){return i[e]||(i[e]=a(e))}},5465:function(e,c,t){var n=t(7854),a=t(3072),i="__core-js_shared__",s=n[i]||a(i,{});e.exports=s},2309:function(e,c,t){var n=t(1913),a=t(5465);(e.exports=function(e,c){return a[e]||(a[e]=void 0!==c?c:{})})("versions",[]).push({version:"3.30.1",mode:n?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.30.1/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,c,t){var n=t(7392),a=t(7293);e.exports=!!Object.getOwnPropertySymbols&&!a((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},1400:function(e,c,t){var n=t(9303),a=Math.max,i=Math.min;e.exports=function(e,c){var t=n(e);return t<0?a(t+c,0):i(t,c)}},4599:function(e,c,t){var n=t(7593),a=TypeError;e.exports=function(e){var c=n(e,"number");if("number"==typeof c)throw a("Can't convert number to bigint");return BigInt(c)}},5656:function(e,c,t){var n=t(8361),a=t(4488);e.exports=function(e){return n(a(e))}},9303:function(e,c,t){var n=t(4758);e.exports=function(e){var c=+e;return c!==c||0===c?0:n(c)}},7466:function(e,c,t){var n=t(9303),a=Math.min;e.exports=function(e){return e>0?a(n(e),9007199254740991):0}},7908:function(e,c,t){var n=t(4488),a=Object;e.exports=function(e){return a(n(e))}},7593:function(e,c,t){var n=t(6916),a=t(111),i=t(2190),s=t(8173),r=t(2140),o=t(5112),l=TypeError,f=o("toPrimitive");e.exports=function(e,c){if(!a(e)||i(e))return e;var t,o=s(e,f);if(o){if(void 0===c&&(c="default"),t=n(o,e,c),!a(t)||i(t))return t;throw l("Can't convert object to primitive value")}return void 0===c&&(c="number"),r(e,c)}},4948:function(e,c,t){var n=t(7593),a=t(2190);e.exports=function(e){var c=n(e,"string");return a(c)?c:c+""}},1694:function(e,c,t){var n=t(5112),a=n("toStringTag"),i={};i[a]="z",e.exports="[object z]"===String(i)},1340:function(e,c,t){var n=t(648),a=String;e.exports=function(e){if("Symbol"===n(e))throw TypeError("Cannot convert a Symbol value to a string");return a(e)}},6330:function(e){var c=String;e.exports=function(e){try{return c(e)}catch(t){return"Object"}}},9711:function(e,c,t){var n=t(1702),a=0,i=Math.random(),s=n(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++a+i,36)}},3307:function(e,c,t){var n=t(6293);e.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,c,t){var n=t(9781),a=t(7293);e.exports=n&&a((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(e,c,t){var n=t(7854),a=t(614),i=n.WeakMap;e.exports=a(i)&&/native code/.test(String(i))},5112:function(e,c,t){var n=t(7854),a=t(2309),i=t(2597),s=t(9711),r=t(6293),o=t(3307),l=n.Symbol,f=a("wks"),u=o?l["for"]||l:l&&l.withoutSetter||s;e.exports=function(e){return i(f,e)||(f[e]=r&&i(l,e)?l[e]:u("Symbol."+e)),f[e]}},7658:function(e,c,t){"use strict";var n=t(2109),a=t(7908),i=t(6244),s=t(3658),r=t(7207),o=t(7293),l=o((function(){return 4294967297!==[].push.call({length:4294967296},1)})),f=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},u=l||!f();n({target:"Array",proto:!0,arity:1,forced:u},{push:function(e){var c=a(this),t=i(c),n=arguments.length;r(t+n);for(var o=0;o<n;o++)c[t]=arguments[o],t++;return s(c,t),t}})},541:function(e,c,t){"use strict";var n=t(2109),a=t(7908),i=t(6244),s=t(3658),r=t(5117),o=t(7207),l=1!==[].unshift(0),f=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},u=l||!f();n({target:"Array",proto:!0,arity:1,forced:u},{unshift:function(e){var c=a(this),t=i(c),n=arguments.length;if(n){o(t+n);var l=t;while(l--){var f=l+n;l in c?c[f]=c[l]:r(c,f)}for(var u=0;u<n;u++)c[u]=arguments[u]}return s(c,t+n)}})},1439:function(e,c,t){"use strict";var n=t(1843),a=t(260),i=a.aTypedArray,s=a.exportTypedArrayMethod,r=a.getTypedArrayConstructor;s("toReversed",(function(){return n(i(this),r(this))}))},7585:function(e,c,t){"use strict";var n=t(260),a=t(1702),i=t(9662),s=t(7745),r=n.aTypedArray,o=n.getTypedArrayConstructor,l=n.exportTypedArrayMethod,f=a(n.TypedArrayPrototype.sort);l("toSorted",(function(e){void 0!==e&&i(e);var c=r(this),t=s(o(c),c);return f(t,e)}))},5315:function(e,c,t){"use strict";var n=t(1572),a=t(260),i=t(4067),s=t(9303),r=t(4599),o=a.aTypedArray,l=a.getTypedArrayConstructor,f=a.exportTypedArrayMethod,u=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(e){return 8===e}}();f("with",{with:function(e,c){var t=o(this),a=s(e),f=i(t)?r(c):+c;return n(t,l(t),a,f)}}["with"],!u)},3767:function(e,c,t){t(1439)},8585:function(e,c,t){t(7585)},8696:function(e,c,t){t(5315)},2801:function(e,c,t){"use strict";var n=t(2109),a=t(7854),i=t(5005),s=t(9114),r=t(3070).f,o=t(2597),l=t(5787),f=t(9587),u=t(6277),h=t(3678),m=t(1060),d=t(9781),p=t(1913),z="DOMException",v=i("Error"),g=i(z),H=function(){l(this,V);var e=arguments.length,c=u(e<1?void 0:arguments[0]),t=u(e<2?void 0:arguments[1],"Error"),n=new g(c,t),a=v(c);return a.name=z,r(n,"stack",s(1,m(a.stack,1))),f(n,this,H),n},V=H.prototype=g.prototype,M="stack"in v(z),C="stack"in new g(1,2),L=g&&d&&Object.getOwnPropertyDescriptor(a,z),y=!!L&&!(L.writable&&L.configurable),b=M&&!y&&!C;n({global:!0,constructor:!0,forced:p||b},{DOMException:b?H:g});var x=i(z),w=x.prototype;if(w.constructor!==x)for(var N in p||r(w,"constructor",s(1,x)),h)if(o(h,N)){var S=h[N],k=S.s;o(x,k)||r(x,k,s(6,S.c))}},223:function(e,c,t){"use strict";t.d(c,{$s:function(){return K},BH:function(){return H},L:function(){return o},LL:function(){return A},P0:function(){return z},Pz:function(){return g},Sg:function(){return V},ZR:function(){return k},aH:function(){return v},b$:function(){return y},eu:function(){return w},hl:function(){return x},m9:function(){return Z},ne:function(){return F},pd:function(){return D},q4:function(){return p},ru:function(){return L},tV:function(){return l},uI:function(){return C},vZ:function(){return I},w1:function(){return b},xO:function(){return P},xb:function(){return T},z$:function(){return M},zI:function(){return N},zd:function(){return O}});t(2801),t(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const n=function(e){const c=[];let t=0;for(let n=0;n<e.length;n++){let a=e.charCodeAt(n);a<128?c[t++]=a:a<2048?(c[t++]=a>>6|192,c[t++]=63&a|128):55296===(64512&a)&&n+1<e.length&&56320===(64512&e.charCodeAt(n+1))?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++n)),c[t++]=a>>18|240,c[t++]=a>>12&63|128,c[t++]=a>>6&63|128,c[t++]=63&a|128):(c[t++]=a>>12|224,c[t++]=a>>6&63|128,c[t++]=63&a|128)}return c},a=function(e){const c=[];let t=0,n=0;while(t<e.length){const a=e[t++];if(a<128)c[n++]=String.fromCharCode(a);else if(a>191&&a<224){const i=e[t++];c[n++]=String.fromCharCode((31&a)<<6|63&i)}else if(a>239&&a<365){const i=e[t++],s=e[t++],r=e[t++],o=((7&a)<<18|(63&i)<<12|(63&s)<<6|63&r)-65536;c[n++]=String.fromCharCode(55296+(o>>10)),c[n++]=String.fromCharCode(56320+(1023&o))}else{const i=e[t++],s=e[t++];c[n++]=String.fromCharCode((15&a)<<12|(63&i)<<6|63&s)}}return c.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,c){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=c?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let a=0;a<e.length;a+=3){const c=e[a],i=a+1<e.length,s=i?e[a+1]:0,r=a+2<e.length,o=r?e[a+2]:0,l=c>>2,f=(3&c)<<4|s>>4;let u=(15&s)<<2|o>>6,h=63&o;r||(h=64,i||(u=64)),n.push(t[l],t[f],t[u],t[h])}return n.join("")},encodeString(e,c){return this.HAS_NATIVE_SUPPORT&&!c?btoa(e):this.encodeByteArray(n(e),c)},decodeString(e,c){return this.HAS_NATIVE_SUPPORT&&!c?atob(e):a(this.decodeStringToByteArray(e,c))},decodeStringToByteArray(e,c){this.init_();const t=c?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let a=0;a<e.length;){const c=t[e.charAt(a++)],i=a<e.length,r=i?t[e.charAt(a)]:0;++a;const o=a<e.length,l=o?t[e.charAt(a)]:64;++a;const f=a<e.length,u=f?t[e.charAt(a)]:64;if(++a,null==c||null==r||null==l||null==u)throw new s;const h=c<<2|r>>4;if(n.push(h),64!==l){const e=r<<4&240|l>>2;if(n.push(e),64!==u){const e=l<<6&192|u;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const r=function(e){const c=n(e);return i.encodeByteArray(c,!0)},o=function(e){return r(e).replace(/\./g,"")},l=function(e){try{return i.decodeString(e,!0)}catch(c){console.error("base64Decode failed: ",c)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function f(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof t.g)return t.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u=()=>f().__FIREBASE_DEFAULTS__,h=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:""}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},m=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const c=e&&l(e[1]);return c&&JSON.parse(c)},d=()=>{try{return u()||h()||m()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},p=e=>{var c,t;return null===(t=null===(c=d())||void 0===c?void 0:c.emulatorHosts)||void 0===t?void 0:t[e]},z=e=>{const c=p(e);if(!c)return;const t=c.lastIndexOf(":");if(t<=0||t+1===c.length)throw new Error(`Invalid host ${c} with no separate hostname and port!`);const n=parseInt(c.substring(t+1),10);return"["===c[0]?[c.substring(1,t-1),n]:[c.substring(0,t),n]},v=()=>{var e;return null===(e=d())||void 0===e?void 0:e.config},g=e=>{var c;return null===(c=d())||void 0===c?void 0:c[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class H{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,c)=>{this.resolve=e,this.reject=c}))}wrapCallback(e){return(c,t)=>{c?this.reject(c):this.resolve(t),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(c):e(c,t))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e,c){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=c||"demo-project",a=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:a,exp:a+3600,auth_time:a,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),r="";return[o(JSON.stringify(t)),o(JSON.stringify(s)),r].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function C(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(M())}function L(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function y(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function b(){const e=M();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function x(){try{return"object"===typeof indexedDB}catch(e){return!1}}function w(){return new Promise(((e,c)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(n);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(n),e(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var e;c((null===(e=a.error)||void 0===e?void 0:e.message)||"")}}catch(t){c(t)}}))}function N(){return!("undefined"===typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S="FirebaseError";class k extends Error{constructor(e,c,t){super(c),this.code=e,this.customData=t,this.name=S,Object.setPrototypeOf(this,k.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,A.prototype.create)}}class A{constructor(e,c,t){this.service=e,this.serviceName=c,this.errors=t}create(e,...c){const t=c[0]||{},n=`${this.service}/${e}`,a=this.errors[e],i=a?_(a,t):"Error",s=`${this.serviceName}: ${i} (${n}).`,r=new k(n,s,t);return r}}function _(e,c){return e.replace(E,((e,t)=>{const n=c[t];return null!=n?String(n):`<${t}?>`}))}const E=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e){for(const c in e)if(Object.prototype.hasOwnProperty.call(e,c))return!1;return!0}function I(e,c){if(e===c)return!0;const t=Object.keys(e),n=Object.keys(c);for(const a of t){if(!n.includes(a))return!1;const t=e[a],i=c[a];if(R(t)&&R(i)){if(!I(t,i))return!1}else if(t!==i)return!1}for(const a of n)if(!t.includes(a))return!1;return!0}function R(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function P(e){const c=[];for(const[t,n]of Object.entries(e))Array.isArray(n)?n.forEach((e=>{c.push(encodeURIComponent(t)+"="+encodeURIComponent(e))})):c.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return c.length?"&"+c.join("&"):""}function O(e){const c={},t=e.replace(/^\?/,"").split("&");return t.forEach((e=>{if(e){const[t,n]=e.split("=");c[decodeURIComponent(t)]=decodeURIComponent(n)}})),c}function D(e){const c=e.indexOf("?");if(!c)return"";const t=e.indexOf("#",c);return e.substring(c,t>0?t:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e,c){const t=new U(e,c);return t.subscribe.bind(t)}class U{constructor(e,c){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=c,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((c=>{c.next(e)}))}error(e){this.forEachObserver((c=>{c.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,c,t){let n;if(void 0===e&&void 0===c&&void 0===t)throw new Error("Missing Observer.");n=B(e,["next","error","complete"])?e:{next:e,error:c,complete:t},void 0===n.next&&(n.next=j),void 0===n.error&&(n.error=j),void 0===n.complete&&(n.complete=j);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}})),this.observers.push(n),a}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let c=0;c<this.observers.length;c++)this.sendOne(c,e)}sendOne(e,c){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{c(this.observers[e])}catch(t){"undefined"!==typeof console&&console.error&&console.error(t)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function B(e,c){if("object"!==typeof e||null===e)return!1;for(const t of c)if(t in e&&"function"===typeof e[t])return!0;return!1}function j(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const q=1e3,$=2,G=144e5,W=.5;function K(e,c=q,t=$){const n=c*Math.pow(t,e),a=Math.round(W*n*(Math.random()-.5)*2);return Math.min(G,n+a)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Z(e){return e&&e._delegate?e._delegate:e}},7749:function(e,c,t){"use strict";t.d(c,{GN:function(){return S}});t(7658);var n=t(3494),a=t(3396);function i(e,c){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);c&&(n=n.filter((function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var c=1;c<arguments.length;c++){var t=null!=arguments[c]?arguments[c]:{};c%2?i(Object(t),!0).forEach((function(c){o(e,c,t[c])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(c){Object.defineProperty(e,c,Object.getOwnPropertyDescriptor(t,c))}))}return e}function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,c,t){return c in e?Object.defineProperty(e,c,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[c]=t,e}function l(e,c){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],c.indexOf(t)>=0||(a[t]=e[t]);return a}function f(e,c){if(null==e)return{};var t,n,a=l(e,c);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],c.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function u(e){return h(e)||m(e)||d(e)||z()}function h(e){if(Array.isArray(e))return p(e)}function m(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function d(e,c){if(e){if("string"===typeof e)return p(e,c);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?p(e,c):void 0}}function p(e,c){(null==c||c>e.length)&&(c=e.length);for(var t=0,n=new Array(c);t<c;t++)n[t]=e[t];return n}function z(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var v="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t.g?t.g:"undefined"!==typeof self?self:{},g={exports:{}};(function(e){(function(c){var t=function(e,c,n){if(!l(c)||u(c)||h(c)||m(c)||o(c))return c;var a,i=0,s=0;if(f(c))for(a=[],s=c.length;i<s;i++)a.push(t(e,c[i],n));else for(var r in a={},c)Object.prototype.hasOwnProperty.call(c,r)&&(a[e(r,n)]=t(e,c[r],n));return a},n=function(e,c){c=c||{};var t=c.separator||"_",n=c.split||/(?=[A-Z])/;return e.split(n).join(t)},a=function(e){return d(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,c){return c?c.toUpperCase():""})),e.substr(0,1).toLowerCase()+e.substr(1))},i=function(e){var c=a(e);return c.substr(0,1).toUpperCase()+c.substr(1)},s=function(e,c){return n(e,c).toLowerCase()},r=Object.prototype.toString,o=function(e){return"function"===typeof e},l=function(e){return e===Object(e)},f=function(e){return"[object Array]"==r.call(e)},u=function(e){return"[object Date]"==r.call(e)},h=function(e){return"[object RegExp]"==r.call(e)},m=function(e){return"[object Boolean]"==r.call(e)},d=function(e){return e-=0,e===e},p=function(e,c){var t=c&&"process"in c?c.process:c;return"function"!==typeof t?e:function(c,n){return t(c,e,n)}},z={camelize:a,decamelize:s,pascalize:i,depascalize:s,camelizeKeys:function(e,c){return t(p(a,c),e)},decamelizeKeys:function(e,c){return t(p(s,c),e,c)},pascalizeKeys:function(e,c){return t(p(i,c),e)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=z:c.humps=z})(v)})(g);var H=g.exports,V=["class","style"];function M(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,c){var t=c.indexOf(":"),n=H.camelize(c.slice(0,t)),a=c.slice(t+1).trim();return e[n]=a,e}),{})}function C(e){return e.split(/\s+/).reduce((function(e,c){return e[c]=!0,e}),{})}function L(e){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof e)return e;var n=(e.children||[]).map((function(e){return L(e)})),i=Object.keys(e.attributes||{}).reduce((function(c,t){var n=e.attributes[t];switch(t){case"class":c.class=C(n);break;case"style":c.style=M(n);break;default:c.attrs[t]=n}return c}),{attrs:{},class:{},style:{}});t.class;var r=t.style,o=void 0===r?{}:r,l=f(t,V);return(0,a.h)(e.tag,s(s(s({},c),{},{class:i.class,style:s(s({},i.style),o)},i.attrs),l),n)}var y=!1;try{y=!0}catch(k){}function b(){var e;!y&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}function x(e,c){return Array.isArray(c)&&c.length>0||!Array.isArray(c)&&c?o({},e,c):{}}function w(e){var c,t=(c={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":!0===e.flip,"fa-flip-horizontal":"horizontal"===e.flip||"both"===e.flip,"fa-flip-vertical":"vertical"===e.flip||"both"===e.flip},o(c,"fa-".concat(e.size),null!==e.size),o(c,"fa-rotate-".concat(e.rotation),null!==e.rotation),o(c,"fa-pull-".concat(e.pull),null!==e.pull),o(c,"fa-swap-opacity",e.swapOpacity),o(c,"fa-bounce",e.bounce),o(c,"fa-shake",e.shake),o(c,"fa-beat",e.beat),o(c,"fa-fade",e.fade),o(c,"fa-beat-fade",e.beatFade),o(c,"fa-flash",e.flash),o(c,"fa-spin-pulse",e.spinPulse),o(c,"fa-spin-reverse",e.spinReverse),c);return Object.keys(t).map((function(e){return t[e]?e:null})).filter((function(e){return e}))}function N(e){return e&&"object"===r(e)&&e.prefix&&e.iconName&&e.icon?e:n.Qc.icon?n.Qc.icon(e):null===e?null:"object"===r(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}var S=(0,a.aZ)({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,c){var t=c.attrs,i=(0,a.Fl)((function(){return N(e.icon)})),r=(0,a.Fl)((function(){return x("classes",w(e))})),o=(0,a.Fl)((function(){return x("transform","string"===typeof e.transform?n.Qc.transform(e.transform):e.transform)})),l=(0,a.Fl)((function(){return x("mask",N(e.mask))})),f=(0,a.Fl)((function(){return(0,n.qv)(i.value,s(s(s(s({},r.value),o.value),l.value),{},{symbol:e.symbol,title:e.title}))}));(0,a.YP)(f,(function(e){if(!e)return b("Could not find one or more icon(s)",i.value,l.value)}),{immediate:!0});var u=(0,a.Fl)((function(){return f.value?L(f.value.abstract[0],{},t):null}));return function(){return u.value}}});(0,a.aZ)({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,c){var t=c.slots,i=n.vc.familyPrefix,s=(0,a.Fl)((function(){return["".concat(i,"-layers")].concat(u(e.fixedWidth?["".concat(i,"-fw")]:[]))}));return function(){return(0,a.h)("div",{class:s.value},t.default?t.default():[])}}}),(0,a.aZ)({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,c){var t=c.attrs,i=n.vc.familyPrefix,r=(0,a.Fl)((function(){return x("classes",[].concat(u(e.counter?["".concat(i,"-layers-counter")]:[]),u(e.position?["".concat(i,"-layers-").concat(e.position)]:[])))})),o=(0,a.Fl)((function(){return x("transform","string"===typeof e.transform?n.Qc.transform(e.transform):e.transform)})),l=(0,a.Fl)((function(){var c=(0,n.fL)(e.value.toString(),s(s({},o.value),r.value)),t=c.abstract;return e.counter&&(t[0].attributes.class=t[0].attributes.class.replace("fa-layers-text","")),t[0]})),f=(0,a.Fl)((function(){return L(l.value,{},t)}));return function(){return f.value}}})},4870:function(e,c,t){"use strict";t.d(c,{Bj:function(){return i},Fl:function(){return Ge},IU:function(){return ke},Jd:function(){return y},PG:function(){return xe},SU:function(){return Ue},Um:function(){return Le},WL:function(){return je},X$:function(){return N},X3:function(){return Se},XI:function(){return Oe},Xl:function(){return Ae},dq:function(){return Re},iH:function(){return Pe},j:function(){return x},lk:function(){return b},nZ:function(){return r},qj:function(){return Ce},qq:function(){return V},yT:function(){return Ne}});t(7658);var n=t(7139);let a;class i{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=a,!e&&a&&(this.index=(a.scopes||(a.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const c=a;try{return a=this,e()}finally{a=c}}else 0}on(){a=this}off(){a=this.parent}stop(e){if(this._active){let c,t;for(c=0,t=this.effects.length;c<t;c++)this.effects[c].stop();for(c=0,t=this.cleanups.length;c<t;c++)this.cleanups[c]();if(this.scopes)for(c=0,t=this.scopes.length;c<t;c++)this.scopes[c].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function s(e,c=a){c&&c.active&&c.effects.push(e)}function r(){return a}const o=e=>{const c=new Set(e);return c.w=0,c.n=0,c},l=e=>(e.w&p)>0,f=e=>(e.n&p)>0,u=({deps:e})=>{if(e.length)for(let c=0;c<e.length;c++)e[c].w|=p},h=e=>{const{deps:c}=e;if(c.length){let t=0;for(let n=0;n<c.length;n++){const a=c[n];l(a)&&!f(a)?a.delete(e):c[t++]=a,a.w&=~p,a.n&=~p}c.length=t}},m=new WeakMap;let d=0,p=1;const z=30;let v;const g=Symbol(""),H=Symbol("");class V{constructor(e,c=null,t){this.fn=e,this.scheduler=c,this.active=!0,this.deps=[],this.parent=void 0,s(this,t)}run(){if(!this.active)return this.fn();let e=v,c=C;while(e){if(e===this)return;e=e.parent}try{return this.parent=v,v=this,C=!0,p=1<<++d,d<=z?u(this):M(this),this.fn()}finally{d<=z&&h(this),p=1<<--d,v=this.parent,C=c,this.parent=void 0,this.deferStop&&this.stop()}}stop(){v===this?this.deferStop=!0:this.active&&(M(this),this.onStop&&this.onStop(),this.active=!1)}}function M(e){const{deps:c}=e;if(c.length){for(let t=0;t<c.length;t++)c[t].delete(e);c.length=0}}let C=!0;const L=[];function y(){L.push(C),C=!1}function b(){const e=L.pop();C=void 0===e||e}function x(e,c,t){if(C&&v){let c=m.get(e);c||m.set(e,c=new Map);let n=c.get(t);n||c.set(t,n=o());const a=void 0;w(n,a)}}function w(e,c){let t=!1;d<=z?f(e)||(e.n|=p,t=!l(e)):t=!e.has(v),t&&(e.add(v),v.deps.push(e))}function N(e,c,t,a,i,s){const r=m.get(e);if(!r)return;let l=[];if("clear"===c)l=[...r.values()];else if("length"===t&&(0,n.kJ)(e)){const e=Number(a);r.forEach(((c,t)=>{("length"===t||t>=e)&&l.push(c)}))}else switch(void 0!==t&&l.push(r.get(t)),c){case"add":(0,n.kJ)(e)?(0,n.S0)(t)&&l.push(r.get("length")):(l.push(r.get(g)),(0,n._N)(e)&&l.push(r.get(H)));break;case"delete":(0,n.kJ)(e)||(l.push(r.get(g)),(0,n._N)(e)&&l.push(r.get(H)));break;case"set":(0,n._N)(e)&&l.push(r.get(g));break}if(1===l.length)l[0]&&S(l[0]);else{const e=[];for(const c of l)c&&e.push(...c);S(o(e))}}function S(e,c){const t=(0,n.kJ)(e)?e:[...e];for(const n of t)n.computed&&k(n,c);for(const n of t)n.computed||k(n,c)}function k(e,c){(e!==v||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const A=(0,n.fY)("__proto__,__v_isRef,__isVue"),_=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(n.yk)),E=D(),T=D(!1,!0),I=D(!0),R=P();function P(){const e={};return["includes","indexOf","lastIndexOf"].forEach((c=>{e[c]=function(...e){const t=ke(this);for(let c=0,a=this.length;c<a;c++)x(t,"get",c+"");const n=t[c](...e);return-1===n||!1===n?t[c](...e.map(ke)):n}})),["push","pop","shift","unshift","splice"].forEach((c=>{e[c]=function(...e){y();const t=ke(this)[c].apply(this,e);return b(),t}})),e}function O(e){const c=ke(this);return x(c,"has",e),c.hasOwnProperty(e)}function D(e=!1,c=!1){return function(t,a,i){if("__v_isReactive"===a)return!e;if("__v_isReadonly"===a)return e;if("__v_isShallow"===a)return c;if("__v_raw"===a&&i===(e?c?He:ge:c?ve:ze).get(t))return t;const s=(0,n.kJ)(t);if(!e){if(s&&(0,n.RI)(R,a))return Reflect.get(R,a,i);if("hasOwnProperty"===a)return O}const r=Reflect.get(t,a,i);return((0,n.yk)(a)?_.has(a):A(a))?r:(e||x(t,"get",a),c?r:Re(r)?s&&(0,n.S0)(a)?r:r.value:(0,n.Kn)(r)?e?ye(r):Ce(r):r)}}const F=B(),U=B(!0);function B(e=!1){return function(c,t,a,i){let s=c[t];if(we(s)&&Re(s)&&!Re(a))return!1;if(!e&&(Ne(a)||we(a)||(s=ke(s),a=ke(a)),!(0,n.kJ)(c)&&Re(s)&&!Re(a)))return s.value=a,!0;const r=(0,n.kJ)(c)&&(0,n.S0)(t)?Number(t)<c.length:(0,n.RI)(c,t),o=Reflect.set(c,t,a,i);return c===ke(i)&&(r?(0,n.aU)(a,s)&&N(c,"set",t,a,s):N(c,"add",t,a)),o}}function j(e,c){const t=(0,n.RI)(e,c),a=e[c],i=Reflect.deleteProperty(e,c);return i&&t&&N(e,"delete",c,void 0,a),i}function q(e,c){const t=Reflect.has(e,c);return(0,n.yk)(c)&&_.has(c)||x(e,"has",c),t}function $(e){return x(e,"iterate",(0,n.kJ)(e)?"length":g),Reflect.ownKeys(e)}const G={get:E,set:F,deleteProperty:j,has:q,ownKeys:$},W={get:I,set(e,c){return!0},deleteProperty(e,c){return!0}},K=(0,n.l7)({},G,{get:T,set:U}),Z=e=>e,J=e=>Reflect.getPrototypeOf(e);function Y(e,c,t=!1,n=!1){e=e["__v_raw"];const a=ke(e),i=ke(c);t||(c!==i&&x(a,"get",c),x(a,"get",i));const{has:s}=J(a),r=n?Z:t?Ee:_e;return s.call(a,c)?r(e.get(c)):s.call(a,i)?r(e.get(i)):void(e!==a&&e.get(c))}function Q(e,c=!1){const t=this["__v_raw"],n=ke(t),a=ke(e);return c||(e!==a&&x(n,"has",e),x(n,"has",a)),e===a?t.has(e):t.has(e)||t.has(a)}function X(e,c=!1){return e=e["__v_raw"],!c&&x(ke(e),"iterate",g),Reflect.get(e,"size",e)}function ee(e){e=ke(e);const c=ke(this),t=J(c),n=t.has.call(c,e);return n||(c.add(e),N(c,"add",e,e)),this}function ce(e,c){c=ke(c);const t=ke(this),{has:a,get:i}=J(t);let s=a.call(t,e);s||(e=ke(e),s=a.call(t,e));const r=i.call(t,e);return t.set(e,c),s?(0,n.aU)(c,r)&&N(t,"set",e,c,r):N(t,"add",e,c),this}function te(e){const c=ke(this),{has:t,get:n}=J(c);let a=t.call(c,e);a||(e=ke(e),a=t.call(c,e));const i=n?n.call(c,e):void 0,s=c.delete(e);return a&&N(c,"delete",e,void 0,i),s}function ne(){const e=ke(this),c=0!==e.size,t=void 0,n=e.clear();return c&&N(e,"clear",void 0,void 0,t),n}function ae(e,c){return function(t,n){const a=this,i=a["__v_raw"],s=ke(i),r=c?Z:e?Ee:_e;return!e&&x(s,"iterate",g),i.forEach(((e,c)=>t.call(n,r(e),r(c),a)))}}function ie(e,c,t){return function(...a){const i=this["__v_raw"],s=ke(i),r=(0,n._N)(s),o="entries"===e||e===Symbol.iterator&&r,l="keys"===e&&r,f=i[e](...a),u=t?Z:c?Ee:_e;return!c&&x(s,"iterate",l?H:g),{next(){const{value:e,done:c}=f.next();return c?{value:e,done:c}:{value:o?[u(e[0]),u(e[1])]:u(e),done:c}},[Symbol.iterator](){return this}}}}function se(e){return function(...c){return"delete"!==e&&this}}function re(){const e={get(e){return Y(this,e)},get size(){return X(this)},has:Q,add:ee,set:ce,delete:te,clear:ne,forEach:ae(!1,!1)},c={get(e){return Y(this,e,!1,!0)},get size(){return X(this)},has:Q,add:ee,set:ce,delete:te,clear:ne,forEach:ae(!1,!0)},t={get(e){return Y(this,e,!0)},get size(){return X(this,!0)},has(e){return Q.call(this,e,!0)},add:se("add"),set:se("set"),delete:se("delete"),clear:se("clear"),forEach:ae(!0,!1)},n={get(e){return Y(this,e,!0,!0)},get size(){return X(this,!0)},has(e){return Q.call(this,e,!0)},add:se("add"),set:se("set"),delete:se("delete"),clear:se("clear"),forEach:ae(!0,!0)},a=["keys","values","entries",Symbol.iterator];return a.forEach((a=>{e[a]=ie(a,!1,!1),t[a]=ie(a,!0,!1),c[a]=ie(a,!1,!0),n[a]=ie(a,!0,!0)})),[e,t,c,n]}const[oe,le,fe,ue]=re();function he(e,c){const t=c?e?ue:fe:e?le:oe;return(c,a,i)=>"__v_isReactive"===a?!e:"__v_isReadonly"===a?e:"__v_raw"===a?c:Reflect.get((0,n.RI)(t,a)&&a in c?t:c,a,i)}const me={get:he(!1,!1)},de={get:he(!1,!0)},pe={get:he(!0,!1)};const ze=new WeakMap,ve=new WeakMap,ge=new WeakMap,He=new WeakMap;function Ve(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Me(e){return e["__v_skip"]||!Object.isExtensible(e)?0:Ve((0,n.W7)(e))}function Ce(e){return we(e)?e:be(e,!1,G,me,ze)}function Le(e){return be(e,!1,K,de,ve)}function ye(e){return be(e,!0,W,pe,ge)}function be(e,c,t,a,i){if(!(0,n.Kn)(e))return e;if(e["__v_raw"]&&(!c||!e["__v_isReactive"]))return e;const s=i.get(e);if(s)return s;const r=Me(e);if(0===r)return e;const o=new Proxy(e,2===r?a:t);return i.set(e,o),o}function xe(e){return we(e)?xe(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function we(e){return!(!e||!e["__v_isReadonly"])}function Ne(e){return!(!e||!e["__v_isShallow"])}function Se(e){return xe(e)||we(e)}function ke(e){const c=e&&e["__v_raw"];return c?ke(c):e}function Ae(e){return(0,n.Nj)(e,"__v_skip",!0),e}const _e=e=>(0,n.Kn)(e)?Ce(e):e,Ee=e=>(0,n.Kn)(e)?ye(e):e;function Te(e){C&&v&&(e=ke(e),w(e.dep||(e.dep=o())))}function Ie(e,c){e=ke(e);const t=e.dep;t&&S(t)}function Re(e){return!(!e||!0!==e.__v_isRef)}function Pe(e){return De(e,!1)}function Oe(e){return De(e,!0)}function De(e,c){return Re(e)?e:new Fe(e,c)}class Fe{constructor(e,c){this.__v_isShallow=c,this.dep=void 0,this.__v_isRef=!0,this._rawValue=c?e:ke(e),this._value=c?e:_e(e)}get value(){return Te(this),this._value}set value(e){const c=this.__v_isShallow||Ne(e)||we(e);e=c?e:ke(e),(0,n.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=c?e:_e(e),Ie(this,e))}}function Ue(e){return Re(e)?e.value:e}const Be={get:(e,c,t)=>Ue(Reflect.get(e,c,t)),set:(e,c,t,n)=>{const a=e[c];return Re(a)&&!Re(t)?(a.value=t,!0):Reflect.set(e,c,t,n)}};function je(e){return xe(e)?e:new Proxy(e,Be)}var qe;class $e{constructor(e,c,t,n){this._setter=c,this.dep=void 0,this.__v_isRef=!0,this[qe]=!1,this._dirty=!0,this.effect=new V(e,(()=>{this._dirty||(this._dirty=!0,Ie(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!n,this["__v_isReadonly"]=t}get value(){const e=ke(this);return Te(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ge(e,c,t=!1){let a,i;const s=(0,n.mf)(e);s?(a=e,i=n.dG):(a=e.get,i=e.set);const r=new $e(a,i,s||!i,t);return r}qe="__v_isReadonly"},3396:function(e,c,t){"use strict";t.d(c,{$d:function(){return s},Ah:function(){return we},Cn:function(){return R},FN:function(){return dt},Fl:function(){return kt},HY:function(){return Ec},Ho:function(){return ct},JJ:function(){return G},Ko:function(){return Fe},LL:function(){return Pe},P$:function(){return ne},Q6:function(){return le},U2:function(){return ie},Uk:function(){return tt},Us:function(){return wc},Wm:function(){return Qc},Y3:function(){return g},Y8:function(){return ee},YP:function(){return Z},_:function(){return Yc},aZ:function(){return fe},bv:function(){return Le},dD:function(){return I},f3:function(){return W},h:function(){return At},iD:function(){return qc},ic:function(){return be},j4:function(){return $c},kq:function(){return at},nK:function(){return oe},uE:function(){return nt},up:function(){return Ie},w5:function(){return P},wg:function(){return Dc},wy:function(){return _e}});t(7658),t(541);var n=t(4870),a=t(7139);function i(e,c,t,n){let a;try{a=n?e(...n):e()}catch(i){r(i,c,t)}return a}function s(e,c,t,n){if((0,a.mf)(e)){const s=i(e,c,t,n);return s&&(0,a.tI)(s)&&s.catch((e=>{r(e,c,t)})),s}const o=[];for(let a=0;a<e.length;a++)o.push(s(e[a],c,t,n));return o}function r(e,c,t,n=!0){const a=c?c.vnode:null;if(c){let n=c.parent;const a=c.proxy,s=t;while(n){const c=n.ec;if(c)for(let t=0;t<c.length;t++)if(!1===c[t](e,a,s))return;n=n.parent}const r=c.appContext.config.errorHandler;if(r)return void i(r,null,10,[e,a,s])}o(e,t,a,n)}function o(e,c,t,n=!0){console.error(e)}let l=!1,f=!1;const u=[];let h=0;const m=[];let d=null,p=0;const z=Promise.resolve();let v=null;function g(e){const c=v||z;return e?c.then(this?e.bind(this):e):c}function H(e){let c=h+1,t=u.length;while(c<t){const n=c+t>>>1,a=x(u[n]);a<e?c=n+1:t=n}return c}function V(e){u.length&&u.includes(e,l&&e.allowRecurse?h+1:h)||(null==e.id?u.push(e):u.splice(H(e.id),0,e),M())}function M(){l||f||(f=!0,v=z.then(N))}function C(e){const c=u.indexOf(e);c>h&&u.splice(c,1)}function L(e){(0,a.kJ)(e)?m.push(...e):d&&d.includes(e,e.allowRecurse?p+1:p)||m.push(e),M()}function y(e,c=(l?h+1:0)){for(0;c<u.length;c++){const e=u[c];e&&e.pre&&(u.splice(c,1),c--,e())}}function b(e){if(m.length){const e=[...new Set(m)];if(m.length=0,d)return void d.push(...e);for(d=e,d.sort(((e,c)=>x(e)-x(c))),p=0;p<d.length;p++)d[p]();d=null,p=0}}const x=e=>null==e.id?1/0:e.id,w=(e,c)=>{const t=x(e)-x(c);if(0===t){if(e.pre&&!c.pre)return-1;if(c.pre&&!e.pre)return 1}return t};function N(e){f=!1,l=!0,u.sort(w);a.dG;try{for(h=0;h<u.length;h++){const e=u[h];e&&!1!==e.active&&i(e,null,14)}}finally{h=0,u.length=0,b(e),l=!1,v=null,(u.length||m.length)&&N(e)}}new Set;new Map;function S(e,c,...t){if(e.isUnmounted)return;const n=e.vnode.props||a.kT;let i=t;const r=c.startsWith("update:"),o=r&&c.slice(7);if(o&&o in n){const e=`${"modelValue"===o?"model":o}Modifiers`,{number:c,trim:s}=n[e]||a.kT;s&&(i=t.map((e=>(0,a.HD)(e)?e.trim():e))),c&&(i=t.map(a.h5))}let l;let f=n[l=(0,a.hR)(c)]||n[l=(0,a.hR)((0,a._A)(c))];!f&&r&&(f=n[l=(0,a.hR)((0,a.rs)(c))]),f&&s(f,e,6,i);const u=n[l+"Once"];if(u){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,s(u,e,6,i)}}function k(e,c,t=!1){const n=c.emitsCache,i=n.get(e);if(void 0!==i)return i;const s=e.emits;let r={},o=!1;if(!(0,a.mf)(e)){const n=e=>{const t=k(e,c,!0);t&&(o=!0,(0,a.l7)(r,t))};!t&&c.mixins.length&&c.mixins.forEach(n),e.extends&&n(e.extends),e.mixins&&e.mixins.forEach(n)}return s||o?((0,a.kJ)(s)?s.forEach((e=>r[e]=null)):(0,a.l7)(r,s),(0,a.Kn)(e)&&n.set(e,r),r):((0,a.Kn)(e)&&n.set(e,null),null)}function A(e,c){return!(!e||!(0,a.F7)(c))&&(c=c.slice(2).replace(/Once$/,""),(0,a.RI)(e,c[0].toLowerCase()+c.slice(1))||(0,a.RI)(e,(0,a.rs)(c))||(0,a.RI)(e,c))}let _=null,E=null;function T(e){const c=_;return _=e,E=e&&e.type.__scopeId||null,c}function I(e){E=e}function R(){E=null}function P(e,c=_,t){if(!c)return e;if(e._n)return e;const n=(...t)=>{n._d&&Bc(-1);const a=T(c);let i;try{i=e(...t)}finally{T(a),n._d&&Bc(1)}return i};return n._n=!0,n._c=!0,n._d=!0,n}function O(e){const{type:c,vnode:t,proxy:n,withProxy:i,props:s,propsOptions:[o],slots:l,attrs:f,emit:u,render:h,renderCache:m,data:d,setupState:p,ctx:z,inheritAttrs:v}=e;let g,H;const V=T(e);try{if(4&t.shapeFlag){const e=i||n;g=it(h.call(e,e,m,s,p,d,z)),H=f}else{const e=c;0,g=it(e.length>1?e(s,{attrs:f,slots:l,emit:u}):e(s,null)),H=c.props?f:D(f)}}catch(C){Pc.length=0,r(C,e,1),g=Qc(Ic)}let M=g;if(H&&!1!==v){const e=Object.keys(H),{shapeFlag:c}=M;e.length&&7&c&&(o&&e.some(a.tR)&&(H=F(H,o)),M=ct(M,H))}return t.dirs&&(M=ct(M),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition&&(M.transition=t.transition),g=M,T(V),g}const D=e=>{let c;for(const t in e)("class"===t||"style"===t||(0,a.F7)(t))&&((c||(c={}))[t]=e[t]);return c},F=(e,c)=>{const t={};for(const n in e)(0,a.tR)(n)&&n.slice(9)in c||(t[n]=e[n]);return t};function U(e,c,t){const{props:n,children:a,component:i}=e,{props:s,children:r,patchFlag:o}=c,l=i.emitsOptions;if(c.dirs||c.transition)return!0;if(!(t&&o>=0))return!(!a&&!r||r&&r.$stable)||n!==s&&(n?!s||B(n,s,l):!!s);if(1024&o)return!0;if(16&o)return n?B(n,s,l):!!s;if(8&o){const e=c.dynamicProps;for(let c=0;c<e.length;c++){const t=e[c];if(s[t]!==n[t]&&!A(l,t))return!0}}return!1}function B(e,c,t){const n=Object.keys(c);if(n.length!==Object.keys(e).length)return!0;for(let a=0;a<n.length;a++){const i=n[a];if(c[i]!==e[i]&&!A(t,i))return!0}return!1}function j({vnode:e,parent:c},t){while(c&&c.subTree===e)(e=c.vnode).el=t,c=c.parent}const q=e=>e.__isSuspense;function $(e,c){c&&c.pendingBranch?(0,a.kJ)(e)?c.effects.push(...e):c.effects.push(e):L(e)}function G(e,c){if(mt){let t=mt.provides;const n=mt.parent&&mt.parent.provides;n===t&&(t=mt.provides=Object.create(n)),t[e]=c}else 0}function W(e,c,t=!1){const n=mt||_;if(n){const i=null==n.parent?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return t&&(0,a.mf)(c)?c.call(n.proxy):c}else 0}const K={};function Z(e,c,t){return J(e,c,t)}function J(e,c,{immediate:t,deep:r,flush:o,onTrack:l,onTrigger:f}=a.kT){const u=(0,n.nZ)()===(null===mt||void 0===mt?void 0:mt.scope)?mt:null;let h,m,d=!1,p=!1;if((0,n.dq)(e)?(h=()=>e.value,d=(0,n.yT)(e)):(0,n.PG)(e)?(h=()=>e,r=!0):(0,a.kJ)(e)?(p=!0,d=e.some((e=>(0,n.PG)(e)||(0,n.yT)(e))),h=()=>e.map((e=>(0,n.dq)(e)?e.value:(0,n.PG)(e)?X(e):(0,a.mf)(e)?i(e,u,2):void 0))):h=(0,a.mf)(e)?c?()=>i(e,u,2):()=>{if(!u||!u.isUnmounted)return m&&m(),s(e,u,3,[v])}:a.dG,c&&r){const e=h;h=()=>X(e())}let z,v=e=>{m=C.onStop=()=>{i(e,u,4)}};if(Vt){if(v=a.dG,c?t&&s(c,u,3,[h(),p?[]:void 0,v]):h(),"sync"!==o)return a.dG;{const e=Et();z=e.__watcherHandles||(e.__watcherHandles=[])}}let g=p?new Array(e.length).fill(K):K;const H=()=>{if(C.active)if(c){const e=C.run();(r||d||(p?e.some(((e,c)=>(0,a.aU)(e,g[c]))):(0,a.aU)(e,g)))&&(m&&m(),s(c,u,3,[e,g===K?void 0:p&&g[0]===K?[]:g,v]),g=e)}else C.run()};let M;H.allowRecurse=!!c,"sync"===o?M=H:"post"===o?M=()=>xc(H,u&&u.suspense):(H.pre=!0,u&&(H.id=u.uid),M=()=>V(H));const C=new n.qq(h,M);c?t?H():g=C.run():"post"===o?xc(C.run.bind(C),u&&u.suspense):C.run();const L=()=>{C.stop(),u&&u.scope&&(0,a.Od)(u.scope.effects,C)};return z&&z.push(L),L}function Y(e,c,t){const n=this.proxy,i=(0,a.HD)(e)?e.includes(".")?Q(n,e):()=>n[e]:e.bind(n,n);let s;(0,a.mf)(c)?s=c:(s=c.handler,t=c);const r=mt;pt(this);const o=J(i,s.bind(n),t);return r?pt(r):zt(),o}function Q(e,c){const t=c.split(".");return()=>{let c=e;for(let e=0;e<t.length&&c;e++)c=c[t[e]];return c}}function X(e,c){if(!(0,a.Kn)(e)||e["__v_skip"])return e;if(c=c||new Set,c.has(e))return e;if(c.add(e),(0,n.dq)(e))X(e.value,c);else if((0,a.kJ)(e))for(let t=0;t<e.length;t++)X(e[t],c);else if((0,a.DM)(e)||(0,a._N)(e))e.forEach((e=>{X(e,c)}));else if((0,a.PO)(e))for(const t in e)X(e[t],c);return e}function ee(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Le((()=>{e.isMounted=!0})),xe((()=>{e.isUnmounting=!0})),e}const ce=[Function,Array],te={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ce,onEnter:ce,onAfterEnter:ce,onEnterCancelled:ce,onBeforeLeave:ce,onLeave:ce,onAfterLeave:ce,onLeaveCancelled:ce,onBeforeAppear:ce,onAppear:ce,onAfterAppear:ce,onAppearCancelled:ce},setup(e,{slots:c}){const t=dt(),a=ee();let i;return()=>{const s=c.default&&le(c.default(),!0);if(!s||!s.length)return;let r=s[0];if(s.length>1){let e=!1;for(const c of s)if(c.type!==Ic){0,r=c,e=!0;break}}const o=(0,n.IU)(e),{mode:l}=o;if(a.isLeaving)return se(r);const f=re(r);if(!f)return se(r);const u=ie(f,o,a,t);oe(f,u);const h=t.subTree,m=h&&re(h);let d=!1;const{getTransitionKey:p}=f.type;if(p){const e=p();void 0===i?i=e:e!==i&&(i=e,d=!0)}if(m&&m.type!==Ic&&(!Wc(f,m)||d)){const e=ie(m,o,a,t);if(oe(m,e),"out-in"===l)return a.isLeaving=!0,e.afterLeave=()=>{a.isLeaving=!1,!1!==t.update.active&&t.update()},se(r);"in-out"===l&&f.type!==Ic&&(e.delayLeave=(e,c,t)=>{const n=ae(a,m);n[String(m.key)]=m,e._leaveCb=()=>{c(),e._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=t})}return r}}},ne=te;function ae(e,c){const{leavingVNodes:t}=e;let n=t.get(c.type);return n||(n=Object.create(null),t.set(c.type,n)),n}function ie(e,c,t,n){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:l,onEnter:f,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:m,onLeave:d,onAfterLeave:p,onLeaveCancelled:z,onBeforeAppear:v,onAppear:g,onAfterAppear:H,onAppearCancelled:V}=c,M=String(e.key),C=ae(t,e),L=(e,c)=>{e&&s(e,n,9,c)},y=(e,c)=>{const t=c[1];L(e,c),(0,a.kJ)(e)?e.every((e=>e.length<=1))&&t():e.length<=1&&t()},b={mode:r,persisted:o,beforeEnter(c){let n=l;if(!t.isMounted){if(!i)return;n=v||l}c._leaveCb&&c._leaveCb(!0);const a=C[M];a&&Wc(e,a)&&a.el._leaveCb&&a.el._leaveCb(),L(n,[c])},enter(e){let c=f,n=u,a=h;if(!t.isMounted){if(!i)return;c=g||f,n=H||u,a=V||h}let s=!1;const r=e._enterCb=c=>{s||(s=!0,L(c?a:n,[e]),b.delayedLeave&&b.delayedLeave(),e._enterCb=void 0)};c?y(c,[e,r]):r()},leave(c,n){const a=String(e.key);if(c._enterCb&&c._enterCb(!0),t.isUnmounting)return n();L(m,[c]);let i=!1;const s=c._leaveCb=t=>{i||(i=!0,n(),L(t?z:p,[c]),c._leaveCb=void 0,C[a]===e&&delete C[a])};C[a]=e,d?y(d,[c,s]):s()},clone(e){return ie(e,c,t,n)}};return b}function se(e){if(he(e))return e=ct(e),e.children=null,e}function re(e){return he(e)?e.children?e.children[0]:void 0:e}function oe(e,c){6&e.shapeFlag&&e.component?oe(e.component.subTree,c):128&e.shapeFlag?(e.ssContent.transition=c.clone(e.ssContent),e.ssFallback.transition=c.clone(e.ssFallback)):e.transition=c}function le(e,c=!1,t){let n=[],a=0;for(let i=0;i<e.length;i++){let s=e[i];const r=null==t?s.key:String(t)+String(null!=s.key?s.key:i);s.type===Ec?(128&s.patchFlag&&a++,n=n.concat(le(s.children,c,r))):(c||s.type!==Ic)&&n.push(null!=r?ct(s,{key:r}):s)}if(a>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function fe(e){return(0,a.mf)(e)?{setup:e,name:e.name}:e}const ue=e=>!!e.type.__asyncLoader;const he=e=>e.type.__isKeepAlive;RegExp,RegExp;function me(e,c){return(0,a.kJ)(e)?e.some((e=>me(e,c))):(0,a.HD)(e)?e.split(",").includes(c):!!(0,a.Kj)(e)&&e.test(c)}function de(e,c){ze(e,"a",c)}function pe(e,c){ze(e,"da",c)}function ze(e,c,t=mt){const n=e.__wdc||(e.__wdc=()=>{let c=t;while(c){if(c.isDeactivated)return;c=c.parent}return e()});if(Ve(c,n,t),t){let e=t.parent;while(e&&e.parent)he(e.parent.vnode)&&ve(n,c,t,e),e=e.parent}}function ve(e,c,t,n){const i=Ve(c,e,n,!0);we((()=>{(0,a.Od)(n[c],i)}),t)}function ge(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function He(e){return 128&e.shapeFlag?e.ssContent:e}function Ve(e,c,t=mt,a=!1){if(t){const i=t[e]||(t[e]=[]),r=c.__weh||(c.__weh=(...a)=>{if(t.isUnmounted)return;(0,n.Jd)(),pt(t);const i=s(c,t,e,a);return zt(),(0,n.lk)(),i});return a?i.unshift(r):i.push(r),r}}const Me=e=>(c,t=mt)=>(!Vt||"sp"===e)&&Ve(e,((...e)=>c(...e)),t),Ce=Me("bm"),Le=Me("m"),ye=Me("bu"),be=Me("u"),xe=Me("bum"),we=Me("um"),Ne=Me("sp"),Se=Me("rtg"),ke=Me("rtc");function Ae(e,c=mt){Ve("ec",e,c)}function _e(e,c){const t=_;if(null===t)return e;const n=wt(t)||t.proxy,i=e.dirs||(e.dirs=[]);for(let s=0;s<c.length;s++){let[e,t,r,o=a.kT]=c[s];e&&((0,a.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&X(t),i.push({dir:e,instance:n,value:t,oldValue:void 0,arg:r,modifiers:o}))}return e}function Ee(e,c,t,a){const i=e.dirs,r=c&&c.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let f=l.dir[a];f&&((0,n.Jd)(),s(f,t,8,[e.el,l,e,c]),(0,n.lk)())}}const Te="components";function Ie(e,c){return Oe(Te,e,!0,c)||e}const Re=Symbol();function Pe(e){return(0,a.HD)(e)?Oe(Te,e,!1)||e:e||Re}function Oe(e,c,t=!0,n=!1){const i=_||mt;if(i){const t=i.type;if(e===Te){const e=Nt(t,!1);if(e&&(e===c||e===(0,a._A)(c)||e===(0,a.kC)((0,a._A)(c))))return t}const s=De(i[e]||t[e],c)||De(i.appContext[e],c);return!s&&n?t:s}}function De(e,c){return e&&(e[c]||e[(0,a._A)(c)]||e[(0,a.kC)((0,a._A)(c))])}function Fe(e,c,t,n){let i;const s=t&&t[n];if((0,a.kJ)(e)||(0,a.HD)(e)){i=new Array(e.length);for(let t=0,n=e.length;t<n;t++)i[t]=c(e[t],t,void 0,s&&s[t])}else if("number"===typeof e){0,i=new Array(e);for(let t=0;t<e;t++)i[t]=c(t+1,t,void 0,s&&s[t])}else if((0,a.Kn)(e))if(e[Symbol.iterator])i=Array.from(e,((e,t)=>c(e,t,void 0,s&&s[t])));else{const t=Object.keys(e);i=new Array(t.length);for(let n=0,a=t.length;n<a;n++){const a=t[n];i[n]=c(e[a],a,n,s&&s[n])}}else i=[];return t&&(t[n]=i),i}const Ue=e=>e?vt(e)?wt(e)||e.proxy:Ue(e.parent):null,Be=(0,a.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ue(e.parent),$root:e=>Ue(e.root),$emit:e=>e.emit,$options:e=>Je(e),$forceUpdate:e=>e.f||(e.f=()=>V(e.update)),$nextTick:e=>e.n||(e.n=g.bind(e.proxy)),$watch:e=>Y.bind(e)}),je=(e,c)=>e!==a.kT&&!e.__isScriptSetup&&(0,a.RI)(e,c),qe={get({_:e},c){const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:l,appContext:f}=e;let u;if("$"!==c[0]){const n=o[c];if(void 0!==n)switch(n){case 1:return i[c];case 2:return s[c];case 4:return t[c];case 3:return r[c]}else{if(je(i,c))return o[c]=1,i[c];if(s!==a.kT&&(0,a.RI)(s,c))return o[c]=2,s[c];if((u=e.propsOptions[0])&&(0,a.RI)(u,c))return o[c]=3,r[c];if(t!==a.kT&&(0,a.RI)(t,c))return o[c]=4,t[c];$e&&(o[c]=0)}}const h=Be[c];let m,d;return h?("$attrs"===c&&(0,n.j)(e,"get",c),h(e)):(m=l.__cssModules)&&(m=m[c])?m:t!==a.kT&&(0,a.RI)(t,c)?(o[c]=4,t[c]):(d=f.config.globalProperties,(0,a.RI)(d,c)?d[c]:void 0)},set({_:e},c,t){const{data:n,setupState:i,ctx:s}=e;return je(i,c)?(i[c]=t,!0):n!==a.kT&&(0,a.RI)(n,c)?(n[c]=t,!0):!(0,a.RI)(e.props,c)&&(("$"!==c[0]||!(c.slice(1)in e))&&(s[c]=t,!0))},has({_:{data:e,setupState:c,accessCache:t,ctx:n,appContext:i,propsOptions:s}},r){let o;return!!t[r]||e!==a.kT&&(0,a.RI)(e,r)||je(c,r)||(o=s[0])&&(0,a.RI)(o,r)||(0,a.RI)(n,r)||(0,a.RI)(Be,r)||(0,a.RI)(i.config.globalProperties,r)},defineProperty(e,c,t){return null!=t.get?e._.accessCache[c]=0:(0,a.RI)(t,"value")&&this.set(e,c,t.value,null),Reflect.defineProperty(e,c,t)}};let $e=!0;function Ge(e){const c=Je(e),t=e.proxy,i=e.ctx;$e=!1,c.beforeCreate&&Ke(c.beforeCreate,e,"bc");const{data:s,computed:r,methods:o,watch:l,provide:f,inject:u,created:h,beforeMount:m,mounted:d,beforeUpdate:p,updated:z,activated:v,deactivated:g,beforeDestroy:H,beforeUnmount:V,destroyed:M,unmounted:C,render:L,renderTracked:y,renderTriggered:b,errorCaptured:x,serverPrefetch:w,expose:N,inheritAttrs:S,components:k,directives:A,filters:_}=c,E=null;if(u&&We(u,i,E,e.appContext.config.unwrapInjectedRef),o)for(const n in o){const e=o[n];(0,a.mf)(e)&&(i[n]=e.bind(t))}if(s){0;const c=s.call(t,t);0,(0,a.Kn)(c)&&(e.data=(0,n.qj)(c))}if($e=!0,r)for(const n in r){const e=r[n],c=(0,a.mf)(e)?e.bind(t,t):(0,a.mf)(e.get)?e.get.bind(t,t):a.dG;0;const s=!(0,a.mf)(e)&&(0,a.mf)(e.set)?e.set.bind(t):a.dG,o=kt({get:c,set:s});Object.defineProperty(i,n,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e})}if(l)for(const n in l)Ze(l[n],i,t,n);if(f){const e=(0,a.mf)(f)?f.call(t):f;Reflect.ownKeys(e).forEach((c=>{G(c,e[c])}))}function T(e,c){(0,a.kJ)(c)?c.forEach((c=>e(c.bind(t)))):c&&e(c.bind(t))}if(h&&Ke(h,e,"c"),T(Ce,m),T(Le,d),T(ye,p),T(be,z),T(de,v),T(pe,g),T(Ae,x),T(ke,y),T(Se,b),T(xe,V),T(we,C),T(Ne,w),(0,a.kJ)(N))if(N.length){const c=e.exposed||(e.exposed={});N.forEach((e=>{Object.defineProperty(c,e,{get:()=>t[e],set:c=>t[e]=c})}))}else e.exposed||(e.exposed={});L&&e.render===a.dG&&(e.render=L),null!=S&&(e.inheritAttrs=S),k&&(e.components=k),A&&(e.directives=A)}function We(e,c,t=a.dG,i=!1){(0,a.kJ)(e)&&(e=cc(e));for(const s in e){const t=e[s];let r;r=(0,a.Kn)(t)?"default"in t?W(t.from||s,t.default,!0):W(t.from||s):W(t),(0,n.dq)(r)&&i?Object.defineProperty(c,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:e=>r.value=e}):c[s]=r}}function Ke(e,c,t){s((0,a.kJ)(e)?e.map((e=>e.bind(c.proxy))):e.bind(c.proxy),c,t)}function Ze(e,c,t,n){const i=n.includes(".")?Q(t,n):()=>t[n];if((0,a.HD)(e)){const t=c[e];(0,a.mf)(t)&&Z(i,t)}else if((0,a.mf)(e))Z(i,e.bind(t));else if((0,a.Kn)(e))if((0,a.kJ)(e))e.forEach((e=>Ze(e,c,t,n)));else{const n=(0,a.mf)(e.handler)?e.handler.bind(t):c[e.handler];(0,a.mf)(n)&&Z(i,n,e)}else 0}function Je(e){const c=e.type,{mixins:t,extends:n}=c,{mixins:i,optionsCache:s,config:{optionMergeStrategies:r}}=e.appContext,o=s.get(c);let l;return o?l=o:i.length||t||n?(l={},i.length&&i.forEach((e=>Ye(l,e,r,!0))),Ye(l,c,r)):l=c,(0,a.Kn)(c)&&s.set(c,l),l}function Ye(e,c,t,n=!1){const{mixins:a,extends:i}=c;i&&Ye(e,i,t,!0),a&&a.forEach((c=>Ye(e,c,t,!0)));for(const s in c)if(n&&"expose"===s);else{const n=Qe[s]||t&&t[s];e[s]=n?n(e[s],c[s]):c[s]}return e}const Qe={data:Xe,props:nc,emits:nc,methods:nc,computed:nc,beforeCreate:tc,created:tc,beforeMount:tc,mounted:tc,beforeUpdate:tc,updated:tc,beforeDestroy:tc,beforeUnmount:tc,destroyed:tc,unmounted:tc,activated:tc,deactivated:tc,errorCaptured:tc,serverPrefetch:tc,components:nc,directives:nc,watch:ac,provide:Xe,inject:ec};function Xe(e,c){return c?e?function(){return(0,a.l7)((0,a.mf)(e)?e.call(this,this):e,(0,a.mf)(c)?c.call(this,this):c)}:c:e}function ec(e,c){return nc(cc(e),cc(c))}function cc(e){if((0,a.kJ)(e)){const c={};for(let t=0;t<e.length;t++)c[e[t]]=e[t];return c}return e}function tc(e,c){return e?[...new Set([].concat(e,c))]:c}function nc(e,c){return e?(0,a.l7)((0,a.l7)(Object.create(null),e),c):c}function ac(e,c){if(!e)return c;if(!c)return e;const t=(0,a.l7)(Object.create(null),e);for(const n in c)t[n]=tc(e[n],c[n]);return t}function ic(e,c,t,i=!1){const s={},r={};(0,a.Nj)(r,Kc,1),e.propsDefaults=Object.create(null),rc(e,c,s,r);for(const n in e.propsOptions[0])n in s||(s[n]=void 0);t?e.props=i?s:(0,n.Um)(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function sc(e,c,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=e,l=(0,n.IU)(s),[f]=e.propsOptions;let u=!1;if(!(i||o>0)||16&o){let n;rc(e,c,s,r)&&(u=!0);for(const i in l)c&&((0,a.RI)(c,i)||(n=(0,a.rs)(i))!==i&&(0,a.RI)(c,n))||(f?!t||void 0===t[i]&&void 0===t[n]||(s[i]=oc(f,l,i,void 0,e,!0)):delete s[i]);if(r!==l)for(const e in r)c&&(0,a.RI)(c,e)||(delete r[e],u=!0)}else if(8&o){const t=e.vnode.dynamicProps;for(let n=0;n<t.length;n++){let i=t[n];if(A(e.emitsOptions,i))continue;const o=c[i];if(f)if((0,a.RI)(r,i))o!==r[i]&&(r[i]=o,u=!0);else{const c=(0,a._A)(i);s[c]=oc(f,l,c,o,e,!1)}else o!==r[i]&&(r[i]=o,u=!0)}}u&&(0,n.X$)(e,"set","$attrs")}function rc(e,c,t,i){const[s,r]=e.propsOptions;let o,l=!1;if(c)for(let n in c){if((0,a.Gg)(n))continue;const f=c[n];let u;s&&(0,a.RI)(s,u=(0,a._A)(n))?r&&r.includes(u)?(o||(o={}))[u]=f:t[u]=f:A(e.emitsOptions,n)||n in i&&f===i[n]||(i[n]=f,l=!0)}if(r){const c=(0,n.IU)(t),i=o||a.kT;for(let n=0;n<r.length;n++){const o=r[n];t[o]=oc(s,c,o,i[o],e,!(0,a.RI)(i,o))}}return l}function oc(e,c,t,n,i,s){const r=e[t];if(null!=r){const e=(0,a.RI)(r,"default");if(e&&void 0===n){const e=r.default;if(r.type!==Function&&(0,a.mf)(e)){const{propsDefaults:a}=i;t in a?n=a[t]:(pt(i),n=a[t]=e.call(null,c),zt())}else n=e}r[0]&&(s&&!e?n=!1:!r[1]||""!==n&&n!==(0,a.rs)(t)||(n=!0))}return n}function lc(e,c,t=!1){const n=c.propsCache,i=n.get(e);if(i)return i;const s=e.props,r={},o=[];let l=!1;if(!(0,a.mf)(e)){const n=e=>{l=!0;const[t,n]=lc(e,c,!0);(0,a.l7)(r,t),n&&o.push(...n)};!t&&c.mixins.length&&c.mixins.forEach(n),e.extends&&n(e.extends),e.mixins&&e.mixins.forEach(n)}if(!s&&!l)return(0,a.Kn)(e)&&n.set(e,a.Z6),a.Z6;if((0,a.kJ)(s))for(let u=0;u<s.length;u++){0;const e=(0,a._A)(s[u]);fc(e)&&(r[e]=a.kT)}else if(s){0;for(const e in s){const c=(0,a._A)(e);if(fc(c)){const t=s[e],n=r[c]=(0,a.kJ)(t)||(0,a.mf)(t)?{type:t}:Object.assign({},t);if(n){const e=mc(Boolean,n.type),t=mc(String,n.type);n[0]=e>-1,n[1]=t<0||e<t,(e>-1||(0,a.RI)(n,"default"))&&o.push(c)}}}}const f=[r,o];return(0,a.Kn)(e)&&n.set(e,f),f}function fc(e){return"$"!==e[0]}function uc(e){const c=e&&e.toString().match(/^\s*(function|class) (\w+)/);return c?c[2]:null===e?"null":""}function hc(e,c){return uc(e)===uc(c)}function mc(e,c){return(0,a.kJ)(c)?c.findIndex((c=>hc(c,e))):(0,a.mf)(c)&&hc(c,e)?0:-1}const dc=e=>"_"===e[0]||"$stable"===e,pc=e=>(0,a.kJ)(e)?e.map(it):[it(e)],zc=(e,c,t)=>{if(c._n)return c;const n=P(((...e)=>pc(c(...e))),t);return n._c=!1,n},vc=(e,c,t)=>{const n=e._ctx;for(const i in e){if(dc(i))continue;const t=e[i];if((0,a.mf)(t))c[i]=zc(i,t,n);else if(null!=t){0;const e=pc(t);c[i]=()=>e}}},gc=(e,c)=>{const t=pc(c);e.slots.default=()=>t},Hc=(e,c)=>{if(32&e.vnode.shapeFlag){const t=c._;t?(e.slots=(0,n.IU)(c),(0,a.Nj)(c,"_",t)):vc(c,e.slots={})}else e.slots={},c&&gc(e,c);(0,a.Nj)(e.slots,Kc,1)},Vc=(e,c,t)=>{const{vnode:n,slots:i}=e;let s=!0,r=a.kT;if(32&n.shapeFlag){const e=c._;e?t&&1===e?s=!1:((0,a.l7)(i,c),t||1!==e||delete i._):(s=!c.$stable,vc(c,i)),r=c}else c&&(gc(e,c),r={default:1});if(s)for(const a in i)dc(a)||a in r||delete i[a]};function Mc(){return{app:null,config:{isNativeTag:a.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cc=0;function Lc(e,c){return function(t,n=null){(0,a.mf)(t)||(t=Object.assign({},t)),null==n||(0,a.Kn)(n)||(n=null);const i=Mc(),s=new Set;let r=!1;const o=i.app={_uid:Cc++,_component:t,_props:n,_container:null,_context:i,_instance:null,version:Tt,get config(){return i.config},set config(e){0},use(e,...c){return s.has(e)||(e&&(0,a.mf)(e.install)?(s.add(e),e.install(o,...c)):(0,a.mf)(e)&&(s.add(e),e(o,...c))),o},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),o},component(e,c){return c?(i.components[e]=c,o):i.components[e]},directive(e,c){return c?(i.directives[e]=c,o):i.directives[e]},mount(a,s,l){if(!r){0;const f=Qc(t,n);return f.appContext=i,s&&c?c(f,a):e(f,a,l),r=!0,o._container=a,a.__vue_app__=o,wt(f.component)||f.component.proxy}},unmount(){r&&(e(null,o._container),delete o._container.__vue_app__)},provide(e,c){return i.provides[e]=c,o}};return o}}function yc(e,c,t,s,r=!1){if((0,a.kJ)(e))return void e.forEach(((e,n)=>yc(e,c&&((0,a.kJ)(c)?c[n]:c),t,s,r)));if(ue(s)&&!r)return;const o=4&s.shapeFlag?wt(s.component)||s.component.proxy:s.el,l=r?null:o,{i:f,r:u}=e;const h=c&&c.r,m=f.refs===a.kT?f.refs={}:f.refs,d=f.setupState;if(null!=h&&h!==u&&((0,a.HD)(h)?(m[h]=null,(0,a.RI)(d,h)&&(d[h]=null)):(0,n.dq)(h)&&(h.value=null)),(0,a.mf)(u))i(u,f,12,[l,m]);else{const c=(0,a.HD)(u),i=(0,n.dq)(u);if(c||i){const n=()=>{if(e.f){const t=c?(0,a.RI)(d,u)?d[u]:m[u]:u.value;r?(0,a.kJ)(t)&&(0,a.Od)(t,o):(0,a.kJ)(t)?t.includes(o)||t.push(o):c?(m[u]=[o],(0,a.RI)(d,u)&&(d[u]=m[u])):(u.value=[o],e.k&&(m[e.k]=u.value))}else c?(m[u]=l,(0,a.RI)(d,u)&&(d[u]=l)):i&&(u.value=l,e.k&&(m[e.k]=l))};l?(n.id=-1,xc(n,t)):n()}else 0}}function bc(){}const xc=$;function wc(e){return Nc(e)}function Nc(e,c){bc();const t=(0,a.E9)();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:l,createComment:f,setText:u,setElementText:h,parentNode:m,nextSibling:d,setScopeId:p=a.dG,insertStaticContent:z}=e,v=(e,c,t,n=null,a=null,i=null,s=!1,r=null,o=!!c.dynamicChildren)=>{if(e===c)return;e&&!Wc(e,c)&&(n=Q(e),W(e,a,i,!0),e=null),-2===c.patchFlag&&(o=!1,c.dynamicChildren=null);const{type:l,ref:f,shapeFlag:u}=c;switch(l){case Tc:g(e,c,t,n);break;case Ic:H(e,c,t,n);break;case Rc:null==e&&M(c,t,n,s);break;case Ec:T(e,c,t,n,a,i,s,r,o);break;default:1&u?w(e,c,t,n,a,i,s,r,o):6&u?I(e,c,t,n,a,i,s,r,o):(64&u||128&u)&&l.process(e,c,t,n,a,i,s,r,o,ee)}null!=f&&a&&yc(f,e&&e.ref,i,c||e,!c)},g=(e,c,t,n)=>{if(null==e)i(c.el=l(c.children),t,n);else{const t=c.el=e.el;c.children!==e.children&&u(t,c.children)}},H=(e,c,t,n)=>{null==e?i(c.el=f(c.children||""),t,n):c.el=e.el},M=(e,c,t,n)=>{[e.el,e.anchor]=z(e.children,c,t,n,e.el,e.anchor)},L=({el:e,anchor:c},t,n)=>{let a;while(e&&e!==c)a=d(e),i(e,t,n),e=a;i(c,t,n)},x=({el:e,anchor:c})=>{let t;while(e&&e!==c)t=d(e),s(e),e=t;s(c)},w=(e,c,t,n,a,i,s,r,o)=>{s=s||"svg"===c.type,null==e?N(c,t,n,a,i,s,r,o):A(e,c,a,i,s,r,o)},N=(e,c,t,n,s,l,f,u)=>{let m,d;const{type:p,props:z,shapeFlag:v,transition:g,dirs:H}=e;if(m=e.el=o(e.type,l,z&&z.is,z),8&v?h(m,e.children):16&v&&k(e.children,m,null,n,s,l&&"foreignObject"!==p,f,u),H&&Ee(e,null,n,"created"),S(m,e,e.scopeId,f,n),z){for(const c in z)"value"===c||(0,a.Gg)(c)||r(m,c,null,z[c],l,e.children,n,s,Y);"value"in z&&r(m,"value",null,z.value),(d=z.onVnodeBeforeMount)&&lt(d,n,e)}H&&Ee(e,null,n,"beforeMount");const V=(!s||s&&!s.pendingBranch)&&g&&!g.persisted;V&&g.beforeEnter(m),i(m,c,t),((d=z&&z.onVnodeMounted)||V||H)&&xc((()=>{d&&lt(d,n,e),V&&g.enter(m),H&&Ee(e,null,n,"mounted")}),s)},S=(e,c,t,n,a)=>{if(t&&p(e,t),n)for(let i=0;i<n.length;i++)p(e,n[i]);if(a){let t=a.subTree;if(c===t){const c=a.vnode;S(e,c,c.scopeId,c.slotScopeIds,a.parent)}}},k=(e,c,t,n,a,i,s,r,o=0)=>{for(let l=o;l<e.length;l++){const o=e[l]=r?st(e[l]):it(e[l]);v(null,o,c,t,n,a,i,s,r)}},A=(e,c,t,n,i,s,o)=>{const l=c.el=e.el;let{patchFlag:f,dynamicChildren:u,dirs:m}=c;f|=16&e.patchFlag;const d=e.props||a.kT,p=c.props||a.kT;let z;t&&Sc(t,!1),(z=p.onVnodeBeforeUpdate)&&lt(z,t,c,e),m&&Ee(c,e,t,"beforeUpdate"),t&&Sc(t,!0);const v=i&&"foreignObject"!==c.type;if(u?_(e.dynamicChildren,u,l,t,n,v,s):o||B(e,c,l,null,t,n,v,s,!1),f>0){if(16&f)E(l,c,d,p,t,n,i);else if(2&f&&d.class!==p.class&&r(l,"class",null,p.class,i),4&f&&r(l,"style",d.style,p.style,i),8&f){const a=c.dynamicProps;for(let c=0;c<a.length;c++){const s=a[c],o=d[s],f=p[s];f===o&&"value"!==s||r(l,s,o,f,i,e.children,t,n,Y)}}1&f&&e.children!==c.children&&h(l,c.children)}else o||null!=u||E(l,c,d,p,t,n,i);((z=p.onVnodeUpdated)||m)&&xc((()=>{z&&lt(z,t,c,e),m&&Ee(c,e,t,"updated")}),n)},_=(e,c,t,n,a,i,s)=>{for(let r=0;r<c.length;r++){const o=e[r],l=c[r],f=o.el&&(o.type===Ec||!Wc(o,l)||70&o.shapeFlag)?m(o.el):t;v(o,l,f,null,n,a,i,s,!0)}},E=(e,c,t,n,i,s,o)=>{if(t!==n){if(t!==a.kT)for(const l in t)(0,a.Gg)(l)||l in n||r(e,l,t[l],null,o,c.children,i,s,Y);for(const l in n){if((0,a.Gg)(l))continue;const f=n[l],u=t[l];f!==u&&"value"!==l&&r(e,l,u,f,o,c.children,i,s,Y)}"value"in n&&r(e,"value",t.value,n.value)}},T=(e,c,t,n,a,s,r,o,f)=>{const u=c.el=e?e.el:l(""),h=c.anchor=e?e.anchor:l("");let{patchFlag:m,dynamicChildren:d,slotScopeIds:p}=c;p&&(o=o?o.concat(p):p),null==e?(i(u,t,n),i(h,t,n),k(c.children,t,h,a,s,r,o,f)):m>0&&64&m&&d&&e.dynamicChildren?(_(e.dynamicChildren,d,t,a,s,r,o),(null!=c.key||a&&c===a.subTree)&&kc(e,c,!0)):B(e,c,t,h,a,s,r,o,f)},I=(e,c,t,n,a,i,s,r,o)=>{c.slotScopeIds=r,null==e?512&c.shapeFlag?a.ctx.activate(c,t,n,s,o):R(c,t,n,a,i,s,o):P(e,c,o)},R=(e,c,t,n,a,i,s)=>{const r=e.component=ht(e,n,a);if(he(e)&&(r.ctx.renderer=ee),Mt(r),r.asyncDep){if(a&&a.registerDep(r,D),!e.el){const e=r.subTree=Qc(Ic);H(null,e,c,t)}}else D(r,e,c,t,a,i,s)},P=(e,c,t)=>{const n=c.component=e.component;if(U(e,c,t)){if(n.asyncDep&&!n.asyncResolved)return void F(n,c,t);n.next=c,C(n.update),n.update()}else c.el=e.el,n.vnode=c},D=(e,c,t,i,s,r,o)=>{const l=()=>{if(e.isMounted){let c,{next:t,bu:n,u:i,parent:l,vnode:f}=e,u=t;0,Sc(e,!1),t?(t.el=f.el,F(e,t,o)):t=f,n&&(0,a.ir)(n),(c=t.props&&t.props.onVnodeBeforeUpdate)&&lt(c,l,t,f),Sc(e,!0);const h=O(e);0;const d=e.subTree;e.subTree=h,v(d,h,m(d.el),Q(d),e,s,r),t.el=h.el,null===u&&j(e,h.el),i&&xc(i,s),(c=t.props&&t.props.onVnodeUpdated)&&xc((()=>lt(c,l,t,f)),s)}else{let n;const{el:o,props:l}=c,{bm:f,m:u,parent:h}=e,m=ue(c);if(Sc(e,!1),f&&(0,a.ir)(f),!m&&(n=l&&l.onVnodeBeforeMount)&&lt(n,h,c),Sc(e,!0),o&&te){const t=()=>{e.subTree=O(e),te(o,e.subTree,e,s,null)};m?c.type.__asyncLoader().then((()=>!e.isUnmounted&&t())):t()}else{0;const n=e.subTree=O(e);0,v(null,n,t,i,e,s,r),c.el=n.el}if(u&&xc(u,s),!m&&(n=l&&l.onVnodeMounted)){const e=c;xc((()=>lt(n,h,e)),s)}(256&c.shapeFlag||h&&ue(h.vnode)&&256&h.vnode.shapeFlag)&&e.a&&xc(e.a,s),e.isMounted=!0,c=t=i=null}},f=e.effect=new n.qq(l,(()=>V(u)),e.scope),u=e.update=()=>f.run();u.id=e.uid,Sc(e,!0),u()},F=(e,c,t)=>{c.component=e;const a=e.vnode.props;e.vnode=c,e.next=null,sc(e,c.props,a,t),Vc(e,c.children,t),(0,n.Jd)(),y(),(0,n.lk)()},B=(e,c,t,n,a,i,s,r,o=!1)=>{const l=e&&e.children,f=e?e.shapeFlag:0,u=c.children,{patchFlag:m,shapeFlag:d}=c;if(m>0){if(128&m)return void $(l,u,t,n,a,i,s,r,o);if(256&m)return void q(l,u,t,n,a,i,s,r,o)}8&d?(16&f&&Y(l,a,i),u!==l&&h(t,u)):16&f?16&d?$(l,u,t,n,a,i,s,r,o):Y(l,a,i,!0):(8&f&&h(t,""),16&d&&k(u,t,n,a,i,s,r,o))},q=(e,c,t,n,i,s,r,o,l)=>{e=e||a.Z6,c=c||a.Z6;const f=e.length,u=c.length,h=Math.min(f,u);let m;for(m=0;m<h;m++){const n=c[m]=l?st(c[m]):it(c[m]);v(e[m],n,t,null,i,s,r,o,l)}f>u?Y(e,i,s,!0,!1,h):k(c,t,n,i,s,r,o,l,h)},$=(e,c,t,n,i,s,r,o,l)=>{let f=0;const u=c.length;let h=e.length-1,m=u-1;while(f<=h&&f<=m){const n=e[f],a=c[f]=l?st(c[f]):it(c[f]);if(!Wc(n,a))break;v(n,a,t,null,i,s,r,o,l),f++}while(f<=h&&f<=m){const n=e[h],a=c[m]=l?st(c[m]):it(c[m]);if(!Wc(n,a))break;v(n,a,t,null,i,s,r,o,l),h--,m--}if(f>h){if(f<=m){const e=m+1,a=e<u?c[e].el:n;while(f<=m)v(null,c[f]=l?st(c[f]):it(c[f]),t,a,i,s,r,o,l),f++}}else if(f>m)while(f<=h)W(e[f],i,s,!0),f++;else{const d=f,p=f,z=new Map;for(f=p;f<=m;f++){const e=c[f]=l?st(c[f]):it(c[f]);null!=e.key&&z.set(e.key,f)}let g,H=0;const V=m-p+1;let M=!1,C=0;const L=new Array(V);for(f=0;f<V;f++)L[f]=0;for(f=d;f<=h;f++){const n=e[f];if(H>=V){W(n,i,s,!0);continue}let a;if(null!=n.key)a=z.get(n.key);else for(g=p;g<=m;g++)if(0===L[g-p]&&Wc(n,c[g])){a=g;break}void 0===a?W(n,i,s,!0):(L[a-p]=f+1,a>=C?C=a:M=!0,v(n,c[a],t,null,i,s,r,o,l),H++)}const y=M?Ac(L):a.Z6;for(g=y.length-1,f=V-1;f>=0;f--){const e=p+f,a=c[e],h=e+1<u?c[e+1].el:n;0===L[f]?v(null,a,t,h,i,s,r,o,l):M&&(g<0||f!==y[g]?G(a,t,h,2):g--)}}},G=(e,c,t,n,a=null)=>{const{el:s,type:r,transition:o,children:l,shapeFlag:f}=e;if(6&f)return void G(e.component.subTree,c,t,n);if(128&f)return void e.suspense.move(c,t,n);if(64&f)return void r.move(e,c,t,ee);if(r===Ec){i(s,c,t);for(let e=0;e<l.length;e++)G(l[e],c,t,n);return void i(e.anchor,c,t)}if(r===Rc)return void L(e,c,t);const u=2!==n&&1&f&&o;if(u)if(0===n)o.beforeEnter(s),i(s,c,t),xc((()=>o.enter(s)),a);else{const{leave:e,delayLeave:n,afterLeave:a}=o,r=()=>i(s,c,t),l=()=>{e(s,(()=>{r(),a&&a()}))};n?n(s,r,l):l()}else i(s,c,t)},W=(e,c,t,n=!1,a=!1)=>{const{type:i,props:s,ref:r,children:o,dynamicChildren:l,shapeFlag:f,patchFlag:u,dirs:h}=e;if(null!=r&&yc(r,null,t,e,!0),256&f)return void c.ctx.deactivate(e);const m=1&f&&h,d=!ue(e);let p;if(d&&(p=s&&s.onVnodeBeforeUnmount)&&lt(p,c,e),6&f)J(e.component,t,n);else{if(128&f)return void e.suspense.unmount(t,n);m&&Ee(e,null,c,"beforeUnmount"),64&f?e.type.remove(e,c,t,a,ee,n):l&&(i!==Ec||u>0&&64&u)?Y(l,c,t,!1,!0):(i===Ec&&384&u||!a&&16&f)&&Y(o,c,t),n&&K(e)}(d&&(p=s&&s.onVnodeUnmounted)||m)&&xc((()=>{p&&lt(p,c,e),m&&Ee(e,null,c,"unmounted")}),t)},K=e=>{const{type:c,el:t,anchor:n,transition:a}=e;if(c===Ec)return void Z(t,n);if(c===Rc)return void x(e);const i=()=>{s(t),a&&!a.persisted&&a.afterLeave&&a.afterLeave()};if(1&e.shapeFlag&&a&&!a.persisted){const{leave:c,delayLeave:n}=a,s=()=>c(t,i);n?n(e.el,i,s):s()}else i()},Z=(e,c)=>{let t;while(e!==c)t=d(e),s(e),e=t;s(c)},J=(e,c,t)=>{const{bum:n,scope:i,update:s,subTree:r,um:o}=e;n&&(0,a.ir)(n),i.stop(),s&&(s.active=!1,W(r,e,c,t)),o&&xc(o,c),xc((()=>{e.isUnmounted=!0}),c),c&&c.pendingBranch&&!c.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===c.pendingId&&(c.deps--,0===c.deps&&c.resolve())},Y=(e,c,t,n=!1,a=!1,i=0)=>{for(let s=i;s<e.length;s++)W(e[s],c,t,n,a)},Q=e=>6&e.shapeFlag?Q(e.component.subTree):128&e.shapeFlag?e.suspense.next():d(e.anchor||e.el),X=(e,c,t)=>{null==e?c._vnode&&W(c._vnode,null,null,!0):v(c._vnode||null,e,c,null,null,null,t),y(),b(),c._vnode=e},ee={p:v,um:W,m:G,r:K,mt:R,mc:k,pc:B,pbc:_,n:Q,o:e};let ce,te;return c&&([ce,te]=c(ee)),{render:X,hydrate:ce,createApp:Lc(X,ce)}}function Sc({effect:e,update:c},t){e.allowRecurse=c.allowRecurse=t}function kc(e,c,t=!1){const n=e.children,i=c.children;if((0,a.kJ)(n)&&(0,a.kJ)(i))for(let a=0;a<n.length;a++){const e=n[a];let c=i[a];1&c.shapeFlag&&!c.dynamicChildren&&((c.patchFlag<=0||32===c.patchFlag)&&(c=i[a]=st(i[a]),c.el=e.el),t||kc(e,c)),c.type===Tc&&(c.el=e.el)}}function Ac(e){const c=e.slice(),t=[0];let n,a,i,s,r;const o=e.length;for(n=0;n<o;n++){const o=e[n];if(0!==o){if(a=t[t.length-1],e[a]<o){c[n]=a,t.push(n);continue}i=0,s=t.length-1;while(i<s)r=i+s>>1,e[t[r]]<o?i=r+1:s=r;o<e[t[i]]&&(i>0&&(c[n]=t[i-1]),t[i]=n)}}i=t.length,s=t[i-1];while(i-- >0)t[i]=s,s=c[s];return t}const _c=e=>e.__isTeleport;const Ec=Symbol(void 0),Tc=Symbol(void 0),Ic=Symbol(void 0),Rc=Symbol(void 0),Pc=[];let Oc=null;function Dc(e=!1){Pc.push(Oc=e?null:[])}function Fc(){Pc.pop(),Oc=Pc[Pc.length-1]||null}let Uc=1;function Bc(e){Uc+=e}function jc(e){return e.dynamicChildren=Uc>0?Oc||a.Z6:null,Fc(),Uc>0&&Oc&&Oc.push(e),e}function qc(e,c,t,n,a,i){return jc(Yc(e,c,t,n,a,i,!0))}function $c(e,c,t,n,a){return jc(Qc(e,c,t,n,a,!0))}function Gc(e){return!!e&&!0===e.__v_isVNode}function Wc(e,c){return e.type===c.type&&e.key===c.key}const Kc="__vInternal",Zc=({key:e})=>null!=e?e:null,Jc=({ref:e,ref_key:c,ref_for:t})=>null!=e?(0,a.HD)(e)||(0,n.dq)(e)||(0,a.mf)(e)?{i:_,r:e,k:c,f:!!t}:e:null;function Yc(e,c=null,t=null,n=0,i=null,s=(e===Ec?0:1),r=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:c,key:c&&Zc(c),ref:c&&Jc(c),scopeId:E,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:_};return o?(rt(l,t),128&s&&e.normalize(l)):t&&(l.shapeFlag|=(0,a.HD)(t)?8:16),Uc>0&&!r&&Oc&&(l.patchFlag>0||6&s)&&32!==l.patchFlag&&Oc.push(l),l}const Qc=Xc;function Xc(e,c=null,t=null,i=0,s=null,r=!1){if(e&&e!==Re||(e=Ic),Gc(e)){const n=ct(e,c,!0);return t&&rt(n,t),Uc>0&&!r&&Oc&&(6&n.shapeFlag?Oc[Oc.indexOf(e)]=n:Oc.push(n)),n.patchFlag|=-2,n}if(St(e)&&(e=e.__vccOpts),c){c=et(c);let{class:e,style:t}=c;e&&!(0,a.HD)(e)&&(c.class=(0,a.C_)(e)),(0,a.Kn)(t)&&((0,n.X3)(t)&&!(0,a.kJ)(t)&&(t=(0,a.l7)({},t)),c.style=(0,a.j5)(t))}const o=(0,a.HD)(e)?1:q(e)?128:_c(e)?64:(0,a.Kn)(e)?4:(0,a.mf)(e)?2:0;return Yc(e,c,t,i,s,o,r,!0)}function et(e){return e?(0,n.X3)(e)||Kc in e?(0,a.l7)({},e):e:null}function ct(e,c,t=!1){const{props:n,ref:i,patchFlag:s,children:r}=e,o=c?ot(n||{},c):n,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&Zc(o),ref:c&&c.ref?t&&i?(0,a.kJ)(i)?i.concat(Jc(c)):[i,Jc(c)]:Jc(c):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:c&&e.type!==Ec?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ct(e.ssContent),ssFallback:e.ssFallback&&ct(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l}function tt(e=" ",c=0){return Qc(Tc,null,e,c)}function nt(e,c){const t=Qc(Rc,null,e);return t.staticCount=c,t}function at(e="",c=!1){return c?(Dc(),$c(Ic,null,e)):Qc(Ic,null,e)}function it(e){return null==e||"boolean"===typeof e?Qc(Ic):(0,a.kJ)(e)?Qc(Ec,null,e.slice()):"object"===typeof e?st(e):Qc(Tc,null,String(e))}function st(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:ct(e)}function rt(e,c){let t=0;const{shapeFlag:n}=e;if(null==c)c=null;else if((0,a.kJ)(c))t=16;else if("object"===typeof c){if(65&n){const t=c.default;return void(t&&(t._c&&(t._d=!1),rt(e,t()),t._c&&(t._d=!0)))}{t=32;const n=c._;n||Kc in c?3===n&&_&&(1===_.slots._?c._=1:(c._=2,e.patchFlag|=1024)):c._ctx=_}}else(0,a.mf)(c)?(c={default:c,_ctx:_},t=32):(c=String(c),64&n?(t=16,c=[tt(c)]):t=8);e.children=c,e.shapeFlag|=t}function ot(...e){const c={};for(let t=0;t<e.length;t++){const n=e[t];for(const e in n)if("class"===e)c.class!==n.class&&(c.class=(0,a.C_)([c.class,n.class]));else if("style"===e)c.style=(0,a.j5)([c.style,n.style]);else if((0,a.F7)(e)){const t=c[e],i=n[e];!i||t===i||(0,a.kJ)(t)&&t.includes(i)||(c[e]=t?[].concat(t,i):i)}else""!==e&&(c[e]=n[e])}return c}function lt(e,c,t,n=null){s(e,c,7,[t,n])}const ft=Mc();let ut=0;function ht(e,c,t){const i=e.type,s=(c?c.appContext:e.appContext)||ft,r={uid:ut++,vnode:e,type:i,parent:c,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new n.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:c?c.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lc(i,s),emitsOptions:k(i,s),emit:null,emitted:null,propsDefaults:a.kT,inheritAttrs:i.inheritAttrs,ctx:a.kT,data:a.kT,props:a.kT,attrs:a.kT,slots:a.kT,refs:a.kT,setupState:a.kT,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=c?c.root:r,r.emit=S.bind(null,r),e.ce&&e.ce(r),r}let mt=null;const dt=()=>mt||_,pt=e=>{mt=e,e.scope.on()},zt=()=>{mt&&mt.scope.off(),mt=null};function vt(e){return 4&e.vnode.shapeFlag}let gt,Ht,Vt=!1;function Mt(e,c=!1){Vt=c;const{props:t,children:n}=e.vnode,a=vt(e);ic(e,t,a,c),Hc(e,n);const i=a?Ct(e,c):void 0;return Vt=!1,i}function Ct(e,c){const t=e.type;e.accessCache=Object.create(null),e.proxy=(0,n.Xl)(new Proxy(e.ctx,qe));const{setup:s}=t;if(s){const t=e.setupContext=s.length>1?xt(e):null;pt(e),(0,n.Jd)();const o=i(s,e,0,[e.props,t]);if((0,n.lk)(),zt(),(0,a.tI)(o)){if(o.then(zt,zt),c)return o.then((t=>{Lt(e,t,c)})).catch((c=>{r(c,e,0)}));e.asyncDep=o}else Lt(e,o,c)}else yt(e,c)}function Lt(e,c,t){(0,a.mf)(c)?e.type.__ssrInlineRender?e.ssrRender=c:e.render=c:(0,a.Kn)(c)&&(e.setupState=(0,n.WL)(c)),yt(e,t)}function yt(e,c,t){const i=e.type;if(!e.render){if(!c&&gt&&!i.render){const c=i.template||Je(e).template;if(c){0;const{isCustomElement:t,compilerOptions:n}=e.appContext.config,{delimiters:s,compilerOptions:r}=i,o=(0,a.l7)((0,a.l7)({isCustomElement:t,delimiters:s},n),r);i.render=gt(c,o)}}e.render=i.render||a.dG,Ht&&Ht(e)}pt(e),(0,n.Jd)(),Ge(e),(0,n.lk)(),zt()}function bt(e){return new Proxy(e.attrs,{get(c,t){return(0,n.j)(e,"get","$attrs"),c[t]}})}function xt(e){const c=c=>{e.exposed=c||{}};let t;return{get attrs(){return t||(t=bt(e))},slots:e.slots,emit:e.emit,expose:c}}function wt(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,n.WL)((0,n.Xl)(e.exposed)),{get(c,t){return t in c?c[t]:t in Be?Be[t](e):void 0},has(e,c){return c in e||c in Be}}))}function Nt(e,c=!0){return(0,a.mf)(e)?e.displayName||e.name:e.name||c&&e.__name}function St(e){return(0,a.mf)(e)&&"__vccOpts"in e}const kt=(e,c)=>(0,n.Fl)(e,c,Vt);function At(e,c,t){const n=arguments.length;return 2===n?(0,a.Kn)(c)&&!(0,a.kJ)(c)?Gc(c)?Qc(e,null,[c]):Qc(e,c):Qc(e,null,c):(n>3?t=Array.prototype.slice.call(arguments,2):3===n&&Gc(t)&&(t=[t]),Qc(e,c,t))}const _t=Symbol(""),Et=()=>{{const e=W(_t);return e}};const Tt="3.2.47"},9242:function(e,c,t){"use strict";t.d(c,{F8:function(){return pe},bM:function(){return ue},e8:function(){return le},nr:function(){return oe},ri:function(){return Ve},uT:function(){return I}});t(7658);var n=t(7139),a=t(3396),i=t(4870);const s="http://www.w3.org/2000/svg",r="undefined"!==typeof document?document:null,o=r&&r.createElement("template"),l={insert:(e,c,t)=>{c.insertBefore(e,t||null)},remove:e=>{const c=e.parentNode;c&&c.removeChild(e)},createElement:(e,c,t,n)=>{const a=c?r.createElementNS(s,e):r.createElement(e,t?{is:t}:void 0);return"select"===e&&n&&null!=n.multiple&&a.setAttribute("multiple",n.multiple),a},createText:e=>r.createTextNode(e),createComment:e=>r.createComment(e),setText:(e,c)=>{e.nodeValue=c},setElementText:(e,c)=>{e.textContent=c},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>r.querySelector(e),setScopeId(e,c){e.setAttribute(c,"")},insertStaticContent(e,c,t,n,a,i){const s=t?t.previousSibling:c.lastChild;if(a&&(a===i||a.nextSibling)){while(1)if(c.insertBefore(a.cloneNode(!0),t),a===i||!(a=a.nextSibling))break}else{o.innerHTML=n?`<svg>${e}</svg>`:e;const a=o.content;if(n){const e=a.firstChild;while(e.firstChild)a.appendChild(e.firstChild);a.removeChild(e)}c.insertBefore(a,t)}return[s?s.nextSibling:c.firstChild,t?t.previousSibling:c.lastChild]}};function f(e,c,t){const n=e._vtc;n&&(c=(c?[c,...n]:[...n]).join(" ")),null==c?e.removeAttribute("class"):t?e.setAttribute("class",c):e.className=c}function u(e,c,t){const a=e.style,i=(0,n.HD)(t);if(t&&!i){if(c&&!(0,n.HD)(c))for(const e in c)null==t[e]&&m(a,e,"");for(const e in t)m(a,e,t[e])}else{const n=a.display;i?c!==t&&(a.cssText=t):c&&e.removeAttribute("style"),"_vod"in e&&(a.display=n)}}const h=/\s*!important$/;function m(e,c,t){if((0,n.kJ)(t))t.forEach((t=>m(e,c,t)));else if(null==t&&(t=""),c.startsWith("--"))e.setProperty(c,t);else{const a=z(e,c);h.test(t)?e.setProperty((0,n.rs)(a),t.replace(h,""),"important"):e[a]=t}}const d=["Webkit","Moz","ms"],p={};function z(e,c){const t=p[c];if(t)return t;let a=(0,n._A)(c);if("filter"!==a&&a in e)return p[c]=a;a=(0,n.kC)(a);for(let n=0;n<d.length;n++){const t=d[n]+a;if(t in e)return p[c]=t}return c}const v="http://www.w3.org/1999/xlink";function g(e,c,t,a,i){if(a&&c.startsWith("xlink:"))null==t?e.removeAttributeNS(v,c.slice(6,c.length)):e.setAttributeNS(v,c,t);else{const a=(0,n.Pq)(c);null==t||a&&!(0,n.yA)(t)?e.removeAttribute(c):e.setAttribute(c,a?"":t)}}function H(e,c,t,a,i,s,r){if("innerHTML"===c||"textContent"===c)return a&&r(a,i,s),void(e[c]=null==t?"":t);if("value"===c&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=t;const n=null==t?"":t;return e.value===n&&"OPTION"!==e.tagName||(e.value=n),void(null==t&&e.removeAttribute(c))}let o=!1;if(""===t||null==t){const a=typeof e[c];"boolean"===a?t=(0,n.yA)(t):null==t&&"string"===a?(t="",o=!0):"number"===a&&(t=0,o=!0)}try{e[c]=t}catch(l){0}o&&e.removeAttribute(c)}function V(e,c,t,n){e.addEventListener(c,t,n)}function M(e,c,t,n){e.removeEventListener(c,t,n)}function C(e,c,t,n,a=null){const i=e._vei||(e._vei={}),s=i[c];if(n&&s)s.value=n;else{const[t,r]=y(c);if(n){const s=i[c]=N(n,a);V(e,t,s,r)}else s&&(M(e,t,s,r),i[c]=void 0)}}const L=/(?:Once|Passive|Capture)$/;function y(e){let c;if(L.test(e)){let t;c={};while(t=e.match(L))e=e.slice(0,e.length-t[0].length),c[t[0].toLowerCase()]=!0}const t=":"===e[2]?e.slice(3):(0,n.rs)(e.slice(2));return[t,c]}let b=0;const x=Promise.resolve(),w=()=>b||(x.then((()=>b=0)),b=Date.now());function N(e,c){const t=e=>{if(e._vts){if(e._vts<=t.attached)return}else e._vts=Date.now();(0,a.$d)(S(e,t.value),c,5,[e])};return t.value=e,t.attached=w(),t}function S(e,c){if((0,n.kJ)(c)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},c.map((e=>c=>!c._stopped&&e&&e(c)))}return c}const k=/^on[a-z]/,A=(e,c,t,a,i=!1,s,r,o,l)=>{"class"===c?f(e,a,i):"style"===c?u(e,t,a):(0,n.F7)(c)?(0,n.tR)(c)||C(e,c,t,a,r):("."===c[0]?(c=c.slice(1),1):"^"===c[0]?(c=c.slice(1),0):_(e,c,a,i))?H(e,c,a,s,r,o,l):("true-value"===c?e._trueValue=a:"false-value"===c&&(e._falseValue=a),g(e,c,a,i))};function _(e,c,t,a){return a?"innerHTML"===c||"textContent"===c||!!(c in e&&k.test(c)&&(0,n.mf)(t)):"spellcheck"!==c&&"draggable"!==c&&"translate"!==c&&("form"!==c&&(("list"!==c||"INPUT"!==e.tagName)&&(("type"!==c||"TEXTAREA"!==e.tagName)&&((!k.test(c)||!(0,n.HD)(t))&&c in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const E="transition",T="animation",I=(e,{slots:c})=>(0,a.h)(a.P$,F(e),c);I.displayName="Transition";const R={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},P=I.props=(0,n.l7)({},a.P$.props,R),O=(e,c=[])=>{(0,n.kJ)(e)?e.forEach((e=>e(...c))):e&&e(...c)},D=e=>!!e&&((0,n.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function F(e){const c={};for(const n in e)n in R||(c[n]=e[n]);if(!1===e.css)return c;const{name:t="v",type:a,duration:i,enterFromClass:s=`${t}-enter-from`,enterActiveClass:r=`${t}-enter-active`,enterToClass:o=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:f=r,appearToClass:u=o,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:m=`${t}-leave-active`,leaveToClass:d=`${t}-leave-to`}=e,p=U(i),z=p&&p[0],v=p&&p[1],{onBeforeEnter:g,onEnter:H,onEnterCancelled:V,onLeave:M,onLeaveCancelled:C,onBeforeAppear:L=g,onAppear:y=H,onAppearCancelled:b=V}=c,x=(e,c,t)=>{q(e,c?u:o),q(e,c?f:r),t&&t()},w=(e,c)=>{e._isLeaving=!1,q(e,h),q(e,d),q(e,m),c&&c()},N=e=>(c,t)=>{const n=e?y:H,i=()=>x(c,e,t);O(n,[c,i]),$((()=>{q(c,e?l:s),j(c,e?u:o),D(n)||W(c,a,z,i)}))};return(0,n.l7)(c,{onBeforeEnter(e){O(g,[e]),j(e,s),j(e,r)},onBeforeAppear(e){O(L,[e]),j(e,l),j(e,f)},onEnter:N(!1),onAppear:N(!0),onLeave(e,c){e._isLeaving=!0;const t=()=>w(e,c);j(e,h),Y(),j(e,m),$((()=>{e._isLeaving&&(q(e,h),j(e,d),D(M)||W(e,a,v,t))})),O(M,[e,t])},onEnterCancelled(e){x(e,!1),O(V,[e])},onAppearCancelled(e){x(e,!0),O(b,[e])},onLeaveCancelled(e){w(e),O(C,[e])}})}function U(e){if(null==e)return null;if((0,n.Kn)(e))return[B(e.enter),B(e.leave)];{const c=B(e);return[c,c]}}function B(e){const c=(0,n.He)(e);return c}function j(e,c){c.split(/\s+/).forEach((c=>c&&e.classList.add(c))),(e._vtc||(e._vtc=new Set)).add(c)}function q(e,c){c.split(/\s+/).forEach((c=>c&&e.classList.remove(c)));const{_vtc:t}=e;t&&(t.delete(c),t.size||(e._vtc=void 0))}function $(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let G=0;function W(e,c,t,n){const a=e._endId=++G,i=()=>{a===e._endId&&n()};if(t)return setTimeout(i,t);const{type:s,timeout:r,propCount:o}=K(e,c);if(!s)return n();const l=s+"end";let f=0;const u=()=>{e.removeEventListener(l,h),i()},h=c=>{c.target===e&&++f>=o&&u()};setTimeout((()=>{f<o&&u()}),r+1),e.addEventListener(l,h)}function K(e,c){const t=window.getComputedStyle(e),n=e=>(t[e]||"").split(", "),a=n(`${E}Delay`),i=n(`${E}Duration`),s=Z(a,i),r=n(`${T}Delay`),o=n(`${T}Duration`),l=Z(r,o);let f=null,u=0,h=0;c===E?s>0&&(f=E,u=s,h=i.length):c===T?l>0&&(f=T,u=l,h=o.length):(u=Math.max(s,l),f=u>0?s>l?E:T:null,h=f?f===E?i.length:o.length:0);const m=f===E&&/\b(transform|all)(,|$)/.test(n(`${E}Property`).toString());return{type:f,timeout:u,propCount:h,hasTransform:m}}function Z(e,c){while(e.length<c.length)e=e.concat(e);return Math.max(...c.map(((c,t)=>J(c)+J(e[t]))))}function J(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Y(){return document.body.offsetHeight}const Q=new WeakMap,X=new WeakMap,ee={name:"TransitionGroup",props:(0,n.l7)({},P,{tag:String,moveClass:String}),setup(e,{slots:c}){const t=(0,a.FN)(),n=(0,a.Y8)();let s,r;return(0,a.ic)((()=>{if(!s.length)return;const c=e.moveClass||`${e.name||"v"}-move`;if(!ae(s[0].el,t.vnode.el,c))return;s.forEach(ce),s.forEach(te);const n=s.filter(ne);Y(),n.forEach((e=>{const t=e.el,n=t.style;j(t,c),n.transform=n.webkitTransform=n.transitionDuration="";const a=t._moveCb=e=>{e&&e.target!==t||e&&!/transform$/.test(e.propertyName)||(t.removeEventListener("transitionend",a),t._moveCb=null,q(t,c))};t.addEventListener("transitionend",a)}))})),()=>{const o=(0,i.IU)(e),l=F(o);let f=o.tag||a.HY;s=r,r=c.default?(0,a.Q6)(c.default()):[];for(let e=0;e<r.length;e++){const c=r[e];null!=c.key&&(0,a.nK)(c,(0,a.U2)(c,l,n,t))}if(s)for(let e=0;e<s.length;e++){const c=s[e];(0,a.nK)(c,(0,a.U2)(c,l,n,t)),Q.set(c,c.el.getBoundingClientRect())}return(0,a.Wm)(f,null,r)}}};ee.props;function ce(e){const c=e.el;c._moveCb&&c._moveCb(),c._enterCb&&c._enterCb()}function te(e){X.set(e,e.el.getBoundingClientRect())}function ne(e){const c=Q.get(e),t=X.get(e),n=c.left-t.left,a=c.top-t.top;if(n||a){const c=e.el.style;return c.transform=c.webkitTransform=`translate(${n}px,${a}px)`,c.transitionDuration="0s",e}}function ae(e,c,t){const n=e.cloneNode();e._vtc&&e._vtc.forEach((e=>{e.split(/\s+/).forEach((e=>e&&n.classList.remove(e)))})),t.split(/\s+/).forEach((e=>e&&n.classList.add(e))),n.style.display="none";const a=1===c.nodeType?c:c.parentNode;a.appendChild(n);const{hasTransform:i}=K(n);return a.removeChild(n),i}const ie=e=>{const c=e.props["onUpdate:modelValue"]||!1;return(0,n.kJ)(c)?e=>(0,n.ir)(c,e):c};function se(e){e.target.composing=!0}function re(e){const c=e.target;c.composing&&(c.composing=!1,c.dispatchEvent(new Event("input")))}const oe={created(e,{modifiers:{lazy:c,trim:t,number:a}},i){e._assign=ie(i);const s=a||i.props&&"number"===i.props.type;V(e,c?"change":"input",(c=>{if(c.target.composing)return;let a=e.value;t&&(a=a.trim()),s&&(a=(0,n.h5)(a)),e._assign(a)})),t&&V(e,"change",(()=>{e.value=e.value.trim()})),c||(V(e,"compositionstart",se),V(e,"compositionend",re),V(e,"change",re))},mounted(e,{value:c}){e.value=null==c?"":c},beforeUpdate(e,{value:c,modifiers:{lazy:t,trim:a,number:i}},s){if(e._assign=ie(s),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(t)return;if(a&&e.value.trim()===c)return;if((i||"number"===e.type)&&(0,n.h5)(e.value)===c)return}const r=null==c?"":c;e.value!==r&&(e.value=r)}},le={deep:!0,created(e,c,t){e._assign=ie(t),V(e,"change",(()=>{const c=e._modelValue,t=me(e),a=e.checked,i=e._assign;if((0,n.kJ)(c)){const e=(0,n.hq)(c,t),s=-1!==e;if(a&&!s)i(c.concat(t));else if(!a&&s){const t=[...c];t.splice(e,1),i(t)}}else if((0,n.DM)(c)){const e=new Set(c);a?e.add(t):e.delete(t),i(e)}else i(de(e,a))}))},mounted:fe,beforeUpdate(e,c,t){e._assign=ie(t),fe(e,c,t)}};function fe(e,{value:c,oldValue:t},a){e._modelValue=c,(0,n.kJ)(c)?e.checked=(0,n.hq)(c,a.props.value)>-1:(0,n.DM)(c)?e.checked=c.has(a.props.value):c!==t&&(e.checked=(0,n.WV)(c,de(e,!0)))}const ue={deep:!0,created(e,{value:c,modifiers:{number:t}},a){const i=(0,n.DM)(c);V(e,"change",(()=>{const c=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>t?(0,n.h5)(me(e)):me(e)));e._assign(e.multiple?i?new Set(c):c:c[0])})),e._assign=ie(a)},mounted(e,{value:c}){he(e,c)},beforeUpdate(e,c,t){e._assign=ie(t)},updated(e,{value:c}){he(e,c)}};function he(e,c){const t=e.multiple;if(!t||(0,n.kJ)(c)||(0,n.DM)(c)){for(let a=0,i=e.options.length;a<i;a++){const i=e.options[a],s=me(i);if(t)(0,n.kJ)(c)?i.selected=(0,n.hq)(c,s)>-1:i.selected=c.has(s);else if((0,n.WV)(me(i),c))return void(e.selectedIndex!==a&&(e.selectedIndex=a))}t||-1===e.selectedIndex||(e.selectedIndex=-1)}}function me(e){return"_value"in e?e._value:e.value}function de(e,c){const t=c?"_trueValue":"_falseValue";return t in e?e[t]:c}const pe={beforeMount(e,{value:c},{transition:t}){e._vod="none"===e.style.display?"":e.style.display,t&&c?t.beforeEnter(e):ze(e,c)},mounted(e,{value:c},{transition:t}){t&&c&&t.enter(e)},updated(e,{value:c,oldValue:t},{transition:n}){!c!==!t&&(n?c?(n.beforeEnter(e),ze(e,!0),n.enter(e)):n.leave(e,(()=>{ze(e,!1)})):ze(e,c))},beforeUnmount(e,{value:c}){ze(e,c)}};function ze(e,c){e.style.display=c?e._vod:"none"}const ve=(0,n.l7)({patchProp:A},l);let ge;function He(){return ge||(ge=(0,a.Us)(ve))}const Ve=(...e)=>{const c=He().createApp(...e);const{mount:t}=c;return c.mount=e=>{const a=Me(e);if(!a)return;const i=c._component;(0,n.mf)(i)||i.render||i.template||(i.template=a.innerHTML),a.innerHTML="";const s=t(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),s},c};function Me(e){if((0,n.HD)(e)){const c=document.querySelector(e);return c}return e}},7139:function(e,c,t){"use strict";t.d(c,{C_:function(){return u},DM:function(){return E},E9:function(){return se},F7:function(){return b},Gg:function(){return G},HD:function(){return P},He:function(){return ae},Kj:function(){return I},Kn:function(){return D},NO:function(){return L},Nj:function(){return te},Od:function(){return N},PO:function(){return q},Pq:function(){return m},RI:function(){return k},S0:function(){return $},W7:function(){return j},WV:function(){return z},Z6:function(){return M},_A:function(){return Z},_N:function(){return _},aU:function(){return ee},dG:function(){return C},e1:function(){return i},fY:function(){return n},h5:function(){return ne},hR:function(){return X},hq:function(){return v},ir:function(){return ce},j5:function(){return s},kC:function(){return Q},kJ:function(){return A},kT:function(){return V},l7:function(){return w},mf:function(){return R},rs:function(){return Y},tI:function(){return F},tR:function(){return x},yA:function(){return d},yk:function(){return O},zw:function(){return g}});t(7658);function n(e,c){const t=Object.create(null),n=e.split(",");for(let a=0;a<n.length;a++)t[n[a]]=!0;return c?e=>!!t[e.toLowerCase()]:e=>!!t[e]}const a="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",i=n(a);function s(e){if(A(e)){const c={};for(let t=0;t<e.length;t++){const n=e[t],a=P(n)?f(n):s(n);if(a)for(const e in a)c[e]=a[e]}return c}return P(e)||D(e)?e:void 0}const r=/;(?![^(]*\))/g,o=/:([^]+)/,l=/\/\*.*?\*\//gs;function f(e){const c={};return e.replace(l,"").split(r).forEach((e=>{if(e){const t=e.split(o);t.length>1&&(c[t[0].trim()]=t[1].trim())}})),c}function u(e){let c="";if(P(e))c=e;else if(A(e))for(let t=0;t<e.length;t++){const n=u(e[t]);n&&(c+=n+" ")}else if(D(e))for(const t in e)e[t]&&(c+=t+" ");return c.trim()}const h="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",m=n(h);function d(e){return!!e||""===e}function p(e,c){if(e.length!==c.length)return!1;let t=!0;for(let n=0;t&&n<e.length;n++)t=z(e[n],c[n]);return t}function z(e,c){if(e===c)return!0;let t=T(e),n=T(c);if(t||n)return!(!t||!n)&&e.getTime()===c.getTime();if(t=O(e),n=O(c),t||n)return e===c;if(t=A(e),n=A(c),t||n)return!(!t||!n)&&p(e,c);if(t=D(e),n=D(c),t||n){if(!t||!n)return!1;const a=Object.keys(e).length,i=Object.keys(c).length;if(a!==i)return!1;for(const t in e){const n=e.hasOwnProperty(t),a=c.hasOwnProperty(t);if(n&&!a||!n&&a||!z(e[t],c[t]))return!1}}return String(e)===String(c)}function v(e,c){return e.findIndex((e=>z(e,c)))}const g=e=>P(e)?e:null==e?"":A(e)||D(e)&&(e.toString===U||!R(e.toString))?JSON.stringify(e,H,2):String(e),H=(e,c)=>c&&c.__v_isRef?H(e,c.value):_(c)?{[`Map(${c.size})`]:[...c.entries()].reduce(((e,[c,t])=>(e[`${c} =>`]=t,e)),{})}:E(c)?{[`Set(${c.size})`]:[...c.values()]}:!D(c)||A(c)||q(c)?c:String(c),V={},M=[],C=()=>{},L=()=>!1,y=/^on[^a-z]/,b=e=>y.test(e),x=e=>e.startsWith("onUpdate:"),w=Object.assign,N=(e,c)=>{const t=e.indexOf(c);t>-1&&e.splice(t,1)},S=Object.prototype.hasOwnProperty,k=(e,c)=>S.call(e,c),A=Array.isArray,_=e=>"[object Map]"===B(e),E=e=>"[object Set]"===B(e),T=e=>"[object Date]"===B(e),I=e=>"[object RegExp]"===B(e),R=e=>"function"===typeof e,P=e=>"string"===typeof e,O=e=>"symbol"===typeof e,D=e=>null!==e&&"object"===typeof e,F=e=>D(e)&&R(e.then)&&R(e.catch),U=Object.prototype.toString,B=e=>U.call(e),j=e=>B(e).slice(8,-1),q=e=>"[object Object]"===B(e),$=e=>P(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,G=n(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),W=e=>{const c=Object.create(null);return t=>{const n=c[t];return n||(c[t]=e(t))}},K=/-(\w)/g,Z=W((e=>e.replace(K,((e,c)=>c?c.toUpperCase():"")))),J=/\B([A-Z])/g,Y=W((e=>e.replace(J,"-$1").toLowerCase())),Q=W((e=>e.charAt(0).toUpperCase()+e.slice(1))),X=W((e=>e?`on${Q(e)}`:"")),ee=(e,c)=>!Object.is(e,c),ce=(e,c)=>{for(let t=0;t<e.length;t++)e[t](c)},te=(e,c,t)=>{Object.defineProperty(e,c,{configurable:!0,enumerable:!1,value:t})},ne=e=>{const c=parseFloat(e);return isNaN(c)?e:c},ae=e=>{const c=P(e)?Number(e):NaN;return isNaN(c)?e:c};let ie;const se=()=>ie||(ie="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof t.g?t.g:{})},6423:function(e,c,t){"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function a(e,c){if(!e.vueAxiosInstalled){var t=r(c)?o(c):c;if(l(t)){var n=f(e);if(n){var a=n<3?i:s;Object.keys(t).forEach((function(c){a(e,c,t[c])})),e.vueAxiosInstalled=!0}else console.error("[vue-axios] unknown Vue version")}else console.error("[vue-axios] configuration is invalid, expected options are either <axios_instance> or { <registration_key>: <axios_instance> }")}}function i(e,c,t){Object.defineProperty(e.prototype,c,{get:function(){return t}}),e[c]=t}function s(e,c,t){e.config.globalProperties[c]=t,e[c]=t}function r(e){return e&&"function"==typeof e.get&&"function"==typeof e.post}function o(e){return{axios:e,$http:e}}function l(e){return"object"===n(e)&&Object.keys(e).every((function(c){return r(e[c])}))}function f(e){return e&&e.version&&Number(e.version.split(".")[0])}t.d(c,{Z:function(){return a}}),e=t.hmd(e),"object"==("undefined"==typeof exports?"undefined":n(exports))?e.exports=a:"function"==typeof define&&t.amdO?define([],(function(){return a})):window.Vue&&window.axios&&window.Vue.use&&Vue.use(a,window.axios)},89:function(e,c){"use strict";c.Z=(e,c)=>{const t=e.__vccOpts||e;for(const[n,a]of c)t[n]=a;return t}},1658:function(e,c,t){"use strict";t.d(c,{Mi:function(){return M},W_:function(){return H},lr:function(){return z},tl:function(){return V}});t(7658);var n=t(3396),a=t(4870);
/**
 * Vue 3 Carousel 0.3.0
 * (c) 2023
 * @license MIT
 */
const i={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0},s={itemsToShow:{default:i.itemsToShow,type:Number},itemsToScroll:{default:i.itemsToScroll,type:Number},wrapAround:{default:i.wrapAround,type:Boolean},throttle:{default:i.throttle,type:Number},snapAlign:{default:i.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:i.transition,type:Number},breakpoints:{default:i.breakpoints,type:Object},autoplay:{default:i.autoplay,type:Number},pauseAutoplayOnHover:{default:i.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:i.mouseDrag,type:Boolean},touchDrag:{default:i.touchDrag,type:Boolean},dir:{default:i.dir,validator(e){return["rtl","ltr"].includes(e)}},settings:{default(){return{}},type:Object}};function r({config:e,slidesCount:c}){const{snapAlign:t,wrapAround:n,itemsToShow:a=1}=e;if(n)return Math.max(c-1,0);let i;switch(t){case"start":i=c-a;break;case"end":i=c-1;break;case"center":case"center-odd":i=c-Math.ceil((a-.5)/2);break;case"center-even":i=c-Math.ceil(a/2);break;default:i=0;break}return Math.max(i,0)}function o({config:e,slidesCount:c}){const{wrapAround:t,snapAlign:n,itemsToShow:a=1}=e;let i=0;if(t||a>c)return i;switch(n){case"start":i=0;break;case"end":i=a-1;break;case"center":case"center-odd":i=Math.floor((a-1)/2);break;case"center-even":i=Math.floor((a-2)/2);break;default:i=0;break}return i}function l({val:e,max:c,min:t}){return c<t?e:Math.min(Math.max(e,t),c)}function f({config:e,currentSlide:c,slidesCount:t}){const{snapAlign:n,wrapAround:a,itemsToShow:i=1}=e;let s=c;switch(n){case"center":case"center-odd":s-=(i-1)/2;break;case"center-even":s-=(i-2)/2;break;case"end":s-=i-1;break}return a?s:l({val:s,max:t-i,min:0})}function u(e){return e?e.reduce(((e,c)=>{var t;return c.type===n.HY?[...e,...u(c.children)]:"CarouselSlide"===(null===(t=c.type)||void 0===t?void 0:t.name)?[...e,c]:e}),[]):[]}function h({val:e,max:c,min:t=0}){return e>c?h({val:e-(c+1),max:c,min:t}):e<t?h({val:e+(c+1),max:c,min:t}):e}function m(e,c){let t;return c?function(...n){const a=this;t||(e.apply(a,n),t=!0,setTimeout((()=>t=!1),c))}:e}function d(e,c){let t;return function(...n){t&&clearTimeout(t),t=setTimeout((()=>{e(...n),t=null}),c)}}var p=(0,n.aZ)({name:"ARIA",setup(){const e=(0,n.f3)("currentSlide",(0,a.iH)(0)),c=(0,n.f3)("slidesCount",(0,a.iH)(0));return()=>(0,n.h)("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},`Item ${e.value+1} of ${c.value}`)}}),z=(0,n.aZ)({name:"Carousel",props:s,setup(e,{slots:c,emit:t,expose:z}){var v;const g=(0,a.iH)(null),H=(0,a.iH)([]),V=(0,a.iH)(0),M=(0,a.iH)(0),C=(0,a.qj)(Object.assign({},i));let L,y=Object.assign({},i);const b=(0,a.iH)(null!==(v=e.modelValue)&&void 0!==v?v:0),x=(0,a.iH)(0),w=(0,a.iH)(0),N=(0,a.iH)(0),S=(0,a.iH)(0);let k,A;function _(){L=Object.assign({},e.breakpoints),y=Object.assign(Object.assign(Object.assign({},y),e),{breakpoints:void 0}),T(y)}function E(){if(!L||!Object.keys(L).length)return;const e=Object.keys(L).map((e=>Number(e))).sort(((e,c)=>+c-+e));let c=Object.assign({},y);e.some((e=>{const t=window.matchMedia(`(min-width: ${e}px)`).matches;return t&&(c=Object.assign(Object.assign({},c),L[e])),t})),T(c)}function T(e){Object.entries(e).forEach((([e,c])=>C[e]=c))}(0,n.JJ)("config",C),(0,n.JJ)("slidesCount",M),(0,n.JJ)("currentSlide",b),(0,n.JJ)("maxSlide",N),(0,n.JJ)("minSlide",S),(0,n.JJ)("slideWidth",V);const I=d((()=>{E(),R()}),16);function R(){if(!g.value)return;const e=g.value.getBoundingClientRect();V.value=e.width/C.itemsToShow}function P(){M.value<=0||(w.value=Math.ceil((M.value-1)/2),N.value=r({config:C,slidesCount:M.value}),S.value=o({config:C,slidesCount:M.value}),C.wrapAround||(b.value=l({val:b.value,max:N.value,min:S.value})))}(0,n.bv)((()=>{(0,n.Y3)((()=>R())),setTimeout((()=>R()),1e3),E(),Z(),window.addEventListener("resize",I,{passive:!0}),t("init")})),(0,n.Ah)((()=>{A&&clearTimeout(A),k&&clearInterval(k),window.removeEventListener("resize",I,{passive:!0})}));let O=!1;const D={x:0,y:0},F={x:0,y:0},U=(0,a.qj)({x:0,y:0}),B=(0,a.iH)(!1),j=(0,a.iH)(!1),q=()=>{B.value=!0},$=()=>{B.value=!1};function G(e){["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)||(O="touchstart"===e.type,O||e.preventDefault(),!O&&0!==e.button||Y.value||(D.x=O?e.touches[0].clientX:e.clientX,D.y=O?e.touches[0].clientY:e.clientY,document.addEventListener(O?"touchmove":"mousemove",W,!0),document.addEventListener(O?"touchend":"mouseup",K,!0)))}const W=m((e=>{j.value=!0,F.x=O?e.touches[0].clientX:e.clientX,F.y=O?e.touches[0].clientY:e.clientY;const c=F.x-D.x,t=F.y-D.y;U.y=t,U.x=c}),C.throttle);function K(){const e="rtl"===C.dir?-1:1,c=.4*Math.sign(U.x),t=Math.round(U.x/V.value+c)*e;if(t&&!O){const e=c=>{c.stopPropagation(),window.removeEventListener("click",e,!0)};window.addEventListener("click",e,!0)}Q(b.value-t),U.x=0,U.y=0,j.value=!1,document.removeEventListener(O?"touchmove":"mousemove",W,!0),document.removeEventListener(O?"touchend":"mouseup",K,!0)}function Z(){!C.autoplay||C.autoplay<=0||(k=setInterval((()=>{C.pauseAutoplayOnHover&&B.value||X()}),C.autoplay))}function J(){k&&(clearInterval(k),k=null),Z()}const Y=(0,a.iH)(!1);function Q(e){const c=C.wrapAround?e:l({val:e,max:N.value,min:S.value});b.value===c||Y.value||(t("slide-start",{slidingToIndex:e,currentSlideIndex:b.value,prevSlideIndex:x.value,slidesCount:M.value}),Y.value=!0,x.value=b.value,b.value=c,A=setTimeout((()=>{if(C.wrapAround){const n=h({val:c,max:N.value,min:0});n!==b.value&&(b.value=n,t("loop",{currentSlideIndex:b.value,slidingToIndex:e}))}t("update:modelValue",b.value),t("slide-end",{currentSlideIndex:b.value,prevSlideIndex:x.value,slidesCount:M.value}),Y.value=!1,J()}),C.transition))}function X(){Q(b.value+C.itemsToScroll)}function ee(){Q(b.value-C.itemsToScroll)}const ce={slideTo:Q,next:X,prev:ee};(0,n.JJ)("nav",ce),(0,n.JJ)("isSliding",Y);const te=(0,n.Fl)((()=>f({config:C,currentSlide:b.value,slidesCount:M.value})));(0,n.JJ)("slidesToScroll",te);const ne=(0,n.Fl)((()=>{const e="rtl"===C.dir?-1:1,c=te.value*V.value*e;return{transform:`translateX(${U.x-c}px)`,transition:`${Y.value?C.transition:0}ms`,margin:C.wrapAround?`0 -${M.value*V.value}px`:"",width:"100%"}}));function ae(){_(),E(),P(),R(),J()}Object.keys(s).forEach((c=>{["modelValue"].includes(c)||(0,n.YP)((()=>e[c]),ae)})),(0,n.YP)((()=>e["modelValue"]),(e=>{e!==b.value&&Q(Number(e))})),(0,n.YP)(M,P),t("before-init"),_();const ie={config:C,slidesCount:M,slideWidth:V,next:X,prev:ee,slideTo:Q,currentSlide:b,maxSlide:N,minSlide:S,middleSlide:w};z({updateBreakpointsConfigs:E,updateSlidesData:P,updateSlideWidth:R,initDefaultConfigs:_,restartCarousel:ae,slideTo:Q,next:X,prev:ee,nav:ce,data:ie});const se=c.default||c.slides,re=c.addons,oe=(0,a.qj)(ie);return()=>{const e=u(null===se||void 0===se?void 0:se(oe)),c=(null===re||void 0===re?void 0:re(oe))||[];e.forEach(((e,c)=>e.props.index=c));let t=e;if(C.wrapAround){const c=e.map(((c,t)=>(0,n.Ho)(c,{index:-e.length+t,isClone:!0,key:`clone-before-${t}`}))),a=e.map(((c,t)=>(0,n.Ho)(c,{index:e.length+t,isClone:!0,key:`clone-after-${t}`})));t=[...c,...e,...a]}H.value=e,M.value=Math.max(e.length,1);const a=(0,n.h)("ol",{class:"carousel__track",style:ne.value,onMousedownCapture:C.mouseDrag?G:null,onTouchstartPassiveCapture:C.touchDrag?G:null},t),i=(0,n.h)("div",{class:"carousel__viewport"},a);return(0,n.h)("section",{ref:g,class:{carousel:!0,"is-sliding":Y.value,"is-dragging":j.value,"is-hover":B.value,"carousel--rtl":"rtl"===C.dir},dir:C.dir,"aria-label":"Gallery",tabindex:"0",onMouseenter:q,onMouseleave:$},[i,c,(0,n.h)(p)])}}});const v={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},g=e=>{const c=e.name;if(!c||"string"!==typeof c)return;const t=v[c],a=(0,n.h)("path",{d:t}),i=e.title||c,s=(0,n.h)("title",i);return(0,n.h)("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img",ariaLabel:i},[s,a])};g.props={name:String,title:String};const H=(e,{slots:c,attrs:t})=>{const{next:s,prev:r}=c||{},o=(0,n.f3)("config",(0,a.qj)(Object.assign({},i))),l=(0,n.f3)("maxSlide",(0,a.iH)(1)),f=(0,n.f3)("minSlide",(0,a.iH)(1)),u=(0,n.f3)("currentSlide",(0,a.iH)(1)),h=(0,n.f3)("nav",{}),{dir:m,wrapAround:d}=o,p="rtl"===m,z=(0,n.h)("button",{type:"button",class:["carousel__prev",!d&&u.value<=f.value&&"carousel__prev--disabled",null===t||void 0===t?void 0:t.class],"aria-label":"Navigate to previous slide",onClick:h.prev},(null===r||void 0===r?void 0:r())||(0,n.h)(g,{name:p?"arrowRight":"arrowLeft"})),v=(0,n.h)("button",{type:"button",class:["carousel__next",!d&&u.value>=l.value&&"carousel__next--disabled",null===t||void 0===t?void 0:t.class],"aria-label":"Navigate to next slide",onClick:h.next},(null===s||void 0===s?void 0:s())||(0,n.h)(g,{name:p?"arrowLeft":"arrowRight"}));return[z,v]},V=()=>{const e=(0,n.f3)("maxSlide",(0,a.iH)(1)),c=(0,n.f3)("minSlide",(0,a.iH)(1)),t=(0,n.f3)("currentSlide",(0,a.iH)(1)),i=(0,n.f3)("nav",{}),s=c=>h({val:t.value,max:e.value,min:0})===c,r=[];for(let a=c.value;a<e.value+1;a++){const e=(0,n.h)("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":s(a)},"aria-label":`Navigate to slide ${a+1}`,onClick:()=>i.slideTo(a)}),c=(0,n.h)("li",{class:"carousel__pagination-item",key:a},e);r.push(c)}return(0,n.h)("ol",{class:"carousel__pagination"},r)};var M=(0,n.aZ)({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(e,{slots:c}){const t=(0,n.f3)("config",(0,a.qj)(Object.assign({},i))),s=(0,n.f3)("currentSlide",(0,a.iH)(0)),r=(0,n.f3)("slidesToScroll",(0,a.iH)(0)),o=(0,n.f3)("isSliding",(0,a.iH)(!1)),l=()=>e.index===s.value,f=()=>e.index===s.value-1,u=()=>e.index===s.value+1,h=()=>{const c=Math.floor(r.value),n=Math.ceil(r.value+t.itemsToShow-1);return e.index>=c&&e.index<=n};return()=>{var a;return(0,n.h)("li",{style:{width:100/t.itemsToShow+"%"},class:{carousel__slide:!0,"carousel__slide--clone":e.isClone,"carousel__slide--visible":h(),"carousel__slide--active":l(),"carousel__slide--prev":f(),"carousel__slide--next":u(),"carousel__slide--sliding":o.value},"aria-hidden":!h()},null===(a=c.default)||void 0===a?void 0:a.call(c))}}})},7077:function(e,c,t){"use strict";t.d(c,{Jn:function(){return pe},qX:function(){return ue},Xd:function(){return fe},Mq:function(){return ve},ZF:function(){return ze},KN:function(){return ge}});t(7658);var n=t(7142),a=t(5168),i=t(223);t(2801);const s=(e,c)=>c.some((c=>e instanceof c));let r,o;function l(){return r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function f(){return o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const u=new WeakMap,h=new WeakMap,m=new WeakMap,d=new WeakMap,p=new WeakMap;function z(e){const c=new Promise(((c,t)=>{const n=()=>{e.removeEventListener("success",a),e.removeEventListener("error",i)},a=()=>{c(C(e.result)),n()},i=()=>{t(e.error),n()};e.addEventListener("success",a),e.addEventListener("error",i)}));return c.then((c=>{c instanceof IDBCursor&&u.set(c,e)})).catch((()=>{})),p.set(c,e),c}function v(e){if(h.has(e))return;const c=new Promise(((c,t)=>{const n=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=()=>{c(),n()},i=()=>{t(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)}));h.set(e,c)}let g={get(e,c,t){if(e instanceof IDBTransaction){if("done"===c)return h.get(e);if("objectStoreNames"===c)return e.objectStoreNames||m.get(e);if("store"===c)return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return C(e[c])},set(e,c,t){return e[c]=t,!0},has(e,c){return e instanceof IDBTransaction&&("done"===c||"store"===c)||c in e}};function H(e){g=e(g)}function V(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?f().includes(e)?function(...c){return e.apply(L(this),c),C(u.get(this))}:function(...c){return C(e.apply(L(this),c))}:function(c,...t){const n=e.call(L(this),c,...t);return m.set(n,c.sort?c.sort():[c]),C(n)}}function M(e){return"function"===typeof e?V(e):(e instanceof IDBTransaction&&v(e),s(e,l())?new Proxy(e,g):e)}function C(e){if(e instanceof IDBRequest)return z(e);if(d.has(e))return d.get(e);const c=M(e);return c!==e&&(d.set(e,c),p.set(c,e)),c}const L=e=>p.get(e);function y(e,c,{blocked:t,upgrade:n,blocking:a,terminated:i}={}){const s=indexedDB.open(e,c),r=C(s);return n&&s.addEventListener("upgradeneeded",(e=>{n(C(s.result),e.oldVersion,e.newVersion,C(s.transaction),e)})),t&&s.addEventListener("blocked",(e=>t(e.oldVersion,e.newVersion,e))),r.then((e=>{i&&e.addEventListener("close",(()=>i())),a&&e.addEventListener("versionchange",(e=>a(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),r}const b=["get","getKey","getAll","getAllKeys","count"],x=["put","add","delete","clear"],w=new Map;function N(e,c){if(!(e instanceof IDBDatabase)||c in e||"string"!==typeof c)return;if(w.get(c))return w.get(c);const t=c.replace(/FromIndex$/,""),n=c!==t,a=x.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!a&&!b.includes(t))return;const i=async function(e,...c){const i=this.transaction(e,a?"readwrite":"readonly");let s=i.store;return n&&(s=s.index(c.shift())),(await Promise.all([s[t](...c),a&&i.done]))[0]};return w.set(c,i),i}H((e=>({...e,get:(c,t,n)=>N(c,t)||e.get(c,t,n),has:(c,t)=>!!N(c,t)||e.has(c,t)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class S{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(k(e)){const c=e.getImmediate();return`${c.library}/${c.version}`}return null})).filter((e=>e)).join(" ")}}function k(e){const c=e.getComponent();return"VERSION"===(null===c||void 0===c?void 0:c.type)}const A="@firebase/app",_="0.9.25",E=new a.Yd("@firebase/app"),T="@firebase/app-compat",I="@firebase/analytics-compat",R="@firebase/analytics",P="@firebase/app-check-compat",O="@firebase/app-check",D="@firebase/auth",F="@firebase/auth-compat",U="@firebase/database",B="@firebase/database-compat",j="@firebase/functions",q="@firebase/functions-compat",$="@firebase/installations",G="@firebase/installations-compat",W="@firebase/messaging",K="@firebase/messaging-compat",Z="@firebase/performance",J="@firebase/performance-compat",Y="@firebase/remote-config",Q="@firebase/remote-config-compat",X="@firebase/storage",ee="@firebase/storage-compat",ce="@firebase/firestore",te="@firebase/firestore-compat",ne="firebase",ae="10.7.1",ie="[DEFAULT]",se={[A]:"fire-core",[T]:"fire-core-compat",[R]:"fire-analytics",[I]:"fire-analytics-compat",[O]:"fire-app-check",[P]:"fire-app-check-compat",[D]:"fire-auth",[F]:"fire-auth-compat",[U]:"fire-rtdb",[B]:"fire-rtdb-compat",[j]:"fire-fn",[q]:"fire-fn-compat",[$]:"fire-iid",[G]:"fire-iid-compat",[W]:"fire-fcm",[K]:"fire-fcm-compat",[Z]:"fire-perf",[J]:"fire-perf-compat",[Y]:"fire-rc",[Q]:"fire-rc-compat",[X]:"fire-gcs",[ee]:"fire-gcs-compat",[ce]:"fire-fst",[te]:"fire-fst-compat","fire-js":"fire-js",[ne]:"fire-js-all"},re=new Map,oe=new Map;function le(e,c){try{e.container.addComponent(c)}catch(t){E.debug(`Component ${c.name} failed to register with FirebaseApp ${e.name}`,t)}}function fe(e){const c=e.name;if(oe.has(c))return E.debug(`There were multiple attempts to register component ${c}.`),!1;oe.set(c,e);for(const t of re.values())le(t,e);return!0}function ue(e,c){const t=e.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),e.container.getProvider(c)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const he={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},me=new i.LL("app","Firebase",he);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class de{constructor(e,c,t){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},c),this._name=c.name,this._automaticDataCollectionEnabled=c.automaticDataCollectionEnabled,this._container=t,this.container.addComponent(new n.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw me.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe=ae;function ze(e,c={}){let t=e;if("object"!==typeof c){const e=c;c={name:e}}const a=Object.assign({name:ie,automaticDataCollectionEnabled:!1},c),s=a.name;if("string"!==typeof s||!s)throw me.create("bad-app-name",{appName:String(s)});if(t||(t=(0,i.aH)()),!t)throw me.create("no-options");const r=re.get(s);if(r){if((0,i.vZ)(t,r.options)&&(0,i.vZ)(a,r.config))return r;throw me.create("duplicate-app",{appName:s})}const o=new n.H0(s);for(const n of oe.values())o.addComponent(n);const l=new de(t,a,o);return re.set(s,l),l}function ve(e=ie){const c=re.get(e);if(!c&&e===ie&&(0,i.aH)())return ze();if(!c)throw me.create("no-app",{appName:e});return c}function ge(e,c,t){var a;let i=null!==(a=se[e])&&void 0!==a?a:e;t&&(i+=`-${t}`);const s=i.match(/\s|\//),r=c.match(/\s|\//);if(s||r){const e=[`Unable to register library "${i}" with version "${c}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&r&&e.push("and"),r&&e.push(`version name "${c}" contains illegal characters (whitespace or "/")`),void E.warn(e.join(" "))}fe(new n.wA(`${i}-version`,(()=>({library:i,version:c})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const He="firebase-heartbeat-database",Ve=1,Me="firebase-heartbeat-store";let Ce=null;function Le(){return Ce||(Ce=y(He,Ve,{upgrade:(e,c)=>{switch(c){case 0:e.createObjectStore(Me)}}}).catch((e=>{throw me.create("idb-open",{originalErrorMessage:e.message})}))),Ce}async function ye(e){try{const c=await Le(),t=await c.transaction(Me).objectStore(Me).get(xe(e));return t}catch(c){if(c instanceof i.ZR)E.warn(c.message);else{const e=me.create("idb-get",{originalErrorMessage:null===c||void 0===c?void 0:c.message});E.warn(e.message)}}}async function be(e,c){try{const t=await Le(),n=t.transaction(Me,"readwrite"),a=n.objectStore(Me);await a.put(c,xe(e)),await n.done}catch(t){if(t instanceof i.ZR)E.warn(t.message);else{const e=me.create("idb-set",{originalErrorMessage:null===t||void 0===t?void 0:t.message});E.warn(e.message)}}}function xe(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we=1024,Ne=2592e6;class Se{constructor(e){this.container=e,this._heartbeatsCache=null;const c=this.container.getProvider("app").getImmediate();this._storage=new _e(c),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,c;const t=this.container.getProvider("platform-logger").getImmediate(),n=t.getPlatformInfoString(),a=ke();if((null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(c=this._heartbeatsCache)||void 0===c?void 0:c.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==a&&!this._heartbeatsCache.heartbeats.some((e=>e.date===a)))return this._heartbeatsCache.heartbeats.push({date:a,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const c=new Date(e.date).valueOf(),t=Date.now();return t-c<=Ne})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const c=ke(),{heartbeatsToSend:t,unsentEntries:n}=Ae(this._heartbeatsCache.heartbeats),a=(0,i.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=c,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function ke(){const e=new Date;return e.toISOString().substring(0,10)}function Ae(e,c=we){const t=[];let n=e.slice();for(const a of e){const e=t.find((e=>e.agent===a.agent));if(e){if(e.dates.push(a.date),Ee(t)>c){e.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),Ee(t)>c){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class _e{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.hl)()&&(0,i.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await ye(this.app);return(null===e||void 0===e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var c;const t=await this._canUseIndexedDBPromise;if(t){const t=await this.read();return be(this.app,{lastSentHeartbeatDate:null!==(c=e.lastSentHeartbeatDate)&&void 0!==c?c:t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var c;const t=await this._canUseIndexedDBPromise;if(t){const t=await this.read();return be(this.app,{lastSentHeartbeatDate:null!==(c=e.lastSentHeartbeatDate)&&void 0!==c?c:t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}}}function Ee(e){return(0,i.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(e){fe(new n.wA("platform-logger",(e=>new S(e)),"PRIVATE")),fe(new n.wA("heartbeat",(e=>new Se(e)),"PRIVATE")),ge(A,_,e),ge(A,_,"esm2017"),ge("fire-js","")}Te("")},7142:function(e,c,t){"use strict";t.d(c,{H0:function(){return l},wA:function(){return a}});var n=t(223);class a{constructor(e,c,t){this.name=e,this.instanceFactory=c,this.type=t,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e,c){this.name=e,this.container=c,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const c=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(c)){const e=new n.BH;if(this.instancesDeferred.set(c,e),this.isInitialized(c)||this.shouldAutoInitialize())try{const t=this.getOrInitializeService({instanceIdentifier:c});t&&e.resolve(t)}catch(t){}}return this.instancesDeferred.get(c).promise}getImmediate(e){var c;const t=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),n=null!==(c=null===e||void 0===e?void 0:e.optional)&&void 0!==c&&c;if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:t})}catch(a){if(n)return null;throw a}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(o(e))try{this.getOrInitializeService({instanceIdentifier:i})}catch(c){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(c){}}}}clearInstance(e=i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=i){return this.instances.has(e)}getOptions(e=i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:c={}}=e,t=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(t))throw Error(`${this.name}(${t}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:t,options:c});for(const[a,i]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(a);t===e&&i.resolve(n)}return n}onInit(e,c){var t;const n=this.normalizeInstanceIdentifier(c),a=null!==(t=this.onInitCallbacks.get(n))&&void 0!==t?t:new Set;a.add(e),this.onInitCallbacks.set(n,a);const i=this.instances.get(n);return i&&e(i,n),()=>{a.delete(e)}}invokeOnInitCallbacks(e,c){const t=this.onInitCallbacks.get(c);if(t)for(const a of t)try{a(e,c)}catch(n){}}getOrInitializeService({instanceIdentifier:e,options:c={}}){let t=this.instances.get(e);if(!t&&this.component&&(t=this.component.instanceFactory(this.container,{instanceIdentifier:r(e),options:c}),this.instances.set(e,t),this.instancesOptions.set(e,c),this.invokeOnInitCallbacks(t,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,t)}catch(n){}return t||null}normalizeInstanceIdentifier(e=i){return this.component?this.component.multipleInstances?e:i:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function r(e){return e===i?void 0:e}function o(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const c=this.getProvider(e.name);if(c.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);c.setComponent(e)}addOrOverwriteComponent(e){const c=this.getProvider(e.name);c.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const c=new s(e,this);return this.providers.set(e,c),c}getProviders(){return Array.from(this.providers.values())}}},5168:function(e,c,t){"use strict";t.d(c,{Yd:function(){return l},in:function(){return a}});t(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B({projectId:e}){return`${I}/projects/${e}/installations`}function j(e){return{token:e.token,requestStatus:2,expiresIn:K(e.expiresIn),creationTime:Date.now()}}async function q(e,c){const t=await c.json(),n=t.error;return F.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function $({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function G(e,{refreshToken:c}){const t=$(e);return t.append("Authorization",Z(c)),t}async function W(e){const c=await e();return c.status>=500&&c.status<600?e():c}function K(e){return Number(e.replace("s","000"))}function Z(e){return`${T} ${e}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J({appConfig:e,heartbeatServiceProvider:c},{fid:t}){const n=B(e),a=$(e),i=c.getImmediate({optional:!0});if(i){const e=await i.getHeartbeatsHeader();e&&a.append("x-firebase-client",e)}const s={fid:t,authVersion:T,appId:e.appId,sdkVersion:E},r={method:"POST",headers:a,body:JSON.stringify(s)},o=await W((()=>fetch(n,r)));if(o.ok){const e=await o.json(),c={fid:e.fid||t,registrationStatus:2,refreshToken:e.refreshToken,authToken:j(e.authToken)};return c}throw await q("Create Installation",o)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(e){return new Promise((c=>{setTimeout(c,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(e){const c=btoa(String.fromCharCode(...e));return c.replace(/\+/g,"-").replace(/\//g,"_")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X=/^[cdef][\w-]{21}$/,ee="";function ce(){try{const e=new Uint8Array(17),c=self.crypto||self.msCrypto;c.getRandomValues(e),e[0]=112+e[0]%16;const t=te(e);return X.test(t)?t:ee}catch(e){return ee}}function te(e){const c=Q(e);return c.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(e){return`${e.appName}!${e.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae=new Map;function ie(e,c){const t=ne(e);se(t,c),re(t,c)}function se(e,c){const t=ae.get(e);if(t)for(const n of t)n(c)}function re(e,c){const t=le();t&&t.postMessage({key:e,fid:c}),fe()}let oe=null;function le(){return!oe&&"BroadcastChannel"in self&&(oe=new BroadcastChannel("[Firebase] FID Change"),oe.onmessage=e=>{se(e.data.key,e.data.fid)}),oe}function fe(){0===ae.size&&oe&&(oe.close(),oe=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue="firebase-installations-database",he=1,me="firebase-installations-store";let de=null;function pe(){return de||(de=b(ue,he,{upgrade:(e,c)=>{switch(c){case 0:e.createObjectStore(me)}}})),de}async function ze(e,c){const t=ne(e),n=await pe(),a=n.transaction(me,"readwrite"),i=a.objectStore(me),s=await i.get(t);return await i.put(c,t),await a.done,s&&s.fid===c.fid||ie(e,c.fid),c}async function ve(e){const c=ne(e),t=await pe(),n=t.transaction(me,"readwrite");await n.objectStore(me).delete(c),await n.done}async function ge(e,c){const t=ne(e),n=await pe(),a=n.transaction(me,"readwrite"),i=a.objectStore(me),s=await i.get(t),r=c(s);return void 0===r?await i.delete(t):await i.put(r,t),await a.done,!r||s&&s.fid===r.fid||ie(e,r.fid),r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function He(e){let c;const t=await ge(e.appConfig,(t=>{const n=Ve(t),a=Me(e,n);return c=a.registrationPromise,a.installationEntry}));return t.fid===ee?{installationEntry:await c}:{installationEntry:t,registrationPromise:c}}function Ve(e){const c=e||{fid:ce(),registrationStatus:0};return be(c)}function Me(e,c){if(0===c.registrationStatus){if(!navigator.onLine){const e=Promise.reject(F.create("app-offline"));return{installationEntry:c,registrationPromise:e}}const t={fid:c.fid,registrationStatus:1,registrationTime:Date.now()},n=Ce(e,t);return{installationEntry:t,registrationPromise:n}}return 1===c.registrationStatus?{installationEntry:c,registrationPromise:Le(e)}:{installationEntry:c}}async function Ce(e,c){try{const t=await J(e,c);return ze(e.appConfig,t)}catch(t){throw U(t)&&409===t.customData.serverCode?await ve(e.appConfig):await ze(e.appConfig,{fid:c.fid,registrationStatus:0}),t}}async function Le(e){let c=await ye(e.appConfig);while(1===c.registrationStatus)await Y(100),c=await ye(e.appConfig);if(0===c.registrationStatus){const{installationEntry:c,registrationPromise:t}=await He(e);return t||c}return c}function ye(e){return ge(e,(e=>{if(!e)throw F.create("installation-not-found");return be(e)}))}function be(e){return xe(e)?{fid:e.fid,registrationStatus:0}:e}function xe(e){return 1===e.registrationStatus&&e.registrationTime+_<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function we({appConfig:e,heartbeatServiceProvider:c},t){const n=Ne(e,t),a=G(e,t),i=c.getImmediate({optional:!0});if(i){const e=await i.getHeartbeatsHeader();e&&a.append("x-firebase-client",e)}const s={installation:{sdkVersion:E,appId:e.appId}},r={method:"POST",headers:a,body:JSON.stringify(s)},o=await W((()=>fetch(n,r)));if(o.ok){const e=await o.json(),c=j(e);return c}throw await q("Generate Auth Token",o)}function Ne(e,{fid:c}){return`${B(e)}/${c}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Se(e,c=!1){let t;const n=await ge(e.appConfig,(n=>{if(!Ee(n))throw F.create("not-registered");const a=n.authToken;if(!c&&Te(a))return n;if(1===a.requestStatus)return t=ke(e,c),n;{if(!navigator.onLine)throw F.create("app-offline");const c=Re(n);return t=_e(e,c),c}})),a=t?await t:n.authToken;return a}async function ke(e,c){let t=await Ae(e.appConfig);while(1===t.authToken.requestStatus)await Y(100),t=await Ae(e.appConfig);const n=t.authToken;return 0===n.requestStatus?Se(e,c):n}function Ae(e){return ge(e,(e=>{if(!Ee(e))throw F.create("not-registered");const c=e.authToken;return Pe(c)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}async function _e(e,c){try{const t=await we(e,c),n=Object.assign(Object.assign({},c),{authToken:t});return await ze(e.appConfig,n),t}catch(t){if(!U(t)||401!==t.customData.serverCode&&404!==t.customData.serverCode){const t=Object.assign(Object.assign({},c),{authToken:{requestStatus:0}});await ze(e.appConfig,t)}else await ve(e.appConfig);throw t}}function Ee(e){return void 0!==e&&2===e.registrationStatus}function Te(e){return 2===e.requestStatus&&!Ie(e)}function Ie(e){const c=Date.now();return c<e.creationTime||e.creationTime+e.expiresIn<c+R}function Re(e){const c={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:c})}function Pe(e){return 1===e.requestStatus&&e.requestTime+_<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oe(e){const c=e,{installationEntry:t,registrationPromise:n}=await He(c);return n?n.catch(console.error):Se(c).catch(console.error),t.fid}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function De(e,c=!1){const t=e;await Fe(t);const n=await Se(t,c);return n.token}async function Fe(e){const{registrationPromise:c}=await He(e);c&&await c}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ue(e){if(!e||!e.options)throw Be("App Configuration");if(!e.name)throw Be("App Name");const c=["projectId","apiKey","appId"];for(const t of c)if(!e.options[t])throw Be(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Be(e){return F.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je="installations",qe="installations-internal",$e=e=>{const c=e.getProvider("app").getImmediate(),t=Ue(c),a=(0,n.qX)(c,"heartbeat"),i={app:c,appConfig:t,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()};return i},Ge=e=>{const c=e.getProvider("app").getImmediate(),t=(0,n.qX)(c,je).getImmediate(),a={getId:()=>Oe(t),getToken:e=>De(t,e)};return a};function We(){(0,n.Xd)(new s.wA(je,$e,"PUBLIC")),(0,n.Xd)(new s.wA(qe,Ge,"PRIVATE"))}We(),(0,n.KN)(k,A),(0,n.KN)(k,A,"esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ke="analytics",Ze="firebase_id",Je="origin",Ye=6e4,Qe="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Xe="https://www.googletagmanager.com/gtag/js",ec=new a.Yd("@firebase/analytics"),cc={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},tc=new i.LL("analytics","Analytics",cc);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nc(e){if(!e.startsWith(Xe)){const c=tc.create("invalid-gtag-resource",{gtagURL:e});return ec.warn(c.message),""}return e}function ac(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function ic(e,c){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(e,c)),t}function sc(e,c){const t=ic("firebase-js-sdk-policy",{createScriptURL:nc}),n=document.createElement("script"),a=`${Xe}?l=${e}&id=${c}`;n.src=t?null===t||void 0===t?void 0:t.createScriptURL(a):a,n.async=!0,document.head.appendChild(n)}function rc(e){let c=[];return Array.isArray(window[e])?c=window[e]:window[e]=c,c}async function oc(e,c,t,n,a,i){const s=n[a];try{if(s)await c[s];else{const e=await ac(t),n=e.find((e=>e.measurementId===a));n&&await c[n.appId]}}catch(r){ec.error(r)}e("config",a,i)}async function lc(e,c,t,n,a){try{let i=[];if(a&&a["send_to"]){let e=a["send_to"];Array.isArray(e)||(e=[e]);const n=await ac(t);for(const t of e){const e=n.find((e=>e.measurementId===t)),a=e&&c[e.appId];if(!a){i=[];break}i.push(a)}}0===i.length&&(i=Object.values(c)),await Promise.all(i),e("event",n,a||{})}catch(i){ec.error(i)}}function fc(e,c,t,n){async function a(a,...i){try{if("event"===a){const[n,a]=i;await lc(e,c,t,n,a)}else if("config"===a){const[a,s]=i;await oc(e,c,t,n,a,s)}else if("consent"===a){const[c]=i;e("consent","update",c)}else if("get"===a){const[c,t,n]=i;e("get",c,t,n)}else if("set"===a){const[c]=i;e("set",c)}else e(a,...i)}catch(s){ec.error(s)}}return a}function uc(e,c,t,n,a){let i=function(...e){window[n].push(arguments)};return window[a]&&"function"===typeof window[a]&&(i=window[a]),window[a]=fc(i,e,c,t),{gtagCore:i,wrappedGtag:window[a]}}function hc(e){const c=window.document.getElementsByTagName("script");for(const t of Object.values(c))if(t.src&&t.src.includes(Xe)&&t.src.includes(e))return t;return null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc=30,dc=1e3;class pc{constructor(e={},c=dc){this.throttleMetadata=e,this.intervalMillis=c}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,c){this.throttleMetadata[e]=c}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const zc=new pc;function vc(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function gc(e){var c;const{appId:t,apiKey:n}=e,a={method:"GET",headers:vc(n)},i=Qe.replace("{app-id}",t),s=await fetch(i,a);if(200!==s.status&&304!==s.status){let e="";try{const t=await s.json();(null===(c=t.error)||void 0===c?void 0:c.message)&&(e=t.error.message)}catch(r){}throw tc.create("config-fetch-failed",{httpStatus:s.status,responseMessage:e})}return s.json()}async function Hc(e,c=zc,t){const{appId:n,apiKey:a,measurementId:i}=e.options;if(!n)throw tc.create("no-app-id");if(!a){if(i)return{measurementId:i,appId:n};throw tc.create("no-api-key")}const s=c.getThrottleMetadata(n)||{backoffCount:0,throttleEndTimeMillis:Date.now()},r=new Lc;return setTimeout((async()=>{r.abort()}),void 0!==t?t:Ye),Vc({appId:n,apiKey:a,measurementId:i},s,r,c)}async function Vc(e,{throttleEndTimeMillis:c,backoffCount:t},n,a=zc){var s;const{appId:r,measurementId:o}=e;try{await Mc(n,c)}catch(l){if(o)return ec.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${null===l||void 0===l?void 0:l.message}]`),{appId:r,measurementId:o};throw l}try{const c=await gc(e);return a.deleteThrottleMetadata(r),c}catch(l){const c=l;if(!Cc(c)){if(a.deleteThrottleMetadata(r),o)return ec.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${null===c||void 0===c?void 0:c.message}]`),{appId:r,measurementId:o};throw l}const f=503===Number(null===(s=null===c||void 0===c?void 0:c.customData)||void 0===s?void 0:s.httpStatus)?(0,i.$s)(t,a.intervalMillis,mc):(0,i.$s)(t,a.intervalMillis),u={throttleEndTimeMillis:Date.now()+f,backoffCount:t+1};return a.setThrottleMetadata(r,u),ec.debug(`Calling attemptFetch again in ${f} millis`),Vc(e,u,n,a)}}function Mc(e,c){return new Promise(((t,n)=>{const a=Math.max(c-Date.now(),0),i=setTimeout(t,a);e.addEventListener((()=>{clearTimeout(i),n(tc.create("fetch-throttle",{throttleEndTimeMillis:c}))}))}))}function Cc(e){if(!(e instanceof i.ZR)||!e.customData)return!1;const c=Number(e.customData["httpStatus"]);return 429===c||500===c||503===c||504===c}class Lc{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yc,bc;async function xc(e,c,t,n,a){if(a&&a.global)e("event",t,n);else{const a=await c,i=Object.assign(Object.assign({},n),{send_to:a});e("event",t,i)}}function wc(e){bc=e}function Nc(e){yc=e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sc(){if(!(0,i.hl)())return ec.warn(tc.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await(0,i.eu)()}catch(e){return ec.warn(tc.create("indexeddb-unavailable",{errorInfo:null===e||void 0===e?void 0:e.toString()}).message),!1}return!0}async function kc(e,c,t,n,a,i,s){var r;const o=Hc(e);o.then((c=>{t[c.measurementId]=c.appId,e.options.measurementId&&c.measurementId!==e.options.measurementId&&ec.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${c.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>ec.error(e))),c.push(o);const l=Sc().then((e=>e?n.getId():void 0)),[f,u]=await Promise.all([o,l]);hc(i)||sc(i,f.measurementId),bc&&(a("consent","default",bc),wc(void 0)),a("js",new Date);const h=null!==(r=null===s||void 0===s?void 0:s.config)&&void 0!==r?r:{};return h[Je]="firebase",h.update=!0,null!=u&&(h[Ze]=u),a("config",f.measurementId,h),yc&&(a("set",yc),Nc(void 0)),f.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e){this.app=e}_delete(){return delete _c[this.app.options.appId],Promise.resolve()}}let _c={},Ec=[];const Tc={};let Ic,Rc,Pc="dataLayer",Oc="gtag",Dc=!1;function Fc(){const e=[];if((0,i.ru)()&&e.push("This is a browser extension environment."),(0,i.zI)()||e.push("Cookies are not available."),e.length>0){const c=e.map(((e,c)=>`(${c+1}) ${e}`)).join(" "),t=tc.create("invalid-analytics-context",{errorInfo:c});ec.warn(t.message)}}function Uc(e,c,t){Fc();const n=e.options.appId;if(!n)throw tc.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw tc.create("no-api-key");ec.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=_c[n])throw tc.create("already-exists",{id:n});if(!Dc){rc(Pc);const{wrappedGtag:e,gtagCore:c}=uc(_c,Ec,Tc,Pc,Oc);Rc=e,Ic=c,Dc=!0}_c[n]=kc(e,Ec,Tc,c,Ic,Pc,t);const a=new Ac(e);return a}function Bc(e=(0,n.Mq)()){e=(0,i.m9)(e);const c=(0,n.qX)(e,Ke);return c.isInitialized()?c.getImmediate():jc(e)}function jc(e,c={}){const t=(0,n.qX)(e,Ke);if(t.isInitialized()){const e=t.getImmediate();if((0,i.vZ)(c,t.getOptions()))return e;throw tc.create("already-initialized")}const a=t.initialize({options:c});return a}function qc(e,c,t,n){e=(0,i.m9)(e),xc(Rc,_c[e.app.options.appId],c,t,n).catch((e=>ec.error(e)))}const $c="@firebase/analytics",Gc="0.10.0";function Wc(){function e(e){try{const c=e.getProvider(Ke).getImmediate();return{logEvent:(e,t,n)=>qc(c,e,t,n)}}catch(c){throw tc.create("interop-component-reg-failed",{reason:c})}}(0,n.Xd)(new s.wA(Ke,((e,{options:c})=>{const t=e.getProvider("app").getImmediate(),n=e.getProvider("installations-internal").getImmediate();return Uc(t,n,c)}),"PUBLIC")),(0,n.Xd)(new s.wA("analytics-internal",e,"PRIVATE")),(0,n.KN)($c,Gc),(0,n.KN)($c,Gc,"esm2017")}Wc()},7795:function(e,c,t){"use strict";t.d(c,{ZF:function(){return n.ZF}});var n=t(7077),a="firebase",i="10.7.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,n.KN)(a,i,"app")},9221:function(e,c,t){"use strict";t.d(c,{Xb:function(){return _c},v0:function(){return qn},e5:function(){return Ec},w7:function(){return Rc}});t(7658);var n=t(223),a=t(7077),i=t(5168);function s(e,c){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&c.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)c.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}Object.create;Object.create;var r=t(7142);function o(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=o,f=new n.LL("auth","Firebase",o()),u=new i.Yd("@firebase/auth");function h(e,...c){u.logLevel<=i["in"].WARN&&u.warn(`Auth (${a.Jn}): ${e}`,...c)}function m(e,...c){u.logLevel<=i["in"].ERROR&&u.error(`Auth (${a.Jn}): ${e}`,...c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(e,...c){throw v(e,...c)}function p(e,...c){return v(e,...c)}function z(e,c,t){const a=Object.assign(Object.assign({},l()),{[c]:t}),i=new n.LL("auth","Firebase",a);return i.create(c,{appName:e.name})}function v(e,...c){if("string"!==typeof e){const t=c[0],n=[...c.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(t,...n)}return f.create(e,...c)}function g(e,c,...t){if(!e)throw v(c,...t)}function H(e){const c="INTERNAL ASSERTION FAILED: "+e;throw m(c),new Error(c)}function V(e,c){e||H(c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function C(){return"http:"===L()||"https:"===L()}function L(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(C()||(0,n.ru)()||"connection"in navigator))||navigator.onLine}function b(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e,c){this.shortDelay=e,this.longDelay=c,V(c>e,"Short delay should be less than long delay!"),this.isMobile=(0,n.uI)()||(0,n.b$)()}get(){return y()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e,c){V(e.emulator,"Emulator should always be set here");const{url:t}=e.emulator;return c?`${t}${c.startsWith("/")?c.slice(1):c}`:t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{static initialize(e,c,t){this.fetchImpl=e,c&&(this.headersImpl=c),t&&(this.responseImpl=t)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void H("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void H("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void H("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["INVALID_LOGIN_CREDENTIALS"]:"invalid-credential",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},k=new x(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e,c){return e.tenantId&&!c.tenantId?Object.assign(Object.assign({},c),{tenantId:e.tenantId}):c}async function _(e,c,t,a,i={}){return E(e,i,(async()=>{let i={},s={};a&&("GET"===c?s=a:i={body:JSON.stringify(a)});const r=(0,n.xO)(Object.assign({key:e.config.apiKey},s)).slice(1),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/json",e.languageCode&&(o["X-Firebase-Locale"]=e.languageCode),N.fetch()(I(e,e.config.apiHost,t,r),Object.assign({method:c,headers:o,referrerPolicy:"no-referrer"},i))}))}async function E(e,c,t){e._canInitEmulator=!1;const a=Object.assign(Object.assign({},S),c);try{const c=new P(e),n=await Promise.race([t(),c.promise]);c.clearNetworkTimeout();const i=await n.json();if("needConfirmation"in i)throw O(e,"account-exists-with-different-credential",i);if(n.ok&&!("errorMessage"in i))return i;{const c=n.ok?i.errorMessage:i.error.message,[t,s]=c.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===t)throw O(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===t)throw O(e,"email-already-in-use",i);if("USER_DISABLED"===t)throw O(e,"user-disabled",i);const r=a[t]||t.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw z(e,r,s);d(e,r)}}catch(i){if(i instanceof n.ZR)throw i;d(e,"network-request-failed",{message:String(i)})}}async function T(e,c,t,n,a={}){const i=await _(e,c,t,n,a);return"mfaPendingCredential"in i&&d(e,"multi-factor-auth-required",{_serverResponse:i}),i}function I(e,c,t,n){const a=`${c}${t}?${n}`;return e.config.emulator?w(e.config,a):`${e.config.apiScheme}://${a}`}function R(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class P{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,c)=>{this.timer=setTimeout((()=>c(p(this.auth,"network-request-failed"))),k.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function O(e,c,t){const n={appName:e.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const a=p(e,c,n);return a.customData._tokenResponse=t,a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e){return void 0!==e&&void 0!==e.enterprise}class F{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const c of this.recaptchaEnforcementState)if(c.provider&&c.provider===e)return R(c.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(e,c){return _(e,"GET","/v2/recaptchaConfig",A(e,c))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(e,c){return _(e,"POST","/v1/accounts:delete",c)}async function j(e,c){return _(e,"POST","/v1/accounts:lookup",c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e){if(e)try{const c=new Date(Number(e));if(!isNaN(c.getTime()))return c.toUTCString()}catch(c){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(e,c=!1){const t=(0,n.m9)(e),a=await t.getIdToken(c),i=W(a);g(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s="object"===typeof i.firebase?i.firebase:void 0,r=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:i,token:a,authTime:q(G(i.auth_time)),issuedAtTime:q(G(i.iat)),expirationTime:q(G(i.exp)),signInProvider:r||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function G(e){return 1e3*Number(e)}function W(e){const[c,t,a]=e.split(".");if(void 0===c||void 0===t||void 0===a)return m("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,n.tV)(t);return e?JSON.parse(e):(m("Failed to decode base64 JWT payload"),null)}catch(i){return m("Caught error parsing JWT payload as JSON",null===i||void 0===i?void 0:i.toString()),null}}function K(e){const c=W(e);return g(c,"internal-error"),g("undefined"!==typeof c.exp,"internal-error"),g("undefined"!==typeof c.iat,"internal-error"),Number(c.exp)-Number(c.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(e,c,t=!1){if(t)return c;try{return await c}catch(a){throw a instanceof n.ZR&&J(a)&&e.auth.currentUser===e&&await e.auth.signOut(),a}}function J({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var c;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(c=this.user.stsTokenManager.expirationTime)&&void 0!==c?c:0,t=e-Date.now()-3e5;return Math.max(0,t)}}schedule(e=!1){if(!this.isRunning)return;const c=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),c)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,c){this.createdAt=e,this.lastLoginAt=c,this._initializeTime()}_initializeTime(){this.lastSignInTime=q(this.lastLoginAt),this.creationTime=q(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(e){var c;const t=e.auth,n=await e.getIdToken(),a=await Z(e,j(t,{idToken:n}));g(null===a||void 0===a?void 0:a.users.length,t,"internal-error");const i=a.users[0];e._notifyReloadListener(i);const s=(null===(c=i.providerUserInfo)||void 0===c?void 0:c.length)?te(i.providerUserInfo):[],r=ce(e.providerData,s),o=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!(null===r||void 0===r?void 0:r.length),f=!!o&&l,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Q(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(e,u)}async function ee(e){const c=(0,n.m9)(e);await X(c),await c.auth._persistUserIfCurrent(c),c.auth._notifyListenersIfCurrent(c)}function ce(e,c){const t=e.filter((e=>!c.some((c=>c.providerId===e.providerId))));return[...t,...c]}function te(e){return e.map((e=>{var{providerId:c}=e,t=s(e,["providerId"]);return{providerId:c,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e,c){const t=await E(e,{},(async()=>{const t=(0,n.xO)({grant_type:"refresh_token",refresh_token:c}).slice(1),{tokenApiHost:a,apiKey:i}=e.config,s=I(e,a,"/v1/token",`key=${i}`),r=await e._getAdditionalHeaders();return r["Content-Type"]="application/x-www-form-urlencoded",N.fetch()(s,{method:"POST",headers:r,body:t})}));return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ae(e,c){return _(e,"POST","/v2/accounts:revokeToken",A(e,c))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g("undefined"!==typeof e.idToken,"internal-error"),g("undefined"!==typeof e.refreshToken,"internal-error");const c="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):K(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,c)}async getToken(e,c=!1){return g(!this.accessToken||this.refreshToken,e,"user-token-expired"),c||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,c){const{accessToken:t,refreshToken:n,expiresIn:a}=await ne(e,c);this.updateTokensAndExpiration(t,n,Number(a))}updateTokensAndExpiration(e,c,t){this.refreshToken=c||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*t}static fromJSON(e,c){const{refreshToken:t,accessToken:n,expirationTime:a}=c,i=new ie;return t&&(g("string"===typeof t,"internal-error",{appName:e}),i.refreshToken=t),n&&(g("string"===typeof n,"internal-error",{appName:e}),i.accessToken=n),a&&(g("number"===typeof a,"internal-error",{appName:e}),i.expirationTime=a),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ie,this.toJSON())}_performRefresh(){return H("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(e,c){g("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:c})}class re{constructor(e){var{uid:c,auth:t,stsTokenManager:n}=e,a=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Y(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=c,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Q(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const c=await Z(this,this.stsTokenManager.getToken(this.auth,e));return g(c,this.auth,"internal-error"),this.accessToken!==c&&(this.accessToken=c,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),c}getIdTokenResult(e){return $(this,e)}reload(){return ee(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const c=new re(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return c.metadata._copy(this.metadata),c}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,c=!1){let t=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),t=!0),c&&await X(this),await this.auth._persistUserIfCurrent(this),t&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Z(this,B(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,c){var t,n,a,i,s,r,o,l;const f=null!==(t=c.displayName)&&void 0!==t?t:void 0,u=null!==(n=c.email)&&void 0!==n?n:void 0,h=null!==(a=c.phoneNumber)&&void 0!==a?a:void 0,m=null!==(i=c.photoURL)&&void 0!==i?i:void 0,d=null!==(s=c.tenantId)&&void 0!==s?s:void 0,p=null!==(r=c._redirectEventId)&&void 0!==r?r:void 0,z=null!==(o=c.createdAt)&&void 0!==o?o:void 0,v=null!==(l=c.lastLoginAt)&&void 0!==l?l:void 0,{uid:H,emailVerified:V,isAnonymous:M,providerData:C,stsTokenManager:L}=c;g(H&&L,e,"internal-error");const y=ie.fromJSON(this.name,L);g("string"===typeof H,e,"internal-error"),se(f,e.name),se(u,e.name),g("boolean"===typeof V,e,"internal-error"),g("boolean"===typeof M,e,"internal-error"),se(h,e.name),se(m,e.name),se(d,e.name),se(p,e.name),se(z,e.name),se(v,e.name);const b=new re({uid:H,auth:e,email:u,emailVerified:V,displayName:f,isAnonymous:M,photoURL:m,phoneNumber:h,tenantId:d,stsTokenManager:y,createdAt:z,lastLoginAt:v});return C&&Array.isArray(C)&&(b.providerData=C.map((e=>Object.assign({},e)))),p&&(b._redirectEventId=p),b}static async _fromIdTokenResponse(e,c,t=!1){const n=new ie;n.updateFromServerResponse(c);const a=new re({uid:c.localId,auth:e,stsTokenManager:n,isAnonymous:t});return await X(a),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe=new Map;function le(e){V(e instanceof Function,"Expected a class definition");let c=oe.get(e);return c?(V(c instanceof e,"Instance stored in cache mismatched with class"),c):(c=new e,oe.set(e,c),c)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,c){this.storage[e]=c}async _get(e){const c=this.storage[e];return void 0===c?null:c}async _remove(e){delete this.storage[e]}_addListener(e,c){}_removeListener(e,c){}}fe.type="NONE";const ue=fe;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(e,c,t){return`firebase:${e}:${c}:${t}`}class me{constructor(e,c,t){this.persistence=e,this.auth=c,this.userKey=t;const{config:n,name:a}=this.auth;this.fullUserKey=he(this.userKey,n.apiKey,a),this.fullPersistenceKey=he("persistence",n.apiKey,a),this.boundEventHandler=c._onStorageEvent.bind(c),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?re._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const c=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,c?this.setCurrentUser(c):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,c,t="authUser"){if(!c.length)return new me(le(ue),e,t);const n=(await Promise.all(c.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let a=n[0]||le(ue);const i=he(t,e.config.apiKey,e.name);let s=null;for(const l of c)try{const c=await l._get(i);if(c){const t=re._fromJSON(e,c);l!==a&&(s=t),a=l;break}}catch(o){}const r=n.filter((e=>e._shouldAllowMigration));return a._shouldAllowMigration&&r.length?(a=r[0],s&&await a._set(i,s.toJSON()),await Promise.all(c.map((async e=>{if(e!==a)try{await e._remove(i)}catch(o){}}))),new me(a,e,t)):new me(a,e,t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(e){const c=e.toLowerCase();if(c.includes("opera/")||c.includes("opr/")||c.includes("opios/"))return"Opera";if(ge(c))return"IEMobile";if(c.includes("msie")||c.includes("trident/"))return"IE";if(c.includes("edge/"))return"Edge";if(pe(c))return"Firefox";if(c.includes("silk/"))return"Silk";if(Ve(c))return"Blackberry";if(Me(c))return"Webos";if(ze(c))return"Safari";if((c.includes("chrome/")||ve(c))&&!c.includes("edge/"))return"Chrome";if(He(c))return"Android";{const c=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,t=e.match(c);if(2===(null===t||void 0===t?void 0:t.length))return t[1]}return"Other"}function pe(e=(0,n.z$)()){return/firefox\//i.test(e)}function ze(e=(0,n.z$)()){const c=e.toLowerCase();return c.includes("safari/")&&!c.includes("chrome/")&&!c.includes("crios/")&&!c.includes("android")}function ve(e=(0,n.z$)()){return/crios\//i.test(e)}function ge(e=(0,n.z$)()){return/iemobile/i.test(e)}function He(e=(0,n.z$)()){return/android/i.test(e)}function Ve(e=(0,n.z$)()){return/blackberry/i.test(e)}function Me(e=(0,n.z$)()){return/webos/i.test(e)}function Ce(e=(0,n.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Le(e=(0,n.z$)()){var c;return Ce(e)&&!!(null===(c=window.navigator)||void 0===c?void 0:c.standalone)}function ye(){return(0,n.w1)()&&10===document.documentMode}function be(e=(0,n.z$)()){return Ce(e)||He(e)||Me(e)||Ve(e)||/windows phone/i.test(e)||ge(e)}function xe(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(e,c=[]){let t;switch(e){case"Browser":t=de((0,n.z$)());break;case"Worker":t=`${de((0,n.z$)())}-${e}`;break;default:t=e}const i=c.length?c.join(","):"FirebaseCore-web";return`${t}/JsCore/${a.Jn}/${i}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,c){const t=c=>new Promise(((t,n)=>{try{const n=e(c);t(n)}catch(a){n(a)}}));t.onAbort=c,this.queue.push(t);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const c=[];try{for(const t of this.queue)await t(e),t.onAbort&&c.push(t.onAbort)}catch(t){c.reverse();for(const e of c)try{e()}catch(n){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===t||void 0===t?void 0:t.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Se(e,c={}){return _(e,"GET","/v2/passwordPolicy",A(e,c))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke=6;class Ae{constructor(e){var c,t,n,a;const i=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(c=i.minPasswordLength)&&void 0!==c?c:ke,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),void 0!==i.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),void 0!==i.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),void 0!==i.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),void 0!==i.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(n=null===(t=e.allowedNonAlphanumericCharacters)||void 0===t?void 0:t.join(""))&&void 0!==n?n:"",this.forceUpgradeOnSignin=null!==(a=e.forceUpgradeOnSignin)&&void 0!==a&&a,this.schemaVersion=e.schemaVersion}validatePassword(e){var c,t,n,a,i,s;const r={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,r),this.validatePasswordCharacterOptions(e,r),r.isValid&&(r.isValid=null===(c=r.meetsMinPasswordLength)||void 0===c||c),r.isValid&&(r.isValid=null===(t=r.meetsMaxPasswordLength)||void 0===t||t),r.isValid&&(r.isValid=null===(n=r.containsLowercaseLetter)||void 0===n||n),r.isValid&&(r.isValid=null===(a=r.containsUppercaseLetter)||void 0===a||a),r.isValid&&(r.isValid=null===(i=r.containsNumericCharacter)||void 0===i||i),r.isValid&&(r.isValid=null===(s=r.containsNonAlphanumericCharacter)||void 0===s||s),r}validatePasswordLengthOptions(e,c){const t=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;t&&(c.meetsMinPasswordLength=e.length>=t),n&&(c.meetsMaxPasswordLength=e.length<=n)}validatePasswordCharacterOptions(e,c){let t;this.updatePasswordCharacterOptionsStatuses(c,!1,!1,!1,!1);for(let n=0;n<e.length;n++)t=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(c,t>="a"&&t<="z",t>="A"&&t<="Z",t>="0"&&t<="9",this.allowedNonAlphanumericCharacters.includes(t))}updatePasswordCharacterOptionsStatuses(e,c,t,n,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=c)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=t)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e,c,t,n){this.app=e,this.heartbeatServiceProvider=c,this.appCheckServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Te(this),this.idTokenSubscription=new Te(this),this.beforeStateQueue=new Ne(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=f,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,c){return c&&(this._popupRedirectResolver=le(c)),this._initializationPromise=this.queue((async()=>{var t,n;if(!this._deleted&&(this.persistenceManager=await me.create(this,e),!this._deleted)){if(null===(t=this._popupRedirectResolver)||void 0===t?void 0:t._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(a){}await this.initializeCurrentUser(c),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var c;const t=await this.assertedPersistence.getCurrentUser();let n=t,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const t=null===(c=this.redirectUser)||void 0===c?void 0:c._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);t&&t!==i||!(null===s||void 0===s?void 0:s.user)||(n=s.user,a=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(n)}catch(i){n=t,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(i)))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let c=null;try{c=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(t){await this._setRedirectUser(null)}return c}async reloadAndSetCurrentUserOrClear(e){try{await X(e)}catch(c){if("auth/network-request-failed"!==(null===c||void 0===c?void 0:c.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=b()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const c=e?(0,n.m9)(e):null;return c&&g(c.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(c&&c._clone(this))}async _updateCurrentUser(e,c=!1){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),c||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(le(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const c=this._getPasswordPolicyInternal();return c.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):c.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Se(this),c=new Ae(e);null===this.tenantId?this._projectPasswordPolicy=c:this._tenantPasswordPolicies[this.tenantId]=c}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new n.LL("auth","Firebase",e())}onAuthStateChanged(e,c,t){return this.registerStateListener(this.authStateSubscription,e,c,t)}beforeAuthStateChanged(e,c){return this.beforeStateQueue.pushCallback(e,c)}onIdTokenChanged(e,c,t){return this.registerStateListener(this.idTokenSubscription,e,c,t)}authStateReady(){return new Promise(((e,c)=>{if(this.currentUser)e();else{const t=this.onAuthStateChanged((()=>{t(),e()}),c)}}))}async revokeAccessToken(e){if(this.currentUser){const c=await this.currentUser.getIdToken(),t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:c};null!=this.tenantId&&(t.tenantId=this.tenantId),await ae(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,c){const t=await this.getOrInitRedirectPersistenceManager(c);return null===e?t.removeCurrentUser():t.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const c=e&&le(e)||this._popupRedirectResolver;g(c,this,"argument-error"),this.redirectPersistenceManager=await me.create(this,[le(c._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var c,t;return this._isInitialized&&await this.queue((async()=>{})),(null===(c=this._currentUser)||void 0===c?void 0:c._redirectEventId)===e?this._currentUser:(null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,c;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=null!==(c=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==c?c:null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,c,t,n){if(this._deleted)return()=>{};const a="function"===typeof c?c:c.next.bind(c);let i=!1;const s=this._isInitialized?Promise.resolve():this._initializationPromise;if(g(s,this,"internal-error"),s.then((()=>{i||a(this.currentUser)})),"function"===typeof c){const a=e.addObserver(c,t,n);return()=>{i=!0,a()}}{const t=e.addObserver(c);return()=>{i=!0,t()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=we(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const c={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(c["X-Firebase-gmpid"]=this.app.options.appId);const t=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());t&&(c["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(c["X-Firebase-AppCheck"]=n),c}async _getAppCheckToken(){var e;const c=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===c||void 0===c?void 0:c.error)&&h(`Error while retrieving App Check token: ${c.error}`),null===c||void 0===c?void 0:c.token}}function Ee(e){return(0,n.m9)(e)}class Te{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,n.ne)((e=>this.observer=e))}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){var e,c;return null!==(c=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==c?c:document}function Re(e){return new Promise(((c,t)=>{const n=document.createElement("script");n.setAttribute("src",e),n.onload=c,n.onerror=e=>{const c=p("internal-error");c.customData=e,t(c)},n.type="text/javascript",n.charset="UTF-8",Ie().appendChild(n)}))}function Pe(e){return`__${e}${Math.floor(1e6*Math.random())}`}const Oe="https://www.google.com/recaptcha/enterprise.js?render=",De="recaptcha-enterprise",Fe="NO_RECAPTCHA";class Ue{constructor(e){this.type=De,this.auth=Ee(e)}async verify(e="verify",c=!1){async function t(e){if(!c){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(c,t)=>{U(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((n=>{if(void 0!==n.recaptchaKey){const t=new F(n);return null==e.tenantId?e._agentRecaptchaConfig=t:e._tenantRecaptchaConfigs[e.tenantId]=t,c(t.siteKey)}t(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{t(e)}))}))}function n(c,t,n){const a=window.grecaptcha;D(a)?a.enterprise.ready((()=>{a.enterprise.execute(c,{action:e}).then((e=>{t(e)})).catch((()=>{t(Fe)}))})):n(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,a)=>{t(this.auth).then((t=>{if(!c&&D(window.grecaptcha))n(t,e,a);else{if("undefined"===typeof window)return void a(new Error("RecaptchaVerifier is only supported in browser"));Re(Oe+t).then((()=>{n(t,e,a)})).catch((e=>{a(e)}))}})).catch((e=>{a(e)}))}))}}async function Be(e,c,t,n=!1){const a=new Ue(e);let i;try{i=await a.verify(t)}catch(r){i=await a.verify(t,!0)}const s=Object.assign({},c);return n?Object.assign(s,{captchaResp:i}):Object.assign(s,{captchaResponse:i}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function je(e,c,t,n){var a;if(null===(a=e._getRecaptchaConfig())||void 0===a?void 0:a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Be(e,c,t,"getOobCode"===t);return n(e,a)}return n(e,c).catch((async a=>{if("auth/missing-recaptcha-token"===a.code){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Be(e,c,t,"getOobCode"===t);return n(e,a)}return Promise.reject(a)}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qe(e,c){const t=(0,a.qX)(e,"auth");if(t.isInitialized()){const e=t.getImmediate(),a=t.getOptions();if((0,n.vZ)(a,null!==c&&void 0!==c?c:{}))return e;d(e,"already-initialized")}const i=t.initialize({options:c});return i}function $e(e,c){const t=(null===c||void 0===c?void 0:c.persistence)||[],n=(Array.isArray(t)?t:[t]).map(le);(null===c||void 0===c?void 0:c.errorMap)&&e._updateErrorMap(c.errorMap),e._initializeWithPersistence(n,null===c||void 0===c?void 0:c.popupRedirectResolver)}function Ge(e,c,t){const n=Ee(e);g(n._canInitEmulator,n,"emulator-config-failed"),g(/^https?:\/\//.test(c),n,"invalid-emulator-scheme");const a=!!(null===t||void 0===t?void 0:t.disableWarnings),i=We(c),{host:s,port:r}=Ke(c),o=null===r?"":`:${r}`;n.config.emulator={url:`${i}//${s}${o}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:s,port:r,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||Je()}function We(e){const c=e.indexOf(":");return c<0?"":e.substr(0,c+1)}function Ke(e){const c=We(e),t=/(\/\/)?([^?#/]+)/.exec(e.substr(c.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(n);if(a){const e=a[1];return{host:e,port:Ze(n.substr(e.length+1))}}{const[e,c]=n.split(":");return{host:e,port:Ze(c)}}}function Ze(e){if(!e)return null;const c=Number(e);return isNaN(c)?null:c}function Je(){function e(){const e=document.createElement("p"),c=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",c.position="fixed",c.width="100%",c.backgroundColor="#ffffff",c.border=".1em solid #000000",c.color="#b50000",c.bottom="0px",c.left="0px",c.margin="0px",c.zIndex="10000",c.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,c){this.providerId=e,this.signInMethod=c}toJSON(){return H("not implemented")}_getIdTokenResponse(e){return H("not implemented")}_linkToIdToken(e,c){return H("not implemented")}_getReauthenticationResolver(e){return H("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qe(e,c){return _(e,"POST","/v1/accounts:signUp",c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Xe(e,c){return T(e,"POST","/v1/accounts:signInWithPassword",A(e,c))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ec(e,c){return T(e,"POST","/v1/accounts:signInWithEmailLink",A(e,c))}async function cc(e,c){return T(e,"POST","/v1/accounts:signInWithEmailLink",A(e,c))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc extends Ye{constructor(e,c,t,n=null){super("password",t),this._email=e,this._password=c,this._tenantId=n}static _fromEmailAndPassword(e,c){return new tc(e,c,"password")}static _fromEmailAndCode(e,c,t=null){return new tc(e,c,"emailLink",t)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const c="string"===typeof e?JSON.parse(e):e;if((null===c||void 0===c?void 0:c.email)&&(null===c||void 0===c?void 0:c.password)){if("password"===c.signInMethod)return this._fromEmailAndPassword(c.email,c.password);if("emailLink"===c.signInMethod)return this._fromEmailAndCode(c.email,c.password,c.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const c={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return je(e,c,"signInWithPassword",Xe);case"emailLink":return ec(e,{email:this._email,oobCode:this._password});default:d(e,"internal-error")}}async _linkToIdToken(e,c){switch(this.signInMethod){case"password":const t={idToken:c,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return je(e,t,"signUpPassword",Qe);case"emailLink":return cc(e,{idToken:c,email:this._email,oobCode:this._password});default:d(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nc(e,c){return T(e,"POST","/v1/accounts:signInWithIdp",A(e,c))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac="http://localhost";class ic extends Ye{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const c=new ic(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(c.idToken=e.idToken),e.accessToken&&(c.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(c.nonce=e.nonce),e.pendingToken&&(c.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(c.accessToken=e.oauthToken,c.secret=e.oauthTokenSecret):d("argument-error"),c}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const c="string"===typeof e?JSON.parse(e):e,{providerId:t,signInMethod:n}=c,a=s(c,["providerId","signInMethod"]);if(!t||!n)return null;const i=new ic(t,n);return i.idToken=a.idToken||void 0,i.accessToken=a.accessToken||void 0,i.secret=a.secret,i.nonce=a.nonce,i.pendingToken=a.pendingToken||null,i}_getIdTokenResponse(e){const c=this.buildRequest();return nc(e,c)}_linkToIdToken(e,c){const t=this.buildRequest();return t.idToken=c,nc(e,t)}_getReauthenticationResolver(e){const c=this.buildRequest();return c.autoCreate=!1,nc(e,c)}buildRequest(){const e={requestUri:ac,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const c={};this.idToken&&(c["id_token"]=this.idToken),this.accessToken&&(c["access_token"]=this.accessToken),this.secret&&(c["oauth_token_secret"]=this.secret),c["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(c["nonce"]=this.nonce),e.postBody=(0,n.xO)(c)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sc(e,c){return _(e,"POST","/v1/accounts:sendVerificationCode",A(e,c))}async function rc(e,c){return T(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,c))}async function oc(e,c){const t=await T(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,c));if(t.temporaryProof)throw O(e,"account-exists-with-different-credential",t);return t}const lc={["USER_NOT_FOUND"]:"user-not-found"};async function fc(e,c){const t=Object.assign(Object.assign({},c),{operation:"REAUTH"});return T(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t),lc)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc extends Ye{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,c){return new uc({verificationId:e,verificationCode:c})}static _fromTokenResponse(e,c){return new uc({phoneNumber:e,temporaryProof:c})}_getIdTokenResponse(e){return rc(e,this._makeVerificationRequest())}_linkToIdToken(e,c){return oc(e,Object.assign({idToken:c},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return fc(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:c,verificationId:t,verificationCode:n}=this.params;return e&&c?{temporaryProof:e,phoneNumber:c}:{sessionInfo:t,code:n}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:c,verificationCode:t,phoneNumber:n,temporaryProof:a}=e;return t||c||n||a?new uc({verificationId:c,verificationCode:t,phoneNumber:n,temporaryProof:a}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mc(e){const c=(0,n.zd)((0,n.pd)(e))["link"],t=c?(0,n.zd)((0,n.pd)(c))["deep_link_id"]:null,a=(0,n.zd)((0,n.pd)(e))["deep_link_id"],i=a?(0,n.zd)((0,n.pd)(a))["link"]:null;return i||a||t||c||e}class dc{constructor(e){var c,t,a,i,s,r;const o=(0,n.zd)((0,n.pd)(e)),l=null!==(c=o["apiKey"])&&void 0!==c?c:null,f=null!==(t=o["oobCode"])&&void 0!==t?t:null,u=hc(null!==(a=o["mode"])&&void 0!==a?a:null);g(l&&f&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=f,this.continueUrl=null!==(i=o["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(s=o["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(r=o["tenantId"])&&void 0!==r?r:null}static parseLink(e){const c=mc(e);try{return new dc(c)}catch(t){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pc{constructor(){this.providerId=pc.PROVIDER_ID}static credential(e,c){return tc._fromEmailAndPassword(e,c)}static credentialWithLink(e,c){const t=dc.parseLink(c);return g(t,"argument-error"),tc._fromEmailAndCode(e,t.code,t.tenantId)}}pc.PROVIDER_ID="password",pc.EMAIL_PASSWORD_SIGN_IN_METHOD="password",pc.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc extends zc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gc extends vc{constructor(){super("facebook.com")}static credential(e){return ic._fromParams({providerId:gc.PROVIDER_ID,signInMethod:gc.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gc.credentialFromTaggedObject(e)}static credentialFromError(e){return gc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return gc.credential(e.oauthAccessToken)}catch(c){return null}}}gc.FACEBOOK_SIGN_IN_METHOD="facebook.com",gc.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hc extends vc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,c){return ic._fromParams({providerId:Hc.PROVIDER_ID,signInMethod:Hc.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:c})}static credentialFromResult(e){return Hc.credentialFromTaggedObject(e)}static credentialFromError(e){return Hc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:c,oauthAccessToken:t}=e;if(!c&&!t)return null;try{return Hc.credential(c,t)}catch(n){return null}}}Hc.GOOGLE_SIGN_IN_METHOD="google.com",Hc.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vc extends vc{constructor(){super("github.com")}static credential(e){return ic._fromParams({providerId:Vc.PROVIDER_ID,signInMethod:Vc.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vc.credentialFromTaggedObject(e)}static credentialFromError(e){return Vc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Vc.credential(e.oauthAccessToken)}catch(c){return null}}}Vc.GITHUB_SIGN_IN_METHOD="github.com",Vc.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mc extends vc{constructor(){super("twitter.com")}static credential(e,c){return ic._fromParams({providerId:Mc.PROVIDER_ID,signInMethod:Mc.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:c})}static credentialFromResult(e){return Mc.credentialFromTaggedObject(e)}static credentialFromError(e){return Mc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:c,oauthTokenSecret:t}=e;if(!c||!t)return null;try{return Mc.credential(c,t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Cc(e,c){return T(e,"POST","/v1/accounts:signUp",A(e,c))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mc.TWITTER_SIGN_IN_METHOD="twitter.com",Mc.PROVIDER_ID="twitter.com";class Lc{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,c,t,n=!1){const a=await re._fromIdTokenResponse(e,t,n),i=yc(t),s=new Lc({user:a,providerId:i,_tokenResponse:t,operationType:c});return s}static async _forOperation(e,c,t){await e._updateTokensIfNecessary(t,!0);const n=yc(t);return new Lc({user:e,providerId:n,_tokenResponse:t,operationType:c})}}function yc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bc extends n.ZR{constructor(e,c,t,n){var a;super(c.code,c.message),this.operationType=t,this.user=n,Object.setPrototypeOf(this,bc.prototype),this.customData={appName:e.name,tenantId:null!==(a=e.tenantId)&&void 0!==a?a:void 0,_serverResponse:c.customData._serverResponse,operationType:t}}static _fromErrorAndOperation(e,c,t,n){return new bc(e,c,t,n)}}function xc(e,c,t,n){const a="reauthenticate"===c?t._getReauthenticationResolver(e):t._getIdTokenResponse(e);return a.catch((t=>{if("auth/multi-factor-auth-required"===t.code)throw bc._fromErrorAndOperation(e,t,c,n);throw t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wc(e,c,t=!1){const n=await Z(e,c._linkToIdToken(e.auth,await e.getIdToken()),t);return Lc._forOperation(e,"link",n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Nc(e,c,t=!1){const{auth:n}=e,a="reauthenticate";try{const i=await Z(e,xc(n,a,c,e),t);g(i.idToken,n,"internal-error");const s=W(i.idToken);g(s,n,"internal-error");const{sub:r}=s;return g(e.uid===r,n,"user-mismatch"),Lc._forOperation(e,a,i)}catch(i){throw"auth/user-not-found"===(null===i||void 0===i?void 0:i.code)&&d(n,"user-mismatch"),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sc(e,c,t=!1){const n="signIn",a=await xc(e,n,c),i=await Lc._fromIdTokenResponse(e,n,a);return t||await e._updateCurrentUser(i.user),i}async function kc(e,c){return Sc(Ee(e),c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ac(e){const c=Ee(e);c._getPasswordPolicyInternal()&&await c._updatePasswordPolicy()}async function _c(e,c,t){const n=Ee(e),a={returnSecureToken:!0,email:c,password:t,clientType:"CLIENT_TYPE_WEB"},i=je(n,a,"signUpPassword",Cc),s=await i.catch((c=>{throw"auth/password-does-not-meet-requirements"===c.code&&Ac(e),c})),r=await Lc._fromIdTokenResponse(n,"signIn",s);return await n._updateCurrentUser(r.user),r}function Ec(e,c,t){return kc((0,n.m9)(e),pc.credential(c,t)).catch((async c=>{throw"auth/password-does-not-meet-requirements"===c.code&&Ac(e),c}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(e,c,t,a){return(0,n.m9)(e).onIdTokenChanged(c,t,a)}function Ic(e,c,t){return(0,n.m9)(e).beforeAuthStateChanged(c,t)}function Rc(e){return(0,n.m9)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pc(e,c){return _(e,"POST","/v2/accounts/mfaEnrollment:start",A(e,c))}function Oc(e,c){return _(e,"POST","/v2/accounts/mfaEnrollment:finalize",A(e,c))}function Dc(e,c){return _(e,"POST","/v2/accounts/mfaEnrollment:start",A(e,c))}function Fc(e,c){return _(e,"POST","/v2/accounts/mfaEnrollment:finalize",A(e,c))}new WeakMap;const Uc="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,c){this.storageRetriever=e,this.type=c}_isAvailable(){try{return this.storage?(this.storage.setItem(Uc,"1"),this.storage.removeItem(Uc),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,c){return this.storage.setItem(e,JSON.stringify(c)),Promise.resolve()}_get(e){const c=this.storage.getItem(e);return Promise.resolve(c?JSON.parse(c):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(){const e=(0,n.z$)();return ze(e)||Ce(e)}const qc=1e3,$c=10;class Gc extends Bc{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,c)=>this.onStorageEvent(e,c),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=jc()&&xe(),this.fallbackToPolling=be(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const c of Object.keys(this.listeners)){const t=this.storage.getItem(c),n=this.localCache[c];t!==n&&e(c,n,t)}}onStorageEvent(e,c=!1){if(!e.key)return void this.forAllChangedKeys(((e,c,t)=>{this.notifyListeners(e,t)}));const t=e.key;if(c?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const n=this.storage.getItem(t);if(e.newValue!==n)null!==e.newValue?this.storage.setItem(t,e.newValue):this.storage.removeItem(t);else if(this.localCache[t]===e.newValue&&!c)return}const n=()=>{const e=this.storage.getItem(t);(c||this.localCache[t]!==e)&&this.notifyListeners(t,e)},a=this.storage.getItem(t);ye()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,$c):n()}notifyListeners(e,c){this.localCache[e]=c;const t=this.listeners[e];if(t)for(const n of Array.from(t))n(c?JSON.parse(c):c)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,c,t)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:c,newValue:t}),!0)}))}),qc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,c){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(c)}_removeListener(e,c){this.listeners[e]&&(this.listeners[e].delete(c),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,c){await super._set(e,c),this.localCache[e]=JSON.stringify(c)}async _get(e){const c=await super._get(e);return this.localCache[e]=JSON.stringify(c),c}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gc.type="LOCAL";const Wc=Gc;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc extends Bc{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,c){}_removeListener(e,c){}}Kc.type="SESSION";const Zc=Kc;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(e){return Promise.all(e.map((async e=>{try{const c=await e;return{fulfilled:!0,value:c}}catch(c){return{fulfilled:!1,reason:c}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const c=this.receivers.find((c=>c.isListeningto(e)));if(c)return c;const t=new Yc(e);return this.receivers.push(t),t}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const c=e,{eventId:t,eventType:n,data:a}=c.data,i=this.handlersMap[n];if(!(null===i||void 0===i?void 0:i.size))return;c.ports[0].postMessage({status:"ack",eventId:t,eventType:n});const s=Array.from(i).map((async e=>e(c.origin,a))),r=await Jc(s);c.ports[0].postMessage({status:"done",eventId:t,eventType:n,response:r})}_subscribe(e,c){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(c)}_unsubscribe(e,c){this.handlersMap[e]&&c&&this.handlersMap[e].delete(c),c&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qc(e="",c=10){let t="";for(let n=0;n<c;n++)t+=Math.floor(10*Math.random());return e+t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yc.receivers=[];class Xc{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,c,t=50){const n="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let a,i;return new Promise(((s,r)=>{const o=Qc("",20);n.port1.start();const l=setTimeout((()=>{r(new Error("unsupported_event"))}),t);i={messageChannel:n,onMessage(e){const c=e;if(c.data.eventId===o)switch(c.data.status){case"ack":clearTimeout(l),a=setTimeout((()=>{r(new Error("timeout"))}),3e3);break;case"done":clearTimeout(a),s(c.data.response);break;default:clearTimeout(l),clearTimeout(a),r(new Error("invalid_response"));break}}},this.handlers.add(i),n.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:o,data:c},[n.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(){return window}function ct(e){et().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return"undefined"!==typeof et()["WorkerGlobalScope"]&&"function"===typeof et()["importScripts"]}async function nt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function at(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function it(){return tt()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st="firebaseLocalStorageDb",rt=1,ot="firebaseLocalStorage",lt="fbase_key";class ft{constructor(e){this.request=e}toPromise(){return new Promise(((e,c)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{c(this.request.error)}))}))}}function ut(e,c){return e.transaction([ot],c?"readwrite":"readonly").objectStore(ot)}function ht(){const e=indexedDB.deleteDatabase(st);return new ft(e).toPromise()}function mt(){const e=indexedDB.open(st,rt);return new Promise(((c,t)=>{e.addEventListener("error",(()=>{t(e.error)})),e.addEventListener("upgradeneeded",(()=>{const c=e.result;try{c.createObjectStore(ot,{keyPath:lt})}catch(n){t(n)}})),e.addEventListener("success",(async()=>{const t=e.result;t.objectStoreNames.contains(ot)?c(t):(t.close(),await ht(),c(await mt()))}))}))}async function dt(e,c,t){const n=ut(e,!0).put({[lt]:c,value:t});return new ft(n).toPromise()}async function pt(e,c){const t=ut(e,!1).get(c),n=await new ft(t).toPromise();return void 0===n?null:n.value}function zt(e,c){const t=ut(e,!0).delete(c);return new ft(t).toPromise()}const vt=800,gt=3;class Ht{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await mt()),this.db}async _withRetries(e){let c=0;while(1)try{const c=await this._openDb();return await e(c)}catch(t){if(c++>gt)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yc._getInstance(it()),this.receiver._subscribe("keyChanged",(async(e,c)=>{const t=await this._poll();return{keyProcessed:t.includes(c.key)}})),this.receiver._subscribe("ping",(async(e,c)=>["keyChanged"]))}async initializeSender(){var e,c;if(this.activeServiceWorker=await nt(),!this.activeServiceWorker)return;this.sender=new Xc(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(null===(e=t[0])||void 0===e?void 0:e.fulfilled)&&(null===(c=t[0])||void 0===c?void 0:c.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&at()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(c){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mt();return await dt(e,Uc,"1"),await zt(e,Uc),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,c){return this._withPendingWrite((async()=>(await this._withRetries((t=>dt(t,e,c))),this.localCache[e]=c,this.notifyServiceWorker(e))))}async _get(e){const c=await this._withRetries((c=>pt(c,e)));return this.localCache[e]=c,c}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((c=>zt(c,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const c=ut(e,!1).getAll();return new ft(c).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const c=[],t=new Set;if(0!==e.length)for(const{fbase_key:n,value:a}of e)t.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(a)&&(this.notifyListeners(n,a),c.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!t.has(n)&&(this.notifyListeners(n,null),c.push(n));return c}notifyListeners(e,c){this.localCache[e]=c;const t=this.listeners[e];if(t)for(const n of Array.from(t))n(c)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),vt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,c){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(c)}_removeListener(e,c){this.listeners[e]&&(this.listeners[e].delete(c),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Ht.type="LOCAL";const Vt=Ht;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(e,c){return _(e,"POST","/v2/accounts/mfaSignIn:start",A(e,c))}function Ct(e,c){return _(e,"POST","/v2/accounts/mfaSignIn:finalize",A(e,c))}function Lt(e,c){return _(e,"POST","/v2/accounts/mfaSignIn:finalize",A(e,c))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Pe("rcb"),new x(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yt="recaptcha";async function bt(e,c,t){var n;const a=await t.verify();try{let i;if(g("string"===typeof a,e,"argument-error"),g(t.type===yt,e,"argument-error"),i="string"===typeof c?{phoneNumber:c}:c,"session"in i){const c=i.session;if("phoneNumber"in i){g("enroll"===c.type,e,"internal-error");const t=await Pc(e,{idToken:c.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:a}});return t.phoneSessionInfo.sessionInfo}{g("signin"===c.type,e,"internal-error");const t=(null===(n=i.multiFactorHint)||void 0===n?void 0:n.uid)||i.multiFactorUid;g(t,e,"missing-multi-factor-info");const s=await Mt(e,{mfaPendingCredential:c.credential,mfaEnrollmentId:t,phoneSignInInfo:{recaptchaToken:a}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:c}=await sc(e,{phoneNumber:i.phoneNumber,recaptchaToken:a});return c}}finally{t._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xt{constructor(e){this.providerId=xt.PROVIDER_ID,this.auth=Ee(e)}verifyPhoneNumber(e,c){return bt(this.auth,e,(0,n.m9)(c))}static credential(e,c){return uc._fromVerification(e,c)}static credentialFromResult(e){const c=e;return xt.credentialFromTaggedObject(c)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:c,temporaryProof:t}=e;return c&&t?uc._fromTokenResponse(c,t):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wt(e,c){return c?le(c):(g(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt.PROVIDER_ID="phone",xt.PHONE_SIGN_IN_METHOD="phone";class Nt extends Ye{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return nc(e,this._buildIdpRequest())}_linkToIdToken(e,c){return nc(e,this._buildIdpRequest(c))}_getReauthenticationResolver(e){return nc(e,this._buildIdpRequest())}_buildIdpRequest(e){const c={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(c.idToken=e),c}}function St(e){return Sc(e.auth,new Nt(e),e.bypassAuthState)}function kt(e){const{auth:c,user:t}=e;return g(t,c,"internal-error"),Nc(t,new Nt(e),e.bypassAuthState)}async function At(e){const{auth:c,user:t}=e;return g(t,c,"internal-error"),wc(t,new Nt(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,c,t,n,a=!1){this.auth=e,this.resolver=t,this.user=n,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(c)?c:[c]}execute(){return new Promise((async(e,c)=>{this.pendingPromise={resolve:e,reject:c};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(e){const{urlResponse:c,sessionId:t,postBody:n,tenantId:a,error:i,type:s}=e;if(i)return void this.reject(i);const r={auth:this.auth,requestUri:c,sessionId:t,tenantId:a||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(r))}catch(o){this.reject(o)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return St;case"linkViaPopup":case"linkViaRedirect":return At;case"reauthViaPopup":case"reauthViaRedirect":return kt;default:d(this.auth,"internal-error")}}resolve(e){V(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){V(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et=new x(2e3,1e4);class Tt extends _t{constructor(e,c,t,n,a){super(e,c,n,a),this.provider=t,this.authWindow=null,this.pollId=null,Tt.currentPopupAction&&Tt.currentPopupAction.cancel(),Tt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){V(1===this.filter.length,"Popup operations only handle one event");const e=Qc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var c,t;(null===(t=null===(c=this.authWindow)||void 0===c?void 0:c.window)||void 0===t?void 0:t.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Et.get())};e()}}Tt.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const It="pendingRedirect",Rt=new Map;class Pt extends _t{constructor(e,c,t=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],c,void 0,t),this.eventId=null}async execute(){let e=Rt.get(this.auth._key());if(!e){try{const c=await Ot(this.resolver,this.auth),t=c?await super.execute():null;e=()=>Promise.resolve(t)}catch(c){e=()=>Promise.reject(c)}Rt.set(this.auth._key(),e)}return this.bypassAuthState||Rt.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const c=await this.auth._redirectUserForId(e.eventId);if(c)return this.user=c,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Ot(e,c){const t=Ut(c),n=Ft(e);if(!await n._isAvailable())return!1;const a="true"===await n._get(t);return await n._remove(t),a}function Dt(e,c){Rt.set(e._key(),c)}function Ft(e){return le(e._redirectPersistence)}function Ut(e){return he(It,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bt(e,c,t=!1){const n=Ee(e),a=wt(n,c),i=new Pt(n,a,t),s=await i.execute();return s&&!t&&(delete s.user._redirectEventId,await n._persistUserIfCurrent(s.user),await n._setRedirectUser(null,c)),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const jt=6e5;class qt{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let c=!1;return this.consumers.forEach((t=>{this.isEventForConsumer(e,t)&&(c=!0,this.sendToConsumer(e,t),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Wt(e)||(this.hasHandledPotentialRedirect=!0,c||(this.queuedRedirectEvent=e,c=!0)),c}sendToConsumer(e,c){var t;if(e.error&&!Gt(e)){const n=(null===(t=e.error.code)||void 0===t?void 0:t.split("auth/")[1])||"internal-error";c.onError(p(this.auth,n))}else c.onAuthEvent(e)}isEventForConsumer(e,c){const t=null===c.eventId||!!e.eventId&&e.eventId===c.eventId;return c.filter.includes(e.type)&&t}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jt&&this.cachedEventUids.clear(),this.cachedEventUids.has($t(e))}saveEventToCache(e){this.cachedEventUids.add($t(e)),this.lastProcessedEventTime=Date.now()}}function $t(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Gt({type:e,error:c}){return"unknown"===e&&"auth/no-auth-event"===(null===c||void 0===c?void 0:c.code)}function Wt(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gt(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kt(e,c={}){return _(e,"GET","/v1/projects",c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Jt=/^https?/;async function Yt(e){if(e.config.emulator)return;const{authorizedDomains:c}=await Kt(e);for(const n of c)try{if(Qt(n))return}catch(t){}d(e,"unauthorized-domain")}function Qt(e){const c=M(),{protocol:t,hostname:n}=new URL(c);if(e.startsWith("chrome-extension://")){const a=new URL(e);return""===a.hostname&&""===n?"chrome-extension:"===t&&e.replace("chrome-extension://","")===c.replace("chrome-extension://",""):"chrome-extension:"===t&&a.hostname===n}if(!Jt.test(t))return!1;if(Zt.test(e))return n===e;const a=e.replace(/\./g,"\\."),i=new RegExp("^(.+\\."+a+"|"+a+")$","i");return i.test(n)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=new x(3e4,6e4);function en(){const e=et().___jsl;if(null===e||void 0===e?void 0:e.H)for(const c of Object.keys(e.H))if(e.H[c].r=e.H[c].r||[],e.H[c].L=e.H[c].L||[],e.H[c].r=[...e.H[c].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function cn(e){return new Promise(((c,t)=>{var n,a,i;function s(){en(),gapi.load("gapi.iframes",{callback:()=>{c(gapi.iframes.getContext())},ontimeout:()=>{en(),t(p(e,"network-request-failed"))},timeout:Xt.get()})}if(null===(a=null===(n=et().gapi)||void 0===n?void 0:n.iframes)||void 0===a?void 0:a.Iframe)c(gapi.iframes.getContext());else{if(!(null===(i=et().gapi)||void 0===i?void 0:i.load)){const c=Pe("iframefcb");return et()[c]=()=>{gapi.load?s():t(p(e,"network-request-failed"))},Re(`https://apis.google.com/js/api.js?onload=${c}`).catch((e=>t(e)))}s()}})).catch((e=>{throw tn=null,e}))}let tn=null;function nn(e){return tn=tn||cn(e),tn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an=new x(5e3,15e3),sn="__/auth/iframe",rn="emulator/auth/iframe",on={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ln=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fn(e){const c=e.config;g(c.authDomain,e,"auth-domain-config-required");const t=c.emulator?w(c,rn):`https://${e.config.authDomain}/${sn}`,i={apiKey:c.apiKey,appName:e.name,v:a.Jn},s=ln.get(e.config.apiHost);s&&(i.eid=s);const r=e._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${(0,n.xO)(i).slice(1)}`}async function un(e){const c=await nn(e),t=et().gapi;return g(t,e,"internal-error"),c.open({where:document.body,url:fn(e),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:on,dontclear:!0},(c=>new Promise((async(t,n)=>{await c.restyle({setHideOnLeave:!1});const a=p(e,"network-request-failed"),i=et().setTimeout((()=>{n(a)}),an.get());function s(){et().clearTimeout(i),t(c)}c.ping(s).then(s,(()=>{n(a)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mn=500,dn=600,pn="_blank",zn="http://localhost";class vn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function gn(e,c,t,a=mn,i=dn){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),r=Math.max((window.screen.availWidth-a)/2,0).toString();let o="";const l=Object.assign(Object.assign({},hn),{width:a.toString(),height:i.toString(),top:s,left:r}),f=(0,n.z$)().toLowerCase();t&&(o=ve(f)?pn:t),pe(f)&&(c=c||zn,l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[c,t])=>`${e}${c}=${t},`),"");if(Le(f)&&"_self"!==o)return Hn(c||"",o),new vn(null);const h=window.open(c||"",o,u);g(h,e,"popup-blocked");try{h.focus()}catch(m){}return new vn(h)}function Hn(e,c){const t=document.createElement("a");t.href=e,t.target=c;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn="__/auth/handler",Mn="emulator/auth/handler",Cn=encodeURIComponent("fac");async function Ln(e,c,t,i,s,r){g(e.config.authDomain,e,"auth-domain-config-required"),g(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:t,redirectUrl:i,v:a.Jn,eventId:s};if(c instanceof zc){c.setDefaultLanguage(e.languageCode),o.providerId=c.providerId||"",(0,n.xb)(c.getCustomParameters())||(o.customParameters=JSON.stringify(c.getCustomParameters()));for(const[e,c]of Object.entries(r||{}))o[e]=c}if(c instanceof vc){const e=c.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const l=o;for(const n of Object.keys(l))void 0===l[n]&&delete l[n];const f=await e._getAppCheckToken(),u=f?`#${Cn}=${encodeURIComponent(f)}`:"";return`${yn(e)}?${(0,n.xO)(l).slice(1)}${u}`}function yn({config:e}){return e.emulator?w(e,Mn):`https://${e.authDomain}/${Vn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn="webStorageSupport";class xn{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zc,this._completeRedirectFn=Bt,this._overrideRedirectResult=Dt}async _openPopup(e,c,t,n){var a;V(null===(a=this.eventManagers[e._key()])||void 0===a?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await Ln(e,c,t,M(),n);return gn(e,i,Qc())}async _openRedirect(e,c,t,n){await this._originValidation(e);const a=await Ln(e,c,t,M(),n);return ct(a),new Promise((()=>{}))}_initialize(e){const c=e._key();if(this.eventManagers[c]){const{manager:e,promise:t}=this.eventManagers[c];return e?Promise.resolve(e):(V(t,"If manager is not set, promise should be"),t)}const t=this.initAndGetManager(e);return this.eventManagers[c]={promise:t},t.catch((()=>{delete this.eventManagers[c]})),t}async initAndGetManager(e){const c=await un(e),t=new qt(e);return c.register("authEvent",(c=>{g(null===c||void 0===c?void 0:c.authEvent,e,"invalid-auth-event");const n=t.onEvent(c.authEvent);return{status:n?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:t},this.iframes[e._key()]=c,t}_isIframeWebStorageSupported(e,c){const t=this.iframes[e._key()];t.send(bn,{type:bn},(t=>{var n;const a=null===(n=null===t||void 0===t?void 0:t[0])||void 0===n?void 0:n[bn];void 0!==a&&c(!!a),d(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const c=e._key();return this.originValidationPromises[c]||(this.originValidationPromises[c]=Yt(e)),this.originValidationPromises[c]}get _shouldInitProactively(){return be()||ze()||Ce()}}const wn=xn;class Nn{constructor(e){this.factorId=e}_process(e,c,t){switch(c.type){case"enroll":return this._finalizeEnroll(e,c.credential,t);case"signin":return this._finalizeSignIn(e,c.credential);default:return H("unexpected MultiFactorSessionType")}}}class Sn extends Nn{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Sn(e)}_finalizeEnroll(e,c,t){return Oc(e,{idToken:c,displayName:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,c){return Ct(e,{mfaPendingCredential:c,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class kn{constructor(){}static assertion(e){return Sn._fromCredential(e)}}kn.FACTOR_ID="phone";class An{static assertionForEnrollment(e,c){return _n._fromSecret(e,c)}static assertionForSignIn(e,c){return _n._fromEnrollmentId(e,c)}static async generateSecret(e){var c;const t=e;g("undefined"!==typeof(null===(c=t.user)||void 0===c?void 0:c.auth),"internal-error");const n=await Dc(t.user.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return En._fromStartTotpMfaEnrollmentResponse(n,t.user.auth)}}An.FACTOR_ID="totp";class _n extends Nn{constructor(e,c,t){super("totp"),this.otp=e,this.enrollmentId=c,this.secret=t}static _fromSecret(e,c){return new _n(c,void 0,e)}static _fromEnrollmentId(e,c){return new _n(c,e)}async _finalizeEnroll(e,c,t){return g("undefined"!==typeof this.secret,e,"argument-error"),Fc(e,{idToken:c,displayName:t,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,c){g(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const t={verificationCode:this.otp};return Lt(e,{mfaPendingCredential:c,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:t})}}class En{constructor(e,c,t,n,a,i,s){this.sessionInfo=i,this.auth=s,this.secretKey=e,this.hashingAlgorithm=c,this.codeLength=t,this.codeIntervalSeconds=n,this.enrollmentCompletionDeadline=a}static _fromStartTotpMfaEnrollmentResponse(e,c){return new En(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,c)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,c){var t;let n=!1;return(Tn(e)||Tn(c))&&(n=!0),n&&(Tn(e)&&(e=(null===(t=this.auth.currentUser)||void 0===t?void 0:t.email)||"unknownuser"),Tn(c)&&(c=this.auth.name)),`otpauth://totp/${c}:${e}?secret=${this.secretKey}&issuer=${c}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Tn(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var In="@firebase/auth",Rn="1.5.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pn{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const c=await this.auth.currentUser.getIdToken(e);return{accessToken:c}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const c=this.auth.onIdTokenChanged((c=>{e((null===c||void 0===c?void 0:c.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,c),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const c=this.internalListeners.get(e);c&&(this.internalListeners.delete(e),c(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Dn(e){(0,a.Xd)(new r.wA("auth",((c,{options:t})=>{const n=c.getProvider("app").getImmediate(),a=c.getProvider("heartbeat"),i=c.getProvider("app-check-internal"),{apiKey:s,authDomain:r}=n.options;g(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const o={apiKey:s,authDomain:r,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:we(e)},l=new _e(n,a,i,o);return $e(l,t),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,c,t)=>{const n=e.getProvider("auth-internal");n.initialize()}))),(0,a.Xd)(new r.wA("auth-internal",(e=>{const c=Ee(e.getProvider("auth").getImmediate());return(e=>new Pn(e))(c)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,a.KN)(In,Rn,On(e)),(0,a.KN)(In,Rn,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=300,Un=(0,n.Pz)("authIdTokenMaxAge")||Fn;let Bn=null;const jn=e=>async c=>{const t=c&&await c.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Un)return;const a=null===t||void 0===t?void 0:t.token;Bn!==a&&(Bn=a,await fetch(e,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function qn(e=(0,a.Mq)()){const c=(0,a.qX)(e,"auth");if(c.isInitialized())return c.getImmediate();const t=qe(e,{popupRedirectResolver:wn,persistence:[Vt,Wc,Zc]}),i=(0,n.Pz)("authTokenSyncURL");if(i){const e=jn(i);Ic(t,e,(()=>e(t.currentUser))),Tc(t,(c=>e(c)))}const s=(0,n.q4)("auth");return s&&Ge(t,`http://${s}`),t}Dn("Browser")},4287:function(e,c,t){"use strict";t.d(c,{oe:function(){return Du},JU:function(){return tu},QT:function(){return Ru},ad:function(){return iu},pl:function(){return Ou}});t(3767),t(8585),t(8696),t(7658),t(2801);var n,a=t(7077),i=t(7142),s=t(5168),r=t(223),o=(t(541),"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{}),l={},f=f||{},u=o||self;function h(e){var c=typeof e;return c="object"!=c?c:e?Array.isArray(e)?"array":c:"null","array"==c||"object"==c&&"number"==typeof e.length}function m(e){var c=typeof e;return"object"==c&&null!=e||"function"==c}function d(e){return Object.prototype.hasOwnProperty.call(e,p)&&e[p]||(e[p]=++z)}var p="closure_uid_"+(1e9*Math.random()>>>0),z=0;function v(e,c,t){return e.call.apply(e.bind,arguments)}function g(e,c,t){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var t=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(t,n),e.apply(c,t)}}return function(){return e.apply(c,arguments)}}function H(e,c,t){return H=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:g,H.apply(null,arguments)}function V(e,c){var t=Array.prototype.slice.call(arguments,1);return function(){var c=t.slice();return c.push.apply(c,arguments),e.apply(this,c)}}function M(e,c){function t(){}t.prototype=c.prototype,e.$=c.prototype,e.prototype=new t,e.prototype.constructor=e,e.ac=function(e,t,n){for(var a=Array(arguments.length-2),i=2;i<arguments.length;i++)a[i-2]=arguments[i];return c.prototype[t].apply(e,a)}}function C(){this.s=this.s,this.o=this.o}var L=0;C.prototype.s=!1,C.prototype.sa=function(){this.s||(this.s=!0,this.N(),0==L)||d(this)},C.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const y=Array.prototype.indexOf?function(e,c){return Array.prototype.indexOf.call(e,c,void 0)}:function(e,c){if("string"===typeof e)return"string"!==typeof c||1!=c.length?-1:e.indexOf(c,0);for(let t=0;t<e.length;t++)if(t in e&&e[t]===c)return t;return-1};function b(e){const c=e.length;if(0<c){const t=Array(c);for(let n=0;n<c;n++)t[n]=e[n];return t}return[]}function x(e,c){for(let t=1;t<arguments.length;t++){const c=arguments[t];if(h(c)){const t=e.length||0,n=c.length||0;e.length=t+n;for(let a=0;a<n;a++)e[t+a]=c[a]}else e.push(c)}}function w(e,c){this.type=e,this.g=this.target=c,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var N=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var e=!1,c=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};u.addEventListener("test",e,c),u.removeEventListener("test",e,c)}catch(t){}return e}();function S(e){return/^[\s\xa0]*$/.test(e)}function k(){var e=u.navigator;return e&&(e=e.userAgent)?e:""}function A(e){return-1!=k().indexOf(e)}function _(e){return _[" "](e),e}function E(e,c){var t=Vn;return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=c(e)}_[" "]=function(){};var T,I,R=A("Opera"),P=A("Trident")||A("MSIE"),O=A("Edge"),D=O||P,F=A("Gecko")&&!(-1!=k().toLowerCase().indexOf("webkit")&&!A("Edge"))&&!(A("Trident")||A("MSIE"))&&!A("Edge"),U=-1!=k().toLowerCase().indexOf("webkit")&&!A("Edge");function B(){var e=u.document;return e?e.documentMode:void 0}e:{var j="",q=function(){var e=k();return F?/rv:([^\);]+)(\)|;)/.exec(e):O?/Edge\/([\d\.]+)/.exec(e):P?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):U?/WebKit\/(\S+)/.exec(e):R?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(q&&(j=q?q[1]:""),P){var $=B();if(null!=$&&$>parseFloat(j)){T=String($);break e}}T=j}if(u.document&&P){var G=B();I=G||(parseInt(T,10)||void 0)}else I=void 0;var W=I;function K(e,c){if(w.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var t=this.type=e.type,n=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=c,c=e.relatedTarget){if(F){e:{try{_(c.nodeName);var a=!0;break e}catch(i){}a=!1}a||(c=null)}}else"mouseover"==t?c=e.fromElement:"mouseout"==t&&(c=e.toElement);this.relatedTarget=c,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:Z[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&K.$.h.call(this)}}M(K,w);var Z={2:"touch",3:"pen",4:"mouse"};K.prototype.h=function(){K.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var J="closure_listenable_"+(1e6*Math.random()|0),Y=0;function Q(e,c,t,n,a){this.listener=e,this.proxy=null,this.src=c,this.type=t,this.capture=!!n,this.la=a,this.key=++Y,this.fa=this.ia=!1}function X(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function ee(e,c,t){for(const n in e)c.call(t,e[n],n,e)}function ce(e,c){for(const t in e)c.call(void 0,e[t],t,e)}function te(e){const c={};for(const t in e)c[t]=e[t];return c}const ne="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ae(e,c){let t,n;for(let a=1;a<arguments.length;a++){for(t in n=arguments[a],n)e[t]=n[t];for(let c=0;c<ne.length;c++)t=ne[c],Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}}function ie(e){this.src=e,this.g={},this.h=0}function se(e,c){var t=c.type;if(t in e.g){var n,a=e.g[t],i=y(a,c);(n=0<=i)&&Array.prototype.splice.call(a,i,1),n&&(X(c),0==e.g[t].length&&(delete e.g[t],e.h--))}}function re(e,c,t,n){for(var a=0;a<e.length;++a){var i=e[a];if(!i.fa&&i.listener==c&&i.capture==!!t&&i.la==n)return a}return-1}ie.prototype.add=function(e,c,t,n,a){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var s=re(e,c,n,a);return-1<s?(c=e[s],t||(c.ia=!1)):(c=new Q(c,this.src,i,!!n,a),c.ia=t,e.push(c)),c};var oe="closure_lm_"+(1e6*Math.random()|0),le={};function fe(e,c,t,n,a){if(n&&n.once)return me(e,c,t,n,a);if(Array.isArray(c)){for(var i=0;i<c.length;i++)fe(e,c[i],t,n,a);return null}return t=Ve(t),e&&e[J]?e.O(c,t,m(n)?!!n.capture:!!n,a):ue(e,c,t,!1,n,a)}function ue(e,c,t,n,a,i){if(!c)throw Error("Invalid event type");var s=m(a)?!!a.capture:!!a,r=ge(e);if(r||(e[oe]=r=new ie(e)),t=r.add(c,t,n,s,i),t.proxy)return t;if(n=he(),t.proxy=n,n.src=e,n.listener=t,e.addEventListener)N||(a=s),void 0===a&&(a=!1),e.addEventListener(c.toString(),n,a);else if(e.attachEvent)e.attachEvent(ze(c.toString()),n);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(n)}return t}function he(){function e(t){return c.call(e.src,e.listener,t)}const c=ve;return e}function me(e,c,t,n,a){if(Array.isArray(c)){for(var i=0;i<c.length;i++)me(e,c[i],t,n,a);return null}return t=Ve(t),e&&e[J]?e.P(c,t,m(n)?!!n.capture:!!n,a):ue(e,c,t,!0,n,a)}function de(e,c,t,n,a){if(Array.isArray(c))for(var i=0;i<c.length;i++)de(e,c[i],t,n,a);else n=m(n)?!!n.capture:!!n,t=Ve(t),e&&e[J]?(e=e.i,c=String(c).toString(),c in e.g&&(i=e.g[c],t=re(i,t,n,a),-1<t&&(X(i[t]),Array.prototype.splice.call(i,t,1),0==i.length&&(delete e.g[c],e.h--)))):e&&(e=ge(e))&&(c=e.g[c.toString()],e=-1,c&&(e=re(c,t,n,a)),(t=-1<e?c[e]:null)&&pe(t))}function pe(e){if("number"!==typeof e&&e&&!e.fa){var c=e.src;if(c&&c[J])se(c.i,e);else{var t=e.type,n=e.proxy;c.removeEventListener?c.removeEventListener(t,n,e.capture):c.detachEvent?c.detachEvent(ze(t),n):c.addListener&&c.removeListener&&c.removeListener(n),(t=ge(c))?(se(t,e),0==t.h&&(t.src=null,c[oe]=null)):X(e)}}}function ze(e){return e in le?le[e]:le[e]="on"+e}function ve(e,c){if(e.fa)e=!0;else{c=new K(c,this);var t=e.listener,n=e.la||e.src;e.ia&&pe(e),e=t.call(n,c)}return e}function ge(e){return e=e[oe],e instanceof ie?e:null}var He="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ve(e){return"function"===typeof e?e:(e[He]||(e[He]=function(c){return e.handleEvent(c)}),e[He])}function Me(){C.call(this),this.i=new ie(this),this.S=this,this.J=null}function Ce(e,c){var t,n=e.J;if(n)for(t=[];n;n=n.J)t.push(n);if(e=e.S,n=c.type||c,"string"===typeof c)c=new w(c,e);else if(c instanceof w)c.target=c.target||e;else{var a=c;c=new w(n,e),ae(c,a)}if(a=!0,t)for(var i=t.length-1;0<=i;i--){var s=c.g=t[i];a=Le(s,n,!0,c)&&a}if(s=c.g=e,a=Le(s,n,!0,c)&&a,a=Le(s,n,!1,c)&&a,t)for(i=0;i<t.length;i++)s=c.g=t[i],a=Le(s,n,!1,c)&&a}function Le(e,c,t,n){if(c=e.i.g[String(c)],!c)return!0;c=c.concat();for(var a=!0,i=0;i<c.length;++i){var s=c[i];if(s&&!s.fa&&s.capture==t){var r=s.listener,o=s.la||s.src;s.ia&&se(e.i,s),a=!1!==r.call(o,n)&&a}}return a&&!n.defaultPrevented}M(Me,C),Me.prototype[J]=!0,Me.prototype.removeEventListener=function(e,c,t,n){de(this,e,c,t,n)},Me.prototype.N=function(){if(Me.$.N.call(this),this.i){var e,c=this.i;for(e in c.g){for(var t=c.g[e],n=0;n<t.length;n++)X(t[n]);delete c.g[e],c.h--}}this.J=null},Me.prototype.O=function(e,c,t,n){return this.i.add(String(e),c,!1,t,n)},Me.prototype.P=function(e,c,t,n){return this.i.add(String(e),c,!0,t,n)};var ye=u.JSON.stringify;class be{constructor(e,c){this.i=e,this.j=c,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function xe(){var e=Te;let c=null;return e.g&&(c=e.g,e.g=e.g.next,e.g||(e.h=null),c.next=null),c}class we{constructor(){this.h=this.g=null}add(e,c){const t=Ne.get();t.set(e,c),this.h?this.h.next=t:this.g=t,this.h=t}}var Ne=new be((()=>new Se),(e=>e.reset()));class Se{constructor(){this.next=this.g=this.h=null}set(e,c){this.h=e,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}function ke(e){var c=1;e=e.split(":");const t=[];for(;0<c&&e.length;)t.push(e.shift()),c--;return e.length&&t.push(e.join(":")),t}function Ae(e){u.setTimeout((()=>{throw e}),0)}let _e,Ee=!1,Te=new we,Ie=()=>{const e=u.Promise.resolve(void 0);_e=()=>{e.then(Re)}};var Re=()=>{for(var e;e=xe();){try{e.h.call(e.g)}catch(t){Ae(t)}var c=Ne;c.j(e),100>c.h&&(c.h++,e.next=c.g,c.g=e)}Ee=!1};function Pe(e,c){Me.call(this),this.h=e||1,this.g=c||u,this.j=H(this.qb,this),this.l=Date.now()}function Oe(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function De(e,c,t){if("function"===typeof e)t&&(e=H(e,t));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=H(e.handleEvent,e)}return 2147483647<Number(c)?-1:u.setTimeout(e,c||0)}function Fe(e){e.g=De((()=>{e.g=null,e.i&&(e.i=!1,Fe(e))}),e.j);const c=e.h;e.h=null,e.m.apply(null,c)}M(Pe,Me),n=Pe.prototype,n.ga=!1,n.T=null,n.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ce(this,"tick"),this.ga&&(Oe(this),this.start()))}},n.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},n.N=function(){Pe.$.N.call(this),Oe(this),delete this.g};class Ue extends C{constructor(e,c){super(),this.m=e,this.j=c,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Fe(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Be(e){C.call(this),this.h=e,this.g={}}M(Be,C);var je=[];function qe(e,c,t,n){Array.isArray(t)||(t&&(je[0]=t.toString()),t=je);for(var a=0;a<t.length;a++){var i=fe(c,t[a],n||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function $e(e){ee(e.g,(function(e,c){this.g.hasOwnProperty(c)&&pe(e)}),e),e.g={}}function Ge(){this.g=!0}function We(e,c,t,n,a,i){e.info((function(){if(e.g)if(i)for(var s="",r=i.split("&"),o=0;o<r.length;o++){var l=r[o].split("=");if(1<l.length){var f=l[0];l=l[1];var u=f.split("_");s=2<=u.length&&"type"==u[1]?s+(f+"=")+l+"&":s+(f+"=redacted&")}}else s=null;else s=i;return"XMLHTTP REQ ("+n+") [attempt "+a+"]: "+c+"\n"+t+"\n"+s}))}function Ke(e,c,t,n,a,i,s){e.info((function(){return"XMLHTTP RESP ("+n+") [ attempt "+a+"]: "+c+"\n"+t+"\n"+i+" "+s}))}function Ze(e,c,t,n){e.info((function(){return"XMLHTTP TEXT ("+c+"): "+Ye(e,t)+(n?" "+n:"")}))}function Je(e,c){e.info((function(){return"TIMEOUT: "+c}))}function Ye(e,c){if(!e.g)return c;if(!c)return null;try{var t=JSON.parse(c);if(t)for(e=0;e<t.length;e++)if(Array.isArray(t[e])){var n=t[e];if(!(2>n.length)){var a=n[1];if(Array.isArray(a)&&!(1>a.length)){var i=a[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var s=1;s<a.length;s++)a[s]=""}}}return ye(t)}catch(r){return c}}Be.prototype.N=function(){Be.$.N.call(this),$e(this)},Be.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ge.prototype.Ea=function(){this.g=!1},Ge.prototype.info=function(){};var Qe={},Xe=null;function ec(){return Xe=Xe||new Me}function cc(e){w.call(this,Qe.Ta,e)}function tc(e){const c=ec();Ce(c,new cc(c))}function nc(e,c){w.call(this,Qe.STAT_EVENT,e),this.stat=c}function ac(e){const c=ec();Ce(c,new nc(c,e))}function ic(e,c){w.call(this,Qe.Ua,e),this.size=c}function sc(e,c){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return u.setTimeout((function(){e()}),c)}Qe.Ta="serverreachability",M(cc,w),Qe.STAT_EVENT="statevent",M(nc,w),Qe.Ua="timingevent",M(ic,w);var rc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},oc={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function lc(){}function fc(e){return e.h||(e.h=e.i())}function uc(){}lc.prototype.h=null;var hc,mc={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function dc(){w.call(this,"d")}function pc(){w.call(this,"c")}function zc(){}function vc(e,c,t,n){this.l=e,this.j=c,this.m=t,this.W=n||1,this.U=new Be(this),this.P=Hc,e=D?125:void 0,this.V=new Pe(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new gc}function gc(){this.i=null,this.g="",this.h=!1}M(dc,w),M(pc,w),M(zc,lc),zc.prototype.g=function(){return new XMLHttpRequest},zc.prototype.i=function(){return{}},hc=new zc;var Hc=45e3,Vc={},Mc={};function Cc(e,c,t){e.L=1,e.A=qc(Dc(c)),e.u=t,e.S=!0,Lc(e,null)}function Lc(e,c){e.G=Date.now(),wc(e),e.B=Dc(e.A);var t=e.B,n=e.W;Array.isArray(n)||(n=[String(n)]),nt(t.i,"t",n),e.o=0,t=e.l.J,e.h=new gc,e.g=ln(e.l,t?c:null,!e.u),0<e.O&&(e.M=new Ue(H(e.Pa,e,e.g),e.O)),qe(e.U,e.g,"readystatechange",e.nb),c=e.I?te(e.I):{},e.u?(e.v||(e.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,c)):(e.v="GET",e.g.ha(e.B,e.v,null,c)),tc(),We(e.j,e.v,e.B,e.m,e.W,e.u)}function yc(e){return!!e.g&&("GET"==e.v&&2!=e.L&&e.l.Ha)}function bc(e,c,t){let n,a=!0;for(;!e.J&&e.o<t.length;){if(n=xc(e,t),n==Mc){4==c&&(e.s=4,ac(14),a=!1),Ze(e.j,e.m,null,"[Incomplete Response]");break}if(n==Vc){e.s=4,ac(15),Ze(e.j,e.m,t,"[Invalid Chunk]"),a=!1;break}Ze(e.j,e.m,n,null),_c(e,n)}yc(e)&&0!=e.o&&(e.h.g=e.h.g.slice(e.o),e.o=0),4!=c||0!=t.length||e.h.h||(e.s=1,ac(16),a=!1),e.i=e.i&&a,a?0<t.length&&!e.ba&&(e.ba=!0,c=e.l,c.g==e&&c.ca&&!c.M&&(c.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),en(c),c.M=!0,ac(11))):(Ze(e.j,e.m,t,"[Invalid Chunked Response]"),Ac(e),kc(e))}function xc(e,c){var t=e.o,n=c.indexOf("\n",t);return-1==n?Mc:(t=Number(c.substring(t,n)),isNaN(t)?Vc:(n+=1,n+t>c.length?Mc:(c=c.slice(n,n+t),e.o=n+t,c)))}function wc(e){e.Y=Date.now()+e.P,Nc(e,e.P)}function Nc(e,c){if(null!=e.C)throw Error("WatchDog timer not null");e.C=sc(H(e.lb,e),c)}function Sc(e){e.C&&(u.clearTimeout(e.C),e.C=null)}function kc(e){0==e.l.H||e.J||nn(e.l,e)}function Ac(e){Sc(e);var c=e.M;c&&"function"==typeof c.sa&&c.sa(),e.M=null,Oe(e.V),$e(e.U),e.g&&(c=e.g,e.g=null,c.abort(),c.sa())}function _c(e,c){try{var t=e.l;if(0!=t.H&&(t.g==e||ut(t.i,e)))if(!e.K&&ut(t.i,e)&&3==t.H){try{var n=t.Ja.g.parse(c)}catch(l){n=null}if(Array.isArray(n)&&3==n.length){var a=n;if(0==a[0]){e:if(!t.u){if(t.g){if(!(t.g.G+3e3<e.G))break e;tn(t),$t(t)}Xt(t),ac(18)}}else t.Fa=a[1],0<t.Fa-t.V&&37500>a[2]&&t.G&&0==t.A&&!t.v&&(t.v=sc(H(t.ib,t),6e3));if(1>=ft(t.i)&&t.oa){try{t.oa()}catch(l){}t.oa=void 0}}else sn(t,11)}else if((e.K||t.g==e)&&tn(t),!S(c))for(a=t.Ja.g.parse(c),c=0;c<a.length;c++){let l=a[c];if(t.V=l[0],l=l[1],2==t.H)if("c"==l[0]){t.K=l[1],t.pa=l[2];const c=l[3];null!=c&&(t.ra=c,t.l.info("VER="+t.ra));const a=l[4];null!=a&&(t.Ga=a,t.l.info("SVER="+t.Ga));const f=l[5];null!=f&&"number"===typeof f&&0<f&&(n=1.5*f,t.L=n,t.l.info("backChannelRequestTimeoutMs_="+n)),n=t;const u=e.g;if(u){const e=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var i=n.i;i.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(ht(i,i.h),i.h=null))}if(n.F){const e=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(n.Da=e,jc(n.I,n.F,e))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-e.G,t.l.info("Handshake RTT: "+t.S+"ms")),n=t;var s=e;if(n.wa=on(n,n.J?n.pa:null,n.Y),s.K){mt(n.i,s);var r=s,o=n.L;o&&r.setTimeout(o),r.C&&(Sc(r),wc(r)),n.g=s}else Qt(n);0<t.j.length&&Wt(t)}else"stop"!=l[0]&&"close"!=l[0]||sn(t,7);else 3==t.H&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?sn(t,7):qt(t):"noop"!=l[0]&&t.h&&t.h.Aa(l),t.A=0)}tc(4)}catch(l){}}function Ec(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(h(e)){for(var c=[],t=e.length,n=0;n<t;n++)c.push(e[n]);return c}for(n in c=[],t=0,e)c[t++]=e[n];return c}function Tc(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(h(e)||"string"===typeof e){var c=[];e=e.length;for(var t=0;t<e;t++)c.push(t);return c}c=[],t=0;for(const n in e)c[t++]=n;return c}}}function Ic(e,c){if(e.forEach&&"function"==typeof e.forEach)e.forEach(c,void 0);else if(h(e)||"string"===typeof e)Array.prototype.forEach.call(e,c,void 0);else for(var t=Tc(e),n=Ec(e),a=n.length,i=0;i<a;i++)c.call(void 0,n[i],t&&t[i],e)}n=vc.prototype,n.setTimeout=function(e){this.P=e},n.nb=function(e){e=e.target;const c=this.M;c&&3==Pt(e)?c.l():this.Pa(e)},n.Pa=function(e){try{if(e==this.g)e:{const f=Pt(this.g);var c=this.g.Ia();const h=this.g.da();if(!(3>f)&&(3!=f||D||this.g&&(this.h.h||this.g.ja()||Ot(this.g)))){this.J||4!=f||7==c||tc(8==c||0>=h?3:2),Sc(this);var t=this.g.da();this.ca=t;c:if(yc(this)){var n=Ot(this.g);e="";var a=n.length,i=4==Pt(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Ac(this),kc(this);var s="";break c}this.h.i=new u.TextDecoder}for(c=0;c<a;c++)this.h.h=!0,e+=this.h.i.decode(n[c],{stream:i&&c==a-1});n.length=0,this.h.g+=e,this.o=0,s=this.h.g}else s=this.g.ja();if(this.i=200==t,Ke(this.j,this.v,this.B,this.m,this.W,f,t),this.i){if(this.aa&&!this.K){c:{if(this.g){var r,o=this.g;if((r=o.g?o.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(r)){var l=r;break c}}l=null}if(!(t=l)){this.i=!1,this.s=3,ac(12),Ac(this),kc(this);break e}Ze(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_c(this,t)}this.S?(bc(this,f,s),D&&this.i&&3==f&&(qe(this.U,this.V,"tick",this.mb),this.V.start())):(Ze(this.j,this.m,s,null),_c(this,s)),4==f&&Ac(this),this.i&&!this.J&&(4==f?nn(this.l,this):(this.i=!1,wc(this)))}else Dt(this.g),400==t&&0<s.indexOf("Unknown SID")?(this.s=3,ac(12)):(this.s=0,ac(13)),Ac(this),kc(this)}}}catch(f){}},n.mb=function(){if(this.g){var e=Pt(this.g),c=this.g.ja();this.o<c.length&&(Sc(this),bc(this,e,c),this.i&&4!=e&&wc(this))}},n.cancel=function(){this.J=!0,Ac(this)},n.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(Je(this.j,this.B),2!=this.L&&(tc(),ac(17)),Ac(this),this.s=2,kc(this)):Nc(this,this.Y-e)};var Rc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Pc(e,c){if(e){e=e.split("&");for(var t=0;t<e.length;t++){var n=e[t].indexOf("="),a=null;if(0<=n){var i=e[t].substring(0,n);a=e[t].substring(n+1)}else i=e[t];c(i,a?decodeURIComponent(a.replace(/\+/g," ")):"")}}}function Oc(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Oc){this.h=e.h,Fc(this,e.j),this.s=e.s,this.g=e.g,Uc(this,e.m),this.l=e.l;var c=e.i,t=new Xc;t.i=c.i,c.g&&(t.g=new Map(c.g),t.h=c.h),Bc(this,t),this.o=e.o}else e&&(c=String(e).match(Rc))?(this.h=!1,Fc(this,c[1]||"",!0),this.s=$c(c[2]||""),this.g=$c(c[3]||"",!0),Uc(this,c[4]),this.l=$c(c[5]||"",!0),Bc(this,c[6]||"",!0),this.o=$c(c[7]||"")):(this.h=!1,this.i=new Xc(null,this.h))}function Dc(e){return new Oc(e)}function Fc(e,c,t){e.j=t?$c(c,!0):c,e.j&&(e.j=e.j.replace(/:$/,""))}function Uc(e,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);e.m=c}else e.m=null}function Bc(e,c,t){c instanceof Xc?(e.i=c,it(e.i,e.h)):(t||(c=Gc(c,Yc)),e.i=new Xc(c,e.h))}function jc(e,c,t){e.i.set(c,t)}function qc(e){return jc(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function $c(e,c){return e?c?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Gc(e,c,t){return"string"===typeof e?(e=encodeURI(e).replace(c,Wc),t&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Wc(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Oc.prototype.toString=function(){var e=[],c=this.j;c&&e.push(Gc(c,Kc,!0),":");var t=this.g;return(t||"file"==c)&&(e.push("//"),(c=this.s)&&e.push(Gc(c,Kc,!0),"@"),e.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,null!=t&&e.push(":",String(t))),(t=this.l)&&(this.g&&"/"!=t.charAt(0)&&e.push("/"),e.push(Gc(t,"/"==t.charAt(0)?Jc:Zc,!0))),(t=this.i.toString())&&e.push("?",t),(t=this.o)&&e.push("#",Gc(t,Qc)),e.join("")};var Kc=/[#\/\?@]/g,Zc=/[#\?:]/g,Jc=/[#\?]/g,Yc=/[#\?@]/g,Qc=/#/g;function Xc(e,c){this.h=this.g=null,this.i=e||null,this.j=!!c}function et(e){e.g||(e.g=new Map,e.h=0,e.i&&Pc(e.i,(function(c,t){e.add(decodeURIComponent(c.replace(/\+/g," ")),t)})))}function ct(e,c){et(e),c=at(e,c),e.g.has(c)&&(e.i=null,e.h-=e.g.get(c).length,e.g.delete(c))}function tt(e,c){return et(e),c=at(e,c),e.g.has(c)}function nt(e,c,t){ct(e,c),0<t.length&&(e.i=null,e.g.set(at(e,c),b(t)),e.h+=t.length)}function at(e,c){return c=String(c),e.j&&(c=c.toLowerCase()),c}function it(e,c){c&&!e.j&&(et(e),e.i=null,e.g.forEach((function(e,c){var t=c.toLowerCase();c!=t&&(ct(this,c),nt(this,t,e))}),e)),e.j=c}n=Xc.prototype,n.add=function(e,c){et(this),this.i=null,e=at(this,e);var t=this.g.get(e);return t||this.g.set(e,t=[]),t.push(c),this.h+=1,this},n.forEach=function(e,c){et(this),this.g.forEach((function(t,n){t.forEach((function(t){e.call(c,t,n,this)}),this)}),this)},n.ta=function(){et(this);const e=Array.from(this.g.values()),c=Array.from(this.g.keys()),t=[];for(let n=0;n<c.length;n++){const a=e[n];for(let e=0;e<a.length;e++)t.push(c[n])}return t},n.Z=function(e){et(this);let c=[];if("string"===typeof e)tt(this,e)&&(c=c.concat(this.g.get(at(this,e))));else{e=Array.from(this.g.values());for(let t=0;t<e.length;t++)c=c.concat(e[t])}return c},n.set=function(e,c){return et(this),this.i=null,e=at(this,e),tt(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[c]),this.h+=1,this},n.get=function(e,c){return e?(e=this.Z(e),0<e.length?String(e[0]):c):c},n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],c=Array.from(this.g.keys());for(var t=0;t<c.length;t++){var n=c[t];const i=encodeURIComponent(String(n)),s=this.Z(n);for(n=0;n<s.length;n++){var a=i;""!==s[n]&&(a+="="+encodeURIComponent(String(s[n]))),e.push(a)}}return this.i=e.join("&")};var st=class{constructor(e,c){this.g=e,this.map=c}};function rt(e){this.l=e||ot,u.PerformanceNavigationTiming?(e=u.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(u.g&&u.g.Ka&&u.g.Ka()&&u.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ot=10;function lt(e){return!!e.h||!!e.g&&e.g.size>=e.j}function ft(e){return e.h?1:e.g?e.g.size:0}function ut(e,c){return e.h?e.h==c:!!e.g&&e.g.has(c)}function ht(e,c){e.g?e.g.add(c):e.h=c}function mt(e,c){e.h&&e.h==c?e.h=null:e.g&&e.g.has(c)&&e.g.delete(c)}function dt(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let c=e.i;for(const t of e.g.values())c=c.concat(t.F);return c}return b(e.i)}rt.prototype.cancel=function(){if(this.i=dt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var pt=class{stringify(e){return u.JSON.stringify(e,void 0)}parse(e){return u.JSON.parse(e,void 0)}};function zt(){this.g=new pt}function vt(e,c,t){const n=t||"";try{Ic(e,(function(e,t){let a=e;m(e)&&(a=ye(e)),c.push(n+t+"="+encodeURIComponent(a))}))}catch(a){throw c.push(n+"type="+encodeURIComponent("_badmap")),a}}function gt(e,c){const t=new Ge;if(u.Image){const n=new Image;n.onload=V(Ht,t,n,"TestLoadImage: loaded",!0,c),n.onerror=V(Ht,t,n,"TestLoadImage: error",!1,c),n.onabort=V(Ht,t,n,"TestLoadImage: abort",!1,c),n.ontimeout=V(Ht,t,n,"TestLoadImage: timeout",!1,c),u.setTimeout((function(){n.ontimeout&&n.ontimeout()}),1e4),n.src=e}else c(!1)}function Ht(e,c,t,n,a){try{c.onload=null,c.onerror=null,c.onabort=null,c.ontimeout=null,a(n)}catch(i){}}function Vt(e){this.l=e.ec||null,this.j=e.ob||!1}function Mt(e,c){Me.call(this),this.F=e,this.u=c,this.m=void 0,this.readyState=Ct,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}M(Vt,lc),Vt.prototype.g=function(){return new Mt(this.l,this.j)},Vt.prototype.i=function(e){return function(){return e}}({}),M(Mt,Me);var Ct=0;function Lt(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function yt(e){e.readyState=4,e.l=null,e.j=null,e.A=null,bt(e)}function bt(e){e.onreadystatechange&&e.onreadystatechange.call(e)}n=Mt.prototype,n.open=function(e,c){if(this.readyState!=Ct)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=c,this.readyState=1,bt(this)},n.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(c.body=e),(this.F||u).fetch(new Request(this.B,c)).then(this.$a.bind(this),this.ka.bind(this))},n.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,yt(this)),this.readyState=Ct},n.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,bt(this)),this.g&&(this.readyState=3,bt(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof u.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Lt(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},n.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var c=e.value?e.value:new Uint8Array(0);(c=this.A.decode(c,{stream:!e.done}))&&(this.response=this.responseText+=c)}e.done?yt(this):bt(this),3==this.readyState&&Lt(this)}},n.Za=function(e){this.g&&(this.response=this.responseText=e,yt(this))},n.Ya=function(e){this.g&&(this.response=e,yt(this))},n.ka=function(){this.g&&yt(this)},n.setRequestHeader=function(e,c){this.v.append(e,c)},n.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],c=this.h.entries();for(var t=c.next();!t.done;)t=t.value,e.push(t[0]+": "+t[1]),t=c.next();return e.join("\r\n")},Object.defineProperty(Mt.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var xt=u.JSON.parse;function wt(e){Me.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Nt,this.L=this.M=!1}M(wt,Me);var Nt="",St=/^https?$/i,kt=["POST","PUT"];function At(e){return P&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function _t(e,c){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=c,e.m=5,Et(e),It(e)}function Et(e){e.F||(e.F=!0,Ce(e,"complete"),Ce(e,"error"))}function Tt(e){if(e.h&&"undefined"!=typeof f&&(!e.C[1]||4!=Pt(e)||2!=e.da()))if(e.v&&4==Pt(e))De(e.La,0,e);else if(Ce(e,"readystatechange"),4==Pt(e)){e.h=!1;try{const r=e.da();e:switch(r){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var t;if(!(t=c)){var n;if(n=0===r){var a=String(e.I).match(Rc)[1]||null;!a&&u.self&&u.self.location&&(a=u.self.location.protocol.slice(0,-1)),n=!St.test(a?a.toLowerCase():"")}t=n}if(t)Ce(e,"complete"),Ce(e,"success");else{e.m=6;try{var i=2<Pt(e)?e.g.statusText:""}catch(s){i=""}e.j=i+" ["+e.da()+"]",Et(e)}}finally{It(e)}}}function It(e,c){if(e.g){Rt(e);const n=e.g,a=e.C[0]?()=>{}:null;e.g=null,e.C=null,c||Ce(e,"ready");try{n.onreadystatechange=a}catch(t){}}}function Rt(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(u.clearTimeout(e.A),e.A=null)}function Pt(e){return e.g?e.g.readyState:0}function Ot(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Nt:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(Jn){return null}}function Dt(e){const c={};e=(e.g&&2<=Pt(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let n=0;n<e.length;n++){if(S(e[n]))continue;var t=ke(e[n]);const a=t[0];if(t=t[1],"string"!==typeof t)continue;t=t.trim();const i=c[a]||[];c[a]=i,i.push(t)}ce(c,(function(e){return e.join(", ")}))}function Ft(e){let c="";return ee(e,(function(e,t){c+=t,c+=":",c+=e,c+="\r\n"})),c}function Ut(e,c,t){e:{for(n in t){var n=!1;break e}n=!0}n||(t=Ft(t),"string"===typeof e?null!=t&&encodeURIComponent(String(t)):jc(e,c,t))}function Bt(e,c,t){return t&&t.internalChannelParams&&t.internalChannelParams[e]||c}function jt(e){this.Ga=0,this.j=[],this.l=new Ge,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Bt("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Bt("baseRetryDelayMs",5e3,e),this.hb=Bt("retryDelaySeedMs",1e4,e),this.eb=Bt("forwardChannelMaxRetries",2,e),this.xa=Bt("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new rt(e&&e.concurrentRequestLimit),this.Ja=new zt,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function qt(e){if(Gt(e),3==e.H){var c=e.W++,t=Dc(e.I);if(jc(t,"SID",e.K),jc(t,"RID",c),jc(t,"TYPE","terminate"),Jt(e,t),c=new vc(e,e.l,c),c.L=2,c.A=qc(Dc(t)),t=!1,u.navigator&&u.navigator.sendBeacon)try{t=u.navigator.sendBeacon(c.A.toString(),"")}catch(n){}!t&&u.Image&&((new Image).src=c.A,t=!0),t||(c.g=ln(c.l,null),c.g.ha(c.A)),c.G=Date.now(),wc(c)}rn(e)}function $t(e){e.g&&(en(e),e.g.cancel(),e.g=null)}function Gt(e){$t(e),e.u&&(u.clearTimeout(e.u),e.u=null),tn(e),e.i.cancel(),e.m&&("number"===typeof e.m&&u.clearTimeout(e.m),e.m=null)}function Wt(e){if(!lt(e.i)&&!e.m){e.m=!0;var c=e.Na;_e||Ie(),Ee||(_e(),Ee=!0),Te.add(c,e),e.C=0}}function Kt(e,c){return!(ft(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=c.F.concat(e.j),!0):!(1==e.H||2==e.H||e.C>=(e.cb?0:e.eb))&&(e.m=sc(H(e.Na,e,c),an(e,e.C)),e.C++,!0))}function Zt(e,c){var t;t=c?c.m:e.W++;const n=Dc(e.I);jc(n,"SID",e.K),jc(n,"RID",t),jc(n,"AID",e.V),Jt(e,n),e.o&&e.s&&Ut(n,e.o,e.s),t=new vc(e,e.l,t,e.C+1),null===e.o&&(t.I=e.s),c&&(e.j=c.F.concat(e.j)),c=Yt(e,t,1e3),t.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),ht(e.i,t),Cc(t,n,c)}function Jt(e,c){e.na&&ee(e.na,(function(e,t){jc(c,t,e)})),e.h&&Ic({},(function(e,t){jc(c,t,e)}))}function Yt(e,c,t){t=Math.min(e.j.length,t);var n=e.h?H(e.h.Va,e.h,e):null;e:{var a=e.j;let c=-1;for(;;){const e=["count="+t];-1==c?0<t?(c=a[0].g,e.push("ofs="+c)):c=0:e.push("ofs="+c);let s=!0;for(let r=0;r<t;r++){let t=a[r].g;const o=a[r].map;if(t-=c,0>t)c=Math.max(0,a[r].g-100),s=!1;else try{vt(o,e,"req"+t+"_")}catch(i){n&&n(o)}}if(s){n=e.join("&");break e}}}return e=e.j.splice(0,t),c.F=e,n}function Qt(e){if(!e.g&&!e.u){e.ba=1;var c=e.Ma;_e||Ie(),Ee||(_e(),Ee=!0),Te.add(c,e),e.A=0}}function Xt(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=sc(H(e.Ma,e),an(e,e.A)),e.A++,!0)}function en(e){null!=e.B&&(u.clearTimeout(e.B),e.B=null)}function cn(e){e.g=new vc(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var c=Dc(e.wa);jc(c,"RID","rpc"),jc(c,"SID",e.K),jc(c,"AID",e.V),jc(c,"CI",e.G?"0":"1"),!e.G&&e.qa&&jc(c,"TO",e.qa),jc(c,"TYPE","xmlhttp"),Jt(e,c),e.o&&e.s&&Ut(c,e.o,e.s),e.L&&e.g.setTimeout(e.L);var t=e.g;e=e.pa,t.L=1,t.A=qc(Dc(c)),t.u=null,t.S=!0,Lc(t,e)}function tn(e){null!=e.v&&(u.clearTimeout(e.v),e.v=null)}function nn(e,c){var t=null;if(e.g==c){tn(e),en(e),e.g=null;var n=2}else{if(!ut(e.i,c))return;t=c.F,mt(e.i,c),n=1}if(0!=e.H)if(c.i)if(1==n){t=c.u?c.u.length:0,c=Date.now()-c.G;var a=e.C;n=ec(),Ce(n,new ic(n,t)),Wt(e)}else Qt(e);else if(a=c.s,3==a||0==a&&0<c.ca||!(1==n&&Kt(e,c)||2==n&&Xt(e)))switch(t&&0<t.length&&(c=e.i,c.i=c.i.concat(t)),a){case 1:sn(e,5);break;case 4:sn(e,10);break;case 3:sn(e,6);break;default:sn(e,2)}}function an(e,c){let t=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(t*=2),t*c}function sn(e,c){if(e.l.info("Error code "+c),2==c){var t=null;e.h&&(t=null);var n=H(e.pb,e);t||(t=new Oc("//www.google.com/images/cleardot.gif"),u.location&&"http"==u.location.protocol||Fc(t,"https"),qc(t)),gt(t.toString(),n)}else ac(2);e.H=0,e.h&&e.h.za(c),rn(e),Gt(e)}function rn(e){if(e.H=0,e.ma=[],e.h){const c=dt(e.i);0==c.length&&0==e.j.length||(x(e.ma,c),x(e.ma,e.j),e.i.i.length=0,b(e.j),e.j.length=0),e.h.ya()}}function on(e,c,t){var n=t instanceof Oc?Dc(t):new Oc(t);if(""!=n.g)c&&(n.g=c+"."+n.g),Uc(n,n.m);else{var a=u.location;n=a.protocol,c=c?c+"."+a.hostname:a.hostname,a=+a.port;var i=new Oc(null);n&&Fc(i,n),c&&(i.g=c),a&&Uc(i,a),t&&(i.l=t),n=i}return t=e.F,c=e.Da,t&&c&&jc(n,t,c),jc(n,"VER",e.ra),Jt(e,n),n}function ln(e,c,t){if(c&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=e.Ha&&!e.va?new wt(new Vt({ob:t})):new wt(e.va),c.Oa(e.J),c}function fn(){}function un(){if(P&&!(10<=Number(W)))throw Error("Environmental error: no available transport.")}function hn(e,c){Me.call(this),this.g=new jt(c),this.l=e,this.h=c&&c.messageUrlParams||null,e=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(e?e["X-WebChannel-Content-Type"]=c.messageContentType:e={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.Ca&&(e?e["X-WebChannel-Client-Profile"]=c.Ca:e={"X-WebChannel-Client-Profile":c.Ca}),this.g.U=e,(e=c&&c.cc)&&!S(e)&&(this.g.o=e),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!S(c)&&(this.g.F=c,e=this.h,null!==e&&c in e&&(e=this.h,c in e&&delete e[c])),this.j=new pn(this)}function mn(e){dc.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var c=e.__sm__;if(c){e:{for(const t in c){e=t;break e}e=void 0}(this.i=e)&&(e=this.i,c=null!==c&&e in c?c[e]:void 0),this.data=c}else this.data=e}function dn(){pc.call(this),this.status=1}function pn(e){this.g=e}function zn(){this.blockSize=-1}function vn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function gn(e,c,t){t||(t=0);var n=Array(16);if("string"===typeof c)for(var a=0;16>a;++a)n[a]=c.charCodeAt(t++)|c.charCodeAt(t++)<<8|c.charCodeAt(t++)<<16|c.charCodeAt(t++)<<24;else for(a=0;16>a;++a)n[a]=c[t++]|c[t++]<<8|c[t++]<<16|c[t++]<<24;c=e.g[0],t=e.g[1],a=e.g[2];var i=e.g[3],s=c+(i^t&(a^i))+n[0]+3614090360&4294967295;c=t+(s<<7&4294967295|s>>>25),s=i+(a^c&(t^a))+n[1]+3905402710&4294967295,i=c+(s<<12&4294967295|s>>>20),s=a+(t^i&(c^t))+n[2]+606105819&4294967295,a=i+(s<<17&4294967295|s>>>15),s=t+(c^a&(i^c))+n[3]+3250441966&4294967295,t=a+(s<<22&4294967295|s>>>10),s=c+(i^t&(a^i))+n[4]+4118548399&4294967295,c=t+(s<<7&4294967295|s>>>25),s=i+(a^c&(t^a))+n[5]+1200080426&4294967295,i=c+(s<<12&4294967295|s>>>20),s=a+(t^i&(c^t))+n[6]+2821735955&4294967295,a=i+(s<<17&4294967295|s>>>15),s=t+(c^a&(i^c))+n[7]+4249261313&4294967295,t=a+(s<<22&4294967295|s>>>10),s=c+(i^t&(a^i))+n[8]+1770035416&4294967295,c=t+(s<<7&4294967295|s>>>25),s=i+(a^c&(t^a))+n[9]+2336552879&4294967295,i=c+(s<<12&4294967295|s>>>20),s=a+(t^i&(c^t))+n[10]+4294925233&4294967295,a=i+(s<<17&4294967295|s>>>15),s=t+(c^a&(i^c))+n[11]+2304563134&4294967295,t=a+(s<<22&4294967295|s>>>10),s=c+(i^t&(a^i))+n[12]+1804603682&4294967295,c=t+(s<<7&4294967295|s>>>25),s=i+(a^c&(t^a))+n[13]+4254626195&4294967295,i=c+(s<<12&4294967295|s>>>20),s=a+(t^i&(c^t))+n[14]+2792965006&4294967295,a=i+(s<<17&4294967295|s>>>15),s=t+(c^a&(i^c))+n[15]+1236535329&4294967295,t=a+(s<<22&4294967295|s>>>10),s=c+(a^i&(t^a))+n[1]+4129170786&4294967295,c=t+(s<<5&4294967295|s>>>27),s=i+(t^a&(c^t))+n[6]+3225465664&4294967295,i=c+(s<<9&4294967295|s>>>23),s=a+(c^t&(i^c))+n[11]+643717713&4294967295,a=i+(s<<14&4294967295|s>>>18),s=t+(i^c&(a^i))+n[0]+3921069994&4294967295,t=a+(s<<20&4294967295|s>>>12),s=c+(a^i&(t^a))+n[5]+3593408605&4294967295,c=t+(s<<5&4294967295|s>>>27),s=i+(t^a&(c^t))+n[10]+38016083&4294967295,i=c+(s<<9&4294967295|s>>>23),s=a+(c^t&(i^c))+n[15]+3634488961&4294967295,a=i+(s<<14&4294967295|s>>>18),s=t+(i^c&(a^i))+n[4]+3889429448&4294967295,t=a+(s<<20&4294967295|s>>>12),s=c+(a^i&(t^a))+n[9]+568446438&4294967295,c=t+(s<<5&4294967295|s>>>27),s=i+(t^a&(c^t))+n[14]+3275163606&4294967295,i=c+(s<<9&4294967295|s>>>23),s=a+(c^t&(i^c))+n[3]+4107603335&4294967295,a=i+(s<<14&4294967295|s>>>18),s=t+(i^c&(a^i))+n[8]+1163531501&4294967295,t=a+(s<<20&4294967295|s>>>12),s=c+(a^i&(t^a))+n[13]+2850285829&4294967295,c=t+(s<<5&4294967295|s>>>27),s=i+(t^a&(c^t))+n[2]+4243563512&4294967295,i=c+(s<<9&4294967295|s>>>23),s=a+(c^t&(i^c))+n[7]+1735328473&4294967295,a=i+(s<<14&4294967295|s>>>18),s=t+(i^c&(a^i))+n[12]+2368359562&4294967295,t=a+(s<<20&4294967295|s>>>12),s=c+(t^a^i)+n[5]+4294588738&4294967295,c=t+(s<<4&4294967295|s>>>28),s=i+(c^t^a)+n[8]+2272392833&4294967295,i=c+(s<<11&4294967295|s>>>21),s=a+(i^c^t)+n[11]+1839030562&4294967295,a=i+(s<<16&4294967295|s>>>16),s=t+(a^i^c)+n[14]+4259657740&4294967295,t=a+(s<<23&4294967295|s>>>9),s=c+(t^a^i)+n[1]+2763975236&4294967295,c=t+(s<<4&4294967295|s>>>28),s=i+(c^t^a)+n[4]+1272893353&4294967295,i=c+(s<<11&4294967295|s>>>21),s=a+(i^c^t)+n[7]+4139469664&4294967295,a=i+(s<<16&4294967295|s>>>16),s=t+(a^i^c)+n[10]+3200236656&4294967295,t=a+(s<<23&4294967295|s>>>9),s=c+(t^a^i)+n[13]+681279174&4294967295,c=t+(s<<4&4294967295|s>>>28),s=i+(c^t^a)+n[0]+3936430074&4294967295,i=c+(s<<11&4294967295|s>>>21),s=a+(i^c^t)+n[3]+3572445317&4294967295,a=i+(s<<16&4294967295|s>>>16),s=t+(a^i^c)+n[6]+76029189&4294967295,t=a+(s<<23&4294967295|s>>>9),s=c+(t^a^i)+n[9]+3654602809&4294967295,c=t+(s<<4&4294967295|s>>>28),s=i+(c^t^a)+n[12]+3873151461&4294967295,i=c+(s<<11&4294967295|s>>>21),s=a+(i^c^t)+n[15]+530742520&4294967295,a=i+(s<<16&4294967295|s>>>16),s=t+(a^i^c)+n[2]+3299628645&4294967295,t=a+(s<<23&4294967295|s>>>9),s=c+(a^(t|~i))+n[0]+4096336452&4294967295,c=t+(s<<6&4294967295|s>>>26),s=i+(t^(c|~a))+n[7]+1126891415&4294967295,i=c+(s<<10&4294967295|s>>>22),s=a+(c^(i|~t))+n[14]+2878612391&4294967295,a=i+(s<<15&4294967295|s>>>17),s=t+(i^(a|~c))+n[5]+4237533241&4294967295,t=a+(s<<21&4294967295|s>>>11),s=c+(a^(t|~i))+n[12]+1700485571&4294967295,c=t+(s<<6&4294967295|s>>>26),s=i+(t^(c|~a))+n[3]+2399980690&4294967295,i=c+(s<<10&4294967295|s>>>22),s=a+(c^(i|~t))+n[10]+4293915773&4294967295,a=i+(s<<15&4294967295|s>>>17),s=t+(i^(a|~c))+n[1]+2240044497&4294967295,t=a+(s<<21&4294967295|s>>>11),s=c+(a^(t|~i))+n[8]+1873313359&4294967295,c=t+(s<<6&4294967295|s>>>26),s=i+(t^(c|~a))+n[15]+4264355552&4294967295,i=c+(s<<10&4294967295|s>>>22),s=a+(c^(i|~t))+n[6]+2734768916&4294967295,a=i+(s<<15&4294967295|s>>>17),s=t+(i^(a|~c))+n[13]+1309151649&4294967295,t=a+(s<<21&4294967295|s>>>11),s=c+(a^(t|~i))+n[4]+4149444226&4294967295,c=t+(s<<6&4294967295|s>>>26),s=i+(t^(c|~a))+n[11]+3174756917&4294967295,i=c+(s<<10&4294967295|s>>>22),s=a+(c^(i|~t))+n[2]+718787259&4294967295,a=i+(s<<15&4294967295|s>>>17),s=t+(i^(a|~c))+n[9]+3951481745&4294967295,e.g[0]=e.g[0]+c&4294967295,e.g[1]=e.g[1]+(a+(s<<21&4294967295|s>>>11))&4294967295,e.g[2]=e.g[2]+a&4294967295,e.g[3]=e.g[3]+i&4294967295}function Hn(e,c){this.h=c;for(var t=[],n=!0,a=e.length-1;0<=a;a--){var i=0|e[a];n&&i==c||(t[a]=i,n=!1)}this.g=t}n=wt.prototype,n.Oa=function(e){this.M=e},n.ha=function(e,c,t,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);c=c?c.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():hc.g(),this.C=this.u?fc(this.u):fc(hc),this.g.onreadystatechange=H(this.La,this);try{this.G=!0,this.g.open(c,String(e),!0),this.G=!1}catch(i){return void _t(this,i)}if(e=t||"",t=new Map(this.headers),n)if(Object.getPrototypeOf(n)===Object.prototype)for(var a in n)t.set(a,n[a]);else{if("function"!==typeof n.keys||"function"!==typeof n.get)throw Error("Unknown input type for opt_headers: "+String(n));for(const e of n.keys())t.set(e,n.get(e))}n=Array.from(t.keys()).find((e=>"content-type"==e.toLowerCase())),a=u.FormData&&e instanceof u.FormData,!(0<=y(kt,c))||n||a||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,r]of t)this.g.setRequestHeader(s,r);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Rt(this),0<this.B&&((this.L=At(this.g))?(this.g.timeout=this.B,this.g.ontimeout=H(this.ua,this)):this.A=De(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){_t(this,i)}},n.ua=function(){"undefined"!=typeof f&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ce(this,"timeout"),this.abort(8))},n.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ce(this,"complete"),Ce(this,"abort"),It(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),It(this,!0)),wt.$.N.call(this)},n.La=function(){this.s||(this.G||this.v||this.l?Tt(this):this.kb())},n.kb=function(){Tt(this)},n.isActive=function(){return!!this.g},n.da=function(){try{return 2<Pt(this)?this.g.status:-1}catch(e){return-1}},n.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},n.Wa=function(e){if(this.g){var c=this.g.responseText;return e&&0==c.indexOf(e)&&(c=c.substring(e.length)),xt(c)}},n.Ia=function(){return this.m},n.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},n=jt.prototype,n.ra=8,n.H=1,n.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const a=new vc(this,this.l,e);let i=this.s;if(this.U&&(i?(i=te(i),ae(i,this.U)):i=this.U),null!==this.o||this.O||(a.I=i,i=null),this.P)e:{for(var c=0,t=0;t<this.j.length;t++){var n=this.j[t];if(n="__data__"in n.map&&(n=n.map.__data__,"string"===typeof n)?n.length:void 0,void 0===n)break;if(c+=n,4096<c){c=t;break e}if(4096===c||t===this.j.length-1){c=t+1;break e}}c=1e3}else c=1e3;c=Yt(this,a,c),t=Dc(this.I),jc(t,"RID",e),jc(t,"CVER",22),this.F&&jc(t,"X-HTTP-Session-Id",this.F),Jt(this,t),i&&(this.O?c="headers="+encodeURIComponent(String(Ft(i)))+"&"+c:this.o&&Ut(t,this.o,i)),ht(this.i,a),this.bb&&jc(t,"TYPE","init"),this.P?(jc(t,"$req",c),jc(t,"SID","null"),a.aa=!0,Cc(a,t,null)):Cc(a,t,c),this.H=2}}else 3==this.H&&(e?Zt(this,e):0==this.j.length||lt(this.i)||Zt(this))},n.Ma=function(){if(this.u=null,cn(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=sc(H(this.jb,this),e)}},n.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ac(10),$t(this),cn(this))},n.ib=function(){null!=this.v&&(this.v=null,$t(this),Xt(this),ac(19))},n.pb=function(e){e?(this.l.info("Successfully pinged google.com"),ac(2)):(this.l.info("Failed to ping google.com"),ac(1))},n.isActive=function(){return!!this.h&&this.h.isActive(this)},n=fn.prototype,n.Ba=function(){},n.Aa=function(){},n.za=function(){},n.ya=function(){},n.isActive=function(){return!0},n.Va=function(){},un.prototype.g=function(e,c){return new hn(e,c)},M(hn,Me),hn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,c=this.l,t=this.h||void 0;ac(0),e.Y=c,e.na=t||{},e.G=e.aa,e.I=on(e,null,e.Y),Wt(e)},hn.prototype.close=function(){qt(this.g)},hn.prototype.u=function(e){var c=this.g;if("string"===typeof e){var t={};t.__data__=e,e=t}else this.v&&(t={},t.__data__=ye(e),e=t);c.j.push(new st(c.fb++,e)),3==c.H&&Wt(c)},hn.prototype.N=function(){this.g.h=null,delete this.j,qt(this.g),delete this.g,hn.$.N.call(this)},M(mn,dc),M(dn,pc),M(pn,fn),pn.prototype.Ba=function(){Ce(this.g,"a")},pn.prototype.Aa=function(e){Ce(this.g,new mn(e))},pn.prototype.za=function(e){Ce(this.g,new dn)},pn.prototype.ya=function(){Ce(this.g,"b")},M(vn,zn),vn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},vn.prototype.j=function(e,c){void 0===c&&(c=e.length);for(var t=c-this.blockSize,n=this.m,a=this.h,i=0;i<c;){if(0==a)for(;i<=t;)gn(this,e,i),i+=this.blockSize;if("string"===typeof e){for(;i<c;)if(n[a++]=e.charCodeAt(i++),a==this.blockSize){gn(this,n),a=0;break}}else for(;i<c;)if(n[a++]=e[i++],a==this.blockSize){gn(this,n),a=0;break}}this.h=a,this.i+=c},vn.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var c=1;c<e.length-8;++c)e[c]=0;var t=8*this.i;for(c=e.length-8;c<e.length;++c)e[c]=255&t,t/=256;for(this.j(e),e=Array(16),c=t=0;4>c;++c)for(var n=0;32>n;n+=8)e[t++]=this.g[c]>>>n&255;return e};var Vn={};function Mn(e){return-128<=e&&128>e?E(e,(function(e){return new Hn([0|e],0>e?-1:0)})):new Hn([0|e],0>e?-1:0)}function Cn(e){if(isNaN(e)||!isFinite(e))return bn;if(0>e)return kn(Cn(-e));for(var c=[],t=1,n=0;e>=t;n++)c[n]=e/t|0,t*=yn;return new Hn(c,0)}function Ln(e,c){if(0==e.length)throw Error("number format error: empty string");if(c=c||10,2>c||36<c)throw Error("radix out of range: "+c);if("-"==e.charAt(0))return kn(Ln(e.substring(1),c));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=Cn(Math.pow(c,8)),n=bn,a=0;a<e.length;a+=8){var i=Math.min(8,e.length-a),s=parseInt(e.substring(a,a+i),c);8>i?(i=Cn(Math.pow(c,i)),n=n.R(i).add(Cn(s))):(n=n.R(t),n=n.add(Cn(s)))}return n}var yn=4294967296,bn=Mn(0),xn=Mn(1),wn=Mn(16777216);function Nn(e){if(0!=e.h)return!1;for(var c=0;c<e.g.length;c++)if(0!=e.g[c])return!1;return!0}function Sn(e){return-1==e.h}function kn(e){for(var c=e.g.length,t=[],n=0;n<c;n++)t[n]=~e.g[n];return new Hn(t,~e.h).add(xn)}function An(e,c){return e.add(kn(c))}function _n(e,c){for(;(65535&e[c])!=e[c];)e[c+1]+=e[c]>>>16,e[c]&=65535,c++}function En(e,c){this.g=e,this.h=c}function Tn(e,c){if(Nn(c))throw Error("division by zero");if(Nn(e))return new En(bn,bn);if(Sn(e))return c=Tn(kn(e),c),new En(kn(c.g),kn(c.h));if(Sn(c))return c=Tn(e,kn(c)),new En(kn(c.g),c.h);if(30<e.g.length){if(Sn(e)||Sn(c))throw Error("slowDivide_ only works with positive integers.");for(var t=xn,n=c;0>=n.X(e);)t=In(t),n=In(n);var a=Rn(t,1),i=Rn(n,1);for(n=Rn(n,2),t=Rn(t,2);!Nn(n);){var s=i.add(n);0>=s.X(e)&&(a=a.add(t),i=s),n=Rn(n,1),t=Rn(t,1)}return c=An(e,a.R(c)),new En(a,c)}for(a=bn;0<=e.X(c);){for(t=Math.max(1,Math.floor(e.ea()/c.ea())),n=Math.ceil(Math.log(t)/Math.LN2),n=48>=n?1:Math.pow(2,n-48),i=Cn(t),s=i.R(c);Sn(s)||0<s.X(e);)t-=n,i=Cn(t),s=i.R(c);Nn(i)&&(i=xn),a=a.add(i),e=An(e,s)}return new En(a,e)}function In(e){for(var c=e.g.length+1,t=[],n=0;n<c;n++)t[n]=e.D(n)<<1|e.D(n-1)>>>31;return new Hn(t,e.h)}function Rn(e,c){var t=c>>5;c%=32;for(var n=e.g.length-t,a=[],i=0;i<n;i++)a[i]=0<c?e.D(i+t)>>>c|e.D(i+t+1)<<32-c:e.D(i+t);return new Hn(a,e.h)}n=Hn.prototype,n.ea=function(){if(Sn(this))return-kn(this).ea();for(var e=0,c=1,t=0;t<this.g.length;t++){var n=this.D(t);e+=(0<=n?n:yn+n)*c,c*=yn}return e},n.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Nn(this))return"0";if(Sn(this))return"-"+kn(this).toString(e);for(var c=Cn(Math.pow(e,6)),t=this,n="";;){var a=Tn(t,c).g;t=An(t,a.R(c));var i=((0<t.g.length?t.g[0]:t.h)>>>0).toString(e);if(t=a,Nn(t))return i+n;for(;6>i.length;)i="0"+i;n=i+n}},n.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},n.X=function(e){return e=An(this,e),Sn(e)?-1:Nn(e)?0:1},n.abs=function(){return Sn(this)?kn(this):this},n.add=function(e){for(var c=Math.max(this.g.length,e.g.length),t=[],n=0,a=0;a<=c;a++){var i=n+(65535&this.D(a))+(65535&e.D(a)),s=(i>>>16)+(this.D(a)>>>16)+(e.D(a)>>>16);n=s>>>16,i&=65535,s&=65535,t[a]=s<<16|i}return new Hn(t,-2147483648&t[t.length-1]?-1:0)},n.R=function(e){if(Nn(this)||Nn(e))return bn;if(Sn(this))return Sn(e)?kn(this).R(kn(e)):kn(kn(this).R(e));if(Sn(e))return kn(this.R(kn(e)));if(0>this.X(wn)&&0>e.X(wn))return Cn(this.ea()*e.ea());for(var c=this.g.length+e.g.length,t=[],n=0;n<2*c;n++)t[n]=0;for(n=0;n<this.g.length;n++)for(var a=0;a<e.g.length;a++){var i=this.D(n)>>>16,s=65535&this.D(n),r=e.D(a)>>>16,o=65535&e.D(a);t[2*n+2*a]+=s*o,_n(t,2*n+2*a),t[2*n+2*a+1]+=i*o,_n(t,2*n+2*a+1),t[2*n+2*a+1]+=s*r,_n(t,2*n+2*a+1),t[2*n+2*a+2]+=i*r,_n(t,2*n+2*a+2)}for(n=0;n<c;n++)t[n]=t[2*n+1]<<16|t[2*n];for(n=c;n<2*c;n++)t[n]=0;return new Hn(t,0)},n.gb=function(e){return Tn(this,e).h},n.and=function(e){for(var c=Math.max(this.g.length,e.g.length),t=[],n=0;n<c;n++)t[n]=this.D(n)&e.D(n);return new Hn(t,this.h&e.h)},n.or=function(e){for(var c=Math.max(this.g.length,e.g.length),t=[],n=0;n<c;n++)t[n]=this.D(n)|e.D(n);return new Hn(t,this.h|e.h)},n.xor=function(e){for(var c=Math.max(this.g.length,e.g.length),t=[],n=0;n<c;n++)t[n]=this.D(n)^e.D(n);return new Hn(t,this.h^e.h)},un.prototype.createWebChannel=un.prototype.g,hn.prototype.send=hn.prototype.u,hn.prototype.open=hn.prototype.m,hn.prototype.close=hn.prototype.close,rc.NO_ERROR=0,rc.TIMEOUT=8,rc.HTTP_ERROR=6,oc.COMPLETE="complete",uc.EventType=mc,mc.OPEN="a",mc.CLOSE="b",mc.ERROR="c",mc.MESSAGE="d",Me.prototype.listen=Me.prototype.O,wt.prototype.listenOnce=wt.prototype.P,wt.prototype.getLastError=wt.prototype.Sa,wt.prototype.getLastErrorCode=wt.prototype.Ia,wt.prototype.getStatus=wt.prototype.da,wt.prototype.getResponseJson=wt.prototype.Wa,wt.prototype.getResponseText=wt.prototype.ja,wt.prototype.send=wt.prototype.ha,wt.prototype.setWithCredentials=wt.prototype.Oa,vn.prototype.digest=vn.prototype.l,vn.prototype.reset=vn.prototype.reset,vn.prototype.update=vn.prototype.j,Hn.prototype.add=Hn.prototype.add,Hn.prototype.multiply=Hn.prototype.R,Hn.prototype.modulo=Hn.prototype.gb,Hn.prototype.compare=Hn.prototype.X,Hn.prototype.toNumber=Hn.prototype.ea,Hn.prototype.toString=Hn.prototype.toString,Hn.prototype.getBits=Hn.prototype.D,Hn.fromNumber=Cn,Hn.fromString=Ln;var Pn=l.createWebChannelTransport=function(){return new un},On=l.getStatEventTarget=function(){return ec()},Dn=l.ErrorCode=rc,Fn=l.EventType=oc,Un=l.Event=Qe,Bn=l.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},jn=(l.FetchXmlHttpFactory=Vt,l.WebChannel=uc),qn=l.XhrIo=wt,$n=l.Md5=vn,Gn=l.Integer=Hn;const Wn="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Kn.UNAUTHENTICATED=new Kn(null),Kn.GOOGLE_CREDENTIALS=new Kn("google-credentials-uid"),Kn.FIRST_PARTY=new Kn("first-party-uid"),Kn.MOCK_USER=new Kn("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Zn="10.7.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=new s.Yd("@firebase/firestore");function Yn(){return Jn.logLevel}function Qn(e,...c){if(Jn.logLevel<=s["in"].DEBUG){const t=c.map(ca);Jn.debug(`Firestore (${Zn}): ${e}`,...t)}}function Xn(e,...c){if(Jn.logLevel<=s["in"].ERROR){const t=c.map(ca);Jn.error(`Firestore (${Zn}): ${e}`,...t)}}function ea(e,...c){if(Jn.logLevel<=s["in"].WARN){const t=c.map(ca);Jn.warn(`Firestore (${Zn}): ${e}`,...t)}}function ca(e){if("string"==typeof e)return e;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return function(e){return JSON.stringify(e)}(e)}catch(c){return e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(e="Unexpected state"){const c=`FIRESTORE (${Zn}) INTERNAL ASSERTION FAILED: `+e;throw Xn(c),new Error(c)}function na(e,c){e||ta()}function aa(e,c){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class sa extends r.ZR{constructor(e,c){super(e,c),this.code=e,this.message=c,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(){this.promise=new Promise(((e,c)=>{this.resolve=e,this.reject=c}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,c){this.user=c,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class la{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,c){e.enqueueRetryable((()=>c(Kn.UNAUTHENTICATED)))}shutdown(){}}class fa{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,c){this.changeListener=c,e.enqueueRetryable((()=>c(this.token.user)))}shutdown(){this.changeListener=null}}class ua{constructor(e){this.t=e,this.currentUser=Kn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,c){let t=this.i;const n=e=>this.i!==t?(t=this.i,c(e)):Promise.resolve();let a=new ra;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new ra,e.enqueueRetryable((()=>n(this.currentUser)))};const i=()=>{const c=a;e.enqueueRetryable((async()=>{await c.promise,await n(this.currentUser)}))},s=e=>{Qn("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((e=>s(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?s(e):(Qn("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new ra)}}),0),i()}getToken(){const e=this.i,c=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(c).then((c=>this.i!==e?(Qn("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):c?(na("string"==typeof c.accessToken),new oa(c.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return na(null===e||"string"==typeof e),new Kn(e)}}class ha{constructor(e,c,t){this.l=e,this.h=c,this.P=t,this.type="FirstParty",this.user=Kn.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ma{constructor(e,c,t){this.l=e,this.h=c,this.P=t}getToken(){return Promise.resolve(new ha(this.l,this.h,this.P))}start(e,c){e.enqueueRetryable((()=>c(Kn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class da{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pa{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,c){const t=e=>{null!=e.error&&Qn("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const t=e.token!==this.R;return this.R=e.token,Qn("FirebaseAppCheckTokenProvider",`Received ${t?"new":"existing"} token.`),t?c(e.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable((()=>t(c)))};const n=e=>{Qn("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>n(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?n(e):Qn("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(na("string"==typeof e.token),this.R=e.token,new da(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function za(e){const c="undefined"!=typeof self&&(self.crypto||self.msCrypto),t=new Uint8Array(e);if(c&&"function"==typeof c.getRandomValues)c.getRandomValues(t);else for(let n=0;n<e;n++)t[n]=Math.floor(256*Math.random());return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=Math.floor(256/e.length)*e.length;let t="";for(;t.length<20;){const n=za(40);for(let a=0;a<n.length;++a)t.length<20&&n[a]<c&&(t+=e.charAt(n[a]%e.length))}return t}}function ga(e,c){return e<c?-1:e>c?1:0}function Ha(e,c,t){return e.length===c.length&&e.every(((e,n)=>t(e,c[n])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Va{constructor(e,c){if(this.seconds=e,this.nanoseconds=c,c<0)throw new sa(ia.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+c);if(c>=1e9)throw new sa(ia.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+c);if(e<-62135596800)throw new sa(ia.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new sa(ia.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Va.fromMillis(Date.now())}static fromDate(e){return Va.fromMillis(e.getTime())}static fromMillis(e){const c=Math.floor(e/1e3),t=Math.floor(1e6*(e-1e3*c));return new Va(c,t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ga(this.nanoseconds,e.nanoseconds):ga(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ma(e)}static min(){return new Ma(new Va(0,0))}static max(){return new Ma(new Va(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,c,t){void 0===c?c=0:c>e.length&&ta(),void 0===t?t=e.length-c:t>e.length-c&&ta(),this.segments=e,this.offset=c,this.len=t}get length(){return this.len}isEqual(e){return 0===Ca.comparator(this,e)}child(e){const c=this.segments.slice(this.offset,this.limit());return e instanceof Ca?e.forEach((e=>{c.push(e)})):c.push(e),this.construct(c)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let c=0;c<this.length;c++)if(this.get(c)!==e.get(c))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let c=0;c<this.length;c++)if(this.get(c)!==e.get(c))return!1;return!0}forEach(e){for(let c=this.offset,t=this.limit();c<t;c++)e(this.segments[c])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,c){const t=Math.min(e.length,c.length);for(let n=0;n<t;n++){const t=e.get(n),a=c.get(n);if(t<a)return-1;if(t>a)return 1}return e.length<c.length?-1:e.length>c.length?1:0}}class La extends Ca{construct(e,c,t){return new La(e,c,t)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const c=[];for(const t of e){if(t.indexOf("//")>=0)throw new sa(ia.INVALID_ARGUMENT,`Invalid segment (${t}). Paths must not contain // in them.`);c.push(...t.split("/").filter((e=>e.length>0)))}return new La(c)}static emptyPath(){return new La([])}}const ya=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ba extends Ca{construct(e,c,t){return new ba(e,c,t)}static isValidIdentifier(e){return ya.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ba.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ba(["__name__"])}static fromServerFormat(e){const c=[];let t="",n=0;const a=()=>{if(0===t.length)throw new sa(ia.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);c.push(t),t=""};let i=!1;for(;n<e.length;){const c=e[n];if("\\"===c){if(n+1===e.length)throw new sa(ia.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[n+1];if("\\"!==c&&"."!==c&&"`"!==c)throw new sa(ia.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);t+=c,n+=2}else"`"===c?(i=!i,n++):"."!==c||i?(t+=c,n++):(a(),n++)}if(a(),i)throw new sa(ia.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ba(c)}static emptyPath(){return new ba([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e){this.path=e}static fromPath(e){return new xa(La.fromString(e))}static fromName(e){return new xa(La.fromString(e).popFirst(5))}static empty(){return new xa(La.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===La.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,c){return La.comparator(e.path,c.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new xa(new La(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,c,t,n){this.indexId=e,this.collectionGroup=c,this.fields=t,this.indexState=n}}wa.UNKNOWN_ID=-1;function Na(e,c){const t=e.toTimestamp().seconds,n=e.toTimestamp().nanoseconds+1,a=Ma.fromTimestamp(1e9===n?new Va(t+1,0):new Va(t,n));return new ka(a,xa.empty(),c)}function Sa(e){return new ka(e.readTime,e.key,-1)}class ka{constructor(e,c,t){this.readTime=e,this.documentKey=c,this.largestBatchId=t}static min(){return new ka(Ma.min(),xa.empty(),-1)}static max(){return new ka(Ma.max(),xa.empty(),-1)}}function Aa(e,c){let t=e.readTime.compareTo(c.readTime);return 0!==t?t:(t=xa.comparator(e.documentKey,c.documentKey),0!==t?t:ga(e.largestBatchId,c.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ea{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ta(e){if(e.code!==ia.FAILED_PRECONDITION||e.message!==_a)throw e;Qn("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,c){return this.callbackAttached&&ta(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(c,this.error):this.wrapSuccess(e,this.result):new Ia(((t,n)=>{this.nextCallback=c=>{this.wrapSuccess(e,c).next(t,n)},this.catchCallback=e=>{this.wrapFailure(c,e).next(t,n)}}))}toPromise(){return new Promise(((e,c)=>{this.next(e,c)}))}wrapUserFunction(e){try{const c=e();return c instanceof Ia?c:Ia.resolve(c)}catch(e){return Ia.reject(e)}}wrapSuccess(e,c){return e?this.wrapUserFunction((()=>e(c))):Ia.resolve(c)}wrapFailure(e,c){return e?this.wrapUserFunction((()=>e(c))):Ia.reject(c)}static resolve(e){return new Ia(((c,t)=>{c(e)}))}static reject(e){return new Ia(((c,t)=>{t(e)}))}static waitFor(e){return new Ia(((c,t)=>{let n=0,a=0,i=!1;e.forEach((e=>{++n,e.next((()=>{++a,i&&a===n&&c()}),(e=>t(e)))})),i=!0,a===n&&c()}))}static or(e){let c=Ia.resolve(!1);for(const t of e)c=c.next((e=>e?Ia.resolve(e):t()));return c}static forEach(e,c){const t=[];return e.forEach(((e,n)=>{t.push(c.call(this,e,n))})),this.waitFor(t)}static mapArray(e,c){return new Ia(((t,n)=>{const a=e.length,i=new Array(a);let s=0;for(let r=0;r<a;r++){const o=r;c(e[o]).next((e=>{i[o]=e,++s,s===a&&t(i)}),(e=>n(e)))}}))}static doWhile(e,c){return new Ia(((t,n)=>{const a=()=>{!0===e()?c().next((()=>{a()}),n):t()};a()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pa{constructor(e,c){this.previousValue=e,c&&(c.sequenceNumberHandler=e=>this.se(e),this.oe=e=>c.writeSequenceNumber(e))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}function Oa(e){return null==e}function Da(e){return 0===e&&1/e==-1/0}function Fa(e){return"number"==typeof e&&Number.isInteger(e)&&!Da(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pa._e=-1;const Ua=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Ba=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ja=Ba;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qa(e){let c=0;for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&c++;return c}function $a(e,c){for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&c(t,e[t])}function Ga(e){for(const c in e)if(Object.prototype.hasOwnProperty.call(e,c))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,c){this.comparator=e,this.root=c||Za.EMPTY}insert(e,c){return new Wa(this.comparator,this.root.insert(e,c,this.comparator).copy(null,null,Za.BLACK,null,null))}remove(e){return new Wa(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Za.BLACK,null,null))}get(e){let c=this.root;for(;!c.isEmpty();){const t=this.comparator(e,c.key);if(0===t)return c.value;t<0?c=c.left:t>0&&(c=c.right)}return null}indexOf(e){let c=0,t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return c+t.left.size;n<0?t=t.left:(c+=t.left.size+1,t=t.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((c,t)=>(e(c,t),!1)))}toString(){const e=[];return this.inorderTraversal(((c,t)=>(e.push(`${c}:${t}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ka(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ka(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ka(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ka(this.root,e,this.comparator,!0)}}class Ka{constructor(e,c,t,n){this.isReverse=n,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=c?t(e.key,c):1,c&&n&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(0===a){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const c={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return c}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Za{constructor(e,c,t,n,a){this.key=e,this.value=c,this.color=null!=t?t:Za.RED,this.left=null!=n?n:Za.EMPTY,this.right=null!=a?a:Za.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,c,t,n,a){return new Za(null!=e?e:this.key,null!=c?c:this.value,null!=t?t:this.color,null!=n?n:this.left,null!=a?a:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,c,t){let n=this;const a=t(e,n.key);return n=a<0?n.copy(null,null,null,n.left.insert(e,c,t),null):0===a?n.copy(null,c,null,null,null):n.copy(null,null,null,null,n.right.insert(e,c,t)),n.fixUp()}removeMin(){if(this.left.isEmpty())return Za.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,c){let t,n=this;if(c(e,n.key)<0)n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,c),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===c(e,n.key)){if(n.right.isEmpty())return Za.EMPTY;t=n.right.min(),n=n.copy(t.key,t.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,c))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Za.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Za.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),c=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,c)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ta();if(this.right.isRed())throw ta();const e=this.left.check();if(e!==this.right.check())throw ta();return e+(this.isRed()?0:1)}}Za.EMPTY=null,Za.RED=!0,Za.BLACK=!1,Za.EMPTY=new class{constructor(){this.size=0}get key(){throw ta()}get value(){throw ta()}get color(){throw ta()}get left(){throw ta()}get right(){throw ta()}copy(e,c,t,n,a){return this}insert(e,c,t){return new Za(e,c)}remove(e,c){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ja{constructor(e){this.comparator=e,this.data=new Wa(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((c,t)=>(e(c),!1)))}forEachInRange(e,c){const t=this.data.getIteratorFrom(e[0]);for(;t.hasNext();){const n=t.getNext();if(this.comparator(n.key,e[1])>=0)return;c(n.key)}}forEachWhile(e,c){let t;for(t=void 0!==c?this.data.getIteratorFrom(c):this.data.getIterator();t.hasNext();)if(!e(t.getNext().key))return}firstAfterOrEqual(e){const c=this.data.getIteratorFrom(e);return c.hasNext()?c.getNext().key:null}getIterator(){return new Ya(this.data.getIterator())}getIteratorFrom(e){return new Ya(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let c=this;return c.size<e.size&&(c=e,e=this),e.forEach((e=>{c=c.add(e)})),c}isEqual(e){if(!(e instanceof Ja))return!1;if(this.size!==e.size)return!1;const c=this.data.getIterator(),t=e.data.getIterator();for(;c.hasNext();){const e=c.getNext().key,n=t.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){const e=[];return this.forEach((c=>{e.push(c)})),e}toString(){const e=[];return this.forEach((c=>e.push(c))),"SortedSet("+e.toString()+")"}copy(e){const c=new Ja(this.comparator);return c.data=e,c}}class Ya{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qa{constructor(e){this.fields=e,e.sort(ba.comparator)}static empty(){return new Qa([])}unionWith(e){let c=new Ja(ba.comparator);for(const t of this.fields)c=c.add(t);for(const t of e)c=c.add(t);return new Qa(c.toArray())}covers(e){for(const c of this.fields)if(c.isPrefixOf(e))return!0;return!1}isEqual(e){return Ha(this.fields,e.fields,((e,c)=>e.isEqual(c)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ei{constructor(e){this.binaryString=e}static fromBase64String(e){const c=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Xa("Invalid base64 string: "+e):e}}(e);return new ei(c)}static fromUint8Array(e){const c=function(e){let c="";for(let t=0;t<e.length;++t)c+=String.fromCharCode(e[t]);return c}(e);return new ei(c)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const c=new Uint8Array(e.length);for(let t=0;t<e.length;t++)c[t]=e.charCodeAt(t);return c}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ga(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ei.EMPTY_BYTE_STRING=new ei("");const ci=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ti(e){if(na(!!e),"string"==typeof e){let c=0;const t=ci.exec(e);if(na(!!t),t[1]){let e=t[1];e=(e+"000000000").substr(0,9),c=Number(e)}const n=new Date(e);return{seconds:Math.floor(n.getTime()/1e3),nanos:c}}return{seconds:ni(e.seconds),nanos:ni(e.nanos)}}function ni(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function ai(e){return"string"==typeof e?ei.fromBase64String(e):ei.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(e){var c,t;return"server_timestamp"===(null===(t=((null===(c=null==e?void 0:e.mapValue)||void 0===c?void 0:c.fields)||{}).__type__)||void 0===t?void 0:t.stringValue)}function si(e){const c=e.mapValue.fields.__previous_value__;return ii(c)?si(c):c}function ri(e){const c=ti(e.mapValue.fields.__local_write_time__.timestampValue);return new Va(c.seconds,c.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,c,t,n,a,i,s,r,o){this.databaseId=e,this.appId=c,this.persistenceKey=t,this.host=n,this.ssl=a,this.forceLongPolling=i,this.autoDetectLongPolling=s,this.longPollingOptions=r,this.useFetchStreams=o}}class li{constructor(e,c){this.projectId=e,this.database=c||"(default)"}static empty(){return new li("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof li&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ui(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ii(e)?4:yi(e)?9007199254740991:10:ta()}function hi(e,c){if(e===c)return!0;const t=ui(e);if(t!==ui(c))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===c.booleanValue;case 4:return ri(e).isEqual(ri(c));case 3:return function(e,c){if("string"==typeof e.timestampValue&&"string"==typeof c.timestampValue&&e.timestampValue.length===c.timestampValue.length)return e.timestampValue===c.timestampValue;const t=ti(e.timestampValue),n=ti(c.timestampValue);return t.seconds===n.seconds&&t.nanos===n.nanos}(e,c);case 5:return e.stringValue===c.stringValue;case 6:return function(e,c){return ai(e.bytesValue).isEqual(ai(c.bytesValue))}(e,c);case 7:return e.referenceValue===c.referenceValue;case 8:return function(e,c){return ni(e.geoPointValue.latitude)===ni(c.geoPointValue.latitude)&&ni(e.geoPointValue.longitude)===ni(c.geoPointValue.longitude)}(e,c);case 2:return function(e,c){if("integerValue"in e&&"integerValue"in c)return ni(e.integerValue)===ni(c.integerValue);if("doubleValue"in e&&"doubleValue"in c){const t=ni(e.doubleValue),n=ni(c.doubleValue);return t===n?Da(t)===Da(n):isNaN(t)&&isNaN(n)}return!1}(e,c);case 9:return Ha(e.arrayValue.values||[],c.arrayValue.values||[],hi);case 10:return function(e,c){const t=e.mapValue.fields||{},n=c.mapValue.fields||{};if(qa(t)!==qa(n))return!1;for(const a in t)if(t.hasOwnProperty(a)&&(void 0===n[a]||!hi(t[a],n[a])))return!1;return!0}(e,c);default:return ta()}}function mi(e,c){return void 0!==(e.values||[]).find((e=>hi(e,c)))}function di(e,c){if(e===c)return 0;const t=ui(e),n=ui(c);if(t!==n)return ga(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return ga(e.booleanValue,c.booleanValue);case 2:return function(e,c){const t=ni(e.integerValue||e.doubleValue),n=ni(c.integerValue||c.doubleValue);return t<n?-1:t>n?1:t===n?0:isNaN(t)?isNaN(n)?0:-1:1}(e,c);case 3:return pi(e.timestampValue,c.timestampValue);case 4:return pi(ri(e),ri(c));case 5:return ga(e.stringValue,c.stringValue);case 6:return function(e,c){const t=ai(e),n=ai(c);return t.compareTo(n)}(e.bytesValue,c.bytesValue);case 7:return function(e,c){const t=e.split("/"),n=c.split("/");for(let a=0;a<t.length&&a<n.length;a++){const e=ga(t[a],n[a]);if(0!==e)return e}return ga(t.length,n.length)}(e.referenceValue,c.referenceValue);case 8:return function(e,c){const t=ga(ni(e.latitude),ni(c.latitude));return 0!==t?t:ga(ni(e.longitude),ni(c.longitude))}(e.geoPointValue,c.geoPointValue);case 9:return function(e,c){const t=e.values||[],n=c.values||[];for(let a=0;a<t.length&&a<n.length;++a){const e=di(t[a],n[a]);if(e)return e}return ga(t.length,n.length)}(e.arrayValue,c.arrayValue);case 10:return function(e,c){if(e===fi.mapValue&&c===fi.mapValue)return 0;if(e===fi.mapValue)return 1;if(c===fi.mapValue)return-1;const t=e.fields||{},n=Object.keys(t),a=c.fields||{},i=Object.keys(a);n.sort(),i.sort();for(let s=0;s<n.length&&s<i.length;++s){const e=ga(n[s],i[s]);if(0!==e)return e;const c=di(t[n[s]],a[i[s]]);if(0!==c)return c}return ga(n.length,i.length)}(e.mapValue,c.mapValue);default:throw ta()}}function pi(e,c){if("string"==typeof e&&"string"==typeof c&&e.length===c.length)return ga(e,c);const t=ti(e),n=ti(c),a=ga(t.seconds,n.seconds);return 0!==a?a:ga(t.nanos,n.nanos)}function zi(e){return vi(e)}function vi(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const c=ti(e);return`time(${c.seconds},${c.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return ai(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return xa.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let c="[",t=!0;for(const n of e.values||[])t?t=!1:c+=",",c+=vi(n);return c+"]"}(e.arrayValue):"mapValue"in e?function(e){const c=Object.keys(e.fields||{}).sort();let t="{",n=!0;for(const a of c)n?n=!1:t+=",",t+=`${a}:${vi(e.fields[a])}`;return t+"}"}(e.mapValue):ta()}function gi(e){return!!e&&"integerValue"in e}function Hi(e){return!!e&&"arrayValue"in e}function Vi(e){return!!e&&"nullValue"in e}function Mi(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ci(e){return!!e&&"mapValue"in e}function Li(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const c={mapValue:{fields:{}}};return $a(e.mapValue.fields,((e,t)=>c.mapValue.fields[e]=Li(t))),c}if(e.arrayValue){const c={arrayValue:{values:[]}};for(let t=0;t<(e.arrayValue.values||[]).length;++t)c.arrayValue.values[t]=Li(e.arrayValue.values[t]);return c}return Object.assign({},e)}function yi(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bi{constructor(e){this.value=e}static empty(){return new bi({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let c=this.value;for(let t=0;t<e.length-1;++t)if(c=(c.mapValue.fields||{})[e.get(t)],!Ci(c))return null;return c=(c.mapValue.fields||{})[e.lastSegment()],c||null}}set(e,c){this.getFieldsMap(e.popLast())[e.lastSegment()]=Li(c)}setAll(e){let c=ba.emptyPath(),t={},n=[];e.forEach(((e,a)=>{if(!c.isImmediateParentOf(a)){const e=this.getFieldsMap(c);this.applyChanges(e,t,n),t={},n=[],c=a.popLast()}e?t[a.lastSegment()]=Li(e):n.push(a.lastSegment())}));const a=this.getFieldsMap(c);this.applyChanges(a,t,n)}delete(e){const c=this.field(e.popLast());Ci(c)&&c.mapValue.fields&&delete c.mapValue.fields[e.lastSegment()]}isEqual(e){return hi(this.value,e.value)}getFieldsMap(e){let c=this.value;c.mapValue.fields||(c.mapValue={fields:{}});for(let t=0;t<e.length;++t){let n=c.mapValue.fields[e.get(t)];Ci(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},c.mapValue.fields[e.get(t)]=n),c=n}return c.mapValue.fields}applyChanges(e,c,t){$a(c,((c,t)=>e[c]=t));for(const n of t)delete e[n]}clone(){return new bi(Li(this.value))}}function xi(e){const c=[];return $a(e.fields,((e,t)=>{const n=new ba([e]);if(Ci(t)){const e=xi(t.mapValue).fields;if(0===e.length)c.push(n);else for(const t of e)c.push(n.child(t))}else c.push(n)})),new Qa(c)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class wi{constructor(e,c,t,n,a,i,s){this.key=e,this.documentType=c,this.version=t,this.readTime=n,this.createTime=a,this.data=i,this.documentState=s}static newInvalidDocument(e){return new wi(e,0,Ma.min(),Ma.min(),Ma.min(),bi.empty(),0)}static newFoundDocument(e,c,t,n){return new wi(e,1,c,Ma.min(),t,n,0)}static newNoDocument(e,c){return new wi(e,2,c,Ma.min(),Ma.min(),bi.empty(),0)}static newUnknownDocument(e,c){return new wi(e,3,c,Ma.min(),Ma.min(),bi.empty(),2)}convertToFoundDocument(e,c){return!this.createTime.isEqual(Ma.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=c,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bi.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bi.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ma.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof wi&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new wi(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,c){this.position=e,this.inclusive=c}}function Si(e,c,t){let n=0;for(let a=0;a<e.position.length;a++){const i=c[a],s=e.position[a];if(n=i.field.isKeyField()?xa.comparator(xa.fromName(s.referenceValue),t.key):di(s,t.data.field(i.field)),"desc"===i.dir&&(n*=-1),0!==n)break}return n}function ki(e,c){if(null===e)return null===c;if(null===c)return!1;if(e.inclusive!==c.inclusive||e.position.length!==c.position.length)return!1;for(let t=0;t<e.position.length;t++)if(!hi(e.position[t],c.position[t]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,c="asc"){this.field=e,this.dir=c}}function _i(e,c){return e.dir===c.dir&&e.field.isEqual(c.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{}class Ti extends Ei{constructor(e,c,t){super(),this.field=e,this.op=c,this.value=t}static create(e,c,t){return e.isKeyField()?"in"===c||"not-in"===c?this.createKeyFieldInFilter(e,c,t):new Bi(e,c,t):"array-contains"===c?new Gi(e,t):"in"===c?new Wi(e,t):"not-in"===c?new Ki(e,t):"array-contains-any"===c?new Zi(e,t):new Ti(e,c,t)}static createKeyFieldInFilter(e,c,t){return"in"===c?new ji(e,t):new qi(e,t)}matches(e){const c=e.data.field(this.field);return"!="===this.op?null!==c&&this.matchesComparison(di(c,this.value)):null!==c&&ui(this.value)===ui(c)&&this.matchesComparison(di(c,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return ta()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ii extends Ei{constructor(e,c){super(),this.filters=e,this.op=c,this.ue=null}static create(e,c){return new Ii(e,c)}matches(e){return Ri(this)?void 0===this.filters.find((c=>!c.matches(e))):void 0!==this.filters.find((c=>c.matches(e)))}getFlattenedFilters(){return null!==this.ue||(this.ue=this.filters.reduce(((e,c)=>e.concat(c.getFlattenedFilters())),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Ri(e){return"and"===e.op}function Pi(e){return Oi(e)&&Ri(e)}function Oi(e){for(const c of e.filters)if(c instanceof Ii)return!1;return!0}function Di(e){if(e instanceof Ti)return e.field.canonicalString()+e.op.toString()+zi(e.value);if(Pi(e))return e.filters.map((e=>Di(e))).join(",");{const c=e.filters.map((e=>Di(e))).join(",");return`${e.op}(${c})`}}function Fi(e,c){return e instanceof Ti?function(e,c){return c instanceof Ti&&e.op===c.op&&e.field.isEqual(c.field)&&hi(e.value,c.value)}(e,c):e instanceof Ii?function(e,c){return c instanceof Ii&&e.op===c.op&&e.filters.length===c.filters.length&&e.filters.reduce(((e,t,n)=>e&&Fi(t,c.filters[n])),!0)}(e,c):void ta()}function Ui(e){return e instanceof Ti?function(e){return`${e.field.canonicalString()} ${e.op} ${zi(e.value)}`}(e):e instanceof Ii?function(e){return e.op.toString()+" {"+e.getFilters().map(Ui).join(" ,")+"}"}(e):"Filter"}class Bi extends Ti{constructor(e,c,t){super(e,c,t),this.key=xa.fromName(t.referenceValue)}matches(e){const c=xa.comparator(e.key,this.key);return this.matchesComparison(c)}}class ji extends Ti{constructor(e,c){super(e,"in",c),this.keys=$i("in",c)}matches(e){return this.keys.some((c=>c.isEqual(e.key)))}}class qi extends Ti{constructor(e,c){super(e,"not-in",c),this.keys=$i("not-in",c)}matches(e){return!this.keys.some((c=>c.isEqual(e.key)))}}function $i(e,c){var t;return((null===(t=c.arrayValue)||void 0===t?void 0:t.values)||[]).map((e=>xa.fromName(e.referenceValue)))}class Gi extends Ti{constructor(e,c){super(e,"array-contains",c)}matches(e){const c=e.data.field(this.field);return Hi(c)&&mi(c.arrayValue,this.value)}}class Wi extends Ti{constructor(e,c){super(e,"in",c)}matches(e){const c=e.data.field(this.field);return null!==c&&mi(this.value.arrayValue,c)}}class Ki extends Ti{constructor(e,c){super(e,"not-in",c)}matches(e){if(mi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const c=e.data.field(this.field);return null!==c&&!mi(this.value.arrayValue,c)}}class Zi extends Ti{constructor(e,c){super(e,"array-contains-any",c)}matches(e){const c=e.data.field(this.field);return!(!Hi(c)||!c.arrayValue.values)&&c.arrayValue.values.some((e=>mi(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,c=null,t=[],n=[],a=null,i=null,s=null){this.path=e,this.collectionGroup=c,this.orderBy=t,this.filters=n,this.limit=a,this.startAt=i,this.endAt=s,this.ce=null}}function Yi(e,c=null,t=[],n=[],a=null,i=null,s=null){return new Ji(e,c,t,n,a,i,s)}function Qi(e){const c=aa(e);if(null===c.ce){let e=c.path.canonicalString();null!==c.collectionGroup&&(e+="|cg:"+c.collectionGroup),e+="|f:",e+=c.filters.map((e=>Di(e))).join(","),e+="|ob:",e+=c.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Oa(c.limit)||(e+="|l:",e+=c.limit),c.startAt&&(e+="|lb:",e+=c.startAt.inclusive?"b:":"a:",e+=c.startAt.position.map((e=>zi(e))).join(",")),c.endAt&&(e+="|ub:",e+=c.endAt.inclusive?"a:":"b:",e+=c.endAt.position.map((e=>zi(e))).join(",")),c.ce=e}return c.ce}function Xi(e,c){if(e.limit!==c.limit)return!1;if(e.orderBy.length!==c.orderBy.length)return!1;for(let t=0;t<e.orderBy.length;t++)if(!_i(e.orderBy[t],c.orderBy[t]))return!1;if(e.filters.length!==c.filters.length)return!1;for(let t=0;t<e.filters.length;t++)if(!Fi(e.filters[t],c.filters[t]))return!1;return e.collectionGroup===c.collectionGroup&&!!e.path.isEqual(c.path)&&!!ki(e.startAt,c.startAt)&&ki(e.endAt,c.endAt)}function es(e){return xa.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cs{constructor(e,c=null,t=[],n=[],a=null,i="F",s=null,r=null){this.path=e,this.collectionGroup=c,this.explicitOrderBy=t,this.filters=n,this.limit=a,this.limitType=i,this.startAt=s,this.endAt=r,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function ts(e,c,t,n,a,i,s,r){return new cs(e,c,t,n,a,i,s,r)}function ns(e){return new cs(e)}function as(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function is(e){return null!==e.collectionGroup}function ss(e){const c=aa(e);if(null===c.le){c.le=[];const e=new Set;for(const a of c.explicitOrderBy)c.le.push(a),e.add(a.field.canonicalString());const t=c.explicitOrderBy.length>0?c.explicitOrderBy[c.explicitOrderBy.length-1].dir:"asc",n=function(e){let c=new Ja(ba.comparator);return e.filters.forEach((e=>{e.getFlattenedFilters().forEach((e=>{e.isInequality()&&(c=c.add(e.field))}))})),c}(c);n.forEach((n=>{e.has(n.canonicalString())||n.isKeyField()||c.le.push(new Ai(n,t))})),e.has(ba.keyField().canonicalString())||c.le.push(new Ai(ba.keyField(),t))}return c.le}function rs(e){const c=aa(e);return c.he||(c.he=os(c,ss(e))),c.he}function os(e,c){if("F"===e.limitType)return Yi(e.path,e.collectionGroup,c,e.filters,e.limit,e.startAt,e.endAt);{c=c.map((e=>{const c="desc"===e.dir?"asc":"desc";return new Ai(e.field,c)}));const t=e.endAt?new Ni(e.endAt.position,e.endAt.inclusive):null,n=e.startAt?new Ni(e.startAt.position,e.startAt.inclusive):null;return Yi(e.path,e.collectionGroup,c,e.filters,e.limit,t,n)}}function ls(e,c,t){return new cs(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),c,t,e.startAt,e.endAt)}function fs(e,c){return Xi(rs(e),rs(c))&&e.limitType===c.limitType}function us(e){return`${Qi(rs(e))}|lt:${e.limitType}`}function hs(e){return`Query(target=${function(e){let c=e.path.canonicalString();return null!==e.collectionGroup&&(c+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(c+=`, filters: [${e.filters.map((e=>Ui(e))).join(", ")}]`),Oa(e.limit)||(c+=", limit: "+e.limit),e.orderBy.length>0&&(c+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(c+=", startAt: ",c+=e.startAt.inclusive?"b:":"a:",c+=e.startAt.position.map((e=>zi(e))).join(",")),e.endAt&&(c+=", endAt: ",c+=e.endAt.inclusive?"a:":"b:",c+=e.endAt.position.map((e=>zi(e))).join(",")),`Target(${c})`}(rs(e))}; limitType=${e.limitType})`}function ms(e,c){return c.isFoundDocument()&&function(e,c){const t=c.key.path;return null!==e.collectionGroup?c.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(t):xa.isDocumentKey(e.path)?e.path.isEqual(t):e.path.isImmediateParentOf(t)}(e,c)&&function(e,c){for(const t of ss(e))if(!t.field.isKeyField()&&null===c.data.field(t.field))return!1;return!0}(e,c)&&function(e,c){for(const t of e.filters)if(!t.matches(c))return!1;return!0}(e,c)&&function(e,c){return!(e.startAt&&!function(e,c,t){const n=Si(e,c,t);return e.inclusive?n<=0:n<0}(e.startAt,ss(e),c))&&!(e.endAt&&!function(e,c,t){const n=Si(e,c,t);return e.inclusive?n>=0:n>0}(e.endAt,ss(e),c))}(e,c)}function ds(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function ps(e){return(c,t)=>{let n=!1;for(const a of ss(e)){const e=zs(a,c,t);if(0!==e)return e;n=n||a.field.isKeyField()}return 0}}function zs(e,c,t){const n=e.field.isKeyField()?xa.comparator(c.key,t.key):function(e,c,t){const n=c.data.field(e),a=t.data.field(e);return null!==n&&null!==a?di(n,a):ta()}(e.field,c,t);switch(e.dir){case"asc":return n;case"desc":return-1*n;default:return ta()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,c){this.mapKeyFn=e,this.equalsFn=c,this.inner={},this.innerSize=0}get(e){const c=this.mapKeyFn(e),t=this.inner[c];if(void 0!==t)for(const[n,a]of t)if(this.equalsFn(n,e))return a}has(e){return void 0!==this.get(e)}set(e,c){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return this.inner[t]=[[e,c]],void this.innerSize++;for(let a=0;a<n.length;a++)if(this.equalsFn(n[a][0],e))return void(n[a]=[e,c]);n.push([e,c]),this.innerSize++}delete(e){const c=this.mapKeyFn(e),t=this.inner[c];if(void 0===t)return!1;for(let n=0;n<t.length;n++)if(this.equalsFn(t[n][0],e))return 1===t.length?delete this.inner[c]:t.splice(n,1),this.innerSize--,!0;return!1}forEach(e){$a(this.inner,((c,t)=>{for(const[n,a]of t)e(n,a)}))}isEmpty(){return Ga(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=new Wa(xa.comparator);function Hs(){return gs}const Vs=new Wa(xa.comparator);function Ms(...e){let c=Vs;for(const t of e)c=c.insert(t.key,t);return c}function Cs(e){let c=Vs;return e.forEach(((e,t)=>c=c.insert(e,t.overlayedDocument))),c}function Ls(){return bs()}function ys(){return bs()}function bs(){return new vs((e=>e.toString()),((e,c)=>e.isEqual(c)))}const xs=new Wa(xa.comparator),ws=new Ja(xa.comparator);function Ns(...e){let c=ws;for(const t of e)c=c.add(t);return c}const Ss=new Ja(ga);function ks(){return Ss}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(e,c){if(e.useProto3Json){if(isNaN(c))return{doubleValue:"NaN"};if(c===1/0)return{doubleValue:"Infinity"};if(c===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Da(c)?"-0":c}}function _s(e){return{integerValue:""+e}}function Es(e,c){return Fa(c)?_s(c):As(e,c)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(){this._=void 0}}function Is(e,c,t){return e instanceof Os?function(e,c){const t={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return c&&ii(c)&&(c=si(c)),c&&(t.fields.__previous_value__=c),{mapValue:t}}(t,c):e instanceof Ds?Fs(e,c):e instanceof Us?Bs(e,c):function(e,c){const t=Ps(e,c),n=qs(t)+qs(e.Ie);return gi(t)&&gi(e.Ie)?_s(n):As(e.serializer,n)}(e,c)}function Rs(e,c,t){return e instanceof Ds?Fs(e,c):e instanceof Us?Bs(e,c):t}function Ps(e,c){return e instanceof js?function(e){return gi(e)||function(e){return!!e&&"doubleValue"in e}(e)}(c)?c:{integerValue:0}:null}class Os extends Ts{}class Ds extends Ts{constructor(e){super(),this.elements=e}}function Fs(e,c){const t=$s(c);for(const n of e.elements)t.some((e=>hi(e,n)))||t.push(n);return{arrayValue:{values:t}}}class Us extends Ts{constructor(e){super(),this.elements=e}}function Bs(e,c){let t=$s(c);for(const n of e.elements)t=t.filter((e=>!hi(e,n)));return{arrayValue:{values:t}}}class js extends Ts{constructor(e,c){super(),this.serializer=e,this.Ie=c}}function qs(e){return ni(e.integerValue||e.doubleValue)}function $s(e){return Hi(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(e,c){return e.field.isEqual(c.field)&&function(e,c){return e instanceof Ds&&c instanceof Ds||e instanceof Us&&c instanceof Us?Ha(e.elements,c.elements,hi):e instanceof js&&c instanceof js?hi(e.Ie,c.Ie):e instanceof Os&&c instanceof Os}(e.transform,c.transform)}class Ws{constructor(e,c){this.version=e,this.transformResults=c}}class Ks{constructor(e,c){this.updateTime=e,this.exists=c}static none(){return new Ks}static exists(e){return new Ks(void 0,e)}static updateTime(e){return new Ks(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zs(e,c){return void 0!==e.updateTime?c.isFoundDocument()&&c.version.isEqual(e.updateTime):void 0===e.exists||e.exists===c.isFoundDocument()}class Js{}function Ys(e,c){if(!e.hasLocalMutations||c&&0===c.fields.length)return null;if(null===c)return e.isNoDocument()?new rr(e.key,Ks.none()):new tr(e.key,e.data,Ks.none());{const t=e.data,n=bi.empty();let a=new Ja(ba.comparator);for(let e of c.fields)if(!a.has(e)){let c=t.field(e);null===c&&e.length>1&&(e=e.popLast(),c=t.field(e)),null===c?n.delete(e):n.set(e,c),a=a.add(e)}return new nr(e.key,n,new Qa(a.toArray()),Ks.none())}}function Qs(e,c,t){e instanceof tr?function(e,c,t){const n=e.value.clone(),a=ir(e.fieldTransforms,c,t.transformResults);n.setAll(a),c.convertToFoundDocument(t.version,n).setHasCommittedMutations()}(e,c,t):e instanceof nr?function(e,c,t){if(!Zs(e.precondition,c))return void c.convertToUnknownDocument(t.version);const n=ir(e.fieldTransforms,c,t.transformResults),a=c.data;a.setAll(ar(e)),a.setAll(n),c.convertToFoundDocument(t.version,a).setHasCommittedMutations()}(e,c,t):function(e,c,t){c.convertToNoDocument(t.version).setHasCommittedMutations()}(0,c,t)}function Xs(e,c,t,n){return e instanceof tr?function(e,c,t,n){if(!Zs(e.precondition,c))return t;const a=e.value.clone(),i=sr(e.fieldTransforms,n,c);return a.setAll(i),c.convertToFoundDocument(c.version,a).setHasLocalMutations(),null}(e,c,t,n):e instanceof nr?function(e,c,t,n){if(!Zs(e.precondition,c))return t;const a=sr(e.fieldTransforms,n,c),i=c.data;return i.setAll(ar(e)),i.setAll(a),c.convertToFoundDocument(c.version,i).setHasLocalMutations(),null===t?null:t.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,c,t,n):function(e,c,t){return Zs(e.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):t}(e,c,t)}function er(e,c){let t=null;for(const n of e.fieldTransforms){const e=c.data.field(n.field),a=Ps(n.transform,e||null);null!=a&&(null===t&&(t=bi.empty()),t.set(n.field,a))}return t||null}function cr(e,c){return e.type===c.type&&!!e.key.isEqual(c.key)&&!!e.precondition.isEqual(c.precondition)&&!!function(e,c){return void 0===e&&void 0===c||!(!e||!c)&&Ha(e,c,((e,c)=>Gs(e,c)))}(e.fieldTransforms,c.fieldTransforms)&&(0===e.type?e.value.isEqual(c.value):1!==e.type||e.data.isEqual(c.data)&&e.fieldMask.isEqual(c.fieldMask))}class tr extends Js{constructor(e,c,t,n=[]){super(),this.key=e,this.value=c,this.precondition=t,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class nr extends Js{constructor(e,c,t,n,a=[]){super(),this.key=e,this.data=c,this.fieldMask=t,this.precondition=n,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function ar(e){const c=new Map;return e.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=e.data.field(t);c.set(t,n)}})),c}function ir(e,c,t){const n=new Map;na(e.length===t.length);for(let a=0;a<t.length;a++){const i=e[a],s=i.transform,r=c.data.field(i.field);n.set(i.field,Rs(s,r,t[a]))}return n}function sr(e,c,t){const n=new Map;for(const a of e){const e=a.transform,i=t.data.field(a.field);n.set(a.field,Is(e,i,c))}return n}class rr extends Js{constructor(e,c){super(),this.key=e,this.precondition=c,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class or extends Js{constructor(e,c){super(),this.key=e,this.precondition=c,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,c,t,n){this.batchId=e,this.localWriteTime=c,this.baseMutations=t,this.mutations=n}applyToRemoteDocument(e,c){const t=c.mutationResults;for(let n=0;n<this.mutations.length;n++){const c=this.mutations[n];c.key.isEqual(e.key)&&Qs(c,e,t[n])}}applyToLocalView(e,c){for(const t of this.baseMutations)t.key.isEqual(e.key)&&(c=Xs(t,e,c,this.localWriteTime));for(const t of this.mutations)t.key.isEqual(e.key)&&(c=Xs(t,e,c,this.localWriteTime));return c}applyToLocalDocumentSet(e,c){const t=ys();return this.mutations.forEach((n=>{const a=e.get(n.key),i=a.overlayedDocument;let s=this.applyToLocalView(i,a.mutatedFields);s=c.has(n.key)?null:s;const r=Ys(i,s);null!==r&&t.set(n.key,r),i.isValidDocument()||i.convertToNoDocument(Ma.min())})),t}keys(){return this.mutations.reduce(((e,c)=>e.add(c.key)),Ns())}isEqual(e){return this.batchId===e.batchId&&Ha(this.mutations,e.mutations,((e,c)=>cr(e,c)))&&Ha(this.baseMutations,e.baseMutations,((e,c)=>cr(e,c)))}}class fr{constructor(e,c,t,n){this.batch=e,this.commitVersion=c,this.mutationResults=t,this.docVersions=n}static from(e,c,t){na(e.mutations.length===t.length);let n=function(){return xs}();const a=e.mutations;for(let i=0;i<a.length;i++)n=n.insert(a[i].key,t[i].version);return new fr(e,c,t,n)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,c){this.largestBatchId=e,this.mutation=c}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hr{constructor(e,c){this.count=e,this.unchangedNames=c}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mr,dr;function pr(e){switch(e){default:return ta();case ia.CANCELLED:case ia.UNKNOWN:case ia.DEADLINE_EXCEEDED:case ia.RESOURCE_EXHAUSTED:case ia.INTERNAL:case ia.UNAVAILABLE:case ia.UNAUTHENTICATED:return!1;case ia.INVALID_ARGUMENT:case ia.NOT_FOUND:case ia.ALREADY_EXISTS:case ia.PERMISSION_DENIED:case ia.FAILED_PRECONDITION:case ia.ABORTED:case ia.OUT_OF_RANGE:case ia.UNIMPLEMENTED:case ia.DATA_LOSS:return!0}}function zr(e){if(void 0===e)return Xn("GRPC error has no .code"),ia.UNKNOWN;switch(e){case mr.OK:return ia.OK;case mr.CANCELLED:return ia.CANCELLED;case mr.UNKNOWN:return ia.UNKNOWN;case mr.DEADLINE_EXCEEDED:return ia.DEADLINE_EXCEEDED;case mr.RESOURCE_EXHAUSTED:return ia.RESOURCE_EXHAUSTED;case mr.INTERNAL:return ia.INTERNAL;case mr.UNAVAILABLE:return ia.UNAVAILABLE;case mr.UNAUTHENTICATED:return ia.UNAUTHENTICATED;case mr.INVALID_ARGUMENT:return ia.INVALID_ARGUMENT;case mr.NOT_FOUND:return ia.NOT_FOUND;case mr.ALREADY_EXISTS:return ia.ALREADY_EXISTS;case mr.PERMISSION_DENIED:return ia.PERMISSION_DENIED;case mr.FAILED_PRECONDITION:return ia.FAILED_PRECONDITION;case mr.ABORTED:return ia.ABORTED;case mr.OUT_OF_RANGE:return ia.OUT_OF_RANGE;case mr.UNIMPLEMENTED:return ia.UNIMPLEMENTED;case mr.DATA_LOSS:return ia.DATA_LOSS;default:return ta()}}(dr=mr||(mr={}))[dr.OK=0]="OK",dr[dr.CANCELLED=1]="CANCELLED",dr[dr.UNKNOWN=2]="UNKNOWN",dr[dr.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",dr[dr.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",dr[dr.NOT_FOUND=5]="NOT_FOUND",dr[dr.ALREADY_EXISTS=6]="ALREADY_EXISTS",dr[dr.PERMISSION_DENIED=7]="PERMISSION_DENIED",dr[dr.UNAUTHENTICATED=16]="UNAUTHENTICATED",dr[dr.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",dr[dr.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",dr[dr.ABORTED=10]="ABORTED",dr[dr.OUT_OF_RANGE=11]="OUT_OF_RANGE",dr[dr.UNIMPLEMENTED=12]="UNIMPLEMENTED",dr[dr.INTERNAL=13]="INTERNAL",dr[dr.UNAVAILABLE=14]="UNAVAILABLE",dr[dr.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let vr=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=new Gn([4294967295,4294967295],0);function Vr(e){const c=gr().encode(e),t=new $n;return t.update(c),new Uint8Array(t.digest())}function Mr(e){const c=new DataView(e.buffer),t=c.getUint32(0,!0),n=c.getUint32(4,!0),a=c.getUint32(8,!0),i=c.getUint32(12,!0);return[new Gn([t,n],0),new Gn([a,i],0)]}class Cr{constructor(e,c,t){if(this.bitmap=e,this.padding=c,this.hashCount=t,c<0||c>=8)throw new Lr(`Invalid padding: ${c}`);if(t<0)throw new Lr(`Invalid hash count: ${t}`);if(e.length>0&&0===this.hashCount)throw new Lr(`Invalid hash count: ${t}`);if(0===e.length&&0!==c)throw new Lr(`Invalid padding when bitmap length is 0: ${c}`);this.Te=8*e.length-c,this.Ee=Gn.fromNumber(this.Te)}de(e,c,t){let n=e.add(c.multiply(Gn.fromNumber(t)));return 1===n.compare(Hr)&&(n=new Gn([n.getBits(0),n.getBits(1)],0)),n.modulo(this.Ee).toNumber()}Ae(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Te)return!1;const c=Vr(e),[t,n]=Mr(c);for(let a=0;a<this.hashCount;a++){const e=this.de(t,n,a);if(!this.Ae(e))return!1}return!0}static create(e,c,t){const n=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),i=new Cr(a,n,c);return t.forEach((e=>i.insert(e))),i}insert(e){if(0===this.Te)return;const c=Vr(e),[t,n]=Mr(c);for(let a=0;a<this.hashCount;a++){const e=this.de(t,n,a);this.Re(e)}}Re(e){const c=Math.floor(e/8),t=e%8;this.bitmap[c]|=1<<t}}class Lr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,c,t,n,a){this.snapshotVersion=e,this.targetChanges=c,this.targetMismatches=t,this.documentUpdates=n,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,c,t){const n=new Map;return n.set(e,br.createSynthesizedTargetChangeForCurrentChange(e,c,t)),new yr(Ma.min(),n,new Wa(ga),Hs(),Ns())}}class br{constructor(e,c,t,n,a){this.resumeToken=e,this.current=c,this.addedDocuments=t,this.modifiedDocuments=n,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,c,t){return new br(t,c,Ns(),Ns(),Ns())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,c,t,n){this.Ve=e,this.removedTargetIds=c,this.key=t,this.me=n}}class wr{constructor(e,c){this.targetId=e,this.fe=c}}class Nr{constructor(e,c,t=ei.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=c,this.resumeToken=t,this.cause=n}}class Sr{constructor(){this.ge=0,this.pe=_r(),this.ye=ei.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return 0!==this.ge}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=Ns(),c=Ns(),t=Ns();return this.pe.forEach(((n,a)=>{switch(a){case 0:e=e.add(n);break;case 2:c=c.add(n);break;case 1:t=t.add(n);break;default:ta()}})),new br(this.ye,this.we,e,c,t)}Fe(){this.Se=!1,this.pe=_r()}Me(e,c){this.Se=!0,this.pe=this.pe.insert(e,c)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,na(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class kr{constructor(e){this.Le=e,this.ke=new Map,this.qe=Hs(),this.Qe=Ar(),this.Ke=new Wa(ga)}$e(e){for(const c of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(c,e.me):this.We(c,e.key,e.me);for(const c of e.removedTargetIds)this.We(c,e.key,e.me)}Ge(e){this.forEachTarget(e,(c=>{const t=this.ze(c);switch(e.state){case 0:this.je(c)&&t.Ce(e.resumeToken);break;case 1:t.Ne(),t.be||t.Fe(),t.Ce(e.resumeToken);break;case 2:t.Ne(),t.be||this.removeTarget(c);break;case 3:this.je(c)&&(t.Be(),t.Ce(e.resumeToken));break;case 4:this.je(c)&&(this.He(c),t.Ce(e.resumeToken));break;default:ta()}}))}forEachTarget(e,c){e.targetIds.length>0?e.targetIds.forEach(c):this.ke.forEach(((e,t)=>{this.je(t)&&c(t)}))}Je(e){const c=e.targetId,t=e.fe.count,n=this.Ye(c);if(n){const a=n.target;if(es(a))if(0===t){const e=new xa(a.path);this.We(c,e,wi.newNoDocument(e,Ma.min()))}else na(1===t);else{const n=this.Ze(c);if(n!==t){const t=this.Xe(e),a=t?this.et(t,e,n):1;if(0!==a){this.He(c);const e=2===a?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(c,e)}null==vr||vr.tt(function(e,c,t,n,a){var i,s,r,o,l,f;const u={localCacheCount:e,existenceFilterCount:c.count,databaseId:t.database,projectId:t.projectId},h=c.unchangedNames;return h&&(u.bloomFilter={applied:0===a,hashCount:null!==(i=null==h?void 0:h.hashCount)&&void 0!==i?i:0,bitmapLength:null!==(o=null===(r=null===(s=null==h?void 0:h.bits)||void 0===s?void 0:s.bitmap)||void 0===r?void 0:r.length)&&void 0!==o?o:0,padding:null!==(f=null===(l=null==h?void 0:h.bits)||void 0===l?void 0:l.padding)&&void 0!==f?f:0,mightContain:e=>{var c;return null!==(c=null==n?void 0:n.mightContain(e))&&void 0!==c&&c}}),u}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,e.fe,this.Le.nt(),t,a))}}}}Xe(e){const c=e.fe.unchangedNames;if(!c||!c.bits)return null;const{bits:{bitmap:t="",padding:n=0},hashCount:a=0}=c;let i,s;try{i=ai(t).toUint8Array()}catch(e){if(e instanceof Xa)return ea("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{s=new Cr(i,n,a)}catch(e){return ea(e instanceof Lr?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===s.Te?null:s}et(e,c,t){return c.fe.count===t-this.rt(e,c.targetId)?0:2}rt(e,c){const t=this.Le.getRemoteKeysForTarget(c);let n=0;return t.forEach((t=>{const a=this.Le.nt(),i=`projects/${a.projectId}/databases/${a.database}/documents/${t.path.canonicalString()}`;e.mightContain(i)||(this.We(c,t,null),n++)})),n}it(e){const c=new Map;this.ke.forEach(((t,n)=>{const a=this.Ye(n);if(a){if(t.current&&es(a.target)){const c=new xa(a.target.path);null!==this.qe.get(c)||this.st(n,c)||this.We(n,c,wi.newNoDocument(c,e))}t.De&&(c.set(n,t.ve()),t.Fe())}}));let t=Ns();this.Qe.forEach(((e,c)=>{let n=!0;c.forEachWhile((e=>{const c=this.Ye(e);return!c||"TargetPurposeLimboResolution"===c.purpose||(n=!1,!1)})),n&&(t=t.add(e))})),this.qe.forEach(((c,t)=>t.setReadTime(e)));const n=new yr(e,c,this.Ke,this.qe,t);return this.qe=Hs(),this.Qe=Ar(),this.Ke=new Wa(ga),n}Ue(e,c){if(!this.je(e))return;const t=this.st(e,c.key)?2:0;this.ze(e).Me(c.key,t),this.qe=this.qe.insert(c.key,c),this.Qe=this.Qe.insert(c.key,this.ot(c.key).add(e))}We(e,c,t){if(!this.je(e))return;const n=this.ze(e);this.st(e,c)?n.Me(c,1):n.xe(c),this.Qe=this.Qe.insert(c,this.ot(c).delete(e)),t&&(this.qe=this.qe.insert(c,t))}removeTarget(e){this.ke.delete(e)}Ze(e){const c=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+c.addedDocuments.size-c.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let c=this.ke.get(e);return c||(c=new Sr,this.ke.set(e,c)),c}ot(e){let c=this.Qe.get(e);return c||(c=new Ja(ga),this.Qe=this.Qe.insert(e,c)),c}je(e){const c=null!==this.Ye(e);return c||Qn("WatchChangeAggregator","Detected inactive target",e),c}Ye(e){const c=this.ke.get(e);return c&&c.be?null:this.Le._t(e)}He(e){this.ke.set(e,new Sr),this.Le.getRemoteKeysForTarget(e).forEach((c=>{this.We(e,c,null)}))}st(e,c){return this.Le.getRemoteKeysForTarget(e).has(c)}}function Ar(){return new Wa(xa.comparator)}function _r(){return new Wa(xa.comparator)}const Er=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),Tr=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),Ir=(()=>{const e={and:"AND",or:"OR"};return e})();class Rr{constructor(e,c){this.databaseId=e,this.useProto3Json=c}}function Pr(e,c){return e.useProto3Json||Oa(c)?c:{value:c}}function Or(e,c){return e.useProto3Json?`${new Date(1e3*c.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+c.nanoseconds).slice(-9)}Z`:{seconds:""+c.seconds,nanos:c.nanoseconds}}function Dr(e,c){return e.useProto3Json?c.toBase64():c.toUint8Array()}function Fr(e,c){return Or(e,c.toTimestamp())}function Ur(e){return na(!!e),Ma.fromTimestamp(function(e){const c=ti(e);return new Va(c.seconds,c.nanos)}(e))}function Br(e,c){return function(e){return new La(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(c).canonicalString()}function jr(e){const c=La.fromString(e);return na(ho(c)),c}function qr(e,c){return Br(e.databaseId,c.path)}function $r(e,c){const t=jr(c);if(t.get(1)!==e.databaseId.projectId)throw new sa(ia.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+e.databaseId.projectId);if(t.get(3)!==e.databaseId.database)throw new sa(ia.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+e.databaseId.database);return new xa(Zr(t))}function Gr(e,c){return Br(e.databaseId,c)}function Wr(e){const c=jr(e);return 4===c.length?La.emptyPath():Zr(c)}function Kr(e){return new La(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Zr(e){return na(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Jr(e,c,t){return{name:qr(e,c),fields:t.value.mapValue.fields}}function Yr(e,c){let t;if("targetChange"in c){c.targetChange;const n=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:ta()}(c.targetChange.targetChangeType||"NO_CHANGE"),a=c.targetChange.targetIds||[],i=function(e,c){return e.useProto3Json?(na(void 0===c||"string"==typeof c),ei.fromBase64String(c||"")):(na(void 0===c||c instanceof Uint8Array),ei.fromUint8Array(c||new Uint8Array))}(e,c.targetChange.resumeToken),s=c.targetChange.cause,r=s&&function(e){const c=void 0===e.code?ia.UNKNOWN:zr(e.code);return new sa(c,e.message||"")}(s);t=new Nr(n,a,i,r||null)}else if("documentChange"in c){c.documentChange;const n=c.documentChange;n.document,n.document.name,n.document.updateTime;const a=$r(e,n.document.name),i=Ur(n.document.updateTime),s=n.document.createTime?Ur(n.document.createTime):Ma.min(),r=new bi({mapValue:{fields:n.document.fields}}),o=wi.newFoundDocument(a,i,s,r),l=n.targetIds||[],f=n.removedTargetIds||[];t=new xr(l,f,o.key,o)}else if("documentDelete"in c){c.documentDelete;const n=c.documentDelete;n.document;const a=$r(e,n.document),i=n.readTime?Ur(n.readTime):Ma.min(),s=wi.newNoDocument(a,i),r=n.removedTargetIds||[];t=new xr([],r,s.key,s)}else if("documentRemove"in c){c.documentRemove;const n=c.documentRemove;n.document;const a=$r(e,n.document),i=n.removedTargetIds||[];t=new xr([],i,a,null)}else{if(!("filter"in c))return ta();{c.filter;const e=c.filter;e.targetId;const{count:n=0,unchangedNames:a}=e,i=new hr(n,a),s=e.targetId;t=new wr(s,i)}}return t}function Qr(e,c){let t;if(c instanceof tr)t={update:Jr(e,c.key,c.value)};else if(c instanceof rr)t={delete:qr(e,c.key)};else if(c instanceof nr)t={update:Jr(e,c.key,c.data),updateMask:uo(c.fieldMask)};else{if(!(c instanceof or))return ta();t={verify:qr(e,c.key)}}return c.fieldTransforms.length>0&&(t.updateTransforms=c.fieldTransforms.map((e=>function(e,c){const t=c.transform;if(t instanceof Os)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(t instanceof Ds)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:t.elements}};if(t instanceof Us)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:t.elements}};if(t instanceof js)return{fieldPath:c.field.canonicalString(),increment:t.Ie};throw ta()}(0,e)))),c.precondition.isNone||(t.currentDocument=function(e,c){return void 0!==c.updateTime?{updateTime:Fr(e,c.updateTime)}:void 0!==c.exists?{exists:c.exists}:ta()}(e,c.precondition)),t}function Xr(e,c){return e&&e.length>0?(na(void 0!==c),e.map((e=>function(e,c){let t=e.updateTime?Ur(e.updateTime):Ur(c);return t.isEqual(Ma.min())&&(t=Ur(c)),new Ws(t,e.transformResults||[])}(e,c)))):[]}function eo(e,c){return{documents:[Gr(e,c.path)]}}function co(e,c){const t={structuredQuery:{}},n=c.path;null!==c.collectionGroup?(t.parent=Gr(e,n),t.structuredQuery.from=[{collectionId:c.collectionGroup,allDescendants:!0}]):(t.parent=Gr(e,n.popLast()),t.structuredQuery.from=[{collectionId:n.lastSegment()}]);const a=function(e){if(0!==e.length)return fo(Ii.create(e,"and"))}(c.filters);a&&(t.structuredQuery.where=a);const i=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:oo(e.field),direction:io(e.dir)}}(e)))}(c.orderBy);i&&(t.structuredQuery.orderBy=i);const s=Pr(e,c.limit);return null!==s&&(t.structuredQuery.limit=s),c.startAt&&(t.structuredQuery.startAt=function(e){return{before:e.inclusive,values:e.position}}(c.startAt)),c.endAt&&(t.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(c.endAt)),t}function to(e){let c=Wr(e.parent);const t=e.structuredQuery,n=t.from?t.from.length:0;let a=null;if(n>0){na(1===n);const e=t.from[0];e.allDescendants?a=e.collectionId:c=c.child(e.collectionId)}let i=[];t.where&&(i=function(e){const c=ao(e);return c instanceof Ii&&Pi(c)?c.getFilters():[c]}(t.where));let s=[];t.orderBy&&(s=function(e){return e.map((e=>function(e){return new Ai(lo(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)))}(t.orderBy));let r=null;t.limit&&(r=function(e){let c;return c="object"==typeof e?e.value:e,Oa(c)?null:c}(t.limit));let o=null;t.startAt&&(o=function(e){const c=!!e.before,t=e.values||[];return new Ni(t,c)}(t.startAt));let l=null;return t.endAt&&(l=function(e){const c=!e.before,t=e.values||[];return new Ni(t,c)}(t.endAt)),ts(c,a,s,i,r,"F",o,l)}function no(e,c){const t=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ta()}}(c.purpose);return null==t?null:{"goog-listen-tags":t}}function ao(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const c=lo(e.unaryFilter.field);return Ti.create(c,"==",{doubleValue:NaN});case"IS_NULL":const t=lo(e.unaryFilter.field);return Ti.create(t,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const n=lo(e.unaryFilter.field);return Ti.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=lo(e.unaryFilter.field);return Ti.create(a,"!=",{nullValue:"NULL_VALUE"});default:return ta()}}(e):void 0!==e.fieldFilter?function(e){return Ti.create(lo(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ta()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Ii.create(e.compositeFilter.filters.map((e=>ao(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return ta()}}(e.compositeFilter.op))}(e):ta()}function io(e){return Er[e]}function so(e){return Tr[e]}function ro(e){return Ir[e]}function oo(e){return{fieldPath:e.canonicalString()}}function lo(e){return ba.fromServerFormat(e.fieldPath)}function fo(e){return e instanceof Ti?function(e){if("=="===e.op){if(Mi(e.value))return{unaryFilter:{field:oo(e.field),op:"IS_NAN"}};if(Vi(e.value))return{unaryFilter:{field:oo(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Mi(e.value))return{unaryFilter:{field:oo(e.field),op:"IS_NOT_NAN"}};if(Vi(e.value))return{unaryFilter:{field:oo(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:oo(e.field),op:so(e.op),value:e.value}}}(e):e instanceof Ii?function(e){const c=e.getFilters().map((e=>fo(e)));return 1===c.length?c[0]:{compositeFilter:{op:ro(e.op),filters:c}}}(e):ta()}function uo(e){const c=[];return e.fields.forEach((e=>c.push(e.canonicalString()))),{fieldPaths:c}}function ho(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,c,t,n,a=Ma.min(),i=Ma.min(),s=ei.EMPTY_BYTE_STRING,r=null){this.target=e,this.targetId=c,this.purpose=t,this.sequenceNumber=n,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=s,this.expectedCount=r}withSequenceNumber(e){return new mo(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,c){return new mo(this.target,this.targetId,this.purpose,this.sequenceNumber,c,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new mo(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new mo(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e){this.ut=e}}function zo(e){const c=to({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?ls(c,c.limit,"L"):c}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(){}ht(e,c){this.Pt(e,c),c.It()}Pt(e,c){if("nullValue"in e)this.Tt(c,5);else if("booleanValue"in e)this.Tt(c,10),c.Et(e.booleanValue?1:0);else if("integerValue"in e)this.Tt(c,15),c.Et(ni(e.integerValue));else if("doubleValue"in e){const t=ni(e.doubleValue);isNaN(t)?this.Tt(c,13):(this.Tt(c,15),Da(t)?c.Et(0):c.Et(t))}else if("timestampValue"in e){const t=e.timestampValue;this.Tt(c,20),"string"==typeof t?c.dt(t):(c.dt(`${t.seconds||""}`),c.Et(t.nanos||0))}else if("stringValue"in e)this.At(e.stringValue,c),this.Rt(c);else if("bytesValue"in e)this.Tt(c,30),c.Vt(ai(e.bytesValue)),this.Rt(c);else if("referenceValue"in e)this.ft(e.referenceValue,c);else if("geoPointValue"in e){const t=e.geoPointValue;this.Tt(c,45),c.Et(t.latitude||0),c.Et(t.longitude||0)}else"mapValue"in e?yi(e)?this.Tt(c,Number.MAX_SAFE_INTEGER):(this.gt(e.mapValue,c),this.Rt(c)):"arrayValue"in e?(this.yt(e.arrayValue,c),this.Rt(c)):ta()}At(e,c){this.Tt(c,25),this.wt(e,c)}wt(e,c){c.dt(e)}gt(e,c){const t=e.fields||{};this.Tt(c,55);for(const n of Object.keys(t))this.At(n,c),this.Pt(t[n],c)}yt(e,c){const t=e.values||[];this.Tt(c,50);for(const n of t)this.Pt(n,c)}ft(e,c){this.Tt(c,37),xa.fromName(e).path.forEach((e=>{this.Tt(c,60),this.wt(e,c)}))}Tt(e,c){e.Et(c)}Rt(e){e.Et(2)}}vo.St=new vo;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class go{constructor(){this.on=new Ho}addToCollectionParentIndex(e,c){return this.on.add(c),Ia.resolve()}getCollectionParents(e,c){return Ia.resolve(this.on.getEntries(c))}addFieldIndex(e,c){return Ia.resolve()}deleteFieldIndex(e,c){return Ia.resolve()}deleteAllFieldIndexes(e){return Ia.resolve()}createTargetIndexes(e,c){return Ia.resolve()}getDocumentsMatchingTarget(e,c){return Ia.resolve(null)}getIndexType(e,c){return Ia.resolve(0)}getFieldIndexes(e,c){return Ia.resolve([])}getNextCollectionGroupToUpdate(e){return Ia.resolve(null)}getMinOffset(e,c){return Ia.resolve(ka.min())}getMinOffsetFromCollectionGroup(e,c){return Ia.resolve(ka.min())}updateCollectionGroup(e,c,t){return Ia.resolve()}updateIndexEntries(e,c){return Ia.resolve()}}class Ho{constructor(){this.index={}}add(e){const c=e.lastSegment(),t=e.popLast(),n=this.index[c]||new Ja(La.comparator),a=!n.has(t);return this.index[c]=n.add(t),a}has(e){const c=e.lastSegment(),t=e.popLast(),n=this.index[c];return n&&n.has(t)}getEntries(e){return(this.index[e]||new Ja(La.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Vo{constructor(e,c,t){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=c,this.maximumSequenceNumbersToCollect=t}static withCacheSize(e){return new Vo(e,Vo.DEFAULT_COLLECTION_PERCENTILE,Vo.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vo.DEFAULT_COLLECTION_PERCENTILE=10,Vo.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Vo.DEFAULT=new Vo(41943040,Vo.DEFAULT_COLLECTION_PERCENTILE,Vo.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Vo.DISABLED=new Vo(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mo{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Mo(0)}static Nn(){return new Mo(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Co{constructor(){this.changes=new vs((e=>e.toString()),((e,c)=>e.isEqual(c))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,c){this.assertNotApplied(),this.changes.set(e,wi.newInvalidDocument(e).setReadTime(c))}getEntry(e,c){this.assertNotApplied();const t=this.changes.get(c);return void 0!==t?Ia.resolve(t):this.getFromCache(e,c)}getEntries(e,c){return this.getAllFromCache(e,c)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lo{constructor(e,c){this.overlayedDocument=e,this.mutatedFields=c}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,c,t,n){this.remoteDocumentCache=e,this.mutationQueue=c,this.documentOverlayCache=t,this.indexManager=n}getDocument(e,c){let t=null;return this.documentOverlayCache.getOverlay(e,c).next((n=>(t=n,this.remoteDocumentCache.getEntry(e,c)))).next((e=>(null!==t&&Xs(t.mutation,e,Qa.empty(),Va.now()),e)))}getDocuments(e,c){return this.remoteDocumentCache.getEntries(e,c).next((c=>this.getLocalViewOfDocuments(e,c,Ns()).next((()=>c))))}getLocalViewOfDocuments(e,c,t=Ns()){const n=Ls();return this.populateOverlays(e,n,c).next((()=>this.computeViews(e,c,n,t).next((e=>{let c=Ms();return e.forEach(((e,t)=>{c=c.insert(e,t.overlayedDocument)})),c}))))}getOverlayedDocuments(e,c){const t=Ls();return this.populateOverlays(e,t,c).next((()=>this.computeViews(e,c,t,Ns())))}populateOverlays(e,c,t){const n=[];return t.forEach((e=>{c.has(e)||n.push(e)})),this.documentOverlayCache.getOverlays(e,n).next((e=>{e.forEach(((e,t)=>{c.set(e,t)}))}))}computeViews(e,c,t,n){let a=Hs();const i=bs(),s=function(){return bs()}();return c.forEach(((e,c)=>{const s=t.get(c.key);n.has(c.key)&&(void 0===s||s.mutation instanceof nr)?a=a.insert(c.key,c):void 0!==s?(i.set(c.key,s.mutation.getFieldMask()),Xs(s.mutation,c,s.mutation.getFieldMask(),Va.now())):i.set(c.key,Qa.empty())})),this.recalculateAndSaveOverlays(e,a).next((e=>(e.forEach(((e,c)=>i.set(e,c))),c.forEach(((e,c)=>{var t;return s.set(e,new Lo(c,null!==(t=i.get(e))&&void 0!==t?t:null))})),s)))}recalculateAndSaveOverlays(e,c){const t=bs();let n=new Wa(((e,c)=>e-c)),a=Ns();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,c).next((e=>{for(const a of e)a.keys().forEach((e=>{const i=c.get(e);if(null===i)return;let s=t.get(e)||Qa.empty();s=a.applyToLocalView(i,s),t.set(e,s);const r=(n.get(a.batchId)||Ns()).add(e);n=n.insert(a.batchId,r)}))})).next((()=>{const i=[],s=n.getReverseIterator();for(;s.hasNext();){const n=s.getNext(),r=n.key,o=n.value,l=ys();o.forEach((e=>{if(!a.has(e)){const n=Ys(c.get(e),t.get(e));null!==n&&l.set(e,n),a=a.add(e)}})),i.push(this.documentOverlayCache.saveOverlays(e,r,l))}return Ia.waitFor(i)})).next((()=>t))}recalculateAndSaveOverlaysForDocumentKeys(e,c){return this.remoteDocumentCache.getEntries(e,c).next((c=>this.recalculateAndSaveOverlays(e,c)))}getDocumentsMatchingQuery(e,c,t,n){return function(e){return xa.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(c)?this.getDocumentsMatchingDocumentQuery(e,c.path):is(c)?this.getDocumentsMatchingCollectionGroupQuery(e,c,t,n):this.getDocumentsMatchingCollectionQuery(e,c,t,n)}getNextDocuments(e,c,t,n){return this.remoteDocumentCache.getAllFromCollectionGroup(e,c,t,n).next((a=>{const i=n-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,c,t.largestBatchId,n-a.size):Ia.resolve(Ls());let s=-1,r=a;return i.next((c=>Ia.forEach(c,((c,t)=>(s<t.largestBatchId&&(s=t.largestBatchId),a.get(c)?Ia.resolve():this.remoteDocumentCache.getEntry(e,c).next((e=>{r=r.insert(c,e)}))))).next((()=>this.populateOverlays(e,c,a))).next((()=>this.computeViews(e,r,c,Ns()))).next((e=>({batchId:s,changes:Cs(e)})))))}))}getDocumentsMatchingDocumentQuery(e,c){return this.getDocument(e,new xa(c)).next((e=>{let c=Ms();return e.isFoundDocument()&&(c=c.insert(e.key,e)),c}))}getDocumentsMatchingCollectionGroupQuery(e,c,t,n){const a=c.collectionGroup;let i=Ms();return this.indexManager.getCollectionParents(e,a).next((s=>Ia.forEach(s,(s=>{const r=function(e,c){return new cs(c,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(c,s.child(a));return this.getDocumentsMatchingCollectionQuery(e,r,t,n).next((e=>{e.forEach(((e,c)=>{i=i.insert(e,c)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,c,t,n){let a;return this.documentOverlayCache.getOverlaysForCollection(e,c.path,t.largestBatchId).next((i=>(a=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,c,t,a,n)))).next((e=>{a.forEach(((c,t)=>{const n=t.getKey();null===e.get(n)&&(e=e.insert(n,wi.newInvalidDocument(n)))}));let t=Ms();return e.forEach(((e,n)=>{const i=a.get(e);void 0!==i&&Xs(i.mutation,n,Qa.empty(),Va.now()),ms(c,n)&&(t=t.insert(e,n))})),t}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,c){return Ia.resolve(this.ur.get(c))}saveBundleMetadata(e,c){return this.ur.set(c.id,function(e){return{id:e.id,version:e.version,createTime:Ur(e.createTime)}}(c)),Ia.resolve()}getNamedQuery(e,c){return Ia.resolve(this.cr.get(c))}saveNamedQuery(e,c){return this.cr.set(c.name,function(e){return{name:e.name,query:zo(e.bundledQuery),readTime:Ur(e.readTime)}}(c)),Ia.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(){this.overlays=new Wa(xa.comparator),this.lr=new Map}getOverlay(e,c){return Ia.resolve(this.overlays.get(c))}getOverlays(e,c){const t=Ls();return Ia.forEach(c,(c=>this.getOverlay(e,c).next((e=>{null!==e&&t.set(c,e)})))).next((()=>t))}saveOverlays(e,c,t){return t.forEach(((t,n)=>{this.lt(e,c,n)})),Ia.resolve()}removeOverlaysForBatchId(e,c,t){const n=this.lr.get(t);return void 0!==n&&(n.forEach((e=>this.overlays=this.overlays.remove(e))),this.lr.delete(t)),Ia.resolve()}getOverlaysForCollection(e,c,t){const n=Ls(),a=c.length+1,i=new xa(c.child("")),s=this.overlays.getIteratorFrom(i);for(;s.hasNext();){const e=s.getNext().value,i=e.getKey();if(!c.isPrefixOf(i.path))break;i.path.length===a&&e.largestBatchId>t&&n.set(e.getKey(),e)}return Ia.resolve(n)}getOverlaysForCollectionGroup(e,c,t,n){let a=new Wa(((e,c)=>e-c));const i=this.overlays.getIterator();for(;i.hasNext();){const e=i.getNext().value;if(e.getKey().getCollectionGroup()===c&&e.largestBatchId>t){let c=a.get(e.largestBatchId);null===c&&(c=Ls(),a=a.insert(e.largestBatchId,c)),c.set(e.getKey(),e)}}const s=Ls(),r=a.getIterator();for(;r.hasNext();)if(r.getNext().value.forEach(((e,c)=>s.set(e,c))),s.size()>=n)break;return Ia.resolve(s)}lt(e,c,t){const n=this.overlays.get(t.key);if(null!==n){const e=this.lr.get(n.largestBatchId).delete(t.key);this.lr.set(n.largestBatchId,e)}this.overlays=this.overlays.insert(t.key,new ur(c,t));let a=this.lr.get(c);void 0===a&&(a=Ns(),this.lr.set(c,a)),this.lr.set(c,a.add(t.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(){this.hr=new Ja(No.Pr),this.Ir=new Ja(No.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,c){const t=new No(e,c);this.hr=this.hr.add(t),this.Ir=this.Ir.add(t)}Er(e,c){e.forEach((e=>this.addReference(e,c)))}removeReference(e,c){this.dr(new No(e,c))}Ar(e,c){e.forEach((e=>this.removeReference(e,c)))}Rr(e){const c=new xa(new La([])),t=new No(c,e),n=new No(c,e+1),a=[];return this.Ir.forEachInRange([t,n],(e=>{this.dr(e),a.push(e.key)})),a}Vr(){this.hr.forEach((e=>this.dr(e)))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const c=new xa(new La([])),t=new No(c,e),n=new No(c,e+1);let a=Ns();return this.Ir.forEachInRange([t,n],(e=>{a=a.add(e.key)})),a}containsKey(e){const c=new No(e,0),t=this.hr.firstAfterOrEqual(c);return null!==t&&e.isEqual(t.key)}}class No{constructor(e,c){this.key=e,this.gr=c}static Pr(e,c){return xa.comparator(e.key,c.key)||ga(e.gr,c.gr)}static Tr(e,c){return ga(e.gr,c.gr)||xa.comparator(e.key,c.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,c){this.indexManager=e,this.referenceDelegate=c,this.mutationQueue=[],this.pr=1,this.yr=new Ja(No.Pr)}checkEmpty(e){return Ia.resolve(0===this.mutationQueue.length)}addMutationBatch(e,c,t,n){const a=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new lr(a,c,t,n);this.mutationQueue.push(i);for(const s of n)this.yr=this.yr.add(new No(s.key,a)),this.indexManager.addToCollectionParentIndex(e,s.key.path.popLast());return Ia.resolve(i)}lookupMutationBatch(e,c){return Ia.resolve(this.wr(c))}getNextMutationBatchAfterBatchId(e,c){const t=c+1,n=this.Sr(t),a=n<0?0:n;return Ia.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return Ia.resolve(0===this.mutationQueue.length?-1:this.pr-1)}getAllMutationBatches(e){return Ia.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,c){const t=new No(c,0),n=new No(c,Number.POSITIVE_INFINITY),a=[];return this.yr.forEachInRange([t,n],(e=>{const c=this.wr(e.gr);a.push(c)})),Ia.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,c){let t=new Ja(ga);return c.forEach((e=>{const c=new No(e,0),n=new No(e,Number.POSITIVE_INFINITY);this.yr.forEachInRange([c,n],(e=>{t=t.add(e.gr)}))})),Ia.resolve(this.br(t))}getAllMutationBatchesAffectingQuery(e,c){const t=c.path,n=t.length+1;let a=t;xa.isDocumentKey(a)||(a=a.child(""));const i=new No(new xa(a),0);let s=new Ja(ga);return this.yr.forEachWhile((e=>{const c=e.key.path;return!!t.isPrefixOf(c)&&(c.length===n&&(s=s.add(e.gr)),!0)}),i),Ia.resolve(this.br(s))}br(e){const c=[];return e.forEach((e=>{const t=this.wr(e);null!==t&&c.push(t)})),c}removeMutationBatch(e,c){na(0===this.Dr(c.batchId,"removed")),this.mutationQueue.shift();let t=this.yr;return Ia.forEach(c.mutations,(n=>{const a=new No(n.key,c.batchId);return t=t.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)})).next((()=>{this.yr=t}))}Fn(e){}containsKey(e,c){const t=new No(c,0),n=this.yr.firstAfterOrEqual(t);return Ia.resolve(c.isEqual(n&&n.key))}performConsistencyCheck(e){return this.mutationQueue.length,Ia.resolve()}Dr(e,c){return this.Sr(e)}Sr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}wr(e){const c=this.Sr(e);return c<0||c>=this.mutationQueue.length?null:this.mutationQueue[c]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e){this.Cr=e,this.docs=function(){return new Wa(xa.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,c){const t=c.key,n=this.docs.get(t),a=n?n.size:0,i=this.Cr(c);return this.docs=this.docs.insert(t,{document:c.mutableCopy(),size:i}),this.size+=i-a,this.indexManager.addToCollectionParentIndex(e,t.path.popLast())}removeEntry(e){const c=this.docs.get(e);c&&(this.docs=this.docs.remove(e),this.size-=c.size)}getEntry(e,c){const t=this.docs.get(c);return Ia.resolve(t?t.document.mutableCopy():wi.newInvalidDocument(c))}getEntries(e,c){let t=Hs();return c.forEach((e=>{const c=this.docs.get(e);t=t.insert(e,c?c.document.mutableCopy():wi.newInvalidDocument(e))})),Ia.resolve(t)}getDocumentsMatchingQuery(e,c,t,n){let a=Hs();const i=c.path,s=new xa(i.child("")),r=this.docs.getIteratorFrom(s);for(;r.hasNext();){const{key:e,value:{document:s}}=r.getNext();if(!i.isPrefixOf(e.path))break;e.path.length>i.length+1||Aa(Sa(s),t)<=0||(n.has(s.key)||ms(c,s))&&(a=a.insert(s.key,s.mutableCopy()))}return Ia.resolve(a)}getAllFromCollectionGroup(e,c,t,n){ta()}vr(e,c){return Ia.forEach(this.docs,(e=>c(e)))}newChangeBuffer(e){return new Ao(this)}getSize(e){return Ia.resolve(this.size)}}class Ao extends Co{constructor(e){super(),this._r=e}applyChanges(e){const c=[];return this.changes.forEach(((t,n)=>{n.isValidDocument()?c.push(this._r.addEntry(e,n)):this._r.removeEntry(t)})),Ia.waitFor(c)}getFromCache(e,c){return this._r.getEntry(e,c)}getAllFromCache(e,c){return this._r.getEntries(e,c)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e){this.persistence=e,this.Fr=new vs((e=>Qi(e)),Xi),this.lastRemoteSnapshotVersion=Ma.min(),this.highestTargetId=0,this.Mr=0,this.Or=new wo,this.targetCount=0,this.Nr=Mo.On()}forEachTarget(e,c){return this.Fr.forEach(((e,t)=>c(t))),Ia.resolve()}getLastRemoteSnapshotVersion(e){return Ia.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Ia.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),Ia.resolve(this.highestTargetId)}setTargetsMetadata(e,c,t){return t&&(this.lastRemoteSnapshotVersion=t),c>this.Mr&&(this.Mr=c),Ia.resolve()}kn(e){this.Fr.set(e.target,e);const c=e.targetId;c>this.highestTargetId&&(this.Nr=new Mo(c),this.highestTargetId=c),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,c){return this.kn(c),this.targetCount+=1,Ia.resolve()}updateTargetData(e,c){return this.kn(c),Ia.resolve()}removeTargetData(e,c){return this.Fr.delete(c.target),this.Or.Rr(c.targetId),this.targetCount-=1,Ia.resolve()}removeTargets(e,c,t){let n=0;const a=[];return this.Fr.forEach(((i,s)=>{s.sequenceNumber<=c&&null===t.get(s.targetId)&&(this.Fr.delete(i),a.push(this.removeMatchingKeysForTargetId(e,s.targetId)),n++)})),Ia.waitFor(a).next((()=>n))}getTargetCount(e){return Ia.resolve(this.targetCount)}getTargetData(e,c){const t=this.Fr.get(c)||null;return Ia.resolve(t)}addMatchingKeys(e,c,t){return this.Or.Er(c,t),Ia.resolve()}removeMatchingKeys(e,c,t){this.Or.Ar(c,t);const n=this.persistence.referenceDelegate,a=[];return n&&c.forEach((c=>{a.push(n.markPotentiallyOrphaned(e,c))})),Ia.waitFor(a)}removeMatchingKeysForTargetId(e,c){return this.Or.Rr(c),Ia.resolve()}getMatchingKeysForTargetId(e,c){const t=this.Or.mr(c);return Ia.resolve(t)}containsKey(e,c){return Ia.resolve(this.Or.containsKey(c))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,c){this.Br={},this.overlays={},this.Lr=new Pa(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new _o(this),this.indexManager=new go,this.remoteDocumentCache=function(e){return new ko(e)}((e=>this.referenceDelegate.Qr(e))),this.serializer=new po(c),this.Kr=new bo(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let c=this.overlays[e.toKey()];return c||(c=new xo,this.overlays[e.toKey()]=c),c}getMutationQueue(e,c){let t=this.Br[e.toKey()];return t||(t=new So(c,this.referenceDelegate),this.Br[e.toKey()]=t),t}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,c,t){Qn("MemoryPersistence","Starting transaction:",e);const n=new To(this.Lr.next());return this.referenceDelegate.$r(),t(n).next((e=>this.referenceDelegate.Ur(n).next((()=>e)))).toPromise().then((e=>(n.raiseOnCommittedEvent(),e)))}Wr(e,c){return Ia.or(Object.values(this.Br).map((t=>()=>t.containsKey(e,c))))}}class To extends Ea{constructor(e){super(),this.currentSequenceNumber=e}}class Io{constructor(e){this.persistence=e,this.Gr=new wo,this.zr=null}static jr(e){return new Io(e)}get Hr(){if(this.zr)return this.zr;throw ta()}addReference(e,c,t){return this.Gr.addReference(t,c),this.Hr.delete(t.toString()),Ia.resolve()}removeReference(e,c,t){return this.Gr.removeReference(t,c),this.Hr.add(t.toString()),Ia.resolve()}markPotentiallyOrphaned(e,c){return this.Hr.add(c.toString()),Ia.resolve()}removeTarget(e,c){this.Gr.Rr(c.targetId).forEach((e=>this.Hr.add(e.toString())));const t=this.persistence.getTargetCache();return t.getMatchingKeysForTargetId(e,c.targetId).next((e=>{e.forEach((e=>this.Hr.add(e.toString())))})).next((()=>t.removeTargetData(e,c)))}$r(){this.zr=new Set}Ur(e){const c=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ia.forEach(this.Hr,(t=>{const n=xa.fromPath(t);return this.Jr(e,n).next((e=>{e||c.removeEntry(n,Ma.min())}))})).next((()=>(this.zr=null,c.apply(e))))}updateLimboDocument(e,c){return this.Jr(e,c).next((e=>{e?this.Hr.delete(c.toString()):this.Hr.add(c.toString())}))}Qr(e){return 0}Jr(e,c){return Ia.or([()=>Ia.resolve(this.Gr.containsKey(c)),()=>this.persistence.getTargetCache().containsKey(e,c),()=>this.persistence.Wr(e,c)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ro{constructor(e,c,t,n){this.targetId=e,this.fromCache=c,this.ki=t,this.qi=n}static Qi(e,c){let t=Ns(),n=Ns();for(const a of c.docChanges)switch(a.type){case 0:t=t.add(a.doc.key);break;case 1:n=n.add(a.doc.key)}return new Ro(e,c.fromCache,t,n)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,c){this.Gi=e,this.indexManager=c,this.Ki=!0}getDocumentsMatchingQuery(e,c,t,n){const a={result:null};return this.zi(e,c).next((e=>{a.result=e})).next((()=>{if(!a.result)return this.ji(e,c,n,t).next((e=>{a.result=e}))})).next((()=>{if(a.result)return;const t=new Po;return this.Hi(e,c,t).next((n=>{if(a.result=n,this.$i)return this.Ji(e,c,t,n.size)}))})).next((()=>a.result))}Ji(e,c,t,n){return t.documentReadCount<this.Ui?(Yn()<=s["in"].DEBUG&&Qn("QueryEngine","SDK will not create cache indexes for query:",hs(c),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),Ia.resolve()):(Yn()<=s["in"].DEBUG&&Qn("QueryEngine","Query:",hs(c),"scans",t.documentReadCount,"local documents and returns",n,"documents as results."),t.documentReadCount>this.Wi*n?(Yn()<=s["in"].DEBUG&&Qn("QueryEngine","The SDK decides to create cache indexes for query:",hs(c),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rs(c))):Ia.resolve())}zi(e,c){if(as(c))return Ia.resolve(null);let t=rs(c);return this.indexManager.getIndexType(e,t).next((n=>0===n?null:(null!==c.limit&&1===n&&(c=ls(c,null,"F"),t=rs(c)),this.indexManager.getDocumentsMatchingTarget(e,t).next((n=>{const a=Ns(...n);return this.Gi.getDocuments(e,a).next((n=>this.indexManager.getMinOffset(e,t).next((t=>{const i=this.Yi(c,n);return this.Zi(c,i,a,t.readTime)?this.zi(e,ls(c,null,"F")):this.Xi(e,i,c,t)}))))})))))}ji(e,c,t,n){return as(c)||n.isEqual(Ma.min())?Ia.resolve(null):this.Gi.getDocuments(e,t).next((a=>{const i=this.Yi(c,a);return this.Zi(c,i,t,n)?Ia.resolve(null):(Yn()<=s["in"].DEBUG&&Qn("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),hs(c)),this.Xi(e,i,c,Na(n,-1)).next((e=>e)))}))}Yi(e,c){let t=new Ja(ps(e));return c.forEach(((c,n)=>{ms(e,n)&&(t=t.add(n))})),t}Zi(e,c,t,n){if(null===e.limit)return!1;if(t.size!==c.size)return!0;const a="F"===e.limitType?c.last():c.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(n)>0)}Hi(e,c,t){return Yn()<=s["in"].DEBUG&&Qn("QueryEngine","Using full collection scan to execute query:",hs(c)),this.Gi.getDocumentsMatchingQuery(e,c,ka.min(),t)}Xi(e,c,t,n){return this.Gi.getDocumentsMatchingQuery(e,t,n).next((e=>(c.forEach((c=>{e=e.insert(c.key,c)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,c,t,n){this.persistence=e,this.es=c,this.serializer=n,this.ts=new Wa(ga),this.ns=new vs((e=>Qi(e)),Xi),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(t)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new yo(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(c=>e.collect(c,this.ts)))}}function Fo(e,c,t,n){return new Do(e,c,t,n)}async function Uo(e,c){const t=aa(e);return await t.persistence.runTransaction("Handle user change","readonly",(e=>{let n;return t.mutationQueue.getAllMutationBatches(e).next((a=>(n=a,t.os(c),t.mutationQueue.getAllMutationBatches(e)))).next((c=>{const a=[],i=[];let s=Ns();for(const e of n){a.push(e.batchId);for(const c of e.mutations)s=s.add(c.key)}for(const e of c){i.push(e.batchId);for(const c of e.mutations)s=s.add(c.key)}return t.localDocuments.getDocuments(e,s).next((e=>({_s:e,removedBatchIds:a,addedBatchIds:i})))}))}))}function Bo(e,c){const t=aa(e);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const n=c.batch.keys(),a=t.ss.newChangeBuffer({trackRemovals:!0});return function(e,c,t,n){const a=t.batch,i=a.keys();let s=Ia.resolve();return i.forEach((e=>{s=s.next((()=>n.getEntry(c,e))).next((c=>{const i=t.docVersions.get(e);na(null!==i),c.version.compareTo(i)<0&&(a.applyToRemoteDocument(c,t),c.isValidDocument()&&(c.setReadTime(t.commitVersion),n.addEntry(c)))}))})),s.next((()=>e.mutationQueue.removeMutationBatch(c,a)))}(t,e,c,a).next((()=>a.apply(e))).next((()=>t.mutationQueue.performConsistencyCheck(e))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(e,n,c.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let c=Ns();for(let t=0;t<e.mutationResults.length;++t)e.mutationResults[t].transformResults.length>0&&(c=c.add(e.batch.mutations[t].key));return c}(c)))).next((()=>t.localDocuments.getDocuments(e,n)))}))}function jo(e){const c=aa(e);return c.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>c.qr.getLastRemoteSnapshotVersion(e)))}function qo(e,c){const t=aa(e),n=c.snapshotVersion;let a=t.ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const i=t.ss.newChangeBuffer({trackRemovals:!0});a=t.ts;const s=[];c.targetChanges.forEach(((i,r)=>{const o=a.get(r);if(!o)return;s.push(t.qr.removeMatchingKeys(e,i.removedDocuments,r).next((()=>t.qr.addMatchingKeys(e,i.addedDocuments,r))));let l=o.withSequenceNumber(e.currentSequenceNumber);null!==c.targetMismatches.get(r)?l=l.withResumeToken(ei.EMPTY_BYTE_STRING,Ma.min()).withLastLimboFreeSnapshotVersion(Ma.min()):i.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(i.resumeToken,n)),a=a.insert(r,l),function(e,c,t){return 0===e.resumeToken.approximateByteSize()||(c.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size>0)}(o,l,i)&&s.push(t.qr.updateTargetData(e,l))}));let r=Hs(),o=Ns();if(c.documentUpdates.forEach((n=>{c.resolvedLimboDocuments.has(n)&&s.push(t.persistence.referenceDelegate.updateLimboDocument(e,n))})),s.push($o(e,i,c.documentUpdates).next((e=>{r=e.us,o=e.cs}))),!n.isEqual(Ma.min())){const c=t.qr.getLastRemoteSnapshotVersion(e).next((c=>t.qr.setTargetsMetadata(e,e.currentSequenceNumber,n)));s.push(c)}return Ia.waitFor(s).next((()=>i.apply(e))).next((()=>t.localDocuments.getLocalViewOfDocuments(e,r,o))).next((()=>r))})).then((e=>(t.ts=a,e)))}function $o(e,c,t){let n=Ns(),a=Ns();return t.forEach((e=>n=n.add(e))),c.getEntries(e,n).next((e=>{let n=Hs();return t.forEach(((t,i)=>{const s=e.get(t);i.isFoundDocument()!==s.isFoundDocument()&&(a=a.add(t)),i.isNoDocument()&&i.version.isEqual(Ma.min())?(c.removeEntry(t,i.readTime),n=n.insert(t,i)):!s.isValidDocument()||i.version.compareTo(s.version)>0||0===i.version.compareTo(s.version)&&s.hasPendingWrites?(c.addEntry(i),n=n.insert(t,i)):Qn("LocalStore","Ignoring outdated watch update for ",t,". Current version:",s.version," Watch version:",i.version)})),{us:n,cs:a}}))}function Go(e,c){const t=aa(e);return t.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===c&&(c=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(e,c))))}function Wo(e,c){const t=aa(e);return t.persistence.runTransaction("Allocate target","readwrite",(e=>{let n;return t.qr.getTargetData(e,c).next((a=>a?(n=a,Ia.resolve(n)):t.qr.allocateTargetId(e).next((a=>(n=new mo(c,a,"TargetPurposeListen",e.currentSequenceNumber),t.qr.addTargetData(e,n).next((()=>n)))))))})).then((e=>{const n=t.ts.get(e.targetId);return(null===n||e.snapshotVersion.compareTo(n.snapshotVersion)>0)&&(t.ts=t.ts.insert(e.targetId,e),t.ns.set(c,e.targetId)),e}))}async function Ko(e,c,t){const n=aa(e),a=n.ts.get(c),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,(e=>n.persistence.referenceDelegate.removeTarget(e,a)))}catch(e){if(!Ra(e))throw e;Qn("LocalStore",`Failed to update sequence numbers for target ${c}: ${e}`)}n.ts=n.ts.remove(c),n.ns.delete(a.target)}function Zo(e,c,t){const n=aa(e);let a=Ma.min(),i=Ns();return n.persistence.runTransaction("Execute query","readwrite",(e=>function(e,c,t){const n=aa(e),a=n.ns.get(t);return void 0!==a?Ia.resolve(n.ts.get(a)):n.qr.getTargetData(c,t)}(n,e,rs(c)).next((c=>{if(c)return a=c.lastLimboFreeSnapshotVersion,n.qr.getMatchingKeysForTargetId(e,c.targetId).next((e=>{i=e}))})).next((()=>n.es.getDocumentsMatchingQuery(e,c,t?a:Ma.min(),t?i:Ns()))).next((e=>(Jo(n,ds(c),e),{documents:e,ls:i})))))}function Jo(e,c,t){let n=e.rs.get(c)||Ma.min();t.forEach(((e,c)=>{c.readTime.compareTo(n)>0&&(n=c.readTime)})),e.rs.set(c,n)}class Yo{constructor(){this.activeTargetIds=ks()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Qo{constructor(){this.eo=new Yo,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,c,t){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,c,t){this.no[e]=c}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new Yo,Promise.resolve()}handleUserChange(e,c,t){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{ro(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){Qn("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){Qn("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cl=null;function tl(){return null===cl?cl=function(){return 268435456+Math.round(2147483648*Math.random())}():cl++,"0x"+cl.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const nl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il="WebChannelConnection";class sl extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const c=e.ssl?"https":"http",t=encodeURIComponent(this.databaseId.projectId),n=encodeURIComponent(this.databaseId.database);this.mo=c+"://"+e.host,this.fo=`projects/${t}/databases/${n}`,this.po="(default)"===this.databaseId.database?`project_id=${t}`:`project_id=${t}&database_id=${n}`}get yo(){return!1}wo(e,c,t,n,a){const i=tl(),s=this.So(e,c);Qn("RestConnection",`Sending RPC '${e}' ${i}:`,s,t);const r={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(r,n,a),this.Do(e,s,r,t).then((c=>(Qn("RestConnection",`Received RPC '${e}' ${i}: `,c),c)),(c=>{throw ea("RestConnection",`RPC '${e}' ${i} failed with error: `,c,"url: ",s,"request:",t),c}))}Co(e,c,t,n,a,i){return this.wo(e,c,t,n,a)}bo(e,c,t){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Zn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),c&&c.headers.forEach(((c,t)=>e[t]=c)),t&&t.headers.forEach(((c,t)=>e[t]=c))}So(e,c){const t=nl[e];return`${this.mo}/v1/${c}:${t}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,c,t,n){const a=tl();return new Promise(((i,s)=>{const r=new qn;r.setWithCredentials(!0),r.listenOnce(Fn.COMPLETE,(()=>{try{switch(r.getLastErrorCode()){case Dn.NO_ERROR:const c=r.getResponseJson();Qn(il,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(c)),i(c);break;case Dn.TIMEOUT:Qn(il,`RPC '${e}' ${a} timed out`),s(new sa(ia.DEADLINE_EXCEEDED,"Request time out"));break;case Dn.HTTP_ERROR:const t=r.getStatus();if(Qn(il,`RPC '${e}' ${a} failed with status:`,t,"response text:",r.getResponseText()),t>0){let e=r.getResponseJson();Array.isArray(e)&&(e=e[0]);const c=null==e?void 0:e.error;if(c&&c.status&&c.message){const e=function(e){const c=e.toLowerCase().replace(/_/g,"-");return Object.values(ia).indexOf(c)>=0?c:ia.UNKNOWN}(c.status);s(new sa(e,c.message))}else s(new sa(ia.UNKNOWN,"Server responded with status "+r.getStatus()))}else s(new sa(ia.UNAVAILABLE,"Connection failed."));break;default:ta()}}finally{Qn(il,`RPC '${e}' ${a} completed.`)}}));const o=JSON.stringify(n);Qn(il,`RPC '${e}' ${a} sending request:`,n),r.send(c,"POST",o,t,15)}))}vo(e,c,t){const n=tl(),a=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Pn(),s=On(),r={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},o=this.longPollingOptions.timeoutSeconds;void 0!==o&&(r.longPollingTimeout=Math.round(1e3*o)),this.useFetchStreams&&(r.useFetchStreams=!0),this.bo(r.initMessageHeaders,c,t),r.encodeInitMessageHeaders=!0;const l=a.join("");Qn(il,`Creating RPC '${e}' stream ${n}: ${l}`,r);const f=i.createWebChannel(l,r);let u=!1,h=!1;const m=new al({co:c=>{h?Qn(il,`Not sending because RPC '${e}' stream ${n} is closed:`,c):(u||(Qn(il,`Opening RPC '${e}' stream ${n} transport.`),f.open(),u=!0),Qn(il,`RPC '${e}' stream ${n} sending:`,c),f.send(c))},lo:()=>f.close()}),d=(e,c,t)=>{e.listen(c,(e=>{try{t(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return d(f,jn.EventType.OPEN,(()=>{h||Qn(il,`RPC '${e}' stream ${n} transport opened.`)})),d(f,jn.EventType.CLOSE,(()=>{h||(h=!0,Qn(il,`RPC '${e}' stream ${n} transport closed`),m.Ro())})),d(f,jn.EventType.ERROR,(c=>{h||(h=!0,ea(il,`RPC '${e}' stream ${n} transport errored:`,c),m.Ro(new sa(ia.UNAVAILABLE,"The operation could not be completed")))})),d(f,jn.EventType.MESSAGE,(c=>{var t;if(!h){const a=c.data[0];na(!!a);const i=a,s=i.error||(null===(t=i[0])||void 0===t?void 0:t.error);if(s){Qn(il,`RPC '${e}' stream ${n} received error:`,s);const c=s.status;let t=function(e){const c=mr[e];if(void 0!==c)return zr(c)}(c),a=s.message;void 0===t&&(t=ia.INTERNAL,a="Unknown error status: "+c+" with message "+s.message),h=!0,m.Ro(new sa(t,a)),f.close()}else Qn(il,`RPC '${e}' stream ${n} received:`,a),m.Vo(a)}})),d(s,Un.STAT_EVENT,(c=>{c.stat===Bn.PROXY?Qn(il,`RPC '${e}' stream ${n} detected buffering proxy`):c.stat===Bn.NOPROXY&&Qn(il,`RPC '${e}' stream ${n} detected no buffering proxy`)})),setTimeout((()=>{m.Ao()}),0),m}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(e){return new Rr(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,c,t=1e3,n=1.5,a=6e4){this.si=e,this.timerId=c,this.Fo=t,this.Mo=n,this.xo=a,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const c=Math.floor(this.Oo+this.qo()),t=Math.max(0,Date.now()-this.Bo),n=Math.max(0,c-t);n>0&&Qn("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.Oo} ms, delay with jitter: ${c} ms, last attempt: ${t} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,n,(()=>(this.Bo=Date.now(),e()))),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){null!==this.No&&(this.No.skipDelay(),this.No=null)}cancel(){null!==this.No&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,c,t,n,a,i,s,r){this.si=e,this.Ko=t,this.$o=n,this.connection=a,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=s,this.listener=r,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new ll(e,c)}jo(){return 1===this.state||5===this.state||this.Ho()}Ho(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&null===this.Wo&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,(()=>this.Xo())))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,c){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,4!==e?this.zo.reset():c&&c.code===ia.RESOURCE_EXHAUSTED?(Xn(c.toString()),Xn("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):c&&c.code===ia.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(c)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),c=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,t])=>{this.Uo===c&&this.s_(e,t)}),(c=>{e((()=>{const e=new sa(ia.UNKNOWN,"Fetching auth token failed: "+c.message);return this.o_(e)}))}))}s_(e,c){const t=this.i_(this.Uo);this.stream=this.__(e,c),this.stream.ho((()=>{t((()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,(()=>(this.Ho()&&(this.state=3),Promise.resolve()))),this.listener.ho())))})),this.stream.Io((e=>{t((()=>this.o_(e)))})),this.stream.onMessage((e=>{t((()=>this.onMessage(e)))}))}Jo(){this.state=5,this.zo.ko((async()=>{this.state=0,this.start()}))}o_(e){return Qn("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return c=>{this.si.enqueueAndForget((()=>this.Uo===e?c():(Qn("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class ul extends fl{constructor(e,c,t,n,a,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",c,t,n,i),this.serializer=a}__(e,c){return this.connection.vo("Listen",e,c)}onMessage(e){this.zo.reset();const c=Yr(this.serializer,e),t=function(e){if(!("targetChange"in e))return Ma.min();const c=e.targetChange;return c.targetIds&&c.targetIds.length?Ma.min():c.readTime?Ur(c.readTime):Ma.min()}(e);return this.listener.a_(c,t)}u_(e){const c={};c.database=Kr(this.serializer),c.addTarget=function(e,c){let t;const n=c.target;if(t=es(n)?{documents:eo(e,n)}:{query:co(e,n)},t.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){t.resumeToken=Dr(e,c.resumeToken);const n=Pr(e,c.expectedCount);null!==n&&(t.expectedCount=n)}else if(c.snapshotVersion.compareTo(Ma.min())>0){t.readTime=Or(e,c.snapshotVersion.toTimestamp());const n=Pr(e,c.expectedCount);null!==n&&(t.expectedCount=n)}return t}(this.serializer,e);const t=no(this.serializer,e);t&&(c.labels=t),this.e_(c)}c_(e){const c={};c.database=Kr(this.serializer),c.removeTarget=e,this.e_(c)}}class hl extends fl{constructor(e,c,t,n,a,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",c,t,n,i),this.serializer=a,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,c){return this.connection.vo("Write",e,c)}onMessage(e){if(na(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const c=Xr(e.writeResults,e.commitTime),t=Ur(e.commitTime);return this.listener.I_(t,c)}return na(!e.writeResults||0===e.writeResults.length),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=Kr(this.serializer),this.e_(e)}P_(e){const c={streamToken:this.lastStreamToken,writes:e.map((e=>Qr(this.serializer,e)))};this.e_(c)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml extends class{}{constructor(e,c,t,n){super(),this.authCredentials=e,this.appCheckCredentials=c,this.connection=t,this.serializer=n,this.d_=!1}A_(){if(this.d_)throw new sa(ia.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,c,t){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([n,a])=>this.connection.wo(e,c,t,n,a))).catch((e=>{throw"FirebaseError"===e.name?(e.code===ia.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new sa(ia.UNKNOWN,e.toString())}))}Co(e,c,t,n){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,i])=>this.connection.Co(e,c,t,a,i,n))).catch((e=>{throw"FirebaseError"===e.name?(e.code===ia.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new sa(ia.UNKNOWN,e.toString())}))}terminate(){this.d_=!0}}class dl{constructor(e,c){this.asyncQueue=e,this.onlineStateHandler=c,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){0===this.V_&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve()))))}w_(e){"Online"===this.state?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,"Online"===e&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const c=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Xn(c),this.f_=!1):Qn("OnlineStateTracker",c)}S_(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,c,t,n,a){this.localStore=e,this.datastore=c,this.asyncQueue=t,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=a,this.F_.ro((e=>{t.enqueueAndForget((async()=>{yl(this)&&(Qn("RemoteStore","Restarting streams for network reachability change."),await async function(e){const c=aa(e);c.C_.add(4),await vl(c),c.M_.set("Unknown"),c.C_.delete(4),await zl(c)}(this))}))})),this.M_=new dl(t,n)}}async function zl(e){if(yl(e))for(const c of e.v_)await c(!0)}async function vl(e){for(const c of e.v_)await c(!1)}function gl(e,c){const t=aa(e);t.D_.has(c.targetId)||(t.D_.set(c.targetId,c),Ll(t)?Cl(t):Bl(t).Ho()&&Vl(t,c))}function Hl(e,c){const t=aa(e),n=Bl(t);t.D_.delete(c),n.Ho()&&Ml(t,c),0===t.D_.size&&(n.Ho()?n.Zo():yl(t)&&t.M_.set("Unknown"))}function Vl(e,c){if(e.x_.Oe(c.targetId),c.resumeToken.approximateByteSize()>0||c.snapshotVersion.compareTo(Ma.min())>0){const t=e.remoteSyncer.getRemoteKeysForTarget(c.targetId).size;c=c.withExpectedCount(t)}Bl(e).u_(c)}function Ml(e,c){e.x_.Oe(c),Bl(e).c_(c)}function Cl(e){e.x_=new kr({getRemoteKeysForTarget:c=>e.remoteSyncer.getRemoteKeysForTarget(c),_t:c=>e.D_.get(c)||null,nt:()=>e.datastore.serializer.databaseId}),Bl(e).start(),e.M_.g_()}function Ll(e){return yl(e)&&!Bl(e).jo()&&e.D_.size>0}function yl(e){return 0===aa(e).C_.size}function bl(e){e.x_=void 0}async function xl(e){e.D_.forEach(((c,t)=>{Vl(e,c)}))}async function wl(e,c){bl(e),Ll(e)?(e.M_.w_(c),Cl(e)):e.M_.set("Unknown")}async function Nl(e,c,t){if(e.M_.set("Online"),c instanceof Nr&&2===c.state&&c.cause)try{await async function(e,c){const t=c.cause;for(const n of c.targetIds)e.D_.has(n)&&(await e.remoteSyncer.rejectListen(n,t),e.D_.delete(n),e.x_.removeTarget(n))}(e,c)}catch(t){Qn("RemoteStore","Failed to remove targets %s: %s ",c.targetIds.join(","),t),await Sl(e,t)}else if(c instanceof xr?e.x_.$e(c):c instanceof wr?e.x_.Je(c):e.x_.Ge(c),!t.isEqual(Ma.min()))try{const c=await jo(e.localStore);t.compareTo(c)>=0&&await function(e,c){const t=e.x_.it(c);return t.targetChanges.forEach(((t,n)=>{if(t.resumeToken.approximateByteSize()>0){const a=e.D_.get(n);a&&e.D_.set(n,a.withResumeToken(t.resumeToken,c))}})),t.targetMismatches.forEach(((c,t)=>{const n=e.D_.get(c);if(!n)return;e.D_.set(c,n.withResumeToken(ei.EMPTY_BYTE_STRING,n.snapshotVersion)),Ml(e,c);const a=new mo(n.target,c,t,n.sequenceNumber);Vl(e,a)})),e.remoteSyncer.applyRemoteEvent(t)}(e,t)}catch(c){Qn("RemoteStore","Failed to raise snapshot:",c),await Sl(e,c)}}async function Sl(e,c,t){if(!Ra(c))throw c;e.C_.add(1),await vl(e),e.M_.set("Offline"),t||(t=()=>jo(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Qn("RemoteStore","Retrying IndexedDB access"),await t(),e.C_.delete(1),await zl(e)}))}function kl(e,c){return c().catch((t=>Sl(e,t,c)))}async function Al(e){const c=aa(e),t=jl(c);let n=c.b_.length>0?c.b_[c.b_.length-1].batchId:-1;for(;_l(c);)try{const e=await Go(c.localStore,n);if(null===e){0===c.b_.length&&t.Zo();break}n=e.batchId,El(c,e)}catch(e){await Sl(c,e)}Tl(c)&&Il(c)}function _l(e){return yl(e)&&e.b_.length<10}function El(e,c){e.b_.push(c);const t=jl(e);t.Ho()&&t.h_&&t.P_(c.mutations)}function Tl(e){return yl(e)&&!jl(e).jo()&&e.b_.length>0}function Il(e){jl(e).start()}async function Rl(e){jl(e).E_()}async function Pl(e){const c=jl(e);for(const t of e.b_)c.P_(t.mutations)}async function Ol(e,c,t){const n=e.b_.shift(),a=fr.from(n,c,t);await kl(e,(()=>e.remoteSyncer.applySuccessfulWrite(a))),await Al(e)}async function Dl(e,c){c&&jl(e).h_&&await async function(e,c){if(function(e){return pr(e)&&e!==ia.ABORTED}(c.code)){const t=e.b_.shift();jl(e).Yo(),await kl(e,(()=>e.remoteSyncer.rejectFailedWrite(t.batchId,c))),await Al(e)}}(e,c),Tl(e)&&Il(e)}async function Fl(e,c){const t=aa(e);t.asyncQueue.verifyOperationInProgress(),Qn("RemoteStore","RemoteStore received new credentials");const n=yl(t);t.C_.add(3),await vl(t),n&&t.M_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(c),t.C_.delete(3),await zl(t)}async function Ul(e,c){const t=aa(e);c?(t.C_.delete(2),await zl(t)):c||(t.C_.add(2),await vl(t),t.M_.set("Unknown"))}function Bl(e){return e.O_||(e.O_=function(e,c,t){const n=aa(e);return n.A_(),new ul(c,n.connection,n.authCredentials,n.appCheckCredentials,n.serializer,t)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{ho:xl.bind(null,e),Io:wl.bind(null,e),a_:Nl.bind(null,e)}),e.v_.push((async c=>{c?(e.O_.Yo(),Ll(e)?Cl(e):e.M_.set("Unknown")):(await e.O_.stop(),bl(e))}))),e.O_}function jl(e){return e.N_||(e.N_=function(e,c,t){const n=aa(e);return n.A_(),new hl(c,n.connection,n.authCredentials,n.appCheckCredentials,n.serializer,t)}(e.datastore,e.asyncQueue,{ho:Rl.bind(null,e),Io:Dl.bind(null,e),T_:Pl.bind(null,e),I_:Ol.bind(null,e)}),e.v_.push((async c=>{c?(e.N_.Yo(),await Al(e)):(await e.N_.stop(),e.b_.length>0&&(Qn("RemoteStore",`Stopping write stream with ${e.b_.length} pending writes`),e.b_=[]))}))),e.N_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ql{constructor(e,c,t,n,a){this.asyncQueue=e,this.timerId=c,this.targetTimeMs=t,this.op=n,this.removalCallback=a,this.deferred=new ra,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,c,t,n,a){const i=Date.now()+t,s=new ql(e,c,i,n,a);return s.start(t),s}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new sa(ia.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $l(e,c){if(Xn("AsyncQueue",`${c}: ${e}`),Ra(e))return new sa(ia.UNAVAILABLE,`${c}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e){this.comparator=e?(c,t)=>e(c,t)||xa.comparator(c.key,t.key):(e,c)=>xa.comparator(e.key,c.key),this.keyedMap=Ms(),this.sortedSet=new Wa(this.comparator)}static emptySet(e){return new Gl(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const c=this.keyedMap.get(e);return c?this.sortedSet.indexOf(c):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((c,t)=>(e(c),!1)))}add(e){const c=this.delete(e.key);return c.copy(c.keyedMap.insert(e.key,e),c.sortedSet.insert(e,null))}delete(e){const c=this.get(e);return c?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(c)):this}isEqual(e){if(!(e instanceof Gl))return!1;if(this.size!==e.size)return!1;const c=this.sortedSet.getIterator(),t=e.sortedSet.getIterator();for(;c.hasNext();){const e=c.getNext().key,n=t.getNext().key;if(!e.isEqual(n))return!1}return!0}toString(){const e=[];return this.forEach((c=>{e.push(c.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,c){const t=new Gl;return t.comparator=this.comparator,t.keyedMap=e,t.sortedSet=c,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(){this.B_=new Wa(xa.comparator)}track(e){const c=e.doc.key,t=this.B_.get(c);t?0!==e.type&&3===t.type?this.B_=this.B_.insert(c,e):3===e.type&&1!==t.type?this.B_=this.B_.insert(c,{type:t.type,doc:e.doc}):2===e.type&&2===t.type?this.B_=this.B_.insert(c,{type:2,doc:e.doc}):2===e.type&&0===t.type?this.B_=this.B_.insert(c,{type:0,doc:e.doc}):1===e.type&&0===t.type?this.B_=this.B_.remove(c):1===e.type&&2===t.type?this.B_=this.B_.insert(c,{type:1,doc:t.doc}):0===e.type&&1===t.type?this.B_=this.B_.insert(c,{type:2,doc:e.doc}):ta():this.B_=this.B_.insert(c,e)}L_(){const e=[];return this.B_.inorderTraversal(((c,t)=>{e.push(t)})),e}}class Kl{constructor(e,c,t,n,a,i,s,r,o){this.query=e,this.docs=c,this.oldDocs=t,this.docChanges=n,this.mutatedKeys=a,this.fromCache=i,this.syncStateChanged=s,this.excludesMetadataChanges=r,this.hasCachedResults=o}static fromInitialDocuments(e,c,t,n,a){const i=[];return c.forEach((e=>{i.push({type:0,doc:e})})),new Kl(e,c,Gl.emptySet(c),i,t,n,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const c=this.docChanges,t=e.docChanges;if(c.length!==t.length)return!1;for(let n=0;n<c.length;n++)if(c[n].type!==t[n].type||!c[n].doc.isEqual(t[n].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(){this.k_=void 0,this.listeners=[]}}class Jl{constructor(){this.queries=new vs((e=>us(e)),fs),this.onlineState="Unknown",this.q_=new Set}}async function Yl(e,c){const t=aa(e),n=c.query;let a=!1,i=t.queries.get(n);if(i||(a=!0,i=new Zl),a)try{i.k_=await t.onListen(n)}catch(e){const t=$l(e,`Initialization of query '${hs(c.query)}' failed`);return void c.onError(t)}t.queries.set(n,i),i.listeners.push(c),c.Q_(t.onlineState),i.k_&&c.K_(i.k_)&&cf(t)}async function Ql(e,c){const t=aa(e),n=c.query;let a=!1;const i=t.queries.get(n);if(i){const e=i.listeners.indexOf(c);e>=0&&(i.listeners.splice(e,1),a=0===i.listeners.length)}if(a)return t.queries.delete(n),t.onUnlisten(n)}function Xl(e,c){const t=aa(e);let n=!1;for(const a of c){const e=a.query,c=t.queries.get(e);if(c){for(const e of c.listeners)e.K_(a)&&(n=!0);c.k_=a}}n&&cf(t)}function ef(e,c,t){const n=aa(e),a=n.queries.get(c);if(a)for(const i of a.listeners)i.onError(t);n.queries.delete(c)}function cf(e){e.q_.forEach((e=>{e.next()}))}class tf{constructor(e,c,t){this.query=e,this.U_=c,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=t||{}}K_(e){if(!this.options.includeMetadataChanges){const c=[];for(const t of e.docChanges)3!==t.type&&c.push(t);e=new Kl(e.query,e.docs,e.oldDocs,c,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let c=!1;return this.W_?this.z_(e)&&(this.U_.next(e),c=!0):this.j_(e,this.onlineState)&&(this.H_(e),c=!0),this.G_=e,c}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let c=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),c=!0),c}j_(e,c){if(!e.fromCache)return!0;const t="Offline"!==c;return(!this.options.J_||!t)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===c)}z_(e){if(e.docChanges.length>0)return!0;const c=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!c)&&!0===this.options.includeMetadataChanges}H_(e){e=Kl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nf{constructor(e){this.key=e}}class af{constructor(e){this.key=e}}class sf{constructor(e,c){this.query=e,this.ia=c,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=Ns(),this.mutatedKeys=Ns(),this._a=ps(e),this.aa=new Gl(this._a)}get ua(){return this.ia}ca(e,c){const t=c?c.la:new Wl,n=c?c.aa:this.aa;let a=c?c.mutatedKeys:this.mutatedKeys,i=n,s=!1;const r="F"===this.query.limitType&&n.size===this.query.limit?n.last():null,o="L"===this.query.limitType&&n.size===this.query.limit?n.first():null;if(e.inorderTraversal(((e,c)=>{const l=n.get(e),f=ms(this.query,c)?c:null,u=!!l&&this.mutatedKeys.has(l.key),h=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let m=!1;l&&f?l.data.isEqual(f.data)?u!==h&&(t.track({type:3,doc:f}),m=!0):this.ha(l,f)||(t.track({type:2,doc:f}),m=!0,(r&&this._a(f,r)>0||o&&this._a(f,o)<0)&&(s=!0)):!l&&f?(t.track({type:0,doc:f}),m=!0):l&&!f&&(t.track({type:1,doc:l}),m=!0,(r||o)&&(s=!0)),m&&(f?(i=i.add(f),a=h?a.add(e):a.delete(e)):(i=i.delete(e),a=a.delete(e)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const e="F"===this.query.limitType?i.last():i.first();i=i.delete(e.key),a=a.delete(e.key),t.track({type:1,doc:e})}return{aa:i,la:t,Zi:s,mutatedKeys:a}}ha(e,c){return e.hasLocalMutations&&c.hasCommittedMutations&&!c.hasLocalMutations}applyChanges(e,c,t,n){const a=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const i=e.la.L_();i.sort(((e,c)=>function(e,c){const t=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ta()}};return t(e)-t(c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,c.type)||this._a(e.doc,c.doc))),this.Pa(t),n=null!=n&&n;const s=c&&!n?this.Ia():[],r=0===this.oa.size&&this.current&&!n?1:0,o=r!==this.sa;return this.sa=r,0!==i.length||o?{snapshot:new Kl(this.query,e.aa,a,i,e.mutatedKeys,0===r,o,!1,!!t&&t.resumeToken.approximateByteSize()>0),Ta:s}:{Ta:s}}Q_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({aa:this.aa,la:new Wl,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach((e=>this.ia=this.ia.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.ia=this.ia.delete(e))),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=Ns(),this.aa.forEach((e=>{this.Ea(e.key)&&(this.oa=this.oa.add(e.key))}));const c=[];return e.forEach((e=>{this.oa.has(e)||c.push(new af(e))})),this.oa.forEach((t=>{e.has(t)||c.push(new nf(t))})),c}da(e){this.ia=e.ls,this.oa=Ns();const c=this.ca(e.documents);return this.applyChanges(c,!0)}Aa(){return Kl.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,0===this.sa,this.hasCachedResults)}}class rf{constructor(e,c,t){this.query=e,this.targetId=c,this.view=t}}class of{constructor(e){this.key=e,this.Ra=!1}}class lf{constructor(e,c,t,n,a,i){this.localStore=e,this.remoteStore=c,this.eventManager=t,this.sharedClientState=n,this.currentUser=a,this.maxConcurrentLimboResolutions=i,this.Va={},this.ma=new vs((e=>us(e)),fs),this.fa=new Map,this.ga=new Set,this.pa=new Wa(xa.comparator),this.ya=new Map,this.wa=new wo,this.Sa={},this.ba=new Map,this.Da=Mo.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return!0===this.Ca}}async function ff(e,c){const t=Sf(e);let n,a;const i=t.ma.get(c);if(i)n=i.targetId,t.sharedClientState.addLocalQueryTarget(n),a=i.view.Aa();else{const e=await Wo(t.localStore,rs(c)),i=t.sharedClientState.addLocalQueryTarget(e.targetId);n=e.targetId,a=await uf(t,c,n,"current"===i,e.resumeToken),t.isPrimaryClient&&gl(t.remoteStore,e)}return a}async function uf(e,c,t,n,a){e.va=(c,t,n)=>async function(e,c,t,n){let a=c.view.ca(t);a.Zi&&(a=await Zo(e.localStore,c.query,!1).then((({documents:e})=>c.view.ca(e,a))));const i=n&&n.targetChanges.get(c.targetId),s=n&&null!=n.targetMismatches.get(c.targetId),r=c.view.applyChanges(a,e.isPrimaryClient,i,s);return Lf(e,c.targetId,r.Ta),r.snapshot}(e,c,t,n);const i=await Zo(e.localStore,c,!0),s=new sf(c,i.ls),r=s.ca(i.documents),o=br.createSynthesizedTargetChangeForCurrentChange(t,n&&"Offline"!==e.onlineState,a),l=s.applyChanges(r,e.isPrimaryClient,o);Lf(e,t,l.Ta);const f=new rf(c,t,s);return e.ma.set(c,f),e.fa.has(t)?e.fa.get(t).push(c):e.fa.set(t,[c]),l.snapshot}async function hf(e,c){const t=aa(e),n=t.ma.get(c),a=t.fa.get(n.targetId);if(a.length>1)return t.fa.set(n.targetId,a.filter((e=>!fs(e,c)))),void t.ma.delete(c);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(n.targetId),t.sharedClientState.isActiveQueryTarget(n.targetId)||await Ko(t.localStore,n.targetId,!1).then((()=>{t.sharedClientState.clearQueryState(n.targetId),Hl(t.remoteStore,n.targetId),Mf(t,n.targetId)})).catch(Ta)):(Mf(t,n.targetId),await Ko(t.localStore,n.targetId,!0))}async function mf(e,c,t){const n=kf(e);try{const e=await function(e,c){const t=aa(e),n=Va.now(),a=c.reduce(((e,c)=>e.add(c.key)),Ns());let i,s;return t.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let r=Hs(),o=Ns();return t.ss.getEntries(e,a).next((e=>{r=e,r.forEach(((e,c)=>{c.isValidDocument()||(o=o.add(e))}))})).next((()=>t.localDocuments.getOverlayedDocuments(e,r))).next((a=>{i=a;const s=[];for(const e of c){const c=er(e,i.get(e.key).overlayedDocument);null!=c&&s.push(new nr(e.key,c,xi(c.value.mapValue),Ks.exists(!0)))}return t.mutationQueue.addMutationBatch(e,n,s,c)})).next((c=>{s=c;const n=c.applyToLocalDocumentSet(i,o);return t.documentOverlayCache.saveOverlays(e,c.batchId,n)}))})).then((()=>({batchId:s.batchId,changes:Cs(i)})))}(n.localStore,c);n.sharedClientState.addPendingMutation(e.batchId),function(e,c,t){let n=e.Sa[e.currentUser.toKey()];n||(n=new Wa(ga)),n=n.insert(c,t),e.Sa[e.currentUser.toKey()]=n}(n,e.batchId,t),await xf(n,e.changes),await Al(n.remoteStore)}catch(e){const c=$l(e,"Failed to persist write");t.reject(c)}}async function df(e,c){const t=aa(e);try{const e=await qo(t.localStore,c);c.targetChanges.forEach(((e,c)=>{const n=t.ya.get(c);n&&(na(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?n.Ra=!0:e.modifiedDocuments.size>0?na(n.Ra):e.removedDocuments.size>0&&(na(n.Ra),n.Ra=!1))})),await xf(t,e,c)}catch(e){await Ta(e)}}function pf(e,c,t){const n=aa(e);if(n.isPrimaryClient&&0===t||!n.isPrimaryClient&&1===t){const e=[];n.ma.forEach(((t,n)=>{const a=n.view.Q_(c);a.snapshot&&e.push(a.snapshot)})),function(e,c){const t=aa(e);t.onlineState=c;let n=!1;t.queries.forEach(((e,t)=>{for(const a of t.listeners)a.Q_(c)&&(n=!0)})),n&&cf(t)}(n.eventManager,c),e.length&&n.Va.a_(e),n.onlineState=c,n.isPrimaryClient&&n.sharedClientState.setOnlineState(c)}}async function zf(e,c,t){const n=aa(e);n.sharedClientState.updateQueryState(c,"rejected",t);const a=n.ya.get(c),i=a&&a.key;if(i){let e=new Wa(xa.comparator);e=e.insert(i,wi.newNoDocument(i,Ma.min()));const t=Ns().add(i),a=new yr(Ma.min(),new Map,new Wa(ga),e,t);await df(n,a),n.pa=n.pa.remove(i),n.ya.delete(c),bf(n)}else await Ko(n.localStore,c,!1).then((()=>Mf(n,c,t))).catch(Ta)}async function vf(e,c){const t=aa(e),n=c.batch.batchId;try{const e=await Bo(t.localStore,c);Vf(t,n,null),Hf(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await xf(t,e)}catch(e){await Ta(e)}}async function gf(e,c,t){const n=aa(e);try{const e=await function(e,c){const t=aa(e);return t.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let n;return t.mutationQueue.lookupMutationBatch(e,c).next((c=>(na(null!==c),n=c.keys(),t.mutationQueue.removeMutationBatch(e,c)))).next((()=>t.mutationQueue.performConsistencyCheck(e))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(e,n,c))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n))).next((()=>t.localDocuments.getDocuments(e,n)))}))}(n.localStore,c);Vf(n,c,t),Hf(n,c),n.sharedClientState.updateMutationState(c,"rejected",t),await xf(n,e)}catch(t){await Ta(t)}}function Hf(e,c){(e.ba.get(c)||[]).forEach((e=>{e.resolve()})),e.ba.delete(c)}function Vf(e,c,t){const n=aa(e);let a=n.Sa[n.currentUser.toKey()];if(a){const e=a.get(c);e&&(t?e.reject(t):e.resolve(),a=a.remove(c)),n.Sa[n.currentUser.toKey()]=a}}function Mf(e,c,t=null){e.sharedClientState.removeLocalQueryTarget(c);for(const n of e.fa.get(c))e.ma.delete(n),t&&e.Va.Fa(n,t);e.fa.delete(c),e.isPrimaryClient&&e.wa.Rr(c).forEach((c=>{e.wa.containsKey(c)||Cf(e,c)}))}function Cf(e,c){e.ga.delete(c.path.canonicalString());const t=e.pa.get(c);null!==t&&(Hl(e.remoteStore,t),e.pa=e.pa.remove(c),e.ya.delete(t),bf(e))}function Lf(e,c,t){for(const n of t)n instanceof nf?(e.wa.addReference(n.key,c),yf(e,n)):n instanceof af?(Qn("SyncEngine","Document no longer in limbo: "+n.key),e.wa.removeReference(n.key,c),e.wa.containsKey(n.key)||Cf(e,n.key)):ta()}function yf(e,c){const t=c.key,n=t.path.canonicalString();e.pa.get(t)||e.ga.has(n)||(Qn("SyncEngine","New document in limbo: "+t),e.ga.add(n),bf(e))}function bf(e){for(;e.ga.size>0&&e.pa.size<e.maxConcurrentLimboResolutions;){const c=e.ga.values().next().value;e.ga.delete(c);const t=new xa(La.fromString(c)),n=e.Da.next();e.ya.set(n,new of(t)),e.pa=e.pa.insert(t,n),gl(e.remoteStore,new mo(rs(ns(t.path)),n,"TargetPurposeLimboResolution",Pa._e))}}async function xf(e,c,t){const n=aa(e),a=[],i=[],s=[];n.ma.isEmpty()||(n.ma.forEach(((e,r)=>{s.push(n.va(r,c,t).then((e=>{if((e||t)&&n.isPrimaryClient&&n.sharedClientState.updateQueryState(r.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){a.push(e);const c=Ro.Qi(r.targetId,e);i.push(c)}})))})),await Promise.all(s),n.Va.a_(a),await async function(e,c){const t=aa(e);try{await t.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Ia.forEach(c,(c=>Ia.forEach(c.ki,(n=>t.persistence.referenceDelegate.addReference(e,c.targetId,n))).next((()=>Ia.forEach(c.qi,(n=>t.persistence.referenceDelegate.removeReference(e,c.targetId,n)))))))))}catch(e){if(!Ra(e))throw e;Qn("LocalStore","Failed to update sequence numbers: "+e)}for(const n of c){const e=n.targetId;if(!n.fromCache){const c=t.ts.get(e),n=c.snapshotVersion,a=c.withLastLimboFreeSnapshotVersion(n);t.ts=t.ts.insert(e,a)}}}(n.localStore,i))}async function wf(e,c){const t=aa(e);if(!t.currentUser.isEqual(c)){Qn("SyncEngine","User change. New user:",c.toKey());const e=await Uo(t.localStore,c);t.currentUser=c,function(e,c){e.ba.forEach((e=>{e.forEach((e=>{e.reject(new sa(ia.CANCELLED,c))}))})),e.ba.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(c,e.removedBatchIds,e.addedBatchIds),await xf(t,e._s)}}function Nf(e,c){const t=aa(e),n=t.ya.get(c);if(n&&n.Ra)return Ns().add(n.key);{let e=Ns();const n=t.fa.get(c);if(!n)return e;for(const c of n){const n=t.ma.get(c);e=e.unionWith(n.view.ua)}return e}}function Sf(e){const c=aa(e);return c.remoteStore.remoteSyncer.applyRemoteEvent=df.bind(null,c),c.remoteStore.remoteSyncer.getRemoteKeysForTarget=Nf.bind(null,c),c.remoteStore.remoteSyncer.rejectListen=zf.bind(null,c),c.Va.a_=Xl.bind(null,c.eventManager),c.Va.Fa=ef.bind(null,c.eventManager),c}function kf(e){const c=aa(e);return c.remoteStore.remoteSyncer.applySuccessfulWrite=vf.bind(null,c),c.remoteStore.remoteSyncer.rejectFailedWrite=gf.bind(null,c),c}class Af{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ol(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,c){return null}createIndexBackfillerScheduler(e,c){return null}createLocalStore(e){return Fo(this.persistence,new Oo,e.initialUser,this.serializer)}createPersistence(e){return new Eo(Io.jr,this.serializer)}createSharedClientState(e){return new Qo}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class _f{async initialize(e,c){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(c),this.remoteStore=this.createRemoteStore(c),this.eventManager=this.createEventManager(c),this.syncEngine=this.createSyncEngine(c,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>pf(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=wf.bind(null,this.syncEngine),await Ul(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Jl}()}createDatastore(e){const c=ol(e.databaseInfo.databaseId),t=function(e){return new sl(e)}(e.databaseInfo);return function(e,c,t,n){return new ml(e,c,t,n)}(e.authCredentials,e.appCheckCredentials,t,c)}createRemoteStore(e){return function(e,c,t,n,a){return new pl(e,c,t,n,a)}(this.localStore,this.datastore,e.asyncQueue,(e=>pf(this.syncEngine,e,0)),function(){return el.D()?new el:new Xo}())}createSyncEngine(e,c){return function(e,c,t,n,a,i,s){const r=new lf(e,c,t,n,a,i);return s&&(r.Ca=!0),r}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,c)}terminate(){return async function(e){const c=aa(e);Qn("RemoteStore","RemoteStore shutting down."),c.C_.add(5),await vl(c),c.F_.shutdown(),c.M_.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ef{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):Xn("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,c){this.muted||setTimeout((()=>{this.muted||e(c)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tf{constructor(e,c,t,n){this.authCredentials=e,this.appCheckCredentials=c,this.asyncQueue=t,this.databaseInfo=n,this.user=Kn.UNAUTHENTICATED,this.clientId=va.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(t,(async e=>{Qn("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(t,(e=>(Qn("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new sa(ia.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ra;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(c){const t=$l(c,"Failed to shutdown persistence");e.reject(t)}})),e.promise}}async function If(e,c){e.asyncQueue.verifyOperationInProgress(),Qn("FirestoreClient","Initializing OfflineComponentProvider");const t=await e.getConfiguration();await c.initialize(t);let n=t.initialUser;e.setCredentialChangeListener((async e=>{n.isEqual(e)||(await Uo(c.localStore,e),n=e)})),c.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=c}async function Rf(e,c){e.asyncQueue.verifyOperationInProgress();const t=await Of(e);Qn("FirestoreClient","Initializing OnlineComponentProvider");const n=await e.getConfiguration();await c.initialize(t,n),e.setCredentialChangeListener((e=>Fl(c.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,t)=>Fl(c.remoteStore,t))),e._onlineComponents=c}function Pf(e){return"FirebaseError"===e.name?e.code===ia.FAILED_PRECONDITION||e.code===ia.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function Of(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Qn("FirestoreClient","Using user provided OfflineComponentProvider");try{await If(e,e._uninitializedComponentsProvider._offline)}catch(c){const t=c;if(!Pf(t))throw t;ea("Error using user provided cache. Falling back to memory cache: "+t),await If(e,new Af)}}else Qn("FirestoreClient","Using default OfflineComponentProvider"),await If(e,new Af);return e._offlineComponents}async function Df(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Qn("FirestoreClient","Using user provided OnlineComponentProvider"),await Rf(e,e._uninitializedComponentsProvider._online)):(Qn("FirestoreClient","Using default OnlineComponentProvider"),await Rf(e,new _f))),e._onlineComponents}function Ff(e){return Df(e).then((e=>e.syncEngine))}async function Uf(e){const c=await Df(e),t=c.eventManager;return t.onListen=ff.bind(null,c.syncEngine),t.onUnlisten=hf.bind(null,c.syncEngine),t}function Bf(e,c,t={}){const n=new ra;return e.asyncQueue.enqueueAndForget((async()=>function(e,c,t,n,a){const i=new Ef({next:i=>{c.enqueueAndForget((()=>Ql(e,s)));const r=i.docs.has(t);!r&&i.fromCache?a.reject(new sa(ia.UNAVAILABLE,"Failed to get document because the client is offline.")):r&&i.fromCache&&n&&"server"===n.source?a.reject(new sa(ia.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):a.resolve(i)},error:e=>a.reject(e)}),s=new tf(ns(t.path),i,{includeMetadataChanges:!0,J_:!0});return Yl(e,s)}(await Uf(e),e.asyncQueue,c,t,n))),n.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function jf(e){const c={};return void 0!==e.timeoutSeconds&&(c.timeoutSeconds=e.timeoutSeconds),c
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const qf=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(e,c,t){if(!t)throw new sa(ia.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${c}.`)}function Gf(e,c,t,n){if(!0===c&&!0===n)throw new sa(ia.INVALID_ARGUMENT,`${e} and ${t} cannot be used together.`)}function Wf(e){if(!xa.isDocumentKey(e))throw new sa(ia.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Kf(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const c=function(e){return e.constructor?e.constructor.name:null}(e);return c?`a custom ${c} object`:"an object"}}return"function"==typeof e?"a function":ta()}function Zf(e,c){if("_delegate"in e&&(e=e._delegate),!(e instanceof c)){if(c.name===e.constructor.name)throw new sa(ia.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Kf(e);throw new sa(ia.INVALID_ARGUMENT,`Expected type '${c.name}', but it was: ${t}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jf{constructor(e){var c,t;if(void 0===e.host){if(void 0!==e.ssl)throw new sa(ia.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(c=e.ssl)||void 0===c||c;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new sa(ia.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Gf("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jf(null!==(t=e.experimentalLongPollingOptions)&&void 0!==t?t:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new sa(ia.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new sa(ia.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new sa(ia.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,c){return e.timeoutSeconds===c.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Yf{constructor(e,c,t,n){this._authCredentials=e,this._appCheckCredentials=c,this._databaseId=t,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new sa(ia.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new sa(ia.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jf(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new la;switch(e.type){case"firstParty":return new ma(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new sa(ia.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const c=qf.get(e);c&&(Qn("ComponentProvider","Removing Datastore"),qf.delete(e),c.terminate())}(this),Promise.resolve()}}function Qf(e,c,t,n={}){var a;const i=(e=Zf(e,Yf))._getSettings(),s=`${c}:${t}`;if("firestore.googleapis.com"!==i.host&&i.host!==s&&ea("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:s,ssl:!1})),n.mockUserToken){let c,t;if("string"==typeof n.mockUserToken)c=n.mockUserToken,t=Kn.MOCK_USER;else{c=(0,r.Sg)(n.mockUserToken,null===(a=e._app)||void 0===a?void 0:a.options.projectId);const i=n.mockUserToken.sub||n.mockUserToken.user_id;if(!i)throw new sa(ia.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");t=new Kn(i)}e._authCredentials=new fa(new oa(c,t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,c,t){this.converter=c,this._query=t,this.type="query",this.firestore=e}withConverter(e){return new Xf(this.firestore,e,this._query)}}class eu{constructor(e,c,t){this.converter=c,this._key=t,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new cu(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new eu(this.firestore,e,this._key)}}class cu extends Xf{constructor(e,c,t){super(e,c,ns(t)),this._path=t,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new eu(this.firestore,null,new xa(e))}withConverter(e){return new cu(this.firestore,e,this._path)}}function tu(e,c,...t){if(e=(0,r.m9)(e),1===arguments.length&&(c=va.newId()),$f("doc","path",c),e instanceof Yf){const n=La.fromString(c,...t);return Wf(n),new eu(e,null,new xa(n))}{if(!(e instanceof eu||e instanceof cu))throw new sa(ia.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=e._path.child(La.fromString(c,...t));return Wf(n),new eu(e.firestore,e instanceof cu?e.converter:null,new xa(n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nu{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new ll(this,"async_queue_retry"),this.iu=()=>{const e=rl();e&&Qn("AsyncQueue","Visibility state changed to "+e.visibilityState),this.zo.Qo()};const e=rl();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const c=rl();c&&"function"==typeof c.removeEventListener&&c.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise((()=>{}));const c=new ra;return this.ou((()=>this.Za&&this.nu?Promise.resolve():(e().then(c.resolve,c.reject),c.promise))).then((()=>c.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Ya.push(e),this._u())))}async _u(){if(0!==this.Ya.length){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!Ra(e))throw e;Qn("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko((()=>this._u()))}}ou(e){const c=this.Ja.then((()=>(this.tu=!0,e().catch((e=>{this.eu=e,this.tu=!1;const c=function(e){let c=e.message||"";return e.stack&&(c=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),c}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw Xn("INTERNAL UNHANDLED ERROR: ",c),e})).then((e=>(this.tu=!1,e))))));return this.Ja=c,c}enqueueAfterDelay(e,c,t){this.su(),this.ru.indexOf(e)>-1&&(c=0);const n=ql.createAndSchedule(this,e,c,t,(e=>this.au(e)));return this.Xa.push(n),n}su(){this.eu&&ta()}verifyOperationInProgress(){}async uu(){let e;do{e=this.Ja,await e}while(e!==this.Ja)}cu(e){for(const c of this.Xa)if(c.timerId===e)return!0;return!1}lu(e){return this.uu().then((()=>{this.Xa.sort(((e,c)=>e.targetTimeMs-c.targetTimeMs));for(const c of this.Xa)if(c.skipDelay(),"all"!==e&&c.timerId===e)break;return this.uu()}))}hu(e){this.ru.push(e)}au(e){const c=this.Xa.indexOf(e);this.Xa.splice(c,1)}}class au extends Yf{constructor(e,c,t,n){super(e,c,t,n),this.type="firestore",this._queue=function(){return new nu}(),this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ru(this),this._firestoreClient.terminate()}}function iu(e,c){const t="object"==typeof e?e:(0,a.Mq)(),n="string"==typeof e?e:c||"(default)",i=(0,a.qX)(t,"firestore").getImmediate({identifier:n});if(!i._initialized){const e=(0,r.P0)("firestore");e&&Qf(i,...e)}return i}function su(e){return e._firestoreClient||ru(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function ru(e){var c,t,n;const a=e._freezeSettings(),i=function(e,c,t,n){return new oi(e,c,t,n.host,n.ssl,n.experimentalForceLongPolling,n.experimentalAutoDetectLongPolling,jf(n.experimentalLongPollingOptions),n.useFetchStreams)}(e._databaseId,(null===(c=e._app)||void 0===c?void 0:c.options.appId)||"",e._persistenceKey,a);e._firestoreClient=new Tf(e._authCredentials,e._appCheckCredentials,e._queue,i),(null===(t=a.localCache)||void 0===t?void 0:t._offlineComponentProvider)&&(null===(n=a.localCache)||void 0===n?void 0:n._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:a.localCache.kind,_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ou{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ou(ei.fromBase64String(e))}catch(e){throw new sa(ia.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new ou(ei.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(...e){for(let c=0;c<e.length;++c)if(0===e[c].length)throw new sa(ia.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ba(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fu{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,c){if(!isFinite(e)||e<-90||e>90)throw new sa(ia.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(c)||c<-180||c>180)throw new sa(ia.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+c);this._lat=e,this._long=c}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ga(this._lat,e._lat)||ga(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,c,t,n,a){this._firestore=e,this._userDataWriter=c,this._key=t,this._document=n,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new eu(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Su(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const c=this._document.data.field(ku("DocumentSnapshot.get",e));if(null!==c)return this._userDataWriter.convertValue(c)}}}class Su extends Nu{data(){return super.data()}}function ku(e,c){return"string"==typeof c?bu(e,c):c instanceof lu?c._internalPath:c._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{convertValue(e,c="none"){switch(ui(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ni(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,c);case 5:return e.stringValue;case 6:return this.convertBytes(ai(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,c);case 10:return this.convertObject(e.mapValue,c);default:throw ta()}}convertObject(e,c){return this.convertObjectMap(e.fields,c)}convertObjectMap(e,c="none"){const t={};return $a(e,((e,n)=>{t[e]=this.convertValue(n,c)})),t}convertGeoPoint(e){return new uu(ni(e.latitude),ni(e.longitude))}convertArray(e,c){return(e.values||[]).map((e=>this.convertValue(e,c)))}convertServerTimestamp(e,c){switch(c){case"previous":const t=si(e);return null==t?null:this.convertValue(t,c);case"estimate":return this.convertTimestamp(ri(e));default:return null}}convertTimestamp(e){const c=ti(e);return new Va(c.seconds,c.nanos)}convertDocumentKey(e,c){const t=La.fromString(e);na(ho(t));const n=new li(t.get(1),t.get(3)),a=new xa(t.popFirst(5));return n.isEqual(c)||Xn(`Document ${a} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${c.projectId}/${c.database}) instead.`),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(e,c,t){let n;return n=e?t&&(t.merge||t.mergeFields)?e.toFirestore(c,t):e.toFirestore(c):c,n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 *
 *
 */
/**
 * @license