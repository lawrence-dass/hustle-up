parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"g2Hq":[function(require,module,exports) {
var e=document.querySelector(".gold"),t=document.querySelector(".royal"),n=document.querySelector(".silver");document.querySelectorAll(".gold__close, .royal__close, .silver__close").forEach(function(l){l.addEventListener("click",function(){e.style.display="none",t.style.display="none",n.style.display="none"})}),window.addEventListener("click",function(l){l.target!==e&&l.target!==t&&l.target!==n||(e.style.display="none",t.style.display="none",n.style.display="none")});var l=document.querySelector(".signUp__gold"),o=document.querySelector(".signUp__royal"),c=document.querySelector(".signUp__silver");l.addEventListener("click",function(){e.style.display="block",e.style.opacity="1"}),o.addEventListener("click",function(){t.style.display="block",t.style.opacity="1"}),c.addEventListener("click",function(){n.style.display="block",n.style.opacity="1"}),document.querySelectorAll(".navigation__link").forEach(function(e){e.addEventListener("click",function(){document.getElementById("navigation__toggle").checked=!1})});
},{}]},{},["g2Hq"], null)
//# sourceMappingURL=scripts.c1d14b2b.js.map