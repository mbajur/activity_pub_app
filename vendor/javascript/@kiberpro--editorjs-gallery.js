(function(){try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('.image-gallery{--bg-color: #cdd1e0;--front-color: #388ae5;--border-color: #e8e8eb}.image-gallery__container{background:black;margin-bottom:10px;padding:5px}.image-gallery__controls{display:flex;gap:10px;padding:8px 2px 3px}.image-gallery__items{display:grid;gap:10px;grid-template-columns:1fr 1fr 1fr;padding:10px;background-color:#222}.image-gallery__items:empty{display:none}.image-gallery__preloaders{display:flex;flex-grow:1;flex-wrap:nowrap;padding:5px;gap:8px;overflow:hidden}.image-gallery__preloader{min-width:30px;height:30px;border-radius:50%;background-size:cover;position:relative;background-color:var(--bg-color);background-position:center center}.image-gallery__preloader:after{content:"";position:absolute;z-index:3;width:30px;height:30px;border-radius:50%;border:2px solid var(--bg-color);border-top-color:var(--front-color);left:50%;top:50%;margin-top:-15px;margin-left:-15px;animation:image-preloader-spin 2s infinite linear;box-sizing:border-box}.sortable .image-gallery__image{cursor:move}.image-gallery__image{position:relative;overflow:hidden;aspect-ratio:16 / 9;-webkit-user-select:none;user-select:none;background-color:#000;border-radius:3px;padding:5px}.image-gallery__image.sortable-ghost{opacity:.75}.image-gallery__image--empty,.image-gallery__image--loading{display:none}.image-gallery__image-picture{border-radius:3px;max-width:100%;height:100%;display:block;margin:auto;object-fit:cover;pointer-events:none}.image-gallery__image-trash{position:absolute;top:3px;right:3px;cursor:pointer;color:#fff;font-size:18px;background-color:#00000040;line-height:1;padding:6px 8px;border-radius:3px;transition:background-color .1s}.image-gallery__image-trash:hover{background-color:#00000080}.image-gallery__counter{display:flex;align-items:center;color:gray;font-size:14px;margin-right:6px}.image-gallery__caption[contentEditable=true][data-placeholder]:before{position:absolute!important;content:attr(data-placeholder);color:#707684;font-weight:400;display:none}.image-gallery__caption[contentEditable=true][data-placeholder]:empty:before{display:block}.image-gallery__caption[contentEditable=true][data-placeholder]:empty:focus:before{display:none}.image-gallery__caption{margin-bottom:10px}.image-gallery .cdx-button{height:40px;display:flex;align-items:center;justify-content:center;padding:12px;gap:5px;white-space:nowrap}.image-gallery__tune-wrapper{display:flex;gap:6px;margin:6px 0}.image-gallery__tune-wrapper:first-child{margin-top:0}.image-gallery__tune-wrapper:last-child{margin-bottom:0}.image-gallery__tune{flex-grow:1;padding:6px;color:var(--color-text-primary);display:flex;align-items:center;justify-content:center}.image-gallery__tune.active{background:var(--color-background-icon-active);color:var(--color-text-icon-active);border-color:var(--color-text-icon-active)}.image-gallery__tune svg{width:24px;height:24px}@keyframes image-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}')),document.head.appendChild(t)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();const t='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>',o='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.1328 7.7234C18.423 7.7634 18.7115 7.80571 19 7.85109M18.1328 7.7234L17.2267 17.4023C17.1897 17.8371 16.973 18.2432 16.62 18.5394C16.267 18.8356 15.8037 19.0001 15.3227 19H8.67733C8.19632 19.0001 7.73299 18.8356 7.37998 18.5394C7.02698 18.2432 6.81032 17.8371 6.77333 17.4023L5.86715 7.7234M18.1328 7.7234C17.1536 7.58919 16.1693 7.48733 15.1818 7.41803M5.86715 7.7234C5.57697 7.76263 5.28848 7.80494 5 7.85032M5.86715 7.7234C6.84642 7.58919 7.83074 7.48733 8.81818 7.41803M15.1818 7.41803C13.0638 7.26963 10.9362 7.26963 8.81818 7.41803M15.1818 7.41803C15.1818 5.30368 13.7266 4.34834 12 4.34834C10.2734 4.34834 8.81818 5.43945 8.81818 7.41803"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.5 15.5L10 11"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 11L13.5 15.5"/></svg>';class T{
/**
   * @param {object} ui - image tool Ui module
   * @param {object} ui.api - Editor.js API
   * @param {ImageConfig} ui.config - user config
   * @param {Function} ui.onSelectFile - callback for clicks on Select file button
   * @param {boolean} ui.readOnly - read-only mode flag
   */
constructor({api:t,config:o,onSelectFile:s,onDeleteFile:l,onMoveFile:d,readOnly:_}){this.api=t,this.config=o,this.onSelectFile=s,this.onDeleteFile=l,this.onMoveFile=d,this.readOnly=_,this.nodes={wrapper:x("div",[this.CSS.baseClass,this.CSS.wrapper]),fileButton:this.createFileButton(),container:x("div",this.CSS.container),itemsContainer:x("div",this.CSS.itemsContainer),controls:x("div",this.CSS.controls),preloaderContainer:x("div",this.CSS.preloaderContainer),caption:x("div",[this.CSS.input,this.CSS.caption],{contentEditable:!this.readOnly})},this.nodes.caption.dataset.placeholder=this.api.i18n.t("Gallery caption"),this.readOnly||(this.nodes.controls.appendChild(this.nodes.preloaderContainer),this.config.maxElementCount&&(this.nodes.limitCounter=x("div",this.CSS.limitCounter),this.nodes.controls.appendChild(this.nodes.limitCounter)),this.nodes.controls.appendChild(this.nodes.fileButton)),this.nodes.container.appendChild(this.nodes.itemsContainer),this.readOnly||this.nodes.container.appendChild(this.nodes.controls),this.nodes.wrapper.appendChild(this.nodes.container),this.readOnly||this.nodes.wrapper.appendChild(this.nodes.caption),["dragenter","dragover","dragleave","drop"].forEach((t=>{this.nodes.itemsContainer.addEventListener(t,(function(t){t.preventDefault(),t.stopPropagation()}),!1)}))
/**
   * CSS classes
   *
   * @returns {object}
   */}get CSS(){return{baseClass:this.api.styles.block,loading:this.api.styles.loader,input:this.api.styles.input,button:this.api.styles.button,wrapper:"image-gallery",container:"image-gallery__container",controls:"image-gallery__controls",limitCounter:"image-gallery__counter",itemsContainer:"image-gallery__items",imageContainer:"image-gallery__image",preloaderContainer:"image-gallery__preloaders",imagePreloader:"image-gallery__preloader",imageEl:"image-gallery__image-picture",trashButton:"image-gallery__image-trash",caption:"image-gallery__caption"}}
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
   * @param {ImageGalleryData} toolData - saved tool data
   * @returns {Element}
   */render(t){return this.nodes.wrapper}onRendered(){!this.readOnly&&!this.sortable&&(this.sortable=new this.config.sortableJs(this.nodes.itemsContainer,{handle:`.${this.CSS.imageContainer}`,filter:`.${this.CSS.trashButton}`,onStart:()=>{this.nodes.itemsContainer.classList.add(`${this.CSS.itemsContainer}--drag`)},onEnd:t=>{this.nodes.itemsContainer.classList.remove(`${this.CSS.itemsContainer}--drag`),t.oldIndex!==t.newIndex&&this.onMoveFile(t.oldIndex,t.newIndex)}}),this.nodes.itemsContainer.classList.add("sortable")
/**
   * Creates upload-file button
   *
   * @returns {Element}
   */)}createFileButton(){const o=x("div",[this.CSS.button]);return o.innerHTML=this.config.buttonContent||`${t} ${this.api.i18n.t("Select an Image")}`,o.addEventListener("click",(()=>{this.onSelectFile()})),o
/**
   * Shows uploading button
   *
   * @returns {void}
   */}showFileButton(){this.nodes.fileButton.style.display=""}
/**
   * Hide uploading button
   *
   * @returns {void}
   */hideFileButton(){this.nodes.fileButton.style.display="none"}getPreloader(t){let o=x("div",this.CSS.imagePreloader);this.nodes.preloaderContainer.append(o);const s=new FileReader;return s.readAsDataURL(t),s.onload=t=>{o.style.backgroundImage=`url(${t.target.result})`},o}removePreloader(t){t.remove()}
/**
   * Shows an image
   *
   * @param {ImageGalleryDataFile} file - image file object
   * @returns {void}
   */appendImage(t){let s=t.url;const l=/\.mp4$/.test(s)?"VIDEO":"IMG",d={src:s};let _="load";l==="VIDEO"&&(d.autoplay=!1,d.muted=!0,d.playsinline=!0,_="loadeddata");let C=x("div",[this.CSS.imageContainer]),E=x(l,this.CSS.imageEl,d);E.addEventListener(_,(()=>{this.toggleStatus(C,T.status.FILLED)})),C.appendChild(E);const S=this.api.i18n.t("Delete");if(!this.readOnly){let t=x("div",[this.CSS.trashButton],{innerHTML:o,title:S});this.api.tooltip.onHover(t,S,{placement:"top"}),t.addEventListener("click",(()=>{this.api.tooltip.hide();let t=Array.prototype.slice.call(this.nodes.itemsContainer.children).indexOf(C);t!==-1&&(this.nodes.itemsContainer.removeChild(C),this.onDeleteFile(t))})),C.appendChild(t)}this.nodes.itemsContainer.append(C)}
/**
   * Shows caption input
   *
   * @param {string} text - caption text
   * @returns {void}
   */fillCaption(t){this.nodes.caption&&(this.nodes.caption.innerHTML=t)}
/**
   * Changes UI status
   *
   * @param {Element} elem
   * @param {string} status - see {@link Ui.status} constants
   * @returns {void}
   */toggleStatus(t,o){for(const s in T.status)Object.prototype.hasOwnProperty.call(T.status,s)&&t.classList.toggle(`${this.CSS.imageContainer}--${T.status[s]}`,o===T.status[s])}
/**
   * @param {int} imageCount
   * @param {int|null} limitCounter
   * @returns {void}
   */updateLimitCounter(t,o){o&&this.nodes.limitCounter&&(t===0?this.nodes.limitCounter.style.display="none":(this.nodes.limitCounter.style.display=null,this.nodes.limitCounter.innerText=`${t} / ${o}`))}}const x=function(t,o=null,s={}){const l=document.createElement(t);Array.isArray(o)?l.classList.add(...o):o&&l.classList.add(o);for(const t in s)l[t]=s[t];return l},s='<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 -960 960 960" width="24"><path d="M363.077-406.154h373.844L612.769-569.23l-95.078 121.539-62.769-77.693-91.845 119.23Zm-40.769 146.153q-30.308 0-51.307-21-21-21-21-51.308v-455.382q0-30.308 21-51.308 20.999-21 51.307-21h455.383q30.307 0 51.307 21 21 21 21 51.308v455.382q0 30.308-21 51.308t-51.307 21H322.308Zm0-59.999h455.383q4.615 0 8.462-3.846 3.846-3.847 3.846-8.463v-455.382q0-4.616-3.846-8.463-3.847-3.846-8.462-3.846H322.308q-4.616 0-8.462 3.846-3.847 3.847-3.847 8.463v455.382q0 4.616 3.847 8.463 3.846 3.846 8.462 3.846ZM182.309-120.003q-30.307 0-51.307-21-21-21-21-51.307v-515.381h59.999v515.381q0 4.616 3.846 8.462 3.847 3.847 8.462 3.847h515.382v59.998H182.309ZM309.999-800v480-480Z"/></svg>',l='<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 -960 960 960"><path d="M142.309-220.001q-29.826 0-51.067-21.241-21.24-21.24-21.24-51.067v-375.382q0-29.827 21.24-51.067 21.241-21.241 51.067-21.241h375.383q29.827 0 51.067 21.241 21.24 21.24 21.24 51.067v375.382q0 29.827-21.24 51.067-21.24 21.241-51.067 21.241H142.309ZM706.343-520q-15.652 0-25.998-10.346-10.346-10.346-10.346-25.998v-147.311q0-15.651 10.346-25.997 10.346-10.347 25.998-10.347h147.311q15.652 0 25.998 10.347 10.346 10.346 10.346 25.997v147.311q0 15.652-10.346 25.998Q869.306-520 853.654-520H706.343Zm23.655-59.999h100.001V-680H729.998v100.001ZM142.309-280h375.383q5.385 0 8.847-3.462 3.462-3.462 3.462-8.847v-375.382q0-5.385-3.462-8.847-3.462-3.462-8.847-3.462H142.309q-5.385 0-8.846 3.462-3.462 3.462-3.462 8.847v375.382q0 5.385 3.462 8.847 3.461 3.462 8.846 3.462Zm31.538-81.923h312.307l-101.153-135-75 100-55-73-81.154 108Zm532.496 141.922q-15.652 0-25.998-10.347-10.346-10.346-10.346-25.997v-147.311q0-15.652 10.346-25.998Q690.691-440 706.343-440h147.311q15.652 0 25.998 10.346 10.346 10.346 10.346 25.998v147.311q0 15.651-10.346 25.997-10.346 10.347-25.998 10.347H706.343ZM729.998-280h100.001v-100.001H729.998V-280Zm-599.997 0v-400 400Zm599.997-299.999V-680v100.001Zm0 299.999v-100.001V-280Z"/></svg>';class O{
/**
   * @param {object} tune - image tool Tunes managers
   * @param {object} tune.api - Editor API
   * @param {object} tune.actions - list of user defined tunes
   * @param {Function} tune.onChange - tune toggling callback
   */
constructor({api:t,actions:o,onChange:s}){this.api=t,this.actions=o,this.onChange=s,this.buttons=[]
/**
   * Available Image tunes
   *
   * @returns {{name: string, icon: string, title: string}[]}
   */}static get tunes(){return[{name:"slider",icon:s,title:"Slider"},{name:"fit",icon:l,title:"Fit"}]}
/**
   * Styles
   *
   * @returns {{wrapper: string, buttonBase: *, button: string, buttonActive: *}}
   */get CSS(){return{wrapper:"image-gallery__tune-wrapper",buttonBase:this.api.styles.button,button:"image-gallery__tune",buttonActive:"active"}}
/**
   * Makes buttons with tunes
   *
   * @param {ImageGalleryData} toolData - generate Elements of tunes
   * @returns {Element}
   */render(t){const o=x("div",this.CSS.wrapper),s=this.actions??O.tunes;return this.buttons=[],s.forEach((s=>{const l=this.api.i18n.t(s.title),d=x("div",[this.CSS.buttonBase,this.CSS.button],{innerHTML:s.icon,title:l});d.addEventListener("click",(()=>{this.tuneClicked(s.name,s.action)})),d.dataset.tune=s.name,d.classList.toggle(this.CSS.buttonActive,t.style===s.name),this.buttons.push(d),this.api.tooltip.onHover(d,l,{placement:"top"}),o.appendChild(d)})),o
/**
   * Clicks to one of the tunes
   *
   * @param {string} tuneName - clicked tune name
   * @param {Function} customFunction - function to execute on click
   */}tuneClicked(t,o){if(typeof o=="function"&&!o(t))return!1;this.buttons.forEach((o=>{o.classList.toggle(this.CSS.buttonActive,o.dataset.tune===t)})),this.onChange(t)}}const d='<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="20" viewBox="0 -960 960 960" width="20"><path d="M360-384h384L618-552l-90 120-66-88-102 136Zm-48 144q-29.7 0-50.85-21.15Q240-282.3 240-312v-480q0-29.7 21.15-50.85Q282.3-864 312-864h480q29.7 0 50.85 21.15Q864-821.7 864-792v480q0 29.7-21.15 50.85Q821.7-240 792-240H312Zm0-72h480v-480H312v480ZM168-96q-29.7 0-50.85-21.15Q96-138.3 96-168v-552h72v552h552v72H168Zm144-696v480-480Z"/></svg>';function H(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var _={exports:{}};(function(t,o){(function(o,s){t.exports=s()})(window,(function(){return function(t){var o={};function r(s){if(o[s])return o[s].exports;var l=o[s]={i:s,l:!1,exports:{}};return t[s].call(l.exports,l,l.exports,r),l.l=!0,l.exports}return r.m=t,r.c=o,r.d=function(t,o,s){r.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:s})},r.r=function(t){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,o){if(1&o&&(t=r(t)),8&o||4&o&&typeof t=="object"&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&o&&typeof t!="string")for(var l in t)r.d(s,l,function(o){return t[o]}.bind(null,l));return s},r.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(o,"a",o),o},r.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},r.p="",r(r.s=3)}([function(t,o){var s;s=function(){return this}();try{s=s||new Function("return this")()}catch{typeof window=="object"&&(s=window)}t.exports=s},function(t,o,s){(function(t){var l=s(2),d=setTimeout;function g(){}function a(t){if(!(this instanceof a))throw new TypeError("Promises must be constructed via new");if(typeof t!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],e(t,this)}function h(t,o){for(;t._state===3;)t=t._value;t._state!==0?(t._handled=!0,a._immediateFn((function(){var s=t._state===1?o.onFulfilled:o.onRejected;if(s!==null){var l;try{l=s(t._value)}catch(t){return void v(o.promise,t)}p(o.promise,l)}else(t._state===1?p:v)(o.promise,t._value)}))):t._deferreds.push(o)}function p(t,o){try{if(o===t)throw new TypeError("A promise cannot be resolved with itself.");if(o&&(typeof o=="object"||typeof o=="function")){var s=o.then;if(o instanceof a)return t._state=3,t._value=o,void b(t);if(typeof s=="function")return void e((l=s,d=o,function(){l.apply(d,arguments)}),t)}t._state=1,t._value=o,b(t)}catch(o){v(t,o)}var l,d}function v(t,o){t._state=2,t._value=o,b(t)}function b(t){t._state===2&&t._deferreds.length===0&&a._immediateFn((function(){t._handled||a._unhandledRejectionFn(t._value)}));for(var o=0,s=t._deferreds.length;o<s;o++)h(t,t._deferreds[o]);t._deferreds=null}function w(t,o,s){this.onFulfilled=typeof t=="function"?t:null,this.onRejected=typeof o=="function"?o:null,this.promise=s}function e(t,o){var s=!1;try{t((function(t){s||(s=!0,p(o,t))}),(function(t){s||(s=!0,v(o,t))}))}catch(t){if(s)return;s=!0,v(o,t)}}a.prototype.catch=function(t){return this.then(null,t)},a.prototype.then=function(t,o){var s=new this.constructor(g);return h(this,new w(t,o,s)),s},a.prototype.finally=l.a,a.all=function(t){return new a((function(o,s){if(!t||t.length===void 0)throw new TypeError("Promise.all accepts an array");var l=Array.prototype.slice.call(t);if(l.length===0)return o([]);var d=l.length;function f(t,_){try{if(_&&(typeof _=="object"||typeof _=="function")){var C=_.then;if(typeof C=="function")return void C.call(_,(function(o){f(t,o)}),s)}l[t]=_,--d==0&&o(l)}catch(t){s(t)}}for(var _=0;_<l.length;_++)f(_,l[_])}))},a.resolve=function(t){return t&&typeof t=="object"&&t.constructor===a?t:new a((function(o){o(t)}))},a.reject=function(t){return new a((function(o,s){s(t)}))},a.race=function(t){return new a((function(o,s){for(var l=0,d=t.length;l<d;l++)t[l].then(o,s)}))},a._immediateFn=typeof t=="function"&&function(o){t(o)}||function(t){d(t,0)},a._unhandledRejectionFn=function(t){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},o.a=a}).call(this,s(5).setImmediate)},function(t,o,s){o.a=function(t){var o=this.constructor;return this.then((function(s){return o.resolve(t()).then((function(){return s}))}),(function(s){return o.resolve(t()).then((function(){return o.reject(s)}))}))}},function(t,o,s){function i(t){return(i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}s(4);var l,d,_,C,E,S,k,F=s(8),M=(d=function(t){return new Promise((function(o,s){t=C(t),(t=E(t)).beforeSend&&t.beforeSend();var l=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP");l.open(t.method,t.url),l.setRequestHeader("X-Requested-With","XMLHttpRequest"),Object.keys(t.headers).forEach((function(o){var s=t.headers[o];l.setRequestHeader(o,s)}));var d=t.ratio;l.upload.addEventListener("progress",(function(o){var s=Math.round(o.loaded/o.total*100),l=Math.ceil(s*d/100);t.progress(Math.min(l,100))}),!1),l.addEventListener("progress",(function(o){var s=Math.round(o.loaded/o.total*100),l=Math.ceil(s*(100-d)/100)+d;t.progress(Math.min(l,100))}),!1),l.onreadystatechange=function(){if(l.readyState===4){var t=l.response;try{t=JSON.parse(t)}catch{}var d=F.parseHeaders(l.getAllResponseHeaders()),_={body:t,code:l.status,headers:d};k(l.status)?o(_):s(_)}},l.send(t.data)}))},_=function(t){return t.method="POST",d(t)},C=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(t.url&&typeof t.url!="string")throw new Error("Url must be a string");if(t.url=t.url||"",t.method&&typeof t.method!="string")throw new Error("`method` must be a string or null");if(t.method=t.method?t.method.toUpperCase():"GET",t.headers&&i(t.headers)!=="object")throw new Error("`headers` must be an object or null");if(t.headers=t.headers||{},t.type&&(typeof t.type!="string"||!Object.values(l).includes(t.type)))throw new Error("`type` must be taken from module's «contentType» library");if(t.progress&&typeof t.progress!="function")throw new Error("`progress` must be a function or null");if(t.progress=t.progress||function(t){},t.beforeSend=t.beforeSend||function(t){},t.ratio&&typeof t.ratio!="number")throw new Error("`ratio` must be a number");if(t.ratio<0||t.ratio>100)throw new Error("`ratio` must be in a 0-100 interval");if(t.ratio=t.ratio||90,t.accept&&typeof t.accept!="string")throw new Error("`accept` must be a string with a list of allowed mime-types");if(t.accept=t.accept||"*/*",t.multiple&&typeof t.multiple!="boolean")throw new Error("`multiple` must be a true or false");if(t.multiple=t.multiple||!1,t.fieldName&&typeof t.fieldName!="string")throw new Error("`fieldName` must be a string");return t.fieldName=t.fieldName||"files",t},E=function(t){switch(t.method){case"GET":var o=S(t.data,l.URLENCODED);delete t.data,t.url=/\?/.test(t.url)?t.url+"&"+o:t.url+"?"+o;break;case"POST":case"PUT":case"DELETE":case"UPDATE":var s=function(){return(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).type||l.JSON}(t);(F.isFormData(t.data)||F.isFormElement(t.data))&&(s=l.FORM),t.data=S(t.data,s),s!==M.contentType.FORM&&(t.headers["content-type"]=s)}return t},S=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};switch(arguments.length>1?arguments[1]:void 0){case l.URLENCODED:return F.urlEncode(t);case l.JSON:return F.jsonEncode(t);case l.FORM:return F.formEncode(t);default:return t}},k=function(t){return t>=200&&t<300},{contentType:l={URLENCODED:"application/x-www-form-urlencoded; charset=utf-8",FORM:"multipart/form-data",JSON:"application/json; charset=utf-8"},request:d,get:function(t){return t.method="GET",d(t)},post:_,transport:function(t){return t=C(t),F.selectFiles(t).then((function(o){for(var s=new FormData,l=0;l<o.length;l++)s.append(t.fieldName,o[l],o[l].name);F.isObject(t.data)&&Object.keys(t.data).forEach((function(o){var l=t.data[o];s.append(o,l)}));var d=t.beforeSend;return t.beforeSend=function(){return d(o)},t.data=s,_(t)}))},selectFiles:function(t){return delete(t=C(t)).beforeSend,F.selectFiles(t)}});t.exports=M},function(t,o,s){s.r(o);var l=s(1);window.Promise=window.Promise||l.a},function(t,o,s){(function(t){var l=t!==void 0&&t||typeof self<"u"&&self||window,d=Function.prototype.apply;function g(t,o){this._id=t,this._clearFn=o}o.setTimeout=function(){return new g(d.call(setTimeout,l,arguments),clearTimeout)},o.setInterval=function(){return new g(d.call(setInterval,l,arguments),clearInterval)},o.clearTimeout=o.clearInterval=function(t){t&&t.close()},g.prototype.unref=g.prototype.ref=function(){},g.prototype.close=function(){this._clearFn.call(l,this._id)},o.enroll=function(t,o){clearTimeout(t._idleTimeoutId),t._idleTimeout=o},o.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},o._unrefActive=o.active=function(t){clearTimeout(t._idleTimeoutId);var o=t._idleTimeout;o>=0&&(t._idleTimeoutId=setTimeout((function(){t._onTimeout&&t._onTimeout()}),o))},s(6),o.setImmediate=typeof self<"u"&&self.setImmediate||t!==void 0&&t.setImmediate||this&&this.setImmediate,o.clearImmediate=typeof self<"u"&&self.clearImmediate||t!==void 0&&t.clearImmediate||this&&this.clearImmediate}).call(this,s(0))},function(t,o,s){(function(t,o){(function(t,s){if(!t.setImmediate){var l,d,_,C,E,S=1,k={},F=!1,M=t.document,j=Object.getPrototypeOf&&Object.getPrototypeOf(t);j=j&&j.setTimeout?j:t,{}.toString.call(t.process)==="[object process]"?l=function(t){o.nextTick((function(){m(t)}))}:function(){if(t.postMessage&&!t.importScripts){var o=!0,s=t.onmessage;return t.onmessage=function(){o=!1},t.postMessage("","*"),t.onmessage=s,o}}()?(C="setImmediate$"+Math.random()+"$",E=function(o){o.source===t&&typeof o.data=="string"&&o.data.indexOf(C)===0&&m(+o.data.slice(C.length))},t.addEventListener?t.addEventListener("message",E,!1):t.attachEvent("onmessage",E),l=function(o){t.postMessage(C+o,"*")}):t.MessageChannel?((_=new MessageChannel).port1.onmessage=function(t){m(t.data)},l=function(t){_.port2.postMessage(t)}):M&&"onreadystatechange"in M.createElement("script")?(d=M.documentElement,l=function(t){var o=M.createElement("script");o.onreadystatechange=function(){m(t),o.onreadystatechange=null,d.removeChild(o),o=null},d.appendChild(o)}):l=function(t){setTimeout(m,0,t)},j.setImmediate=function(t){typeof t!="function"&&(t=new Function(""+t));for(var o=new Array(arguments.length-1),s=0;s<o.length;s++)o[s]=arguments[s+1];var d={callback:t,args:o};return k[S]=d,l(S),S++},j.clearImmediate=y}function y(t){delete k[t]}function m(t){if(F)setTimeout(m,0,t);else{var o=k[t];if(o){F=!0;try{(function(t){var o=t.callback,l=t.args;switch(l.length){case 0:o();break;case 1:o(l[0]);break;case 2:o(l[0],l[1]);break;case 3:o(l[0],l[1],l[2]);break;default:o.apply(s,l)}})(o)}finally{y(t),F=!1}}}}})(typeof self>"u"?t===void 0?this:t:self)}).call(this,s(0),s(7))},function(t,o){var s,l,d=t.exports={};function c(){throw new Error("setTimeout has not been defined")}function g(){throw new Error("clearTimeout has not been defined")}function a(t){if(s===setTimeout)return setTimeout(t,0);if((s===c||!s)&&setTimeout)return s=setTimeout,setTimeout(t,0);try{return s(t,0)}catch{try{return s.call(null,t,0)}catch{return s.call(this,t,0)}}}(function(){try{s=typeof setTimeout=="function"?setTimeout:c}catch{s=c}try{l=typeof clearTimeout=="function"?clearTimeout:g}catch{l=g}})();var _,C=[],E=!1,S=-1;function w(){E&&_&&(E=!1,_.length?C=_.concat(C):S=-1,C.length&&e())}function e(){if(!E){var t=a(w);E=!0;for(var o=C.length;o;){for(_=C,C=[];++S<o;)_&&_[S].run();S=-1,o=C.length}_=null,E=!1,function(t){if(l===clearTimeout)return clearTimeout(t);if((l===g||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{l(t)}catch{try{return l.call(null,t)}catch{return l.call(this,t)}}}(t)}}function n(t,o){this.fun=t,this.array=o}function u(){}d.nextTick=function(t){var o=new Array(arguments.length-1);if(arguments.length>1)for(var s=1;s<arguments.length;s++)o[s-1]=arguments[s];C.push(new n(t,o)),C.length!==1||E||a(e)},n.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=u,d.addListener=u,d.once=u,d.off=u,d.removeListener=u,d.removeAllListeners=u,d.emit=u,d.prependListener=u,d.prependOnceListener=u,d.listeners=function(t){return[]},d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,o,s){function i(t,o){for(var s=0;s<o.length;s++){var l=o[s];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}var l=s(9);t.exports=function(){function c(){(function(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")})(this,c)}var t,o,s;return t=c,s=[{key:"urlEncode",value:function(t){return l(t)}},{key:"jsonEncode",value:function(t){return JSON.stringify(t)}},{key:"formEncode",value:function(t){if(this.isFormData(t))return t;if(this.isFormElement(t))return new FormData(t);if(this.isObject(t)){var o=new FormData;return Object.keys(t).forEach((function(s){var l=t[s];o.append(s,l)})),o}throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement")}},{key:"isObject",value:function(t){return Object.prototype.toString.call(t)==="[object Object]"}},{key:"isFormData",value:function(t){return t instanceof FormData}},{key:"isFormElement",value:function(t){return t instanceof HTMLFormElement}},{key:"selectFiles",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise((function(o,s){var l=document.createElement("INPUT");l.type="file",t.multiple&&l.setAttribute("multiple","multiple"),t.accept&&l.setAttribute("accept",t.accept),l.style.display="none",document.body.appendChild(l),l.addEventListener("change",(function(t){var s=t.target.files;o(s),document.body.removeChild(l)}),!1),l.click()}))}},{key:"parseHeaders",value:function(t){var o=t.trim().split(/[\r\n]+/),s={};return o.forEach((function(t){var o=t.split(": "),l=o.shift(),d=o.join(": ");l&&(s[l]=d)})),s}}],(o=null)&&i(t.prototype,o),s&&i(t,s),c}()},function(t,o){var r=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,escape).replace(/%20/g,"+")},i=function(t,o,s,l){return o=o||null,s=s||"&",l=l||null,t?function(t){for(var o=new Array,s=0;s<t.length;s++)t[s]&&o.push(t[s]);return o}(Object.keys(t).map((function(d){var _,C,E=d;if(l&&(E=l+"["+E+"]"),typeof t[d]=="object"&&t[d]!==null)_=i(t[d],null,s,E);else{o&&(C=E,E=!isNaN(parseFloat(C))&&isFinite(C)?o+Number(E):E);var S=t[d];S=(S=(S=(S=S===!0?"1":S)===!1?"0":S)===0?"0":S)||"",_=r(E)+"="+r(S)}return _}))).join(s).replace(/[!'()*]/g,""):""};t.exports=i}])}))})(_);var C=_.exports;const E=H(C);class B{
/**
   * @param {object} params - uploader module params
   * @param {ImageConfig} params.config - image tool config
   */
constructor({config:t}){this.config=t}uploadSelectedFiles(t,{onPreview:o,onUpload:s,onError:l}){E.selectFiles({accept:this.config.types,multiple:!0}).then((d=>{let _=0;for(var C=0;C<d.length&&!(t!==null&&_==t);C++){_++;let t,E=d[C],S=o(E);if(this.config.uploader&&typeof this.config.uploader.uploadByFile=="function"){const o=this.config.uploader.uploadByFile(E);A(o)||console.warn("Custom uploader method uploadByFile should return a Promise"),t=o}else t=this.uploadByFile(E);t.then((t=>{s(t,S)})).catch((t=>{l(t,S)}))}}))}
/**
   * Default file uploader
   * Fires ajax.post()
   *
   * @param {File} file - file pasted by drag-n-drop
   */uploadByFile(t){const o=new FormData;return o.append(this.config.field,t),this.config.additionalRequestData&&Object.keys(this.config.additionalRequestData).length&&Object.entries(this.config.additionalRequestData).forEach((([t,s])=>{o.append(t,s)})),E.post({url:this.config.endpoints.byFile,data:o,type:E.contentType.JSON,headers:this.config.additionalRequestHeaders}).then((t=>t.body))}}function A(t){return t&&typeof t.then=="function"}
/**
 * Image Gallery Tool for the Editor.js
 *
 * @author Igor Shuvalov «VolgaIgor»
 * @license MIT
 * @see {@link https://github.com/VolgaIgor/editorjs-gallery}
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
 * gallery: {
 *   class: ImageGallery,
 *   config: {
 *     endpoints: {
 *       byFile: 'http://localhost:8008/uploadFile',
 *     }
 *   },
 * },
 */class Z{
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
   */static get toolbox(){return{icon:d,title:"Gallery"}}
/**
   * @param {object} tool - tool properties got from editor.js
   * @param {ImageGalleryData} tool.data - previously saved data
   * @param {ImageConfig} tool.config - user config for Tool
   * @param {object} tool.api - Editor.js API
   * @param {boolean} tool.readOnly - read-only mode flag
   */constructor({data:t,config:o,api:s,readOnly:l}){this.api=s,this.readOnly=l,this.config={endpoints:o.endpoints||"",additionalRequestData:o.additionalRequestData||{},additionalRequestHeaders:o.additionalRequestHeaders||{},field:o.field||"image",types:o.types||"image/*",buttonContent:o.buttonContent||"",uploader:o.uploader||void 0,actions:o.actions||void 0,maxElementCount:o.maxElementCount||void 0,sortableJs:o.sortableJs},this.uploader=new B({config:this.config}),this.ui=new T({api:s,config:this.config,onSelectFile:()=>{let t=this.config.maxElementCount?this.config.maxElementCount-this._data.files.length:null;this.uploader.uploadSelectedFiles(t,{onPreview:t=>this.ui.getPreloader(t),onUpload:(t,o)=>{this.onUpload(t,o)},onError:(t,o)=>{this.uploadingFailed(t,o)}})},onDeleteFile:t=>{this.deleteImage(t)},onMoveFile:(t,o)=>{this.moveImage(t,o)},readOnly:l}),this.tunes=new O({api:s,actions:this.config.actions,onChange:t=>this.styleToggled(t)}),this._data={},this.data=t
/**
   * Renders Block content
   *
   * @public
   *
   * @returns {HTMLDivElement}
   */}render(){return this.ui.render(this.data)}rendered(){return this.checkMaxElemCount(),this.ui.onRendered()
/**
   * Validate data: check if Image exists
   *
   * @param {ImageGalleryData} savedData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */}validate(t){return!(!t.files||!t.files.length)}
/**
   * Return Block data
   *
   * @public
   *
   * @returns {ImageGalleryData}
   */save(){const t=this.ui.nodes.caption;return this._data.caption=t.innerHTML,this.data
/**
   * Makes buttons with tunes
   *
   * @public
   *
   * @returns {Element}
   */}renderSettings(){return this.tunes.render(this.data)}
/**
   * Set new image file
   *
   * @private
   *
   * @param {ImageGalleryDataFile} file - uploaded file data
   */appendImage(t){if(t&&t.url){if(this.config.maxElementCount&&this._data.files.length>=this.config.maxElementCount)return;this._data.files.push(t),this.ui.appendImage(t),this.checkMaxElemCount()}}
/**
   * Move image file
   *
   * @private
   *
   * @param {integer} from - target image old index
   * @param {integer} to - target image new index
   */moveImage(t,o){o>=this._data.files.length&&(o=this._data.files.length-1),this._data.files.splice(o,0,this._data.files.splice(t,1)[0])
/**
   * Delete image file
   *
   * @private
   *
   * @param {integer} id - image index
   */}deleteImage(t){this._data.files[t]!==void 0&&(this._data.files.splice(t,1),this.checkMaxElemCount()
/**
   * Stores all Tool's data
   *
   * @private
   *
   * @param {ImageGalleryData} data - data in Image Tool format
   */)}set data(t){this._data.files=[],t.files&&t.files.forEach((t=>{this.appendImage(t)})),this._data.caption=t.caption||"",this.ui.fillCaption(this._data.caption);let o=t.style||"";this.styleToggled(o)}
/**
   * Return Tool data
   *
   * @private
   *
   * @returns {ImageGalleryData}
   */get data(){return this._data}
/**
   * File uploading callback
   *
   * @private
   *
   * @param {UploadResponseFormat} response - uploading server response
   * @returns {void}
   */onUpload(t,o){this.ui.removePreloader(o),t.success&&t.file?this.appendImage(t.file):this.uploadingFailed("incorrect response: "+JSON.stringify(t))
/**
   * Handle uploader errors
   *
   * @private
   * @param {string} errorText - uploading error text
   * @returns {void}
   */}uploadingFailed(t,o){this.ui.removePreloader(o),console.log("Image Tool: uploading failed because of",t),this.api.notifier.show({message:this.api.i18n.t("Couldn’t upload image. Please try another."),style:"error"})
/**
   * Callback fired when Block Tune is activated
   *
   * @private
   *
   * @param {string} tuneName - tune that has been clicked
   * @returns {void}
   */}styleToggled(t){this._data.style=t==="fit"?"fit":"slider"}checkMaxElemCount(){this.ui.updateLimitCounter(this._data.files.length,this.config.maxElementCount),this.config.maxElementCount&&this._data.files.length>=this.config.maxElementCount?this.ui.hideFileButton():this.ui.showFileButton()}}export{Z as default};

