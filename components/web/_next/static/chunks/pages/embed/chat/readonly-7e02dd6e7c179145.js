(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8399,7533],{62705:function(t,n,r){var e=r(55639).Symbol;t.exports=e},44239:function(t,n,r){var e=r(62705),o=r(89607),c=r(2333),u=e?e.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":u&&u in Object(t)?o(t):c(t)}},27561:function(t,n,r){var e=r(67990),o=/^\s+/;t.exports=function(t){return t?t.slice(0,e(t)+1).replace(o,""):t}},31957:function(t,n,r){var e="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;t.exports=e},89607:function(t,n,r){var e=r(62705),o=Object.prototype,c=o.hasOwnProperty,u=o.toString,i=e?e.toStringTag:void 0;t.exports=function(t){var n=c.call(t,i),r=t[i];try{t[i]=void 0;var e=!0}catch(t){}var o=u.call(t);return e&&(n?t[i]=r:delete t[i]),o}},2333:function(t){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},55639:function(t,n,r){var e=r(31957),o="object"==typeof self&&self&&self.Object===Object&&self,c=e||o||Function("return this")();t.exports=c},67990:function(t){var n=/\s/;t.exports=function(t){for(var r=t.length;r--&&n.test(t.charAt(r)););return r}},23279:function(t,n,r){var e=r(13218),o=r(7771),c=r(14841),u=Math.max,i=Math.min;t.exports=function(t,n,r){var a,s,f,l,p,d,h=0,v=!1,b=!1,m=!0;if("function"!=typeof t)throw TypeError("Expected a function");function g(n){var r=a,e=s;return a=s=void 0,h=n,l=t.apply(e,r)}function y(t){var r=t-d,e=t-h;return void 0===d||r>=n||r<0||b&&e>=f}function w(){var t,r,e,c=o();if(y(c))return x(c);p=setTimeout(w,(t=c-d,r=c-h,e=n-t,b?i(e,f-r):e))}function x(t){return(p=void 0,m&&a)?g(t):(a=s=void 0,l)}function _(){var t,r=o(),e=y(r);if(a=arguments,s=this,d=r,e){if(void 0===p)return h=t=d,p=setTimeout(w,n),v?g(t):l;if(b)return clearTimeout(p),p=setTimeout(w,n),g(d)}return void 0===p&&(p=setTimeout(w,n)),l}return n=c(n)||0,e(r)&&(v=!!r.leading,f=(b="maxWait"in r)?u(c(r.maxWait)||0,n):f,m="trailing"in r?!!r.trailing:m),_.cancel=function(){void 0!==p&&clearTimeout(p),h=0,a=d=s=p=void 0},_.flush=function(){return void 0===p?l:x(o())},_}},13218:function(t){t.exports=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}},37005:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},33448:function(t,n,r){var e=r(44239),o=r(37005);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==e(t)}},7771:function(t,n,r){var e=r(55639);t.exports=function(){return e.Date.now()}},14841:function(t,n,r){var e=r(27561),o=r(13218),c=r(33448),u=0/0,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,s=/^0o[0-7]+$/i,f=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(c(t))return u;if(o(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=o(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=e(t);var r=a.test(t);return r||s.test(t)?f(t.slice(2),r?2:8):i.test(t)?u:+t}},88054:function(t,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/embed/chat/readonly",function(){return r(85466)}])},85466:function(t,n,r){"use strict";r.r(n),r.d(n,{default:function(){return i}});var e=r(85893),o=r(4480),c=r(92093),u=r(44974);function i(){let t=(0,o.sJ)(u.db),n=(0,o.sJ)(u.pH),r=(0,o.sJ)(u.di);return(0,e.jsxs)("div",{children:[(0,e.jsx)(u.me,{}),t&&(0,e.jsx)(c.ChatContainer,{messages:n,usernameToHighlight:t.displayName,chatUserId:t.id,isModerator:!1,showInput:!1,height:"100vh",chatAvailable:r})]})}},81453:function(t,n,r){"use strict";r.d(n,{$i:function(){return P},$l:function(){return H},Bu:function(){return m},E8:function(){return G},Ff:function(){return N},GC:function(){return w},GR:function(){return Y},HP:function(){return B},IO:function(){return I},Kp:function(){return h},Kt:function(){return F},M_:function(){return S},N$:function(){return X},NE:function(){return a},NM:function(){return b},Q_:function(){return s},Qc:function(){return k},RB:function(){return g},UJ:function(){return R},WB:function(){return u},WE:function(){return E},WQ:function(){return j},Wr:function(){return A},XA:function(){return M},Y9:function(){return U},a_:function(){return d},ao:function(){return l},bl:function(){return f},e_:function(){return $},hn:function(){return T},iG:function(){return C},iV:function(){return p},jr:function(){return y},kb:function(){return W},kg:function(){return K},ms:function(){return O},nx:function(){return x},op:function(){return J},qk:function(){return v},rQ:function(){return D},sG:function(){return _},um:function(){return Q}});var e=r(34155);let o=e.env.NEXT_PUBLIC_ADMIN_USERNAME,c=e.env.NEXT_PUBLIC_ADMIN_STREAMKEY,u="/",i="".concat(u,"api/admin/"),a=15e3,s="".concat(i,"status"),f="".concat(i,"serverconfig"),l="".concat(i,"config"),p="".concat(i,"viewersOverTime"),d="".concat(i,"viewers"),h="".concat(i,"chat/clients"),v="".concat(i,"chat/users/disabled"),b="".concat(i,"chat/users/setenabled"),m="".concat(i,"chat/users/ipbans"),g="".concat(i,"chat/users/ipbans/remove"),y="".concat(i,"chat/users/setmoderator"),w="".concat(i,"chat/users/moderators"),x="".concat(i,"hardwarestats"),_="".concat(i,"logs"),j="".concat(i,"logs/warnings"),E="".concat(i,"chat/messages"),T="/api/admin/chat/messagevisibility",k="".concat(i,"emoji/upload"),N="".concat(i,"emoji/delete"),O="".concat(i,"accesstokens"),A="".concat(i,"accesstokens/delete"),I="".concat(i,"accesstokens/create"),M="".concat(i,"webhooks"),S="".concat(i,"webhooks/delete"),C="".concat(i,"webhooks/create"),P="".concat(u,"api/socialplatforms"),$="".concat(i,"federation/send"),B="".concat(i,"followers"),G="".concat(i,"followers/pending"),U="".concat(i,"followers/blocked"),W="".concat(i,"followers/approve"),J="".concat(i,"federation/actions"),X="".concat(i,"metrics/video"),Q="".concat(i,"config/streamkeys"),R="".concat(i,"yp/reset");async function D(t,n){let{data:r,method:e="GET",auth:u=!0}=n||{},i={method:e};if(r&&(i.body=JSON.stringify(r)),u&&o&&c){let t=btoa("".concat(o,":").concat(c));i.headers={Authorization:"Basic ".concat(t)},i.mode="cors",i.credentials="include"}try{let n=await fetch(t,i),r=await n.json();if(!n.ok){let t=r.message||"An error has occurred: ".concat(n.status);throw Error(t)}return r}catch(t){return console.error(t),t}}async function H(t,n){let r={method:"GET",auth:!1,...n};return D(t,r)}async function K(t){try{let n=await fetch(t,{referrerPolicy:"no-referrer",referrer:""});if(!n.ok){let t="An error has occured: ".concat(n.status);throw Error(t)}let r=await n.json();return r}catch(t){console.log(t)}return{}}async function F(){return K("https://api.github.com/repos/owncast/owncast/releases/latest")}let L=/^\d+(\.\d+){0,2}$/;async function Y(t){let n=await F(),r=n.tag_name;return("v"===r.substr(0,1)&&(r=r.substr(1)),!function(t,n){if(!t||!n||0===t.length||0===n.length)return!1;if(t===n)return!0;if(L.test(t)&&L.test(n)){let r=t.split(".");for(;r.length<3;)r.push("0");let e=n.split(".");for(;e.length<3;)e.push("0");for(let t=0;t<3;t++){let n=parseInt(r[t],10),o=parseInt(e[t],10);if(n!==o)return n>o}return!0}return t>=n}(t,r))?r:null}}},function(t){t.O(0,[1272,8700,2184,2364,882,5320,6959,2093,9774,2888,179],function(){return t(t.s=88054)}),_N_E=t.O()}]);