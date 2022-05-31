import{S as O,i as z,s as R,e as d,a as C,b as f,c as h,d as m,l as j,n as k,f as _,r as ne,t as T,g as I,h as Z,j as H,k as P,m as L,o as q,p as x,q as U,u as D,v as $,w as B,x as ee,y as le,z as te}from"./vendor.56d5950f.js";const oe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(e){if(e.ep)return;e.ep=!0;const i=l(e);fetch(e.href,i)}};oe();let M="spotify_auth_state",A="https://api.spotify.com/v1",N={Years:"long_term",Months:"medium_term",Weeks:"short_term"};function re(r){let t,l,n,e,i,o,a,s;return{c(){t=d("div"),l=d("button"),l.textContent="Several years",n=C(),e=d("button"),e.textContent="Last 6 months",i=C(),o=d("button"),o.textContent="Last 4 weeks",f(l,"class","font-semibold leading-none text-white py-4 px-10 bg-green-600 rounded hover:bg-green-500 focus:ring-2 focus:ring-offset-2 focus:ring-green-600 focus:outline-none m-3"),f(e,"class","font-semibold leading-none text-white py-4 px-10 bg-green-600 rounded hover:bg-green-500 focus:ring-2 focus:ring-offset-2 focus:ring-green-600 focus:outline-none m-3"),f(o,"class","font-semibold leading-none text-white py-4 px-10 bg-green-600 rounded hover:bg-green-500 focus:ring-2 focus:ring-offset-2 focus:ring-green-600 focus:outline-none m-3"),f(t,"class","flex flex-col md:flex-row items-center justify-center w-full m-5")},m(c,p){h(c,t,p),m(t,l),m(t,n),m(t,e),m(t,i),m(t,o),a||(s=[j(l,"click",r[2]),j(e,"click",r[3]),j(o,"click",r[4])],a=!0)},p:k,i:k,o:k,d(c){c&&_(t),a=!1,ne(s)}}}function ie(r,t,l){let{changeTimeLimit:n}=t,{onCreatePlaylist:e}=t;const i=()=>n(N.Years),o=()=>n(N.Months),a=()=>n(N.Weeks);return r.$$set=s=>{"changeTimeLimit"in s&&l(0,n=s.changeTimeLimit),"onCreatePlaylist"in s&&l(1,e=s.onCreatePlaylist)},[n,e,i,o,a]}class se extends O{constructor(t){super();z(this,t,ie,re,R,{changeTimeLimit:0,onCreatePlaylist:1})}}function E(r,t,l){const n=r.slice();return n[4]=t[l],n}function J(r){let t,l=r[2],n=[];for(let e=0;e<l.length;e+=1)n[e]=K(E(r,l,e));return{c(){t=d("div");for(let e=0;e<n.length;e+=1)n[e].c();f(t,"class","text-normal text-gray-300 hover:text-gray-400 cursor-pointer")},m(e,i){h(e,t,i);for(let o=0;o<n.length;o+=1)n[o].m(t,null)},p(e,i){if(i&4){l=e[2];let o;for(o=0;o<l.length;o+=1){const a=E(e,l,o);n[o]?n[o].p(a,i):(n[o]=K(a),n[o].c(),n[o].m(t,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=l.length}},d(e){e&&_(t),Z(n,e)}}}function K(r){let t,l=r[4].name+"",n;return{c(){t=d("span"),n=T(l),f(t,"class","border-b border-dashed border-gray-500 pb-1")},m(e,i){h(e,t,i),m(t,n)},p(e,i){i&4&&l!==(l=e[4].name+"")&&I(n,l)},d(e){e&&_(t)}}}function W(r){let t,l,n;return{c(){t=d("div"),l=d("a"),n=T("Open"),f(l,"href",r[3]),f(l,"target","_black"),f(t,"class","text-sm text-gray-300 hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0")},m(e,i){h(e,t,i),m(t,l),m(l,n)},p(e,i){i&8&&f(l,"href",e[3])},d(e){e&&_(t)}}}function ae(r){let t,l,n,e,i,o,a,s,c,p,b,u,y,g=r[2]&&J(r),v=r[3]&&W(r);return{c(){t=d("div"),l=d("div"),n=d("div"),e=d("div"),i=d("img"),a=C(),s=d("div"),c=d("div"),p=d("div"),b=T(r[1]),u=C(),g&&g.c(),y=C(),v&&v.c(),f(i,"class","rounded-lg shadow-lg antialiased"),H(i.src,o=r[0])||f(i,"src",o),f(i,"alt","track cover"),f(e,"class","md:w-1/3 w-full"),f(p,"class","text-2xl text-white leading-tight"),f(c,"class","w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0"),f(s,"class","md:w-2/3 w-full px-3 flex flex-row flex-wrap"),f(n,"class","rounded-lg shadow-lg bg-neutral-600 dark:bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased"),P(n,"background-image","url('"+r[0]+"')"),P(n,"background-repeat","no-repat"),P(n,"background-size","cover"),P(n,"background-blend-mode","multiply"),f(l,"class","mx-auto md:w-2/3"),f(t,"class","w-screen bg-white dark:bg-gray-900 flex flex-row flex-wrap p-3 overflow-hidden")},m(w,S){h(w,t,S),m(t,l),m(l,n),m(n,e),m(e,i),m(n,a),m(n,s),m(s,c),m(c,p),m(p,b),m(c,u),g&&g.m(c,null),m(c,y),v&&v.m(c,null)},p(w,[S]){S&1&&!H(i.src,o=w[0])&&f(i,"src",o),S&2&&I(b,w[1]),w[2]?g?g.p(w,S):(g=J(w),g.c(),g.m(c,y)):g&&(g.d(1),g=null),w[3]?v?v.p(w,S):(v=W(w),v.c(),v.m(c,null)):v&&(v.d(1),v=null),S&1&&P(n,"background-image","url('"+w[0]+"')")},i:k,o:k,d(w){w&&_(t),g&&g.d(),v&&v.d()}}}function ce(r,t,l){let{cover:n}=t,{name:e}=t,{artists:i}=t,{url:o}=t;return r.$$set=a=>{"cover"in a&&l(0,n=a.cover),"name"in a&&l(1,e=a.name),"artists"in a&&l(2,i=a.artists),"url"in a&&l(3,o=a.url)},[n,e,i,o]}class ue extends O{constructor(t){super();z(this,t,ce,ae,R,{cover:0,name:1,artists:2,url:3})}}function fe(){window.document.querySelector("html").classList.toggle("dark")}function de(){let r={},t,l=/([^&;=]+)=?([^&;]*)/g,n=window.location.hash.substring(1);for(;t=l.exec(n);)r[t[1]]=decodeURIComponent(t[2]);return r}function me(r){let t="";const l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let n=0;n<r;n++)t+=l.charAt(Math.floor(Math.random()*l.length));return t}function pe(){let r="e0df5d5670e54d19bab0026e3f80896b",t=window.location.origin+window.location.pathname,l=me(16);localStorage.setItem(M,l);let n="user-top-read",e="https://accounts.spotify.com/authorize";return e+="?response_type=token",e+="&client_id="+encodeURIComponent(r),e+="&scope="+encodeURIComponent(n),e+="&redirect_uri="+encodeURIComponent(t),e+="&state="+encodeURIComponent(l),e}async function ge(r){return typeof r=="undefined"?null:await fetch(`${A}/me`,{headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"}}).then(t=>t.json())}async function Y(r,t,l,n,e){if(typeof r=="undefined")return[];let i=be({time_range:l,offset:n,limit:e});return await fetch(`${A}/me/top/${t}${i}`,{headers:{Accept:"application/json",Authorization:"Bearer "+r,"Content-Type":"application/json"}}).then(o=>o.json()).then(o=>o.items?o.items:[]).catch(o=>(localStorage.removeItem(M),console.log(o),[]))}async function he(r,t,l,n){const e=JSON.stringify({description:`Best song ${new Date().toDateString()}. Made by simone98dm`,public:!1,title:r});await fetch(`${A}/users/${t}/playlists`,{headers:{Accept:"application/json",Authorization:"Bearer "+n,"Content-Type":"application/json"},body:e,method:"POST"}).then(i=>i.json()).then(i=>_e(i,l,n)).catch(i=>console.error(i))}async function _e(r,t,l){if(!r)return;const n=JSON.stringify(t.map(e=>e.uri));await fetch(`${A}/playlists/${r.id}/tracks`,{headers:{Accept:"application/json",Authorization:"Bearer "+l,"Content-Type":"application/json"},body:n,method:"POST"}).then(e=>e.json()).catch(e=>console.error(e))}function be(r){let t="?";for(const l in r)if(Object.prototype.hasOwnProperty.call(r,l)){const n=r[l];t+=`&${l}=${n}`}return t}function F(r,t,l){const n=r.slice();return n[11]=t[l],n}function ye(r){let t,l,n;return{c(){t=d("h1"),t.textContent="Hey\u{1F919}",l=C(),n=d("h2"),n.textContent="check out your spotify top songs, please login before continue",f(t,"class","text-center text-5xl text-gray-700 dark:text-stone-200 font-bold text-center my-2"),f(n,"class","text-xl text-gray-500 text-center dark:text-gray-400")},m(e,i){h(e,t,i),h(e,l,i),h(e,n,i)},p:k,d(e){e&&_(t),e&&_(l),e&&_(n)}}}function ke(r){let t,l,n,e,i=r[1].display_name+"",o,a,s,c,p;return{c(){t=d("h1"),l=T("Hello "),n=d("span"),n.textContent="\u{1F590}",e=T(" \uFE0F"),o=T(i),a=C(),s=d("h2"),s.textContent="here your top spotify songs",f(t,"class","text-center text-5xl text-gray-700 dark:text-stone-200 font-bold text-center my-2"),f(s,"class","text-xl text-gray-500 text-center dark:text-gray-400")},m(b,u){h(b,t,u),m(t,l),m(t,n),m(t,e),m(t,o),h(b,a,u),h(b,s,u),c||(p=j(n,"click",fe),c=!0)},p(b,u){u&2&&i!==(i=b[1].display_name+"")&&I(o,i)},d(b){b&&_(t),b&&_(a),b&&_(s),c=!1,p()}}}function ve(r){let t,l,n,e,i;t=new se({props:{changeTimeLimit:r[3],onCreatePlaylist:r[5]}});let o={ctx:r,current:null,token:null,hasCatch:!0,pending:Te,then:Ce,catch:xe,value:10,error:14,blocks:[,,,]};return D(e=r[2],o),{c(){$(t.$$.fragment),l=C(),n=B(),o.block.c()},m(a,s){ee(t,a,s),h(a,l,s),h(a,n,s),o.block.m(a,o.anchor=s),o.mount=()=>n.parentNode,o.anchor=n,i=!0},p(a,s){r=a,o.ctx=r,s&4&&e!==(e=r[2])&&D(e,o)||le(o,r,s)},i(a){i||(x(t.$$.fragment,a),x(o.block),i=!0)},o(a){L(t.$$.fragment,a);for(let s=0;s<3;s+=1){const c=o.blocks[s];L(c)}i=!1},d(a){te(t,a),a&&_(l),a&&_(n),o.block.d(a),o.token=null,o=null}}}function we(r){let t,l,n;return{c(){t=d("button"),t.textContent="Log in with Spotify",f(t,"class","mt-9 font-semibold leading-none text-white py-4 px-10 bg-green-600 rounded hover:bg-green-500 focus:ring-2 focus:ring-offset-2 focus:ring-green-600 focus:outline-none m-3")},m(e,i){h(e,t,i),l||(n=j(t,"click",r[4]),l=!0)},p:k,i:k,o:k,d(e){e&&_(t),l=!1,n()}}}function xe(r){let t,l=r[14]+"",n;return{c(){t=d("p"),n=T(l)},m(e,i){h(e,t,i),m(t,n)},p(e,i){i&4&&l!==(l=e[14]+"")&&I(n,l)},i:k,o:k,d(e){e&&_(t)}}}function Ce(r){let t,l,n,e;const i=[Se,Le],o=[];function a(s,c){return s[10].length>0?0:1}return t=a(r),l=o[t]=i[t](r),{c(){l.c(),n=B()},m(s,c){o[t].m(s,c),h(s,n,c),e=!0},p(s,c){let p=t;t=a(s),t===p?o[t].p(s,c):(U(),L(o[p],1,1,()=>{o[p]=null}),q(),l=o[t],l?l.p(s,c):(l=o[t]=i[t](s),l.c()),x(l,1),l.m(n.parentNode,n))},i(s){e||(x(l),e=!0)},o(s){L(l),e=!1},d(s){o[t].d(s),s&&_(n)}}}function Le(r){let t;return{c(){t=d("h1"),t.textContent="No data found"},m(l,n){h(l,t,n)},p:k,i:k,o:k,d(l){l&&_(t)}}}function Se(r){let t,l,n=r[10],e=[];for(let o=0;o<n.length;o+=1)e[o]=Q(F(r,n,o));const i=o=>L(e[o],1,1,()=>{e[o]=null});return{c(){for(let o=0;o<e.length;o+=1)e[o].c();t=B()},m(o,a){for(let s=0;s<e.length;s+=1)e[s].m(o,a);h(o,t,a),l=!0},p(o,a){if(a&4){n=o[10];let s;for(s=0;s<n.length;s+=1){const c=F(o,n,s);e[s]?(e[s].p(c,a),x(e[s],1)):(e[s]=Q(c),e[s].c(),x(e[s],1),e[s].m(t.parentNode,t))}for(U(),s=n.length;s<e.length;s+=1)i(s);q()}},i(o){if(!l){for(let a=0;a<n.length;a+=1)x(e[a]);l=!0}},o(o){e=e.filter(Boolean);for(let a=0;a<e.length;a+=1)L(e[a]);l=!1},d(o){Z(e,o),o&&_(t)}}}function Q(r){let t,l;return t=new ue({props:{cover:r[11].album.images[0].url,name:r[11].name,artists:r[11].artists,url:r[11].external_urls.spotify}}),{c(){$(t.$$.fragment)},m(n,e){ee(t,n,e),l=!0},p(n,e){const i={};e&4&&(i.cover=n[11].album.images[0].url),e&4&&(i.name=n[11].name),e&4&&(i.artists=n[11].artists),e&4&&(i.url=n[11].external_urls.spotify),t.$set(i)},i(n){l||(x(t.$$.fragment,n),l=!0)},o(n){L(t.$$.fragment,n),l=!1},d(n){te(t,n)}}}function Te(r){let t;return{c(){t=d("div"),t.innerHTML='<div class="ldio-z6h7l1lpshs"><div></div></div>',f(t,"class","loadingio-spinner-rolling-xjk8h47j69")},m(l,n){h(l,t,n)},p:k,i:k,o:k,d(l){l&&_(t)}}}function Pe(r){let t,l,n,e,i;function o(u,y){return u[1]?ke:ye}let a=o(r),s=a(r);const c=[we,ve],p=[];function b(u,y){return u[0]==null?0:1}return n=b(r),e=p[n]=c[n](r),{c(){t=d("main"),s.c(),l=C(),e.c(),f(t,"class","bg-white dark:bg-gray-900 overflow-hidden")},m(u,y){h(u,t,y),s.m(t,null),m(t,l),p[n].m(t,null),i=!0},p(u,[y]){a===(a=o(u))&&s?s.p(u,y):(s.d(1),s=a(u),s&&(s.c(),s.m(t,l)));let g=n;n=b(u),n===g?p[n].p(u,y):(U(),L(p[g],1,1,()=>{p[g]=null}),q(),e=p[n],e?e.p(u,y):(e=p[n]=c[n](u),e.c()),x(e,1),e.m(t,null))},i(u){i||(x(e),i=!0)},o(u){L(e),i=!1},d(u){u&&_(t),s.d(),p[n].d()}}}let G=20,V=0,X="tracks";function je(r,t,l){let n=de(),e=n.access_token,i=n.state,o=localStorage.getItem(M),a=null,s="long_term",c=Promise.resolve([]);e&&(typeof i=="undefined"||i!==o)?(alert("There was an error during the authentication"),location.href=location.pathname,e=null):typeof e!="undefined"&&ge(e).then(y=>l(1,a=y)),e!=null&&(c=Y(e,X,s,V,G).catch(()=>[]));function p(y){l(6,s=y)}function b(){window.location=pe()}async function u(y){const g=encodeURI(y);await he(g,a.id,await c,e)}return r.$$.update=()=>{r.$$.dirty&65&&l(2,c=Y(e,X,s,V,G).catch(()=>[]))},[e,a,c,p,b,u,s]}class Ie extends O{constructor(t){super();z(this,t,je,Pe,R,{})}}new Ie({target:document.getElementById("app")});
