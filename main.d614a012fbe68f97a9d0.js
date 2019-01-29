!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=15)}([function(t,e,n){t.exports=n.p+"images/logo.svg"},function(t,e,n){t.exports=n.p+"images/help.svg"},function(t,e,n){t.exports=n.p+"images/main_button.svg"},function(t,e,n){t.exports=n.p+"images/facebook.svg"},function(t,e,n){t.exports=n.p+"images/twitter.svg"},function(t,e,n){t.exports=n.p+"images/dots.svg"},function(t,e,n){t.exports=n.p+"images/spotify.svg"},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};var o=Object.keys;function a(t){return"string"==typeof t}function i(t){return"object"==typeof t?null!==t:l(t)}function l(t){return"function"==typeof t}function u(t){return Array.isArray(t)?t.map(u).filter(Boolean).join(" "):i(t)?o(t).filter(function(e){return t[e]}).join(" "):function(t){return!function(t){return"boolean"==typeof t}(t)&&null!=t}(t)?""+t:""}function c(t,e){for(var n,u=[],c=2;c<arguments.length;c++)u[c-2]=arguments[c];return e=e||{},a(t)?(function(t,e){for(var n=0,r=o(t);n<r.length;n++){var a=r[n];p(a,t[a],e)}}(e,n=e.namespaceURI?document.createElementNS(e.namespaceURI,t):document.createElement(t)),f(u,n)):l(t)&&(n=t(r({},e,{children:u}))),!function(t){return i(t)&&"current"in t}(e.ref)?l(e.ref)&&e.ref(n):e.ref.current=n,n}function s(t,e){!function(t){return i(t)&&"number"==typeof t.length&&"number"!=typeof t.nodeType}(t)?a(t)||function(t){return"number"==typeof t}(t)?e.appendChild(document.createTextNode(t)):null===t?e.appendChild(document.createComment("")):function(t){return t&&"number"==typeof t.nodeType}(t)&&e.appendChild(t):f(t,e)}function f(t,e){for(var n=0,r=t;n<r.length;n++){s(r[n],e)}return e}function p(t,e,n){switch(t){case"dataset":for(var a=0,c=o(e||{});a<c.length;a++){var s=c[a],f=e[s];null!=f&&(n.dataset[s]=f)}return;case"innerHTML":case"innerText":case"textContent":return void(n[t]=e);case"spellCheck":return void(n.spellcheck=e);case"class":case"className":return void n.setAttribute("class",u(e));case"ref":case"namespaceURI":return;case"style":if(i(e))return void r(n.style,e)}l(e)?"o"===t[0]&&"n"===t[1]&&function(t,e,n){t.addEventListener(e,n)}(n,t.slice(2).toLowerCase(),e):!0===e?n.setAttribute(t,""):!1!==e&&null!=e&&n.setAttribute(t,e)}n(7),n(8);var d=n(0),m=n.n(d),g=n(1),h=n.n(g);function y(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var b=function(t){var e=t.children,n=y(t,["children"]);return c("a",{href:n.to,className:n.className,onClick:function(){return n.onClick?n.onClick():function(t){t.preventDefault(),history.pushState({},"",t.currentTarget.href)}()}},e)},v=!1,O=function(){event.preventDefault,document.querySelector("main").classList.toggle("footer_visible"),v=!v},w=function(){return c("header",null,c("div",null),c("h1",null,c(b,{to:"/"},c("img",{className:"main-logo",src:m.a,alt:"Musicr"}))),c(b,{className:"button",onClick:O},c("img",{src:h.a,alt:"Help"})," Help"))},x=(n(9),n(2)),j=n.n(x),S=function(){return c("button",{className:"main-button"},c("img",{src:j.a,alt:"Click to start"}),c("div",{className:"horizontal-line"}),c("p",null,"listen"))},k=function(){return c("section",{className:"background fullscreen main-screen"},c(S,null),c("a",{href:"#song_history",className:"bottom-notice"},"previously listened"))};n(10);function M(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var _=function(t){t.children,M(t,["children"]);return c("footer",null,c("p",null,"Musicr.io is the first* online music recognition software. It helps you find out what song your currently listening to and can even recognize you humming your favourite songs. Musicr.io equips you with all the important information including songtitle, artist, album and lyrics."),c("p",null,"Simply click the big orange button!"),c("p",null,"Musicr.io is being developed by Georg Schreglmann and Niklas Noldin at the University of Applied Sciences Salzburg."),c("p",null,c("a",{href:"/imprint.html",class:"underline"},"imprint"),"|",c("a",{href:"/data_protection.html",class:"underline"},"data protection info")),c("p",{class:"small_text"},"* It's probably not the first one, but it's cool."))},C=(n(11),n(12),n(3)),N=n.n(C),P=n(4),T=n.n(P),U=n(5),E=n.n(U),I=(n(13),function(t){t.currentTarget.classList.toggle("social_media_visible")}),L=function(){return c("div",{class:"social_media",onClick:I},c("button",{"aria-label":"Open Social Media Field"},c("img",{src:E.a,alt:"Open Button"})),c("ul",null,c("li",null,c("a",{href:"https://twitter.com"},c("img",{src:T.a,alt:"Twitter"}))),c("li",null,c("a",{href:"https://facebook.com"},c("img",{src:N.a,alt:"Facebook"})))))},B=n(6),A=n.n(B),H=(n(14),function(){return c("a",{href:"#",class:"spotify_btn"},c("img",{src:A.a,alt:"Spotify"}),c("p",null,"Open"))});function z(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var F=function(t){t.children;var e=z(t,["children"]);return c("li",{className:"mediabox"},c(b,{to:"/"},c("img",{src:"https://placehold.it/500/500",alt:"Lorempixel"})),c("div",null,c("h3",null,e.title),c("h4",{className:"artist"},e.artist),c("h4",{className:"album"},e.album),c(H,null),c(L,null),c(b,{to:"/song.html?sid=3XSczvk4MRteOw4Yx3lqMU&artist=Backstreet%20Boys&song=I%20Want%20it%20that%20way&tense=past&album=The%20Hits--Chapter%20One",className:"more_btn"},"Show me more")))},R=[{title:"Make my bunga bunga!",artist:"Benjamin Joham",album:"Who the Fuck is Benny J?"},{title:"Babel Config",artist:"Luca Pircher",album:"ES6 Hits 2015"}],q=function(){return c("section",{class:"song_history",id:"song_history"},c("h2",null,"Previously listened:"),R.map(function(t){return c(F,{title:t.title,artist:t.artist,album:t.album})}))};function D(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var G=function(t){t.children,D(t,["children"]);return c("div",null,c("main",null,c(k,null),c(q,null)),c(_,null))},J=function(){return c("h2",null,"Error 404: Page Not Found")},W=function(t){var e=t.data,n=new FormData;n.append("file",e),$.ajax({url:"https://musicr.schreglmann.at/api.php",dataType:"json",cache:!1,contentType:!1,processData:!1,data:n,type:"post",success:function(t){console.log("success"),X(t)},error:function(){console.log("Something went wrong")}})},X=function(t){var e,n,r,o,a,i,l,u;try{e=t.metadata.music[0].title}catch(t){e=null}try{n=t.metadata.music[0].artists[0].name}catch(t){n=null}try{r=t.metadata.music[0].album.name}catch(t){r=null}try{o=t.metadata.music[0].external_metadata.spotify.track.id}catch(t){o=null}try{a=t.metadata.music[0].external_metadata.youtube.vid}catch(t){a=null}try{i=t.metadata.music[0].genres[0].name}catch(t){i=null}try{l=t.metadata.music[0].external_metadata.lyricfind.lfid}catch(t){l=null}u=null==a?null:"https://www.youtube.com/watch?v=".concat(a),console.log("title:",e),console.log("artist:",n),console.log("album:",r),console.log("spotifyid:",o),console.log("youtube:",u),console.log("genre:",i),console.log("lyricfindid:",l),console.log(t)},Y=function(t){t=t.indexOf("?")>=0?t.substring(t.indexOf("/",7),t.indexOf("?")):t.substring(t.indexOf("/",7));var e=document.getElementById("root");switch(e.innerHTML="",e.appendChild(c(w,null)),t){case"/":e.appendChild(c(G,null));break;default:e.appendChild(c(J,null))}};window.addEventListener("popstate",function(t){Y(window.location.pathname)},!1),function(t){var e=t.pushState;t.pushState=function(n,r,o){return"function"==typeof t.onpushstate&&t.onpushstate({state:n,title:r,path:o}),e.apply(t,arguments)}}(window.history),history.onpushstate=function(t){Y(t.path)},Y(window.location.pathname),function(){navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;var t=document.querySelector(".main-button");navigator.getUserMedia?(console.log("getUserMedia supported."),navigator.getUserMedia({audio:!0},function(e){var n=new MediaRecorder(e),r=!1;t.onclick=function(){r||(n.start(),console.log(n.state),r=!0,setTimeout(function(){n.stop(),r=!1},1e4))},n.ondataavailable=function(t){console.log("data available"),W(t)}},function(t){console.log("The following gUM error occured: "+t)})):console.log("getUserMedia not supported on your browser!")}()}]);