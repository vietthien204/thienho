/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-appearance-backgroundblendmode-backgroundsize-bgpositionshorthand-bgpositionxy-bgrepeatspace_bgrepeatround-bgsizecover-borderradius-boxshadow-boxsizing-canvas-canvastext-cookies-cssanimations-csscalc-csscolumns-cssfilters-cssgradients-csshairline-csshyphens_softhyphens_softhyphensfind-cssmask-cssremunit-csstransforms-csstransforms3d-csstransitions-cssvhunit-cssvmaxunit-cssvwunit-cubicbezierrange-ellipsis-flexbox-flexboxlegacy-flexboxtweener-flexwrap-fontface-lastchild-mediaqueries-multiplebgs-nthchild-opacity-rgba-shapes-subpixelfont-svg-textalignlast-textshadow-unicode-setclasses !*/
!function(e,t,n){function i(e,t){return typeof e===t}function r(){var e,t,n,r,o,s,a;for(var d in T)if(T.hasOwnProperty(d)){if(e=[],t=T[d],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=i(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)s=e[o],a=s.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),x.push((r?"":"no-")+a.join("-"))}}function o(e){var t=k.className,n=Modernizr._config.classPrefix||"";if(C&&(t=t.baseVal),Modernizr._config.enableJSClass){var i=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(i,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),C?k.className.baseVal=t:k.className=t)}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):C?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(e,t){return e-1===t||e===t||e+1===t}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function l(e,t){if("object"==typeof e)for(var n in e)E(e,n)&&l(n,e[n]);else{e=e.toLowerCase();var i=e.split("."),r=Modernizr[i[0]];if(2==i.length&&(r=r[i[1]]),"undefined"!=typeof r)return Modernizr;t="function"==typeof t?t():t,1==i.length?Modernizr[i[0]]=t:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=t),o([(t&&0!=t?"":"no-")+i.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function u(){var e=t.body;return e||(e=s(C?"svg":"body"),e.fake=!0),e}function c(e,n,i,r){var o,a,d,l,c="modernizr",f=s("div"),p=u();if(parseInt(i,10))for(;i--;)d=s("div"),d.id=r?r[i]:c+(i+1),f.appendChild(d);return o=s("style"),o.type="text/css",o.id="s"+c,(p.fake?p:f).appendChild(o),p.appendChild(f),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),f.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",l=k.style.overflow,k.style.overflow="hidden",k.appendChild(p)),a=n(f,e),p.fake?(p.parentNode.removeChild(p),k.style.overflow=l,k.offsetHeight):f.parentNode.removeChild(f),!!a}function f(e,t){return!!~(""+e).indexOf(t)}function p(e,t){return function(){return e.apply(t,arguments)}}function h(e,t,n){var r;for(var o in e)if(e[o]in t)return n===!1?e[o]:(r=t[e[o]],i(r,"function")?p(r,n||t):r);return!1}function m(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function g(t,i){var r=t.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(m(t[r]),i))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];r--;)o.push("("+m(t[r])+":"+i+")");return o=o.join(" or "),c("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function b(e,t,r,o){function a(){u&&(delete W.style,delete W.modElem)}if(o=i(o,"undefined")?!1:o,!i(r,"undefined")){var l=g(e,r);if(!i(l,"undefined"))return l}for(var u,c,p,h,m,b=["modernizr","tspan","samp"];!W.style&&b.length;)u=!0,W.modElem=s(b.shift()),W.style=W.modElem.style;for(p=e.length,c=0;p>c;c++)if(h=e[c],m=W.style[h],f(h,"-")&&(h=d(h)),W.style[h]!==n){if(o||i(r,"undefined"))return a(),"pfx"==t?h:!0;try{W.style[h]=r}catch(v){}if(W.style[h]!=m)return a(),"pfx"==t?h:!0}return a(),!1}function v(e,t,n,r,o){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+B.join(s+" ")+s).split(" ");return i(t,"string")||i(t,"undefined")?b(a,t,r,o):(a=(e+" "+L.join(s+" ")+s).split(" "),h(a,t,n))}function y(e,t,i){return v(e,n,n,t,i)}var x=[],T=[],w={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){T.push({name:e,fn:t,options:n})},addAsyncTest:function(e){T.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr,Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var k=t.documentElement,C="svg"===k.nodeName.toLowerCase();Modernizr.addTest("canvas",function(){var e=s("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("canvastext",function(){return Modernizr.canvas===!1?!1:"function"==typeof s("canvas").getContext("2d").fillText}),Modernizr.addTest("bgpositionshorthand",function(){var e=s("a"),t=e.style,n="right 10px bottom 10px";return t.cssText="background-position: "+n+";",t.backgroundPosition===n}),Modernizr.addTest("multiplebgs",function(){var e=s("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}),Modernizr.addTest("cssremunit",function(){var e=s("a").style;try{e.fontSize="3rem"}catch(t){}return/rem/.test(e.fontSize)}),Modernizr.addTest("rgba",function(){var e=s("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1});var S=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];w._prefixes=S,Modernizr.addTest("csscalc",function(){var e="width:",t="calc(10px);",n=s("a");return n.style.cssText=e+S.join(t+e),!!n.style.length}),Modernizr.addTest("cubicbezierrange",function(){var e=s("a");return e.style.cssText=S.join("transition-timing-function:cubic-bezier(1,0,0,1.1); "),!!e.style.length}),Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",i="",r=0,o=S.length-1;o>r;r++)e=0===r?"to ":"",i+=t+S[r]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(i+=t+"-webkit-"+n);var a=s("a"),d=a.style;return d.cssText=i,(""+d.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("opacity",function(){var e=s("a").style;return e.cssText=S.join("opacity:.55;"),/^0.55$/.test(e.opacity)});var z="CSS"in e&&"supports"in e.CSS,_="supportsCSS"in e;Modernizr.addTest("supports",z||_);var E;!function(){var e={}.hasOwnProperty;E=i(e,"undefined")||i(e.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),w._l={},w.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},w._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,i;for(e=0;e<n.length;e++)(i=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){w.addTest=l});var P=w.testStyles=c;Modernizr.addTest("unicode",function(){var e,t=s("span"),n=s("span");return P("#modernizr{font-family:Arial,sans;font-size:300em;}",function(i){t.innerHTML=C?"妇":"&#5987;",n.innerHTML=C?"☆":"&#9734;",i.appendChild(t),i.appendChild(n),e="offsetWidth"in t&&t.offsetWidth!==n.offsetWidth}),e});var R=function(){var e=navigator.userAgent,t=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),n=e.match(/w(eb)?osbrowser/gi),i=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,r=533>t&&e.match(/android/gi);return n||r||i}();R?Modernizr.addTest("fontface",!1):P('@font-face {font-family:"font";src:url("https://")}',function(e,n){var i=t.getElementById("smodernizr"),r=i.sheet||i.styleSheet,o=r?r.cssRules&&r.cssRules[0]?r.cssRules[0].cssText:r.cssText||"":"",s=/src/i.test(o)&&0===o.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",s)}),Modernizr.addTest("hairline",function(){return P("#modernizr {border:.5px solid transparent}",function(e){return 1===e.offsetHeight})}),P("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){Modernizr.addTest("lastchild",e.lastChild.offsetWidth>e.firstChild.offsetWidth)},2),P("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){for(var t=e.getElementsByTagName("div"),n=!0,i=0;5>i;i++)n=n&&t[i].offsetWidth===i%2+1;Modernizr.addTest("nthchild",n)},5),P("#modernizr{position: absolute; top: -10em; visibility:hidden; font: normal 10px arial;}#subpixel{float: left; font-size: 33.3333%;}",function(t){var n=t.firstChild;n.innerHTML="This is a text written in Arial",Modernizr.addTest("subpixelfont",e.getComputedStyle?"44px"!==e.getComputedStyle(n,null).getPropertyValue("width"):!1)},1,["subpixel"]),P("#modernizr { height: 50vh; }",function(t){var n=parseInt(e.innerHeight/2,10),i=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).height,10);Modernizr.addTest("cssvhunit",i==n)}),P("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(t){var n=t.childNodes[2],i=t.childNodes[1],r=t.childNodes[0],o=parseInt((i.offsetWidth-i.clientWidth)/2,10),s=r.clientWidth/100,d=r.clientHeight/100,l=parseInt(50*Math.max(s,d),10),u=parseInt((e.getComputedStyle?getComputedStyle(n,null):n.currentStyle).width,10);Modernizr.addTest("cssvmaxunit",a(l,u)||a(l,u-o))},3),P("#modernizr { width: 50vw; }",function(t){var n=parseInt(e.innerWidth/2,10),i=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);Modernizr.addTest("cssvwunit",i==n)});var j=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return c("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();w.mq=j,Modernizr.addTest("mediaqueries",j("only all"));var M="Moz O ms Webkit",B=w._config.usePrefixes?M.split(" "):[];w._cssomPrefixes=B;var q=function(t){var i,r=S.length,o=e.CSSRule;if("undefined"==typeof o)return n;if(!t)return!1;if(t=t.replace(/^@/,""),i=t.replace(/-/g,"_").toUpperCase()+"_RULE",i in o)return"@"+t;for(var s=0;r>s;s++){var a=S[s],d=a.toUpperCase()+"_"+i;if(d in o)return"@-"+a.toLowerCase()+"-"+t}return!1};w.atRule=q;var L=w._config.usePrefixes?M.toLowerCase().split(" "):[];w._domPrefixes=L;var H={elem:s("modernizr")};Modernizr._q.push(function(){delete H.elem});var W={style:H.elem.style};Modernizr._q.unshift(function(){delete W.style});var N=w.testProp=function(e,t,i){return b([e],n,t,i)};Modernizr.addTest("textshadow",N("textShadow","1px 1px")),w.testAllProps=v,w.testAllProps=y,Modernizr.addTest("cssanimations",y("animationName","a",!0)),Modernizr.addTest("appearance",y("appearance")),Modernizr.addTest("bgpositionxy",function(){return y("backgroundPositionX","3px",!0)&&y("backgroundPositionY","5px",!0)}),Modernizr.addTest("bgrepeatround",y("backgroundRepeat","round")),Modernizr.addTest("bgrepeatspace",y("backgroundRepeat","space")),Modernizr.addTest("backgroundsize",y("backgroundSize","100%",!0)),Modernizr.addTest("bgsizecover",y("backgroundSize","cover")),Modernizr.addTest("borderradius",y("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",y("boxShadow","1px 1px",!0)),Modernizr.addTest("boxsizing",y("boxSizing","border-box",!0)&&(t.documentMode===n||t.documentMode>7)),function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=y("columnCount");try{(e=!!t)&&(e=new Boolean(e))}catch(n){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],i=0;i<n.length;i++)e=n[i].toLowerCase(),t=y("column"+n[i]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||y(n[i])),Modernizr.addTest("csscolumns."+e,t)}(),Modernizr.addTest("ellipsis",y("textOverflow","ellipsis")),Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return y("filter","blur(2px)");var e=s("a");return e.style.cssText=S.join("filter:blur(2px); "),!!e.style.length&&(t.documentMode===n||t.documentMode>9)}),Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",y("boxDirection","reverse",!0)),Modernizr.addTest("flexboxtweener",y("flexAlign","end",!0)),Modernizr.addTest("flexwrap",y("flexWrap","wrap",!0)),Modernizr.addAsyncTest(function(){function n(){function r(){try{var e=s("div"),n=s("span"),i=e.style,r=0,o=0,a=!1,d=t.body.firstElementChild||t.body.firstChild;return e.appendChild(n),n.innerHTML="Bacon ipsum dolor sit amet jerky velit in culpa hamburger et. Laborum dolor proident, enim dolore duis commodo et strip steak. Salami anim et, veniam consectetur dolore qui tenderloin jowl velit sirloin. Et ad culpa, fatback cillum jowl ball tip ham hock nulla short ribs pariatur aute. Pig pancetta ham bresaola, ut boudin nostrud commodo flank esse cow tongue culpa. Pork belly bresaola enim pig, ea consectetur nisi. Fugiat officia turkey, ea cow jowl pariatur ullamco proident do laborum velit sausage. Magna biltong sint tri-tip commodo sed bacon, esse proident aliquip. Ullamco ham sint fugiat, velit in enim sed mollit nulla cow ut adipisicing nostrud consectetur. Proident dolore beef ribs, laborum nostrud meatball ea laboris rump cupidatat labore culpa. Shankle minim beef, velit sint cupidatat fugiat tenderloin pig et ball tip. Ut cow fatback salami, bacon ball tip et in shank strip steak bresaola. In ut pork belly sed mollit tri-tip magna culpa veniam, short ribs qui in andouille ham consequat. Dolore bacon t-bone, velit short ribs enim strip steak nulla. Voluptate labore ut, biltong swine irure jerky. Cupidatat excepteur aliquip salami dolore. Ball tip strip steak in pork dolor. Ad in esse biltong. Dolore tenderloin exercitation ad pork loin t-bone, dolore in chicken ball tip qui pig. Ut culpa tongue, sint ribeye dolore ex shank voluptate hamburger. Jowl et tempor, boudin pork chop labore ham hock drumstick consectetur tri-tip elit swine meatball chicken ground round. Proident shankle mollit dolore. Shoulder ut duis t-bone quis reprehenderit. Meatloaf dolore minim strip steak, laboris ea aute bacon beef ribs elit shank in veniam drumstick qui. Ex laboris meatball cow tongue pork belly. Ea ball tip reprehenderit pig, sed fatback boudin dolore flank aliquip laboris eu quis. Beef ribs duis beef, cow corned beef adipisicing commodo nisi deserunt exercitation. Cillum dolor t-bone spare ribs, ham hock est sirloin. Brisket irure meatloaf in, boudin pork belly sirloin ball tip. Sirloin sint irure nisi nostrud aliqua. Nostrud nulla aute, enim officia culpa ham hock. Aliqua reprehenderit dolore sunt nostrud sausage, ea boudin pork loin ut t-bone ham tempor. Tri-tip et pancetta drumstick laborum. Ham hock magna do nostrud in proident. Ex ground round fatback, venison non ribeye in.",t.body.insertBefore(e,d),i.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;",r=n.offsetHeight,o=n.offsetWidth,i.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;"+S.join("hyphens:auto; "),a=n.offsetHeight!=r||n.offsetWidth!=o,t.body.removeChild(e),e.removeChild(n),a}catch(l){return!1}}function o(e,n){try{var i=s("div"),r=s("span"),o=i.style,a=0,d=!1,l=!1,u=!1,c=t.body.firstElementChild||t.body.firstChild;return o.cssText="position:absolute;top:0;left:0;overflow:visible;width:1.25em;",i.appendChild(r),t.body.insertBefore(i,c),r.innerHTML="mm",a=r.offsetHeight,r.innerHTML="m"+e+"m",l=r.offsetHeight>a,n?(r.innerHTML="m<br />m",a=r.offsetWidth,r.innerHTML="m"+e+"m",u=r.offsetWidth>a):u=!0,l===!0&&u===!0&&(d=!0),t.body.removeChild(i),i.removeChild(r),d}catch(f){return!1}}function a(n){try{var i,r=s("input"),o=s("div"),a="lebowski",d=!1,l=t.body.firstElementChild||t.body.firstChild;o.innerHTML=a+n+a,t.body.insertBefore(o,l),t.body.insertBefore(r,o),r.setSelectionRange?(r.focus(),r.setSelectionRange(0,0)):r.createTextRange&&(i=r.createTextRange(),i.collapse(!0),i.moveEnd("character",0),i.moveStart("character",0),i.select());try{e.find?d=e.find(a+a):(i=e.self.document.body.createTextRange(),d=i.findText(a+a))}catch(u){d=!1}return t.body.removeChild(o),t.body.removeChild(r),d}catch(u){return!1}}return t.body||t.getElementsByTagName("body")[0]?(l("csshyphens",function(){if(!y("hyphens","auto",!0))return!1;try{return r()}catch(e){return!1}}),l("softhyphens",function(){try{return o("&#173;",!0)&&o("&#8203;",!1)}catch(e){return!1}}),void l("softhyphensfind",function(){try{return a("&#173;")&&a("&#8203;")}catch(e){return!1}})):void setTimeout(n,i)}var i=300;setTimeout(n,i)}),Modernizr.addTest("cssmask",y("maskRepeat","repeat-x",!0)),Modernizr.addTest("shapes",y("shapeOutside","content-box",!0)),Modernizr.addTest("textalignlast",y("textAlignLast")),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&y("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!y("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in k.style)){var n,i="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",P(i+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),Modernizr.addTest("csstransitions",y("transition","all",!0));var A=w.prefixed=function(e,t,n){return 0===e.indexOf("@")?q(e):(-1!=e.indexOf("-")&&(e=d(e)),t?v(e,t,n):v(e,"pfx"))};Modernizr.addTest("backgroundblendmode",A("backgroundBlendMode","text")),Modernizr.addTest("cookies",function(){try{t.cookie="cookietest=1";var e=-1!=t.cookie.indexOf("cookietest=");return t.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",e}catch(n){return!1}}),r(),o(x),delete w.addTest,delete w.addAsyncTest;for(var O=0;O<Modernizr._q.length;O++)Modernizr._q[O]();e.Modernizr=Modernizr}(window,document);