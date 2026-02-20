typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"&&self;function Pe(h){return h&&h.__esModule&&Object.prototype.hasOwnProperty.call(h,"default")?h.default:h}function Te(){}Object.assign(Te,{default:Te,register:Te,revert:function(){},__esModule:!0});Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(h){const g=(this.document||this.ownerDocument).querySelectorAll(h);let f=g.length;for(;--f>=0&&g.item(f)!==this;);return f>-1});Element.prototype.closest||(Element.prototype.closest=function(h){let g=this;if(!document.documentElement.contains(g))return null;do{if(g.matches(h))return g;g=g.parentElement||g.parentNode}while(g!==null);return null});Element.prototype.prepend||(Element.prototype.prepend=function(h){const g=document.createDocumentFragment();Array.isArray(h)||(h=[h]),h.forEach((h=>{const f=h instanceof Node;g.appendChild(f?h:document.createTextNode(h))})),this.insertBefore(g,this.firstChild)});Element.prototype.scrollIntoViewIfNeeded||(Element.prototype.scrollIntoViewIfNeeded=function(h){h=arguments.length===0||!!h;const g=this.parentNode,f=window.getComputedStyle(g,null),k=parseInt(f.getPropertyValue("border-top-width")),v=parseInt(f.getPropertyValue("border-left-width")),x=this.offsetTop-g.offsetTop<g.scrollTop,w=this.offsetTop-g.offsetTop+this.clientHeight-k>g.scrollTop+g.clientHeight,E=this.offsetLeft-g.offsetLeft<g.scrollLeft,C=this.offsetLeft-g.offsetLeft+this.clientWidth-v>g.scrollLeft+g.clientWidth,T=x&&!w;(x||w)&&h&&(g.scrollTop=this.offsetTop-g.offsetTop-g.clientHeight/2-k+this.clientHeight/2),(E||C)&&h&&(g.scrollLeft=this.offsetLeft-g.offsetLeft-g.clientWidth/2-v+this.clientWidth/2),(x||w||E||C)&&!h&&this.scrollIntoView(T)});window.requestIdleCallback=window.requestIdleCallback||function(h){const g=Date.now();return setTimeout((function(){h({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-g))}})}),1)};window.cancelIdleCallback=window.cancelIdleCallback||function(h){clearTimeout(h)};let Dt=(h=21)=>crypto.getRandomValues(new Uint8Array(h)).reduce(((h,g)=>(g&=63,h+=g<36?g.toString(36):g<62?(g-26).toString(36).toUpperCase():g>62?"-":"_",h)),"");var h=(h=>(h.VERBOSE="VERBOSE",h.INFO="INFO",h.WARN="WARN",h.ERROR="ERROR",h))(h||{});const g={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,LEFT:37,UP:38,DOWN:40,RIGHT:39,DELETE:46,META:91,SLASH:191},f={LEFT:0,WHEEL:1,RIGHT:2,BACKWARD:3,FORWARD:4};function me(h,g,f="log",k,v="color: inherit"){if(!("console"in window)||!window.console[f])return;const x=["info","log","warn","error"].includes(f),w=[];switch(me.logLevel){case"ERROR":if(f!=="error")return;break;case"WARN":if(!["error","warn"].includes(f))return;break;case"INFO":if(!x||h)return;break}k&&w.push(k);const E="Editor.js 2.29.0",C="line-height: 1em;\n            color: #006FEA;\n            display: inline-block;\n            font-size: 11px;\n            line-height: 1em;\n            background-color: #fff;\n            padding: 4px 9px;\n            border-radius: 30px;\n            border: 1px solid rgba(56, 138, 229, 0.16);\n            margin: 4px 5px 4px 0;";h&&(x?(w.unshift(C,v),g=`%c${E}%c ${g}`):g=`( ${E} )${g}`);try{x?k?console[f](`${g} %o`,...w):console[f](g,...w):console[f](g)}catch{}}me.logLevel="VERBOSE";function Ft(h){me.logLevel=h}const k=me.bind(window,!1),v=me.bind(window,!0);function oe(h){return Object.prototype.toString.call(h).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function M(h){return oe(h)==="function"||oe(h)==="asyncfunction"}function D(h){return oe(h)==="object"}function G(h){return oe(h)==="string"}function Ht(h){return oe(h)==="boolean"}function Je(h){return oe(h)==="number"}function Qe(h){return oe(h)==="undefined"}function W(h){return!h||Object.keys(h).length===0&&h.constructor===Object}function lt(h){return h>47&&h<58||h===32||h===13||h===229||h>64&&h<91||h>95&&h<112||h>185&&h<193||h>218&&h<223}async function zt(h,g=(()=>{}),f=(()=>{})){async function o(h,g,f){try{await h.function(h.data),await g(Qe(h.data)?{}:h.data)}catch{f(Qe(h.data)?{}:h.data)}}return h.reduce((async(h,k)=>(await h,o(k,g,f))),Promise.resolve())}function ct(h){return Array.prototype.slice.call(h)}function xe(h,g){return function(){const f=this,k=arguments;window.setTimeout((()=>h.apply(f,k)),g)}}function Ut(h){return h.name.split(".").pop()}function jt(h){return/^[-\w]+\/([-+\w]+|\*)$/.test(h)}function et(h,g,f){let k;return(...v)=>{const x=this,r=()=>{k=null,f||h.apply(x,v)},w=f&&!k;window.clearTimeout(k),k=window.setTimeout(r,g),w&&h.apply(x,v)}}function Ie(h,g,f=void 0){let k,v,x,w=null,E=0;f||(f={});const l=function(){E=f.leading===!1?0:Date.now(),w=null,x=h.apply(k,v),w||(k=v=null)};return function(){const C=Date.now();!E&&f.leading===!1&&(E=C);const T=g-(C-E);return k=this,v=arguments,T<=0||T>g?(w&&(clearTimeout(w),w=null),E=C,x=h.apply(k,v),w||(k=v=null)):!w&&f.trailing!==!1&&(w=setTimeout(l,T)),x}}function $t(){const h={win:!1,mac:!1,x11:!1,linux:!1},g=Object.keys(h).find((h=>window.navigator.appVersion.toLowerCase().indexOf(h)!==-1));return g&&(h[g]=!0),h}function re(h){return h[0].toUpperCase()+h.slice(1)}function Me(h,...g){if(!g.length)return h;const f=g.shift();if(D(h)&&D(f))for(const g in f)D(f[g])?(h[g]||Object.assign(h,{[g]:{}}),Me(h[g],f[g])):Object.assign(h,{[g]:f[g]});return Me(h,...g)}function ye(h){const g=$t();return h=h.replace(/shift/gi,"⇧").replace(/backspace/gi,"⌫").replace(/enter/gi,"⏎").replace(/up/gi,"↑").replace(/left/gi,"→").replace(/down/gi,"↓").replace(/right/gi,"←").replace(/escape/gi,"⎋").replace(/insert/gi,"Ins").replace(/delete/gi,"␡").replace(/\+/gi," + "),h=g.mac?h.replace(/ctrl|cmd/gi,"⌘").replace(/alt/gi,"⌥"):h.replace(/cmd/gi,"Ctrl").replace(/windows/gi,"WIN"),h}function Wt(h){try{return new URL(h).href}catch{}return h.substring(0,2)==="//"?window.location.protocol+h:window.location.origin+h}function Yt(){return Dt(10)}function Kt(h){window.open(h,"_blank")}function Xt(h=""){return`${h}${Math.floor(Math.random()*1e8).toString(16)}`}function Le(h,g,f){const k=`«${g}» is deprecated and will be removed in the next major release. Please use the «${f}» instead.`;h&&v(k,"warn")}function le(h,g,f){const k=f.value?"value":"get",v=f[k],x=`#${g}Cache`;if(f[k]=function(...h){return this[x]===void 0&&(this[x]=v.apply(this,...h)),this[x]},k==="get"&&f.set){const g=f.set;f.set=function(f){delete h[x],g.apply(this,f)}}return f}const x=650;function te(){return window.matchMedia(`(max-width: ${x}px)`).matches}const w=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1);function Vt(h,g){const f=Array.isArray(h)||D(h),k=Array.isArray(g)||D(g);return f||k?JSON.stringify(h)===JSON.stringify(g):h===g}class c{
/**
   * Check if passed tag has no closed tag
   *
   * @param {HTMLElement} tag - element to check
   * @returns {boolean}
   */
static isSingleTag(h){return h.tagName&&["AREA","BASE","BR","COL","COMMAND","EMBED","HR","IMG","INPUT","KEYGEN","LINK","META","PARAM","SOURCE","TRACK","WBR"].includes(h.tagName)}
/**
   * Check if element is BR or WBR
   *
   * @param {HTMLElement} element - element to check
   * @returns {boolean}
   */static isLineBreakTag(h){return h&&h.tagName&&["BR","WBR"].includes(h.tagName)}
/**
   * Helper for making Elements with class name and attributes
   *
   * @param  {string} tagName - new Element tag name
   * @param  {string[]|string} [classNames] - list or name of CSS class name(s)
   * @param  {object} [attributes] - any attributes
   * @returns {HTMLElement}
   */static make(h,g=null,f={}){const k=document.createElement(h);Array.isArray(g)?k.classList.add(...g):g&&k.classList.add(g);for(const h in f)Object.prototype.hasOwnProperty.call(f,h)&&(k[h]=f[h]);return k}
/**
   * Creates Text Node with the passed content
   *
   * @param {string} content - text content
   * @returns {Text}
   */static text(h){return document.createTextNode(h)}
/**
   * Append one or several elements to the parent
   *
   * @param  {Element|DocumentFragment} parent - where to append
   * @param  {Element|Element[]|DocumentFragment|Text|Text[]} elements - element or elements list
   */static append(h,g){Array.isArray(g)?g.forEach((g=>h.appendChild(g))):h.appendChild(g)}
/**
   * Append element or a couple to the beginning of the parent elements
   *
   * @param {Element} parent - where to append
   * @param {Element|Element[]} elements - element or elements list
   */static prepend(h,g){Array.isArray(g)?(g=g.reverse(),g.forEach((g=>h.prepend(g)))):h.prepend(g)}
/**
   * Swap two elements in parent
   *
   * @param {HTMLElement} el1 - from
   * @param {HTMLElement} el2 - to
   * @deprecated
   */static swap(h,g){const f=document.createElement("div"),k=h.parentNode;k.insertBefore(f,h),k.insertBefore(h,g),k.insertBefore(g,f),k.removeChild(f)
/**
   * Selector Decorator
   *
   * Returns first match
   *
   * @param {Element} el - element we searching inside. Default - DOM Document
   * @param {string} selector - searching string
   * @returns {Element}
   */}static find(h=document,g){return h.querySelector(g)}
/**
   * Get Element by Id
   *
   * @param {string} id - id to find
   * @returns {HTMLElement | null}
   */static get(h){return document.getElementById(h)}
/**
   * Selector Decorator.
   *
   * Returns all matches
   *
   * @param {Element|Document} el - element we searching inside. Default - DOM Document
   * @param {string} selector - searching string
   * @returns {NodeList}
   */static findAll(h=document,g){return h.querySelectorAll(g)}static get allInputsSelector(){return"[contenteditable=true], textarea, input:not([type]), "+["text","password","email","number","search","tel","url"].map((h=>`input[type="${h}"]`)).join(", ")}
/**
   * Find all contenteditable, textarea and editable input elements passed holder contains
   *
   * @param holder - element where to find inputs
   */static findAllInputs(h){return ct(h.querySelectorAll(c.allInputsSelector)).reduce(((h,g)=>c.isNativeInput(g)||c.containsOnlyInlineElements(g)?[...h,g]:[...h,...c.getDeepestBlockElements(g)]),[])}
/**
   * Search for deepest node which is Leaf.
   * Leaf is the vertex that doesn't have any child nodes
   *
   * @description Method recursively goes throw the all Node until it finds the Leaf
   * @param {Node} node - root Node. From this vertex we start Deep-first search
   *                      {@link https://en.wikipedia.org/wiki/Depth-first_search}
   * @param {boolean} [atLast] - find last text node
   * @returns {Node} - it can be text Node or Element Node, so that caret will able to work with it
   */static getDeepestNode(h,g=!1){const f=g?"lastChild":"firstChild",k=g?"previousSibling":"nextSibling";if(h&&h.nodeType===Node.ELEMENT_NODE&&h[f]){let v=h[f];if(c.isSingleTag(v)&&!c.isNativeInput(v)&&!c.isLineBreakTag(v))if(v[k])v=v[k];else{if(!v.parentNode[k])return v.parentNode;v=v.parentNode[k]}return this.getDeepestNode(v,g)}return h}
/**
   * Check if object is DOM node
   *
   * @param {*} node - object to check
   * @returns {boolean}
   */
static isElement(h){return!Je(h)&&(h&&h.nodeType&&h.nodeType===Node.ELEMENT_NODE)}
/**
   * Check if object is DocumentFragment node
   *
   * @param {object} node - object to check
   * @returns {boolean}
   */
static isFragment(h){return!Je(h)&&(h&&h.nodeType&&h.nodeType===Node.DOCUMENT_FRAGMENT_NODE)}
/**
   * Check if passed element is contenteditable
   *
   * @param {HTMLElement} element - html element to check
   * @returns {boolean}
   */static isContentEditable(h){return h.contentEditable==="true"}
/**
   * Checks target if it is native input
   *
   * @param {*} target - HTML element or string
   * @returns {boolean}
   */
static isNativeInput(h){const g=["INPUT","TEXTAREA"];return!(!h||!h.tagName)&&g.includes(h.tagName)}
/**
   * Checks if we can set caret
   *
   * @param {HTMLElement} target - target to check
   * @returns {boolean}
   */static canSetCaret(h){let g=!0;if(c.isNativeInput(h))switch(h.type){case"file":case"checkbox":case"radio":case"hidden":case"submit":case"button":case"image":case"reset":g=!1;break}else g=c.isContentEditable(h);return g}
/**
   * Checks node if it is empty
   *
   * @description Method checks simple Node without any childs for emptiness
   * If you have Node with 2 or more children id depth, you better use {@link Dom#isEmpty} method
   * @param {Node} node - node to check
   * @param {string} [ignoreChars] - char or substring to treat as empty
   * @returns {boolean} true if it is empty
   */static isNodeEmpty(h,g){let f;return!(this.isSingleTag(h)&&!this.isLineBreakTag(h))&&(f=this.isElement(h)&&this.isNativeInput(h)?h.value:h.textContent.replace("​",""),g&&(f=f.replace(new RegExp(g,"g"),"")),f.trim().length===0
/**
   * checks node if it is doesn't have any child nodes
   *
   * @param {Node} node - node to check
   * @returns {boolean}
   */)}static isLeaf(h){return!!h&&h.childNodes.length===0}
/**
   * breadth-first search (BFS)
   * {@link https://en.wikipedia.org/wiki/Breadth-first_search}
   *
   * @description Pushes to stack all DOM leafs and checks for emptiness
   * @param {Node} node - node to check
   * @param {string} [ignoreChars] - char or substring to treat as empty
   * @returns {boolean}
   */static isEmpty(h,g){h.normalize();const f=[h];for(;f.length>0;)if(h=f.shift(),!!h){if(this.isLeaf(h)&&!this.isNodeEmpty(h,g))return!1;h.childNodes&&f.push(...Array.from(h.childNodes))}return!0}
/**
   * Check if string contains html elements
   *
   * @param {string} str - string to check
   * @returns {boolean}
   */static isHTMLString(h){const g=c.make("div");return g.innerHTML=h,g.childElementCount>0
/**
   * Return length of node`s text content
   *
   * @param {Node} node - node with content
   * @returns {number}
   */}static getContentLength(h){return c.isNativeInput(h)?h.value.length:h.nodeType===Node.TEXT_NODE?h.length:h.textContent.length}
/**
   * Return array of names of block html elements
   *
   * @returns {string[]}
   */static get blockElements(){return["address","article","aside","blockquote","canvas","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","li","main","nav","noscript","ol","output","p","pre","ruby","section","table","tbody","thead","tr","tfoot","ul","video"]}
/**
   * Check if passed content includes only inline elements
   *
   * @param {string|HTMLElement} data - element or html string
   * @returns {boolean}
   */static containsOnlyInlineElements(h){let g;G(h)?(g=document.createElement("div"),g.innerHTML=h):g=h;const o=h=>!c.blockElements.includes(h.tagName.toLowerCase())&&Array.from(h.children).every(o);return Array.from(g.children).every(o)}
/**
   * Find and return all block elements in the passed parent (including subtree)
   *
   * @param {HTMLElement} parent - root element
   * @returns {HTMLElement[]}
   */static getDeepestBlockElements(h){return c.containsOnlyInlineElements(h)?[h]:Array.from(h.children).reduce(((h,g)=>[...h,...c.getDeepestBlockElements(g)]),[])}
/**
   * Helper for get holder from {string} or return HTMLElement
   *
   * @param {string | HTMLElement} element - holder's id or holder's HTML Element
   * @returns {HTMLElement}
   */static getHolder(h){return G(h)?document.getElementById(h):h}
/**
   * Returns true if element is anchor (is A tag)
   *
   * @param {Element} element - element to check
   * @returns {boolean}
   */static isAnchor(h){return h.tagName.toLowerCase()==="a"}
/**
   * Return element's offset related to the document
   *
   * @todo handle case when editor initialized in scrollable popup
   * @param el - element to compute offset
   */static offset(h){const g=h.getBoundingClientRect(),f=window.pageXOffset||document.documentElement.scrollLeft,k=window.pageYOffset||document.documentElement.scrollTop,v=g.top+k,x=g.left+f;return{top:v,left:x,bottom:v+g.height,right:x+g.width}}}const E={blockTunes:{toggler:{"Click to tune":"","or drag to move":""}},inlineToolbar:{converter:{"Convert to":""}},toolbar:{toolbox:{Add:""}},popover:{Filter:"","Nothing found":""}},C={Text:"",Link:"",Bold:"",Italic:""},T={link:{"Add a link":""},stub:{"The block can not be displayed correctly.":""}},B={delete:{Delete:"","Click to delete":""},moveUp:{"Move up":""},moveDown:{"Move down":""}},I={ui:E,toolNames:C,tools:T,blockTunes:B},O=class{
/**
   * Type-safe translation for internal UI texts:
   * Perform translation of the string by namespace and a key
   *
   * @example I18n.ui(I18nInternalNS.ui.blockTunes.toggler, 'Click to tune')
   * @param internalNamespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */
static ui(h,g){return O._t(h,g)}
/**
   * Translate for external strings that is not presented in default dictionary.
   * For example, for user-specified tool names
   *
   * @param namespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */static t(h,g){return O._t(h,g)}
/**
   * Adjust module for using external dictionary
   *
   * @param dictionary - new messages list to override default
   */static setDictionary(h){O.currentDictionary=h}
/**
   * Perform translation both for internal and external namespaces
   * If there is no translation found, returns passed key as a translated message
   *
   * @param namespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */static _t(h,g){const f=O.getNamespace(h);return f&&f[g]?f[g]:g}
/**
   * Find messages section by namespace path
   *
   * @param namespace - path to section
   */static getNamespace(h){return h.split(".").reduce(((h,g)=>h&&Object.keys(h).length?h[g]:{}),O.currentDictionary)}};let N=O;N.currentDictionary=I;class ut extends Error{}class Ee{constructor(){this.subscribers={}}
/**
   * Subscribe any event on callback
   *
   * @param eventName - event name
   * @param callback - subscriber
   */on(h,g){h in this.subscribers||(this.subscribers[h]=[]),this.subscribers[h].push(g)
/**
   * Subscribe any event on callback. Callback will be called once and be removed from subscribers array after call.
   *
   * @param eventName - event name
   * @param callback - subscriber
   */}once(h,g){h in this.subscribers||(this.subscribers[h]=[]);const o=f=>{const k=g(f),v=this.subscribers[h].indexOf(o);return v!==-1&&this.subscribers[h].splice(v,1),k};this.subscribers[h].push(o)}
/**
   * Emit callbacks with passed data
   *
   * @param eventName - event name
   * @param data - subscribers get this data when they were fired
   */emit(h,g){W(this.subscribers)||!this.subscribers[h]||this.subscribers[h].reduce(((h,g)=>{const f=g(h);return f!==void 0?f:h}),g)}
/**
   * Unsubscribe callback from event
   *
   * @param eventName - event name
   * @param callback - event handler
   */off(h,g){if(this.subscribers[h]!==void 0){for(let f=0;f<this.subscribers[h].length;f++)if(this.subscribers[h][f]===g){delete this.subscribers[h][f];break}}else console.warn(`EventDispatcher .off(): there is no subscribers for event "${h.toString()}". Probably, .off() called before .on()`)}destroy(){this.subscribers={}}}function ee(h){Object.setPrototypeOf(this,{
/**
     * Block id
     *
     * @returns {string}
     */
get id(){return h.id},
/**
     * Tool name
     *
     * @returns {string}
     */
get name(){return h.name},
/**
     * Tool config passed on Editor's initialization
     *
     * @returns {ToolConfig}
     */
get config(){return h.config},
/**
     * .ce-block element, that wraps plugin contents
     *
     * @returns {HTMLElement}
     */
get holder(){return h.holder},
/**
     * True if Block content is empty
     *
     * @returns {boolean}
     */
get isEmpty(){return h.isEmpty},
/**
     * True if Block is selected with Cross-Block selection
     *
     * @returns {boolean}
     */
get selected(){return h.selected},
/**
     * Set Block's stretch state
     *
     * @param {boolean} state — state to set
     */
set stretched(g){h.stretched=g},
/**
     * True if Block is stretched
     *
     * @returns {boolean}
     */
get stretched(){return h.stretched},get focusable(){return h.focusable},
/**
     * Call Tool method with errors handler under-the-hood
     *
     * @param {string} methodName - method to call
     * @param {object} param - object with parameters
     * @returns {unknown}
     */
call(g,f){return h.call(g,f)},
/**
     * Save Block content
     *
     * @returns {Promise<void|SavedData>}
     */
save(){return h.save()},
/**
     * Validate Block data
     *
     * @param {BlockToolData} data - data to validate
     * @returns {Promise<boolean>}
     */
validate(g){return h.validate(g)},dispatchChange(){h.dispatchChange()}})}class Fe{constructor(){this.allListeners=[]}
/**
   * Assigns event listener on element and returns unique identifier
   *
   * @param {EventTarget} element - DOM element that needs to be listened
   * @param {string} eventType - event type
   * @param {Function} handler - method that will be fired on event
   * @param {boolean|AddEventListenerOptions} options - useCapture or {capture, passive, once}
   */on(h,g,f,k=!1){const v=Xt("l"),x={id:v,element:h,eventType:g,handler:f,options:k};if(!this.findOne(h,g,f))return this.allListeners.push(x),h.addEventListener(g,f,k),v
/**
   * Removes event listener from element
   *
   * @param {EventTarget} element - DOM element that we removing listener
   * @param {string} eventType - event type
   * @param {Function} handler - remove handler, if element listens several handlers on the same event type
   * @param {boolean|AddEventListenerOptions} options - useCapture or {capture, passive, once}
   */}off(h,g,f,k){const v=this.findAll(h,g,f);v.forEach(((h,g)=>{const f=this.allListeners.indexOf(v[g]);f>-1&&(this.allListeners.splice(f,1),h.element.removeEventListener(h.eventType,h.handler,h.options))}))}
/**
   * Removes listener by id
   *
   * @param {string} id - listener identifier
   */offById(h){const g=this.findById(h);g&&g.element.removeEventListener(g.eventType,g.handler,g.options)}
/**
   * Finds and returns first listener by passed params
   *
   * @param {EventTarget} element - event target
   * @param {string} [eventType] - event type
   * @param {Function} [handler] - event handler
   * @returns {ListenerData|null}
   */findOne(h,g,f){const k=this.findAll(h,g,f);return k.length>0?k[0]:null}
/**
   * Return all stored listeners by passed params
   *
   * @param {EventTarget} element - event target
   * @param {string} eventType - event type
   * @param {Function} handler - event handler
   * @returns {ListenerData[]}
   */findAll(h,g,f){let k;const v=h?this.findByEventTarget(h):[];return k=h&&g&&f?v.filter((h=>h.eventType===g&&h.handler===f)):h&&g?v.filter((h=>h.eventType===g)):v,k}removeAll(){this.allListeners.map((h=>{h.element.removeEventListener(h.eventType,h.handler,h.options)})),this.allListeners=[]}destroy(){this.removeAll()}
/**
   * Search method: looks for listener by passed element
   *
   * @param {EventTarget} element - searching element
   * @returns {Array} listeners that found on element
   */findByEventTarget(h){return this.allListeners.filter((g=>{if(g.element===h)return g}))}
/**
   * Search method: looks for listener by passed event type
   *
   * @param {string} eventType - event type
   * @returns {ListenerData[]} listeners that found on element
   */findByType(h){return this.allListeners.filter((g=>{if(g.eventType===h)return g}))}
/**
   * Search method: looks for listener by passed handler
   *
   * @param {Function} handler - event handler
   * @returns {ListenerData[]} listeners that found on element
   */findByHandler(h){return this.allListeners.filter((g=>{if(g.handler===h)return g}))}
/**
   * Returns listener data found by id
   *
   * @param {string} id - listener identifier
   * @returns {ListenerData}
   */findById(h){return this.allListeners.find((g=>g.id===h))}}class y{
/**
   * @class
   * @param options - Module options
   * @param options.config - Module config
   * @param options.eventsDispatcher - Common event bus
   */
constructor({config:h,eventsDispatcher:g}){if(this.nodes={},this.listeners=new Fe,this.readOnlyMutableListeners={
/**
       * Assigns event listener on DOM element and pushes into special array that might be removed
       *
       * @param {EventTarget} element - DOM Element
       * @param {string} eventType - Event name
       * @param {Function} handler - Event handler
       * @param {boolean|AddEventListenerOptions} options - Listening options
       */
on:(h,g,f,k=!1)=>{this.mutableListenerIds.push(this.listeners.on(h,g,f,k))},clearAll:()=>{for(const h of this.mutableListenerIds)this.listeners.offById(h);this.mutableListenerIds=[]}},this.mutableListenerIds=[],new.target===y)throw new TypeError("Constructors for abstract class Module are not allowed.");this.config=h,this.eventsDispatcher=g
/**
   * Editor modules setter
   *
   * @param {EditorModules} Editor - Editor's Modules
   */}set state(h){this.Editor=h}removeAllNodes(){for(const h in this.nodes){const g=this.nodes[h];g instanceof HTMLElement&&g.remove()}}get isRtl(){return this.config.i18n.direction==="rtl"}}class b{constructor(){this.instance=null,this.selection=null,this.savedSelectionRange=null,this.isFakeBackgroundEnabled=!1,this.commandBackground="backColor",this.commandRemoveFormat="removeFormat"
/**
   * Editor styles
   *
   * @returns {{editorWrapper: string, editorZone: string}}
   */}static get CSS(){return{editorWrapper:"codex-editor",editorZone:"codex-editor__redactor"}}
/**
   * Returns selected anchor
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorNode}
   *
   * @returns {Node|null}
   */static get anchorNode(){const h=window.getSelection();return h?h.anchorNode:null}
/**
   * Returns selected anchor element
   *
   * @returns {Element|null}
   */static get anchorElement(){const h=window.getSelection();if(!h)return null;const g=h.anchorNode;return g?c.isElement(g)?g:g.parentElement:null}
/**
   * Returns selection offset according to the anchor node
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorOffset}
   *
   * @returns {number|null}
   */static get anchorOffset(){const h=window.getSelection();return h?h.anchorOffset:null}
/**
   * Is current selection range collapsed
   *
   * @returns {boolean|null}
   */static get isCollapsed(){const h=window.getSelection();return h?h.isCollapsed:null}
/**
   * Check current selection if it is at Editor's zone
   *
   * @returns {boolean}
   */static get isAtEditor(){return this.isSelectionAtEditor(b.get())}
/**
   * Check if passed selection is at Editor's zone
   *
   * @param selection - Selection object to check
   */static isSelectionAtEditor(h){if(!h)return!1;let g=h.anchorNode||h.focusNode;g&&g.nodeType===Node.TEXT_NODE&&(g=g.parentNode);let f=null;return g&&g instanceof Element&&(f=g.closest(`.${b.CSS.editorZone}`)),!!f&&f.nodeType===Node.ELEMENT_NODE
/**
   * Check if passed range at Editor zone
   *
   * @param range - range to check
   */}static isRangeAtEditor(h){if(!h)return;let g=h.startContainer;g&&g.nodeType===Node.TEXT_NODE&&(g=g.parentNode);let f=null;return g&&g instanceof Element&&(f=g.closest(`.${b.CSS.editorZone}`)),!!f&&f.nodeType===Node.ELEMENT_NODE}static get isSelectionExists(){return!!b.get().anchorNode}
/**
   * Return first range
   *
   * @returns {Range|null}
   */static get range(){return this.getRangeFromSelection(this.get())}
/**
   * Returns range from passed Selection object
   *
   * @param selection - Selection object to get Range from
   */static getRangeFromSelection(h){return h&&h.rangeCount?h.getRangeAt(0):null}
/**
   * Calculates position and size of selected text
   *
   * @returns {DOMRect | ClientRect}
   */static get rect(){let h,g=document.selection,f={x:0,y:0,width:0,height:0};if(g&&g.type!=="Control")return g,h=g.createRange(),f.x=h.boundingLeft,f.y=h.boundingTop,f.width=h.boundingWidth,f.height=h.boundingHeight,f;if(!window.getSelection)return k("Method window.getSelection is not supported","warn"),f;if(g=window.getSelection(),g.rangeCount===null||isNaN(g.rangeCount))return k("Method SelectionUtils.rangeCount is not supported","warn"),f;if(g.rangeCount===0)return f;if(h=g.getRangeAt(0).cloneRange(),h.getBoundingClientRect&&(f=h.getBoundingClientRect()),f.x===0&&f.y===0){const g=document.createElement("span");if(g.getBoundingClientRect){g.appendChild(document.createTextNode("​")),h.insertNode(g),f=g.getBoundingClientRect();const k=g.parentNode;k.removeChild(g),k.normalize()}}return f}
/**
   * Returns selected text as String
   *
   * @returns {string}
   */static get text(){return window.getSelection?window.getSelection().toString():""}
/**
   * Returns window SelectionUtils
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Window/getSelection}
   *
   * @returns {Selection}
   */static get(){return window.getSelection()}
/**
   * Set focus to contenteditable or native input element
   *
   * @param element - element where to set focus
   * @param offset - offset of cursor
   */static setCursor(h,g=0){const f=document.createRange(),k=window.getSelection();return c.isNativeInput(h)?c.canSetCaret(h)?(h.focus(),h.selectionStart=h.selectionEnd=g,h.getBoundingClientRect()):void 0:(f.setStart(h,g),f.setEnd(h,g),k.removeAllRanges(),k.addRange(f),f.getBoundingClientRect()
/**
   * Check if current range exists and belongs to container
   *
   * @param container - where range should be
   */)}static isRangeInsideContainer(h){const g=b.range;return g!==null&&h.contains(g.startContainer)}static addFakeCursor(){const h=b.range;if(h===null)return;const g=c.make("span","codex-editor__fake-cursor");g.dataset.mutationFree="true",h.collapse(),h.insertNode(g)
/**
   * Check if passed element contains a fake cursor
   *
   * @param el - where to check
   */}static isFakeCursorInsideContainer(h){return c.find(h,".codex-editor__fake-cursor")!==null}
/**
   * Removes fake cursor from a container
   *
   * @param container - container to look for
   */static removeFakeCursor(h=document.body){const g=c.find(h,".codex-editor__fake-cursor");g&&g.remove()}removeFakeBackground(){this.isFakeBackgroundEnabled&&(this.isFakeBackgroundEnabled=!1,document.execCommand(this.commandRemoveFormat))}setFakeBackground(){document.execCommand(this.commandBackground,!1,"#a8d6ff"),this.isFakeBackgroundEnabled=!0}save(){this.savedSelectionRange=b.range}restore(){if(!this.savedSelectionRange)return;const h=window.getSelection();h.removeAllRanges(),h.addRange(this.savedSelectionRange)}clearSaved(){this.savedSelectionRange=null}collapseToEnd(){const h=window.getSelection(),g=document.createRange();g.selectNodeContents(h.focusNode),g.collapse(!1),h.removeAllRanges(),h.addRange(g)
/**
   * Looks ahead to find passed tag from current selection
   *
   * @param  {string} tagName       - tag to found
   * @param  {string} [className]   - tag's class name
   * @param  {number} [searchDepth] - count of tags that can be included. For better performance.
   * @returns {HTMLElement|null}
   */}findParentTag(h,g,f=10){const k=window.getSelection();let v=null;return k&&k.anchorNode&&k.focusNode?([k.anchorNode,k.focusNode].forEach((k=>{let x=f;for(;x>0&&k.parentNode&&!(k.tagName===h&&(v=k,g&&k.classList&&!k.classList.contains(g)&&(v=null),v));)k=k.parentNode,x--})),v
/**
   * Expands selection range to the passed parent node
   *
   * @param {HTMLElement} element - element which contents should be selected
   */):null}expandToTag(h){const g=window.getSelection();g.removeAllRanges();const f=document.createRange();f.selectNodeContents(h),g.addRange(f)}}function Qt(h,g){const{type:f,target:k,addedNodes:v,removedNodes:x}=h;if(k===g)return!0;if(["characterData","attributes"].includes(f)){const h=k.nodeType===Node.TEXT_NODE?k.parentNode:k;return g.contains(h)}const w=Array.from(v).some((h=>g.contains(h))),E=Array.from(x).some((h=>g.contains(h)));return w||E}const F="redactor dom changed",z="block changed",U="fake cursor is about to be toggled",j="fake cursor have been set";function ot(h,g){return h.mergeable&&h.name===g.name}function eo(h,g){const f=g==null?void 0:g.export;return M(f)?f(h):G(f)?h[f]:(f!==void 0&&k("Conversion «export» property must be a string or function. String means key of saved data object to export. Function should export processed string to export."),"")}function to(h,g){const f=g==null?void 0:g.import;return M(f)?f(h):G(f)?{[f]:h}:(f!==void 0&&k("Conversion «import» property must be a string or function. String means key of tool data to import. Function accepts a imported string and return composed tool data."),{})}var Y=(h=>(h.APPEND_CALLBACK="appendCallback",h.RENDERED="rendered",h.MOVED="moved",h.UPDATED="updated",h.REMOVED="removed",h.ON_PASTE="onPaste",h))(Y||{});class R extends Ee{
/**
   * @param options - block constructor options
   * @param [options.id] - block's id. Will be generated if omitted.
   * @param options.data - Tool's initial data
   * @param options.tool — block's tool
   * @param options.api - Editor API module for pass it to the Block Tunes
   * @param options.readOnly - Read-Only flag
   * @param [eventBus] - Editor common event bus. Allows to subscribe on some Editor events. Could be omitted when "virtual" Block is created. See BlocksAPI@composeBlockData.
   */
constructor({id:h=Yt(),data:g,tool:f,api:k,readOnly:v,tunesData:x},w){super(),this.cachedInputs=[],this.toolRenderedElement=null,this.tunesInstances=new Map,this.defaultTunesInstances=new Map,this.unavailableTunesData={},this.inputIndex=0,this.editorEventBus=null,this.handleFocus=()=>{this.dropInputsCache(),this.updateCurrentInput()},this.didMutated=(h=void 0)=>{const g=h===void 0,f=h instanceof InputEvent;!g&&!f&&this.detectToolRootChange(h);let k;k=!(!g&&!f)||!(h.length>0&&h.every((h=>{const{addedNodes:g,removedNodes:f,target:k}=h;return[...Array.from(g),...Array.from(f),k].some((h=>(c.isElement(h)||(h=h.parentElement),h&&h.closest('[data-mutation-free="true"]')!==null)))}))),k&&(this.dropInputsCache(),this.updateCurrentInput(),this.call("updated"),this.emit("didMutated",this))},this.name=f.name,this.id=h,this.settings=f.settings,this.config=f.settings.config||{},this.api=k,this.editorEventBus=w||null,this.blockAPI=new ee(this),this.tool=f,this.toolInstance=f.create(g,this.blockAPI,v),this.tunes=f.tunes,this.composeTunes(x),this.holder=this.compose(),window.requestIdleCallback((()=>{this.watchBlockMutations(),this.addInputEvents()}))
/**
   * CSS classes for the Block
   *
   * @returns {{wrapper: string, content: string}}
   */}static get CSS(){return{wrapper:"ce-block",wrapperStretched:"ce-block--stretched",content:"ce-block__content",selected:"ce-block--selected",dropTarget:"ce-block--drop-target"}}
/**
   * Find and return all editable elements (contenteditable and native inputs) in the Tool HTML
   *
   * @returns {HTMLElement[]}
   */get inputs(){if(this.cachedInputs.length!==0)return this.cachedInputs;const h=c.findAllInputs(this.holder);return this.inputIndex>h.length-1&&(this.inputIndex=h.length-1),this.cachedInputs=h,h
/**
   * Return current Tool`s input
   *
   * @returns {HTMLElement}
   */}get currentInput(){return this.inputs[this.inputIndex]}
/**
   * Set input index to the passed element
   *
   * @param {HTMLElement | Node} element - HTML Element to set as current input
   */set currentInput(h){const g=this.inputs.findIndex((g=>g===h||g.contains(h)));g!==-1&&(this.inputIndex=g)}
/**
   * Return first Tool`s input
   *
   * @returns {HTMLElement}
   */get firstInput(){return this.inputs[0]}
/**
   * Return first Tool`s input
   *
   * @returns {HTMLElement}
   */get lastInput(){const h=this.inputs;return h[h.length-1]}
/**
   * Return next Tool`s input or undefined if it doesn't exist
   *
   * @returns {HTMLElement}
   */get nextInput(){return this.inputs[this.inputIndex+1]}
/**
   * Return previous Tool`s input or undefined if it doesn't exist
   *
   * @returns {HTMLElement}
   */get previousInput(){return this.inputs[this.inputIndex-1]}
/**
   * Get Block's JSON data
   *
   * @returns {object}
   */get data(){return this.save().then((h=>h&&!W(h.data)?h.data:{}))}
/**
   * Returns tool's sanitizer config
   *
   * @returns {object}
   */get sanitize(){return this.tool.sanitizeConfig}
/**
   * is block mergeable
   * We plugin have merge function then we call it mergeable
   *
   * @returns {boolean}
   */get mergeable(){return M(this.toolInstance.merge)}get focusable(){return this.inputs.length!==0}
/**
   * Check block for emptiness
   *
   * @returns {boolean}
   */get isEmpty(){const h=c.isEmpty(this.pluginsContent,"/"),g=!this.hasMedia;return h&&g}
/**
   * Check if block has a media content such as images, iframe and other
   *
   * @returns {boolean}
   */get hasMedia(){const h=["img","iframe","video","audio","source","input","textarea","twitterwidget"];return!!this.holder.querySelector(h.join(","))}
/**
   * Set selected state
   * We don't need to mark Block as Selected when it is empty
   *
   * @param {boolean} state - 'true' to select, 'false' to remove selection
   */set selected(h){var g,f;this.holder.classList.toggle(R.CSS.selected,h);const k=h===!0&&b.isRangeInsideContainer(this.holder),v=h===!1&&b.isFakeCursorInsideContainer(this.holder);(k||v)&&((g=this.editorEventBus)==null||g.emit(U,{state:h}),k?b.addFakeCursor():b.removeFakeCursor(this.holder),(f=this.editorEventBus)==null||f.emit(j,{state:h})
/**
   * Returns True if it is Selected
   *
   * @returns {boolean}
   */)}get selected(){return this.holder.classList.contains(R.CSS.selected)}
/**
   * Set stretched state
   *
   * @param {boolean} state - 'true' to enable, 'false' to disable stretched state
   */set stretched(h){this.holder.classList.toggle(R.CSS.wrapperStretched,h)}
/**
   * Return Block's stretched state
   *
   * @returns {boolean}
   */get stretched(){return this.holder.classList.contains(R.CSS.wrapperStretched)}
/**
   * Toggle drop target state
   *
   * @param {boolean} state - 'true' if block is drop target, false otherwise
   */set dropTarget(h){this.holder.classList.toggle(R.CSS.dropTarget,h)}
/**
   * Returns Plugins content
   *
   * @returns {HTMLElement}
   */get pluginsContent(){return this.toolRenderedElement}
/**
   * Calls Tool's method
   *
   * Method checks tool property {MethodName}. Fires method with passes params If it is instance of Function
   *
   * @param {string} methodName - method to call
   * @param {object} params - method argument
   */call(h,g){if(M(this.toolInstance[h])){h==="appendCallback"&&k("`appendCallback` hook is deprecated and will be removed in the next major release. Use `rendered` hook instead","warn");try{this.toolInstance[h].call(this.toolInstance,g)}catch(g){k(`Error during '${h}' call: ${g.message}`,"error")}}}
/**
   * Call plugins merge method
   *
   * @param {BlockToolData} data - data to merge
   */async mergeWith(h){await this.toolInstance.merge(h)}
/**
   * Extracts data from Block
   * Groups Tool's save processing time
   *
   * @returns {object}
   */async save(){const h=await this.toolInstance.save(this.pluginsContent),g=this.unavailableTunesData;[...this.tunesInstances.entries(),...this.defaultTunesInstances.entries()].forEach((([h,f])=>{if(M(f.save))try{g[h]=f.save()}catch(h){k(`Tune ${f.constructor.name} save method throws an Error %o`,"warn",h)}}));const f=window.performance.now();let v;return Promise.resolve(h).then((h=>(v=window.performance.now(),{id:this.id,tool:this.name,data:h,tunes:g,time:v-f}))).catch((h=>{k(`Saving process for ${this.name} tool failed due to the ${h}`,"log","red")}))}
/**
   * Uses Tool's validation method to check the correctness of output data
   * Tool's validation method is optional
   *
   * @description Method returns true|false whether data passed the validation or not
   * @param {BlockToolData} data - data to validate
   * @returns {Promise<boolean>} valid
   */async validate(h){let g=!0;return this.toolInstance.validate instanceof Function&&(g=await this.toolInstance.validate(h)),g}getTunes(){const h=document.createElement("div"),g=[],f=typeof this.toolInstance.renderSettings=="function"?this.toolInstance.renderSettings():[],k=[...this.tunesInstances.values(),...this.defaultTunesInstances.values()].map((h=>h.render()));return[f,k].flat().forEach((f=>{c.isElement(f)?h.appendChild(f):Array.isArray(f)?g.push(...f):g.push(f)})),[g,h]}updateCurrentInput(){this.currentInput=c.isNativeInput(document.activeElement)||!b.anchorNode?document.activeElement:b.anchorNode}dispatchChange(){this.didMutated()}destroy(){this.unwatchBlockMutations(),this.removeInputEvents(),super.destroy(),M(this.toolInstance.destroy)&&this.toolInstance.destroy()}async getActiveToolboxEntry(){const h=this.tool.toolbox;if(h.length===1)return Promise.resolve(this.tool.toolbox[0]);const g=await this.data;return h.find((h=>Object.entries(h.data).some((([h,f])=>g[h]&&Vt(g[h],f)))))}async exportDataAsString(){const h=await this.data;return eo(h,this.tool.conversionConfig)}
/**
   * Make default Block wrappers and put Tool`s content there
   *
   * @returns {HTMLDivElement}
   */compose(){const h=c.make("div",R.CSS.wrapper),g=c.make("div",R.CSS.content),f=this.toolInstance.render();h.dataset.id=this.id,this.toolRenderedElement=f,g.appendChild(this.toolRenderedElement);let v=g;return[...this.tunesInstances.values(),...this.defaultTunesInstances.values()].forEach((h=>{if(M(h.wrap))try{v=h.wrap(v)}catch(g){k(`Tune ${h.constructor.name} wrap method throws an Error %o`,"warn",g)}})),h.appendChild(v),h
/**
   * Instantiate Block Tunes
   *
   * @param tunesData - current Block tunes data
   * @private
   */}composeTunes(h){Array.from(this.tunes.values()).forEach((g=>{(g.isInternal?this.defaultTunesInstances:this.tunesInstances).set(g.name,g.create(h[g.name],this.blockAPI))})),Object.entries(h).forEach((([h,g])=>{this.tunesInstances.has(h)||(this.unavailableTunesData[h]=g)}))}addInputEvents(){this.inputs.forEach((h=>{h.addEventListener("focus",this.handleFocus),c.isNativeInput(h)&&h.addEventListener("input",this.didMutated)}))}removeInputEvents(){this.inputs.forEach((h=>{h.removeEventListener("focus",this.handleFocus),c.isNativeInput(h)&&h.removeEventListener("input",this.didMutated)}))}watchBlockMutations(){var h;this.redactorDomChangedCallback=h=>{const{mutations:g}=h;g.some((h=>Qt(h,this.toolRenderedElement)))&&this.didMutated(g)},(h=this.editorEventBus)==null||h.on(F,this.redactorDomChangedCallback)}unwatchBlockMutations(){var h;(h=this.editorEventBus)==null||h.off(F,this.redactorDomChangedCallback)}
/**
   * Sometimes Tool can replace own main element, for example H2 -> H4 or UL -> OL
   * We need to detect such changes and update a link to tools main element with the new one
   *
   * @param mutations - records of block content mutations
   */detectToolRootChange(h){h.forEach((h=>{if(Array.from(h.removedNodes).includes(this.toolRenderedElement)){const g=h.addedNodes[h.addedNodes.length-1];this.toolRenderedElement=g}}))}dropInputsCache(){this.cachedInputs=[]}}class oo extends y{constructor(){super(...arguments),this.insert=(h=this.config.defaultBlock,g={},f={},k,v,x,w)=>{const E=this.Editor.BlockManager.insert({id:w,tool:h,data:g,index:k,needToFocus:v,replace:x});return new ee(E)},this.composeBlockData=async h=>{const g=this.Editor.Tools.blockTools.get(h);return new R({tool:g,api:this.Editor.API,readOnly:!0,data:{},tunesData:{}}).data},this.update=async(h,g)=>{const{BlockManager:f}=this.Editor,k=f.getBlockById(h);if(k===void 0)throw new Error(`Block with id "${h}" not found`);const v=await f.update(k,g);return new ee(v)},this.convert=(h,g,f)=>{var k,v;const{BlockManager:x,Tools:w}=this.Editor,E=x.getBlockById(h);if(!E)throw new Error(`Block with id "${h}" not found`);const C=w.blockTools.get(E.name),T=w.blockTools.get(g);if(!T)throw new Error(`Block Tool with type "${g}" not found`);const B=((k=C==null?void 0:C.conversionConfig)==null?void 0:k.export)!==void 0,I=((v=T.conversionConfig)==null?void 0:v.import)!==void 0;if(!B||!I){const h=[!B&&re(E.name),!I&&re(g)].filter(Boolean).join(" and ");throw new Error(`Conversion from "${E.name}" to "${g}" is not possible. ${h} tool(s) should provide a "conversionConfig"`)}x.convert(E,g,f)},this.insertMany=(h,g=this.Editor.BlockManager.blocks.length-1)=>{this.validateIndex(g);const f=h.map((({id:h,type:g,data:f})=>this.Editor.BlockManager.composeBlock({id:h,tool:g||this.config.defaultBlock,data:f})));return this.Editor.BlockManager.insertMany(f,g),f.map((h=>new ee(h)))}
/**
   * Available methods
   *
   * @returns {Blocks}
   */}get methods(){return{clear:()=>this.clear(),render:h=>this.render(h),renderFromHTML:h=>this.renderFromHTML(h),delete:h=>this.delete(h),swap:(h,g)=>this.swap(h,g),move:(h,g)=>this.move(h,g),getBlockByIndex:h=>this.getBlockByIndex(h),getById:h=>this.getById(h),getCurrentBlockIndex:()=>this.getCurrentBlockIndex(),getBlockIndex:h=>this.getBlockIndex(h),getBlocksCount:()=>this.getBlocksCount(),stretchBlock:(h,g=!0)=>this.stretchBlock(h,g),insertNewBlock:()=>this.insertNewBlock(),insert:this.insert,insertMany:this.insertMany,update:this.update,composeBlockData:this.composeBlockData,convert:this.convert}}
/**
   * Returns Blocks count
   *
   * @returns {number}
   */getBlocksCount(){return this.Editor.BlockManager.blocks.length}
/**
   * Returns current block index
   *
   * @returns {number}
   */getCurrentBlockIndex(){return this.Editor.BlockManager.currentBlockIndex}
/**
   * Returns the index of Block by id;
   *
   * @param id - block id
   */getBlockIndex(h){const g=this.Editor.BlockManager.getBlockById(h);if(g)return this.Editor.BlockManager.getBlockIndex(g);v("There is no block with id `"+h+"`","warn")}
/**
   * Returns BlockAPI object by Block index
   *
   * @param {number} index - index to get
   */getBlockByIndex(h){const g=this.Editor.BlockManager.getBlockByIndex(h);if(g!==void 0)return new ee(g);v("There is no block at index `"+h+"`","warn")}
/**
   * Returns BlockAPI object by Block id
   *
   * @param id - id of block to get
   */getById(h){const g=this.Editor.BlockManager.getBlockById(h);return g===void 0?(v("There is no block with id `"+h+"`","warn"),null):new ee(g)}
/**
   * Call Block Manager method that swap Blocks
   *
   * @param {number} fromIndex - position of first Block
   * @param {number} toIndex - position of second Block
   * @deprecated — use 'move' instead
   */swap(h,g){k("`blocks.swap()` method is deprecated and will be removed in the next major release. Use `block.move()` method instead","info"),this.Editor.BlockManager.swap(h,g)
/**
   * Move block from one index to another
   *
   * @param {number} toIndex - index to move to
   * @param {number} fromIndex - index to move from
   */}move(h,g){this.Editor.BlockManager.move(h,g)}
/**
   * Deletes Block
   *
   * @param {number} blockIndex - index of Block to delete
   */delete(h=this.Editor.BlockManager.currentBlockIndex){try{const g=this.Editor.BlockManager.getBlockByIndex(h);this.Editor.BlockManager.removeBlock(g)}catch(h){v(h,"warn");return}this.Editor.BlockManager.blocks.length===0&&this.Editor.BlockManager.insert(),this.Editor.BlockManager.currentBlock&&this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock,this.Editor.Caret.positions.END),this.Editor.Toolbar.close()}async clear(){await this.Editor.BlockManager.clear(!0),this.Editor.InlineToolbar.close()
/**
   * Fills Editor with Blocks data
   *
   * @param {OutputData} data — Saved Editor data
   */}async render(h){if(h===void 0||h.blocks===void 0)throw new Error("Incorrect data passed to the render() method");this.Editor.ModificationsObserver.disable(),await this.Editor.BlockManager.clear(),await this.Editor.Renderer.render(h.blocks),this.Editor.ModificationsObserver.enable()
/**
   * Render passed HTML string
   *
   * @param {string} data - HTML string to render
   * @returns {Promise<void>}
   */}renderFromHTML(h){return this.Editor.BlockManager.clear(),this.Editor.Paste.processText(h,!0)
/**
   * Stretch Block's content
   *
   * @param {number} index - index of Block to stretch
   * @param {boolean} status - true to enable, false to disable
   * @deprecated Use BlockAPI interface to stretch Blocks
   */}stretchBlock(h,g=!0){Le(!0,"blocks.stretchBlock()","BlockAPI");const f=this.Editor.BlockManager.getBlockByIndex(h);f&&(f.stretched=g)}
