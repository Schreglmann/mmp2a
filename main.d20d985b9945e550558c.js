!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=22)}([function(e,t,n){e.exports=n.p+"images/genius.png"},function(e,t,n){},function(e,t,n){},function(e,t,n){e.exports=n.p+"images/logo.svg"},function(e,t,n){e.exports=n.p+"images/help.svg"},function(e,t,n){},function(e,t,n){e.exports=n.p+"images/main_button.svg"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){e.exports=n.p+"images/facebook.svg"},function(e,t,n){e.exports=n.p+"images/twitter.svg"},function(e,t,n){e.exports=n.p+"images/dots.svg"},function(e,t,n){},function(e,t,n){e.exports=n.p+"images/spotify.svg"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var o=Object.keys;function i(e){return"string"==typeof e}function a(e){return"object"==typeof e?null!==e:l(e)}function l(e){return"function"==typeof e}function s(e){return Array.isArray(e)?e.map(s).filter(Boolean).join(" "):a(e)?o(e).filter(function(t){return e[t]}).join(" "):function(e){return!function(e){return"boolean"==typeof e}(e)&&null!=e}(e)?""+e:""}function c(e,t){for(var n,s=[],c=2;c<arguments.length;c++)s[c-2]=arguments[c];return t=t||{},i(e)?(function(e,t){for(var n=0,r=o(e);n<r.length;n++){var i=r[n];p(i,e[i],t)}}(t,n=t.namespaceURI?document.createElementNS(t.namespaceURI,e):document.createElement(e)),f(s,n)):l(e)&&(n=e(r({},t,{children:s}))),!function(e){return a(e)&&"current"in e}(t.ref)?l(t.ref)&&t.ref(n):t.ref.current=n,n}function u(e,t){!function(e){return a(e)&&"number"==typeof e.length&&"number"!=typeof e.nodeType}(e)?i(e)||function(e){return"number"==typeof e}(e)?t.appendChild(document.createTextNode(e)):null===e?t.appendChild(document.createComment("")):function(e){return e&&"number"==typeof e.nodeType}(e)&&t.appendChild(e):f(e,t)}function f(e,t){for(var n=0,r=e;n<r.length;n++){u(r[n],t)}return t}function p(e,t,n){switch(e){case"dataset":for(var i=0,c=o(t||{});i<c.length;i++){var u=c[i],f=t[u];null!=f&&(n.dataset[u]=f)}return;case"innerHTML":case"innerText":case"textContent":return void(n[e]=t);case"spellCheck":return void(n.spellcheck=t);case"class":case"className":return void n.setAttribute("class",s(t));case"ref":case"namespaceURI":return;case"style":if(a(t))return void r(n.style,t)}l(t)?"o"===e[0]&&"n"===e[1]&&function(e,t,n){e.addEventListener(t,n)}(n,e.slice(2).toLowerCase(),t):!0===t?n.setAttribute(e,""):!1!==t&&null!=t&&n.setAttribute(e,t)}n(1),n(2),n(3),n(4);function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var g=function(e){e.preventDefault(),history.pushState({},"",e.currentTarget.href)},h=function(e){var t=e.children,n=d(e,["children"]);return c("a",{href:n.to,className:n.className,onClick:g},t)},m=Object.keys;function b(e){return"string"==typeof e}function v(e){return"object"==typeof e?null!==e:y(e)}function y(e){return"function"==typeof e}var w="http://www.w3.org/2000/svg",O="http://www.w3.org/1999/xlink",x="http://www.w3.org/XML/1998/namespace";function S(e){return Array.isArray(e)?e.map(S).filter(Boolean).join(" "):v(e)?m(e).filter(function(t){return e[t]}).join(" "):function(e){return!function(e){return"boolean"==typeof e}(e)&&null!=e}(e)?""+e:""}var k={animate:0,circle:0,clipPath:0,defs:0,desc:0,ellipse:0,feBlend:0,feColorMatrix:0,feComponentTransfer:0,feComposite:0,feConvolveMatrix:0,feDiffuseLighting:0,feDisplacementMap:0,feDistantLight:0,feFlood:0,feFuncA:0,feFuncB:0,feFuncG:0,feFuncR:0,feGaussianBlur:0,feImage:0,feMerge:0,feMergeNode:0,feMorphology:0,feOffset:0,fePointLight:0,feSpecularLighting:0,feSpotLight:0,feTile:0,feTurbulence:0,filter:0,foreignObject:0,g:0,image:0,line:0,linearGradient:0,marker:0,mask:0,metadata:0,path:0,pattern:0,polygon:0,polyline:0,radialGradient:0,rect:0,stop:0,svg:0,switch:0,symbol:0,text:0,textPath:0,tspan:0,use:0,view:0};function j(e,t){for(var n,o=[],i=2;i<arguments.length;i++)o[i-2]=arguments[i];return(t=t||{}).namespaceURI||0!==k[e]||(t=r({},t,{namespaceURI:w})),b(e)?(function(e,t){for(var n=0,r=m(e);n<r.length;n++){var o=r[n];M(o,e[o],t)}}(t,n=t.namespaceURI?document.createElementNS(t.namespaceURI,e):document.createElement(e)),_(o,n)):y(e)&&(n=e(r({},t,{children:o}))),!function(e){return v(e)&&"current"in e}(t.ref)?y(t.ref)&&t.ref(n):t.ref.current=n,n}function T(e,t){!function(e){return v(e)&&"number"==typeof e.length&&"number"!=typeof e.nodeType}(e)?b(e)||function(e){return"number"==typeof e}(e)?t.appendChild(document.createTextNode(e)):null===e?t.appendChild(document.createComment("")):function(e){return e&&"number"==typeof e.nodeType}(e)&&t.appendChild(e):_(e,t)}function _(e,t){for(var n=0,r=e;n<r.length;n++){T(r[n],t)}return t}function I(e){return e.replace(/[A-Z\d]/g,function(e){return":"+e.toLowerCase()})}function M(e,t,n){switch(e){case"xlinkActuate":case"xlinkArcrole":case"xlinkHref":case"xlinkRole":case"xlinkShow":case"xlinkTitle":case"xlinkType":return void n.setAttributeNS(O,I(e),t);case"xmlnsXlink":return void n.setAttribute(I(e),t);case"xmlBase":case"xmlLang":case"xmlSpace":return void n.setAttributeNS(x,I(e),t)}switch(e){case"dataset":for(var o=0,i=m(t||{});o<i.length;o++){var a=i[o],l=t[a];null!=l&&(n.dataset[a]=l)}return;case"innerHTML":case"innerText":case"textContent":return void(n[e]=t);case"spellCheck":return void(n.spellcheck=t);case"class":case"className":return void n.setAttribute("class",S(t));case"ref":case"namespaceURI":return;case"style":if(v(t))return void r(n.style,t)}y(t)?"o"===e[0]&&"n"===e[1]&&function(e,t,n){e.addEventListener(t,n)}(n,e.slice(2).toLowerCase(),t):!0===t?n.setAttribute(e,""):!1!==t&&null!=t&&n.setAttribute(e,t)}var A,C=!1,P=function(e){e.preventDefault,document.querySelector("body").classList.toggle("footer_visible"),C=!C},L=function(){var e=j(h,{to:"/",className:"button"},j("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 258.8 245.4",width:"100%",height:"100%"},j("title",null,"Go to homepage"),j("path",{fill:"currentColor",d:"M258.8 107.7H60.2L152.4 22 131.9 0 0 122.7l131.9 122.7 20.5-22-92.2-85.7h198.6v-30z"}))," ","Back");return"/"==window.location.pathname&&(e=j("div",null)),j("header",null,e,j("h1",null,j(h,{to:"/"},j("span",{class:"sr_only"},"musicr"),j("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 691.2 218.5",className:"main-logo",width:"100%",height:"100%"},j("title",null,"Go to homepage"),j("path",{fill:"white",id:"main_path",d:"M506.2 218.5a11 11 0 0 1-11-11V11a11 11 0 1 1 22 0v196.5a11 11 0 0 1-11 11zM635.7 157.8a11 11 0 0 1-11-11V94a33.3 33.3 0 0 1 66.5 0 11 11 0 1 1-22 0 11.3 11.3 0 0 0-22.5 0v52.8a11 11 0 0 1-11 11zM573 195.7a33.3 33.3 0 0 1-33.3-33.2V59.7a33.3 33.3 0 1 1 66.5 0 11 11 0 0 1-22 0 11.3 11.3 0 1 0-22.5 0v102.7a11.3 11.3 0 1 0 22.5 0 11 11 0 0 1 22 0 33.3 33.3 0 0 1-33.3 33.3zM435.7 204.2h-1.2a33.4 33.4 0 0 1-32-33.8 11 11 0 1 1 22 0c0 6.3 4.8 11.6 10.7 11.8a11.3 11.3 0 0 0 11.7-11.3v-39.2a11.5 11.5 0 0 0-11.3-11.4 33.5 33.5 0 0 1-33.2-33.5V48.1a33.4 33.4 0 0 1 32-33.8A33.3 33.3 0 0 1 469 47.6a11 11 0 0 1-22 0 11.2 11.2 0 0 0-11.6-11.3c-6 .2-10.9 5.5-10.9 11.8v38.7a11.5 11.5 0 0 0 11.4 11.4 33.5 33.5 0 0 1 33.1 33.5V173a33.3 33.3 0 0 1-33.2 31.2zM166.8 218.5h-1a33.7 33.7 0 0 1-32.3-33.7v-114A11.3 11.3 0 0 0 122 59.5a11.6 11.6 0 0 0-11 11.8v76.4A33.3 33.3 0 0 1 76.8 181a33.7 33.7 0 0 1-32.3-33.7v-38.5A11.3 11.3 0 0 0 33 97.5C27 97.7 22 103 22 109.3a11 11 0 0 1-22 0 33.7 33.7 0 0 1 32.3-33.8 33.3 33.3 0 0 1 34.2 33.3v38.5a11.6 11.6 0 0 0 11 11.7A11.3 11.3 0 0 0 89 147.7V71.3a33.7 33.7 0 0 1 32.3-33.8 33.3 33.3 0 0 1 34.2 33.3v114a11.6 11.6 0 0 0 11 11.7 11.3 11.3 0 0 0 11.5-11.3V33.7A33.8 33.8 0 0 1 210.4 0a33.3 33.3 0 0 1 34.2 33.3v137.1a11.6 11.6 0 0 0 11 11.7A11.3 11.3 0 0 0 267 171V71.2a33.7 33.7 0 0 1 32.3-33.7 33.2 33.2 0 0 1 34.2 33.3v76.5a11.6 11.6 0 0 0 11 11.7 11.3 11.3 0 0 0 11.5-11.3v-76a11 11 0 0 1 22 0v76A33.3 33.3 0 0 1 344 181a33.7 33.7 0 0 1-32.3-33.7V70.8A11.2 11.2 0 0 0 300 59.5c-6 .2-11 5.5-11 11.8v99.6a33.3 33.3 0 0 1-34.1 33.3 33.7 33.7 0 0 1-32.4-33.8V33.3A11.3 11.3 0 0 0 211 22a11.6 11.6 0 0 0-11 11.7v151.5a33.3 33.3 0 0 1-33.2 33.3z"})))),j("button",{className:"button",onClick:P},j("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 134.1 215.7",width:"100%",height:"100%"},j("title",null,"Open help page"),j("path",{fill:"#fff",d:"M118.8 101.1l-20.7 26c-2.6 3.3-5.3 9-5.3 14.1v2.7H43.7V137a46 46 0 0 1 12.2-33.2l21-24.6c4.5-5 8.1-11.9 8.1-16.7 0-10.4-6-18.2-18-18.2-12.6 0-18 8-18 18.8H0C0 22.4 30.8 0 67 0c35.3 0 67 21.2 67 62.8 0 15.6-6.8 27.6-15.2 38.3zM68.2 215.7a28.4 28.4 0 1 1 28.5-28.4 28.6 28.6 0 0 1-28.5 28.4z","data-name":"Ebene 2"})),"Help"))},N=(n(5),n(6),function(){return j("button",{className:"main-button",onClick:G},j("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 595.4 522.5"},j("linearGradient",{id:"a",x1:"297.7",x2:"297.7",y1:"514.8",y2:"9.3",gradientTransform:"matrix(1 0 0 -1 0 523.3)",gradientUnits:"userSpaceOnUse"},j("stop",{offset:"0","stop-color":"orange"}),j("stop",{offset:"1","stop-color":"#ff4500"})),j("linearGradient",{id:"b",x1:"297.7",x2:"297.7",y1:"514.8",y2:"9.3",gradientTransform:"matrix(1 0 0 -1 0 523.3)",gradientUnits:"userSpaceOnUse"},j("stop",{offset:"0","stop-color":"#051535"}),j("stop",{offset:"1","stop-color":"#003355"})),j("path",{fill:"url(#a)",id:"button_path",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"17",d:"M536.4 390v-69.8a59 59 0 0 1 59-59 59 59 0 0 1-59-59v-69.8a123.8 123.8 0 0 0-247.7 0l-.1 3a38.2 38.2 0 1 1-76.4 0l-.1-3a76.6 76.6 0 0 0-153.1 0v69.8a59 59 0 0 1-59 59 59 59 0 0 1 59 59v69.9a76.6 76.6 0 0 0 153 0l.2-3a38.2 38.2 0 1 1 76.4 0l.1 3a123.8 123.8 0 0 0 247.7 0v-.1z"})),j("div",{className:"horizontal-line"}),j("p",null,"listen"))}),U=function(e){return new Promise(function(t){var n=e.data,r=new FormData;r.append("file",n),fetch("https://musicr.schreglmann.at/api.php",{dataType:"json",body:r,method:"post"}).then(function(e){return e.json()}).catch(function(){console.log("Something went wrong")}).then(function(e){console.log("success"),z(e).then(function(e){t(e)})})})},z=function(e){return new Promise(function(t){var n={title:null,artist:null,album:null,spotify:null,youtubeid:null,genre:null,youtube:null};try{n.title=e.metadata.music[0].title}catch(e){n[0]=null}try{n.artist=e.metadata.music[0].artists[0].name}catch(e){n[1]=null}try{n.album=e.metadata.music[0].album.name}catch(e){n[2]=null}try{n.spotify=e.metadata.music[0].external_metadata.spotify.track.id}catch(e){n[3]=null}try{n.youtubeid=e.metadata.music[0].external_metadata.youtube.vid}catch(e){n[4]=null}try{n.genre=e.metadata.music[0].genres[0].name}catch(e){n[5]=null}null==n.youtubeid?n.youtube=null:n.youtube="https://www.youtube.com/watch?v=".concat(n.youtubeid),t(n)})};n(7);function V(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var E,H=function(){document.querySelector(".error").classList.remove("error_visible");document.querySelector("#error_close_button").setAttribute("tabIndex","-1")},q=function(e){e.children;var t=V(e,["children"]);return setTimeout(function(){document.querySelector(".error").classList.add("error_visible");var e=document.querySelector("#error_close_button");e.setAttribute("tabIndex","0"),e.focus()},10),c("div",{class:"error",onClick:H},c("section",null,c("h2",null,"Oops!"),c("p",null,t.error),c("button",{id:"error_close_button",tabIndex:"-1",onClick:H},t.buttonText)))},B=!1,R=function(){window.scrollTo(0,0);var e=document.querySelector("body");e.classList.remove("footer_visible"),e.classList.add("listening"),E=setTimeout(function(){document.querySelector("#spinner").classList.add("spinner")},1e4),document.querySelectorAll(".start_svg_animation").forEach(function(e){e.beginElement()})},G=function(e){e.currentTarget.blur(),B||(document.querySelector(".cancel_button").setAttribute("tabindex","0"),B=!0,new Promise(function(e){navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia,document.querySelector(".main-button"),navigator.getUserMedia?(console.log("getUserMedia supported."),navigator.getUserMedia({audio:!0},function(t){var n=new MediaRecorder(t);R(),n.start(),console.log(n.state),A=setTimeout(function(){n.stop()},1e4),n.ondataavailable=function(t){console.log("data available"),U(t).then(function(t){e(t)})}},function(e){localStorage.setItem("error","notallowed"),history.pushState({},"","/"),console.log("The following gUM error occured: "+e)})):(localStorage.setItem("error","notsupported"),history.pushState({},"","/"),console.log("getUserMedia not supported on your browser!"))}).then(function(e){document.querySelector("body").classList.remove("listening"),B=!1,null!=e.title?(localStorage.setItem("currentSong",JSON.stringify(e)),history.pushState({},"","/song")):(localStorage.setItem("error","songnotfound"),history.pushState({},"","/"))}))},D=function(){document.querySelector("body").classList.remove("listening"),clearTimeout(E),clearTimeout(A),B=!1},F=function(){var e,t="M 100 200 V200 H0 V 50 Q 12.5 ".concat(40," 25 50 T 50 50 T 75 50 T 100 50 T 125 50 T 150 50 T 175 50 T 200 50 V 200 z"),n=localStorage.getItem("error");return"songnotfound"==n?e=j(q,{error:"We couldn't find your song!",buttonText:"Ok, let's try again!"}):"notsupported"==n?e=j(q,{error:"Your internet browser doesn't support prerequisite technologies.",buttonText:"Ok, bye!"}):"notallowed"==n&&(e=j(q,{error:"Please allow us to use your microphone input in order to use musicr.",buttonText:"Ok, I'll allow it!"})),localStorage.removeItem("error"),j("section",{className:"background fullscreen main-screen"},e,j(N,null),j("button",{className:"cancel_button",tabIndex:"-1",onClick:D},"cancel"),j("a",{href:"#song_history",className:"bottom-notice"},"previously listened"),j("div",{class:"",id:"spinner"},j("div",null),j("div",null),j("div",null)),j("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",width:"100",height:"100",preserveAspectRatio:"none",id:"waves"},j("path",{id:"water",fill:"orangered",d:t},j("animate",{class:"start_svg_animation",fill:"freeze",begin:"indefinite",attributeName:"d",to:"M 100 200 V200 H0 V 50 Q 12.5 50 25 50 T 50 50 T 75 50 T 100 50 T 125 50 T 150 50 T 175 50 T 200 50 V 200 z",dur:"10000ms"})),j("path",{id:"water2",fill:"orangered",d:t},j("animate",{class:"start_svg_animation",fill:"freeze",begin:"indefinite",attributeName:"d",to:"M 100 200 V200 H0 V 50 Q 12.5 50 25 50 T 50 50 T 75 50 T 100 50 T 125 50 T 150 50 T 175 50 T 200 50 V 200 z",dur:"10000ms"}))))};n(8),n(9),n(10),n(11),n(12),n(13);function Y(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var J=function(e){e.currentTarget.classList.toggle("social_media_visible");var t="true"==e.currentTarget.dataset.isOpen;e.currentTarget.dataset.isOpen=!t,e.currentTarget.parentElement.querySelectorAll(".social_media a").forEach(function(e){t?e.setAttribute("tabIndex","-1"):e.setAttribute("tabIndex","0")})},Q=function(e){e.children;var t=Y(e,["children"]),n="",r="",o="https://open.spotify.com/track/".concat(t.sid),i="I just listened to ".concat(t.title," by ").concat(t.artist," on musicr.");return r="https://www.facebook.com/sharer/sharer.php?u=",n="https://twitter.com/intent/tweet?text=",n+=encodeURIComponent(i),r+=encodeURIComponent(o),j("div",{class:"social_media",onClick:J,"data-is-open":"false"},j("button",{"aria-label":"Open Social Media Field"},j("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 150 150"},j("title",null,"Open Social Media"),j("circle",{cx:"75",cy:"15",r:"15",class:"cls-1"}),j("circle",{cx:"75",cy:"75",r:"15",class:"cls-1"}),j("circle",{cx:"75",cy:"135",r:"15",class:"cls-1"}),j("path",{fill:"none",d:"M0 0h150v150H0z"}))),j("ul",null,j("li",null,j("a",{href:n,target:"_blank",rel:"noopener noreferrer",tabIndex:"-1"},j("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"100%",height:"100%"},j("title",null,"Share on Twitter"),j("path",{d:"M459.4 151.7c.3 4.6.3 9.1.3 13.7 0 138.7-105.6 298.5-298.6 298.5A296.5 296.5 0 0 1 0 417a217 217 0 0 0 25.3 1.2c49 0 94.3-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8a111 111 0 0 0 47.4-2 105 105 0 0 1-84.1-103v-1.2c14 7.8 30.2 12.6 47.4 13.3A104.9 104.9 0 0 1 35.7 67.2a298.3 298.3 0 0 0 216.4 109.9 104.9 104.9 0 0 1 179-95.8 206.6 206.6 0 0 0 66.6-25.4 104.7 104.7 0 0 1-46.1 57.8c21-2.3 41.6-8.1 60.4-16.2a225.6 225.6 0 0 1-52.6 54.2z"})))),j("li",null,j("a",{href:r,target:"_blank",rel:"noopener noreferrer",tabIndex:"-1"},j("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"100%",height:"100%"},j("title",null,"Share on Facebook"),j("path",{d:"M448 56.7v398.5a24.7 24.7 0 0 1-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7A24.8 24.8 0 0 1 0 455.3V56.7A24.8 24.8 0 0 1 24.7 32h398.5A24.8 24.8 0 0 1 448 56.7z"}))))))};n(14),n(15);function Z(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var W=function(e){e.children;return j("a",{href:"https://open.spotify.com/track/"+Z(e,["children"]).sid,class:"spotify_btn",target:"_blank",rel:"noopener noreferrer"},j("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 168 168"},j("title",null,"Open Spotify"),j("path",{fill:"#1ED760",d:"M84 .3a83.7 83.7 0 1 0 0 167.5A83.7 83.7 0 0 0 84 .3zM122.4 121a5.2 5.2 0 0 1-7.2 1.7c-19.6-12-44.4-14.7-73.5-8a5.2 5.2 0 0 1-2.4-10.3c32-7.3 59.3-4.1 81.4 9.4a5.2 5.2 0 0 1 1.7 7.2zm10.3-22.8c-2 3-6 4-9 2.1a109.9 109.9 0 0 0-83.5-9.8 6.5 6.5 0 0 1-3.8-12.4c30.4-9.3 68.3-4.8 94.1 11 3 2 4 6 2.1 9zm.8-23.8c-27-16-71.5-17.5-97.3-9.7a7.8 7.8 0 1 1-4.5-15c29.6-9 78.8-7.2 109.8 11.2a7.8 7.8 0 1 1-8 13.5z"})),j("p",null,"Open"))};function K(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var X=function(e){e.children;var t,n=K(e,["children"]);n.sid&&(t=c(W,{sid:n.sid}));var r="/song?idx=".concat(n.idx);return c("li",{className:"mediabox"},c(h,{to:r,className:"mediabox--cover"},c("img",{src:n.imageUrl,alt:'Cover of "'.concat(n.album,'" by "').concat(n.artist,'"')})),c("div",null,c("h3",null,n.title),c("h4",{className:"artist"},n.artist),c("h4",{className:"album"},n.album),t,c(Q,{artist:n.artist,title:n.title,sid:n.sid}),c(h,{to:r,className:"more_btn"},"Show me more")))};function $(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var ee=function(e){e.children,$(e,["children"]);var t=localStorage.getItem("history"),n=[];if(t=JSON.parse(t))for(var r=0;r<t.length;r++){var o=t[r];n.push(c(X,{title:o.title,artist:o.artist,album:o.album,sid:o.spotify,idx:r,imageUrl:o.imageUrl}))}else n=c("p",null,"You haven't listened to any songs yet.");return c("section",{class:"song_history",id:"song_history"},c("h2",null,"Your Song History"),n)};function te(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var ne=function(e){e.children,te(e,["children"]);return c("main",{role:"alert"},c(F,null),c(ee,null))},re=function(){return c("main",{class:"site background fullscreen"},c("h2",null,"Some one fucked up."),c("p",null,"Either you can't type or we screwed up."),c("p",null,"If you think there is something wrong with our site please"," ",c("a",{href:"mailto:info@niklasnold.in",class:"underline"},"contact us"),"."))};n(16);function oe(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var ie=function(e){e.children;var t,n,r=oe(e,["children"]);r.sid&&(t=j(W,{sid:r.sid})),r.youtubeId&&(n=j("a",{href:"https://www.youtube.com/watch/".concat(r.youtubeId),target:"_blank",rel:"noopener noreferrer",class:"youtube_button"},j("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 56 24",width:"100%",height:"100%"},j("path",{fill:"#111",d:"M20.9 19.3h-2.1v-1.2c-.8.9-1.5 1.4-2.3 1.4-.6 0-1-.3-1.3-1L15 17V8H17v9.3c0 .3.2.4.5.4.4 0 .7-.4 1.2-1V7.9h2.1v11.4m-7.5-7.7c0-1.2-.2-2.1-.7-2.7a2.7 2.7 0 0 0-2.3-1c-1 0-1.8.2-2.4 1-.4.6-.6 1.5-.6 2.7v4c0 1.3.2 2.1.6 2.7.6.8 1.5 1.2 2.4 1.2a3 3 0 0 0 2.4-1.2c.4-.6.6-1.4.6-2.6v-4.1zM11.3 16c.1 1.1-.3 1.7-.9 1.7-.7 0-1-.6-.9-1.7v-4.5c-.1-1.1.2-1.7.9-1.7s1 .6.9 1.7v4.5zM5 13.1v6.2H2.8v-6.2L0 4.1h2.4L3.9 10l1.6-6h2.3L5 13"}),j("path",{fill:"#e62117",d:"M42.7 9.7c-.3 0-.7.2-1 .5v6.9c.3.3.7.5 1 .5.6 0 .9-.4.9-1.6v-4.8c0-1.2-.3-1.5-.9-1.5m8.4 1.4c0-1-.3-1.4-1-1.4-.6 0-1 .3-1 1.4v1.2h2v-1.2"}),j("path",{fill:"#e62117",d:"M55.7 5.3S55.3 3 54.3 2C53.1.6 51.6.6 51 .5 46.3.2 39.3.2 39.3.2s-7 0-11.7.3c-.6.1-2 .1-3.3 1.4-1 1-1.3 3.4-1.3 3.4s-.4 2.7-.4 5.4v2.6c0 2.7.4 5.4.4 5.4s.3 2.3 1.3 3.3c1.2 1.4 3 1.3 3.7 1.5 2.6.2 11.3.3 11.3.3s7 0 11.7-.3c.7-.1 2-.1 3.3-1.5 1-1 1.4-3.3 1.4-3.3s.3-2.7.3-5.4v-2.6c0-2.7-.3-5.4-.3-5.4zm-25.8 14h-2.2v-13h-2.3V4.2h7v2.1H30v13zm8.1 0h-2.1v-1.2c-.8.9-1.5 1.4-2.2 1.4-.7 0-1.1-.3-1.4-1l-.2-1.6V8h2.1v9.2c0 .3.2.4.5.4.4 0 .7-.4 1.2-1V8H38v11.3zm7.7-3.4c0 1 0 1.8-.2 2.3-.3.8-.9 1.3-1.7 1.3-.7 0-1.4-.5-2.1-1.3v1.1h-2V4.2h2V9c.6-.8 1.4-1.3 2.1-1.3.8 0 1.4.5 1.6 1.3.2.5.3 1.2.3 2.3v4.5zm4.5 1.7c.5 0 .8-.3.9-.8v-1.5h2.1V17l-.5 1.2c-.6.8-1.4 1.2-2.5 1.2-1 0-1.8-.3-2.4-1.1-.5-.6-.7-1.4-.7-2.6v-4c0-1.2.2-2.1.6-2.7.6-.8 1.4-1.2 2.5-1.2s1.8.4 2.4 1.2c.4.6.6 1.5.6 2.7V14h-4v2c0 1 .3 1.6 1 1.6z"}))));return j("section",{class:"song"},j("img",{src:r.imageUrl,alt:'Cover of "'.concat(r.album,'" by "').concat(r.artist,'"'),id:"cover_art"}),j("h2",null,r.title),j("h3",{class:"artist"},r.artist),j("h3",{class:"album"},r.album),t,j(Q,{artist:r.artist,title:r.title,sid:r.sid}),n)};n(17);function ae(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var le=function(e){e.children;var t,n=ae(e,["children"]);return"past"==n.tense?t="were listening":"present"==n.tense?t="are listening":"future"==n.tense?t=" are going to listen":"perfect"==n.tense&&(t="have been listening"),c("section",null,c("h2",{class:"song_header"},"You ",t," to",c("strong",null,c("span",{class:"nobreak"}," ",n.title))," ","by",c("strong",null,c("span",{class:"nobreak"}," ",n.artist,"."))))},se=(n(18),n(19),n(0)),ce=n.n(se);function ue(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var fe=function(e){for(var t=0;"Powered by Genius"!=e.substring(t,t+17)&&t<1e3;)t++;for(e=e.substring(t+18,e.length),t=0;"rg_embed_footer"!=e.substring(t,t+15)&&t<1e4;)t++;e=(e=(e=(e=(e=(e=(e=(e=(
//!br! because it will not get removed by the tag removal
e=(e=e.substring(0,t)).replace(/\\\\n/g,"!br!")).replace(/\\\\/g," ")).replace(/<br>/g,"!br!")).replace(/\\/g,"")).replace(/<\/a>/g,"")).replace(/<b>/g,"")).replace(/<\\\/b>/g,"")).replace(/<i>/g,"")).replace(/<\\\/i>/g,"");for(var n=0,r=0,o="",i=0;i<e.length;i++)"<"==e[i]&&(o=o.concat(e.substring(n,i))),">"==e[i]&&(n=i+1);for(var a="",l=!1,s=0,c=0;c<o.length;c++)"["==o[c]&&(l=!0,a=a.concat(o.substring(r,c))),"]"==o[c]&&(l=!0,r=c+1,s=c+1);a=l?a.concat(o.substring(s)):o;for(var u=0;"!br!"==a.substring(u,u+4);)u+=4;return a=(a=(a=(a=a.substring(u)).replace(/!br!/g,"<br>")).replace(/<br><br>/g,"<br>")).replace(/<br><br>/g,"<br>")},pe=function(e){e.children;var t=ue(e,["children"]),n=c("p",{class:"lyrics",id:"lyrics"});return n.innerHTML=t.lyrics,c("section",{class:""},c("h2",null,"Lyrics"),n,c("p",{class:"lyrics--copyright"},"Lyrics by"," ",c("a",{href:"https://www.genius.com",target:"_blank",rel:"noopener noreferrer"},c("img",{src:ce.a,alt:"www.genius.com"}))))};function de(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var ge=function(e){e.children,de(e,["children"]);var t=localStorage.getItem("currentSong");t=JSON.parse(t);var n=localStorage.getItem("history");n=JSON.parse(n);var r="present";if(t)window.history.replaceState({},"","/song?idx=0");else{r="past";var o=location.search.substr(1).split("&").map(function(e){var t=e.split("=");return{key:t[0],value:t[1]}})[0].value;t=n[o]}localStorage.getItem("currentSong")&&(localStorage.removeItem("currentSong"),function(e,t){return new Promise(function(n){var r=new URL("https://api.genius.com/search"),o={q:"".concat(t," ").concat(e),scope:"me",access_token:"khuHZ_eHro_7UYex8v0BRS82AA_QpAKo0yDotqLn_Lolg4pDP2Mq3sVgmkIFOx7h"};Object.keys(o).forEach(function(e){r.searchParams.append(e,o[e])}),fetch(r).then(function(e){return e.json()}).then(function(e){console.log(e);var t=e.response.hits[0].result.id,r=new URL("https://api.genius.com/songs/".concat(t)),o={scope:"me",access_token:"khuHZ_eHro_7UYex8v0BRS82AA_QpAKo0yDotqLn_Lolg4pDP2Mq3sVgmkIFOx7h",text_format:"plain"};Object.keys(o).forEach(function(e){r.searchParams.append(e,o[e])}),fetch(r).then(function(e){return e.json()}).then(function(e){console.log("Cooles Zeugs",e.response.song.id),n(e.response.song)})})})}(t.title,t.artist).then(function(e){document.getElementById("cover_art").src=e.album.cover_art_url,t.imageUrl=e.album.cover_art_url,function(e){return new Promise(function(t){var n="https://genius.com/songs/".concat(e,"/embed.js");fetch(n,{dataType:"json",method:"get"}).then(function(e){return e.text()}).then(function(e){var n=fe(e);t(n)})})}(e.id).then(function(e){t.lyrics=e,document.getElementById("lyrics").innerHTML=t.lyrics,n||(n=[]),n.unshift(t),localStorage.setItem("history",JSON.stringify(n))})})),console.log(t.youtubeid);var i=t&&t.lyrics?c(pe,{lyrics:t.lyrics}):null;return c("main",{className:"site fullscreen background",role:"alert"},c(le,{artist:t.artist,title:t.title,tense:r}),c(ie,{artist:t.artist,title:t.title,album:t.album,sid:t.spotify,imageUrl:t.imageUrl,youtubeId:t.youtubeid}),i,c("div",{id:"lyrics"}))};n(20);function he(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var me=function(){document.querySelector("body").classList.remove("footer_visible"),window.scrollTo(0,0)},be=function(e){e.children,he(e,["children"]);return document.querySelector("main").addEventListener("click",function(e){document.querySelector("body").classList.remove("footer_visible")},!1),c("footer",null,c("p",null,"Musicr.io is the first* online music recognition software. It helps you find out what song you're currently listening to and can even recognize you humming your favourite songs. Musicr.io equips you with all the important information including songtitle, artist, album and lyrics."),c("p",null,"Simply click the big orange button!"),c("p",null,"Musicr.io is being developed by Georg Schreglmann and Niklas Noldin at the University of Applied Sciences Salzburg."),c("p",{onClick:me},c(h,{to:"/imprint",className:"underline"},"imprint")," ","|"," ",c(h,{to:"/data_protection",className:"underline"},"data protection info")),c("p",{className:"small_text"},"* It's probably not the first one, but it's cool."))},ve=(n(21),function(){return c("main",{class:"site fullscreen background",role:"alert"},c("section",{class:"legal"},c("h2",null,"Imprint"),c("p",null,"Information in accordance with Section 5 TMG",c("br",null),c("br",null),"Urstein-Süd 3-5",c("br",null),"520",c("br",null),"5412 Puch bei Hallein",c("br",null),c("h3",null,"Contact Information"),"Telephone: +43 664 1459315",c("br",null),"E-Mail:"," ",c("a",{href:"mailto:nnoldin.mmt-b2017@fh-salzburg.ac.at"},"nnoldin.mmt-b2017@fh-salzburg.ac.at"),c("br",null),"Internet address:"," ",c("a",{href:"www.niklasnold.in",target:"_blank"},"www.niklasnold.in"),c("br",null),c("h3",null,"Graphics and Image Sources"),"www.spotify.com",c("br",null),c("br",null),c("h3",null,"Disclaimer"),"Accountability for content",c("br",null),"The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents' accuracy, completeness or topicality. According to statutory provisions, we are furthermore responsible for our own content on these web pages. In this matter, please note that we are not obliged to monitor the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity. Our obligations to remove or block the use of information under generally applicable laws remain unaffected by this as per §§ 8 to 10 of the Telemedia Act (TMG).",c("br",null),c("br",null),"Accountability for links",c("br",null),"Responsibility for the content of external links (to web pages of third parties) lies solely with the operators of the linked pages. No violations were evident to us at the time of linking. Should any legal infringement become known to us, we will remove the respective link immediately.",c("br",null),c("br",null),"Copyright",c("br",null)," Our web pages and their contents are subject to German copyright law. Unless expressly permitted by law, every form of utilizing, reproducing or processing works subject to copyright protection on our web pages requires the prior consent of the respective owner of the rights. Individual reproductions of a work are only allowed for private use. The materials from these pages are copyrighted and any unauthorized use may violate copyright laws.")))}),ye=function(){return c("main",{class:"site fullscreen background",role:"alert"},c("section",{class:"legal"},c("h2",null,"We have the world's greatest privacy policy:"),c("p",null,"We don’t store your data, period.")))},we=function(){return c("main",{class:"site fullscreen background"},c("h2",null,"Song not found, sorry."))},Oe=function(e){var t=0,n=0;for(n=0;n<e.length;n++)"/"==e[n]&&(t=n);e=(e=e.substring(t)).indexOf("?")>=0?e.substring(e.indexOf("/",7),e.indexOf("?")):e.substring(e.indexOf("/",7));var r=document.getElementById("root");switch(r.innerHTML="",r.appendChild(c(L,null)),console.log("Pfad",e),e){case"/":r.appendChild(c(ne,null));break;case"/song":r.appendChild(c(ge,null));break;case"/imprint":r.appendChild(c(ve,null));break;case"/data_protection":r.appendChild(c(ye,null));break;case"/notfound":r.appendChild(c(we,null));break;default:r.appendChild(c(re,null))}r.appendChild(c(be,null)),window.scrollTo(0,0)};window.addEventListener("popstate",function(e){Oe(window.location.pathname)},!1),function(e){var t=e.pushState;e.pushState=function(n,r,o){var i=t.apply(e,arguments);return"function"==typeof e.onpushstate&&e.onpushstate({state:n,title:r,path:o}),i}}(window.history),history.onpushstate=function(e){Oe(e.path)},Oe(window.location.pathname)}]);