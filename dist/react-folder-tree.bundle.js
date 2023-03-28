!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.FolderTree=t(require("react")):e.FolderTree=t(e.react)}(self,(e=>(()=>{var t={703:(e,t,n)=>{"use strict";var r=n(414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,c){if(c!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},697:(e,t,n)=>{e.exports=n(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},880:(e,t,n)=>{var r;self,e.exports=(r=n(156),(()=>{"use strict";var e={297:e=>{e.exports=r}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{n.r(o),n.d(o,{default:()=>H,findAllTargetPathByProp:()=>k,findTargetNode:()=>d,findTargetPathByProp:()=>E,testData:()=>I});var e=n(297);function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=l(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){i=!0,a=e},f:function(){try{c||null==n.return||n.return()}finally{if(i)throw a}}}}function l(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s=function(e){return JSON.parse(JSON.stringify(e))},d=function(e,t){var n,r=e,o=i(t);try{for(o.s();!(n=o.n()).done;){var a=n.value,c=r.children;if(a>=c.length||a<0)throw new Error("finding node failed: invalid path!!");r=c[a]}}catch(e){o.e(e)}finally{o.f()}return r},f=function e(t){var n=t.children,r=t._id;return n?Math.max.apply(Math,[r].concat(c(n.map(e)))):r},p=function(e){var t=0;return function e(n){n._id=t,t+=1;var r=n.children;if(r){var o,a=i(r);try{for(a.s();!(o=a.n()).done;)e(o.value)}catch(e){a.e(e)}finally{a.f()}}return n}(s(e))},h=function e(t,n){t.checked=n;var o=t.children;if(o){var a,c=i(o);try{for(c.s();!(a=c.n()).done;)e(a.value,n)}catch(e){c.e(e)}finally{c.f()}}return r({},t)},m=h,y=function e(t){if(0!==t.length){var n=t.pop();n.checked=function(e){var t=e.children;if(!(null!=t&&t.length)>0)return e.checked;var n,r=0,o=i(t);try{for(o.s();!(n=o.n()).done;)r+=n.value.checked}catch(e){o.e(e)}finally{o.f()}var a=.5;return r===t.length?a=1:0===r&&(a=0),a}(n),e(t)}},v=function(e,t,n){var o,a=e,c=[a],l=i(t);try{for(l.s();!(o=l.n()).done;){var u=o.value;a=a.children[u],c.push(a)}}catch(e){l.e(e)}finally{l.f()}return h(a,n),c.pop(),y(c),r({},e)},b=function(e,t,n){return d(e,t).name=n,r({},e)},g=function(e,t){var n=e;if(0===t.length)return n.children=[],n.checked=0,n;var o,a=[n],c=t.pop(),l=i(t);try{for(l.s();!(o=l.n()).done;){var u=o.value;n=n.children[u],a.push(n)}}catch(e){l.e(e)}finally{l.f()}return n.children.splice(c,1),y(a),r({},e)},O=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=f(e)+1,a=d(e,t),c=a.children;if(!c)throw new Error("can't add node to a file!!");return n?c.push({_id:o,name:"new folder",checked:Math.floor(a.checked),children:[]}):c.unshift({_id:o,name:"new file",checked:Math.floor(a.checked)}),r({},e)},w=function(e,t,n){var o=d(e,t);if(!o.children)throw new Error("only parent node (folder) can be opened!!");return o.isOpen=n,r({},e)},j=function e(t,n){var o=r({},t),a=o.children;return a&&(o.isOpen=n,o.children=a.map((function(t){return e(t,n)}))),o},S=function e(t){var n=t.children,r=t.isOpen;if(n&&void 0===r)return!1;if(!n&&void 0!==r)return!1;if(n){var o,a=i(n);try{for(a.s();!(o=a.n()).done;)if(!e(o.value))return!1}catch(e){a.e(e)}finally{a.f()}}return!0},C=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return{type:e,path:t,params:r}},k=function(e,t,n){var r=[];return function e(o,a){o[t]===n&&r.push(s(a));var i=o.children;i&&i.forEach((function(t,n){return e(t,[].concat(c(a),[n]))}))}(e,[]),r},E=function(e,t,n){var r=k(e,t,n);return r.length>0?r[0]:null},I={name:"All Cryptos",children:[{name:"Bitcoin"},{name:"Etherium"},{name:"Polkadot"},{name:"POW",children:[{name:"Bitcoin"},{name:"Litecoin"},{name:"Bitcoin Cash"}]},{name:"Public Chains",children:[{name:"Ripple"},{name:"Chainlink"},{name:"POW",children:[{name:"Bitcoin"},{name:"Litecoin"},{name:"Bitcoin Cash"}]},{name:"POS",children:[{name:"Etherium"},{name:"EOS"},{name:"Crosschain",children:[{name:"Polkadot"},{name:"Cosmos"}]}]}]}]};function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){return function(e){if(Array.isArray(e))return T(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||A(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,a=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);c=!0);}catch(e){i=!0,o=e}finally{try{c||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,t)||A(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){if(e){if("string"==typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?T(e,t):void 0}}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const H=function(t){var n=t.data,r=t.onChange,o=t.options,a=void 0===o?{}:o,c=t.customReducers,i=void 0===c?{}:c,l=D((0,e.useState)(null),2),u=l[0],s=l[1],d=D((0,e.useState)({type:"initialization",path:null,params:[]}),2),f=d[0],h=d[1],y=a.initCheckedStatus,k=a.initOpenStatus;(0,e.useEffect)((function(){var e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"unchecked",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"open",r=p(e);switch(t){case"unchecked":r=m(r,0);break;case"checked":r=m(r,1)}switch(n){case"open":r=j(r,!0);break;case"closed":r=j(r,!1);break;default:S(r)||(console.log("custom open status is invalid! Fell back to all opened."),r=j(r,!0))}return r}(n,y,k);s(e)}),[n,y,k]),(0,e.useEffect)((function(){"function"==typeof r&&u&&f&&r(u,f)}),[u,f]);var E=function(e,t){return function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];var c=C.apply(void 0,[t,x(n)].concat(o)),i=e.apply(void 0,[u,x(n)].concat(o));h(c),s(i)}},I=Object.fromEntries(Object.entries(i).map((function(e){var t=D(e,2),n=t[0],r=t[1];return[n,E(r,n)]}))),A=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({setTreeState:function(e){var t=C("setTreeState",null,e);h(t),s(e)},checkNode:E(v,"checkNode"),renameNode:E(b,"renameNode"),deleteNode:E(g,"deleteNode"),addNode:E(O,"addNode"),toggleOpen:E(w,"toggleOpen")},I);return{treeState:u,reducers:A}}})(),o})())},156:t=>{"use strict";t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{"use strict";r.r(o),r.d(o,{default:()=>$,findAllTargetPathByProp:()=>c.findAllTargetPathByProp,findTargetNode:()=>c.findTargetNode,findTargetPathByProp:()=>c.findTargetPathByProp,testData:()=>c.testData});var e=r(156),t=r.n(e),n=r(697),a=r.n(n),c=r(880),i=r.n(c),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},u=t().createContext&&t().createContext(l),s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},s.apply(this,arguments)},d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function f(e){return e&&e.map((function(e,n){return t().createElement(e.tag,s({key:n},e.attr),f(e.child))}))}function p(e){return function(n){return t().createElement(h,s({attr:s({},e.attr)},n),f(e.child))}}function h(e){var n=function(n){var r,o=e.attr,a=e.size,c=e.title,i=d(e,["attr","size","title"]),l=a||n.size||"1em";return n.className&&(r=n.className),e.className&&(r=(r?r+" ":"")+e.className),t().createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,i,{className:r,style:s(s({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),c&&t().createElement("title",null,c),e.children)};return void 0!==u?t().createElement(u.Consumer,null,(function(e){return n(e)})):n(l)}function m(e){return p({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}}]})(e)}function y(e){return p({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"}}]})(e)}function v(e){return p({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]})(e)}function b(e){return p({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]})(e)}function g(e){return p({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]})(e)}function O(e){return p({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]})(e)}function w(e){return p({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494zM544 472c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v108H372c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h108v108c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V644h108c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V472z"}}]})(e)}function j(e){return p({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494z"}}]})(e)}function S(e){return p({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M484 443.1V528h-84.5c-4.1 0-7.5 3.1-7.5 7v42c0 3.8 3.4 7 7.5 7H484v84.9c0 3.9 3.2 7.1 7 7.1h42c3.9 0 7-3.2 7-7.1V584h84.5c4.1 0 7.5-3.2 7.5-7v-42c0-3.9-3.4-7-7.5-7H540v-84.9c0-3.9-3.1-7.1-7-7.1h-42c-3.8 0-7 3.2-7 7.1zm396-144.7H521L403.7 186.2a8.15 8.15 0 0 0-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"}}]})(e)}function C(e){return p({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 0 0-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z"}}]})(e)}function k(e){return p({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M880 298.4H521L403.7 186.2a8.15 8.15 0 0 0-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"}}]})(e)}var E=function(n){var r=n.status,o=n.onChange,a=1===r,c=.5===r,i=(0,e.useRef)(null);return(0,e.useLayoutEffect)((function(){var e=null==i?void 0:i.current;e&&(e.indeterminate=c)})),t().createElement("div",{className:"CheckBox"},t().createElement("input",{className:"checkboxDOM",type:"checkbox",checked:a,onChange:o,ref:i}))};E.propTypes={status:a().number.isRequired,onChange:a().func.isRequired};const I=E,P=(0,e.createContext)(null);var N=function(e){return"iconContainer ".concat(e)},x=function(e){return"icon ".concat(e)},D=function(e){return function(n){var r=n.className,o=n.onClick;return t().createElement(e,{className:r,onClick:o})}};function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var T=function(n){var r,o,a=n.isEditing,c=n.isDark,i=n.isHighlighted,l=n.setIsEditing,u=n.onNameChange,s=n.OKIcon,d=n.CancelIcon,f=n.nodeData,p=f.name,h=(r=(0,e.useState)(p),o=2,function(e){if(Array.isArray(e))return e}(r)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,c,i=[],l=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=a.call(n)).done)&&(i.push(r.value),i.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(u)throw o}}return i}}(r,o)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}(r,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),m=h[0],y=h[1],v=t().createElement("span",{className:"editingName"},t().createElement("input",{type:"text",value:m,onChange:function(e){return y(e.target.value)}}),t().createElement("span",{className:N("editableNameToolbar")},t().createElement(s,{className:x("OKIcon"),onClick:function(){u(m),l(!1)},nodeData:f}),t().createElement(d,{className:x("CancelIcon"),onClick:function(){y(p),l(!1)},nodeData:f}))),b="displayName";i||(b="displayName "+"".concat(c?" react-folder-tree-text-dark":" react-folder-tree-text-light"));var g=t().createElement("span",{className:b},p);return t().createElement("span",{className:"EditableName"},a?v:g)};T.propTypes={isEditing:a().bool.isRequired,setIsEditing:a().func.isRequired,onNameChange:a().func.isRequired,OKIcon:a().func.isRequired,CancelIcon:a().func.isRequired,nodeData:a().object.isRequired};const H=T;function M(e){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(e)}var z=["path","name","checked","isOpen","selectedId","setSelectedId","isDark","children"];function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}function L(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,c,i=[],l=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=a.call(n)).done)&&(i.push(r.value),i.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(u)throw o}}return i}}(e,t)||R(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,t){if(e){if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==M(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==M(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===M(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var q=function n(r){var o=r.path,a=r.name,c=r.checked,i=r.isOpen,l=r.selectedId,u=r.setSelectedId,s=r.isDark,d=r.children,f=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(r,z),p=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){F(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({path:o,name:a,checked:c,isOpen:i},f),h=(0,e.useContext)(P),E=h.handleCheck,A=h.handleRename,T=h.handleDelete,M=h.handleAddNode,q=h.handleToggleOpen,U=h.iconComponents,W=h.indentPixels,K=h.onNameClick,$=h.showCheckbox,J=h.readOnly,Y=!!d,G={marginLeft:o.length*W},Q=L((0,e.useState)(!1),2),X=Q[0],Z=Q[1],ee=L((0,e.useState)(!1),2),te=ee[0],ne=ee[1],re=U.FileIcon,oe=void 0===re?D(j):re,ae=U.FolderIcon,ce=void 0===ae?D(k):ae,ie=U.FolderOpenIcon,le=void 0===ie?D(C):ie,ue=U.EditIcon,se=void 0===ue?D(O):ue,de=U.DeleteIcon,fe=void 0===de?D(g):de,pe=U.CancelIcon,he=void 0===pe?D(b):pe,me=U.AddFileIcon,ye=void 0===me?D(w):me,ve=U.AddFolderIcon,be=void 0===ve?D(S):ve,ge=U.CaretRightIcon,Oe=void 0===ge?D(y):ge,we=U.CaretDownIcon,je=void 0===we?D(m):we,Se=U.OKIcon,Ce=void 0===Se?D(v):Se,ke=function(){return!te&&!J&&Z(!0)},Ee=t().createElement("span",{className:N("TreeNodeToolBar")},t().createElement(se,{className:x("EditIcon"),onClick:function(){ne(!0),Z(!1)},nodeData:p}),t().createElement(fe,{className:x("DeleteIcon"),onClick:function(){return T(o)},nodeData:p}),Y&&t().createElement(t().Fragment,null,t().createElement(ye,{className:x("AddFileIcon"),onClick:function(){return M(o,!1)},nodeData:p}),t().createElement(be,{className:x("AddFolderIcon"),onClick:function(){return M(o,!0)},nodeData:p})),t().createElement(he,{className:x("CancelIcon"),onClick:function(){return Z(!1)},nodeData:p})),Ie=t().createElement("span",{className:N("caretContainer")},i?t().createElement(je,{className:x("CaretDownIcon"),onClick:function(){return q(o,!1)},nodeData:p}):t().createElement(Oe,{className:x("CaretRightIcon"),onClick:function(){return q(o,!0)},nodeData:p})),Pe=p.name===l;return t().createElement(t().Fragment,null,t().createElement("div",{className:"TreeNode",style:G},$&&t().createElement(I,{status:c,onChange:function(e){if(!J){var t=+e.target.checked;E(o,t)}}}),Y&&Ie,t().createElement("span",{className:N("typeIconContainer")},!Y&&t().createElement(oe,{color:"green",className:x(oe),onClick:ke,nodeData:p}),Y&&i&&t().createElement(le,{color:"green",className:x(le),onClick:ke,nodeData:p}),Y&&!i&&t().createElement(ce,{color:"green",className:x(ce),onClick:ke,nodeData:p})),t().createElement("span",{className:N("editableNameContainer")+"".concat(Pe?" react-folder-tree-selected":""),onClick:function(e){console.log("DSE :: handleNameClick.isDark",s),u(p.name);var t=ke;K&&"function"==typeof K?!te&&K({defaultOnClick:t,nodeData:p}):t()}},t().createElement(H,{isEditing:te,setIsEditing:ne,onNameChange:function(e){return A(o,e)},OKIcon:Ce,CancelIcon:he,nodeData:p,isDark:s,isHighlighted:Pe})),X&&Ee),Y&&i&&d.map((function(e,r){return t().createElement(n,B({selectedId:l,setSelectedId:u,isDark:s,key:e._id,path:[].concat((a=o,function(e){if(Array.isArray(e))return _(e)}(a)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(a)||R(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),[r])},e));var a})))};q.propTypes={path:a().array.isRequired,name:a().string.isRequired,checked:a().number.isRequired,isOpen:a().bool,children:a().array};const U=q;function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W.apply(this,arguments)}var K=function(e){var n=e.data,r=e.isDark,o=e.selectedId,a=e.setSelectedId,c=e.onChange,l=void 0===c?console.log:c,u=e.initCheckedStatus,s=void 0===u?"unchecked":u,d=e.initOpenStatus,f=void 0===d?"open":d,p=e.iconComponents,h=void 0===p?{}:p,m=e.showCheckbox,y=void 0===m||m,v=e.indentPixels,b=void 0===v?30:v,g=e.onNameClick,O=void 0===g?null:g,w=e.readOnly,j=void 0!==w&&w,S={initCheckedStatus:s,initOpenStatus:f},C=i()({data:n,options:S,onChange:l}),k=C.treeState,E=C.reducers,I=E.checkNode,N=E.renameNode,x=E.deleteNode,D=E.addNode,A=E.toggleOpen;if(!k)return null;var T={handleCheck:I,handleRename:N,handleDelete:x,handleAddNode:D,handleToggleOpen:A,onNameClick:O,iconComponents:h,indentPixels:b,showCheckbox:y,readOnly:j};return t().createElement("div",{className:"FolderTree"},t().createElement(P.Provider,{value:T},t().createElement(U,W({isDark:r,selectedId:o,setSelectedId:a,key:k._id,path:[]},k))))};K.propTypes={data:a().object.isRequired,onChange:a().func,initCheckedStatus:a().string,initOpenStatus:a().string,iconComponents:a().shape({FileIcon:a().func,FolderIcon:a().func,FolderOpenIcon:a().func,EditIcon:a().func,DeleteIcon:a().func,CancelIcon:a().func,AddFileIcon:a().func,AddFolderIcon:a().func,CaretRightIcon:a().func,CaretDownIcon:a().func}),indentPixels:a().number,onNameClick:a().func,showCheckbox:a().bool,readOnly:a().bool};const $=K})(),o})()));