(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
var aa={},h=this||self;var n,p;a:{for(var u=["CLOSURE_FLAGS"],A=h,B=0;B<u.length;B++)if(A=A[u[B]],null==A){p=null;break a}p=A}var C=p&&p[610401301];n=null!=C?C:!1;var D,ba=h.navigator;D=ba?ba.userAgentData||null:null;function E(a){return n?D?D.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}function F(a){var b;a:{if(b=h.navigator)if(b=b.userAgent)break a;b=""}return-1!=b.indexOf(a)};function G(){return n?!!D&&0<D.brands.length:!1}function H(){return G()?E("Chromium"):(F("Chrome")||F("CriOS"))&&!(G()?0:F("Edge"))||F("Silk")};function ca(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)};function I(a){I[" "](a);return a}I[" "]=function(){};!F("Android")||H();H();F("Safari")&&(H()||(G()?0:F("Coast"))||(G()?0:F("Opera"))||(G()?0:F("Edge"))||(G()?E("Microsoft Edge"):F("Edg/"))||G()&&E("Opera"));function da(a){var b=window;b.addEventListener&&b.addEventListener("load",a,!1)};var ea=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function J(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(a[c],c,a)};function fa(a){h.google_image_requests||(h.google_image_requests=[]);var b=h.document;b=void 0===b?document:b;b=b.createElement("img");b.src=a;h.google_image_requests.push(b)};function ha(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c};var ia=RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");function ja(a,b){this.g=a;this.h=b}function ka(a,b){this.url=a;this.o=!!b;this.depth=null};function K(){this.i="&";this.h={};this.j=0;this.g=[]}function L(a,b){var c={};c[a]=b;return[c]}function la(a,b,c,d,e){var f=[];J(a,function(k,m){(k=qa(k,b,c,d,e))&&f.push(m+"="+k)});return f.join(b)} 
function qa(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],k=0;k<a.length;k++)f.push(qa(a[k],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(la(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))} 
function ra(a,b){var c="https://pagead2.googlesyndication.com"+b,d=sa(a)-b.length;if(0>d)return"";a.g.sort(function(v,q){return v-q});b=null;for(var e="",f=0;f<a.g.length;f++)for(var k=a.g[f],m=a.h[k],g=0;g<m.length;g++){if(!d){b=null==b?k:b;break}var l=la(m[g],a.i,",$");if(l){l=e+l;if(d>=l.length){d-=l.length;c+=l;e=a.i;break}b=null==b?k:b}}a="";null!=b&&(a=e+"trn="+b);return c+a}function sa(a){var b=1,c;for(c in a.h)b=c.length>b?c.length:b;return 3997-b-a.i.length-1};function ta(){this.g=Math.random()}function ua(){var a=M,b=window.google_srt;0<=b&&1>=b&&(a.g=b)}function va(a,b,c,d,e){if(((void 0===d?0:d)?a.g:Math.random())<(e||.01))try{if(c instanceof K)var f=c;else f=new K,J(c,function(m,g){var l=f,v=l.j++;m=L(g,m);l.g.push(v);l.h[v]=m});var k=ra(f,"/pagead/gen_204?id="+b+"&");k&&fa(k)}catch(m){}};var N=null;function wa(){var a=void 0===a?h:a;return(a=a.performance)&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()}function xa(){var a=void 0===a?h:a;return(a=a.performance)&&a.now?a.now():null};function ya(a,b){var c=xa()||wa();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.taskId=this.slotId=void 0};var O=h.performance,za=!!(O&&O.mark&&O.measure&&O.clearMarks),P=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a;if(a=za){var b;if(null===N){N="";try{a="";try{a=h.top.location.hash}catch(c){a=h.location.hash}a&&(N=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=N;a=!!b.indexOf&&0<=b.indexOf("1337")}return a}); 
function Q(){var a=window;this.h=[];this.i=a||h;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.h=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.g=P()||(null!=b?b:1>Math.random())}function Aa(a){a&&O&&P()&&(O.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_start"),O.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_end"))}Q.prototype.start=function(a,b){if(!this.g)return null;a=new ya(a,b);b="goog_"+a.label+"_"+a.uniqueId+"_start";O&&P()&&O.mark(b);return a}; 
Q.prototype.end=function(a){if(this.g&&"number"===typeof a.value){a.duration=(xa()||wa())-a.value;var b="goog_"+a.label+"_"+a.uniqueId+"_end";O&&P()&&O.mark(b);!this.g||2048<this.h.length||this.h.push(a)}};function Ba(){var a=R;this.j=M;this.m="jserror";this.h=null;this.s=this.l;this.g=void 0===a?null:a;this.i=!1} 
Ba.prototype.l=function(a,b,c,d,e){e=e||this.m;try{var f=new K;f.g.push(1);f.h[1]=L("context",a);b.error&&b.meta&&b.id||(b=new ha(b,{message:S(b)}));if(b.msg){var k=b.msg.substring(0,512);f.g.push(2);f.h[2]=L("msg",k)}var m=b.meta||{};if(this.h)try{this.h(m)}catch(z){}if(d)try{d(m)}catch(z){}b=[m];f.g.push(3);f.h[3]=b;d=h;b=[];k=null;do{var g=d;try{var l;if(l=!!g&&null!=g.location.href)b:{try{I(g.foo);l=!0;break b}catch(z){}l=!1}var v=l}catch(z){v=!1}if(v){var q=g.location.href;k=g.document&&g.document.referrer|| 
null}else q=k,k=null;b.push(new ka(q||""));try{d=g.parent}catch(z){d=null}}while(d&&g!=d);q=0;for(var w=b.length-1;q<=w;++q)b[q].depth=w-q;g=h;if(g.location&&g.location.ancestorOrigins&&g.location.ancestorOrigins.length==b.length-1)for(w=1;w<b.length;++w){var x=b[w];x.url||(x.url=g.location.ancestorOrigins[w-1]||"",x.o=!0)}var r=new ka(h.location.href,!1);g=null;var T=b.length-1;for(x=T;0<=x;--x){var t=b[x];!g&&ia.test(t.url)&&(g=t);if(t.url&&!t.o){r=t;break}}t=null;var Ga=b.length&&b[T].url;0!=r.depth&& 
Ga&&(t=b[T]);var y=new ja(r,t);if(y.h){var Ha=y.h.url||"";f.g.push(4);f.h[4]=L("top",Ha)}var U={url:y.g.url||""};if(y.g.url){var V=y.g.url.match(ea),ma=V[1],na=V[3],oa=V[4];r="";ma&&(r+=ma+":");na&&(r+="//",r+=na,oa&&(r+=":"+oa));var pa=r}else pa="";U=[U,{url:pa}];f.g.push(5);f.h[5]=U;va(this.j,e,f,this.i,c)}catch(z){try{va(this.j,e,{context:"ecmserr",rctx:a,msg:S(z),url:y&&y.g.url},this.i,c)}catch(Ka){}}return!0}; 
function S(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"),"$1");b=a.replace(RegExp("\n *","g"),"\n")}catch(e){b=c}}return b};var M,W,R=new Q;function Ca(){if(!window.google_measure_js_timing){var a=R;a.g=!1;a.h!=a.i.google_js_reporting_queue&&(P()&&ca(a.h,Aa),a.h.length=0)}}(function(a){M=null!=a?a:new ta;"number"!==typeof window.google_srt&&(window.google_srt=Math.random());ua();W=new Ba;W.h=function(){};W.i=!0;"complete"==window.document.readyState?Ca():R.g&&da(function(){Ca()})})();function Da(a,b,c){W.l(a,b,1,c)};function Ea(a){a.error&&a.meta&&a.id&&a.context&&(W.m=a.id,Da(a.context,a.error,function(b){J(a.meta,function(c,d){b[d]=c})}))};function Fa(){h.google_js_errors=h.google_js_errors||[];ca(h.google_js_errors,Ea);h.google_js_errors={push:Ea}}var X=W,Y;try{X.g&&X.g.g?(Y=X.g.start((284).toString(),3),Fa(),X.g.end(Y)):Fa()}catch(a){var Ia=!0;try{Aa(Y),Ia=X.s(284,new ha(a,{message:S(a)}),void 0,void 0)}catch(b){X.l(217,b)}if(Ia){var Z,Ja;null==(Z=window.console)||null==(Ja=Z.error)||Ja.call(Z,a)}else throw a;};}).call(this);