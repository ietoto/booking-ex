//tealium universal tag - utag.746 ut4.0.202010211113, Copyright 2020 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
if(utag.ut.loader===undefined){u.loader=function(o){var b,c,l,a=document;if(o.type==="iframe"){b=a.createElement("iframe");o.attrs=o.attrs||{"height":"1","width":"1","style":"display:none"};for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";for(l in utag.loader.GV(o.attrs)){b[l]=o.attrs[l];}b.src=o.src;}if(o.id){b.id=o.id};if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb()},false);}else{b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b)}}}}else{u.loader=utag.ut.loader;}
u.encode=function(a,b){b="";try{b=encodeURIComponent(a)}catch(e){utag.DB(e);}if(b==""){b=escape(a);}return b}
u.ev={"view":1};u.rp=function(a,b){if(typeof a!=="undefined"&&a.indexOf("@@")>0){a=a.replace(/@@([^@]+)@@/g,function(m,d){if(b[d]){return u.encode(b[d]);}else{return"";}});}
return a;};u.map={"zz_look_action2id":"zz_look_action2id","action":"action","dest_ufi":"dest_ufi","user_location":"user_location","zz_val_eur":"zz_val_eur","ttv_uc":"ttv_uc","date_in":"date_in","date_out":"date_out","rooms":"rooms","nights":"nights","hr":"hr","rid":"rid","p1":"p1","adults":"adults","children":"children","city_name":"city_name","country_name":"country_name","dest_name":"dest_name","region_name":"region_name","ai":"ai","preferred_neighborhoods":"preferred_neighborhoods","preferred_star_ratings":"preferred_star_ratings","seed":"seed","site":"site","sid":"sid","channel_id":"channel_id","exp_andy":"exp_andy","stid":"stid","exp_rmkt_test":"exp_rmkt_test","famem":"famem","famfn":"famfn","fampn":"fampn","logged_in":"logged_in","genis":"genis","gwcur":"gwcur","gwcuc":"gwcuc","bem":"bem","bip":"bip","book_window":"book_window","js_page.travel_type":"travel_type","currency":"currency","em_sent":"em_sent","fn_sent":"fn_sent","pn_sent":"pn_sent","cv":"cv","sage":"sage","atnm":"atnm","cul":"cul","mnns":"mnns","_sm_746_50":"tms","hotel_id":"zz_generic_id","cip":"cip","cua":"cua","sid_dyna":"sid_dyna","tsmp":"tsmp","euuid":"euuid","gcem":"gcem","gcpn":"gcpn"};u.extend=[function(a,b){try{b['_sm_746_50']="tealium";}catch(e){utag.DB(e);}},function(a,b){try{if(1){document.cookie="bkng_prue=1; path=/; domain=."+location.hostname.replace(/^www\./i,"");}}catch(e){utag.DB(e)}},function(a,b){try{if(1){function uuidv4(){if(typeof crypto!=='undefined'&&crypto.getRandomValues!=='undefined'){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(c){return(c^crypto.getRandomValues(new Uint8Array(1))[0]&15>>c/4).toString(16);});}
return'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(c){var r=Math.random()*16|0,v=c=='x'?r:(r&0x3|0x8);return v.toString(16);});}
b['euuid']=uuidv4();}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f;u.data={"qsp_delim":"&"||"&","kvp_delim":"="||"=","qs_delim":"?"||"?","tag_type":"img","base_url":"https://www.booking.com/pr_ue","secure_base_url":"","static_params":"","cachebust":"disabled","cachevar":""||"_rnd"};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){if(typeof utag_err!='undefined'){utag_err.push({e:'extension error:'+e,s:utag.cfg.path+'utag.'+id+'.js',l:c,t:'ex'})}}};utag.DB("send:746:EXTENSIONS");utag.DB(b);c=[];for(d in utag.loader.GV(u.map)){if(typeof b[d]!=="undefined"&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(!u.data.hasOwnProperty(e[f])){c.push(e[f]+"##kvp_delim##"+u.encode(b[d]));}
u.data[e[f]]=b[d];}}}
if(!u.data.base_url){if(!u.data.secure_base_url){utag.DB("Error: No Base URL or Secure HTTPS Override Provided.");return;}else{u.data.base_url=u.data.secure_base_url;utag.DB("No Base URL provided, using Secure HTTPS Override.");}}
u.data.secure_base_url=u.data.secure_base_url||u.data.base_url;u.data.url=(location.protocol==="https:"?u.data.secure_base_url:u.data.base_url);if(u.data.url.indexOf("http")!==0&&u.data.url.indexOf("/")!==0){u.data.url=location.protocol+"//"+u.data.url;}
if(u.data.static_params){c.push(u.data.static_params);}
var cb_check=new RegExp("(\\"+u.data.qs_delim+"|"+u.data.qsp_delim+")"+u.data.cachevar+"=");if(u.data.cachebust==="enabled"&&!cb_check.test(u.data.url)){c.push([u.data.cachevar,Math.random()].join(u.data.kvp_delim));}
if(c.length>0){if(u.data.url.indexOf(u.data.qs_delim)<0){u.data.url+=u.data.qs_delim;}else if(u.data.url.indexOf(u.data.qs_delim)!==(u.data.url.length-1)){u.data.url+=u.data.qsp_delim;}}
u.data.url=u.rp(u.data.url,b)+u.rp(c.join(u.data.qsp_delim),b);u.data.url=u.data.url.replace(/##kvp_delim##/g,u.data.kvp_delim);u.callback=u.callback||function(){};u.loader({"type":u.data.tag_type,"src":u.data.url,"loc":"script","id":"utag_746","cb":u.callback});utag.DB("send:746:COMPLETE");}};utag.o[loader].loader.LOAD(id);}("746","booking.com.main"));}catch(error){utag.DB(error);}