/*!
 * jQuery JavaScript Library v1.10.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03T13:48Z
 */(function(window,undefined){var
readyList,rootjQuery,core_strundefined=typeof undefined,location=window.location,document=window.document,docElem=document.documentElement,_jQuery=window.jQuery,_$=window.$,class2type={},core_deletedIds=[],core_version="1.10.2",core_concat=core_deletedIds.concat,core_push=core_deletedIds.push,core_slice=core_deletedIds.slice,core_indexOf=core_deletedIds.indexOf,core_toString=class2type.toString,core_hasOwn=class2type.hasOwnProperty,core_trim=core_version.trim,jQuery=function(selector,context){return new jQuery.fn.init(selector,context,rootjQuery);},core_pnum=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,core_rnotwhite=/\S+/g,rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,rsingleTag=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,rvalidchars=/^[\],:{}\s]*$/,rvalidbraces=/(?:^|:|,)(?:\s*\[)+/g,rvalidescape=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,rvalidtokens=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,rmsPrefix=/^-ms-/,rdashAlpha=/-([\da-z])/gi,fcamelCase=function(all,letter){return letter.toUpperCase();},completed=function(event){if(document.addEventListener||event.type==="load"||document.readyState==="complete"){detach();jQuery.ready();}},detach=function(){if(document.addEventListener){document.removeEventListener("DOMContentLoaded",completed,false);window.removeEventListener("load",completed,false);}else{document.detachEvent("onreadystatechange",completed);window.detachEvent("onload",completed);}};jQuery.fn=jQuery.prototype={jquery:core_version,constructor:jQuery,init:function(selector,context,rootjQuery){var match,elem;if(!selector){return this;}
if(typeof selector==="string"){if(selector.charAt(0)==="<"&&selector.charAt(selector.length-1)===">"&&selector.length>=3){match=[null,selector,null];}else{match=rquickExpr.exec(selector);}
if(match&&(match[1]||!context)){if(match[1]){context=context instanceof jQuery?context[0]:context;jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true));if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){if(jQuery.isFunction(this[match])){this[match](context[match]);}else{this.attr(match,context[match]);}}}
return this;}else{elem=document.getElementById(match[2]);if(elem&&elem.parentNode){if(elem.id!==match[2]){return rootjQuery.find(selector);}
this.length=1;this[0]=elem;}
this.context=document;this.selector=selector;return this;}}else if(!context||context.jquery){return(context||rootjQuery).find(selector);}else{return this.constructor(context).find(selector);}}else if(selector.nodeType){this.context=this[0]=selector;this.length=1;return this;}else if(jQuery.isFunction(selector)){return rootjQuery.ready(selector);}
if(selector.selector!==undefined){this.selector=selector.selector;this.context=selector.context;}
return jQuery.makeArray(selector,this);},selector:"",length:0,toArray:function(){return core_slice.call(this);},get:function(num){return num==null?this.toArray():(num<0?this[this.length+num]:this[num]);},pushStack:function(elems){var ret=jQuery.merge(this.constructor(),elems);ret.prevObject=this;ret.context=this.context;return ret;},each:function(callback,args){return jQuery.each(this,callback,args);},ready:function(fn){jQuery.ready.promise().done(fn);return this;},slice:function(){return this.pushStack(core_slice.apply(this,arguments));},first:function(){return this.eq(0);},last:function(){return this.eq(-1);},eq:function(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[]);},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},end:function(){return this.prevObject||this.constructor(null);},push:core_push,sort:[].sort,splice:[].splice};jQuery.fn.init.prototype=jQuery.fn;jQuery.extend=jQuery.fn.extend=function(){var src,copyIsArray,copy,name,options,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;if(typeof target==="boolean"){deep=target;target=arguments[1]||{};i=2;}
if(typeof target!=="object"&&!jQuery.isFunction(target)){target={};}
if(length===i){target=this;--i;}
for(;i<length;i++){if((options=arguments[i])!=null){for(name in options){src=target[name];copy=options[name];if(target===copy){continue;}
if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&jQuery.isArray(src)?src:[];}else{clone=src&&jQuery.isPlainObject(src)?src:{};}
target[name]=jQuery.extend(deep,clone,copy);}else if(copy!==undefined){target[name]=copy;}}}}
return target;};jQuery.extend({expando:"jQuery"+(core_version+Math.random()).replace(/\D/g,""),noConflict:function(deep){if(window.$===jQuery){window.$=_$;}
if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery;}
return jQuery;},isReady:false,readyWait:1,holdReady:function(hold){if(hold){jQuery.readyWait++;}else{jQuery.ready(true);}},ready:function(wait){if(wait===true?--jQuery.readyWait:jQuery.isReady){return;}
if(!document.body){return setTimeout(jQuery.ready);}
jQuery.isReady=true;if(wait!==true&&--jQuery.readyWait>0){return;}
readyList.resolveWith(document,[jQuery]);if(jQuery.fn.trigger){jQuery(document).trigger("ready").off("ready");}},isFunction:function(obj){return jQuery.type(obj)==="function";},isArray:Array.isArray||function(obj){return jQuery.type(obj)==="array";},isWindow:function(obj){return obj!=null&&obj==obj.window;},isNumeric:function(obj){return!isNaN(parseFloat(obj))&&isFinite(obj);},type:function(obj){if(obj==null){return String(obj);}
return typeof obj==="object"||typeof obj==="function"?class2type[core_toString.call(obj)]||"object":typeof obj;},isPlainObject:function(obj){var key;if(!obj||jQuery.type(obj)!=="object"||obj.nodeType||jQuery.isWindow(obj)){return false;}
try{if(obj.constructor&&!core_hasOwn.call(obj,"constructor")&&!core_hasOwn.call(obj.constructor.prototype,"isPrototypeOf")){return false;}}catch(e){return false;}
if(jQuery.support.ownLast){for(key in obj){return core_hasOwn.call(obj,key);}}
for(key in obj){}
return key===undefined||core_hasOwn.call(obj,key);},isEmptyObject:function(obj){var name;for(name in obj){return false;}
return true;},error:function(msg){throw new Error(msg);},parseHTML:function(data,context,keepScripts){if(!data||typeof data!=="string"){return null;}
if(typeof context==="boolean"){keepScripts=context;context=false;}
context=context||document;var parsed=rsingleTag.exec(data),scripts=!keepScripts&&[];if(parsed){return[context.createElement(parsed[1])];}
parsed=jQuery.buildFragment([data],context,scripts);if(scripts){jQuery(scripts).remove();}
return jQuery.merge([],parsed.childNodes);},parseJSON:function(data){if(window.JSON&&window.JSON.parse){return window.JSON.parse(data);}
if(data===null){return data;}
if(typeof data==="string"){data=jQuery.trim(data);if(data){if(rvalidchars.test(data.replace(rvalidescape,"@").replace(rvalidtokens,"]").replace(rvalidbraces,""))){return(new Function("return "+data))();}}}
jQuery.error("Invalid JSON: "+data);},parseXML:function(data){var xml,tmp;if(!data||typeof data!=="string"){return null;}
try{if(window.DOMParser){tmp=new DOMParser();xml=tmp.parseFromString(data,"text/xml");}else{xml=new ActiveXObject("Microsoft.XMLDOM");xml.async="false";xml.loadXML(data);}}catch(e){xml=undefined;}
if(!xml||!xml.documentElement||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data);}
return xml;},noop:function(){},globalEval:function(data){if(data&&jQuery.trim(data)){(window.execScript||function(data){window["eval"].call(window,data);})(data);}},camelCase:function(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);},nodeName:function(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();},each:function(obj,callback,args){var value,i=0,length=obj.length,isArray=isArraylike(obj);if(args){if(isArray){for(;i<length;i++){value=callback.apply(obj[i],args);if(value===false){break;}}}else{for(i in obj){value=callback.apply(obj[i],args);if(value===false){break;}}}}else{if(isArray){for(;i<length;i++){value=callback.call(obj[i],i,obj[i]);if(value===false){break;}}}else{for(i in obj){value=callback.call(obj[i],i,obj[i]);if(value===false){break;}}}}
return obj;},trim:core_trim&&!core_trim.call("\uFEFF\xA0")?function(text){return text==null?"":core_trim.call(text);}:function(text){return text==null?"":(text+"").replace(rtrim,"");},makeArray:function(arr,results){var ret=results||[];if(arr!=null){if(isArraylike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr);}else{core_push.call(ret,arr);}}
return ret;},inArray:function(elem,arr,i){var len;if(arr){if(core_indexOf){return core_indexOf.call(arr,elem,i);}
len=arr.length;i=i?i<0?Math.max(0,len+i):i:0;for(;i<len;i++){if(i in arr&&arr[i]===elem){return i;}}}
return-1;},merge:function(first,second){var l=second.length,i=first.length,j=0;if(typeof l==="number"){for(;j<l;j++){first[i++]=second[j];}}else{while(second[j]!==undefined){first[i++]=second[j++];}}
first.length=i;return first;},grep:function(elems,callback,inv){var retVal,ret=[],i=0,length=elems.length;inv=!!inv;for(;i<length;i++){retVal=!!callback(elems[i],i);if(inv!==retVal){ret.push(elems[i]);}}
return ret;},map:function(elems,callback,arg){var value,i=0,length=elems.length,isArray=isArraylike(elems),ret=[];if(isArray){for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret[ret.length]=value;}}}else{for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret[ret.length]=value;}}}
return core_concat.apply([],ret);},guid:1,proxy:function(fn,context){var args,proxy,tmp;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp;}
if(!jQuery.isFunction(fn)){return undefined;}
args=core_slice.call(arguments,2);proxy=function(){return fn.apply(context||this,args.concat(core_slice.call(arguments)));};proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;},access:function(elems,fn,key,value,chainable,emptyGet,raw){var i=0,length=elems.length,bulk=key==null;if(jQuery.type(key)==="object"){chainable=true;for(i in key){jQuery.access(elems,fn,i,key[i],true,emptyGet,raw);}}else if(value!==undefined){chainable=true;if(!jQuery.isFunction(value)){raw=true;}
if(bulk){if(raw){fn.call(elems,value);fn=null;}else{bulk=fn;fn=function(elem,key,value){return bulk.call(jQuery(elem),value);};}}
if(fn){for(;i<length;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));}}}
return chainable?elems:bulk?fn.call(elems):length?fn(elems[0],key):emptyGet;},now:function(){return(new Date()).getTime();},swap:function(elem,options,callback,args){var ret,name,old={};for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}
ret=callback.apply(elem,args||[]);for(name in options){elem.style[name]=old[name];}
return ret;}});jQuery.ready.promise=function(obj){if(!readyList){readyList=jQuery.Deferred();if(document.readyState==="complete"){setTimeout(jQuery.ready);}else if(document.addEventListener){document.addEventListener("DOMContentLoaded",completed,false);window.addEventListener("load",completed,false);}else{document.attachEvent("onreadystatechange",completed);window.attachEvent("onload",completed);var top=false;try{top=window.frameElement==null&&document.documentElement;}catch(e){}
if(top&&top.doScroll){(function doScrollCheck(){if(!jQuery.isReady){try{top.doScroll("left");}catch(e){return setTimeout(doScrollCheck,50);}
detach();jQuery.ready();}})();}}}
return readyList.promise(obj);};jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase();});function isArraylike(obj){var length=obj.length,type=jQuery.type(obj);if(jQuery.isWindow(obj)){return false;}
if(obj.nodeType===1&&length){return true;}
return type==="array"||type!=="function"&&(length===0||typeof length==="number"&&length>0&&(length-1)in obj);}
rootjQuery=jQuery(document);/*!
 * Sizzle CSS Selector Engine v1.10.2
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03
 */(function(window,undefined){var i,support,cachedruns,Expr,getText,isXML,compile,outermostContext,sortInput,setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains,expando="sizzle"+-(new Date()),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),hasDuplicate=false,sortOrder=function(a,b){if(a===b){hasDuplicate=true;return 0;}
return 0;},strundefined=typeof undefined,MAX_NEGATIVE=1<<31,hasOwn=({}).hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice,indexOf=arr.indexOf||function(elem){var i=0,len=this.length;for(;i<len;i++){if(this[i]===elem){return i;}}
return-1;},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",whitespace="[\\x20\\t\\r\\n\\f]",characterEncoding="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",identifier=characterEncoding.replace("w","w#"),attributes="\\["+whitespace+"*("+characterEncoding+")"+whitespace+"*(?:([*^$|!~]?=)"+whitespace+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+identifier+")|)|)"+whitespace+"*\\]",pseudos=":("+characterEncoding+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+attributes.replace(3,8)+")*)|.*)\\)|)",rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rsibling=new RegExp(whitespace+"*[+~]"),rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*)"+whitespace+"*\\]","g"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={"ID":new RegExp("^#("+characterEncoding+")"),"CLASS":new RegExp("^\\.("+characterEncoding+")"),"TAG":new RegExp("^("+characterEncoding.replace("w","w*")+")"),"ATTR":new RegExp("^"+attributes),"PSEUDO":new RegExp("^"+pseudos),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),"bool":new RegExp("^(?:"+booleans+")$","i"),"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+
whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rnative=/^[^{]+\{\s*\[native \w/,rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rescape=/'|\\/g,runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),funescape=function(_,escaped,escapedWhitespace){var high="0x"+escaped-0x10000;return high!==high||escapedWhitespace?escaped:high<0?String.fromCharCode(high+0x10000):String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);};try{push.apply((arr=slice.call(preferredDoc.childNodes)),preferredDoc.childNodes);arr[preferredDoc.childNodes.length].nodeType;}catch(e){push={apply:arr.length?function(target,els){push_native.apply(target,slice.call(els));}:function(target,els){var j=target.length,i=0;while((target[j++]=els[i++])){}
target.length=j-1;}};}
function Sizzle(selector,context,results,seed){var match,elem,m,nodeType,i,groups,old,nid,newContext,newSelector;if((context?context.ownerDocument||context:preferredDoc)!==document){setDocument(context);}
context=context||document;results=results||[];if(!selector||typeof selector!=="string"){return results;}
if((nodeType=context.nodeType)!==1&&nodeType!==9){return[];}
if(documentIsHTML&&!seed){if((match=rquickExpr.exec(selector))){if((m=match[1])){if(nodeType===9){elem=context.getElementById(m);if(elem&&elem.parentNode){if(elem.id===m){results.push(elem);return results;}}else{return results;}}else{if(context.ownerDocument&&(elem=context.ownerDocument.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results;}}}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results;}else if((m=match[3])&&support.getElementsByClassName&&context.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results;}}
if(support.qsa&&(!rbuggyQSA||!rbuggyQSA.test(selector))){nid=old=expando;newContext=context;newSelector=nodeType===9&&selector;if(nodeType===1&&context.nodeName.toLowerCase()!=="object"){groups=tokenize(selector);if((old=context.getAttribute("id"))){nid=old.replace(rescape,"\\$&");}else{context.setAttribute("id",nid);}
nid="[id='"+nid+"'] ";i=groups.length;while(i--){groups[i]=nid+toSelector(groups[i]);}
newContext=rsibling.test(selector)&&context.parentNode||context;newSelector=groups.join(",");}
if(newSelector){try{push.apply(results,newContext.querySelectorAll(newSelector));return results;}catch(qsaError){}finally{if(!old){context.removeAttribute("id");}}}}}
return select(selector.replace(rtrim,"$1"),context,results,seed);}
function createCache(){var keys=[];function cache(key,value){if(keys.push(key+=" ")>Expr.cacheLength){delete cache[keys.shift()];}
return(cache[key]=value);}
return cache;}
function markFunction(fn){fn[expando]=true;return fn;}
function assert(fn){var div=document.createElement("div");try{return!!fn(div);}catch(e){return false;}finally{if(div.parentNode){div.parentNode.removeChild(div);}
div=null;}}
function addHandle(attrs,handler){var arr=attrs.split("|"),i=attrs.length;while(i--){Expr.attrHandle[arr[i]]=handler;}}
function siblingCheck(a,b){var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&(~b.sourceIndex||MAX_NEGATIVE)-
(~a.sourceIndex||MAX_NEGATIVE);if(diff){return diff;}
if(cur){while((cur=cur.nextSibling)){if(cur===b){return-1;}}}
return a?1:-1;}
function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type;};}
function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&elem.type===type;};}
function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;while(i--){if(seed[(j=matchIndexes[i])]){seed[j]=!(matches[j]=seed[j]);}}});});}
isXML=Sizzle.isXML=function(elem){var documentElement=elem&&(elem.ownerDocument||elem).documentElement;return documentElement?documentElement.nodeName!=="HTML":false;};support=Sizzle.support={};setDocument=Sizzle.setDocument=function(node){var doc=node?node.ownerDocument||node:preferredDoc,parent=doc.defaultView;if(doc===document||doc.nodeType!==9||!doc.documentElement){return document;}
document=doc;docElem=doc.documentElement;documentIsHTML=!isXML(doc);if(parent&&parent.attachEvent&&parent!==parent.top){parent.attachEvent("onbeforeunload",function(){setDocument();});}
support.attributes=assert(function(div){div.className="i";return!div.getAttribute("className");});support.getElementsByTagName=assert(function(div){div.appendChild(doc.createComment(""));return!div.getElementsByTagName("*").length;});support.getElementsByClassName=assert(function(div){div.innerHTML="<div class='a'></div><div class='a i'></div>";div.firstChild.className="i";return div.getElementsByClassName("i").length===2;});support.getById=assert(function(div){docElem.appendChild(div).id=expando;return!doc.getElementsByName||!doc.getElementsByName(expando).length;});if(support.getById){Expr.find["ID"]=function(id,context){if(typeof context.getElementById!==strundefined&&documentIsHTML){var m=context.getElementById(id);return m&&m.parentNode?[m]:[];}};Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId;};};}else{delete Expr.find["ID"];Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode!==strundefined&&elem.getAttributeNode("id");return node&&node.value===attrId;};};}
Expr.find["TAG"]=support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName!==strundefined){return context.getElementsByTagName(tag);}}:function(tag,context){var elem,tmp=[],i=0,results=context.getElementsByTagName(tag);if(tag==="*"){while((elem=results[i++])){if(elem.nodeType===1){tmp.push(elem);}}
return tmp;}
return results;};Expr.find["CLASS"]=support.getElementsByClassName&&function(className,context){if(typeof context.getElementsByClassName!==strundefined&&documentIsHTML){return context.getElementsByClassName(className);}};rbuggyMatches=[];rbuggyQSA=[];if((support.qsa=rnative.test(doc.querySelectorAll))){assert(function(div){div.innerHTML="<select><option selected=''></option></select>";if(!div.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")");}
if(!div.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");}});assert(function(div){var input=doc.createElement("input");input.setAttribute("type","hidden");div.appendChild(input).setAttribute("t","");if(div.querySelectorAll("[t^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")");}
if(!div.querySelectorAll(":enabled").length){rbuggyQSA.push(":enabled",":disabled");}
div.querySelectorAll("*,:x");rbuggyQSA.push(",.*:");});}
if((support.matchesSelector=rnative.test((matches=docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)))){assert(function(div){support.disconnectedMatch=matches.call(div,"div");matches.call(div,"[s!='']:x");rbuggyMatches.push("!=",pseudos);});}
rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));contains=rnative.test(docElem.contains)||docElem.compareDocumentPosition?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16));}:function(a,b){if(b){while((b=b.parentNode)){if(b===a){return true;}}}
return false;};sortOrder=docElem.compareDocumentPosition?function(a,b){if(a===b){hasDuplicate=true;return 0;}
var compare=b.compareDocumentPosition&&a.compareDocumentPosition&&a.compareDocumentPosition(b);if(compare){if(compare&1||(!support.sortDetached&&b.compareDocumentPosition(a)===compare)){if(a===doc||contains(preferredDoc,a)){return-1;}
if(b===doc||contains(preferredDoc,b)){return 1;}
return sortInput?(indexOf.call(sortInput,a)-indexOf.call(sortInput,b)):0;}
return compare&4?-1:1;}
return a.compareDocumentPosition?-1:1;}:function(a,b){var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];if(a===b){hasDuplicate=true;return 0;}else if(!aup||!bup){return a===doc?-1:b===doc?1:aup?-1:bup?1:sortInput?(indexOf.call(sortInput,a)-indexOf.call(sortInput,b)):0;}else if(aup===bup){return siblingCheck(a,b);}
cur=a;while((cur=cur.parentNode)){ap.unshift(cur);}
cur=b;while((cur=cur.parentNode)){bp.unshift(cur);}
while(ap[i]===bp[i]){i++;}
return i?siblingCheck(ap[i],bp[i]):ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0;};return doc;};Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements);};Sizzle.matchesSelector=function(elem,expr){if((elem.ownerDocument||elem)!==document){setDocument(elem);}
expr=expr.replace(rattributeQuotes,"='$1']");if(support.matchesSelector&&documentIsHTML&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr);if(ret||support.disconnectedMatch||elem.document&&elem.document.nodeType!==11){return ret;}}catch(e){}}
return Sizzle(expr,document,null,[elem]).length>0;};Sizzle.contains=function(context,elem){if((context.ownerDocument||context)!==document){setDocument(context);}
return contains(context,elem);};Sizzle.attr=function(elem,name){if((elem.ownerDocument||elem)!==document){setDocument(elem);}
var fn=Expr.attrHandle[name.toLowerCase()],val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val===undefined?support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null:val;};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg);};Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0;hasDuplicate=!support.detectDuplicates;sortInput=!support.sortStable&&results.slice(0);results.sort(sortOrder);if(hasDuplicate){while((elem=results[i++])){if(elem===results[i]){j=duplicates.push(i);}}
while(j--){results.splice(duplicates[j],1);}}
return results;};getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){for(;(node=elem[i]);i++){ret+=getText(node);}}else if(nodeType===1||nodeType===9||nodeType===11){if(typeof elem.textContent==="string"){return elem.textContent;}else{for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem);}}}else if(nodeType===3||nodeType===4){return elem.nodeValue;}
return ret;};Expr=Sizzle.selectors={cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function(match){match[1]=match[1].replace(runescape,funescape);match[3]=(match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+" ";}
return match.slice(0,4);},"CHILD":function(match){match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){if(!match[3]){Sizzle.error(match[0]);}
match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));match[5]=+((match[7]+match[8])||match[3]==="odd");}else if(match[3]){Sizzle.error(match[0]);}
return match;},"PSEUDO":function(match){var excess,unquoted=!match[5]&&match[2];if(matchExpr["CHILD"].test(match[0])){return null;}
if(match[3]&&match[4]!==undefined){match[2]=match[4];}else if(unquoted&&rpseudo.test(unquoted)&&(excess=tokenize(unquoted,true))&&(excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess);}
return match.slice(0,3);}},filter:{"TAG":function(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector==="*"?function(){return true;}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;};},"CLASS":function(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!==strundefined&&elem.getAttribute("class")||"");});},"ATTR":function(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!=";}
if(!operator){return true;}
result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":false;};},"CHILD":function(type,what,argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0?function(elem){return!!elem.parentNode;}:function(elem,context,xml){var cache,outerCache,node,diff,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType;if(parent){if(simple){while(dir){node=elem;while((node=node[dir])){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return false;}}
start=dir=type==="only"&&!start&&"nextSibling";}
return true;}
start=[forward?parent.firstChild:parent.lastChild];if(forward&&useCache){outerCache=parent[expando]||(parent[expando]={});cache=outerCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=cache[0]===dirruns&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if(node.nodeType===1&&++diff&&node===elem){outerCache[type]=[dirruns,nodeIndex,diff];break;}}}else if(useCache&&(cache=(elem[expando]||(elem[expando]={}))[type])&&cache[0]===dirruns){diff=cache[1];}else{while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){if(useCache){(node[expando]||(node[expando]={}))[type]=[dirruns,diff];}
if(node===elem){break;}}}}
diff-=last;return diff===first||(diff%first===0&&diff/first>=0);}};},"PSEUDO":function(pseudo,argument){var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);if(fn[expando]){return fn(argument);}
if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf.call(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i]);}}):function(elem){return fn(elem,0,args);};}
return fn;}},pseudos:{"not":markFunction(function(selector){var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;while(i--){if((elem=unmatched[i])){seed[i]=!(matches[i]=elem);}}}):function(elem,context,xml){input[0]=elem;matcher(input,null,xml,results);return!results.pop();};}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0;};}),"contains":markFunction(function(text){return function(elem){return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1;};}),"lang":markFunction(function(lang){if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang);}
lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do{if((elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang"))){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0;}}while((elem=elem.parentNode)&&elem.nodeType===1);return false;};}),"target":function(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id;},"root":function(elem){return elem===docElem;},"focus":function(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);},"enabled":function(elem){return elem.disabled===false;},"disabled":function(elem){return elem.disabled===true;},"checked":function(elem){var nodeName=elem.nodeName.toLowerCase();return(nodeName==="input"&&!!elem.checked)||(nodeName==="option"&&!!elem.selected);},"selected":function(elem){if(elem.parentNode){elem.parentNode.selectedIndex;}
return elem.selected===true;},"empty":function(elem){for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeName>"@"||elem.nodeType===3||elem.nodeType===4){return false;}}
return true;},"parent":function(elem){return!Expr.pseudos["empty"](elem);},"header":function(elem){return rheader.test(elem.nodeName);},"input":function(elem){return rinputs.test(elem.nodeName);},"button":function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button";},"text":function(elem){var attr;return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&((attr=elem.getAttribute("type"))==null||attr.toLowerCase()===elem.type);},"first":createPositionalPseudo(function(){return[0];}),"last":createPositionalPseudo(function(matchIndexes,length){return[length-1];}),"eq":createPositionalPseudo(function(matchIndexes,length,argument){return[argument<0?argument+length:argument];}),"even":createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i);}
return matchIndexes;}),"odd":createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i);}
return matchIndexes;}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;--i>=0;){matchIndexes.push(i);}
return matchIndexes;}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.push(i);}
return matchIndexes;})}};Expr.pseudos["nth"]=Expr.pseudos["eq"];for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i);}
for(i in{submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i);}
function setFilters(){}
setFilters.prototype=Expr.filters=Expr.pseudos;Expr.setFilters=new setFilters();function tokenize(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0);}
soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){if(!matched||(match=rcomma.exec(soFar))){if(match){soFar=soFar.slice(match[0].length)||soFar;}
groups.push(tokens=[]);}
matched=false;if((match=rcombinators.exec(soFar))){matched=match.shift();tokens.push({value:matched,type:match[0].replace(rtrim," ")});soFar=soFar.slice(matched.length);}
for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length);}}
if(!matched){break;}}
return parseOnly?soFar.length:soFar?Sizzle.error(selector):tokenCache(selector,groups).slice(0);}
function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value;}
return selector;}
function addCombinator(matcher,combinator,base){var dir=combinator.dir,checkNonElements=base&&dir==="parentNode",doneName=done++;return combinator.first?function(elem,context,xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml);}}}:function(elem,context,xml){var data,cache,outerCache,dirkey=dirruns+" "+doneName;if(xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true;}}}}else{while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});if((cache=outerCache[dir])&&cache[0]===dirkey){if((data=cache[1])===true||data===cachedruns){return data===true;}}else{cache=outerCache[dir]=[dirkey];cache[1]=matcher(elem,context,xml)||cachedruns;if(cache[1]===true){return true;}}}}}};}
function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false;}}
return true;}:matchers[0];}
function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if((elem=unmatched[i])){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}
return newUnmatched;}
function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter);}
if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector);}
return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?postFinder||(seed?preFilter:preexisting||postFilter)?[]:results:matcherIn;if(matcher){matcher(matcherIn,matcherOut,context,xml);}
if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml);i=temp.length;while(i--){if((elem=temp[i])){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);}}}
if(seed){if(postFinder||preFilter){if(postFinder){temp=[];i=matcherOut.length;while(i--){if((elem=matcherOut[i])){temp.push((matcherIn[i]=elem));}}
postFinder(null,(matcherOut=[]),temp,xml);}
i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf.call(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem);}}}}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else{push.apply(results,matcherOut);}}});}
function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,matchContext=addCombinator(function(elem){return elem===checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf.call(checkContext,elem)>-1;},implicitRelative,true),matchers=[function(elem,context,xml){return(!leadingRelative&&(xml||context!==outermostContext))||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));}];for(;i<len;i++){if((matcher=Expr.relative[tokens[i].type])){matchers=[addCombinator(elementMatcher(matchers),matcher)];}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);if(matcher[expando]){j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break;}}
return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens((tokens=tokens.slice(j))),j<len&&toSelector(tokens));}
matchers.push(matcher);}}
return elementMatcher(matchers);}
function matcherFromGroupMatchers(elementMatchers,setMatchers){var matcherCachedRuns=0,bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function(seed,context,xml,results,expandContext){var elem,j,matcher,setMatched=[],matchedCount=0,i="0",unmatched=seed&&[],outermost=expandContext!=null,contextBackup=outermostContext,elems=seed||byElement&&Expr.find["TAG"]("*",expandContext&&context.parentNode||context),dirrunsUnique=(dirruns+=contextBackup==null?1:Math.random()||0.1);if(outermost){outermostContext=context!==document&&context;cachedruns=matcherCachedRuns;}
for(;(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;while((matcher=elementMatchers[j++])){if(matcher(elem,context,xml)){results.push(elem);break;}}
if(outermost){dirruns=dirrunsUnique;cachedruns=++matcherCachedRuns;}}
if(bySet){if((elem=!matcher&&elem)){matchedCount--;}
if(seed){unmatched.push(elem);}}}
matchedCount+=i;if(bySet&&i!==matchedCount){j=0;while((matcher=setMatchers[j++])){matcher(unmatched,setMatched,context,xml);}
if(seed){if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results);}}}
setMatched=condense(setMatched);}
push.apply(results,setMatched);if(outermost&&!seed&&setMatched.length>0&&(matchedCount+setMatchers.length)>1){Sizzle.uniqueSort(results);}}
if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup;}
return unmatched;};return bySet?markFunction(superMatcher):superMatcher;}
compile=Sizzle.compile=function(selector,group){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){if(!group){group=tokenize(selector);}
i=group.length;while(i--){cached=matcherFromTokens(group[i]);if(cached[expando]){setMatchers.push(cached);}else{elementMatchers.push(cached);}}
cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));}
return cached;};function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results);}
return results;}
function select(selector,context,results,seed){var i,tokens,token,type,find,match=tokenize(selector);if(!seed){if(match.length===1){tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&support.getById&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];if(!context){return results;}
selector=selector.slice(tokens.shift().value.length);}
i=matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--){token=tokens[i];if(Expr.relative[(type=token.type)]){break;}
if((find=Expr.find[type])){if((seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&context.parentNode||context))){tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,seed);return results;}
break;}}}}}
compile(selector,match)(seed,context,!documentIsHTML,results,rsibling.test(selector));return results;}
support.sortStable=expando.split("").sort(sortOrder).join("")===expando;support.detectDuplicates=hasDuplicate;setDocument();support.sortDetached=assert(function(div1){return div1.compareDocumentPosition(document.createElement("div"))&1;});if(!assert(function(div){div.innerHTML="<a href='#'></a>";return div.firstChild.getAttribute("href")==="#";})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase()==="type"?1:2);}});}
if(!support.attributes||!assert(function(div){div.innerHTML="<input/>";div.firstChild.setAttribute("value","");return div.firstChild.getAttribute("value")==="";})){addHandle("value",function(elem,name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){return elem.defaultValue;}});}
if(!assert(function(div){return div.getAttribute("disabled")==null;})){addHandle(booleans,function(elem,name,isXML){var val;if(!isXML){return(val=elem.getAttributeNode(name))&&val.specified?val.value:elem[name]===true?name.toLowerCase():null;}});}
jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;})(window);var optionsCache={};function createOptions(options){var object=optionsCache[options]={};jQuery.each(options.match(core_rnotwhite)||[],function(_,flag){object[flag]=true;});return object;}
jQuery.Callbacks=function(options){options=typeof options==="string"?(optionsCache[options]||createOptions(options)):jQuery.extend({},options);var
firing,memory,fired,firingLength,firingIndex,firingStart,list=[],stack=!options.once&&[],fire=function(data){memory=options.memory&&data;fired=true;firingIndex=firingStart||0;firingStart=0;firingLength=list.length;firing=true;for(;list&&firingIndex<firingLength;firingIndex++){if(list[firingIndex].apply(data[0],data[1])===false&&options.stopOnFalse){memory=false;break;}}
firing=false;if(list){if(stack){if(stack.length){fire(stack.shift());}}else if(memory){list=[];}else{self.disable();}}},self={add:function(){if(list){var start=list.length;(function add(args){jQuery.each(args,function(_,arg){var type=jQuery.type(arg);if(type==="function"){if(!options.unique||!self.has(arg)){list.push(arg);}}else if(arg&&arg.length&&type!=="string"){add(arg);}});})(arguments);if(firing){firingLength=list.length;}else if(memory){firingStart=start;fire(memory);}}
return this;},remove:function(){if(list){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);if(firing){if(index<=firingLength){firingLength--;}
if(index<=firingIndex){firingIndex--;}}}});}
return this;},has:function(fn){return fn?jQuery.inArray(fn,list)>-1:!!(list&&list.length);},empty:function(){list=[];firingLength=0;return this;},disable:function(){list=stack=memory=undefined;return this;},disabled:function(){return!list;},lock:function(){stack=undefined;if(!memory){self.disable();}
return this;},locked:function(){return!stack;},fireWith:function(context,args){if(list&&(!fired||stack)){args=args||[];args=[context,args.slice?args.slice():args];if(firing){stack.push(args);}else{fire(args);}}
return this;},fire:function(){self.fireWith(this,arguments);return this;},fired:function(){return!!fired;}};return self;};jQuery.extend({Deferred:function(func){var tuples=[["resolve","done",jQuery.Callbacks("once memory"),"resolved"],["reject","fail",jQuery.Callbacks("once memory"),"rejected"],["notify","progress",jQuery.Callbacks("memory")]],state="pending",promise={state:function(){return state;},always:function(){deferred.done(arguments).fail(arguments);return this;},then:function(){var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){var action=tuple[0],fn=jQuery.isFunction(fns[i])&&fns[i];deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&jQuery.isFunction(returned.promise)){returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);}else{newDefer[action+"With"](this===promise?newDefer.promise():this,fn?[returned]:arguments);}});});fns=null;}).promise();},promise:function(obj){return obj!=null?jQuery.extend(obj,promise):promise;}},deferred={};promise.pipe=promise.then;jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[3];promise[tuple[1]]=list.add;if(stateString){list.add(function(){state=stateString;},tuples[i^1][2].disable,tuples[2][2].lock);}
deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?promise:this,arguments);return this;};deferred[tuple[0]+"With"]=list.fireWith;});promise.promise(deferred);if(func){func.call(deferred,deferred);}
return deferred;},when:function(subordinate){var i=0,resolveValues=core_slice.call(arguments),length=resolveValues.length,remaining=length!==1||(subordinate&&jQuery.isFunction(subordinate.promise))?length:0,deferred=remaining===1?subordinate:jQuery.Deferred(),updateFunc=function(i,contexts,values){return function(value){contexts[i]=this;values[i]=arguments.length>1?core_slice.call(arguments):value;if(values===progressValues){deferred.notifyWith(contexts,values);}else if(!(--remaining)){deferred.resolveWith(contexts,values);}};},progressValues,progressContexts,resolveContexts;if(length>1){progressValues=new Array(length);progressContexts=new Array(length);resolveContexts=new Array(length);for(;i<length;i++){if(resolveValues[i]&&jQuery.isFunction(resolveValues[i].promise)){resolveValues[i].promise().done(updateFunc(i,resolveContexts,resolveValues)).fail(deferred.reject).progress(updateFunc(i,progressContexts,progressValues));}else{--remaining;}}}
if(!remaining){deferred.resolveWith(resolveContexts,resolveValues);}
return deferred.promise();}});jQuery.support=(function(support){var all,a,input,select,fragment,opt,eventName,isSupported,i,div=document.createElement("div");div.setAttribute("className","t");div.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";all=div.getElementsByTagName("*")||[];a=div.getElementsByTagName("a")[0];if(!a||!a.style||!all.length){return support;}
select=document.createElement("select");opt=select.appendChild(document.createElement("option"));input=div.getElementsByTagName("input")[0];a.style.cssText="top:1px;float:left;opacity:.5";support.getSetAttribute=div.className!=="t";support.leadingWhitespace=div.firstChild.nodeType===3;support.tbody=!div.getElementsByTagName("tbody").length;support.htmlSerialize=!!div.getElementsByTagName("link").length;support.style=/top/.test(a.getAttribute("style"));support.hrefNormalized=a.getAttribute("href")==="/a";support.opacity=/^0.5/.test(a.style.opacity);support.cssFloat=!!a.style.cssFloat;support.checkOn=!!input.value;support.optSelected=opt.selected;support.enctype=!!document.createElement("form").enctype;support.html5Clone=document.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>";support.inlineBlockNeedsLayout=false;support.shrinkWrapBlocks=false;support.pixelPosition=false;support.deleteExpando=true;support.noCloneEvent=true;support.reliableMarginRight=true;support.boxSizingReliable=true;input.checked=true;support.noCloneChecked=input.cloneNode(true).checked;select.disabled=true;support.optDisabled=!opt.disabled;try{delete div.test;}catch(e){support.deleteExpando=false;}
input=document.createElement("input");input.setAttribute("value","");support.input=input.getAttribute("value")==="";input.value="t";input.setAttribute("type","radio");support.radioValue=input.value==="t";input.setAttribute("checked","t");input.setAttribute("name","t");fragment=document.createDocumentFragment();fragment.appendChild(input);support.appendChecked=input.checked;support.checkClone=fragment.cloneNode(true).cloneNode(true).lastChild.checked;if(div.attachEvent){div.attachEvent("onclick",function(){support.noCloneEvent=false;});div.cloneNode(true).click();}
for(i in{submit:true,change:true,focusin:true}){div.setAttribute(eventName="on"+i,"t");support[i+"Bubbles"]=eventName in window||div.attributes[eventName].expando===false;}
div.style.backgroundClip="content-box";div.cloneNode(true).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box";for(i in jQuery(support)){break;}
support.ownLast=i!=="0";jQuery(function(){var container,marginDiv,tds,divReset="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",body=document.getElementsByTagName("body")[0];if(!body){return;}
container=document.createElement("div");container.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";body.appendChild(container).appendChild(div);div.innerHTML="<table><tr><td></td><td>t</td></tr></table>";tds=div.getElementsByTagName("td");tds[0].style.cssText="padding:0;margin:0;border:0;display:none";isSupported=(tds[0].offsetHeight===0);tds[0].style.display="";tds[1].style.display="none";support.reliableHiddenOffsets=isSupported&&(tds[0].offsetHeight===0);div.innerHTML="";div.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";jQuery.swap(body,body.style.zoom!=null?{zoom:1}:{},function(){support.boxSizing=div.offsetWidth===4;});if(window.getComputedStyle){support.pixelPosition=(window.getComputedStyle(div,null)||{}).top!=="1%";support.boxSizingReliable=(window.getComputedStyle(div,null)||{width:"4px"}).width==="4px";marginDiv=div.appendChild(document.createElement("div"));marginDiv.style.cssText=div.style.cssText=divReset;marginDiv.style.marginRight=marginDiv.style.width="0";div.style.width="1px";support.reliableMarginRight=!parseFloat((window.getComputedStyle(marginDiv,null)||{}).marginRight);}
if(typeof div.style.zoom!==core_strundefined){div.innerHTML="";div.style.cssText=divReset+"width:1px;padding:1px;display:inline;zoom:1";support.inlineBlockNeedsLayout=(div.offsetWidth===3);div.style.display="block";div.innerHTML="<div></div>";div.firstChild.style.width="5px";support.shrinkWrapBlocks=(div.offsetWidth!==3);if(support.inlineBlockNeedsLayout){body.style.zoom=1;}}
body.removeChild(container);container=div=tds=marginDiv=null;});all=select=fragment=opt=a=input=null;return support;})({});var rbrace=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,rmultiDash=/([A-Z])/g;function internalData(elem,name,data,pvt){if(!jQuery.acceptData(elem)){return;}
var ret,thisCache,internalKey=jQuery.expando,isNode=elem.nodeType,cache=isNode?jQuery.cache:elem,id=isNode?elem[internalKey]:elem[internalKey]&&internalKey;if((!id||!cache[id]||(!pvt&&!cache[id].data))&&data===undefined&&typeof name==="string"){return;}
if(!id){if(isNode){id=elem[internalKey]=core_deletedIds.pop()||jQuery.guid++;}else{id=internalKey;}}
if(!cache[id]){cache[id]=isNode?{}:{toJSON:jQuery.noop};}
if(typeof name==="object"||typeof name==="function"){if(pvt){cache[id]=jQuery.extend(cache[id],name);}else{cache[id].data=jQuery.extend(cache[id].data,name);}}
thisCache=cache[id];if(!pvt){if(!thisCache.data){thisCache.data={};}
thisCache=thisCache.data;}
if(data!==undefined){thisCache[jQuery.camelCase(name)]=data;}
if(typeof name==="string"){ret=thisCache[name];if(ret==null){ret=thisCache[jQuery.camelCase(name)];}}else{ret=thisCache;}
return ret;}
function internalRemoveData(elem,name,pvt){if(!jQuery.acceptData(elem)){return;}
var thisCache,i,isNode=elem.nodeType,cache=isNode?jQuery.cache:elem,id=isNode?elem[jQuery.expando]:jQuery.expando;if(!cache[id]){return;}
if(name){thisCache=pvt?cache[id]:cache[id].data;if(thisCache){if(!jQuery.isArray(name)){if(name in thisCache){name=[name];}else{name=jQuery.camelCase(name);if(name in thisCache){name=[name];}else{name=name.split(" ");}}}else{name=name.concat(jQuery.map(name,jQuery.camelCase));}
i=name.length;while(i--){delete thisCache[name[i]];}
if(pvt?!isEmptyDataObject(thisCache):!jQuery.isEmptyObject(thisCache)){return;}}}
if(!pvt){delete cache[id].data;if(!isEmptyDataObject(cache[id])){return;}}
if(isNode){jQuery.cleanData([elem],true);}else if(jQuery.support.deleteExpando||cache!=cache.window){delete cache[id];}else{cache[id]=null;}}
jQuery.extend({cache:{},noData:{"applet":true,"embed":true,"object":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(elem){elem=elem.nodeType?jQuery.cache[elem[jQuery.expando]]:elem[jQuery.expando];return!!elem&&!isEmptyDataObject(elem);},data:function(elem,name,data){return internalData(elem,name,data);},removeData:function(elem,name){return internalRemoveData(elem,name);},_data:function(elem,name,data){return internalData(elem,name,data,true);},_removeData:function(elem,name){return internalRemoveData(elem,name,true);},acceptData:function(elem){if(elem.nodeType&&elem.nodeType!==1&&elem.nodeType!==9){return false;}
var noData=elem.nodeName&&jQuery.noData[elem.nodeName.toLowerCase()];return!noData||noData!==true&&elem.getAttribute("classid")===noData;}});jQuery.fn.extend({data:function(key,value){var attrs,name,data=null,i=0,elem=this[0];if(key===undefined){if(this.length){data=jQuery.data(elem);if(elem.nodeType===1&&!jQuery._data(elem,"parsedAttrs")){attrs=elem.attributes;for(;i<attrs.length;i++){name=attrs[i].name;if(name.indexOf("data-")===0){name=jQuery.camelCase(name.slice(5));dataAttr(elem,name,data[name]);}}
jQuery._data(elem,"parsedAttrs",true);}}
return data;}
if(typeof key==="object"){return this.each(function(){jQuery.data(this,key);});}
return arguments.length>1?this.each(function(){jQuery.data(this,key,value);}):elem?dataAttr(elem,key,jQuery.data(elem,key)):null;},removeData:function(key){return this.each(function(){jQuery.removeData(this,key);});}});function dataAttr(elem,key,data){if(data===undefined&&elem.nodeType===1){var name="data-"+key.replace(rmultiDash,"-$1").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=data==="true"?true:data==="false"?false:data==="null"?null:+data+""===data?+data:rbrace.test(data)?jQuery.parseJSON(data):data;}catch(e){}
jQuery.data(elem,key,data);}else{data=undefined;}}
return data;}
function isEmptyDataObject(obj){var name;for(name in obj){if(name==="data"&&jQuery.isEmptyObject(obj[name])){continue;}
if(name!=="toJSON"){return false;}}
return true;}
jQuery.extend({queue:function(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=jQuery._data(elem,type);if(data){if(!queue||jQuery.isArray(data)){queue=jQuery._data(elem,type,jQuery.makeArray(data));}else{queue.push(data);}}
return queue||[];}},dequeue:function(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function(){jQuery.dequeue(elem,type);};if(fn==="inprogress"){fn=queue.shift();startLength--;}
if(fn){if(type==="fx"){queue.unshift("inprogress");}
delete hooks.stop;fn.call(elem,next,hooks);}
if(!startLength&&hooks){hooks.empty.fire();}},_queueHooks:function(elem,type){var key=type+"queueHooks";return jQuery._data(elem,key)||jQuery._data(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){jQuery._removeData(elem,type+"queue");jQuery._removeData(elem,key);})});}});jQuery.fn.extend({queue:function(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--;}
if(arguments.length<setter){return jQuery.queue(this[0],type);}
return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function(type){return this.each(function(){jQuery.dequeue(this,type);});},delay:function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=setTimeout(next,time);hooks.stop=function(){clearTimeout(timeout);};});},clearQueue:function(type){return this.queue(type||"fx",[]);},promise:function(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function(){if(!(--count)){defer.resolveWith(elements,[elements]);}};if(typeof type!=="string"){obj=type;type=undefined;}
type=type||"fx";while(i--){tmp=jQuery._data(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve);}}
resolve();return defer.promise(obj);}});var nodeHook,boolHook,rclass=/[\t\r\n\f]/g,rreturn=/\r/g,rfocusable=/^(?:input|select|textarea|button|object)$/i,rclickable=/^(?:a|area)$/i,ruseDefault=/^(?:checked|selected)$/i,getSetAttribute=jQuery.support.getSetAttribute,getSetInput=jQuery.support.input;jQuery.fn.extend({attr:function(name,value){return jQuery.access(this,jQuery.attr,name,value,arguments.length>1);},removeAttr:function(name){return this.each(function(){jQuery.removeAttr(this,name);});},prop:function(name,value){return jQuery.access(this,jQuery.prop,name,value,arguments.length>1);},removeProp:function(name){name=jQuery.propFix[name]||name;return this.each(function(){try{this[name]=undefined;delete this[name];}catch(e){}});},addClass:function(value){var classes,elem,cur,clazz,j,i=0,len=this.length,proceed=typeof value==="string"&&value;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,this.className));});}
if(proceed){classes=(value||"").match(core_rnotwhite)||[];for(;i<len;i++){elem=this[i];cur=elem.nodeType===1&&(elem.className?(" "+elem.className+" ").replace(rclass," "):" ");if(cur){j=0;while((clazz=classes[j++])){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" ";}}
elem.className=jQuery.trim(cur);}}}
return this;},removeClass:function(value){var classes,elem,cur,clazz,j,i=0,len=this.length,proceed=arguments.length===0||typeof value==="string"&&value;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,this.className));});}
if(proceed){classes=(value||"").match(core_rnotwhite)||[];for(;i<len;i++){elem=this[i];cur=elem.nodeType===1&&(elem.className?(" "+elem.className+" ").replace(rclass," "):"");if(cur){j=0;while((clazz=classes[j++])){while(cur.indexOf(" "+clazz+" ")>=0){cur=cur.replace(" "+clazz+" "," ");}}
elem.className=value?jQuery.trim(cur):"";}}}
return this;},toggleClass:function(value,stateVal){var type=typeof value;if(typeof stateVal==="boolean"&&type==="string"){return stateVal?this.addClass(value):this.removeClass(value);}
if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,this.className,stateVal),stateVal);});}
return this.each(function(){if(type==="string"){var className,i=0,self=jQuery(this),classNames=value.match(core_rnotwhite)||[];while((className=classNames[i++])){if(self.hasClass(className)){self.removeClass(className);}else{self.addClass(className);}}}else if(type===core_strundefined||type==="boolean"){if(this.className){jQuery._data(this,"__className__",this.className);}
this.className=this.className||value===false?"":jQuery._data(this,"__className__")||"";}});},hasClass:function(selector){var className=" "+selector+" ",i=0,l=this.length;for(;i<l;i++){if(this[i].nodeType===1&&(" "+this[i].className+" ").replace(rclass," ").indexOf(className)>=0){return true;}}
return false;},val:function(value){var ret,hooks,isFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get"in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}
ret=elem.value;return typeof ret==="string"?ret.replace(rreturn,""):ret==null?"":ret;}
return;}
isFunction=jQuery.isFunction(value);return this.each(function(i){var val;if(this.nodeType!==1){return;}
if(isFunction){val=value.call(this,i,jQuery(this).val());}else{val=value;}
if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(jQuery.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}
hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function(elem){var val=jQuery.find.attr(elem,"value");return val!=null?val:elem.text;}},select:{get:function(elem){var value,option,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one"||index<0,values=one?null:[],max=one?index+1:options.length,i=index<0?max:one?index:0;for(;i<max;i++){option=options[i];if((option.selected||i===index)&&(jQuery.support.optDisabled?!option.disabled:option.getAttribute("disabled")===null)&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){value=jQuery(option).val();if(one){return value;}
values.push(value);}}
return values;},set:function(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--){option=options[i];if((option.selected=jQuery.inArray(jQuery(option).val(),values)>=0)){optionSet=true;}}
if(!optionSet){elem.selectedIndex=-1;}
return values;}}},attr:function(elem,name,value){var hooks,ret,nType=elem.nodeType;if(!elem||nType===3||nType===8||nType===2){return;}
if(typeof elem.getAttribute===core_strundefined){return jQuery.prop(elem,name,value);}
if(nType!==1||!jQuery.isXMLDoc(elem)){name=name.toLowerCase();hooks=jQuery.attrHooks[name]||(jQuery.expr.match.bool.test(name)?boolHook:nodeHook);}
if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);}else if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}else{elem.setAttribute(name,value+"");return value;}}else if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}else{ret=jQuery.find.attr(elem,name);return ret==null?undefined:ret;}},removeAttr:function(elem,value){var name,propName,i=0,attrNames=value&&value.match(core_rnotwhite);if(attrNames&&elem.nodeType===1){while((name=attrNames[i++])){propName=jQuery.propFix[name]||name;if(jQuery.expr.match.bool.test(name)){if(getSetInput&&getSetAttribute||!ruseDefault.test(name)){elem[propName]=false;}else{elem[jQuery.camelCase("default-"+name)]=elem[propName]=false;}}else{jQuery.attr(elem,name,"");}
elem.removeAttribute(getSetAttribute?name:propName);}}},attrHooks:{type:{set:function(elem,value){if(!jQuery.support.radioValue&&value==="radio"&&jQuery.nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}
return value;}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(elem,name,value){var ret,hooks,notxml,nType=elem.nodeType;if(!elem||nType===3||nType===8||nType===2){return;}
notxml=nType!==1||!jQuery.isXMLDoc(elem);if(notxml){name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}
if(value!==undefined){return hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined?ret:(elem[name]=value);}else{return hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null?ret:elem[name];}},propHooks:{tabIndex:{get:function(elem){var tabindex=jQuery.find.attr(elem,"tabindex");return tabindex?parseInt(tabindex,10):rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href?0:-1;}}}});boolHook={set:function(elem,value,name){if(value===false){jQuery.removeAttr(elem,name);}else if(getSetInput&&getSetAttribute||!ruseDefault.test(name)){elem.setAttribute(!getSetAttribute&&jQuery.propFix[name]||name,name);}else{elem[jQuery.camelCase("default-"+name)]=elem[name]=true;}
return name;}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=jQuery.expr.attrHandle[name]||jQuery.find.attr;jQuery.expr.attrHandle[name]=getSetInput&&getSetAttribute||!ruseDefault.test(name)?function(elem,name,isXML){var fn=jQuery.expr.attrHandle[name],ret=isXML?undefined:(jQuery.expr.attrHandle[name]=undefined)!=getter(elem,name,isXML)?name.toLowerCase():null;jQuery.expr.attrHandle[name]=fn;return ret;}:function(elem,name,isXML){return isXML?undefined:elem[jQuery.camelCase("default-"+name)]?name.toLowerCase():null;};});if(!getSetInput||!getSetAttribute){jQuery.attrHooks.value={set:function(elem,value,name){if(jQuery.nodeName(elem,"input")){elem.defaultValue=value;}else{return nodeHook&&nodeHook.set(elem,value,name);}}};}
if(!getSetAttribute){nodeHook={set:function(elem,value,name){var ret=elem.getAttributeNode(name);if(!ret){elem.setAttributeNode((ret=elem.ownerDocument.createAttribute(name)));}
ret.value=value+="";return name==="value"||value===elem.getAttribute(name)?value:undefined;}};jQuery.expr.attrHandle.id=jQuery.expr.attrHandle.name=jQuery.expr.attrHandle.coords=function(elem,name,isXML){var ret;return isXML?undefined:(ret=elem.getAttributeNode(name))&&ret.value!==""?ret.value:null;};jQuery.valHooks.button={get:function(elem,name){var ret=elem.getAttributeNode(name);return ret&&ret.specified?ret.value:undefined;},set:nodeHook.set};jQuery.attrHooks.contenteditable={set:function(elem,value,name){nodeHook.set(elem,value===""?false:value,name);}};jQuery.each(["width","height"],function(i,name){jQuery.attrHooks[name]={set:function(elem,value){if(value===""){elem.setAttribute(name,"auto");return value;}}};});}
if(!jQuery.support.hrefNormalized){jQuery.each(["href","src"],function(i,name){jQuery.propHooks[name]={get:function(elem){return elem.getAttribute(name,4);}};});}
if(!jQuery.support.style){jQuery.attrHooks.style={get:function(elem){return elem.style.cssText||undefined;},set:function(elem,value){return(elem.style.cssText=value+"");}};}
if(!jQuery.support.optSelected){jQuery.propHooks.selected={get:function(elem){var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}
return null;}};}
jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this;});if(!jQuery.support.enctype){jQuery.propFix.enctype="encoding";}
jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function(elem,value){if(jQuery.isArray(value)){return(elem.checked=jQuery.inArray(jQuery(elem).val(),value)>=0);}}};if(!jQuery.support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value;};}});var rformElems=/^(?:input|select|textarea)$/i,rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|contextmenu)|click/,rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,rtypenamespace=/^([^.]*)(?:\.(.+)|)$/;function returnTrue(){return true;}
function returnFalse(){return false;}
function safeActiveElement(){try{return document.activeElement;}catch(err){}}
jQuery.event={global:{},add:function(elem,types,handler,data,selector){var tmp,events,t,handleObjIn,special,eventHandle,handleObj,handlers,type,namespaces,origType,elemData=jQuery._data(elem);if(!elemData){return;}
if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector;}
if(!handler.guid){handler.guid=jQuery.guid++;}
if(!(events=elemData.events)){events=elemData.events={};}
if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){return typeof jQuery!==core_strundefined&&(!e||jQuery.event.triggered!==e.type)?jQuery.event.dispatch.apply(eventHandle.elem,arguments):undefined;};eventHandle.elem=elem;}
types=(types||"").match(core_rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){continue;}
special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;special=jQuery.event.special[type]||{};handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0;if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle,false);}else if(elem.attachEvent){elem.attachEvent("on"+type,eventHandle);}}}
if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}}
if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else{handlers.push(handleObj);}
jQuery.event.global[type]=true;}
elem=null;},remove:function(elem,types,handler,selector,mappedTypes){var j,handleObj,tmp,origCount,t,events,special,handlers,type,namespaces,origType,elemData=jQuery.hasData(elem)&&jQuery._data(elem);if(!elemData||!(events=elemData.events)){return;}
types=(types||"").match(core_rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true);}
continue;}
special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--;}
if(special.remove){special.remove.call(elem,handleObj);}}}
if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle);}
delete events[type];}}
if(jQuery.isEmptyObject(events)){delete elemData.handle;jQuery._removeData(elem,"events");}},trigger:function(event,data,elem,onlyHandlers){var handle,ontype,cur,bubbleType,special,tmp,i,eventPath=[elem||document],type=core_hasOwn.call(event,"type")?event.type:event,namespaces=core_hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=tmp=elem=elem||document;if(elem.nodeType===3||elem.nodeType===8){return;}
if(rfocusMorph.test(type+jQuery.event.triggered)){return;}
if(type.indexOf(".")>=0){namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}
ontype=type.indexOf(":")<0&&"on"+type;event=event[jQuery.expando]?event:new jQuery.Event(type,typeof event==="object"&&event);event.isTrigger=onlyHandlers?2:3;event.namespace=namespaces.join(".");event.namespace_re=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;event.result=undefined;if(!event.target){event.target=elem;}
data=data==null?[event]:jQuery.makeArray(data,[event]);special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return;}
if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode;}
for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur;}
if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window);}}
i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){event.type=i>1?bubbleType:special.bindType||type;handle=(jQuery._data(cur,"events")||{})[event.type]&&jQuery._data(cur,"handle");if(handle){handle.apply(cur,data);}
handle=ontype&&cur[ontype];if(handle&&jQuery.acceptData(cur)&&handle.apply&&handle.apply(cur,data)===false){event.preventDefault();}}
event.type=type;if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&jQuery.acceptData(elem)){if(ontype&&elem[type]&&!jQuery.isWindow(elem)){tmp=elem[ontype];if(tmp){elem[ontype]=null;}
jQuery.event.triggered=type;try{elem[type]();}catch(e){}
jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp;}}}}
return event.result;},dispatch:function(event){event=jQuery.event.fix(event);var i,ret,handleObj,matched,j,handlerQueue=[],args=core_slice.call(arguments),handlers=(jQuery._data(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{};args[0]=event;event.delegateTarget=this;if(special.preDispatch&&special.preDispatch.call(this,event)===false){return;}
handlerQueue=jQuery.event.handlers.call(this,event,handlers);i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){if(!event.namespace_re||event.namespace_re.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();event.stopPropagation();}}}}}
if(special.postDispatch){special.postDispatch.call(this,event);}
return event.result;},handlers:function(event,handlers){var sel,handleObj,matches,i,handlerQueue=[],delegateCount=handlers.delegateCount,cur=event.target;if(delegateCount&&cur.nodeType&&(!event.button||event.type!=="click")){for(;cur!=this;cur=cur.parentNode||this){if(cur.nodeType===1&&(cur.disabled!==true||event.type!=="click")){matches=[];for(i=0;i<delegateCount;i++){handleObj=handlers[i];sel=handleObj.selector+" ";if(matches[sel]===undefined){matches[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>=0:jQuery.find(sel,this,null,[cur]).length;}
if(matches[sel]){matches.push(handleObj);}}
if(matches.length){handlerQueue.push({elem:cur,handlers:matches});}}}}
if(delegateCount<handlers.length){handlerQueue.push({elem:this,handlers:handlers.slice(delegateCount)});}
return handlerQueue;},fix:function(event){if(event[jQuery.expando]){return event;}
var i,prop,copy,type=event.type,originalEvent=event,fixHook=this.fixHooks[type];if(!fixHook){this.fixHooks[type]=fixHook=rmouseEvent.test(type)?this.mouseHooks:rkeyEvent.test(type)?this.keyHooks:{};}
copy=fixHook.props?this.props.concat(fixHook.props):this.props;event=new jQuery.Event(originalEvent);i=copy.length;while(i--){prop=copy[i];event[prop]=originalEvent[prop];}
if(!event.target){event.target=originalEvent.srcElement||document;}
if(event.target.nodeType===3){event.target=event.target.parentNode;}
event.metaKey=!!event.metaKey;return fixHook.filter?fixHook.filter(event,originalEvent):event;},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(event,original){if(event.which==null){event.which=original.charCode!=null?original.charCode:original.keyCode;}
return event;}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(event,original){var body,eventDoc,doc,button=original.button,fromElement=original.fromElement;if(event.pageX==null&&original.clientX!=null){eventDoc=event.target.ownerDocument||document;doc=eventDoc.documentElement;body=eventDoc.body;event.pageX=original.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.clientLeft||body&&body.clientLeft||0);event.pageY=original.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&body.clientTop||0);}
if(!event.relatedTarget&&fromElement){event.relatedTarget=fromElement===event.target?original.toElement:fromElement;}
if(!event.which&&button!==undefined){event.which=(button&1?1:(button&2?3:(button&4?2:0)));}
return event;}},special:{load:{noBubble:true},focus:{trigger:function(){if(this!==safeActiveElement()&&this.focus){try{this.focus();return false;}catch(e){}}},delegateType:"focusin"},blur:{trigger:function(){if(this===safeActiveElement()&&this.blur){this.blur();return false;}},delegateType:"focusout"},click:{trigger:function(){if(jQuery.nodeName(this,"input")&&this.type==="checkbox"&&this.click){this.click();return false;}},_default:function(event){return jQuery.nodeName(event.target,"a");}},beforeunload:{postDispatch:function(event){if(event.result!==undefined){event.originalEvent.returnValue=event.result;}}}},simulate:function(type,elem,event,bubble){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true,originalEvent:{}});if(bubble){jQuery.event.trigger(e,null,elem);}else{jQuery.event.dispatch.call(elem,e);}
if(e.isDefaultPrevented()){event.preventDefault();}}};jQuery.removeEvent=document.removeEventListener?function(elem,type,handle){if(elem.removeEventListener){elem.removeEventListener(type,handle,false);}}:function(elem,type,handle){var name="on"+type;if(elem.detachEvent){if(typeof elem[name]===core_strundefined){elem[name]=null;}
elem.detachEvent(name,handle);}};jQuery.Event=function(src,props){if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);}
if(src&&src.type){this.originalEvent=src;this.type=src.type;this.isDefaultPrevented=(src.defaultPrevented||src.returnValue===false||src.getPreventDefault&&src.getPreventDefault())?returnTrue:returnFalse;}else{this.type=src;}
if(props){jQuery.extend(this,props);}
this.timeStamp=src&&src.timeStamp||jQuery.now();this[jQuery.expando]=true;};jQuery.Event.prototype={isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(!e){return;}
if(e.preventDefault){e.preventDefault();}else{e.returnValue=false;}},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(!e){return;}
if(e.stopPropagation){e.stopPropagation();}
e.cancelBubble=true;},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=returnTrue;this.stopPropagation();}};jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;if(!related||(related!==target&&!jQuery.contains(target,related))){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;}
return ret;}};});if(!jQuery.support.submitBubbles){jQuery.event.special.submit={setup:function(){if(jQuery.nodeName(this,"form")){return false;}
jQuery.event.add(this,"click._submit keypress._submit",function(e){var elem=e.target,form=jQuery.nodeName(elem,"input")||jQuery.nodeName(elem,"button")?elem.form:undefined;if(form&&!jQuery._data(form,"submitBubbles")){jQuery.event.add(form,"submit._submit",function(event){event._submit_bubble=true;});jQuery._data(form,"submitBubbles",true);}});},postDispatch:function(event){if(event._submit_bubble){delete event._submit_bubble;if(this.parentNode&&!event.isTrigger){jQuery.event.simulate("submit",this.parentNode,event,true);}}},teardown:function(){if(jQuery.nodeName(this,"form")){return false;}
jQuery.event.remove(this,"._submit");}};}
if(!jQuery.support.changeBubbles){jQuery.event.special.change={setup:function(){if(rformElems.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){jQuery.event.add(this,"propertychange._change",function(event){if(event.originalEvent.propertyName==="checked"){this._just_changed=true;}});jQuery.event.add(this,"click._change",function(event){if(this._just_changed&&!event.isTrigger){this._just_changed=false;}
jQuery.event.simulate("change",this,event,true);});}
return false;}
jQuery.event.add(this,"beforeactivate._change",function(e){var elem=e.target;if(rformElems.test(elem.nodeName)&&!jQuery._data(elem,"changeBubbles")){jQuery.event.add(elem,"change._change",function(event){if(this.parentNode&&!event.isSimulated&&!event.isTrigger){jQuery.event.simulate("change",this.parentNode,event,true);}});jQuery._data(elem,"changeBubbles",true);}});},handle:function(event){var elem=event.target;if(this!==elem||event.isSimulated||event.isTrigger||(elem.type!=="radio"&&elem.type!=="checkbox")){return event.handleObj.handler.apply(this,arguments);}},teardown:function(){jQuery.event.remove(this,"._change");return!rformElems.test(this.nodeName);}};}
if(!jQuery.support.focusinBubbles){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){var attaches=0,handler=function(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event),true);};jQuery.event.special[fix]={setup:function(){if(attaches++===0){document.addEventListener(orig,handler,true);}},teardown:function(){if(--attaches===0){document.removeEventListener(orig,handler,true);}}};});}
jQuery.fn.extend({on:function(types,selector,data,fn,one){var type,origFn;if(typeof types==="object"){if(typeof selector!=="string"){data=data||selector;selector=undefined;}
for(type in types){this.on(type,selector,data,types[type],one);}
return this;}
if(data==null&&fn==null){fn=selector;data=selector=undefined;}else if(fn==null){if(typeof selector==="string"){fn=data;data=undefined;}else{fn=data;data=selector;selector=undefined;}}
if(fn===false){fn=returnFalse;}else if(!fn){return this;}
if(one===1){origFn=fn;fn=function(event){jQuery().off(event);return origFn.apply(this,arguments);};fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);}
return this.each(function(){jQuery.event.add(this,types,fn,data,selector);});},one:function(types,selector,data,fn){return this.on(types,selector,data,fn,1);},off:function(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}
if(typeof types==="object"){for(type in types){this.off(type,selector,types[type]);}
return this;}
if(selector===false||typeof selector==="function"){fn=selector;selector=undefined;}
if(fn===false){fn=returnFalse;}
return this.each(function(){jQuery.event.remove(this,types,fn,selector);});},trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true);}}});var isSimple=/^.[^:#\[\.,]*$/,rparentsprev=/^(?:parents|prev(?:Until|All))/,rneedsContext=jQuery.expr.match.needsContext,guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({find:function(selector){var i,ret=[],self=this,len=self.length;if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return true;}}}));}
for(i=0;i<len;i++){jQuery.find(selector,self[i],ret);}
ret=this.pushStack(len>1?jQuery.unique(ret):ret);ret.selector=this.selector?this.selector+" "+selector:selector;return ret;},has:function(target){var i,targets=jQuery(target,this),len=targets.length;return this.filter(function(){for(i=0;i<len;i++){if(jQuery.contains(this,targets[i])){return true;}}});},not:function(selector){return this.pushStack(winnow(this,selector||[],true));},filter:function(selector){return this.pushStack(winnow(this,selector||[],false));},is:function(selector){return!!winnow(this,typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length;},closest:function(selectors,context){var cur,i=0,l=this.length,ret=[],pos=rneedsContext.test(selectors)||typeof selectors!=="string"?jQuery(selectors,context||this.context):0;for(;i<l;i++){for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){if(cur.nodeType<11&&(pos?pos.index(cur)>-1:cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){cur=ret.push(cur);break;}}}
return this.pushStack(ret.length>1?jQuery.unique(ret):ret);},index:function(elem){if(!elem){return(this[0]&&this[0].parentNode)?this.first().prevAll().length:-1;}
if(typeof elem==="string"){return jQuery.inArray(this[0],jQuery(elem));}
return jQuery.inArray(elem.jquery?elem[0]:elem,this);},add:function(selector,context){var set=typeof selector==="string"?jQuery(selector,context):jQuery.makeArray(selector&&selector.nodeType?[selector]:selector),all=jQuery.merge(this.get(),set);return this.pushStack(jQuery.unique(all));},addBack:function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));}});function sibling(cur,dir){do{cur=cur[dir];}while(cur&&cur.nodeType!==1);return cur;}
jQuery.each({parent:function(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function(elem){return jQuery.dir(elem,"parentNode");},parentsUntil:function(elem,i,until){return jQuery.dir(elem,"parentNode",until);},next:function(elem){return sibling(elem,"nextSibling");},prev:function(elem){return sibling(elem,"previousSibling");},nextAll:function(elem){return jQuery.dir(elem,"nextSibling");},prevAll:function(elem){return jQuery.dir(elem,"previousSibling");},nextUntil:function(elem,i,until){return jQuery.dir(elem,"nextSibling",until);},prevUntil:function(elem,i,until){return jQuery.dir(elem,"previousSibling",until);},siblings:function(elem){return jQuery.sibling((elem.parentNode||{}).firstChild,elem);},children:function(elem){return jQuery.sibling(elem.firstChild);},contents:function(elem){return jQuery.nodeName(elem,"iframe")?elem.contentDocument||elem.contentWindow.document:jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var ret=jQuery.map(this,fn,until);if(name.slice(-5)!=="Until"){selector=until;}
if(selector&&typeof selector==="string"){ret=jQuery.filter(selector,ret);}
if(this.length>1){if(!guaranteedUnique[name]){ret=jQuery.unique(ret);}
if(rparentsprev.test(name)){ret=ret.reverse();}}
return this.pushStack(ret);};});jQuery.extend({filter:function(expr,elems,not){var elem=elems[0];if(not){expr=":not("+expr+")";}
return elems.length===1&&elem.nodeType===1?jQuery.find.matchesSelector(elem,expr)?[elem]:[]:jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1;}));},dir:function(elem,dir,until){var matched=[],cur=elem[dir];while(cur&&cur.nodeType!==9&&(until===undefined||cur.nodeType!==1||!jQuery(cur).is(until))){if(cur.nodeType===1){matched.push(cur);}
cur=cur[dir];}
return matched;},sibling:function(n,elem){var r=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){r.push(n);}}
return r;}});function winnow(elements,qualifier,not){if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){return!!qualifier.call(elem,i,elem)!==not;});}
if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return(elem===qualifier)!==not;});}
if(typeof qualifier==="string"){if(isSimple.test(qualifier)){return jQuery.filter(qualifier,elements,not);}
qualifier=jQuery.filter(qualifier,elements);}
return jQuery.grep(elements,function(elem){return(jQuery.inArray(elem,qualifier)>=0)!==not;});}
function createSafeFragment(document){var list=nodeNames.split("|"),safeFrag=document.createDocumentFragment();if(safeFrag.createElement){while(list.length){safeFrag.createElement(list.pop());}}
return safeFrag;}
var nodeNames="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|"+"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",rinlinejQuery=/ jQuery\d+="(?:null|\d+)"/g,rnoshimcache=new RegExp("<(?:"+nodeNames+")[\\s/>]","i"),rleadingWhitespace=/^\s+/,rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,rtagName=/<([\w:]+)/,rtbody=/<tbody/i,rhtml=/<|&#?\w+;/,rnoInnerhtml=/<(?:script|style|link)/i,manipulation_rcheckableType=/^(?:checkbox|radio)$/i,rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptType=/^$|\/(?:java|ecma)script/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,wrapMap={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:jQuery.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},safeFragment=createSafeFragment(document),fragmentDiv=safeFragment.appendChild(document.createElement("div"));wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;jQuery.fn.extend({text:function(value){return jQuery.access(this,function(value){return value===undefined?jQuery.text(this):this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(value));},null,value,arguments.length);},append:function(){return this.domManip(arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.appendChild(elem);}});},prepend:function(){return this.domManip(arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild);}});},before:function(){return this.domManip(arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this);}});},after:function(){return this.domManip(arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling);}});},remove:function(selector,keepData){var elem,elems=selector?jQuery.filter(selector,this):this,i=0;for(;(elem=elems[i])!=null;i++){if(!keepData&&elem.nodeType===1){jQuery.cleanData(getAll(elem));}
if(elem.parentNode){if(keepData&&jQuery.contains(elem.ownerDocument,elem)){setGlobalEval(getAll(elem,"script"));}
elem.parentNode.removeChild(elem);}}
return this;},empty:function(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));}
while(elem.firstChild){elem.removeChild(elem.firstChild);}
if(elem.options&&jQuery.nodeName(elem,"select")){elem.options.length=0;}}
return this;},clone:function(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function(value){return jQuery.access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined){return elem.nodeType===1?elem.innerHTML.replace(rinlinejQuery,""):undefined;}
if(typeof value==="string"&&!rnoInnerhtml.test(value)&&(jQuery.support.htmlSerialize||!rnoshimcache.test(value))&&(jQuery.support.leadingWhitespace||!rleadingWhitespace.test(value))&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=value.replace(rxhtmlTag,"<$1></$2>");try{for(;i<l;i++){elem=this[i]||{};if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.innerHTML=value;}}
elem=0;}catch(e){}}
if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function(){var
args=jQuery.map(this,function(elem){return[elem.nextSibling,elem.parentNode];}),i=0;this.domManip(arguments,function(elem){var next=args[i++],parent=args[i++];if(parent){if(next&&next.parentNode!==parent){next=this.nextSibling;}
jQuery(this).remove();parent.insertBefore(elem,next);}},true);return i?this:this.remove();},detach:function(selector){return this.remove(selector,true);},domManip:function(args,callback,allowIntersection){args=core_concat.apply([],args);var first,node,hasScripts,scripts,doc,fragment,i=0,l=this.length,set=this,iNoClone=l-1,value=args[0],isFunction=jQuery.isFunction(value);if(isFunction||!(l<=1||typeof value!=="string"||jQuery.support.checkClone||!rchecked.test(value))){return this.each(function(index){var self=set.eq(index);if(isFunction){args[0]=value.call(this,index,self.html());}
self.domManip(args,callback,allowIntersection);});}
if(l){fragment=jQuery.buildFragment(args,this[0].ownerDocument,false,!allowIntersection&&this);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first;}
if(first){scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length;for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,true,true);if(hasScripts){jQuery.merge(scripts,getAll(node,"script"));}}
callback.call(this[i],node,i);}
if(hasScripts){doc=scripts[scripts.length-1].ownerDocument;jQuery.map(scripts,restoreScript);for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!jQuery._data(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src){jQuery._evalUrl(node.src);}else{jQuery.globalEval((node.text||node.textContent||node.innerHTML||"").replace(rcleanScript,""));}}}}
fragment=first=null;}}
return this;}});function manipulationTarget(elem,content){return jQuery.nodeName(elem,"table")&&jQuery.nodeName(content.nodeType===1?content:content.firstChild,"tr")?elem.getElementsByTagName("tbody")[0]||elem.appendChild(elem.ownerDocument.createElement("tbody")):elem;}
function disableScript(elem){elem.type=(jQuery.find.attr(elem,"type")!==null)+"/"+elem.type;return elem;}
function restoreScript(elem){var match=rscriptTypeMasked.exec(elem.type);if(match){elem.type=match[1];}else{elem.removeAttribute("type");}
return elem;}
function setGlobalEval(elems,refElements){var elem,i=0;for(;(elem=elems[i])!=null;i++){jQuery._data(elem,"globalEval",!refElements||jQuery._data(refElements[i],"globalEval"));}}
function cloneCopyEvent(src,dest){if(dest.nodeType!==1||!jQuery.hasData(src)){return;}
var type,i,l,oldData=jQuery._data(src),curData=jQuery._data(dest,oldData),events=oldData.events;if(events){delete curData.handle;curData.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i]);}}}
if(curData.data){curData.data=jQuery.extend({},curData.data);}}
function fixCloneNodeIssues(src,dest){var nodeName,e,data;if(dest.nodeType!==1){return;}
nodeName=dest.nodeName.toLowerCase();if(!jQuery.support.noCloneEvent&&dest[jQuery.expando]){data=jQuery._data(dest);for(e in data.events){jQuery.removeEvent(dest,e,data.handle);}
dest.removeAttribute(jQuery.expando);}
if(nodeName==="script"&&dest.text!==src.text){disableScript(dest).text=src.text;restoreScript(dest);}else if(nodeName==="object"){if(dest.parentNode){dest.outerHTML=src.outerHTML;}
if(jQuery.support.html5Clone&&(src.innerHTML&&!jQuery.trim(dest.innerHTML))){dest.innerHTML=src.innerHTML;}}else if(nodeName==="input"&&manipulation_rcheckableType.test(src.type)){dest.defaultChecked=dest.checked=src.checked;if(dest.value!==src.value){dest.value=src.value;}}else if(nodeName==="option"){dest.defaultSelected=dest.selected=src.defaultSelected;}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}}
jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,i=0,ret=[],insert=jQuery(selector),last=insert.length-1;for(;i<=last;i++){elems=i===last?this:this.clone(true);jQuery(insert[i])[original](elems);core_push.apply(ret,elems.get());}
return this.pushStack(ret);};});function getAll(context,tag){var elems,elem,i=0,found=typeof context.getElementsByTagName!==core_strundefined?context.getElementsByTagName(tag||"*"):typeof context.querySelectorAll!==core_strundefined?context.querySelectorAll(tag||"*"):undefined;if(!found){for(found=[],elems=context.childNodes||context;(elem=elems[i])!=null;i++){if(!tag||jQuery.nodeName(elem,tag)){found.push(elem);}else{jQuery.merge(found,getAll(elem,tag));}}}
return tag===undefined||tag&&jQuery.nodeName(context,tag)?jQuery.merge([context],found):found;}
function fixDefaultChecked(elem){if(manipulation_rcheckableType.test(elem.type)){elem.defaultChecked=elem.checked;}}
jQuery.extend({clone:function(elem,dataAndEvents,deepDataAndEvents){var destElements,node,clone,i,srcElements,inPage=jQuery.contains(elem.ownerDocument,elem);if(jQuery.support.html5Clone||jQuery.isXMLDoc(elem)||!rnoshimcache.test("<"+elem.nodeName+">")){clone=elem.cloneNode(true);}else{fragmentDiv.innerHTML=elem.outerHTML;fragmentDiv.removeChild(clone=fragmentDiv.firstChild);}
if((!jQuery.support.noCloneEvent||!jQuery.support.noCloneChecked)&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){destElements=getAll(clone);srcElements=getAll(elem);for(i=0;(node=srcElements[i])!=null;++i){if(destElements[i]){fixCloneNodeIssues(node,destElements[i]);}}}
if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0;(node=srcElements[i])!=null;i++){cloneCopyEvent(node,destElements[i]);}}else{cloneCopyEvent(elem,clone);}}
destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"));}
destElements=srcElements=node=null;return clone;},buildFragment:function(elems,context,scripts,selection){var j,elem,contains,tmp,tag,tbody,wrap,l=elems.length,safe=createSafeFragment(context),nodes=[],i=0;for(;i<l;i++){elem=elems[i];if(elem||elem===0){if(jQuery.type(elem)==="object"){jQuery.merge(nodes,elem.nodeType?[elem]:elem);}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem));}else{tmp=tmp||safe.appendChild(context.createElement("div"));tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+elem.replace(rxhtmlTag,"<$1></$2>")+wrap[2];j=wrap[0];while(j--){tmp=tmp.lastChild;}
if(!jQuery.support.leadingWhitespace&&rleadingWhitespace.test(elem)){nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));}
if(!jQuery.support.tbody){elem=tag==="table"&&!rtbody.test(elem)?tmp.firstChild:wrap[1]==="<table>"&&!rtbody.test(elem)?tmp:0;j=elem&&elem.childNodes.length;while(j--){if(jQuery.nodeName((tbody=elem.childNodes[j]),"tbody")&&!tbody.childNodes.length){elem.removeChild(tbody);}}}
jQuery.merge(nodes,tmp.childNodes);tmp.textContent="";while(tmp.firstChild){tmp.removeChild(tmp.firstChild);}
tmp=safe.lastChild;}}}
if(tmp){safe.removeChild(tmp);}
if(!jQuery.support.appendChecked){jQuery.grep(getAll(nodes,"input"),fixDefaultChecked);}
i=0;while((elem=nodes[i++])){if(selection&&jQuery.inArray(elem,selection)!==-1){continue;}
contains=jQuery.contains(elem.ownerDocument,elem);tmp=getAll(safe.appendChild(elem),"script");if(contains){setGlobalEval(tmp);}
if(scripts){j=0;while((elem=tmp[j++])){if(rscriptType.test(elem.type||"")){scripts.push(elem);}}}}
tmp=null;return safe;},cleanData:function(elems,acceptData){var elem,type,id,data,i=0,internalKey=jQuery.expando,cache=jQuery.cache,deleteExpando=jQuery.support.deleteExpando,special=jQuery.event.special;for(;(elem=elems[i])!=null;i++){if(acceptData||jQuery.acceptData(elem)){id=elem[internalKey];data=id&&cache[id];if(data){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type);}else{jQuery.removeEvent(elem,type,data.handle);}}}
if(cache[id]){delete cache[id];if(deleteExpando){delete elem[internalKey];}else if(typeof elem.removeAttribute!==core_strundefined){elem.removeAttribute(internalKey);}else{elem[internalKey]=null;}
core_deletedIds.push(id);}}}}},_evalUrl:function(url){return jQuery.ajax({url:url,type:"GET",dataType:"script",async:false,global:false,"throws":true});}});jQuery.fn.extend({wrapAll:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapAll(html.call(this,i));});}
if(this[0]){var wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}
wrap.map(function(){var elem=this;while(elem.firstChild&&elem.firstChild.nodeType===1){elem=elem.firstChild;}
return elem;}).append(this);}
return this;},wrapInner:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}
return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else{self.append(html);}});},wrap:function(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html);});},unwrap:function(){return this.parent().each(function(){if(!jQuery.nodeName(this,"body")){jQuery(this).replaceWith(this.childNodes);}}).end();}});var iframe,getStyles,curCSS,ralpha=/alpha\([^)]*\)/i,ropacity=/opacity\s*=\s*([^)]*)/,rposition=/^(top|right|bottom|left)$/,rdisplayswap=/^(none|table(?!-c[ea]).+)/,rmargin=/^margin/,rnumsplit=new RegExp("^("+core_pnum+")(.*)$","i"),rnumnonpx=new RegExp("^("+core_pnum+")(?!px)[a-z%]+$","i"),rrelNum=new RegExp("^([+-])=("+core_pnum+")","i"),elemdisplay={BODY:"block"},cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:0,fontWeight:400},cssExpand=["Top","Right","Bottom","Left"],cssPrefixes=["Webkit","O","Moz","ms"];function vendorPropName(style,name){if(name in style){return name;}
var capName=name.charAt(0).toUpperCase()+name.slice(1),origName=name,i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in style){return name;}}
return origName;}
function isHidden(elem,el){elem=el||elem;return jQuery.css(elem,"display")==="none"||!jQuery.contains(elem.ownerDocument,elem);}
function showHide(elements,show){var display,elem,hidden,values=[],index=0,length=elements.length;for(;index<length;index++){elem=elements[index];if(!elem.style){continue;}
values[index]=jQuery._data(elem,"olddisplay");display=elem.style.display;if(show){if(!values[index]&&display==="none"){elem.style.display="";}
if(elem.style.display===""&&isHidden(elem)){values[index]=jQuery._data(elem,"olddisplay",css_defaultDisplay(elem.nodeName));}}else{if(!values[index]){hidden=isHidden(elem);if(display&&display!=="none"||!hidden){jQuery._data(elem,"olddisplay",hidden?display:jQuery.css(elem,"display"));}}}}
for(index=0;index<length;index++){elem=elements[index];if(!elem.style){continue;}
if(!show||elem.style.display==="none"||elem.style.display===""){elem.style.display=show?values[index]||"":"none";}}
return elements;}
jQuery.fn.extend({css:function(name,value){return jQuery.access(this,function(elem,name,value){var len,styles,map={},i=0;if(jQuery.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],false,styles);}
return map;}
return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length>1);},show:function(){return showHide(this,true);},hide:function(){return showHide(this);},toggle:function(state){if(typeof state==="boolean"){return state?this.show():this.hide();}
return this.each(function(){if(isHidden(this)){jQuery(this).show();}else{jQuery(this).hide();}});}});jQuery.extend({cssHooks:{opacity:{get:function(elem,computed){if(computed){var ret=curCSS(elem,"opacity");return ret===""?"1":ret;}}}},cssNumber:{"columnCount":true,"fillOpacity":true,"fontWeight":true,"lineHeight":true,"opacity":true,"order":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true},cssProps:{"float":jQuery.support.cssFloat?"cssFloat":"styleFloat"},style:function(elem,name,value,extra){if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;}
var ret,type,hooks,origName=jQuery.camelCase(name),style=elem.style;name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(style,origName));hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(value!==undefined){type=typeof value;if(type==="string"&&(ret=rrelNum.exec(value))){value=(ret[1]+1)*ret[2]+parseFloat(jQuery.css(elem,name));type="number";}
if(value==null||type==="number"&&isNaN(value)){return;}
if(type==="number"&&!jQuery.cssNumber[origName]){value+="px";}
if(!jQuery.support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit";}
if(!hooks||!("set"in hooks)||(value=hooks.set(elem,value,extra))!==undefined){try{style[name]=value;}catch(e){}}}else{if(hooks&&"get"in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;}
return style[name];}},css:function(elem,name,extra,styles){var num,val,hooks,origName=jQuery.camelCase(name);name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(elem.style,origName));hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(hooks&&"get"in hooks){val=hooks.get(elem,true,extra);}
if(val===undefined){val=curCSS(elem,name,styles);}
if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name];}
if(extra===""||extra){num=parseFloat(val);return extra===true||jQuery.isNumeric(num)?num||0:val;}
return val;}});if(window.getComputedStyle){getStyles=function(elem){return window.getComputedStyle(elem,null);};curCSS=function(elem,name,_computed){var width,minWidth,maxWidth,computed=_computed||getStyles(elem),ret=computed?computed.getPropertyValue(name)||computed[name]:undefined,style=elem.style;if(computed){if(ret===""&&!jQuery.contains(elem.ownerDocument,elem)){ret=jQuery.style(elem,name);}
if(rnumnonpx.test(ret)&&rmargin.test(name)){width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth;style.minWidth=style.maxWidth=style.width=ret;ret=computed.width;style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth;}}
return ret;};}else if(document.documentElement.currentStyle){getStyles=function(elem){return elem.currentStyle;};curCSS=function(elem,name,_computed){var left,rs,rsLeft,computed=_computed||getStyles(elem),ret=computed?computed[name]:undefined,style=elem.style;if(ret==null&&style&&style[name]){ret=style[name];}
if(rnumnonpx.test(ret)&&!rposition.test(name)){left=style.left;rs=elem.runtimeStyle;rsLeft=rs&&rs.left;if(rsLeft){rs.left=elem.currentStyle.left;}
style.left=name==="fontSize"?"1em":ret;ret=style.pixelLeft+"px";style.left=left;if(rsLeft){rs.left=rsLeft;}}
return ret===""?"auto":ret;};}
function setPositiveNumber(elem,value,subtract){var matches=rnumsplit.exec(value);return matches?Math.max(0,matches[1]-(subtract||0))+(matches[2]||"px"):value;}
function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){var i=extra===(isBorderBox?"border":"content")?4:name==="width"?1:0,val=0;for(;i<4;i+=2){if(extra==="margin"){val+=jQuery.css(elem,extra+cssExpand[i],true,styles);}
if(isBorderBox){if(extra==="content"){val-=jQuery.css(elem,"padding"+cssExpand[i],true,styles);}
if(extra!=="margin"){val-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}else{val+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);if(extra!=="padding"){val+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}}
return val;}
function getWidthOrHeight(elem,name,extra){var valueIsBorderBox=true,val=name==="width"?elem.offsetWidth:elem.offsetHeight,styles=getStyles(elem),isBorderBox=jQuery.support.boxSizing&&jQuery.css(elem,"boxSizing",false,styles)==="border-box";if(val<=0||val==null){val=curCSS(elem,name,styles);if(val<0||val==null){val=elem.style[name];}
if(rnumnonpx.test(val)){return val;}
valueIsBorderBox=isBorderBox&&(jQuery.support.boxSizingReliable||val===elem.style[name]);val=parseFloat(val)||0;}
return(val+
augmentWidthOrHeight(elem,name,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles))+"px";}
function css_defaultDisplay(nodeName){var doc=document,display=elemdisplay[nodeName];if(!display){display=actualDisplay(nodeName,doc);if(display==="none"||!display){iframe=(iframe||jQuery("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(doc.documentElement);doc=(iframe[0].contentWindow||iframe[0].contentDocument).document;doc.write("<!doctype html><html><body>");doc.close();display=actualDisplay(nodeName,doc);iframe.detach();}
elemdisplay[nodeName]=display;}
return display;}
function actualDisplay(name,doc){var elem=jQuery(doc.createElement(name)).appendTo(doc.body),display=jQuery.css(elem[0],"display");elem.remove();return display;}
jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function(elem,computed,extra){if(computed){return elem.offsetWidth===0&&rdisplayswap.test(jQuery.css(elem,"display"))?jQuery.swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra);}):getWidthOrHeight(elem,name,extra);}},set:function(elem,value,extra){var styles=extra&&getStyles(elem);return setPositiveNumber(elem,value,extra?augmentWidthOrHeight(elem,name,extra,jQuery.support.boxSizing&&jQuery.css(elem,"boxSizing",false,styles)==="border-box",styles):0);}};});if(!jQuery.support.opacity){jQuery.cssHooks.opacity={get:function(elem,computed){return ropacity.test((computed&&elem.currentStyle?elem.currentStyle.filter:elem.style.filter)||"")?(0.01*parseFloat(RegExp.$1))+"":computed?"1":"";},set:function(elem,value){var style=elem.style,currentStyle=elem.currentStyle,opacity=jQuery.isNumeric(value)?"alpha(opacity="+value*100+")":"",filter=currentStyle&&currentStyle.filter||style.filter||"";style.zoom=1;if((value>=1||value==="")&&jQuery.trim(filter.replace(ralpha,""))===""&&style.removeAttribute){style.removeAttribute("filter");if(value===""||currentStyle&&!currentStyle.filter){return;}}
style.filter=ralpha.test(filter)?filter.replace(ralpha,opacity):filter+" "+opacity;}};}
jQuery(function(){if(!jQuery.support.reliableMarginRight){jQuery.cssHooks.marginRight={get:function(elem,computed){if(computed){return jQuery.swap(elem,{"display":"inline-block"},curCSS,[elem,"marginRight"]);}}};}
if(!jQuery.support.pixelPosition&&jQuery.fn.position){jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]={get:function(elem,computed){if(computed){computed=curCSS(elem,prop);return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed;}}};});}});if(jQuery.expr&&jQuery.expr.filters){jQuery.expr.filters.hidden=function(elem){return elem.offsetWidth<=0&&elem.offsetHeight<=0||(!jQuery.support.reliableHiddenOffsets&&((elem.style&&elem.style.display)||jQuery.css(elem,"display"))==="none");};jQuery.expr.filters.visible=function(elem){return!jQuery.expr.filters.hidden(elem);};}
jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function(value){var i=0,expanded={},parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];}
return expanded;}};if(!rmargin.test(prefix)){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;}});var r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;jQuery.fn.extend({serialize:function(){return jQuery.param(this.serializeArray());},serializeArray:function(){return this.map(function(){var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this;}).filter(function(){var type=this.type;return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!manipulation_rcheckableType.test(type));}).map(function(i,elem){var val=jQuery(this).val();return val==null?null:jQuery.isArray(val)?jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")};}):{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});jQuery.param=function(a,traditional){var prefix,s=[],add=function(key,value){value=jQuery.isFunction(value)?value():(value==null?"":value);s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value);};if(traditional===undefined){traditional=jQuery.ajaxSettings&&jQuery.ajaxSettings.traditional;}
if(jQuery.isArray(a)||(a.jquery&&!jQuery.isPlainObject(a))){jQuery.each(a,function(){add(this.name,this.value);});}else{for(prefix in a){buildParams(prefix,a[prefix],traditional,add);}}
return s.join("&").replace(r20,"+");};function buildParams(prefix,obj,traditional,add){var name;if(jQuery.isArray(obj)){jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){add(prefix,v);}else{buildParams(prefix+"["+(typeof v==="object"?i:"")+"]",v,traditional,add);}});}else if(!traditional&&jQuery.type(obj)==="object"){for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}else{add(prefix,obj);}}
jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error contextmenu").split(" "),function(i,name){jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};});jQuery.fn.extend({hover:function(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);},bind:function(types,data,fn){return this.on(types,null,data,fn);},unbind:function(types,fn){return this.off(types,null,fn);},delegate:function(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function(selector,types,fn){return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn);}});var
ajaxLocParts,ajaxLocation,ajax_nonce=jQuery.now(),ajax_rquery=/\?/,rhash=/#.*$/,rts=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,rurl=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,_load=jQuery.fn.load,prefilters={},transports={},allTypes="*/".concat("*");try{ajaxLocation=location.href;}catch(e){ajaxLocation=document.createElement("a");ajaxLocation.href="";ajaxLocation=ajaxLocation.href;}
ajaxLocParts=rurl.exec(ajaxLocation.toLowerCase())||[];function addToPrefiltersOrTransports(structure){return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}
var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(core_rnotwhite)||[];if(jQuery.isFunction(func)){while((dataType=dataTypes[i++])){if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func);}else{(structure[dataType]=structure[dataType]||[]).push(func);}}}};}
function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=(structure===transports);function inspect(dataType){var selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;}else if(seekingTransport){return!(selected=dataTypeOrTransport);}});return selected;}
return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");}
function ajaxExtend(target,src){var deep,key,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:(deep||(deep={})))[key]=src[key];}}
if(deep){jQuery.extend(true,target,deep);}
return target;}
jQuery.fn.load=function(url,params,callback){if(typeof url!=="string"&&_load){return _load.apply(this,arguments);}
var selector,response,type,self=this,off=url.indexOf(" ");if(off>=0){selector=url.slice(off,url.length);url=url.slice(0,off);}
if(jQuery.isFunction(params)){callback=params;params=undefined;}else if(params&&typeof params==="object"){type="POST";}
if(self.length>0){jQuery.ajax({url:url,type:type,dataType:"html",data:params}).done(function(responseText){response=arguments;self.html(selector?jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):responseText);}).complete(callback&&function(jqXHR,status){self.each(callback,response||[jqXHR.responseText,status,jqXHR]);});}
return this;};jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn);};});jQuery.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ajaxLocation,type:"GET",isLocal:rlocalProtocol.test(ajaxLocParts[1]),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":true,"text json":jQuery.parseJSON,"text xml":jQuery.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(target,settings){return settings?ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):ajaxExtend(jQuery.ajaxSettings,target);},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),ajax:function(url,options){if(typeof url==="object"){options=url;url=undefined;}
options=options||{};var
parts,i,cacheURL,responseHeadersString,timeoutTimer,fireGlobals,transport,responseHeaders,s=jQuery.ajaxSetup({},options),callbackContext=s.context||s,globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),statusCode=s.statusCode||{},requestHeaders={},requestHeadersNames={},state=0,strAbort="canceled",jqXHR={readyState:0,getResponseHeader:function(key){var match;if(state===2){if(!responseHeaders){responseHeaders={};while((match=rheaders.exec(responseHeadersString))){responseHeaders[match[1].toLowerCase()]=match[2];}}
match=responseHeaders[key.toLowerCase()];}
return match==null?null:match;},getAllResponseHeaders:function(){return state===2?responseHeadersString:null;},setRequestHeader:function(name,value){var lname=name.toLowerCase();if(!state){name=requestHeadersNames[lname]=requestHeadersNames[lname]||name;requestHeaders[name]=value;}
return this;},overrideMimeType:function(type){if(!state){s.mimeType=type;}
return this;},statusCode:function(map){var code;if(map){if(state<2){for(code in map){statusCode[code]=[statusCode[code],map[code]];}}else{jqXHR.always(map[jqXHR.status]);}}
return this;},abort:function(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText);}
done(0,finalText);return this;}};deferred.promise(jqXHR).complete=completeDeferred.add;jqXHR.success=jqXHR.done;jqXHR.error=jqXHR.fail;s.url=((url||s.url||ajaxLocation)+"").replace(rhash,"").replace(rprotocol,ajaxLocParts[1]+"//");s.type=options.method||options.type||s.method||s.type;s.dataTypes=jQuery.trim(s.dataType||"*").toLowerCase().match(core_rnotwhite)||[""];if(s.crossDomain==null){parts=rurl.exec(s.url.toLowerCase());s.crossDomain=!!(parts&&(parts[1]!==ajaxLocParts[1]||parts[2]!==ajaxLocParts[2]||(parts[3]||(parts[1]==="http:"?"80":"443"))!==(ajaxLocParts[3]||(ajaxLocParts[1]==="http:"?"80":"443"))));}
if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);}
inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);if(state===2){return jqXHR;}
fireGlobals=s.global;if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");}
s.type=s.type.toUpperCase();s.hasContent=!rnoContent.test(s.type);cacheURL=s.url;if(!s.hasContent){if(s.data){cacheURL=(s.url+=(ajax_rquery.test(cacheURL)?"&":"?")+s.data);delete s.data;}
if(s.cache===false){s.url=rts.test(cacheURL)?cacheURL.replace(rts,"$1_="+ajax_nonce++):cacheURL+(ajax_rquery.test(cacheURL)?"&":"?")+"_="+ajax_nonce++;}}
if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);}
if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);}}
if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);}
jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);}
if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||state===2)){return jqXHR.abort();}
strAbort="abort";for(i in{success:1,error:1,complete:1}){jqXHR[i](s[i]);}
transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);if(!transport){done(-1,"No Transport");}else{jqXHR.readyState=1;if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);}
if(s.async&&s.timeout>0){timeoutTimer=setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}
try{state=1;transport.send(requestHeaders,done);}catch(e){if(state<2){done(-1,e);}else{throw e;}}}
function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;if(state===2){return;}
state=2;if(timeoutTimer){clearTimeout(timeoutTimer);}
transport=undefined;responseHeadersString=headers||"";jqXHR.readyState=status>0?4:0;isSuccess=status>=200&&status<300||status===304;if(responses){response=ajaxHandleResponses(s,jqXHR,responses);}
response=ajaxConvert(s,response,jqXHR,isSuccess);if(isSuccess){if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified;}
modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified;}}
if(status===204||s.type==="HEAD"){statusText="nocontent";}else if(status===304){statusText="notmodified";}else{statusText=response.state;success=response.data;error=response.error;isSuccess=!error;}}else{error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0;}}}
jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+"";if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);}
jqXHR.statusCode(statusCode);statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]);}
completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);if(!(--jQuery.active)){jQuery.event.trigger("ajaxStop");}}}
return jqXHR;},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json");},getScript:function(url,callback){return jQuery.get(url,undefined,callback,"script");}});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){if(jQuery.isFunction(data)){type=type||callback;callback=data;data=undefined;}
return jQuery.ajax({url:url,type:method,dataType:type,data:data,success:callback});};});function ajaxHandleResponses(s,jqXHR,responses){var firstDataType,ct,finalDataType,type,contents=s.contents,dataTypes=s.dataTypes;while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");}}
if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}}
if(dataTypes[0]in responses){finalDataType=dataTypes[0];}else{for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}
if(!firstDataType){firstDataType=type;}}
finalDataType=finalDataType||firstDataType;}
if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}
return responses[finalDataType];}}
function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={},dataTypes=s.dataTypes.slice();if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv];}}
current=dataTypes.shift();while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response;}
if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType);}
prev=current;current=dataTypes.shift();if(current){if(current==="*"){current=prev;}else if(prev!=="*"&&prev!==current){conv=converters[prev+" "+current]||converters["* "+current];if(!conv){for(conv2 in converters){tmp=conv2.split(" ");if(tmp[1]===current){conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){if(conv===true){conv=converters[conv2];}else if(converters[conv2]!==true){current=tmp[0];dataTypes.unshift(tmp[1]);}
break;}}}}
if(conv!==true){if(conv&&s["throws"]){response=conv(response);}else{try{response=conv(response);}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current};}}}}}}
return{state:"success",data:response};}
jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(text){jQuery.globalEval(text);return text;}}});jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}
if(s.crossDomain){s.type="GET";s.global=false;}});jQuery.ajaxTransport("script",function(s){if(s.crossDomain){var script,head=document.head||jQuery("head")[0]||document.documentElement;return{send:function(_,callback){script=document.createElement("script");script.async=true;if(s.scriptCharset){script.charset=s.scriptCharset;}
script.src=s.url;script.onload=script.onreadystatechange=function(_,isAbort){if(isAbort||!script.readyState||/loaded|complete/.test(script.readyState)){script.onload=script.onreadystatechange=null;if(script.parentNode){script.parentNode.removeChild(script);}
script=null;if(!isAbort){callback(200,"success");}}};head.insertBefore(script,head.firstChild);},abort:function(){if(script){script.onload(undefined,true);}}};}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var callback=oldCallbacks.pop()||(jQuery.expando+"_"+(ajax_nonce++));this[callback]=true;return callback;}});jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&!(s.contentType||"").indexOf("application/x-www-form-urlencoded")&&rjsonp.test(s.data)&&"data");if(jsonProp||s.dataTypes[0]==="jsonp"){callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);}else if(s.jsonp!==false){s.url+=(ajax_rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;}
s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called");}
return responseContainer[0];};s.dataTypes[0]="json";overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments;};jqXHR.always(function(){window[callbackName]=overwritten;if(s[callbackName]){s.jsonpCallback=originalSettings.jsonpCallback;oldCallbacks.push(callbackName);}
if(responseContainer&&jQuery.isFunction(overwritten)){overwritten(responseContainer[0]);}
responseContainer=overwritten=undefined;});return"script";}});var xhrCallbacks,xhrSupported,xhrId=0,xhrOnUnloadAbort=window.ActiveXObject&&function(){var key;for(key in xhrCallbacks){xhrCallbacks[key](undefined,true);}};function createStandardXHR(){try{return new window.XMLHttpRequest();}catch(e){}}
function createActiveXHR(){try{return new window.ActiveXObject("Microsoft.XMLHTTP");}catch(e){}}
jQuery.ajaxSettings.xhr=window.ActiveXObject?function(){return!this.isLocal&&createStandardXHR()||createActiveXHR();}:createStandardXHR;xhrSupported=jQuery.ajaxSettings.xhr();jQuery.support.cors=!!xhrSupported&&("withCredentials"in xhrSupported);xhrSupported=jQuery.support.ajax=!!xhrSupported;if(xhrSupported){jQuery.ajaxTransport(function(s){if(!s.crossDomain||jQuery.support.cors){var callback;return{send:function(headers,complete){var handle,i,xhr=s.xhr();if(s.username){xhr.open(s.type,s.url,s.async,s.username,s.password);}else{xhr.open(s.type,s.url,s.async);}
if(s.xhrFields){for(i in s.xhrFields){xhr[i]=s.xhrFields[i];}}
if(s.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(s.mimeType);}
if(!s.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";}
try{for(i in headers){xhr.setRequestHeader(i,headers[i]);}}catch(err){}
xhr.send((s.hasContent&&s.data)||null);callback=function(_,isAbort){var status,responseHeaders,statusText,responses;try{if(callback&&(isAbort||xhr.readyState===4)){callback=undefined;if(handle){xhr.onreadystatechange=jQuery.noop;if(xhrOnUnloadAbort){delete xhrCallbacks[handle];}}
if(isAbort){if(xhr.readyState!==4){xhr.abort();}}else{responses={};status=xhr.status;responseHeaders=xhr.getAllResponseHeaders();if(typeof xhr.responseText==="string"){responses.text=xhr.responseText;}
try{statusText=xhr.statusText;}catch(e){statusText="";}
if(!status&&s.isLocal&&!s.crossDomain){status=responses.text?200:404;}else if(status===1223){status=204;}}}}catch(firefoxAccessException){if(!isAbort){complete(-1,firefoxAccessException);}}
if(responses){complete(status,statusText,responses,responseHeaders);}};if(!s.async){callback();}else if(xhr.readyState===4){setTimeout(callback);}else{handle=++xhrId;if(xhrOnUnloadAbort){if(!xhrCallbacks){xhrCallbacks={};jQuery(window).unload(xhrOnUnloadAbort);}
xhrCallbacks[handle]=callback;}
xhr.onreadystatechange=callback;}},abort:function(){if(callback){callback(undefined,true);}}};}});}
var fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rfxnum=new RegExp("^(?:([+-])=|)("+core_pnum+")([a-z%]*)$","i"),rrun=/queueHooks$/,animationPrefilters=[defaultPrefilter],tweeners={"*":[function(prop,value){var tween=this.createTween(prop,value),target=tween.cur(),parts=rfxnum.exec(value),unit=parts&&parts[3]||(jQuery.cssNumber[prop]?"":"px"),start=(jQuery.cssNumber[prop]||unit!=="px"&&+target)&&rfxnum.exec(jQuery.css(tween.elem,prop)),scale=1,maxIterations=20;if(start&&start[3]!==unit){unit=unit||start[3];parts=parts||[];start=+target||1;do{scale=scale||".5";start=start/scale;jQuery.style(tween.elem,prop,start+unit);}while(scale!==(scale=tween.cur()/target)&&scale!==1&&--maxIterations);}
if(parts){start=tween.start=+start||+target||0;tween.unit=unit;tween.end=parts[1]?start+(parts[1]+1)*parts[2]:+parts[2];}
return tween;}]};function createFxNow(){setTimeout(function(){fxNow=undefined;});return(fxNow=jQuery.now());}
function createTween(value,prop,animation){var tween,collection=(tweeners[prop]||[]).concat(tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if((tween=collection[index].call(animation,prop,value))){return tween;}}}
function Animation(elem,properties,options){var result,stopped,index=0,length=animationPrefilters.length,deferred=jQuery.Deferred().always(function(){delete tick.elem;}),tick=function(){if(stopped){return false;}
var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent);}
deferred.notifyWith(elem,[animation,percent,remaining]);if(percent<1&&length){return remaining;}else{deferred.resolveWith(elem,[animation]);return false;}},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{}},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function(gotoEnd){var index=0,length=gotoEnd?animation.tweens.length:0;if(stopped){return this;}
stopped=true;for(;index<length;index++){animation.tweens[index].run(1);}
if(gotoEnd){deferred.resolveWith(elem,[animation,gotoEnd]);}else{deferred.rejectWith(elem,[animation,gotoEnd]);}
return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=animationPrefilters[index].call(animation,elem,props,animation.opts);if(result){return result;}}
jQuery.map(props,createTween,animation);if(jQuery.isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}
jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue}));return animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);}
function propFilter(props,specialEasing){var index,name,easing,value,hooks;for(index in props){name=jQuery.camelCase(index);easing=specialEasing[name];value=props[index];if(jQuery.isArray(value)){easing=value[1];value=props[index]=value[0];}
if(index!==name){props[name]=value;delete props[index];}
hooks=jQuery.cssHooks[name];if(hooks&&"expand"in hooks){value=hooks.expand(value);delete props[name];for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing;}}}else{specialEasing[name]=easing;}}}
jQuery.Animation=jQuery.extend(Animation,{tweener:function(props,callback){if(jQuery.isFunction(props)){callback=props;props=["*"];}else{props=props.split(" ");}
var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];tweeners[prop]=tweeners[prop]||[];tweeners[prop].unshift(callback);}},prefilter:function(callback,prepend){if(prepend){animationPrefilters.unshift(callback);}else{animationPrefilters.push(callback);}}});function defaultPrefilter(elem,props,opts){var prop,value,toggle,tween,hooks,oldfire,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHidden(elem),dataShow=jQuery._data(elem,"fxshow");if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire();}};}
hooks.unqueued++;anim.always(function(){anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});}
if(elem.nodeType===1&&("height"in props||"width"in props)){opts.overflow=[style.overflow,style.overflowX,style.overflowY];if(jQuery.css(elem,"display")==="inline"&&jQuery.css(elem,"float")==="none"){if(!jQuery.support.inlineBlockNeedsLayout||css_defaultDisplay(elem.nodeName)==="inline"){style.display="inline-block";}else{style.zoom=1;}}}
if(opts.overflow){style.overflow="hidden";if(!jQuery.support.shrinkWrapBlocks){anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2];});}}
for(prop in props){value=props[prop];if(rfxtypes.exec(value)){delete props[prop];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){continue;}
orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop);}}
if(!jQuery.isEmptyObject(orig)){if(dataShow){if("hidden"in dataShow){hidden=dataShow.hidden;}}else{dataShow=jQuery._data(elem,"fxshow",{});}
if(toggle){dataShow.hidden=!hidden;}
if(hidden){jQuery(elem).show();}else{anim.done(function(){jQuery(elem).hide();});}
anim.done(function(){var prop;jQuery._removeData(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop]);}});for(prop in orig){tween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop]=tween.start;if(hidden){tween.end=tween.start;tween.start=prop==="width"||prop==="height"?1:0;}}}}}
function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}
jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||"swing";this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px");},cur:function(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration);}else{this.pos=eased=percent;}
this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}
if(hooks&&hooks.set){hooks.set(this);}else{Tween.propHooks._default.set(this);}
return this;}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function(tween){var result;if(tween.elem[tween.prop]!=null&&(!tween.elem.style||tween.elem.style[tween.prop]==null)){return tween.elem[tween.prop];}
result=jQuery.css(tween.elem,tween.prop,"");return!result||result==="auto"?0:result;},set:function(tween){if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.style&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);}else{tween.elem[tween.prop]=tween.now;}}}};Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now;}}};jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};});jQuery.fn.extend({fadeTo:function(speed,to,easing,callback){return this.filter(isHidden).css("opacity",0).show().end().animate({opacity:to},speed,easing,callback);},animate:function(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function(){var anim=Animation(this,jQuery.extend({},prop),optall);if(empty||jQuery._data(this,"finish")){anim.stop(true);}};doAnimation.finish=doAnimation;return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function(type,clearQueue,gotoEnd){var stopQueue=function(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined;}
if(clearQueue&&type!==false){this.queue(type||"fx",[]);}
return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=jQuery._data(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index]);}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index]);}}}
for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1);}}
if(dequeue||!gotoEnd){jQuery.dequeue(this,type);}});},finish:function(type){if(type!==false){type=type||"fx";}
return this.each(function(){var index,data=jQuery._data(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;data.finish=true;jQuery.queue(this,type,[]);if(hooks&&hooks.stop){hooks.stop.call(this,true);}
for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);timers.splice(index,1);}}
for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this);}}
delete data.finish;});}});function genFx(type,includeWidth){var which,attrs={height:type},i=0;includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type;}
if(includeWidth){attrs.opacity=attrs.width=type;}
return attrs;}
jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.speed=function(speed,easing,fn){var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};opt.duration=jQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default;if(opt.queue==null||opt.queue===true){opt.queue="fx";}
opt.old=opt.complete;opt.complete=function(){if(jQuery.isFunction(opt.old)){opt.old.call(this);}
if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.easing={linear:function(p){return p;},swing:function(p){return 0.5-Math.cos(p*Math.PI)/2;}};jQuery.timers=[];jQuery.fx=Tween.prototype.init;jQuery.fx.tick=function(){var timer,timers=jQuery.timers,i=0;fxNow=jQuery.now();for(;i<timers.length;i++){timer=timers[i];if(!timer()&&timers[i]===timer){timers.splice(i--,1);}}
if(!timers.length){jQuery.fx.stop();}
fxNow=undefined;};jQuery.fx.timer=function(timer){if(timer()&&jQuery.timers.push(timer)){jQuery.fx.start();}};jQuery.fx.interval=13;jQuery.fx.start=function(){if(!timerId){timerId=setInterval(jQuery.fx.tick,jQuery.fx.interval);}};jQuery.fx.stop=function(){clearInterval(timerId);timerId=null;};jQuery.fx.speeds={slow:600,fast:200,_default:400};jQuery.fx.step={};if(jQuery.expr&&jQuery.expr.filters){jQuery.expr.filters.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};}
jQuery.fn.offset=function(options){if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}
var docElem,win,box={top:0,left:0},elem=this[0],doc=elem&&elem.ownerDocument;if(!doc){return;}
docElem=doc.documentElement;if(!jQuery.contains(docElem,elem)){return box;}
if(typeof elem.getBoundingClientRect!==core_strundefined){box=elem.getBoundingClientRect();}
win=getWindow(doc);return{top:box.top+(win.pageYOffset||docElem.scrollTop)-(docElem.clientTop||0),left:box.left+(win.pageXOffset||docElem.scrollLeft)-(docElem.clientLeft||0)};};jQuery.offset={setOffset:function(elem,options,i){var position=jQuery.css(elem,"position");if(position==="static"){elem.style.position="relative";}
var curElem=jQuery(elem),curOffset=curElem.offset(),curCSSTop=jQuery.css(elem,"top"),curCSSLeft=jQuery.css(elem,"left"),calculatePosition=(position==="absolute"||position==="fixed")&&jQuery.inArray("auto",[curCSSTop,curCSSLeft])>-1,props={},curPosition={},curTop,curLeft;if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}
if(jQuery.isFunction(options)){options=options.call(elem,i,curOffset);}
if(options.top!=null){props.top=(options.top-curOffset.top)+curTop;}
if(options.left!=null){props.left=(options.left-curOffset.left)+curLeft;}
if("using"in options){options.using.call(elem,props);}else{curElem.css(props);}}};jQuery.fn.extend({position:function(){if(!this[0]){return;}
var offsetParent,offset,parentOffset={top:0,left:0},elem=this[0];if(jQuery.css(elem,"position")==="fixed"){offset=elem.getBoundingClientRect();}else{offsetParent=this.offsetParent();offset=this.offset();if(!jQuery.nodeName(offsetParent[0],"html")){parentOffset=offsetParent.offset();}
parentOffset.top+=jQuery.css(offsetParent[0],"borderTopWidth",true);parentOffset.left+=jQuery.css(offsetParent[0],"borderLeftWidth",true);}
return{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)};},offsetParent:function(){return this.map(function(){var offsetParent=this.offsetParent||docElem;while(offsetParent&&(!jQuery.nodeName(offsetParent,"html")&&jQuery.css(offsetParent,"position")==="static")){offsetParent=offsetParent.offsetParent;}
return offsetParent||docElem;});}});jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top=/Y/.test(prop);jQuery.fn[method]=function(val){return jQuery.access(this,function(elem,method,val){var win=getWindow(elem);if(val===undefined){return win?(prop in win)?win[prop]:win.document.documentElement[method]:elem[method];}
if(win){win.scrollTo(!top?val:jQuery(win).scrollLeft(),top?val:jQuery(win).scrollTop());}else{elem[method]=val;}},method,val,arguments.length,null);};});function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType===9?elem.defaultView||elem.parentWindow:false;}
jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return jQuery.access(this,function(elem,type,value){var doc;if(jQuery.isWindow(elem)){return elem.document.documentElement["client"+name];}
if(elem.nodeType===9){doc=elem.documentElement;return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name]);}
return value===undefined?jQuery.css(elem,type,extra):jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable,null);};});});jQuery.fn.size=function(){return this.length;};jQuery.fn.andSelf=jQuery.fn.addBack;if(typeof module==="object"&&module&&typeof module.exports==="object"){module.exports=jQuery;}else{window.jQuery=window.$=jQuery;if(typeof define==="function"&&define.amd){define("jquery",[],function(){return jQuery;});}}})(window);jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d);},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b;},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b;},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b;},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b;},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b;},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b;},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b;},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b;},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b;},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b;},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b;},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b;},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b;},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b;},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b;},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b;},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b;},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b;},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b;},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b;},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b;},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b;},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b;},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b;}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b;}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b;}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b;}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b;}});/*!
 * Bootstrap v3.3.2 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */if(typeof jQuery==='undefined'){throw new Error('Bootstrap\'s JavaScript requires jQuery')}
+function($){'use strict';var version=$.fn.jquery.split(' ')[0].split('.')
if((version[0]<2&&version[1]<9)||(version[0]==1&&version[1]==9&&version[2]<1)){throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher')}}(jQuery);+function($){'use strict';function transitionEnd(){var el=document.createElement('bootstrap')
var transEndEventNames={WebkitTransition:'webkitTransitionEnd',MozTransition:'transitionend',OTransition:'oTransitionEnd otransitionend',transition:'transitionend'}
for(var name in transEndEventNames){if(el.style[name]!==undefined){return{end:transEndEventNames[name]}}}
return false}
$.fn.emulateTransitionEnd=function(duration){var called=false
var $el=this
$(this).one('bsTransitionEnd',function(){called=true})
var callback=function(){if(!called)$($el).trigger($.support.transition.end)}
setTimeout(callback,duration)
return this}
$(function(){$.support.transition=transitionEnd()
if(!$.support.transition)return
$.event.special.bsTransitionEnd={bindType:$.support.transition.end,delegateType:$.support.transition.end,handle:function(e){if($(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}})}(jQuery);+function($){'use strict';var dismiss='[data-dismiss="alert"]'
var Alert=function(el){$(el).on('click',dismiss,this.close)}
Alert.VERSION='3.3.2'
Alert.TRANSITION_DURATION=150
Alert.prototype.close=function(e){var $this=$(this)
var selector=$this.attr('data-target')
if(!selector){selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')}
var $parent=$(selector)
if(e)e.preventDefault()
if(!$parent.length){$parent=$this.closest('.alert')}
$parent.trigger(e=$.Event('close.bs.alert'))
if(e.isDefaultPrevented())return
$parent.removeClass('in')
function removeElement(){$parent.detach().trigger('closed.bs.alert').remove()}
$.support.transition&&$parent.hasClass('fade')?$parent.one('bsTransitionEnd',removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION):removeElement()}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.alert')
if(!data)$this.data('bs.alert',(data=new Alert(this)))
if(typeof option=='string')data[option].call($this)})}
var old=$.fn.alert
$.fn.alert=Plugin
$.fn.alert.Constructor=Alert
$.fn.alert.noConflict=function(){$.fn.alert=old
return this}
$(document).on('click.bs.alert.data-api',dismiss,Alert.prototype.close)}(jQuery);+function($){'use strict';var Button=function(element,options){this.$element=$(element)
this.options=$.extend({},Button.DEFAULTS,options)
this.isLoading=false}
Button.VERSION='3.3.2'
Button.DEFAULTS={loadingText:'loading...'}
Button.prototype.setState=function(state){var d='disabled'
var $el=this.$element
var val=$el.is('input')?'val':'html'
var data=$el.data()
state=state+'Text'
if(data.resetText==null)$el.data('resetText',$el[val]())
setTimeout($.proxy(function(){$el[val](data[state]==null?this.options[state]:data[state])
if(state=='loadingText'){this.isLoading=true
$el.addClass(d).attr(d,d)}else if(this.isLoading){this.isLoading=false
$el.removeClass(d).removeAttr(d)}},this),0)}
Button.prototype.toggle=function(){var changed=true
var $parent=this.$element.closest('[data-toggle="buttons"]')
if($parent.length){var $input=this.$element.find('input')
if($input.prop('type')=='radio'){if($input.prop('checked')&&this.$element.hasClass('active'))changed=false
else $parent.find('.active').removeClass('active')}
if(changed)$input.prop('checked',!this.$element.hasClass('active')).trigger('change')}else{this.$element.attr('aria-pressed',!this.$element.hasClass('active'))}
if(changed)this.$element.toggleClass('active')}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.button')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.button',(data=new Button(this,options)))
if(option=='toggle')data.toggle()
else if(option)data.setState(option)})}
var old=$.fn.button
$.fn.button=Plugin
$.fn.button.Constructor=Button
$.fn.button.noConflict=function(){$.fn.button=old
return this}
$(document).on('click.bs.button.data-api','[data-toggle^="button"]',function(e){var $btn=$(e.target)
if(!$btn.hasClass('btn'))$btn=$btn.closest('.btn')
Plugin.call($btn,'toggle')
e.preventDefault()}).on('focus.bs.button.data-api blur.bs.button.data-api','[data-toggle^="button"]',function(e){$(e.target).closest('.btn').toggleClass('focus',/^focus(in)?$/.test(e.type))})}(jQuery);+function($){'use strict';var Carousel=function(element,options){this.$element=$(element)
this.$indicators=this.$element.find('.carousel-indicators')
this.options=options
this.paused=this.sliding=this.interval=this.$active=this.$items=null
this.options.keyboard&&this.$element.on('keydown.bs.carousel',$.proxy(this.keydown,this))
this.options.pause=='hover'&&!('ontouchstart'in document.documentElement)&&this.$element.on('mouseenter.bs.carousel',$.proxy(this.pause,this)).on('mouseleave.bs.carousel',$.proxy(this.cycle,this))}
Carousel.VERSION='3.3.2'
Carousel.TRANSITION_DURATION=600
Carousel.DEFAULTS={interval:5000,pause:'hover',wrap:true,keyboard:true}
Carousel.prototype.keydown=function(e){if(/input|textarea/i.test(e.target.tagName))return
switch(e.which){case 37:this.prev();break
case 39:this.next();break
default:return}
e.preventDefault()}
Carousel.prototype.cycle=function(e){e||(this.paused=false)
this.interval&&clearInterval(this.interval)
this.options.interval&&!this.paused&&(this.interval=setInterval($.proxy(this.next,this),this.options.interval))
return this}
Carousel.prototype.getItemIndex=function(item){this.$items=item.parent().children('.item')
return this.$items.index(item||this.$active)}
Carousel.prototype.getItemForDirection=function(direction,active){var activeIndex=this.getItemIndex(active)
var willWrap=(direction=='prev'&&activeIndex===0)||(direction=='next'&&activeIndex==(this.$items.length-1))
if(willWrap&&!this.options.wrap)return active
var delta=direction=='prev'?-1:1
var itemIndex=(activeIndex+delta)%this.$items.length
return this.$items.eq(itemIndex)}
Carousel.prototype.to=function(pos){var that=this
var activeIndex=this.getItemIndex(this.$active=this.$element.find('.item.active'))
if(pos>(this.$items.length-1)||pos<0)return
if(this.sliding)return this.$element.one('slid.bs.carousel',function(){that.to(pos)})
if(activeIndex==pos)return this.pause().cycle()
return this.slide(pos>activeIndex?'next':'prev',this.$items.eq(pos))}
Carousel.prototype.pause=function(e){e||(this.paused=true)
if(this.$element.find('.next, .prev').length&&$.support.transition){this.$element.trigger($.support.transition.end)
this.cycle(true)}
this.interval=clearInterval(this.interval)
return this}
Carousel.prototype.next=function(){if(this.sliding)return
return this.slide('next')}
Carousel.prototype.prev=function(){if(this.sliding)return
return this.slide('prev')}
Carousel.prototype.slide=function(type,next){var $active=this.$element.find('.item.active')
var $next=next||this.getItemForDirection(type,$active)
var isCycling=this.interval
var direction=type=='next'?'left':'right'
var that=this
if($next.hasClass('active'))return(this.sliding=false)
var relatedTarget=$next[0]
var slideEvent=$.Event('slide.bs.carousel',{relatedTarget:relatedTarget,direction:direction})
this.$element.trigger(slideEvent)
if(slideEvent.isDefaultPrevented())return
this.sliding=true
isCycling&&this.pause()
if(this.$indicators.length){this.$indicators.find('.active').removeClass('active')
var $nextIndicator=$(this.$indicators.children()[this.getItemIndex($next)])
$nextIndicator&&$nextIndicator.addClass('active')}
var slidEvent=$.Event('slid.bs.carousel',{relatedTarget:relatedTarget,direction:direction})
if($.support.transition&&this.$element.hasClass('slide')){$next.addClass(type)
$next[0].offsetWidth
$active.addClass(direction)
$next.addClass(direction)
$active.one('bsTransitionEnd',function(){$next.removeClass([type,direction].join(' ')).addClass('active')
$active.removeClass(['active',direction].join(' '))
that.sliding=false
setTimeout(function(){that.$element.trigger(slidEvent)},0)}).emulateTransitionEnd(Carousel.TRANSITION_DURATION)}else{$active.removeClass('active')
$next.addClass('active')
this.sliding=false
this.$element.trigger(slidEvent)}
isCycling&&this.cycle()
return this}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.carousel')
var options=$.extend({},Carousel.DEFAULTS,$this.data(),typeof option=='object'&&option)
var action=typeof option=='string'?option:options.slide
if(!data)$this.data('bs.carousel',(data=new Carousel(this,options)))
if(typeof option=='number')data.to(option)
else if(action)data[action]()
else if(options.interval)data.pause().cycle()})}
var old=$.fn.carousel
$.fn.carousel=Plugin
$.fn.carousel.Constructor=Carousel
$.fn.carousel.noConflict=function(){$.fn.carousel=old
return this}
var clickHandler=function(e){var href
var $this=$(this)
var $target=$($this.attr('data-target')||(href=$this.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,''))
if(!$target.hasClass('carousel'))return
var options=$.extend({},$target.data(),$this.data())
var slideIndex=$this.attr('data-slide-to')
if(slideIndex)options.interval=false
Plugin.call($target,options)
if(slideIndex){$target.data('bs.carousel').to(slideIndex)}
e.preventDefault()}
$(document).on('click.bs.carousel.data-api','[data-slide]',clickHandler).on('click.bs.carousel.data-api','[data-slide-to]',clickHandler)
$(window).on('load',function(){$('[data-ride="carousel"]').each(function(){var $carousel=$(this)
Plugin.call($carousel,$carousel.data())})})}(jQuery);+function($){'use strict';var Collapse=function(element,options){this.$element=$(element)
this.options=$.extend({},Collapse.DEFAULTS,options)
this.$trigger=$(this.options.trigger).filter('[href="#'+element.id+'"], [data-target="#'+element.id+'"]')
this.transitioning=null
if(this.options.parent){this.$parent=this.getParent()}else{this.addAriaAndCollapsedClass(this.$element,this.$trigger)}
if(this.options.toggle)this.toggle()}
Collapse.VERSION='3.3.2'
Collapse.TRANSITION_DURATION=350
Collapse.DEFAULTS={toggle:true,trigger:'[data-toggle="collapse"]'}
Collapse.prototype.dimension=function(){var hasWidth=this.$element.hasClass('width')
return hasWidth?'width':'height'}
Collapse.prototype.show=function(){if(this.transitioning||this.$element.hasClass('in'))return
var activesData
var actives=this.$parent&&this.$parent.children('.panel').children('.in, .collapsing')
if(actives&&actives.length){activesData=actives.data('bs.collapse')
if(activesData&&activesData.transitioning)return}
var startEvent=$.Event('show.bs.collapse')
this.$element.trigger(startEvent)
if(startEvent.isDefaultPrevented())return
if(actives&&actives.length){Plugin.call(actives,'hide')
activesData||actives.data('bs.collapse',null)}
var dimension=this.dimension()
this.$element.removeClass('collapse').addClass('collapsing')[dimension](0).attr('aria-expanded',true)
this.$trigger.removeClass('collapsed').attr('aria-expanded',true)
this.transitioning=1
var complete=function(){this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('')
this.transitioning=0
this.$element.trigger('shown.bs.collapse')}
if(!$.support.transition)return complete.call(this)
var scrollSize=$.camelCase(['scroll',dimension].join('-'))
this.$element.one('bsTransitionEnd',$.proxy(complete,this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])}
Collapse.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass('in'))return
var startEvent=$.Event('hide.bs.collapse')
this.$element.trigger(startEvent)
if(startEvent.isDefaultPrevented())return
var dimension=this.dimension()
this.$element[dimension](this.$element[dimension]())[0].offsetHeight
this.$element.addClass('collapsing').removeClass('collapse in').attr('aria-expanded',false)
this.$trigger.addClass('collapsed').attr('aria-expanded',false)
this.transitioning=1
var complete=function(){this.transitioning=0
this.$element.removeClass('collapsing').addClass('collapse').trigger('hidden.bs.collapse')}
if(!$.support.transition)return complete.call(this)
this.$element
[dimension](0).one('bsTransitionEnd',$.proxy(complete,this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)}
Collapse.prototype.toggle=function(){this[this.$element.hasClass('in')?'hide':'show']()}
Collapse.prototype.getParent=function(){return $(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each($.proxy(function(i,element){var $element=$(element)
this.addAriaAndCollapsedClass(getTargetFromTrigger($element),$element)},this)).end()}
Collapse.prototype.addAriaAndCollapsedClass=function($element,$trigger){var isOpen=$element.hasClass('in')
$element.attr('aria-expanded',isOpen)
$trigger.toggleClass('collapsed',!isOpen).attr('aria-expanded',isOpen)}
function getTargetFromTrigger($trigger){var href
var target=$trigger.attr('data-target')||(href=$trigger.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,'')
return $(target)}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.collapse')
var options=$.extend({},Collapse.DEFAULTS,$this.data(),typeof option=='object'&&option)
if(!data&&options.toggle&&option=='show')options.toggle=false
if(!data)$this.data('bs.collapse',(data=new Collapse(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.collapse
$.fn.collapse=Plugin
$.fn.collapse.Constructor=Collapse
$.fn.collapse.noConflict=function(){$.fn.collapse=old
return this}
$(document).on('click.bs.collapse.data-api','[data-toggle="collapse"]',function(e){var $this=$(this)
if(!$this.attr('data-target'))e.preventDefault()
var $target=getTargetFromTrigger($this)
var data=$target.data('bs.collapse')
var option=data?'toggle':$.extend({},$this.data(),{trigger:this})
Plugin.call($target,option)})}(jQuery);+function($){'use strict';var backdrop='.dropdown-backdrop'
var toggle='[data-toggle="dropdown"]'
var Dropdown=function(element){$(element).on('click.bs.dropdown',this.toggle)}
Dropdown.VERSION='3.3.2'
Dropdown.prototype.toggle=function(e){var $this=$(this)
if($this.is('.disabled, :disabled'))return
var $parent=getParent($this)
var isActive=$parent.hasClass('open')
clearMenus()
if(!isActive){if('ontouchstart'in document.documentElement&&!$parent.closest('.navbar-nav').length){$('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click',clearMenus)}
var relatedTarget={relatedTarget:this}
$parent.trigger(e=$.Event('show.bs.dropdown',relatedTarget))
if(e.isDefaultPrevented())return
$this.trigger('focus').attr('aria-expanded','true')
$parent.toggleClass('open').trigger('shown.bs.dropdown',relatedTarget)}
return false}
Dropdown.prototype.keydown=function(e){if(!/(38|40|27|32)/.test(e.which)||/input|textarea/i.test(e.target.tagName))return
var $this=$(this)
e.preventDefault()
e.stopPropagation()
if($this.is('.disabled, :disabled'))return
var $parent=getParent($this)
var isActive=$parent.hasClass('open')
if((!isActive&&e.which!=27)||(isActive&&e.which==27)){if(e.which==27)$parent.find(toggle).trigger('focus')
return $this.trigger('click')}
var desc=' li:not(.divider):visible a'
var $items=$parent.find('[role="menu"]'+desc+', [role="listbox"]'+desc)
if(!$items.length)return
var index=$items.index(e.target)
if(e.which==38&&index>0)index--
if(e.which==40&&index<$items.length-1)index++
if(!~index)index=0
$items.eq(index).trigger('focus')}
function clearMenus(e){if(e&&e.which===3)return
$(backdrop).remove()
$(toggle).each(function(){var $this=$(this)
var $parent=getParent($this)
var relatedTarget={relatedTarget:this}
if(!$parent.hasClass('open'))return
$parent.trigger(e=$.Event('hide.bs.dropdown',relatedTarget))
if(e.isDefaultPrevented())return
$this.attr('aria-expanded','false')
$parent.removeClass('open').trigger('hidden.bs.dropdown',relatedTarget)})}
function getParent($this){var selector=$this.attr('data-target')
if(!selector){selector=$this.attr('href')
selector=selector&&/#[A-Za-z]/.test(selector)&&selector.replace(/.*(?=#[^\s]*$)/,'')}
var $parent=selector&&$(selector)
return $parent&&$parent.length?$parent:$this.parent()}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.dropdown')
if(!data)$this.data('bs.dropdown',(data=new Dropdown(this)))
if(typeof option=='string')data[option].call($this)})}
var old=$.fn.dropdown
$.fn.dropdown=Plugin
$.fn.dropdown.Constructor=Dropdown
$.fn.dropdown.noConflict=function(){$.fn.dropdown=old
return this}
$(document).on('click.bs.dropdown.data-api',clearMenus).on('click.bs.dropdown.data-api','.dropdown form',function(e){e.stopPropagation()}).on('click.bs.dropdown.data-api',toggle,Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api',toggle,Dropdown.prototype.keydown).on('keydown.bs.dropdown.data-api','[role="menu"]',Dropdown.prototype.keydown).on('keydown.bs.dropdown.data-api','[role="listbox"]',Dropdown.prototype.keydown)}(jQuery);+function($){'use strict';var Modal=function(element,options){this.options=options
this.$body=$(document.body)
this.$element=$(element)
this.$backdrop=this.isShown=null
this.scrollbarWidth=0
if(this.options.remote){this.$element.find('.modal-content').load(this.options.remote,$.proxy(function(){this.$element.trigger('loaded.bs.modal')},this))}}
Modal.VERSION='3.3.2'
Modal.TRANSITION_DURATION=300
Modal.BACKDROP_TRANSITION_DURATION=150
Modal.DEFAULTS={backdrop:true,keyboard:true,show:true}
Modal.prototype.toggle=function(_relatedTarget){return this.isShown?this.hide():this.show(_relatedTarget)}
Modal.prototype.show=function(_relatedTarget){var that=this
var e=$.Event('show.bs.modal',{relatedTarget:_relatedTarget})
this.$element.trigger(e)
if(this.isShown||e.isDefaultPrevented())return
this.isShown=true
this.checkScrollbar()
this.setScrollbar()
this.$body.addClass('modal-open')
this.escape()
this.resize()
this.$element.on('click.dismiss.bs.modal','[data-dismiss="modal"]',$.proxy(this.hide,this))
this.backdrop(function(){var transition=$.support.transition&&that.$element.hasClass('fade')
if(!that.$element.parent().length){that.$element.appendTo(that.$body)}
that.$element.show().scrollTop(0)
if(that.options.backdrop)that.adjustBackdrop()
that.adjustDialog()
if(transition){that.$element[0].offsetWidth}
that.$element.addClass('in').attr('aria-hidden',false)
that.enforceFocus()
var e=$.Event('shown.bs.modal',{relatedTarget:_relatedTarget})
transition?that.$element.find('.modal-dialog').one('bsTransitionEnd',function(){that.$element.trigger('focus').trigger(e)}).emulateTransitionEnd(Modal.TRANSITION_DURATION):that.$element.trigger('focus').trigger(e)})}
Modal.prototype.hide=function(e){if(e)e.preventDefault()
e=$.Event('hide.bs.modal')
this.$element.trigger(e)
if(!this.isShown||e.isDefaultPrevented())return
this.isShown=false
this.escape()
this.resize()
$(document).off('focusin.bs.modal')
this.$element.removeClass('in').attr('aria-hidden',true).off('click.dismiss.bs.modal')
$.support.transition&&this.$element.hasClass('fade')?this.$element.one('bsTransitionEnd',$.proxy(this.hideModal,this)).emulateTransitionEnd(Modal.TRANSITION_DURATION):this.hideModal()}
Modal.prototype.enforceFocus=function(){$(document).off('focusin.bs.modal').on('focusin.bs.modal',$.proxy(function(e){if(this.$element[0]!==e.target&&!this.$element.has(e.target).length){this.$element.trigger('focus')}},this))}
Modal.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on('keydown.dismiss.bs.modal',$.proxy(function(e){e.which==27&&this.hide()},this))}else if(!this.isShown){this.$element.off('keydown.dismiss.bs.modal')}}
Modal.prototype.resize=function(){if(this.isShown){$(window).on('resize.bs.modal',$.proxy(this.handleUpdate,this))}else{$(window).off('resize.bs.modal')}}
Modal.prototype.hideModal=function(){var that=this
this.$element.hide()
this.backdrop(function(){that.$body.removeClass('modal-open')
that.resetAdjustments()
that.resetScrollbar()
that.$element.trigger('hidden.bs.modal')})}
Modal.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove()
this.$backdrop=null}
Modal.prototype.backdrop=function(callback){var that=this
var animate=this.$element.hasClass('fade')?'fade':''
if(this.isShown&&this.options.backdrop){var doAnimate=$.support.transition&&animate
this.$backdrop=$('<div class="modal-backdrop '+animate+'" />').prependTo(this.$element).on('click.dismiss.bs.modal',$.proxy(function(e){if(e.target!==e.currentTarget)return
this.options.backdrop=='static'?this.$element[0].focus.call(this.$element[0]):this.hide.call(this)},this))
if(doAnimate)this.$backdrop[0].offsetWidth
this.$backdrop.addClass('in')
if(!callback)return
doAnimate?this.$backdrop.one('bsTransitionEnd',callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION):callback()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass('in')
var callbackRemove=function(){that.removeBackdrop()
callback&&callback()}
$.support.transition&&this.$element.hasClass('fade')?this.$backdrop.one('bsTransitionEnd',callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION):callbackRemove()}else if(callback){callback()}}
Modal.prototype.handleUpdate=function(){if(this.options.backdrop)this.adjustBackdrop()
this.adjustDialog()}
Modal.prototype.adjustBackdrop=function(){this.$backdrop.css('height',0).css('height',this.$element[0].scrollHeight)}
Modal.prototype.adjustDialog=function(){var modalIsOverflowing=this.$element[0].scrollHeight>document.documentElement.clientHeight
this.$element.css({paddingLeft:!this.bodyIsOverflowing&&modalIsOverflowing?this.scrollbarWidth:'',paddingRight:this.bodyIsOverflowing&&!modalIsOverflowing?this.scrollbarWidth:''})}
Modal.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:'',paddingRight:''})}
Modal.prototype.checkScrollbar=function(){this.bodyIsOverflowing=document.body.scrollHeight>document.documentElement.clientHeight
this.scrollbarWidth=this.measureScrollbar()}
Modal.prototype.setScrollbar=function(){var bodyPad=parseInt((this.$body.css('padding-right')||0),10)
if(this.bodyIsOverflowing)this.$body.css('padding-right',bodyPad+this.scrollbarWidth)}
Modal.prototype.resetScrollbar=function(){this.$body.css('padding-right','')}
Modal.prototype.measureScrollbar=function(){var scrollDiv=document.createElement('div')
scrollDiv.className='modal-scrollbar-measure'
this.$body.append(scrollDiv)
var scrollbarWidth=scrollDiv.offsetWidth-scrollDiv.clientWidth
this.$body[0].removeChild(scrollDiv)
return scrollbarWidth}
function Plugin(option,_relatedTarget){return this.each(function(){var $this=$(this)
var data=$this.data('bs.modal')
var options=$.extend({},Modal.DEFAULTS,$this.data(),typeof option=='object'&&option)
if(!data)$this.data('bs.modal',(data=new Modal(this,options)))
if(typeof option=='string')data[option](_relatedTarget)
else if(options.show)data.show(_relatedTarget)})}
var old=$.fn.modal
$.fn.modal=Plugin
$.fn.modal.Constructor=Modal
$.fn.modal.noConflict=function(){$.fn.modal=old
return this}
$(document).on('click.bs.modal.data-api','[data-toggle="modal"]',function(e){var $this=$(this)
var href=$this.attr('href')
var $target=$($this.attr('data-target')||(href&&href.replace(/.*(?=#[^\s]+$)/,'')))
var option=$target.data('bs.modal')?'toggle':$.extend({remote:!/#/.test(href)&&href},$target.data(),$this.data())
if($this.is('a'))e.preventDefault()
$target.one('show.bs.modal',function(showEvent){if(showEvent.isDefaultPrevented())return
$target.one('hidden.bs.modal',function(){$this.is(':visible')&&$this.trigger('focus')})})
Plugin.call($target,option,this)})}(jQuery);+function($){'use strict';var Tooltip=function(element,options){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null
this.init('tooltip',element,options)}
Tooltip.VERSION='3.3.2'
Tooltip.TRANSITION_DURATION=150
Tooltip.DEFAULTS={animation:true,placement:'top',selector:false,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:'hover focus',title:'',delay:0,html:false,container:false,viewport:{selector:'body',padding:0}}
Tooltip.prototype.init=function(type,element,options){this.enabled=true
this.type=type
this.$element=$(element)
this.options=this.getOptions(options)
this.$viewport=this.options.viewport&&$(this.options.viewport.selector||this.options.viewport)
var triggers=this.options.trigger.split(' ')
for(var i=triggers.length;i--;){var trigger=triggers[i]
if(trigger=='click'){this.$element.on('click.'+this.type,this.options.selector,$.proxy(this.toggle,this))}else if(trigger!='manual'){var eventIn=trigger=='hover'?'mouseenter':'focusin'
var eventOut=trigger=='hover'?'mouseleave':'focusout'
this.$element.on(eventIn+'.'+this.type,this.options.selector,$.proxy(this.enter,this))
this.$element.on(eventOut+'.'+this.type,this.options.selector,$.proxy(this.leave,this))}}
this.options.selector?(this._options=$.extend({},this.options,{trigger:'manual',selector:''})):this.fixTitle()}
Tooltip.prototype.getDefaults=function(){return Tooltip.DEFAULTS}
Tooltip.prototype.getOptions=function(options){options=$.extend({},this.getDefaults(),this.$element.data(),options)
if(options.delay&&typeof options.delay=='number'){options.delay={show:options.delay,hide:options.delay}}
return options}
Tooltip.prototype.getDelegateOptions=function(){var options={}
var defaults=this.getDefaults()
this._options&&$.each(this._options,function(key,value){if(defaults[key]!=value)options[key]=value})
return options}
Tooltip.prototype.enter=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget).data('bs.'+this.type)
if(self&&self.$tip&&self.$tip.is(':visible')){self.hoverState='in'
return}
if(!self){self=new this.constructor(obj.currentTarget,this.getDelegateOptions())
$(obj.currentTarget).data('bs.'+this.type,self)}
clearTimeout(self.timeout)
self.hoverState='in'
if(!self.options.delay||!self.options.delay.show)return self.show()
self.timeout=setTimeout(function(){if(self.hoverState=='in')self.show()},self.options.delay.show)}
Tooltip.prototype.leave=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget).data('bs.'+this.type)
if(!self){self=new this.constructor(obj.currentTarget,this.getDelegateOptions())
$(obj.currentTarget).data('bs.'+this.type,self)}
clearTimeout(self.timeout)
self.hoverState='out'
if(!self.options.delay||!self.options.delay.hide)return self.hide()
self.timeout=setTimeout(function(){if(self.hoverState=='out')self.hide()},self.options.delay.hide)}
Tooltip.prototype.show=function(){var e=$.Event('show.bs.'+this.type)
if(this.hasContent()&&this.enabled){this.$element.trigger(e)
var inDom=$.contains(this.$element[0].ownerDocument.documentElement,this.$element[0])
if(e.isDefaultPrevented()||!inDom)return
var that=this
var $tip=this.tip()
var tipId=this.getUID(this.type)
this.setContent()
$tip.attr('id',tipId)
this.$element.attr('aria-describedby',tipId)
if(this.options.animation)$tip.addClass('fade')
var placement=typeof this.options.placement=='function'?this.options.placement.call(this,$tip[0],this.$element[0]):this.options.placement
var autoToken=/\s?auto?\s?/i
var autoPlace=autoToken.test(placement)
if(autoPlace)placement=placement.replace(autoToken,'')||'top'
$tip.detach().css({top:0,left:0,display:'block'}).addClass(placement).data('bs.'+this.type,this)
this.options.container?$tip.appendTo(this.options.container):$tip.insertAfter(this.$element)
var pos=this.getPosition()
var actualWidth=$tip[0].offsetWidth
var actualHeight=$tip[0].offsetHeight
if(autoPlace){var orgPlacement=placement
var $container=this.options.container?$(this.options.container):this.$element.parent()
var containerDim=this.getPosition($container)
placement=placement=='bottom'&&pos.bottom+actualHeight>containerDim.bottom?'top':placement=='top'&&pos.top-actualHeight<containerDim.top?'bottom':placement=='right'&&pos.right+actualWidth>containerDim.width?'left':placement=='left'&&pos.left-actualWidth<containerDim.left?'right':placement
$tip.removeClass(orgPlacement).addClass(placement)}
var calculatedOffset=this.getCalculatedOffset(placement,pos,actualWidth,actualHeight)
this.applyPlacement(calculatedOffset,placement)
var complete=function(){var prevHoverState=that.hoverState
that.$element.trigger('shown.bs.'+that.type)
that.hoverState=null
if(prevHoverState=='out')that.leave(that)}
$.support.transition&&this.$tip.hasClass('fade')?$tip.one('bsTransitionEnd',complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION):complete()}}
Tooltip.prototype.applyPlacement=function(offset,placement){var $tip=this.tip()
var width=$tip[0].offsetWidth
var height=$tip[0].offsetHeight
var marginTop=parseInt($tip.css('margin-top'),10)
var marginLeft=parseInt($tip.css('margin-left'),10)
if(isNaN(marginTop))marginTop=0
if(isNaN(marginLeft))marginLeft=0
offset.top=offset.top+marginTop
offset.left=offset.left+marginLeft
$.offset.setOffset($tip[0],$.extend({using:function(props){$tip.css({top:Math.round(props.top),left:Math.round(props.left)})}},offset),0)
$tip.addClass('in')
var actualWidth=$tip[0].offsetWidth
var actualHeight=$tip[0].offsetHeight
if(placement=='top'&&actualHeight!=height){offset.top=offset.top+height-actualHeight}
var delta=this.getViewportAdjustedDelta(placement,offset,actualWidth,actualHeight)
if(delta.left)offset.left+=delta.left
else offset.top+=delta.top
var isVertical=/top|bottom/.test(placement)
var arrowDelta=isVertical?delta.left*2-width+actualWidth:delta.top*2-height+actualHeight
var arrowOffsetPosition=isVertical?'offsetWidth':'offsetHeight'
$tip.offset(offset)
this.replaceArrow(arrowDelta,$tip[0][arrowOffsetPosition],isVertical)}
Tooltip.prototype.replaceArrow=function(delta,dimension,isHorizontal){this.arrow().css(isHorizontal?'left':'top',50*(1-delta/dimension)+'%').css(isHorizontal?'top':'left','')}
Tooltip.prototype.setContent=function(){var $tip=this.tip()
var title=this.getTitle()
$tip.find('.tooltip-inner')[this.options.html?'html':'text'](title)
$tip.removeClass('fade in top bottom left right')}
Tooltip.prototype.hide=function(callback){var that=this
var $tip=this.tip()
var e=$.Event('hide.bs.'+this.type)
function complete(){if(that.hoverState!='in')$tip.detach()
that.$element.removeAttr('aria-describedby').trigger('hidden.bs.'+that.type)
callback&&callback()}
this.$element.trigger(e)
if(e.isDefaultPrevented())return
$tip.removeClass('in')
$.support.transition&&this.$tip.hasClass('fade')?$tip.one('bsTransitionEnd',complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION):complete()
this.hoverState=null
return this}
Tooltip.prototype.fixTitle=function(){var $e=this.$element
if($e.attr('title')||typeof($e.attr('data-original-title'))!='string'){$e.attr('data-original-title',$e.attr('title')||'').attr('title','')}}
Tooltip.prototype.hasContent=function(){return this.getTitle()}
Tooltip.prototype.getPosition=function($element){$element=$element||this.$element
var el=$element[0]
var isBody=el.tagName=='BODY'
var elRect=el.getBoundingClientRect()
if(elRect.width==null){elRect=$.extend({},elRect,{width:elRect.right-elRect.left,height:elRect.bottom-elRect.top})}
var elOffset=isBody?{top:0,left:0}:$element.offset()
var scroll={scroll:isBody?document.documentElement.scrollTop||document.body.scrollTop:$element.scrollTop()}
var outerDims=isBody?{width:$(window).width(),height:$(window).height()}:null
return $.extend({},elRect,scroll,outerDims,elOffset)}
Tooltip.prototype.getCalculatedOffset=function(placement,pos,actualWidth,actualHeight){return placement=='bottom'?{top:pos.top+pos.height,left:pos.left+pos.width/2-actualWidth/2}:placement=='top'?{top:pos.top-actualHeight,left:pos.left+pos.width/2-actualWidth/2}:placement=='left'?{top:pos.top+pos.height/2-actualHeight/2,left:pos.left-actualWidth}:{top:pos.top+pos.height/2-actualHeight/2,left:pos.left+pos.width}}
Tooltip.prototype.getViewportAdjustedDelta=function(placement,pos,actualWidth,actualHeight){var delta={top:0,left:0}
if(!this.$viewport)return delta
var viewportPadding=this.options.viewport&&this.options.viewport.padding||0
var viewportDimensions=this.getPosition(this.$viewport)
if(/right|left/.test(placement)){var topEdgeOffset=pos.top-viewportPadding-viewportDimensions.scroll
var bottomEdgeOffset=pos.top+viewportPadding-viewportDimensions.scroll+actualHeight
if(topEdgeOffset<viewportDimensions.top){delta.top=viewportDimensions.top-topEdgeOffset}else if(bottomEdgeOffset>viewportDimensions.top+viewportDimensions.height){delta.top=viewportDimensions.top+viewportDimensions.height-bottomEdgeOffset}}else{var leftEdgeOffset=pos.left-viewportPadding
var rightEdgeOffset=pos.left+viewportPadding+actualWidth
if(leftEdgeOffset<viewportDimensions.left){delta.left=viewportDimensions.left-leftEdgeOffset}else if(rightEdgeOffset>viewportDimensions.width){delta.left=viewportDimensions.left+viewportDimensions.width-rightEdgeOffset}}
return delta}
Tooltip.prototype.getTitle=function(){var title
var $e=this.$element
var o=this.options
title=$e.attr('data-original-title')||(typeof o.title=='function'?o.title.call($e[0]):o.title)
return title}
Tooltip.prototype.getUID=function(prefix){do prefix+=~~(Math.random()*1000000)
while(document.getElementById(prefix))
return prefix}
Tooltip.prototype.tip=function(){return(this.$tip=this.$tip||$(this.options.template))}
Tooltip.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find('.tooltip-arrow'))}
Tooltip.prototype.enable=function(){this.enabled=true}
Tooltip.prototype.disable=function(){this.enabled=false}
Tooltip.prototype.toggleEnabled=function(){this.enabled=!this.enabled}
Tooltip.prototype.toggle=function(e){var self=this
if(e){self=$(e.currentTarget).data('bs.'+this.type)
if(!self){self=new this.constructor(e.currentTarget,this.getDelegateOptions())
$(e.currentTarget).data('bs.'+this.type,self)}}
self.tip().hasClass('in')?self.leave(self):self.enter(self)}
Tooltip.prototype.destroy=function(){var that=this
clearTimeout(this.timeout)
this.hide(function(){that.$element.off('.'+that.type).removeData('bs.'+that.type)})}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.tooltip')
var options=typeof option=='object'&&option
if(!data&&option=='destroy')return
if(!data)$this.data('bs.tooltip',(data=new Tooltip(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.tooltip
$.fn.tooltip=Plugin
$.fn.tooltip.Constructor=Tooltip
$.fn.tooltip.noConflict=function(){$.fn.tooltip=old
return this}}(jQuery);+function($){'use strict';var Popover=function(element,options){this.init('popover',element,options)}
if(!$.fn.tooltip)throw new Error('Popover requires tooltip.js')
Popover.VERSION='3.3.2'
Popover.DEFAULTS=$.extend({},$.fn.tooltip.Constructor.DEFAULTS,{placement:'right',trigger:'click',content:'',template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'})
Popover.prototype=$.extend({},$.fn.tooltip.Constructor.prototype)
Popover.prototype.constructor=Popover
Popover.prototype.getDefaults=function(){return Popover.DEFAULTS}
Popover.prototype.setContent=function(){var $tip=this.tip()
var title=this.getTitle()
var content=this.getContent()
$tip.find('.popover-title')[this.options.html?'html':'text'](title)
$tip.find('.popover-content').children().detach().end()[this.options.html?(typeof content=='string'?'html':'append'):'text'](content)
$tip.removeClass('fade top bottom left right in')
if(!$tip.find('.popover-title').html())$tip.find('.popover-title').hide()}
Popover.prototype.hasContent=function(){return this.getTitle()||this.getContent()}
Popover.prototype.getContent=function(){var $e=this.$element
var o=this.options
return $e.attr('data-content')||(typeof o.content=='function'?o.content.call($e[0]):o.content)}
Popover.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find('.arrow'))}
Popover.prototype.tip=function(){if(!this.$tip)this.$tip=$(this.options.template)
return this.$tip}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.popover')
var options=typeof option=='object'&&option
if(!data&&option=='destroy')return
if(!data)$this.data('bs.popover',(data=new Popover(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.popover
$.fn.popover=Plugin
$.fn.popover.Constructor=Popover
$.fn.popover.noConflict=function(){$.fn.popover=old
return this}}(jQuery);+function($){'use strict';function ScrollSpy(element,options){var process=$.proxy(this.process,this)
this.$body=$('body')
this.$scrollElement=$(element).is('body')?$(window):$(element)
this.options=$.extend({},ScrollSpy.DEFAULTS,options)
this.selector=(this.options.target||'')+' .nav li > a'
this.offsets=[]
this.targets=[]
this.activeTarget=null
this.scrollHeight=0
this.$scrollElement.on('scroll.bs.scrollspy',process)
this.refresh()
this.process()}
ScrollSpy.VERSION='3.3.2'
ScrollSpy.DEFAULTS={offset:10}
ScrollSpy.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)}
ScrollSpy.prototype.refresh=function(){var offsetMethod='offset'
var offsetBase=0
if(!$.isWindow(this.$scrollElement[0])){offsetMethod='position'
offsetBase=this.$scrollElement.scrollTop()}
this.offsets=[]
this.targets=[]
this.scrollHeight=this.getScrollHeight()
var self=this
this.$body.find(this.selector).map(function(){var $el=$(this)
var href=$el.data('target')||$el.attr('href')
var $href=/^#./.test(href)&&$(href)
return($href&&$href.length&&$href.is(':visible')&&[[$href[offsetMethod]().top+offsetBase,href]])||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){self.offsets.push(this[0])
self.targets.push(this[1])})}
ScrollSpy.prototype.process=function(){var scrollTop=this.$scrollElement.scrollTop()+this.options.offset
var scrollHeight=this.getScrollHeight()
var maxScroll=this.options.offset+scrollHeight-this.$scrollElement.height()
var offsets=this.offsets
var targets=this.targets
var activeTarget=this.activeTarget
var i
if(this.scrollHeight!=scrollHeight){this.refresh()}
if(scrollTop>=maxScroll){return activeTarget!=(i=targets[targets.length-1])&&this.activate(i)}
if(activeTarget&&scrollTop<offsets[0]){this.activeTarget=null
return this.clear()}
for(i=offsets.length;i--;){activeTarget!=targets[i]&&scrollTop>=offsets[i]&&(!offsets[i+1]||scrollTop<=offsets[i+1])&&this.activate(targets[i])}}
ScrollSpy.prototype.activate=function(target){this.activeTarget=target
this.clear()
var selector=this.selector+'[data-target="'+target+'"],'+
this.selector+'[href="'+target+'"]'
var active=$(selector).parents('li').addClass('active')
if(active.parent('.dropdown-menu').length){active=active.closest('li.dropdown').addClass('active')}
active.trigger('activate.bs.scrollspy')}
ScrollSpy.prototype.clear=function(){$(this.selector).parentsUntil(this.options.target,'.active').removeClass('active')}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.scrollspy')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.scrollspy',(data=new ScrollSpy(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.scrollspy
$.fn.scrollspy=Plugin
$.fn.scrollspy.Constructor=ScrollSpy
$.fn.scrollspy.noConflict=function(){$.fn.scrollspy=old
return this}
$(window).on('load.bs.scrollspy.data-api',function(){$('[data-spy="scroll"]').each(function(){var $spy=$(this)
Plugin.call($spy,$spy.data())})})}(jQuery);+function($){'use strict';var Tab=function(element){this.element=$(element)}
Tab.VERSION='3.3.2'
Tab.TRANSITION_DURATION=150
Tab.prototype.show=function(){var $this=this.element
var $ul=$this.closest('ul:not(.dropdown-menu)')
var selector=$this.data('target')
if(!selector){selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')}
if($this.parent('li').hasClass('active'))return
var $previous=$ul.find('.active:last a')
var hideEvent=$.Event('hide.bs.tab',{relatedTarget:$this[0]})
var showEvent=$.Event('show.bs.tab',{relatedTarget:$previous[0]})
$previous.trigger(hideEvent)
$this.trigger(showEvent)
if(showEvent.isDefaultPrevented()||hideEvent.isDefaultPrevented())return
var $target=$(selector)
this.activate($this.closest('li'),$ul)
this.activate($target,$target.parent(),function(){$previous.trigger({type:'hidden.bs.tab',relatedTarget:$this[0]})
$this.trigger({type:'shown.bs.tab',relatedTarget:$previous[0]})})}
Tab.prototype.activate=function(element,container,callback){var $active=container.find('> .active')
var transition=callback&&$.support.transition&&(($active.length&&$active.hasClass('fade'))||!!container.find('> .fade').length)
function next(){$active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded',false)
element.addClass('active').find('[data-toggle="tab"]').attr('aria-expanded',true)
if(transition){element[0].offsetWidth
element.addClass('in')}else{element.removeClass('fade')}
if(element.parent('.dropdown-menu')){element.closest('li.dropdown').addClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded',true)}
callback&&callback()}
$active.length&&transition?$active.one('bsTransitionEnd',next).emulateTransitionEnd(Tab.TRANSITION_DURATION):next()
$active.removeClass('in')}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.tab')
if(!data)$this.data('bs.tab',(data=new Tab(this)))
if(typeof option=='string')data[option]()})}
var old=$.fn.tab
$.fn.tab=Plugin
$.fn.tab.Constructor=Tab
$.fn.tab.noConflict=function(){$.fn.tab=old
return this}
var clickHandler=function(e){e.preventDefault()
Plugin.call($(this),'show')}
$(document).on('click.bs.tab.data-api','[data-toggle="tab"]',clickHandler).on('click.bs.tab.data-api','[data-toggle="pill"]',clickHandler)}(jQuery);+function($){'use strict';var Affix=function(element,options){this.options=$.extend({},Affix.DEFAULTS,options)
this.$target=$(this.options.target).on('scroll.bs.affix.data-api',$.proxy(this.checkPosition,this)).on('click.bs.affix.data-api',$.proxy(this.checkPositionWithEventLoop,this))
this.$element=$(element)
this.affixed=this.unpin=this.pinnedOffset=null
this.checkPosition()}
Affix.VERSION='3.3.2'
Affix.RESET='affix affix-top affix-bottom'
Affix.DEFAULTS={offset:0,target:window}
Affix.prototype.getState=function(scrollHeight,height,offsetTop,offsetBottom){var scrollTop=this.$target.scrollTop()
var position=this.$element.offset()
var targetHeight=this.$target.height()
if(offsetTop!=null&&this.affixed=='top')return scrollTop<offsetTop?'top':false
if(this.affixed=='bottom'){if(offsetTop!=null)return(scrollTop+this.unpin<=position.top)?false:'bottom'
return(scrollTop+targetHeight<=scrollHeight-offsetBottom)?false:'bottom'}
var initializing=this.affixed==null
var colliderTop=initializing?scrollTop:position.top
var colliderHeight=initializing?targetHeight:height
if(offsetTop!=null&&scrollTop<=offsetTop)return'top'
if(offsetBottom!=null&&(colliderTop+colliderHeight>=scrollHeight-offsetBottom))return'bottom'
return false}
Affix.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset
this.$element.removeClass(Affix.RESET).addClass('affix')
var scrollTop=this.$target.scrollTop()
var position=this.$element.offset()
return(this.pinnedOffset=position.top-scrollTop)}
Affix.prototype.checkPositionWithEventLoop=function(){setTimeout($.proxy(this.checkPosition,this),1)}
Affix.prototype.checkPosition=function(){if(!this.$element.is(':visible'))return
var height=this.$element.height()
var offset=this.options.offset
var offsetTop=offset.top
var offsetBottom=offset.bottom
var scrollHeight=$('body').height()
if(typeof offset!='object')offsetBottom=offsetTop=offset
if(typeof offsetTop=='function')offsetTop=offset.top(this.$element)
if(typeof offsetBottom=='function')offsetBottom=offset.bottom(this.$element)
var affix=this.getState(scrollHeight,height,offsetTop,offsetBottom)
if(this.affixed!=affix){if(this.unpin!=null)this.$element.css('top','')
var affixType='affix'+(affix?'-'+affix:'')
var e=$.Event(affixType+'.bs.affix')
this.$element.trigger(e)
if(e.isDefaultPrevented())return
this.affixed=affix
this.unpin=affix=='bottom'?this.getPinnedOffset():null
this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace('affix','affixed')+'.bs.affix')}
if(affix=='bottom'){this.$element.offset({top:scrollHeight-height-offsetBottom})}}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.affix')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.affix',(data=new Affix(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.affix
$.fn.affix=Plugin
$.fn.affix.Constructor=Affix
$.fn.affix.noConflict=function(){$.fn.affix=old
return this}
$(window).on('load',function(){$('[data-spy="affix"]').each(function(){var $spy=$(this)
var data=$spy.data()
data.offset=data.offset||{}
if(data.offsetBottom!=null)data.offset.bottom=data.offsetBottom
if(data.offsetTop!=null)data.offset.top=data.offsetTop
Plugin.call($spy,data)})})}(jQuery);(function($){"use strict";$(document).ready(function(){initAffix();initLightBox();initBtnFile();clickEvents();});function initAffix(){$('#affix-box').affix({offset:{top:function(){return(this.top=$('#affix-box').offset().top)},bottom:function(){return(this.bottom=$('.main-footer').outerHeight(true)+$('#map-area').outerHeight(true)+120)}}});}
function initLightBox(){$('.image-popup').magnificPopup({type:'image',closeOnContentClick:true,closeBtnInside:false,fixedContentPos:true,mainClass:'mfp-no-margins mfp-with-zoom',image:{verticalFit:true},zoom:{enabled:true,duration:300}});$('.galery-popup-area').magnificPopup({delegate:'a.galery-popup',type:'image',tLoading:'Loading image #%curr%...',mainClass:'mfp-img-mobile',gallery:{enabled:true,navigateByImgClick:true,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',titleSrc:function(item){return item.el.attr('title');}}});$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({disableOn:700,type:'iframe',mainClass:'mfp-fade',removalDelay:160,preloader:false,fixedContentPos:false});}
function initBtnFile(){$(document).on('change','.btn-file :file',function(){var input=$(this),numFiles=input.get(0).files?input.get(0).files.length:1,label=input.val().replace(/\\/g,'/').replace(/.*\//,'');input.trigger('fileselect',[numFiles,label]);});$('.btn-file :file').on('fileselect',function(event,numFiles,label){var input=$(this).parents('.input-group').find(':text'),log=numFiles>1?numFiles+' files selected':label;if(input.length){input.val(log);}else{if(log){console.log(log);}}});}
function clickEvents(){$('.link-innerpage').click(function(e){var target=this.hash,$target=$(target);$('html, body').stop().animate({'scrollTop':$target.offset().top},1500,'easeInOutExpo',function(){});return false;});$('.btn-nav-toogle').click(function(){$('body, .mobile-nav-block').toggleClass('open-mobile-nav');});}})(jQuery);if(typeof jQuery==='undefined'&&django&&django.jQuery){jQuery=django.jQuery;}
if(typeof redactor_custom_options==='undefined'){redactor_custom_options={}}
(function($){$(document).ready(function(){$(document).on('redactor:init','textarea.redactor-box',function(){var redactor_options=$.extend({},$(this).data('redactor-options'),redactor_custom_options);if(typeof redactor_options.imageUploadErrorCallback==='undefined'){redactor_options.imageUploadErrorCallback=function(json){alert(json.error);}}
$(this).redactor(redactor_options);});$(document).trigger('redactorWidgetReady');$('textarea.redactor-box:not([id*="__prefix__"])').each(function(){$(this).trigger('redactor:init');});$(document).on('click','.add-row',function(){var add_row=$(this);var row=add_row.parents('.inline-related').find('tr.form-row:not(.empty-form)').last();if(row.length===0){row=add_row.parents('.inline-group').find('.last-related:not(.empty-form)').last();}
row.find('textarea.redactor-box').trigger('redactor:init');});});})(jQuery);(function($)
{'use strict';if(!Function.prototype.bind)
{Function.prototype.bind=function(scope)
{var fn=this;return function()
{return fn.apply(scope);};};}
var uuid=0;$.fn.redactor=function(options)
{var val=[];var args=Array.prototype.slice.call(arguments,1);if(typeof options==='string')
{this.each(function()
{var instance=$.data(this,'redactor');var func;if(options.search(/\./)!='-1')
{func=options.split('.');if(typeof instance[func[0]]!='undefined')
{func=instance[func[0]][func[1]];}}
else
{func=instance[options];}
if(typeof instance!=='undefined'&&$.isFunction(func))
{var methodVal=func.apply(instance,args);if(methodVal!==undefined&&methodVal!==instance)
{val.push(methodVal);}}
else
{$.error('No such method "'+options+'" for Redactor');}});}
else
{this.each(function()
{$.data(this,'redactor',{});$.data(this,'redactor',Redactor(this,options));});}
if(val.length===0)return this;else if(val.length===1)return val[0];else return val;};function Redactor(el,options)
{return new Redactor.prototype.init(el,options);}
$.Redactor=Redactor;$.Redactor.VERSION='10.2.2';$.Redactor.modules=['alignment','autosave','block','buffer','build','button','caret','clean','code','core','dropdown','file','focus','image','indent','inline','insert','keydown','keyup','lang','line','link','linkify','list','modal','observe','paragraphize','paste','placeholder','progress','selection','shortcuts','tabifier','tidy','toolbar','upload','utils'];$.Redactor.opts={lang:'en',direction:'ltr',plugins:false,focus:false,focusEnd:false,placeholder:false,visual:true,tabindex:false,minHeight:false,maxHeight:false,linebreaks:false,replaceDivs:true,paragraphize:true,cleanStyleOnEnter:false,enterKey:true,cleanOnPaste:true,cleanSpaces:true,pastePlainText:false,autosave:false,autosaveName:false,autosaveInterval:60,autosaveOnChange:false,autosaveFields:false,linkTooltip:true,linkProtocol:'http',linkNofollow:false,linkSize:50,imageEditable:true,imageLink:true,imagePosition:true,imageFloatMargin:'10px',imageResizable:true,imageUpload:null,imageUploadParam:'file',uploadImageField:false,dragImageUpload:true,fileUpload:null,fileUploadParam:'file',dragFileUpload:true,s3:false,convertLinks:true,convertUrlLinks:true,convertImageLinks:true,convertVideoLinks:true,preSpaces:4,tabAsSpaces:false,tabKey:true,scrollTarget:false,toolbar:true,toolbarFixed:true,toolbarFixedTarget:document,toolbarFixedTopOffset:0,toolbarExternal:false,toolbarOverflow:false,source:true,buttons:['html','formatting','bold','italic','deleted','unorderedlist','orderedlist','outdent','indent','image','file','link','alignment','horizontalrule'],buttonsHide:[],buttonsHideOnMobile:[],formatting:['p','blockquote','pre','h1','h2','h3','h4','h5','h6'],formattingAdd:false,tabifier:true,deniedTags:['script','style'],allowedTags:false,paragraphizeBlocks:['table','div','pre','form','ul','ol','h1','h2','h3','h4','h5','h6','dl','blockquote','figcaption','address','section','header','footer','aside','article','object','style','script','iframe','select','input','textarea','button','option','map','area','math','hr','fieldset','legend','hgroup','nav','figure','details','menu','summary','p'],removeComments:false,replaceTags:[['strike','del'],['b','strong']],replaceStyles:[['font-weight:\\s?bold',"strong"],['font-style:\\s?italic',"em"],['text-decoration:\\s?underline',"u"],['text-decoration:\\s?line-through','del']],removeDataAttr:false,removeAttr:false,allowedAttr:false,removeWithoutAttr:['span'],removeEmpty:['p'],activeButtons:['deleted','italic','bold','underline','unorderedlist','orderedlist','alignleft','aligncenter','alignright','justify'],activeButtonsStates:{b:'bold',strong:'bold',i:'italic',em:'italic',del:'deleted',strike:'deleted',ul:'unorderedlist',ol:'orderedlist',u:'underline'},shortcuts:{'ctrl+shift+m, meta+shift+m':{func:'inline.removeFormat'},'ctrl+b, meta+b':{func:'inline.format',params:['bold']},'ctrl+i, meta+i':{func:'inline.format',params:['italic']},'ctrl+h, meta+h':{func:'inline.format',params:['superscript']},'ctrl+l, meta+l':{func:'inline.format',params:['subscript']},'ctrl+k, meta+k':{func:'link.show'},'ctrl+shift+7':{func:'list.toggle',params:['orderedlist']},'ctrl+shift+8':{func:'list.toggle',params:['unorderedlist']}},shortcutsAdd:false,buffer:[],rebuffer:[],emptyHtml:'<p>&#x200b;</p>',invisibleSpace:'&#x200b;',imageTypes:['image/png','image/jpeg','image/gif'],indentValue:20,verifiedTags:['a','img','b','strong','sub','sup','i','em','u','small','strike','del','cite','ul','ol','li'],inlineTags:['strong','b','u','em','i','code','del','ins','samp','kbd','sup','sub','mark','var','cite','small'],alignmentTags:['P','H1','H2','H3','H4','H5','H6','DL','DT','DD','DIV','TD','BLOCKQUOTE','OUTPUT','FIGCAPTION','ADDRESS','SECTION','HEADER','FOOTER','ASIDE','ARTICLE'],blockLevelElements:['PRE','UL','OL','LI'],highContrast:false,observe:{dropdowns:[]},langs:{en:{html:'HTML',video:'Insert Video',image:'Insert Image',table:'Table',link:'Link',link_insert:'Insert link',link_edit:'Edit link',unlink:'Unlink',formatting:'Formatting',paragraph:'Normal text',quote:'Quote',code:'Code',header1:'Header 1',header2:'Header 2',header3:'Header 3',header4:'Header 4',header5:'Header 5',bold:'Bold',italic:'Italic',fontcolor:'Font Color',backcolor:'Back Color',unorderedlist:'Unordered List',orderedlist:'Ordered List',outdent:'Outdent',indent:'Indent',cancel:'Cancel',insert:'Insert',save:'Save',_delete:'Delete',insert_table:'Insert Table',insert_row_above:'Add Row Above',insert_row_below:'Add Row Below',insert_column_left:'Add Column Left',insert_column_right:'Add Column Right',delete_column:'Delete Column',delete_row:'Delete Row',delete_table:'Delete Table',rows:'Rows',columns:'Columns',add_head:'Add Head',delete_head:'Delete Head',title:'Title',image_position:'Position',none:'None',left:'Left',right:'Right',center:'Center',image_web_link:'Image Web Link',text:'Text',mailto:'Email',web:'URL',video_html_code:'Video Embed Code or Youtube/Vimeo Link',file:'Insert File',upload:'Upload',download:'Download',choose:'Choose',or_choose:'Or choose',drop_file_here:'Drop file here',align_left:'Align text to the left',align_center:'Center text',align_right:'Align text to the right',align_justify:'Justify text',horizontalrule:'Insert Horizontal Rule',deleted:'Deleted',anchor:'Anchor',link_new_tab:'Open link in new tab',underline:'Underline',alignment:'Alignment',filename:'Name (optional)',edit:'Edit',upload_label:'Drop file here or '}},linkify:{regexps:{youtube:/https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube\.com\S*[^\w\-\s])([\w\-]{11})(?=[^\w\-]|$)(?![?=&+%\w.\-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/ig,vimeo:/https?:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/,image:/((https?|www)[^\s]+\.)(jpe?g|png|gif)(\?[^\s-]+)?/ig,url:/(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/ig,}},codemirror:false};Redactor.fn=$.Redactor.prototype={keyCode:{BACKSPACE:8,DELETE:46,UP:38,DOWN:40,ENTER:13,SPACE:32,ESC:27,TAB:9,CTRL:17,META:91,SHIFT:16,ALT:18,RIGHT:39,LEFT:37,LEFT_WIN:91},init:function(el,options)
{this.$element=$(el);this.uuid=uuid++;this.rtePaste=false;this.$pasteBox=false;this.loadOptions(options);this.loadModules();this.formatting={};$.merge(this.opts.blockLevelElements,this.opts.alignmentTags);this.reIsBlock=new RegExp('^('+this.opts.blockLevelElements.join('|')+')$','i');this.tidy.setupAllowed();if(this.opts.deniedTags!==false)
{var tags=['html','head','link','body','meta','applet'];for(var i=0;i<tags.length;i++)
{this.opts.deniedTags.push(tags[i]);}}
this.lang.load();$.extend(this.opts.shortcuts,this.opts.shortcutsAdd);this.core.setCallback('start');this.start=true;this.build.run();},loadOptions:function(options)
{this.opts=$.extend({},$.extend(true,{},$.Redactor.opts),this.$element.data(),options);},getModuleMethods:function(object)
{return Object.getOwnPropertyNames(object).filter(function(property)
{return typeof object[property]=='function';});},loadModules:function()
{var len=$.Redactor.modules.length;for(var i=0;i<len;i++)
{this.bindModuleMethods($.Redactor.modules[i]);}},bindModuleMethods:function(module)
{if(typeof this[module]=='undefined')return;this[module]=this[module]();var methods=this.getModuleMethods(this[module]);var len=methods.length;for(var z=0;z<len;z++)
{this[module][methods[z]]=this[module][methods[z]].bind(this);}},alignment:function()
{return{left:function()
{this.alignment.set('');},right:function()
{this.alignment.set('right');},center:function()
{this.alignment.set('center');},justify:function()
{this.alignment.set('justify');},set:function(type)
{if(!this.utils.browser('msie'))this.$editor.focus();this.buffer.set();this.selection.save();this.alignment.blocks=this.selection.getBlocks();this.alignment.type=type;if(this.alignment.isLinebreaksOrNoBlocks())
{this.alignment.setText();}
else
{this.alignment.setBlocks();}
this.selection.restore();this.code.sync();},setText:function()
{var wrapper=this.selection.wrap('div');$(wrapper).attr('data-tagblock','redactor').css('text-align',this.alignment.type);},setBlocks:function()
{$.each(this.alignment.blocks,$.proxy(function(i,el)
{var $el=this.utils.getAlignmentElement(el);if(!$el)return;if(this.alignment.isNeedReplaceElement($el))
{this.alignment.replaceElement($el);}
else
{this.alignment.alignElement($el);}},this));},isLinebreaksOrNoBlocks:function()
{return(this.opts.linebreaks&&this.alignment.blocks[0]===false);},isNeedReplaceElement:function($el)
{return(this.alignment.type===''&&typeof($el.data('tagblock'))!=='undefined');},replaceElement:function($el)
{$el.replaceWith($el.html());},alignElement:function($el)
{$el.css('text-align',this.alignment.type);this.utils.removeEmptyAttr($el,'style');}};},autosave:function()
{return{html:false,enable:function()
{if(!this.opts.autosave)return;this.autosave.name=(this.opts.autosaveName)?this.opts.autosaveName:this.$textarea.attr('name');if(this.opts.autosaveOnChange)return;this.autosaveInterval=setInterval(this.autosave.load,this.opts.autosaveInterval*1000);},onChange:function()
{if(!this.opts.autosaveOnChange)return;this.autosave.load();},load:function()
{this.autosave.source=this.code.get();if(this.autosave.html===this.autosave.source)return;var data={};data['name']=this.autosave.name;data[this.autosave.name]=this.autosave.source;data=this.autosave.getHiddenFields(data);var jsxhr=$.ajax({url:this.opts.autosave,type:'post',data:data});jsxhr.done(this.autosave.success);},getHiddenFields:function(data)
{if(this.opts.autosaveFields===false||typeof this.opts.autosaveFields!=='object')
{return data;}
$.each(this.opts.autosaveFields,$.proxy(function(k,v)
{if(v!==null&&v.toString().indexOf('#')===0)v=$(v).val();data[k]=v;},this));return data;},success:function(data)
{var json;try
{json=$.parseJSON(data);}
catch(e)
{json=data;}
var callbackName=(typeof json.error=='undefined')?'autosave':'autosaveError';this.core.setCallback(callbackName,this.autosave.name,json);this.autosave.html=this.autosave.source;},disable:function()
{clearInterval(this.autosaveInterval);}};},block:function()
{return{formatting:function(name)
{this.block.clearStyle=false;var type,value;if(typeof this.formatting[name].data!='undefined')type='data';else if(typeof this.formatting[name].attr!='undefined')type='attr';else if(typeof this.formatting[name]['class']!='undefined')type='class';if(typeof this.formatting[name].clear!='undefined')
{this.block.clearStyle=true;}
if(type)value=this.formatting[name][type];this.block.format(this.formatting[name].tag,type,value);},format:function(tag,type,value)
{if(tag=='quote')tag='blockquote';var formatTags=['p','pre','blockquote','h1','h2','h3','h4','h5','h6'];if($.inArray(tag,formatTags)==-1)return;this.block.isRemoveInline=(tag=='pre'||tag.search(/h[1-6]/i)!=-1);if(!this.utils.browser('msie'))this.$editor.focus();var html=$.trim(this.$editor.html());this.block.isEmpty=this.utils.isEmpty(html);if(this.utils.browser('mozilla')&&!this.focus.isFocused())
{if(this.block.isEmpty)
{var $first;if(!this.opts.linebreaks)
{$first=this.$editor.children().first();this.caret.setEnd($first);}}}
this.block.blocks=this.selection.getBlocks();this.block.blocksSize=this.block.blocks.length;this.block.type=type;this.block.value=value;this.buffer.set();this.selection.save();this.block.set(tag);this.selection.restore();this.code.sync();this.observe.load();},set:function(tag)
{this.selection.get();this.block.containerTag=this.range.commonAncestorContainer.tagName;if(this.range.collapsed)
{this.block.setCollapsed(tag);}
else
{this.block.setMultiple(tag);}},setCollapsed:function(tag)
{if(this.opts.linebreaks&&this.block.isEmpty&&tag!='p')
{var node=document.createElement(tag);this.$editor.html(node);this.caret.setEnd(node);return;}
var block=this.block.blocks[0];if(block===false)return;if(block.tagName=='LI')
{if(tag!='blockquote')return;this.block.formatListToBlockquote();return;}
var isContainerTable=(this.block.containerTag=='TD'||this.block.containerTag=='TH');if(isContainerTable&&!this.opts.linebreaks)
{document.execCommand('formatblock',false,'<'+tag+'>');block=this.selection.getBlock();this.block.toggle($(block));}
else if(block.tagName.toLowerCase()!=tag)
{if(this.opts.linebreaks&&tag=='p')
{$(block).append('<br>');this.utils.replaceWithContents(block);}
else
{var $formatted=this.utils.replaceToTag(block,tag);this.block.toggle($formatted);if(tag!='p'&&tag!='blockquote')$formatted.find('img').remove();if(this.block.isRemoveInline)this.utils.removeInlineTags($formatted);if(tag=='p'||this.block.headTag)$formatted.find('p').contents().unwrap();this.block.formatTableWrapping($formatted);}}
else if(tag=='blockquote'&&block.tagName.toLowerCase()==tag)
{if(this.opts.linebreaks)
{$(block).append('<br>');this.utils.replaceWithContents(block);}
else
{var $el=this.utils.replaceToTag(block,'p');this.block.toggle($el);}}
else if(block.tagName.toLowerCase()==tag)
{this.block.toggle($(block));}
if(typeof this.block.type=='undefined'&&typeof this.block.value=='undefined')
{$(block).removeAttr('class').removeAttr('style');}},setMultiple:function(tag)
{var block=this.block.blocks[0];var isContainerTable=(this.block.containerTag=='TD'||this.block.containerTag=='TH');if(block!==false&&this.block.blocksSize===1)
{if(block.tagName.toLowerCase()==tag&&tag=='blockquote')
{if(this.opts.linebreaks)
{$(block).append('<br>');this.utils.replaceWithContents(block);}
else
{var $el=this.utils.replaceToTag(block,'p');this.block.toggle($el);}}
else if(block.tagName=='LI')
{if(tag!='blockquote')return;this.block.formatListToBlockquote();}
else if(this.block.containerTag=='BLOCKQUOTE')
{this.block.formatBlockquote(tag);}
else if(this.opts.linebreaks&&((isContainerTable)||(this.range.commonAncestorContainer!=block)))
{this.block.formatWrap(tag);}
else
{if(this.opts.linebreaks&&tag=='p')
{$(block).prepend('<br>').append('<br>');this.utils.replaceWithContents(block);}
else if(block.tagName==='TD')
{this.block.formatWrap(tag);}
else
{var $formatted=this.utils.replaceToTag(block,tag);this.block.toggle($formatted);if(this.block.isRemoveInline)this.utils.removeInlineTags($formatted);if(tag=='p'||this.block.headTag)$formatted.find('p').contents().unwrap();}}}
else
{if(this.opts.linebreaks||tag!='p')
{if(tag=='blockquote')
{var count=0;for(var i=0;i<this.block.blocksSize;i++)
{if(this.block.blocks[i].tagName=='BLOCKQUOTE')count++;}
if(count==this.block.blocksSize)
{$.each(this.block.blocks,$.proxy(function(i,s)
{var $formatted=false;if(this.opts.linebreaks)
{$(s).prepend('<br>').append('<br>');$formatted=this.utils.replaceWithContents(s);}
else
{$formatted=this.utils.replaceToTag(s,'p');}
if($formatted&&typeof this.block.type=='undefined'&&typeof this.block.value=='undefined')
{$formatted.removeAttr('class').removeAttr('style');}},this));return;}}
this.block.formatWrap(tag);}
else
{var classSize=0;var toggleType=false;if(this.block.type=='class')
{toggleType='toggle';classSize=$(this.block.blocks).filter('.'+this.block.value).length;if(this.block.blocksSize==classSize)toggleType='toggle';else if(this.block.blocksSize>classSize)toggleType='set';else if(classSize===0)toggleType='set';}
var exceptTags=['ul','ol','li','td','th','dl','dt','dd'];$.each(this.block.blocks,$.proxy(function(i,s)
{if($.inArray(s.tagName.toLowerCase(),exceptTags)!=-1)return;var $formatted=this.utils.replaceToTag(s,tag);if(toggleType)
{if(toggleType=='toggle')this.block.toggle($formatted);else if(toggleType=='remove')this.block.remove($formatted);else if(toggleType=='set')this.block.setForce($formatted);}
else this.block.toggle($formatted);if(tag!='p'&&tag!='blockquote')$formatted.find('img').remove();if(this.block.isRemoveInline)this.utils.removeInlineTags($formatted);if(tag=='p'||this.block.headTag)$formatted.find('p').contents().unwrap();if(typeof this.block.type=='undefined'&&typeof this.block.value=='undefined')
{$formatted.removeAttr('class').removeAttr('style');}},this));}}},setForce:function($el)
{if(this.block.clearStyle)
{$el.removeAttr('class').removeAttr('style');}
if(this.block.type=='class')
{$el.addClass(this.block.value);return;}
else if(this.block.type=='attr'||this.block.type=='data')
{$el.attr(this.block.value.name,this.block.value.value);return;}},toggle:function($el)
{if(this.block.clearStyle)
{$el.removeAttr('class').removeAttr('style');}
if(this.block.type=='class')
{$el.toggleClass(this.block.value);return;}
else if(this.block.type=='attr'||this.block.type=='data')
{if($el.attr(this.block.value.name)==this.block.value.value)
{$el.removeAttr(this.block.value.name);}
else
{$el.attr(this.block.value.name,this.block.value.value);}
return;}
else
{$el.removeAttr('style class');return;}},remove:function($el)
{$el.removeClass(this.block.value);},formatListToBlockquote:function()
{var block=$(this.block.blocks[0]).closest('ul, ol',this.$editor[0]);$(block).find('ul, ol').contents().unwrap();$(block).find('li').append($('<br>')).contents().unwrap();var $el=this.utils.replaceToTag(block,'blockquote');this.block.toggle($el);},formatBlockquote:function(tag)
{document.execCommand('outdent');document.execCommand('formatblock',false,tag);this.clean.clearUnverified();this.$editor.find('p:empty').remove();var formatted=this.selection.getBlock();if(tag!='p')
{$(formatted).find('img').remove();}
if(!this.opts.linebreaks)
{this.block.toggle($(formatted));}
this.$editor.find('ul, ol, tr, blockquote, p').each($.proxy(this.utils.removeEmpty,this));if(this.opts.linebreaks&&tag=='p')
{this.utils.replaceWithContents(formatted);}},formatWrap:function(tag)
{if(this.block.containerTag=='UL'||this.block.containerTag=='OL')
{if(tag=='blockquote')
{this.block.formatListToBlockquote();}
else
{return;}}
var formatted=this.selection.wrap(tag);if(formatted===false)return;var $formatted=$(formatted);this.block.formatTableWrapping($formatted);var $elements=$formatted.find(this.opts.blockLevelElements.join(',')+', td, table, thead, tbody, tfoot, th, tr');$elements.contents().unwrap();if(tag!='p'&&tag!='blockquote')$formatted.find('img').remove();$.each(this.block.blocks,$.proxy(this.utils.removeEmpty,this));$formatted.append(this.selection.getMarker(2));if(!this.opts.linebreaks)
{this.block.toggle($formatted);}
this.$editor.find('ul, ol, tr, blockquote, p').each($.proxy(this.utils.removeEmpty,this));$formatted.find('blockquote:empty').remove();if(this.block.isRemoveInline)
{this.utils.removeInlineTags($formatted);}
if(this.opts.linebreaks&&tag=='p')
{this.utils.replaceWithContents($formatted);}
if(this.opts.linebreaks)
{var $next=$formatted.next().next();if($next.size()!=0&&$next[0].tagName==='BR')
{$next.remove();}}},formatTableWrapping:function($formatted)
{if($formatted.closest('table',this.$editor[0]).length===0)return;if($formatted.closest('tr',this.$editor[0]).length===0)$formatted.wrap('<tr>');if($formatted.closest('td',this.$editor[0]).length===0&&$formatted.closest('th').length===0)
{$formatted.wrap('<td>');}},removeData:function(name,value)
{var blocks=this.selection.getBlocks();$(blocks).removeAttr('data-'+name);this.code.sync();},setData:function(name,value)
{var blocks=this.selection.getBlocks();$(blocks).attr('data-'+name,value);this.code.sync();},toggleData:function(name,value)
{var blocks=this.selection.getBlocks();$.each(blocks,function()
{if($(this).attr('data-'+name))
{$(this).removeAttr('data-'+name);}
else
{$(this).attr('data-'+name,value);}});},removeAttr:function(attr,value)
{var blocks=this.selection.getBlocks();$(blocks).removeAttr(attr);this.code.sync();},setAttr:function(attr,value)
{var blocks=this.selection.getBlocks();$(blocks).attr(attr,value);this.code.sync();},toggleAttr:function(attr,value)
{var blocks=this.selection.getBlocks();$.each(blocks,function()
{if($(this).attr(name))
{$(this).removeAttr(name);}
else
{$(this).attr(name,value);}});},removeClass:function(className)
{var blocks=this.selection.getBlocks();$(blocks).removeClass(className);this.utils.removeEmptyAttr(blocks,'class');this.code.sync();},setClass:function(className)
{var blocks=this.selection.getBlocks();$(blocks).addClass(className);this.code.sync();},toggleClass:function(className)
{var blocks=this.selection.getBlocks();$(blocks).toggleClass(className);this.code.sync();}};},buffer:function()
{return{set:function(type)
{if(typeof type=='undefined'||type=='undo')
{this.buffer.setUndo();}
else
{this.buffer.setRedo();}},setUndo:function()
{this.selection.save();this.opts.buffer.push(this.$editor.html());this.selection.restore();},setRedo:function()
{this.selection.save();this.opts.rebuffer.push(this.$editor.html());this.selection.restore();},getUndo:function()
{this.$editor.html(this.opts.buffer.pop());},getRedo:function()
{this.$editor.html(this.opts.rebuffer.pop());},add:function()
{this.opts.buffer.push(this.$editor.html());},undo:function()
{if(this.opts.buffer.length===0)return;this.buffer.set('redo');this.buffer.getUndo();this.selection.restore();setTimeout($.proxy(this.observe.load,this),50);},redo:function()
{if(this.opts.rebuffer.length===0)return;this.buffer.set('undo');this.buffer.getRedo();this.selection.restore();setTimeout($.proxy(this.observe.load,this),50);}};},build:function()
{return{run:function()
{this.build.createContainerBox();this.build.loadContent();this.build.loadEditor();this.build.enableEditor();this.build.setCodeAndCall();},isTextarea:function()
{return(this.$element[0].tagName==='TEXTAREA');},createContainerBox:function()
{this.$box=$('<div class="redactor-box" role="application" />');},createTextarea:function()
{this.$textarea=$('<textarea />').attr('name',this.build.getTextareaName());},getTextareaName:function()
{return((typeof(name)=='undefined'))?'content-'+this.uuid:this.$element.attr('id');},loadContent:function()
{var func=(this.build.isTextarea())?'val':'html';this.content=$.trim(this.$element[func]());},enableEditor:function()
{this.$editor.attr({'contenteditable':true,'dir':this.opts.direction});},loadEditor:function()
{var func=(this.build.isTextarea())?'fromTextarea':'fromElement';this.build[func]();},fromTextarea:function()
{this.$editor=$('<div />');this.$textarea=this.$element;this.$box.insertAfter(this.$element).append(this.$editor).append(this.$element);this.$editor.addClass('redactor-editor');this.$element.hide();},fromElement:function()
{this.$editor=this.$element;this.build.createTextarea();this.$box.insertAfter(this.$editor).append(this.$editor).append(this.$textarea);this.$editor.addClass('redactor-editor');this.$textarea.hide();},setCodeAndCall:function()
{this.code.set(this.content);this.build.setOptions();this.build.callEditor();if(this.opts.visual)return;setTimeout($.proxy(this.code.showCode,this),200);},callEditor:function()
{this.build.disableMozillaEditing();this.build.disableIeLinks();this.build.setEvents();this.build.setHelpers();if(this.opts.toolbar)
{this.opts.toolbar=this.toolbar.init();this.toolbar.build();}
this.modal.loadTemplates();this.build.plugins();setTimeout($.proxy(this.observe.load,this),4);this.core.setCallback('init');},setOptions:function()
{$(this.$textarea).attr('dir',this.opts.direction);if(this.opts.linebreaks)this.$editor.addClass('redactor-linebreaks');if(this.opts.tabindex)this.$editor.attr('tabindex',this.opts.tabindex);if(this.opts.minHeight)this.$editor.css('minHeight',this.opts.minHeight);if(this.opts.maxHeight)this.$editor.css('maxHeight',this.opts.maxHeight);},setEventDropUpload:function(e)
{e.preventDefault();if(!this.opts.dragImageUpload||!this.opts.dragFileUpload)return;var files=e.dataTransfer.files;this.upload.directUpload(files[0],e);},setEventDrop:function(e)
{this.code.sync();setTimeout(this.clean.clearUnverified,1);this.core.setCallback('drop',e);},setEvents:function()
{this.$editor.on('drop.redactor',$.proxy(function(e)
{e=e.originalEvent||e;if(window.FormData===undefined||!e.dataTransfer)return true;if(e.dataTransfer.files.length===0)
{return this.build.setEventDrop(e);}
else
{this.build.setEventDropUpload(e);}
setTimeout(this.clean.clearUnverified,1);this.core.setCallback('drop',e);},this));this.$editor.on('click.redactor',$.proxy(function(e)
{var event=this.core.getEvent();var type=(event=='click'||event=='arrow')?false:'click';this.core.addEvent(type);this.utils.disableSelectAll();this.core.setCallback('click',e);},this));this.$editor.on('paste.redactor',$.proxy(this.paste.init,this));this.$editor.on('cut.redactor',$.proxy(this.code.sync,this));this.$editor.on('keydown.redactor',$.proxy(this.keydown.init,this));this.$editor.on('keyup.redactor',$.proxy(this.keyup.init,this));if($.isFunction(this.opts.codeKeydownCallback))
{this.$textarea.on('keydown.redactor-textarea',$.proxy(this.opts.codeKeydownCallback,this));}
if($.isFunction(this.opts.codeKeyupCallback))
{this.$textarea.on('keyup.redactor-textarea',$.proxy(this.opts.codeKeyupCallback,this));}
if($.isFunction(this.opts.focusCallback))
{this.$editor.on('focus.redactor',$.proxy(this.opts.focusCallback,this));}
$(document).on('mousedown.redactor.'+this.uuid,$.proxy(function(e){this.blurClickedElement=e.target;},this));this.$editor.on('blur.redactor',$.proxy(function(e)
{if(this.start)return;if(this.rtePaste)return;if(!this.build.isBlured())return;this.utils.disableSelectAll();if($.isFunction(this.opts.blurCallback))this.core.setCallback('blur',e);},this));},isBlured:function()
{if(this.blurClickedElement===true)return true;var $el=$(this.blurClickedElement);return(!$el.hasClass('redactor-toolbar, redactor-dropdown')&&!$el.is('#redactor-modal')&&$el.parents('.redactor-toolbar, .redactor-dropdown, #redactor-modal').length===0);},setHelpers:function()
{if(this.linkify.isEnabled())
{this.linkify.format();}
this.placeholder.enable();if(this.opts.focus)setTimeout(this.focus.setStart,100);if(this.opts.focusEnd)setTimeout(this.focus.setEnd,100);},plugins:function()
{if(!this.opts.plugins)return;$.each(this.opts.plugins,$.proxy(function(i,s)
{var func=(typeof RedactorPlugins!=='undefined'&&typeof RedactorPlugins[s]!=='undefined')?RedactorPlugins:Redactor.fn;if(!$.isFunction(func[s]))
{return;}
this[s]=func[s]();var methods=this.getModuleMethods(this[s]);var len=methods.length;for(var z=0;z<len;z++)
{this[s][methods[z]]=this[s][methods[z]].bind(this);}
if($.isFunction(this[s].init))
{this[s].init();}},this));},disableMozillaEditing:function()
{if(!this.utils.browser('mozilla'))return;try{document.execCommand('enableObjectResizing',false,false);document.execCommand('enableInlineTableEditing',false,false);}catch(e){}},disableIeLinks:function()
{if(!this.utils.browser('msie'))return;document.execCommand("AutoUrlDetect",false,false);}};},button:function()
{return{build:function(btnName,btnObject)
{var $button=$('<a href="#" class="re-icon re-'+btnName+'" rel="'+btnName+'" />').attr({'role':'button','aria-label':btnObject.title,'tabindex':'-1'});if(btnObject.func||btnObject.command||btnObject.dropdown)
{this.button.setEvent($button,btnName,btnObject);}
if(btnObject.dropdown)
{$button.addClass('redactor-toolbar-link-dropdown').attr('aria-haspopup',true);var $dropdown=$('<div class="redactor-dropdown redactor-dropdown-'+this.uuid+' redactor-dropdown-box-'+btnName+'" style="display: none;">');$button.data('dropdown',$dropdown);this.dropdown.build(btnName,$dropdown,btnObject.dropdown);}
if(this.utils.isDesktop())
{this.button.createTooltip($button,btnName,btnObject.title);}
return $button;},setEvent:function($button,btnName,btnObject)
{$button.on('touchstart click',$.proxy(function(e)
{if($button.hasClass('redactor-button-disabled'))return false;var type='func';var callback=btnObject.func;if(btnObject.command)
{type='command';callback=btnObject.command;}
else if(btnObject.dropdown)
{type='dropdown';callback=false;}
this.button.onClick(e,btnName,type,callback);},this));},createTooltip:function($button,name,title)
{var $tooltip=$('<span>').addClass('redactor-toolbar-tooltip redactor-toolbar-tooltip-'+this.uuid+' redactor-toolbar-tooltip-'+name).hide().html(title);$tooltip.appendTo('body');$button.on('mouseover',function()
{if($(this).hasClass('redactor-button-disabled'))return;var pos=$button.offset();$tooltip.show();$tooltip.css({top:(pos.top+$button.innerHeight())+'px',left:(pos.left+$button.innerWidth()/2-$tooltip.innerWidth()/2)+'px'});});$button.on('mouseout',function()
{$tooltip.hide();});},onClick:function(e,btnName,type,callback)
{this.button.caretOffset=this.caret.getOffset();e.preventDefault();if(this.utils.browser('msie'))e.returnValue=false;if(type=='command')this.inline.format(callback);else if(type=='dropdown')this.dropdown.show(e,btnName);else this.button.onClickCallback(e,callback,btnName);},onClickCallback:function(e,callback,btnName)
{var func;this.blurClickedElement=true;if($.isFunction(callback))callback.call(this,btnName);else if(callback.search(/\./)!='-1')
{func=callback.split('.');if(typeof this[func[0]]=='undefined')return;this[func[0]][func[1]](btnName);}
else this[callback](btnName);this.observe.buttons(e,btnName);},get:function(key)
{return this.$toolbar.find('a.re-'+key);},setActive:function(key)
{this.button.get(key).addClass('redactor-act');},setInactive:function(key)
{this.button.get(key).removeClass('redactor-act');},setInactiveAll:function(key)
{if(typeof key==='undefined')
{this.$toolbar.find('a.re-icon').removeClass('redactor-act');}
else
{this.$toolbar.find('a.re-icon').not('.re-'+key).removeClass('redactor-act');}},setActiveInVisual:function()
{this.$toolbar.find('a.re-icon').not('a.re-html, a.re-fullscreen').removeClass('redactor-button-disabled');},setInactiveInCode:function()
{this.$toolbar.find('a.re-icon').not('a.re-html, a.re-fullscreen').addClass('redactor-button-disabled');},changeIcon:function(key,classname)
{this.button.get(key).addClass('re-'+classname);},removeIcon:function(key,classname)
{this.button.get(key).removeClass('re-'+classname);},setAwesome:function(key,name)
{var $button=this.button.get(key);$button.removeClass('redactor-btn-image').addClass('fa-redactor-btn');$button.html('<i class="fa '+name+'"></i>');},addCallback:function($btn,callback)
{if($btn=="buffer")return;var type=(callback=='dropdown')?'dropdown':'func';var key=$btn.attr('rel');$btn.on('touchstart click',$.proxy(function(e)
{if($btn.hasClass('redactor-button-disabled'))return false;this.button.onClick(e,key,type,callback);},this));},addDropdown:function($btn,dropdown)
{$btn.addClass('redactor-toolbar-link-dropdown').attr('aria-haspopup',true);var key=$btn.attr('rel');this.button.addCallback($btn,'dropdown');var $dropdown=$('<div class="redactor-dropdown redactor-dropdown-'+this.uuid+' redactor-dropdown-box-'+key+'" style="display: none;">');$btn.data('dropdown',$dropdown);if(dropdown)this.dropdown.build(key,$dropdown,dropdown);return $dropdown;},add:function(key,title)
{if(!this.opts.toolbar)return;if(this.button.isMobileUndoRedo(key))return"buffer";var btn=this.button.build(key,{title:title});btn.addClass('redactor-btn-image');this.$toolbar.append($('<li>').append(btn));return btn;},addFirst:function(key,title)
{if(!this.opts.toolbar)return;if(this.button.isMobileUndoRedo(key))return"buffer";var btn=this.button.build(key,{title:title});btn.addClass('redactor-btn-image');this.$toolbar.prepend($('<li>').append(btn));return btn;},addAfter:function(afterkey,key,title)
{if(!this.opts.toolbar)return;if(this.button.isMobileUndoRedo(key))return"buffer";var btn=this.button.build(key,{title:title});btn.addClass('redactor-btn-image');var $btn=this.button.get(afterkey);if($btn.length!==0)$btn.parent().after($('<li>').append(btn));else this.$toolbar.append($('<li>').append(btn));return btn;},addBefore:function(beforekey,key,title)
{if(!this.opts.toolbar)return;if(this.button.isMobileUndoRedo(key))return"buffer";var btn=this.button.build(key,{title:title});btn.addClass('redactor-btn-image');var $btn=this.button.get(beforekey);if($btn.length!==0)$btn.parent().before($('<li>').append(btn));else this.$toolbar.append($('<li>').append(btn));return btn;},remove:function(key)
{this.button.get(key).remove();},isMobileUndoRedo:function(key)
{return(key=="undo"||key=="redo")&&!this.utils.isDesktop();}};},caret:function()
{return{setStart:function(node)
{if(!this.utils.isBlock(node))
{var space=this.utils.createSpaceElement();$(node).prepend(space);this.caret.setEnd(space);}
else
{this.caret.set(node,0,node,0);}},setEnd:function(node)
{node=node[0]||node;if(node.lastChild.nodeType==1)
{return this.caret.setAfter(node.lastChild);}
this.caret.set(node,1,node,1);},set:function(orgn,orgo,focn,foco)
{orgn=orgn[0]||orgn;focn=focn[0]||focn;if(this.utils.isBlockTag(orgn.tagName)&&orgn.innerHTML==='')
{orgn.innerHTML=this.opts.invisibleSpace;}
if(orgn.tagName=='BR'&&this.opts.linebreaks===false)
{var parent=$(this.opts.emptyHtml)[0];$(orgn).replaceWith(parent);orgn=parent;focn=orgn;}
this.selection.get();try
{this.range.setStart(orgn,orgo);this.range.setEnd(focn,foco);}
catch(e){}
this.selection.addRange();},setAfter:function(node)
{try
{var tag=$(node)[0].tagName;if(tag!='BR'&&!this.utils.isBlock(node))
{var space=this.utils.createSpaceElement();$(node).after(space);this.caret.setEnd(space);}
else
{if(tag!='BR'&&this.utils.browser('msie'))
{this.caret.setStart($(node).next());}
else
{this.caret.setAfterOrBefore(node,'after');}}}
catch(e)
{var space=this.utils.createSpaceElement();$(node).after(space);this.caret.setEnd(space);}},setBefore:function(node)
{if(this.utils.isBlock(node))
{this.caret.setEnd($(node).prev());}
else
{this.caret.setAfterOrBefore(node,'before');}},setAfterOrBefore:function(node,type)
{if(!this.utils.browser('msie'))this.$editor.focus();node=node[0]||node;this.selection.get();if(type=='after')
{try{this.range.setStartAfter(node);this.range.setEndAfter(node);}
catch(e){}}
else
{try{this.range.setStartBefore(node);this.range.setEndBefore(node);}
catch(e){}}
this.range.collapse(false);this.selection.addRange();},getOffsetOfElement:function(node)
{node=node[0]||node;this.selection.get();var cloned=this.range.cloneRange();cloned.selectNodeContents(node);cloned.setEnd(this.range.endContainer,this.range.endOffset);return $.trim(cloned.toString()).length;},getOffset:function()
{var offset=0;var sel=window.getSelection();if(sel.rangeCount>0)
{var range=window.getSelection().getRangeAt(0);var caretRange=range.cloneRange();caretRange.selectNodeContents(this.$editor[0]);caretRange.setEnd(range.endContainer,range.endOffset);offset=caretRange.toString().length;}
return offset;},setOffset:function(start,end)
{if(typeof end=='undefined')end=start;if(!this.focus.isFocused())this.focus.setStart();var sel=this.selection.get();var node,offset=0;var walker=document.createTreeWalker(this.$editor[0],NodeFilter.SHOW_TEXT,null,null);while(node==walker.nextNode())
{offset+=node.nodeValue.length;if(offset>start)
{this.range.setStart(node,node.nodeValue.length+start-offset);start=Infinity;}
if(offset>=end)
{this.range.setEnd(node,node.nodeValue.length+end-offset);break;}}
this.range.collapse(false);this.selection.addRange();},setToPoint:function(start,end)
{this.caret.setOffset(start,end);},getCoords:function()
{return this.caret.getOffset();}};},clean:function()
{return{onSet:function(html)
{html=html.replace(/<script(.*?[^>]?)>([\w\W]*?)<\/script>/gi,'<pre class="redactor-script-tag" style="display: none;" $1>$2</pre>');html=html.replace(/\$/g,'&#36;');html=html.replace(/<a href="(.*?[^>]?)®(.*?[^>]?)">/gi,'<a href="$1&reg$2">');if(this.opts.replaceDivs)html=this.clean.replaceDivs(html);if(this.opts.linebreaks)html=this.clean.replaceParagraphsToBr(html);html=this.clean.saveFormTags(html);var $div=$('<div>');$div.html(html);var fonts=$div.find('font[style]');if(fonts.length!==0)
{fonts.replaceWith(function()
{var $el=$(this);var $span=$('<span>').attr('style',$el.attr('style'));return $span.append($el.contents());});html=$div.html();}
$div.remove();html=html.replace(/<font(.*?[^<])>/gi,'');html=html.replace(/<\/font>/gi,'');html=this.tidy.load(html);if(this.opts.paragraphize)html=this.paragraphize.load(html);html=this.clean.setVerified(html);html=this.clean.convertInline(html);html=html.replace(/&amp;/g,'&');return html;},onSync:function(html)
{html=html.replace(/\u200B/g,'');html=html.replace(/&#x200b;/gi,'');if(this.opts.cleanSpaces)
{html=html.replace(/&nbsp;/gi,' ');}
if(html.search(/^<p>(||\s||<br\s?\/?>||&nbsp;)<\/p>$/i)!=-1)
{return'';}
html=html.replace(/<pre class="redactor-script-tag" style="display: none;"(.*?[^>]?)>([\w\W]*?)<\/pre>/gi,'<script$1>$2</script>');html=this.clean.restoreFormTags(html);var chars={'\u2122':'&trade;','\u00a9':'&copy;','\u2026':'&hellip;','\u2014':'&mdash;','\u2010':'&dash;'};$.each(chars,function(i,s)
{html=html.replace(new RegExp(i,'g'),s);});if(this.utils.browser('mozilla'))
{html=html.replace(/<br\s?\/?>$/gi,'');}
html=html.replace(new RegExp('<br\\s?/?></li>','gi'),'</li>');html=html.replace(new RegExp('</li><br\\s?/?>','gi'),'</li>');html=html.replace(/<(.*?)rel="\s*?"(.*?[^>]?)>/gi,'<$1$2">');html=html.replace(/<(.*?)style="\s*?"(.*?[^>]?)>/gi,'<$1$2">');html=html.replace(/="">/gi,'>');html=html.replace(/""">/gi,'">');html=html.replace(/"">/gi,'">');html=html.replace(/<div(.*?[^>]) data-tagblock="redactor"(.*?[^>])>/gi,'<div$1$2>');html=html.replace(/<(.*?) data-verified="redactor"(.*?[^>])>/gi,'<$1$2>');var $div=$("<div/>").html($.parseHTML(html,document,true));$div.find("span").removeAttr("rel");$div.find('pre .redactor-invisible-space').each(function()
{$(this).contents().unwrap();});html=$div.html();html=html.replace(/<img(.*?[^>])rel="(.*?[^>])"(.*?[^>])>/gi,'<img$1$3>');html=html.replace(/<span class="redactor-invisible-space">(.*?)<\/span>/gi,'$1');html=html.replace(/ data-save-url="(.*?[^>])"/gi,'');html=html.replace(/<span(.*?)id="redactor-image-box"(.*?[^>])>([\w\W]*?)<img(.*?)><\/span>/gi,'$3<img$4>');html=html.replace(/<span(.*?)id="redactor-image-resizer"(.*?[^>])>(.*?)<\/span>/gi,'');html=html.replace(/<span(.*?)id="redactor-image-editter"(.*?[^>])>(.*?)<\/span>/gi,'');html=html.replace(/<font(.*?[^<])>/gi,'');html=html.replace(/<\/font>/gi,'');html=this.tidy.load(html);if(this.opts.linkNofollow)
{html=html.replace(/<a(.*?)rel="nofollow"(.*?[^>])>/gi,'<a$1$2>');html=html.replace(/<a(.*?[^>])>/gi,'<a$1 rel="nofollow">');}
html=html.replace(/\sdata-redactor-(tag|class|style)="(.*?[^>])"/gi,'');html=html.replace(new RegExp('<(.*?) data-verified="redactor"(.*?[^>])>','gi'),'<$1$2>');html=html.replace(new RegExp('<(.*?) data-verified="redactor">','gi'),'<$1>');html=html.replace(/&amp;/g,'&');return html;},onPaste:function(html,setMode)
{html=$.trim(html);html=html.replace(/\$/g,'&#36;');html=html.replace(/<span class="s[0-9]">/gi,'<span>');html=html.replace(/<span class="Apple-converted-space">&nbsp;<\/span>/gi,' ');html=html.replace(/<span class="Apple-tab-span"[^>]*>\t<\/span>/gi,'\t');html=html.replace(/<span[^>]*>(\s|&nbsp;)<\/span>/gi,' ');if(this.opts.pastePlainText)
{return this.clean.getPlainText(html);}
if(!this.utils.isSelectAll()&&typeof setMode=='undefined')
{if(this.utils.isCurrentOrParent(['FIGCAPTION','A']))
{return this.clean.getPlainText(html,false);}
if(this.utils.isCurrentOrParent('PRE'))
{html=html.replace(/”/g,'"');html=html.replace(/“/g,'"');html=html.replace(/‘/g,'\'');html=html.replace(/’/g,'\'');return this.clean.getPreCode(html);}
if(this.utils.isCurrentOrParent(['BLOCKQUOTE','H1','H2','H3','H4','H5','H6']))
{html=this.clean.getOnlyImages(html);if(!this.utils.browser('msie'))
{var block=this.selection.getBlock();if(block&&block.tagName=='P')
{html=html.replace(/<img(.*?)>/gi,'<p><img$1></p>');}}
return html;}
if(this.utils.isCurrentOrParent(['TD']))
{html=this.clean.onPasteTidy(html,'td');if(this.opts.linebreaks)html=this.clean.replaceParagraphsToBr(html);html=this.clean.replaceDivsToBr(html);return html;}
if(this.utils.isCurrentOrParent(['LI']))
{return this.clean.onPasteTidy(html,'li');}}
html=this.clean.isSingleLine(html,setMode);if(!this.clean.singleLine)
{if(this.opts.linebreaks)html=this.clean.replaceParagraphsToBr(html);if(this.opts.replaceDivs)html=this.clean.replaceDivs(html);html=this.clean.saveFormTags(html);}
html=this.clean.onPasteWord(html);html=this.clean.onPasteExtra(html);html=this.clean.onPasteTidy(html,'all');if(!this.clean.singleLine&&this.opts.paragraphize)
{html=this.paragraphize.load(html);}
html=this.clean.removeDirtyStyles(html);html=this.clean.onPasteRemoveSpans(html);html=this.clean.onPasteRemoveEmpty(html);html=this.clean.convertInline(html);return html;},onPasteWord:function(html)
{html=html.replace(/<!--[\s\S]*?-->/gi,'');html=html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi,'');html=html.replace(/<o\:p[^>]*>[\s\S]*?<\/o\:p>/gi,'');if(html.match(/class="?Mso|style="[^"]*\bmso-|style='[^'']*\bmso-|w:WordDocument/i))
{html=html.replace(/<!--[\s\S]+?-->/gi,'');html=html.replace(/<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|img|meta|link|style|\w:\w+)(?=[\s\/>]))[^>]*>/gi,'');html=html.replace(/<(\/?)s>/gi,"<$1strike>");html=html.replace(/ /gi,' ');html=html.replace(/<span\s+style\s*=\s*"\s*mso-spacerun\s*:\s*yes\s*;?\s*"\s*>([\s\u00a0]*)<\/span>/gi,function(str,spaces){return(spaces.length>0)?spaces.replace(/./," ").slice(Math.floor(spaces.length/2)).split("").join("\u00a0"):'';});html=this.clean.onPasteIeFixLinks(html);html=html.replace(/<img(.*?)v:shapes=(.*?)>/gi,'');html=html.replace(/src="file\:\/\/(.*?)"/,'src=""');var $div=$("<div/>").html(html);var lastList=false;var lastLevel=1;var listsIds=[];$div.find("p[style]").each(function()
{var matches=$(this).attr('style').match(/mso\-list\:l([0-9]+)\slevel([0-9]+)/);if(matches)
{var currentList=parseInt(matches[1]);var currentLevel=parseInt(matches[2]);var listType=$(this).html().match(/^[\w]+\./)?"ol":"ul";var $li=$("<li/>").html($(this).html());$li.html($li.html().replace(/^([\w\.]+)</,'<'));$li.find("span:first").remove();if(currentLevel==1&&$.inArray(currentList,listsIds)==-1)
{var $list=$("<"+listType+"/>").attr({"data-level":currentLevel,"data-list":currentList}).html($li);$(this).replaceWith($list);lastList=currentList;listsIds.push(currentList);}
else
{if(currentLevel>lastLevel)
{var $prevList=$div.find('[data-level="'+lastLevel+'"][data-list="'+lastList+'"]');var $lastList=$prevList;for(var i=lastLevel;i<currentLevel;i++)
{$list=$("<"+listType+"/>");$list.appendTo($lastList.find("li").last());$lastList=$list;}
$lastList.attr({"data-level":currentLevel,"data-list":currentList}).html($li);}
else
{var $prevList=$div.find('[data-level="'+currentLevel+'"][data-list="'+currentList+'"]').last();$prevList.append($li);}
lastLevel=currentLevel;lastList=currentList;$(this).remove();}}});$div.find('[data-level][data-list]').removeAttr('data-level data-list');html=$div.html();html=html.replace(/·/g,'');html=html.replace(/<p class="Mso(.*?)"/gi,'<p');html=html.replace(/ class=\"(mso[^\"]*)\"/gi,"");html=html.replace(/ class=(mso\w+)/gi,"");html=html.replace(/<o:p(.*?)>([\w\W]*?)<\/o:p>/gi,'$2');html=html.replace(/\n/g,' ');html=html.replace(/<p>\n?<li>/gi,'<li>');}
return html;},onPasteExtra:function(html)
{html=html.replace(/<b\sid="internal-source-marker(.*?)">([\w\W]*?)<\/b>/gi,"$2");html=html.replace(/<b(.*?)id="docs-internal-guid(.*?)">([\w\W]*?)<\/b>/gi,"$3");html=html.replace(/<span[^>]*(font-style: italic; font-weight: bold|font-weight: bold; font-style: italic)[^>]*>/gi,'<span style="font-weight: bold;"><span style="font-style: italic;">');html=html.replace(/<span[^>]*font-style: italic[^>]*>/gi,'<span style="font-style: italic;">');html=html.replace(/<span[^>]*font-weight: bold[^>]*>/gi,'<span style="font-weight: bold;">');html=html.replace(/<span[^>]*text-decoration: underline[^>]*>/gi,'<span style="text-decoration: underline;">');html=html.replace(/<img>/gi,'');html=html.replace(/\n{3,}/gi,'\n');html=html.replace(/<font(.*?)>([\w\W]*?)<\/font>/gi,'$2');html=html.replace(/<p><p>/gi,'<p>');html=html.replace(/<\/p><\/p>/gi,'</p>');html=html.replace(/<li>(\s*|\t*|\n*)<p>/gi,'<li>');html=html.replace(/<\/p>(\s*|\t*|\n*)<\/li>/gi,'</li>');html=html.replace(/<\/p>\s<p/gi,'<\/p><p');html=html.replace(/<img src="webkit-fake-url\:\/\/(.*?)"(.*?)>/gi,'');html=html.replace(/<p>•([\w\W]*?)<\/p>/gi,'<li>$1</li>');if(this.utils.browser('mozilla'))
{html=html.replace(/<br\s?\/?>$/gi,'');}
return html;},onPasteTidy:function(html,type)
{var tags=['span','a','pre','blockquote','small','em','strong','code','kbd','mark','address','cite','var','samp','dfn','sup','sub','b','i','u','del','ol','ul','li','dl','dt','dd','p','br','video','audio','iframe','embed','param','object','img','table','td','th','tr','tbody','tfoot','thead','h1','h2','h3','h4','h5','h6'];var tagsEmpty=false;var attrAllowed=[['a','*'],['img',['src','alt']],['span',['class','rel','data-verified']],['iframe','*'],['video','*'],['audio','*'],['embed','*'],['object','*'],['param','*'],['source','*']];if(type=='all')
{tagsEmpty=['p','span','h1','h2','h3','h4','h5','h6'];attrAllowed=[['table','class'],['td',['colspan','rowspan']],['a','*'],['img',['src','alt','data-redactor-inserted-image']],['span',['class','rel','data-verified']],['iframe','*'],['video','*'],['audio','*'],['embed','*'],['object','*'],['param','*'],['source','*']];}
else if(type=='td')
{tags=['ul','ol','li','span','a','small','em','strong','code','kbd','mark','cite','var','samp','dfn','sup','sub','b','i','u','del','ol','ul','li','dl','dt','dd','br','iframe','video','audio','embed','param','object','img','h1','h2','h3','h4','h5','h6'];}
else if(type=='li')
{tags=['ul','ol','li','span','a','small','em','strong','code','kbd','mark','cite','var','samp','dfn','sup','sub','b','i','u','del','br','iframe','video','audio','embed','param','object','img'];}
var options={deniedTags:(this.opts.deniedTags)?this.opts.deniedTags:false,allowedTags:(this.opts.allowedTags)?this.opts.allowedTags:tags,removeComments:true,removePhp:true,removeAttr:(this.opts.removeAttr)?this.opts.removeAttr:false,allowedAttr:(this.opts.allowedAttr)?this.opts.allowedAttr:attrAllowed,removeEmpty:tagsEmpty};return this.tidy.load(html,options);},onPasteRemoveEmpty:function(html)
{html=html.replace(/<(p|h[1-6])>(|\s|\n|\t|<br\s?\/?>)<\/(p|h[1-6])>/gi,'');if(!this.opts.linebreaks)html=html.replace(/<br>$/i,'');return html;},onPasteRemoveSpans:function(html)
{html=html.replace(/<span>(.*?)<\/span>/gi,'$1');html=html.replace(/<span[^>]*>\s|&nbsp;<\/span>/gi,' ');return html;},onPasteIeFixLinks:function(html)
{if(!this.utils.browser('msie'))return html;var tmp=$.trim(html);if(tmp.search(/^<a(.*?)>(.*?)<\/a>$/i)===0)
{html=html.replace(/^<a(.*?)>(.*?)<\/a>$/i,"$2");}
return html;},isSingleLine:function(html,setMode)
{this.clean.singleLine=false;if(!this.utils.isSelectAll()&&typeof setMode=='undefined')
{var blocks=this.opts.blockLevelElements.join('|').replace('P|','').replace('DIV|','');var matchBlocks=html.match(new RegExp('</('+blocks+')>','gi'));var matchContainers=html.match(/<\/(p|div)>/gi);if(!matchBlocks&&(matchContainers===null||(matchContainers&&matchContainers.length<=1)))
{var matchBR=html.match(/<br\s?\/?>/gi);if(!matchBR)
{this.clean.singleLine=true;html=html.replace(/<\/?(p|div)(.*?)>/gi,'');}}}
return html;},stripTags:function(input,allowed)
{allowed=(((allowed||'')+'').toLowerCase().match(/<[a-z][a-z0-9]*>/g)||[]).join('');var tags=/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;return input.replace(tags,function($0,$1){return allowed.indexOf('<'+$1.toLowerCase()+'>')>-1?$0:'';});},savePreCode:function(html)
{html=this.clean.savePreFormatting(html);html=this.clean.saveCodeFormatting(html);html=this.clean.restoreSelectionMarker(html);return html;},savePreFormatting:function(html)
{var pre=html.match(/<pre(.*?)>([\w\W]*?)<\/pre>/gi);if(pre!==null)
{$.each(pre,$.proxy(function(i,s)
{var arr=s.match(/<pre(.*?)>([\w\W]*?)<\/pre>/i);arr[2]=arr[2].replace(/<br\s?\/?>/g,'\n');arr[2]=arr[2].replace(/&nbsp;/g,' ');if(this.opts.preSpaces)
{arr[2]=arr[2].replace(/\t/g,Array(this.opts.preSpaces+1).join(' '));}
arr[2]=this.clean.encodeEntities(arr[2]);arr[2]=arr[2].replace(/\$/g,'&#36;');html=html.replace(s,'<pre'+arr[1]+'>'+arr[2]+'</pre>');},this));}
return html;},saveCodeFormatting:function(html)
{var code=html.match(/<code(.*?)>([\w\W]*?)<\/code>/gi);if(code!==null)
{$.each(code,$.proxy(function(i,s)
{var arr=s.match(/<code(.*?)>([\w\W]*?)<\/code>/i);arr[2]=arr[2].replace(/&nbsp;/g,' ');arr[2]=this.clean.encodeEntities(arr[2]);arr[2]=arr[2].replace(/\$/g,'&#36;');html=html.replace(s,'<code'+arr[1]+'>'+arr[2]+'</code>');},this));}
return html;},restoreSelectionMarker:function(html)
{html=html.replace(/&lt;span id=&quot;selection-marker-([0-9])&quot; class=&quot;redactor-selection-marker&quot; data-verified=&quot;redactor&quot;&gt;​&lt;\/span&gt;/g,'<span id="selection-marker-$1" class="redactor-selection-marker" data-verified="redactor">​</span>');return html;},getTextFromHtml:function(html)
{html=html.replace(/<br\s?\/?>|<\/H[1-6]>|<\/p>|<\/div>|<\/li>|<\/td>/gi,'\n');var tmp=document.createElement('div');tmp.innerHTML=html;html=tmp.textContent||tmp.innerText;return $.trim(html);},getPlainText:function(html,paragraphize)
{html=this.clean.getTextFromHtml(html);html=html.replace(/\n/g,'<br />');if(this.opts.paragraphize&&typeof paragraphize=='undefined'&&!this.utils.browser('mozilla'))
{html=this.paragraphize.load(html);}
return html;},getPreCode:function(html)
{html=html.replace(/<img(.*?) style="(.*?)"(.*?[^>])>/gi,'<img$1$3>');html=html.replace(/<img(.*?)>/gi,'&lt;img$1&gt;');html=this.clean.getTextFromHtml(html);if(this.opts.preSpaces)
{html=html.replace(/\t/g,Array(this.opts.preSpaces+1).join(' '));}
html=this.clean.encodeEntities(html);return html;},getOnlyImages:function(html)
{html=html.replace(/<img(.*?)>/gi,'[img$1]');html=html.replace(/<([Ss]*?)>/gi,'');html=html.replace(/\[img(.*?)\]/gi,'<img$1>');return html;},getOnlyLinksAndImages:function(html)
{html=html.replace(/<a(.*?)href="(.*?)"(.*?)>([\w\W]*?)<\/a>/gi,'[a href="$2"]$4[/a]');html=html.replace(/<img(.*?)>/gi,'[img$1]');html=html.replace(/<(.*?)>/gi,'');html=html.replace(/\[a href="(.*?)"\]([\w\W]*?)\[\/a\]/gi,'<a href="$1">$2</a>');html=html.replace(/\[img(.*?)\]/gi,'<img$1>');return html;},encodeEntities:function(str)
{str=String(str).replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"');return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');},removeDirtyStyles:function(html)
{if(this.utils.browser('msie'))return html;var div=document.createElement('div');div.innerHTML=html;this.clean.clearUnverifiedRemove($(div));html=div.innerHTML;$(div).remove();return html;},clearUnverified:function()
{if(this.utils.browser('msie'))return;this.clean.clearUnverifiedRemove(this.$editor);var headers=this.$editor.find('h1, h2, h3, h4, h5, h6');headers.find('span').removeAttr('style');headers.find(this.opts.verifiedTags.join(', ')).removeAttr('style');this.code.sync();},clearUnverifiedRemove:function($editor)
{$editor.find(this.opts.verifiedTags.join(', ')).removeAttr('style');$editor.find('span').not('[data-verified="redactor"]').removeAttr('style');$editor.find('span[data-verified="redactor"], img[data-verified="redactor"]').each(function(i,s)
{var $s=$(s);$s.attr('style',$s.attr('rel'));});},cleanEmptyParagraph:function()
{},setVerified:function(html)
{if(this.utils.browser('msie'))return html;html=html.replace(new RegExp('<img(.*?[^>])>','gi'),'<img$1 data-verified="redactor">');html=html.replace(new RegExp('<span(.*?[^>])>','gi'),'<span$1 data-verified="redactor">');var matches=html.match(new RegExp('<(span|img)(.*?)style="(.*?)"(.*?[^>])>','gi'));if(matches)
{var len=matches.length;for(var i=0;i<len;i++)
{try{var newTag=matches[i].replace(/style="(.*?)"/i,'style="$1" rel="$1"');html=html.replace(matches[i],newTag);}
catch(e){}}}
return html;},convertInline:function(html)
{var $div=$('<div />').html(html);var tags=this.opts.inlineTags;tags.push('span');$div.find(tags.join(',')).each(function()
{var $el=$(this);var tag=this.tagName.toLowerCase();$el.attr('data-redactor-tag',tag);if(tag=='span')
{if($el.attr('style'))$el.attr('data-redactor-style',$el.attr('style'));else if($el.attr('class'))$el.attr('data-redactor-class',$el.attr('class'));}});html=$div.html();$div.remove();return html;},normalizeLists:function()
{this.$editor.find('li').each(function(i,s)
{var $next=$(s).next();if($next.length!==0&&($next[0].tagName=='UL'||$next[0].tagName=='OL'))
{$(s).append($next);}});},removeSpaces:function(html)
{html=html.replace(/\n/g,'');html=html.replace(/[\t]*/g,'');html=html.replace(/\n\s*\n/g,"\n");html=html.replace(/^[\s\n]*/g,' ');html=html.replace(/[\s\n]*$/g,' ');html=html.replace(/>\s{2,}</g,'> <');html=html.replace(/\n\n/g,"\n");html=html.replace(/\u200B/g,'');return html;},replaceDivs:function(html)
{if(this.opts.linebreaks)
{html=html.replace(/<div><br\s?\/?><\/div>/gi,'<br />');html=html.replace(/<div(.*?)>([\w\W]*?)<\/div>/gi,'$2<br />');}
else
{html=html.replace(/<div(.*?)>([\w\W]*?)<\/div>/gi,'<p$1>$2</p>');}
html=html.replace(/<div(.*?[^>])>/gi,'');html=html.replace(/<\/div>/gi,'');return html;},replaceDivsToBr:function(html)
{html=html.replace(/<div\s(.*?)>/gi,'<p>');html=html.replace(/<div><br\s?\/?><\/div>/gi,'<br /><br />');html=html.replace(/<div>([\w\W]*?)<\/div>/gi,'$1<br /><br />');return html;},replaceParagraphsToBr:function(html)
{html=html.replace(/<p\s(.*?)>/gi,'<p>');html=html.replace(/<p><br\s?\/?><\/p>/gi,'<br />');html=html.replace(/<p>([\w\W]*?)<\/p>/gi,'$1<br /><br />');html=html.replace(/(<br\s?\/?>){1,}\n?<\/blockquote>/gi,'</blockquote>');return html;},saveFormTags:function(html)
{return html.replace(/<form(.*?)>([\w\W]*?)<\/form>/gi,'<section$1 rel="redactor-form-tag">$2</section>');},restoreFormTags:function(html)
{return html.replace(/<section(.*?) rel="redactor-form-tag"(.*?)>([\w\W]*?)<\/section>/gi,'<form$1$2>$3</form>');}};},code:function()
{return{set:function(html)
{html=$.trim(html.toString());html=this.clean.onSet(html);if(this.utils.browser('msie'))
{html=html.replace(/<span(.*?)id="selection-marker-(1|2)"(.*?)><\/span>;/gi,'');}
this.$editor.html(html);this.code.sync();if(html!=='')this.placeholder.remove();setTimeout($.proxy(this.buffer.add,this),15);if(this.start===false)this.observe.load();},get:function()
{var code=this.$textarea.val();if(this.opts.replaceDivs)code=this.clean.replaceDivs(code);if(this.opts.linebreaks)code=this.clean.replaceParagraphsToBr(code);code=this.tabifier.get(code);return code;},sync:function()
{setTimeout($.proxy(this.code.startSync,this),10);},startSync:function()
{var html=this.$editor.html();if(this.code.syncCode&&this.code.syncCode==html)
{return;}
this.code.syncCode=html;html=this.core.setCallback('syncBefore',html);html=this.clean.onSync(html);this.$textarea.val(html);this.core.setCallback('sync',html);if(this.start===false)
{this.core.setCallback('change',html);}
this.start=false;if(this.autosave.html==false)
{this.autosave.html=this.code.get();}
if(this.opts.codemirror)
{this.$textarea.next('.CodeMirror').each(function(i,el)
{el.CodeMirror.setValue(html);});}
this.autosave.onChange();this.autosave.enable();},toggle:function()
{if(this.opts.visual)
{this.code.showCode();}
else
{this.code.showVisual();}},showCode:function()
{this.selection.save();this.code.offset=this.caret.getOffset();var scroll=$(window).scrollTop();var width=this.$editor.innerWidth(),height=this.$editor.innerHeight();this.$editor.hide();var html=this.$textarea.val();this.modified=this.clean.removeSpaces(html);html=this.tabifier.get(html);var start=0,end=0;var $editorDiv=$("<div/>").append($.parseHTML(this.clean.onSync(this.$editor.html()),document,true));var $selectionMarkers=$editorDiv.find("span.redactor-selection-marker");if($selectionMarkers.length>0)
{var editorHtml=this.tabifier.get($editorDiv.html()).replace(/&amp;/g,'&');if($selectionMarkers.length==1)
{start=this.utils.strpos(editorHtml,$editorDiv.find("#selection-marker-1").prop("outerHTML"));end=start;}
else if($selectionMarkers.length==2)
{start=this.utils.strpos(editorHtml,$editorDiv.find("#selection-marker-1").prop("outerHTML"));end=this.utils.strpos(editorHtml,$editorDiv.find("#selection-marker-2").prop("outerHTML"))-$editorDiv.find("#selection-marker-1").prop("outerHTML").toString().length;}}
this.selection.removeMarkers();this.$textarea.val(html);if(this.opts.codemirror)
{this.$textarea.next('.CodeMirror').each(function(i,el)
{$(el).show();el.CodeMirror.setValue(html);el.CodeMirror.setSize('100%',height);el.CodeMirror.refresh();if(start==end)
{el.CodeMirror.setCursor(el.CodeMirror.posFromIndex(start).line,el.CodeMirror.posFromIndex(end).ch);}
else
{el.CodeMirror.setSelection({line:el.CodeMirror.posFromIndex(start).line,ch:el.CodeMirror.posFromIndex(start).ch},{line:el.CodeMirror.posFromIndex(end).line,ch:el.CodeMirror.posFromIndex(end).ch});}
el.CodeMirror.focus();});}
else
{this.$textarea.height(height).show().focus();this.$textarea.on('keydown.redactor-textarea-indenting',this.code.textareaIndenting);$(window).scrollTop(scroll);if(this.$textarea[0].setSelectionRange)
{this.$textarea[0].setSelectionRange(start,end);}
this.$textarea[0].scrollTop=0;}
this.opts.visual=false;this.button.setInactiveInCode();this.button.setActive('html');this.core.setCallback('source',html);},showVisual:function()
{var html;if(this.opts.visual)return;var start=0,end=0;if(this.opts.codemirror)
{var selection;this.$textarea.next('.CodeMirror').each(function(i,el)
{selection=el.CodeMirror.listSelections();start=el.CodeMirror.indexFromPos(selection[0].anchor);end=el.CodeMirror.indexFromPos(selection[0].head);html=el.CodeMirror.getValue();});}
else
{start=this.$textarea.get(0).selectionStart;end=this.$textarea.get(0).selectionEnd;html=this.$textarea.hide().val();}
if(start>end&&end>0)
{var tempStart=end;var tempEnd=start;start=tempStart;end=tempEnd;}
start=this.code.enlargeOffset(html,start);end=this.code.enlargeOffset(html,end);html=html.substr(0,start)+this.selection.getMarkerAsHtml(1)+html.substr(start);if(end>start)
{var markerLength=this.selection.getMarkerAsHtml(1).toString().length;html=html.substr(0,end+markerLength)+this.selection.getMarkerAsHtml(2)+html.substr(end+markerLength);}
if(this.modified!==this.clean.removeSpaces(html))
{this.code.set(html);}
if(this.opts.codemirror)
{this.$textarea.next('.CodeMirror').hide();}
this.$editor.show();if(!this.utils.isEmpty(html))
{this.placeholder.remove();}
this.selection.restore();this.$textarea.off('keydown.redactor-textarea-indenting');this.button.setActiveInVisual();this.button.setInactive('html');this.observe.load();this.opts.visual=true;this.core.setCallback('visual',html);},textareaIndenting:function(e)
{if(e.keyCode!==9)return true;var $el=this.$textarea;var start=$el.get(0).selectionStart;$el.val($el.val().substring(0,start)+"\t"+$el.val().substring($el.get(0).selectionEnd));$el.get(0).selectionStart=$el.get(0).selectionEnd=start+1;return false;},enlargeOffset:function(html,offset)
{var htmlLength=html.length;var c=0;if(html[offset]=='>')
{c++;}
else
{for(var i=offset;i<=htmlLength;i++)
{c++;if(html[i]=='>')
{break;}
else if(html[i]=='<'||i==htmlLength)
{c=0;break;}}}
return offset+c;}};},core:function()
{return{getObject:function()
{return $.extend({},this);},getEditor:function()
{return this.$editor;},getBox:function()
{return this.$box;},getElement:function()
{return this.$element;},getTextarea:function()
{return this.$textarea;},getToolbar:function()
{return(this.$toolbar)?this.$toolbar:false;},addEvent:function(name)
{this.core.event=name;},getEvent:function()
{return this.core.event;},setCallback:function(type,e,data)
{var eventName=type+'Callback';var eventNamespace='redactor';var callback=this.opts[eventName];if(this.$textarea)
{var returnValue=false;var events=$._data(this.$textarea[0],'events');if(typeof events!='undefined'&&typeof events[eventName]!='undefined')
{$.each(events[eventName],$.proxy(function(key,value)
{if(value['namespace']==eventNamespace)
{var data=(typeof data=='undefined')?[e]:[e,data];returnValue=(typeof data=='undefined')?value.handler.call(this,e):value.handler.call(this,e,data);}},this));}
if(returnValue)return returnValue;}
if($.isFunction(callback))
{return(typeof data=='undefined')?callback.call(this,e):callback.call(this,e,data);}
else
{return(typeof data=='undefined')?e:data;}},destroy:function()
{this.opts.destroyed=true;this.core.setCallback('destroy');this.$element.off('.redactor').removeData('redactor');this.$editor.off('.redactor');$(document).off('mousedown.redactor.'+this.uuid);$(document).off('click.redactor-image-delete.'+this.uuid);$(document).off('click.redactor-image-resize-hide.'+this.uuid);$(document).off('touchstart.redactor.'+this.uuid+' click.redactor.'+this.uuid);$("body").off('scroll.redactor.'+this.uuid);$(this.opts.toolbarFixedTarget).off('scroll.redactor.'+this.uuid);this.$editor.removeClass('redactor-editor redactor-linebreaks redactor-placeholder');this.$editor.removeAttr('contenteditable');var html=this.code.get();if(this.opts.toolbar)
{this.$toolbar.find('a').each(function()
{var $el=$(this);if($el.data('dropdown'))
{$el.data('dropdown').remove();$el.data('dropdown',{});}});}
if(this.build.isTextarea())
{this.$box.after(this.$element);this.$box.remove();this.$element.val(html).show();}
else
{this.$box.after(this.$editor);this.$box.remove();this.$element.html(html).show();}
if(this.$pasteBox)this.$pasteBox.remove();if(this.$modalBox)this.$modalBox.remove();if(this.$modalOverlay)this.$modalOverlay.remove();$('.redactor-toolbar-tooltip-'+this.uuid).remove();clearInterval(this.autosaveInterval);}};},dropdown:function()
{return{build:function(name,$dropdown,dropdownObject)
{if(name=='formatting'&&this.opts.formattingAdd)
{$.each(this.opts.formattingAdd,$.proxy(function(i,s)
{var name=s.tag,func;if(typeof s['class']!='undefined')
{name=name+'-'+s['class'];}
s.type=(this.utils.isBlockTag(s.tag))?'block':'inline';if(typeof s.func!=="undefined")
{func=s.func;}
else
{func=(s.type=='inline')?'inline.formatting':'block.formatting';}
if(this.opts.linebreaks&&s.type=='block'&&s.tag=='p')return;this.formatting[name]={tag:s.tag,style:s.style,'class':s['class'],attr:s.attr,data:s.data,clear:s.clear};dropdownObject[name]={func:func,title:s.title};},this));}
$.each(dropdownObject,$.proxy(function(btnName,btnObject)
{var $item=$('<a href="#" class="redactor-dropdown-'+btnName+'" role="button">'+btnObject.title+'</a>');if(name=='formatting')$item.addClass('redactor-formatting-'+btnName);$item.on('click',$.proxy(function(e)
{e.preventDefault();var type='func';var callback=btnObject.func;if(btnObject.command)
{type='command';callback=btnObject.command;}
else if(btnObject.dropdown)
{type='dropdown';callback=btnObject.dropdown;}
if($(e.target).hasClass('redactor-dropdown-link-inactive'))return;this.button.onClick(e,btnName,type,callback);this.dropdown.hideAll();},this));this.observe.addDropdown($item,btnName,btnObject);$dropdown.append($item);},this));},show:function(e,key)
{if(!this.opts.visual)
{e.preventDefault();return false;}
var $button=this.button.get(key);var $dropdown=$button.data('dropdown').appendTo(document.body);if(this.opts.highContrast)
{$dropdown.addClass("redactor-dropdown-contrast");}
if($button.hasClass('dropact'))
{this.dropdown.hideAll();}
else
{this.dropdown.hideAll();this.observe.dropdowns();this.core.setCallback('dropdownShow',{dropdown:$dropdown,key:key,button:$button});this.button.setActive(key);$button.addClass('dropact');var keyPosition=$button.offset();var dropdownWidth=$dropdown.width();if((keyPosition.left+dropdownWidth)>$(document).width())
{keyPosition.left=Math.max(0,keyPosition.left-dropdownWidth);}
var left=keyPosition.left+'px';if(this.$toolbar.hasClass('toolbar-fixed-box'))
{var top=this.$toolbar.innerHeight()+this.opts.toolbarFixedTopOffset;var position='fixed';if(this.opts.toolbarFixedTarget!==document)
{top=(this.$toolbar.innerHeight()+this.$toolbar.offset().top)+this.opts.toolbarFixedTopOffset;position='absolute';}
$dropdown.css({position:position,left:left,top:top+'px'}).show();}
else
{var top=($button.innerHeight()+keyPosition.top)+'px';$dropdown.css({position:'absolute',left:left,top:top}).show();}
this.core.setCallback('dropdownShown',{dropdown:$dropdown,key:key,button:$button});this.$dropdown=$dropdown;}
$(document).one('click.redactor-dropdown',$.proxy(this.dropdown.hide,this));this.$editor.one('click.redactor-dropdown',$.proxy(this.dropdown.hide,this));$(document).one('keyup.redactor-dropdown',$.proxy(this.dropdown.closeHandler,this));$dropdown.on('mouseover.redactor-dropdown',$.proxy(this.utils.disableBodyScroll,this)).on('mouseout.redactor-dropdown',$.proxy(this.utils.enableBodyScroll,this));e.stopPropagation();},closeHandler:function(e)
{if(e.which!=this.keyCode.ESC)return;this.dropdown.hideAll();this.$editor.focus();},hideAll:function()
{this.$toolbar.find('a.dropact').removeClass('redactor-act').removeClass('dropact');this.utils.enableBodyScroll();$('.redactor-dropdown-'+this.uuid).hide();$('.redactor-dropdown-link-selected').removeClass('redactor-dropdown-link-selected');if(this.$dropdown)
{this.$dropdown.off('.redactor-dropdown');this.core.setCallback('dropdownHide',this.$dropdown);this.$dropdown=false;}},hide:function(e)
{var $dropdown=$(e.target);if(!$dropdown.hasClass('dropact')&&!$dropdown.hasClass('redactor-dropdown-link-inactive'))
{$dropdown.removeClass('dropact');$dropdown.off('mouseover mouseout');this.dropdown.hideAll();}}};},file:function()
{return{show:function()
{this.modal.load('file',this.lang.get('file'),700);this.upload.init('#redactor-modal-file-upload',this.opts.fileUpload,this.file.insert);this.selection.save();this.selection.get();var text=this.sel.toString();$('#redactor-filename').val(text);this.modal.show();},insert:function(json,direct,e)
{if(typeof json.error!='undefined')
{this.modal.close();this.selection.restore();this.core.setCallback('fileUploadError',json);return;}
var link;if(typeof json=='string')
{link=json;}
else
{var text=$('#redactor-filename').val();if(typeof text=='undefined'||text==='')text=json.filename;link='<a href="'+json.filelink+'" id="filelink-marker">'+text+'</a>';}
if(direct)
{this.selection.removeMarkers();var marker=this.selection.getMarker();this.insert.nodeToCaretPositionFromPoint(e,marker);}
else
{this.modal.close();}
this.selection.restore();this.buffer.set();this.insert.htmlWithoutClean(link);if(typeof json=='string')return;var linkmarker=$(this.$editor.find('a#filelink-marker'));if(linkmarker.length!==0)
{linkmarker.removeAttr('id').removeAttr('style');}
else linkmarker=false;this.core.setCallback('fileUpload',linkmarker,json);}};},focus:function()
{return{setStart:function()
{this.$editor.focus();var first=this.$editor.children().first();if(first.length===0)return;if(first[0].length===0||first[0].tagName=='BR'||first[0].nodeType==3)
{return;}
if(first[0].tagName=='UL'||first[0].tagName=='OL')
{var child=first.find('li').first();if(!this.utils.isBlock(child)&&child.text()==='')
{this.caret.setStart(child);return;}}
if(this.opts.linebreaks&&!this.utils.isBlockTag(first[0].tagName))
{this.selection.get();this.range.setStart(this.$editor[0],0);this.range.setEnd(this.$editor[0],0);this.selection.addRange();return;}
this.caret.setStart(first);},setEnd:function()
{var last=this.$editor.children().last();this.$editor.focus();if(last.size()===0)return;if(this.utils.isEmpty(this.$editor.html()))
{this.selection.get();this.range.collapse(true);this.range.setStartAfter(last[0]);this.range.setEnd(last[0],0);this.selection.addRange();}
else
{this.selection.get();this.range.selectNodeContents(last[0]);this.range.collapse(false);this.selection.addRange();}},isFocused:function()
{var focusNode=document.getSelection().focusNode;if(focusNode===null)return false;if(this.opts.linebreaks&&$(focusNode.parentNode).hasClass('redactor-linebreaks'))return true;else if(!this.utils.isRedactorParent(focusNode.parentNode))return false;return this.$editor.is(':focus');}};},image:function()
{return{show:function()
{this.modal.load('image',this.lang.get('image'),700);this.upload.init('#redactor-modal-image-droparea',this.opts.imageUpload,this.image.insert);this.selection.save();this.modal.show();},showEdit:function($image)
{var $link=$image.closest('a',this.$editor[0]);this.modal.load('imageEdit',this.lang.get('edit'),705);this.modal.createCancelButton();this.image.buttonDelete=this.modal.createDeleteButton(this.lang.get('_delete'));this.image.buttonSave=this.modal.createActionButton(this.lang.get('save'));this.image.buttonDelete.on('click',$.proxy(function()
{this.image.remove($image);},this));this.image.buttonSave.on('click',$.proxy(function()
{this.image.update($image);},this));$('.redactor-link-tooltip').remove();$('#redactor-image-title').val($image.attr('alt'));if(!this.opts.imageLink)$('.redactor-image-link-option').hide();else
{var $redactorImageLink=$('#redactor-image-link');$redactorImageLink.attr('href',$image.attr('src'));if($link.length!==0)
{$redactorImageLink.val($link.attr('href'));if($link.attr('target')=='_blank')$('#redactor-image-link-blank').prop('checked',true);}}
if(!this.opts.imagePosition)$('.redactor-image-position-option').hide();else
{var floatValue=($image.css('display')=='block'&&$image.css('float')=='none')?'center':$image.css('float');$('#redactor-image-align').val(floatValue);}
this.modal.show();$('#redactor-image-title').focus();},setFloating:function($image)
{var floating=$('#redactor-image-align').val();var imageFloat='';var imageDisplay='';var imageMargin='';switch(floating)
{case'left':imageFloat='left';imageMargin='0 '+this.opts.imageFloatMargin+' '+this.opts.imageFloatMargin+' 0';break;case'right':imageFloat='right';imageMargin='0 0 '+this.opts.imageFloatMargin+' '+this.opts.imageFloatMargin;break;case'center':imageDisplay='block';imageMargin='auto';break;}
$image.css({'float':imageFloat,display:imageDisplay,margin:imageMargin});$image.attr('rel',$image.attr('style'));},update:function($image)
{this.image.hideResize();this.buffer.set();var $link=$image.closest('a',this.$editor[0]);var title=$('#redactor-image-title').val().replace(/(<([^>]+)>)/ig,"");$image.attr('alt',title);this.image.setFloating($image);var link=$.trim($('#redactor-image-link').val());var link=link.replace(/(<([^>]+)>)/ig,"");if(link!=='')
{var pattern='((xn--)?[a-z0-9]+(-[a-z0-9]+)*\\.)+[a-z]{2,}';var re=new RegExp('^(http|ftp|https)://'+pattern,'i');var re2=new RegExp('^'+pattern,'i');if(link.search(re)==-1&&link.search(re2)===0&&this.opts.linkProtocol)
{link=this.opts.linkProtocol+'://'+link;}
var target=($('#redactor-image-link-blank').prop('checked'))?true:false;if($link.length===0)
{var a=$('<a href="'+link+'">'+this.utils.getOuterHtml($image)+'</a>');if(target)a.attr('target','_blank');$image.replaceWith(a);}
else
{$link.attr('href',link);if(target)
{$link.attr('target','_blank');}
else
{$link.removeAttr('target');}}}
else if($link.length!==0)
{$link.replaceWith(this.utils.getOuterHtml($image));}
this.modal.close();this.observe.images();this.code.sync();},setEditable:function($image)
{if(this.opts.imageEditable)
{$image.on('dragstart',$.proxy(this.image.onDrag,this));}
var handler=$.proxy(function(e)
{this.observe.image=$image;this.image.resizer=this.image.loadEditableControls($image);$(document).on('mousedown.redactor-image-resize-hide.'+this.uuid,$.proxy(this.image.hideResize,this));if(!this.opts.imageResizable)return;this.image.resizer.on('mousedown.redactor touchstart.redactor',$.proxy(function(e)
{this.image.setResizable(e,$image);},this));},this);$image.off('mousedown.redactor').on('mousedown.redactor',$.proxy(this.image.hideResize,this));$image.off('click.redactor touchstart.redactor').on('click.redactor touchstart.redactor',handler);},setResizable:function(e,$image)
{e.preventDefault();this.image.resizeHandle={x:e.pageX,y:e.pageY,el:$image,ratio:$image.width()/$image.height(),h:$image.height()};e=e.originalEvent||e;if(e.targetTouches)
{this.image.resizeHandle.x=e.targetTouches[0].pageX;this.image.resizeHandle.y=e.targetTouches[0].pageY;}
this.image.startResize();},startResize:function()
{$(document).on('mousemove.redactor-image-resize touchmove.redactor-image-resize',$.proxy(this.image.moveResize,this));$(document).on('mouseup.redactor-image-resize touchend.redactor-image-resize',$.proxy(this.image.stopResize,this));},moveResize:function(e)
{e.preventDefault();e=e.originalEvent||e;var height=this.image.resizeHandle.h;if(e.targetTouches)height+=(e.targetTouches[0].pageY-this.image.resizeHandle.y);else height+=(e.pageY-this.image.resizeHandle.y);var width=Math.round(height*this.image.resizeHandle.ratio);if(height<50||width<100)return;var height=Math.round(this.image.resizeHandle.el.width()/this.image.resizeHandle.ratio);this.image.resizeHandle.el.attr({width:width,height:height});this.image.resizeHandle.el.width(width);this.image.resizeHandle.el.height(height);this.code.sync();},stopResize:function()
{this.handle=false;$(document).off('.redactor-image-resize');this.image.hideResize();},onDrag:function(e)
{if(this.$editor.find('#redactor-image-box').length!==0)
{e.preventDefault();return false;}
this.$editor.on('drop.redactor-image-inside-drop',$.proxy(function()
{setTimeout($.proxy(this.image.onDrop,this),1);},this));},onDrop:function()
{this.image.fixImageSourceAfterDrop();this.observe.images();this.$editor.off('drop.redactor-image-inside-drop');this.clean.clearUnverified();this.code.sync();},fixImageSourceAfterDrop:function()
{this.$editor.find('img[data-save-url]').each(function()
{var $el=$(this);$el.attr('src',$el.attr('data-save-url'));$el.removeAttr('data-save-url');});},hideResize:function(e)
{if(e&&$(e.target).closest('#redactor-image-box',this.$editor[0]).length!==0)return;if(e&&e.target.tagName=='IMG')
{var $image=$(e.target);$image.attr('data-save-url',$image.attr('src'));}
var imageBox=this.$editor.find('#redactor-image-box');if(imageBox.length===0)return;$('#redactor-image-editter').remove();$('#redactor-image-resizer').remove();imageBox.find('img').css({marginTop:imageBox[0].style.marginTop,marginBottom:imageBox[0].style.marginBottom,marginLeft:imageBox[0].style.marginLeft,marginRight:imageBox[0].style.marginRight});imageBox.css('margin','');imageBox.find('img').css('opacity','');imageBox.replaceWith(function()
{return $(this).contents();});$(document).off('mousedown.redactor-image-resize-hide.'+this.uuid);if(typeof this.image.resizeHandle!=='undefined')
{this.image.resizeHandle.el.attr('rel',this.image.resizeHandle.el.attr('style'));}
this.code.sync();},loadResizableControls:function($image,imageBox)
{if(this.opts.imageResizable&&!this.utils.isMobile())
{var imageResizer=$('<span id="redactor-image-resizer" data-redactor="verified"></span>');if(!this.utils.isDesktop())
{imageResizer.css({width:'15px',height:'15px'});}
imageResizer.attr('contenteditable',false);imageBox.append(imageResizer);imageBox.append($image);return imageResizer;}
else
{imageBox.append($image);return false;}},loadEditableControls:function($image)
{var imageBox=$('<span id="redactor-image-box" data-redactor="verified">');imageBox.css('float',$image.css('float')).attr('contenteditable',false);if($image[0].style.margin!='auto')
{imageBox.css({marginTop:$image[0].style.marginTop,marginBottom:$image[0].style.marginBottom,marginLeft:$image[0].style.marginLeft,marginRight:$image[0].style.marginRight});$image.css('margin','');}
else
{imageBox.css({'display':'block','margin':'auto'});}
$image.css('opacity','.5').after(imageBox);if(this.opts.imageEditable)
{this.image.editter=$('<span id="redactor-image-editter" data-redactor="verified">'+this.lang.get('edit')+'</span>');this.image.editter.attr('contenteditable',false);this.image.editter.on('click',$.proxy(function()
{this.image.showEdit($image);},this));imageBox.append(this.image.editter);var editerWidth=this.image.editter.innerWidth();this.image.editter.css('margin-left','-'+editerWidth/2+'px');}
return this.image.loadResizableControls($image,imageBox);},remove:function(image)
{var $image=$(image);var $link=$image.closest('a',this.$editor[0]);var $figure=$image.closest('figure',this.$editor[0]);var $parent=$image.parent();if($('#redactor-image-box').length!==0)
{$parent=$('#redactor-image-box').parent();}
var $next;if($figure.length!==0)
{$next=$figure.next();$figure.remove();}
else if($link.length!==0)
{$parent=$link.parent();$link.remove();}
else
{$image.remove();}
$('#redactor-image-box').remove();if($figure.length!==0)
{this.caret.setStart($next);}
else
{this.caret.setStart($parent);}
this.core.setCallback('imageDelete',$image[0].src,$image);this.modal.close();this.code.sync();},insert:function(json,direct,e)
{if(typeof json.error!='undefined')
{this.modal.close();this.selection.restore();this.core.setCallback('imageUploadError',json);return;}
var $img;if(typeof json=='string')
{$img=$(json).attr('data-redactor-inserted-image','true');}
else
{$img=$('<img>');$img.attr('src',json.filelink).attr('data-redactor-inserted-image','true');}
var node=$img;var isP=this.utils.isCurrentOrParent('P');if(isP)
{node=$('<blockquote />').append($img);}
if(direct)
{this.selection.removeMarkers();var marker=this.selection.getMarker();this.insert.nodeToCaretPositionFromPoint(e,marker);}
else
{this.modal.close();}
this.selection.restore();this.buffer.set();this.insert.html(this.utils.getOuterHtml(node),false);var $image=this.$editor.find('img[data-redactor-inserted-image=true]').removeAttr('data-redactor-inserted-image');if(isP)
{$image.parent().contents().unwrap().wrap('<p />');}
else if(this.opts.linebreaks)
{if(!this.utils.isEmpty(this.code.get()))
{$image.before('<br>');}
$image.after('<br>');}
if(typeof json=='string')return;this.core.setCallback('imageUpload',$image,json);}};},indent:function()
{return{increase:function()
{if(!this.utils.browser('msie'))this.$editor.focus();this.buffer.set();this.selection.save();var block=this.selection.getBlock();if(block&&block.tagName=='LI')
{this.indent.increaseLists();}
else if(block===false&&this.opts.linebreaks)
{this.indent.increaseText();}
else
{this.indent.increaseBlocks();}
this.selection.restore();this.code.sync();},increaseLists:function()
{document.execCommand('indent');this.indent.fixEmptyIndent();this.clean.normalizeLists();this.clean.clearUnverified();},increaseBlocks:function()
{$.each(this.selection.getBlocks(),$.proxy(function(i,elem)
{if(elem.tagName==='TD'||elem.tagName==='TH')return;var $el=this.utils.getAlignmentElement(elem);var left=this.utils.normalize($el.css('margin-left'))+this.opts.indentValue;$el.css('margin-left',left+'px');},this));},increaseText:function()
{var wrapper=this.selection.wrap('div');$(wrapper).attr('data-tagblock','redactor');$(wrapper).css('margin-left',this.opts.indentValue+'px');},decrease:function()
{this.buffer.set();this.selection.save();var block=this.selection.getBlock();if(block&&block.tagName=='LI')
{this.indent.decreaseLists();}
else
{this.indent.decreaseBlocks();}
this.selection.restore();this.code.sync();},decreaseLists:function()
{document.execCommand('outdent');var current=this.selection.getCurrent();var $item=$(current).closest('li',this.$editor[0]);this.indent.fixEmptyIndent();if(!this.opts.linebreaks&&$item.length===0)
{document.execCommand('formatblock',false,'p');this.$editor.find('ul, ol, blockquote, p').each($.proxy(this.utils.removeEmpty,this));}
this.clean.clearUnverified();},decreaseBlocks:function()
{$.each(this.selection.getBlocks(),$.proxy(function(i,elem)
{var $el=this.utils.getAlignmentElement(elem);var left=this.utils.normalize($el.css('margin-left'))-this.opts.indentValue;if(left<=0)
{if(this.opts.linebreaks&&typeof($el.data('tagblock'))!=='undefined')
{$el.replaceWith($el.html()+'<br />');}
else
{$el.css('margin-left','');this.utils.removeEmptyAttr($el,'style');}}
else
{$el.css('margin-left',left+'px');}},this));},fixEmptyIndent:function()
{var block=this.selection.getBlock();if(this.range.collapsed&&block&&block.tagName=='LI'&&this.utils.isEmpty($(block).text()))
{var $block=$(block);$block.find('span').not('.redactor-selection-marker').contents().unwrap();$block.append('<br>');}}};},inline:function()
{return{formatting:function(name)
{var type,value;if(typeof this.formatting[name].style!='undefined')type='style';else if(typeof this.formatting[name]['class']!='undefined')type='class';if(type)value=this.formatting[name][type];this.inline.format(this.formatting[name].tag,type,value);},format:function(tag,type,value)
{var current=this.selection.getCurrent();if(current&&current.tagName==='TR')return;this.blurClickedElement=true;if(this.utils.isCurrentOrParent('PRE')||this.utils.isCurrentOrParentHeader())return;var tags=['b','bold','i','italic','underline','strikethrough','deleted','superscript','subscript'];var replaced=['strong','strong','em','em','u','del','del','sup','sub'];for(var i=0;i<tags.length;i++)
{if(tag==tags[i])tag=replaced[i];}
if(this.opts.allowedTags)
{if($.inArray(tag,this.opts.allowedTags)==-1)return;}
else
{if($.inArray(tag,this.opts.deniedTags)!==-1)return;}
this.inline.type=type||false;this.inline.value=value||false;this.buffer.set();if(!this.utils.browser('msie'))
{this.$editor.focus();}
this.selection.get();if(this.range.collapsed)
{this.inline.formatCollapsed(tag);}
else
{this.inline.formatMultiple(tag);}},formatCollapsed:function(tag)
{var current=this.selection.getCurrent();var $parent=$(current).closest(tag+'[data-redactor-tag='+tag+']',this.$editor[0]);if($parent.length!==0&&(this.inline.type!='style'&&$parent[0].tagName!='SPAN'))
{if(this.utils.isEmpty($parent.text()))
{this.caret.setAfter($parent[0]);$parent.remove();this.code.sync();}
else if(this.utils.isEndOfElement($parent))
{this.caret.setAfter($parent[0]);}
return;}
var node=$('<'+tag+'>').attr('data-verified','redactor').attr('data-redactor-tag',tag);node.html(this.opts.invisibleSpace);node=this.inline.setFormat(node);var node=this.insert.node(node);this.caret.setEnd(node);this.code.sync();},formatMultiple:function(tag)
{this.inline.formatConvert(tag);this.selection.save();document.execCommand('strikethrough');this.$editor.find('strike').each($.proxy(function(i,s)
{var $el=$(s);this.inline.formatRemoveSameChildren($el,tag);var $span;if(this.inline.type)
{$span=$('<span>').attr('data-redactor-tag',tag).attr('data-verified','redactor');$span=this.inline.setFormat($span);}
else
{$span=$('<'+tag+'>').attr('data-redactor-tag',tag).attr('data-verified','redactor');}
$el.replaceWith($span.html($el.contents()));var $parent=$span.parent();if($parent&&$parent[0].tagName==='U')
{$span.parent().replaceWith($span);}
if(tag=='span')
{if($parent&&$parent[0].tagName==='SPAN'&&this.inline.type==='style')
{var arr=this.inline.value.split(';');for(var z=0;z<arr.length;z++)
{if(arr[z]==='')return;var style=arr[z].split(':');$parent.css(style[0],'');if(this.utils.removeEmptyAttr($parent,'style'))
{$parent.replaceWith($parent.contents());}}}}},this));if(tag!='span')
{this.$editor.find(this.opts.inlineTags.join(', ')).each($.proxy(function(i,s)
{var $el=$(s);if(s.tagName==='U'&&s.attributes.length===0)
{$el.replaceWith($el.contents());return;}
var property=$el.css('text-decoration');if(property==='line-through')
{$el.css('text-decoration','');this.utils.removeEmptyAttr($el,'style');}},this));}
if(tag!='del')
{var _this=this;this.$editor.find('inline').each(function(i,s)
{_this.utils.replaceToTag(s,'del');});}
this.selection.restore();this.code.sync();},formatRemoveSameChildren:function($el,tag)
{var self=this;$el.children(tag).each(function()
{var $child=$(this);if(!$child.hasClass('redactor-selection-marker'))
{if(self.inline.type=='style')
{var arr=self.inline.value.split(';');for(var z=0;z<arr.length;z++)
{if(arr[z]==='')return;var style=arr[z].split(':');$child.css(style[0],'');if(self.utils.removeEmptyAttr($child,'style'))
{$child.replaceWith($child.contents());}}}
else
{$child.contents().unwrap();}}});},formatConvert:function(tag)
{this.selection.save();var find='';if(this.inline.type=='class')find='[data-redactor-class='+this.inline.value+']';else if(this.inline.type=='style')
{find='[data-redactor-style="'+this.inline.value+'"]';}
var self=this;if(tag!='del')
{this.$editor.find('del').each(function(i,s)
{self.utils.replaceToTag(s,'inline');});}
if(tag!='span')
{this.$editor.find(tag).each(function()
{var $el=$(this);$el.replaceWith($('<strike />').html($el.contents()));});}
this.$editor.find('[data-redactor-tag="'+tag+'"]'+find).each(function()
{if(find===''&&tag=='span'&&this.tagName.toLowerCase()==tag)return;var $el=$(this);$el.replaceWith($('<strike />').html($el.contents()));});this.selection.restore();},setFormat:function(node)
{switch(this.inline.type)
{case'class':if(node.hasClass(this.inline.value))
{node.removeClass(this.inline.value);node.removeAttr('data-redactor-class');}
else
{node.addClass(this.inline.value);node.attr('data-redactor-class',this.inline.value);}
break;case'style':node[0].style.cssText=this.inline.value;node.attr('data-redactor-style',this.inline.value);break;}
return node;},removeStyle:function()
{this.buffer.set();var current=this.selection.getCurrent();var nodes=this.selection.getInlines();this.selection.save();if(current&&current.tagName==='SPAN')
{var $s=$(current);$s.removeAttr('style');if($s[0].attributes.length===0)
{$s.replaceWith($s.contents());}}
$.each(nodes,$.proxy(function(i,s)
{var $s=$(s);if($.inArray(s.tagName.toLowerCase(),this.opts.inlineTags)!=-1&&!$s.hasClass('redactor-selection-marker'))
{$s.removeAttr('style');if($s[0].attributes.length===0)
{$s.replaceWith($s.contents());}}},this));this.selection.restore();this.code.sync();},removeStyleRule:function(name)
{this.buffer.set();var parent=this.selection.getParent();var nodes=this.selection.getInlines();this.selection.save();if(parent&&parent.tagName==='SPAN')
{var $s=$(parent);$s.css(name,'');this.utils.removeEmptyAttr($s,'style');if($s[0].attributes.length===0)
{$s.replaceWith($s.contents());}}
$.each(nodes,$.proxy(function(i,s)
{var $s=$(s);if($.inArray(s.tagName.toLowerCase(),this.opts.inlineTags)!=-1&&!$s.hasClass('redactor-selection-marker'))
{$s.css(name,'');this.utils.removeEmptyAttr($s,'style');if($s[0].attributes.length===0)
{$s.replaceWith($s.contents());}}},this));this.selection.restore();this.code.sync();},removeFormat:function()
{this.buffer.set();var current=this.selection.getCurrent();this.selection.save();document.execCommand('removeFormat');if(current&&current.tagName==='SPAN')
{$(current).replaceWith($(current).contents());}
$.each(this.selection.getNodes(),$.proxy(function(i,s)
{var $s=$(s);if($.inArray(s.tagName.toLowerCase(),this.opts.inlineTags)!=-1&&!$s.hasClass('redactor-selection-marker'))
{$s.replaceWith($s.contents());}},this));this.selection.restore();this.code.sync();},toggleClass:function(className)
{this.inline.format('span','class',className);},toggleStyle:function(value)
{this.inline.format('span','style',value);}};},insert:function()
{return{set:function(html,clean)
{this.placeholder.remove();html=this.clean.setVerified(html);if(typeof clean=='undefined')
{html=this.clean.onPaste(html,false);}
this.$editor.html(html);this.selection.remove();this.focus.setEnd();this.clean.normalizeLists();this.code.sync();this.observe.load();if(typeof clean=='undefined')
{setTimeout($.proxy(this.clean.clearUnverified,this),10);}},text:function(text)
{this.placeholder.remove();text=text.toString();text=$.trim(text);text=this.clean.getPlainText(text,false);this.$editor.focus();if(this.utils.browser('msie'))
{this.insert.htmlIe(text);}
else
{this.selection.get();this.range.deleteContents();var el=document.createElement("div");el.innerHTML=text;var frag=document.createDocumentFragment(),node,lastNode;while((node=el.firstChild))
{lastNode=frag.appendChild(node);}
this.range.insertNode(frag);if(lastNode)
{var range=this.range.cloneRange();range.setStartAfter(lastNode);range.collapse(true);this.sel.removeAllRanges();this.sel.addRange(range);}}
this.code.sync();this.clean.clearUnverified();},htmlWithoutClean:function(html)
{this.insert.html(html,false);},html:function(html,clean)
{this.placeholder.remove();if(typeof clean=='undefined')clean=true;this.$editor.focus();html=this.clean.setVerified(html);if(clean)
{html=this.clean.onPaste(html);}
if(this.utils.browser('msie'))
{this.insert.htmlIe(html);}
else
{if(this.clean.singleLine)this.insert.execHtml(html);else document.execCommand('insertHTML',false,html);this.insert.htmlFixMozilla();}
this.clean.normalizeLists();if(!this.opts.linebreaks)
{this.$editor.find('p').each($.proxy(this.utils.removeEmpty,this));}
this.code.sync();this.observe.load();if(clean)
{this.clean.clearUnverified();}},htmlFixMozilla:function()
{if(!this.utils.browser('mozilla'))return;var $next=$(this.selection.getBlock()).next();if($next.length>0&&$next[0].tagName=='P'&&$next.html()==='')
{$next.remove();}},htmlIe:function(html)
{if(this.utils.isIe11())
{var parent=this.utils.isCurrentOrParent('P');var $html=$('<div>').append(html);var blocksMatch=$html.contents().is('p, :header, dl, ul, ol, div, table, td, blockquote, pre, address, section, header, footer, aside, article');if(parent&&blocksMatch)this.insert.ie11FixInserting(parent,html);else this.insert.ie11PasteFrag(html);return;}
document.selection.createRange().pasteHTML(html);},execHtml:function(html)
{html=this.clean.setVerified(html);this.selection.get();this.range.deleteContents();var el=document.createElement('div');el.innerHTML=html;var frag=document.createDocumentFragment(),node,lastNode;while((node=el.firstChild))
{lastNode=frag.appendChild(node);}
this.range.insertNode(frag);this.range.collapse(true);this.caret.setAfter(lastNode);},node:function(node,deleteContents)
{node=node[0]||node;var html=this.utils.getOuterHtml(node);html=this.clean.setVerified(html);if(html.match(/</g)!==null)
{node=$(html)[0];}
this.selection.get();if(deleteContents!==false)
{this.range.deleteContents();}
this.range.insertNode(node);this.range.collapse(false);this.selection.addRange();return node;},nodeToPoint:function(node,x,y)
{node=node[0]||node;this.selection.get();var range;if(document.caretPositionFromPoint)
{var pos=document.caretPositionFromPoint(x,y);this.range.setStart(pos.offsetNode,pos.offset);this.range.collapse(true);this.range.insertNode(node);}
else if(document.caretRangeFromPoint)
{range=document.caretRangeFromPoint(x,y);range.insertNode(node);}
else if(typeof document.body.createTextRange!="undefined")
{range=document.body.createTextRange();range.moveToPoint(x,y);var endRange=range.duplicate();endRange.moveToPoint(x,y);range.setEndPoint("EndToEnd",endRange);range.select();}},nodeToCaretPositionFromPoint:function(e,node)
{node=node[0]||node;var range;var x=e.clientX,y=e.clientY;if(document.caretPositionFromPoint)
{var pos=document.caretPositionFromPoint(x,y);var sel=document.getSelection();range=sel.getRangeAt(0);range.setStart(pos.offsetNode,pos.offset);range.collapse(true);range.insertNode(node);}
else if(document.caretRangeFromPoint)
{range=document.caretRangeFromPoint(x,y);range.insertNode(node);}
else if(typeof document.body.createTextRange!="undefined")
{range=document.body.createTextRange();range.moveToPoint(x,y);var endRange=range.duplicate();endRange.moveToPoint(x,y);range.setEndPoint("EndToEnd",endRange);range.select();}},ie11FixInserting:function(parent,html)
{var node=document.createElement('span');node.className='redactor-ie-paste';this.insert.node(node);var parHtml=$(parent).html();parHtml='<p>'+parHtml.replace(/<span class="redactor-ie-paste"><\/span>/gi,'</p>'+html+'<p>')+'</p>';parHtml=parHtml.replace(/<p><\/p>/gi,'');$(parent).replaceWith(parHtml);},ie11PasteFrag:function(html)
{this.selection.get();this.range.deleteContents();var el=document.createElement("div");el.innerHTML=html;var frag=document.createDocumentFragment(),node,lastNode;while((node=el.firstChild))
{lastNode=frag.appendChild(node);}
this.range.insertNode(frag);this.range.collapse(false);this.selection.addRange();}};},keydown:function()
{return{init:function(e)
{if(this.rtePaste)return;var key=e.which;var arrow=(key>=37&&key<=40);this.keydown.ctrl=e.ctrlKey||e.metaKey;this.keydown.current=this.selection.getCurrent();this.keydown.parent=this.selection.getParent();this.keydown.block=this.selection.getBlock();this.keydown.pre=this.utils.isTag(this.keydown.current,'pre');this.keydown.blockquote=this.utils.isTag(this.keydown.current,'blockquote');this.keydown.figcaption=this.utils.isTag(this.keydown.current,'figcaption');this.shortcuts.init(e,key);if(this.utils.isDesktop())
{this.keydown.checkEvents(arrow,key);this.keydown.setupBuffer(e,key);}
this.keydown.addArrowsEvent(arrow);this.keydown.setupSelectAll(e,key);var keydownStop=this.core.setCallback('keydown',e);if(keydownStop===false)
{e.preventDefault();return false;}
if(this.opts.enterKey&&(this.utils.browser('msie')||this.utils.browser('mozilla'))&&(key===this.keyCode.DOWN||key===this.keyCode.RIGHT))
{var isEndOfTable=false;var $table=false;if(this.keydown.block&&this.keydown.block.tagName==='TD')
{$table=$(this.keydown.block).closest('table',this.$editor[0]);}
if($table&&$table.find('td').last()[0]===this.keydown.block)
{isEndOfTable=true;}
if(this.utils.isEndOfElement()&&isEndOfTable)
{var node=$(this.opts.emptyHtml);$table.after(node);this.caret.setStart(node);}}
if(this.opts.enterKey&&key===this.keyCode.DOWN)
{this.keydown.onArrowDown();}
if(!this.opts.enterKey&&key===this.keyCode.ENTER)
{e.preventDefault();if(!this.range.collapsed)this.range.deleteContents();return;}
if(key==this.keyCode.ENTER&&!e.shiftKey&&!e.ctrlKey&&!e.metaKey)
{var stop=this.core.setCallback('enter',e);if(stop===false)
{e.preventDefault();return false;}
if(this.keydown.blockquote&&this.keydown.exitFromBlockquote(e)===true)
{return false;}
var current,$next;if(this.keydown.pre)
{return this.keydown.insertNewLine(e);}
else if(this.keydown.blockquote||this.keydown.figcaption)
{current=this.selection.getCurrent();$next=$(current).next();if($next.length!==0&&$next[0].tagName=='BR')
{return this.keydown.insertBreakLine(e);}
else if(this.utils.isEndOfElement()&&(current&&current!='SPAN'))
{return this.keydown.insertDblBreakLine(e);}
else
{return this.keydown.insertBreakLine(e);}}
else if(this.opts.linebreaks&&!this.keydown.block)
{current=this.selection.getCurrent();$next=$(this.keydown.current).next();if($next.length!==0&&$next[0].tagName=='BR')
{return this.keydown.insertBreakLine(e);}
else if(current!==false&&$(current).hasClass('redactor-invisible-space'))
{this.caret.setAfter(current);$(current).contents().unwrap();return this.keydown.insertDblBreakLine(e);}
else
{if(this.utils.isEndOfEditor())
{return this.keydown.insertDblBreakLine(e);}
else if($next.length===0&&current===false&&typeof $next.context!='undefined')
{return this.keydown.insertBreakLine(e);}
return this.keydown.insertBreakLine(e);}}
else if(this.opts.linebreaks&&this.keydown.block)
{setTimeout($.proxy(this.keydown.replaceDivToBreakLine,this),1);}
else if(!this.opts.linebreaks&&this.keydown.block)
{setTimeout($.proxy(this.keydown.replaceDivToParagraph,this),1);if(this.keydown.block.tagName==='LI')
{current=this.selection.getCurrent();var $parent=$(current).closest('li',this.$editor[0]);var $list=$parent.closest('ul,ol',this.$editor[0]);if($parent.length!==0&&this.utils.isEmpty($parent.html())&&$list.next().length===0&&this.utils.isEmpty($list.find("li").last().html()))
{$list.find("li").last().remove();var node=$(this.opts.emptyHtml);$list.after(node);this.caret.setStart(node);return false;}}}
else if(!this.opts.linebreaks&&!this.keydown.block)
{return this.keydown.insertParagraph(e);}}
if(key===this.keyCode.ENTER&&(e.ctrlKey||e.shiftKey))
{return this.keydown.onShiftEnter(e);}
if(key===this.keyCode.TAB||e.metaKey&&key===221||e.metaKey&&key===219)
{return this.keydown.onTab(e,key);}
if(key===this.keyCode.BACKSPACE||key===this.keyCode.DELETE)
{var nodes=this.selection.getNodes();if(nodes)
{var len=nodes.length;var last;for(var i=0;i<len;i++)
{var children=$(nodes[i]).children('img');if(children.length!==0)
{var self=this;$.each(children,function(z,s)
{var $s=$(s);if($s.css('float')!='none')return;self.core.setCallback('imageDelete',s.src,$s);last=s;});}
else if(nodes[i].tagName=='IMG')
{if(last!=nodes[i])
{this.core.setCallback('imageDelete',nodes[i].src,$(nodes[i]));last=nodes[i];}}}}}
if(key===this.keyCode.BACKSPACE)
{var block=this.selection.getBlock();var indented=($(block).css('margin-left')!=='0px');if(block&&indented&&this.range.collapsed&&this.utils.isStartOfElement())
{this.indent.decrease();e.preventDefault();return;}
if(this.utils.browser('mozilla'))
{var prev=this.selection.getPrev();var prev2=$(prev).prev()[0];if(prev&&prev.tagName==='HR')$(prev).remove();if(prev2&&prev2.tagName==='HR')$(prev2).remove();}
this.keydown.removeInvisibleSpace();this.keydown.removeEmptyListInTable(e);}
this.code.sync();},checkEvents:function(arrow,key)
{if(!arrow&&(this.core.getEvent()=='click'||this.core.getEvent()=='arrow'))
{this.core.addEvent(false);if(this.keydown.checkKeyEvents(key))
{this.buffer.set();}}},checkKeyEvents:function(key)
{var k=this.keyCode;var keys=[k.BACKSPACE,k.DELETE,k.ENTER,k.SPACE,k.ESC,k.TAB,k.CTRL,k.META,k.ALT,k.SHIFT];return($.inArray(key,keys)==-1)?true:false;},addArrowsEvent:function(arrow)
{if(!arrow)return;if((this.core.getEvent()=='click'||this.core.getEvent()=='arrow'))
{this.core.addEvent(false);return;}
this.core.addEvent('arrow');},setupBuffer:function(e,key)
{if(this.keydown.ctrl&&key===90&&!e.shiftKey&&!e.altKey&&this.opts.buffer.length)
{e.preventDefault();this.buffer.undo();return;}
else if(this.keydown.ctrl&&key===90&&e.shiftKey&&!e.altKey&&this.opts.rebuffer.length!==0)
{e.preventDefault();this.buffer.redo();return;}
else if(!this.keydown.ctrl)
{if(key==this.keyCode.BACKSPACE||key==this.keyCode.DELETE||(key==this.keyCode.ENTER&&!e.ctrlKey&&!e.shiftKey)||key==this.keyCode.SPACE)
{this.buffer.set();}}},setupSelectAll:function(e,key)
{if(this.keydown.ctrl&&key===65)
{this.utils.enableSelectAll();}
else if(key!=this.keyCode.LEFT_WIN&&!this.keydown.ctrl)
{this.utils.disableSelectAll();}},onArrowDown:function()
{var tags=[this.keydown.blockquote,this.keydown.pre,this.keydown.figcaption];for(var i=0;i<tags.length;i++)
{if(tags[i])
{this.keydown.insertAfterLastElement(tags[i]);return false;}}},onShiftEnter:function(e)
{this.buffer.set();if(this.utils.isEndOfElement())
{return this.keydown.insertDblBreakLine(e);}
return this.keydown.insertBreakLine(e);},onTab:function(e,key)
{if(!this.opts.tabKey)return true;if(this.utils.isEmpty(this.code.get())&&this.opts.tabAsSpaces===false)return true;e.preventDefault();var node;if(this.keydown.pre&&!e.shiftKey)
{node=(this.opts.preSpaces)?document.createTextNode(Array(this.opts.preSpaces+1).join('\u00a0')):document.createTextNode('\t');this.insert.node(node);this.code.sync();}
else if(this.opts.tabAsSpaces!==false)
{node=document.createTextNode(Array(this.opts.tabAsSpaces+1).join('\u00a0'));this.insert.node(node);this.code.sync();}
else
{if(e.metaKey&&key===219)this.indent.decrease();else if(e.metaKey&&key===221)this.indent.increase();else if(!e.shiftKey)this.indent.increase();else this.indent.decrease();}
return false;},replaceDivToBreakLine:function()
{var blockElem=this.selection.getBlock();var blockHtml=blockElem.innerHTML.replace(/<br\s?\/?>/gi,'');if((blockElem.tagName==='DIV'||blockElem.tagName==='P')&&blockHtml===''&&!$(blockElem).hasClass('redactor-editor'))
{var br=document.createElement('br');$(blockElem).replaceWith(br);this.caret.setBefore(br);this.code.sync();return false;}},replaceDivToParagraph:function()
{var blockElem=this.selection.getBlock();var blockHtml=blockElem.innerHTML.replace(/<br\s?\/?>/gi,'');if(blockElem.tagName==='DIV'&&this.utils.isEmpty(blockHtml)&&!$(blockElem).hasClass('redactor-editor'))
{var p=document.createElement('p');p.innerHTML=this.opts.invisibleSpace;$(blockElem).replaceWith(p);this.caret.setStart(p);this.code.sync();return false;}
else if(this.opts.cleanStyleOnEnter&&blockElem.tagName=='P')
{$(blockElem).removeAttr('class').removeAttr('style');}},insertParagraph:function(e)
{e.preventDefault();this.selection.get();var p=document.createElement('p');p.innerHTML=this.opts.invisibleSpace;this.range.deleteContents();this.range.insertNode(p);this.caret.setStart(p);this.code.sync();return false;},exitFromBlockquote:function(e)
{if(!this.utils.isEndOfElement())return;var tmp=$.trim($(this.keydown.block).html());if(tmp.search(/(<br\s?\/?>){2}$/i)!=-1)
{e.preventDefault();if(this.opts.linebreaks)
{var br=document.createElement('br');$(this.keydown.blockquote).after(br);this.caret.setBefore(br);$(this.keydown.block).html(tmp.replace(/<br\s?\/?>$/i,''));}
else
{var node=$(this.opts.emptyHtml);$(this.keydown.blockquote).after(node);this.caret.setStart(node);}
return true;}
return;},insertAfterLastElement:function(element)
{if(!this.utils.isEndOfElement())return;this.buffer.set();if(this.opts.linebreaks)
{var contents=$('<div>').append($.trim(this.$editor.html())).contents();var last=contents.last()[0];if(last.tagName=='SPAN'&&last.innerHTML==='')
{last=contents.prev()[0];}
if(this.utils.getOuterHtml(last)!=this.utils.getOuterHtml(element))return;var br=document.createElement('br');$(element).after(br);this.caret.setAfter(br);}
else
{if(this.$editor.contents().last()[0]!==element)return;var node=$(this.opts.emptyHtml);$(element).after(node);this.caret.setStart(node);}},insertNewLine:function(e)
{e.preventDefault();var node=document.createTextNode('\n');this.selection.get();this.range.deleteContents();this.range.insertNode(node);this.caret.setAfter(node);this.code.sync();return false;},insertBreakLine:function(e)
{return this.keydown.insertBreakLineProcessing(e);},insertDblBreakLine:function(e)
{return this.keydown.insertBreakLineProcessing(e,true);},insertBreakLineProcessing:function(e,dbl)
{e.stopPropagation();this.selection.get();var br1=document.createElement('br');if(this.utils.browser('msie'))
{this.range.collapse(false);this.range.setEnd(this.range.endContainer,this.range.endOffset);}
else
{this.range.deleteContents();}
this.range.insertNode(br1);var $parentA=$(br1).parent("a");if($parentA.length>0)
{$parentA.find(br1).remove();$parentA.after(br1);}
if(dbl===true)
{var $next=$(br1).next();if($next.length!==0&&$next[0].tagName==='BR'&&this.utils.isEndOfEditor())
{this.caret.setAfter(br1);this.code.sync();return false;}
var br2=document.createElement('br');this.range.insertNode(br2);this.caret.setAfter(br2);}
else
{if(this.utils.browser('msie'))
{var space=document.createElement('span');space.innerHTML='&#x200b;';$(br1).after(space);this.caret.setAfter(space);$(space).remove();}
else
{var range=document.createRange();range.setStartAfter(br1);range.collapse(true);var selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);}}
this.code.sync();return false;},removeInvisibleSpace:function()
{var $current=$(this.keydown.current);if($current.text().search(/^\u200B$/g)===0)
{$current.remove();}},removeEmptyListInTable:function(e)
{var $current=$(this.keydown.current);var $parent=$(this.keydown.parent);var td=$current.closest('td',this.$editor[0]);if(td.length!==0&&$current.closest('li',this.$editor[0])&&$parent.children('li').length===1)
{if(!this.utils.isEmpty($current.text()))return;e.preventDefault();$current.remove();$parent.remove();this.caret.setStart(td);}}};},keyup:function()
{return{init:function(e)
{if(this.rtePaste)return;var key=e.which;this.keyup.current=this.selection.getCurrent();this.keyup.parent=this.selection.getParent();var $parent=this.utils.isRedactorParent($(this.keyup.parent).parent());var keyupStop=this.core.setCallback('keyup',e);if(keyupStop===false)
{e.preventDefault();return false;}
if(!this.opts.linebreaks&&this.keyup.current.nodeType==3&&this.keyup.current.length<=1&&(this.keyup.parent===false||this.keyup.parent.tagName=='BODY'))
{this.keyup.replaceToParagraph();}
if(!this.opts.linebreaks&&this.utils.isRedactorParent(this.keyup.current)&&this.keyup.current.tagName==='DIV')
{this.keyup.replaceToParagraph(false);}
if(!this.opts.linebreaks&&$(this.keyup.parent).hasClass('redactor-invisible-space')&&($parent===false||$parent[0].tagName=='BODY'))
{$(this.keyup.parent).contents().unwrap();this.keyup.replaceToParagraph();}
if(this.linkify.isEnabled()&&this.linkify.isKey(key))this.linkify.format();if(key===this.keyCode.DELETE||key===this.keyCode.BACKSPACE)
{if(this.utils.browser('mozilla'))
{var td=$(this.keydown.current).closest('td',this.$editor[0]);if(td.size()!==0&&td.text()!=='')
{e.preventDefault();return false;}}
this.clean.clearUnverified();if(this.observe.image)
{e.preventDefault();this.image.hideResize();this.buffer.set();this.image.remove(this.observe.image);this.observe.image=false;return false;}
this.$editor.find('p').each($.proxy(function(i,s)
{this.utils.removeEmpty(i,$(s).html());},this));if(this.opts.linebreaks&&this.keyup.current&&this.keyup.current.tagName=='DIV'&&this.utils.isEmpty(this.keyup.current.innerHTML))
{$(this.keyup.current).after(this.selection.getMarkerAsHtml());this.selection.restore();$(this.keyup.current).remove();}
return this.keyup.formatEmpty(e);}},replaceToParagraph:function(clone)
{var $current=$(this.keyup.current);var node;if(clone===false)
{node=$('<p>').append($current.html());}
else
{node=$('<p>').append($current.clone());}
$current.replaceWith(node);var next=$(node).next();if(typeof(next[0])!=='undefined'&&next[0].tagName=='BR')
{next.remove();}
this.caret.setEnd(node);},formatEmpty:function(e)
{var html=$.trim(this.$editor.html());if(!this.utils.isEmpty(html))return;e.preventDefault();if(this.opts.linebreaks)
{this.$editor.html(this.selection.getMarkerAsHtml());this.selection.restore();}
else
{this.$editor.html(this.opts.emptyHtml);this.focus.setStart();}
this.code.sync();return false;}};},lang:function()
{return{load:function()
{this.opts.curLang=this.opts.langs[this.opts.lang];},get:function(name)
{return(typeof this.opts.curLang[name]!='undefined')?this.opts.curLang[name]:'';}};},line:function()
{return{insert:function()
{this.buffer.set();var blocks=this.selection.getBlocks();if(blocks[0]!==false&&this.line.isExceptLastOrFirst(blocks))
{if(!this.utils.browser('msie'))this.$editor.focus();return;}
if(this.utils.browser('msie'))
{this.line.insertInIe();}
else
{this.line.insertInOthersBrowsers();}},isExceptLastOrFirst:function(blocks)
{var exceptTags=['li','td','th','blockquote','figcaption','pre','dl','dt','dd'];var first=blocks[0].tagName.toLowerCase();var last=this.selection.getLastBlock();last=(typeof last=='undefined')?first:last.tagName.toLowerCase();var firstFound=$.inArray(first,exceptTags)!=-1;var lastFound=$.inArray(last,exceptTags)!=-1;if((firstFound&&lastFound)||firstFound)
{return true;}},insertInIe:function()
{this.utils.saveScroll();this.buffer.set();this.insert.node(document.createElement('hr'));this.utils.restoreScroll();this.code.sync();},insertInOthersBrowsers:function()
{this.buffer.set();var extra='<p id="redactor-insert-line"><br /></p>';if(this.opts.linebreaks)extra='<br id="redactor-insert-line">';document.execCommand('insertHtml',false,'<hr>'+extra);this.line.setFocus();this.code.sync();},setFocus:function()
{var node=this.$editor.find('#redactor-insert-line');var next=$(node).next()[0];var target=next;if(this.utils.browser('mozilla')&&next&&next.innerHTML==='')
{target=$(next).next()[0];$(next).remove();}
if(target)
{node.remove();if(!this.opts.linebreaks)
{this.$editor.focus();this.line.setStart(target);}}
else
{node.removeAttr('id');this.line.setStart(node[0]);}},setStart:function(node)
{if(typeof node==='undefined')return;var textNode=document.createTextNode('\u200B');this.selection.get();this.range.setStart(node,0);this.range.insertNode(textNode);this.range.collapse(true);this.selection.addRange();}};},link:function()
{return{show:function(e)
{if(typeof e!='undefined'&&e.preventDefault)e.preventDefault();if(!this.observe.isCurrent('a'))
{this.modal.load('link',this.lang.get('link_insert'),600);}
else
{this.modal.load('link',this.lang.get('link_edit'),600);}
this.modal.createCancelButton();var buttonText=!this.observe.isCurrent('a')?this.lang.get('insert'):this.lang.get('edit');this.link.buttonInsert=this.modal.createActionButton(buttonText);this.selection.get();this.link.getData();this.link.cleanUrl();if(this.link.target=='_blank')$('#redactor-link-blank').prop('checked',true);this.link.$inputUrl=$('#redactor-link-url');this.link.$inputText=$('#redactor-link-url-text');this.link.$inputText.val(this.link.text);this.link.$inputUrl.val(this.link.url);this.link.buttonInsert.on('click',$.proxy(this.link.insert,this));$('.redactor-link-tooltip').remove();this.selection.save();this.modal.show();this.link.$inputUrl.focus();},cleanUrl:function()
{var thref=self.location.href.replace(/\/$/i,'');if(typeof this.link.url!=="undefined")
{this.link.url=this.link.url.replace(thref,'');this.link.url=this.link.url.replace(/^\/#/,'#');this.link.url=this.link.url.replace('mailto:','');if(!this.opts.linkProtocol)
{var re=new RegExp('^(http|ftp|https)://'+self.location.host,'i');this.link.url=this.link.url.replace(re,'');}}},getData:function()
{this.link.$node=false;var $el=$(this.selection.getCurrent()).closest('a',this.$editor[0]);if($el.length!==0&&$el[0].tagName==='A')
{this.link.$node=$el;this.link.url=$el.attr('href');this.link.text=$el.text();this.link.target=$el.attr('target');}
else
{this.link.text=this.sel.toString();this.link.url='';this.link.target='';}},insert:function()
{this.placeholder.remove();var target='';var link=this.link.$inputUrl.val();var text=this.link.$inputText.val().replace(/(<([^>]+)>)/ig,"");if($.trim(link)==='')
{this.link.$inputUrl.addClass('redactor-input-error').on('keyup',function()
{$(this).removeClass('redactor-input-error');$(this).off('keyup');});return;}
if(link.search('@')!=-1&&/(http|ftp|https):\/\//i.test(link)===false)
{link='mailto:'+link;}
else if(link.search('#')!==0)
{if($('#redactor-link-blank').prop('checked'))
{target='_blank';}
var pattern='((xn--)?[a-z0-9]+(-[a-z0-9]+)*\\.)+[a-z]{2,}';var re=new RegExp('^(http|ftp|https)://'+pattern,'i');var re2=new RegExp('^'+pattern,'i');var re3=new RegExp('\.(html|php)$','i');if(link.search(re)==-1&&link.search(re3)==-1&&link.search(re2)===0&&this.opts.linkProtocol)
{link=this.opts.linkProtocol+'://'+link;}}
this.link.set(text,link,target);this.modal.close();},set:function(text,link,target)
{text=$.trim(text.replace(/<|>/g,''));this.selection.restore();var blocks=this.selection.getBlocks();if(text===''&&link==='')return;if(text===''&&link!=='')text=link;if(this.link.$node)
{this.buffer.set();var $link=this.link.$node,$el=$link.children();if($el.length>0)
{while($el.length)
{$el=$el.children();}
$el=$el.end();}
else
{$el=$link;}
$link.attr('href',link);$el.text(text);if(target!=='')
{$link.attr('target',target);}
else
{$link.removeAttr('target');}
this.selection.selectElement($link);this.code.sync();}
else
{if(this.utils.browser('mozilla')&&this.link.text==='')
{var $a=$('<a />').attr('href',link).text(text);if(target!=='')$a.attr('target',target);this.insert.node($a);this.selection.selectElement($a);}
else
{var $a;if(this.utils.browser('msie'))
{$a=$('<a href="'+link+'">').text(text);if(target!=='')$a.attr('target',target);$a=$(this.insert.node($a));if(this.selection.getText().match(/\s$/))
{$a.after(" ");}
this.selection.selectElement($a);}
else
{document.execCommand('createLink',false,link);$a=$(this.selection.getCurrent()).closest('a',this.$editor[0]);if(this.utils.browser('mozilla'))
{$a=$('a[_moz_dirty=""]');}
if(target!=='')$a.attr('target',target);$a.removeAttr('style').removeAttr('_moz_dirty');if(this.selection.getText().match(/\s$/))
{$a.after(" ");}
if(this.link.text!==''||this.link.text!=text)
{if(!this.opts.linebreaks&&blocks&&blocks.length<=1)
{$a.text(text);}
this.selection.selectElement($a);}}}
this.code.sync();this.core.setCallback('insertedLink',$a);}
setTimeout($.proxy(function()
{this.observe.links();},this),5);},unlink:function(e)
{if(typeof e!='undefined'&&e.preventDefault)
{e.preventDefault();}
var nodes=this.selection.getNodes();if(!nodes)return;this.buffer.set();var len=nodes.length;var links=[];for(var i=0;i<len;i++)
{if(nodes[i].tagName==='A')
{links.push(nodes[i]);}
var $node=$(nodes[i]).closest('a',this.$editor[0]);$node.replaceWith($node.contents());}
this.core.setCallback('deletedLink',links);$('.redactor-link-tooltip').remove();this.code.sync();},toggleClass:function(className)
{this.link.setClass(className,'toggleClass');},addClass:function(className)
{this.link.setClass(className,'addClass');},removeClass:function(className)
{this.link.setClass(className,'removeClass');},setClass:function(className,func)
{var links=this.selection.getInlinesTags(['a']);if(links===false)return;$.each(links,function()
{$(this)[func](className);});}};},linkify:function()
{return{isKey:function(key)
{return key==this.keyCode.ENTER||key==this.keyCode.SPACE;},isEnabled:function()
{return this.opts.convertLinks&&(this.opts.convertUrlLinks||this.opts.convertImageLinks||this.opts.convertVideoLinks)&&!this.utils.isCurrentOrParent('PRE');},format:function()
{var linkify=this.linkify,opts=this.opts;this.$editor.find(":not(iframe,img,a,pre)").addBack().contents().filter(function()
{return this.nodeType===3&&$.trim(this.nodeValue)!=""&&!$(this).parent().is("pre")&&(this.nodeValue.match(opts.linkify.regexps.youtube)||this.nodeValue.match(opts.linkify.regexps.vimeo)||this.nodeValue.match(opts.linkify.regexps.image)||this.nodeValue.match(opts.linkify.regexps.url));}).each(function()
{var text=$(this).text(),html=text;if(opts.convertVideoLinks&&(html.match(opts.linkify.regexps.youtube)||html.match(opts.linkify.regexps.vimeo)))
{html=linkify.convertVideoLinks(html);}
else if(opts.convertImageLinks&&html.match(opts.linkify.regexps.image))
{html=linkify.convertImages(html);}
else if(opts.convertUrlLinks)
{html=linkify.convertLinks(html);}
$(this).before(text.replace(text,html)).remove();});var objects=this.$editor.find('.redactor-linkify-object').each(function()
{var $el=$(this);$el.removeClass('redactor-linkify-object');if($el.attr('class')==='')$el.removeAttr('class');return $el[0];});this.core.setCallback('linkify',objects);this.code.sync();},convertVideoLinks:function(html)
{var iframeStart='<iframe class="redactor-linkify-object" width="500" height="281" src="',iframeEnd='" frameborder="0" allowfullscreen></iframe>';if(html.match(this.opts.linkify.regexps.youtube))
{html=html.replace(this.opts.linkify.regexps.youtube,iframeStart+'//www.youtube.com/embed/$1'+iframeEnd);}
if(html.match(this.opts.linkify.regexps.vimeo))
{html=html.replace(this.opts.linkify.regexps.vimeo,iframeStart+'//player.vimeo.com/video/$2'+iframeEnd);}
return html;},convertImages:function(html)
{var matches=html.match(this.opts.linkify.regexps.image);if(matches)
{html=html.replace(html,'<img src="'+matches+'" class="redactor-linkify-object" />');if(this.opts.linebreaks)
{if(!this.utils.isEmpty(this.code.get()))
{html='<br>'+html;}}
html+='<br>';}
return html;},convertLinks:function(html)
{var matches=html.match(this.opts.linkify.regexps.url);if(matches)
{matches=$.grep(matches,function(v,k){return $.inArray(v,matches)===k;});var length=matches.length;for(var i=0;i<length;i++)
{var href=matches[i],text=href,linkProtocol=this.opts.linkProtocol+'://';if(href.match(/(https?|ftp):\/\//i)!==null)
{linkProtocol="";}
if(text.length>this.opts.linkSize)
{text=text.substring(0,this.opts.linkSize)+'...';}
text=decodeURIComponent(text);var regexB="\\b";if($.inArray(href.slice(-1),["/","&","="])!=-1)
{regexB="";}
var regexp=new RegExp('('+href.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")+regexB+')','g');html=html.replace(regexp,'<a href="'+linkProtocol+$.trim(href)+'" class="redactor-linkify-object">'+$.trim(text)+'</a>');}}
return html;}};},list:function()
{return{toggle:function(cmd)
{this.placeholder.remove();if(!this.utils.browser('msie'))this.$editor.focus();this.buffer.set();this.selection.save();var parent=this.selection.getParent();var $list=$(parent).closest('ol, ul',this.$editor[0]);if(!this.utils.isRedactorParent($list)&&$list.length!==0)
{$list=false;}
var isUnorderedCmdOrdered,isOrderedCmdUnordered;var remove=false;if($list&&$list.length)
{remove=true;var listTag=$list[0].tagName;isUnorderedCmdOrdered=(cmd==='orderedlist'&&listTag==='UL');isOrderedCmdUnordered=(cmd==='unorderedlist'&&listTag==='OL');}
if(isUnorderedCmdOrdered)
{this.utils.replaceToTag($list,'ol');}
else if(isOrderedCmdUnordered)
{this.utils.replaceToTag($list,'ul');}
else
{if(remove)
{this.list.remove(cmd,$list);}
else
{this.list.insert(cmd);}}
this.selection.restore();this.code.sync();},insert:function(cmd)
{var current=this.selection.getCurrent();var $td=$(current).closest('td, th',this.$editor[0]);if(this.utils.browser('msie')&&this.opts.linebreaks)
{this.list.insertInIe(cmd);}
else
{document.execCommand('insert'+cmd);}
var parent=this.selection.getParent();var $list=$(parent).closest('ol, ul',this.$editor[0]);if($td.length!==0)
{var newTd=$td.clone();$td.after(newTd).remove('');}
if(this.utils.isEmpty($list.find('li').text()))
{var $children=$list.children('li');$children.find('br').remove();$children.append(this.selection.getMarkerAsHtml());if(this.opts.linebreaks&&this.utils.browser('mozilla')&&$children.size()==2&&this.utils.isEmpty($children.eq(1).text()))
{$children.eq(1).remove();}}
if($list.length)
{var $listParent=$list.parent();if(this.utils.isRedactorParent($listParent)&&$listParent[0].tagName!='LI'&&this.utils.isBlock($listParent[0]))
{$listParent.replaceWith($listParent.contents());}}
if(!this.utils.browser('msie'))
{this.$editor.focus();}
this.clean.clearUnverified();},insertInIe:function(cmd)
{var wrapper=this.selection.wrap('div');var wrapperHtml=$(wrapper).html();var tmpList=(cmd=='orderedlist')?$('<ol>'):$('<ul>');var tmpLi=$('<li>');if($.trim(wrapperHtml)==='')
{tmpLi.append(this.selection.getMarkerAsHtml());tmpList.append(tmpLi);this.$editor.find('#selection-marker-1').replaceWith(tmpList);}
else
{var items=wrapperHtml.split(/<br\s?\/?>/gi);if(items)
{for(var i=0;i<items.length;i++)
{if($.trim(items[i])!=='')
{tmpList.append($('<li>').html(items[i]));}}}
else
{tmpLi.append(wrapperHtml);tmpList.append(tmpLi);}
$(wrapper).replaceWith(tmpList);}},remove:function(cmd,$list)
{if($.inArray('ul',this.selection.getBlocks()))cmd='unorderedlist';document.execCommand('insert'+cmd);var $current=$(this.selection.getCurrent());this.indent.fixEmptyIndent();if(!this.opts.linebreaks&&$current.closest('li, th, td',this.$editor[0]).length===0)
{document.execCommand('formatblock',false,'p');this.$editor.find('ul, ol, blockquote').each($.proxy(this.utils.removeEmpty,this));}
var $table=$(this.selection.getCurrent()).closest('table',this.$editor[0]);var $prev=$table.prev();if(!this.opts.linebreaks&&$table.length!==0&&$prev.length!==0&&$prev[0].tagName=='BR')
{$prev.remove();}
this.clean.clearUnverified();}};},modal:function()
{return{callbacks:{},loadTemplates:function()
{this.opts.modal={imageEdit:String()
+'<section id="redactor-modal-image-edit">'
+'<label>'+this.lang.get('title')+'</label>'
+'<input type="text" id="redactor-image-title" />'
+'<label class="redactor-image-link-option">'+this.lang.get('link')+'</label>'
+'<input type="text" id="redactor-image-link" class="redactor-image-link-option" aria-label="'+this.lang.get('link')+'" />'
+'<label class="redactor-image-link-option"><input type="checkbox" id="redactor-image-link-blank" aria-label="'+this.lang.get('link_new_tab')+'"> '+this.lang.get('link_new_tab')+'</label>'
+'<label class="redactor-image-position-option">'+this.lang.get('image_position')+'</label>'
+'<select class="redactor-image-position-option" id="redactor-image-align" aria-label="'+this.lang.get('image_position')+'">'
+'<option value="none">'+this.lang.get('none')+'</option>'
+'<option value="left">'+this.lang.get('left')+'</option>'
+'<option value="center">'+this.lang.get('center')+'</option>'
+'<option value="right">'+this.lang.get('right')+'</option>'
+'</select>'
+'</section>',image:String()
+'<section id="redactor-modal-image-insert">'
+'<div id="redactor-modal-image-droparea"></div>'
+'</section>',file:String()
+'<section id="redactor-modal-file-insert">'
+'<div id="redactor-modal-file-upload-box">'
+'<label>'+this.lang.get('filename')+'</label>'
+'<input type="text" id="redactor-filename" aria-label="'+this.lang.get('filename')+'" /><br><br>'
+'<div id="redactor-modal-file-upload"></div>'
+'</div>'
+'</section>',link:String()
+'<section id="redactor-modal-link-insert">'
+'<label>URL</label>'
+'<input type="url" id="redactor-link-url" aria-label="URL" />'
+'<label>'+this.lang.get('text')+'</label>'
+'<input type="text" id="redactor-link-url-text" aria-label="'+this.lang.get('text')+'" />'
+'<label><input type="checkbox" id="redactor-link-blank"> '+this.lang.get('link_new_tab')+'</label>'
+'</section>'};$.extend(this.opts,this.opts.modal);},addCallback:function(name,callback)
{this.modal.callbacks[name]=callback;},createTabber:function($modal)
{this.modal.$tabber=$('<div>').attr('id','redactor-modal-tabber');$modal.prepend(this.modal.$tabber);},addTab:function(id,name,active)
{var $tab=$('<a href="#" rel="tab'+id+'">').text(name);if(active)
{$tab.addClass('active');}
var self=this;$tab.on('click',function(e)
{e.preventDefault();$('.redactor-tab').hide();$('.redactor-'+$(this).attr('rel')).show();self.modal.$tabber.find('a').removeClass('active');$(this).addClass('active');});this.modal.$tabber.append($tab);},addTemplate:function(name,template)
{this.opts.modal[name]=template;},getTemplate:function(name)
{return this.opts.modal[name];},getModal:function()
{return this.$modalBody.find('section');},load:function(templateName,title,width)
{this.modal.templateName=templateName;this.modal.width=width;this.modal.build();this.modal.enableEvents();this.modal.setTitle(title);this.modal.setDraggable();this.modal.setContent();if(typeof this.modal.callbacks[templateName]!='undefined')
{this.modal.callbacks[templateName].call(this);}},show:function()
{this.utils.disableBodyScroll();if(this.utils.isMobile())
{this.modal.showOnMobile();}
else
{this.modal.showOnDesktop();}
if(this.opts.highContrast)
{this.$modalBox.addClass("redactor-modal-contrast");}
this.$modalOverlay.show();this.$modalBox.show();this.$modal.attr('tabindex','-1');this.$modal.focus();this.modal.setButtonsWidth();this.utils.saveScroll();if(!this.utils.isMobile())
{setTimeout($.proxy(this.modal.showOnDesktop,this),0);$(window).on('resize.redactor-modal',$.proxy(this.modal.resize,this));}
this.core.setCallback('modalOpened',this.modal.templateName,this.$modal);$(document).off('focusin.modal');this.$modal.find('input[type=text],input[type=url],input[type=email]').on('keydown.redactor-modal',$.proxy(this.modal.setEnter,this));},showOnDesktop:function()
{var height=this.$modal.outerHeight();var windowHeight=$(window).height();var windowWidth=$(window).width();if(this.modal.width>windowWidth)
{this.$modal.css({width:'96%',marginTop:(windowHeight/2-height/2)+'px'});return;}
if(height>windowHeight)
{this.$modal.css({width:this.modal.width+'px',marginTop:'20px'});}
else
{this.$modal.css({width:this.modal.width+'px',marginTop:(windowHeight/2-height/2)+'px'});}},showOnMobile:function()
{this.$modal.css({width:'96%',marginTop:'2%'});},resize:function()
{if(this.utils.isMobile())
{this.modal.showOnMobile();}
else
{this.modal.showOnDesktop();}},setTitle:function(title)
{this.$modalHeader.html(title);},setContent:function()
{this.$modalBody.html(this.modal.getTemplate(this.modal.templateName));},setDraggable:function()
{if(typeof $.fn.draggable==='undefined')return;this.$modal.draggable({handle:this.$modalHeader});this.$modalHeader.css('cursor','move');},setEnter:function(e)
{if(e.which!=13)return;e.preventDefault();this.$modal.find('button.redactor-modal-action-btn').click();},createCancelButton:function()
{var button=$('<button>').addClass('redactor-modal-btn redactor-modal-close-btn').html(this.lang.get('cancel'));button.on('click',$.proxy(this.modal.close,this));this.$modalFooter.append(button);},createDeleteButton:function(label)
{return this.modal.createButton(label,'delete');},createActionButton:function(label)
{return this.modal.createButton(label,'action');},createButton:function(label,className)
{var button=$('<button>').addClass('redactor-modal-btn').addClass('redactor-modal-'+className+'-btn').html(label);this.$modalFooter.append(button);return button;},setButtonsWidth:function()
{var buttons=this.$modalFooter.find('button');var buttonsSize=buttons.length;if(buttonsSize===0)return;buttons.css('width',(100/buttonsSize)+'%');},build:function()
{this.modal.buildOverlay();this.$modalBox=$('<div id="redactor-modal-box"/>').hide();this.$modal=$('<div id="redactor-modal" role="dialog" aria-labelledby="redactor-modal-header" />');this.$modalHeader=$('<header id="redactor-modal-header"/>');this.$modalClose=$('<button type="button" id="redactor-modal-close" tabindex="1" aria-label="Close" />').html('&times;');this.$modalBody=$('<div id="redactor-modal-body" />');this.$modalFooter=$('<footer />');this.$modal.append(this.$modalHeader);this.$modal.append(this.$modalClose);this.$modal.append(this.$modalBody);this.$modal.append(this.$modalFooter);this.$modalBox.append(this.$modal);this.$modalBox.appendTo(document.body);},buildOverlay:function()
{this.$modalOverlay=$('<div id="redactor-modal-overlay">').hide();$('body').prepend(this.$modalOverlay);},enableEvents:function()
{this.$modalClose.on('click.redactor-modal',$.proxy(this.modal.close,this));$(document).on('keyup.redactor-modal',$.proxy(this.modal.closeHandler,this));this.$editor.on('keyup.redactor-modal',$.proxy(this.modal.closeHandler,this));this.$modalBox.on('click.redactor-modal',$.proxy(this.modal.close,this));},disableEvents:function()
{this.$modalClose.off('click.redactor-modal');$(document).off('keyup.redactor-modal');this.$editor.off('keyup.redactor-modal');this.$modalBox.off('click.redactor-modal');$(window).off('resize.redactor-modal');},closeHandler:function(e)
{if(e.which!=this.keyCode.ESC)return;this.modal.close(false);},close:function(e)
{if(e)
{if(!$(e.target).hasClass('redactor-modal-close-btn')&&e.target!=this.$modalClose[0]&&e.target!=this.$modalBox[0])
{return;}
e.preventDefault();}
if(!this.$modalBox)return;this.modal.disableEvents();this.utils.enableBodyScroll();this.$modalOverlay.remove();this.$modalBox.fadeOut('fast',$.proxy(function()
{this.$modalBox.remove();setTimeout($.proxy(this.utils.restoreScroll,this),0);if(e!==undefined)this.selection.restore();$(document.body).css('overflow',this.modal.bodyOveflow);this.core.setCallback('modalClosed',this.modal.templateName);},this));}};},observe:function()
{return{load:function()
{if(typeof this.opts.destroyed!="undefined")return;if(this.utils.browser('msie'))
{var self=this;this.$editor.find('pre, code').on('mouseover',function()
{self.$editor.attr('contenteditable',false);$(this).attr('contenteditable',true);}).on('mouseout',function()
{self.$editor.attr('contenteditable',true);$(this).removeAttr('contenteditable');});}
this.observe.images();this.observe.links();},toolbar:function(e,btnName)
{this.observe.buttons(e,btnName);this.observe.dropdowns();},isCurrent:function($el,$current)
{if(typeof $current=='undefined')
{var $current=$(this.selection.getCurrent());}
return $current.is($el)||$current.parents($el).length>0;},dropdowns:function()
{var $current=$(this.selection.getCurrent());$.each(this.opts.observe.dropdowns,$.proxy(function(key,value)
{var observe=value.observe,element=observe.element,$item=value.item,inValues=typeof observe['in']!='undefined'?observe['in']:false,outValues=typeof observe['out']!='undefined'?observe['out']:false;if($current.closest(element).size()>0)
{this.observe.setDropdownProperties($item,inValues,outValues);}
else
{this.observe.setDropdownProperties($item,outValues,inValues);}},this));},setDropdownProperties:function($item,addProperties,deleteProperties)
{if(deleteProperties&&typeof deleteProperties['attr']!='undefined')
{this.observe.setDropdownAttr($item,deleteProperties.attr,true);}
if(typeof addProperties['attr']!='undefined')
{this.observe.setDropdownAttr($item,addProperties.attr);}
if(typeof addProperties['title']!='undefined')
{$item.text(addProperties['title']);}},setDropdownAttr:function($item,properties,isDelete)
{$.each(properties,function(key,value)
{if(key=='class')
{if(!isDelete)
{$item.addClass(value);}
else
{$item.removeClass(value);}}
else
{if(!isDelete)
{$item.attr(key,value);}
else
{$item.removeAttr(key);}}});},addDropdown:function($item,btnName,btnObject)
{if(typeof btnObject.observe=="undefined")return;btnObject.item=$item;this.opts.observe.dropdowns.push(btnObject);},buttons:function(e,btnName)
{var current=this.selection.getCurrent();var parent=this.selection.getParent();if(e!==false)
{this.button.setInactiveAll();}
else
{this.button.setInactiveAll(btnName);}
if(e===false&&btnName!=='html')
{if($.inArray(btnName,this.opts.activeButtons)!=-1)this.button.toggleActive(btnName);return;}
$.each(this.opts.activeButtonsStates,$.proxy(function(key,value)
{var parentEl=$(parent).closest(key,this.$editor[0]);var currentEl=$(current).closest(key,this.$editor[0]);if(parentEl.length!==0&&!this.utils.isRedactorParent(parentEl))return;if(!this.utils.isRedactorParent(currentEl))return;if(parentEl.length!==0||currentEl.closest(key,this.$editor[0]).length!==0)
{this.button.setActive(value);}},this));var $parent=$(parent).closest(this.opts.alignmentTags.toString().toLowerCase(),this.$editor[0]);if(this.utils.isRedactorParent(parent)&&$parent.length)
{var align=($parent.css('text-align')==='')?'left':$parent.css('text-align');this.button.setActive('align'+align);}},addButton:function(tag,btnName)
{this.opts.activeButtons.push(btnName);this.opts.activeButtonsStates[tag]=btnName;},images:function()
{this.$editor.find('img').each($.proxy(function(i,img)
{var $img=$(img);$img.closest('a',this.$editor[0]).on('click',function(e){e.preventDefault();});if(this.utils.browser('msie'))$img.attr('unselectable','on');this.image.setEditable($img);},this));$(document).on('click.redactor-image-delete.'+this.uuid,$.proxy(function(e)
{this.observe.image=false;if(e.target.tagName=='IMG'&&this.utils.isRedactorParent(e.target))
{this.observe.image=(this.observe.image&&this.observe.image==e.target)?false:e.target;}},this));},links:function()
{if(!this.opts.linkTooltip)return;this.$editor.find('a').on('touchstart.redactor.'+this.uuid+' click.redactor.'+this.uuid,$.proxy(this.observe.showTooltip,this));this.$editor.on('touchstart.redactor.'+this.uuid+' click.redactor.'+this.uuid,$.proxy(this.observe.closeTooltip,this));$(document).on('touchstart.redactor.'+this.uuid+' click.redactor.'+this.uuid,$.proxy(this.observe.closeTooltip,this));},getTooltipPosition:function($link)
{return $link.offset();},showTooltip:function(e)
{var $el=$(e.target);if($el[0].tagName=='IMG')
return;if($el[0].tagName!=='A')
$el=$el.closest('a',this.$editor[0]);if($el[0].tagName!=='A')
return;var $link=$el;var pos=this.observe.getTooltipPosition($link);var tooltip=$('<span class="redactor-link-tooltip"></span>');var href=$link.attr('href');if(href===undefined)
{href='';}
if(href.length>24)href=href.substring(0,24)+'...';var aLink=$('<a href="'+$link.attr('href')+'" target="_blank" />').html(href).addClass('redactor-link-tooltip-action');var aEdit=$('<a href="#" />').html(this.lang.get('edit')).on('click',$.proxy(this.link.show,this)).addClass('redactor-link-tooltip-action');var aUnlink=$('<a href="#" />').html(this.lang.get('unlink')).on('click',$.proxy(this.link.unlink,this)).addClass('redactor-link-tooltip-action');tooltip.append(aLink).append(' | ').append(aEdit).append(' | ').append(aUnlink);tooltip.css({top:(pos.top+parseInt($link.css('line-height'),10))+'px',left:pos.left+'px'});$('.redactor-link-tooltip').remove();$('body').append(tooltip);},closeTooltip:function(e)
{e=e.originalEvent||e;var target=e.target;var $parent=$(target).closest('a',this.$editor[0]);if($parent.length!==0&&$parent[0].tagName==='A'&&target.tagName!=='A')
{return;}
else if((target.tagName==='A'&&this.utils.isRedactorParent(target))||$(target).hasClass('redactor-link-tooltip-action'))
{return;}
$('.redactor-link-tooltip').remove();}};},paragraphize:function()
{return{load:function(html)
{if(this.opts.linebreaks)return html;if(html===''||html==='<p></p>')return this.opts.emptyHtml;html=html+"\n";this.paragraphize.safes=[];this.paragraphize.z=0;html=html.replace(/(<br\s?\/?>){1,}\n?<\/blockquote>/gi,'</blockquote>');html=this.paragraphize.getSafes(html);html=this.paragraphize.getSafesComments(html);html=this.paragraphize.replaceBreaksToNewLines(html);html=this.paragraphize.replaceBreaksToParagraphs(html);html=this.paragraphize.clear(html);html=this.paragraphize.restoreSafes(html);html=html.replace(new RegExp('<br\\s?/?>\n?<('+this.opts.paragraphizeBlocks.join('|')+')(.*?[^>])>','gi'),'<p><br /></p>\n<$1$2>');return $.trim(html);},getSafes:function(html)
{var $div=$('<div />').append(html);$div.find('blockquote p').replaceWith(function()
{return $(this).append('<br />').contents();});html=$div.html();$div.find(this.opts.paragraphizeBlocks.join(', ')).each($.proxy(function(i,s)
{this.paragraphize.z++;this.paragraphize.safes[this.paragraphize.z]=s.outerHTML;html=html.replace(s.outerHTML,'\n{replace'+this.paragraphize.z+'}');},this));return html;},getSafesComments:function(html)
{var commentsMatches=html.match(/<!--([\w\W]*?)-->/gi);if(!commentsMatches)return html;$.each(commentsMatches,$.proxy(function(i,s)
{this.paragraphize.z++;this.paragraphize.safes[this.paragraphize.z]=s;html=html.replace(s,'\n{replace'+this.paragraphize.z+'}');},this));return html;},restoreSafes:function(html)
{$.each(this.paragraphize.safes,function(i,s)
{s=(typeof s!=='undefined')?s.replace(/\$/g,'&#36;'):s;html=html.replace('{replace'+i+'}',s);});return html;},replaceBreaksToParagraphs:function(html)
{var htmls=html.split(new RegExp('\n','g'),-1);html='';if(htmls)
{var len=htmls.length;for(var i=0;i<len;i++)
{if(!htmls.hasOwnProperty(i))return;if(htmls[i].search('{replace')==-1)
{htmls[i]=htmls[i].replace(/<p>\n\t?<\/p>/gi,'');htmls[i]=htmls[i].replace(/<p><\/p>/gi,'');if(htmls[i]!=='')
{html+='<p>'+htmls[i].replace(/^\n+|\n+$/g,"")+"</p>";}}
else html+=htmls[i];}}
return html;},replaceBreaksToNewLines:function(html)
{html=html.replace(/<br \/>\s*<br \/>/gi,"\n\n");html=html.replace(/<br\s?\/?>\n?<br\s?\/?>/gi,"\n<br /><br />");html=html.replace(new RegExp("\r\n",'g'),"\n");html=html.replace(new RegExp("\r",'g'),"\n");html=html.replace(new RegExp("/\n\n+/"),'g',"\n\n");return html;},clear:function(html)
{html=html.replace(new RegExp('</blockquote></p>','gi'),'</blockquote>');html=html.replace(new RegExp('<p></blockquote>','gi'),'</blockquote>');html=html.replace(new RegExp('<p><blockquote>','gi'),'<blockquote>');html=html.replace(new RegExp('<blockquote></p>','gi'),'<blockquote>');html=html.replace(new RegExp('<p><p ','gi'),'<p ');html=html.replace(new RegExp('<p><p>','gi'),'<p>');html=html.replace(new RegExp('</p></p>','gi'),'</p>');html=html.replace(new RegExp('<p>\\s?</p>','gi'),'');html=html.replace(new RegExp("\n</p>",'gi'),'</p>');html=html.replace(new RegExp('<p>\t?\t?\n?<p>','gi'),'<p>');html=html.replace(new RegExp('<p>\t*</p>','gi'),'');return html;}};},paste:function()
{return{init:function(e)
{if(!this.opts.cleanOnPaste)
{setTimeout($.proxy(this.code.sync,this),1);return;}
this.rtePaste=true;this.buffer.set();this.selection.save();this.utils.saveScroll();this.paste.createPasteBox();$(window).on('scroll.redactor-freeze',$.proxy(function()
{$(window).scrollTop(this.saveBodyScroll);},this));setTimeout($.proxy(function()
{var html=this.$pasteBox.html();this.$pasteBox.remove();this.selection.restore();this.utils.restoreScroll();this.paste.insert(html);$(window).off('scroll.redactor-freeze');if(this.linkify.isEnabled())
this.linkify.format();},this),1);},createPasteBox:function()
{this.$pasteBox=$('<div>').html('').attr('contenteditable','true').css({position:'fixed',width:0,top:0,left:'-9999px'});if(this.utils.browser('msie'))
{this.$box.append(this.$pasteBox);}
else
{if($('.modal-body').length>0)
{$('.modal-body').append(this.$pasteBox);}
else
{$('body').append(this.$pasteBox);}}
this.$pasteBox.focus();},insert:function(html)
{html=this.core.setCallback('pasteBefore',html);html=(this.utils.isSelectAll())?this.clean.onPaste(html,false):this.clean.onPaste(html);html=this.core.setCallback('paste',html);if(this.utils.isSelectAll())
{this.insert.set(html,false);}
else
{this.insert.html(html,false);}
this.utils.disableSelectAll();this.rtePaste=false;setTimeout($.proxy(this.clean.clearUnverified,this),10);setTimeout($.proxy(function()
{var spans=this.$editor.find('span');$.each(spans,function(i,s)
{var html=s.innerHTML.replace(/\u200B/,'');if(html===''&&s.attributes.length===0)$(s).remove();});},this),10);}};},placeholder:function()
{return{enable:function()
{if(!this.placeholder.is())return;this.$editor.attr('placeholder',this.$element.attr('placeholder'));this.placeholder.toggle();this.$editor.on('keydown.redactor-placeholder',$.proxy(this.placeholder.toggle,this));},toggle:function()
{setTimeout($.proxy(function()
{var func=this.utils.isEmpty(this.$editor.html(),false)?'addClass':'removeClass';this.$editor[func]('redactor-placeholder');},this),5);},remove:function()
{this.$editor.removeClass('redactor-placeholder');},is:function()
{if(this.opts.placeholder)
{return this.$element.attr('placeholder',this.opts.placeholder);}
else
{return!(typeof this.$element.attr('placeholder')=='undefined'||this.$element.attr('placeholder')==='');}}};},progress:function()
{return{show:function()
{$(document.body).append($('<div id="redactor-progress"><span></span></div>'));$('#redactor-progress').fadeIn();},hide:function()
{$('#redactor-progress').fadeOut(1500,function()
{$(this).remove();});}};},selection:function()
{return{get:function()
{this.sel=document.getSelection();if(document.getSelection&&this.sel.getRangeAt&&this.sel.rangeCount)
{this.range=this.sel.getRangeAt(0);}
else
{this.range=document.createRange();}},addRange:function()
{try{this.sel.removeAllRanges();}catch(e){}
this.sel.addRange(this.range);},getCurrent:function()
{var el=false;this.selection.get();if(this.sel&&this.sel.rangeCount>0)
{el=this.sel.getRangeAt(0).startContainer;}
return this.utils.isRedactorParent(el);},getParent:function(elem)
{elem=elem||this.selection.getCurrent();if(elem)
{return this.utils.isRedactorParent($(elem).parent()[0]);}
return false;},getPrev:function()
{return window.getSelection().anchorNode.previousSibling;},getNext:function()
{return window.getSelection().anchorNode.nextSibling;},getBlock:function(node)
{node=node||this.selection.getCurrent();while(node)
{if(this.utils.isBlockTag(node.tagName))
{return($(node).hasClass('redactor-editor'))?false:node;}
node=node.parentNode;}
return false;},getInlines:function(nodes,tags)
{this.selection.get();if(this.range&&this.range.collapsed)
{return false;}
var inlines=[];nodes=(typeof nodes=='undefined'||nodes===false)?this.selection.getNodes():nodes;var inlineTags=this.opts.inlineTags;inlineTags.push('span');if(typeof tags!=='undefined')
{for(var i=0;i<tags.length;i++)
{inlineTags.push(tags[i]);}}
$.each(nodes,$.proxy(function(i,node)
{if($.inArray(node.tagName.toLowerCase(),inlineTags)!=-1)
{inlines.push(node);}},this));return(inlines.length===0)?false:inlines;},getInlinesTags:function(tags)
{this.selection.get();if(this.range&&this.range.collapsed)
{return false;}
var inlines=[];var nodes=this.selection.getNodes();$.each(nodes,$.proxy(function(i,node)
{if($.inArray(node.tagName.toLowerCase(),tags)!=-1)
{inlines.push(node);}},this));return(inlines.length===0)?false:inlines;},getBlocks:function(nodes)
{this.selection.get();if(this.range&&this.range.collapsed)
{return[this.selection.getBlock()];}
var blocks=[];nodes=(typeof nodes=='undefined')?this.selection.getNodes():nodes;$.each(nodes,$.proxy(function(i,node)
{if(this.utils.isBlock(node))
{this.selection.lastBlock=node;blocks.push(node);}},this));return(blocks.length===0)?[this.selection.getBlock()]:blocks;},getLastBlock:function()
{return this.selection.lastBlock;},getNodes:function()
{this.selection.get();var startNode=this.selection.getNodesMarker(1);var endNode=this.selection.getNodesMarker(2);if(this.range.collapsed===false)
{if(window.getSelection){var sel=window.getSelection();if(sel.rangeCount>0){var range=sel.getRangeAt(0);var startPointNode=range.startContainer,startOffset=range.startOffset;var boundaryRange=range.cloneRange();boundaryRange.collapse(false);boundaryRange.insertNode(endNode);boundaryRange.setStart(startPointNode,startOffset);boundaryRange.collapse(true);boundaryRange.insertNode(startNode);range.setStartAfter(startNode);range.setEndBefore(endNode);sel.removeAllRanges();sel.addRange(range);}}}
else
{this.selection.setNodesMarker(this.range,startNode,true);endNode=startNode;}
var nodes=[];var counter=0;var self=this;this.$editor.find('*').each(function()
{if(this==startNode)
{var parent=$(this).parent();if(parent.length!==0&&parent[0].tagName!='BODY'&&self.utils.isRedactorParent(parent[0]))
{nodes.push(parent[0]);}
nodes.push(this);counter=1;}
else
{if(counter>0)
{nodes.push(this);counter=counter+1;}}
if(this==endNode)
{return false;}});var finalNodes=[];var len=nodes.length;for(var i=0;i<len;i++)
{if(nodes[i].id!='nodes-marker-1'&&nodes[i].id!='nodes-marker-2')
{finalNodes.push(nodes[i]);}}
this.selection.removeNodesMarkers();return finalNodes;},getNodesMarker:function(num)
{return $('<span id="nodes-marker-'+num+'" class="redactor-nodes-marker" data-verified="redactor">'+this.opts.invisibleSpace+'</span>')[0];},setNodesMarker:function(range,node,type)
{var range=range.cloneRange();try{range.collapse(type);range.insertNode(node);}
catch(e){}},removeNodesMarkers:function()
{$(document).find('span.redactor-nodes-marker').remove();this.$editor.find('span.redactor-nodes-marker').remove();},fromPoint:function(start,end)
{this.caret.setOffset(start,end);},wrap:function(tag)
{this.selection.get();if(this.range.collapsed)return false;var wrapper=document.createElement(tag);wrapper.appendChild(this.range.extractContents());this.range.insertNode(wrapper);return wrapper;},selectElement:function(node)
{if(this.utils.browser('mozilla'))
{node=node[0]||node;var range=document.createRange();range.selectNodeContents(node);}
else
{this.caret.set(node,0,node,1);}},selectAll:function()
{this.selection.get();this.range.selectNodeContents(this.$editor[0]);this.selection.addRange();},remove:function()
{this.selection.get();this.sel.removeAllRanges();},save:function()
{this.selection.createMarkers();},createMarkers:function()
{this.selection.get();var node1=this.selection.getMarker(1);this.selection.setMarker(this.range,node1,true);if(this.range.collapsed===false)
{var node2=this.selection.getMarker(2);this.selection.setMarker(this.range,node2,false);}
this.savedSel=this.$editor.html();},getMarker:function(num)
{if(typeof num=='undefined')num=1;return $('<span id="selection-marker-'+num+'" class="redactor-selection-marker"  data-verified="redactor">'+this.opts.invisibleSpace+'</span>')[0];},getMarkerAsHtml:function(num)
{return this.utils.getOuterHtml(this.selection.getMarker(num));},setMarker:function(range,node,type)
{range=range.cloneRange();try{range.collapse(type);range.insertNode(node);}
catch(e)
{this.focus.setStart();}},restore:function()
{var node1=this.$editor.find('span#selection-marker-1');var node2=this.$editor.find('span#selection-marker-2');if(this.utils.browser('mozilla'))
{this.$editor.focus();}
if(node1.length!==0&&node2.length!==0)
{this.caret.set(node1,0,node2,0);}
else if(node1.length!==0)
{this.caret.set(node1,0,node1,0);}
else
{this.$editor.focus();}
this.selection.removeMarkers();this.savedSel=false;},removeMarkers:function()
{this.$editor.find('span.redactor-selection-marker').each(function(i,s)
{var text=$(s).text().replace(/\u200B/g,'');if(text==='')$(s).remove();else $(s).replaceWith(function(){return $(this).contents();});});},getText:function()
{this.selection.get();return this.sel.toString();},getHtml:function()
{var html='';this.selection.get();if(this.sel.rangeCount)
{var container=document.createElement('div');var len=this.sel.rangeCount;for(var i=0;i<len;++i)
{container.appendChild(this.sel.getRangeAt(i).cloneContents());}
html=container.innerHTML;}
return this.clean.onSync(html);},replaceSelection:function(html)
{this.selection.get();this.range.deleteContents();var div=document.createElement("div");div.innerHTML=html;var frag=document.createDocumentFragment(),child;while((child=div.firstChild)){frag.appendChild(child);}
this.range.insertNode(frag);},replaceWithHtml:function(html)
{html=this.selection.getMarkerAsHtml(1)+html+this.selection.getMarkerAsHtml(2);this.selection.get();if(window.getSelection&&window.getSelection().getRangeAt)
{this.selection.replaceSelection(html);}
else if(document.selection&&document.selection.createRange)
{this.range.pasteHTML(html);}
this.selection.restore();this.code.sync();}};},shortcuts:function()
{return{init:function(e,key)
{if(!this.opts.shortcuts)
{if((e.ctrlKey||e.metaKey)&&(key===66||key===73))e.preventDefault();return false;}
$.each(this.opts.shortcuts,$.proxy(function(str,command)
{var keys=str.split(',');var len=keys.length;for(var i=0;i<len;i++)
{if(typeof keys[i]==='string')
{this.shortcuts.handler(e,$.trim(keys[i]),$.proxy(function()
{var func;if(command.func.search(/\./)!='-1')
{func=command.func.split('.');if(typeof this[func[0]]!='undefined')
{this[func[0]][func[1]].apply(this,command.params);}}
else
{this[command.func].apply(this,command.params);}},this));}}},this));},handler:function(e,keys,origHandler)
{var hotkeysSpecialKeys={8:"backspace",9:"tab",10:"return",13:"return",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"del",59:";",61:"=",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scroll",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"};var hotkeysShiftNums={"`":"~","1":"!","2":"@","3":"#","4":"$","5":"%","6":"^","7":"&","8":"*","9":"(","0":")","-":"_","=":"+",";":": ","'":"\"",",":"<",".":">","/":"?","\\":"|"};keys=keys.toLowerCase().split(" ");var special=hotkeysSpecialKeys[e.keyCode],character=String.fromCharCode(e.which).toLowerCase(),modif="",possible={};$.each(["alt","ctrl","meta","shift"],function(index,specialKey)
{if(e[specialKey+'Key']&&special!==specialKey)
{modif+=specialKey+'+';}});if(special)possible[modif+special]=true;if(character)
{possible[modif+character]=true;possible[modif+hotkeysShiftNums[character]]=true;if(modif==="shift+")
{possible[hotkeysShiftNums[character]]=true;}}
for(var i=0,len=keys.length;i<len;i++)
{if(possible[keys[i]])
{e.preventDefault();return origHandler.apply(this,arguments);}}}};},tabifier:function()
{return{get:function(code)
{if(!this.opts.tabifier)return code;var ownLine=['area','body','head','hr','i?frame','link','meta','noscript','style','script','table','tbody','thead','tfoot'];var contOwnLine=['li','dt','dt','h[1-6]','option','script'];var newLevel=['p','blockquote','div','dl','fieldset','form','frameset','map','ol','pre','select','td','th','tr','ul'];this.tabifier.lineBefore=new RegExp('^<(/?'+ownLine.join('|/?')+'|'+contOwnLine.join('|')+')[ >]');this.tabifier.lineAfter=new RegExp('^<(br|/?'+ownLine.join('|/?')+'|/'+contOwnLine.join('|/')+')[ >]');this.tabifier.newLevel=new RegExp('^</?('+newLevel.join('|')+')[ >]');var i=0,codeLength=code.length,point=0,start=null,end=null,tag='',out='',cont='';this.tabifier.cleanlevel=0;for(;i<codeLength;i++)
{point=i;if(-1==code.substr(i).indexOf('<'))
{out+=code.substr(i);return this.tabifier.finish(out);}
while(point<codeLength&&code.charAt(point)!='<')
{point++;}
if(i!=point)
{cont=code.substr(i,point-i);if(!cont.match(/^\s{2,}$/g))
{if('\n'==out.charAt(out.length-1))out+=this.tabifier.getTabs();else if('\n'==cont.charAt(0))
{out+='\n'+this.tabifier.getTabs();cont=cont.replace(/^\s+/,'');}
out+=cont;}
if(cont.match(/\n/))out+='\n'+this.tabifier.getTabs();}
start=point;while(point<codeLength&&'>'!=code.charAt(point))
{point++;}
tag=code.substr(start,point-start);i=point;var t;if('!--'==tag.substr(1,3))
{if(!tag.match(/--$/))
{while('-->'!=code.substr(point,3))
{point++;}
point+=2;tag=code.substr(start,point-start);i=point;}
if('\n'!=out.charAt(out.length-1))out+='\n';out+=this.tabifier.getTabs();out+=tag+'>\n';}
else if('!'==tag[1])
{out=this.tabifier.placeTag(tag+'>',out);}
else if('?'==tag[1])
{out+=tag+'>\n';}
else if(t=tag.match(/^<(script|style|pre)/i))
{t[1]=t[1].toLowerCase();tag=this.tabifier.cleanTag(tag);out=this.tabifier.placeTag(tag,out);end=String(code.substr(i+1)).toLowerCase().indexOf('</'+t[1]);if(end)
{cont=code.substr(i+1,end);i+=end;out+=cont;}}
else
{tag=this.tabifier.cleanTag(tag);out=this.tabifier.placeTag(tag,out);}}
return this.tabifier.finish(out);},getTabs:function()
{var s='';for(var j=0;j<this.tabifier.cleanlevel;j++)
{s+='\t';}
return s;},finish:function(code)
{code=code.replace(/\n\s*\n/g,'\n');code=code.replace(/^[\s\n]*/,'');code=code.replace(/[\s\n]*$/,'');code=code.replace(/<script(.*?)>\n<\/script>/gi,'<script$1></script>');this.tabifier.cleanlevel=0;return code;},cleanTag:function(tag)
{var tagout='';tag=tag.replace(/\n/g,' ');tag=tag.replace(/\s{2,}/g,' ');tag=tag.replace(/^\s+|\s+$/g,' ');var suffix='';if(tag.match(/\/$/))
{suffix='/';tag=tag.replace(/\/+$/,'');}
var m;while(m=/\s*([^= ]+)(?:=((['"']).*?\3|[^ ]+))?/.exec(tag))
{if(m[2])tagout+=m[1].toLowerCase()+'='+m[2];else if(m[1])tagout+=m[1].toLowerCase();tagout+=' ';tag=tag.substr(m[0].length);}
return tagout.replace(/\s*$/,'')+suffix+'>';},placeTag:function(tag,out)
{var nl=tag.match(this.tabifier.newLevel);if(tag.match(this.tabifier.lineBefore)||nl)
{out=out.replace(/\s*$/,'');out+='\n';}
if(nl&&'/'==tag.charAt(1))this.tabifier.cleanlevel--;if('\n'==out.charAt(out.length-1))out+=this.tabifier.getTabs();if(nl&&'/'!=tag.charAt(1))this.tabifier.cleanlevel++;out+=tag;if(tag.match(this.tabifier.lineAfter)||tag.match(this.tabifier.newLevel))
{out=out.replace(/ *$/,'');}
return out;}};},tidy:function()
{return{setupAllowed:function()
{if(this.opts.allowedTags)this.opts.deniedTags=false;if(this.opts.allowedAttr)this.opts.removeAttr=false;if(this.opts.linebreaks)return;var tags=['p','section'];if(this.opts.allowedTags)this.tidy.addToAllowed(tags);if(this.opts.deniedTags)this.tidy.removeFromDenied(tags);},addToAllowed:function(tags)
{var len=tags.length;for(var i=0;i<len;i++)
{if($.inArray(tags[i],this.opts.allowedTags)==-1)
{this.opts.allowedTags.push(tags[i]);}}},removeFromDenied:function(tags)
{var len=tags.length;for(var i=0;i<len;i++)
{var pos=$.inArray(tags[i],this.opts.deniedTags);if(pos!=-1)
{this.opts.deniedTags.splice(pos,1);}}},load:function(html,options)
{this.tidy.settings={deniedTags:this.opts.deniedTags,allowedTags:this.opts.allowedTags,removeComments:this.opts.removeComments,replaceTags:this.opts.replaceTags,replaceStyles:this.opts.replaceStyles,removeDataAttr:this.opts.removeDataAttr,removeAttr:this.opts.removeAttr,allowedAttr:this.opts.allowedAttr,removeWithoutAttr:this.opts.removeWithoutAttr,removeEmpty:this.opts.removeEmpty};$.extend(this.tidy.settings,options);html=this.tidy.removeComments(html);this.tidy.$div=$('<div />').append(html);this.tidy.replaceTags();this.tidy.replaceStyles();this.tidy.removeTags();this.tidy.removeAttr();this.tidy.removeEmpty();this.tidy.removeParagraphsInLists();this.tidy.removeDataAttr();this.tidy.removeWithoutAttr();html=this.tidy.$div.html();this.tidy.$div.remove();return html;},removeComments:function(html)
{if(!this.tidy.settings.removeComments)return html;return html.replace(/<!--[\s\S]*?-->/gi,'');},replaceTags:function(html)
{if(!this.tidy.settings.replaceTags)return html;var len=this.tidy.settings.replaceTags.length;var replacement=[],rTags=[];for(var i=0;i<len;i++)
{rTags.push(this.tidy.settings.replaceTags[i][1]);replacement.push(this.tidy.settings.replaceTags[i][0]);}
$.each(replacement,$.proxy(function(key,value)
{this.tidy.$div.find(value).replaceWith(function()
{return $("<"+rTags[key]+" />",{html:$(this).html()});});},this));},replaceStyles:function()
{if(!this.tidy.settings.replaceStyles)return;var len=this.tidy.settings.replaceStyles.length;this.tidy.$div.find('span').each($.proxy(function(n,s)
{var $el=$(s);var style=$el.attr('style');for(var i=0;i<len;i++)
{if(style&&style.match(new RegExp('^'+this.tidy.settings.replaceStyles[i][0],'i')))
{var tagName=this.tidy.settings.replaceStyles[i][1];$el.replaceWith(function()
{var tag=document.createElement(tagName);return $(tag).append($(this).contents());});}}},this));},removeTags:function()
{if(!this.tidy.settings.deniedTags&&this.tidy.settings.allowedTags)
{this.tidy.$div.find('*').not(this.tidy.settings.allowedTags.join(',')).each(function(i,s)
{if(s.innerHTML==='')$(s).remove();else $(s).contents().unwrap();});}
if(this.tidy.settings.deniedTags)
{this.tidy.$div.find(this.tidy.settings.deniedTags.join(',')).each(function(i,s)
{if($(s).hasClass('redactor-script-tag')||$(s).hasClass('redactor-selection-marker'))return;if(s.innerHTML==='')$(s).remove();else $(s).contents().unwrap();});}},removeAttr:function()
{var len;if(!this.tidy.settings.removeAttr&&this.tidy.settings.allowedAttr)
{var allowedAttrTags=[],allowedAttrData=[];len=this.tidy.settings.allowedAttr.length;for(var i=0;i<len;i++)
{allowedAttrTags.push(this.tidy.settings.allowedAttr[i][0]);allowedAttrData.push(this.tidy.settings.allowedAttr[i][1]);}
this.tidy.$div.find('*').each($.proxy(function(n,s)
{var $el=$(s);var pos=$.inArray($el[0].tagName.toLowerCase(),allowedAttrTags);var attributesRemove=this.tidy.removeAttrGetRemoves(pos,allowedAttrData,$el);if(attributesRemove)
{$.each(attributesRemove,function(z,f){$el.removeAttr(f);});}},this));}
if(this.tidy.settings.removeAttr)
{len=this.tidy.settings.removeAttr.length;for(var i=0;i<len;i++)
{var attrs=this.tidy.settings.removeAttr[i][1];if($.isArray(attrs))attrs=attrs.join(' ');this.tidy.$div.find(this.tidy.settings.removeAttr[i][0]).removeAttr(attrs);}}},removeAttrGetRemoves:function(pos,allowed,$el)
{var attributesRemove=[];if(pos==-1)
{$.each($el[0].attributes,function(i,item)
{attributesRemove.push(item.name);});}
else if(allowed[pos]=='*')
{attributesRemove=[];}
else
{$.each($el[0].attributes,function(i,item)
{if($.isArray(allowed[pos]))
{if($.inArray(item.name,allowed[pos])==-1)
{attributesRemove.push(item.name);}}
else if(allowed[pos]!=item.name)
{attributesRemove.push(item.name);}});}
return attributesRemove;},removeAttrs:function(el,regex)
{regex=new RegExp(regex,"g");return el.each(function()
{var self=$(this);var len=this.attributes.length-1;for(var i=len;i>=0;i--)
{var item=this.attributes[i];if(item&&item.specified&&item.name.search(regex)>=0)
{self.removeAttr(item.name);}}});},removeEmpty:function()
{if(!this.tidy.settings.removeEmpty)return;this.tidy.$div.find(this.tidy.settings.removeEmpty.join(',')).each(function()
{var $el=$(this);var text=$el.text();text=text.replace(/\u200B/g,'');text=text.replace(/&nbsp;/gi,'');text=text.replace(/\s/g,'');if(text===''&&$el.children().length===0)
{$el.remove();}});},removeParagraphsInLists:function()
{this.tidy.$div.find('li p').contents().unwrap();},removeDataAttr:function()
{if(!this.tidy.settings.removeDataAttr)return;var tags=this.tidy.settings.removeDataAttr;if($.isArray(this.tidy.settings.removeDataAttr))tags=this.tidy.settings.removeDataAttr.join(',');this.tidy.removeAttrs(this.tidy.$div.find(tags),'^(data-)');},removeWithoutAttr:function()
{if(!this.tidy.settings.removeWithoutAttr)return;this.tidy.$div.find(this.tidy.settings.removeWithoutAttr.join(',')).each(function()
{if(this.attributes.length===0)
{$(this).contents().unwrap();}});}};},toolbar:function()
{return{init:function()
{return{html:{title:this.lang.get('html'),func:'code.toggle'},formatting:{title:this.lang.get('formatting'),dropdown:{p:{title:this.lang.get('paragraph'),func:'block.format'},blockquote:{title:this.lang.get('quote'),func:'block.format'},pre:{title:this.lang.get('code'),func:'block.format'},h1:{title:this.lang.get('header1'),func:'block.format'},h2:{title:this.lang.get('header2'),func:'block.format'},h3:{title:this.lang.get('header3'),func:'block.format'},h4:{title:this.lang.get('header4'),func:'block.format'},h5:{title:this.lang.get('header5'),func:'block.format'}}},bold:{title:this.lang.get('bold'),func:'inline.format'},italic:{title:this.lang.get('italic'),func:'inline.format'},deleted:{title:this.lang.get('deleted'),func:'inline.format'},underline:{title:this.lang.get('underline'),func:'inline.format'},unorderedlist:{title:'&bull; '+this.lang.get('unorderedlist'),func:'list.toggle'},orderedlist:{title:'1. '+this.lang.get('orderedlist'),func:'list.toggle'},outdent:{title:'< '+this.lang.get('outdent'),func:'indent.decrease'},indent:{title:'> '+this.lang.get('indent'),func:'indent.increase'},image:{title:this.lang.get('image'),func:'image.show'},file:{title:this.lang.get('file'),func:'file.show'},link:{title:this.lang.get('link'),dropdown:{link:{title:this.lang.get('link_insert'),func:'link.show',observe:{element:'a',in:{title:this.lang.get('link_edit'),},out:{title:this.lang.get('link_insert')}}},unlink:{title:this.lang.get('unlink'),func:'link.unlink',observe:{element:'a',out:{attr:{'class':'redactor-dropdown-link-inactive','aria-disabled':true}}}}}},alignment:{title:this.lang.get('alignment'),dropdown:{left:{title:this.lang.get('align_left'),func:'alignment.left'},center:{title:this.lang.get('align_center'),func:'alignment.center'},right:{title:this.lang.get('align_right'),func:'alignment.right'},justify:{title:this.lang.get('align_justify'),func:'alignment.justify'}}},horizontalrule:{title:this.lang.get('horizontalrule'),func:'line.insert'}};},build:function()
{this.toolbar.hideButtons();this.toolbar.hideButtonsOnMobile();this.toolbar.isButtonSourceNeeded();if(this.opts.buttons.length===0)return;this.$toolbar=this.toolbar.createContainer();this.toolbar.setOverflow();this.toolbar.append();this.toolbar.setFormattingTags();this.toolbar.loadButtons();this.toolbar.setFixed();if(this.opts.activeButtons)
{this.$editor.on('mouseup.redactor keyup.redactor focus.redactor',$.proxy(this.observe.toolbar,this));}},createContainer:function()
{return $('<ul>').addClass('redactor-toolbar').attr({'id':'redactor-toolbar-'+this.uuid,'role':'toolbar'});},setFormattingTags:function()
{$.each(this.opts.toolbar.formatting.dropdown,$.proxy(function(i,s)
{if($.inArray(i,this.opts.formatting)==-1)delete this.opts.toolbar.formatting.dropdown[i];},this));},loadButtons:function()
{$.each(this.opts.buttons,$.proxy(function(i,btnName)
{if(!this.opts.toolbar[btnName])return;if(btnName==='file')
{if(this.opts.fileUpload===false)return;else if(!this.opts.fileUpload&&this.opts.s3===false)return;}
if(btnName==='image')
{if(this.opts.imageUpload===false)return;else if(!this.opts.imageUpload&&this.opts.s3===false)return;}
var btnObject=this.opts.toolbar[btnName];this.$toolbar.append($('<li>').append(this.button.build(btnName,btnObject)));},this));},append:function()
{if(this.opts.toolbarExternal)
{this.$toolbar.addClass('redactor-toolbar-external');$(this.opts.toolbarExternal).html(this.$toolbar);}
else
{this.$box.prepend(this.$toolbar);}},setFixed:function()
{if(!this.utils.isDesktop())return;if(this.opts.toolbarExternal)return;if(!this.opts.toolbarFixed)return;this.toolbar.observeScroll();$(this.opts.toolbarFixedTarget).on('scroll.redactor.'+this.uuid,$.proxy(this.toolbar.observeScroll,this));},setOverflow:function()
{if(this.utils.isMobile()&&this.opts.toolbarOverflow)
{this.$toolbar.addClass('redactor-toolbar-overflow');}},isButtonSourceNeeded:function()
{if(this.opts.source)return;var index=this.opts.buttons.indexOf('html');if(index!==-1)
{this.opts.buttons.splice(index,1);}},hideButtons:function()
{if(this.opts.buttonsHide.length===0)return;$.each(this.opts.buttonsHide,$.proxy(function(i,s)
{var index=this.opts.buttons.indexOf(s);this.opts.buttons.splice(index,1);},this));},hideButtonsOnMobile:function()
{if(!this.utils.isMobile()||this.opts.buttonsHideOnMobile.length===0)return;$.each(this.opts.buttonsHideOnMobile,$.proxy(function(i,s)
{var index=this.opts.buttons.indexOf(s);this.opts.buttons.splice(index,1);},this));},observeScroll:function()
{var scrollTop=$(this.opts.toolbarFixedTarget).scrollTop();var boxTop=1;if(this.opts.toolbarFixedTarget===document)
{boxTop=this.$box.offset().top;}
if((scrollTop+this.opts.toolbarFixedTopOffset)>boxTop)
{this.toolbar.observeScrollEnable(scrollTop,boxTop);}
else
{this.toolbar.observeScrollDisable();}},observeScrollEnable:function(scrollTop,boxTop)
{var top=this.opts.toolbarFixedTopOffset+scrollTop-boxTop;var left=0;var end=boxTop+this.$box.height()-32;var width=this.$box.innerWidth();this.$toolbar.addClass('toolbar-fixed-box');this.$toolbar.css({position:'absolute',width:width,top:top+'px',left:left});if(scrollTop>end)
$('.redactor-dropdown-'+this.uuid+':visible').hide();this.toolbar.setDropdownsFixed();this.$toolbar.css('visibility',(scrollTop<end)?'visible':'hidden');},observeScrollDisable:function()
{this.$toolbar.css({position:'relative',width:'auto',top:0,left:0,visibility:'visible'});this.toolbar.unsetDropdownsFixed();this.$toolbar.removeClass('toolbar-fixed-box');},setDropdownsFixed:function()
{var top=this.$toolbar.innerHeight()+this.opts.toolbarFixedTopOffset;var position='fixed';if(this.opts.toolbarFixedTarget!==document)
{top=(this.$toolbar.innerHeight()+this.$toolbar.offset().top)+this.opts.toolbarFixedTopOffset;position='absolute';}
$('.redactor-dropdown-'+this.uuid).each(function()
{$(this).css({position:position,top:top+'px'});});},unsetDropdownsFixed:function()
{var top=(this.$toolbar.innerHeight()+this.$toolbar.offset().top);$('.redactor-dropdown-'+this.uuid).each(function()
{$(this).css({position:'absolute',top:top+'px'});});}};},upload:function()
{return{init:function(id,url,callback)
{this.upload.direct=false;this.upload.callback=callback;this.upload.url=url;this.upload.$el=$(id);this.upload.$droparea=$('<div id="redactor-droparea" />');this.upload.$placeholdler=$('<div id="redactor-droparea-placeholder" />').text(this.lang.get('upload_label'));this.upload.$input=$('<input type="file" name="file" />');this.upload.$placeholdler.append(this.upload.$input);this.upload.$droparea.append(this.upload.$placeholdler);this.upload.$el.append(this.upload.$droparea);this.upload.$droparea.off('redactor.upload');this.upload.$input.off('redactor.upload');this.upload.$droparea.on('dragover.redactor.upload',$.proxy(this.upload.onDrag,this));this.upload.$droparea.on('dragleave.redactor.upload',$.proxy(this.upload.onDragLeave,this));this.upload.$input.on('change.redactor.upload',$.proxy(function(e)
{e=e.originalEvent||e;this.upload.traverseFile(this.upload.$input[0].files[0],e);},this));this.upload.$droparea.on('drop.redactor.upload',$.proxy(function(e)
{e.preventDefault();this.upload.$droparea.removeClass('drag-hover').addClass('drag-drop');this.upload.onDrop(e);},this));},directUpload:function(file,e)
{this.upload.direct=true;this.upload.traverseFile(file,e);},onDrop:function(e)
{e=e.originalEvent||e;var files=e.dataTransfer.files;this.upload.traverseFile(files[0],e);},traverseFile:function(file,e)
{if(this.opts.s3)
{this.upload.setConfig(file);this.upload.s3uploadFile(file);return;}
var formData=!!window.FormData?new FormData():null;if(window.FormData)
{this.upload.setConfig(file);var name=(this.upload.type=='image')?this.opts.imageUploadParam:this.opts.fileUploadParam;formData.append(name,file);}
this.progress.show();this.core.setCallback('uploadStart',e,formData);this.upload.sendData(formData,e);},setConfig:function(file)
{this.upload.getType(file);if(this.upload.direct)
{this.upload.url=(this.upload.type=='image')?this.opts.imageUpload:this.opts.fileUpload;this.upload.callback=(this.upload.type=='image')?this.image.insert:this.file.insert;}},getType:function(file)
{this.upload.type='image';if(this.opts.imageTypes.indexOf(file.type)==-1)
{this.upload.type='file';}},getHiddenFields:function(obj,fd)
{if(obj===false||typeof obj!=='object')return fd;$.each(obj,$.proxy(function(k,v)
{if(v!==null&&v.toString().indexOf('#')===0)v=$(v).val();fd.append(k,v);},this));return fd;},sendData:function(formData,e)
{if(this.upload.type=='image')
{formData=this.upload.getHiddenFields(this.opts.uploadImageFields,formData);formData=this.upload.getHiddenFields(this.upload.imageFields,formData);}
else
{formData=this.upload.getHiddenFields(this.opts.uploadFileFields,formData);formData=this.upload.getHiddenFields(this.upload.fileFields,formData);}
var xhr=new XMLHttpRequest();xhr.open('POST',this.upload.url);xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");xhr.onreadystatechange=$.proxy(function()
{if(xhr.readyState==4)
{var data=xhr.responseText;data=data.replace(/^\[/,'');data=data.replace(/\]$/,'');var json;try
{json=(typeof data==='string'?$.parseJSON(data):data);}
catch(err)
{json={error:true};}
this.progress.hide();if(!this.upload.direct)
{this.upload.$droparea.removeClass('drag-drop');}
this.upload.callback(json,this.upload.direct,e);}},this);xhr.send(formData);},onDrag:function(e)
{e.preventDefault();this.upload.$droparea.addClass('drag-hover');},onDragLeave:function(e)
{e.preventDefault();this.upload.$droparea.removeClass('drag-hover');},clearImageFields:function()
{this.upload.imageFields={};},addImageFields:function(name,value)
{this.upload.imageFields[name]=value;},removeImageFields:function(name)
{delete this.upload.imageFields[name];},clearFileFields:function()
{this.upload.fileFields={};},addFileFields:function(name,value)
{this.upload.fileFields[name]=value;},removeFileFields:function(name)
{delete this.upload.fileFields[name];},s3uploadFile:function(file)
{this.upload.s3executeOnSignedUrl(file,$.proxy(function(signedURL)
{this.upload.s3uploadToS3(file,signedURL);},this));},s3executeOnSignedUrl:function(file,callback)
{var xhr=new XMLHttpRequest();var mark='?';if(this.opts.s3.search(/\?/)!='-1')mark='&';xhr.open('GET',this.opts.s3+mark+'name='+file.name+'&type='+file.type,true);if(xhr.overrideMimeType)xhr.overrideMimeType('text/plain; charset=x-user-defined');var that=this;xhr.onreadystatechange=function(e)
{if(this.readyState==4&&this.status==200)
{that.progress.show();callback(decodeURIComponent(this.responseText));}
else if(this.readyState==4&&this.status!=200)
{}};xhr.send();},s3createCORSRequest:function(method,url)
{var xhr=new XMLHttpRequest();if("withCredentials"in xhr)
{xhr.open(method,url,true);}
else if(typeof XDomainRequest!="undefined")
{xhr=new XDomainRequest();xhr.open(method,url);}
else
{xhr=null;}
return xhr;},s3uploadToS3:function(file,url)
{var xhr=this.upload.s3createCORSRequest('PUT',url);if(!xhr)
{}
else
{xhr.onload=$.proxy(function()
{if(xhr.status==200)
{this.progress.hide();var s3file=url.split('?');if(!s3file[0])
{return false;}
if(!this.upload.direct)
{this.upload.$droparea.removeClass('drag-drop');}
var json={filelink:s3file[0]};if(this.upload.type=='file')
{var arr=s3file[0].split('/');json.filename=arr[arr.length-1];}
this.upload.callback(json,this.upload.direct,false);}
else
{}},this);xhr.onerror=function()
{};xhr.upload.onprogress=function(e)
{};xhr.setRequestHeader('Content-Type',file.type);xhr.setRequestHeader('x-amz-acl','public-read');xhr.send(file);}}};},utils:function()
{return{isMobile:function()
{return/(iPhone|iPod|BlackBerry|Android)/.test(navigator.userAgent);},isDesktop:function()
{return!/(iPhone|iPod|iPad|BlackBerry|Android)/.test(navigator.userAgent);},isString:function(obj)
{return Object.prototype.toString.call(obj)=='[object String]';},isEmpty:function(html,removeEmptyTags)
{html=html.replace(/[\u200B-\u200D\uFEFF]/g,'');html=html.replace(/&nbsp;/gi,'');html=html.replace(/<\/?br\s?\/?>/g,'');html=html.replace(/\s/g,'');html=html.replace(/^<p>[^\W\w\D\d]*?<\/p>$/i,'');html=html.replace(/<iframe(.*?[^>])>$/i,'iframe');html=html.replace(/<source(.*?[^>])>$/i,'source');if(removeEmptyTags!==false)
{html=html.replace(/<[^\/>][^>]*><\/[^>]+>/gi,'');html=html.replace(/<[^\/>][^>]*><\/[^>]+>/gi,'');}
html=$.trim(html);return html==='';},normalize:function(str)
{if(typeof(str)==='undefined')return 0;return parseInt(str.replace('px',''),10);},hexToRgb:function(hex)
{if(typeof hex=='undefined')return;if(hex.search(/^#/)==-1)return hex;var shorthandRegex=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;hex=hex.replace(shorthandRegex,function(m,r,g,b)
{return r+r+g+g+b+b;});var result=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);return'rgb('+parseInt(result[1],16)+', '+parseInt(result[2],16)+', '+parseInt(result[3],16)+')';},getOuterHtml:function(el)
{return $('<div>').append($(el).eq(0).clone()).html();},getAlignmentElement:function(el)
{if($.inArray(el.tagName,this.opts.alignmentTags)!==-1)
{return $(el);}
else
{return $(el).closest(this.opts.alignmentTags.toString().toLowerCase(),this.$editor[0]);}},removeEmptyAttr:function(el,attr)
{var $el=$(el);if(typeof $el.attr(attr)=='undefined')
{return true;}
if($el.attr(attr)==='')
{$el.removeAttr(attr);return true;}
return false;},removeEmpty:function(i,s)
{var $s=$($.parseHTML(s));$s.find('.redactor-invisible-space').removeAttr('style').removeAttr('class');if($s.find('hr, br, img, iframe, source').length!==0)return;var text=$.trim($s.text());if(this.utils.isEmpty(text,false))
{$s.remove();}},saveScroll:function()
{this.saveEditorScroll=this.$editor.scrollTop();this.saveBodyScroll=$(window).scrollTop();if(this.opts.scrollTarget)this.saveTargetScroll=$(this.opts.scrollTarget).scrollTop();},restoreScroll:function()
{if(typeof this.saveScroll==='undefined'&&typeof this.saveBodyScroll==='undefined')return;$(window).scrollTop(this.saveBodyScroll);this.$editor.scrollTop(this.saveEditorScroll);if(this.opts.scrollTarget)$(this.opts.scrollTarget).scrollTop(this.saveTargetScroll);},createSpaceElement:function()
{var space=document.createElement('span');space.className='redactor-invisible-space';space.innerHTML=this.opts.invisibleSpace;return space;},removeInlineTags:function(node)
{var tags=this.opts.inlineTags;tags.push('span');if(node.tagName=='PRE')tags.push('a');$(node).find(tags.join(',')).not('span.redactor-selection-marker').contents().unwrap();},replaceWithContents:function(node,removeInlineTags)
{var self=this;$(node).replaceWith(function()
{if(removeInlineTags===true)self.utils.removeInlineTags(this);return $(this).contents();});return $(node);},replaceToTag:function(node,tag,removeInlineTags)
{var replacement;var self=this;$(node).replaceWith(function()
{replacement=$('<'+tag+' />').append($(this).contents());for(var i=0;i<this.attributes.length;i++)
{replacement.attr(this.attributes[i].name,this.attributes[i].value);}
if(removeInlineTags===true)self.utils.removeInlineTags(replacement);return replacement;});return replacement;},isStartOfElement:function()
{var block=this.selection.getBlock();if(!block)return false;var offset=this.caret.getOffsetOfElement(block);return(offset===0)?true:false;},isEndOfElement:function(element)
{if(typeof element=='undefined')
{var element=this.selection.getBlock();if(!element)return false;}
var offset=this.caret.getOffsetOfElement(element);var text=$.trim($(element).text()).replace(/\n\r\n/g,'');return(offset==text.length)?true:false;},isEndOfEditor:function()
{var block=this.$editor[0];var offset=this.caret.getOffsetOfElement(block);var text=$.trim($(block).html().replace(/(<([^>]+)>)/gi,''));return(offset==text.length)?true:false;},isBlock:function(block)
{block=block[0]||block;return block&&this.utils.isBlockTag(block.tagName);},isBlockTag:function(tag)
{if(typeof tag=='undefined')return false;return this.reIsBlock.test(tag);},isTag:function(current,tag)
{var element=$(current).closest(tag,this.$editor[0]);if(element.length==1)
{return element[0];}
return false;},isSelectAll:function()
{return this.selectAll;},enableSelectAll:function()
{this.selectAll=true;},disableSelectAll:function()
{this.selectAll=false;},isRedactorParent:function(el)
{if(!el)
{return false;}
if($(el).parents('.redactor-editor').length===0||$(el).hasClass('redactor-editor'))
{return false;}
return el;},isCurrentOrParentHeader:function()
{return this.utils.isCurrentOrParent(['H1','H2','H3','H4','H5','H6']);},isCurrentOrParent:function(tagName)
{var parent=this.selection.getParent();var current=this.selection.getCurrent();if($.isArray(tagName))
{var matched=0;$.each(tagName,$.proxy(function(i,s)
{if(this.utils.isCurrentOrParentOne(current,parent,s))
{matched++;}},this));return(matched===0)?false:true;}
else
{return this.utils.isCurrentOrParentOne(current,parent,tagName);}},isCurrentOrParentOne:function(current,parent,tagName)
{tagName=tagName.toUpperCase();return parent&&parent.tagName===tagName?parent:current&&current.tagName===tagName?current:false;},isOldIe:function()
{return(this.utils.browser('msie')&&parseInt(this.utils.browser('version'),10)<9)?true:false;},isLessIe10:function()
{return(this.utils.browser('msie')&&parseInt(this.utils.browser('version'),10)<10)?true:false;},isIe11:function()
{return!!navigator.userAgent.match(/Trident\/7\./);},browser:function(browser)
{var ua=navigator.userAgent.toLowerCase();var match=/(opr)[\/]([\w.]+)/.exec(ua)||/(chrome)[ \/]([\w.]+)/.exec(ua)||/(webkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(ua)||/(webkit)[ \/]([\w.]+)/.exec(ua)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua)||/(msie) ([\w.]+)/.exec(ua)||ua.indexOf("trident")>=0&&/(rv)(?::| )([\w.]+)/.exec(ua)||ua.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua)||[];if(browser=='safari')return(typeof match[3]!='undefined')?match[3]=='safari':false;if(browser=='version')return match[2];if(browser=='webkit')return(match[1]=='chrome'||match[1]=='opr'||match[1]=='webkit');if(match[1]=='rv')return browser=='msie';if(match[1]=='opr')return browser=='webkit';return browser==match[1];},strpos:function(haystack,needle,offset)
{var i=haystack.indexOf(needle,offset);return i>=0?i:false;},disableBodyScroll:function()
{var $body=$('html');var windowWidth=window.innerWidth;if(!windowWidth)
{var documentElementRect=document.documentElement.getBoundingClientRect();windowWidth=documentElementRect.right-Math.abs(documentElementRect.left);}
var isOverflowing=document.body.clientWidth<windowWidth;var scrollbarWidth=this.utils.measureScrollbar();$body.css('overflow','hidden');if(isOverflowing)$body.css('padding-right',scrollbarWidth);},measureScrollbar:function()
{var $body=$('body');var scrollDiv=document.createElement('div');scrollDiv.className='redactor-scrollbar-measure';$body.append(scrollDiv);var scrollbarWidth=scrollDiv.offsetWidth-scrollDiv.clientWidth;$body[0].removeChild(scrollDiv);return scrollbarWidth;},enableBodyScroll:function()
{$('html').css({'overflow':'','padding-right':''});$('body').remove('redactor-scrollbar-measure');}};}};$(window).on('load.tools.redactor',function()
{$('[data-tools="redactor"]').redactor();});Redactor.prototype.init.prototype=Redactor.prototype;})(jQuery);(function($){$.Redactor.opts.langs['en']={html:'HTML',video:'Insert Video...',image:'Insert Image...',table:'Table',link:'Link',link_insert:'Insert Link ...',link_edit:'Edit link',unlink:'Unlink',formatting:'Formatting',paragraph:'Normal text',quote:'Quote',code:'Code',header1:'Header 1',header2:'Header 2',header3:'Header 3',header4:'Header 4',header5:'Header 5',bold:'Bold',italic:'Italic',fontcolor:'Font Color',backcolor:'Back Color',unorderedlist:'Unordered List',orderedlist:'Ordered List',outdent:'Outdent',indent:'Indent',cancel:'Cancel',insert:'Insert',save:'Save',_delete:'Delete',insert_table:'Insert Table...',insert_row_above:'Add Row Above',insert_row_below:'Add Row Below',insert_column_left:'Add Column Left',insert_column_right:'Add Column Right',delete_column:'Delete Column',delete_row:'Delete Row',delete_table:'Delete Table',rows:'Rows',columns:'Columns',add_head:'Add Head',delete_head:'Delete Head',title:'Title',image_position:'Position',none:'None',left:'Left',right:'Right',image_web_link:'Image Web Link',text:'Text',mailto:'Email',web:'URL',video_html_code:'Video Embed Code',file:'Insert File...',upload:'Upload',download:'Download',choose:'Choose',or_choose:'Or choose',drop_file_here:'Drop file here',align_left:'Align text to the left',align_center:'Center text',align_right:'Align text to the right',align_justify:'Justify text',horizontalrule:'Insert Horizontal Rule',deleted:'Deleted',anchor:'Anchor',link_new_tab:'Open link in new tab',underline:'Underline',alignment:'Alignment',filename:'Name (optional)',edit:'Edit',center:'Center'};})(jQuery);(function($)
{"use strict";var MagicSuggest=function(element,options)
{var ms=this;var defaults={allowFreeEntries:true,allowDuplicates:false,ajaxConfig:{},autoSelect:true,selectFirst:false,queryParam:'query',beforeSend:function(){},cls:'',data:null,dataUrlParams:{},disabled:false,disabledField:null,displayField:'name',editable:true,expanded:false,expandOnFocus:false,groupBy:null,hideTrigger:false,highlight:true,id:null,infoMsgCls:'',inputCfg:{},invalidCls:'ms-inv',matchCase:false,maxDropHeight:290,maxEntryLength:null,maxEntryRenderer:function(v){return'Please reduce your entry by '+v+' character'+(v>1?'s':'');},maxSuggestions:null,maxSelection:10,maxSelectionRenderer:function(v){return'You cannot choose more than '+v+' item'+(v>1?'s':'');},method:'POST',minChars:0,minCharsRenderer:function(v){return'Please type '+v+' more character'+(v>1?'s':'');},mode:'local',name:null,noSuggestionText:'No suggestions',placeholder:'Type or click here',renderer:null,required:false,resultAsString:false,resultAsStringDelimiter:',',resultsField:'results',selectionCls:'',selectionContainer:null,selectionPosition:'inner',selectionRenderer:null,selectionStacked:false,sortDir:'asc',sortOrder:null,strictSuggest:false,style:'',toggleOnClick:false,typeDelay:400,useTabKey:false,useCommaKey:true,useZebraStyle:false,value:null,valueField:'id',vregex:null,vtype:null};var conf=$.extend({},options);var cfg=$.extend(true,{},defaults,conf);this.addToSelection=function(items,isSilent)
{if(!cfg.maxSelection||_selection.length<cfg.maxSelection){if(!$.isArray(items)){items=[items];}
var valuechanged=false;$.each(items,function(index,json){if(cfg.allowDuplicates||$.inArray(json[cfg.valueField],ms.getValue())===-1){_selection.push(json);valuechanged=true;}});if(valuechanged===true){self._renderSelection();this.empty();if(isSilent!==true){$(this).trigger('selectionchange',[this,this.getSelection()]);}}}
this.input.attr('placeholder',(cfg.selectionPosition==='inner'&&this.getValue().length>0)?'':cfg.placeholder);};this.clear=function(isSilent)
{this.removeFromSelection(_selection.slice(0),isSilent);};this.collapse=function()
{if(cfg.expanded===true){this.combobox.detach();cfg.expanded=false;$(this).trigger('collapse',[this]);}};this.disable=function()
{this.container.addClass('ms-ctn-disabled');cfg.disabled=true;ms.input.attr('disabled',true);};this.empty=function(){this.input.val('');};this.enable=function()
{this.container.removeClass('ms-ctn-disabled');cfg.disabled=false;ms.input.attr('disabled',false);};this.expand=function()
{if(!cfg.expanded&&(this.input.val().length>=cfg.minChars||this.combobox.children().size()>0)){this.combobox.appendTo(this.container);self._processSuggestions();cfg.expanded=true;$(this).trigger('expand',[this]);}};this.isDisabled=function()
{return cfg.disabled;};this.isValid=function()
{var valid=cfg.required===false||_selection.length>0;if(cfg.vtype||cfg.vregex){$.each(_selection,function(index,item){valid=valid&&self._validateSingleItem(item[cfg.valueField]);});}
return valid;};this.getDataUrlParams=function()
{return cfg.dataUrlParams;};this.getName=function()
{return cfg.name;};this.getSelection=function()
{return _selection;};this.getRawValue=function(){return ms.input.val();};this.getValue=function()
{return $.map(_selection,function(o){return o[cfg.valueField];});};this.removeFromSelection=function(items,isSilent)
{if(!$.isArray(items)){items=[items];}
var valuechanged=false;$.each(items,function(index,json){var i=$.inArray(json[cfg.valueField],ms.getValue());if(i>-1){_selection.splice(i,1);valuechanged=true;}});if(valuechanged===true){self._renderSelection();if(isSilent!==true){$(this).trigger('selectionchange',[this,this.getSelection()]);}
if(cfg.expandOnFocus){ms.expand();}
if(cfg.expanded){self._processSuggestions();}}
this.input.attr('placeholder',(cfg.selectionPosition==='inner'&&this.getValue().length>0)?'':cfg.placeholder);};this.getData=function(){return _cbData;};this.setData=function(data){cfg.data=data;self._processSuggestions();};this.setName=function(name){cfg.name=name;if(ms._valueContainer){$.each(ms._valueContainer.children(),function(i,el){el.name=cfg.name;});}};this.setSelection=function(items){this.clear();this.addToSelection(items);};this.setValue=function(values)
{var items=[];$.each(values,function(index,value){var found=false;$.each(_cbData,function(i,item){if(item[cfg.valueField]==value){items.push(item);found=true;return false;}});if(!found){if(typeof(value)==='object'){items.push(value);}else{var json={};json[cfg.valueField]=value;json[cfg.displayField]=value;items.push(json);}}});if(items.length>0){this.addToSelection(items);}};this.setDataUrlParams=function(params)
{cfg.dataUrlParams=$.extend({},params);};var _selection=[],_comboItemHeight=0,_timer,_hasFocus=false,_groups=null,_cbData=[],_ctrlDown=false,KEYCODES={BACKSPACE:8,TAB:9,ENTER:13,CTRL:17,ESC:27,SPACE:32,UPARROW:38,DOWNARROW:40,COMMA:188};var self={_displaySuggestions:function(data){ms.combobox.show();ms.combobox.empty();var resHeight=0,nbGroups=0;if(_groups===null){self._renderComboItems(data);resHeight=_comboItemHeight*data.length;}
else{for(var grpName in _groups){nbGroups+=1;$('<div/>',{'class':'ms-res-group',html:grpName}).appendTo(ms.combobox);self._renderComboItems(_groups[grpName].items,true);}
var _groupItemHeight=ms.combobox.find('.ms-res-group').outerHeight();if(_groupItemHeight!==null){var tmpResHeight=nbGroups*_groupItemHeight;resHeight=(_comboItemHeight*data.length)+tmpResHeight;}else{resHeight=_comboItemHeight*(data.length+nbGroups);}}
if(resHeight<ms.combobox.height()||resHeight<=cfg.maxDropHeight){ms.combobox.height(resHeight);}
else if(resHeight>=ms.combobox.height()&&resHeight>cfg.maxDropHeight){ms.combobox.height(cfg.maxDropHeight);}
if(data.length===1&&cfg.autoSelect===true){ms.combobox.children().filter(':not(.ms-res-item-disabled):last').addClass('ms-res-item-active');}
if(cfg.selectFirst===true){ms.combobox.children().filter(':not(.ms-res-item-disabled):first').addClass('ms-res-item-active');}
if(data.length===0&&ms.getRawValue()!==""){var noSuggestionText=cfg.noSuggestionText.replace(/\{\{.*\}\}/,ms.input.val());self._updateHelper(noSuggestionText);ms.collapse();}
if(cfg.allowFreeEntries===false){if(data.length===0){$(ms.input).addClass(cfg.invalidCls);ms.combobox.hide();}else{$(ms.input).removeClass(cfg.invalidCls);}}},_getEntriesFromStringArray:function(data){var json=[];$.each(data,function(index,s){var entry={};entry[cfg.displayField]=entry[cfg.valueField]=$.trim(s);json.push(entry);});return json;},_highlightSuggestion:function(html){var q=ms.input.val();var specialCharacters=['^','$','*','+','?','.','(',')',':','!','|','{','}','[',']'];$.each(specialCharacters,function(index,value){q=q.replace(value,"\\"+value);})
if(q.length===0){return html;}
var glob=cfg.matchCase===true?'g':'gi';return html.replace(new RegExp('('+q+')(?!([^<]+)?>)',glob),'<em>$1</em>');},_moveSelectedRow:function(dir){if(!cfg.expanded){ms.expand();}
var list,start,active,scrollPos;list=ms.combobox.find(".ms-res-item:not(.ms-res-item-disabled)");if(dir==='down'){start=list.eq(0);}
else{start=list.filter(':last');}
active=ms.combobox.find('.ms-res-item-active:not(.ms-res-item-disabled):first');if(active.length>0){if(dir==='down'){start=active.nextAll('.ms-res-item:not(.ms-res-item-disabled)').first();if(start.length===0){start=list.eq(0);}
scrollPos=ms.combobox.scrollTop();ms.combobox.scrollTop(0);if(start[0].offsetTop+start.outerHeight()>ms.combobox.height()){ms.combobox.scrollTop(scrollPos+_comboItemHeight);}}
else{start=active.prevAll('.ms-res-item:not(.ms-res-item-disabled)').first();if(start.length===0){start=list.filter(':last');ms.combobox.scrollTop(_comboItemHeight*list.length);}
if(start[0].offsetTop<ms.combobox.scrollTop()){ms.combobox.scrollTop(ms.combobox.scrollTop()-_comboItemHeight);}}}
list.removeClass("ms-res-item-active");start.addClass("ms-res-item-active");},_processSuggestions:function(source){var json=null,data=source||cfg.data;if(data!==null){if(typeof(data)==='function'){data=data.call(ms,ms.getRawValue());}
if(typeof(data)==='string'){$(ms).trigger('beforeload',[ms]);var queryParams={}
queryParams[cfg.queryParam]=ms.input.val();var params=$.extend(queryParams,cfg.dataUrlParams);$.ajax($.extend({type:cfg.method,url:data,data:params,beforeSend:cfg.beforeSend,success:function(asyncData){json=typeof(asyncData)==='string'?JSON.parse(asyncData):asyncData;self._processSuggestions(json);$(ms).trigger('load',[ms,json]);if(self._asyncValues){ms.setValue(typeof(self._asyncValues)==='string'?JSON.parse(self._asyncValues):self._asyncValues);self._renderSelection();delete(self._asyncValues);}},error:function(){throw("Could not reach server");}},cfg.ajaxConfig));return;}else{if(data.length>0&&typeof(data[0])==='string'){_cbData=self._getEntriesFromStringArray(data);}else{_cbData=data[cfg.resultsField]||data;}}
var sortedData=cfg.mode==='remote'?_cbData:self._sortAndTrim(_cbData);self._displaySuggestions(self._group(sortedData));}},_render:function(el){ms.setName(cfg.name);ms.container=$('<div/>',{'class':'ms-ctn form-control '+(cfg.resultAsString?'ms-as-string ':'')+cfg.cls+
($(el).hasClass('input-lg')?' input-lg':'')+
($(el).hasClass('input-sm')?' input-sm':'')+
(cfg.disabled===true?' ms-ctn-disabled':'')+
(cfg.editable===true?'':' ms-ctn-readonly')+
(cfg.hideTrigger===false?'':' ms-no-trigger'),style:cfg.style,id:cfg.id});ms.container.focus($.proxy(handlers._onFocus,this));ms.container.blur($.proxy(handlers._onBlur,this));ms.container.keydown($.proxy(handlers._onKeyDown,this));ms.container.keyup($.proxy(handlers._onKeyUp,this));ms.input=$('<input/>',$.extend({type:'text','class':cfg.editable===true?'':' ms-input-readonly',readonly:!cfg.editable,placeholder:cfg.placeholder,disabled:cfg.disabled},cfg.inputCfg));ms.input.focus($.proxy(handlers._onInputFocus,this));ms.input.click($.proxy(handlers._onInputClick,this));ms.combobox=$('<div/>',{'class':'ms-res-ctn dropdown-menu'}).height(cfg.maxDropHeight);ms.combobox.on('click','div.ms-res-item',$.proxy(handlers._onComboItemSelected,this));ms.combobox.on('mouseover','div.ms-res-item',$.proxy(handlers._onComboItemMouseOver,this));if(cfg.selectionContainer){ms.selectionContainer=cfg.selectionContainer;$(ms.selectionContainer).addClass('ms-sel-ctn');}else{ms.selectionContainer=$('<div/>',{'class':'ms-sel-ctn'});}
ms.selectionContainer.click($.proxy(handlers._onFocus,this));if(cfg.selectionPosition==='inner'&&!cfg.selectionContainer){ms.selectionContainer.append(ms.input);}
else{ms.container.append(ms.input);}
ms.helper=$('<span/>',{'class':'ms-helper '+cfg.infoMsgCls});self._updateHelper();ms.container.append(ms.helper);$(el).replaceWith(ms.container);if(!cfg.selectionContainer){switch(cfg.selectionPosition){case'bottom':ms.selectionContainer.insertAfter(ms.container);if(cfg.selectionStacked===true){ms.selectionContainer.width(ms.container.width());ms.selectionContainer.addClass('ms-stacked');}
break;case'right':ms.selectionContainer.insertAfter(ms.container);ms.container.css('float','left');break;default:ms.container.append(ms.selectionContainer);break;}}
if(cfg.hideTrigger===false){ms.trigger=$('<div/>',{'class':'ms-trigger',html:'<div class="ms-trigger-ico"></div>'});ms.trigger.click($.proxy(handlers._onTriggerClick,this));ms.container.append(ms.trigger);}
$(window).resize($.proxy(handlers._onWindowResized,this));if(cfg.value!==null||cfg.data!==null){if(typeof(cfg.data)==='string'){self._asyncValues=cfg.value;self._processSuggestions();}else{self._processSuggestions();if(cfg.value!==null){ms.setValue(cfg.value);self._renderSelection();}}}
$("body").click(function(e){if(ms.container.hasClass('ms-ctn-focus')&&ms.container.has(e.target).length===0&&e.target.className.indexOf('ms-res-item')<0&&e.target.className.indexOf('ms-close-btn')<0&&ms.container[0]!==e.target){handlers._onBlur();}});if(cfg.expanded===true){cfg.expanded=false;ms.expand();}},_renderComboItems:function(items,isGrouped){var ref=this,html='';$.each(items,function(index,value){var displayed=cfg.renderer!==null?cfg.renderer.call(ref,value):value[cfg.displayField];var disabled=cfg.disabledField!==null&&value[cfg.disabledField]===true;var resultItemEl=$('<div/>',{'class':'ms-res-item '+(isGrouped?'ms-res-item-grouped ':'')+
(disabled?'ms-res-item-disabled ':'')+
(index%2===1&&cfg.useZebraStyle===true?'ms-res-odd':''),html:cfg.highlight===true?self._highlightSuggestion(displayed):displayed,'data-json':JSON.stringify(value)});html+=$('<div/>').append(resultItemEl).html();});ms.combobox.append(html);_comboItemHeight=ms.combobox.find('.ms-res-item:first').outerHeight();},_renderSelection:function(){var ref=this,w=0,inputOffset=0,items=[],asText=cfg.resultAsString===true&&!_hasFocus;ms.selectionContainer.find('.ms-sel-item').remove();if(ms._valueContainer!==undefined){ms._valueContainer.remove();}
$.each(_selection,function(index,value){var selectedItemEl,delItemEl,selectedItemHtml=cfg.selectionRenderer!==null?cfg.selectionRenderer.call(ref,value):value[cfg.displayField];var validCls=self._validateSingleItem(value[cfg.displayField])?'':' ms-sel-invalid';if(asText===true){selectedItemEl=$('<div/>',{'class':'ms-sel-item ms-sel-text '+cfg.selectionCls+validCls,html:selectedItemHtml+(index===(_selection.length-1)?'':cfg.resultAsStringDelimiter)}).data('json',value);}
else{selectedItemEl=$('<div/>',{'class':'ms-sel-item '+cfg.selectionCls+validCls,html:selectedItemHtml}).data('json',value);if(cfg.disabled===false){delItemEl=$('<span/>',{'class':'ms-close-btn'}).data('json',value).appendTo(selectedItemEl);delItemEl.click($.proxy(handlers._onTagTriggerClick,ref));}}
items.push(selectedItemEl);});ms.selectionContainer.prepend(items);ms._valueContainer=$('<div/>',{style:'display: none;'});$.each(ms.getValue(),function(i,val){var el=$('<input/>',{type:'hidden',name:cfg.name,value:val});el.appendTo(ms._valueContainer);});ms._valueContainer.appendTo(ms.selectionContainer);if(cfg.selectionPosition==='inner'&&!cfg.selectionContainer){ms.input.width(0);inputOffset=ms.input.offset().left-ms.selectionContainer.offset().left;w=ms.container.width()-inputOffset-42;ms.input.width(w);}
if(_selection.length===cfg.maxSelection){self._updateHelper(cfg.maxSelectionRenderer.call(this,_selection.length));}else{ms.helper.hide();}},_selectItem:function(item){if(cfg.maxSelection===1){_selection=[];}
ms.addToSelection(item.data('json'));item.removeClass('ms-res-item-active');if(cfg.expandOnFocus===false||_selection.length===cfg.maxSelection){ms.collapse();}
if(!_hasFocus){ms.input.focus();}else if(_hasFocus&&(cfg.expandOnFocus||_ctrlDown)){self._processSuggestions();if(_ctrlDown){ms.expand();}}},_sortAndTrim:function(data){var q=ms.getRawValue(),filtered=[],newSuggestions=[],selectedValues=ms.getValue();if(q.length>0){$.each(data,function(index,obj){var name=obj[cfg.displayField];if((cfg.matchCase===true&&name.indexOf(q)>-1)||(cfg.matchCase===false&&name.toLowerCase().indexOf(q.toLowerCase())>-1)){if(cfg.strictSuggest===false||name.toLowerCase().indexOf(q.toLowerCase())===0){filtered.push(obj);}}});}
else{filtered=data;}
$.each(filtered,function(index,obj){if(cfg.allowDuplicates||$.inArray(obj[cfg.valueField],selectedValues)===-1){newSuggestions.push(obj);}});if(cfg.sortOrder!==null){newSuggestions.sort(function(a,b){if(a[cfg.sortOrder]<b[cfg.sortOrder]){return cfg.sortDir==='asc'?-1:1;}
if(a[cfg.sortOrder]>b[cfg.sortOrder]){return cfg.sortDir==='asc'?1:-1;}
return 0;});}
if(cfg.maxSuggestions&&cfg.maxSuggestions>0){newSuggestions=newSuggestions.slice(0,cfg.maxSuggestions);}
return newSuggestions;},_group:function(data){if(cfg.groupBy!==null){_groups={};$.each(data,function(index,value){var props=cfg.groupBy.indexOf('.')>-1?cfg.groupBy.split('.'):cfg.groupBy;var prop=value[cfg.groupBy];if(typeof(props)!='string'){prop=value;while(props.length>0){prop=prop[props.shift()];}}
if(_groups[prop]===undefined){_groups[prop]={title:prop,items:[value]};}
else{_groups[prop].items.push(value);}});}
return data;},_updateHelper:function(html){ms.helper.html(html);if(!ms.helper.is(":visible")){ms.helper.fadeIn();}},_validateSingleItem:function(value){if(cfg.vregex!==null&&cfg.vregex instanceof RegExp){return cfg.vregex.test(value);}else if(cfg.vtype!==null){switch(cfg.vtype){case'alpha':return(/^[a-zA-Z_]+$/).test(value);case'alphanum':return(/^[a-zA-Z0-9_]+$/).test(value);case'email':return(/^(\w+)([\-+.][\w]+)*@(\w[\-\w]*\.){1,5}([A-Za-z]){2,6}$/).test(value);case'url':return(/(((^https?)|(^ftp)):\/\/([\-\w]+\.)+\w{2,3}(\/[%\-\w]+(\.\w{2,})?)*(([\w\-\.\?\\\/+@&#;`~=%!]*)(\.\w{2,})?)*\/?)/i).test(value);case'ipaddress':return(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/).test(value);}}
return true;}};var handlers={_onBlur:function(){ms.container.removeClass('ms-ctn-focus');ms.collapse();_hasFocus=false;if(ms.getRawValue()!==''&&cfg.allowFreeEntries===true){var obj={};obj[cfg.displayField]=obj[cfg.valueField]=ms.getRawValue().trim();ms.addToSelection(obj);}
self._renderSelection();if(ms.isValid()===false){ms.container.addClass(cfg.invalidCls);}
else if(ms.input.val()!==''&&cfg.allowFreeEntries===false){ms.empty();self._updateHelper('');}
$(ms).trigger('blur',[ms]);},_onComboItemMouseOver:function(e){var target=$(e.currentTarget);if(!target.hasClass('ms-res-item-disabled')){ms.combobox.children().removeClass('ms-res-item-active');target.addClass('ms-res-item-active');}},_onComboItemSelected:function(e){var target=$(e.currentTarget);if(!target.hasClass('ms-res-item-disabled')){self._selectItem($(e.currentTarget));}},_onFocus:function(){ms.input.focus();},_onInputClick:function(){if(ms.isDisabled()===false&&_hasFocus){if(cfg.toggleOnClick===true){if(cfg.expanded){ms.collapse();}else{ms.expand();}}}},_onInputFocus:function(){if(ms.isDisabled()===false&&!_hasFocus){_hasFocus=true;ms.container.addClass('ms-ctn-focus');ms.container.removeClass(cfg.invalidCls);var curLength=ms.getRawValue().length;if(cfg.expandOnFocus===true){ms.expand();}
if(_selection.length===cfg.maxSelection){self._updateHelper(cfg.maxSelectionRenderer.call(this,_selection.length));}else if(curLength<cfg.minChars){self._updateHelper(cfg.minCharsRenderer.call(this,cfg.minChars-curLength));}
self._renderSelection();$(ms).trigger('focus',[ms]);}},_onKeyDown:function(e){var active=ms.combobox.find('.ms-res-item-active:not(.ms-res-item-disabled):first'),freeInput=ms.input.val();$(ms).trigger('keydown',[ms,e]);if(e.keyCode===KEYCODES.TAB&&(cfg.useTabKey===false||(cfg.useTabKey===true&&active.length===0&&ms.input.val().length===0))){handlers._onBlur();return;}
switch(e.keyCode){case KEYCODES.BACKSPACE:if(freeInput.length===0&&ms.getSelection().length>0&&cfg.selectionPosition==='inner'){_selection.pop();self._renderSelection();$(ms).trigger('selectionchange',[ms,ms.getSelection()]);ms.input.attr('placeholder',(cfg.selectionPosition==='inner'&&ms.getValue().length>0)?'':cfg.placeholder);ms.input.focus();e.preventDefault();}
break;case KEYCODES.TAB:case KEYCODES.ESC:e.preventDefault();break;case KEYCODES.ENTER:if(freeInput!==''||cfg.expanded){e.preventDefault();}
break;case KEYCODES.COMMA:if(cfg.useCommaKey===true){e.preventDefault();}
break;case KEYCODES.CTRL:_ctrlDown=true;break;case KEYCODES.DOWNARROW:e.preventDefault();self._moveSelectedRow("down");break;case KEYCODES.UPARROW:e.preventDefault();self._moveSelectedRow("up");break;default:if(_selection.length===cfg.maxSelection){e.preventDefault();}
break;}},_onKeyUp:function(e){var freeInput=ms.getRawValue(),inputValid=$.trim(ms.input.val()).length>0&&(!cfg.maxEntryLength||$.trim(ms.input.val()).length<=cfg.maxEntryLength),selected,obj={};$(ms).trigger('keyup',[ms,e]);clearTimeout(_timer);if(e.keyCode===KEYCODES.ESC&&cfg.expanded){ms.combobox.hide();}
if((e.keyCode===KEYCODES.TAB&&cfg.useTabKey===false)||(e.keyCode>KEYCODES.ENTER&&e.keyCode<KEYCODES.SPACE)){if(e.keyCode===KEYCODES.CTRL){_ctrlDown=false;}
return;}
switch(e.keyCode){case KEYCODES.UPARROW:case KEYCODES.DOWNARROW:e.preventDefault();break;case KEYCODES.ENTER:case KEYCODES.TAB:case KEYCODES.COMMA:if(e.keyCode!==KEYCODES.COMMA||cfg.useCommaKey===true){e.preventDefault();if(cfg.expanded===true){selected=ms.combobox.find('.ms-res-item-active:not(.ms-res-item-disabled):first');if(selected.length>0){self._selectItem(selected);return;}}
if(inputValid===true&&cfg.allowFreeEntries===true){obj[cfg.displayField]=obj[cfg.valueField]=freeInput.trim();ms.addToSelection(obj);ms.collapse();ms.input.focus();}
break;}
default:if(_selection.length===cfg.maxSelection){self._updateHelper(cfg.maxSelectionRenderer.call(this,_selection.length));}
else{if(freeInput.length<cfg.minChars){self._updateHelper(cfg.minCharsRenderer.call(this,cfg.minChars-freeInput.length));if(cfg.expanded===true){ms.collapse();}}
else if(cfg.maxEntryLength&&freeInput.length>cfg.maxEntryLength){self._updateHelper(cfg.maxEntryRenderer.call(this,freeInput.length-cfg.maxEntryLength));if(cfg.expanded===true){ms.collapse();}}
else{ms.helper.hide();if(cfg.minChars<=freeInput.length){_timer=setTimeout(function(){if(cfg.expanded===true){self._processSuggestions();}else{ms.expand();}},cfg.typeDelay);}}}
break;}},_onTagTriggerClick:function(e){ms.removeFromSelection($(e.currentTarget).data('json'));},_onTriggerClick:function(){if(ms.isDisabled()===false&&!(cfg.expandOnFocus===true&&_selection.length===cfg.maxSelection)){$(ms).trigger('triggerclick',[ms]);if(cfg.expanded===true){ms.collapse();}else{var curLength=ms.getRawValue().length;if(curLength>=cfg.minChars){ms.input.focus();ms.expand();}else{self._updateHelper(cfg.minCharsRenderer.call(this,cfg.minChars-curLength));}}}},_onWindowResized:function(){self._renderSelection();}};if(element!==null){self._render(element);}};$.fn.magicSuggest=function(options){var obj=$(this);if(obj.size()===1&&obj.data('magicSuggest')){return obj.data('magicSuggest');}
obj.each(function(i){var cntr=$(this);if(cntr.data('magicSuggest')){return;}
if(this.nodeName.toLowerCase()==='select'){options.data=[];options.value=[];$.each(this.children,function(index,child){if(child.nodeName&&child.nodeName.toLowerCase()==='option'){options.data.push({id:child.value,name:child.text});if($(child).attr('selected')){options.value.push(child.value);}}});}
var def={};$.each(this.attributes,function(i,att){def[att.name]=att.name==='value'&&att.value!==''?JSON.parse(att.value):att.value;});var field=new MagicSuggest(this,$.extend([],$.fn.magicSuggest.defaults,options,def));cntr.data('magicSuggest',field);field.container.data('magicSuggest',field);});if(obj.size()===1){return obj.data('magicSuggest');}
return obj;};$.fn.magicSuggest.defaults={};})(jQuery);/*! Magnific Popup - v0.9.9 - 2014-09-06
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2014 Dmitry Semenov; */(function(e){var t,n,i,o,r,a,s,l="Close",c="BeforeClose",d="AfterClose",u="BeforeAppend",p="MarkupParse",f="Open",m="Change",g="mfp",h="."+g,v="mfp-ready",C="mfp-removing",y="mfp-prevent-close",w=function(){},b=!!window.jQuery,I=e(window),x=function(e,n){t.ev.on(g+e+h,n)},k=function(t,n,i,o){var r=document.createElement("div");return r.className="mfp-"+t,i&&(r.innerHTML=i),o?n&&n.appendChild(r):(r=e(r),n&&r.appendTo(n)),r},T=function(n,i){t.ev.triggerHandler(g+n,i),t.st.callbacks&&(n=n.charAt(0).toLowerCase()+n.slice(1),t.st.callbacks[n]&&t.st.callbacks[n].apply(t,e.isArray(i)?i:[i]))},E=function(n){return n===s&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),s=n),t.currTemplate.closeBtn},_=function(){e.magnificPopup.instance||(t=new w,t.init(),e.magnificPopup.instance=t)},S=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1};w.prototype={constructor:w,init:function(){var n=navigator.appVersion;t.isIE7=-1!==n.indexOf("MSIE 7."),t.isIE8=-1!==n.indexOf("MSIE 8."),t.isLowIE=t.isIE7||t.isIE8,t.isAndroid=/android/gi.test(n),t.isIOS=/iphone|ipad|ipod/gi.test(n),t.supportsTransition=S(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),o=e(document),t.popupsCache={}},open:function(n){i||(i=e(document.body));var r;if(n.isObj===!1){t.items=n.items.toArray(),t.index=0;var s,l=n.items;for(r=0;l.length>r;r++)if(s=l[r],s.parsed&&(s=s.el[0]),s===n.el[0]){t.index=r;break}}else t.items=e.isArray(n.items)?n.items:[n.items],t.index=n.index||0;if(t.isOpen)return t.updateItemHTML(),void 0;t.types=[],a="",t.ev=n.mainEl&&n.mainEl.length?n.mainEl.eq(0):o,n.key?(t.popupsCache[n.key]||(t.popupsCache[n.key]={}),t.currTemplate=t.popupsCache[n.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,n),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=k("bg").on("click"+h,function(){t.close()}),t.wrap=k("wrap").attr("tabindex",-1).on("click"+h,function(e){t._checkIfClose(e.target)&&t.close()}),t.container=k("container",t.wrap)),t.contentContainer=k("content"),t.st.preloader&&(t.preloader=k("preloader",t.container,t.st.tLoading));var c=e.magnificPopup.modules;for(r=0;c.length>r;r++){var d=c[r];d=d.charAt(0).toUpperCase()+d.slice(1),t["init"+d].call(t)}T("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(x(p,function(e,t,n,i){n.close_replaceWith=E(i.type)}),a+=" mfp-close-btn-in"):t.wrap.append(E())),t.st.alignTop&&(a+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:I.scrollTop(),position:"absolute"}),(t.st.fixedBgPos===!1||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:o.height(),position:"absolute"}),t.st.enableEscapeKey&&o.on("keyup"+h,function(e){27===e.keyCode&&t.close()}),I.on("resize"+h,function(){t.updateSize()}),t.st.closeOnContentClick||(a+=" mfp-auto-cursor"),a&&t.wrap.addClass(a);var u=t.wH=I.height(),m={};if(t.fixedContentPos&&t._hasScrollBar(u)){var g=t._getScrollbarSize();g&&(m.marginRight=g)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):m.overflow="hidden");var C=t.st.mainClass;return t.isIE7&&(C+=" mfp-ie7"),C&&t._addClassToMFP(C),t.updateItemHTML(),T("BuildControls"),e("html").css(m),t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo||i),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP(v),t._setFocus()):t.bgOverlay.addClass(v),o.on("focusin"+h,t._onFocusIn)},16),t.isOpen=!0,t.updateSize(u),T(f),n},close:function(){t.isOpen&&(T(c),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP(C),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){T(l);var n=C+" "+v+" ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(n+=t.st.mainClass+" "),t._removeClassFromMFP(n),t.fixedContentPos){var i={marginRight:""};t.isIE7?e("body, html").css("overflow",""):i.overflow="",e("html").css(i)}o.off("keyup"+h+" focusin"+h),t.ev.off(h),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&t.currTemplate[t.currItem.type]!==!0||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,T(d)},updateSize:function(e){if(t.isIOS){var n=document.documentElement.clientWidth/window.innerWidth,i=window.innerHeight*n;t.wrap.css("height",i),t.wH=i}else t.wH=e||I.height();t.fixedContentPos||t.wrap.css("height",t.wH),T("Resize")},updateItemHTML:function(){var n=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),n.parsed||(n=t.parseEl(t.index));var i=n.type;if(T("BeforeChange",[t.currItem?t.currItem.type:"",i]),t.currItem=n,!t.currTemplate[i]){var o=t.st[i]?t.st[i].markup:!1;T("FirstMarkupParse",o),t.currTemplate[i]=o?e(o):!0}r&&r!==n.type&&t.container.removeClass("mfp-"+r+"-holder");var a=t["get"+i.charAt(0).toUpperCase()+i.slice(1)](n,t.currTemplate[i]);t.appendContent(a,i),n.preloaded=!0,T(m,n),r=n.type,t.container.prepend(t.contentContainer),T("AfterChange")},appendContent:function(e,n){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&t.currTemplate[n]===!0?t.content.find(".mfp-close").length||t.content.append(E()):t.content=e:t.content="",T(u),t.container.addClass("mfp-"+n+"-holder"),t.contentContainer.append(t.content)},parseEl:function(n){var i,o=t.items[n];if(o.tagName?o={el:e(o)}:(i=o.type,o={data:o,src:o.src}),o.el){for(var r=t.types,a=0;r.length>a;a++)if(o.el.hasClass("mfp-"+r[a])){i=r[a];break}o.src=o.el.attr("data-mfp-src"),o.src||(o.src=o.el.attr("href"))}return o.type=i||t.st.type||"inline",o.index=n,o.parsed=!0,t.items[n]=o,T("ElementParse",o),t.items[n]},addGroup:function(e,n){var i=function(i){i.mfpEl=this,t._openClick(i,e,n)};n||(n={});var o="click.magnificPopup";n.mainEl=e,n.items?(n.isObj=!0,e.off(o).on(o,i)):(n.isObj=!1,n.delegate?e.off(o).on(o,n.delegate,i):(n.items=e,e.off(o).on(o,i)))},_openClick:function(n,i,o){var r=void 0!==o.midClick?o.midClick:e.magnificPopup.defaults.midClick;if(r||2!==n.which&&!n.ctrlKey&&!n.metaKey){var a=void 0!==o.disableOn?o.disableOn:e.magnificPopup.defaults.disableOn;if(a)if(e.isFunction(a)){if(!a.call(t))return!0}else if(a>I.width())return!0;n.type&&(n.preventDefault(),t.isOpen&&n.stopPropagation()),o.el=e(n.mfpEl),o.delegate&&(o.items=i.find(o.delegate)),t.open(o)}},updateStatus:function(e,i){if(t.preloader){n!==e&&t.container.removeClass("mfp-s-"+n),i||"loading"!==e||(i=t.st.tLoading);var o={status:e,text:i};T("UpdateStatus",o),e=o.status,i=o.text,t.preloader.html(i),t.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),t.container.addClass("mfp-s-"+e),n=e}},_checkIfClose:function(n){if(!e(n).hasClass(y)){var i=t.st.closeOnContentClick,o=t.st.closeOnBgClick;if(i&&o)return!0;if(!t.content||e(n).hasClass("mfp-close")||t.preloader&&n===t.preloader[0])return!0;if(n===t.content[0]||e.contains(t.content[0],n)){if(i)return!0}else if(o&&e.contains(document,n))return!0;return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?o.height():document.body.scrollHeight)>(e||I.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(n){return n.target===t.wrap[0]||e.contains(t.wrap[0],n.target)?void 0:(t._setFocus(),!1)},_parseMarkup:function(t,n,i){var o;i.data&&(n=e.extend(i.data,n)),T(p,[t,n,i]),e.each(n,function(e,n){if(void 0===n||n===!1)return!0;if(o=e.split("_"),o.length>1){var i=t.find(h+"-"+o[0]);if(i.length>0){var r=o[1];"replaceWith"===r?i[0]!==n[0]&&i.replaceWith(n):"img"===r?i.is("img")?i.attr("src",n):i.replaceWith('<img src="'+n+'" class="'+i.attr("class")+'" />'):i.attr(o[1],n)}}else t.find(h+"-"+e).html(n)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:w.prototype,modules:[],open:function(t,n){return _(),t=t?e.extend(!0,{},t):{},t.isObj=!0,t.index=n||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,n){n.options&&(e.magnificPopup.defaults[t]=n.options),e.extend(this.proto,n.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},e.fn.magnificPopup=function(n){_();var i=e(this);if("string"==typeof n)if("open"===n){var o,r=b?i.data("magnificPopup"):i[0].magnificPopup,a=parseInt(arguments[1],10)||0;r.items?o=r.items[a]:(o=i,r.delegate&&(o=o.find(r.delegate)),o=o.eq(a)),t._openClick({mfpEl:o},i,r)}else t.isOpen&&t[n].apply(t,Array.prototype.slice.call(arguments,1));else n=e.extend(!0,{},n),b?i.data("magnificPopup",n):i[0].magnificPopup=n,t.addGroup(i,n);return i};var P,O,z,M="inline",B=function(){z&&(O.after(z.addClass(P)).detach(),z=null)};e.magnificPopup.registerModule(M,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push(M),x(l+"."+M,function(){B()})},getInline:function(n,i){if(B(),n.src){var o=t.st.inline,r=e(n.src);if(r.length){var a=r[0].parentNode;a&&a.tagName&&(O||(P=o.hiddenClass,O=k(P),P="mfp-"+P),z=r.after(O).detach().removeClass(P)),t.updateStatus("ready")}else t.updateStatus("error",o.tNotFound),r=e("<div>");return n.inlineElement=r,r}return t.updateStatus("ready"),t._parseMarkup(i,{},n),i}}});var F,H="ajax",L=function(){F&&i.removeClass(F)},A=function(){L(),t.req&&t.req.abort()};e.magnificPopup.registerModule(H,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push(H),F=t.st.ajax.cursor,x(l+"."+H,A),x("BeforeChange."+H,A)},getAjax:function(n){F&&i.addClass(F),t.updateStatus("loading");var o=e.extend({url:n.src,success:function(i,o,r){var a={data:i,xhr:r};T("ParseAjax",a),t.appendContent(e(a.data),H),n.finished=!0,L(),t._setFocus(),setTimeout(function(){t.wrap.addClass(v)},16),t.updateStatus("ready"),T("AjaxContentAdded")},error:function(){L(),n.finished=n.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",n.src))}},t.st.ajax.settings);return t.req=e.ajax(o),""}}});var j,N=function(n){if(n.data&&void 0!==n.data.title)return n.data.title;var i=t.st.image.titleSrc;if(i){if(e.isFunction(i))return i.call(t,n);if(n.el)return n.el.attr(i)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var e=t.st.image,n=".image";t.types.push("image"),x(f+n,function(){"image"===t.currItem.type&&e.cursor&&i.addClass(e.cursor)}),x(l+n,function(){e.cursor&&i.removeClass(e.cursor),I.off("resize"+h)}),x("Resize"+n,t.resizeImage),t.isLowIE&&x("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e&&e.img&&t.st.image.verticalFit){var n=0;t.isLowIE&&(n=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-n)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,j&&clearInterval(j),e.isCheckingImgSize=!1,T("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var n=0,i=e.img[0],o=function(r){j&&clearInterval(j),j=setInterval(function(){return i.naturalWidth>0?(t._onImageHasSize(e),void 0):(n>200&&clearInterval(j),n++,3===n?o(10):40===n?o(50):100===n&&o(500),void 0)},r)};o(1)},getImage:function(n,i){var o=0,r=function(){n&&(n.img[0].complete?(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("ready")),n.hasSize=!0,n.loaded=!0,T("ImageLoadComplete")):(o++,200>o?setTimeout(r,100):a()))},a=function(){n&&(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("error",s.tError.replace("%url%",n.src))),n.hasSize=!0,n.loaded=!0,n.loadError=!0)},s=t.st.image,l=i.find(".mfp-img");if(l.length){var c=document.createElement("img");c.className="mfp-img",n.img=e(c).on("load.mfploader",r).on("error.mfploader",a),c.src=n.src,l.is("img")&&(n.img=n.img.clone()),c=n.img[0],c.naturalWidth>0?n.hasSize=!0:c.width||(n.hasSize=!1)}return t._parseMarkup(i,{title:N(n),img_replaceWith:n.img},n),t.resizeImage(),n.hasSize?(j&&clearInterval(j),n.loadError?(i.addClass("mfp-loading"),t.updateStatus("error",s.tError.replace("%url%",n.src))):(i.removeClass("mfp-loading"),t.updateStatus("ready")),i):(t.updateStatus("loading"),n.loading=!0,n.hasSize||(n.imgHidden=!0,i.addClass("mfp-loading"),t.findImageSize(n)),i)}}});var W,R=function(){return void 0===W&&(W=void 0!==document.createElement("p").style.MozTransform),W};e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,n=t.st.zoom,i=".zoom";if(n.enabled&&t.supportsTransition){var o,r,a=n.duration,s=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),i="all "+n.duration/1e3+"s "+n.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},r="transition";return o["-webkit-"+r]=o["-moz-"+r]=o["-o-"+r]=o[r]=i,t.css(o),t},d=function(){t.content.css("visibility","visible")};x("BuildControls"+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.content.css("visibility","hidden"),e=t._getItemToZoom(),!e)return d(),void 0;r=s(e),r.css(t._getOffset()),t.wrap.append(r),o=setTimeout(function(){r.css(t._getOffset(!0)),o=setTimeout(function(){d(),setTimeout(function(){r.remove(),e=r=null,T("ZoomAnimationEnded")},16)},a)},16)}}),x(c+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.st.removalDelay=a,!e){if(e=t._getItemToZoom(),!e)return;r=s(e)}r.css(t._getOffset(!0)),t.wrap.append(r),t.content.css("visibility","hidden"),setTimeout(function(){r.css(t._getOffset())},16)}}),x(l+i,function(){t._allowZoom()&&(d(),r&&r.remove(),e=null)})}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return t.currItem.hasSize?t.currItem.img:!1},_getOffset:function(n){var i;i=n?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem);var o=i.offset(),r=parseInt(i.css("padding-top"),10),a=parseInt(i.css("padding-bottom"),10);o.top-=e(window).scrollTop()-r;var s={width:i.width(),height:(b?i.innerHeight():i[0].offsetHeight)-a-r};return R()?s["-moz-transform"]=s.transform="translate("+o.left+"px,"+o.top+"px)":(s.left=o.left,s.top=o.top),s}}});var Z="iframe",q="//about:blank",D=function(e){if(t.currTemplate[Z]){var n=t.currTemplate[Z].find("iframe");n.length&&(e||(n[0].src=q),t.isIE8&&n.css("display",e?"block":"none"))}};e.magnificPopup.registerModule(Z,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push(Z),x("BeforeChange",function(e,t,n){t!==n&&(t===Z?D():n===Z&&D(!0))}),x(l+"."+Z,function(){D()})},getIframe:function(n,i){var o=n.src,r=t.st.iframe;e.each(r.patterns,function(){return o.indexOf(this.index)>-1?(this.id&&(o="string"==typeof this.id?o.substr(o.lastIndexOf(this.id)+this.id.length,o.length):this.id.call(this,o)),o=this.src.replace("%id%",o),!1):void 0});var a={};return r.srcAction&&(a[r.srcAction]=o),t._parseMarkup(i,a,n),t.updateStatus("ready"),i}}});var K=function(e){var n=t.items.length;return e>n-1?e-n:0>e?n+e:e},Y=function(e,t,n){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,n)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var n=t.st.gallery,i=".mfp-gallery",r=Boolean(e.fn.mfpFastClick);return t.direction=!0,n&&n.enabled?(a+=" mfp-gallery",x(f+i,function(){n.navigateByImgClick&&t.wrap.on("click"+i,".mfp-img",function(){return t.items.length>1?(t.next(),!1):void 0}),o.on("keydown"+i,function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()})}),x("UpdateStatus"+i,function(e,n){n.text&&(n.text=Y(n.text,t.currItem.index,t.items.length))}),x(p+i,function(e,i,o,r){var a=t.items.length;o.counter=a>1?Y(n.tCounter,r.index,a):""}),x("BuildControls"+i,function(){if(t.items.length>1&&n.arrows&&!t.arrowLeft){var i=n.arrowMarkup,o=t.arrowLeft=e(i.replace(/%title%/gi,n.tPrev).replace(/%dir%/gi,"left")).addClass(y),a=t.arrowRight=e(i.replace(/%title%/gi,n.tNext).replace(/%dir%/gi,"right")).addClass(y),s=r?"mfpFastClick":"click";o[s](function(){t.prev()}),a[s](function(){t.next()}),t.isIE7&&(k("b",o[0],!1,!0),k("a",o[0],!1,!0),k("b",a[0],!1,!0),k("a",a[0],!1,!0)),t.container.append(o.add(a))}}),x(m+i,function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout(function(){t.preloadNearbyImages(),t._preloadTimeout=null},16)}),x(l+i,function(){o.off(i),t.wrap.off("click"+i),t.arrowLeft&&r&&t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(),t.arrowRight=t.arrowLeft=null}),void 0):!1},next:function(){t.direction=!0,t.index=K(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=K(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,n=t.st.gallery.preload,i=Math.min(n[0],t.items.length),o=Math.min(n[1],t.items.length);for(e=1;(t.direction?o:i)>=e;e++)t._preloadItem(t.index+e);for(e=1;(t.direction?i:o)>=e;e++)t._preloadItem(t.index-e)},_preloadItem:function(n){if(n=K(n),!t.items[n].preloaded){var i=t.items[n];i.parsed||(i=t.parseEl(n)),T("LazyLoad",i),"image"===i.type&&(i.img=e('<img class="mfp-img" />').on("load.mfploader",function(){i.hasSize=!0}).on("error.mfploader",function(){i.hasSize=!0,i.loadError=!0,T("LazyLoadError",i)}).attr("src",i.src)),i.preloaded=!0}}}});var U="retina";e.magnificPopup.registerModule(U,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,n=e.ratio;n=isNaN(n)?n():n,n>1&&(x("ImageHasSize."+U,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/n,width:"100%"})}),x("ElementParse."+U,function(t,i){i.src=e.replaceSrc(i,n)}))}}}}),function(){var t=1e3,n="ontouchstart"in window,i=function(){I.off("touchmove"+r+" touchend"+r)},o="mfpFastClick",r="."+o;e.fn.mfpFastClick=function(o){return e(this).each(function(){var a,s=e(this);if(n){var l,c,d,u,p,f;s.on("touchstart"+r,function(e){u=!1,f=1,p=e.originalEvent?e.originalEvent.touches[0]:e.touches[0],c=p.clientX,d=p.clientY,I.on("touchmove"+r,function(e){p=e.originalEvent?e.originalEvent.touches:e.touches,f=p.length,p=p[0],(Math.abs(p.clientX-c)>10||Math.abs(p.clientY-d)>10)&&(u=!0,i())}).on("touchend"+r,function(e){i(),u||f>1||(a=!0,e.preventDefault(),clearTimeout(l),l=setTimeout(function(){a=!1},t),o())})})}s.on("click"+r,function(){a||o()})})},e.fn.destroyMfpFastClick=function(){e(this).off("touchstart"+r+" click"+r),n&&I.off("touchmove"+r+" touchend"+r)}}(),_()})(window.jQuery||window.Zepto);