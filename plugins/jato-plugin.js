(function(){"use strict";var st=document.createElement("style");st.textContent=`:root{--jato-background-color: white;--jato-color: #191919;--jato-divider-color: #e9e9e9;--jato-font-name: "Roboto";--jato-font-style: "normal";--jato-font-weight: "normal";--jato-explainer-color: #444;--jato-explainer-font-size: 14px;--jato-explainer-footer-icon-color: #8c8c8c;--jato-explainer-footer-icon-size: 16px;--jato-explainer-footer-logo-color: #444;--jato-explainer-footer-text-color: #19191980;--jato-explainer-line-height: 19px;--jato-metric-color: #c40005;--jato-metric-font-size: 14px;--jato-metric-footer-color: #191919;--jato-metric-footer-font-size: 11px;--jato-metric-footer-line-height: 15px;--jato-metric-header-color: #444;--jato-metric-header-font-size: 10px;--jato-metric-header-line-height: 14px;--jato-metric-line-height: 19px;--jato-metric-percentage-color: #1f2424;--jato-metric-percentage-font-size: 11px;--jato-metric-uptake-bar-background-color: #d9d9d9;--jato-metric-uptake-bar-color: #666;--jato-nav-background-color: transparent;--jato-nav-border-color: #0000001a;--jato-nav-color: #444;--jato-nav-hover-background-color: #ededed;--jato-skeleton-animation-delay: 1s;--jato-skeleton-color: #ededed;--jato-svg-color: #444;--jato-svg-height: 48px;--jato-svg-width: 48px}
`,document.head.appendChild(st);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=window,F=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,V=Symbol(),nt=new WeakMap;let it=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==V)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(F&&t===void 0){const o=e!==void 0&&e.length===1;o&&(t=nt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&nt.set(e,t))}return t}toString(){return this.cssText}};const Pt=s=>new it(typeof s=="string"?s:s+"",void 0,V),B=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((o,n,i)=>o+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+s[i+1],s[0]);return new it(e,s,V)},Tt=(s,t)=>{F?s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const o=document.createElement("style"),n=H.litNonce;n!==void 0&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o)})},rt=F?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return Pt(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var D;const U=window,at=U.trustedTypes,Ht=at?at.emptyScript:"",lt=U.reactiveElementPolyfillSupport,I={toAttribute(s,t){switch(t){case Boolean:s=s?Ht:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},ct=(s,t)=>t!==s&&(t==t||s==s),Z={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:ct},W="finalized";let w=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,o)=>{const n=this._$Ep(o,e);n!==void 0&&(this._$Ev.set(n,o),t.push(n))}),t}static createProperty(t,e=Z){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,o,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(n){const i=this[t];this[e]=n,this.requestUpdate(t,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Z}static finalize(){if(this.hasOwnProperty(W))return!1;this[W]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,o=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of o)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const n of o)e.unshift(rt(n))}else t!==void 0&&e.push(rt(t));return e}static _$Ep(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,o;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Tt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostConnected)===null||o===void 0?void 0:o.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostDisconnected)===null||o===void 0?void 0:o.call(e)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e,o=Z){var n;const i=this.constructor._$Ep(t,o);if(i!==void 0&&o.reflect===!0){const r=(((n=o.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?o.converter:I).toAttribute(e,o.type);this._$El=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$El=null}}_$AK(t,e){var o;const n=this.constructor,i=n._$Ev.get(t);if(i!==void 0&&this._$El!==i){const r=n.getPropertyOptions(i),c=typeof r.converter=="function"?{fromAttribute:r.converter}:((o=r.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?r.converter:I;this._$El=i,this[i]=c.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,o){let n=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||ct)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),o.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,i)=>this[i]=n),this._$Ei=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var i;return(i=n.hostUpdate)===null||i===void 0?void 0:i.call(n)}),this.update(o)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(o=>{var n;return(n=o.hostUpdated)===null||n===void 0?void 0:n.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,o)=>this._$EO(o,this[o],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};w[W]=!0,w.elementProperties=new Map,w.elementStyles=[],w.shadowRootOptions={mode:"open"},lt==null||lt({ReactiveElement:w}),((D=U.reactiveElementVersions)!==null&&D!==void 0?D:U.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var K;const z=window,k=z.trustedTypes,ht=k?k.createPolicy("lit-html",{createHTML:s=>s}):void 0,q="$lit$",y=`lit$${(Math.random()+"").slice(9)}$`,pt="?"+y,Ut=`<${pt}>`,b=document,S=()=>b.createComment(""),O=s=>s===null||typeof s!="object"&&typeof s!="function",dt=Array.isArray,zt=s=>dt(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",J=`[ 	
\f\r]`,M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ut=/-->/g,gt=/>/g,$=RegExp(`>|${J}(?:([^\\s"'>=/]+)(${J}*=${J}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),mt=/'/g,vt=/"/g,ft=/^(?:script|style|textarea|title)$/i,Nt=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),g=Nt(1),A=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),yt=new WeakMap,x=b.createTreeWalker(b,129,null,!1);function bt(s,t){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return ht!==void 0?ht.createHTML(t):t}const Rt=(s,t)=>{const e=s.length-1,o=[];let n,i=t===2?"<svg>":"",r=M;for(let c=0;c<e;c++){const a=s[c];let l,p,h=-1,d=0;for(;d<a.length&&(r.lastIndex=d,p=r.exec(a),p!==null);)d=r.lastIndex,r===M?p[1]==="!--"?r=ut:p[1]!==void 0?r=gt:p[2]!==void 0?(ft.test(p[2])&&(n=RegExp("</"+p[2],"g")),r=$):p[3]!==void 0&&(r=$):r===$?p[0]===">"?(r=n??M,h=-1):p[1]===void 0?h=-2:(h=r.lastIndex-p[2].length,l=p[1],r=p[3]===void 0?$:p[3]==='"'?vt:mt):r===vt||r===mt?r=$:r===ut||r===gt?r=M:(r=$,n=void 0);const m=r===$&&s[c+1].startsWith("/>")?" ":"";i+=r===M?a+Ut:h>=0?(o.push(l),a.slice(0,h)+q+a.slice(h)+y+m):a+y+(h===-2?(o.push(void 0),c):m)}return[bt(s,i+(s[e]||"<?>")+(t===2?"</svg>":"")),o]};class L{constructor({strings:t,_$litType$:e},o){let n;this.parts=[];let i=0,r=0;const c=t.length-1,a=this.parts,[l,p]=Rt(t,e);if(this.el=L.createElement(l,o),x.currentNode=this.el.content,e===2){const h=this.el.content,d=h.firstChild;d.remove(),h.append(...d.childNodes)}for(;(n=x.nextNode())!==null&&a.length<c;){if(n.nodeType===1){if(n.hasAttributes()){const h=[];for(const d of n.getAttributeNames())if(d.endsWith(q)||d.startsWith(y)){const m=p[r++];if(h.push(d),m!==void 0){const ot=n.getAttribute(m.toLowerCase()+q).split(y),C=/([.?@])?(.*)/.exec(m);a.push({type:1,index:i,name:C[2],strings:ot,ctor:C[1]==="."?Vt:C[1]==="?"?Dt:C[1]==="@"?It:N})}else a.push({type:6,index:i})}for(const d of h)n.removeAttribute(d)}if(ft.test(n.tagName)){const h=n.textContent.split(y),d=h.length-1;if(d>0){n.textContent=k?k.emptyScript:"";for(let m=0;m<d;m++)n.append(h[m],S()),x.nextNode(),a.push({type:2,index:++i});n.append(h[d],S())}}}else if(n.nodeType===8)if(n.data===pt)a.push({type:2,index:i});else{let h=-1;for(;(h=n.data.indexOf(y,h+1))!==-1;)a.push({type:7,index:i}),h+=y.length-1}i++}}static createElement(t,e){const o=b.createElement("template");return o.innerHTML=t,o}}function j(s,t,e=s,o){var n,i,r,c;if(t===A)return t;let a=o!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[o]:e._$Cl;const l=O(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((i=a==null?void 0:a._$AO)===null||i===void 0||i.call(a,!1),l===void 0?a=void 0:(a=new l(s),a._$AT(s,e,o)),o!==void 0?((r=(c=e)._$Co)!==null&&r!==void 0?r:c._$Co=[])[o]=a:e._$Cl=a),a!==void 0&&(t=j(s,a._$AS(s,t.values),a,o)),t}class Ft{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:o},parts:n}=this._$AD,i=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:b).importNode(o,!0);x.currentNode=i;let r=x.nextNode(),c=0,a=0,l=n[0];for(;l!==void 0;){if(c===l.index){let p;l.type===2?p=new P(r,r.nextSibling,this,t):l.type===1?p=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(p=new Zt(r,this,t)),this._$AV.push(p),l=n[++a]}c!==(l==null?void 0:l.index)&&(r=x.nextNode(),c++)}return x.currentNode=b,i}v(t){let e=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class P{constructor(t,e,o,n){var i;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=n,this._$Cp=(i=n==null?void 0:n.isConnected)===null||i===void 0||i}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=j(this,t,e),O(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==A&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):zt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==u&&O(this._$AH)?this._$AA.nextSibling.data=t:this.$(b.createTextNode(t)),this._$AH=t}g(t){var e;const{values:o,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=L.createElement(bt(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===i)this._$AH.v(o);else{const r=new Ft(i,this),c=r.u(this.options);r.v(o),this.$(c),this._$AH=r}}_$AC(t){let e=yt.get(t.strings);return e===void 0&&yt.set(t.strings,e=new L(t)),e}T(t){dt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,n=0;for(const i of t)n===e.length?e.push(o=new P(this.k(S()),this.k(S()),this,this.options)):o=e[n],o._$AI(i),n++;n<e.length&&(this._$AR(o&&o._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class N{constructor(t,e,o,n,i){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,n){const i=this.strings;let r=!1;if(i===void 0)t=j(this,t,e,0),r=!O(t)||t!==this._$AH&&t!==A,r&&(this._$AH=t);else{const c=t;let a,l;for(t=i[0],a=0;a<i.length-1;a++)l=j(this,c[o+a],e,a),l===A&&(l=this._$AH[a]),r||(r=!O(l)||l!==this._$AH[a]),l===u?t=u:t!==u&&(t+=(l??"")+i[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Vt extends N{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}const Bt=k?k.emptyScript:"";class Dt extends N{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,Bt):this.element.removeAttribute(this.name)}}class It extends N{constructor(t,e,o,n,i){super(t,e,o,n,i),this.type=5}_$AI(t,e=this){var o;if((t=(o=j(this,t,e,0))!==null&&o!==void 0?o:u)===A)return;const n=this._$AH,i=t===u&&n!==u||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==u&&(n===u||i);i&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;typeof this._$AH=="function"?this._$AH.call((o=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}}class Zt{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){j(this,t)}}const $t=z.litHtmlPolyfillSupport;$t==null||$t(L,P),((K=z.litHtmlVersions)!==null&&K!==void 0?K:z.litHtmlVersions=[]).push("2.8.0");const Wt=(s,t,e)=>{var o,n;const i=(o=e==null?void 0:e.renderBefore)!==null&&o!==void 0?o:t;let r=i._$litPart$;if(r===void 0){const c=(n=e==null?void 0:e.renderBefore)!==null&&n!==void 0?n:null;i._$litPart$=r=new P(t.insertBefore(S(),c),c,void 0,e??{})}return r._$AI(s),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Y,G;class _ extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Wt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return A}}_.finalized=!0,_._$litElement$=!0,(Y=globalThis.litElementHydrateSupport)===null||Y===void 0||Y.call(globalThis,{LitElement:_});const xt=globalThis.litElementPolyfillSupport;xt==null||xt({LitElement:_}),((G=globalThis.litElementVersions)!==null&&G!==void 0?G:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Q=s=>t=>typeof t=="function"?((e,o)=>(customElements.define(e,o),o))(s,t):((e,o)=>{const{kind:n,elements:i}=o;return{kind:n,elements:i,finisher(r){customElements.define(e,r)}}})(s,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kt=(s,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,s)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,s)}},qt=(s,t,e)=>{t.constructor.createProperty(e,s)};function E(s){return(t,e)=>e!==void 0?qt(s,t,e):Kt(s,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Jt(s){return E({...s,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _t=({finisher:s,descriptor:t})=>(e,o)=>{var n;if(o===void 0){const i=(n=e.originalKey)!==null&&n!==void 0?n:e.key,r=t!=null?{kind:"method",placement:"prototype",key:i,descriptor:t(e.key)}:{...e,key:i};return s!=null&&(r.finisher=function(c){s(c,i)}),r}{const i=e.constructor;t!==void 0&&Object.defineProperty(e,o,t(o)),s==null||s(i,o)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Yt(s){return _t({descriptor:t=>({get(){var e,o;return(o=(e=this.renderRoot)===null||e===void 0?void 0:e.querySelectorAll(s))!==null&&o!==void 0?o:[]},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function wt(s){return _t({descriptor:t=>({async get(){var e;return await this.updateComplete,(e=this.renderRoot)===null||e===void 0?void 0:e.querySelector(s)},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var X;((X=window.HTMLSlotElement)===null||X===void 0?void 0:X.prototype.assignedElements)!=null;const Gt=g`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  class="close"
>
  <path
    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
    fill="currentColor"
  />
</svg>`,Qt=g`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  class="info"
>
  <path
    d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm1-5h1v2H10V15h1V11H10V9h3v6Zm0-7H11V6h2Z"
    fill="currentColor"
  />
</svg>`,Xt=g`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="77"
  height="19"
  viewBox="0 0 77 19"
  fill="none"
  class="jato"
>
  <path
    d="M41.75 14.5707H35.1586L34.0202 17.9511H29.7L35.8929 1.04902H40.9133L47.2144 17.9511H42.8656L41.75 14.5707ZM40.6116 11.2861L38.4031 5.17877L36.2686 11.2861H40.6116ZM59.0766 4.57593H54.1871V17.9511H50.1002V4.57593H45.2392V1.04902H59.0766V4.57593ZM60.2662 9.50008C60.2662 4.61536 63.4139 0.919434 68.3432 0.919434C73.2725 0.919434 76.4999 4.61536 76.4999 9.50008C76.4999 14.3848 73.1985 18.0807 68.3432 18.0807C63.3911 18.0807 60.2662 14.3848 60.2662 9.50008ZM72.578 9.50008C72.578 6.68306 70.9103 4.56466 68.3546 4.56466C65.7021 4.56466 64.1994 6.66615 64.1994 9.50008C64.1994 12.334 65.7021 14.4355 68.3546 14.4355C71.007 14.4355 72.5667 12.334 72.5667 9.50008H72.578ZM20.7806 17.5624C21.6379 17.9185 22.5604 18.0949 23.49 18.0807C26.8255 18.0807 28.7437 16.0525 28.7437 12.4974V1.04902H24.6398V12.0805C24.6398 13.551 24.0706 14.2777 22.6419 14.2777C21.9828 14.3232 21.3241 14.1846 20.7407 13.8777L20.7806 17.5624Z"
    fill="#191919"
  />
  <path
    d="M16.6369 1.04883H1.43919C0.920487 1.04883 0.5 1.46503 0.5 1.97844V17.0213C0.5 17.5347 0.920487 17.9509 1.43919 17.9509H16.6369C17.1556 17.9509 17.5761 17.5347 17.5761 17.0213V1.97844C17.5761 1.46503 17.1556 1.04883 16.6369 1.04883Z"
    fill="#444444"
  />
  <path
    d="M10.0513 12.7507H6.693L9.11781 10.1647L1.39941 5.80957L16.7622 9.20689L10.0513 12.7507Z"
    fill="white"
  />
</svg>`,te=g`<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
>
  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
</svg>`,ee=g`<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
>
  <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
</svg>`,oe=g`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="19"
  height="19"
  viewBox="0 0 19 19"
  fill="none"
  class="wing"
>
  <path
    d="M16.6369 1.04883H1.43919C0.920487 1.04883 0.5 1.46503 0.5 1.97844V17.0213C0.5 17.5347 0.920487 17.9509 1.43919 17.9509H16.6369C17.1556 17.9509 17.5761 17.5347 17.5761 17.0213V1.97844C17.5761 1.46503 17.1556 1.04883 16.6369 1.04883Z"
    fill="currentColor"
  />
  <path
    d="M10.0513 12.7507H6.693L9.11781 10.1647L1.39941 5.80957L16.7622 9.20689L10.0513 12.7507Z"
    fill="white"
  />
</svg>`;var se=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,ie=(s,t,e,o)=>{for(var n=o>1?void 0:o?ne(t,e):t,i=s.length-1,r;i>=0;i--)(r=s[i])&&(n=(o?r(t,e,n):r(n))||n);return o&&n&&se(t,e,n),n};let tt=class extends _{render(){return g`
      <section class="root">
        ${Xt}
        <div class="explainer">
          <strong>JATO</strong> is an industry leading
          <strong>market insights provider</strong>. By collecting millions of
          data points globally from trusted manufacturers and dealers, we
          provide <strong>accurate</strong> and
          <strong>reliable</strong> insights to support your
          <strong>purchasing decisions</strong>.
        </div>
      </section>
    `}};tt.styles=B`
    .root {
      align-items: center;
      display: flex;
      flex-direction: column;
    }

    .jato {
      margin: 12px 0 15px 0;
    }

    .explainer {
      color: var(--jato-explainer-color);
      font-size: var(--jato-explainer-font-size);
      line-height: var(--jato-explainer-line-height);
      margin-bottom: 8px;
      max-width: 500px;
    }
  `,tt=ie([Q("jato-explainer")],tt),customElements.define("jato-inject-file",class extends HTMLElement{async connectedCallback(s=this.shadowRoot||this.attachShadow({mode:"open"}),t=this.getAttribute("src")){t&&(s.innerHTML=await(await fetch(t)).text(),this.replaceWith(...s.childNodes))}});const re={icon:{body:"icons/body.svg",colour:"icons/colour.svg",fuel:"icons/fuel.svg",increase:"icons/increase.svg",no1:"icons/no1.svg",option:"icons/option.svg",top1:"icons/top1.svg",top3:"icons/top3.svg",top10:"icons/top10.svg",transmission:"icons/transmission.svg"}},kt=16,At=2*kt+1,T=230,et=32,ae=[{context:["body"],popularity:["top1"],timeFrame:["month1"],header:"Most popular <strong>body style</strong>",footer:"accounting for <strong>{uptake}% of all buyers last month</strong>"},{context:["body"],popularity:["top1"],timeFrame:["month3","month6","month12"],header:"Most popular <strong>body style</strong>",footer:"accounting for <strong>{uptake}% of all buyers</strong> over <strong>last {months} months</strong>"},{context:["colour"],popularity:["top1"],timeFrame:["month1"],header:"Most popular <strong>colour last month</strong>",footer:""},{context:["colour"],popularity:["top1"],timeFrame:["month3","month6","month12"],header:"Most popular <strong>colour</strong> over <strong>last {months} months</strong>",footer:""},{context:["colour"],popularity:["top3"],timeFrame:["month1"],header:"Most popular <strong>colours last month</strong>",footer:""},{context:["colour"],popularity:["top3"],timeFrame:["month3","month6","month12"],header:"Most popular <strong>colours</strong> over <strong>last {months} months</strong>",footer:""},{context:["fuel"],popularity:["top1"],timeFrame:["month1"],header:"Most popular <strong>fuel type</strong>",footer:"accounting for <strong>{uptake}% of all buyers last month</strong>"},{context:["fuel"],popularity:["top1"],timeFrame:["month3","month6","month12"],header:"Most popular <strong>fuel type</strong>",footer:"accounting for <strong>{uptake}% of all buyers</strong> over <strong>last {months} months</strong>"},{context:["market"],popularity:["no1","top3","top10"],timeFrame:["month1"],header:"{popularity} selling model in <strong>market</strong>",footer:"based on <strong>last month's {country} sales</strong>"},{context:["market"],popularity:["no1","top3","top10"],timeFrame:["month3","month6","month12"],header:"{popularity} selling model in <strong>market</strong>",footer:"based on <strong>last {months} month's {country} sales</strong>"},{context:["segment"],popularity:["no1","top3","top10"],timeFrame:["month1"],header:"{popularity} selling <strong>{segment}</strong>",footer:"based on <strong>last month's {country} sales</strong>"},{context:["segment"],popularity:["no1","top3","top10"],timeFrame:["month3","month6","month12"],header:"{popularity} selling <strong>{segment}</strong>",footer:"based on <strong>last {months} month's {country} sales</strong>"},{context:["rising"],popularity:["increase"],timeFrame:["month1"],header:"Rising in <strong>popularity</strong>",footer:"based on <strong>last month's {country} sales</strong>"},{context:["rising"],popularity:["increase"],timeFrame:["month3","month6","month12"],header:"Rising in <strong>popularity</strong>",footer:"based on <strong>last {months} month's {country} sales</strong>"},{context:["rising"],popularity:["increase"],timeFrame:["ytd"],header:"Rising in <strong>popularity</strong>",footer:"based on <strong>{country} sales this year</strong>"},{context:["make"],popularity:["no1"],timeFrame:["month1"],header:"#1 selling <strong>{make}</strong> model",footer:"based on <strong>last month's {country} sales</strong>"},{context:["make"],popularity:["no1"],timeFrame:["month3","month6","month12"],header:"#1 selling <strong>{make}</strong> model",footer:"based on <strong>last {months} month's {country} sales</strong>"},{context:["trim"],popularity:["top1"],timeFrame:["month1"],header:"#1 selling <strong>{model}</strong> trim",footer:"based on <strong>last month's {country} sales</strong>"},{context:["trim"],popularity:["top1"],timeFrame:["month3","month6","month12"],header:"#1 selling <strong>{model}</strong> trim",footer:"based on <strong>last {months} month's {country} sales</strong>"},{context:["option"],popularity:["top3"],timeFrame:["month1"],header:"Top selling <strong>{model}</strong> options",footer:"based on <strong>last month's {country} sales</strong>"},{context:["option"],popularity:["top3"],timeFrame:["month3","month6","month12"],header:"Top selling <strong>{model}</strong> options",footer:"based on <strong>last {months} month's {country} sales</strong>"},{context:["option"],popularity:["top1"],timeFrame:["month1"],header:"Top selling <strong>{model}</strong> option",footer:"based on <strong>last month's {country} sales</strong>"},{context:["option"],popularity:["top1"],timeFrame:["month3","month6","month12"],header:"Top selling <strong>{model}</strong> option",footer:"based on <strong>last {months} month's {country} sales</strong>"},{context:["transmission"],popularity:["top1"],timeFrame:["month1"],header:"Most popular <strong>transmission</strong>",footer:"accounting for <strong>{uptake}% of all buyers last month</strong>"},{context:["transmission"],popularity:["top1"],timeFrame:["month3","month6","month12"],header:"Most popular <strong>transmission</strong>",footer:"accounting for <strong>{uptake}% of all buyers</strong> over <strong>last {months} months</strong>"}],le=["body","colour","fuel","model","option","transmission"];function ce(s){return le.includes(s)}const jt=s=>s?s<1?1:Math.round(s):0,Et=(s,t)=>{const e=n=>!!n&&typeof n=="object"&&!Array.isArray(n),o=Object.assign({},s);return e(s)&&e(t)&&Object.keys(t).forEach(n=>{e(t[n])?n in s?o[n]=Et(s[n],t[n]):Object.assign(o,{[n]:t[n]}):Object.assign(o,{[n]:t[n]})}),o},he=(s,t,e)=>{const{header:o,footer:n}=ae.filter(i=>i.context.includes(s)&&i.popularity.includes(t)&&i.timeFrame.includes(e))[0]||{header:"",footer:""};return{header:o,footer:n}},pe=(s,t,e)=>s===t?s:e,de=s=>{switch(s.toUpperCase()){case"GB":return"UK"}return s.toUpperCase()},ue=s=>{const t=s.match(/\d+/);return t?parseInt(t[0]):0},ge=s=>{switch(s){case"no1":return"No 1";case"top1":return"Top 1";case"top3":return"Top 3";case"top10":return"Top 10";default:return"Increase"}},Ct=(s,t)=>{if(!s)return s;let e=s;for(const[o,n]of Object.entries(t)){const i="g",r=`{${o}}`,c=new RegExp(r,i);e=e.replace(c,(n==null?void 0:n.toString())||"")}return e},me=(s,t)=>{const e=[],o=s.input;return Object.entries(s).forEach(([n,i])=>{var Ot,Mt,Lt;switch(n){case"Body Type":n="body";break;case"Colour":n="colour";break;case"Fuel Type":n="fuel";break;case"Model":n="model";break;case"Option":n="option";break;case"Transmission":n="transmission";break}if((Ot=i.callout)!=null&&Ot.context)switch(i.callout.context){case"Body Type":i.callout.context="body";break;case"Colour":i.callout.context="colour";break;case"Fuel Type":i.callout.context="fuel";break;case"Make":i.callout.context="make";break;case"Market":i.callout.context="market";break;case"Option":i.callout.context="option";break;case"Rising":i.callout.context="rising";break;case"Segment":i.callout.context="segment";break;case"Transmission":i.callout.context="transmission";break;case"Trim":i.callout.context="trim";break}if((Mt=i.callout)!=null&&Mt.popularity)switch(i.callout.popularity){case"Increase %":i.callout.popularity="increase";break;case"No 1":i.callout.popularity="no1";break;case"Top 1":i.callout.popularity="top1";break;case"Top 3":i.callout.popularity="top3";break;case"Top 10":i.callout.popularity="top10";break}if((Lt=i.callout)!=null&&Lt.timeFrame)switch(i.callout.timeFrame){case"1 Month":i.callout.timeFrame="month1";break;case"3 Month":i.callout.timeFrame="month3";break;case"6 Month":i.callout.timeFrame="month6";break;case"12 Month":i.callout.timeFrame="month12";break;case"YTD":i.callout.timeFrame="ytd";break}if(!ce(n)||!(i!=null&&i.callout))return;i.insight===null&&(i.insight=[]);const{callout:{context:r,popularity:c,timeFrame:a},insight:l}=i,p=t.icon[pe(n,r,c)],h={country:de(o.countryCode),make:o.make,model:o.model,months:ue(a),popularity:ge(c),segment:n==="model"&&r==="segment"&&l.length===1?l[0].value:void 0,uptake:l.length===1&&l[0].uptake?jt(l[0].uptake):void 0};let{header:d,footer:m}=he(r,c,a);d=Ct(d,h),m=Ct(m,h);const ot=r==="rising"&&c==="increase"&&["month1","month3","month6","month12","ytd"].includes(a),C=r==="make"&&c==="no1"&&["month1","month3","month6","month12"].includes(a),$e=r==="market"&&["no1","top3","top10"].includes(c)&&["month1","month3","month6","month12"].includes(a);l.length===0&&(C||$e||ot)&&l.push({value:o.model,uptake:null}),l.length===1&&n==="model"&&r==="segment"&&(l[0].value=o.model),e.push({context:r,icon:p,header:d,insight:l,footer:m})}),e};var ve=Object.defineProperty,fe=Object.getOwnPropertyDescriptor,St=(s,t,e,o)=>{for(var n=o>1?void 0:o?fe(t,e):t,i=s.length-1,r;i>=0;i--)(r=s[i])&&(n=(o?r(t,e,n):r(n))||n);return o&&n&&ve(t,e,n),n};let R=class extends _{constructor(){super(...arguments),this.metric=null}render(){function s(t){return t?t<3?3:t:0}return this.metric?g`
      <section class="root">
        <span class="icon">
          <jato-inject-file src=${this.metric.icon}><jato-inject-file>
        </span>
        <div class="content">
          <div class="header" .innerHTML=${this.metric.header}></div>
          <div class="metric">
            ${this.metric.insight.map(({value:t,uptake:e})=>{var n,i;const o=((n=this.metric)==null?void 0:n.context)==="colour"?g`<div class="uptake-container">
                      <div
                        class="uptake-bar"
                        style="width: ${s(e)}%"
                      ></div>
                    </div>`:null;return g`<div>
                  ${t}${((i=this.metric)==null?void 0:i.context)==="colour"?g` <span class="percentage"
                        >(${jt(e)}%)</span
                      >`:""}
                </div>
                ${o}`})}
          </div>
          <div class="footer" .innerHTML=${this.metric.footer}></div>
        </div>
      </section>
    `:g`
        <section class="root">
          <span class="icon skeleton">&nbsp;</span>
          <div class="content">
            <div class="header skeleton">&nbsp;</div>
            <div class="metric">
              <div class="skeleton">&nbsp;</div>
              <div class="skeleton">&nbsp;</div>
              <div class="skeleton">&nbsp;</div>
            </div>
            <div class="footer skeleton">&nbsp;</div>
          </div>
        </section>
      `}};R.styles=B`
    .root {
      display: flex;
      font-size: var(--jato-metric-font-size);
      line-height: var(--jato-metric-line-height);
      width: ${T}px;
    }

    .content {
      width: calc(${T}px - 16px - var(--jato-svg-width));
    }

    .footer {
      color: var(--jato-metric-footer);
      font-size: var(--jato-metric-footer-font-size);
      line-height: var(--jato-metric-footer-line-height);
      margin-top: 8px;
    }

    .header {
      color: var(--jato-metric-header);
      font-size: var(--jato-metric-header-font-size);
      line-height: var(--jato-metric-header-line-height);
      margin-bottom: 8px;
    }

    .icon svg {
      color: var(--jato-svg-color);
      height: var(--jato-svg-height);
      margin-right: 16px;
      width: var(--jato-svg-width);
    }

    .metric {
      color: var(--jato-metric-color);
      font-size: var(--jato-metric-font-size);
      font-weight: bold;
      line-height: var(--jato-metric-line-height);
    }

    .metric div {
      margin-bottom: 8px;
    }

    .metric div:last-of-type {
      margin-bottom: 0;
    }

    .metric .percentage {
      color: var(--jato-metric-percentage-color);
      font-size: var(--jato-metric-percentage-font-size);
      font-weight: 700;
    }

    .metric .uptake-container {
      background-color: var(--jato-metric-uptake-bar-background-color);
      border-radius: 16px;
      height: 12px;
      position: relative;
      width: 100%;
    }

    .metric .uptake-bar {
      background-color: var(--jato-metric-uptake-bar-color);
      border-radius: 16px;
      height: 100%;
      line-height: inherit;
      position: absolute;
    }

    .skeleton {
      animation: var(--jato-skeleton-animation-delay) loading ease-in-out
        infinite;
      background: linear-gradient(
          100deg,
          rgba(255, 255, 255, 0) 40%,
          rgba(255, 255, 255, 0.5) 50%,
          rgba(255, 255, 255, 0) 60%
        )
        var(--jato-skeleton-color);
      background-color: var(--jato-skeleton-color);
      background-position-x: 180%;
      background-size: 200% 100%;
      border-radius: 4px;
      width: calc(${T}px - 64px);
    }

    @keyframes loading {
      to {
        background-position-x: -20%;
      }
    }

    .icon.skeleton {
      animation-delay: 0.02s;
      height: var(--jato-svg-height);
      margin-right: 16px;
      width: var(--jato-svg-width);
      min-height: var(--jato-svg-height);
      min-width: var(--jato-svg-width);
    }

    .header.skeleton {
      animation-delay: 0.04s;
    }

    .metric .skeleton {
      animation-delay: 0.06s;
    }

    .footer.skeleton {
      animation-delay: 0.08s;
    }
  `,St([E({type:Object})],R.prototype,"metric",2),R=St([Q("jato-metric")],R);const xe="";var ye=Object.defineProperty,be=Object.getOwnPropertyDescriptor,f=(s,t,e,o)=>{for(var n=o>1?void 0:o?be(t,e):t,i=s.length-1,r;i>=0;i--)(r=s[i])&&(n=(o?r(t,e,n):r(n))||n);return o&&n&&ye(t,e,n),n};let v=class extends _{constructor(){super(...arguments),this.skeletons=3,this._data=[],this._loading=!0,this._options=re,this._explainerVisible=!1}get data(){return this._data}set data(s){this._loading=s.length===0,this._data=me(s,this.options)}get options(){return this._options}set options(s){this._options=Et(this.options,s)}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.debounce(this._handleResize,100))}disconnectedCallback(){window.removeEventListener("resize",this.debounce(this._handleResize,100)),super.disconnectedCallback()}debounce(s,t){let e=this,o;return()=>{o&&window.clearTimeout(o),o=window.setTimeout(()=>{s.apply(e,arguments),o=null},t)}}_getSkeletons(s){const t=[];for(let e=0;e<s;e++){const o=s>1&&e<s-1?g`<div class="divider">&nbsp;</div>`:"";t.push(g`<jato-metric></jato-metric>${o}`)}return t}_handleResize(){this.requestUpdate()}async _next(){const s=await this.metrics;s.clientWidth+s.scrollLeft<s.scrollWidth?s.scrollBy({left:T+At,behavior:"smooth"}):s.scrollTo({left:0,behavior:"smooth"})}async _prev(){const s=await this.metrics;s.scrollLeft>0?s.scrollBy({behavior:"smooth",left:-(T+At)}):s.scrollTo({behavior:"smooth",left:s.scrollWidth-s.clientWidth})}async _toggleExplainer(s){s instanceof KeyboardEvent&&!["Enter","Space"].includes(s.code)||(this._explainerVisible=!this._explainerVisible,(await this.metrics).classList.toggle("metrics-hide"),(await this.explainer).classList.toggle("explainer-hide"),this._explainerVisible||window.dispatchEvent(new Event("resize")))}async updated(){const s=(await this.metrics).clientWidth,t=(await this.metrics).scrollWidth,e=this.buttons[0].style.display==="flex"?et*2:0;s+e<t&&!this._explainerVisible?this.buttons.forEach(o=>o.style.display="flex"):this.buttons.forEach(o=>o.style.display="none")}render(){return this.style.setProperty("--jato-display",!this.data.length&&!this._loading?"none":"flex"),g`
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />

      <article class="root">
        <div class="explainer explainer-hide">
          <jato-explainer></jato-explainer>
        </div>

        <button @click=${()=>this._prev()}>${ee}</button>
        <div class="metrics">
          ${this.data.length?this.data.map((s,t)=>{const e=this.data.length>1&&t<this.data.length-1?g`<div class="divider">&nbsp;</div>`:"";return g`<jato-metric .metric=${s}></jato-metric
                  >${e}`}):this._getSkeletons(this.skeletons)}
        </div>
        <button @click=${()=>this._next()}>${te}</button>

        <footer
          @click=${s=>this._toggleExplainer(s)}
          @keypress=${s=>this._toggleExplainer(s)}
          tabindex="0"
        >
          ${oe}
          <span class="text">
            Data powered by JATO Dynamics based on UK market trend data
          </span>
          ${this._explainerVisible?Gt:Qt}
        </footer>
      </article>
    `}};v.styles=B`
    :host {
      align-items: center;
      background: var(--jato-background-color);
      border-radius: 6px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.08);
      color: var(--jato-color);
      display: var(--jato-display);
      font-family: var(--jato-font-name);
      font-style: var(--jato-font-style);
      font-weight: var(--jato-font-weight);
      justify-content: center;
      position: relative;
    }

    button {
      align-items: center;
      background-color: var(--jato-nav-background-color);
      border-radius: 50%;
      border: 2px solid var(--jato-nav-border-color);
      color: var(--jato-nav-color);
      cursor: pointer;
      display: 'flex';
      justify-content: center;
      min-height: ${et}px;
      min-width: ${et}px;
    }

    button:hover,
    button:focus {
      background-color: var(--jato-nav-hover-background-color);
    }

    button svg {
      fill: var(--jato-nav-color);
      transform: scale(1.5);
    }

    .root {
      align-items: center;
      display: flex;
      padding: 24px 16px 32px 16px;
      overflow: hidden;
    }

    .divider {
      background-color: var(--jato-divider-color);
      height: auto;
      width: 1px;
    }

    .explainer {
      display: flex;
      opacity: 1;
      transition: visibility 0s linear 0s, opacity 300ms;
      visibility: visible;
    }

    .explainer-hide {
      height: 0;
      opacity: 0;
      visibility: hidden;
      width: 0;
    }

    .metrics {
      display: flex;
      gap: ${kt}px;
      opacity: 1;
      transition: visibility 0s linear 0s, opacity 300ms;
      visibility: visible;
      overflow: scroll;
    }

    .metrics-hide {
      height: 0;
      opacity: 0;
      visibility: hidden;
      width: 0;
    }

    footer {
      align-items: start;
      background: var(--jato-background-color);
      border-radius: 0px 0px 6px 6px;
      bottom: -15px;
      box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.08);
      cursor: pointer;
      display: flex;
      gap: 8px;
      left: 0;
      margin: 0 auto;
      max-width: calc(100% - 40px);
      padding: 5px 8px 5px 10px;
      position: absolute;
      right: 0;
      width: fit-content;
    }

    footer .close,
    footer .info {
      color: var(--jato-explainer-footer-icon-color);
      height: var(--jato-explainer-footer-icon-size);
      width: var(--jato-explainer-footer-icon-size);
    }

    footer .text {
      color: var(--jato-explainer-footer-text-color);
      font-size: 10px;
      font-weight: 400;
      padding-top: 3px;
      text-align: center;
    }

    footer .wing {
      color: var(--jato-explainer-footer-logo-color);
      height: var(--jato-explainer-footer-icon-size);
      width: var(--jato-explainer-footer-icon-size);
    }
  `,f([E({type:Number})],v.prototype,"skeletons",2),f([E({attribute:!1,type:Object})],v.prototype,"_data",2),f([E({attribute:!1,type:Object})],v.prototype,"_loading",2),f([E({attribute:!1,type:Object})],v.prototype,"_options",2),f([wt(".metrics")],v.prototype,"metrics",2),f([wt(".explainer")],v.prototype,"explainer",2),f([Yt("button")],v.prototype,"buttons",2),f([Jt()],v.prototype,"_explainerVisible",2),v=f([Q("jato-plugin")],v)})();
