!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r),r("1oUik");var i,a="Expected a function",c=NaN,s="[object Symbol]",l=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,p=parseInt,m="object"==typeof t&&t&&t.Object===Object&&t,y="object"==typeof self&&self&&self.Object===Object&&self,v=m||y||Function("return this")(),h=Object.prototype.toString,b=Math.max,g=Math.min,x=function(){return v.Date.now()};function T(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&h.call(e)==s}(e))return c;if(T(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=T(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=u.test(e);return n||f.test(e)?p(e.slice(2),n?2:8):d.test(e)?c:+e}i=function(e,t,n){var o,r,i,c,s,l,d=0,u=!1,f=!1,p=!0;if("function"!=typeof e)throw new TypeError(a);function m(t){var n=o,i=r;return o=r=void 0,d=t,c=e.apply(i,n)}function y(e){var n=e-l;return void 0===l||n>=t||n<0||f&&e-d>=i}function v(){var e=x();if(y(e))return h(e);s=setTimeout(v,function(e){var n=t-(e-l);return f?g(n,i-(e-d)):n}(e))}function h(e){return s=void 0,p&&o?m(e):(o=r=void 0,c)}function M(){var e=x(),n=y(e);if(o=arguments,r=this,l=e,n){if(void 0===s)return function(e){return d=e,s=setTimeout(v,t),u?m(e):c}(l);if(f)return s=setTimeout(v,t),m(l)}return void 0===s&&(s=setTimeout(v,t)),c}return t=w(t)||0,T(n)&&(u=!!n.leading,i=(f="maxWait"in n)?b(w(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),M.cancel=function(){void 0!==s&&clearTimeout(s),d=0,o=l=r=s=void 0},M.flush=function(){return void 0===s?c:h(x())},M};var M=r("idiT7"),k=r("dIxxU");const L="https://api.themoviedb.org/3/search/movie?api_key=b972cd435eef10c3549386c0239d193f";async function _(e,t){try{return(await k.default.get(L,{params:{query:e,page:t}})).data}catch(e){console.log(e)}}function S(e,t){e.classList.remove("visually-hidden"),t?.classList.add("visually-hidden")}function j(e,t){e.classList.add("visually-hidden"),t?.classList.remove("visually-hidden")}const E={spinner:document.querySelector(".spinner"),iconSearch:document.querySelector(".icon-search"),spinnerGallery:document.querySelector(".js-spinner-gallery")};var C=r("fj9x3");C=r("fj9x3");const H=document.forms[0],O=H[1],q=H[2],$=document.querySelector(".hero__list"),N=document.querySelector(".header_main__form__error");N.style.opacity="0",N.style.transition="opacity 0.5s";let z=1;const A=document.createElement("ul");function F(e){e.style.opacity="0",e.style.transition="opacity 0.5s"}A.setAttribute("class","search-helper"),H.appendChild(A),O.addEventListener("input",e(i)((function(e){if(e.preventDefault(),!O.value.trim())return void F(A);_(O.value.trim(),1).then((e=>{A.innerHTML=e.results.map((({title:e,vote_average:t})=>`<li class="search-helper__item">${e}\n        <span class="search-helper__vote">${String(t).padEnd(2,".").padEnd(3,"0")}</span></li>`)).join(""),A.style.opacity="1",A.style.transition="opacity 0.5s"})).catch((e=>console.log(e)))}),500)),q.addEventListener("click",(async function(e){e.preventDefault();const t=O.value.trim();A.innerHTML="",C.paginationEl.style.display="none",z=1,O.value.trim()||(N.style.opacity="1",setTimeout((()=>F(N)),2e3));await _(t,z).then((e=>{const n=e.total_results;n||(N.style.opacity="1",setTimeout((()=>F(N)),2e3)),n>=1&&($.innerHTML="",$.insertAdjacentHTML("beforeend",(0,M.createFilmCardMarkap)(e.results)),z+=1,(0,C.makePagination)(e.total_results,e.total_pages).on("afterMove",(({page:e})=>{_(t,e).then((e=>{console.log(e),$.innerHTML="",$.insertAdjacentHTML("beforeend",(0,M.createFilmCardMarkap)(e.results))}))})))})).catch((e=>console.log(e))).finally((()=>{H.reset()}))})),A.addEventListener("click",(function(e){let t=e.target.textContent.slice(0,-4).trim();O.value=t,S(E.spinnerGallery,E.iconSearch),_(O.value.trim().toLowerCase(),z).then((e=>{if(!e.results.length)return N.style.opacity="1",setTimeout((()=>F()),3e3),void setTimeout((()=>{j(E.spinnerGallery,E.iconSearch)}),400);setTimeout((()=>{j(E.spinnerGallery,E.iconSearch)}),400),$.innerHTML="",$.insertAdjacentHTML("beforeend",(0,M.createFilmCardMarkap)(e.results))})).catch((e=>console.log(e))),setTimeout((()=>{j(E.spinnerGallery,E.iconSearch)}),400),F(A),H.reset()}));M=r("idiT7"),C=r("fj9x3");var D=(k=r("dIxxU")).default;const G="7b4917c1c89b56950d6ac1f3ef5382d2",I="https://api.themoviedb.org/3";B(1);const U=document.querySelector(".hero__list");async function B(e=1){try{const t=await P(e);U.insertAdjacentHTML("beforeend",(0,M.createFilmCardMarkap)(t.results)),(0,C.makePagination)(t.total_results,t.total_pages).on("afterMove",(({page:e})=>{P(e).then((e=>{U.innerHTML="",U.insertAdjacentHTML("beforeend",(0,M.createFilmCardMarkap)(e.results))}))}))}catch(e){console.error(e)}}async function P(e){S(E.spinnerGallery,E.iconSearch);try{const t=await D.get(`${I}/trending/movie/day?api_key=${G}&page=${e}`);return e+=1,t.data}catch(e){console.log(`${e}`)}finally{setTimeout((()=>{j(E.spinnerGallery,E.iconSearch)}),300)}}B().then();r("idiT7"),r("dd54g");var W,R,J={};function K(e){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K(e)}W="undefined"!=typeof self?self:void 0,R=function(e){e.addBackToTop=function(){var e,t,n,o,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=r.backgroundColor,a=void 0===i?"#000":i,c=r.cornerOffset,s=void 0===c?20:c,l=r.diameter,d=void 0===l?56:l,u=r.ease,f=void 0===u?function(e){return.5*(1-Math.cos(Math.PI*e))}:u,p=r.id,m=void 0===p?"back-to-top":p,y=r.innerHTML,v=void 0===y?'<svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg>':y,h=r.onClickScrollTo,b=void 0===h?0:h,g=r.scrollContainer,x=void 0===g?document.body:g,T=r.scrollDuration,w=void 0===T?100:T,M=r.showWhenScrollTopIs,k=void 0===M?1:M,L=r.size,_=void 0===L?d:L,S=r.textColor,j=void 0===S?"#fff":S,E=r.zIndex,C=void 0===E?1:E,H=x===document.body,O=H&&document.documentElement;e=Math.round(.43*_),t=Math.round(.29*_),n="#"+m+"{background:"+a+";-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;bottom:"+s+"px;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);-moz-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);box-shadow:0 2px 5px 0 rgba(0,0,0,.26);color:"+j+";cursor:pointer;display:block;height:"+_+"px;opacity:1;outline:0;position:fixed;right:"+s+"px;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-transition:bottom .2s,opacity .2s;-o-transition:bottom .2s,opacity .2s;-moz-transition:bottom .2s,opacity .2s;transition:bottom .2s,opacity .2s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:"+_+"px;z-index:"+C+"}#"+m+" svg{display:block;fill:currentColor;height:"+e+"px;margin:"+t+"px auto 0;width:"+e+"px}#"+m+".hidden{bottom:-"+_+"px;opacity:0}",(o=document.createElement("style")).appendChild(document.createTextNode(n)),document.head.insertAdjacentElement("afterbegin",o);var q=function(){var e=document.createElement("div");return e.id=m,e.className="hidden",e.innerHTML=v,e.addEventListener("click",(function(e){e.preventDefault(),function(){var e="function"==typeof b?b():b,t=window,n=t.performance,o=t.requestAnimationFrame;if(w<=0||void 0===n||void 0===o)return A(e);var r=n.now(),i=z(),a=i-e;function c(e){var t=Math.min((e-r)/w,1);A(i-Math.round(f(t)*a)),t<1&&o(c)}o(c)}()})),document.body.appendChild(e),e}(),$=!0;function N(){z()>=k?$&&(q.className="",$=!1):$||(q.className="hidden",$=!0)}function z(){return x.scrollTop||O&&document.documentElement.scrollTop||0}function A(e){x.scrollTop=e,O&&(document.documentElement.scrollTop=e)}(H?window:x).addEventListener("scroll",N),N()}},"function"==typeof define&&define.amd?define(["exports"],R):"object"===K(J)&&"string"!=typeof J.nodeName?R(J):R(W.commonJsStrict={}),(0,J.addBackToTop)({diameter:40,backgroundColor:"#ddd",textColor:"#ff6b08"})}();
//# sourceMappingURL=index.3c11773a.js.map