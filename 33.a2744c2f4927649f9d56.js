/*! For license information please see 33.a2744c2f4927649f9d56.js.LICENSE.txt */
"use strict";(self.webpackChunkrm_frontend=self.webpackChunkrm_frontend||[]).push([[33],{1275:function(t,e,r){var n,o,i;r.d(e,{FU:function(){return i},i2:function(){return n},uI:function(){return o}}),function(t){t.click="click",t.mousemove="mousemove",t.hover="hover",t.scroll="scroll"}(n||(n={})),function(t){t.horizontally="horizontally",t.vertically="vertically"}(o||(o={})),function(t){t.bottom="bottom",t.center="center",t.top="top"}(i||(i={}))},1397:function(t,e,r){r.d(e,{n:function(){return n}});var n=(0,r(583).createContext)({model:{pageScale:1,pageContentTop:0,magContainerHeight:0,widgetBoxTop:0,isStarted:!1,canBeUsed:!0,isSelected:!1}})},1396:function(t,e,r){r.r(e);var n=r(1303),o=r(335),i=r.n(o),a=r(902),s=r(1397),c=r(1275),u=r(609),l=r(625);function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function f(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return p(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){s=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw i}}}}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){v(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function v(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==h(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===h(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function y(){y=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),s=new E(o||[]);return n(a,"_invoke",{value:L(t,r,s)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f={};function p(){}function d(){}function g(){}var v={};c(v,i,(function(){return this}));var m=Object.getPrototypeOf,b=m&&m(m(P([])));b&&b!==e&&r.call(b,i)&&(v=b);var w=g.prototype=p.prototype=Object.create(v);function x(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function o(n,i,a,s){var c=l(t[n],t,i);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==h(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,s)}),(function(t){o("throw",t,a,s)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return o("throw",t,a,s)}))}s(c.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function L(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return j()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=T(a,r);if(s){if(s===f)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=l(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function T(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,T(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function P(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return d.prototype=g,n(w,"constructor",{value:g,configurable:!0}),n(g,"constructor",{value:d,configurable:!0}),d.displayName=c(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(S.prototype),c(S.prototype,a,(function(){return this})),t.AsyncIterator=S,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new S(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),c(w,s,"Generator"),c(w,i,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=P,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function m(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}function b(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){m(i,n,o,a,s,"next",t)}function s(t){m(i,n,o,a,s,"throw",t)}a(void 0)}))}}var w,x,S=n.Z.extend({triggerWidgets:[],initialize:function(t,e,r){this.model=new(i().Model)(t),this.isAllImagesLoaded=!1,n.Z.prototype.initialize.apply(this,[t,e,r])},render:(x=b(y().mark((function t(){var e,n,o,c,u=this;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.basePath&&this.numberOfImages){t.next=2;break}return t.abrupt("return");case 2:return this.makeBox("widget-shots"),t.next=5,Promise.resolve().then(r.bind(r,902));case 5:return e=t.sent,n=e.renderReact,t.next=9,Promise.all([r.e(30),r.e(20),r.e(57),r.e(31)]).then(r.bind(r,1715));case 9:return o=t.sent,c=o.Shots,this.stateModel=new(i().Model)(this.getCurrentState()),n({component:function(){return(0,l.jsx)(a.CreateContextProvider,{context:s.n,model:u.stateModel,children:(0,l.jsx)(c,{mode:window.RM.screenshot?"screenshoter":"viewer",onFirstRender:u.onFirstRender,onFirstFrameLoaded:u.widgetIsLoaded,onAllImagesLoaded:u.onAllImagesLoaded})})},domElement:this.el,model:this.model}),t.abrupt("return",this);case 15:case"end":return t.stop()}}),t,this)}))),function(){return x.apply(this,arguments)}),getCurrentState:function(){return{pageScale:this.page.scale,pageContentTop:this.page.contentPosition.top,magContainerHeight:this.page.mag.getContainerSizeCached().height,widgetBoxTop:this.calcBoxStyle({calcBBox:!0}).dimensions.top}},getViewerType:function(){return this.page.mag&&this.page.mag.viewOpts&&this.page.mag.viewOpts.viewertype||"vertical"},onFirstRender:function(){var t;(this.rendered=!0,this._scheduleStart&&this.start(),this.playbackType===c.i2.scroll)&&(t=this.isAbove()&&"vertical"===this.getViewerType()?this.page.mag.getScroll():this.page.getScroll(),this.handleScroll(t))},handleScroll:function(t){this.rendered&&this.stateModel.set(g(g({},this.getCurrentState()),{},{currentScrollOffset:t}))},handlePointerMovement:function(t){if(this.rendered){"touches"in t&&"horizontal"===this.getViewerType()&&this.hoverDirection===c.uI.horizontally&&t.stopPropagation();var e="touches"in t?t.touches[0].clientX:t.clientX,r="touches"in t?t.touches[0].clientY:t.clientY,n=t.target;if(n){var o=n.getBoundingClientRect(),i=u.Z.isCSSTransform()?1:this.page.scale,a=e/i-o.left,s=r/i-o.top;this.hoverDirection===c.uI.horizontally?this.stateModel.set({hoverPercent:a/o.width}):this.hoverDirection===c.uI.vertically&&this.stateModel.set({hoverPercent:s/o.height})}}},getTriggerWidgets:(w=b(y().mark((function t(){var e,r,n,o,i=this;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=[],r=f(this.triggers),t.prev=2,o=y().mark((function t(){var r,o;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.value,t.prev=1,t.next=4,i.page.mag.getWidgetById(r,i.page);case 4:o=t.sent,t.next=10;break;case 7:return t.prev=7,t.t0=t.catch(1),t.abrupt("return","continue");case 10:if(o){t.next=12;break}return t.abrupt("return","continue");case 12:if(!o.rendered){t.next=16;break}e.push(o),t.next=19;break;case 16:return t.next=18,new Promise((function(t){return i.listenToOnce(o,"rendered",t)}));case 18:e.push(o);case 19:case"end":return t.stop()}}),t,null,[[1,7]])})),r.s();case 5:if((n=r.n()).done){t.next=12;break}return t.delegateYield(o(),"t0",7);case 7:if("continue"!==t.t0){t.next=10;break}return t.abrupt("continue",10);case 10:t.next=5;break;case 12:t.next=17;break;case 14:t.prev=14,t.t1=t.catch(2),r.e(t.t1);case 17:return t.prev=17,r.f(),t.finish(17);case 20:return e.length||e.push(this),t.abrupt("return",e);case 22:case"end":return t.stop()}}),t,this,[[2,14,17,20]])}))),function(){return w.apply(this,arguments)}),bindTriggers:function(t,e){var r=this;return b(y().mark((function n(){return y().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.getTriggerWidgets();case 2:r.triggerWidgets=n.sent,r.triggerWidgets.forEach((function(r){if(r.el instanceof HTMLElement){var n,o=f(t);try{for(o.s();!(n=o.n()).done;){var i=n.value;r.el.addEventListener(i,e)}}catch(t){o.e(t)}finally{o.f()}}}));case 4:case"end":return n.stop()}}),n)})))()},unbindTriggers:function(t,e){this.triggerWidgets.forEach((function(r){if(r.el instanceof HTMLElement){var n,o=f(t);try{for(o.s();!(n=o.n()).done;){var i=n.value;r.el.removeEventListener(i,e)}}catch(t){o.e(t)}finally{o.f()}}}))},handleContext:function(t){t.preventDefault()},handlePointerHover:function(t){"touchstart"===t.type&&t.target.setAttribute("draggable","true"),"touchend"!==t.type&&"touchcancel"!==t.type||t.target.removeAttribute("draggable"),this.stateModel.set({mouseIn:"mouseenter"===t.type||"touchstart"===t.type})},handleMouseHoverInitCursor:function(t){var e=t.target;if(e){var r=e.getBoundingClientRect(),n=t.pageX>=r.x&&t.pageX<=r.x+r.width,o=t.pageY>=r.y&&t.pageY<=r.y+r.height,i=n&&o;this.stateModel.set({mouseIn:i}),this.unbindTriggers(["mousemove"],this.handleMouseHoverInitCursor)}},handleClick:function(){this.stateModel.set({mouseIn:!this.stateModel.get("mouseIn")})},onAllImagesLoaded:function(){var t=this;this.isAllImagesLoaded=!0,this.playbackType===c.i2.hover?(this.bindTriggers(["mouseenter","mouseleave","touchstart","touchend","touchcancel"],this.handlePointerHover),Modernizr.ismobile&&this.bindTriggers(["contextmenu"],this.handleContext)):this.playbackType===c.i2.click&&this.bindTriggers(["click"],this.handleClick).then((function(){t.triggerWidgets.forEach((function(t){t.el instanceof HTMLElement&&t.el.classList.add("interactive")}))}))},start:function(){for(var t=this,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];n.Z.prototype.start.apply(this,r),this.rendered?(this.playbackType===c.i2.scroll?this.isAbove()&&"vertical"===this.getViewerType()?this.listenTo(this.page.mag,"mag scroll",this.handleScroll):this.listenTo(this.page,"page scroll",this.handleScroll):(this.playbackType===c.i2.hover&&void 0===this.pausable||this.playbackType===c.i2.mousemove)&&this.bindTriggers(["mousemove","touchmove"],this.handlePointerMovement),setTimeout((function(){t.stateModel.set({isStarted:!0})}),1),this.isAllImagesLoaded&&this.onAllImagesLoaded()):this._scheduleStart=!0},stop:function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];n.Z.prototype.stop.apply(this,e),this.rendered&&(this.stopListening(),this.unbindTriggers(["mousemove","touchmove"],this.handlePointerMovement),this.unbindTriggers(["mouseenter","mouseleave","touchstart","touchend","touchcancel"],this.handlePointerHover),this.unbindTriggers(["contextmenu"],this.handleContext),this.unbindTriggers(["click"],this.handleClick),this.stateModel.set({isStarted:!1}))},destroy:function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];n.Z.prototype.destroy.apply(this,e)}});e.default=S}}]);