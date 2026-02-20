(function(){try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('.image-tool{--bg-color: #cdd1e0;--front-color: #388ae5;--border-color: #e8e8eb}.image-tool__image{border-radius:3px;overflow:hidden;margin-bottom:10px}.image-tool__image-picture{max-width:100%;vertical-align:bottom;display:block}.image-tool__image-preloader{width:50px;height:50px;border-radius:50%;background-size:cover;margin:auto;position:relative;background-color:var(--bg-color);background-position:center center}.image-tool__image-preloader:after{content:"";position:absolute;z-index:3;width:60px;height:60px;border-radius:50%;border:2px solid var(--bg-color);border-top-color:var(--front-color);left:50%;top:50%;margin-top:-30px;margin-left:-30px;animation:image-preloader-spin 2s infinite linear;box-sizing:border-box}.image-tool__caption[contentEditable=true][data-placeholder]:before{position:absolute!important;content:attr(data-placeholder);color:#707684;font-weight:400;display:none}.image-tool__caption[contentEditable=true][data-placeholder]:empty:before{display:block}.image-tool__caption[contentEditable=true][data-placeholder]:empty:focus:before{display:none}.image-tool--empty .image-tool__image,.image-tool--empty .image-tool__caption,.image-tool--loading .image-tool__caption{display:none}.image-tool .cdx-button{display:flex;align-items:center;justify-content:center}.image-tool .cdx-button svg{height:auto;margin:0 6px 0 0}.image-tool--filled .cdx-button,.image-tool--filled .image-tool__image-preloader{display:none}.image-tool--loading .image-tool__image{min-height:200px;display:flex;border:1px solid var(--border-color);background-color:#fff}.image-tool--loading .image-tool__image-picture,.image-tool--loading .cdx-button{display:none}.image-tool--withBorder .image-tool__image{border:1px solid var(--border-color)}.image-tool--withBackground .image-tool__image{padding:15px;background:var(--bg-color)}.image-tool--withBackground .image-tool__image-picture{max-width:60%;margin:0 auto}.image-tool--stretched .image-tool__image-picture{width:100%}@keyframes image-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}')),document.head.appendChild(o)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();const o='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V19C9.13623 19 8.20435 19 7.46927 18.6955C6.48915 18.2895 5.71046 17.5108 5.30448 16.5307C5 15.7956 5 14.8638 5 13V12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5H13.5C14.8956 5 15.5933 5 16.1611 5.17224C17.4395 5.56004 18.44 6.56046 18.8278 7.83886C19 8.40666 19 9.10444 19 10.5V10.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 17.5L17.5 6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 10.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9919 19H11.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13L13 5"/></svg>',a='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 9.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 5H14.5096"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.625 5H15C17.2091 5 19 6.79086 19 9V9.375"/><path stroke="currentColor" stroke-width="2" d="M9.375 5L9 5C6.79086 5 5 6.79086 5 9V9.375"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 5H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9.5H5.00957"/><path stroke="currentColor" stroke-width="2" d="M9.375 19H9C6.79086 19 5 17.2091 5 15V14.625"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 19H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14.55H5.00957"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/></svg>',s='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>',c='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>';function M(o,a=null,s={}){const c=document.createElement(o);Array.isArray(a)?c.classList.add(...a):a&&c.classList.add(a);for(const o in s)c[o]=s[o];return c}class j{
/**
   * @param {object} ui - image tool Ui module
   * @param {object} ui.api - Editor.js API
   * @param {ImageConfig} ui.config - user config
   * @param {Function} ui.onSelectFile - callback for clicks on Select file button
   * @param {boolean} ui.readOnly - read-only mode flag
   */
constructor({api:o,config:a,onSelectFile:s,readOnly:c}){this.api=o,this.config=a,this.onSelectFile=s,this.readOnly=c,this.nodes={wrapper:M("div",[this.CSS.baseClass,this.CSS.wrapper]),imageContainer:M("div",[this.CSS.imageContainer]),fileButton:this.createFileButton(),imageEl:void 0,imagePreloader:M("div",this.CSS.imagePreloader),caption:M("div",[this.CSS.input,this.CSS.caption],{contentEditable:!this.readOnly})},this.nodes.caption.dataset.placeholder=this.config.captionPlaceholder,this.nodes.imageContainer.appendChild(this.nodes.imagePreloader),this.nodes.wrapper.appendChild(this.nodes.imageContainer),this.nodes.wrapper.appendChild(this.nodes.caption),this.nodes.wrapper.appendChild(this.nodes.fileButton)
/**
   * CSS classes
   *
   * @returns {object}
   */}get CSS(){return{baseClass:this.api.styles.block,loading:this.api.styles.loader,input:this.api.styles.input,button:this.api.styles.button,wrapper:"image-tool",imageContainer:"image-tool__image",imagePreloader:"image-tool__image-preloader",imageEl:"image-tool__image-picture",caption:"image-tool__caption"}}
/**
   * Ui statuses:
   * - empty
   * - uploading
   * - filled
   *
   * @returns {{EMPTY: string, UPLOADING: string, FILLED: string}}
   */static get status(){return{EMPTY:"empty",UPLOADING:"loading",FILLED:"filled"}}
/**
   * Renders tool UI
   *
   * @param {ImageToolData} toolData - saved tool data
   * @returns {Element}
   */render(o){return o.file&&Object.keys(o.file).length!==0?this.toggleStatus(j.status.UPLOADING):this.toggleStatus(j.status.EMPTY),this.nodes.wrapper
/**
   * Creates upload-file button
   *
   * @returns {Element}
   */}createFileButton(){const o=M("div",[this.CSS.button]);return o.innerHTML=this.config.buttonContent||`${s} ${this.api.i18n.t("Select an Image")}`,o.addEventListener("click",(()=>{this.onSelectFile()})),o
/**
   * Shows uploading preloader
   *
   * @param {string} src - preview source
   * @returns {void}
   */}showPreloader(o){this.nodes.imagePreloader.style.backgroundImage=`url(${o})`,this.toggleStatus(j.status.UPLOADING)
/**
   * Hide uploading preloader
   *
   * @returns {void}
   */}hidePreloader(){this.nodes.imagePreloader.style.backgroundImage="",this.toggleStatus(j.status.EMPTY)
/**
   * Shows an image
   *
   * @param {string} url - image source
   * @returns {void}
   */}fillImage(o){const a=/\.mp4$/.test(o)?"VIDEO":"IMG",s={src:o};let c="load";a==="VIDEO"&&(s.autoplay=!0,s.loop=!0,s.muted=!0,s.playsinline=!0,c="loadeddata"),this.nodes.imageEl=M(a,this.CSS.imageEl,s),this.nodes.imageEl.addEventListener(c,(()=>{this.toggleStatus(j.status.FILLED),this.nodes.imagePreloader&&(this.nodes.imagePreloader.style.backgroundImage="")})),this.nodes.imageContainer.appendChild(this.nodes.imageEl)
/**
   * Shows caption input
   *
   * @param {string} text - caption text
   * @returns {void}
   */}fillCaption(o){this.nodes.caption&&(this.nodes.caption.innerHTML=o)}
/**
   * Changes UI status
   *
   * @param {string} status - see {@link Ui.status} constants
   * @returns {void}
   */toggleStatus(o){for(const a in j.status)Object.prototype.hasOwnProperty.call(j.status,a)&&this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${j.status[a]}`,o===j.status[a])}
/**
   * Apply visual representation of activated tune
   *
   * @param {string} tuneName - one of available tunes {@link Tunes.tunes}
   * @param {boolean} status - true for enable, false for disable
   * @returns {void}
   */applyTune(o,a){this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${o}`,a)}}function x(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var k={exports:{}};(function(o,a){(function(a,s){o.exports=s()})(window,(function(){return function(o){var a={};function r(s){if(a[s])return a[s].exports;var c=a[s]={i:s,l:!1,exports:{}};return o[s].call(c.exports,c,c.exports,r),c.l=!0,c.exports}return r.m=o,r.c=a,r.d=function(o,a,s){r.o(o,a)||Object.defineProperty(o,a,{enumerable:!0,get:s})},r.r=function(o){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},r.t=function(o,a){if(1&a&&(o=r(o)),8&a||4&a&&typeof o=="object"&&o&&o.__esModule)return o;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:o}),2&a&&typeof o!="string")for(var c in o)r.d(s,c,function(a){return o[a]}.bind(null,c));return s},r.n=function(o){var a=o&&o.__esModule?function(){return o.default}:function(){return o};return r.d(a,"a",a),a},r.o=function(o,a){return Object.prototype.hasOwnProperty.call(o,a)},r.p="",r(r.s=3)}([function(o,a){var s;s=function(){return this}();try{s=s||new Function("return this")()}catch{typeof window=="object"&&(s=window)}o.exports=s},function(o,a,s){(function(o){var c=s(2),k=setTimeout;function b(){}function u(o){if(!(this instanceof u))throw new TypeError("Promises must be constructed via new");if(typeof o!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],t(o,this)}function f(o,a){for(;o._state===3;)o=o._value;o._state!==0?(o._handled=!0,u._immediateFn((function(){var s=o._state===1?a.onFulfilled:a.onRejected;if(s!==null){var c;try{c=s(o._value)}catch(o){return void y(a.promise,o)}p(a.promise,c)}else(o._state===1?p:y)(a.promise,o._value)}))):o._deferreds.push(a)}function p(o,a){try{if(a===o)throw new TypeError("A promise cannot be resolved with itself.");if(a&&(typeof a=="object"||typeof a=="function")){var s=a.then;if(a instanceof u)return o._state=3,o._value=a,void w(o);if(typeof s=="function")return void t((c=s,k=a,function(){c.apply(k,arguments)}),o)}o._state=1,o._value=a,w(o)}catch(a){y(o,a)}var c,k}function y(o,a){o._state=2,o._value=a,w(o)}function w(o){o._state===2&&o._deferreds.length===0&&u._immediateFn((function(){o._handled||u._unhandledRejectionFn(o._value)}));for(var a=0,s=o._deferreds.length;a<s;a++)f(o,o._deferreds[a]);o._deferreds=null}function v(o,a,s){this.onFulfilled=typeof o=="function"?o:null,this.onRejected=typeof a=="function"?a:null,this.promise=s}function t(o,a){var s=!1;try{o((function(o){s||(s=!0,p(a,o))}),(function(o){s||(s=!0,y(a,o))}))}catch(o){if(s)return;s=!0,y(a,o)}}u.prototype.catch=function(o){return this.then(null,o)},u.prototype.then=function(o,a){var s=new this.constructor(b);return f(this,new v(o,a,s)),s},u.prototype.finally=c.a,u.all=function(o){return new u((function(a,s){if(!o||o.length===void 0)throw new TypeError("Promise.all accepts an array");var c=Array.prototype.slice.call(o);if(c.length===0)return a([]);var k=c.length;function h(o,C){try{if(C&&(typeof C=="object"||typeof C=="function")){var E=C.then;if(typeof E=="function")return void E.call(C,(function(a){h(o,a)}),s)}c[o]=C,--k==0&&a(c)}catch(o){s(o)}}for(var C=0;C<c.length;C++)h(C,c[C])}))},u.resolve=function(o){return o&&typeof o=="object"&&o.constructor===u?o:new u((function(a){a(o)}))},u.reject=function(o){return new u((function(a,s){s(o)}))},u.race=function(o){return new u((function(a,s){for(var c=0,k=o.length;c<k;c++)o[c].then(a,s)}))},u._immediateFn=typeof o=="function"&&function(a){o(a)}||function(o){k(o,0)},u._unhandledRejectionFn=function(o){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",o)},a.a=u}).call(this,s(5).setImmediate)},function(o,a,s){a.a=function(o){var a=this.constructor;return this.then((function(s){return a.resolve(o()).then((function(){return s}))}),(function(s){return a.resolve(o()).then((function(){return a.reject(s)}))}))}},function(o,a,s){function n(o){return(n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}s(4);var c,k,C,E,T,S,F,O=s(8),L=(k=function(o){return new Promise((function(a,s){o=E(o),(o=T(o)).beforeSend&&o.beforeSend();var c=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP");c.open(o.method,o.url),c.setRequestHeader("X-Requested-With","XMLHttpRequest"),Object.keys(o.headers).forEach((function(a){var s=o.headers[a];c.setRequestHeader(a,s)}));var k=o.ratio;c.upload.addEventListener("progress",(function(a){var s=Math.round(a.loaded/a.total*100),c=Math.ceil(s*k/100);o.progress(Math.min(c,100))}),!1),c.addEventListener("progress",(function(a){var s=Math.round(a.loaded/a.total*100),c=Math.ceil(s*(100-k)/100)+k;o.progress(Math.min(c,100))}),!1),c.onreadystatechange=function(){if(c.readyState===4){var o=c.response;try{o=JSON.parse(o)}catch{}var k=O.parseHeaders(c.getAllResponseHeaders()),C={body:o,code:c.status,headers:k};F(c.status)?a(C):s(C)}},c.send(o.data)}))},C=function(o){return o.method="POST",k(o)},E=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(o.url&&typeof o.url!="string")throw new Error("Url must be a string");if(o.url=o.url||"",o.method&&typeof o.method!="string")throw new Error("`method` must be a string or null");if(o.method=o.method?o.method.toUpperCase():"GET",o.headers&&n(o.headers)!=="object")throw new Error("`headers` must be an object or null");if(o.headers=o.headers||{},o.type&&(typeof o.type!="string"||!Object.values(c).includes(o.type)))throw new Error("`type` must be taken from module's «contentType» library");if(o.progress&&typeof o.progress!="function")throw new Error("`progress` must be a function or null");if(o.progress=o.progress||function(o){},o.beforeSend=o.beforeSend||function(o){},o.ratio&&typeof o.ratio!="number")throw new Error("`ratio` must be a number");if(o.ratio<0||o.ratio>100)throw new Error("`ratio` must be in a 0-100 interval");if(o.ratio=o.ratio||90,o.accept&&typeof o.accept!="string")throw new Error("`accept` must be a string with a list of allowed mime-types");if(o.accept=o.accept||"*/*",o.multiple&&typeof o.multiple!="boolean")throw new Error("`multiple` must be a true or false");if(o.multiple=o.multiple||!1,o.fieldName&&typeof o.fieldName!="string")throw new Error("`fieldName` must be a string");return o.fieldName=o.fieldName||"files",o},T=function(o){switch(o.method){case"GET":var a=S(o.data,c.URLENCODED);delete o.data,o.url=/\?/.test(o.url)?o.url+"&"+a:o.url+"?"+a;break;case"POST":case"PUT":case"DELETE":case"UPDATE":var s=function(){return(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).type||c.JSON}(o);(O.isFormData(o.data)||O.isFormElement(o.data))&&(s=c.FORM),o.data=S(o.data,s),s!==L.contentType.FORM&&(o.headers["content-type"]=s)}return o},S=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};switch(arguments.length>1?arguments[1]:void 0){case c.URLENCODED:return O.urlEncode(o);case c.JSON:return O.jsonEncode(o);case c.FORM:return O.formEncode(o);default:return o}},F=function(o){return o>=200&&o<300},{contentType:c={URLENCODED:"application/x-www-form-urlencoded; charset=utf-8",FORM:"multipart/form-data",JSON:"application/json; charset=utf-8"},request:k,get:function(o){return o.method="GET",k(o)},post:C,transport:function(o){return o=E(o),O.selectFiles(o).then((function(a){for(var s=new FormData,c=0;c<a.length;c++)s.append(o.fieldName,a[c],a[c].name);O.isObject(o.data)&&Object.keys(o.data).forEach((function(a){var c=o.data[a];s.append(a,c)}));var k=o.beforeSend;return o.beforeSend=function(){return k(a)},o.data=s,C(o)}))},selectFiles:function(o){return delete(o=E(o)).beforeSend,O.selectFiles(o)}});o.exports=L},function(o,a,s){s.r(a);var c=s(1);window.Promise=window.Promise||c.a},function(o,a,s){(function(o){var c=o!==void 0&&o||typeof self<"u"&&self||window,k=Function.prototype.apply;function b(o,a){this._id=o,this._clearFn=a}a.setTimeout=function(){return new b(k.call(setTimeout,c,arguments),clearTimeout)},a.setInterval=function(){return new b(k.call(setInterval,c,arguments),clearInterval)},a.clearTimeout=a.clearInterval=function(o){o&&o.close()},b.prototype.unref=b.prototype.ref=function(){},b.prototype.close=function(){this._clearFn.call(c,this._id)},a.enroll=function(o,a){clearTimeout(o._idleTimeoutId),o._idleTimeout=a},a.unenroll=function(o){clearTimeout(o._idleTimeoutId),o._idleTimeout=-1},a._unrefActive=a.active=function(o){clearTimeout(o._idleTimeoutId);var a=o._idleTimeout;a>=0&&(o._idleTimeoutId=setTimeout((function(){o._onTimeout&&o._onTimeout()}),a))},s(6),a.setImmediate=typeof self<"u"&&self.setImmediate||o!==void 0&&o.setImmediate||this&&this.setImmediate,a.clearImmediate=typeof self<"u"&&self.clearImmediate||o!==void 0&&o.clearImmediate||this&&this.clearImmediate}).call(this,s(0))},function(o,a,s){(function(o,a){(function(o,s){if(!o.setImmediate){var c,k,C,E,T,S=1,F={},O=!1,L=o.document,I=Object.getPrototypeOf&&Object.getPrototypeOf(o);I=I&&I.setTimeout?I:o,{}.toString.call(o.process)==="[object process]"?c=function(o){a.nextTick((function(){m(o)}))}:function(){if(o.postMessage&&!o.importScripts){var a=!0,s=o.onmessage;return o.onmessage=function(){a=!1},o.postMessage("","*"),o.onmessage=s,a}}()?(E="setImmediate$"+Math.random()+"$",T=function(a){a.source===o&&typeof a.data=="string"&&a.data.indexOf(E)===0&&m(+a.data.slice(E.length))},o.addEventListener?o.addEventListener("message",T,!1):o.attachEvent("onmessage",T),c=function(a){o.postMessage(E+a,"*")}):o.MessageChannel?((C=new MessageChannel).port1.onmessage=function(o){m(o.data)},c=function(o){C.port2.postMessage(o)}):L&&"onreadystatechange"in L.createElement("script")?(k=L.documentElement,c=function(o){var a=L.createElement("script");a.onreadystatechange=function(){m(o),a.onreadystatechange=null,k.removeChild(a),a=null},k.appendChild(a)}):c=function(o){setTimeout(m,0,o)},I.setImmediate=function(o){typeof o!="function"&&(o=new Function(""+o));for(var a=new Array(arguments.length-1),s=0;s<a.length;s++)a[s]=arguments[s+1];var k={callback:o,args:a};return F[S]=k,c(S),S++},I.clearImmediate=g}function g(o){delete F[o]}function m(o){if(O)setTimeout(m,0,o);else{var a=F[o];if(a){O=!0;try{(function(o){var a=o.callback,c=o.args;switch(c.length){case 0:a();break;case 1:a(c[0]);break;case 2:a(c[0],c[1]);break;case 3:a(c[0],c[1],c[2]);break;default:a.apply(s,c)}})(a)}finally{g(o),O=!1}}}}})(typeof self>"u"?o===void 0?this:o:self)}).call(this,s(0),s(7))},function(o,a){var s,c,k=o.exports={};function d(){throw new Error("setTimeout has not been defined")}function b(){throw new Error("clearTimeout has not been defined")}function u(o){if(s===setTimeout)return setTimeout(o,0);if((s===d||!s)&&setTimeout)return s=setTimeout,setTimeout(o,0);try{return s(o,0)}catch{try{return s.call(null,o,0)}catch{return s.call(this,o,0)}}}(function(){try{s=typeof setTimeout=="function"?setTimeout:d}catch{s=d}try{c=typeof clearTimeout=="function"?clearTimeout:b}catch{c=b}})();var C,E=[],T=!1,S=-1;function v(){T&&C&&(T=!1,C.length?E=C.concat(E):S=-1,E.length&&t())}function t(){if(!T){var o=u(v);T=!0;for(var a=E.length;a;){for(C=E,E=[];++S<a;)C&&C[S].run();S=-1,a=E.length}C=null,T=!1,function(o){if(c===clearTimeout)return clearTimeout(o);if((c===b||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(o);try{c(o)}catch{try{return c.call(null,o)}catch{return c.call(this,o)}}}(o)}}function e(o,a){this.fun=o,this.array=a}function l(){}k.nextTick=function(o){var a=new Array(arguments.length-1);if(arguments.length>1)for(var s=1;s<arguments.length;s++)a[s-1]=arguments[s];E.push(new e(o,a)),E.length!==1||T||u(t)},e.prototype.run=function(){this.fun.apply(null,this.array)},k.title="browser",k.browser=!0,k.env={},k.argv=[],k.version="",k.versions={},k.on=l,k.addListener=l,k.once=l,k.off=l,k.removeListener=l,k.removeAllListeners=l,k.emit=l,k.prependListener=l,k.prependOnceListener=l,k.listeners=function(o){return[]},k.binding=function(o){throw new Error("process.binding is not supported")},k.cwd=function(){return"/"},k.chdir=function(o){throw new Error("process.chdir is not supported")},k.umask=function(){return 0}},function(o,a,s){function n(o,a){for(var s=0;s<a.length;s++){var c=a[s];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(o,c.key,c)}}var c=s(9);o.exports=function(){function d(){(function(o,a){if(!(o instanceof a))throw new TypeError("Cannot call a class as a function")})(this,d)}var o,a,s;return o=d,s=[{key:"urlEncode",value:function(o){return c(o)}},{key:"jsonEncode",value:function(o){return JSON.stringify(o)}},{key:"formEncode",value:function(o){if(this.isFormData(o))return o;if(this.isFormElement(o))return new FormData(o);if(this.isObject(o)){var a=new FormData;return Object.keys(o).forEach((function(s){var c=o[s];a.append(s,c)})),a}throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement")}},{key:"isObject",value:function(o){return Object.prototype.toString.call(o)==="[object Object]"}},{key:"isFormData",value:function(o){return o instanceof FormData}},{key:"isFormElement",value:function(o){return o instanceof HTMLFormElement}},{key:"selectFiles",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise((function(a,s){var c=document.createElement("INPUT");c.type="file",o.multiple&&c.setAttribute("multiple","multiple"),o.accept&&c.setAttribute("accept",o.accept),c.style.display="none",document.body.appendChild(c),c.addEventListener("change",(function(o){var s=o.target.files;a(s),document.body.removeChild(c)}),!1),c.click()}))}},{key:"parseHeaders",value:function(o){var a=o.trim().split(/[\r\n]+/),s={};return a.forEach((function(o){var a=o.split(": "),c=a.shift(),k=a.join(": ");c&&(s[c]=k)})),s}}],(a=null)&&n(o.prototype,a),s&&n(o,s),d}()},function(o,a){var r=function(o){return encodeURIComponent(o).replace(/[!'()*]/g,escape).replace(/%20/g,"+")},n=function(o,a,s,c){return a=a||null,s=s||"&",c=c||null,o?function(o){for(var a=new Array,s=0;s<o.length;s++)o[s]&&a.push(o[s]);return a}(Object.keys(o).map((function(k){var C,E,T=k;if(c&&(T=c+"["+T+"]"),typeof o[k]=="object"&&o[k]!==null)C=n(o[k],null,s,T);else{a&&(E=T,T=!isNaN(parseFloat(E))&&isFinite(E)?a+Number(T):T);var S=o[k];S=(S=(S=(S=S===!0?"1":S)===!1?"0":S)===0?"0":S)||"",C=r(T)+"="+r(S)}return C}))).join(s).replace(/[!'()*]/g,""):""};o.exports=n}])}))})(k);var C=k.exports;const E=x(C);function _(o){return o&&typeof o.then=="function"}class B{
/**
   * @param {object} params - uploader module params
   * @param {ImageConfig} params.config - image tool config
   * @param {Function} params.onUpload - one callback for all uploading (file, url, d-n-d, pasting)
   * @param {Function} params.onError - callback for uploading errors
   */
constructor({config:o,onUpload:a,onError:s}){this.config=o,this.onUpload=a,this.onError=s
/**
   * Handle clicks on the upload file button
   * Fires ajax.transport()
   *
   * @param {Function} onPreview - callback fired when preview is ready
   */}uploadSelectedFile({onPreview:o}){const i=function(a){const s=new FileReader;s.readAsDataURL(a),s.onload=a=>{o(a.target.result)}};let a;a=this.config.uploader&&typeof this.config.uploader.uploadByFile=="function"?E.selectFiles({accept:this.config.types}).then((o=>{i(o[0]);const a=this.config.uploader.uploadByFile(o[0]);return _(a)||console.warn("Custom uploader method uploadByFile should return a Promise"),a})):E.transport({url:this.config.endpoints.byFile,data:this.config.additionalRequestData,accept:this.config.types,headers:this.config.additionalRequestHeaders,beforeSend:o=>{i(o[0])},fieldName:this.config.field}).then((o=>o.body)),a.then((o=>{this.onUpload(o)})).catch((o=>{this.onError(o)}))
/**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   *
   * @param {string} url - image source url
   */}uploadByUrl(o){let a;this.config.uploader&&typeof this.config.uploader.uploadByUrl=="function"?(a=this.config.uploader.uploadByUrl(o),_(a)||console.warn("Custom uploader method uploadByUrl should return a Promise")):a=E.post({url:this.config.endpoints.byUrl,data:Object.assign({url:o},this.config.additionalRequestData),type:E.contentType.JSON,headers:this.config.additionalRequestHeaders}).then((o=>o.body)),a.then((o=>{this.onUpload(o)})).catch((o=>{this.onError(o)}))
/**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   *
   * @param {File} file - file pasted by drag-n-drop
   * @param {Function} onPreview - file pasted by drag-n-drop
   */}uploadByFile(o,{onPreview:a}){const s=new FileReader;s.readAsDataURL(o),s.onload=o=>{a(o.target.result)};let c;if(this.config.uploader&&typeof this.config.uploader.uploadByFile=="function")c=this.config.uploader.uploadByFile(o),_(c)||console.warn("Custom uploader method uploadByFile should return a Promise");else{const a=new FormData;a.append(this.config.field,o),this.config.additionalRequestData&&Object.keys(this.config.additionalRequestData).length&&Object.entries(this.config.additionalRequestData).forEach((([o,s])=>{a.append(o,s)})),c=E.post({url:this.config.endpoints.byFile,data:a,type:E.contentType.JSON,headers:this.config.additionalRequestHeaders}).then((o=>o.body))}c.then((o=>{this.onUpload(o)})).catch((o=>{this.onError(o)}))}}
/**
 * Image Tool for the Editor.js
 *
 * @author CodeX <team@codex.so>
 * @license MIT
 * @see {@link https://github.com/editor-js/image}
 *
 * To developers.
 * To simplify Tool structure, we split it to 4 parts:
 *  1) index.js — main Tool's interface, public API and methods for working with data
 *  2) uploader.js — module that has methods for sending files via AJAX: from device, by URL or File pasting
 *  3) ui.js — module for UI manipulations: render, showing preloader, etc
 *  4) tunes.js — working with Block Tunes: render buttons, handle clicks
 *
 * For debug purposes there is a testing server
 * that can save uploaded files and return a Response {@link UploadResponseFormat}
 *
 *       $ node dev/server.js
 *
 * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
 *
 * image: {
 *   class: ImageTool,
 *   config: {
 *     endpoints: {
 *       byFile: 'http://localhost:8008/uploadFile',
 *       byUrl: 'http://localhost:8008/fetchUrl',
 *     }
 *   },
 * },
 */class P{
/**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
static get isReadOnlySupported(){return!0}
/**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */static get toolbox(){return{icon:s,title:"Image"}}
/**
   * Available image tools
   *
   * @returns {Array}
   */static get tunes(){return[{name:"withBorder",icon:a,title:"With border",toggle:!0},{name:"stretched",icon:c,title:"Stretch image",toggle:!0},{name:"withBackground",icon:o,title:"With background",toggle:!0}]}
/**
   * @param {object} tool - tool properties got from editor.js
   * @param {ImageToolData} tool.data - previously saved data
   * @param {ImageConfig} tool.config - user config for Tool
   * @param {object} tool.api - Editor.js API
   * @param {boolean} tool.readOnly - read-only mode flag
   * @param {BlockAPI|{}} tool.block - current Block API
   */constructor({data:o,config:a,api:s,readOnly:c,block:k}){this.api=s,this.readOnly=c,this.block=k,this.config={endpoints:a.endpoints||"",additionalRequestData:a.additionalRequestData||{},additionalRequestHeaders:a.additionalRequestHeaders||{},field:a.field||"image",types:a.types||"image/*",captionPlaceholder:this.api.i18n.t(a.captionPlaceholder||"Caption"),buttonContent:a.buttonContent||"",uploader:a.uploader||void 0,actions:a.actions||[]},this.uploader=new B({config:this.config,onUpload:o=>this.onUpload(o),onError:o=>this.uploadingFailed(o)}),this.ui=new j({api:s,config:this.config,onSelectFile:()=>{this.uploader.uploadSelectedFile({onPreview:o=>{this.ui.showPreloader(o)}})},readOnly:c}),this._data={},this.data=o
/**
   * Renders Block content
   *
   * @public
   *
   * @returns {HTMLDivElement}
   */}render(){return this.ui.render(this.data)}
/**
   * Validate data: check if Image exists
   *
   * @param {ImageToolData} savedData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */validate(o){return o.file&&o.file.url}
/**
   * Return Block data
   *
   * @public
   *
   * @returns {ImageToolData}
   */save(){const o=this.ui.nodes.caption;return this._data.caption=o.innerHTML,this.data
/**
   * Returns configuration for block tunes: add background, add border, stretch image
   *
   * @public
   *
   * @returns {Array}
   */}renderSettings(){return P.tunes.concat(this.config.actions).map((o=>({icon:o.icon,label:this.api.i18n.t(o.title),name:o.name,toggle:o.toggle,isActive:this.data[o.name],onActivate:()=>{typeof o.action!="function"?this.tuneToggled(o.name):o.action(o.name)}})))}appendCallback(){this.ui.nodes.fileButton.click()}
/**
   * Specify paste substitutes
   *
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   * @returns {{tags: string[], patterns: object<string, RegExp>, files: {extensions: string[], mimeTypes: string[]}}}
   */static get pasteConfig(){return{tags:[{img:{src:!0}}],patterns:{image:/https?:\/\/\S+\.(gif|jpe?g|tiff|png|svg|webp)(\?[a-z0-9=]*)?$/i},files:{mimeTypes:["image/*"]}}}
/**
   * Specify paste handlers
   *
   * @public
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   * @param {CustomEvent} event - editor.js custom paste event
   *                              {@link https://github.com/codex-team/editor.js/blob/master/types/tools/paste-events.d.ts}
   * @returns {void}
   */async onPaste(o){switch(o.type){case"tag":{const a=o.detail.data;if(/^blob:/.test(a.src)){const o=await(await fetch(a.src)).blob();this.uploadFile(o);break}this.uploadUrl(a.src);break}case"pattern":{const a=o.detail.data;this.uploadUrl(a);break}case"file":{const a=o.detail.file;this.uploadFile(a);break}}}
/**
   * Stores all Tool's data
   *
   * @private
   *
   * @param {ImageToolData} data - data in Image Tool format
   */set data(o){this.image=o.file,this._data.caption=o.caption||"",this.ui.fillCaption(this._data.caption),P.tunes.forEach((({name:a})=>{const s=typeof o[a]<"u"&&(o[a]===!0||o[a]==="true");this.setTune(a,s)}))
/**
   * Return Tool data
   *
   * @private
   *
   * @returns {ImageToolData}
   */}get data(){return this._data}
/**
   * Set new image file
   *
   * @private
   *
   * @param {object} file - uploaded file data
   */set image(o){this._data.file=o||{},o&&o.url&&this.ui.fillImage(o.url)
/**
   * File uploading callback
   *
   * @private
   *
   * @param {UploadResponseFormat} response - uploading server response
   * @returns {void}
   */}onUpload(o){o.success&&o.file?this.image=o.file:this.uploadingFailed("incorrect response: "+JSON.stringify(o))}
/**
   * Handle uploader errors
   *
   * @private
   * @param {string} errorText - uploading error text
   * @returns {void}
   */uploadingFailed(o){console.log("Image Tool: uploading failed because of",o),this.api.notifier.show({message:this.api.i18n.t("Couldn’t upload image. Please try another."),style:"error"}),this.ui.hidePreloader()
/**
   * Callback fired when Block Tune is activated
   *
   * @private
   *
   * @param {string} tuneName - tune that has been clicked
   * @returns {void}
   */}tuneToggled(o){this.setTune(o,!this._data[o])}
/**
   * Set one tune
   *
   * @param {string} tuneName - {@link Tunes.tunes}
   * @param {boolean} value - tune state
   * @returns {void}
   */setTune(o,a){this._data[o]=a,this.ui.applyTune(o,a),o==="stretched"&&Promise.resolve().then((()=>{this.block.stretched=a})).catch((o=>{console.error(o)}))
/**
   * Show preloader and upload image file
   *
   * @param {File} file - file that is currently uploading (from paste)
   * @returns {void}
   */}uploadFile(o){this.uploader.uploadByFile(o,{onPreview:o=>{this.ui.showPreloader(o)}})}
/**
   * Show preloader and upload image by target url
   *
   * @param {string} url - url pasted
   * @returns {void}
   */uploadUrl(o){this.ui.showPreloader(o),this.uploader.uploadByUrl(o)}}export{P as default};

