const e=1024;let t=0;class Range{constructor(e,t){this.from=e;this.to=t}}class NodeProp{constructor(e={}){this.id=t++;this.perNode=!!e.perNode;this.deserialize=e.deserialize||(()=>{throw new Error("This node type doesn't define a deserialize function")})}add(e){if(this.perNode)throw new RangeError("Can't add per-node props to node types");typeof e!="function"&&(e=NodeType.match(e));return t=>{let r=e(t);return r===void 0?null:[this,r]}}}NodeProp.closedBy=new NodeProp({deserialize:e=>e.split(" ")});NodeProp.openedBy=new NodeProp({deserialize:e=>e.split(" ")});NodeProp.group=new NodeProp({deserialize:e=>e.split(" ")});NodeProp.isolate=new NodeProp({deserialize:e=>{if(e&&e!="rtl"&&e!="ltr"&&e!="auto")throw new RangeError("Invalid value for isolate: "+e);return e||"auto"}});NodeProp.contextHash=new NodeProp({perNode:true});NodeProp.lookAhead=new NodeProp({perNode:true});NodeProp.mounted=new NodeProp({perNode:true});class MountedTree{constructor(e,t,r){this.tree=e;this.overlay=t;this.parser=r}static get(e){return e&&e.props&&e.props[NodeProp.mounted.id]}}const r=Object.create(null);class NodeType{constructor(e,t,r,n=0){this.name=e;this.props=t;this.id=r;this.flags=n}static define(e){let t=e.props&&e.props.length?Object.create(null):r;let n=(e.top?1:0)|(e.skipped?2:0)|(e.error?4:0)|(e.name==null?8:0);let i=new NodeType(e.name||"",t,e.id,n);if(e.props)for(let r of e.props){Array.isArray(r)||(r=r(i));if(r){if(r[0].perNode)throw new RangeError("Can't store a per-node prop on a node type");t[r[0].id]=r[1]}}return i}prop(e){return this.props[e.id]}get isTop(){return(this.flags&1)>0}get isSkipped(){return(this.flags&2)>0}get isError(){return(this.flags&4)>0}get isAnonymous(){return(this.flags&8)>0}is(e){if(typeof e=="string"){if(this.name==e)return true;let t=this.prop(NodeProp.group);return!!t&&t.indexOf(e)>-1}return this.id==e}static match(e){let t=Object.create(null);for(let r in e)for(let n of r.split(" "))t[n]=e[r];return e=>{for(let r=e.prop(NodeProp.group),n=-1;n<(r?r.length:0);n++){let i=t[n<0?e.name:r[n]];if(i)return i}}}}NodeType.none=new NodeType("",Object.create(null),0,8);class NodeSet{constructor(e){this.types=e;for(let t=0;t<e.length;t++)if(e[t].id!=t)throw new RangeError("Node type ids should correspond to array positions when creating a node set")}extend(...e){let t=[];for(let r of this.types){let n=null;for(let t of e){let e=t(r);if(e){n||(n=Object.assign({},r.props));n[e[0].id]=e[1]}}t.push(n?new NodeType(r.name,n,r.id,r.flags):r)}return new NodeSet(t)}}const n=new WeakMap,i=new WeakMap;var s;(function(e){e[e.ExcludeBuffers=1]="ExcludeBuffers";e[e.IncludeAnonymous=2]="IncludeAnonymous";e[e.IgnoreMounts=4]="IgnoreMounts";e[e.IgnoreOverlays=8]="IgnoreOverlays"})(s||(s={}));class Tree{constructor(e,t,r,n,i){this.type=e;this.children=t;this.positions=r;this.length=n;this.props=null;if(i&&i.length){this.props=Object.create(null);for(let[e,t]of i)this.props[typeof e=="number"?e:e.id]=t}}toString(){let e=MountedTree.get(this);if(e&&!e.overlay)return e.tree.toString();let t="";for(let e of this.children){let r=e.toString();if(r){t&&(t+=",");t+=r}}return this.type.name?(/\W/.test(this.type.name)&&!this.type.isError?JSON.stringify(this.type.name):this.type.name)+(t.length?"("+t+")":""):t}cursor(e=0){return new TreeCursor(this.topNode,e)}cursorAt(e,t=0,r=0){let i=n.get(this)||this.topNode;let s=new TreeCursor(i);s.moveTo(e,t);n.set(this,s._tree);return s}get topNode(){return new TreeNode(this,0,0,null)}resolve(e,t=0){let r=resolveNode(n.get(this)||this.topNode,e,t,false);n.set(this,r);return r}resolveInner(e,t=0){let r=resolveNode(i.get(this)||this.topNode,e,t,true);i.set(this,r);return r}resolveStack(e,t=0){return stackIterator(this,e,t)}iterate(e){let{enter:t,leave:r,from:n=0,to:i=this.length}=e;let o=e.mode||0,l=(o&s.IncludeAnonymous)>0;for(let e=this.cursor(o|s.IncludeAnonymous);;){let s=false;if(e.from<=i&&e.to>=n&&(!l&&e.type.isAnonymous||t(e)!==false)){if(e.firstChild())continue;s=true}for(;;){s&&r&&(l||!e.type.isAnonymous)&&r(e);if(e.nextSibling())break;if(!e.parent())return;s=true}}}prop(e){return e.perNode?this.props?this.props[e.id]:void 0:this.type.prop(e)}get propValues(){let e=[];if(this.props)for(let t in this.props)e.push([+t,this.props[t]]);return e}balance(e={}){return this.children.length<=8?this:balanceRange(NodeType.none,this.children,this.positions,0,this.children.length,0,this.length,((e,t,r)=>new Tree(this.type,e,t,r,this.propValues)),e.makeTree||((e,t,r)=>new Tree(NodeType.none,e,t,r)))}static build(e){return buildTree(e)}}Tree.empty=new Tree(NodeType.none,[],[],0);class FlatBufferCursor{constructor(e,t){this.buffer=e;this.index=t}get id(){return this.buffer[this.index-4]}get start(){return this.buffer[this.index-3]}get end(){return this.buffer[this.index-2]}get size(){return this.buffer[this.index-1]}get pos(){return this.index}next(){this.index-=4}fork(){return new FlatBufferCursor(this.buffer,this.index)}}class TreeBuffer{constructor(e,t,r){this.buffer=e;this.length=t;this.set=r}get type(){return NodeType.none}toString(){let e=[];for(let t=0;t<this.buffer.length;){e.push(this.childString(t));t=this.buffer[t+3]}return e.join(",")}childString(e){let t=this.buffer[e],r=this.buffer[e+3];let n=this.set.types[t],i=n.name;/\W/.test(i)&&!n.isError&&(i=JSON.stringify(i));e+=4;if(r==e)return i;let s=[];while(e<r){s.push(this.childString(e));e=this.buffer[e+3]}return i+"("+s.join(",")+")"}findChild(e,t,r,n,i){let{buffer:s}=this,o=-1;for(let l=e;l!=t;l=s[l+3])if(checkSide(i,n,s[l+1],s[l+2])){o=l;if(r>0)break}return o}slice(e,t,r){let n=this.buffer;let i=new Uint16Array(t-e),s=0;for(let o=e,l=0;o<t;){i[l++]=n[o++];i[l++]=n[o++]-r;let t=i[l++]=n[o++]-r;i[l++]=n[o++]-e;s=Math.max(s,t)}return new TreeBuffer(i,s,this.set)}}function checkSide(e,t,r,n){switch(e){case-2:return r<t;case-1:return n>=t&&r<t;case 0:return r<t&&n>t;case 1:return r<=t&&n>t;case 2:return n>t;case 4:return true}}function resolveNode(e,t,r,n){var i;while(e.from==e.to||(r<1?e.from>=t:e.from>t)||(r>-1?e.to<=t:e.to<t)){let t=!n&&e instanceof TreeNode&&e.index<0?null:e.parent;if(!t)return e;e=t}let o=n?0:s.IgnoreOverlays;if(n)for(let n=e,s=n.parent;s;n=s,s=n.parent)n instanceof TreeNode&&n.index<0&&((i=s.enter(t,r,o))===null||i===void 0?void 0:i.from)!=n.from&&(e=s);for(;;){let n=e.enter(t,r,o);if(!n)return e;e=n}}class BaseNode{cursor(e=0){return new TreeCursor(this,e)}getChild(e,t=null,r=null){let n=getChildren(this,e,t,r);return n.length?n[0]:null}getChildren(e,t=null,r=null){return getChildren(this,e,t,r)}resolve(e,t=0){return resolveNode(this,e,t,false)}resolveInner(e,t=0){return resolveNode(this,e,t,true)}matchContext(e){return matchNodeContext(this,e)}enterUnfinishedNodesBefore(e){let t=this.childBefore(e),r=this;while(t){let e=t.lastChild;if(!e||e.to!=t.to)break;if(e.type.isError&&e.from==e.to){r=t;t=e.prevSibling}else t=e}return r}get node(){return this}get next(){return this.parent}}class TreeNode extends BaseNode{constructor(e,t,r,n){super();this._tree=e;this.from=t;this.index=r;this._parent=n}get type(){return this._tree.type}get name(){return this._tree.type.name}get to(){return this.from+this._tree.length}nextChild(e,t,r,n,i=0){for(let o=this;;){for(let{children:l,positions:f}=o._tree,h=t>0?l.length:-1;e!=h;e+=t){let h=l[e],u=f[e]+o.from;if(checkSide(n,r,u,u+h.length))if(h instanceof TreeBuffer){if(i&s.ExcludeBuffers)continue;let l=h.findChild(0,h.buffer.length,t,r-u,n);if(l>-1)return new BufferNode(new BufferContext(o,h,e,u),null,l)}else if(i&s.IncludeAnonymous||!h.type.isAnonymous||hasChild(h)){let l;if(!(i&s.IgnoreMounts)&&(l=MountedTree.get(h))&&!l.overlay)return new TreeNode(l.tree,u,e,o);let f=new TreeNode(h,u,e,o);return i&s.IncludeAnonymous||!f.type.isAnonymous?f:f.nextChild(t<0?h.children.length-1:0,t,r,n)}}if(i&s.IncludeAnonymous||!o.type.isAnonymous)return null;e=o.index>=0?o.index+t:t<0?-1:o._parent._tree.children.length;o=o._parent;if(!o)return null}}get firstChild(){return this.nextChild(0,1,0,4)}get lastChild(){return this.nextChild(this._tree.children.length-1,-1,0,4)}childAfter(e){return this.nextChild(0,1,e,2)}childBefore(e){return this.nextChild(this._tree.children.length-1,-1,e,-2)}enter(e,t,r=0){let n;if(!(r&s.IgnoreOverlays)&&(n=MountedTree.get(this._tree))&&n.overlay){let r=e-this.from;for(let{from:e,to:i}of n.overlay)if((t>0?e<=r:e<r)&&(t<0?i>=r:i>r))return new TreeNode(n.tree,n.overlay[0].from+this.from,-1,this)}return this.nextChild(0,1,e,t,r)}nextSignificantParent(){let e=this;while(e.type.isAnonymous&&e._parent)e=e._parent;return e}get parent(){return this._parent?this._parent.nextSignificantParent():null}get nextSibling(){return this._parent&&this.index>=0?this._parent.nextChild(this.index+1,1,0,4):null}get prevSibling(){return this._parent&&this.index>=0?this._parent.nextChild(this.index-1,-1,0,4):null}get tree(){return this._tree}toTree(){return this._tree}toString(){return this._tree.toString()}}function getChildren(e,t,r,n){let i=e.cursor(),s=[];if(!i.firstChild())return s;if(r!=null)for(let e=false;!e;){e=i.type.is(r);if(!i.nextSibling())return s}for(;;){if(n!=null&&i.type.is(n))return s;i.type.is(t)&&s.push(i.node);if(!i.nextSibling())return n==null?s:[]}}function matchNodeContext(e,t,r=t.length-1){for(let n=e.parent;r>=0;n=n.parent){if(!n)return false;if(!n.type.isAnonymous){if(t[r]&&t[r]!=n.name)return false;r--}}return true}class BufferContext{constructor(e,t,r,n){this.parent=e;this.buffer=t;this.index=r;this.start=n}}class BufferNode extends BaseNode{get name(){return this.type.name}get from(){return this.context.start+this.context.buffer.buffer[this.index+1]}get to(){return this.context.start+this.context.buffer.buffer[this.index+2]}constructor(e,t,r){super();this.context=e;this._parent=t;this.index=r;this.type=e.buffer.set.types[e.buffer.buffer[r]]}child(e,t,r){let{buffer:n}=this.context;let i=n.findChild(this.index+4,n.buffer[this.index+3],e,t-this.context.start,r);return i<0?null:new BufferNode(this.context,this,i)}get firstChild(){return this.child(1,0,4)}get lastChild(){return this.child(-1,0,4)}childAfter(e){return this.child(1,e,2)}childBefore(e){return this.child(-1,e,-2)}enter(e,t,r=0){if(r&s.ExcludeBuffers)return null;let{buffer:n}=this.context;let i=n.findChild(this.index+4,n.buffer[this.index+3],t>0?1:-1,e-this.context.start,t);return i<0?null:new BufferNode(this.context,this,i)}get parent(){return this._parent||this.context.parent.nextSignificantParent()}externalSibling(e){return this._parent?null:this.context.parent.nextChild(this.context.index+e,e,0,4)}get nextSibling(){let{buffer:e}=this.context;let t=e.buffer[this.index+3];return t<(this._parent?e.buffer[this._parent.index+3]:e.buffer.length)?new BufferNode(this.context,this._parent,t):this.externalSibling(1)}get prevSibling(){let{buffer:e}=this.context;let t=this._parent?this._parent.index+4:0;return this.index==t?this.externalSibling(-1):new BufferNode(this.context,this._parent,e.findChild(t,this.index,-1,0,4))}get tree(){return null}toTree(){let e=[],t=[];let{buffer:r}=this.context;let n=this.index+4,i=r.buffer[this.index+3];if(i>n){let s=r.buffer[this.index+1];e.push(r.slice(n,i,s));t.push(0)}return new Tree(this.type,e,t,this.to-this.from)}toString(){return this.context.buffer.childString(this.index)}}function iterStack(e){if(!e.length)return null;let t=0,r=e[0];for(let n=1;n<e.length;n++){let i=e[n];if(i.from>r.from||i.to<r.to){r=i;t=n}}let n=r instanceof TreeNode&&r.index<0?null:r.parent;let i=e.slice();n?i[t]=n:i.splice(t,1);return new StackIterator(i,r)}class StackIterator{constructor(e,t){this.heads=e;this.node=t}get next(){return iterStack(this.heads)}}function stackIterator(e,t,r){let n=e.resolveInner(t,r),i=null;for(let e=n instanceof TreeNode?n:n.context.parent;e;e=e.parent)if(e.index<0){let s=e.parent;(i||(i=[n])).push(s.resolve(t,r));e=s}else{let s=MountedTree.get(e.tree);if(s&&s.overlay&&s.overlay[0].from<=t&&s.overlay[s.overlay.length-1].to>=t){let o=new TreeNode(s.tree,s.overlay[0].from+e.from,-1,e);(i||(i=[n])).push(resolveNode(o,t,r,false))}}return i?iterStack(i):n}class TreeCursor{get name(){return this.type.name}constructor(e,t=0){this.mode=t;this.buffer=null;this.stack=[];this.index=0;this.bufferNode=null;if(e instanceof TreeNode)this.yieldNode(e);else{this._tree=e.context.parent;this.buffer=e.context;for(let t=e._parent;t;t=t._parent)this.stack.unshift(t.index);this.bufferNode=e;this.yieldBuf(e.index)}}yieldNode(e){if(!e)return false;this._tree=e;this.type=e.type;this.from=e.from;this.to=e.to;return true}yieldBuf(e,t){this.index=e;let{start:r,buffer:n}=this.buffer;this.type=t||n.set.types[n.buffer[e]];this.from=r+n.buffer[e+1];this.to=r+n.buffer[e+2];return true}yield(e){if(!e)return false;if(e instanceof TreeNode){this.buffer=null;return this.yieldNode(e)}this.buffer=e.context;return this.yieldBuf(e.index,e.type)}toString(){return this.buffer?this.buffer.buffer.childString(this.index):this._tree.toString()}enterChild(e,t,r){if(!this.buffer)return this.yield(this._tree.nextChild(e<0?this._tree._tree.children.length-1:0,e,t,r,this.mode));let{buffer:n}=this.buffer;let i=n.findChild(this.index+4,n.buffer[this.index+3],e,t-this.buffer.start,r);if(i<0)return false;this.stack.push(this.index);return this.yieldBuf(i)}firstChild(){return this.enterChild(1,0,4)}lastChild(){return this.enterChild(-1,0,4)}childAfter(e){return this.enterChild(1,e,2)}childBefore(e){return this.enterChild(-1,e,-2)}enter(e,t,r=this.mode){return this.buffer?!(r&s.ExcludeBuffers)&&this.enterChild(1,e,t):this.yield(this._tree.enter(e,t,r))}parent(){if(!this.buffer)return this.yieldNode(this.mode&s.IncludeAnonymous?this._tree._parent:this._tree.parent);if(this.stack.length)return this.yieldBuf(this.stack.pop());let e=this.mode&s.IncludeAnonymous?this.buffer.parent:this.buffer.parent.nextSignificantParent();this.buffer=null;return this.yieldNode(e)}sibling(e){if(!this.buffer)return!!this._tree._parent&&this.yield(this._tree.index<0?null:this._tree._parent.nextChild(this._tree.index+e,e,0,4,this.mode));let{buffer:t}=this.buffer,r=this.stack.length-1;if(e<0){let e=r<0?0:this.stack[r]+4;if(this.index!=e)return this.yieldBuf(t.findChild(e,this.index,-1,0,4))}else{let e=t.buffer[this.index+3];if(e<(r<0?t.buffer.length:t.buffer[this.stack[r]+3]))return this.yieldBuf(e)}return r<0&&this.yield(this.buffer.parent.nextChild(this.buffer.index+e,e,0,4,this.mode))}nextSibling(){return this.sibling(1)}prevSibling(){return this.sibling(-1)}atLastNode(e){let t,r,{buffer:n}=this;if(n){if(e>0){if(this.index<n.buffer.buffer.length)return false}else for(let e=0;e<this.index;e++)if(n.buffer.buffer[e+3]<this.index)return false;({index:t,parent:r}=n)}else({index:t,_parent:r}=this._tree);for(;r;({index:t,_parent:r}=r))if(t>-1)for(let n=t+e,i=e<0?-1:r._tree.children.length;n!=i;n+=e){let e=r._tree.children[n];if(this.mode&s.IncludeAnonymous||e instanceof TreeBuffer||!e.type.isAnonymous||hasChild(e))return false}return true}move(e,t){if(t&&this.enterChild(e,0,4))return true;for(;;){if(this.sibling(e))return true;if(this.atLastNode(e)||!this.parent())return false}}next(e=true){return this.move(1,e)}prev(e=true){return this.move(-1,e)}moveTo(e,t=0){while(this.from==this.to||(t<1?this.from>=e:this.from>e)||(t>-1?this.to<=e:this.to<e))if(!this.parent())break;while(this.enterChild(1,e,t));return this}get node(){if(!this.buffer)return this._tree;let e=this.bufferNode,t=null,r=0;if(e&&e.context==this.buffer)e:for(let n=this.index,i=this.stack.length;i>=0;){for(let s=e;s;s=s._parent)if(s.index==n){if(n==this.index)return s;t=s;r=i+1;break e}n=this.stack[--i]}for(let e=r;e<this.stack.length;e++)t=new BufferNode(this.buffer,t,this.stack[e]);return this.bufferNode=new BufferNode(this.buffer,t,this.index)}get tree(){return this.buffer?null:this._tree._tree}iterate(e,t){for(let r=0;;){let n=false;if(this.type.isAnonymous||e(this)!==false){if(this.firstChild()){r++;continue}this.type.isAnonymous||(n=true)}for(;;){n&&t&&t(this);n=this.type.isAnonymous;if(this.nextSibling())break;if(!r)return;this.parent();r--;n=true}}}matchContext(e){if(!this.buffer)return matchNodeContext(this.node,e);let{buffer:t}=this.buffer,{types:r}=t.set;for(let n=e.length-1,i=this.stack.length-1;n>=0;i--){if(i<0)return matchNodeContext(this.node,e,n);let s=r[t.buffer[this.stack[i]]];if(!s.isAnonymous){if(e[n]&&e[n]!=s.name)return false;n--}}return true}}function hasChild(e){return e.children.some((e=>e instanceof TreeBuffer||!e.type.isAnonymous||hasChild(e)))}function buildTree(t){var r;let{buffer:n,nodeSet:i,maxBufferLength:s=e,reused:o=[],minRepeatType:l=i.types.length}=t;let f=Array.isArray(n)?new FlatBufferCursor(n,n.length):n;let h=i.types;let u=0,a=0;function takeNode(e,t,r,n,d,p){let{id:c,start:g,end:m,size:x}=f;let y=a;while(x<0){f.next();if(x==-1){let t=o[c];r.push(t);n.push(g-e);return}if(x==-3){u=c;return}if(x==-4){a=c;return}throw new RangeError(`Unrecognized record size: ${x}`)}let b,N,w=h[c];let v=g-e;if(m-g<=s&&(N=findBufferSize(f.pos-t,d))){let t=new Uint16Array(N.size-N.skip);let r=f.pos-N.size,n=t.length;while(f.pos>r)n=copyToBuffer(N.start,t,n);b=new TreeBuffer(t,m-N.start,i);v=N.start-e}else{let e=f.pos-x;f.next();let t=[],r=[];let n=c>=l?c:-1;let i=0,o=m;while(f.pos>e)if(n>=0&&f.id==n&&f.size>=0){if(f.end<=o-s){makeRepeatLeaf(t,r,g,i,f.end,o,n,y);i=t.length;o=f.end}f.next()}else p>2500?takeFlatNode(g,e,t,r):takeNode(g,e,t,r,n,p+1);n>=0&&i>0&&i<t.length&&makeRepeatLeaf(t,r,g,i,g,o,n,y);t.reverse();r.reverse();if(n>-1&&i>0){let e=makeBalanced(w);b=balanceRange(w,t,r,0,t.length,0,m-g,e,e)}else b=makeTree(w,t,r,m-g,y-m)}r.push(b);n.push(v)}function takeFlatNode(e,t,r,n){let o=[];let l=0,h=-1;while(f.pos>t){let{id:e,start:t,end:r,size:n}=f;if(n>4)f.next();else{if(h>-1&&t<h)break;h<0&&(h=r-s);o.push(e,t,r);l++;f.next()}}if(l){let t=new Uint16Array(l*4);let s=o[o.length-2];for(let e=o.length-3,r=0;e>=0;e-=3){t[r++]=o[e];t[r++]=o[e+1]-s;t[r++]=o[e+2]-s;t[r++]=r}r.push(new TreeBuffer(t,o[2]-s,i));n.push(s-e)}}function makeBalanced(e){return(t,r,n)=>{let i,s,o=0,l=t.length-1;if(l>=0&&(i=t[l])instanceof Tree){if(!l&&i.type==e&&i.length==n)return i;(s=i.prop(NodeProp.lookAhead))&&(o=r[l]+i.length+s)}return makeTree(e,t,r,n,o)}}function makeRepeatLeaf(e,t,r,n,s,o,l,f){let h=[],u=[];while(e.length>n){h.push(e.pop());u.push(t.pop()+r-s)}e.push(makeTree(i.types[l],h,u,o-s,f-o));t.push(s-r)}function makeTree(e,t,r,n,i=0,s){if(u){let e=[NodeProp.contextHash,u];s=s?[e].concat(s):[e]}if(i>25){let e=[NodeProp.lookAhead,i];s=s?[e].concat(s):[e]}return new Tree(e,t,r,n,s)}function findBufferSize(e,t){let r=f.fork();let n=0,i=0,o=0,h=r.end-s;let u={size:0,start:0,skip:0};e:for(let s=r.pos-e;r.pos>s;){let e=r.size;if(r.id==t&&e>=0){u.size=n;u.start=i;u.skip=o;o+=4;n+=4;r.next();continue}let f=r.pos-e;if(e<0||f<s||r.start<h)break;let a=r.id>=l?4:0;let d=r.start;r.next();while(r.pos>f){if(r.size<0){if(r.size!=-3)break e;a+=4}else r.id>=l&&(a+=4);r.next()}i=d;n+=e;o+=a}if(t<0||n==e){u.size=n;u.start=i;u.skip=o}return u.size>4?u:void 0}function copyToBuffer(e,t,r){let{id:n,start:i,end:s,size:o}=f;f.next();if(o>=0&&n<l){let l=r;if(o>4){let n=f.pos-(o-4);while(f.pos>n)r=copyToBuffer(e,t,r)}t[--r]=l;t[--r]=s-e;t[--r]=i-e;t[--r]=n}else o==-3?u=n:o==-4&&(a=n);return r}let d=[],p=[];while(f.pos>0)takeNode(t.start||0,t.bufferStart||0,d,p,-1,0);let c=(r=t.length)!==null&&r!==void 0?r:d.length?p[0]+d[0].length:0;return new Tree(h[t.topID],d.reverse(),p.reverse(),c)}const o=new WeakMap;function nodeSize(e,t){if(!e.isAnonymous||t instanceof TreeBuffer||t.type!=e)return 1;let r=o.get(t);if(r==null){r=1;for(let n of t.children){if(n.type!=e||!(n instanceof Tree)){r=1;break}r+=nodeSize(e,n)}o.set(t,r)}return r}function balanceRange(e,t,r,n,i,s,o,l,f){let h=0;for(let r=n;r<i;r++)h+=nodeSize(e,t[r]);let u=Math.ceil(h*1.5/8);let a=[],d=[];function divide(t,r,n,i,o){for(let l=n;l<i;){let n=l,h=r[l],p=nodeSize(e,t[l]);l++;for(;l<i;l++){let r=nodeSize(e,t[l]);if(p+r>=u)break;p+=r}if(l==n+1){if(p>u){let e=t[n];divide(e.children,e.positions,0,e.children.length,r[n]+o);continue}a.push(t[n])}else{let i=r[l-1]+t[l-1].length-h;a.push(balanceRange(e,t,r,n,l,h,i,null,f))}d.push(h+o-s)}}divide(t,r,n,i,0);return(l||f)(a,d,o)}class NodeWeakMap{constructor(){this.map=new WeakMap}setBuffer(e,t,r){let n=this.map.get(e);n||this.map.set(e,n=new Map);n.set(t,r)}getBuffer(e,t){let r=this.map.get(e);return r&&r.get(t)}set(e,t){e instanceof BufferNode?this.setBuffer(e.context.buffer,e.index,t):e instanceof TreeNode&&this.map.set(e.tree,t)}get(e){return e instanceof BufferNode?this.getBuffer(e.context.buffer,e.index):e instanceof TreeNode?this.map.get(e.tree):void 0}cursorSet(e,t){e.buffer?this.setBuffer(e.buffer.buffer,e.index,t):this.map.set(e.tree,t)}cursorGet(e){return e.buffer?this.getBuffer(e.buffer.buffer,e.index):this.map.get(e.tree)}}class TreeFragment{constructor(e,t,r,n,i=false,s=false){this.from=e;this.to=t;this.tree=r;this.offset=n;this.open=(i?1:0)|(s?2:0)}get openStart(){return(this.open&1)>0}get openEnd(){return(this.open&2)>0}static addTree(e,t=[],r=false){let n=[new TreeFragment(0,e.length,e,0,false,r)];for(let r of t)r.to>e.length&&n.push(r);return n}static applyChanges(e,t,r=128){if(!t.length)return e;let n=[];let i=1,s=e.length?e[0]:null;for(let o=0,l=0,f=0;;o++){let h=o<t.length?t[o]:null;let u=h?h.fromA:1e9;if(u-l>=r)while(s&&s.from<u){let t=s;if(l>=t.from||u<=t.to||f){let e=Math.max(t.from,l)-f,r=Math.min(t.to,u)-f;t=e>=r?null:new TreeFragment(e,r,t.tree,t.offset+f,o>0,!!h)}t&&n.push(t);if(s.to>u)break;s=i<e.length?e[i++]:null}if(!h)break;l=h.toA;f=h.toA-h.toB}return n}}class Parser{startParse(e,t,r){typeof e=="string"&&(e=new StringInput(e));r=r?r.length?r.map((e=>new Range(e.from,e.to))):[new Range(0,0)]:[new Range(0,e.length)];return this.createParse(e,t||[],r)}parse(e,t,r){let n=this.startParse(e,t,r);for(;;){let e=n.advance();if(e)return e}}}class StringInput{constructor(e){this.string=e}get length(){return this.string.length}chunk(e){return this.string.slice(e)}get lineChunks(){return false}read(e,t){return this.string.slice(e,t)}}function parseMixed(e){return(t,r,n,i)=>new MixedParse(t,e,r,n,i)}class InnerParse{constructor(e,t,r,n,i){this.parser=e;this.parse=t;this.overlay=r;this.target=n;this.from=i}}function checkRanges(e){if(!e.length||e.some((e=>e.from>=e.to)))throw new RangeError("Invalid inner parse ranges given: "+JSON.stringify(e))}class ActiveOverlay{constructor(e,t,r,n,i,s,o){this.parser=e;this.predicate=t;this.mounts=r;this.index=n;this.start=i;this.target=s;this.prev=o;this.depth=0;this.ranges=[]}}const l=new NodeProp({perNode:true});class MixedParse{constructor(e,t,r,n,i){this.nest=t;this.input=r;this.fragments=n;this.ranges=i;this.inner=[];this.innerDone=0;this.baseTree=null;this.stoppedAt=null;this.baseParse=e}advance(){if(this.baseParse){let e=this.baseParse.advance();if(!e)return null;this.baseParse=null;this.baseTree=e;this.startInner();if(this.stoppedAt!=null)for(let e of this.inner)e.parse.stopAt(this.stoppedAt)}if(this.innerDone==this.inner.length){let e=this.baseTree;this.stoppedAt!=null&&(e=new Tree(e.type,e.children,e.positions,e.length,e.propValues.concat([[l,this.stoppedAt]])));return e}let e=this.inner[this.innerDone],t=e.parse.advance();if(t){this.innerDone++;let r=Object.assign(Object.create(null),e.target.props);r[NodeProp.mounted.id]=new MountedTree(t,e.overlay,e.parser);e.target.props=r}return null}get parsedPos(){if(this.baseParse)return 0;let e=this.input.length;for(let t=this.innerDone;t<this.inner.length;t++)this.inner[t].from<e&&(e=Math.min(e,this.inner[t].parse.parsedPos));return e}stopAt(e){this.stoppedAt=e;if(this.baseParse)this.baseParse.stopAt(e);else for(let t=this.innerDone;t<this.inner.length;t++)this.inner[t].parse.stopAt(e)}startInner(){let e=new FragmentCursor(this.fragments);let t=null;let r=null;let n=new TreeCursor(new TreeNode(this.baseTree,this.ranges[0].from,0,null),s.IncludeAnonymous|s.IgnoreMounts);e:for(let i,s;;){let o,l=true;if(this.stoppedAt!=null&&n.from>=this.stoppedAt)l=false;else if(e.hasNode(n)){if(t){let e=t.mounts.find((e=>e.frag.from<=n.from&&e.frag.to>=n.to&&e.mount.overlay));if(e)for(let r of e.mount.overlay){let i=r.from+e.pos,s=r.to+e.pos;i>=n.from&&s<=n.to&&!t.ranges.some((e=>e.from<s&&e.to>i))&&t.ranges.push({from:i,to:s})}}l=false}else if(r&&(s=checkCover(r.ranges,n.from,n.to)))l=s!=2;else if(!n.type.isAnonymous&&(i=this.nest(n,this.input))&&(n.from<n.to||!i.overlay)){n.tree||materialize(n);let s=e.findMounts(n.from,i.parser);if(typeof i.overlay=="function")t=new ActiveOverlay(i.parser,i.overlay,s,this.inner.length,n.from,n.tree,t);else{let e=punchRanges(this.ranges,i.overlay||(n.from<n.to?[new Range(n.from,n.to)]:[]));e.length&&checkRanges(e);!e.length&&i.overlay||this.inner.push(new InnerParse(i.parser,e.length?i.parser.startParse(this.input,enterFragments(s,e),e):i.parser.startParse(""),i.overlay?i.overlay.map((e=>new Range(e.from-n.from,e.to-n.from))):null,n.tree,e.length?e[0].from:n.from));i.overlay?e.length&&(r={ranges:e,depth:0,prev:r}):l=false}}else if(t&&(o=t.predicate(n))){o===true&&(o=new Range(n.from,n.to));o.from<o.to&&t.ranges.push(o)}if(l&&n.firstChild()){t&&t.depth++;r&&r.depth++}else for(;;){if(n.nextSibling())break;if(!n.parent())break e;if(t&&! --t.depth){let e=punchRanges(this.ranges,t.ranges);if(e.length){checkRanges(e);this.inner.splice(t.index,0,new InnerParse(t.parser,t.parser.startParse(this.input,enterFragments(t.mounts,e),e),t.ranges.map((e=>new Range(e.from-t.start,e.to-t.start))),t.target,e[0].from))}t=t.prev}r&&! --r.depth&&(r=r.prev)}}}}function checkCover(e,t,r){for(let n of e){if(n.from>=r)break;if(n.to>t)return n.from<=t&&n.to>=r?2:1}return 0}function sliceBuf(e,t,r,n,i,s){if(t<r){let o=e.buffer[t+1];n.push(e.slice(t,r,o));i.push(o-s)}}function materialize(e){let{node:t}=e,r=[];let n=t.context.buffer;do{r.push(e.index);e.parent()}while(!e.tree);let i=e.tree,s=i.children.indexOf(n);let o=i.children[s],l=o.buffer,f=[s];function split(e,n,i,s,h,u){let a=r[u];let d=[],p=[];sliceBuf(o,e,a,d,p,s);let c=l[a+1],g=l[a+2];f.push(d.length);let m=u?split(a+4,l[a+3],o.set.types[l[a]],c,g-c,u-1):t.toTree();d.push(m);p.push(c-s);sliceBuf(o,l[a+3],n,d,p,s);return new Tree(i,d,p,h)}i.children[s]=split(0,l.length,NodeType.none,0,o.length,r.length-1);for(let t of f){let r=e.tree.children[t],n=e.tree.positions[t];e.yield(new TreeNode(r,n+e.from,t,e._tree))}}class StructureCursor{constructor(e,t){this.offset=t;this.done=false;this.cursor=e.cursor(s.IncludeAnonymous|s.IgnoreMounts)}moveTo(e){let{cursor:t}=this,r=e-this.offset;while(!this.done&&t.from<r)t.to>=e&&t.enter(r,1,s.IgnoreOverlays|s.ExcludeBuffers)||t.next(false)||(this.done=true)}hasNode(e){this.moveTo(e.from);if(!this.done&&this.cursor.from+this.offset==e.from&&this.cursor.tree)for(let t=this.cursor.tree;;){if(t==e.tree)return true;if(!(t.children.length&&t.positions[0]==0&&t.children[0]instanceof Tree))break;t=t.children[0]}return false}}class FragmentCursor{constructor(e){var t;this.fragments=e;this.curTo=0;this.fragI=0;if(e.length){let r=this.curFrag=e[0];this.curTo=(t=r.tree.prop(l))!==null&&t!==void 0?t:r.to;this.inner=new StructureCursor(r.tree,-r.offset)}else this.curFrag=this.inner=null}hasNode(e){while(this.curFrag&&e.from>=this.curTo)this.nextFrag();return this.curFrag&&this.curFrag.from<=e.from&&this.curTo>=e.to&&this.inner.hasNode(e)}nextFrag(){var e;this.fragI++;if(this.fragI==this.fragments.length)this.curFrag=this.inner=null;else{let t=this.curFrag=this.fragments[this.fragI];this.curTo=(e=t.tree.prop(l))!==null&&e!==void 0?e:t.to;this.inner=new StructureCursor(t.tree,-t.offset)}}findMounts(e,t){var r;let n=[];if(this.inner){this.inner.cursor.moveTo(e,1);for(let e=this.inner.cursor.node;e;e=e.parent){let i=(r=e.tree)===null||r===void 0?void 0:r.prop(NodeProp.mounted);if(i&&i.parser==t)for(let t=this.fragI;t<this.fragments.length;t++){let r=this.fragments[t];if(r.from>=e.to)break;r.tree==this.curFrag.tree&&n.push({frag:r,pos:e.from-r.offset,mount:i})}}}return n}}function punchRanges(e,t){let r=null,n=t;for(let i=1,s=0;i<e.length;i++){let o=e[i-1].to,l=e[i].from;for(;s<n.length;s++){let e=n[s];if(e.from>=l)break;if(!(e.to<=o)){r||(n=r=t.slice());if(e.from<o){r[s]=new Range(e.from,o);e.to>l&&r.splice(s+1,0,new Range(l,e.to))}else e.to>l?r[s--]=new Range(l,e.to):r.splice(s--,1)}}}return n}function findCoverChanges(e,t,r,n){let i=0,s=0,o=false,l=false,f=-1e9;let h=[];for(;;){let u=i==e.length?1e9:o?e[i].to:e[i].from;let a=s==t.length?1e9:l?t[s].to:t[s].from;if(o!=l){let e=Math.max(f,r),t=Math.min(u,a,n);e<t&&h.push(new Range(e,t))}f=Math.min(u,a);if(f==1e9)break;if(u==f)if(o){o=false;i++}else o=true;if(a==f)if(l){l=false;s++}else l=true}return h}function enterFragments(e,t){let r=[];for(let{pos:n,mount:i,frag:s}of e){let e=n+(i.overlay?i.overlay[0].from:0),o=e+i.tree.length;let l=Math.max(s.from,e),f=Math.min(s.to,o);if(i.overlay){let o=i.overlay.map((e=>new Range(e.from+n,e.to+n)));let h=findCoverChanges(t,o,l,f);for(let t=0,n=l;;t++){let o=t==h.length,l=o?f:h[t].from;l>n&&r.push(new TreeFragment(n,l,i.tree,-e,s.from>=n||s.openStart,s.to<=l||s.openEnd));if(o)break;n=h[t].to}}else r.push(new TreeFragment(l,f,i.tree,-e,s.from>=e||s.openStart,s.to<=o||s.openEnd))}return r}export{e as DefaultBufferLength,s as IterMode,MountedTree,NodeProp,NodeSet,NodeType,NodeWeakMap,Parser,Tree,TreeBuffer,TreeCursor,TreeFragment,parseMixed};

