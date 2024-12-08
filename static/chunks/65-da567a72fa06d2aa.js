"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[65],{5478:function(e,t,n){n.d(t,{Ry:function(){return l}});var r=new WeakMap,o=new WeakMap,u={},a=0,i=function(e){return e&&(e.host||i(e.parentNode))},c=function(e,t,n,c){var l=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=i(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});u[n]||(u[n]=new WeakMap);var s=u[n],d=[],f=new Set,v=new Set(l),p=function(e){!e||f.has(e)||(f.add(e),p(e.parentNode))};l.forEach(p);var m=function(e){!e||v.has(e)||Array.prototype.forEach.call(e.children,function(e){if(f.has(e))m(e);else try{var t=e.getAttribute(c),u=null!==t&&"false"!==t,a=(r.get(e)||0)+1,i=(s.get(e)||0)+1;r.set(e,a),s.set(e,i),d.push(e),1===a&&u&&o.set(e,!0),1===i&&e.setAttribute(n,"true"),u||e.setAttribute(c,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return m(t),f.clear(),a++,function(){d.forEach(function(e){var t=r.get(e)-1,u=s.get(e)-1;r.set(e,t),s.set(e,u),t||(o.has(e)||e.removeAttribute(c),o.delete(e)),u||e.removeAttribute(n)}),--a||(r=new WeakMap,r=new WeakMap,o=new WeakMap,u={})}},l=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),c(r,o,n,"aria-hidden")):function(){return null}}},9157:function(e,t,n){n.d(t,{Z:function(){return U}});var r,o,u,a,i,c,l,s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function d(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}"function"==typeof SuppressedError&&SuppressedError;var f=n(2265),v="right-scroll-bar-position",p="width-before-scroll-bar";function m(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var h="undefined"!=typeof window?f.useLayoutEffect:f.useEffect,y=new WeakMap,g=(void 0===o&&(o={}),(void 0===u&&(u=function(e){return e}),a=[],i=!1,c={read:function(){if(i)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return a.length?a[a.length-1]:null},useMedium:function(e){var t=u(e,i);return a.push(t),function(){a=a.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(i=!0;a.length;){var t=a;a=[],t.forEach(e)}a={push:function(t){return e(t)},filter:function(){return a}}},assignMedium:function(e){i=!0;var t=[];if(a.length){var n=a;a=[],n.forEach(e),t=a}var r=function(){var n=t;t=[],n.forEach(e)},o=function(){return Promise.resolve().then(r)};o(),a={push:function(e){t.push(e),o()},filter:function(e){return t=t.filter(e),a}}}}).options=s({async:!0,ssr:!1},o),c),E=function(){},b=f.forwardRef(function(e,t){var n,r,o,u,a=f.useRef(null),i=f.useState({onScrollCapture:E,onWheelCapture:E,onTouchMoveCapture:E}),c=i[0],l=i[1],v=e.forwardProps,p=e.children,b=e.className,w=e.removeScrollBar,C=e.enabled,S=e.shards,x=e.sideCar,M=e.noIsolation,N=e.inert,L=e.allowPinchZoom,R=e.as,P=e.gapMode,k=d(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),T=(n=[a,t],r=function(e){return n.forEach(function(t){return m(t,e)})},(o=(0,f.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,u=o.facade,h(function(){var e=y.get(u);if(e){var t=new Set(e),r=new Set(n),o=u.current;t.forEach(function(e){r.has(e)||m(e,null)}),r.forEach(function(e){t.has(e)||m(e,o)})}y.set(u,n)},[n]),u),W=s(s({},k),c);return f.createElement(f.Fragment,null,C&&f.createElement(x,{sideCar:g,removeScrollBar:w,shards:S,noIsolation:M,inert:N,setCallbacks:l,allowPinchZoom:!!L,lockRef:a,gapMode:P}),v?f.cloneElement(f.Children.only(p),s(s({},W),{ref:T})):f.createElement(void 0===R?"div":R,s({},W,{className:b,ref:T}),p))});b.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},b.classNames={fullWidth:p,zeroRight:v};var w=function(e){var t=e.sideCar,n=d(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return f.createElement(r,s({},n))};w.isSideCarExport=!0;var C=function(){var e=0,t=null;return{add:function(o){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=r||n.nc;return t&&e.setAttribute("nonce",t),e}())){var u,a;(u=t).styleSheet?u.styleSheet.cssText=o:u.appendChild(document.createTextNode(o)),a=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(a)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},S=function(){var e=C();return function(t,n){f.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},x=function(){var e=S();return function(t){return e(t.styles,t.dynamic),null}},M={left:0,top:0,right:0,gap:0},N=function(e){return parseInt(e||"",10)||0},L=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[N(n),N(r),N(o)]},R=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return M;var t=L(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},P=x(),k="data-scroll-locked",T=function(e,t,n,r){var o=e.left,u=e.top,a=e.right,i=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(i,"px ").concat(r,";\n  }\n  body[").concat(k,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(u,"px;\n    padding-right: ").concat(a,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(i,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(i,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(v," {\n    right: ").concat(i,"px ").concat(r,";\n  }\n  \n  .").concat(p," {\n    margin-right: ").concat(i,"px ").concat(r,";\n  }\n  \n  .").concat(v," .").concat(v," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(p," .").concat(p," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(k,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(i,"px;\n  }\n")},W=function(){var e=parseInt(document.body.getAttribute(k)||"0",10);return isFinite(e)?e:0},A=function(){f.useEffect(function(){return document.body.setAttribute(k,(W()+1).toString()),function(){var e=W()-1;e<=0?document.body.removeAttribute(k):document.body.setAttribute(k,e.toString())}},[])},O=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r;A();var u=f.useMemo(function(){return R(o)},[o]);return f.createElement(P,{styles:T(u,!t,o,n?"":"!important")})},D=!1;if("undefined"!=typeof window)try{var j=Object.defineProperty({},"passive",{get:function(){return D=!0,!0}});window.addEventListener("test",j,j),window.removeEventListener("test",j,j)}catch(e){D=!1}var I=!!D&&{passive:!1},_=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},F=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),B(e,r)){var o=$(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},B=function(e,t){return"v"===e?_(t,"overflowY"):_(t,"overflowX")},$=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},K=function(e,t,n,r,o){var u,a=(u=window.getComputedStyle(t).direction,"h"===e&&"rtl"===u?-1:1),i=a*r,c=n.target,l=t.contains(c),s=!1,d=i>0,f=0,v=0;do{var p=$(e,c),m=p[0],h=p[1]-p[2]-a*m;(m||h)&&B(e,c)&&(f+=h,v+=m),c instanceof ShadowRoot?c=c.host:c=c.parentNode}while(!l&&c!==document.body||l&&(t.contains(c)||t===c));return d&&(o&&1>Math.abs(f)||!o&&i>f)?s=!0:!d&&(o&&1>Math.abs(v)||!o&&-i>v)&&(s=!0),s},X=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Y=function(e){return[e.deltaX,e.deltaY]},z=function(e){return e&&"current"in e?e.current:e},H=0,V=[],Z=(l=function(e){var t=f.useRef([]),n=f.useRef([0,0]),r=f.useRef(),o=f.useState(H++)[0],u=f.useState(x)[0],a=f.useRef(e);f.useEffect(function(){a.current=e},[e]),f.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,o=0,u=t.length;o<u;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(z),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var i=f.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!a.current.allowPinchZoom;var o,u=X(e),i=n.current,c="deltaX"in e?e.deltaX:i[0]-u[0],l="deltaY"in e?e.deltaY:i[1]-u[1],s=e.target,d=Math.abs(c)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=F(d,s);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=F(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(c||l)&&(r.current=o),!o)return!0;var v=r.current||o;return K(v,t,e,"h"===v?c:l,!0)},[]),c=f.useCallback(function(e){if(V.length&&V[V.length-1]===u){var n="deltaY"in e?Y(e):X(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(a.current.shards||[]).map(z).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?i(e,o[0]):!a.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),l=f.useCallback(function(e,n,r,o){var u={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(u),setTimeout(function(){t.current=t.current.filter(function(e){return e!==u})},1)},[]),s=f.useCallback(function(e){n.current=X(e),r.current=void 0},[]),d=f.useCallback(function(t){l(t.type,Y(t),t.target,i(t,e.lockRef.current))},[]),v=f.useCallback(function(t){l(t.type,X(t),t.target,i(t,e.lockRef.current))},[]);f.useEffect(function(){return V.push(u),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:v}),document.addEventListener("wheel",c,I),document.addEventListener("touchmove",c,I),document.addEventListener("touchstart",s,I),function(){V=V.filter(function(e){return e!==u}),document.removeEventListener("wheel",c,I),document.removeEventListener("touchmove",c,I),document.removeEventListener("touchstart",s,I)}},[]);var p=e.removeScrollBar,m=e.inert;return f.createElement(f.Fragment,null,m?f.createElement(u,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,p?f.createElement(O,{gapMode:e.gapMode}):null)},g.useMedium(l),w),q=f.forwardRef(function(e,t){return f.createElement(b,s({},e,{ref:t,sideCar:Z}))});q.classNames=b.classNames;var U=q},6741:function(e,t,n){n.d(t,{M:function(){return r}});function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}},9863:function(e,t,n){n.d(t,{B:function(){return i}});var r=n(2265),o=n(7437),u=n(8575),a=n(7495);function i(e){let t=e+"CollectionProvider",[n,i]=function(e,t=[]){let n=[],u=()=>{let t=n.map(e=>r.createContext(e));return function(n){let o=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:o}}),[n,o])}};return u.scopeName=e,[function(t,u){let a=r.createContext(u),i=n.length;function c(t){let{scope:n,children:u,...c}=t,l=n?.[e][i]||a,s=r.useMemo(()=>c,Object.values(c));return(0,o.jsx)(l.Provider,{value:s,children:u})}return n=[...n,u],c.displayName=t+"Provider",[c,function(n,o){let c=o?.[e][i]||a,l=r.useContext(c);if(l)return l;if(void 0!==u)return u;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}(u,...t)]}(t),[c,l]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=e=>{let{scope:t,children:n}=e,u=r.useRef(null),a=r.useRef(new Map).current;return(0,o.jsx)(c,{scope:t,itemMap:a,collectionRef:u,children:n})};s.displayName=t;let d=e+"CollectionSlot",f=r.forwardRef((e,t)=>{let{scope:n,children:r}=e,i=l(d,n),c=(0,u.e)(t,i.collectionRef);return(0,o.jsx)(a.g7,{ref:c,children:r})});f.displayName=d;let v=e+"CollectionItemSlot",p="data-radix-collection-item",m=r.forwardRef((e,t)=>{let{scope:n,children:i,...c}=e,s=r.useRef(null),d=(0,u.e)(t,s),f=l(v,n);return r.useEffect(()=>(f.itemMap.set(s,{ref:s,...c}),()=>void f.itemMap.delete(s))),(0,o.jsx)(a.g7,{[p]:"",ref:d,children:i})});return m.displayName=v,[{Provider:s,Slot:f,ItemSlot:m},function(t){let n=l(e+"CollectionConsumer",t);return r.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(p,"]")));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])},i]}},3966:function(e,t,n){n.d(t,{b:function(){return a},k:function(){return u}});var r=n(2265),o=n(7437);function u(e,t){let n=r.createContext(t),u=e=>{let{children:t,...u}=e,a=r.useMemo(()=>u,Object.values(u));return(0,o.jsx)(n.Provider,{value:a,children:t})};return u.displayName=e+"Provider",[u,function(o){let u=r.useContext(n);if(u)return u;if(void 0!==t)return t;throw Error(`\`${o}\` must be used within \`${e}\``)}]}function a(e,t=[]){let n=[],u=()=>{let t=n.map(e=>r.createContext(e));return function(n){let o=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:o}}),[n,o])}};return u.scopeName=e,[function(t,u){let a=r.createContext(u),i=n.length;n=[...n,u];let c=t=>{let{scope:n,children:u,...c}=t,l=n?.[e]?.[i]||a,s=r.useMemo(()=>c,Object.values(c));return(0,o.jsx)(l.Provider,{value:s,children:u})};return c.displayName=t+"Provider",[c,function(n,o){let c=o?.[e]?.[i]||a,l=r.useContext(c);if(l)return l;if(void 0!==u)return u;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}(u,...t)]}},9114:function(e,t,n){n.d(t,{gm:function(){return u}});var r=n(2265);n(7437);var o=r.createContext(void 0);function u(e){let t=r.useContext(o);return e||t||"ltr"}},5278:function(e,t,n){n.d(t,{XB:function(){return f}});var r,o=n(2265),u=n(6741),a=n(6840),i=n(8575),c=n(6606),l=n(7437),s="dismissableLayer.update",d=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),f=o.forwardRef((e,t)=>{var n,f;let{disableOutsidePointerEvents:m=!1,onEscapeKeyDown:h,onPointerDownOutside:y,onFocusOutside:g,onInteractOutside:E,onDismiss:b,...w}=e,C=o.useContext(d),[S,x]=o.useState(null),M=null!==(f=null==S?void 0:S.ownerDocument)&&void 0!==f?f:null===(n=globalThis)||void 0===n?void 0:n.document,[,N]=o.useState({}),L=(0,i.e)(t,e=>x(e)),R=Array.from(C.layers),[P]=[...C.layersWithOutsidePointerEventsDisabled].slice(-1),k=R.indexOf(P),T=S?R.indexOf(S):-1,W=C.layersWithOutsidePointerEventsDisabled.size>0,A=T>=k,O=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,c.W)(e),u=o.useRef(!1),a=o.useRef(()=>{});return o.useEffect(()=>{let e=e=>{if(e.target&&!u.current){let t=function(){p("dismissableLayer.pointerDownOutside",r,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(n.removeEventListener("click",a.current),a.current=t,n.addEventListener("click",a.current,{once:!0})):t()}else n.removeEventListener("click",a.current);u.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",a.current)}},[n,r]),{onPointerDownCapture:()=>u.current=!0}}(e=>{let t=e.target,n=[...C.branches].some(e=>e.contains(t));!A||n||(null==y||y(e),null==E||E(e),e.defaultPrevented||null==b||b())},M),D=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,c.W)(e),u=o.useRef(!1);return o.useEffect(()=>{let e=e=>{e.target&&!u.current&&p("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,r]),{onFocusCapture:()=>u.current=!0,onBlurCapture:()=>u.current=!1}}(e=>{let t=e.target;[...C.branches].some(e=>e.contains(t))||(null==g||g(e),null==E||E(e),e.defaultPrevented||null==b||b())},M);return!function(e,t=globalThis?.document){let n=(0,c.W)(e);o.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{T!==C.layers.size-1||(null==h||h(e),!e.defaultPrevented&&b&&(e.preventDefault(),b()))},M),o.useEffect(()=>{if(S)return m&&(0===C.layersWithOutsidePointerEventsDisabled.size&&(r=M.body.style.pointerEvents,M.body.style.pointerEvents="none"),C.layersWithOutsidePointerEventsDisabled.add(S)),C.layers.add(S),v(),()=>{m&&1===C.layersWithOutsidePointerEventsDisabled.size&&(M.body.style.pointerEvents=r)}},[S,M,m,C]),o.useEffect(()=>()=>{S&&(C.layers.delete(S),C.layersWithOutsidePointerEventsDisabled.delete(S),v())},[S,C]),o.useEffect(()=>{let e=()=>N({});return document.addEventListener(s,e),()=>document.removeEventListener(s,e)},[]),(0,l.jsx)(a.WV.div,{...w,ref:L,style:{pointerEvents:W?A?"auto":"none":void 0,...e.style},onFocusCapture:(0,u.M)(e.onFocusCapture,D.onFocusCapture),onBlurCapture:(0,u.M)(e.onBlurCapture,D.onBlurCapture),onPointerDownCapture:(0,u.M)(e.onPointerDownCapture,O.onPointerDownCapture)})});function v(){let e=new CustomEvent(s);document.dispatchEvent(e)}function p(e,t,n,r){let{discrete:o}=r,u=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&u.addEventListener(e,t,{once:!0}),o?(0,a.jH)(u,i):u.dispatchEvent(i)}f.displayName="DismissableLayer",o.forwardRef((e,t)=>{let n=o.useContext(d),r=o.useRef(null),u=(0,i.e)(t,r);return o.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,l.jsx)(a.WV.div,{...e,ref:u})}).displayName="DismissableLayerBranch"},6097:function(e,t,n){n.d(t,{EW:function(){return u}});var r=n(2265),o=0;function u(){r.useEffect(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:a()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:a()),o++,()=>{1===o&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),o--}},[])}function a(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}},9103:function(e,t,n){let r;n.d(t,{M:function(){return f}});var o=n(2265),u=n(8575),a=n(6840),i=n(6606),c=n(7437),l="focusScope.autoFocusOnMount",s="focusScope.autoFocusOnUnmount",d={bubbles:!1,cancelable:!0},f=o.forwardRef((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:f,onUnmountAutoFocus:y,...g}=e,[E,b]=o.useState(null),w=(0,i.W)(f),C=(0,i.W)(y),S=o.useRef(null),x=(0,u.e)(t,e=>b(e)),M=o.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;o.useEffect(()=>{if(r){let e=function(e){if(M.paused||!E)return;let t=e.target;E.contains(t)?S.current=t:m(S.current,{select:!0})},t=function(e){if(M.paused||!E)return;let t=e.relatedTarget;null===t||E.contains(t)||m(S.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&m(E)});return E&&n.observe(E,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,E,M.paused]),o.useEffect(()=>{if(E){h.add(M);let e=document.activeElement;if(!E.contains(e)){let t=new CustomEvent(l,d);E.addEventListener(l,w),E.dispatchEvent(t),t.defaultPrevented||(function(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.activeElement;for(let r of e)if(m(r,{select:t}),document.activeElement!==n)return}(v(E).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&m(E))}return()=>{E.removeEventListener(l,w),setTimeout(()=>{let t=new CustomEvent(s,d);E.addEventListener(s,C),E.dispatchEvent(t),t.defaultPrevented||m(null!=e?e:document.body,{select:!0}),E.removeEventListener(s,C),h.remove(M)},0)}}},[E,w,C,M]);let N=o.useCallback(e=>{if(!n&&!r||M.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,u]=function(e){let t=v(e);return[p(t,e),p(t.reverse(),e)]}(t);r&&u?e.shiftKey||o!==u?e.shiftKey&&o===r&&(e.preventDefault(),n&&m(u,{select:!0})):(e.preventDefault(),n&&m(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,M.paused]);return(0,c.jsx)(a.WV.div,{tabIndex:-1,...g,ref:x,onKeyDown:N})});function v(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function p(e,t){for(let n of e)if(!function(e,t){let{upTo:n}=t;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===n||e!==n);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function m(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}f.displayName="FocusScope";var h=(r=[],{add(e){let t=r[0];e!==t&&(null==t||t.pause()),(r=y(r,e)).unshift(e)},remove(e){var t;null===(t=(r=y(r,e))[0])||void 0===t||t.resume()}});function y(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}},9255:function(e,t,n){n.d(t,{M:function(){return c}});var r,o=n(2265),u=n(1188),a=(r||(r=n.t(o,2)))["useId".toString()]||(()=>void 0),i=0;function c(e){let[t,n]=o.useState(a());return(0,u.b)(()=>{e||n(e=>e??String(i++))},[e]),e||(t?`radix-${t}`:"")}},3832:function(e,t,n){n.d(t,{h:function(){return c}});var r=n(2265),o=n(4887),u=n(6840),a=n(1188),i=n(7437),c=r.forwardRef((e,t)=>{var n,c;let{container:l,...s}=e,[d,f]=r.useState(!1);(0,a.b)(()=>f(!0),[]);let v=l||d&&(null===(c=globalThis)||void 0===c?void 0:null===(n=c.document)||void 0===n?void 0:n.body);return v?o.createPortal((0,i.jsx)(u.WV.div,{...s,ref:t}),v):null});c.displayName="Portal"},6606:function(e,t,n){n.d(t,{W:function(){return o}});var r=n(2265);function o(e){let t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...e)=>t.current?.(...e),[])}},886:function(e,t,n){n.d(t,{T:function(){return u}});var r=n(2265),o=n(6606);function u({prop:e,defaultProp:t,onChange:n=()=>{}}){let[u,a]=function({defaultProp:e,onChange:t}){let n=r.useState(e),[u]=n,a=r.useRef(u),i=(0,o.W)(t);return r.useEffect(()=>{a.current!==u&&(i(u),a.current=u)},[u,a,i]),n}({defaultProp:t,onChange:n}),i=void 0!==e,c=i?e:u,l=(0,o.W)(n);return[c,r.useCallback(t=>{if(i){let n="function"==typeof t?t(e):t;n!==e&&l(n)}else a(t)},[i,e,a,l])]}},1188:function(e,t,n){n.d(t,{b:function(){return o}});var r=n(2265),o=globalThis?.document?r.useLayoutEffect:()=>{}},6718:function(e,t,n){n.d(t,{D:function(){return o}});var r=n(2265);function o(e){let t=r.useRef({value:e,previous:e});return r.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}},5098:function(e,t,n){n.d(t,{T:function(){return a},f:function(){return i}});var r=n(2265),o=n(6840),u=n(7437),a=r.forwardRef((e,t)=>(0,u.jsx)(o.WV.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));a.displayName="VisuallyHidden";var i=a}}]);