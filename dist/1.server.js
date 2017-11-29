exports.ids=[1],exports.modules={315:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(5),c=n(u),f=r(327),p=n(f),l=function(e){function t(e){o(this,t);var r=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={posts:[]},e.staticContext?r.state={posts:e.staticContext.initialData}:r.state={posts:window.initialData||[]},r}return i(t,e),a(t,[{key:"componentDidMount",value:function(){var e=this;t.need({postId:this.props.match.params.postId}).then(function(t){return e.setState({posts:t.data})})}},{key:"render",value:function(){return c.default.createElement("div",null,this.state.posts.map(function(e,t){return c.default.createElement("div",{className:"post",key:t},e.body)}))}}]),t}(c.default.Component);l.need=function(e){return console.log("client",e),p.default.get("https://jsonplaceholder.typicode.com/comments",{params:e})},t.default=l},316:function(e,t,r){"use strict";function n(e){return"[object Array]"===E.call(e)}function o(e){return"[object ArrayBuffer]"===E.call(e)}function s(e){return"undefined"!=typeof FormData&&e instanceof FormData}function i(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function a(e){return"string"==typeof e}function u(e){return"number"==typeof e}function c(e){return void 0===e}function f(e){return null!==e&&"object"==typeof e}function p(e){return"[object Date]"===E.call(e)}function l(e){return"[object File]"===E.call(e)}function d(e){return"[object Blob]"===E.call(e)}function h(e){return"[object Function]"===E.call(e)}function m(e){return f(e)&&h(e.pipe)}function g(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function v(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function y(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function b(e,t){if(null!==e&&void 0!==e)if("object"==typeof e||n(e)||(e=[e]),n(e))for(var r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(null,e[s],s,e)}function w(){function e(e,r){"object"==typeof t[r]&&"object"==typeof e?t[r]=w(t[r],e):t[r]=e}for(var t={},r=0,n=arguments.length;r<n;r++)b(arguments[r],e);return t}function x(e,t,r){return b(t,function(t,n){e[n]=r&&"function"==typeof t?_(t,r):t}),e}var _=r(319),C=r(329),E=Object.prototype.toString;e.exports={isArray:n,isArrayBuffer:o,isBuffer:C,isFormData:s,isArrayBufferView:i,isString:a,isNumber:u,isObject:f,isUndefined:c,isDate:p,isFile:l,isBlob:d,isFunction:h,isStream:m,isURLSearchParams:g,isStandardBrowserEnv:y,forEach:b,merge:w,extend:x,trim:v}},317:function(e,t,r){"use strict";function n(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=r(316),s=r(331),i={"Content-Type":"application/x-www-form-urlencoded"},a={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=r(332):"undefined"!=typeof process&&(e=r(337)),e}(),transformRequest:[function(e,t){return s(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(n(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(n(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};a.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){a.headers[e]={}}),o.forEach(["post","put","patch"],function(e){a.headers[e]=o.merge(i)}),e.exports=a},318:function(e,t,r){"use strict";var n=r(321);e.exports=function(e,t,r,o,s){var i=new Error(e);return n(i,t,r,o,s)}},319:function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},320:function(e,t,r){"use strict";var n=r(318);e.exports=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},321:function(e,t,r){"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e}},322:function(e,t,r){"use strict";function n(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=r(316);e.exports=function(e,t,r){if(!t)return e;var s;if(r)s=r(t);else if(o.isURLSearchParams(t))s=t.toString();else{var i=[];o.forEach(t,function(e,t){null!==e&&void 0!==e&&(o.isArray(e)&&(t+="[]"),o.isArray(e)||(e=[e]),o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),i.push(n(t)+"="+n(e))}))}),s=i.join("&")}return s&&(e+=(-1===e.indexOf("?")?"?":"&")+s),e}},323:function(e,t,r){"use strict";function n(e,t){u.call(this),this._options=e,this._redirectCount=0,this._bufferedWrites=[],t&&this.on("response",t);var r=this;if(this._onNativeResponse=function(e){r._processResponse(e)},!e.pathname&&e.path){var n=e.path.indexOf("?");n<0?e.pathname=e.path:(e.pathname=e.path.substring(0,n),e.search=e.path.substring(n))}this._performRequest()}var o=r(74),s=r(350),i=r(33),a=r(338),u=r(75).Writable,c=r(339)("follow-redirects"),f={"http:":i,"https:":a},p={},t=e.exports={maxRedirects:21},l={GET:!0,HEAD:!0,OPTIONS:!0,TRACE:!0},d=Object.create(null);["abort","aborted","error","socket"].forEach(function(e){d[e]=function(t){this._redirectable.emit(e,t)}}),n.prototype=Object.create(u.prototype),n.prototype._performRequest=function(){var e=this._options.protocol;this._options.agents&&(this._options.agent=this._options.agents[p[e]]);var t=f[e],r=this._currentRequest=t.request(this._options,this._onNativeResponse);this._currentUrl=o.format(this._options),r._redirectable=this;for(var n in d)n&&r.on(n,d[n]);if(this._isRedirect){var s=this._bufferedWrites;if(0===s.length)r.end();else{var i=0;!function e(){if(i<s.length){var t=s[i++];r.write(t.data,t.encoding,e)}else r.end()}()}}},n.prototype._processResponse=function(e){var t=e.headers.location;if(t&&!1!==this._options.followRedirects&&e.statusCode>=300&&e.statusCode<400){if(++this._redirectCount>this._options.maxRedirects)return this.emit("error",new Error("Max redirects exceeded."));var r,n=this._options.headers;if(307!==e.statusCode&&!(this._options.method in l)){this._options.method="GET",this._bufferedWrites=[];for(r in n)/^content-/i.test(r)&&delete n[r]}if(!this._isRedirect)for(r in n)/^host$/i.test(r)&&delete n[r];var s=o.resolve(this._currentUrl,t);c("redirecting to",s),Object.assign(this._options,o.parse(s)),this._isRedirect=!0,this._performRequest()}else e.responseUrl=this._currentUrl,this.emit("response",e),delete this._options,delete this._bufferedWrites},n.prototype.abort=function(){this._currentRequest.abort()},n.prototype.flushHeaders=function(){this._currentRequest.flushHeaders()},n.prototype.setNoDelay=function(e){this._currentRequest.setNoDelay(e)},n.prototype.setSocketKeepAlive=function(e,t){this._currentRequest.setSocketKeepAlive(e,t)},n.prototype.setTimeout=function(e,t){this._currentRequest.setTimeout(e,t)},n.prototype.write=function(e,t,r){this._currentRequest.write(e,t,r),this._bufferedWrites.push({data:e,encoding:t})},n.prototype.end=function(e,t,r){this._currentRequest.end(e,t,r),e&&this._bufferedWrites.push({data:e,encoding:t})},Object.keys(f).forEach(function(e){var r=p[e]=e.substr(0,e.length-1),i=f[e],a=t[r]=Object.create(i);a.request=function(r,i){return"string"==typeof r?(r=o.parse(r),r.maxRedirects=t.maxRedirects):r=Object.assign({maxRedirects:t.maxRedirects,protocol:e},r),s.equal(r.protocol,e,"protocol mismatch"),c("options",r),new n(r,i)},a.get=function(e,t){var r=a.request(e,t);return r.end(),r}})},324:function(e,t,r){function n(e){var r,n=0;for(r in e)n=(n<<5)-n+e.charCodeAt(r),n|=0;return t.colors[Math.abs(n)%t.colors.length]}function o(e){function r(){if(r.enabled){var e=r,n=+new Date,o=n-(c||n);e.diff=o,e.prev=c,e.curr=n,c=n;for(var s=new Array(arguments.length),i=0;i<s.length;i++)s[i]=arguments[i];s[0]=t.coerce(s[0]),"string"!=typeof s[0]&&s.unshift("%O");var a=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,function(r,n){if("%%"===r)return r;a++;var o=t.formatters[n];if("function"==typeof o){var i=s[a];r=o.call(e,i),s.splice(a,1),a--}return r}),t.formatArgs.call(e,s);(r.log||t.log||console.log.bind(console)).apply(e,s)}}return r.namespace=e,r.enabled=t.enabled(e),r.useColors=t.useColors(),r.color=n(e),"function"==typeof t.init&&t.init(r),r}function s(e){t.save(e),t.names=[],t.skips=[];for(var r=("string"==typeof e?e:"").split(/[\s,]+/),n=r.length,o=0;o<n;o++)r[o]&&(e=r[o].replace(/\*/g,".*?"),"-"===e[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))}function i(){t.enable("")}function a(e){var r,n;for(r=0,n=t.skips.length;r<n;r++)if(t.skips[r].test(e))return!1;for(r=0,n=t.names.length;r<n;r++)if(t.names[r].test(e))return!0;return!1}function u(e){return e instanceof Error?e.stack||e.message:e}t=e.exports=o.debug=o.default=o,t.coerce=u,t.disable=i,t.enable=s,t.enabled=a,t.humanize=r(34),t.names=[],t.skips=[],t.formatters={};var c},325:function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},326:function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},327:function(e,t,r){e.exports=r(328)},328:function(e,t,r){"use strict";function n(e){var t=new i(e),r=s(i.prototype.request,t);return o.extend(r,i.prototype,t),o.extend(r,t),r}var o=r(316),s=r(319),i=r(330),a=r(317),u=n(a);u.Axios=i,u.create=function(e){return n(o.merge(a,e))},u.Cancel=r(326),u.CancelToken=r(348),u.isCancel=r(325),u.all=function(e){return Promise.all(e)},u.spread=r(349),e.exports=u,e.exports.default=u},329:function(e,t){function r(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function n(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&r(e.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(r(e)||n(e)||!!e._isBuffer)}},330:function(e,t,r){"use strict";function n(e){this.defaults=e,this.interceptors={request:new i,response:new i}}var o=r(317),s=r(316),i=r(343),a=r(344),u=r(346),c=r(347);n.prototype.request=function(e){"string"==typeof e&&(e=s.merge({url:arguments[0]},arguments[1])),e=s.merge(o,this.defaults,{method:"get"},e),e.method=e.method.toLowerCase(),e.baseURL&&!u(e.url)&&(e.url=c(e.baseURL,e.url));var t=[a,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)r=r.then(t.shift(),t.shift());return r},s.forEach(["delete","get","head","options"],function(e){n.prototype[e]=function(t,r){return this.request(s.merge(r||{},{method:e,url:t}))}}),s.forEach(["post","put","patch"],function(e){n.prototype[e]=function(t,r,n){return this.request(s.merge(n||{},{method:e,url:t,data:r}))}}),e.exports=n},331:function(e,t,r){"use strict";var n=r(316);e.exports=function(e,t){n.forEach(e,function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])})}},332:function(e,t,r){"use strict";var n=r(316),o=r(320),s=r(322),i=r(333),a=r(334),u=r(318),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||r(335);e.exports=function(e){return new Promise(function(t,f){var p=e.data,l=e.headers;n.isFormData(p)&&delete l["Content-Type"];var d=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||a(e.url)||(d=new window.XDomainRequest,h="onload",m=!0,d.onprogress=function(){},d.ontimeout=function(){}),e.auth){var g=e.auth.username||"",v=e.auth.password||"";l.Authorization="Basic "+c(g+":"+v)}if(d.open(e.method.toUpperCase(),s(e.url,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d[h]=function(){if(d&&(4===d.readyState||m)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?i(d.getAllResponseHeaders()):null,n=e.responseType&&"text"!==e.responseType?d.response:d.responseText,s={data:n,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:r,config:e,request:d};o(t,f,s),d=null}},d.onerror=function(){f(u("Network Error",e,null,d)),d=null},d.ontimeout=function(){f(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",d)),d=null},n.isStandardBrowserEnv()){var y=r(336),b=(e.withCredentials||a(e.url))&&e.xsrfCookieName?y.read(e.xsrfCookieName):void 0;b&&(l[e.xsrfHeaderName]=b)}if("setRequestHeader"in d&&n.forEach(l,function(e,t){void 0===p&&"content-type"===t.toLowerCase()?delete l[t]:d.setRequestHeader(t,e)}),e.withCredentials&&(d.withCredentials=!0),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){d&&(d.abort(),f(e),d=null)}),void 0===p&&(p=null),d.send(p)})}},333:function(e,t,r){"use strict";var n=r(316);e.exports=function(e){var t,r,o,s={};return e?(n.forEach(e.split("\n"),function(e){o=e.indexOf(":"),t=n.trim(e.substr(0,o)).toLowerCase(),r=n.trim(e.substr(o+1)),t&&(s[t]=s[t]?s[t]+", "+r:r)}),s):s}},334:function(e,t,r){"use strict";var n=r(316);e.exports=n.isStandardBrowserEnv()?function(){function e(e){var t=e;return r&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,r=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(r){var o=n.isString(r)?e(r):r;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},335:function(e,t,r){"use strict";function n(){this.message="String contains an invalid character"}function o(e){for(var t,r,o=String(e),i="",a=0,u=s;o.charAt(0|a)||(u="=",a%1);i+=u.charAt(63&t>>8-a%1*8)){if((r=o.charCodeAt(a+=.75))>255)throw new n;t=t<<8|r}return i}var s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",e.exports=o},336:function(e,t,r){"use strict";var n=r(316);e.exports=n.isStandardBrowserEnv()?function(){return{write:function(e,t,r,o,s,i){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(o)&&a.push("path="+o),n.isString(s)&&a.push("domain="+s),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},337:function(e,t,r){"use strict";var n=r(316),o=r(320),s=r(322),i=r(33),a=r(338),u=r(323).http,c=r(323).https,f=r(74),p=r(351),l=r(342),d=r(318),h=r(321);e.exports=function(e){return new Promise(function(t,r){var m,g=e.data,v=e.headers,y=!1;if(v["User-Agent"]||v["user-agent"]||(v["User-Agent"]="axios/"+l.version),g&&!n.isStream(g)){if(Buffer.isBuffer(g));else if(n.isArrayBuffer(g))g=new Buffer(new Uint8Array(g));else{if(!n.isString(g))return r(d("Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream",e));g=new Buffer(g,"utf-8")}v["Content-Length"]=g.length}var b=void 0;if(e.auth){b=(e.auth.username||"")+":"+(e.auth.password||"")}var w=f.parse(e.url),x=w.protocol||"http:";if(!b&&w.auth){var _=w.auth.split(":");b=(_[0]||"")+":"+(_[1]||"")}b&&delete v.Authorization;var C="https:"===x,E=C?e.httpsAgent:e.httpAgent,R={hostname:w.hostname,port:w.port,path:s(w.path,e.params,e.paramsSerializer).replace(/^\?/,""),method:e.method,headers:v,agent:E,auth:b},k=e.proxy;if(!k){var j=x.slice(0,-1)+"_proxy",A=process.env[j]||process.env[j.toUpperCase()];if(A){var O=f.parse(A);if(k={host:O.hostname,port:O.port},O.auth){var S=O.auth.split(":");k.auth={username:S[0],password:S[1]}}}}if(k&&(R.hostname=k.host,R.host=k.host,R.headers.host=w.hostname+(w.port?":"+w.port:""),R.port=k.port,R.path=x+"//"+w.hostname+(w.port?":"+w.port:"")+R.path,k.auth)){var T=new Buffer(k.auth.username+":"+k.auth.password,"utf8").toString("base64");R.headers["Proxy-Authorization"]="Basic "+T}var B;0===e.maxRedirects?B=C?a:i:(e.maxRedirects&&(R.maxRedirects=e.maxRedirects),B=C?c:u);var U=B.request(R,function(n){if(!y){clearTimeout(m),m=null;var s=n;switch(n.headers["content-encoding"]){case"gzip":case"compress":case"deflate":s=s.pipe(p.createUnzip()),delete n.headers["content-encoding"]}var i=n.req||U,a={status:n.statusCode,statusText:n.statusMessage,headers:n.headers,config:e,request:i};if("stream"===e.responseType)a.data=s,o(t,r,a);else{var u=[];s.on("data",function(t){u.push(t),e.maxContentLength>-1&&Buffer.concat(u).length>e.maxContentLength&&r(d("maxContentLength size of "+e.maxContentLength+" exceeded",e,null,i))}),s.on("error",function(t){y||r(h(t,e,null,i))}),s.on("end",function(){var n=Buffer.concat(u);"arraybuffer"!==e.responseType&&(n=n.toString("utf8")),a.data=n,o(t,r,a)})}}});U.on("error",function(t){y||r(h(t,e,null,U))}),e.timeout&&!m&&(m=setTimeout(function(){U.abort(),r(d("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",U)),y=!0},e.timeout)),e.cancelToken&&e.cancelToken.promise.then(function(e){y||(U.abort(),r(e),y=!0)}),n.isStream(g)?g.pipe(U):U.end(g)})}},339:function(e,t,r){"undefined"!=typeof process&&"renderer"===process.type?e.exports=r(340):e.exports=r(341)},340:function(e,t,r){function n(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type)||("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function o(e){var r=this.useColors;if(e[0]=(r?"%c":"")+this.namespace+(r?" %c":" ")+e[0]+(r?"%c ":" ")+"+"+t.humanize(this.diff),r){var n="color: "+this.color;e.splice(1,0,n,"color: inherit");var o=0,s=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(o++,"%c"===e&&(s=o))}),e.splice(s,0,n)}}function s(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function i(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(e){}}function a(){var e;try{e=t.storage.debug}catch(e){}return!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG),e}t=e.exports=r(324),t.log=s,t.formatArgs=o,t.save=i,t.load=a,t.useColors=n,t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},t.enable(a())},341:function(e,t,r){function n(){return"colors"in t.inspectOpts?Boolean(t.inspectOpts.colors):c.isatty(p)}function o(e){var r=this.namespace;if(this.useColors){var n=this.color,o="  [3"+n+";1m"+r+" [0m";e[0]=o+e[0].split("\n").join("\n"+o),e.push("[3"+n+"m+"+t.humanize(this.diff)+"[0m")}else e[0]=(new Date).toUTCString()+" "+r+" "+e[0]}function s(){return l.write(f.format.apply(f,arguments)+"\n")}function i(e){null==e?delete process.env.DEBUG:process.env.DEBUG=e}function a(){return process.env.DEBUG}function u(e){e.inspectOpts={};for(var r=Object.keys(t.inspectOpts),n=0;n<r.length;n++)e.inspectOpts[r[n]]=t.inspectOpts[r[n]]}var c=r(47),f=r(22);t=e.exports=r(324),t.init=u,t.log=s,t.formatArgs=o,t.save=i,t.load=a,t.useColors=n,t.colors=[6,2,3,4,5,1],t.inspectOpts=Object.keys(process.env).filter(function(e){return/^debug_/i.test(e)}).reduce(function(e,t){var r=t.substring(6).toLowerCase().replace(/_([a-z])/g,function(e,t){return t.toUpperCase()}),n=process.env[t];return n=!!/^(yes|on|true|enabled)$/i.test(n)||!/^(no|off|false|disabled)$/i.test(n)&&("null"===n?null:Number(n)),e[r]=n,e},{});var p=parseInt(process.env.DEBUG_FD,10)||2;1!==p&&2!==p&&f.deprecate(function(){},"except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)")();var l=1===p?process.stdout:2===p?process.stderr:function(e){var t;switch(process.binding("tty_wrap").guessHandleType(e)){case"TTY":t=new c.WriteStream(e),t._type="tty",t._handle&&t._handle.unref&&t._handle.unref();break;case"FILE":t=new(r(12).SyncWriteStream)(e,{autoClose:!1}),t._type="fs";break;case"PIPE":case"TCP":t=new(r(35).Socket)({fd:e,readable:!1,writable:!0}),t.readable=!1,t.read=null,t._type="pipe",t._handle&&t._handle.unref&&t._handle.unref();break;default:throw new Error("Implement me. Unknown stream file type!")}return t.fd=e,t._isStdio=!0,t}(p);t.formatters.o=function(e){return this.inspectOpts.colors=this.useColors,f.inspect(e,this.inspectOpts).replace(/\s*\n\s*/g," ")},t.formatters.O=function(e){return this.inspectOpts.colors=this.useColors,f.inspect(e,this.inspectOpts)},t.enable(a())},342:function(e,t){e.exports={name:"axios",version:"0.16.2",description:"Promise based HTTP client for the browser and node.js",main:"index.js",scripts:{test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js"},repository:{type:"git",url:"https://github.com/mzabriskie/axios.git"},keywords:["xhr","http","ajax","promise","node"],author:"Matt Zabriskie",license:"MIT",bugs:{url:"https://github.com/mzabriskie/axios/issues"},homepage:"https://github.com/mzabriskie/axios",devDependencies:{coveralls:"^2.11.9","es6-promise":"^4.0.5",grunt:"^1.0.1","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.0.0","grunt-contrib-nodeunit":"^1.0.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^19.0.0","grunt-karma":"^2.0.0","grunt-ts":"^6.0.0-beta.3","grunt-webpack":"^1.0.18","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^1.3.0","karma-chrome-launcher":"^2.0.0","karma-coverage":"^1.0.0","karma-firefox-launcher":"^1.0.0","karma-jasmine":"^1.0.2","karma-jasmine-ajax":"^0.1.13","karma-opera-launcher":"^1.0.0","karma-phantomjs-launcher":"^1.0.0","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^1.1.0","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^1.7.0","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0","phantomjs-prebuilt":"^2.1.7",sinon:"^1.17.4",webpack:"^1.13.1","webpack-dev-server":"^1.14.1","url-search-params":"^0.6.1",typescript:"^2.0.3"},browser:{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},typings:"./index.d.ts",dependencies:{"follow-redirects":"^1.2.3","is-buffer":"^1.1.5"}}},343:function(e,t,r){"use strict";function n(){this.handlers=[]}var o=r(316);n.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},n.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},n.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=n},344:function(e,t,r){"use strict";function n(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=r(316),s=r(345),i=r(325),a=r(317);e.exports=function(e){return n(e),e.headers=e.headers||{},e.data=s(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||a.adapter)(e).then(function(t){return n(e),t.data=s(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(n(e),t&&t.response&&(t.response.data=s(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},345:function(e,t,r){"use strict";var n=r(316);e.exports=function(e,t,r){return n.forEach(r,function(r){e=r(e,t)}),e}},346:function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},347:function(e,t,r){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},348:function(e,t,r){"use strict";function n(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var r=this;e(function(e){r.reason||(r.reason=new o(e),t(r.reason))})}var o=r(326);n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var e;return{token:new n(function(t){e=t}),cancel:e}},e.exports=n},349:function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}}};