/**
   * Insert new Block
   * After set caret to this Block
   *
   * @todo remove in 3.0.0
   * @deprecated with insert() method
   */insertNewBlock(){k("Method blocks.insertNewBlock() is deprecated and it will be removed in the next major release. Use blocks.insert() instead.","warn"),this.insert()
/**
   * Validated block index and throws an error if it's invalid
   *
   * @param index - index to validate
   */}validateIndex(h){if(typeof h!="number")throw new Error("Index should be a number");if(h<0)throw new Error("Index should be greater than or equal to 0");if(h===null)throw new Error("Index should be greater than or equal to 0")}}class io extends y{constructor(){super(...arguments),this.setToFirstBlock=(h=this.Editor.Caret.positions.DEFAULT,g=0)=>!!this.Editor.BlockManager.firstBlock&&(this.Editor.Caret.setToBlock(this.Editor.BlockManager.firstBlock,h,g),!0),this.setToLastBlock=(h=this.Editor.Caret.positions.DEFAULT,g=0)=>!!this.Editor.BlockManager.lastBlock&&(this.Editor.Caret.setToBlock(this.Editor.BlockManager.lastBlock,h,g),!0),this.setToPreviousBlock=(h=this.Editor.Caret.positions.DEFAULT,g=0)=>!!this.Editor.BlockManager.previousBlock&&(this.Editor.Caret.setToBlock(this.Editor.BlockManager.previousBlock,h,g),!0),this.setToNextBlock=(h=this.Editor.Caret.positions.DEFAULT,g=0)=>!!this.Editor.BlockManager.nextBlock&&(this.Editor.Caret.setToBlock(this.Editor.BlockManager.nextBlock,h,g),!0),this.setToBlock=(h,g=this.Editor.Caret.positions.DEFAULT,f=0)=>!!this.Editor.BlockManager.blocks[h]&&(this.Editor.Caret.setToBlock(this.Editor.BlockManager.blocks[h],g,f),!0),this.focus=(h=!1)=>h?this.setToLastBlock(this.Editor.Caret.positions.END):this.setToFirstBlock(this.Editor.Caret.positions.START)
/**
   * Available methods
   *
   * @returns {Caret}
   */}get methods(){return{setToFirstBlock:this.setToFirstBlock,setToLastBlock:this.setToLastBlock,setToPreviousBlock:this.setToPreviousBlock,setToNextBlock:this.setToNextBlock,setToBlock:this.setToBlock,focus:this.focus}}}class no extends y{
/**
   * Available methods
   *
   * @returns {Events}
   */
get methods(){return{emit:(h,g)=>this.emit(h,g),off:(h,g)=>this.off(h,g),on:(h,g)=>this.on(h,g)}}
/**
   * Subscribe on Events
   *
   * @param {string} eventName - event name to subscribe
   * @param {Function} callback - event handler
   */on(h,g){this.eventsDispatcher.on(h,g)}
/**
   * Emit event with data
   *
   * @param {string} eventName - event to emit
   * @param {object} data - event's data
   */emit(h,g){this.eventsDispatcher.emit(h,g)}
/**
   * Unsubscribe from Event
   *
   * @param {string} eventName - event to unsubscribe
   * @param {Function} callback - event handler
   */off(h,g){this.eventsDispatcher.off(h,g)}}class He extends y{
/**
   * Return namespace section for tool or block tune
   *
   * @param tool - tool object
   */
static getNamespace(h){return h.isTune()?`blockTunes.${h.name}`:`tools.${h.name}`}get methods(){return{t:()=>{v("I18n.t() method can be accessed only from Tools","warn")}}}
/**
   * Return I18n API methods with tool namespaced dictionary
   *
   * @param tool - Tool object
   */getMethodsForTool(h){return Object.assign(this.methods,{t:g=>N.t(He.getNamespace(h),g)})}}class so extends y{get methods(){return{blocks:this.Editor.BlocksAPI.methods,caret:this.Editor.CaretAPI.methods,events:this.Editor.EventsAPI.methods,listeners:this.Editor.ListenersAPI.methods,notifier:this.Editor.NotifierAPI.methods,sanitizer:this.Editor.SanitizerAPI.methods,saver:this.Editor.SaverAPI.methods,selection:this.Editor.SelectionAPI.methods,styles:this.Editor.StylesAPI.classes,toolbar:this.Editor.ToolbarAPI.methods,inlineToolbar:this.Editor.InlineToolbarAPI.methods,tooltip:this.Editor.TooltipAPI.methods,i18n:this.Editor.I18nAPI.methods,readOnly:this.Editor.ReadOnlyAPI.methods,ui:this.Editor.UiAPI.methods}}
/**
   * Returns Editor.js Core API methods for passed tool
   *
   * @param tool - tool object
   */getMethodsForTool(h){return Object.assign(this.methods,{i18n:this.Editor.I18nAPI.getMethodsForTool(h)})}}class ro extends y{
/**
   * Available methods
   *
   * @returns {InlineToolbar}
   */
get methods(){return{close:()=>this.close(),open:()=>this.open()}}open(){this.Editor.InlineToolbar.tryToShow()}close(){this.Editor.InlineToolbar.close()}}class ao extends y{
/**
   * Available methods
   *
   * @returns {Listeners}
   */
get methods(){return{on:(h,g,f,k)=>this.on(h,g,f,k),off:(h,g,f,k)=>this.off(h,g,f,k),offById:h=>this.offById(h)}}
/**
   * Ads a DOM event listener. Return it's id.
   *
   * @param {HTMLElement} element - Element to set handler to
   * @param {string} eventType - event type
   * @param {() => void} handler - event handler
   * @param {boolean} useCapture - capture event or not
   */on(h,g,f,k){return this.listeners.on(h,g,f,k)}
/**
   * Removes DOM listener from element
   *
   * @param {Element} element - Element to remove handler from
   * @param eventType - event type
   * @param handler - event handler
   * @param {boolean} useCapture - capture event or not
   */off(h,g,f,k){this.listeners.off(h,g,f,k)}
/**
   * Removes DOM listener by the listener id
   *
   * @param id - id of the listener to remove
   */offById(h){this.listeners.offById(h)}}var K={},X={get exports(){return K},set exports(h){K=h}};(function(h,g){(function(g,f){h.exports=f()})(window,(function(){return function(h){var g={};function i(f){if(g[f])return g[f].exports;var k=g[f]={i:f,l:!1,exports:{}};return h[f].call(k.exports,k,k.exports,i),k.l=!0,k.exports}return i.m=h,i.c=g,i.d=function(h,g,f){i.o(h,g)||Object.defineProperty(h,g,{enumerable:!0,get:f})},i.r=function(h){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(h,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(h,"__esModule",{value:!0})},i.t=function(h,g){if(1&g&&(h=i(h)),8&g||4&g&&typeof h=="object"&&h&&h.__esModule)return h;var f=Object.create(null);if(i.r(f),Object.defineProperty(f,"default",{enumerable:!0,value:h}),2&g&&typeof h!="string")for(var k in h)i.d(f,k,function(g){return h[g]}.bind(null,k));return f},i.n=function(h){var g=h&&h.__esModule?function(){return h.default}:function(){return h};return i.d(g,"a",g),g},i.o=function(h,g){return Object.prototype.hasOwnProperty.call(h,g)},i.p="/",i(i.s=0)}([function(h,g,f){f(1),h.exports=function(){var h=f(6),g="cdx-notify--bounce-in",k=null;return{show:function(f){if(f.message){(function(){if(k)return!0;k=h.getWrapper(),document.body.appendChild(k)})();var v=null,x=f.time||8e3;switch(f.type){case"confirm":v=h.confirm(f);break;case"prompt":v=h.prompt(f);break;default:v=h.alert(f),window.setTimeout((function(){v.remove()}),x)}k.appendChild(v),v.classList.add(g)}}}}()},function(h,g,f){var k=f(2);typeof k=="string"&&(k=[[h.i,k,""]]);var v={hmr:!0,transform:void 0,insertInto:void 0};f(4)(k,v),k.locals&&(h.exports=k.locals)},function(h,g,f){(h.exports=f(3)(!1)).push([h.i,'.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:\'\';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:\'\';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}',""])},function(h,g){h.exports=function(h){var g=[];return g.toString=function(){return this.map((function(g){var f=function(h,g){var f=h[1]||"",k=h[3];if(!k)return f;if(g&&typeof btoa=="function"){var v=(w=k,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(w))))+" */"),x=k.sources.map((function(h){return"/*# sourceURL="+k.sourceRoot+h+" */"}));return[f].concat(x).concat([v]).join("\n")}var w;return[f].join("\n")}(g,h);return g[2]?"@media "+g[2]+"{"+f+"}":f})).join("")},g.i=function(h,f){typeof h=="string"&&(h=[[null,h,""]]);for(var k={},v=0;v<this.length;v++){var x=this[v][0];typeof x=="number"&&(k[x]=!0)}for(v=0;v<h.length;v++){var w=h[v];typeof w[0]=="number"&&k[w[0]]||(f&&!w[2]?w[2]=f:f&&(w[2]="("+w[2]+") and ("+f+")"),g.push(w))}},g}},function(h,g,f){var k,v,x={},w=(k=function(){return window&&document&&document.all&&!window.atob},function(){return v===void 0&&(v=k.apply(this,arguments)),v}),E=function(h){var g={};return function(h){if(typeof h=="function")return h();if(g[h]===void 0){var f=function(h){return document.querySelector(h)}.call(this,h);if(window.HTMLIFrameElement&&f instanceof window.HTMLIFrameElement)try{f=f.contentDocument.head}catch{f=null}g[h]=f}return g[h]}}(),C=null,T=0,B=[],I=f(5);function p(h,g){for(var f=0;f<h.length;f++){var k=h[f],v=x[k.id];if(v){v.refs++;for(var w=0;w<v.parts.length;w++)v.parts[w](k.parts[w]);for(;w<k.parts.length;w++)v.parts.push(H(k.parts[w],g))}else{var E=[];for(w=0;w<k.parts.length;w++)E.push(H(k.parts[w],g));x[k.id]={id:k.id,refs:1,parts:E}}}}function m(h,g){for(var f=[],k={},v=0;v<h.length;v++){var x=h[v],w=g.base?x[0]+g.base:x[0],E={css:x[1],media:x[2],sourceMap:x[3]};k[w]?k[w].parts.push(E):f.push(k[w]={id:w,parts:[E]})}return f}function L(h,g){var f=E(h.insertInto);if(!f)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var k=B[B.length-1];if(h.insertAt==="top")k?k.nextSibling?f.insertBefore(g,k.nextSibling):f.appendChild(g):f.insertBefore(g,f.firstChild),B.push(g);else if(h.insertAt==="bottom")f.appendChild(g);else{if(typeof h.insertAt!="object"||!h.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var v=E(h.insertInto+" "+h.insertAt.before);f.insertBefore(g,v)}}function A(h){if(h.parentNode===null)return!1;h.parentNode.removeChild(h);var g=B.indexOf(h);g>=0&&B.splice(g,1)}function S(h){var g=document.createElement("style");return h.attrs.type===void 0&&(h.attrs.type="text/css"),Z(g,h.attrs),L(h,g),g}function Z(h,g){Object.keys(g).forEach((function(f){h.setAttribute(f,g[f])}))}function H(h,g){var f,k,v,x;if(g.transform&&h.css){if(!(x=g.transform(h.css)))return function(){};h.css=x}if(g.singleton){var w=T++;f=C||(C=S(g)),k=ce.bind(null,f,w,!1),v=ce.bind(null,f,w,!0)}else h.sourceMap&&typeof URL=="function"&&typeof URL.createObjectURL=="function"&&typeof URL.revokeObjectURL=="function"&&typeof Blob=="function"&&typeof btoa=="function"?(f=function(h){var g=document.createElement("link");return h.attrs.type===void 0&&(h.attrs.type="text/css"),h.attrs.rel="stylesheet",Z(g,h.attrs),L(h,g),g}(g),k=function(h,g,f){var k=f.css,v=f.sourceMap,x=g.convertToAbsoluteUrls===void 0&&v;(g.convertToAbsoluteUrls||x)&&(k=I(k)),v&&(k+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(v))))+" */");var w=new Blob([k],{type:"text/css"}),E=h.href;h.href=URL.createObjectURL(w),E&&URL.revokeObjectURL(E)}.bind(null,f,g),v=function(){A(f),f.href&&URL.revokeObjectURL(f.href)}):(f=S(g),k=function(h,g){var f=g.css,k=g.media;if(k&&h.setAttribute("media",k),h.styleSheet)h.styleSheet.cssText=f;else{for(;h.firstChild;)h.removeChild(h.firstChild);h.appendChild(document.createTextNode(f))}}.bind(null,f),v=function(){A(f)});return k(h),function(g){if(g){if(g.css===h.css&&g.media===h.media&&g.sourceMap===h.sourceMap)return;k(h=g)}else v()}}h.exports=function(h,g){if(typeof DEBUG<"u"&&DEBUG&&typeof document!="object")throw new Error("The style-loader cannot be used in a non-browser environment");(g=g||{}).attrs=typeof g.attrs=="object"?g.attrs:{},g.singleton||typeof g.singleton=="boolean"||(g.singleton=w()),g.insertInto||(g.insertInto="head"),g.insertAt||(g.insertAt="bottom");var f=m(h,g);return p(f,g),function(h){for(var k=[],v=0;v<f.length;v++){var w=f[v];(E=x[w.id]).refs--,k.push(E)}for(h&&p(m(h,g),g),v=0;v<k.length;v++){var E;if((E=k[v]).refs===0){for(var C=0;C<E.parts.length;C++)E.parts[C]();delete x[E.id]}}}};var O,N=(O=[],function(h,g){return O[h]=g,O.filter(Boolean).join("\n")});function ce(h,g,f,k){var v=f?"":k.css;if(h.styleSheet)h.styleSheet.cssText=N(g,v);else{var x=document.createTextNode(v),w=h.childNodes;w[g]&&h.removeChild(w[g]),w.length?h.insertBefore(x,w[g]):h.appendChild(x)}}},function(h,g){h.exports=function(h){var g=typeof window<"u"&&window.location;if(!g)throw new Error("fixUrls requires window.location");if(!h||typeof h!="string")return h;var f=g.protocol+"//"+g.host,k=f+g.pathname.replace(/\/[^\/]*$/,"/");return h.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(h,g){var v,x=g.trim().replace(/^"(.*)"$/,(function(h,g){return g})).replace(/^'(.*)'$/,(function(h,g){return g}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(x)?h:(v=x.indexOf("//")===0?x:x.indexOf("/")===0?f+x:k+x.replace(/^\.\//,""),"url("+JSON.stringify(v)+")")}))}},function(h,g,f){var k,v,x,w,E,C,T,B,I;h.exports=(k="cdx-notifies",v="cdx-notify",x="cdx-notify__cross",w="cdx-notify__button--confirm",E="cdx-notify__button--cancel",C="cdx-notify__input",T="cdx-notify__button",B="cdx-notify__btns-wrapper",{alert:I=function(h){var g=document.createElement("DIV"),f=document.createElement("DIV"),k=h.message,w=h.style;return g.classList.add(v),w&&g.classList.add(v+"--"+w),g.innerHTML=k,f.classList.add(x),f.addEventListener("click",g.remove.bind(g)),g.appendChild(f),g},confirm:function(h){var g=I(h),f=document.createElement("div"),k=document.createElement("button"),v=document.createElement("button"),C=g.querySelector("."+x),O=h.cancelHandler,N=h.okHandler;return f.classList.add(B),k.innerHTML=h.okText||"Confirm",v.innerHTML=h.cancelText||"Cancel",k.classList.add(T),v.classList.add(T),k.classList.add(w),v.classList.add(E),O&&typeof O=="function"&&(v.addEventListener("click",O),C.addEventListener("click",O)),N&&typeof N=="function"&&k.addEventListener("click",N),k.addEventListener("click",g.remove.bind(g)),v.addEventListener("click",g.remove.bind(g)),f.appendChild(k),f.appendChild(v),g.appendChild(f),g},prompt:function(h){var g=I(h),f=document.createElement("div"),k=document.createElement("button"),v=document.createElement("input"),E=g.querySelector("."+x),O=h.cancelHandler,N=h.okHandler;return f.classList.add(B),k.innerHTML=h.okText||"Ok",k.classList.add(T),k.classList.add(w),v.classList.add(C),h.placeholder&&v.setAttribute("placeholder",h.placeholder),h.default&&(v.value=h.default),h.inputType&&(v.type=h.inputType),O&&typeof O=="function"&&E.addEventListener("click",O),N&&typeof N=="function"&&k.addEventListener("click",(function(){N(v.value)})),k.addEventListener("click",g.remove.bind(g)),f.appendChild(v),f.appendChild(k),g.appendChild(f),g},getWrapper:function(){var h=document.createElement("DIV");return h.classList.add(k),h}})}])}))})(X);const Q=Pe(K);class ho{
/**
   * Show web notification
   *
   * @param {NotifierOptions | ConfirmNotifierOptions | PromptNotifierOptions} options - notification options
   */
show(h){Q.show(h)}}class uo extends y{
/**
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
constructor({config:h,eventsDispatcher:g}){super({config:h,eventsDispatcher:g}),this.notifier=new ho}get methods(){return{show:h=>this.show(h)}}
/**
   * Show notification
   *
   * @param {NotifierOptions} options - message option
   */show(h){return this.notifier.show(h)}}class po extends y{get methods(){const e=()=>this.isEnabled;return{toggle:h=>this.toggle(h),get isEnabled(){return e()}}}
/**
   * Set or toggle read-only state
   *
   * @param {boolean|undefined} state - set or toggle state
   * @returns {boolean} current value
   */toggle(h){return this.Editor.ReadOnly.toggle(h)}get isEnabled(){return this.Editor.ReadOnly.isEnabled}}var J={},ie={get exports(){return J},set exports(h){J=h}};(function(h,g){(function(g,f){h.exports=f()})(0,(function(){function t(h){var g=h.tags,f=Object.keys(g),k=f.map((function(h){return typeof g[h]})).every((function(h){return h==="object"||h==="boolean"||h==="function"}));if(!k)throw new Error("The configuration was invalid");this.config=h}var h=["P","LI","TD","TH","DIV","H1","H2","H3","H4","H5","H6","PRE"];function i(g){return h.indexOf(g.nodeName)!==-1}var g=["A","B","STRONG","I","EM","SUB","SUP","U","STRIKE"];function r(h){return g.indexOf(h.nodeName)!==-1}t.prototype.clean=function(h){const g=document.implementation.createHTMLDocument(),f=g.createElement("div");return f.innerHTML=h,this._sanitize(g,f),f.innerHTML},t.prototype._sanitize=function(h,g){var f=a(h,g),k=f.firstChild();if(k)do{if(k.nodeType!==Node.TEXT_NODE){if(k.nodeType===Node.COMMENT_NODE){g.removeChild(k),this._sanitize(h,g);break}var v,x=r(k);x&&(v=Array.prototype.some.call(k.childNodes,i));var w=!!g.parentNode,E=i(g)&&i(k)&&w,C=k.nodeName.toLowerCase(),T=l(this.config,C,k),B=x&&v;if(B||d(k,T)||!this.config.keepNestedBlockElements&&E){if(!(k.nodeName==="SCRIPT"||k.nodeName==="STYLE"))for(;k.childNodes.length>0;)g.insertBefore(k.childNodes[0],k);g.removeChild(k),this._sanitize(h,g);break}for(var I=0;I<k.attributes.length;I+=1){var O=k.attributes[I];u(O,T,k)&&(k.removeAttribute(O.name),I-=1)}this._sanitize(h,k)}else if(k.data.trim()===""&&(k.previousElementSibling&&i(k.previousElementSibling)||k.nextElementSibling&&i(k.nextElementSibling))){g.removeChild(k),this._sanitize(h,g);break}}while(k=f.nextSibling())};function a(h,g){return h.createTreeWalker(g,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT,null,!1)}function l(h,g,f){return typeof h.tags[g]=="function"?h.tags[g](f):h.tags[g]}function d(h,g){return typeof g>"u"||typeof g=="boolean"&&!g}function u(h,g,f){var k=h.name.toLowerCase();return g!==!0&&(typeof g[k]=="function"?!g[k](h.value,f):typeof g[k]>"u"||g[k]===!1||typeof g[k]=="string"&&g[k]!==h.value)}return t}))})(ie);const ne=J;function bt(h,g){return h.map((h=>{const f=M(g)?g(h.tool):g;return W(f)||(h.data=ze(h.data,f)),h}))}function V(h,g={}){const f={tags:g};return new ne(f).clean(h)}function ze(h,g){return Array.isArray(h)?bo(h,g):D(h)?mo(h,g):G(h)?ko(h,g):h}function bo(h,g){return h.map((h=>ze(h,g)))}function mo(h,g){const f={};for(const k in h){if(!Object.prototype.hasOwnProperty.call(h,k))continue;const v=h[k],x=vo(g[k])?g[k]:g;f[k]=ze(v,x)}return f}function ko(h,g){return D(g)?V(h,g):g===!1?V(h,{}):h}function vo(h){return D(h)||Ht(h)||M(h)}class xo extends y{
/**
   * Available methods
   *
   * @returns {SanitizerConfig}
   */
get methods(){return{clean:(h,g)=>this.clean(h,g)}}
/**
   * Perform sanitizing of a string
   *
   * @param {string} taintString - what to sanitize
   * @param {SanitizerConfig} config - sanitizer config
   * @returns {string}
   */clean(h,g){return V(h,g)}}class wo extends y{
/**
   * Available methods
   *
   * @returns {Saver}
   */
get methods(){return{save:()=>this.save()}}
/**
   * Return Editor's data
   *
   * @returns {OutputData}
   */save(){const h="Editor's content can not be saved in read-only mode";return this.Editor.ReadOnly.isEnabled?(v(h,"warn"),Promise.reject(new Error(h))):this.Editor.Saver.save()}}class yo extends y{
/**
   * Available methods
   *
   * @returns {SelectionAPIInterface}
   */
get methods(){return{findParentTag:(h,g)=>this.findParentTag(h,g),expandToTag:h=>this.expandToTag(h)}}
/**
   * Looks ahead from selection and find passed tag with class name
   *
   * @param {string} tagName - tag to find
   * @param {string} className - tag's class name
   * @returns {HTMLElement|null}
   */findParentTag(h,g){return(new b).findParentTag(h,g)}
/**
   * Expand selection to passed tag
   *
   * @param {HTMLElement} node - tag that should contain selection
   */expandToTag(h){(new b).expandToTag(h)}}class Eo extends y{get classes(){return{block:"cdx-block",inlineToolButton:"ce-inline-tool",inlineToolButtonActive:"ce-inline-tool--active",input:"cdx-input",loader:"cdx-loader",button:"cdx-button",settingsButton:"cdx-settings-button",settingsButtonActive:"cdx-settings-button--active"}}}class Bo extends y{
/**
   * Available methods
   *
   * @returns {Toolbar}
   */
get methods(){return{close:()=>this.close(),open:()=>this.open(),toggleBlockSettings:h=>this.toggleBlockSettings(h),toggleToolbox:h=>this.toggleToolbox(h)}}open(){this.Editor.Toolbar.moveAndOpen()}close(){this.Editor.Toolbar.close()}
/**
   * Toggles Block Setting of the current block
   *
   * @param {boolean} openingState —  opening state of Block Setting
   */toggleBlockSettings(h){this.Editor.BlockManager.currentBlockIndex!==-1?h??!this.Editor.BlockSettings.opened?(this.Editor.Toolbar.moveAndOpen(),this.Editor.BlockSettings.open()):this.Editor.BlockSettings.close():v("Could't toggle the Toolbar because there is no block selected ","warn")}
/**
   * Open toolbox
   *
   * @param {boolean} openingState - Opening state of toolbox
   */toggleToolbox(h){this.Editor.BlockManager.currentBlockIndex!==-1?h??!this.Editor.Toolbar.toolbox.opened?(this.Editor.Toolbar.moveAndOpen(),this.Editor.Toolbar.toolbox.open()):this.Editor.Toolbar.toolbox.close():v("Could't toggle the Toolbox because there is no block selected ","warn")}}var se={},ae={get exports(){return se},set exports(h){se=h}};(function(h,g){(function(g,f){h.exports=f()})(window,(function(){return function(h){var g={};function i(f){if(g[f])return g[f].exports;var k=g[f]={i:f,l:!1,exports:{}};return h[f].call(k.exports,k,k.exports,i),k.l=!0,k.exports}return i.m=h,i.c=g,i.d=function(h,g,f){i.o(h,g)||Object.defineProperty(h,g,{enumerable:!0,get:f})},i.r=function(h){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(h,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(h,"__esModule",{value:!0})},i.t=function(h,g){if(1&g&&(h=i(h)),8&g||4&g&&typeof h=="object"&&h&&h.__esModule)return h;var f=Object.create(null);if(i.r(f),Object.defineProperty(f,"default",{enumerable:!0,value:h}),2&g&&typeof h!="string")for(var k in h)i.d(f,k,function(g){return h[g]}.bind(null,k));return f},i.n=function(h){var g=h&&h.__esModule?function(){return h.default}:function(){return h};return i.d(g,"a",g),g},i.o=function(h,g){return Object.prototype.hasOwnProperty.call(h,g)},i.p="",i(i.s=0)}([function(h,g,f){h.exports=f(1)},function(h,g,f){f.r(g),f.d(g,"default",(function(){return n}));class n{constructor(){this.nodes={wrapper:null,content:null},this.showed=!1,this.offsetTop=10,this.offsetLeft=10,this.offsetRight=10,this.hidingDelay=0,this.handleWindowScroll=()=>{this.showed&&this.hide(!0)},this.loadStyles(),this.prepare(),window.addEventListener("scroll",this.handleWindowScroll,{passive:!0})}get CSS(){return{tooltip:"ct",tooltipContent:"ct__content",tooltipShown:"ct--shown",placement:{left:"ct--left",bottom:"ct--bottom",right:"ct--right",top:"ct--top"}}}show(h,g,f){this.nodes.wrapper||this.prepare(),this.hidingTimeout&&clearTimeout(this.hidingTimeout);const k=Object.assign({placement:"bottom",marginTop:0,marginLeft:0,marginRight:0,marginBottom:0,delay:70,hidingDelay:0},f);if(k.hidingDelay&&(this.hidingDelay=k.hidingDelay),this.nodes.content.innerHTML="",typeof g=="string")this.nodes.content.appendChild(document.createTextNode(g));else{if(!(g instanceof Node))throw Error("[CodeX Tooltip] Wrong type of «content» passed. It should be an instance of Node or String. But "+typeof g+" given.");this.nodes.content.appendChild(g)}switch(this.nodes.wrapper.classList.remove(...Object.values(this.CSS.placement)),k.placement){case"top":this.placeTop(h,k);break;case"left":this.placeLeft(h,k);break;case"right":this.placeRight(h,k);break;case"bottom":default:this.placeBottom(h,k)}k&&k.delay?this.showingTimeout=setTimeout((()=>{this.nodes.wrapper.classList.add(this.CSS.tooltipShown),this.showed=!0}),k.delay):(this.nodes.wrapper.classList.add(this.CSS.tooltipShown),this.showed=!0)}hide(h=!1){if(this.hidingDelay&&!h)return this.hidingTimeout&&clearTimeout(this.hidingTimeout),void(this.hidingTimeout=setTimeout((()=>{this.hide(!0)}),this.hidingDelay));this.nodes.wrapper.classList.remove(this.CSS.tooltipShown),this.showed=!1,this.showingTimeout&&clearTimeout(this.showingTimeout)}onHover(h,g,f){h.addEventListener("mouseenter",(()=>{this.show(h,g,f)})),h.addEventListener("mouseleave",(()=>{this.hide()}))}destroy(){this.nodes.wrapper.remove(),window.removeEventListener("scroll",this.handleWindowScroll)}prepare(){this.nodes.wrapper=this.make("div",this.CSS.tooltip),this.nodes.content=this.make("div",this.CSS.tooltipContent),this.append(this.nodes.wrapper,this.nodes.content),this.append(document.body,this.nodes.wrapper)}loadStyles(){const h="codex-tooltips-style";if(document.getElementById(h))return;const g=f(2),k=this.make("style",null,{textContent:g.toString(),id:h});this.prepend(document.head,k)}placeBottom(h,g){const f=h.getBoundingClientRect(),k=f.left+h.clientWidth/2-this.nodes.wrapper.offsetWidth/2,v=f.bottom+window.pageYOffset+this.offsetTop+g.marginTop;this.applyPlacement("bottom",k,v)}placeTop(h,g){const f=h.getBoundingClientRect(),k=f.left+h.clientWidth/2-this.nodes.wrapper.offsetWidth/2,v=f.top+window.pageYOffset-this.nodes.wrapper.clientHeight-this.offsetTop;this.applyPlacement("top",k,v)}placeLeft(h,g){const f=h.getBoundingClientRect(),k=f.left-this.nodes.wrapper.offsetWidth-this.offsetLeft-g.marginLeft,v=f.top+window.pageYOffset+h.clientHeight/2-this.nodes.wrapper.offsetHeight/2;this.applyPlacement("left",k,v)}placeRight(h,g){const f=h.getBoundingClientRect(),k=f.right+this.offsetRight+g.marginRight,v=f.top+window.pageYOffset+h.clientHeight/2-this.nodes.wrapper.offsetHeight/2;this.applyPlacement("right",k,v)}applyPlacement(h,g,f){this.nodes.wrapper.classList.add(this.CSS.placement[h]),this.nodes.wrapper.style.left=g+"px",this.nodes.wrapper.style.top=f+"px"}make(h,g=null,f={}){const k=document.createElement(h);Array.isArray(g)?k.classList.add(...g):g&&k.classList.add(g);for(const h in f)f.hasOwnProperty(h)&&(k[h]=f[h]);return k}append(h,g){Array.isArray(g)?g.forEach((g=>h.appendChild(g))):h.appendChild(g)}prepend(h,g){Array.isArray(g)?(g=g.reverse()).forEach((g=>h.prepend(g))):h.prepend(g)}}},function(h,g){h.exports='.ct{z-index:999;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1),-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);will-change:opacity,top,left;-webkit-box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);border-radius:9px}.ct,.ct:before{position:absolute;top:0;left:0}.ct:before{content:"";bottom:0;right:0;background-color:#1d202b;z-index:-1;border-radius:4px}@supports(-webkit-mask-box-image:url("")){.ct:before{border-radius:0;-webkit-mask-box-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z"/></svg>\') 48% 41% 37.9% 53.3%}}@media (--mobile){.ct{display:none}}.ct__content{padding:6px 10px;color:#cdd1e0;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ct:after{content:"";width:8px;height:8px;position:absolute;background-color:#1d202b;z-index:-1}.ct--bottom{-webkit-transform:translateY(5px);transform:translateY(5px)}.ct--bottom:after{top:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--top{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.ct--top:after{top:auto;bottom:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--left{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.ct--left:after{top:50%;left:auto;right:0;-webkit-transform:translate(41.6%,-50%) rotate(-45deg);transform:translate(41.6%,-50%) rotate(-45deg)}.ct--right{-webkit-transform:translateX(5px);transform:translateX(5px)}.ct--right:after{top:50%;left:0;-webkit-transform:translate(-41.6%,-50%) rotate(-45deg);transform:translate(-41.6%,-50%) rotate(-45deg)}.ct--shown{opacity:1;-webkit-transform:none;transform:none}'}]).default}))})(ae);const de=Pe(se);let he=null;function Ue(){he||(he=new de)}function So(h,g,f){Ue(),he==null||he.show(h,g,f)}function Re(h=!1){Ue(),he==null||he.hide(h)}function ge(h,g,f){Ue(),he==null||he.onHover(h,g,f)}function Io(){he==null||he.destroy(),he=null}class Mo extends y{
/**
   * @class
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
constructor({config:h,eventsDispatcher:g}){super({config:h,eventsDispatcher:g})}get methods(){return{show:(h,g,f)=>this.show(h,g,f),hide:()=>this.hide(),onHover:(h,g,f)=>this.onHover(h,g,f)}}
/**
   * Method show tooltip on element with passed HTML content
   *
   * @param {HTMLElement} element - element on which tooltip should be shown
   * @param {TooltipContent} content - tooltip content
   * @param {TooltipOptions} options - tooltip options
   */show(h,g,f){So(h,g,f)}hide(){Re()}
/**
   * Decorator for showing Tooltip by mouseenter/mouseleave
   *
   * @param {HTMLElement} element - element on which tooltip should be shown
   * @param {TooltipContent} content - tooltip content
   * @param {TooltipOptions} options - tooltip options
   */onHover(h,g,f){ge(h,g,f)}}class Lo extends y{get methods(){return{nodes:this.editorNodes}}get editorNodes(){return{wrapper:this.Editor.UI.nodes.wrapper,redactor:this.Editor.UI.nodes.redactor}}}function mt(h,g){const f={};return Object.entries(h).forEach((([h,k])=>{if(D(k)){const v=g?`${g}.${h}`:h;Object.values(k).every((h=>G(h)))?f[h]=v:f[h]=mt(k,v)}else f[h]=k})),f}const ue=mt(I);function Ao(h,g){const f={};return Object.keys(h).forEach((k=>{const v=g[k];v!==void 0?f[v]=h[k]:f[k]=h[k]})),f}const be='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 12L9 7.1C9 7.04477 9.04477 7 9.1 7H10.4C11.5 7 14 7.1 14 9.5C14 9.5 14 12 11 12M9 12V16.8C9 16.9105 9.08954 17 9.2 17H12.5C14 17 15 16 15 14.5C15 11.7046 11 12 11 12M9 12H11"/></svg>',ke='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 10L11.8586 14.8586C11.9367 14.9367 12.0633 14.9367 12.1414 14.8586L17 10"/></svg>',ve='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 15L11.8586 10.1414C11.9367 10.0633 12.0633 10.0633 12.1414 10.1414L17 15"/></svg>',Ce='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 8L12 12M12 12L16 16M12 12L16 8M12 12L8 16"/></svg>',Be='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/></svg>',_e='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13.34 10C12.4223 12.7337 11 17 11 17"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.21 7H14.2"/></svg>',Ae='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.69998 12.6L7.67896 12.62C6.53993 13.7048 6.52012 15.5155 7.63516 16.625V16.625C8.72293 17.7073 10.4799 17.7102 11.5712 16.6314L13.0263 15.193C14.0703 14.1609 14.2141 12.525 13.3662 11.3266L13.22 11.12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.22 11.12L16.3564 10.9805C17.2895 10.0265 17.3478 8.5207 16.4914 7.49733V7.49733C15.5691 6.39509 13.9269 6.25143 12.8271 7.17675L11.3901 8.38588C10.0935 9.47674 9.95706 11.4241 11.0888 12.6852L11.12 12.72"/></svg>',Oe='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 7.29999H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 7.29999H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.30999 12H9.3"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 12H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 16.7H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 16.7H14.59"/></svg>',Ne='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 7V12M12 17V12M17 12H12M12 12H7"/></svg>',De='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="5.5" stroke="currentColor" stroke-width="2"/><line x1="15.4142" x2="19" y1="15" y2="18.5858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>',je='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M15.7795 11.5C15.7795 11.5 16.053 11.1962 16.5497 10.6722C17.4442 9.72856 17.4701 8.2475 16.5781 7.30145V7.30145C15.6482 6.31522 14.0873 6.29227 13.1288 7.25073L11.8796 8.49999"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.24517 12.3883C8.24517 12.3883 7.97171 12.6922 7.47504 13.2161C6.58051 14.1598 6.55467 15.6408 7.44666 16.5869V16.5869C8.37653 17.5731 9.93744 17.5961 10.8959 16.6376L12.1452 15.3883"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17.7802 15.1032L16.597 14.9422C16.0109 14.8624 15.4841 15.3059 15.4627 15.8969L15.4199 17.0818"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6.39064 9.03238L7.58432 9.06668C8.17551 9.08366 8.6522 8.58665 8.61056 7.99669L8.5271 6.81397"/><line x1="12.1142" x2="11.7" y1="12.2" y2="11.7858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>',$e='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><line x1="12" x2="12" y1="9" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 15.02V15.01"/></svg>';class _{
/**
   * Constructs popover item instance
   *
   * @param params - popover item construction params
   */
constructor(h){this.nodes={root:null,icon:null},this.confirmationState=null,this.removeSpecialFocusBehavior=()=>{this.nodes.root.classList.remove(_.CSS.noFocus)},this.removeSpecialHoverBehavior=()=>{this.nodes.root.classList.remove(_.CSS.noHover)},this.onErrorAnimationEnd=()=>{this.nodes.icon.classList.remove(_.CSS.wobbleAnimation),this.nodes.icon.removeEventListener("animationend",this.onErrorAnimationEnd)},this.params=h,this.nodes.root=this.make(h)}get isDisabled(){return this.params.isDisabled}get toggle(){return this.params.toggle}get title(){return this.params.title}get closeOnActivate(){return this.params.closeOnActivate}get isConfirmationStateEnabled(){return this.confirmationState!==null}get isFocused(){return this.nodes.root.classList.contains(_.CSS.focused)}static get CSS(){return{container:"ce-popover-item",title:"ce-popover-item__title",secondaryTitle:"ce-popover-item__secondary-title",icon:"ce-popover-item__icon",active:"ce-popover-item--active",disabled:"ce-popover-item--disabled",focused:"ce-popover-item--focused",hidden:"ce-popover-item--hidden",confirmationState:"ce-popover-item--confirmation",noHover:"ce-popover-item--no-hover",noFocus:"ce-popover-item--no-focus",wobbleAnimation:"wobble"}}getElement(){return this.nodes.root}handleClick(){this.isConfirmationStateEnabled?this.activateOrEnableConfirmationMode(this.confirmationState):this.activateOrEnableConfirmationMode(this.params)}
/**
   * Toggles item active state
   *
   * @param isActive - true if item should strictly should become active
   */toggleActive(h){this.nodes.root.classList.toggle(_.CSS.active,h)}
/**
   * Toggles item hidden state
   *
   * @param isHidden - true if item should be hidden
   */toggleHidden(h){this.nodes.root.classList.toggle(_.CSS.hidden,h)}reset(){this.isConfirmationStateEnabled&&this.disableConfirmationMode()}onFocus(){this.disableSpecialHoverAndFocusBehavior()}
/**
   * Constructs HTML element corresponding to popover item params
   *
   * @param params - item construction params
   */make(h){const g=c.make("div",_.CSS.container);return h.name&&(g.dataset.itemName=h.name),this.nodes.icon=c.make("div",_.CSS.icon,{innerHTML:h.icon||Be}),g.appendChild(this.nodes.icon),g.appendChild(c.make("div",_.CSS.title,{innerHTML:h.title||""})),h.secondaryLabel&&g.appendChild(c.make("div",_.CSS.secondaryTitle,{textContent:h.secondaryLabel})),h.isActive&&g.classList.add(_.CSS.active),h.isDisabled&&g.classList.add(_.CSS.disabled),g
/**
   * Activates confirmation mode for the item.
   *
   * @param newState - new popover item params that should be applied
   */}enableConfirmationMode(h){const g={...this.params,...h,confirmation:h.confirmation},f=this.make(g);this.nodes.root.innerHTML=f.innerHTML,this.nodes.root.classList.add(_.CSS.confirmationState),this.confirmationState=h,this.enableSpecialHoverAndFocusBehavior()}disableConfirmationMode(){const h=this.make(this.params);this.nodes.root.innerHTML=h.innerHTML,this.nodes.root.classList.remove(_.CSS.confirmationState),this.confirmationState=null,this.disableSpecialHoverAndFocusBehavior()}enableSpecialHoverAndFocusBehavior(){this.nodes.root.classList.add(_.CSS.noHover),this.nodes.root.classList.add(_.CSS.noFocus),this.nodes.root.addEventListener("mouseleave",this.removeSpecialHoverBehavior,{once:!0})}disableSpecialHoverAndFocusBehavior(){this.removeSpecialFocusBehavior(),this.removeSpecialHoverBehavior(),this.nodes.root.removeEventListener("mouseleave",this.removeSpecialHoverBehavior)
/**
   * Executes item's onActivate callback if the item has no confirmation configured
   *
   * @param item - item to activate or bring to confirmation mode
   */}activateOrEnableConfirmationMode(h){if(h.confirmation===void 0)try{h.onActivate(h),this.disableConfirmationMode()}catch{this.animateError()}else this.enableConfirmationMode(h.confirmation)}animateError(){this.nodes.icon.classList.contains(_.CSS.wobbleAnimation)||(this.nodes.icon.classList.add(_.CSS.wobbleAnimation),this.nodes.icon.addEventListener("animationend",this.onErrorAnimationEnd))}}const We=class{
/**
   * @param {HTMLElement[]} nodeList — the list of iterable HTML-items
   * @param {string} focusedCssClass - user-provided CSS-class that will be set in flipping process
   */
constructor(h,g){this.cursor=-1,this.items=[],this.items=h||[],this.focusedCssClass=g
/**
   * Returns Focused button Node
   *
   * @returns {HTMLElement}
   */}get currentItem(){return this.cursor===-1?null:this.items[this.cursor]}
/**
   * Sets cursor to specified position
   *
   * @param cursorPosition - new cursor position
   */setCursor(h){h<this.items.length&&h>=-1&&(this.dropCursor(),this.cursor=h,this.items[this.cursor].classList.add(this.focusedCssClass)
/**
   * Sets items. Can be used when iterable items changed dynamically
   *
   * @param {HTMLElement[]} nodeList - nodes to iterate
   */)}setItems(h){this.items=h}next(){this.cursor=this.leafNodesAndReturnIndex(We.directions.RIGHT)}previous(){this.cursor=this.leafNodesAndReturnIndex(We.directions.LEFT)}dropCursor(){this.cursor!==-1&&(this.items[this.cursor].classList.remove(this.focusedCssClass),this.cursor=-1
/**
   * Leafs nodes inside the target list from active element
   *
   * @param {string} direction - leaf direction. Can be 'left' or 'right'
   * @returns {number} index of focused node
   */)}leafNodesAndReturnIndex(h){if(this.items.length===0)return this.cursor;let g=this.cursor;return g===-1?g=h===We.directions.RIGHT?-1:0:this.items[g].classList.remove(this.focusedCssClass),g=h===We.directions.RIGHT?(g+1)%this.items.length:(this.items.length+g-1)%this.items.length,c.canSetCaret(this.items[g])&&xe((()=>b.setCursor(this.items[g])),50)(),this.items[g].classList.add(this.focusedCssClass),g}};let Ge=We;Ge.directions={RIGHT:"right",LEFT:"left"};class q{
/**
   * @param {FlipperOptions} options - different constructing settings
   */
constructor(h){this.iterator=null,this.activated=!1,this.flipCallbacks=[],this.onKeyDown=h=>{if(this.isEventReadyForHandling(h))switch(q.usedKeys.includes(h.keyCode)&&h.preventDefault(),h.keyCode){case g.TAB:this.handleTabPress(h);break;case g.LEFT:case g.UP:this.flipLeft();break;case g.RIGHT:case g.DOWN:this.flipRight();break;case g.ENTER:this.handleEnterPress(h);break}},this.iterator=new Ge(h.items,h.focusedItemClass),this.activateCallback=h.activateCallback,this.allowedKeys=h.allowedKeys||q.usedKeys}get isActivated(){return this.activated}static get usedKeys(){return[g.TAB,g.LEFT,g.RIGHT,g.ENTER,g.UP,g.DOWN]}
/**
   * Active tab/arrows handling by flipper
   *
   * @param items - Some modules (like, InlineToolbar, BlockSettings) might refresh buttons dynamically
   * @param cursorPosition - index of the item that should be focused once flipper is activated
   */activate(h,g){this.activated=!0,h&&this.iterator.setItems(h),g!==void 0&&this.iterator.setCursor(g),document.addEventListener("keydown",this.onKeyDown,!0)}deactivate(){this.activated=!1,this.dropCursor(),document.removeEventListener("keydown",this.onKeyDown)}focusFirst(){this.dropCursor(),this.flipRight()}flipLeft(){this.iterator.previous(),this.flipCallback()}flipRight(){this.iterator.next(),this.flipCallback()}hasFocus(){return!!this.iterator.currentItem}
/**
   * Registeres function that should be executed on each navigation action
   *
   * @param cb - function to execute
   */onFlip(h){this.flipCallbacks.push(h)}
/**
   * Unregisteres function that is executed on each navigation action
   *
   * @param cb - function to stop executing
   */removeOnFlip(h){this.flipCallbacks=this.flipCallbacks.filter((g=>g!==h))}dropCursor(){this.iterator.dropCursor()}
/**
   * This function is fired before handling flipper keycodes
   * The result of this function defines if it is need to be handled or not
   *
   * @param {KeyboardEvent} event - keydown keyboard event
   * @returns {boolean}
   */isEventReadyForHandling(h){return this.activated&&this.allowedKeys.includes(h.keyCode)}
/**
   * When flipper is activated tab press will leaf the items
   *
   * @param {KeyboardEvent} event - tab keydown event
   */handleTabPress(h){switch(h.shiftKey?Ge.directions.LEFT:Ge.directions.RIGHT){case Ge.directions.RIGHT:this.flipRight();break;case Ge.directions.LEFT:this.flipLeft();break}}
/**
   * Enter press will click current item if flipper is activated
   *
   * @param {KeyboardEvent} event - enter keydown event
   */handleEnterPress(h){this.activated&&(this.iterator.currentItem&&(h.stopPropagation(),h.preventDefault(),this.iterator.currentItem.click()),M(this.activateCallback)&&this.activateCallback(this.iterator.currentItem))}flipCallback(){this.iterator.currentItem&&this.iterator.currentItem.scrollIntoViewIfNeeded(),this.flipCallbacks.forEach((h=>h()))}}class pe{static get CSS(){return{wrapper:"cdx-search-field",icon:"cdx-search-field__icon",input:"cdx-search-field__input"}}
/**
   * @param options - available config
   * @param options.items - searchable items list
   * @param options.onSearch - search callback
   * @param options.placeholder - input placeholder
   */constructor({items:h,onSearch:g,placeholder:f}){this.listeners=new Fe,this.items=h,this.onSearch=g,this.render(f)}getElement(){return this.wrapper}focus(){this.input.focus()}clear(){this.input.value="",this.searchQuery="",this.onSearch("",this.foundItems)}destroy(){this.listeners.removeAll()}
/**
   * Creates the search field
   *
   * @param placeholder - input placeholder
   */render(h){this.wrapper=c.make("div",pe.CSS.wrapper);const g=c.make("div",pe.CSS.icon,{innerHTML:De});this.input=c.make("input",pe.CSS.input,{placeholder:h,tabIndex:-1}),this.wrapper.appendChild(g),this.wrapper.appendChild(this.input),this.listeners.on(this.input,"input",(()=>{this.searchQuery=this.input.value,this.onSearch(this.searchQuery,this.foundItems)}))}get foundItems(){return this.items.filter((h=>this.checkItem(h)))}
/**
   * Contains logic for checking whether passed item conforms the search query
   *
   * @param item - item to be checked
   */checkItem(h){var g;const f=((g=h.title)==null?void 0:g.toLowerCase())||"",k=this.searchQuery.toLowerCase();return f.includes(k)}}const tt=class{lock(){w?this.lockHard():document.body.classList.add(tt.CSS.scrollLocked)}unlock(){w?this.unlockHard():document.body.classList.remove(tt.CSS.scrollLocked)}lockHard(){this.scrollPosition=window.pageYOffset,document.documentElement.style.setProperty("--window-scroll-offset",`${this.scrollPosition}px`),document.body.classList.add(tt.CSS.scrollLockedHard)}unlockHard(){document.body.classList.remove(tt.CSS.scrollLockedHard),this.scrollPosition!==null&&window.scrollTo(0,this.scrollPosition),this.scrollPosition=null}};let it=tt;it.CSS={scrollLocked:"ce-scroll-locked",scrollLockedHard:"ce-scroll-locked--hard"};var nt=Object.defineProperty,st=Object.getOwnPropertyDescriptor,Wo=(h,g,f,k)=>{for(var v,x=k>1?void 0:k?st(g,f):g,w=h.length-1;w>=0;w--)(v=h[w])&&(x=(k?v(g,f,x):v(x))||x);return k&&x&&nt(g,f,x),x},rt=(h=>(h.Close="close",h))(rt||{});const at=class extends Ee{
/**
   * Constructs the instance
   *
   * @param params - popover construction params
   */
constructor(h){super(),this.scopeElement=document.body,this.listeners=new Fe,this.scrollLocker=new it,this.nodes={wrapper:null,popover:null,nothingFoundMessage:null,customContent:null,items:null,overlay:null},this.messages={nothingFound:"Nothing found",search:"Search"},this.onFlip=()=>{this.items.find((h=>h.isFocused)).onFocus()},this.items=h.items.map((h=>new _(h))),h.scopeElement!==void 0&&(this.scopeElement=h.scopeElement),h.messages&&(this.messages={...this.messages,...h.messages}),h.customContentFlippableItems&&(this.customContentFlippableItems=h.customContentFlippableItems),this.make(),h.customContent&&this.addCustomContent(h.customContent),h.searchable&&this.addSearch(),this.initializeFlipper()}static get CSS(){return{popover:"ce-popover",popoverOpenTop:"ce-popover--open-top",popoverOpened:"ce-popover--opened",search:"ce-popover__search",nothingFoundMessage:"ce-popover__nothing-found-message",nothingFoundMessageDisplayed:"ce-popover__nothing-found-message--displayed",customContent:"ce-popover__custom-content",customContentHidden:"ce-popover__custom-content--hidden",items:"ce-popover__items",overlay:"ce-popover__overlay",overlayHidden:"ce-popover__overlay--hidden"}}getElement(){return this.nodes.wrapper}hasFocus(){return this.flipper.hasFocus()}show(){this.shouldOpenBottom||(this.nodes.popover.style.setProperty("--popover-height",this.height+"px"),this.nodes.popover.classList.add(at.CSS.popoverOpenTop)),this.nodes.overlay.classList.remove(at.CSS.overlayHidden),this.nodes.popover.classList.add(at.CSS.popoverOpened),this.flipper.activate(this.flippableElements),this.search!==void 0&&requestAnimationFrame((()=>{var h;(h=this.search)==null||h.focus()})),te()&&this.scrollLocker.lock()}hide(){this.nodes.popover.classList.remove(at.CSS.popoverOpened),this.nodes.popover.classList.remove(at.CSS.popoverOpenTop),this.nodes.overlay.classList.add(at.CSS.overlayHidden),this.flipper.deactivate(),this.items.forEach((h=>h.reset())),this.search!==void 0&&this.search.clear(),te()&&this.scrollLocker.unlock(),this.emit("close")}destroy(){this.flipper.deactivate(),this.listeners.removeAll(),te()&&this.scrollLocker.unlock()}make(){this.nodes.popover=c.make("div",[at.CSS.popover]),this.nodes.nothingFoundMessage=c.make("div",[at.CSS.nothingFoundMessage],{textContent:this.messages.nothingFound}),this.nodes.popover.appendChild(this.nodes.nothingFoundMessage),this.nodes.items=c.make("div",[at.CSS.items]),this.items.forEach((h=>{this.nodes.items.appendChild(h.getElement())})),this.nodes.popover.appendChild(this.nodes.items),this.listeners.on(this.nodes.popover,"click",(h=>{const g=this.getTargetItem(h);g!==void 0&&this.handleItemClick(g)})),this.nodes.wrapper=c.make("div"),this.nodes.overlay=c.make("div",[at.CSS.overlay,at.CSS.overlayHidden]),this.listeners.on(this.nodes.overlay,"click",(()=>{this.hide()})),this.nodes.wrapper.appendChild(this.nodes.overlay),this.nodes.wrapper.appendChild(this.nodes.popover)}addSearch(){this.search=new pe({items:this.items,placeholder:this.messages.search,onSearch:(h,g)=>{this.items.forEach((h=>{const f=!g.includes(h);h.toggleHidden(f)})),this.toggleNothingFoundMessage(g.length===0),this.toggleCustomContent(h!=="");const f=h===""?this.flippableElements:g.map((h=>h.getElement()));this.flipper.isActivated&&(this.flipper.deactivate(),this.flipper.activate(f))}});const h=this.search.getElement();h.classList.add(at.CSS.search),this.nodes.popover.insertBefore(h,this.nodes.popover.firstChild)
/**
   * Adds custom html content to the popover
   *
   * @param content - html content to append
   */}addCustomContent(h){this.nodes.customContent=h,this.nodes.customContent.classList.add(at.CSS.customContent),this.nodes.popover.insertBefore(h,this.nodes.popover.firstChild)
/**
   * Retrieves popover item that is the target of the specified event
   *
   * @param event - event to retrieve popover item from
   */}getTargetItem(h){return this.items.find((g=>h.composedPath().includes(g.getElement())))}
/**
   * Handles item clicks
   *
   * @param item - item to handle click of
   */handleItemClick(h){h.isDisabled||(this.items.filter((g=>g!==h)).forEach((h=>h.reset())),h.handleClick(),this.toggleItemActivenessIfNeeded(h),h.closeOnActivate&&this.hide())}initializeFlipper(){this.flipper=new q({items:this.flippableElements,focusedItemClass:_.CSS.focused,allowedKeys:[g.TAB,g.UP,g.DOWN,g.ENTER]}),this.flipper.onFlip(this.onFlip)}get flippableElements(){const h=this.items.map((h=>h.getElement()));return(this.customContentFlippableItems||[]).concat(h)}get height(){let h=0;if(this.nodes.popover===null)return h;const g=this.nodes.popover.cloneNode(!0);return g.style.visibility="hidden",g.style.position="absolute",g.style.top="-1000px",g.classList.add(at.CSS.popoverOpened),document.body.appendChild(g),h=g.offsetHeight,g.remove(),h}get shouldOpenBottom(){const h=this.nodes.popover.getBoundingClientRect(),g=this.scopeElement.getBoundingClientRect(),f=this.height,k=h.top+f,v=h.top-f,x=Math.min(window.innerHeight,g.bottom);return v<g.top||k<=x}
/**
   * Toggles nothing found message visibility
   *
   * @param isDisplayed - true if the message should be displayed
   */toggleNothingFoundMessage(h){this.nodes.nothingFoundMessage.classList.toggle(at.CSS.nothingFoundMessageDisplayed,h)}
/**
   * Toggles custom content visibility
   *
   * @param isDisplayed - true if custom content should be displayed
   */toggleCustomContent(h){var g;(g=this.nodes.customContent)==null||g.classList.toggle(at.CSS.customContentHidden,h)}
/**
   * - Toggles item active state, if clicked popover item has property 'toggle' set to true.
   *
   * - Performs radiobutton-like behavior if the item has property 'toggle' set to string key.
   * (All the other items with the same key get inactive, and the item gets active)
   *
   * @param clickedItem - popover item that was clicked
   */toggleItemActivenessIfNeeded(h){if(h.toggle===!0&&h.toggleActive(),typeof h.toggle=="string"){const g=this.items.filter((g=>g.toggle===h.toggle));if(g.length===1){h.toggleActive();return}g.forEach((g=>{g.toggleActive(g===h)}))}}};let dt=at;Wo([le],dt.prototype,"height",1);class Yo extends y{constructor(){super(...arguments),this.opened=!1,this.selection=new b,this.onPopoverClose=()=>{this.close()}
/**
   * Module Events
   *
   * @returns {{opened: string, closed: string}}
   */}get events(){return{opened:"block-settings-opened",closed:"block-settings-closed"}}get CSS(){return{settings:"ce-settings"}}get flipper(){var h;return(h=this.popover)==null?void 0:h.flipper}make(){this.nodes.wrapper=c.make("div",[this.CSS.settings])}destroy(){this.removeAllNodes()}
/**
   * Open Block Settings pane
   *
   * @param targetBlock - near which Block we should open BlockSettings
   */open(h=this.Editor.BlockManager.currentBlock){this.opened=!0,this.selection.save(),this.Editor.BlockSelection.selectBlock(h),this.Editor.BlockSelection.clearCache();const[g,f]=h.getTunes();this.eventsDispatcher.emit(this.events.opened),this.popover=new dt({searchable:!0,items:g.map((h=>this.resolveTuneAliases(h))),customContent:f,customContentFlippableItems:this.getControls(f),scopeElement:this.Editor.API.methods.ui.nodes.redactor,messages:{nothingFound:N.ui(ue.ui.popover,"Nothing found"),search:N.ui(ue.ui.popover,"Filter")}}),this.popover.on(rt.Close,this.onPopoverClose),this.nodes.wrapper.append(this.popover.getElement()),this.popover.show()}getElement(){return this.nodes.wrapper}close(){this.opened&&(this.opened=!1,b.isAtEditor||this.selection.restore(),this.selection.clearSaved(),!this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted&&this.Editor.BlockManager.currentBlock&&this.Editor.BlockSelection.unselectBlock(this.Editor.BlockManager.currentBlock),this.eventsDispatcher.emit(this.events.closed),this.popover&&(this.popover.off(rt.Close,this.onPopoverClose),this.popover.destroy(),this.popover.getElement().remove(),this.popover=null)
/**
   * Returns list of buttons and inputs inside specified container
   *
   * @param container - container to query controls inside of
   */)}getControls(h){const{StylesAPI:g}=this.Editor,f=h.querySelectorAll(`.${g.classes.settingsButton}, ${c.allInputsSelector}`);return Array.from(f)}
/**
   * Resolves aliases in tunes menu items
   *
   * @param item - item with resolved aliases
   */resolveTuneAliases(h){const g=Ao(h,{label:"title"});return h.confirmation&&(g.confirmation=this.resolveTuneAliases(h.confirmation)),g}}class $ extends y{constructor(){super(...arguments),this.opened=!1,this.tools=[],this.flipper=null,this.togglingCallback=null}static get CSS(){return{conversionToolbarWrapper:"ce-conversion-toolbar",conversionToolbarShowed:"ce-conversion-toolbar--showed",conversionToolbarTools:"ce-conversion-toolbar__tools",conversionToolbarLabel:"ce-conversion-toolbar__label",conversionTool:"ce-conversion-tool",conversionToolHidden:"ce-conversion-tool--hidden",conversionToolIcon:"ce-conversion-tool__icon",conversionToolSecondaryLabel:"ce-conversion-tool__secondary-label",conversionToolFocused:"ce-conversion-tool--focused",conversionToolActive:"ce-conversion-tool--active"}}make(){this.nodes.wrapper=c.make("div",[$.CSS.conversionToolbarWrapper,...this.isRtl?[this.Editor.UI.CSS.editorRtlFix]:[]]),this.nodes.tools=c.make("div",$.CSS.conversionToolbarTools);const h=c.make("div",$.CSS.conversionToolbarLabel,{textContent:N.ui(ue.ui.inlineToolbar.converter,"Convert to")});return this.addTools(),this.enableFlipper(),c.append(this.nodes.wrapper,h),c.append(this.nodes.wrapper,this.nodes.tools),this.nodes.wrapper}destroy(){this.flipper&&(this.flipper.deactivate(),this.flipper=null),this.removeAllNodes()
/**
   * Toggle conversion dropdown visibility
   *
   * @param {Function} [togglingCallback] — callback that will accept opening state
   */}toggle(h){this.opened?this.close():this.open(),M(h)&&(this.togglingCallback=h)}open(){this.filterTools(),this.opened=!0,this.nodes.wrapper.classList.add($.CSS.conversionToolbarShowed),window.requestAnimationFrame((()=>{this.flipper.activate(this.tools.map((h=>h.button)).filter((h=>!h.classList.contains($.CSS.conversionToolHidden)))),this.flipper.focusFirst(),M(this.togglingCallback)&&this.togglingCallback(!0)}))}close(){this.opened=!1,this.flipper.deactivate(),this.nodes.wrapper.classList.remove($.CSS.conversionToolbarShowed),M(this.togglingCallback)&&this.togglingCallback(!1)}hasTools(){return this.tools.length!==1||this.tools[0].name!==this.config.defaultBlock}
/**
   * Replaces one Block with another
   * For that Tools must provide import/export methods
   *
   * @param {string} replacingToolName - name of Tool which replaces current
   * @param blockDataOverrides - If this conversion fired by the one of multiple Toolbox items, extend converted data with this item's "data" overrides
   */async replaceWithBlock(h,g){const{BlockManager:f,BlockSelection:k,InlineToolbar:v,Caret:x}=this.Editor;f.convert(this.Editor.BlockManager.currentBlock,h,g),k.clearSelection(),this.close(),v.close(),window.requestAnimationFrame((()=>{x.setToBlock(this.Editor.BlockManager.currentBlock,x.positions.END)}))}addTools(){const h=this.Editor.Tools.blockTools;Array.from(h.entries()).forEach((([h,g])=>{var f;const k=g.conversionConfig;!k||!k.import||(f=g.toolbox)==null||f.forEach((g=>this.addToolIfValid(h,g)))}))}
/**
   * Inserts a tool to the ConversionToolbar if the tool's toolbox config is valid
   *
   * @param name - tool's name
   * @param toolboxSettings - tool's single toolbox setting
   */addToolIfValid(h,g){W(g)||!g.icon||this.addTool(h,g)}
/**
   * Add tool to the Conversion Toolbar
   *
   * @param toolName - name of Tool to add
   * @param toolboxItem - tool's toolbox item data
   */addTool(h,g){var f;const k=c.make("div",[$.CSS.conversionTool]),v=c.make("div",[$.CSS.conversionToolIcon]);k.dataset.tool=h,v.innerHTML=g.icon,c.append(k,v),c.append(k,c.text(N.t(ue.toolNames,g.title||re(h))));const x=(f=this.Editor.Tools.blockTools.get(h))==null?void 0:f.shortcut;if(x){const h=c.make("span",$.CSS.conversionToolSecondaryLabel,{innerText:ye(x)});c.append(k,h)}c.append(this.nodes.tools,k),this.tools.push({name:h,button:k,toolboxItem:g}),this.listeners.on(k,"click",(async()=>{await this.replaceWithBlock(h,g.data)}))}async filterTools(){const{currentBlock:h}=this.Editor.BlockManager,g=await h.getActiveToolboxEntry();function o(h,g){return h.icon===g.icon&&h.title===g.title}this.tools.forEach((f=>{let k=!1;if(g){const v=o(g,f.toolboxItem);k=f.button.dataset.tool===h.name&&v}f.button.hidden=k,f.button.classList.toggle($.CSS.conversionToolHidden,k)}))}enableFlipper(){this.flipper=new q({focusedItemClass:$.CSS.conversionToolFocused})}}var ht={},pt={get exports(){return ht},set exports(h){ht=h}};
/*!
 * Library for handling keyboard shortcuts
 * @copyright CodeX (https://codex.so)
 * @license MIT
 * @author CodeX (https://codex.so)
 * @version 1.2.0
 */(function(h,g){(function(g,f){h.exports=f()})(window,(function(){return function(h){var g={};function i(f){if(g[f])return g[f].exports;var k=g[f]={i:f,l:!1,exports:{}};return h[f].call(k.exports,k,k.exports,i),k.l=!0,k.exports}return i.m=h,i.c=g,i.d=function(h,g,f){i.o(h,g)||Object.defineProperty(h,g,{enumerable:!0,get:f})},i.r=function(h){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(h,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(h,"__esModule",{value:!0})},i.t=function(h,g){if(1&g&&(h=i(h)),8&g||4&g&&typeof h=="object"&&h&&h.__esModule)return h;var f=Object.create(null);if(i.r(f),Object.defineProperty(f,"default",{enumerable:!0,value:h}),2&g&&typeof h!="string")for(var k in h)i.d(f,k,function(g){return h[g]}.bind(null,k));return f},i.n=function(h){var g=h&&h.__esModule?function(){return h.default}:function(){return h};return i.d(g,"a",g),g},i.o=function(h,g){return Object.prototype.hasOwnProperty.call(h,g)},i.p="",i(i.s=0)}([function(h,g,f){function n(h,g){for(var f=0;f<g.length;f++){var k=g[f];k.enumerable=k.enumerable||!1,k.configurable=!0,"value"in k&&(k.writable=!0),Object.defineProperty(h,k.key,k)}}function r(h,g,f){return g&&n(h.prototype,g),f&&n(h,f),h}f.r(g);var k=function(){function l(h){var g=this;(function(h,g){if(!(h instanceof g))throw new TypeError("Cannot call a class as a function")})(this,l),this.commands={},this.keys={},this.name=h.name,this.parseShortcutName(h.name),this.element=h.on,this.callback=h.callback,this.executeShortcut=function(h){g.execute(h)},this.element.addEventListener("keydown",this.executeShortcut,!1)}return r(l,null,[{key:"supportedCommands",get:function(){return{SHIFT:["SHIFT"],CMD:["CMD","CONTROL","COMMAND","WINDOWS","CTRL"],ALT:["ALT","OPTION"]}}},{key:"keyCodes",get:function(){return{0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,BACKSPACE:8,ENTER:13,ESCAPE:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,INSERT:45,DELETE:46,".":190}}}]),r(l,[{key:"parseShortcutName",value:function(h){h=h.split("+");for(var g=0;g<h.length;g++){h[g]=h[g].toUpperCase();var f=!1;for(var k in l.supportedCommands)if(l.supportedCommands[k].includes(h[g])){f=this.commands[k]=!0;break}f||(this.keys[h[g]]=!0)}for(var v in l.supportedCommands)this.commands[v]||(this.commands[v]=!1)}},{key:"execute",value:function(h){var g,f={CMD:h.ctrlKey||h.metaKey,SHIFT:h.shiftKey,ALT:h.altKey},k=!0;for(g in this.commands)this.commands[g]!==f[g]&&(k=!1);var v,x=!0;for(v in this.keys)x=x&&h.keyCode===l.keyCodes[v];k&&x&&this.callback(h)}},{key:"remove",value:function(){this.element.removeEventListener("keydown",this.executeShortcut)}}]),l}();g.default=k}]).default}))})(pt);const gt=Pe(ht);class Vo{constructor(){this.registeredShortcuts=new Map}
/**
   * Register shortcut
   *
   * @param shortcut - shortcut options
   */add(h){if(this.findShortcut(h.on,h.name))throw Error(`Shortcut ${h.name} is already registered for ${h.on}. Please remove it before add a new handler.`);const g=new gt({name:h.name,on:h.on,callback:h.handler}),f=this.registeredShortcuts.get(h.on)||[];this.registeredShortcuts.set(h.on,[...f,g])}
/**
   * Remove shortcut
   *
   * @param element - Element shortcut is set for
   * @param name - shortcut name
   */remove(h,g){const f=this.findShortcut(h,g);if(!f)return;f.remove();const k=this.registeredShortcuts.get(h);this.registeredShortcuts.set(h,k.filter((h=>h!==f)))}
/**
   * Get Shortcut instance if exist
   *
   * @param element - Element shorcut is set for
   * @param shortcut - shortcut name
   * @returns {number} index - shortcut index if exist
   */findShortcut(h,g){return(this.registeredShortcuts.get(h)||[]).find((({name:h})=>h===g))}}const ft=new Vo;var kt=Object.defineProperty,vt=Object.getOwnPropertyDescriptor,xt=(h,g,f,k)=>{for(var v,x=k>1?void 0:k?vt(g,f):g,w=h.length-1;w>=0;w--)(v=h[w])&&(x=(k?v(g,f,x):v(x))||x);return k&&x&&kt(g,f,x),x},wt=(h=>(h.Opened="toolbox-opened",h.Closed="toolbox-closed",h.BlockAdded="toolbox-block-added",h))(wt||{});const yt=class extends Ee{
/**
   * Toolbox constructor
   *
   * @param options - available parameters
   * @param options.api - Editor API methods
   * @param options.tools - Tools available to check whether some of them should be displayed at the Toolbox or not
   */
constructor({api:h,tools:g,i18nLabels:f}){super(),this.opened=!1,this.nodes={toolbox:null},this.onPopoverClose=()=>{this.opened=!1,this.emit("toolbox-closed")},this.api=h,this.tools=g,this.i18nLabels=f
/**
   * Returns True if Toolbox is Empty and nothing to show
   *
   * @returns {boolean}
   */}get isEmpty(){return this.toolsToBeDisplayed.length===0}
/**
   * CSS styles
   *
   * @returns {Object<string, string>}
   */static get CSS(){return{toolbox:"ce-toolbox"}}make(){return this.popover=new dt({scopeElement:this.api.ui.nodes.redactor,searchable:!0,messages:{nothingFound:this.i18nLabels.nothingFound,search:this.i18nLabels.filter},items:this.toolboxItemsToBeDisplayed}),this.popover.on(rt.Close,this.onPopoverClose),this.enableShortcuts(),this.nodes.toolbox=this.popover.getElement(),this.nodes.toolbox.classList.add(yt.CSS.toolbox),this.nodes.toolbox}hasFocus(){var h;return(h=this.popover)==null?void 0:h.hasFocus()}destroy(){var h;super.destroy(),this.nodes&&this.nodes.toolbox&&(this.nodes.toolbox.remove(),this.nodes.toolbox=null),this.removeAllShortcuts(),(h=this.popover)==null||h.off(rt.Close,this.onPopoverClose)
/**
   * Toolbox Tool's button click handler
   *
   * @param toolName - tool type to be activated
   * @param blockDataOverrides - Block data predefined by the activated Toolbox item
   */}toolButtonActivated(h,g){this.insertNewBlock(h,g)}open(){var h;this.isEmpty||((h=this.popover)==null||h.show(),this.opened=!0,this.emit("toolbox-opened"))}close(){var h;(h=this.popover)==null||h.hide(),this.opened=!1,this.emit("toolbox-closed")}toggle(){this.opened?this.close():this.open()}get toolsToBeDisplayed(){const h=[];return this.tools.forEach((g=>{g.toolbox&&h.push(g)})),h}get toolboxItemsToBeDisplayed(){const s=(h,g)=>({icon:h.icon,title:N.t(ue.toolNames,h.title||re(g.name)),name:g.name,onActivate:()=>{this.toolButtonActivated(g.name,h.data)},secondaryLabel:g.shortcut?ye(g.shortcut):""});return this.toolsToBeDisplayed.reduce(((h,g)=>(Array.isArray(g.toolbox)?g.toolbox.forEach((f=>{h.push(s(f,g))})):g.toolbox!==void 0&&h.push(s(g.toolbox,g)),h)),[])}enableShortcuts(){this.toolsToBeDisplayed.forEach((h=>{const g=h.shortcut;g&&this.enableShortcutForTool(h.name,g)}))}
/**
   * Enable shortcut Block Tool implemented shortcut
   *
   * @param {string} toolName - Tool name
   * @param {string} shortcut - shortcut according to the ShortcutData Module format
   */enableShortcutForTool(h,g){ft.add({name:g,on:this.api.ui.nodes.redactor,handler:g=>{g.preventDefault();const f=this.api.blocks.getCurrentBlockIndex(),k=this.api.blocks.getBlockByIndex(f);if(k)try{this.api.blocks.convert(k.id,h),window.requestAnimationFrame((()=>{this.api.caret.setToBlock(f,"end")}));return}catch{}this.insertNewBlock(h)}})}removeAllShortcuts(){this.toolsToBeDisplayed.forEach((h=>{const g=h.shortcut;g&&ft.remove(this.api.ui.nodes.redactor,g)}))}
/**
   * Inserts new block
   * Can be called when button clicked on Toolbox or by ShortcutData
   *
   * @param {string} toolName - Tool name
   * @param blockDataOverrides - predefined Block data
   */async insertNewBlock(h,g){const f=this.api.blocks.getCurrentBlockIndex(),k=this.api.blocks.getBlockByIndex(f);if(!k)return;const v=k.isEmpty?f:f+1;let x;if(g){const f=await this.api.blocks.composeBlockData(h);x=Object.assign(f,g)}const w=this.api.blocks.insert(h,x,void 0,v,void 0,k.isEmpty);w.call(Y.APPEND_CALLBACK),this.api.caret.setToBlock(v),this.emit("toolbox-block-added",{block:w}),this.api.toolbar.close()}};let Et=yt;xt([le],Et.prototype,"toolsToBeDisplayed",1);xt([le],Et.prototype,"toolboxItemsToBeDisplayed",1);const Ct="block hovered";class Go extends y{
/**
   * @class
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
constructor({config:h,eventsDispatcher:g}){super({config:h,eventsDispatcher:g}),this.toolboxInstance=null
/**
   * CSS styles
   *
   * @returns {object}
   */}get CSS(){return{toolbar:"ce-toolbar",content:"ce-toolbar__content",actions:"ce-toolbar__actions",actionsOpened:"ce-toolbar__actions--opened",toolbarOpened:"ce-toolbar--opened",openedToolboxHolderModifier:"codex-editor--toolbox-opened",plusButton:"ce-toolbar__plus",plusButtonShortcut:"ce-toolbar__plus-shortcut",settingsToggler:"ce-toolbar__settings-btn",settingsTogglerHidden:"ce-toolbar__settings-btn--hidden"}}
/**
   * Returns the Toolbar opening state
   *
   * @returns {boolean}
   */get opened(){return this.nodes.wrapper.classList.contains(this.CSS.toolbarOpened)}get toolbox(){var h;return{opened:(h=this.toolboxInstance)==null?void 0:h.opened,close:()=>{var h;(h=this.toolboxInstance)==null||h.close()},open:()=>{this.toolboxInstance!==null?(this.Editor.BlockManager.currentBlock=this.hoveredBlock,this.toolboxInstance.open()):k("toolbox.open() called before initialization is finished","warn")},toggle:()=>{this.toolboxInstance!==null?this.toolboxInstance.toggle():k("toolbox.toggle() called before initialization is finished","warn")},hasFocus:()=>{var h;return(h=this.toolboxInstance)==null?void 0:h.hasFocus()}}}get blockActions(){return{hide:()=>{this.nodes.actions.classList.remove(this.CSS.actionsOpened)},show:()=>{this.nodes.actions.classList.add(this.CSS.actionsOpened)}}}get blockTunesToggler(){return{hide:()=>this.nodes.settingsToggler.classList.add(this.CSS.settingsTogglerHidden),show:()=>this.nodes.settingsToggler.classList.remove(this.CSS.settingsTogglerHidden)}}
/**
   * Toggles read-only mode
   *
   * @param {boolean} readOnlyEnabled - read-only mode
   */toggleReadOnly(h){h?(this.destroy(),this.Editor.BlockSettings.destroy(),this.disableModuleBindings()):window.requestIdleCallback((()=>{this.drawUI(),this.enableModuleBindings()}),{timeout:2e3})}
/**
   * Move Toolbar to the passed (or current) Block
   *
   * @param block - block to move Toolbar near it
   */moveAndOpen(h=this.Editor.BlockManager.currentBlock){if(this.toolboxInstance===null){k("Can't open Toolbar since Editor initialization is not finished yet","warn");return}if(this.toolboxInstance.opened&&this.toolboxInstance.close(),this.Editor.BlockSettings.opened&&this.Editor.BlockSettings.close(),!h)return;this.hoveredBlock=h;const g=h.holder,{isMobile:f}=this.Editor.UI,v=h.pluginsContent,x=window.getComputedStyle(v),w=parseInt(x.paddingTop,10),E=g.offsetHeight;let C;C=f?g.offsetTop+E:g.offsetTop+w,this.nodes.wrapper.style.top=`${Math.floor(C)}px`,this.Editor.BlockManager.blocks.length===1&&h.isEmpty?this.blockTunesToggler.hide():this.blockTunesToggler.show(),this.open()}close(){var h,g;this.Editor.ReadOnly.isEnabled||((h=this.nodes.wrapper)==null||h.classList.remove(this.CSS.toolbarOpened),this.blockActions.hide(),(g=this.toolboxInstance)==null||g.close(),this.Editor.BlockSettings.close(),this.reset())}reset(){this.nodes.wrapper.style.top="unset"}
/**
   * Open Toolbar with Plus Button and Actions
   *
   * @param {boolean} withBlockActions - by default, Toolbar opens with Block Actions.
   *                                     This flag allows to open Toolbar without Actions.
   */open(h=!0){this.nodes.wrapper.classList.add(this.CSS.toolbarOpened),h?this.blockActions.show():this.blockActions.hide()}make(){this.nodes.wrapper=c.make("div",this.CSS.toolbar),["content","actions"].forEach((h=>{this.nodes[h]=c.make("div",this.CSS[h])})),c.append(this.nodes.wrapper,this.nodes.content),c.append(this.nodes.content,this.nodes.actions),this.nodes.plusButton=c.make("div",this.CSS.plusButton,{innerHTML:Ne}),c.append(this.nodes.actions,this.nodes.plusButton),this.readOnlyMutableListeners.on(this.nodes.plusButton,"click",(()=>{Re(!0),this.plusButtonClicked()}),!1);const h=c.make("div");h.appendChild(document.createTextNode(N.ui(ue.ui.toolbar.toolbox,"Add"))),h.appendChild(c.make("div",this.CSS.plusButtonShortcut,{textContent:"/"})),ge(this.nodes.plusButton,h,{hidingDelay:400}),this.nodes.settingsToggler=c.make("span",this.CSS.settingsToggler,{innerHTML:Oe}),c.append(this.nodes.actions,this.nodes.settingsToggler);const g=c.make("div"),f=c.text(N.ui(ue.ui.blockTunes.toggler,"Click to tune"));g.appendChild(f),g.appendChild(c.make("div",this.CSS.plusButtonShortcut,{textContent:ye("CMD + /")})),ge(this.nodes.settingsToggler,g,{hidingDelay:400}),c.append(this.nodes.actions,this.makeToolbox()),c.append(this.nodes.actions,this.Editor.BlockSettings.getElement()),c.append(this.Editor.UI.nodes.wrapper,this.nodes.wrapper)}makeToolbox(){return this.toolboxInstance=new Et({api:this.Editor.API.methods,tools:this.Editor.Tools.blockTools,i18nLabels:{filter:N.ui(ue.ui.popover,"Filter"),nothingFound:N.ui(ue.ui.popover,"Nothing found")}}),this.toolboxInstance.on(wt.Opened,(()=>{this.Editor.UI.nodes.wrapper.classList.add(this.CSS.openedToolboxHolderModifier)})),this.toolboxInstance.on(wt.Closed,(()=>{this.Editor.UI.nodes.wrapper.classList.remove(this.CSS.openedToolboxHolderModifier)})),this.toolboxInstance.on(wt.BlockAdded,(({block:h})=>{const{BlockManager:g,Caret:f}=this.Editor,k=g.getBlockById(h.id);k.inputs.length===0&&(k===g.lastBlock?(g.insertAtEnd(),f.setToBlock(g.lastBlock)):f.setToBlock(g.nextBlock))})),this.toolboxInstance.make()}plusButtonClicked(){var h;this.Editor.BlockManager.currentBlock=this.hoveredBlock,(h=this.toolboxInstance)==null||h.toggle()}enableModuleBindings(){this.readOnlyMutableListeners.on(this.nodes.settingsToggler,"mousedown",(h=>{var g;h.stopPropagation(),this.settingsTogglerClicked(),(g=this.toolboxInstance)!=null&&g.opened&&this.toolboxInstance.close(),Re(!0)}),!0),te()||this.eventsDispatcher.on(Ct,(h=>{var g;this.Editor.BlockSettings.opened||(g=this.toolboxInstance)!=null&&g.opened||this.moveAndOpen(h.block)}))}disableModuleBindings(){this.readOnlyMutableListeners.clearAll()}settingsTogglerClicked(){this.Editor.BlockManager.currentBlock=this.hoveredBlock,this.Editor.BlockSettings.opened?this.Editor.BlockSettings.close():this.Editor.BlockSettings.open(this.hoveredBlock)}drawUI(){this.Editor.BlockSettings.make(),this.make()}destroy(){this.removeAllNodes(),this.toolboxInstance&&this.toolboxInstance.destroy()}}var Tt=(h=>(h[h.Block=0]="Block",h[h.Inline=1]="Inline",h[h.Tune=2]="Tune",h))(Tt||{}),Bt=(h=>(h.Shortcut="shortcut",h.Toolbox="toolbox",h.EnabledInlineTools="inlineToolbar",h.EnabledBlockTunes="tunes",h.Config="config",h))(Bt||{}),Ot=(h=>(h.Shortcut="shortcut",h.SanitizeConfig="sanitize",h))(Ot||{}),Nt=(h=>(h.IsEnabledLineBreaks="enableLineBreaks",h.Toolbox="toolbox",h.ConversionConfig="conversionConfig",h.IsReadOnlySupported="isReadOnlySupported",h.PasteConfig="pasteConfig",h))(Nt||{}),Rt=(h=>(h.IsInline="isInline",h.Title="title",h))(Rt||{}),Pt=(h=>(h.IsTune="isTune",h))(Pt||{});class Ye{
/**
   * @class
   * @param {ConstructorOptions} options - Constructor options
   */
constructor({name:h,constructable:g,config:f,api:k,isDefault:v,isInternal:x=!1,defaultPlaceholder:w}){this.api=k,this.name=h,this.constructable=g,this.config=f,this.isDefault=v,this.isInternal=x,this.defaultPlaceholder=w}get settings(){const h=this.config.config||{};return this.isDefault&&!("placeholder"in h)&&this.defaultPlaceholder&&(h.placeholder=this.defaultPlaceholder),h}reset(){if(M(this.constructable.reset))return this.constructable.reset()}prepare(){if(M(this.constructable.prepare))return this.constructable.prepare({toolName:this.name,config:this.settings})}get shortcut(){const h=this.constructable.shortcut;return this.config.shortcut||h}get sanitizeConfig(){return this.constructable.sanitize||{}}isInline(){return this.type===1}isBlock(){return this.type===0}isTune(){return this.type===2}}class Jo extends y{
/**
   * @class
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
constructor({config:h,eventsDispatcher:g}){super({config:h,eventsDispatcher:g}),this.CSS={inlineToolbar:"ce-inline-toolbar",inlineToolbarShowed:"ce-inline-toolbar--showed",inlineToolbarLeftOriented:"ce-inline-toolbar--left-oriented",inlineToolbarRightOriented:"ce-inline-toolbar--right-oriented",inlineToolbarShortcut:"ce-inline-toolbar__shortcut",buttonsWrapper:"ce-inline-toolbar__buttons",actionsWrapper:"ce-inline-toolbar__actions",inlineToolButton:"ce-inline-tool",inputField:"cdx-input",focusedButton:"ce-inline-tool--focused",conversionToggler:"ce-inline-toolbar__dropdown",conversionTogglerArrow:"ce-inline-toolbar__dropdown-arrow",conversionTogglerHidden:"ce-inline-toolbar__dropdown--hidden",conversionTogglerContent:"ce-inline-toolbar__dropdown-content",togglerAndButtonsWrapper:"ce-inline-toolbar__toggler-and-button-wrapper"},this.opened=!1,this.toolbarVerticalMargin=te()?20:6,this.buttonsList=null,this.width=0,this.flipper=null
/**
   * Toggles read-only mode
   *
   * @param {boolean} readOnlyEnabled - read-only mode
   */}toggleReadOnly(h){h?(this.destroy(),this.Editor.ConversionToolbar.destroy()):window.requestIdleCallback((()=>{this.make()}),{timeout:2e3})}
/**
   * Shows Inline Toolbar if something is selected
   *
   * @param [needToClose] - pass true to close toolbar if it is not allowed.
   *                                  Avoid to use it just for closing IT, better call .close() clearly.
   * @param [needToShowConversionToolbar] - pass false to not to show Conversion Toolbar
   */async tryToShow(h=!1,g=!0){h&&this.close(),this.allowedToShow()&&(await this.addToolsFiltered(g),this.move(),this.open(g),this.Editor.Toolbar.close())}close(){this.opened&&(this.Editor.ReadOnly.isEnabled||(this.nodes.wrapper.classList.remove(this.CSS.inlineToolbarShowed),Array.from(this.toolsInstances.entries()).forEach((([h,g])=>{const f=this.getToolShortcut(h);f&&ft.remove(this.Editor.UI.nodes.redactor,f),M(g.clear)&&g.clear()})),this.reset(),this.opened=!1,this.flipper.deactivate(),this.Editor.ConversionToolbar.close()))}
/**
   * Check if node is contained by Inline Toolbar
   *
   * @param {Node} node — node to check
   */containsNode(h){return this.nodes.wrapper!==void 0&&this.nodes.wrapper.contains(h)}destroy(){this.flipper&&(this.flipper.deactivate(),this.flipper=null),this.removeAllNodes()}make(){this.nodes.wrapper=c.make("div",[this.CSS.inlineToolbar,...this.isRtl?[this.Editor.UI.CSS.editorRtlFix]:[]]),this.nodes.togglerAndButtonsWrapper=c.make("div",this.CSS.togglerAndButtonsWrapper),this.nodes.buttons=c.make("div",this.CSS.buttonsWrapper),this.nodes.actions=c.make("div",this.CSS.actionsWrapper),this.listeners.on(this.nodes.wrapper,"mousedown",(h=>{h.target.closest(`.${this.CSS.actionsWrapper}`)||h.preventDefault()})),c.append(this.nodes.wrapper,[this.nodes.togglerAndButtonsWrapper,this.nodes.actions]),c.append(this.Editor.UI.nodes.wrapper,this.nodes.wrapper),this.addConversionToggler(),c.append(this.nodes.togglerAndButtonsWrapper,this.nodes.buttons),this.prepareConversionToolbar(),window.requestAnimationFrame((()=>{this.recalculateWidth()})),this.enableFlipper()}open(){if(this.opened)return;this.nodes.wrapper.classList.add(this.CSS.inlineToolbarShowed),this.buttonsList=this.nodes.buttons.querySelectorAll(`.${this.CSS.inlineToolButton}`),this.opened=!0;let h=Array.from(this.buttonsList);h.unshift(this.nodes.conversionToggler),h=h.filter((h=>!h.hidden)),this.flipper.activate(h)}move(){const h=b.rect,g=this.Editor.UI.nodes.wrapper.getBoundingClientRect(),f={x:h.x-g.x,y:h.y+h.height-g.top+this.toolbarVerticalMargin};f.x+this.width+g.x>this.Editor.UI.contentRect.right&&(f.x=this.Editor.UI.contentRect.right-this.width-g.x),this.nodes.wrapper.style.left=Math.floor(f.x)+"px",this.nodes.wrapper.style.top=Math.floor(f.y)+"px"}reset(){this.nodes.wrapper.classList.remove(this.CSS.inlineToolbarLeftOriented,this.CSS.inlineToolbarRightOriented),this.nodes.wrapper.style.left="0",this.nodes.wrapper.style.top="0"}allowedToShow(){const h=["IMG","INPUT"],g=b.get(),f=b.text;if(!g||!g.anchorNode||g.isCollapsed||f.length<1)return!1;const k=c.isElement(g.anchorNode)?g.anchorNode:g.anchorNode.parentElement;if(g&&h.includes(k.tagName)||k.closest('[contenteditable="true"]')===null)return!1;const v=this.Editor.BlockManager.getBlock(g.anchorNode);return!!v&&v.tool.inlineTools.size!==0}recalculateWidth(){this.width=this.nodes.wrapper.offsetWidth}addConversionToggler(){this.nodes.conversionToggler=c.make("div",this.CSS.conversionToggler),this.nodes.conversionTogglerContent=c.make("div",this.CSS.conversionTogglerContent);const h=c.make("div",this.CSS.conversionTogglerArrow,{innerHTML:ke});this.nodes.conversionToggler.appendChild(this.nodes.conversionTogglerContent),this.nodes.conversionToggler.appendChild(h),this.nodes.togglerAndButtonsWrapper.appendChild(this.nodes.conversionToggler),this.listeners.on(this.nodes.conversionToggler,"click",(()=>{this.Editor.ConversionToolbar.toggle((h=>{!h&&this.opened?this.flipper.activate():this.opened&&this.flipper.deactivate()}))})),te()===!1&&ge(this.nodes.conversionToggler,N.ui(ue.ui.inlineToolbar.converter,"Convert to"),{placement:"top",hidingDelay:100})}async setConversionTogglerContent(){const{BlockManager:h}=this.Editor,{currentBlock:g}=h,f=g.name,k=g.tool.conversionConfig,v=k&&k.export;this.nodes.conversionToggler.hidden=!v,this.nodes.conversionToggler.classList.toggle(this.CSS.conversionTogglerHidden,!v);const x=await g.getActiveToolboxEntry()||{};this.nodes.conversionTogglerContent.innerHTML=x.icon||x.title||re(f)}prepareConversionToolbar(){const h=this.Editor.ConversionToolbar.make();c.append(this.nodes.wrapper,h)}
/**
   * Append only allowed Tools
   *
   * @param {boolean} needToShowConversionToolbar - pass false to not to show Conversion Toolbar (e.g. for Footnotes-like tools)
   */async addToolsFiltered(h=!0){const g=b.get(),f=this.Editor.BlockManager.getBlock(g.anchorNode);this.nodes.buttons.innerHTML="",this.nodes.actions.innerHTML="",this.toolsInstances=new Map,Array.from(f.tool.inlineTools.values()).forEach((h=>{this.addTool(h)})),h&&this.Editor.ConversionToolbar.hasTools()?await this.setConversionTogglerContent():this.nodes.conversionToggler.hidden=!0,this.recalculateWidth()
/**
   * Add tool button and activate clicks
   *
   * @param {InlineTool} tool - InlineTool object
   */}addTool(h){const g=h.create(),f=g.render();if(!f){k("Render method must return an instance of Node","warn",h.name);return}if(f.dataset.tool=h.name,this.nodes.buttons.appendChild(f),this.toolsInstances.set(h.name,g),M(g.renderActions)){const h=g.renderActions();this.nodes.actions.appendChild(h)}this.listeners.on(f,"click",(h=>{this.toolClicked(g),h.preventDefault()}));const v=this.getToolShortcut(h.name);if(v)try{this.enableShortcuts(g,v)}catch{}const x=c.make("div"),w=N.t(ue.toolNames,h.title||re(h.name));x.appendChild(c.text(w)),v&&x.appendChild(c.make("div",this.CSS.inlineToolbarShortcut,{textContent:ye(v)})),te()===!1&&ge(f,x,{placement:"top",hidingDelay:100}),g.checkState(b.get())
/**
   * Get shortcut name for tool
   *
   * @param toolName — Tool name
   */}getToolShortcut(h){const{Tools:g}=this.Editor,f=g.inlineTools.get(h),k=g.internal.inlineTools;return Array.from(k.keys()).includes(h)?this.inlineTools[h][Ot.Shortcut]:f.shortcut}
/**
   * Enable Tool shortcut with Editor Shortcuts Module
   *
   * @param {InlineTool} tool - Tool instance
   * @param {string} shortcut - shortcut according to the ShortcutData Module format
   */enableShortcuts(h,g){ft.add({name:g,handler:g=>{const{currentBlock:f}=this.Editor.BlockManager;f&&f.tool.enabledInlineTools&&(g.preventDefault(),this.toolClicked(h))},on:this.Editor.UI.nodes.redactor})}
/**
   * Inline Tool button clicks
   *
   * @param {InlineTool} tool - Tool's instance
   */toolClicked(h){const g=b.range;h.surround(g),this.checkToolsState(),h.renderActions!==void 0&&this.flipper.deactivate()}checkToolsState(){this.toolsInstances.forEach((h=>{h.checkState(b.get())}))}get inlineTools(){const h={};return Array.from(this.Editor.Tools.inlineTools.entries()).forEach((([g,f])=>{h[g]=f.create()})),h}enableFlipper(){this.flipper=new q({focusedItemClass:this.CSS.focusedButton,allowedKeys:[g.ENTER,g.TAB]})}}class Qo extends y{
/**
   * All keydowns on Block
   *
   * @param {KeyboardEvent} event - keydown
   */
keydown(h){switch(this.beforeKeydownProcessing(h),h.keyCode){case g.BACKSPACE:this.backspace(h);break;case g.DELETE:this.delete(h);break;case g.ENTER:this.enter(h);break;case g.DOWN:case g.RIGHT:this.arrowRightAndDown(h);break;case g.UP:case g.LEFT:this.arrowLeftAndUp(h);break;case g.TAB:this.tabPressed(h);break;case g.SLASH:h.ctrlKey||h.metaKey?this.commandSlashPressed():this.slashPressed();break}}
/**
   * Fires on keydown before event processing
   *
   * @param {KeyboardEvent} event - keydown
   */beforeKeydownProcessing(h){this.needToolbarClosing(h)&&lt(h.keyCode)&&(this.Editor.Toolbar.close(),this.Editor.ConversionToolbar.close(),h.ctrlKey||h.metaKey||h.altKey||h.shiftKey||this.Editor.BlockSelection.clearSelection(h)
/**
   * Key up on Block:
   * - shows Inline Toolbar if something selected
   * - shows conversion toolbar with 85% of block selection
   *
   * @param {KeyboardEvent} event - keyup event
   */)}keyup(h){h.shiftKey||this.Editor.UI.checkEmptiness()}
/**
   * Add drop target styles
   *
   * @param {DragEvent} event - drag over event
   */dragOver(h){const g=this.Editor.BlockManager.getBlockByChildNode(h.target);g.dropTarget=!0}
/**
   * Remove drop target style
   *
   * @param {DragEvent} event - drag leave event
   */dragLeave(h){const g=this.Editor.BlockManager.getBlockByChildNode(h.target);g.dropTarget=!1}
/**
   * Copying selected blocks
   * Before putting to the clipboard we sanitize all blocks and then copy to the clipboard
   *
   * @param {ClipboardEvent} event - clipboard event
   */handleCommandC(h){const{BlockSelection:g}=this.Editor;g.anyBlockSelected&&g.copySelectedBlocks(h)}
/**
   * Copy and Delete selected Blocks
   *
   * @param {ClipboardEvent} event - clipboard event
   */handleCommandX(h){const{BlockSelection:g,BlockManager:f,Caret:k}=this.Editor;g.anyBlockSelected&&g.copySelectedBlocks(h).then((()=>{const v=f.removeSelectedBlocks(),x=f.insertDefaultBlockAtIndex(v,!0);k.setToBlock(x,k.positions.START),g.clearSelection(h)}))}
/**
   * Tab pressed inside a Block.
   *
   * @param {KeyboardEvent} event - keydown
   */tabPressed(h){const{InlineToolbar:g,ConversionToolbar:f,Caret:k}=this.Editor;f.opened||g.opened||(h.shiftKey?k.navigatePrevious(!0):k.navigateNext(!0))&&h.preventDefault()}commandSlashPressed(){this.Editor.BlockSelection.selectedBlocks.length>1||this.activateBlockSettings()}slashPressed(){this.Editor.BlockManager.currentBlock.isEmpty&&this.activateToolbox()}
/**
   * ENTER pressed on block
   *
   * @param {KeyboardEvent} event - keydown
   */enter(h){const{BlockManager:g,UI:f}=this.Editor;if(g.currentBlock.tool.isLineBreaksEnabled||f.someToolbarOpened&&f.someFlipperButtonFocused||h.shiftKey)return;let k=this.Editor.BlockManager.currentBlock;this.Editor.Caret.isAtStart&&!this.Editor.BlockManager.currentBlock.hasMedia?this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex):k=this.Editor.Caret.isAtEnd?this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex+1):this.Editor.BlockManager.split(),this.Editor.Caret.setToBlock(k),this.Editor.Toolbar.moveAndOpen(k),h.preventDefault()
/**
   * Handle backspace keydown on Block
   *
   * @param {KeyboardEvent} event - keydown
   */}backspace(h){const{BlockManager:g,Caret:f}=this.Editor,{currentBlock:k,previousBlock:v}=g;if(b.isCollapsed&&f.isAtStart)if(h.preventDefault(),this.Editor.Toolbar.close(),k.currentInput===k.firstInput){if(v!==null)if(v.isEmpty)g.removeBlock(v);else if(k.isEmpty){g.removeBlock(k);const h=g.currentBlock;f.setToBlock(h,f.positions.END)}else ot(k,v)?this.mergeBlocks(v,k):f.setToBlock(v,f.positions.END)}else f.navigatePrevious()}
/**
   * Handles delete keydown on Block
   * Removes char after the caret.
   * If caret is at the end of the block, merge next block with current
   *
   * @param {KeyboardEvent} event - keydown
   */delete(h){const{BlockManager:g,Caret:f}=this.Editor,{currentBlock:k,nextBlock:v}=g;b.isCollapsed&&f.isAtEnd&&(h.preventDefault(),this.Editor.Toolbar.close(),k.currentInput===k.lastInput?v!==null&&(v.isEmpty?g.removeBlock(v):k.isEmpty?(g.removeBlock(k),f.setToBlock(v,f.positions.START)):ot(k,v)?this.mergeBlocks(k,v):f.setToBlock(v,f.positions.START)):f.navigateNext())}
/**
   * Merge passed Blocks
   *
   * @param targetBlock - to which Block we want to merge
   * @param blockToMerge - what Block we want to merge
   */mergeBlocks(h,g){const{BlockManager:f,Caret:k,Toolbar:v}=this.Editor;k.createShadow(h.pluginsContent),f.mergeBlocks(h,g).then((()=>{window.requestAnimationFrame((()=>{k.restoreCaret(h.pluginsContent),h.pluginsContent.normalize(),v.close()}))}))
/**
   * Handle right and down keyboard keys
   *
   * @param {KeyboardEvent} event - keyboard event
   */}arrowRightAndDown(h){const f=q.usedKeys.includes(h.keyCode)&&(!h.shiftKey||h.keyCode===g.TAB);if(this.Editor.UI.someToolbarOpened&&f)return;this.Editor.Toolbar.close();const k=this.Editor.Caret.isAtEnd||this.Editor.BlockSelection.anyBlockSelected;h.shiftKey&&h.keyCode===g.DOWN&&k?this.Editor.CrossBlockSelection.toggleBlockSelectedState():(h.keyCode===g.DOWN||h.keyCode===g.RIGHT&&!this.isRtl?this.Editor.Caret.navigateNext():this.Editor.Caret.navigatePrevious())?h.preventDefault():(xe((()=>{this.Editor.BlockManager.currentBlock&&this.Editor.BlockManager.currentBlock.updateCurrentInput()}),20)(),this.Editor.BlockSelection.clearSelection(h)
/**
   * Handle left and up keyboard keys
   *
   * @param {KeyboardEvent} event - keyboard event
   */)}arrowLeftAndUp(h){if(this.Editor.UI.someToolbarOpened){if(q.usedKeys.includes(h.keyCode)&&(!h.shiftKey||h.keyCode===g.TAB))return;this.Editor.UI.closeAllToolbars()}this.Editor.Toolbar.close();const f=this.Editor.Caret.isAtStart||this.Editor.BlockSelection.anyBlockSelected;h.shiftKey&&h.keyCode===g.UP&&f?this.Editor.CrossBlockSelection.toggleBlockSelectedState(!1):(h.keyCode===g.UP||h.keyCode===g.LEFT&&!this.isRtl?this.Editor.Caret.navigatePrevious():this.Editor.Caret.navigateNext())?h.preventDefault():(xe((()=>{this.Editor.BlockManager.currentBlock&&this.Editor.BlockManager.currentBlock.updateCurrentInput()}),20)(),this.Editor.BlockSelection.clearSelection(h)
/**
   * Cases when we need to close Toolbar
   *
   * @param {KeyboardEvent} event - keyboard event
   */)}needToolbarClosing(h){const f=h.keyCode===g.ENTER&&this.Editor.Toolbar.toolbox.opened,k=h.keyCode===g.ENTER&&this.Editor.BlockSettings.opened,v=h.keyCode===g.ENTER&&this.Editor.InlineToolbar.opened,x=h.keyCode===g.ENTER&&this.Editor.ConversionToolbar.opened,w=h.keyCode===g.TAB;return!(h.shiftKey||w||f||k||v||x)}activateToolbox(){this.Editor.Toolbar.opened||this.Editor.Toolbar.moveAndOpen(),this.Editor.Toolbar.toolbox.open()}activateBlockSettings(){this.Editor.Toolbar.opened||this.Editor.Toolbar.moveAndOpen(),this.Editor.BlockSettings.opened||this.Editor.BlockSettings.open()}}class Se{
/**
   * @class
   * @param {HTMLElement} workingArea — editor`s working node
   */
constructor(h){this.blocks=[],this.workingArea=h
/**
   * Get length of Block instances array
   *
   * @returns {number}
   */}get length(){return this.blocks.length}
/**
   * Get Block instances array
   *
   * @returns {Block[]}
   */get array(){return this.blocks}
/**
   * Get blocks html elements array
   *
   * @returns {HTMLElement[]}
   */get nodes(){return ct(this.workingArea.children)}
/**
   * Proxy trap to implement array-like setter
   *
   * @example
   * blocks[0] = new Block(...)
   * @param {Blocks} instance — Blocks instance
   * @param {PropertyKey} property — block index or any Blocks class property key to set
   * @param {Block} value — value to set
   * @returns {boolean}
   */static set(h,g,f){return isNaN(Number(g))?(Reflect.set(h,g,f),!0):(h.insert(+g,f),!0
/**
   * Proxy trap to implement array-like getter
   *
   * @param {Blocks} instance — Blocks instance
   * @param {PropertyKey} property — Blocks class property key
   * @returns {Block|*}
   */)}static get(h,g){return isNaN(Number(g))?Reflect.get(h,g):h.get(+g)}
/**
   * Push new Block to the blocks array and append it to working area
   *
   * @param {Block} block - Block to add
   */push(h){this.blocks.push(h),this.insertToDOM(h)
/**
   * Swaps blocks with indexes first and second
   *
   * @param {number} first - first block index
   * @param {number} second - second block index
   * @deprecated — use 'move' instead
   */}swap(h,g){const f=this.blocks[g];c.swap(this.blocks[h].holder,f.holder),this.blocks[g]=this.blocks[h],this.blocks[h]=f
/**
   * Move a block from one to another index
   *
   * @param {number} toIndex - new index of the block
   * @param {number} fromIndex - block to move
   */}move(h,g){const f=this.blocks.splice(g,1)[0],k=h-1,v=Math.max(0,k),x=this.blocks[v];h>0?this.insertToDOM(f,"afterend",x):this.insertToDOM(f,"beforebegin",x),this.blocks.splice(h,0,f);const w=this.composeBlockEvent("move",{fromIndex:g,toIndex:h});f.call(Y.MOVED,w)}
/**
   * Insert new Block at passed index
   *
   * @param {number} index — index to insert Block
   * @param {Block} block — Block to insert
   * @param {boolean} replace — it true, replace block on given index
   */insert(h,g,f=!1){if(!this.length){this.push(g);return}h>this.length&&(h=this.length),f&&(this.blocks[h].holder.remove(),this.blocks[h].call(Y.REMOVED));const k=f?1:0;if(this.blocks.splice(h,k,g),h>0){const f=this.blocks[h-1];this.insertToDOM(g,"afterend",f)}else{const f=this.blocks[h+1];f?this.insertToDOM(g,"beforebegin",f):this.insertToDOM(g)}}
/**
   * Replaces block under passed index with passed block
   *
   * @param index - index of existed block
   * @param block - new block
   */replace(h,g){if(this.blocks[h]===void 0)throw Error("Incorrect index");this.blocks[h].holder.replaceWith(g.holder),this.blocks[h]=g
/**
   * Inserts several blocks at once
   *
   * @param blocks - blocks to insert
   * @param index - index to insert blocks at
   */}insertMany(h,g){const f=new DocumentFragment;for(const g of h)f.appendChild(g.holder);if(this.length>0){if(g>0){const h=Math.min(g-1,this.length-1);this.blocks[h].holder.after(f)}else g===0&&this.workingArea.prepend(f);this.blocks.splice(g,0,...h)}else this.blocks.push(...h),this.workingArea.appendChild(f);h.forEach((h=>h.call(Y.RENDERED)))}
/**
   * Remove block
   *
   * @param {number} index - index of Block to remove
   */remove(h){isNaN(h)&&(h=this.length-1),this.blocks[h].holder.remove(),this.blocks[h].call(Y.REMOVED),this.blocks.splice(h,1)}removeAll(){this.workingArea.innerHTML="",this.blocks.forEach((h=>h.call(Y.REMOVED))),this.blocks.length=0
/**
   * Insert Block after passed target
   *
   * @todo decide if this method is necessary
   * @param {Block} targetBlock — target after which Block should be inserted
   * @param {Block} newBlock — Block to insert
   */}insertAfter(h,g){const f=this.blocks.indexOf(h);this.insert(f+1,g)}
/**
   * Get Block by index
   *
   * @param {number} index — Block index
   * @returns {Block}
   */get(h){return this.blocks[h]}
/**
   * Return index of passed Block
   *
   * @param {Block} block - Block to find
   * @returns {number}
   */indexOf(h){return this.blocks.indexOf(h)}
/**
   * Insert new Block into DOM
   *
   * @param {Block} block - Block to insert
   * @param {InsertPosition} position — insert position (if set, will use insertAdjacentElement)
   * @param {Block} target — Block related to position
   */insertToDOM(h,g,f){g?f.holder.insertAdjacentElement(g,h.holder):this.workingArea.appendChild(h.holder),h.call(Y.RENDERED)
/**
   * Composes Block event with passed type and details
   *
   * @param {string} type - event type
   * @param {object} detail - event detail
   */}composeBlockEvent(h,g){return new CustomEvent(h,{detail:g})}}const qt="block-removed",Zt="block-added",Gt="block-moved",Jt="block-changed";class ti{constructor(){this.completed=Promise.resolve()}
/**
   * Add new promise to queue
   *
   * @param operation - promise should be added to queue
   */add(h){return new Promise(((g,f)=>{this.completed=this.completed.then(h).then(g).catch(f)}))}}class oi extends y{constructor(){super(...arguments),this._currentBlockIndex=-1,this._blocks=null
/**
   * Returns current Block index
   *
   * @returns {number}
   */}get currentBlockIndex(){return this._currentBlockIndex}
/**
   * Set current Block index and fire Block lifecycle callbacks
   *
   * @param {number} newIndex - index of Block to set as current
   */set currentBlockIndex(h){this._currentBlockIndex=h}
/**
   * returns first Block
   *
   * @returns {Block}
   */get firstBlock(){return this._blocks[0]}
/**
   * returns last Block
   *
   * @returns {Block}
   */get lastBlock(){return this._blocks[this._blocks.length-1]}
/**
   * Get current Block instance
   *
   * @returns {Block}
   */get currentBlock(){return this._blocks[this.currentBlockIndex]}
/**
   * Set passed Block as a current
   *
   * @param block - block to set as a current
   */set currentBlock(h){this.currentBlockIndex=this.getBlockIndex(h)}
/**
   * Returns next Block instance
   *
   * @returns {Block|null}
   */get nextBlock(){return this.currentBlockIndex===this._blocks.length-1?null:this._blocks[this.currentBlockIndex+1]}
/**
   * Return first Block with inputs after current Block
   *
   * @returns {Block | undefined}
   */get nextContentfulBlock(){return this.blocks.slice(this.currentBlockIndex+1).find((h=>!!h.inputs.length))}
/**
   * Return first Block with inputs before current Block
   *
   * @returns {Block | undefined}
   */get previousContentfulBlock(){return this.blocks.slice(0,this.currentBlockIndex).reverse().find((h=>!!h.inputs.length))}
/**
   * Returns previous Block instance
   *
   * @returns {Block|null}
   */get previousBlock(){return this.currentBlockIndex===0?null:this._blocks[this.currentBlockIndex-1]}
/**
   * Get array of Block instances
   *
   * @returns {Block[]} {@link Blocks#array}
   */get blocks(){return this._blocks.array}
/**
   * Check if each Block is empty
   *
   * @returns {boolean}
   */get isEditorEmpty(){return this.blocks.every((h=>h.isEmpty))}prepare(){const h=new Se(this.Editor.UI.nodes.redactor);this._blocks=new Proxy(h,{set:Se.set,get:Se.get}),this.listeners.on(document,"copy",(h=>this.Editor.BlockEvents.handleCommandC(h)))
/**
   * Toggle read-only state
   *
   * If readOnly is true:
   *  - Unbind event handlers from created Blocks
   *
   * if readOnly is false:
   *  - Bind event handlers to all existing Blocks
   *
   * @param {boolean} readOnlyEnabled - "read only" state
   */}toggleReadOnly(h){h?this.disableModuleBindings():this.enableModuleBindings()}
/**
   * Creates Block instance by tool name
   *
   * @param {object} options - block creation options
   * @param {string} options.tool - tools passed in editor config {@link EditorConfig#tools}
   * @param {string} [options.id] - unique id for this block
   * @param {BlockToolData} [options.data] - constructor params
   * @returns {Block}
   */composeBlock({tool:h,data:g={},id:f,tunes:k={}}){const v=this.Editor.ReadOnly.isEnabled,x=this.Editor.Tools.blockTools.get(h),w=new R({id:f,data:g,tool:x,api:this.Editor.API,readOnly:v,tunesData:k},this.eventsDispatcher);return v||window.requestIdleCallback((()=>{this.bindBlockEvents(w)}),{timeout:2e3}),w
/**
   * Insert new block into _blocks
   *
   * @param {object} options - insert options
   * @param {string} [options.id] - block's unique id
   * @param {string} [options.tool] - plugin name, by default method inserts the default block type
   * @param {object} [options.data] - plugin data
   * @param {number} [options.index] - index where to insert new Block
   * @param {boolean} [options.needToFocus] - flag shows if needed to update current Block index
   * @param {boolean} [options.replace] - flag shows if block by passed index should be replaced with inserted one
   * @returns {Block}
   */}insert({id:h,tool:g=this.config.defaultBlock,data:f={},index:k,needToFocus:v=!0,replace:x=!1,tunes:w={}}={}){let E=k;E===void 0&&(E=this.currentBlockIndex+(x?0:1));const C=this.composeBlock({id:h,tool:g,data:f,tunes:w});return x&&this.blockDidMutated(qt,this.getBlockByIndex(E),{index:E}),this._blocks.insert(E,C,x),this.blockDidMutated(Zt,C,{index:E}),v?this.currentBlockIndex=E:E<=this.currentBlockIndex&&this.currentBlockIndex++,C
/**
   * Inserts several blocks at once
   *
   * @param blocks - blocks to insert
   * @param index - index where to insert
   */}insertMany(h,g=0){this._blocks.insertMany(h,g)}
/**
   * Update Block data.
   *
   * Currently we don't have an 'update' method in the Tools API, so we just create a new block with the same id and type
   * Should not trigger 'block-removed' or 'block-added' events
   *
   * @param block - block to update
   * @param data - new data
   */async update(h,g){const f=await h.data,k=this.composeBlock({id:h.id,tool:h.name,data:Object.assign({},f,g),tunes:h.tunes}),v=this.getBlockIndex(h);return this._blocks.replace(v,k),this.blockDidMutated(Jt,k,{index:v}),k
/**
   * Replace passed Block with the new one with specified Tool and data
   *
   * @param block - block to replace
   * @param newTool - new Tool name
   * @param data - new Tool data
   */}replace(h,g,f){const k=this.getBlockIndex(h);this.insert({tool:g,data:f,index:k,replace:!0})}
/**
   * Insert pasted content. Call onPaste callback after insert.
   *
   * @param {string} toolName - name of Tool to insert
   * @param {PasteEvent} pasteEvent - pasted data
   * @param {boolean} replace - should replace current block
   */paste(h,g,f=!1){const v=this.insert({tool:h,replace:f});try{window.requestIdleCallback((()=>{v.call(Y.ON_PASTE,g)}))}catch(g){k(`${h}: onPaste callback call is failed`,"error",g)}return v}
/**
   * Insert new default block at passed index
   *
   * @param {number} index - index where Block should be inserted
   * @param {boolean} needToFocus - if true, updates current Block index
   *
   * TODO: Remove method and use insert() with index instead (?)
   * @returns {Block} inserted Block
   */insertDefaultBlockAtIndex(h,g=!1){const f=this.composeBlock({tool:this.config.defaultBlock});return this._blocks[h]=f,this.blockDidMutated(Zt,f,{index:h}),g?this.currentBlockIndex=h:h<=this.currentBlockIndex&&this.currentBlockIndex++,f
/**
   * Always inserts at the end
   *
   * @returns {Block}
   */}insertAtEnd(){return this.currentBlockIndex=this.blocks.length-1,this.insert()
/**
   * Merge two blocks
   *
   * @param {Block} targetBlock - previous block will be append to this block
   * @param {Block} blockToMerge - block that will be merged with target block
   * @returns {Promise} - the sequence that can be continued
   */}async mergeBlocks(h,g){const f=await g.data;W(f)||await h.mergeWith(f),this.removeBlock(g),this.currentBlockIndex=this._blocks.indexOf(h)
/**
   * Remove passed Block
   *
   * @param block - Block to remove
   * @param addLastBlock - if true, adds new default block at the end. @todo remove this logic and use event-bus instead
   */}removeBlock(h,g=!0){return new Promise((f=>{const k=this._blocks.indexOf(h);if(!this.validateIndex(k))throw new Error("Can't find a Block to remove");h.destroy(),this._blocks.remove(k),this.blockDidMutated(qt,h,{index:k}),this.currentBlockIndex>=k&&this.currentBlockIndex--,this.blocks.length?k===0&&(this.currentBlockIndex=0):(this.currentBlockIndex=-1,g&&this.insert()),f()}))}
/**
   * Remove only selected Blocks
   * and returns first Block index where started removing...
   *
   * @returns {number|undefined}
   */removeSelectedBlocks(){let h;for(let g=this.blocks.length-1;g>=0;g--)this.blocks[g].selected&&(this.removeBlock(this.blocks[g]),h=g);return h}removeAllBlocks(){for(let h=this.blocks.length-1;h>=0;h--)this._blocks.remove(h);this.currentBlockIndex=-1,this.insert(),this.currentBlock.firstInput.focus()
/**
   * Split current Block
   * 1. Extract content from Caret position to the Block`s end
   * 2. Insert a new Block below current one with extracted content
   *
   * @returns {Block}
   */}split(){const h=this.Editor.Caret.extractFragmentFromCaretPosition(),g=c.make("div");g.appendChild(h);const f={text:c.isEmpty(g)?"":g.innerHTML};return this.insert({data:f})}
/**
   * Returns Block by passed index
   *
   * @param {number} index - index to get. -1 to get last
   * @returns {Block}
   */getBlockByIndex(h){return h===-1&&(h=this._blocks.length-1),this._blocks[h]
/**
   * Returns an index for passed Block
   *
   * @param block - block to find index
   */}getBlockIndex(h){return this._blocks.indexOf(h)}
/**
   * Returns the Block by passed id
   *
   * @param id - id of block to get
   * @returns {Block}
   */getBlockById(h){return this._blocks.array.find((g=>g.id===h))}
/**
   * Get Block instance by html element
   *
   * @param {Node} element - html element to get Block by
   */getBlock(h){c.isElement(h)||(h=h.parentNode);const g=this._blocks.nodes,f=h.closest(`.${R.CSS.wrapper}`),k=g.indexOf(f);if(k>=0)return this._blocks[k]}
/**
   * 1) Find first-level Block from passed child Node
   * 2) Mark it as current
   *
   * @param {Node} childNode - look ahead from this node.
   * @returns {Block | undefined} can return undefined in case when the passed child note is not a part of the current editor instance
   */setCurrentBlockByChildNode(h){c.isElement(h)||(h=h.parentNode);const g=h.closest(`.${R.CSS.wrapper}`);if(!g)return;const f=g.closest(`.${this.Editor.UI.CSS.editorWrapper}`);return f!=null&&f.isEqualNode(this.Editor.UI.nodes.wrapper)?(this.currentBlockIndex=this._blocks.nodes.indexOf(g),this.currentBlock.updateCurrentInput(),this.currentBlock
/**
   * Return block which contents passed node
   *
   * @param {Node} childNode - node to get Block by
   * @returns {Block}
   */):void 0}getBlockByChildNode(h){if(!h||!(h instanceof Node))return;c.isElement(h)||(h=h.parentNode);const g=h.closest(`.${R.CSS.wrapper}`);return this.blocks.find((h=>h.holder===g))}
/**
   * Swap Blocks Position
   *
   * @param {number} fromIndex - index of first block
   * @param {number} toIndex - index of second block
   * @deprecated — use 'move' instead
   */swap(h,g){this._blocks.swap(h,g),this.currentBlockIndex=g
/**
   * Move a block to a new index
   *
   * @param {number} toIndex - index where to move Block
   * @param {number} fromIndex - index of Block to move
   */}move(h,g=this.currentBlockIndex){isNaN(h)||isNaN(g)?k("Warning during 'move' call: incorrect indices provided.","warn"):this.validateIndex(h)&&this.validateIndex(g)?(this._blocks.move(h,g),this.currentBlockIndex=h,this.blockDidMutated(Gt,this.currentBlock,{fromIndex:g,toIndex:h})
/**
   * Converts passed Block to the new Tool
   * Uses Conversion Config
   *
   * @param blockToConvert - Block that should be converted
   * @param targetToolName - name of the Tool to convert to
   * @param blockDataOverrides - optional new Block data overrides
   */):k("Warning during 'move' call: indices cannot be lower than 0 or greater than the amount of blocks.","warn")}async convert(h,g,f){if(!await h.save())throw new Error("Could not convert Block. Failed to extract original Block data.");const k=this.Editor.Tools.blockTools.get(g);if(!k)throw new Error(`Could not convert Block. Tool «${g}» not found.`);const v=await h.exportDataAsString(),x=V(v,k.sanitizeConfig);let w=to(x,k.conversionConfig);f&&(w=Object.assign(w,f)),this.replace(h,k.name,w)}dropPointer(){this.currentBlockIndex=-1}
/**
   * Clears Editor
   *
   * @param {boolean} needToAddDefaultBlock - 1) in internal calls (for example, in api.blocks.render)
   *                                             we don't need to add an empty default block
   *                                        2) in api.blocks.clear we should add empty block
   */async clear(h=!1){const g=new ti;this.blocks.forEach((h=>{g.add((async()=>{await this.removeBlock(h,!1)}))})),await g.completed,this.dropPointer(),h&&this.insert(),this.Editor.UI.checkEmptiness()}async destroy(){await Promise.all(this.blocks.map((h=>h.destroy())))}
/**
   * Bind Block events
   *
   * @param {Block} block - Block to which event should be bound
   */bindBlockEvents(h){const{BlockEvents:g}=this.Editor;this.readOnlyMutableListeners.on(h.holder,"keydown",(h=>{g.keydown(h)})),this.readOnlyMutableListeners.on(h.holder,"keyup",(h=>{g.keyup(h)})),this.readOnlyMutableListeners.on(h.holder,"dragover",(h=>{g.dragOver(h)})),this.readOnlyMutableListeners.on(h.holder,"dragleave",(h=>{g.dragLeave(h)})),h.on("didMutated",(h=>this.blockDidMutated(Jt,h,{index:this.getBlockIndex(h)})))}disableModuleBindings(){this.readOnlyMutableListeners.clearAll()}enableModuleBindings(){this.readOnlyMutableListeners.on(document,"cut",(h=>this.Editor.BlockEvents.handleCommandX(h))),this.blocks.forEach((h=>{this.bindBlockEvents(h)}))
/**
   * Validates that the given index is not lower than 0 or higher than the amount of blocks
   *
   * @param {number} index - index of blocks array to validate
   * @returns {boolean}
   */}validateIndex(h){return!(h<0||h>=this._blocks.length)}
/**
   * Block mutation callback
   *
   * @param mutationType - what happened with block
   * @param block - mutated block
   * @param detailData - additional data to pass with change event
   */blockDidMutated(h,g,f){const k=new CustomEvent(h,{detail:{target:new ee(g),...f}});return this.eventsDispatcher.emit(z,{event:k}),g}}class ii extends y{constructor(){super(...arguments),this.anyBlockSelectedCache=null,this.needToSelectAll=!1,this.nativeInputSelected=!1,this.readyToBlockSelection=!1
/**
   * Sanitizer Config
   *
   * @returns {SanitizerConfig}
   */}get sanitizerConfig(){return{p:{},h1:{},h2:{},h3:{},h4:{},h5:{},h6:{},ol:{},ul:{},li:{},br:!0,img:{src:!0,width:!0,height:!0},a:{href:!0},b:{},i:{},u:{}}}
/**
   * Flag that identifies all Blocks selection
   *
   * @returns {boolean}
   */get allBlocksSelected(){const{BlockManager:h}=this.Editor;return h.blocks.every((h=>h.selected===!0))}
/**
   * Set selected all blocks
   *
   * @param {boolean} state - state to set
   */set allBlocksSelected(h){const{BlockManager:g}=this.Editor;g.blocks.forEach((g=>{g.selected=h})),this.clearCache()
/**
   * Flag that identifies any Block selection
   *
   * @returns {boolean}
   */}get anyBlockSelected(){const{BlockManager:h}=this.Editor;return this.anyBlockSelectedCache===null&&(this.anyBlockSelectedCache=h.blocks.some((h=>h.selected===!0))),this.anyBlockSelectedCache
/**
   * Return selected Blocks array
   *
   * @returns {Block[]}
   */}get selectedBlocks(){return this.Editor.BlockManager.blocks.filter((h=>h.selected))}prepare(){this.selection=new b,ft.add({name:"CMD+A",handler:h=>{const{BlockManager:g,ReadOnly:f}=this.Editor;f.isEnabled?(h.preventDefault(),this.selectAllBlocks()):g.currentBlock&&this.handleCommandA(h)},on:this.Editor.UI.nodes.redactor})}toggleReadOnly(){b.get().removeAllRanges(),this.allBlocksSelected=!1
/**
   * Remove selection of Block
   *
   * @param {number?} index - Block index according to the BlockManager's indexes
   */}unSelectBlockByIndex(h){const{BlockManager:g}=this.Editor;let f;f=isNaN(h)?g.currentBlock:g.getBlockByIndex(h),f.selected=!1,this.clearCache()
/**
   * Clear selection from Blocks
   *
   * @param {Event} reason - event caused clear of selection
   * @param {boolean} restoreSelection - if true, restore saved selection
   */}clearSelection(h,g=!1){const{BlockManager:f,Caret:k,RectangleSelection:v}=this.Editor;this.needToSelectAll=!1,this.nativeInputSelected=!1,this.readyToBlockSelection=!1;const x=h&&h instanceof KeyboardEvent,w=x&&lt(h.keyCode);if(this.anyBlockSelected&&x&&w&&!b.isSelectionExists){const g=f.removeSelectedBlocks();f.insertDefaultBlockAtIndex(g,!0),k.setToBlock(f.currentBlock),xe((()=>{const g=h.key;k.insertContentAtCaretPosition(g.length>1?"":g)}),20)()}this.Editor.CrossBlockSelection.clear(h),this.anyBlockSelected&&!v.isRectActivated()?(g&&this.selection.restore(),this.allBlocksSelected=!1
/**
   * Reduce each Block and copy its content
   *
   * @param {ClipboardEvent} e - copy/cut event
   * @returns {Promise<void>}
   */):this.Editor.RectangleSelection.clearSelection()}copySelectedBlocks(h){h.preventDefault();const g=c.make("div");this.selectedBlocks.forEach((h=>{const f=V(h.holder.innerHTML,this.sanitizerConfig),k=c.make("p");k.innerHTML=f,g.appendChild(k)}));const f=Array.from(g.childNodes).map((h=>h.textContent)).join("\n\n"),k=g.innerHTML;return h.clipboardData.setData("text/plain",f),h.clipboardData.setData("text/html",k),Promise.all(this.selectedBlocks.map((h=>h.save()))).then((g=>{try{h.clipboardData.setData(this.Editor.Paste.MIME_TYPE,JSON.stringify(g))}catch{}}))
/**
   * Select Block by its index
   *
   * @param {number?} index - Block index according to the BlockManager's indexes
   */}selectBlockByIndex(h){const{BlockManager:g}=this.Editor,f=g.getBlockByIndex(h);f!==void 0&&this.selectBlock(f)}
/**
   * Select passed Block
   *
   * @param {Block} block - Block to select
   */selectBlock(h){this.selection.save(),b.get().removeAllRanges(),h.selected=!0,this.clearCache(),this.Editor.InlineToolbar.close()
/**
   * Remove selection from passed Block
   *
   * @param {Block} block - Block to unselect
   */}unselectBlock(h){h.selected=!1,this.clearCache()}clearCache(){this.anyBlockSelectedCache=null}destroy(){ft.remove(this.Editor.UI.nodes.redactor,"CMD+A")}
/**
   * First CMD+A selects all input content by native behaviour,
   * next CMD+A keypress selects all blocks
   *
   * @param {KeyboardEvent} event - keyboard event
   */handleCommandA(h){if(this.Editor.RectangleSelection.clearSelection(),c.isNativeInput(h.target)&&!this.readyToBlockSelection){this.readyToBlockSelection=!0;return}const g=this.Editor.BlockManager.getBlock(h.target),f=g.inputs;f.length>1&&!this.readyToBlockSelection?this.readyToBlockSelection=!0:f.length!==1||this.needToSelectAll?this.needToSelectAll?(h.preventDefault(),this.selectAllBlocks(),this.needToSelectAll=!1,this.readyToBlockSelection=!1,this.Editor.ConversionToolbar.close()):this.readyToBlockSelection&&(h.preventDefault(),this.selectBlock(g),this.needToSelectAll=!0):this.needToSelectAll=!0}selectAllBlocks(){this.selection.save(),b.get().removeAllRanges(),this.allBlocksSelected=!0,this.Editor.InlineToolbar.close()}}class we extends y{
/**
   * Allowed caret positions in input
   *
   * @static
   * @returns {{START: string, END: string, DEFAULT: string}}
   */
get positions(){return{START:"start",END:"end",DEFAULT:"default"}}static get CSS(){return{shadowCaret:"cdx-shadow-caret"}}
/**
   * Get's deepest first node and checks if offset is zero
   *
   * @returns {boolean}
   */get isAtStart(){const{currentBlock:h}=this.Editor.BlockManager;if(!h.focusable)return!0;const g=b.get(),f=c.getDeepestNode(h.currentInput);let k=g.focusNode;if(c.isNativeInput(f))return f.selectionEnd===0;if(!g.anchorNode)return!1;let v=k.textContent.search(/\S/);v===-1&&(v=0);let x=g.focusOffset;return k.nodeType!==Node.TEXT_NODE&&k.childNodes.length&&(k.childNodes[x]?(k=k.childNodes[x],x=0):(k=k.childNodes[x-1],x=k.textContent.length)),!(!c.isLineBreakTag(f)&&!c.isEmpty(f)||!this.getHigherLevelSiblings(k,"left").every((h=>{const g=c.isLineBreakTag(h),f=h.children.length===1&&c.isLineBreakTag(h.children[0]),k=g||f;return c.isEmpty(h)&&!k}))||x!==v)||(f===null||k===f&&x<=v)
/**
   * Get's deepest last node and checks if offset is last node text length
   *
   * @returns {boolean}
   */}get isAtEnd(){const{currentBlock:h}=this.Editor.BlockManager;if(!h.focusable)return!0;const g=b.get();let f=g.focusNode;const k=c.getDeepestNode(h.currentInput,!0);if(c.isNativeInput(k))return k.selectionEnd===k.value.length;if(!g.focusNode)return!1;let v=g.focusOffset;if(f.nodeType!==Node.TEXT_NODE&&f.childNodes.length&&(f.childNodes[v-1]?(f=f.childNodes[v-1],v=f.textContent.length):(f=f.childNodes[0],v=0)),c.isLineBreakTag(k)||c.isEmpty(k)){const h=this.getHigherLevelSiblings(f,"right");if(h.every(((g,f)=>f===h.length-1&&c.isLineBreakTag(g)||c.isEmpty(g)&&!c.isLineBreakTag(g)))&&v===f.textContent.length)return!0}const x=k.textContent.replace(/\s+$/,"");return f===k&&v>=x.length}
/**
   * Method gets Block instance and puts caret to the text node with offset
   * There two ways that method applies caret position:
   *   - first found text node: sets at the beginning, but you can pass an offset
   *   - last found text node: sets at the end of the node. Also, you can customize the behaviour
   *
   * @param {Block} block - Block class
   * @param {string} position - position where to set caret.
   *                            If default - leave default behaviour and apply offset if it's passed
   * @param {number} offset - caret offset regarding to the text node
   */setToBlock(h,g=this.positions.DEFAULT,f=0){var k;const{BlockManager:v,BlockSelection:x}=this.Editor;if(x.clearSelection(),!h.focusable){(k=window.getSelection())==null||k.removeAllRanges(),x.selectBlock(h),v.currentBlock=h;return}let w;switch(g){case this.positions.START:w=h.firstInput;break;case this.positions.END:w=h.lastInput;break;default:w=h.currentInput}if(!w)return;const E=c.getDeepestNode(w,g===this.positions.END),C=c.getContentLength(E);switch(!0){case g===this.positions.START:f=0;break;case g===this.positions.END:case f>C:f=C;break}this.set(E,f),v.setCurrentBlockByChildNode(h.holder),v.currentBlock.currentInput=w
/**
   * Set caret to the current input of current Block.
   *
   * @param {HTMLElement} input - input where caret should be set
   * @param {string} position - position of the caret.
   *                            If default - leave default behaviour and apply offset if it's passed
   * @param {number} offset - caret offset regarding to the text node
   */}setToInput(h,g=this.positions.DEFAULT,f=0){const{currentBlock:k}=this.Editor.BlockManager,v=c.getDeepestNode(h);switch(g){case this.positions.START:this.set(v,0);break;case this.positions.END:this.set(v,c.getContentLength(v));break;default:f&&this.set(v,f)}k.currentInput=h}
/**
   * Creates Document Range and sets caret to the element with offset
   *
   * @param {HTMLElement} element - target node.
   * @param {number} offset - offset
   */set(h,g=0){const{top:f,bottom:k}=b.setCursor(h,g),{innerHeight:v}=window;f<0?window.scrollBy(0,f-30):k>v&&window.scrollBy(0,k-v+30)}setToTheLastBlock(){const h=this.Editor.BlockManager.lastBlock;if(h)if(h.tool.isDefault&&h.isEmpty)this.setToBlock(h);else{const h=this.Editor.BlockManager.insertAtEnd();this.setToBlock(h)}}extractFragmentFromCaretPosition(){const h=b.get();if(h.rangeCount){const g=h.getRangeAt(0),f=this.Editor.BlockManager.currentBlock.currentInput;if(g.deleteContents(),f){if(c.isNativeInput(f)){const h=f,g=document.createDocumentFragment(),k=h.value.substring(0,h.selectionStart),v=h.value.substring(h.selectionStart);return g.textContent=v,h.value=k,g}{const h=g.cloneRange();return h.selectNodeContents(f),h.setStart(g.endContainer,g.endOffset),h.extractContents()}}}}
/**
   * Set's caret to the next Block or Tool`s input
   * Before moving caret, we should check if caret position is at the end of Plugins node
   * Using {@link Dom#getDeepestNode} to get a last node and match with current selection
   *
   * @param {boolean} force - pass true to skip check for caret position
   */navigateNext(h=!1){const{BlockManager:g}=this.Editor,{currentBlock:f,nextBlock:k}=g,{nextInput:v}=f,x=this.isAtEnd;let w=k;const E=h||x;if(v&&E)return this.setToInput(v,this.positions.START),!0;if(w===null){if(f.tool.isDefault||!E)return!1;w=g.insertAtEnd()}return!!E&&(this.setToBlock(w,this.positions.START),!0)}
/**
   * Set's caret to the previous Tool`s input or Block
   * Before moving caret, we should check if caret position is start of the Plugins node
   * Using {@link Dom#getDeepestNode} to get a last node and match with current selection
   *
   * @param {boolean} force - pass true to skip check for caret position
   */navigatePrevious(h=!1){const{currentBlock:g,previousBlock:f}=this.Editor.BlockManager;if(!g)return!1;const{previousInput:k}=g,v=h||this.isAtStart;return k&&v?(this.setToInput(k,this.positions.END),!0):!(f===null||!v)&&(this.setToBlock(f,this.positions.END),!0)}
/**
   * Inserts shadow element after passed element where caret can be placed
   *
   * @param {Element} element - element after which shadow caret should be inserted
   */createShadow(h){const g=document.createElement("span");g.classList.add(we.CSS.shadowCaret),h.insertAdjacentElement("beforeend",g)
/**
   * Restores caret position
   *
   * @param {HTMLElement} element - element where caret should be restored
   */}restoreCaret(h){const g=h.querySelector(`.${we.CSS.shadowCaret}`);if(!g)return;(new b).expandToTag(g);const f=document.createRange();f.selectNode(g),f.extractContents()
/**
   * Inserts passed content at caret position
   *
   * @param {string} content - content to insert
   */}insertContentAtCaretPosition(h){const g=document.createDocumentFragment(),f=document.createElement("div"),k=b.get(),v=b.range;f.innerHTML=h,Array.from(f.childNodes).forEach((h=>g.appendChild(h))),g.childNodes.length===0&&g.appendChild(new Text);const x=g.lastChild;v.deleteContents(),v.insertNode(g);const w=document.createRange(),E=x.nodeType===Node.TEXT_NODE?x:x.firstChild;E!==null&&E.textContent!==null&&w.setStart(E,E.textContent.length),k.removeAllRanges(),k.addRange(w)
/**
   * Get all first-level (first child of [contenteditable]) siblings from passed node
   * Then you can check it for emptiness
   *
   * @example
   * <div contenteditable>
   * <p></p>                            |
   * <p></p>                            | left first-level siblings
   * <p></p>                            |
   * <blockquote><a><b>adaddad</b><a><blockquote>       <-- passed node for example <b>
   * <p></p>                            |
   * <p></p>                            | right first-level siblings
   * <p></p>                            |
   * </div>
   * @param {HTMLElement} from - element from which siblings should be searched
   * @param {'left' | 'right'} direction - direction of search
   * @returns {HTMLElement[]}
   */}getHigherLevelSiblings(h,g){let f=h;const k=[];for(;f.parentNode&&f.parentNode.contentEditable!=="true";)f=f.parentNode;const v=g==="left"?"previousSibling":"nextSibling";for(;f[v];)f=f[v],k.push(f);return k}}class ni extends y{constructor(){super(...arguments),this.onMouseUp=()=>{this.listeners.off(document,"mouseover",this.onMouseOver),this.listeners.off(document,"mouseup",this.onMouseUp)},this.onMouseOver=h=>{const{BlockManager:g,BlockSelection:f}=this.Editor;if(h.relatedTarget===null&&h.target===null)return;const k=g.getBlockByChildNode(h.relatedTarget)||this.lastSelectedBlock,v=g.getBlockByChildNode(h.target);if(!(!k||!v)&&v!==k){if(k===this.firstSelectedBlock){b.get().removeAllRanges(),k.selected=!0,v.selected=!0,f.clearCache();return}if(v===this.firstSelectedBlock){k.selected=!1,v.selected=!1,f.clearCache();return}this.Editor.InlineToolbar.close(),this.toggleBlocksSelectedState(k,v),this.lastSelectedBlock=v}}
/**
   * Module preparation
   *
   * @returns {Promise}
   */}async prepare(){this.listeners.on(document,"mousedown",(h=>{this.enableCrossBlockSelection(h)}))}
/**
   * Sets up listeners
   *
   * @param {MouseEvent} event - mouse down event
   */watchSelection(h){if(h.button!==f.LEFT)return;const{BlockManager:g}=this.Editor;this.firstSelectedBlock=g.getBlock(h.target),this.lastSelectedBlock=this.firstSelectedBlock,this.listeners.on(document,"mouseover",this.onMouseOver),this.listeners.on(document,"mouseup",this.onMouseUp)}get isCrossBlockSelectionStarted(){return!!this.firstSelectedBlock&&!!this.lastSelectedBlock}
/**
   * Change selection state of the next Block
   * Used for CBS via Shift + arrow keys
   *
   * @param {boolean} next - if true, toggle next block. Previous otherwise
   */toggleBlockSelectedState(h=!0){const{BlockManager:g,BlockSelection:f}=this.Editor;this.lastSelectedBlock||(this.lastSelectedBlock=this.firstSelectedBlock=g.currentBlock),this.firstSelectedBlock===this.lastSelectedBlock&&(this.firstSelectedBlock.selected=!0,f.clearCache(),b.get().removeAllRanges());const k=g.blocks.indexOf(this.lastSelectedBlock)+(h?1:-1),v=g.blocks[k];v&&(this.lastSelectedBlock.selected!==v.selected?(v.selected=!0,f.clearCache()):(this.lastSelectedBlock.selected=!1,f.clearCache()),this.lastSelectedBlock=v,this.Editor.InlineToolbar.close(),v.holder.scrollIntoView({block:"nearest"})
/**
   * Clear saved state
   *
   * @param {Event} reason - event caused clear of selection
   */)}clear(h){const{BlockManager:f,BlockSelection:k,Caret:v}=this.Editor,x=f.blocks.indexOf(this.firstSelectedBlock),w=f.blocks.indexOf(this.lastSelectedBlock);if(k.anyBlockSelected&&x>-1&&w>-1&&h&&h instanceof KeyboardEvent)switch(h.keyCode){case g.DOWN:case g.RIGHT:v.setToBlock(f.blocks[Math.max(x,w)],v.positions.END);break;case g.UP:case g.LEFT:v.setToBlock(f.blocks[Math.min(x,w)],v.positions.START);break;default:v.setToBlock(f.blocks[Math.max(x,w)],v.positions.END)}this.firstSelectedBlock=this.lastSelectedBlock=null}
/**
   * Enables Cross Block Selection
   *
   * @param {MouseEvent} event - mouse down event
   */enableCrossBlockSelection(h){const{UI:g}=this.Editor;b.isCollapsed||this.Editor.BlockSelection.clearSelection(h),g.nodes.redactor.contains(h.target)?this.watchSelection(h):this.Editor.BlockSelection.clearSelection(h)
/**
   * Change blocks selection state between passed two blocks.
   *
   * @param {Block} firstBlock - first block in range
   * @param {Block} lastBlock - last block in range
   */}toggleBlocksSelectedState(h,g){const{BlockManager:f,BlockSelection:k}=this.Editor,v=f.blocks.indexOf(h),x=f.blocks.indexOf(g),w=h.selected!==g.selected;for(let E=Math.min(v,x);E<=Math.max(v,x);E++){const v=f.blocks[E];v!==this.firstSelectedBlock&&v!==(w?h:g)&&(f.blocks[E].selected=!f.blocks[E].selected,k.clearCache())}}}class si extends y{constructor(){super(...arguments),this.isStartedAtEditor=!1
/**
   * Toggle read-only state
   *
   * if state is true:
   *  - disable all drag-n-drop event handlers
   *
   * if state is false:
   *  - restore drag-n-drop event handlers
   *
   * @param {boolean} readOnlyEnabled - "read only" state
   */}toggleReadOnly(h){h?this.disableModuleBindings():this.enableModuleBindings()}enableModuleBindings(){const{UI:h}=this.Editor;this.readOnlyMutableListeners.on(h.nodes.holder,"drop",(async h=>{await this.processDrop(h)}),!0),this.readOnlyMutableListeners.on(h.nodes.holder,"dragstart",(()=>{this.processDragStart()})),this.readOnlyMutableListeners.on(h.nodes.holder,"dragover",(h=>{this.processDragOver(h)}),!0)}disableModuleBindings(){this.readOnlyMutableListeners.clearAll()}
/**
   * Handle drop event
   *
   * @param {DragEvent} dropEvent - drop event
   */async processDrop(h){const{BlockManager:g,Caret:f,Paste:k}=this.Editor;h.preventDefault(),g.blocks.forEach((h=>{h.dropTarget=!1})),b.isAtEditor&&!b.isCollapsed&&this.isStartedAtEditor&&document.execCommand("delete"),this.isStartedAtEditor=!1;const v=g.setCurrentBlockByChildNode(h.target);if(v)this.Editor.Caret.setToBlock(v,f.positions.END);else{const h=g.setCurrentBlockByChildNode(g.lastBlock.holder);this.Editor.Caret.setToBlock(h,f.positions.END)}await k.processDataTransfer(h.dataTransfer,!0)}processDragStart(){b.isAtEditor&&!b.isCollapsed&&(this.isStartedAtEditor=!0),this.Editor.InlineToolbar.close()
/**
   * @param {DragEvent} dragEvent - drag event
   */}processDragOver(h){h.preventDefault()}}class ri extends y{
/**
   * Prepare the module
   *
   * @param options - options used by the modification observer module
   * @param options.config - Editor configuration object
   * @param options.eventsDispatcher - common Editor event bus
   */
constructor({config:h,eventsDispatcher:g}){super({config:h,eventsDispatcher:g}),this.disabled=!1,this.batchingTimeout=null,this.batchingOnChangeQueue=new Map,this.batchTime=400,this.mutationObserver=new MutationObserver((h=>{this.redactorChanged(h)})),this.eventsDispatcher.on(z,(h=>{this.particularBlockChanged(h.event)})),this.eventsDispatcher.on(U,(()=>{this.disable()})),this.eventsDispatcher.on(j,(()=>{this.enable()}))}enable(){this.mutationObserver.observe(this.Editor.UI.nodes.redactor,{childList:!0,subtree:!0,characterData:!0,attributes:!0}),this.disabled=!1}disable(){this.mutationObserver.disconnect(),this.disabled=!0
/**
   * Call onChange event passed to Editor.js configuration
   *
   * @param event - some of our custom change events
   */}particularBlockChanged(h){this.disabled||!M(this.config.onChange)||(this.batchingOnChangeQueue.set(`block:${h.detail.target.id}:event:${h.type}`,h),this.batchingTimeout&&clearTimeout(this.batchingTimeout),this.batchingTimeout=setTimeout((()=>{let h;h=this.batchingOnChangeQueue.size===1?this.batchingOnChangeQueue.values().next().value:Array.from(this.batchingOnChangeQueue.values()),this.config.onChange&&this.config.onChange(this.Editor.API.methods,h),this.batchingOnChangeQueue.clear()}),this.batchTime)
/**
   * Fired on every blocks wrapper dom change
   *
   * @param mutations - mutations happened
   */)}redactorChanged(h){this.eventsDispatcher.emit(F,{mutations:h})}}const lo=class extends y{constructor(){super(...arguments),this.MIME_TYPE="application/x-editor-js",this.toolsTags={},this.tagsByTool={},this.toolsPatterns=[],this.toolsFiles={},this.exceptionList=[],this.processTool=h=>{try{const g=h.create({},{},!1);if(h.pasteConfig===!1){this.exceptionList.push(h.name);return}if(!M(g.onPaste))return;this.getTagsConfig(h),this.getFilesConfig(h),this.getPatternsConfig(h)}catch(g){k(`Paste handling for «${h.name}» Tool hasn't been set up because of the error`,"warn",g)}},this.handlePasteEvent=async h=>{const{BlockManager:g,Toolbar:f}=this.Editor,k=g.setCurrentBlockByChildNode(h.target);!k||this.isNativeBehaviour(h.target)&&!h.clipboardData.types.includes("Files")||k&&this.exceptionList.includes(k.name)||(h.preventDefault(),this.processDataTransfer(h.clipboardData),f.close())}}async prepare(){this.processTools()}
/**
   * Set read-only state
   *
   * @param {boolean} readOnlyEnabled - read only flag value
   */toggleReadOnly(h){h?this.unsetCallback():this.setCallback()}
/**
   * Handle pasted or dropped data transfer object
   *
   * @param {DataTransfer} dataTransfer - pasted or dropped data transfer object
   * @param {boolean} isDragNDrop - true if data transfer comes from drag'n'drop events
   */async processDataTransfer(h,g=!1){const{Tools:f}=this.Editor,k=h.types;if((k.includes?k.includes("Files"):k.contains("Files"))&&!W(this.toolsFiles)){await this.processFiles(h.files);return}const v=h.getData(this.MIME_TYPE),x=h.getData("text/plain");let w=h.getData("text/html");if(v)try{this.insertEditorJSData(JSON.parse(v));return}catch{}g&&x.trim()&&w.trim()&&(w="<p>"+(w.trim()?w:x)+"</p>");const E=Object.keys(this.toolsTags).reduce(((h,g)=>(h[g.toLowerCase()]=this.toolsTags[g].sanitizationConfig??{},h)),{}),C=Object.assign({},E,f.getAllInlineToolsSanitizeConfig(),{br:{}}),T=V(w,C);T.trim()&&T.trim()!==x&&c.isHTMLString(T)?await this.processText(T,!0):await this.processText(x)}
/**
   * Process pasted text and divide them into Blocks
   *
   * @param {string} data - text to process. Can be HTML or plain.
   * @param {boolean} isHTML - if passed string is HTML, this parameter should be true
   */async processText(h,g=!1){const{Caret:f,BlockManager:k}=this.Editor,v=g?this.processHTML(h):this.processPlain(h);if(!v.length)return;if(v.length===1){v[0].isBlock?this.processSingleBlock(v.pop()):this.processInlinePaste(v.pop());return}const x=k.currentBlock&&k.currentBlock.tool.isDefault&&k.currentBlock.isEmpty;v.map((async(h,g)=>this.insertBlock(h,g===0&&x))),k.currentBlock&&f.setToBlock(k.currentBlock,f.positions.END)}setCallback(){this.listeners.on(this.Editor.UI.nodes.holder,"paste",this.handlePasteEvent)}unsetCallback(){this.listeners.off(this.Editor.UI.nodes.holder,"paste",this.handlePasteEvent)}processTools(){const h=this.Editor.Tools.blockTools;Array.from(h.values()).forEach(this.processTool)}
/**
   * Get tags name list from either tag name or sanitization config.
   *
   * @param {string | object} tagOrSanitizeConfig - tag name or sanitize config object.
   * @returns {string[]} array of tags.
   */collectTagNames(h){return G(h)?[h]:D(h)?Object.keys(h):[]}
/**
   * Get tags to substitute by Tool
   *
   * @param tool - BlockTool object
   */getTagsConfig(h){if(h.pasteConfig===!1)return;const g=h.pasteConfig.tags||[],f=[];g.forEach((g=>{const v=this.collectTagNames(g);f.push(...v),v.forEach((f=>{if(Object.prototype.hasOwnProperty.call(this.toolsTags,f)){k(`Paste handler for «${h.name}» Tool on «${f}» tag is skipped because it is already used by «${this.toolsTags[f].tool.name}» Tool.`,"warn");return}const v=D(g)?g[f]:null;this.toolsTags[f.toUpperCase()]={tool:h,sanitizationConfig:v}}))})),this.tagsByTool[h.name]=f.map((h=>h.toUpperCase()))
/**
   * Get files` types and extensions to substitute by Tool
   *
   * @param tool - BlockTool object
   */}getFilesConfig(h){if(h.pasteConfig===!1)return;const{files:g={}}=h.pasteConfig;let{extensions:f,mimeTypes:v}=g;!f&&!v||(f&&!Array.isArray(f)&&(k(`«extensions» property of the onDrop config for «${h.name}» Tool should be an array`),f=[]),v&&!Array.isArray(v)&&(k(`«mimeTypes» property of the onDrop config for «${h.name}» Tool should be an array`),v=[]),v&&(v=v.filter((g=>!!jt(g)||(k(`MIME type value «${g}» for the «${h.name}» Tool is not a valid MIME type`,"warn"),!1)))),this.toolsFiles[h.name]={extensions:f||[],mimeTypes:v||[]}
/**
   * Get RegExp patterns to substitute by Tool
   *
   * @param tool - BlockTool object
   */)}getPatternsConfig(h){h.pasteConfig===!1||!h.pasteConfig.patterns||W(h.pasteConfig.patterns)||Object.entries(h.pasteConfig.patterns).forEach((([g,f])=>{f instanceof RegExp||k(`Pattern ${f} for «${h.name}» Tool is skipped because it should be a Regexp instance.`,"warn"),this.toolsPatterns.push({key:g,pattern:f,tool:h})}))}
/**
   * Check if browser behavior suits better
   *
   * @param {EventTarget} element - element where content has been pasted
   * @returns {boolean}
   */isNativeBehaviour(h){return c.isNativeInput(h)}
/**
   * Get files from data transfer object and insert related Tools
   *
   * @param {FileList} items - pasted or dropped items
   */async processFiles(h){const{BlockManager:g}=this.Editor;let f;f=await Promise.all(Array.from(h).map((h=>this.processFile(h)))),f=f.filter((h=>!!h));const k=g.currentBlock.tool.isDefault&&g.currentBlock.isEmpty;f.forEach(((h,f)=>{g.paste(h.type,h.event,f===0&&k)}))}
/**
   * Get information about file and find Tool to handle it
   *
   * @param {File} file - file to process
   */async processFile(h){const g=Ut(h),f=Object.entries(this.toolsFiles).find((([f,{mimeTypes:k,extensions:v}])=>{const[x,w]=h.type.split("/"),E=v.find((h=>h.toLowerCase()===g.toLowerCase())),C=k.find((h=>{const[g,f]=h.split("/");return g===x&&(f===w||f==="*")}));return!!E||!!C}));if(!f)return;const[k]=f;return{event:this.composePasteEvent("file",{file:h}),type:k}}
/**
   * Split HTML string to blocks and return it as array of Block data
   *
   * @param {string} innerHTML - html string to process
   * @returns {PasteData[]}
   */processHTML(h){const{Tools:g}=this.Editor,f=c.make("DIV");return f.innerHTML=h,this.getNodes(f).map((h=>{let f,k=g.defaultTool,v=!1;switch(h.nodeType){case Node.DOCUMENT_FRAGMENT_NODE:f=c.make("div"),f.appendChild(h);break;case Node.ELEMENT_NODE:f=h,v=!0,this.toolsTags[f.tagName]&&(k=this.toolsTags[f.tagName].tool);break}const{tags:x}=k.pasteConfig||{tags:[]},w=x.reduce(((h,g)=>(this.collectTagNames(g).forEach((f=>{const k=D(g)?g[f]:null;h[f.toLowerCase()]=k||{}})),h)),{}),E=Object.assign({},w,k.baseSanitizeConfig);if(f.tagName.toLowerCase()==="table"){const h=V(f.outerHTML,E);f=c.make("div",void 0,{innerHTML:h}).firstChild}else f.innerHTML=V(f.innerHTML,E);const C=this.composePasteEvent("tag",{data:f});return{content:f,isBlock:v,tool:k.name,event:C}})).filter((h=>{const g=c.isEmpty(h.content),f=c.isSingleTag(h.content);return!g||f}))
/**
   * Split plain text by new line symbols and return it as array of Block data
   *
   * @param {string} plain - string to process
   * @returns {PasteData[]}
   */}processPlain(h){const{defaultBlock:g}=this.config;if(!h)return[];const f=g;return h.split(/\r?\n/).filter((h=>h.trim())).map((h=>{const g=c.make("div");g.textContent=h;const k=this.composePasteEvent("tag",{data:g});return{content:g,tool:f,isBlock:!1,event:k}}))}
/**
   * Process paste of single Block tool content
   *
   * @param {PasteData} dataToInsert - data of Block to insert
   */async processSingleBlock(h){const{Caret:g,BlockManager:f}=this.Editor,{currentBlock:k}=f;k&&h.tool===k.name&&c.containsOnlyInlineElements(h.content.innerHTML)?g.insertContentAtCaretPosition(h.content.innerHTML):this.insertBlock(h,(k==null?void 0:k.tool.isDefault)&&k.isEmpty)}
/**
   * Process paste to single Block:
   * 1. Find patterns` matches
   * 2. Insert new block if it is not the same type as current one
   * 3. Just insert text if there is no substitutions
   *
   * @param {PasteData} dataToInsert - data of Block to insert
   */async processInlinePaste(h){const{BlockManager:g,Caret:f}=this.Editor,{content:k}=h;if(g.currentBlock&&g.currentBlock.tool.isDefault&&k.textContent.length<lo.PATTERN_PROCESSING_MAX_LENGTH){const h=await this.processPattern(k.textContent);if(h){const k=g.currentBlock&&g.currentBlock.tool.isDefault&&g.currentBlock.isEmpty,v=g.paste(h.tool,h.event,k);f.setToBlock(v,f.positions.END);return}}if(g.currentBlock&&g.currentBlock.currentInput){const h=g.currentBlock.tool.baseSanitizeConfig;document.execCommand("insertHTML",!1,V(k.innerHTML,h))}else this.insertBlock(h)}
/**
   * Get patterns` matches
   *
   * @param {string} text - text to process
   * @returns {Promise<{event: PasteEvent, tool: string}>}
   */async processPattern(h){const g=this.toolsPatterns.find((g=>{const f=g.pattern.exec(h);return!!f&&h===f.shift()}));return g?{event:this.composePasteEvent("pattern",{key:g.key,data:h}),tool:g.tool.name}:void 0}
/**
   * Insert pasted Block content to Editor
   *
   * @param {PasteData} data - data to insert
   * @param {boolean} canReplaceCurrentBlock - if true and is current Block is empty, will replace current Block
   * @returns {void}
   */insertBlock(h,g=!1){const{BlockManager:f,Caret:k}=this.Editor,{currentBlock:v}=f;let x;g&&v&&v.isEmpty?(x=f.paste(h.tool,h.event,!0),k.setToBlock(x,k.positions.END)):(x=f.paste(h.tool,h.event),k.setToBlock(x,k.positions.END)
/**
   * Insert data passed as application/x-editor-js JSON
   *
   * @param {Array} blocks — Blocks' data to insert
   * @returns {void}
   */)}insertEditorJSData(h){const{BlockManager:g,Caret:f,Tools:k}=this.Editor;bt(h,(h=>k.blockTools.get(h).sanitizeConfig)).forEach((({tool:h,data:k},v)=>{let x=!1;v===0&&(x=g.currentBlock&&g.currentBlock.tool.isDefault&&g.currentBlock.isEmpty);const w=g.insert({tool:h,data:k,replace:x});f.setToBlock(w,f.positions.END)}))}
/**
   * Fetch nodes from Element node
   *
   * @param {Node} node - current node
   * @param {Node[]} nodes - processed nodes
   * @param {Node} destNode - destination node
   */processElementNode(h,g,f){const k=Object.keys(this.toolsTags),v=h,{tool:x}=this.toolsTags[v.tagName]||{},w=this.tagsByTool[x==null?void 0:x.name]||[],E=k.includes(v.tagName),C=c.blockElements.includes(v.tagName.toLowerCase()),T=Array.from(v.children).some((({tagName:h})=>k.includes(h)&&!w.includes(h))),B=Array.from(v.children).some((({tagName:h})=>c.blockElements.includes(h.toLowerCase())));return C||E||T?E&&!T||C&&!B&&!T?[...g,f,v]:void 0:(f.appendChild(v),[...g,f])}
/**
   * Recursively divide HTML string to two types of nodes:
   * 1. Block element
   * 2. Document Fragments contained text and markup tags like a, b, i etc.
   *
   * @param {Node} wrapper - wrapper of paster HTML content
   * @returns {Node[]}
   */getNodes(h){const g=Array.from(h.childNodes);let f;const o=(h,g)=>{if(c.isEmpty(g)&&!c.isSingleTag(g))return h;const k=h[h.length-1];let v=new DocumentFragment;switch(k&&c.isFragment(k)&&(v=h.pop()),g.nodeType){case Node.ELEMENT_NODE:if(f=this.processElementNode(g,h,v),f)return f;break;case Node.TEXT_NODE:return v.appendChild(g),[...h,v];default:return[...h,v]}return[...h,...Array.from(g.childNodes).reduce(o,[])]};return g.reduce(o,[])}
/**
   * Compose paste event with passed type and detail
   *
   * @param {string} type - event type
   * @param {PasteEventDetail} detail - event detail
   */composePasteEvent(h,g){return new CustomEvent(h,{detail:g})}};let co=lo;co.PATTERN_PROCESSING_MAX_LENGTH=450;class ai extends y{constructor(){super(...arguments),this.toolsDontSupportReadOnly=[],this.readOnlyEnabled=!1}get isEnabled(){return this.readOnlyEnabled}async prepare(){const{Tools:h}=this.Editor,{blockTools:g}=h,f=[];Array.from(g.entries()).forEach((([h,g])=>{g.isReadOnlySupported||f.push(h)})),this.toolsDontSupportReadOnly=f,this.config.readOnly&&f.length>0&&this.throwCriticalError(),this.toggle(this.config.readOnly)
/**
   * Set read-only mode or toggle current state
   * Call all Modules `toggleReadOnly` method and re-render Editor
   *
   * @param {boolean} state - (optional) read-only state or toggle
   */}async toggle(h=!this.readOnlyEnabled){h&&this.toolsDontSupportReadOnly.length>0&&this.throwCriticalError();const g=this.readOnlyEnabled;this.readOnlyEnabled=h;for(const g in this.Editor)this.Editor[g].toggleReadOnly&&this.Editor[g].toggleReadOnly(h);if(g===h)return this.readOnlyEnabled;const f=await this.Editor.Saver.save();return await this.Editor.BlockManager.clear(),await this.Editor.Renderer.render(f.blocks),this.readOnlyEnabled}throwCriticalError(){throw new ut(`To enable read-only mode all connected tools should support it. Tools ${this.toolsDontSupportReadOnly.join(", ")} don't support read-only mode.`)}}class fe extends y{constructor(){super(...arguments),this.isRectSelectionActivated=!1,this.SCROLL_SPEED=3,this.HEIGHT_OF_SCROLL_ZONE=40,this.BOTTOM_SCROLL_ZONE=1,this.TOP_SCROLL_ZONE=2,this.MAIN_MOUSE_BUTTON=0,this.mousedown=!1,this.isScrolling=!1,this.inScrollZone=null,this.startX=0,this.startY=0,this.mouseX=0,this.mouseY=0,this.stackOfSelected=[],this.listenerIds=[]
/**
   * CSS classes for the Block
   *
   * @returns {{wrapper: string, content: string}}
   */}static get CSS(){return{overlay:"codex-editor-overlay",overlayContainer:"codex-editor-overlay__container",rect:"codex-editor-overlay__rectangle",topScrollZone:"codex-editor-overlay__scroll-zone--top",bottomScrollZone:"codex-editor-overlay__scroll-zone--bottom"}}prepare(){this.enableModuleBindings()}
/**
   * Init rect params
   *
   * @param {number} pageX - X coord of mouse
   * @param {number} pageY - Y coord of mouse
   */startSelection(h,g){const f=document.elementFromPoint(h-window.pageXOffset,g-window.pageYOffset);f.closest(`.${this.Editor.Toolbar.CSS.toolbar}`)||(this.Editor.BlockSelection.allBlocksSelected=!1,this.clearSelection(),this.stackOfSelected=[]);const k=[`.${R.CSS.content}`,`.${this.Editor.Toolbar.CSS.toolbar}`,`.${this.Editor.InlineToolbar.CSS.inlineToolbar}`],v=f.closest("."+this.Editor.UI.CSS.editorWrapper),x=k.some((h=>!!f.closest(h)));!v||x||(this.mousedown=!0,this.startX=h,this.startY=g)}endSelection(){this.mousedown=!1,this.startX=0,this.startY=0,this.overlayRectangle.style.display="none"}isRectActivated(){return this.isRectSelectionActivated}clearSelection(){this.isRectSelectionActivated=!1}enableModuleBindings(){const{container:h}=this.genHTML();this.listeners.on(h,"mousedown",(h=>{this.processMouseDown(h)}),!1),this.listeners.on(document.body,"mousemove",Ie((h=>{this.processMouseMove(h)}),10),{passive:!0}),this.listeners.on(document.body,"mouseleave",(()=>{this.processMouseLeave()})),this.listeners.on(window,"scroll",Ie((h=>{this.processScroll(h)}),10),{passive:!0}),this.listeners.on(document.body,"mouseup",(()=>{this.processMouseUp()}),!1)
/**
   * Handle mouse down events
   *
   * @param {MouseEvent} mouseEvent - mouse event payload
   */}processMouseDown(h){h.button===this.MAIN_MOUSE_BUTTON&&(h.target.closest(c.allInputsSelector)!==null||this.startSelection(h.pageX,h.pageY))}
/**
   * Handle mouse move events
   *
   * @param {MouseEvent} mouseEvent - mouse event payload
   */processMouseMove(h){this.changingRectangle(h),this.scrollByZones(h.clientY)}processMouseLeave(){this.clearSelection(),this.endSelection()
/**
   * @param {MouseEvent} mouseEvent - mouse event payload
   */}processScroll(h){this.changingRectangle(h)}processMouseUp(){this.clearSelection(),this.endSelection()
/**
   * Scroll If mouse in scroll zone
   *
   * @param {number} clientY - Y coord of mouse
   */}scrollByZones(h){this.inScrollZone=null,h<=this.HEIGHT_OF_SCROLL_ZONE&&(this.inScrollZone=this.TOP_SCROLL_ZONE),document.documentElement.clientHeight-h<=this.HEIGHT_OF_SCROLL_ZONE&&(this.inScrollZone=this.BOTTOM_SCROLL_ZONE),this.inScrollZone?this.isScrolling||(this.scrollVertical(this.inScrollZone===this.TOP_SCROLL_ZONE?-this.SCROLL_SPEED:this.SCROLL_SPEED),this.isScrolling=!0
/**
   * Generates required HTML elements
   *
   * @returns {Object<string, Element>}
   */):this.isScrolling=!1}genHTML(){const{UI:h}=this.Editor,g=h.nodes.holder.querySelector("."+h.CSS.editorWrapper),f=c.make("div",fe.CSS.overlay,{}),k=c.make("div",fe.CSS.overlayContainer,{}),v=c.make("div",fe.CSS.rect,{});return k.appendChild(v),f.appendChild(k),g.appendChild(f),this.overlayRectangle=v,{container:g,overlay:f}
/**
   * Activates scrolling if blockSelection is active and mouse is in scroll zone
   *
   * @param {number} speed - speed of scrolling
   */}scrollVertical(h){if(!(this.inScrollZone&&this.mousedown))return;const g=window.pageYOffset;window.scrollBy(0,h),this.mouseY+=window.pageYOffset-g,setTimeout((()=>{this.scrollVertical(h)}),0)
/**
   * Handles the change in the rectangle and its effect
   *
   * @param {MouseEvent} event - mouse event
   */}changingRectangle(h){if(!this.mousedown)return;h.pageY!==void 0&&(this.mouseX=h.pageX,this.mouseY=h.pageY);const{rightPos:g,leftPos:f,index:k}=this.genInfoForMouseSelection(),v=this.startX>g&&this.mouseX>g,x=this.startX<f&&this.mouseX<f;this.rectCrossesBlocks=!(v||x),this.isRectSelectionActivated||(this.rectCrossesBlocks=!1,this.isRectSelectionActivated=!0,this.shrinkRectangleToPoint(),this.overlayRectangle.style.display="block"),this.updateRectangleSize(),this.Editor.Toolbar.close(),k!==void 0&&(this.trySelectNextBlock(k),this.inverseSelection(),b.get().removeAllRanges())}shrinkRectangleToPoint(){this.overlayRectangle.style.left=this.startX-window.pageXOffset+"px",this.overlayRectangle.style.top=this.startY-window.pageYOffset+"px",this.overlayRectangle.style.bottom=`calc(100% - ${this.startY-window.pageYOffset}px`,this.overlayRectangle.style.right=`calc(100% - ${this.startX-window.pageXOffset}px`}inverseSelection(){const h=this.Editor.BlockManager.getBlockByIndex(this.stackOfSelected[0]).selected;if(this.rectCrossesBlocks&&!h)for(const h of this.stackOfSelected)this.Editor.BlockSelection.selectBlockByIndex(h);if(!this.rectCrossesBlocks&&h)for(const h of this.stackOfSelected)this.Editor.BlockSelection.unSelectBlockByIndex(h)}updateRectangleSize(){this.mouseY>=this.startY?(this.overlayRectangle.style.top=this.startY-window.pageYOffset+"px",this.overlayRectangle.style.bottom=`calc(100% - ${this.mouseY-window.pageYOffset}px`):(this.overlayRectangle.style.bottom=`calc(100% - ${this.startY-window.pageYOffset}px`,this.overlayRectangle.style.top=this.mouseY-window.pageYOffset+"px"),this.mouseX>=this.startX?(this.overlayRectangle.style.left=this.startX-window.pageXOffset+"px",this.overlayRectangle.style.right=`calc(100% - ${this.mouseX-window.pageXOffset}px`):(this.overlayRectangle.style.right=`calc(100% - ${this.startX-window.pageXOffset}px`,this.overlayRectangle.style.left=this.mouseX-window.pageXOffset+"px"
/**
   * Collects information needed to determine the behavior of the rectangle
   *
   * @returns {object} index - index next Block, leftPos - start of left border of Block, rightPos - right border
   */)}genInfoForMouseSelection(){const h=document.body.offsetWidth/2,g=this.mouseY-window.pageYOffset,f=document.elementFromPoint(h,g),k=this.Editor.BlockManager.getBlockByChildNode(f);let v;k!==void 0&&(v=this.Editor.BlockManager.blocks.findIndex((h=>h.holder===k.holder)));const x=this.Editor.BlockManager.lastBlock.holder.querySelector("."+R.CSS.content),w=Number.parseInt(window.getComputedStyle(x).width,10)/2,E=h-w,C=h+w;return{index:v,leftPos:E,rightPos:C}}
/**
   * Select block with index index
   *
   * @param index - index of block in redactor
   */addBlockInSelection(h){this.rectCrossesBlocks&&this.Editor.BlockSelection.selectBlockByIndex(h),this.stackOfSelected.push(h)
/**
   * Adds a block to the selection and determines which blocks should be selected
   *
   * @param {object} index - index of new block in the reactor
   */}trySelectNextBlock(h){const g=this.stackOfSelected[this.stackOfSelected.length-1]===h,f=this.stackOfSelected.length,k=1,v=-1,x=0;if(g)return;const w=this.stackOfSelected[f-1]-this.stackOfSelected[f-2]>0;let E=x;f>1&&(E=w?k:v);const C=h>this.stackOfSelected[f-1]&&E===k,T=h<this.stackOfSelected[f-1]&&E===v,B=!(C||T||E===x);if(!B&&(h>this.stackOfSelected[f-1]||this.stackOfSelected[f-1]===void 0)){let g=this.stackOfSelected[f-1]+1||h;for(g;g<=h;g++)this.addBlockInSelection(g);return}if(!B&&h<this.stackOfSelected[f-1]){for(let g=this.stackOfSelected[f-1]-1;g>=h;g--)this.addBlockInSelection(g);return}if(!B)return;let I,O=f-1;for(I=h>this.stackOfSelected[f-1]?()=>h>this.stackOfSelected[O]:()=>h<this.stackOfSelected[O];I();)this.rectCrossesBlocks&&this.Editor.BlockSelection.unSelectBlockByIndex(this.stackOfSelected[O]),this.stackOfSelected.pop(),O--}}class li extends y{
/**
   * Renders passed blocks as one batch
   *
   * @param blocksData - blocks to render
   */
async render(h){return new Promise((g=>{const{Tools:f,BlockManager:x}=this.Editor;if(h.length===0)x.insert();else{const g=h.map((({type:h,data:g,tunes:w,id:E})=>{f.available.has(h)===!1&&(v(`Tool «${h}» is not found. Check 'tools' property at the Editor.js config.`,"warn"),g=this.composeStubDataForTool(h,g,E),h=f.stubTool);let C;try{C=x.composeBlock({id:E,tool:h,data:g,tunes:w})}catch(v){k(`Block «${h}» skipped because of plugins error`,"error",{data:g,error:v}),g=this.composeStubDataForTool(h,g,E),h=f.stubTool,C=x.composeBlock({id:E,tool:h,data:g,tunes:w})}return C}));x.insertMany(g)}window.requestIdleCallback((()=>{g()}),{timeout:2e3})}))}
/**
   * Create data for the Stub Tool that will be used instead of unavailable tool
   *
   * @param tool - unavailable tool name to stub
   * @param data - data of unavailable block
   * @param [id] - id of unavailable block
   */composeStubDataForTool(h,g,f){const{Tools:k}=this.Editor;let v=h;if(k.unavailable.has(h)){const g=k.unavailable.get(h).toolbox;g!==void 0&&g[0].title!==void 0&&(v=g[0].title)}return{savedData:{id:f,type:h,data:g},title:v}}}class ci extends y{
/**
   * Composes new chain of Promises to fire them alternatelly
   *
   * @returns {OutputData}
   */
async save(){const{BlockManager:h,Tools:g}=this.Editor,f=h.blocks,k=[];try{f.forEach((h=>{k.push(this.getSavedData(h))}));const h=await Promise.all(k),v=await bt(h,(h=>g.blockTools.get(h).sanitizeConfig));return this.makeOutput(v)}catch(h){v("Saving failed due to the Error %o","error",h)}}
/**
   * Saves and validates
   *
   * @param {Block} block - Editor's Tool
   * @returns {ValidatedData} - Tool's validated data
   */async getSavedData(h){const g=await h.save(),f=g&&await h.validate(g.data);return{...g,isValid:f}}
/**
   * Creates output object with saved data, time and version of editor
   *
   * @param {ValidatedData} allExtractedData - data extracted from Blocks
   * @returns {OutputData}
   */makeOutput(h){const g=[];return h.forEach((({id:h,tool:f,data:v,tunes:x,isValid:w})=>{if(!w){k(`Block «${f}» skipped because saved data is invalid`);return}if(f===this.Editor.Tools.stubTool){g.push(v);return}const E={id:h,type:f,data:v,...!W(x)&&{tunes:x}};g.push(E)})),{time:+new Date,blocks:g,version:"2.29.0"}}}(function(){try{if(typeof document<"u"){var h=document.createElement("style");h.appendChild(document.createTextNode(".ce-paragraph{line-height:1.6em;outline:none}.ce-paragraph[data-placeholder]:empty:before{content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:before{opacity:1}.codex-editor--toolbox-opened .ce-block:first-child .ce-paragraph[data-placeholder]:empty:before,.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:focus:before{opacity:0}.ce-paragraph p:first-of-type{margin-top:0}.ce-paragraph p:last-of-type{margin-bottom:0}")),document.head.appendChild(h)}}catch(h){console.error("vite-plugin-css-injected-by-js",h)}})();const go='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>';
/**
 * Base Paragraph Block for the Editor.js.
 * Represents a regular text block
 *
 * @author CodeX (team@codex.so)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 */class Ke{
/**
   * Default placeholder for Paragraph Tool
   *
   * @returns {string}
   * @class
   */
static get DEFAULT_PLACEHOLDER(){return""}
/**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {object} params - constructor params
   * @param {ParagraphData} params.data - previously saved data
   * @param {ParagraphConfig} params.config - user config for Tool
   * @param {object} params.api - editor.js api
   * @param {boolean} readOnly - read only mode flag
   */constructor({data:h,config:g,api:f,readOnly:k}){this.api=f,this.readOnly=k,this._CSS={block:this.api.styles.block,wrapper:"ce-paragraph"},this.readOnly||(this.onKeyUp=this.onKeyUp.bind(this)),this._placeholder=g.placeholder?g.placeholder:Ke.DEFAULT_PLACEHOLDER,this._data={},this._element=null,this._preserveBlank=g.preserveBlank!==void 0&&g.preserveBlank,this.data=h
/**
   * Check if text content is empty and set empty string to inner html.
   * We need this because some browsers (e.g. Safari) insert <br> into empty contenteditanle elements
   *
   * @param {KeyboardEvent} e - key up event
   */}onKeyUp(h){if(h.code!=="Backspace"&&h.code!=="Delete")return;const{textContent:g}=this._element;g===""&&(this._element.innerHTML="")}
/**
   * Create Tool's view
   *
   * @returns {HTMLElement}
   * @private
   */drawView(){const h=document.createElement("DIV");return h.classList.add(this._CSS.wrapper,this._CSS.block),h.contentEditable=!1,h.dataset.placeholder=this.api.i18n.t(this._placeholder),this._data.text&&(h.innerHTML=this._data.text),this.readOnly||(h.contentEditable=!0,h.addEventListener("keyup",this.onKeyUp)),h
/**
   * Return Tool's view
   *
   * @returns {HTMLDivElement}
   */}render(){return this._element=this.drawView(),this._element
/**
   * Method that specified how to merge two Text blocks.
   * Called by Editor.js by backspace at the beginning of the Block
   *
   * @param {ParagraphData} data
   * @public
   */}merge(h){const g={text:this.data.text+h.text};this.data=g}
/**
   * Validate Paragraph block data:
   * - check for emptiness
   *
   * @param {ParagraphData} savedData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */validate(h){return!(h.text.trim()===""&&!this._preserveBlank)}
/**
   * Extract Tool's data from the view
   *
   * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
   * @returns {ParagraphData} - saved data
   * @public
   */save(h){return{text:h.innerHTML}}
/**
   * On paste callback fired from Editor.
   *
   * @param {PasteEvent} event - event with pasted data
   */onPaste(h){const g={text:h.detail.data.innerHTML};this.data=g}static get conversionConfig(){return{export:"text",import:"text"}}static get sanitize(){return{text:{br:!0}}}
/**
   * Returns true to notify the core that read-only mode is supported
   *
   * @returns {boolean}
   */static get isReadOnlySupported(){return!0}
/**
   * Get current Tools`s data
   *
   * @returns {ParagraphData} Current data
   * @private
   */get data(){if(this._element!==null){const h=this._element.innerHTML;this._data.text=h}return this._data}
/**
   * Store data in plugin:
   * - at the this._data property
   * - at the HTML
   *
   * @param {ParagraphData} data — data to set
   * @private
   */set data(h){this._data=h||{},this._element!==null&&this.hydrate()}hydrate(){window.requestAnimationFrame((()=>{this._element.innerHTML=this._data.text||""}))}
/**
   * Used by Editor paste handling API.
   * Provides configuration to handle P tags.
   *
   * @returns {{tags: string[]}}
   */static get pasteConfig(){return{tags:["P"]}}
/**
   * Icon and title for displaying at the Toolbox
   *
   * @returns {{icon: string, title: string}}
   */static get toolbox(){return{icon:go,title:"Text"}}}class Xe{constructor(){this.commandName="bold",this.CSS={button:"ce-inline-tool",buttonActive:"ce-inline-tool--active",buttonModifier:"ce-inline-tool--bold"},this.nodes={button:void 0}
/**
   * Sanitizer Rule
   * Leave <b> tags
   *
   * @returns {object}
   */}static get sanitize(){return{b:{}}}render(){return this.nodes.button=document.createElement("button"),this.nodes.button.type="button",this.nodes.button.classList.add(this.CSS.button,this.CSS.buttonModifier),this.nodes.button.innerHTML=be,this.nodes.button}surround(){document.execCommand(this.commandName)}
/**
   * Check selection and set activated state to button if there are <b> tag
   *
   * @returns {boolean}
   */checkState(){const h=document.queryCommandState(this.commandName);return this.nodes.button.classList.toggle(this.CSS.buttonActive,h),h
/**
   * Set a shortcut
   *
   * @returns {boolean}
   */}get shortcut(){return"CMD+B"}}Xe.isInline=!0;Xe.title="Bold";class Ve{constructor(){this.commandName="italic",this.CSS={button:"ce-inline-tool",buttonActive:"ce-inline-tool--active",buttonModifier:"ce-inline-tool--italic"},this.nodes={button:null}
/**
   * Sanitizer Rule
   * Leave <i> tags
   *
   * @returns {object}
   */}static get sanitize(){return{i:{}}}render(){return this.nodes.button=document.createElement("button"),this.nodes.button.type="button",this.nodes.button.classList.add(this.CSS.button,this.CSS.buttonModifier),this.nodes.button.innerHTML=_e,this.nodes.button}surround(){document.execCommand(this.commandName)}checkState(){const h=document.queryCommandState(this.commandName);return this.nodes.button.classList.toggle(this.CSS.buttonActive,h),h}get shortcut(){return"CMD+I"}}Ve.isInline=!0;Ve.title="Italic";class qe{
/**
   * @param api - Editor.js API
   */
constructor({api:h}){this.commandLink="createLink",this.commandUnlink="unlink",this.ENTER_KEY=13,this.CSS={button:"ce-inline-tool",buttonActive:"ce-inline-tool--active",buttonModifier:"ce-inline-tool--link",buttonUnlink:"ce-inline-tool--unlink",input:"ce-inline-tool-input",inputShowed:"ce-inline-tool-input--showed"},this.nodes={button:null,input:null},this.inputOpened=!1,this.toolbar=h.toolbar,this.inlineToolbar=h.inlineToolbar,this.notifier=h.notifier,this.i18n=h.i18n,this.selection=new b
/**
   * Sanitizer Rule
   * Leave <a> tags
   *
   * @returns {object}
   */}static get sanitize(){return{a:{href:!0,target:"_blank",rel:"nofollow"}}}render(){return this.nodes.button=document.createElement("button"),this.nodes.button.type="button",this.nodes.button.classList.add(this.CSS.button,this.CSS.buttonModifier),this.nodes.button.innerHTML=Ae,this.nodes.button}renderActions(){return this.nodes.input=document.createElement("input"),this.nodes.input.placeholder=this.i18n.t("Add a link"),this.nodes.input.classList.add(this.CSS.input),this.nodes.input.addEventListener("keydown",(h=>{h.keyCode===this.ENTER_KEY&&this.enterPressed(h)})),this.nodes.input
/**
   * Handle clicks on the Inline Toolbar icon
   *
   * @param {Range} range - range to wrap with link
   */}surround(h){if(h){this.inputOpened?(this.selection.restore(),this.selection.removeFakeBackground()):(this.selection.setFakeBackground(),this.selection.save());const h=this.selection.findParentTag("A");if(h){this.selection.expandToTag(h),this.unlink(),this.closeActions(),this.checkState(),this.toolbar.close();return}}this.toggleActions()}checkState(){const h=this.selection.findParentTag("A");if(h){this.nodes.button.innerHTML=je,this.nodes.button.classList.add(this.CSS.buttonUnlink),this.nodes.button.classList.add(this.CSS.buttonActive),this.openActions();const g=h.getAttribute("href");this.nodes.input.value=g!=="null"?g:"",this.selection.save()}else this.nodes.button.innerHTML=Ae,this.nodes.button.classList.remove(this.CSS.buttonUnlink),this.nodes.button.classList.remove(this.CSS.buttonActive);return!!h}clear(){this.closeActions()}get shortcut(){return"CMD+K"}toggleActions(){this.inputOpened?this.closeActions(!1):this.openActions(!0)}
/**
   * @param {boolean} needFocus - on link creation we need to focus input. On editing - nope.
   */openActions(h=!1){this.nodes.input.classList.add(this.CSS.inputShowed),h&&this.nodes.input.focus(),this.inputOpened=!0
/**
   * Close input
   *
   * @param {boolean} clearSavedSelection — we don't need to clear saved selection
   *                                        on toggle-clicks on the icon of opened Toolbar
   */}closeActions(h=!0){if(this.selection.isFakeBackgroundEnabled){const h=new b;h.save(),this.selection.restore(),this.selection.removeFakeBackground(),h.restore()}this.nodes.input.classList.remove(this.CSS.inputShowed),this.nodes.input.value="",h&&this.selection.clearSaved(),this.inputOpened=!1
/**
   * Enter pressed on input
   *
   * @param {KeyboardEvent} event - enter keydown event
   */}enterPressed(h){let g=this.nodes.input.value||"";g.trim()?this.validateURL(g)?(g=this.prepareLink(g),this.selection.restore(),this.selection.removeFakeBackground(),this.insertLink(g),h.preventDefault(),h.stopPropagation(),h.stopImmediatePropagation(),this.selection.collapseToEnd(),this.inlineToolbar.close()
/**
   * Detects if passed string is URL
   *
   * @param {string} str - string to validate
   * @returns {boolean}
   */):(this.notifier.show({message:"Pasted link is not valid.",style:"error"}),k("Incorrect Link pasted","warn",g)):(this.selection.restore(),this.unlink(),h.preventDefault(),this.closeActions())}validateURL(h){return!/\s/.test(h)}
/**
   * Process link before injection
   * - sanitize
   * - add protocol for links like 'google.com'
   *
   * @param {string} link - raw user input
   */prepareLink(h){return h=h.trim(),h=this.addProtocol(h),h
/**
   * Add 'http' protocol to the links like 'vc.ru', 'google.com'
   *
   * @param {string} link - string to process
   */}addProtocol(h){if(/^(\w+):(\/\/)?/.test(h))return h;const g=/^\/[^/\s]/.test(h),f=h.substring(0,1)==="#",k=/^\/\/[^/\s]/.test(h);return!g&&!f&&!k&&(h="http://"+h),h
/**
   * Inserts <a> tag with "href"
   *
   * @param {string} link - "href" value
   */}insertLink(h){const g=this.selection.findParentTag("A");g&&this.selection.expandToTag(g),document.execCommand(this.commandLink,!1,h)}unlink(){document.execCommand(this.commandUnlink)}}qe.isInline=!0;qe.title="Link";class St{
/**
   * @param options - constructor options
   * @param options.data - stub tool data
   * @param options.api - Editor.js API
   */
constructor({data:h,api:g}){this.CSS={wrapper:"ce-stub",info:"ce-stub__info",title:"ce-stub__title",subtitle:"ce-stub__subtitle"},this.api=g,this.title=h.title||this.api.i18n.t("Error"),this.subtitle=this.api.i18n.t("The block can not be displayed correctly."),this.savedData=h.savedData,this.wrapper=this.make()
/**
   * Returns stub holder
   *
   * @returns {HTMLElement}
   */}render(){return this.wrapper}
/**
   * Return original Tool data
   *
   * @returns {BlockToolData}
   */save(){return this.savedData}
/**
   * Create Tool html markup
   *
   * @returns {HTMLElement}
   */make(){const h=c.make("div",this.CSS.wrapper),g=$e,f=c.make("div",this.CSS.info),k=c.make("div",this.CSS.title,{textContent:this.title}),v=c.make("div",this.CSS.subtitle,{textContent:this.subtitle});return h.innerHTML=g,f.appendChild(k),f.appendChild(v),h.appendChild(f),h}}St.isReadOnlySupported=!0;class hi extends Ye{constructor(){super(...arguments),this.type=Tt.Inline}get title(){return this.constructable[Rt.Title]}create(){return new this.constructable({api:this.api.getMethodsForTool(this),config:this.settings})}}class ui extends Ye{constructor(){super(...arguments),this.type=Tt.Tune
/**
   * Constructs new BlockTune instance from constructable
   *
   * @param data - Tune data
   * @param block - Block API object
   */}create(h,g){return new this.constructable({api:this.api.getMethodsForTool(this),config:this.settings,block:g,data:h})}}class P extends Map{get blockTools(){const h=Array.from(this.entries()).filter((([,h])=>h.isBlock()));return new P(h)}get inlineTools(){const h=Array.from(this.entries()).filter((([,h])=>h.isInline()));return new P(h)}get blockTunes(){const h=Array.from(this.entries()).filter((([,h])=>h.isTune()));return new P(h)}get internalTools(){const h=Array.from(this.entries()).filter((([,h])=>h.isInternal));return new P(h)}get externalTools(){const h=Array.from(this.entries()).filter((([,h])=>!h.isInternal));return new P(h)}}var fo=Object.defineProperty,Co=Object.getOwnPropertyDescriptor,It=(h,g,f,k)=>{for(var v,x=k>1?void 0:k?Co(g,f):g,w=h.length-1;w>=0;w--)(v=h[w])&&(x=(k?v(g,f,x):v(x))||x);return k&&x&&fo(g,f,x),x};class Ze extends Ye{constructor(){super(...arguments),this.type=Tt.Block,this.inlineTools=new P,this.tunes=new P
/**
   * Creates new Tool instance
   *
   * @param data - Tool data
   * @param block - BlockAPI for current Block
   * @param readOnly - True if Editor is in read-only mode
   */}create(h,g,f){return new this.constructable({data:h,block:g,readOnly:f,api:this.api.getMethodsForTool(this),config:this.settings})}get isReadOnlySupported(){return this.constructable[Nt.IsReadOnlySupported]===!0}get isLineBreaksEnabled(){return this.constructable[Nt.IsEnabledLineBreaks]}get toolbox(){const h=this.constructable[Nt.Toolbox],g=this.config[Bt.Toolbox];if(!W(h)&&g!==!1)return g?Array.isArray(h)?Array.isArray(g)?g.map(((g,f)=>{const k=h[f];return k?{...k,...g}:g})):[g]:Array.isArray(g)?g:[{...h,...g}]:Array.isArray(h)?h:[h]}get conversionConfig(){return this.constructable[Nt.ConversionConfig]}get enabledInlineTools(){return this.config[Bt.EnabledInlineTools]||!1}get enabledBlockTunes(){return this.config[Bt.EnabledBlockTunes]}get pasteConfig(){return this.constructable[Nt.PasteConfig]??{}}get sanitizeConfig(){const h=super.sanitizeConfig,g=this.baseSanitizeConfig;if(W(h))return g;const f={};for(const k in h)if(Object.prototype.hasOwnProperty.call(h,k)){const v=h[k];D(v)?f[k]=Object.assign({},g,v):f[k]=v}return f}get baseSanitizeConfig(){const h={};return Array.from(this.inlineTools.values()).forEach((g=>Object.assign(h,g.sanitizeConfig))),Array.from(this.tunes.values()).forEach((g=>Object.assign(h,g.sanitizeConfig))),h}}It([le],Ze.prototype,"sanitizeConfig",1);It([le],Ze.prototype,"baseSanitizeConfig",1);class gi{
/**
   * @class
   * @param config - tools config
   * @param editorConfig - EditorJS config
   * @param api - EditorJS API module
   */
constructor(h,g,f){this.api=f,this.config=h,this.editorConfig=g
/**
   * Returns Tool object based on it's type
   *
   * @param name - tool name
   */}get(h){const{class:g,isInternal:f=!1,...k}=this.config[h],v=this.getConstructor(g);return new v({name:h,constructable:g,config:k,api:this.api,isDefault:h===this.editorConfig.defaultBlock,defaultPlaceholder:this.editorConfig.placeholder,isInternal:f})}
/**
   * Find appropriate Tool object constructor for Tool constructable
   *
   * @param constructable - Tools constructable
   */getConstructor(h){switch(!0){case h[Rt.IsInline]:return hi;case h[Pt.IsTune]:return ui;default:return Ze}}}class Mt{
/**
   * MoveDownTune constructor
   *
   * @param {API} api — Editor's API
   */
constructor({api:h}){this.CSS={animation:"wobble"},this.api=h}render(){return{icon:ke,title:this.api.i18n.t("Move down"),onActivate:()=>this.handleClick(),name:"move-down"}}handleClick(){const h=this.api.blocks.getCurrentBlockIndex(),g=this.api.blocks.getBlockByIndex(h+1);if(!g)throw new Error("Unable to move Block down since it is already the last");const f=g.holder,k=f.getBoundingClientRect();let v=Math.abs(window.innerHeight-f.offsetHeight);k.top<window.innerHeight&&(v=window.scrollY+f.offsetHeight),window.scrollTo(0,v),this.api.blocks.move(h+1),this.api.toolbar.toggleBlockSettings(!0)}}Mt.isTune=!0;class Lt{
/**
   * DeleteTune constructor
   *
   * @param {API} api - Editor's API
   */
constructor({api:h}){this.api=h}render(){return{icon:Ce,title:this.api.i18n.t("Delete"),name:"delete",confirmation:{title:this.api.i18n.t("Click to delete"),onActivate:()=>this.handleClick()}}}handleClick(){this.api.blocks.delete()}}Lt.isTune=!0;class At{
/**
   * MoveUpTune constructor
   *
   * @param {API} api - Editor's API
   */
constructor({api:h}){this.CSS={animation:"wobble"},this.api=h}render(){return{icon:ve,title:this.api.i18n.t("Move up"),onActivate:()=>this.handleClick(),name:"move-up"}}handleClick(){const h=this.api.blocks.getCurrentBlockIndex(),g=this.api.blocks.getBlockByIndex(h),f=this.api.blocks.getBlockByIndex(h-1);if(h===0||!g||!f)throw new Error("Unable to move Block up since it is already the first");const k=g.holder,v=f.holder,x=k.getBoundingClientRect(),w=v.getBoundingClientRect();let E;E=w.top>0?Math.abs(x.top)-Math.abs(w.top):Math.abs(x.top)+w.height,window.scrollBy(0,-1*E),this.api.blocks.move(h-1),this.api.toolbar.toggleBlockSettings(!0)}}At.isTune=!0;var To=Object.defineProperty,_o=Object.getOwnPropertyDescriptor,ki=(h,g,f,k)=>{for(var v,x=k>1?void 0:k?_o(g,f):g,w=h.length-1;w>=0;w--)(v=h[w])&&(x=(k?v(g,f,x):v(x))||x);return k&&x&&To(g,f,x),x};class _t extends y{constructor(){super(...arguments),this.stubTool="stub",this.toolsAvailable=new P,this.toolsUnavailable=new P}get available(){return this.toolsAvailable}get unavailable(){return this.toolsUnavailable}get inlineTools(){return this.available.inlineTools}get blockTools(){return this.available.blockTools}
/**
   * Return available Block Tunes
   *
   * @returns {object} - object of Inline Tool's classes
   */get blockTunes(){return this.available.blockTunes}get defaultTool(){return this.blockTools.get(this.config.defaultBlock)}get internal(){return this.available.internalTools}
/**
   * Creates instances via passed or default configuration
   *
   * @returns {Promise<void>}
   */async prepare(){if(this.validateTools(),this.config.tools=Me({},this.internalTools,this.config.tools),!Object.prototype.hasOwnProperty.call(this.config,"tools")||Object.keys(this.config.tools).length===0)throw Error("Can't start without tools");const h=this.prepareConfig();this.factory=new gi(h,this.config,this.Editor.API);const g=this.getListOfPrepareFunctions(h);if(g.length===0)return Promise.resolve();await zt(g,(h=>{this.toolPrepareMethodSuccess(h)}),(h=>{this.toolPrepareMethodFallback(h)})),this.prepareBlockTools()}getAllInlineToolsSanitizeConfig(){const h={};return Array.from(this.inlineTools.values()).forEach((g=>{Object.assign(h,g.sanitizeConfig)})),h}destroy(){Object.values(this.available).forEach((async h=>{M(h.reset)&&await h.reset()}))}get internalTools(){return{bold:{class:Xe,isInternal:!0},italic:{class:Ve,isInternal:!0},link:{class:qe,isInternal:!0},paragraph:{class:Ke,inlineToolbar:!0,isInternal:!0},stub:{class:St,isInternal:!0},moveUp:{class:At,isInternal:!0},delete:{class:Lt,isInternal:!0},moveDown:{class:Mt,isInternal:!0}}}
/**
   * Tool prepare method success callback
   *
   * @param {object} data - append tool to available list
   */toolPrepareMethodSuccess(h){const g=this.factory.get(h.toolName);if(g.isInline()){const h=["render","surround","checkState"].filter((h=>!g.create()[h]));if(h.length){k(`Incorrect Inline Tool: ${g.name}. Some of required methods is not implemented %o`,"warn",h),this.toolsUnavailable.set(g.name,g);return}}this.toolsAvailable.set(g.name,g)}
/**
   * Tool prepare method fail callback
   *
   * @param {object} data - append tool to unavailable list
   */toolPrepareMethodFallback(h){this.toolsUnavailable.set(h.toolName,this.factory.get(h.toolName))}
/**
   * Binds prepare function of plugins with user or default config
   *
   * @returns {Array} list of functions that needs to be fired sequentially
   * @param config - tools config
   */getListOfPrepareFunctions(h){const g=[];return Object.entries(h).forEach((([h,f])=>{g.push({function:M(f.class.prepare)?f.class.prepare:()=>{},data:{toolName:h,config:f.config}})})),g}prepareBlockTools(){Array.from(this.blockTools.values()).forEach((h=>{this.assignInlineToolsToBlockTool(h),this.assignBlockTunesToBlockTool(h)}))}
/**
   * Assign enabled Inline Tools for Block Tool
   *
   * @param tool - Block Tool
   */assignInlineToolsToBlockTool(h){if(this.config.inlineToolbar!==!1){if(h.enabledInlineTools===!0){h.inlineTools=new P(Array.isArray(this.config.inlineToolbar)?this.config.inlineToolbar.map((h=>[h,this.inlineTools.get(h)])):Array.from(this.inlineTools.entries()));return}Array.isArray(h.enabledInlineTools)&&(h.inlineTools=new P(h.enabledInlineTools.map((h=>[h,this.inlineTools.get(h)]))))}}
/**
   * Assign enabled Block Tunes for Block Tool
   *
   * @param tool — Block Tool
   */assignBlockTunesToBlockTool(h){if(h.enabledBlockTunes!==!1){if(Array.isArray(h.enabledBlockTunes)){const g=new P(h.enabledBlockTunes.map((h=>[h,this.blockTunes.get(h)])));h.tunes=new P([...g,...this.blockTunes.internalTools]);return}if(Array.isArray(this.config.tunes)){const g=new P(this.config.tunes.map((h=>[h,this.blockTunes.get(h)])));h.tunes=new P([...g,...this.blockTunes.internalTools]);return}h.tunes=this.blockTunes.internalTools}}validateTools(){for(const h in this.config.tools)if(Object.prototype.hasOwnProperty.call(this.config.tools,h)){if(h in this.internalTools)return;const g=this.config.tools[h];if(!M(g)&&!M(g.class))throw Error(`Tool «${h}» must be a constructor function or an object with function in the «class» property`)}}prepareConfig(){const h={};for(const g in this.config.tools)D(this.config.tools[g])?h[g]=this.config.tools[g]:h[g]={class:this.config.tools[g]};return h}}ki([le],_t.prototype,"getAllInlineToolsSanitizeConfig",1);const Oo=':root{--selectionColor: #e1f2ff;--inlineSelectionColor: #d4ecff;--bg-light: #eff2f5;--grayText: #707684;--color-dark: #1D202B;--color-active-icon: #388AE5;--color-gray-border: rgba(201, 201, 204, .48);--content-width: 650px;--narrow-mode-right-padding: 50px;--toolbox-buttons-size: 26px;--toolbox-buttons-size--mobile: 36px;--icon-size: 20px;--icon-size--mobile: 28px;--block-padding-vertical: .4em;--color-line-gray: #EFF0F1 }.codex-editor{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.codex-editor .hide{display:none}.codex-editor__redactor [contenteditable]:empty:after{content:"\\feff"}@media (min-width: 651px){.codex-editor--narrow .codex-editor__redactor{margin-right:50px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .codex-editor__redactor{margin-left:50px;margin-right:0}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__actions{right:-5px}}.codex-editor-copyable{position:absolute;height:1px;width:1px;top:-400%;opacity:.001}.codex-editor-overlay{position:fixed;top:0px;left:0px;right:0px;bottom:0px;z-index:999;pointer-events:none;overflow:hidden}.codex-editor-overlay__container{position:relative;pointer-events:auto;z-index:0}.codex-editor-overlay__rectangle{position:absolute;pointer-events:none;background-color:#2eaadc33;border:1px solid transparent}.codex-editor svg{max-height:100%}.codex-editor path{stroke:currentColor}.codex-editor ::-moz-selection{background-color:#d4ecff}.codex-editor ::selection{background-color:#d4ecff}.codex-editor--toolbox-opened [contentEditable=true][data-placeholder]:focus:before{opacity:0!important}.ce-scroll-locked{overflow:hidden}.ce-scroll-locked--hard{overflow:hidden;top:calc(-1 * var(--window-scroll-offset));position:fixed;width:100%}.ce-toolbar{position:absolute;left:0;right:0;top:0;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity,top;display:none}.ce-toolbar--opened{display:block}.ce-toolbar__content{max-width:650px;margin:0 auto;position:relative}.ce-toolbar__plus{color:#1d202b;cursor:pointer;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-flex-negative:0;flex-shrink:0}@media (max-width: 650px){.ce-toolbar__plus{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__plus:hover{background-color:#eff2f5}}.ce-toolbar__plus--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__plus-shortcut{opacity:.6;word-spacing:-2px;margin-top:5px}@media (max-width: 650px){.ce-toolbar__plus{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;position:static}.ce-toolbar__plus--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__plus--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__actions{position:absolute;right:100%;opacity:0;display:-webkit-box;display:-ms-flexbox;display:flex;padding-right:5px}.ce-toolbar__actions--opened{opacity:1}@media (max-width: 650px){.ce-toolbar__actions{right:auto}}.ce-toolbar__settings-btn{color:#1d202b;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;margin-left:3px;cursor:pointer;user-select:none}@media (max-width: 650px){.ce-toolbar__settings-btn{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__settings-btn:hover{background-color:#eff2f5}}.ce-toolbar__settings-btn--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@media (min-width: 651px){.ce-toolbar__settings-btn{width:24px}}.ce-toolbar__settings-btn--hidden{display:none}@media (max-width: 650px){.ce-toolbar__settings-btn{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;position:static}.ce-toolbar__settings-btn--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__settings-btn--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__plus svg,.ce-toolbar__settings-btn svg{width:24px;height:24px}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__plus{left:5px}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbox .ce-popover{right:0;left:auto;left:initial}}.ce-inline-toolbar{--y-offset: 8px;position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;opacity:0;visibility:hidden;-webkit-transition:opacity .25s ease;transition:opacity .25s ease;will-change:opacity,left,top;top:0;left:0;z-index:3}.ce-inline-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-inline-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-inline-toolbar--showed{opacity:1;visibility:visible}.ce-inline-toolbar [hidden]{display:none!important}.ce-inline-toolbar__toggler-and-button-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;padding:0 6px}.ce-inline-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown{display:-webkit-box;display:-ms-flexbox;display:flex;padding:6px;margin:0 6px 0 -6px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;border-right:1px solid rgba(201,201,204,.48);-webkit-box-sizing:border-box;box-sizing:border-box}@media (hover: hover){.ce-inline-toolbar__dropdown:hover{background:#eff2f5}}.ce-inline-toolbar__dropdown--hidden{display:none}.ce-inline-toolbar__dropdown-content,.ce-inline-toolbar__dropdown-arrow{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown-content svg,.ce-inline-toolbar__dropdown-arrow svg{width:20px;height:20px}.ce-inline-toolbar__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}.ce-inline-tool{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:6px 1px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0;border-radius:0;line-height:normal}.ce-inline-tool svg{width:20px;height:20px}@media (max-width: 650px){.ce-inline-tool svg{width:28px;height:28px}}@media (hover: hover){.ce-inline-tool:hover{background-color:#eff2f5}}.ce-inline-tool--active{color:#388ae5}.ce-inline-tool--focused{background:rgba(34,186,255,.08)!important}.ce-inline-tool--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.ce-inline-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-inline-tool--link .icon--unlink,.ce-inline-tool--unlink .icon--link{display:none}.ce-inline-tool--unlink .icon--unlink{display:inline-block;margin-bottom:-1px}.ce-inline-tool-input{outline:none;border:0;border-radius:0 0 4px 4px;margin:0;font-size:13px;padding:10px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;font-weight:500;border-top:1px solid rgba(201,201,204,.48);-webkit-appearance:none;font-family:inherit}@media (max-width: 650px){.ce-inline-tool-input{font-size:15px;font-weight:500}}.ce-inline-tool-input::-webkit-input-placeholder{color:#707684}.ce-inline-tool-input::-moz-placeholder{color:#707684}.ce-inline-tool-input:-ms-input-placeholder{color:#707684}.ce-inline-tool-input::-ms-input-placeholder{color:#707684}.ce-inline-tool-input::placeholder{color:#707684}.ce-inline-tool-input--showed{display:block}.ce-conversion-toolbar{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;opacity:0;visibility:hidden;will-change:transform,opacity;-webkit-transition:opacity .1s ease,-webkit-transform .1s ease;transition:opacity .1s ease,-webkit-transform .1s ease;transition:transform .1s ease,opacity .1s ease;transition:transform .1s ease,opacity .1s ease,-webkit-transform .1s ease;-webkit-transform:translateY(-8px);transform:translateY(-8px);left:-1px;width:190px;margin-top:5px;-webkit-box-sizing:content-box;box-sizing:content-box}.ce-conversion-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-conversion-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-conversion-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:none;transform:none}.ce-conversion-toolbar [hidden]{display:none!important}.ce-conversion-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-conversion-toolbar__label{color:#707684;font-size:11px;font-weight:500;letter-spacing:.33px;padding:10px 10px 5px;text-transform:uppercase}.ce-conversion-tool{display:-webkit-box;display:-ms-flexbox;display:flex;padding:5px 10px;font-size:14px;line-height:20px;font-weight:500;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-conversion-tool--hidden{display:none}.ce-conversion-tool--focused{background:rgba(34,186,255,.08)!important}.ce-conversion-tool--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.ce-conversion-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-conversion-tool:hover{background:#eff2f5}.ce-conversion-tool__icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:26px;height:26px;-webkit-box-shadow:0 0 0 1px rgba(201,201,204,.48);box-shadow:0 0 0 1px #c9c9cc7a;border-radius:5px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#fff;-webkit-box-sizing:content-box;box-sizing:content-box;-ms-flex-negative:0;flex-shrink:0;margin-right:10px}.ce-conversion-tool__icon svg{width:20px;height:20px}@media (max-width: 650px){.ce-conversion-tool__icon{width:36px;height:36px;border-radius:8px}.ce-conversion-tool__icon svg{width:28px;height:28px}}.ce-conversion-tool--last{margin-right:0!important}.ce-conversion-tool--active{color:#388ae5!important}.ce-conversion-tool--active{-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-conversion-tool__secondary-label{color:#707684;font-size:12px;margin-left:auto;white-space:nowrap;letter-spacing:-.1em;padding-right:5px;margin-bottom:-2px;opacity:.6}@media (max-width: 650px){.ce-conversion-tool__secondary-label{display:none}}.ce-settings__button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:6px 1px;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0;line-height:32px}.ce-settings__button svg{width:20px;height:20px}@media (max-width: 650px){.ce-settings__button svg{width:28px;height:28px}}@media (hover: hover){.ce-settings__button:hover{background-color:#eff2f5}}.ce-settings__button--active{color:#388ae5}.ce-settings__button--focused{background:rgba(34,186,255,.08)!important}.ce-settings__button--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.ce-settings__button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-settings__button:not(:nth-child(3n+3)){margin-right:3px}.ce-settings__button:nth-child(n+4){margin-top:3px}.ce-settings__button--disabled{cursor:not-allowed!important}.ce-settings__button--disabled{opacity:.3}.ce-settings__button--selected{color:#388ae5}@media (min-width: 651px){.codex-editor--narrow .ce-settings .ce-popover{right:0;left:auto;left:initial}}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.ce-block{-webkit-animation:fade-in .3s ease;animation:fade-in .3s ease;-webkit-animation-fill-mode:none;animation-fill-mode:none;-webkit-animation-fill-mode:initial;animation-fill-mode:initial}.ce-block:first-of-type{margin-top:0}.ce-block--selected .ce-block__content{background:#e1f2ff}.ce-block--selected .ce-block__content [contenteditable]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-block--selected .ce-block__content img,.ce-block--selected .ce-block__content .ce-stub{opacity:.55}.ce-block--stretched .ce-block__content{max-width:none}.ce-block__content{position:relative;max-width:650px;margin:0 auto;-webkit-transition:background-color .15s ease;transition:background-color .15s ease}.ce-block--drop-target .ce-block__content:before{content:"";position:absolute;top:100%;left:-20px;margin-top:-1px;height:8px;width:8px;border:solid #388AE5;border-width:1px 1px 0 0;-webkit-transform-origin:right;transform-origin:right;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ce-block--drop-target .ce-block__content:after{content:"";position:absolute;top:100%;height:1px;width:100%;color:#388ae5;background:repeating-linear-gradient(90deg,#388AE5,#388AE5 1px,#fff 1px,#fff 6px)}.ce-block a{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline}.ce-block b{font-weight:700}.ce-block i{font-style:italic}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}.cdx-block{padding:.4em 0}.cdx-block::-webkit-input-placeholder{line-height:normal!important}.cdx-input{border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px #232c480f;border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cdx-input[data-placeholder]:before{position:static!important}.cdx-input[data-placeholder]:before{display:inline-block;width:0;white-space:nowrap;pointer-events:none}.cdx-settings-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:6px 1px;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0;min-width:26px;min-height:26px}.cdx-settings-button svg{width:20px;height:20px}@media (max-width: 650px){.cdx-settings-button svg{width:28px;height:28px}}@media (hover: hover){.cdx-settings-button:hover{background-color:#eff2f5}}.cdx-settings-button--focused{background:rgba(34,186,255,.08)!important}.cdx-settings-button--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.cdx-settings-button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.cdx-settings-button--active{color:#388ae5}.cdx-settings-button svg{width:auto;height:auto}@media (max-width: 650px){.cdx-settings-button{width:36px;height:36px;border-radius:8px}}.cdx-loader{position:relative;border:1px solid rgba(201,201,204,.48)}.cdx-loader:before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;margin:-11px 0 0 -11px;border:2px solid rgba(201,201,204,.48);border-left-color:#388ae5;border-radius:50%;-webkit-animation:cdxRotation 1.2s infinite linear;animation:cdxRotation 1.2s infinite linear}@-webkit-keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.cdx-button{padding:13px;border-radius:3px;border:1px solid rgba(201,201,204,.48);font-size:14.9px;background:#fff;-webkit-box-shadow:0 2px 2px 0 rgba(18,30,57,.04);box-shadow:0 2px 2px #121e390a;color:#707684;text-align:center;cursor:pointer}@media (hover: hover){.cdx-button:hover{background:#FBFCFE;-webkit-box-shadow:0 1px 3px 0 rgba(18,30,57,.08);box-shadow:0 1px 3px #121e3914}}.cdx-button svg{height:20px;margin-right:.2em;margin-top:-2px}.ce-stub{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:12px 18px;margin:10px 0;border-radius:10px;background:#eff2f5;border:1px solid #EFF0F1;color:#707684;font-size:14px}.ce-stub svg{width:20px;height:20px}.ce-stub__info{margin-left:14px}.ce-stub__title{font-weight:500;text-transform:capitalize}.codex-editor.codex-editor--rtl{direction:rtl}.codex-editor.codex-editor--rtl .cdx-list{padding-left:0;padding-right:40px}.codex-editor.codex-editor--rtl .ce-toolbar__plus{right:-26px;left:auto}.codex-editor.codex-editor--rtl .ce-toolbar__actions{right:auto;left:-26px}@media (max-width: 650px){.codex-editor.codex-editor--rtl .ce-toolbar__actions{margin-left:0;margin-right:auto;padding-right:0;padding-left:10px}}.codex-editor.codex-editor--rtl .ce-settings{left:5px;right:auto}.codex-editor.codex-editor--rtl .ce-settings:before{right:auto;left:25px}.codex-editor.codex-editor--rtl .ce-settings__button:not(:nth-child(3n+3)){margin-left:3px;margin-right:0}.codex-editor.codex-editor--rtl .ce-conversion-tool__icon{margin-right:0;margin-left:10px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown{border-right:0px solid transparent;border-left:1px solid rgba(201,201,204,.48);margin:0 -6px 0 6px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:0;margin-right:4px}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__plus{left:0px;right:5px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__actions{left:-5px}}.cdx-search-field{--icon-margin-right: 10px;background:rgba(232,232,235,.49);border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:2px;display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto}.cdx-search-field__icon{width:26px;height:26px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:var(--icon-margin-right)}.cdx-search-field__icon svg{width:20px;height:20px;color:#707684}.cdx-search-field__input{font-size:14px;outline:none;font-weight:500;font-family:inherit;border:0;background:transparent;margin:0;padding:0;line-height:22px;min-width:calc(100% - 26px - var(--icon-margin-right))}.cdx-search-field__input::-webkit-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-moz-placeholder{color:#707684;font-weight:500}.cdx-search-field__input:-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::placeholder{color:#707684;font-weight:500}.ce-popover{--border-radius: 6px;--width: 200px;--max-height: 270px;--padding: 6px;--offset-from-target: 8px;--color-border: #e8e8eb;--color-shadow: rgba(13,20,33,.13);--color-background: white;--color-text-primary: black;--color-text-secondary: #707684;--color-border-icon: rgba(201, 201, 204, .48);--color-border-icon-disabled: #EFF0F1;--color-text-icon-active: #388AE5;--color-background-icon-active: rgba(56, 138, 229, .1);--color-background-item-focus: rgba(34, 186, 255, .08);--color-shadow-item-focus: rgba(7, 161, 227, .08);--color-background-item-hover: #eff2f5;--color-background-item-confirm: #E24A4A;--color-background-item-confirm-hover: #CE4343;min-width:var(--width);width:var(--width);max-height:var(--max-height);border-radius:var(--border-radius);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:0 3px 15px -3px var(--color-shadow);box-shadow:0 3px 15px -3px var(--color-shadow);position:absolute;left:0;top:calc(100% + var(--offset-from-target));background:var(--color-background);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;z-index:4;opacity:0;max-height:0;pointer-events:none;padding:0;border:none}.ce-popover--opened{opacity:1;padding:var(--padding);max-height:var(--max-height);pointer-events:auto;-webkit-animation:panelShowing .1s ease;animation:panelShowing .1s ease;border:1px solid var(--color-border)}@media (max-width: 650px){.ce-popover--opened{-webkit-animation:panelShowingMobile .25s ease;animation:panelShowingMobile .25s ease}}.ce-popover__items{overflow-y:auto;-ms-scroll-chaining:none;overscroll-behavior:contain}@media (max-width: 650px){.ce-popover__overlay{position:fixed;top:0;bottom:0;left:0;right:0;background:#1D202B;z-index:3;opacity:.5;-webkit-transition:opacity .12s ease-in;transition:opacity .12s ease-in;will-change:opacity;visibility:visible}}.ce-popover__overlay--hidden{display:none}.ce-popover--open-top{top:calc(-1 * (var(--offset-from-target) + var(--popover-height)))}@media (max-width: 650px){.ce-popover{--offset: 5px;position:fixed;max-width:none;min-width:calc(100% - var(--offset) * 2);left:var(--offset);right:var(--offset);bottom:calc(var(--offset) + env(safe-area-inset-bottom));top:auto;border-radius:10px}.ce-popover .ce-popover__search{display:none}}.ce-popover__search,.ce-popover__custom-content:not(:empty){margin-bottom:5px}.ce-popover__nothing-found-message{color:#707684;display:none;cursor:default;padding:3px;font-size:14px;line-height:20px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ce-popover__nothing-found-message--displayed{display:block}.ce-popover__custom-content:not(:empty){padding:4px}@media (min-width: 651px){.ce-popover__custom-content:not(:empty){padding:0}}.ce-popover__custom-content--hidden{display:none}.ce-popover-item{--border-radius: 6px;--icon-size: 20px;--icon-size-mobile: 28px;border-radius:var(--border-radius);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:3px;color:var(--color-text-primary);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media (max-width: 650px){.ce-popover-item{padding:4px}}.ce-popover-item:not(:last-of-type){margin-bottom:1px}.ce-popover-item__icon{border-radius:5px;width:26px;height:26px;-webkit-box-shadow:0 0 0 1px var(--color-border-icon);box-shadow:0 0 0 1px var(--color-border-icon);background:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:10px}.ce-popover-item__icon svg{width:20px;height:20px}@media (max-width: 650px){.ce-popover-item__icon{width:36px;height:36px;border-radius:8px}.ce-popover-item__icon svg{width:var(--icon-size-mobile);height:var(--icon-size-mobile)}}.ce-popover-item__title{font-size:14px;line-height:20px;font-weight:500;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}@media (max-width: 650px){.ce-popover-item__title{font-size:16px}}.ce-popover-item__secondary-title{color:var(--color-text-secondary);font-size:12px;margin-left:auto;white-space:nowrap;letter-spacing:-.1em;padding-right:5px;margin-bottom:-2px;opacity:.6}@media (max-width: 650px){.ce-popover-item__secondary-title{display:none}}.ce-popover-item--active{background:var(--color-background-icon-active);color:var(--color-text-icon-active)}.ce-popover-item--active .ce-popover-item__icon{-webkit-box-shadow:none;box-shadow:none}.ce-popover-item--disabled{color:var(--color-text-secondary);cursor:default;pointer-events:none}.ce-popover-item--disabled .ce-popover-item__icon{-webkit-box-shadow:0 0 0 1px var(--color-border-icon-disabled);box-shadow:0 0 0 1px var(--color-border-icon-disabled)}.ce-popover-item--focused:not(.ce-popover-item--no-focus){background:var(--color-background-item-focus)!important}.ce-popover-item--focused:not(.ce-popover-item--no-focus){-webkit-box-shadow:inset 0 0 0px 1px var(--color-shadow-item-focus);box-shadow:inset 0 0 0 1px var(--color-shadow-item-focus)}.ce-popover-item--hidden{display:none}@media (hover: hover){.ce-popover-item:hover{cursor:pointer}.ce-popover-item:hover:not(.ce-popover-item--no-hover){background-color:var(--color-background-item-hover)}.ce-popover-item:hover .ce-popover-item__icon{-webkit-box-shadow:none;box-shadow:none}}.ce-popover-item--confirmation{background:var(--color-background-item-confirm)}.ce-popover-item--confirmation .ce-popover-item__icon{color:var(--color-background-item-confirm)}.ce-popover-item--confirmation .ce-popover-item__title{color:#fff}@media (hover: hover){.ce-popover-item--confirmation:not(.ce-popover-item--no-hover):hover{background:var(--color-background-item-confirm-hover)}}.ce-popover-item--confirmation:not(.ce-popover-item--no-focus).ce-popover-item--focused{background:var(--color-background-item-confirm-hover)!important}.ce-popover-item--confirmation .ce-popover-item__icon,.ce-popover-item--active .ce-popover-item__icon,.ce-popover-item--focused .ce-popover-item__icon{-webkit-box-shadow:none;box-shadow:none}@-webkit-keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.wobble{-webkit-animation-name:wobble;animation-name:wobble;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}\n';class xi extends y{constructor(){super(...arguments),this.isMobile=!1,this.contentRectCache=void 0,this.resizeDebouncer=et((()=>{this.windowResize()}),200)
/**
   * Editor.js UI CSS class names
   *
   * @returns {{editorWrapper: string, editorZone: string}}
   */}get CSS(){return{editorWrapper:"codex-editor",editorWrapperNarrow:"codex-editor--narrow",editorZone:"codex-editor__redactor",editorZoneHidden:"codex-editor__redactor--hidden",editorEmpty:"codex-editor--empty",editorRtlFix:"codex-editor--rtl"}}
/**
   * Return Width of center column of Editor
   *
   * @returns {DOMRect}
   */get contentRect(){if(this.contentRectCache)return this.contentRectCache;const h=this.nodes.wrapper.querySelector(`.${R.CSS.content}`);return h?(this.contentRectCache=h.getBoundingClientRect(),this.contentRectCache):{width:650,left:0,right:0}}async prepare(){this.checkIsMobile(),this.make(),this.loadStyles()
/**
   * Toggle read-only state
   *
   * If readOnly is true:
   *  - removes all listeners from main UI module elements
   *
   * if readOnly is false:
   *  - enables all listeners to UI module elements
   *
   * @param {boolean} readOnlyEnabled - "read only" state
   */}toggleReadOnly(h){h?this.disableModuleBindings():window.requestIdleCallback((()=>{this.enableModuleBindings()}),{timeout:2e3})}checkEmptiness(){const{BlockManager:h}=this.Editor;this.nodes.wrapper.classList.toggle(this.CSS.editorEmpty,h.isEditorEmpty)}
/**
   * Check if one of Toolbar is opened
   * Used to prevent global keydowns (for example, Enter) conflicts with Enter-on-toolbar
   *
   * @returns {boolean}
   */get someToolbarOpened(){const{Toolbar:h,BlockSettings:g,InlineToolbar:f,ConversionToolbar:k}=this.Editor;return g.opened||f.opened||k.opened||h.toolbox.opened}get someFlipperButtonFocused(){return!!this.Editor.Toolbar.toolbox.hasFocus()||Object.entries(this.Editor).filter((([h,g])=>g.flipper instanceof q)).some((([h,g])=>g.flipper.hasFocus()))}destroy(){this.nodes.holder.innerHTML=""}closeAllToolbars(){const{Toolbar:h,BlockSettings:g,InlineToolbar:f,ConversionToolbar:k}=this.Editor;g.close(),f.close(),k.close(),h.toolbox.close()}checkIsMobile(){this.isMobile=window.innerWidth<x}make(){this.nodes.holder=c.getHolder(this.config.holder),this.nodes.wrapper=c.make("div",[this.CSS.editorWrapper,...this.isRtl?[this.CSS.editorRtlFix]:[]]),this.nodes.redactor=c.make("div",this.CSS.editorZone),this.nodes.holder.offsetWidth<this.contentRect.width&&this.nodes.wrapper.classList.add(this.CSS.editorWrapperNarrow),this.nodes.redactor.style.paddingBottom=this.config.minHeight+"px",this.nodes.wrapper.appendChild(this.nodes.redactor),this.nodes.holder.appendChild(this.nodes.wrapper)}loadStyles(){const h="editor-js-styles";if(c.get(h))return;const g=c.make("style",null,{id:h,textContent:Oo.toString()});this.config.style&&!W(this.config.style)&&this.config.style.nonce&&g.setAttribute("nonce",this.config.style.nonce),c.prepend(document.head,g)}enableModuleBindings(){this.readOnlyMutableListeners.on(this.nodes.redactor,"click",(h=>{this.redactorClicked(h)}),!1),this.readOnlyMutableListeners.on(this.nodes.redactor,"mousedown",(h=>{this.documentTouched(h)}),{capture:!0,passive:!0}),this.readOnlyMutableListeners.on(this.nodes.redactor,"touchstart",(h=>{this.documentTouched(h)}),{capture:!0,passive:!0}),this.readOnlyMutableListeners.on(document,"keydown",(h=>{this.documentKeydown(h)}),!0),this.readOnlyMutableListeners.on(document,"mousedown",(h=>{this.documentClicked(h)}),!0);const h=et((()=>{this.selectionChanged()}),180);this.readOnlyMutableListeners.on(document,"selectionchange",h,!0),this.readOnlyMutableListeners.on(window,"resize",(()=>{this.resizeDebouncer()}),{passive:!0}),this.watchBlockHoveredEvents()}watchBlockHoveredEvents(){let h;this.readOnlyMutableListeners.on(this.nodes.redactor,"mousemove",Ie((g=>{const f=g.target.closest(".ce-block");this.Editor.BlockSelection.anyBlockSelected||f&&h!==f&&(h=f,this.eventsDispatcher.emit(Ct,{block:this.Editor.BlockManager.getBlockByChildNode(f)}))}),20),{passive:!0})}disableModuleBindings(){this.readOnlyMutableListeners.clearAll()}windowResize(){this.contentRectCache=null,this.checkIsMobile()
/**
   * All keydowns on document
   *
   * @param {KeyboardEvent} event - keyboard event
   */}documentKeydown(h){switch(h.keyCode){case g.ENTER:this.enterPressed(h);break;case g.BACKSPACE:case g.DELETE:this.backspacePressed(h);break;case g.ESC:this.escapePressed(h);break;default:this.defaultBehaviour(h);break}}
/**
   * Ignore all other document's keydown events
   *
   * @param {KeyboardEvent} event - keyboard event
   */defaultBehaviour(h){const{currentBlock:g}=this.Editor.BlockManager,f=h.target.closest(`.${this.CSS.editorWrapper}`),k=h.altKey||h.ctrlKey||h.metaKey||h.shiftKey;g===void 0||f!==null?f||g&&k||(this.Editor.BlockManager.dropPointer(),this.Editor.Toolbar.close()
/**
   * @param {KeyboardEvent} event - keyboard event
   */):this.Editor.BlockEvents.keydown(h)}backspacePressed(h){const{BlockManager:g,BlockSelection:f,Caret:k}=this.Editor;if(f.anyBlockSelected&&!b.isSelectionExists){const v=g.removeSelectedBlocks(),x=g.insertDefaultBlockAtIndex(v,!0);k.setToBlock(x,k.positions.START),f.clearSelection(h),h.preventDefault(),h.stopPropagation(),h.stopImmediatePropagation()}}
/**
   * Escape pressed
   * If some of Toolbar components are opened, then close it otherwise close Toolbar
   *
   * @param {Event} event - escape keydown event
   */escapePressed(h){this.Editor.BlockSelection.clearSelection(h),this.Editor.Toolbar.toolbox.opened?(this.Editor.Toolbar.toolbox.close(),this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock,this.Editor.Caret.positions.END)):this.Editor.BlockSettings.opened?this.Editor.BlockSettings.close():this.Editor.ConversionToolbar.opened?this.Editor.ConversionToolbar.close():this.Editor.InlineToolbar.opened?this.Editor.InlineToolbar.close():this.Editor.Toolbar.close()
/**
   * Enter pressed on document
   *
   * @param {KeyboardEvent} event - keyboard event
   */}enterPressed(h){const{BlockManager:g,BlockSelection:f}=this.Editor,k=g.currentBlockIndex>=0;if(!f.anyBlockSelected||b.isSelectionExists){if(!this.someToolbarOpened&&k&&h.target.tagName==="BODY"){const h=this.Editor.BlockManager.insert();this.Editor.Caret.setToBlock(h),this.Editor.Toolbar.moveAndOpen(h)}this.Editor.BlockSelection.clearSelection(h)}else f.clearSelection(h),h.preventDefault(),h.stopImmediatePropagation(),h.stopPropagation()}
/**
   * All clicks on document
   *
   * @param {MouseEvent} event - Click event
   */documentClicked(h){var g,f;if(!h.isTrusted)return;const k=h.target;this.nodes.holder.contains(k)||b.isAtEditor||(this.Editor.BlockManager.dropPointer(),this.Editor.Toolbar.close());const v=(g=this.Editor.BlockSettings.nodes.wrapper)==null?void 0:g.contains(k),x=(f=this.Editor.Toolbar.nodes.settingsToggler)==null?void 0:f.contains(k),w=v||x;if(this.Editor.BlockSettings.opened&&!w){this.Editor.BlockSettings.close();const h=this.Editor.BlockManager.getBlockByChildNode(k);this.Editor.Toolbar.moveAndOpen(h)}this.Editor.BlockSelection.clearSelection(h)}
/**
   * First touch on editor
   * Fired before click
   *
   * Used to change current block — we need to do it before 'selectionChange' event.
   * Also:
   * - Move and show the Toolbar
   * - Set a Caret
   *
   * @param {MouseEvent | TouchEvent} event - touch or mouse event
   */documentTouched(h){let g=h.target;if(g===this.nodes.redactor){const f=h instanceof MouseEvent?h.clientX:h.touches[0].clientX,k=h instanceof MouseEvent?h.clientY:h.touches[0].clientY;g=document.elementFromPoint(f,k)}try{this.Editor.BlockManager.setCurrentBlockByChildNode(g)}catch{this.Editor.RectangleSelection.isRectActivated()||this.Editor.Caret.setToTheLastBlock()}this.Editor.Toolbar.moveAndOpen()}
/**
   * All clicks on the redactor zone
   *
   * @param {MouseEvent} event - click event
   * @description
   * - By clicks on the Editor's bottom zone:
   *      - if last Block is empty, set a Caret to this
   *      - otherwise, add a new empty Block and set a Caret to that
   */redactorClicked(h){if(!b.isCollapsed)return;const g=h.target,f=h.metaKey||h.ctrlKey;if(c.isAnchor(g)&&f){h.stopImmediatePropagation(),h.stopPropagation();const f=g.getAttribute("href"),k=Wt(f);Kt(k)}else this.processBottomZoneClick(h)}
/**
   * Check if user clicks on the Editor's bottom zone:
   *  - set caret to the last block
   *  - or add new empty block
   *
   * @param event - click event
   */processBottomZoneClick(h){const g=this.Editor.BlockManager.getBlockByIndex(-1),f=c.offset(g.holder).bottom,k=h.pageY,{BlockSelection:v}=this.Editor;if(h.target instanceof Element&&h.target.isEqualNode(this.nodes.redactor)&&!v.anyBlockSelected&&f<k){h.stopImmediatePropagation(),h.stopPropagation();const{BlockManager:g,Caret:f,Toolbar:k}=this.Editor;(!g.lastBlock.tool.isDefault||!g.lastBlock.isEmpty)&&g.insertAtEnd(),f.setToTheLastBlock(),k.moveAndOpen(g.lastBlock)}}selectionChanged(){const{CrossBlockSelection:h,BlockSelection:g}=this.Editor,f=b.anchorElement;if(h.isCrossBlockSelectionStarted&&g.anyBlockSelected&&b.get().removeAllRanges(),!f){b.range||this.Editor.InlineToolbar.close();return}const k=f.closest(`.${R.CSS.content}`)===null;if(k&&(this.Editor.InlineToolbar.containsNode(f)||this.Editor.InlineToolbar.close(),!(f.dataset.inlineToolbar==="true")))return;this.Editor.BlockManager.currentBlock||this.Editor.BlockManager.setCurrentBlockByChildNode(f);const v=k!==!0;this.Editor.InlineToolbar.tryToShow(!0,v)}}const No={BlocksAPI:oo,CaretAPI:io,EventsAPI:no,I18nAPI:He,API:so,InlineToolbarAPI:ro,ListenersAPI:ao,NotifierAPI:uo,ReadOnlyAPI:po,SanitizerAPI:xo,SaverAPI:wo,SelectionAPI:yo,StylesAPI:Eo,ToolbarAPI:Bo,TooltipAPI:Mo,UiAPI:Lo,BlockSettings:Yo,ConversionToolbar:$,Toolbar:Go,InlineToolbar:Jo,BlockEvents:Qo,BlockManager:oi,BlockSelection:ii,Caret:we,CrossBlockSelection:ni,DragNDrop:si,ModificationsObserver:ri,Paste:co,ReadOnly:ai,RectangleSelection:fe,Renderer:li,Saver:ci,Tools:_t,UI:xi};class yi{
/**
   * @param {EditorConfig} config - user configuration
   */
constructor(h){this.moduleInstances={},this.eventsDispatcher=new Ee;let g,f;this.isReady=new Promise(((h,k)=>{g=h,f=k})),Promise.resolve().then((async()=>{this.configuration=h,this.validate(),this.init(),await this.start(),await this.render();const{BlockManager:f,Caret:k,UI:v,ModificationsObserver:x}=this.moduleInstances;v.checkEmptiness(),x.enable(),this.configuration.autofocus&&k.setToBlock(f.blocks[0],k.positions.START),g()})).catch((h=>{k(`Editor.js is not ready because of ${h}`,"error"),f(h)}))
/**
   * Setting for configuration
   *
   * @param {EditorConfig|string} config - Editor's config to set
   */}set configuration(g){var f,k;D(g)?this.config={...g}:this.config={holder:g},Le(!!this.config.holderId,"config.holderId","config.holder"),this.config.holderId&&!this.config.holder&&(this.config.holder=this.config.holderId,this.config.holderId=null),this.config.holder==null&&(this.config.holder="editorjs"),this.config.logLevel||(this.config.logLevel=h.VERBOSE),Ft(this.config.logLevel),Le(!!this.config.initialBlock,"config.initialBlock","config.defaultBlock"),this.config.defaultBlock=this.config.defaultBlock||this.config.initialBlock||"paragraph",this.config.minHeight=this.config.minHeight!==void 0?this.config.minHeight:300;const v={type:this.config.defaultBlock,data:{}};this.config.placeholder=this.config.placeholder||!1,this.config.sanitizer=this.config.sanitizer||{p:!0,b:!0,a:!0},this.config.hideToolbar=!!this.config.hideToolbar&&this.config.hideToolbar,this.config.tools=this.config.tools||{},this.config.i18n=this.config.i18n||{},this.config.data=this.config.data||{blocks:[]},this.config.onReady=this.config.onReady||(()=>{}),this.config.onChange=this.config.onChange||(()=>{}),this.config.inlineToolbar=this.config.inlineToolbar===void 0||this.config.inlineToolbar,(W(this.config.data)||!this.config.data.blocks||this.config.data.blocks.length===0)&&(this.config.data={blocks:[v]}),this.config.readOnly=this.config.readOnly||!1,(f=this.config.i18n)!=null&&f.messages&&N.setDictionary(this.config.i18n.messages),this.config.i18n.direction=((k=this.config.i18n)==null?void 0:k.direction)||"ltr"
/**
   * Returns private property
   *
   * @returns {EditorConfig}
   */}get configuration(){return this.config}validate(){const{holderId:h,holder:g}=this.config;if(h&&g)throw Error("«holderId» and «holder» param can't assign at the same time.");if(G(g)&&!c.get(g))throw Error(`element with ID «${g}» is missing. Pass correct holder's ID.`);if(g&&D(g)&&!c.isElement(g))throw Error("«holder» value must be an Element node")}init(){this.constructModules(),this.configureModules()
/**
   * Start Editor!
   *
   * Get list of modules that needs to be prepared and return a sequence (Promise)
   *
   * @returns {Promise<void>}
   */}async start(){await["Tools","UI","BlockManager","Paste","BlockSelection","RectangleSelection","CrossBlockSelection","ReadOnly"].reduce(((h,g)=>h.then((async()=>{try{await this.moduleInstances[g].prepare()}catch(h){if(h instanceof ut)throw new Error(h.message);k(`Module ${g} was skipped because of %o`,"warn",h)}}))),Promise.resolve())}render(){return this.moduleInstances.Renderer.render(this.config.data.blocks)}constructModules(){Object.entries(No).forEach((([h,g])=>{try{this.moduleInstances[h]=new g({config:this.configuration,eventsDispatcher:this.eventsDispatcher})}catch(g){k("[constructModules]",`Module ${h} skipped because`,"error",g)}}))}configureModules(){for(const h in this.moduleInstances)Object.prototype.hasOwnProperty.call(this.moduleInstances,h)&&(this.moduleInstances[h].state=this.getModulesDiff(h))}
/**
   * Return modules without passed name
   *
   * @param {string} name - module for witch modules difference should be calculated
   */getModulesDiff(h){const g={};for(const f in this.moduleInstances)f!==h&&(g[f]=this.moduleInstances[f]);return g}}
/**
 * Editor.js
 *
 * @license Apache-2.0
 * @see Editor.js <https://editorjs.io>
 * @author CodeX Team <https://codex.so>
 */class Ei{static get version(){return"2.29.0"}
/**
   * @param {EditorConfig|string|undefined} [configuration] - user configuration
   */constructor(h){let t=()=>{};D(h)&&M(h.onReady)&&(t=h.onReady);const g=new yi(h);this.isReady=g.isReady.then((()=>{this.exportAPI(g),t()}))}
/**
   * Export external API methods
   *
   * @param {Core} editor — Editor's instance
   */exportAPI(h){const g=["configuration"],o=()=>{Object.values(h.moduleInstances).forEach((h=>{M(h.destroy)&&h.destroy(),h.listeners.removeAll()})),Io(),h=null;for(const h in this)Object.prototype.hasOwnProperty.call(this,h)&&delete this[h];Object.setPrototypeOf(this,null)};g.forEach((g=>{this[g]=h[g]})),this.destroy=o,Object.setPrototypeOf(this,h.moduleInstances.API.methods),delete this.exportAPI,Object.entries({blocks:{clear:"clear",render:"render"},caret:{focus:"focus"},events:{on:"on",off:"off",emit:"emit"},saver:{save:"save"}}).forEach((([g,f])=>{Object.entries(f).forEach((([f,k])=>{this[k]=h.moduleInstances.API.methods[g][f]}))}))}}export{Ei as default};

