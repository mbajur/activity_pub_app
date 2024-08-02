import{Decoration as e,showPanel as t,EditorView as i,getPanel as n,logException as s,ViewPlugin as o,WidgetType as r,GutterMarker as l,gutter as a,showTooltip as c,hoverTooltip as d}from"@codemirror/view";import{StateEffect as u,StateField as f,combineConfig as m,Facet as h,RangeSet as g}from"@codemirror/state";import p from"crelt";class SelectedDiagnostic{constructor(e,t,i){this.from=e;this.to=t;this.diagnostic=i}}class LintState{constructor(e,t,i){this.diagnostics=e;this.panel=t;this.selected=i}static init(t,i,n){let s=t;let o=n.facet(L).markerFilter;o&&(s=o(s,n));let r=e.set(s.map((t=>t.from==t.to||t.from==t.to-1&&n.doc.lineAt(t.from).to==t.from?e.widget({widget:new DiagnosticWidget(t),diagnostic:t}).range(t.from):e.mark({attributes:{class:"cm-lintRange cm-lintRange-"+t.severity+(t.markClass?" "+t.markClass:"")},diagnostic:t}).range(t.from,t.to))),true);return new LintState(r,i,findDiagnostic(r))}}function findDiagnostic(e,t=null,i=0){let n=null;e.between(i,1e9,((e,i,{spec:s})=>{if(!t||s.diagnostic==t){n=new SelectedDiagnostic(e,i,s.diagnostic);return false}}));return n}function hideTooltip(e,t){let i=t.pos,n=t.end||i;let s=e.state.facet(L).hideOn(e,i,n);if(s!=null)return s;let o=e.startState.doc.lineAt(t.pos);return!!(e.effects.some((e=>e.is(v)))||e.changes.touchesRange(o.from,Math.max(o.to,n)))}function maybeEnableLint(e,t){return e.field(k,false)?t:t.concat(u.appendConfig.of(M))}function setDiagnostics(e,t){return{effects:maybeEnableLint(e,[v.of(t)])}}const v=u.define();const w=u.define();const b=u.define();const k=f.define({create(){return new LintState(e.none,null,null)},update(e,t){if(t.docChanged&&e.diagnostics.size){let i=e.diagnostics.map(t.changes),n=null,s=e.panel;if(e.selected){let s=t.changes.mapPos(e.selected.from,1);n=findDiagnostic(i,e.selected.diagnostic,s)||findDiagnostic(i,null,s)}!i.size&&s&&t.state.facet(L).autoPanel&&(s=null);e=new LintState(i,s,n)}for(let i of t.effects)if(i.is(v)){let n=t.state.facet(L).autoPanel?i.value.length?LintPanel.open:null:e.panel;e=LintState.init(i.value,n,t.state)}else i.is(w)?e=new LintState(e.diagnostics,i.value?LintPanel.open:null,e.selected):i.is(b)&&(e=new LintState(e.diagnostics,e.panel,i.value));return e},provide:e=>[t.from(e,(e=>e.panel)),i.decorations.from(e,(e=>e.diagnostics))]});function diagnosticCount(e){let t=e.field(k,false);return t?t.diagnostics.size:0}const y=e.mark({class:"cm-lintRange cm-lintRange-active"});function lintTooltip(e,t,i){let{diagnostics:n}=e.state.field(k);let s=[],o=2e8,r=0;n.between(t-(i<0?1:0),t+(i>0?1:0),((e,n,{spec:l})=>{if(t>=e&&t<=n&&(e==n||(t>e||i>0)&&(t<n||i<0))){s.push(l.diagnostic);o=Math.min(e,o);r=Math.max(n,r)}}));let l=e.state.facet(L).tooltipFilter;l&&(s=l(s,e.state));return s.length?{pos:o,end:r,above:e.state.doc.lineAt(o).to<r,create(){return{dom:diagnosticsTooltip(e,s)}}}:null}function diagnosticsTooltip(e,t){return p("ul",{class:"cm-tooltip-lint"},t.map((t=>renderDiagnostic(e,t,false))))}const openLintPanel=e=>{let t=e.state.field(k,false);t&&t.panel||e.dispatch({effects:maybeEnableLint(e.state,[w.of(true)])});let i=n(e,LintPanel.open);i&&i.dom.querySelector(".cm-panel-lint ul").focus();return true};const closeLintPanel=e=>{let t=e.state.field(k,false);if(!t||!t.panel)return false;e.dispatch({effects:w.of(false)});return true};const nextDiagnostic=e=>{let t=e.state.field(k,false);if(!t)return false;let i=e.state.selection.main,n=t.diagnostics.iter(i.to+1);if(!n.value){n=t.diagnostics.iter(0);if(!n.value||n.from==i.from&&n.to==i.to)return false}e.dispatch({selection:{anchor:n.from,head:n.to},scrollIntoView:true});return true};const previousDiagnostic=e=>{let{state:t}=e,i=t.field(k,false);if(!i)return false;let n=t.selection.main;let s,o,r,l;i.diagnostics.between(0,t.doc.length,((e,t)=>{if(t<n.to&&(s==null||s<e)){s=e;o=t}if(r==null||e>r){r=e;l=t}}));if(r==null||s==null&&r==n.from)return false;e.dispatch({selection:{anchor:s!==null&&s!==void 0?s:r,head:o!==null&&o!==void 0?o:l},scrollIntoView:true});return true};const x=[{key:"Mod-Shift-m",run:openLintPanel,preventDefault:true},{key:"F8",run:nextDiagnostic}];const C=o.fromClass(class{constructor(e){this.view=e;this.timeout=-1;this.set=true;let{delay:t}=e.state.facet(L);this.lintTime=Date.now()+t;this.run=this.run.bind(this);this.timeout=setTimeout(this.run,t)}run(){clearTimeout(this.timeout);let e=Date.now();if(e<this.lintTime-10)this.timeout=setTimeout(this.run,this.lintTime-e);else{this.set=false;let{state:e}=this.view,{sources:t}=e.facet(L);t.length&&Promise.all(t.map((e=>Promise.resolve(e(this.view))))).then((t=>{let i=t.reduce(((e,t)=>e.concat(t)));this.view.state.doc==e.doc&&this.view.dispatch(setDiagnostics(this.view.state,i))}),(e=>{s(this.view.state,e)}))}}update(e){let t=e.state.facet(L);if(e.docChanged||t!=e.startState.facet(L)||t.needsRefresh&&t.needsRefresh(e)){this.lintTime=Date.now()+t.delay;if(!this.set){this.set=true;this.timeout=setTimeout(this.run,t.delay)}}}force(){if(this.set){this.lintTime=Date.now();this.run()}}destroy(){clearTimeout(this.timeout)}});const L=h.define({combine(e){return Object.assign({sources:e.map((e=>e.source)).filter((e=>e!=null))},m(e.map((e=>e.config)),{delay:750,markerFilter:null,tooltipFilter:null,needsRefresh:null,hideOn:()=>null},{needsRefresh:(e,t)=>e?t?i=>e(i)||t(i):e:t}))}});function linter(e,t={}){return[L.of({source:e,config:t}),C,M]}function forceLinting(e){let t=e.plugin(C);t&&t.force()}function assignKeys(e){let t=[];if(e)e:for(let{name:i}of e){for(let e=0;e<i.length;e++){let n=i[e];if(/[a-zA-Z]/.test(n)&&!t.some((e=>e.toLowerCase()==n.toLowerCase()))){t.push(n);continue e}}t.push("")}return t}function renderDiagnostic(e,t,i){var n;let s=i?assignKeys(t.actions):[];return p("li",{class:"cm-diagnostic cm-diagnostic-"+t.severity},p("span",{class:"cm-diagnosticText"},t.renderMessage?t.renderMessage(e):t.message),(n=t.actions)===null||n===void 0?void 0:n.map(((i,n)=>{let o=false,click=n=>{n.preventDefault();if(o)return;o=true;let s=findDiagnostic(e.state.field(k).diagnostics,t);s&&i.apply(e,s.from,s.to)};let{name:r}=i,l=s[n]?r.indexOf(s[n]):-1;let a=l<0?r:[r.slice(0,l),p("u",r.slice(l,l+1)),r.slice(l+1)];return p("button",{type:"button",class:"cm-diagnosticAction",onclick:click,onmousedown:click,"aria-label":` Action: ${r}${l<0?"":` (access key "${s[n]})"`}.`},a)})),t.source&&p("div",{class:"cm-diagnosticSource"},t.source))}class DiagnosticWidget extends r{constructor(e){super();this.diagnostic=e}eq(e){return e.diagnostic==this.diagnostic}toDOM(){return p("span",{class:"cm-lintPoint cm-lintPoint-"+this.diagnostic.severity})}}class PanelItem{constructor(e,t){this.diagnostic=t;this.id="item_"+Math.floor(Math.random()*4294967295).toString(16);this.dom=renderDiagnostic(e,t,true);this.dom.id=this.id;this.dom.setAttribute("role","option")}}class LintPanel{constructor(e){this.view=e;this.items=[];let onkeydown=t=>{if(t.keyCode==27){closeLintPanel(this.view);this.view.focus()}else if(t.keyCode==38||t.keyCode==33)this.moveSelection((this.selectedIndex-1+this.items.length)%this.items.length);else if(t.keyCode==40||t.keyCode==34)this.moveSelection((this.selectedIndex+1)%this.items.length);else if(t.keyCode==36)this.moveSelection(0);else if(t.keyCode==35)this.moveSelection(this.items.length-1);else if(t.keyCode==13)this.view.focus();else{if(!(t.keyCode>=65&&t.keyCode<=90&&this.selectedIndex>=0))return;{let{diagnostic:i}=this.items[this.selectedIndex],n=assignKeys(i.actions);for(let s=0;s<n.length;s++)if(n[s].toUpperCase().charCodeAt(0)==t.keyCode){let t=findDiagnostic(this.view.state.field(k).diagnostics,i);t&&i.actions[s].apply(e,t.from,t.to)}}}t.preventDefault()};let onclick=e=>{for(let t=0;t<this.items.length;t++)this.items[t].dom.contains(e.target)&&this.moveSelection(t)};this.list=p("ul",{tabIndex:0,role:"listbox","aria-label":this.view.state.phrase("Diagnostics"),onkeydown:onkeydown,onclick:onclick});this.dom=p("div",{class:"cm-panel-lint"},this.list,p("button",{type:"button",name:"close","aria-label":this.view.state.phrase("close"),onclick:()=>closeLintPanel(this.view)},"×"));this.update()}get selectedIndex(){let e=this.view.state.field(k).selected;if(!e)return-1;for(let t=0;t<this.items.length;t++)if(this.items[t].diagnostic==e.diagnostic)return t;return-1}update(){let{diagnostics:e,selected:t}=this.view.state.field(k);let i=0,n=false,s=null;e.between(0,this.view.state.doc.length,((e,o,{spec:r})=>{let l,a=-1;for(let e=i;e<this.items.length;e++)if(this.items[e].diagnostic==r.diagnostic){a=e;break}if(a<0){l=new PanelItem(this.view,r.diagnostic);this.items.splice(i,0,l);n=true}else{l=this.items[a];if(a>i){this.items.splice(i,a-i);n=true}}if(t&&l.diagnostic==t.diagnostic){if(!l.dom.hasAttribute("aria-selected")){l.dom.setAttribute("aria-selected","true");s=l}}else l.dom.hasAttribute("aria-selected")&&l.dom.removeAttribute("aria-selected");i++}));while(i<this.items.length&&!(this.items.length==1&&this.items[0].diagnostic.from<0)){n=true;this.items.pop()}if(this.items.length==0){this.items.push(new PanelItem(this.view,{from:-1,to:-1,severity:"info",message:this.view.state.phrase("No diagnostics")}));n=true}if(s){this.list.setAttribute("aria-activedescendant",s.id);this.view.requestMeasure({key:this,read:()=>({sel:s.dom.getBoundingClientRect(),panel:this.list.getBoundingClientRect()}),write:({sel:e,panel:t})=>{let i=t.height/this.list.offsetHeight;e.top<t.top?this.list.scrollTop-=(t.top-e.top)/i:e.bottom>t.bottom&&(this.list.scrollTop+=(e.bottom-t.bottom)/i)}})}else this.selectedIndex<0&&this.list.removeAttribute("aria-activedescendant");n&&this.sync()}sync(){let e=this.list.firstChild;function rm(){let t=e;e=t.nextSibling;t.remove()}for(let t of this.items)if(t.dom.parentNode==this.list){while(e!=t.dom)rm();e=t.dom.nextSibling}else this.list.insertBefore(t.dom,e);while(e)rm()}moveSelection(e){if(this.selectedIndex<0)return;let t=this.view.state.field(k);let i=findDiagnostic(t.diagnostics,this.items[e].diagnostic);i&&this.view.dispatch({selection:{anchor:i.from,head:i.to},scrollIntoView:true,effects:b.of(i)})}static open(e){return new LintPanel(e)}}function svg(e,t='viewBox="0 0 40 40"'){return`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${t}>${encodeURIComponent(e)}</svg>')`}function underline(e){return svg(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${e}" fill="none" stroke-width=".7"/>`,'width="6" height="3"')}const D=i.baseTheme({".cm-diagnostic":{padding:"3px 6px 3px 8px",marginLeft:"-1px",display:"block",whiteSpace:"pre-wrap"},".cm-diagnostic-error":{borderLeft:"5px solid #d11"},".cm-diagnostic-warning":{borderLeft:"5px solid orange"},".cm-diagnostic-info":{borderLeft:"5px solid #999"},".cm-diagnostic-hint":{borderLeft:"5px solid #66d"},".cm-diagnosticAction":{font:"inherit",border:"none",padding:"2px 4px",backgroundColor:"#444",color:"white",borderRadius:"3px",marginLeft:"8px",cursor:"pointer"},".cm-diagnosticSource":{fontSize:"70%",opacity:.7},".cm-lintRange":{backgroundPosition:"left bottom",backgroundRepeat:"repeat-x",paddingBottom:"0.7px"},".cm-lintRange-error":{backgroundImage:underline("#d11")},".cm-lintRange-warning":{backgroundImage:underline("orange")},".cm-lintRange-info":{backgroundImage:underline("#999")},".cm-lintRange-hint":{backgroundImage:underline("#66d")},".cm-lintRange-active":{backgroundColor:"#ffdd9980"},".cm-tooltip-lint":{padding:0,margin:0},".cm-lintPoint":{position:"relative","&:after":{content:'""',position:"absolute",bottom:0,left:"-2px",borderLeft:"3px solid transparent",borderRight:"3px solid transparent",borderBottom:"4px solid #d11"}},".cm-lintPoint-warning":{"&:after":{borderBottomColor:"orange"}},".cm-lintPoint-info":{"&:after":{borderBottomColor:"#999"}},".cm-lintPoint-hint":{"&:after":{borderBottomColor:"#66d"}},".cm-panel.cm-panel-lint":{position:"relative","& ul":{maxHeight:"100px",overflowY:"auto","& [aria-selected]":{backgroundColor:"#ddd","& u":{textDecoration:"underline"}},"&:focus [aria-selected]":{background_fallback:"#bdf",backgroundColor:"Highlight",color_fallback:"white",color:"HighlightText"},"& u":{textDecoration:"none"},padding:0,margin:0},"& [name=close]":{position:"absolute",top:"0",right:"2px",background:"inherit",border:"none",font:"inherit",padding:0,margin:0}}});function severityWeight(e){return e=="error"?4:e=="warning"?3:e=="info"?2:1}class LintGutterMarker extends l{constructor(e){super();this.diagnostics=e;this.severity=e.reduce(((e,t)=>severityWeight(e)<severityWeight(t.severity)?t.severity:e),"hint")}toDOM(e){let t=document.createElement("div");t.className="cm-lint-marker cm-lint-marker-"+this.severity;let i=this.diagnostics;let n=e.state.facet(A).tooltipFilter;n&&(i=n(i,e.state));i.length&&(t.onmouseover=()=>gutterMarkerMouseOver(e,t,i));return t}}function trackHoverOn(e,t){let mousemove=i=>{let n=t.getBoundingClientRect();if(!(i.clientX>n.left-10&&i.clientX<n.right+10&&i.clientY>n.top-10&&i.clientY<n.bottom+10)){for(let e=i.target;e;e=e.parentNode)if(e.nodeType==1&&e.classList.contains("cm-tooltip-lint"))return;window.removeEventListener("mousemove",mousemove);e.state.field(P)&&e.dispatch({effects:R.of(null)})}};window.addEventListener("mousemove",mousemove)}function gutterMarkerMouseOver(e,t,i){function hovered(){let n=e.elementAtHeight(t.getBoundingClientRect().top+5-e.documentTop);const s=e.coordsAtPos(n.from);s&&e.dispatch({effects:R.of({pos:n.from,above:false,create(){return{dom:diagnosticsTooltip(e,i),getCoords:()=>t.getBoundingClientRect()}}})});t.onmouseout=t.onmousemove=null;trackHoverOn(e,t)}let{hoverTime:n}=e.state.facet(A);let s=setTimeout(hovered,n);t.onmouseout=()=>{clearTimeout(s);t.onmouseout=t.onmousemove=null};t.onmousemove=()=>{clearTimeout(s);s=setTimeout(hovered,n)}}function markersForDiagnostics(e,t){let i=Object.create(null);for(let n of t){let t=e.lineAt(n.from);(i[t.from]||(i[t.from]=[])).push(n)}let n=[];for(let e in i)n.push(new LintGutterMarker(i[e]).range(+e));return g.of(n,true)}const T=a({class:"cm-gutter-lint",markers:e=>e.state.field(S)});const S=f.define({create(){return g.empty},update(e,t){e=e.map(t.changes);let i=t.state.facet(A).markerFilter;for(let n of t.effects)if(n.is(v)){let s=n.value;i&&(s=i(s||[],t.state));e=markersForDiagnostics(t.state.doc,s.slice(0))}return e}});const R=u.define();const P=f.define({create(){return null},update(e,t){e&&t.docChanged&&(e=hideTooltip(t,e)?null:Object.assign(Object.assign({},e),{pos:t.changes.mapPos(e.pos)}));return t.effects.reduce(((e,t)=>t.is(R)?t.value:e),e)},provide:e=>c.from(e)});const I=i.baseTheme({".cm-gutter-lint":{width:"1.4em","& .cm-gutterElement":{padding:".2em"}},".cm-lint-marker":{width:"1em",height:"1em"},".cm-lint-marker-info":{content:svg('<path fill="#aaf" stroke="#77e" stroke-width="6" stroke-linejoin="round" d="M5 5L35 5L35 35L5 35Z"/>')},".cm-lint-marker-warning":{content:svg('<path fill="#fe8" stroke="#fd7" stroke-width="6" stroke-linejoin="round" d="M20 6L37 35L3 35Z"/>')},".cm-lint-marker-error":{content:svg('<circle cx="20" cy="20" r="15" fill="#f87" stroke="#f43" stroke-width="6"/>')}});const M=[k,i.decorations.compute([k],(t=>{let{selected:i,panel:n}=t.field(k);return i&&n&&i.from!=i.to?e.set([y.range(i.from,i.to)]):e.none})),d(lintTooltip,{hideOn:hideTooltip}),D];const A=h.define({combine(e){return m(e,{hoverTime:300,markerFilter:null,tooltipFilter:null})}});function lintGutter(e={}){return[A.of(e),S,T,I,P]}function forEachDiagnostic(e,t){let i=e.field(k,false);if(i&&i.diagnostics.size)for(let e=g.iter([i.diagnostics]);e.value;e.next())t(e.value.spec.diagnostic,e.from,e.to)}export{closeLintPanel,diagnosticCount,forEachDiagnostic,forceLinting,lintGutter,x as lintKeymap,linter,nextDiagnostic,openLintPanel,previousDiagnostic,setDiagnostics,v as setDiagnosticsEffect};
