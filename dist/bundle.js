!function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(5)},function(e,t,n){var i;!function(r,o){"use strict";function a(e,t,n){var i={};return i[e.key]=t,e.pos&&(i[e.pos]=n),i}function c(e,t){for(var n,i=t.length,r=e.length;i>r;)n=t[--i],t.splice(i,1),n.unmount()}function s(e,t){Object.keys(e.tags).forEach(function(n){var i=e.tags[n];A(i)?x(i,function(e){L(e,n,t)}):L(i,n,t)})}function u(e,t,n){var i,r=e._root;for(e._virts=[];r;)i=r.nextSibling,n?t.insertBefore(r,n._root):t.appendChild(r),e._virts.push(r),r=i}function l(e,t,n,i){for(var r,o=e._root,a=0;a<i;a++)r=o.nextSibling,t.insertBefore(o,n._root),o=r}function f(e,t,n,i,r,o,a){G(t.root)||(e?o(t,i,n,a.childNodes.length):i.insertBefore(t.root,n.root))}function p(e,t,n){j(e,"each");var i,r=typeof N(e,"no-reorder")!==ae||j(e,"no-reorder"),o=T(e),p=te[o]||{tmpl:w(e)},g=pe.test(o),d=e.parentNode,m=document.createTextNode(""),v=C(e),y="option"===o.toLowerCase(),x=[],b=[],_="VIRTUAL"==e.tagName;n=ye.loopKeys(n),d.insertBefore(m,e),t.one("before-mount",function(){e.parentNode.removeChild(e),d.stub&&(d=t.root)}).on("update",function(){var w=ye(n.val,t),k=document.createDocumentFragment();A(w)||(i=w||!1,w=i?Object.keys(w).map(function(e){return a(n,e,w[e])}):[]);for(var M=0,j=w.length;M<j;M++){var S=w[M],N=r&&typeof S==ce&&!i,E=b.indexOf(S),C=~E&&N?E:M,O=x[C];S=!i&&n.key?a(n,S,M):S,!N&&!O||N&&!~E||!O?(O=new h(p,{parent:t,isLoop:!0,hasImpl:!!te[o],root:g?d:e.cloneNode(),item:S},e.innerHTML),O.mount(),_&&(O._root=O.root.firstChild),M!=x.length&&x[M]?(f(_,O,x[M],d,x,u,e),b.splice(M,0,S)):_?u(O,k):k.appendChild(O.root),x.splice(M,0,O),C=M):O.update(S,!0),C!==M&&N&&x[M]&&(P(w,b[M])&&f(_,O,x[M],d,x,l,e),n.pos&&(O[n.pos]=M),x.splice(M,0,x.splice(C,1)[0]),b.splice(M,0,b.splice(C,1)[0]),!v&&O.tags&&s(O,M)),O._item=S,D(O,"_parent",t)}if(c(w,x),d.insertBefore(k,m),y&&me&&!d.multiple)for(var L=0;L<d.length;L++)if(d[L].__riot1374){d.selectedIndex=L,delete d[L].__riot1374;break}v&&(t.tags[o]=x),b=w.slice()})}function g(e,t,n,i){W(e,function(e){if(1==e.nodeType){if(e.isLoop=e.isLoop||e.parentNode&&e.parentNode.isLoop||N(e,"each")?1:0,n){var r=C(e);r&&!e.isLoop&&n.push(R(r,{root:e,parent:t},e.innerHTML,t))}e.isLoop&&!i||U(e,t,[])}})}function d(e,t,n){function i(e,t,i){ye.hasExpr(t)&&n.push(I({dom:e,expr:t},i))}W(e,function(e){var n,r=e.nodeType;if(3==r&&"STYLE"!=e.parentNode.tagName&&i(e,e.nodeValue),1==r)return(n=N(e,"each"))?(p(e,t,n),!1):(x(e.attributes,function(t){var n=t.name,r=n.split("__")[1];if(i(e,t.value,{attr:r||n,bool:r}),r)return j(e,n),!1}),!C(e)&&void 0)})}function h(e,t,n){function i(){var e=m&&h?l:p||l;x(k.attributes,function(t){if(!(t.name in C)){var n=t.value;f[S(t.name)]=ye.hasExpr(n)?ye(n,e):n}}),x(Object.keys(C),function(t){f[S(t)]=ye(C[t],e)})}function r(e){for(var t in v)typeof l[t]!==se&&H(l,t)&&(l[t]=e[t])}function a(e){x(Object.keys(e),function(t){var n=!ge.test(t)&&P(O,t);(typeof l[t]===se||n)&&(n||O.push(t),l[t]=e[t])})}function c(e){l.update(e,!0)}function s(e){if(x(_,function(t){t[e?"mount":"unmount"]()}),p){var t=e?"on":"off";h?p[t]("unmount",l.unmount):p[t]("update",c)[t]("unmount",l.unmount)}}var u,l=X.observable(this),f=q(t.opts)||{},p=t.parent,h=t.isLoop,m=t.hasImpl,v=$(t.item),w=[],_=[],k=t.root,N=k.tagName.toLowerCase(),C={},O=[];e.name&&k._tag&&k._tag.unmount(!0),this.isMounted=!1,k.isLoop=h,k._tag=this,D(this,"_riot_id",++Y),I(this,{parent:p,root:k,opts:f},v),D(this,"tags",{}),x(k.attributes,function(e){var t=e.value;ye.hasExpr(t)&&(C[e.name]=t)}),u=xe(e.tmpl,n,h),D(this,"update",function(e,t){return e=$(e),h&&a(l.parent),e&&M(v)&&(r(e),v=e),I(l,e),i(),l.trigger("update",e),y(w,l),t&&l.parent?l.parent.one("updated",function(){l.trigger("updated")}):we(function(){l.trigger("updated")}),this}),D(this,"mixin",function(){return x(arguments,function(e){var t,n,i=[];e=typeof e===ae?X.mixin(e):e,t=b(e)?new e:e;var r=Object.getPrototypeOf(t);do i=i.concat(Object.getOwnPropertyNames(n||t));while(n=Object.getPrototypeOf(n||t));x(i,function(e){if("init"!=e){var n=Object.getOwnPropertyDescriptor(t,e)||Object.getOwnPropertyDescriptor(r,e),i=n&&(n.get||n.set);!l.hasOwnProperty(e)&&i?Object.defineProperty(l,e,n):l[e]=b(t[e])?t[e].bind(l):t[e]}}),t.init&&t.init.bind(l)()}),this}),D(this,"mount",function(){i();var t=X.mixin(ne);if(t)for(var n in t)t.hasOwnProperty(n)&&l.mixin(t[n]);if(l._parent&&l._parent.root.isLoop&&a(l._parent),e.fn&&e.fn.call(l,f),d(u,l,w),s(!0),e.attrs&&F(e.attrs,function(e,t){E(k,e,t)}),(e.attrs||m)&&d(l.root,l,w),l.parent&&!h||l.update(v),l.trigger("before-mount"),h&&!m)k=u.firstChild;else{for(;u.firstChild;)k.appendChild(u.firstChild);k.stub&&(k=p.root)}D(l,"root",k),h&&g(l.root,l.parent,null,!0),!l.parent||l.parent.isMounted?(l.isMounted=!0,l.trigger("mount")):l.parent.one("mount",function(){G(l.root)||(l.parent.isMounted=l.isMounted=!0,l.trigger("mount"))})}),D(this,"unmount",function(e){var t,n=k,i=n.parentNode,r=ee.indexOf(l);if(l.trigger("before-unmount"),~r&&ee.splice(r,1),i){if(p)t=B(p),A(t.tags[N])?x(t.tags[N],function(e,n){e._riot_id==l._riot_id&&t.tags[N].splice(n,1)}):t.tags[N]=o;else for(;n.firstChild;)n.removeChild(n.firstChild);e?(j(i,oe),j(i,re)):i.removeChild(n)}this._virts&&x(this._virts,function(e){e.parentNode&&e.parentNode.removeChild(e)}),l.trigger("unmount"),s(),l.off("*"),l.isMounted=!1,delete k._tag}),g(u,this,_)}function m(e,t,n,i){n[e]=function(e){var o,a=i._parent,c=i._item;if(!c)for(;a&&!c;)c=a._item,a=a._parent;e=e||r.event,H(e,"currentTarget")&&(e.currentTarget=n),H(e,"target")&&(e.target=e.srcElement),H(e,"which")&&(e.which=e.charCode||e.keyCode),e.item=c,t.call(i,e)===!0||/radio|check/.test(n.type)||(e.preventDefault&&e.preventDefault(),e.returnValue=!1),e.preventUpdate||(o=c?B(a):i,o.update())}}function v(e,t,n){e&&(e.insertBefore(n,t),e.removeChild(t))}function y(e,t){x(e,function(e,n){var i=e.dom,r=e.attr,o=ye(e.expr,t),a=e.parent||e.dom.parentNode;if(e.bool?o=!!o:null==o&&(o=""),e.value!==o){if(e.value=o,!r)return o+="",void(a&&(e.parent=a,"TEXTAREA"===a.tagName?(a.value=o,he||(i.nodeValue=o)):i.nodeValue=o));if("value"===r)return void(i.value!==o&&(i.value=o,E(i,r,o)));if(j(i,r),b(o))m(r,o,i,t);else if("if"==r){var c=e.stub,s=function(){v(c.parentNode,c,i)},u=function(){v(i.parentNode,i,c)};o?c&&(s(),i.inStub=!1,G(i)||W(i,function(e){e._tag&&!e._tag.isMounted&&(e._tag.isMounted=!!e._tag.trigger("mount"))})):(c=e.stub=c||document.createTextNode(""),i.parentNode?u():(t.parent||t).one("updated",u),i.inStub=!0)}else"show"===r?i.style.display=o?"":"none":"hide"===r?i.style.display=o?"none":"":e.bool?(i[r]=o,o&&E(i,r,r),me&&"selected"===r&&"OPTION"===i.tagName&&(i.__riot1374=o)):(0===o||o&&typeof o!==ce)&&(Z(r,ie)&&r!=re&&(r=r.slice(ie.length)),E(i,r,o))}})}function x(e,t){for(var n,i=e?e.length:0,r=0;r<i;r++)n=e[r],null!=n&&t(n,r)===!1&&r--;return e}function b(e){return typeof e===ue||!1}function w(e){if(e.outerHTML)return e.outerHTML;var t=z("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}function _(e,t){if(typeof e.innerHTML!=se)e.innerHTML=t;else{var n=(new DOMParser).parseFromString(t,"application/xml");e.appendChild(e.ownerDocument.importNode(n.documentElement,!0))}}function k(e){return~de.indexOf(e)}function M(e){return e&&typeof e===ce}function j(e,t){e.removeAttribute(t)}function S(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})}function N(e,t){return e.getAttribute(t)}function E(e,t,n){var i=fe.exec(t);i&&i[1]?e.setAttributeNS(le,i[1],n):e.setAttribute(t,n)}function C(e){return e.tagName&&te[N(e,oe)||N(e,re)||e.tagName.toLowerCase()]}function O(e,t,n){var i=n.tags[t];i?(A(i)||i!==e&&(n.tags[t]=[i]),P(n.tags[t],e)||n.tags[t].push(e)):n.tags[t]=e}function L(e,t,n){var i,r=e.parent;r&&(i=r.tags[t],A(i)?i.splice(n,0,i.splice(i.indexOf(e),1)[0]):O(e,t,r))}function R(e,t,n,i){var r=new h(e,t,n),o=T(t.root),a=B(i);return r.parent=a,r._parent=i,O(r,o,a),a!==i&&O(r,o,i),t.root.innerHTML="",r}function B(e){for(var t=e;!C(t.root)&&t.parent;)t=t.parent;return t}function D(e,t,n,i){return Object.defineProperty(e,t,I({value:n,enumerable:!1,writable:!1,configurable:!0},i)),e}function T(e){var t=C(e),n=N(e,"name"),i=n&&!ye.hasExpr(n)?n:t?t.name:e.tagName.toLowerCase();return i}function I(e){for(var t,n=arguments,i=1;i<n.length;++i)if(t=n[i])for(var r in t)H(e,r)&&(e[r]=t[r]);return e}function P(e,t){return~e.indexOf(t)}function A(e){return Array.isArray(e)||e instanceof Array}function H(e,t){var n=Object.getOwnPropertyDescriptor(e,t);return typeof e[t]===se||n&&n.writable}function $(e){if(!(e instanceof h||e&&typeof e.trigger==ue))return e;var t={};for(var n in e)ge.test(n)||(t[n]=e[n]);return t}function W(e,t){if(e){if(t(e)===!1)return;for(e=e.firstChild;e;)W(e,t),e=e.nextSibling}}function F(e,t){for(var n,i=/([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g;n=i.exec(e);)t(n[1].toLowerCase(),n[2]||n[3]||n[4])}function G(e){for(;e;){if(e.inStub)return!0;e=e.parentNode}return!1}function z(e,t){return t?document.createElementNS("http://www.w3.org/2000/svg","svg"):document.createElement(e)}function K(e,t){return(t||document).querySelectorAll(e)}function V(e,t){return(t||document).querySelector(e)}function q(e){return Object.create(e||null)}function J(e){return N(e,"id")||N(e,"name")}function U(e,t,n){var i,r=J(e),o=function(o){P(n,r)||(i=A(o),o?(!i||i&&!P(o,e))&&(i?o.push(e):t[r]=[o,e]):t[r]=e)};r&&(ye.hasExpr(r)?t.one("mount",function(){r=J(e),o(t[r])}):o(t[r]))}function Z(e,t){return e.slice(0,t.length)===t}function Q(e,t,n){var i=te[t],r=e._innerHTML=e._innerHTML||e.innerHTML;return e.innerHTML="",i&&e&&(i=new h(i,{root:e,opts:n},r)),i&&i.mount&&(i.mount(),P(ee,i)||ee.push(i)),i}var X={version:"v2.6.8",settings:{}},Y=0,ee=[],te={},ne="__global_mixin",ie="riot-",re=ie+"tag",oe="data-is",ae="string",ce="object",se="undefined",ue="function",le="http://www.w3.org/1999/xlink",fe=/^xlink:(\w+)/,pe=/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/,ge=/^(?:_(?:item|id|parent)|update|root|(?:un)?mount|mixin|is(?:Mounted|Loop)|tags|parent|opts|trigger|o(?:n|ff|ne))$/,de=["altGlyph","animate","animateColor","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feImage","feMerge","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","filter","font","foreignObject","g","glyph","glyphRef","image","line","linearGradient","marker","mask","missing-glyph","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tref","tspan","use"],he=0|(r&&r.document||{}).documentMode,me=r&&!!r.InstallTrigger;X.observable=function(e){function t(e,t){for(var n=e.split(" "),i=n.length,r=0;r<i;r++){var o=n[r];o&&t(o,r)}}e=e||{};var n={},i=Array.prototype.slice;return Object.defineProperties(e,{on:{value:function(i,r){return"function"!=typeof r?e:(t(i,function(e,t){(n[e]=n[e]||[]).push(r),r.typed=t>0}),e)},enumerable:!1,writable:!1,configurable:!1},off:{value:function(i,r){return"*"!=i||r?t(i,function(e,t){if(r)for(var i,o=n[e],a=0;i=o&&o[a];++a)i==r&&o.splice(a--,1);else delete n[e]}):n={},e},enumerable:!1,writable:!1,configurable:!1},one:{value:function(t,n){function i(){e.off(t,i),n.apply(e,arguments)}return e.on(t,i)},enumerable:!1,writable:!1,configurable:!1},trigger:{value:function(r){for(var o,a=arguments.length-1,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s+1];return t(r,function(t,r){o=i.call(n[t]||[],0);for(var a,s=0;a=o[s];++s)a.busy||(a.busy=1,a.apply(e,a.typed?[t].concat(c):c),o[s]!==a&&s--,a.busy=0);n["*"]&&"*"!=t&&e.trigger.apply(e,["*",t].concat(c))}),e},enumerable:!1,writable:!1,configurable:!1}}),e},function(e){function t(e){return e.split(/[\/?#]/)}function n(e,t){var n=new RegExp("^"+t[M](/\*/g,"([^/?#]+?)")[M](/\.\./,".*")+"$"),i=e.match(n);if(i)return i.slice(1)}function i(e,t){var n;return function(){clearTimeout(n),n=setTimeout(e,t)}}function o(e){d=i(f,1),C[_](j,d),C[_](S,d),O[_](D,p),e&&f(!0)}function a(){this.$=[],e.observable(this),I.on("stop",this.s.bind(this)),I.on("emit",this.e.bind(this))}function c(e){return e[M](/^\/|\/$/,"")}function s(e){return"string"==typeof e}function u(e){return(e||R.href)[M](x,"")}function l(e){return"#"==h[0]?(e||R.href||"").split(h)[1]||"":(R?u(e):e||"")[M](h,"")}function f(e){var t,n=0==H;if(!(E<=H)&&(H++,A.push(function(){var t=l();(e||t!=m)&&(I[N]("emit",t),m=t)}),n)){for(;t=A.shift();)t();H=0}}function p(e){if(!(1!=e.which||e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){for(var t=e.target;t&&"A"!=t.nodeName;)t=t.parentNode;!t||"A"!=t.nodeName||t[k]("download")||!t[k]("href")||t.target&&"_self"!=t.target||t.href.indexOf(R.href.match(x)[0])==-1||t.href!=R.href&&(t.href.split("#")[0]==R.href.split("#")[0]||"#"!=h[0]&&0!==u(t.href).indexOf(h)||"#"==h[0]&&t.href.split(h)[0]!=R.href.split(h)[0]||!g(l(t.href),t.title||O.title))||e.preventDefault()}}function g(e,t,n){return L?(e=h+c(e),t=t||O.title,n?L.replaceState(null,t,e):L.pushState(null,t,e),O.title=t,P=!1,f(),P):I[N]("emit",l(e))}var d,h,m,v,y,x=/^.+?\/\/+[^\/]+/,b="EventListener",w="remove"+b,_="add"+b,k="hasAttribute",M="replace",j="popstate",S="hashchange",N="trigger",E=3,C="undefined"!=typeof r&&r,O="undefined"!=typeof document&&document,L=C&&history,R=C&&(L.location||C.location),B=a.prototype,D=O&&O.ontouchstart?"touchstart":"click",T=!1,I=e.observable(),P=!1,A=[],H=0;B.m=function(e,t,n){!s(e)||t&&!s(t)?t?this.r(e,t):this.r("@",e):g(e,t,n||!1)},B.s=function(){this.off("*"),this.$=[]},B.e=function(e){this.$.concat("@").some(function(t){var n=("@"==t?v:y)(c(e),c(t));if("undefined"!=typeof n)return this[N].apply(null,[t].concat(n)),P=!0},this)},B.r=function(e,t){"@"!=e&&(e="/"+c(e),this.$.push(e)),this.on(e,t)};var $=new a,W=$.m.bind($);W.create=function(){var e=new a,t=e.m.bind(e);return t.stop=e.s.bind(e),t},W.base=function(e){h=e||"#",m=l()},W.exec=function(){f(!0)},W.parser=function(e,i){e||i||(v=t,y=n),e&&(v=e),i&&(y=i)},W.query=function(){var e={},t=R.href||m;return t[M](/[?&](.+?)=([^&]*)/g,function(t,n,i){e[n]=i}),e},W.stop=function(){T&&(C&&(C[w](j,d),C[w](S,d),O[w](D,p)),I[N]("stop"),T=!1)},W.start=function(e){T||(C&&("complete"==document.readyState?o(e):C[_]("load",function(){setTimeout(function(){o(e)},1)})),T=!0)},W.base(),W.parser(),e.route=W}(X);var ve=function(e){function t(e){return e}function n(e,t){return t||(t=x),new RegExp(e.source.replace(/{/g,t[2]).replace(/}/g,t[3]),e.global?u:"")}function i(e){if(e===m)return v;var t=e.split(" ");if(2!==t.length||g.test(e))throw new Error('Unsupported brackets "'+e+'"');return t=t.concat(e.replace(d,"\\").split(" ")),t[4]=n(t[1].length>1?/{[\S\s]*?}/:v[4],t),t[5]=n(e.length>3?/\\({|})/g:v[5],t),t[6]=n(v[6],t),t[7]=RegExp("\\\\("+t[3]+")|([[({])|("+t[3]+")|"+p,u),t[8]=e,t}function r(e){return e instanceof RegExp?c(e):x[e]}function o(e){(e||(e=m))!==x[8]&&(x=i(e),c=e===m?t:n,x[9]=c(v[9])),y=e}function a(e){var t;e=e||{},t=e.brackets,Object.defineProperty(e,"brackets",{set:o,get:function(){return y},enumerable:!0}),s=e,o(t)}var c,s,u="g",l=/\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g,f=/"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'/g,p=f.source+"|"+/(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source+"|"+/\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?(\/)[gim]*/.source,g=RegExp("[\\x00-\\x1F<>a-zA-Z0-9'\",;\\\\]"),d=/(?=[[\]()*+?.^$|])/g,h={"(":RegExp("([()])|"+p,u),"[":RegExp("([[\\]])|"+p,u),"{":RegExp("([{}])|"+p,u)},m="{ }",v=["{","}","{","}",/{[^}]*}/,/\\([{}])/g,/\\({)|{/g,RegExp("\\\\(})|([[({])|(})|"+p,u),m,/^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/,/(^|[^\\]){=[\S\s]*?}/],y=e,x=[];return r.split=function(e,t,n){function i(e){t||a?u.push(e&&e.replace(n[5],"$1")):u.push(e)}function r(e,t,n){var i,r=h[t];for(r.lastIndex=n,n=1;(i=r.exec(e))&&(!i[1]||(i[1]===t?++n:--n)););return n?e.length:r.lastIndex}n||(n=x);var o,a,c,s,u=[],l=n[6];for(a=c=l.lastIndex=0;o=l.exec(e);){if(s=o.index,a){if(o[2]){l.lastIndex=r(e,o[2],l.lastIndex);continue}if(!o[3])continue}o[1]||(i(e.slice(c,s)),c=l.lastIndex,l=n[6+(a^=1)],l.lastIndex=c)}return e&&c<e.length&&i(e.slice(c)),u},r.hasExpr=function(e){return x[4].test(e)},r.loopKeys=function(e){var t=e.match(x[9]);return t?{key:t[1],pos:t[2],val:x[0]+t[3].trim()+x[1]}:{val:e.trim()}},r.array=function(e){return e?i(e):x},Object.defineProperty(r,"settings",{set:a,get:function(){return s}}),r.settings="undefined"!=typeof X&&X.settings||{},r.set=o,r.R_STRINGS=f,r.R_MLCOMMS=l,r.S_QBLOCKS=p,r}(),ye=function(){function e(e,i){return e?(c[e]||(c[e]=n(e))).call(i,t):e}function t(t,n){e.errorHandler&&(t.riotData={tagName:n&&n.root&&n.root.tagName,_riot_id:n&&n._riot_id},e.errorHandler(t))}function n(e){var t=i(e);return"try{return "!==t.slice(0,11)&&(t="return "+t),new Function("E",t+";")}function i(e){var t,n=[],i=ve.split(e.replace(f,'"'),1);if(i.length>2||i[0]){var r,a,c=[];for(r=a=0;r<i.length;++r)t=i[r],t&&(t=1&r?o(t,1,n):'"'+t.replace(/\\/g,"\\\\").replace(/\r\n?|\n/g,"\\n").replace(/"/g,'\\"')+'"')&&(c[a++]=t);t=a<2?c[0]:"["+c.join(",")+'].join("")'}else t=o(i[1],0,n);return n[0]&&(t=t.replace(p,function(e,t){return n[t].replace(/\r/g,"\\r").replace(/\n/g,"\\n")})),t}function o(e,t,n){function i(t,n){var i,r=1,o=g[t];for(o.lastIndex=n.lastIndex;i=o.exec(e);)if(i[0]===t)++r;else if(!--r)break;n.lastIndex=r?e.length:o.lastIndex}if(e=e.replace(l,function(e,t){return e.length>2&&!t?s+(n.push(e)-1)+"~":e}).replace(/\s+/g," ").trim().replace(/\ ?([[\({},?\.:])\ ?/g,"$1")){for(var r,o=[],c=0;e&&(r=e.match(u))&&!r.index;){var f,p,d=/,|([[{(])|$/g;for(e=RegExp.rightContext,f=r[2]?n[r[2]].slice(1,-1).trim().replace(/\s+/g," "):r[1];p=(r=d.exec(e))[1];)i(p,d);p=e.slice(0,r.index),e=RegExp.rightContext,o[c++]=a(p,1,f)}e=c?c>1?"["+o.join(",")+'].join(" ").trim()':o[0]:a(e,t)}return e}function a(e,t,n){var i;return e=e.replace(h,function(e,t,n,r,o){return n&&(r=i?0:r+e.length,"this"!==n&&"global"!==n&&"window"!==n?(e=t+'("'+n+d+n,r&&(i="."===(o=o[r])||"("===o||"["===o)):r&&(i=!m.test(o.slice(r)))),e}),i&&(e="try{return "+e+"}catch(e){E(e,this)}"),n?e=(i?"function(){"+e+"}.call(this)":"("+e+")")+'?"'+n+'":""':t&&(e="function(v){"+(i?e.replace("return ","v="):"v=("+e+")")+';return v||v===0?v:""}.call(this)'),e}var c={};e.haveRaw=ve.hasRaw,e.hasExpr=ve.hasExpr,e.loopKeys=ve.loopKeys,e.clearCache=function(){c={}},e.errorHandler=null;var s=String.fromCharCode(8279),u=/^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\u2057(\d+)~):/,l=RegExp(ve.S_QBLOCKS,"g"),f=/\u2057/g,p=/\u2057(\d+)~/g,g={"(":/[()]/g,"[":/[[\]]/g,"{":/[{}]/g},d='"in this?this:'+("object"!=typeof r?"global":"window")+").",h=/[,{][\$\w]+(?=:)|(^ *|[^$\w\.{])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,m=/^(?=(\.[$\w]+))\1(?:[^.[(]|$)/;return e.version=ve.version="v2.4.2",e}(),xe=function e(){function e(e,i,r){var o=e&&e.match(/^\s*<([-\w]+)/),a=o&&o[1].toLowerCase(),c=z("div",r&&k(a));return e=n(e,i),s.test(a)?c=t(c,e,a):_(c,e),c.stub=!0,c}function t(e,t,n){var i="o"===n[0],r=i?"select>":"table>";if(e.innerHTML="<"+r+t.trim()+"</"+r,r=e.firstChild,i)r.selectedIndex=-1;else{var o=c[n];o&&1===r.childElementCount&&(r=V(o,r))}return r}function n(e,t){if(!i.test(e))return e;var n={};return t=t&&t.replace(o,function(e,t,i){return n[t]=n[t]||i,""}).trim(),e.replace(a,function(e,t,i){return n[t]||i||""}).replace(r,function(e,n){return t||n||""})}var i=/<yield\b/i,r=/<yield\s*(?:\/>|>([\S\s]*?)<\/yield\s*>|>)/gi,o=/<yield\s+to=['"]([^'">]*)['"]\s*>([\S\s]*?)<\/yield\s*>/gi,a=/<yield\s+from=['"]?([-\w]+)['"]?\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/gi,c={tr:"tbody",th:"tr",td:"tr",col:"colgroup"},s=he&&he<10?pe:/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/;return e}(),be=function(e){if(!r)return{add:function(){},inject:function(){}};var t=function(){var e=z("style");E(e,"type","text/css");var t=V("style[type=riot]");return t?(t.id&&(e.id=t.id),t.parentNode.replaceChild(e,t)):document.getElementsByTagName("head")[0].appendChild(e),e}(),n=t.styleSheet,i="";return Object.defineProperty(e,"styleNode",{value:t,writable:!0}),{add:function(e){i+=e},inject:function(){i&&(n?n.cssText+=i:t.innerHTML+=i,i="")}}}(X),we=function(e){var t=e.requestAnimationFrame||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame;if(!t||/iP(ad|hone|od).*OS 6/.test(e.navigator.userAgent)){var n=0;t=function(e){var t=Date.now(),i=Math.max(16-(t-n),0);setTimeout(function(){e(n=t+i)},i)}}return t}(r||{});X.util={brackets:ve,tmpl:ye},X.mixin=function(){var e={},t=e[ne]={},n=0;return function(i,r,o){if(M(i))return void X.mixin("__unnamed_"+n++,i,!0);var a=o?t:e;if(!r){if(typeof a[i]===se)throw new Error("Unregistered mixin: "+i);return a[i]}b(r)?(I(r.prototype,a[i]||{}),a[i]=r):a[i]=I(a[i]||{},r)}}(),X.tag=function(e,t,n,i,r){return b(i)&&(r=i,/^[\w\-]+\s?=/.test(n)?(i=n,n=""):i=""),n&&(b(n)?r=n:be.add(n)),e=e.toLowerCase(),te[e]={name:e,tmpl:t,attrs:i,fn:r},e},X.tag2=function(e,t,n,i,r){return n&&be.add(n),te[e]={name:e,tmpl:t,attrs:i,fn:r},e},X.mount=function(e,t,n){function i(e){var t="";return x(e,function(e){/[^-\w]/.test(e)||(e=e.trim().toLowerCase(),t+=",["+oe+'="'+e+'"],['+re+'="'+e+'"]')}),t}function r(){var e=Object.keys(te);return e+i(e)}function o(e){if(e.tagName){var i=N(e,oe)||N(e,re);t&&i!==t&&(i=t,E(e,oe,t),E(e,re,t));var r=Q(e,i||e.tagName.toLowerCase(),n);r&&s.push(r)}else e.length&&x(e,o)}var a,c,s=[];if(be.inject(),M(t)&&(n=t,t=0),typeof e===ae?("*"===e?e=c=r():e+=i(e.split(/, */)),a=e?K(e):[]):a=e,"*"===t){if(t=c||r(),a.tagName)a=K(t,a);else{var u=[];x(a,function(e){u.push(K(t,e))}),a=u}t=0}return o(a),s},X.update=function(){return x(ee,function(e){e.update()})},X.vdom=ee,X.Tag=h,typeof t===ce?e.exports=X:"function"===ue&&typeof n(8)!==se?(i=function(){return X}.call(t,n,t,e),!(i!==o&&(e.exports=i))):r.riot=X}("undefined"!=typeof window?window:void 0)},function(e,t,n){(function(e){"use strict";e.tag2("fotimat-app",'<fotimat-overview data="{subset}" alldata="{opts.contentData}" onmoreclick="{this.showMore}" onpictureclick="{this.openModal}"></fotimat-overview> <fotimat-gallery show="{showModal}" clickedimage="{pictureSrc}" index="{indexImage}" oncloseclick="{this.closeModal}" onnextclick="{this.nextPicture}" nextpictureavailable="{showNext}" onpreviousclick="{this.previousPicture}" previouspictureavailable="{showPrevious}"></fotimat-gallery>',"","",function(e){var t=this;this.arrayEnd=9,this.nextEnd=this.arrayEnd+9,this.subset=e.contentData.slice(0,this.arrayEnd);var n=function(t,n){for(var i=e.contentData.slice(t,n),r=0;r<i.length;++r){var o=new Image;o.src=i[r]}};this.preloadSubset=n(this.arrayEnd,this.nextEnd),this.showMore=function(){t.update({arrayEnd:t.arrayEnd+9,nextEnd:t.nextEnd+9,subset:e.contentData.slice(0,t.arrayEnd+9),preloadSubset:n(t.arrayEnd+9,t.nextEnd+9)})},this.pictureSrc="",this.indexImage="",this.showModal=!1,this.showNext=!1,this.showPrevious=!1,this.nextPicture=function(n){var i=e.contentData.length-1==n?e.contentData.length-1:n+1;t.update({pictureSrc:e.contentData[i],indexImage:i,showNext:e.contentData.length-2!=t.indexImage&&e.contentData.length-1!=t.indexImage,showPrevious:!(t.indexImage<0)})},this.previousPicture=function(n){var i=n>0?n-1:0;t.update({pictureSrc:e.contentData[i],indexImage:i,showNext:e.contentData.length!=n,showPrevious:1!=t.indexImage&&0!=t.indexImage})},this.openModal=function(n){t.update({indexImage:e.contentData.indexOf(n),pictureSrc:n,showModal:!0,showNext:e.contentData.length-1!=e.contentData.indexOf(n),showPrevious:0!=e.contentData.indexOf(n)})},this.closeModal=function(){t.update({showModal:!1})}})}).call(t,n(1))},function(e,t,n){(function(e){"use strict";e.tag2("fotimat-gallery",'<div id="myModal" class="modal"> <span class="close" onclick="{closemodal}">&times;</span> <a class="download" download="{opts.clickedimage.image}" href="{opts.clickedimage.image}" title="{opts.clickedimage.title}"> <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewbox="0 0 433.5 433.5" style="enable-background:new 0 0 433.5 433.5;" xml:space="preserve"><g><g id="file-download"><path d="M395.25,153h-102V0h-153v153h-102l178.5,178.5L395.25,153z M38.25,382.5v51h357v-51H38.25z"></path></g></g></svg></a> <img riot-src="{opts.clickedimage.image}" class="modal-content" id="{opts.clickedimage.image}"> <i style="font-size: 75px;" class="fa fa-chevron-left" aria-hidden="true" onclick="{previouspicture}" show="{opts.previouspictureavailable}"></i> <i style="font-size: 75px;" class="fa fa-chevron-right" aria-hidden="true" onclick="{nextpicture}" show="{opts.nextpictureavailable}"></i> </div>',"","",function(e){this.on("update",function(){console.log(e)}),this.closemodal=function(t){e.oncloseclick()},this.nextpicture=function(t){e.onnextclick(e.index),console.log(e)},this.previouspicture=function(t){e.onpreviousclick(e.index),console.log(e)},document.onkeydown=function(t){t=t||window.event;var n=!1,i=!1,r=!1;"key"in t?(n="Escape"==t.key||"Esc"==t.key,i="ArrowLeft"==t.key,r="ArrowRight"==t.key):(n=27==t.keyCode,i=37==t.keyCode,r=39==t.keyCode),n&&e.oncloseclick(),i&&e.onpreviousclick(e.index),r&&e.onnextclick(e.index)}})}).call(t,n(1))},function(e,t,n){(function(e){"use strict";e.tag2("fotimat-overview",'<div class="image-wrapper"> <a each="{entry in opts.alldata}" href="#" class="image-item {is-topic: entry.topic}" onclick="{openmodal}"> <h3>{entry.title}</h3> <div show="{entry.disclaimer}">{entry.disclaimer}</div> <figure hide="{entry.topic}"> <img class="image-overview" riot-src="{entry.image}" alt=""> <figcaption><strong>{entry.credit}</strong> {entry.legend}</figcaption> </figure> </a> </div> <div if="{opts.alldata.length > opts.data.length}" class="button-wrapper"> <a class="button" href="#" onclick="{showmore}"> Mehr Bilder laden </a> </div>',"","",function(e){this.showmore=function(t){e.onmoreclick(t)},this.openmodal=function(t){t.item.entry.topic||e.onpictureclick(t.item.entry)}})}).call(t,n(1))},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var r=n(1),o=n(7),a=i(o);n(6),n(2),n(4),n(3),(0,r.mount)("fotimat-app",{contentData:a.default})},function(e,t){},function(e,t){e.exports=[{topic:!0,title:"Woche 9: Mein Baudenkmal"},{topic:!1,title:"1. Rang",image:"images/Woche9_1_Michael-Gunti_Basel.jpg",credit:"",legend:"Michael Gunti, Basel"},{topic:!1,title:"2. Rang",image:"images/Woche9_2_Jintana-Wesseling_Groningen,NL.jpg",credit:"",legend:"Jintana Wesseling, Gronlingen, NL"},{topic:!1,title:"3. Rang",image:"images/Woche9_3_Sabine-Vogt_Basel.jpg",credit:"",legend:"Sabine Vogt, Basel"},{topic:!0,title:"Woche 8: Innenraum mit Charme"},{topic:!1,title:"1. Rang",image:"images/Woche8_1_Michael Gunti_Basel.jpg",credit:"",legend:"Michael Gunti, Basel"},{topic:!1,title:"2. Rang",image:"images/Woche8_2_Dina Bonefacic-Mihaljek_Oberwil.jpg",credit:"",legend:"Dina Bonefacic-Mihaljek, Oberwil"},{topic:!1,title:"3. Rang",image:"images/Woche8_3_Lisa Haller_Basel.jpg",credit:"",legend:"Lisa Haller, Basel"},{topic:!0,title:"Woche 7: Schönes Detail"},{topic:!1,title:"1. Rang",image:"images/Woche7-1_Julia_Spreng_Basel.jpg",credit:"",legend:"Julia Spreng, Basel"},{topic:!1,title:"2. Rang",image:"images/Woche7-2_Dina Bonefacic-Mihaljek_Oberwil.jpg",credit:"",legend:"Dina Bonefacic-Mihaljek, Oberwil"},{topic:!1,title:"3. Rang",image:"images/Woche7-3_Pai Mei_Basel.jpg",credit:"",legend:"Pai Mei, Basel"},{topic:!0,title:"Woche 6: Selbstgebautes",disclaimer:"Jurierung der eingegangenen Fotos wurde aufgrund von zuwenig Einsendungen abgesagt."},{topic:!1},{topic:!1},{topic:!1},{topic:!0,title:"Woche 5: Terrassenkultur"},{topic:!1,title:"1. Rang",image:"images/gruntz1.jpg",credit:"",legend:"Lukas Gruntz, Basel"},{topic:!1,title:"2. Rang",image:"images/bonefacic3.jpg",credit:"",legend:"Dina Bonefacic-Mihaljek, Oberwil"},{topic:!1,title:"3. Rang",image:"images/vogt3.jpg",credit:"",legend:"Sabine Vogt, Basel"},{topic:!0,title:"Woche 4: Sinnliche Materialien"},{topic:!1,title:"1. Rang",image:"images/bonefacic2.jpg",credit:"",legend:"Dina Bonefacic-Mihaljek, Oberwil"},{topic:!1,title:"2. Rang",image:"images/legrand1.jpg",credit:"",legend:"Etienne le Grand, Saint-Louis"},{topic:!1,title:"3. Rang",image:"images/moss1.jpg",credit:"",legend:"Kirstin Moss, Basel"},{topic:!0,title:"Woche 3: Prägnante Fassaden"},{topic:!1,title:"1. Rang",image:"images/vogt2.jpg",credit:"",legend:"Sabine Vogt, Basel"},{topic:!1,title:"2. Rang",image:"images/lieber1.jpg",credit:"",legend:"Harry Lieber, Steinen"},{topic:!1,title:"3. Rang",image:"images/digallo2.jpg",credit:"",legend:"Alain Di Gallo, Basel"},{topic:!0,title:"Woche 2: Hohe Türme"},{topic:!1,title:"1. Rang",image:"images/digallo1.jpg",credit:"",legend:"Alain Di Gallo, Basel"},{topic:!1,title:"2. Rang",image:"images/bagutti1.jpg",credit:"",legend:"Claudia Bagutti, Basel"},{topic:!1,title:"3. Rang",image:"images/vogt1.jpg",credit:"",legend:"Sabine Vogt, Basel"},{topic:!0,title:"Woche 1: Stadtlandschaften"},{topic:!1,title:"1. Rang",image:"images/hochreutener1.jpg",credit:"",legend:"Michael Hochreutener, Basel"},{topic:!1,title:"2. Rang",image:"images/bonefacic1.jpg",credit:"",legend:"Dina Bonefacic-Mihaljek, Oberwil"},{topic:!1,title:"3. Rang",image:"images/frommherz1.jpg",credit:"",legend:"Barbara Frommherz, Münchenstein"},{topic:!0,title:"Auftakt mit Kathrin Schulthess"},{topic:!1,title:" ",image:"images/schulthess1.jpg",credit:"",legend:"© kathrin schulthess fotografie"},{topic:!1,title:" ",image:"images/schulthess2.jpg",credit:"",legend:"© kathrin schulthess fotografie"},{topic:!1,title:" ",image:"images/schulthess3.jpg",credit:"",legend:"© kathrin schulthess fotografie"}]},function(e,t){(function(t){e.exports=t}).call(t,{})}]);