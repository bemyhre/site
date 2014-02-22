/*!CK:3580595325!*//*1392692647,178127449*/

if (self.CavalryLogger) { CavalryLogger.start_js(["t4k3N"]); }

__d("concatMap",[],function(a,b,c,d,e,f){function g(h,i){var j=-1,k=i.length,l=[],m;while(++j<k){m=h(i[j],j,i);Array.isArray(m)?Array.prototype.push.apply(l,m):Array.prototype.push.call(l,m);}return l;}e.exports=g;});
__d("intlList",["React","fbt","invariant"],function(a,b,c,d,e,f,g,h,i){'use strict';var j=function(l,m){m=m||j.CONJUNCTIONS.AND;var n=l.length;if(n===0){return '';}else if(n===1)return l[0];var o=l.shift(),p=l.pop(),q=o;l.forEach(function(r){q=h._("{previous items}, {following items}",[h.param("previous items",q),h.param("following items",r)]);});return k(q,p,m);};function k(l,m,n){switch(n){case j.CONJUNCTIONS.AND:return (h._("{list of items} and {last item}",[h.param("list of items",l),h.param("last item",m)]));case j.CONJUNCTIONS.OR:return (h._("{list of items} or {last item}",[h.param("list of items",l),h.param("last item",m)]));default:i(false);}}j.CONJUNCTIONS={AND:'AND',OR:'OR'};e.exports=j;});
__d("AttachmentRelatedShareConstants",[],function(a,b,c,d,e,f){var g={ARTICLE_CLICK:'article_click',VIDEO_CLICK:'video_click'};e.exports=g;});
__d("FeedBlacklistButton",["Arbiter","Event"],function(a,b,c,d,e,f,g,h){var i={BLACKLIST:'feed_blacklist',UNBLACKLIST:'feed_unblacklist',init:function(j,k,l,m){h.listen(k,'click',function(){var n={profile_id:m};g.inform(i.BLACKLIST,n);g.inform('UnfollowingUser',n);});h.listen(l,'click',function(){var n={profile_id:m};g.inform(i.UNBLACKLIST,n);g.inform('FollowingUser',n);});g.subscribe(i.BLACKLIST,function(n,o){if(m==o.profile_id)j.swap();});g.subscribe(i.UNBLACKLIST,function(n,o){if(m==o.profile_id)j.unswap();});}};e.exports=a.FeedBlacklistButton||i;});
__d("XPubcontentChainedSuggestionsControllerURIBuilder",["XControllerURIBuilder"],function(a,b,c,d,e,f,g){e.exports=g.create("\/pubcontent\/chained_suggestions\/",{pageid:{type:"Int"},profileid:{type:"Int"},eh:{type:"Bool"}});});
__d("SubscribeButton",["Arbiter","AsyncRequest","Button","Event","Tooltip","XPubcontentChainedSuggestionsControllerURIBuilder"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m={SUBSCRIBED:'FollowingUser',UNSUBSCRIBED:'UnfollowingUser',_enable:function(n){i.setEnabled(n,true);k.remove(n);},_disable:function(n,o){i.setEnabled(n,false);if(o)k.set(n,o);},init:function(n,o,p,q,r,s,t,u,v){u=(typeof u!=='undefined')?u:false;var w=(typeof v!=='undefined');if(w&&!t&&!u)m._disable(o,v);j.listen(o,'click',function(){g.inform(m.SUBSCRIBED,{profile_id:q,suppress:true});});g.subscribe(m.SUBSCRIBED,function(x,y){if(q==y.profile_id){if(!r)p.suppressNextMouseEnter&&p.suppressNextMouseEnter();if(w){if(typeof y.connected!=='undefined')t=y.connected;if(t||u)m._enable(o);}n.swap();if(s===true){var z=(new l()).setBool('eh',true).setInt('profileid',q).getURI();new h().setURI(z).send();}}});g.subscribe(m.UNSUBSCRIBED,function(x,y){if(q==y.profile_id){n.unswap();p.hideFlyout&&p.hideFlyout();if(w){if(typeof y.connected!=='undefined')t=y.connected;if(!t&&!u)m._disable(o,v);}g.inform('SubMenu/Reset');}});},initUnsubscribe:function(n,o){j.listen(n,'click',function(){setTimeout(g.inform.bind(g,m.UNSUBSCRIBED,{profile_id:o}),0);});}};e.exports=m;});
__d("ModalMask",["DOM"],function(a,b,c,d,e,f,g){var h=null,i=0,j={show:function(){i++;if(!h){h=g.create('div',{id:'modalMaskOverlay'});g.appendContent(document.body,h);}},hide:function(){if(i){i--;if(!i&&h){g.remove(h);h=null;}}},getNode:function(){return h;}};e.exports=j;});
__d("EagleEye",["Arbiter","CurrentUser","EagleEyeConfig","Env","ISB","OnloadEvent","TrackingConfig","WebStorage","isInIframe"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var p='_e_',q=(window.name||'').toString();if(q.length==7&&q.substr(0,3)==p){q=q.substr(3);}else{q=i.seed;if(!o())window.name=p+q;}var r=(window.location.protocol=='https:'&&document.cookie.match(/\bcsm=1/))?'; secure':'',s=p+q+'_',t=new Date(Date.now()+604800000).toGMTString(),u=window.location.hostname.replace(/^.*(facebook\..*)$/i,'$1'),v='; expires='+t+';path=/; domain='+u+r,w=0,x,y=i.sessionStorage&&n.getSessionStorage(),z=document.cookie.length,aa=false,ba=Date.now();function ca(ga){return s+(w++)+'='+encodeURIComponent(ga)+v;}function da(){var ga=[],ha=false,ia=0,ja=0;this.isEmpty=function(){return !ga.length;};this.enqueue=function(ka,la){if(la){ga.unshift(ka);}else ga.push(ka);};this.dequeue=function(){ga.shift();};this.peek=function(){return ga[0];};this.clear=function(ka){z=Math.min(z,document.cookie.length);if(!aa&&(new Date()-ba>60000))aa=true;var la=!ka&&(document.cookie.search(p)>=0),ma=!!i.cookieHeaderLimit,na=i.cookieCountLimit||19,oa=i.cookieHeaderLimit||3950,pa=na-5,qa=oa-1000;while(!this.isEmpty()){var ra=ca(this.peek());if(ma&&(ra.length>oa||(aa&&ra.length+z>oa))){this.dequeue();continue;}if((la||ma)&&((document.cookie.length+ra.length>oa)||(document.cookie.split(';').length>na)))break;document.cookie=ra;la=true;this.dequeue();}var sa=Date.now();if(ka||!ha&&la&&((ja>0)&&(Math.min(10*Math.pow(2,ja-1),60000)+ia<sa))&&g.query(l.ONLOAD)&&(!this.isEmpty()||(document.cookie.length>qa)||(document.cookie.split(';').length>pa))){var ta=new Image(),ua=this,va=m.domain||'';ha=true;ta.onload=function ya(){ha=false;ja=0;ua.clear();};ta.onerror=ta.onabort=function ya(){ha=false;ia=Date.now();ja++;};var wa=k.token?'&fb_isb='+k.token:'',xa='&__user='+h.getID();ta.src=va+'/ajax/nectar.php?asyncSignal='+(Math.floor(Math.random()*10000)+1)+wa+xa+'&'+(!ka?'':'s=')+sa;}};}x=new da();if(y){var ea=function(){var ga=0,ha=ga;function ia(){var la=sessionStorage.getItem('_e_ids');if(la){var ma=(la+'').split(';');if(ma.length==2){ga=parseInt(ma[0],10);ha=parseInt(ma[1],10);}}}function ja(){var la=ga+';'+ha;sessionStorage.setItem('_e_ids',la);}function ka(la){return '_e_'+((la!==undefined)?la:ga++);}this.isEmpty=function(){return ha===ga;};this.enqueue=function(la,ma){var na=ma?ka(--ha):ka();sessionStorage.setItem(na,la);ja();};this.dequeue=function(){this.isEmpty();sessionStorage.removeItem(ka(ha));ha++;ja();};this.peek=function(){var la=sessionStorage.getItem(ka(ha));return la?(la+''):la;};this.clear=x.clear;ia();};x=new ea();}var fa={log:function(ga,ha,ia){if(j.no_cookies)return;var ja=[q,Date.now(),ga].concat(ha);ja.push(ja.length);function ka(){var la=JSON.stringify(ja);try{x.enqueue(la,!!ia);x.clear(!!ia);}catch(ma){if(y&&(ma.code===1000)){x=new da();y=false;ka();}}}ka();},getSessionID:function(){return q;}};e.exports=fa;a.EagleEye=fa;},3);
__d("AudienceSelectorTags",[],function(a,b,c,d,e,f){var g={},h={hasTags:function(i){return g.hasOwnProperty(i);},setHasTags:function(i){if(i)g[i]=true;}};e.exports=h;});
__d("DialogHideOnSuccess",["CSS","copyProperties","cx"],function(a,b,c,d,e,f,g,h,i){function j(k){"use strict";this._layer=k;}j.prototype.enable=function(){"use strict";this._subscription=this._layer.subscribe('success',this._handle.bind(this));};j.prototype.disable=function(){"use strict";this._subscription.unsubscribe();this._subscription=null;};j.prototype._handle=function(k,event){"use strict";if(g.hasClass(event.getTarget(),"_s"))this._layer.hide();};h(j.prototype,{_subscription:null});e.exports=j;});
__d("Ease",[],function(a,b,c,d,e,f){var g={makePowerOut:function(h){return function(i){var j=1-Math.pow(1-i,h);return (j*10000|0)/10000;};},makePowerIn:function(h){return function(i){var j=Math.pow(i,h);return (j*10000|0)/10000;};},makePowerInOut:function(h){return function(i){var j=((i*=2)<1)?Math.pow(i,h)*.5:1-Math.abs(Math.pow(2-i,h))*.5;return (j*10000|0)/10000;};},sineOut:function(h){return Math.sin(h*Math.PI*.5);},sineIn:function(h){return 1-Math.cos(h*Math.PI*.5);},sineInOut:function(h){return -.5*(Math.cos(Math.PI*h)-1);},circOut:function(h){return Math.sqrt(1-(--h)*h);},circIn:function(h){return -(Math.sqrt(1-h*h)-1);},circInOut:function(h){return ((h*=2)<1)?-.5*(Math.sqrt(1-h*h)-1):.5*(Math.sqrt(1-(h-=2)*h)+1);},bounceOut:function(h){if(h<1/2.75){return (7.5625*h*h);}else if(h<2/2.75){return (7.5625*(h-=1.5/2.75)*h+.75);}else if(h<2.5/2.75){return (7.5625*(h-=2.25/2.75)*h+.9375);}else return (7.5625*(h-=2.625/2.75)*h+.984375);},bounceIn:function(h){return 1-g.bounceOut(1-h);},bounceInOut:function(h){return (h<.5)?g.bounceIn(h*2)*.5:g.bounceOut(h*2-1)*.5+.5;},_makeBouncy:function(h){h=h||1;return function(i){i=((1-Math.cos(i*Math.PI*h))*(1-i))+i;return i<=1?i:2-i;};},makeBounceOut:function(h){return this._makeBouncy(h);},makeBounceIn:function(h){var i=this._makeBouncy(h);return function(j){return 1-i(1-j);};},makeElasticOut:function(h,i){h<1&&(h=1);var j=Math.PI*2;return function(k){if(k===0||k===1)return k;var l=i/j*Math.asin(1/h);return h*Math.pow(2,-10*k)*Math.sin((k-l)*j/i)+1;};},makeElasticIn:function(h,i){h<1&&(h=1);var j=Math.PI*2;return function(k){if(k===0||k===1)return k;var l=i/j*Math.asin(1/h);return -(h*Math.pow(2,10*(k-=1))*Math.sin((k-l)*j/i));};},makeElasticInOut:function(h,i){h<1&&(h=1);i*=1.5;var j=Math.PI*2;return function(k){var l=i/j*Math.asin(1/h);return ((k*=2)<1)?-.5*h*Math.pow(2,10*(k-=1))*Math.sin((k-l)*j/i):1+.5*h*Math.pow(2,-10*(k-=1))*Math.sin((k-l)*j/i);};},makeBackOut:function(h){return function(i){return (--i*i*((h+1)*i+h)+1);};},makeBackIn:function(h){return function(i){return i*i*((h+1)*i-h);};},makeBackInOut:function(h){h*=1.525;return function(i){return ((i*=2)<1)?.5*(i*i*((h+1)*i-h)):.5*((i-=2)*i*((h+1)*i+h)+2);};},easeOutExpo:function(h){return -Math.pow(2,-10*h)+1;}};g.elasticOut=g.makeElasticOut(1,.3);g.elasticIn=g.makeElasticIn(1,.3);g.elasticInOut=g.makeElasticInOut(1,.3);g.backOut=g.makeBackOut(1.7);g.backIn=g.makeBackIn(1.7);g.backInOut=g.makeBackInOut(1.7);e.exports=g;});
__d("OnVisible",["Arbiter","DOM","Event","Parent","Run","Vector","ViewportBounds","coalesce","copyProperties","queryThenMutateDOM"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q=[],r,s=0,t=[],u,v,w,x,y;function z(){q.forEach(function(fa){fa.remove();});if(v){v.remove();u.remove();r.unsubscribe();v=u=r=null;}s=0;q.length=0;}function aa(){if(!q.length){z();return;}t.length=0;w=l.getScrollPosition().y;x=l.getViewportDimensions().y;y=m.getTop();for(var fa=0;fa<q.length;++fa){var ga=q[fa];if(isNaN(ga.elementHeight))t.push(fa);ga.elementHeight=l.getElementDimensions(ga.element).y;ga.elementPos=l.getElementPosition(ga.element);ga.hidden=j.byClass(ga.element,'hidden_elem');if(ga.scrollArea){ga.scrollAreaHeight=l.getElementDimensions(ga.scrollArea).y;ga.scrollAreaY=l.getElementPosition(ga.scrollArea).y;}}s=fa;}function ba(){for(var fa=Math.min(q.length,s)-1;fa>=0;--fa){var ga=q[fa];if(!ga.elementPos||ga.removed){q.splice(fa,1);continue;}if(ga.hidden)continue;var ha=w+x+ga.buffer,ia=false;if(ha>ga.elementPos.y){var ja=!ga.strict||(w+y-ga.buffer<(ga.elementPos.y+ga.elementHeight));ia=ja;if(ia&&ga.scrollArea){var ka=ga.scrollAreaY+ga.scrollAreaHeight+ga.buffer;ia=(ga.elementPos.y>ga.scrollAreaY-ga.buffer)&&(ga.elementPos.y<ka);}}if(ga.inverse?!ia:ia){ga.remove();ga.handler(t.indexOf(fa)!==-1);}}}function ca(){da();if(q.length)return;v=i.listen(window,'scroll',da);u=i.listen(window,'resize',da);r=g.subscribe('dom-scroll',da);}function da(){p(aa,ba,'OnVisible/positionCheck');}function ea(fa,ga,ha,ia,ja,ka){"use strict";this.element=fa;this.handler=ga;this.strict=ha;this.buffer=n(ia,300);this.inverse=n(ja,false);this.scrollArea=ka||null;if(this.scrollArea)this.scrollAreaListener=i.listen(h.find(ka,'.uiScrollableAreaWrap'),'scroll',this.checkBuffer);if(q.length===0)k.onLeave(z);ca();q.push(this);}ea.prototype.remove=function(){"use strict";this.removed=true;if(this.scrollAreaListener)this.scrollAreaListener.remove();};ea.prototype.reset=function(){"use strict";this.elementHeight=null;this.removed=false;q.indexOf(this)===-1&&q.push(this);ca();};ea.prototype.setBuffer=function(fa){"use strict";this.buffer=fa;da();};ea.prototype.checkBuffer=function(){"use strict";da();};ea.prototype.getElement=function(){"use strict";return this.element;};o(ea,{checkBuffer:da});e.exports=ea;});
__d("StickyController",["CSS","Event","Style","Vector","queryThenMutateDOM"],function(a,b,c,d,e,f,g,h,i,j,k){function l(m,n,o,p){"use strict";this._element=m;this._marginTop=n;this._onchange=o;this._proxy=p||m.parentNode;this._boundQueryOnScroll=this.shouldFix.bind(this);this._boundMutateOnScroll=this._mutateOnScroll.bind(this);}l.prototype.handleScroll=function(){"use strict";k(this._boundQueryOnScroll,this._boundMutateOnScroll);};l.prototype.shouldFix=function(){"use strict";return j.getElementPosition(this._proxy,'viewport').y<=this._marginTop;};l.prototype._mutateOnScroll=function(){"use strict";var m=this.shouldFix();if(this.isFixed()!==m){i.set(this._element,'top',m?this._marginTop+'px':'');g.conditionClass(this._element,'fixed_elem',m);this._onchange&&this._onchange(m);}};l.prototype.start=function(){"use strict";if(this._event)return;this._event=h.listen(window,'scroll',this.handleScroll.bind(this));setTimeout(this.handleScroll.bind(this),0);};l.prototype.stop=function(){"use strict";this._event&&this._event.remove();this._event=null;};l.prototype.isFixed=function(){"use strict";return g.hasClass(this._element,'fixed_elem');};e.exports=l;});
__d("tidyEvent",["Run"],function(a,b,c,d,e,f,g){var h=[];function i(){while(h.length){var l=h.shift();l&&l.remove?l.remove():l.unsubscribe();}}function j(l){var m;function n(){if(!m)return;m.apply(l,arguments);m=null;l=null;}if(l.remove){m=l.remove;l.remove=n;}else{m=l.unsubscribe;l.unsubscribe=n;}return l;}function k(l){if(!h.length)g.onLeave(i);if(Array.isArray(l)){for(var m=0;m<l.length;m++)h.push(j(l[m]));}else h.push(j(l));return l;}e.exports=k;});
__d("reportData",["EagleEye","userAction"],function(a,b,c,d,e,f,g,h){function i(j,k){k=k||{};var l={ft:(k.ft||{}),gt:(k.gt||{})},m='-',n=[],o='r',p=[Date.now(),h.getCurrentUECount(),m,j,m,m,o,a.URI?a.URI.getRequestURI(true,true).getUnqualifiedURI().toString():location.pathname+location.search+location.hash,l,0,0,0,0].concat(n);g.log('act',p);}e.exports=i;});
__d("ContextualLayerUpdateOnScroll",["Event","copyProperties"],function(a,b,c,d,e,f,g,h){function i(j){"use strict";this._layer=j;}i.prototype.enable=function(){"use strict";this._subscriptions=[this._layer.subscribe('show',this._attachScrollListener.bind(this)),this._layer.subscribe('hide',this._removeScrollListener.bind(this))];};i.prototype.disable=function(){"use strict";while(this._subscriptions.length)this._subscriptions.pop().unsubscribe();};i.prototype._attachScrollListener=function(){"use strict";if(this._listener)return;var j=this._layer.getContextScrollParent();this._listener=g.listen(j,'scroll',this._layer.updatePosition.bind(this._layer));};i.prototype._removeScrollListener=function(){"use strict";this._listener&&this._listener.remove();this._listener=null;};h(i.prototype,{_subscriptions:[]});e.exports=i;});
__d("XPrivacyRemindersDismissControllerURIBuilder",["XControllerURIBuilder"],function(a,b,c,d,e,f,g){e.exports=g.create("\/privacy\/reminders\/dismiss\/",{type:{type:"String",required:true},log_plite:{type:"Bool"}});});