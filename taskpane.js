/*! For license information please see taskpane.js.LICENSE.txt */
!function(){"use strict";var t={58394:function(t,e,r){t.exports=r.p+"5766d056f6c31b4382b7.css"}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.m=t,r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&(!t||!/^http(s?):/.test(t));)t=n[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t}(),r.b=document.baseURI||self.location.href,function(){var t=function(t){return t.Design="designmode",t.RealData="sixmlrpc",t}({});function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function r(){r=function(){return n};var t,n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),c=new N(n||[]);return a(i,"_invoke",{value:P(t,r,c)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var v="suspendedStart",d="suspendedYield",y="executing",m="completed",g={};function w(){}function b(){}function E(){}var x={};f(x,u,(function(){return this}));var L=Object.getPrototypeOf,k=L&&L(L(B([])));k&&k!==o&&i.call(k,u)&&(x=k);var S=E.prototype=w.prototype=Object.create(x);function O(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,r){function n(o,a,c,u){var l=p(t[o],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==e(f)&&i.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,u)}))}u(l.arg)}var o;a(this,"_invoke",{value:function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}})}function P(e,r,n){var o=v;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=I(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var l=p(e,r,n);if("normal"===l.type){if(o=n.done?m:d,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=m,n.method="throw",n.arg=l.arg)}}}function I(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,I(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function B(r){if(r||""===r){var n=r[u];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function e(){for(;++o<r.length;)if(i.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError(e(r)+" is not iterable")}return b.prototype=E,a(S,"constructor",{value:E,configurable:!0}),a(E,"constructor",{value:b,configurable:!0}),b.displayName=f(E,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,f(t,s,"GeneratorFunction")),t.prototype=Object.create(S),t},n.awrap=function(t){return{__await:t}},O(j.prototype),f(j.prototype,l,(function(){return this})),n.AsyncIterator=j,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new j(h(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(S),f(S,s,"Generator"),f(S,u,(function(){return this})),f(S,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=B,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(_),!e)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:B(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},n}function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}var i=function(){var t=o(r().mark((function t(e,n,o,i,a){var c,u;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{o&&((o="string"==typeof(r=o)&&isNaN(Number(r))?r.toUpperCase():"".concat(r)).includes("=SIHOT")||o.includes("=@SIHOT"))&&(c=n.getCell(i,a),u=o,c.formulas=[[""]],e.sync(),c.formulas=[[u]],e.sync())}catch(t){console.error("Calculation error at ".concat(o,"(").concat(i,", ").concat(a,"):"),t)}case 1:case"end":return t.stop()}var r}),t)})));return function(e,r,n,o,i){return t.apply(this,arguments)}}(),a=function(){var t=o(r().mark((function t(e,n){var a;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n.load("name"),t.next=4,e.sync();case 4:return a=n.getUsedRange(),e.trackedObjects.add(a),a.load("formulas"),t.next=9,e.sync();case 9:a.formulas.forEach((function(t,n){t.forEach(function(){var t=o(r().mark((function t(o,c){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i(e,a,o,n,c);case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}())})),e.trackedObjects.remove(a),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.error("Full calculation error:",t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e,r){return t.apply(this,arguments)}}(),c=function(){var t=o(r().mark((function t(){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Excel.run(function(){var t=o(r().mark((function t(e){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a(e,e.workbook.worksheets.getActiveWorksheet());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=o(r().mark((function t(){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Excel.run(function(){var t=o(r().mark((function t(e){var n,i;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=e.workbook.worksheets).load("items"),t.next=4,e.sync();case 4:return i=n.items.map(function(){var t=o(r().mark((function t(n){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a(e,n);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=7,Promise.all(i);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(){s=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var i=e&&e.prototype instanceof w?e:w,a=Object.create(i.prototype),c=new N(n||[]);return o(a,"_invoke",{value:P(t,r,c)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var v="suspendedStart",d="suspendedYield",y="executing",m="completed",g={};function w(){}function b(){}function E(){}var x={};f(x,a,(function(){return this}));var L=Object.getPrototypeOf,k=L&&L(L(B([])));k&&k!==r&&n.call(k,a)&&(x=k);var S=E.prototype=w.prototype=Object.create(x);function O(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,i,a,c){var u=p(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==l(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function P(e,r,n){var o=v;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=I(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var l=p(e,r,n);if("normal"===l.type){if(o=n.done?m:d,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=m,n.method="throw",n.arg=l.arg)}}}function I(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,I(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function B(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(l(e)+" is not iterable")}return b.prototype=E,o(S,"constructor",{value:E,configurable:!0}),o(E,"constructor",{value:b,configurable:!0}),b.displayName=f(E,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,f(t,u,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},O(j.prototype),f(j.prototype,c,(function(){return this})),e.AsyncIterator=j,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new j(h(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(S),f(S,u,"Generator"),f(S,a,(function(){return this})),f(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=B,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(_),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:B(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function f(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function h(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){f(i,n,o,a,c,"next",t)}function c(t){f(i,n,o,a,c,"throw",t)}a(void 0)}))}}var p=function(t,e){return null==t?void 0:t.getElementById(e)},v=function(t,e){var r;return null==t||null===(r=t.getElementById(e))||void 0===r?void 0:r.classList.contains("selected")},d=function(t,e){var r;return!(null!=t&&null!==(r=t.getElementById(e))&&void 0!==r&&r.classList.contains("hidden"))},y=function(t){var e=t.getElementById("datacenter");return!!e&&e.checked},m=function(e,r){if(r){var n=atob(r.auth).split(":");n&&n.length>1&&(p(e,"username").value=n[0],p(e,"password").value=n[1]),p(e,"url").value=r.url,p(e,"port").value=r.port,r.mode===t.Design?e.getElementById("mode").classList.contains("selected")||e.getElementById("mode").classList.add("selected"):e.getElementById("mode").classList.contains("selected")&&e.getElementById("mode").classList.remove("selected")}},g=function(e){var r=p(e,"username").value,n=p(e,"password").value,o={auth:btoa("".concat(r,":").concat(n)),url:p(e,"url").value,port:d(e,"port")?p(e,"port").value:"",mode:v(e,"mode")?t.Design:t.RealData};return localStorage.setItem("configuration",JSON.stringify(o)),Office.context.document.settings.saveAsync(),o},w=function(t,e){var r=t.getElementsByTagName(e);return r&&r.length>0?r[0].innerHTML:null},b=function(){var t=h(s().mark((function t(e,r){var n,o,i,a;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=function(t,e){var r,n=atob(t.auth).split(":");return n&&n.length>1&&(r=n[0]),'<?xml version="1.0" ?>\n<XMLRPC-Config>\n<Credentials>\n<Username>'.concat(r,"</Username>\n<Authentification>").concat(t.auth,"</Authentification>\n</Credentials>\n<Server>\n<URL>").concat(t.url,"</URL>\n<Port>").concat(t.port,"</Port>\n<EnvType>").concat(e,"</EnvType>\n</Server>\n</XMLRPC-Config>")},t.prev=1,t.next=4,window.showSaveFilePicker({suggestedName:"config.xml",types:[{description:"XML Files",accept:{"application/xml":[".xml"]}}]});case 4:return o=t.sent,t.next=7,o.createWritable();case 7:return i=t.sent,a=n(e,r),t.next=11,i.write(a);case 11:return t.next=13,i.close();case 13:t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),console.error("Error saving file:",t.t0);case 18:case"end":return t.stop()}}),t,null,[[1,15]])})));return function(e,r){return t.apply(this,arguments)}}();Office.onReady((function(){var e,r=document.querySelectorAll('input[name="host"]'),n=document.querySelectorAll('label[for="onPremise"], label[for="datacenter"]');r.forEach((function(t){t.addEventListener("change",(function(t){"datacenter"===t.currentTarget.value?function(t,e){var r,n;d(t,e)&&(null==t||null===(r=t.getElementById("".concat(e,"Label")))||void 0===r||r.classList.add("hidden"),null==t||null===(n=t.getElementById(e))||void 0===n||n.classList.add("hidden"))}(document,"port"):function(t,e){var r,n;d(t,e)||(null==t||null===(r=t.getElementById("".concat(e,"Label")))||void 0===r||r.classList.remove("hidden"),null==t||null===(n=t.getElementById(e))||void 0===n||n.classList.remove("hidden"))}(document,"port")}))})),n.forEach((function(t){t.addEventListener("click",(function(t){var e=p(document,t.currentTarget.getAttribute("for"));e&&(e.checked=!0,e.dispatchEvent(new Event("change")))}))})),document.getElementById("loginForm").addEventListener("submit",function(){var t=h(s().mark((function t(e){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),g(document);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),document.getElementById("saveToFile").addEventListener("click",function(){var t=h(s().mark((function t(e){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),b(g(document),y(document));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),document.getElementById("calcSheet").onclick=c,document.getElementById("calcFull").onclick=u,document.querySelector(".toggle-button").addEventListener("click",(function(t){t.currentTarget.classList.toggle("selected")})),null===(e=document.getElementById("load"))||void 0===e||e.addEventListener("click",(function(){!function(e){var r=e.createElement("input");r.type="file",r.style.display="none",r.addEventListener("change",(function(r){var n,o=null===(n=r.target.files)||void 0===n?void 0:n[0];if(o){var i=new FileReader;i.onload=function(r){var n,o=null===(n=r.target)||void 0===n?void 0:n.result;if(o){var i=function(t){var e=(new DOMParser).parseFromString(t,"application/xml"),r=e.getElementsByTagName("parsererror");if(r.length>0)throw new Error("Error parsing XML: ".concat(r[0].textContent));return e}(o.toString()),a=w(i,"EnvType");!function(t,e){var r=t.getElementById(e?"datacenter":"onPremise");r&&(r.checked=!0,r.dispatchEvent(new Event("change")))}(e,null===a||!!a);var c={auth:w(i,"Authentification"),url:w(i,"URL"),port:w(i,"EnvType")?"":w(i,"Port"),mode:t.RealData};m(e,c)}},i.onerror=function(t){console.error("Error reading file:",t)},i.readAsText(o)}})),r.click()}(document)}));try{var o=JSON.parse(localStorage.getItem("configuration"));m(document,o)}catch(t){console.error(t)}}))}(),new URL(r(58394),r.b)}();
//# sourceMappingURL=taskpane.js.map