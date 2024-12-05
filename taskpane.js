/*! For license information please see taskpane.js.LICENSE.txt */
!function(){"use strict";var t={58394:function(t,e,r){t.exports=r.p+"ca067cada5b98279a7b2.css"}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.m=t,r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&(!t||!/^http(s?):/.test(t));)t=n[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t}(),r.b=document.baseURI||self.location.href,function(){var t=function(t){return t.Design="designmode",t.RealData="sixmlrpc",t}({});function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function r(){r=function(){return n};var t,n={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,a=Object.create(o.prototype),c=new N(n||[]);return i(a,"_invoke",{value:j(t,r,c)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var d="suspendedStart",v="suspendedYield",y="executing",m="completed",g={};function w(){}function b(){}function x(){}var E={};f(E,u,(function(){return this}));var L=Object.getPrototypeOf,k=L&&L(L(B([])));k&&k!==o&&a.call(k,u)&&(E=k);var S=x.prototype=w.prototype=Object.create(E);function O(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function I(t,r){function n(o,i,c,u){var s=p(t[o],t,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==e(f)&&a.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var o;i(this,"_invoke",{value:function(t,e){function a(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(a,a):a()}})}function j(e,r,n){var o=d;return function(a,i){if(o===y)throw Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var s=p(e,r,n);if("normal"===s.type){if(o=n.done?m:v,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=p(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function B(r){if(r||""===r){var n=r[u];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(a.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(e(r)+" is not iterable")}return b.prototype=x,i(S,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:b,configurable:!0}),b.displayName=f(x,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,l,"GeneratorFunction")),t.prototype=Object.create(S),t},n.awrap=function(t){return{__await:t}},O(I.prototype),f(I.prototype,s,(function(){return this})),n.AsyncIterator=I,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var i=new I(h(t,e,r,o),a);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},O(S),f(S,l,"Generator"),f(S,u,(function(){return this})),f(S,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=B,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(_),!e)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:B(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},n}function n(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return o(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){u=!0,i=t},f:function(){try{c||null==r.return||r.return()}finally{if(u)throw i}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function a(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function c(t){a(i,n,o,c,u,"next",t)}function u(t){a(i,n,o,c,u,"throw",t)}c(void 0)}))}}var c=function(t){return"string"==typeof t&&isNaN(Number(t))?t.toUpperCase():"".concat(t)},u=function(){var t=i(r().mark((function t(){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Excel.run(function(){var t=i(r().mark((function t(e){var o,a,i,u,s,l,f,h,p,d,v,y;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(o=e.workbook.worksheets).load("items/name"),t.next=4,e.sync();case 4:a=n(o.items),t.prev=5,a.s();case 7:if((i=a.n()).done){t.next=53;break}return u=i.value,(s=u.getUsedRange()).load(["formulas","address"]),t.next=13,e.sync();case 13:if(!s.formulas){t.next=51;break}l=n(s.formulas),t.prev=15,l.s();case 17:if((f=l.n()).done){t.next=43;break}h=f.value,p=n(h),t.prev=20,p.s();case 22:if((d=p.n()).done){t.next=33;break}if("string"!=typeof(v=d.value)){t.next=31;break}if(!(y=c(v)).includes("!")&&!y.includes("[")||!y.includes("SIHOT")){t.next=31;break}if(y.replace(/'.*?'!|".*?"!|[[\]]/g,"")===y){t.next=31;break}return console.log("Match found:",v),t.abrupt("return",!0);case 31:t.next=22;break;case 33:t.next=38;break;case 35:t.prev=35,t.t0=t.catch(20),p.e(t.t0);case 38:return t.prev=38,p.f(),t.finish(38);case 41:t.next=17;break;case 43:t.next=48;break;case 45:t.prev=45,t.t1=t.catch(15),l.e(t.t1);case 48:return t.prev=48,l.f(),t.finish(48);case 51:t.next=7;break;case 53:t.next=58;break;case 55:t.prev=55,t.t2=t.catch(5),a.e(t.t2);case 58:return t.prev=58,a.f(),t.finish(58);case 61:return t.abrupt("return",!1);case 62:case"end":return t.stop()}}),t,null,[[5,55,58,61],[15,45,48,51],[20,35,38,41]])})));return function(e){return t.apply(this,arguments)}}());case 3:return t.abrupt("return",t.sent);case 6:return t.prev=6,t.t0=t.catch(0),t.abrupt("return",!1);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=i(r().mark((function t(){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Excel.run(function(){var t=i(r().mark((function t(e){var o,a,i,u,s,l;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(o=e.workbook.worksheets).load("items/name"),t.next=4,e.sync();case 4:a=n(o.items),t.prev=5,a.s();case 7:if((i=a.n()).done){t.next=20;break}return u=i.value,(s=u.getUsedRange()).load(["formulas","address"]),t.next=13,e.sync();case 13:if(!s.formulas){t.next=18;break}return l=s.formulas.map((function(t){return t.map((function(t){return"string"==typeof t&&((t=c(t)).includes("!")||t.includes("["))&&t.includes("SIHOT")?t.replace(/'.*?'!|".*?"!|[[\]]/g,""):t}))})),s.formulas=l,t.next=18,e.sync();case 18:t.next=7;break;case 20:t.next=25;break;case 22:t.prev=22,t.t0=t.catch(5),a.e(t.t0);case 25:return t.prev=25,a.f(),t.finish(25);case 28:case"end":return t.stop()}}),t,null,[[5,22,25,28]])})));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=i(r().mark((function t(e,n,o,a,i){var u,s;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{o&&((o=c(o)).includes("=SIHOT")||o.includes("=@SIHOT"))&&(u=n.getCell(a,i),s=o,u.formulas=[[""]],e.sync(),u.formulas=[[s]],e.sync())}catch(t){console.error("Calculation error at ".concat(o,"(").concat(a,", ").concat(i,"):"),t)}case 1:case"end":return t.stop()}}),t)})));return function(e,r,n,o,a){return t.apply(this,arguments)}}(),f=function(){var t=i(r().mark((function t(e,n){var o;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n.load("name"),t.next=4,e.sync();case 4:return o=n.getUsedRange(),e.trackedObjects.add(o),o.load("formulas"),t.next=9,e.sync();case 9:o.formulas.forEach((function(t,n){t.forEach(function(){var t=i(r().mark((function t(a,i){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:l(e,o,a,n,i);case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}())})),e.trackedObjects.remove(o),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.error("Full calculation error:",t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e,r){return t.apply(this,arguments)}}(),h=function(){var t=i(r().mark((function t(){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Excel.run(function(){var t=i(r().mark((function t(e){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(e,e.workbook.worksheets.getActiveWorksheet());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=i(r().mark((function t(){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Excel.run(function(){var t=i(r().mark((function t(e){var n,o;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=e.workbook.worksheets).load("items"),t.next=4,e.sync();case 4:return o=n.items.map(function(){var t=i(r().mark((function t(n){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:f(e,n);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=7,Promise.all(o);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function v(){v=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof w?e:w,i=Object.create(a.prototype),c=new N(n||[]);return o(i,"_invoke",{value:j(t,r,c)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var h="suspendedStart",p="suspendedYield",y="executing",m="completed",g={};function w(){}function b(){}function x(){}var E={};s(E,i,(function(){return this}));var L=Object.getPrototypeOf,k=L&&L(L(B([])));k&&k!==r&&n.call(k,i)&&(E=k);var S=x.prototype=w.prototype=Object.create(E);function O(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function I(t,e){function r(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==d(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function j(e,r,n){var o=h;return function(a,i){if(o===y)throw Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var s=f(e,r,n);if("normal"===s.type){if(o=n.done?m:p,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=f(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function B(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(d(e)+" is not iterable")}return b.prototype=x,o(S,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:b,configurable:!0}),b.displayName=s(x,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,s(t,u,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},O(I.prototype),s(I.prototype,c,(function(){return this})),e.AsyncIterator=I,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new I(l(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},O(S),s(S,u,"Generator"),s(S,i,(function(){return this})),s(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=B,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(_),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:B(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function y(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function m(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){y(a,n,o,i,c,"next",t)}function c(t){y(a,n,o,i,c,"throw",t)}i(void 0)}))}}var g=function(t,e){return null==t?void 0:t.getElementById(e)},w=function(t,e){var r;return null==t||null===(r=t.getElementById(e))||void 0===r?void 0:r.classList.contains("selected")},b=function(t,e){var r,n;E(t,e)&&(null==t||null===(r=t.getElementById("".concat(e,"Label")))||void 0===r||r.classList.add("hidden"),null==t||null===(n=t.getElementById(e))||void 0===n||n.classList.add("hidden"))},x=function(t,e){var r,n;E(t,e)||(null==t||null===(r=t.getElementById("".concat(e,"Label")))||void 0===r||r.classList.remove("hidden"),null==t||null===(n=t.getElementById(e))||void 0===n||n.classList.remove("hidden"))},E=function(t,e){var r;return!(null!=t&&null!==(r=t.getElementById(e))&&void 0!==r&&r.classList.contains("hidden"))},L=function(t){var e=t.getElementById("datacenter");return!!e&&e.checked},k=function(e,r){if(r){var n=atob(r.auth).split(":");n&&n.length>1&&(g(e,"username").value=n[0],g(e,"password").value=n[1]),g(e,"url").value=r.url,g(e,"port").value=r.port,r.mode===t.Design?e.getElementById("mode").classList.contains("selected")||e.getElementById("mode").classList.add("selected"):e.getElementById("mode").classList.contains("selected")&&e.getElementById("mode").classList.remove("selected")}},S=function(e){var r=g(e,"username").value,n=g(e,"password").value,o={auth:btoa("".concat(r,":").concat(n)),url:g(e,"url").value,port:E(e,"port")?g(e,"port").value:"",mode:w(e,"mode")?t.Design:t.RealData};return localStorage.setItem("configuration",JSON.stringify(o)),Office.context.document.settings.saveAsync(),o},O=function(t,e){var r=t.getElementsByTagName(e);return r&&r.length>0?r[0].innerHTML:null},I=function(e){var r=e.createElement("input");r.type="file",r.style.display="none",r.addEventListener("change",(function(r){var n,o=null===(n=r.target.files)||void 0===n?void 0:n[0];if(o){var a=new FileReader;a.onload=function(r){var n,o=null===(n=r.target)||void 0===n?void 0:n.result;if(o){var a=function(t){var e=(new DOMParser).parseFromString(t,"application/xml"),r=e.getElementsByTagName("parsererror");if(r.length>0)throw new Error("Error parsing XML: ".concat(r[0].textContent));return e}(o.toString()),i=O(a,"EnvType");!function(t,e){var r=t.getElementById(e?"datacenter":"onPremise");r&&(r.checked=!0,r.dispatchEvent(new Event("change")))}(e,null===i||!!i);var c={auth:O(a,"Authentification"),url:O(a,"URL"),port:O(a,"EnvType")?"":O(a,"Port"),mode:t.RealData};k(e,c)}},a.onerror=function(t){console.error("Error reading file:",t)},a.readAsText(o)}})),r.click()},j=function(){var t=m(v().mark((function t(e,r){var n,o,a,i;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=function(t,e){var r,n=atob(t.auth).split(":");return n&&n.length>1&&(r=n[0]),'<?xml version="1.0" ?>\n<XMLRPC-Config>\n<Credentials>\n<Username>'.concat(r,"</Username>\n<Authentification>").concat(t.auth,"</Authentification>\n</Credentials>\n<Server>\n<URL>").concat(t.url,"</URL>\n<Port>").concat(t.port,"</Port>\n<EnvType>").concat(e,"</EnvType>\n</Server>\n</XMLRPC-Config>")},t.prev=1,t.next=4,window.showSaveFilePicker({suggestedName:"config.xml",types:[{description:"XML Files",accept:{"application/xml":[".xml"]}}]});case 4:return o=t.sent,t.next=7,o.createWritable();case 7:return a=t.sent,i=n(e,r),t.next=11,a.write(i);case 11:return t.next=13,a.close();case 13:t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),console.error("Error saving file:",t.t0);case 18:case"end":return t.stop()}}),t,null,[[1,15]])})));return function(e,r){return t.apply(this,arguments)}}(),P=function(){document.getElementById("migrationPopup").style.display="none"},T=function(){var t=m(v().mark((function t(){return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s();case 2:P();case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Office.onReady(m(v().mark((function t(){var e,r,n,o;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return document.getElementById("migrateYes").onclick=T,document.getElementById("migrateNo").onclick=P,t.next=4,u();case 4:if(!t.sent){t.next=6;break}document.getElementById("migrationPopup").style.display="flex";case 6:r=document.querySelectorAll('input[name="host"]'),n=document.querySelectorAll('label[for="onPremise"], label[for="datacenter"]'),r.forEach((function(t){t.addEventListener("change",(function(t){"datacenter"===t.currentTarget.value?b(document,"port"):x(document,"port")}))})),n.forEach((function(t){t.addEventListener("click",(function(t){var e=g(document,t.currentTarget.getAttribute("for"));e&&(e.checked=!0,e.dispatchEvent(new Event("change")))}))})),document.getElementById("loginForm").addEventListener("submit",function(){var t=m(v().mark((function t(e){return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),S(document);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),document.getElementById("saveToFile").addEventListener("click",function(){var t=m(v().mark((function t(e){return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),j(S(document),L(document));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),document.getElementById("calcSheet").onclick=h,document.getElementById("calcFull").onclick=p,document.querySelector(".toggle-button").addEventListener("click",(function(t){t.currentTarget.classList.toggle("selected")})),null===(e=document.getElementById("load"))||void 0===e||e.addEventListener("click",(function(){I(document)}));try{o=JSON.parse(localStorage.getItem("configuration")),k(document,o)}catch(t){console.error(t)}case 17:case"end":return t.stop()}}),t)}))))}(),new URL(r(58394),r.b)}();
//# sourceMappingURL=taskpane.js.map