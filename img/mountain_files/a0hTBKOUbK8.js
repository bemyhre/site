/*!CK:1042573783!*//*1392695346,178127439*/

if (self.CavalryLogger) { CavalryLogger.start_js(["\/2+pL"]); }

__d("VideoPlayerLogger",["Banzai","copyProperties"],function(a,b,c,d,e,f,g,h){var i='video_player';function j(k){"use strict";this.$VideoPlayerLogger0=k;this.$VideoPlayerLogger1=null;}j.prototype.logEvent=function(event,k){"use strict";var l={logData:k,event:event,source:this.$VideoPlayerLogger0};if(this.$VideoPlayerLogger1)h(l,this.$VideoPlayerLogger1);g.post(i,l,{delay:1});};j.prototype.setFTData=function(k){"use strict";this.$VideoPlayerLogger1=k;};h(j,{Events:{CAROUSEL_CHANGE:'carousel_change',FINISHED_PLAYING:'finished_playing',PAUSED:'paused',MUTED:'muted',SCRUBBED:'scrubbed',STARTED_PLAYING:'started_playing',UNMUTED:'unmuted',UNPAUSED:'unpaused',VOLUME_DECREASE:'volume_decrease',VOLUME_INCREASE:'volume_increase'},Sources:{ADS:'ads',HTML5:'html5',INLINE:'inline'}});e.exports=j;});
__d("HVideoPlayerLoggerMixin",["VideoPlayerLogger"],function(a,b,c,d,e,f,g){var h=g.Events,i=-1,j={initLogger:function(k){var l=this.getSubscriptions();this._loggedEvents={};this._logger=new g(g.Sources.HTML5);var m=this.getVideoElement();this._lastStartTimePosition=i;this._loadedMetadata=m.readyState>=m.HAVE_METADATA;this._muted=m.muted;this._pausedPosition=i;this._seeking=false;this._seekSourceTimePosition=i;this._volume=m.volume;this._preMetadataLogQueue=[];if(!this._loadedMetadata)l.addSubscriptions(k('loadedmetadata',this._onLoadedMetadata.bind(this)));l.addSubscriptions(k('pause',this._onPause.bind(this)),k('play',this._onPlay.bind(this)),k('seeked',this._onSeeked.bind(this)),k('seeking',this._onSeeking.bind(this)),k('volumechange',this._onVolumeChange.bind(this)));},_logEvent:function(event,k){this._loggedEvents[event]=true;var l=k?k:{},m=this.getVideoElement(),n=m.currentTime;if(!l.video_time_position)l.video_time_position=n.toFixed(2);if(!this._loadedMetadata){this._preMetadataLogQueue.push({event:event,data:l});return;}l.video_id=this.getVideoID();var o=m.duration;if(o&&o>0)l.video_time_ratio=(n/o).toFixed(2);this._logger.logEvent(event,l);},_onLoadedMetadata:function(){this._loadedMetadata=true;this._preMetadataLogQueue.forEach(function(k){this._logEvent(k.event,k.data);}.bind(this));this._preMetadataLogQueue=[];},_onPause:function(){var k=this.getVideoElement(),event=k.ended?h.FINISHED_PLAYING:h.PAUSED;this._logEvent(event,{video_last_start_time_position:this._lastStartTimePosition});this._lastStartTimePosition=i;},_onPlay:function(){var event=this._loggedEvents[h.STARTED_PLAYING]?h.UNPAUSED:h.STARTED_PLAYING;this._logEvent(event);this._lastStartTimePosition=this.getVideoElement().currentTime.toFixed(2);},_onSeeked:function(){var k={video_seek_source_time_position:this._seekSourceTimePosition};if(this._lastStartTimePosition!==i){k.video_last_start_time_position=this._lastStartTimePosition;}else k.video_last_start_time_position=this._seekSourceTimePosition;this._logEvent(h.SCRUBBED,k);this._lastStartTimePosition=i;this._seekSourceTimePosition=i;this._seeking=false;},_onSeeking:function(){if(!this._seeking){this._seekSourceTimePosition=this.getVideoElement().currentTime.toFixed(2);this._seeking=true;}},_onVolumeChange:function(){var k=this.getVideoElement(),l={},event=null;if(k.muted!==this._muted&&k.volume===this._volume&&k.volume>0){event=k.muted?h.MUTED:h.UNMUTED;}else{event=k.volume>this._volume?h.VOLUME_INCREASE:h.VOLUME_DECREASE;l.current_volume=k.volume;}this._logEvent(event);this._muted=k.muted;this._volume=k.volume;}};e.exports=j;});
__d("PageVisibility",["Event","EventEmitter"],function(a,b,c,d,e,f,g,h){var i=null,j=null;if(typeof document.hidden!=='undefined'){i='hidden';j='visibilitychange';}else if(typeof document.mozHidden!=='undefined'){i='mozHidden';j='mozvisibilitychange';}else if(typeof document.msHidden!=='undefined'){i='msHidden';j='msvisibilitychange';}else if(typeof document.webkitHidden!=='undefined'){i='webkitHidden';j='webkitvisibilitychange';}var k=new h();k.hidden='pageVisibilityHidden';k.visible='pageVisibilityVisible';g.listen(document,j,function(){if(document[i]){k.emit(k.hidden);}else k.emit(k.visible);});e.exports=k;});
__d("VideoPlayerFlashApi",[],function(a,b,c,d,e,f){function g(h){"use strict";this.$VideoPlayerFlashApi0=h;}g.prototype.getDOMElement=function(){"use strict";return this.$VideoPlayerFlashApi0;};g.prototype.pause=function(h){"use strict";this.$VideoPlayerFlashApi0.pauseVideo(h);};g.prototype.play=function(h){"use strict";this.$VideoPlayerFlashApi0.playVideo(h);};g.prototype.seek=function(h){"use strict";this.$VideoPlayerFlashApi0.seekVideo(h);};g.prototype.setFTData=function(h){"use strict";this.$VideoPlayerFlashApi0.setFTData(h);};g.prototype.switchVideo=function(h){"use strict";this.$VideoPlayerFlashApi0.switchVideo(h);};g.prototype.unmute=function(){"use strict";this.$VideoPlayerFlashApi0.unmuteVideo();};e.exports=g;});
__d("VideoPlayerApiFactory",["DOMQuery","VideoPlayerFlashApi","invariant"],function(a,b,c,d,e,f,g,h,i){var j={create:function(k){var l=null,m=g.scry(k,'embed');if(!m.length)m=g.scry(k,'object');if(m.length)l=new h(m[0]);return l;}};e.exports=j;});
__d("SpotlightVideoDimensions",["PhotoViewerDimensions","Vector"],function(a,b,c,d,e,f,g,h){var i=520;function j(k){"use strict";this.$SpotlightVideoDimensions0=new g();this.$SpotlightVideoDimensions1=k;}j.prototype.getStageAndVideoDimensions=function(k){"use strict";var l=this.$SpotlightVideoDimensions0.getMaxStageDimensions(),m=this.$SpotlightVideoDimensions0.getImageDimensionsForStage(k,l.sub(this.$SpotlightVideoDimensions1,0)),n=new h(m.x+this.$SpotlightVideoDimensions1,Math.max(m.y,i));return {stageDimensions:n,videoDimensions:m};};e.exports=j;});
__d("VideoSpotlight",["LayerHideOnBlur","LayerHideOnEscape","ReactLayer","Spotlight","cx","getLayoutRoot","invariant"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n=i.createClass({getDefaultEnabledBehaviors:function(){return {hideOnBlur:g,hideOnEscape:h};},createLayer:function(o){m(l());var p=this.enumerateBehaviors(this.props.behaviors),q={addedBehaviors:p,rootClassName:"_5v-m"},r=new j(q,o);r.conditionShow(this.props.shown);r.setInsertParent(l());if(this.props.onHide)r.subscribe('hide',this.props.onHide);return r;},receiveProps:function(o){this.layer.conditionShow(o.shown);}});e.exports=n;});
__d("SpotlightVideoViewer",["ArbiterMixin","BehaviorsMixin","Event","React","ReactLayeredComponentMixin","SpotlightVideoDimensions","SpotlightViewerClose","SpotlightViewerUnmountOnClose","SpotlightViewport","SubscriptionsHandler","Style","Vector","VideoSpotlight","cx","getViewportDimensions","invariant"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var w=360,x=j.createClass({displayName:'SpotlightVideoViewer',mixins:[g,h,k],behaviors:[n],componentWillMount:function(){this.enableBehaviors(this.behaviors);},componentDidMount:function(){this._subscriptions.addSubscriptions(i.listen(window,'resize',this._onResize));this._popOutVideo();},componentWillUnmount:function(){this._subscriptions.release();this.destroyBehaviors();},getInitialState:function(){this._dimensions=new l(w);this._originalDimensions=new r(this.props.videoElement.offsetWidth,this.props.videoElement.offsetHeight);this._targetDimensions=this._originalDimensions.mul(2);this._subscriptions=new p();return {dimensions:this._dimensions.getStageAndVideoDimensions(this._targetDimensions)};},renderLayers:function(){var y={height:this.state.dimensions.stageDimensions.y+'px'};return {videoLayer:s({onHide:this._popInVideo,shown:true},j.DOM.div({className:"_n3"},o({stageDimensions:this.state.dimensions.stageDimensions},m({onClick:this._handleClose}),j.DOM.div({className:"rfloat _5xg6",style:y},j.DOM.div({className:"_5xg7"},' ',"UFI Section",' ')))))};},render:function(){return j.DOM.div(null);},_handleClose:function(){this.inform('close');},_onResize:function(){this.setState({dimensions:this._dimensions.getStageAndVideoDimensions(this._targetDimensions)});this._repositionVideo();},_popOutVideo:function(){v(this.props.videoElement);q.apply(this.props.videoElement,{position:'fixed','z-index':'401'});this._repositionVideo();},_popInVideo:function(){this._handleClose();v(this.props.videoElement);var y=this._originalDimensions.x,z=this._originalDimensions.y;q.apply(this.props.videoElement,{left:0,height:z+'px',position:'static',top:0,width:y+'px','z-index':'auto'});q.apply(this.props.swfElement,{height:z+'px',width:y+'px'});},_repositionVideo:function(){var y=u.withoutScrollbars(),z=this.state.dimensions.videoDimensions.y,aa=this.state.dimensions.videoDimensions.x-1,ba=y.width/2-this.state.dimensions.stageDimensions.x/2+1,ca=y.height/2-z/2;q.apply(this.props.videoElement,{height:z+'px',left:ba+'px',top:ca+'px',width:aa+'px'});q.apply(this.props.swfElement,{height:z+'px',width:aa+'px'});}});e.exports=x;});
__d("VideoViewer",["DOM","React","SpotlightVideoViewer"],function(a,b,c,d,e,f,g,h,i){var j={_viewerContainer:null,bootstrapWithElement:function(k,l){var m=i({swfElement:l,videoElement:k});j.renderViewer(m);},renderViewer:function(k){if(!this._viewerContainer){this._viewerContainer=g.create('div');document.body.appendChild(this._viewerContainer);}h.renderComponent(k,this._viewerContainer);k.subscribeOnce('close',function(){g.empty(this._viewerContainer);}.bind(this));}};e.exports=j;});
__d("VideoPlayerUnitX",["CSS","DOM","Event","Flash","LitestandStoryInsertionStatus","Run","SubscriptionsHandler","VideoAutoplayPlayButton","VideoPlayerApiFactory","VideoPlayerLogger","VideoViewer","clickRefAction","collectDataAttributes","cx","getElementPosition"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var v='fallback',w='finished',x='loading',y='paused',z='playing',aa='ready',ba='autoplay',ca='none',da='play',ea=10000,fa=100;function ga(ha,ia){"use strict";this.$VideoPlayerUnitX0=ia;this.$VideoPlayerUnitX1=0;this.$VideoPlayerUnitX2=ha;this.$VideoPlayerUnitX3=new p(this.$VideoPlayerUnitX0.is_ad?p.Sources.ADS:p.Sources.INLINE);this.$VideoPlayerUnitX4=!!this.$VideoPlayerUnitX2.pivotThumbs;this.$VideoPlayerUnitX5=ca;this.$VideoPlayerUnitX6=new m();this.$VideoPlayerUnitX7=null;l.onLeave(function(){this.$VideoPlayerUnitX6.release();}.bind(this));this.$VideoPlayerUnitX8=this.$VideoPlayerUnitX0.should_autoplay;this.$VideoPlayerUnitX9(x);if(!j.isAvailable()){this.$VideoPlayerUnitX9(v);}else{if(n.getClicked(ia.flash_id))this.$VideoPlayerUnitX5=da;this.$VideoPlayerUnitXa();n.unregister(this.$VideoPlayerUnitX0.flash_id);this.$VideoPlayerUnitX6.addSubscriptions(i.listen(this.$VideoPlayerUnitX2.play_icon,'click',function(){this.$VideoPlayerUnitXb();}.bind(this)),k.registerBlocker(function(){return this.$VideoPlayerUnitXc===z;}.bind(this)));if(this.$VideoPlayerUnitX4){this.$VideoPlayerUnitX2.pivotThumbs.forEach(function(ja){this.$VideoPlayerUnitX6.addSubscriptions(i.listen(ja,'click',function(){this.$VideoPlayerUnitXd();}.bind(this)));}.bind(this));this.$VideoPlayerUnitX6.addSubscriptions(i.listen(this.$VideoPlayerUnitX2.pivotNextText,'click',function(){this.$VideoPlayerUnitXb();}.bind(this)));this.$VideoPlayerUnitX6.addSubscriptions(i.listen(this.$VideoPlayerUnitX2.pivotReplayText,'click',function(){this.$VideoPlayerUnitXd();}.bind(this)));}}}ga.prototype.$VideoPlayerUnitXb=function(){"use strict";if(this.$VideoPlayerUnitXc===v)return;if(this.$VideoPlayerUnitX8){this.$VideoPlayerUnitX8=false;this.$VideoPlayerUnitX7.unmute();}this.play(false);this.$VideoPlayerUnitXe();};ga.prototype.$VideoPlayerUnitXd=function(){"use strict";this.$VideoPlayerUnitXf(this.$VideoPlayerUnitXg());this.play(false);};ga.prototype.getDOMPosition=function(){"use strict";return u(this.$VideoPlayerUnitX2.video);};ga.prototype.isAutoplayable=function(){"use strict";return this.$VideoPlayerUnitX0.should_autoplay;};ga.prototype.handleFlashEvent=function(ha,ia){"use strict";if(this.$VideoPlayerUnitXc===v)return;switch(ha){case 'flash/beginPlayback':this.$VideoPlayerUnitXh();break;case 'flash/clickForTracking':this.$VideoPlayerUnitXe();break;case 'flash/expandVideo':this.$VideoPlayerUnitXi();break;case 'flash/finishPlayback':this.$VideoPlayerUnitXj();break;case 'flash/logEvent':this.$VideoPlayerUnitXk(ia.logData);break;case 'flash/pausePlayback':this.$VideoPlayerUnitXl();break;case 'flash/ready':this.$VideoPlayerUnitXm();break;case 'flash/turnOffAutoplay':this.$VideoPlayerUnitXn();break;}};ga.prototype.play=function(ha){"use strict";if(this.$VideoPlayerUnitXc===x){this.$VideoPlayerUnitX5=ha?ba:da;}else this.$VideoPlayerUnitX7.play(ha);};ga.prototype.pause=function(ha){"use strict";if(this.$VideoPlayerUnitXc===x){this.$VideoPlayerUnitX5=ca;}else if(this.$VideoPlayerUnitXc===z){this.$VideoPlayerUnitX7.pause(ha);this.$VideoPlayerUnitX9(y);}};ga.prototype.$VideoPlayerUnitXa=function(){"use strict";setTimeout(function(){if(this.$VideoPlayerUnitXc===x)this.$VideoPlayerUnitX9(v);}.bind(this),ea);};ga.prototype.$VideoPlayerUnitXe=function(){"use strict";r('click',this.$VideoPlayerUnitX2.video,null,'FORCE');};ga.prototype.$VideoPlayerUnitXh=function(){"use strict";this.$VideoPlayerUnitX9(z);};ga.prototype.$VideoPlayerUnitXi=function(){"use strict";q.bootstrapWithElement(this.$VideoPlayerUnitX2.video_container,this.$VideoPlayerUnitX7.getDOMElement());};ga.prototype.$VideoPlayerUnitXj=function(){"use strict";if(this.$VideoPlayerUnitX4)this.$VideoPlayerUnitXf(this.$VideoPlayerUnitXo());this.$VideoPlayerUnitX0.should_autoplay=false;this.$VideoPlayerUnitX9(w);};ga.prototype.$VideoPlayerUnitXk=function(ha){"use strict";var event=ha.event;delete ha.event;this.$VideoPlayerUnitX3.logEvent(event,ha);};ga.prototype.$VideoPlayerUnitXl=function(){"use strict";this.$VideoPlayerUnitX9(y);};ga.prototype.$VideoPlayerUnitXm=function(){"use strict";this.$VideoPlayerUnitX7=o.create(this.$VideoPlayerUnitX2.video);this.$VideoPlayerUnitX9(aa);this.$VideoPlayerUnitXp();if(this.$VideoPlayerUnitX5!=ca)this.play(this.$VideoPlayerUnitX5===ba);};ga.prototype.$VideoPlayerUnitXn=function(){"use strict";this.$VideoPlayerUnitX0.should_autoplay=false;};ga.prototype.$VideoPlayerUnitXp=function(){"use strict";var ha=s(this.$VideoPlayerUnitX7.getDOMElement(),['ft']);if(this.$VideoPlayerUnitX0.is_new_player){this.$VideoPlayerUnitX3.setFTData(ha);}else this.$VideoPlayerUnitX7.setFTData(JSON.stringify(ha.ft));};ga.prototype.$VideoPlayerUnitX9=function(ha){"use strict";this.$VideoPlayerUnitXc=ha;this.$VideoPlayerUnitXq();};ga.prototype.$VideoPlayerUnitXq=function(){"use strict";this.$VideoPlayerUnitXr();this.$VideoPlayerUnitXs();this.$VideoPlayerUnitXt();this.$VideoPlayerUnitXu();this.$VideoPlayerUnitXv();this.$VideoPlayerUnitXw();};ga.prototype.$VideoPlayerUnitXr=function(){"use strict";if(this.$VideoPlayerUnitXc===v){var ha=this.$VideoPlayerUnitX2;h.empty(ha.root);h.appendContent(ha.root,ha.fallback_link);h.appendContent(ha.fallback_link,ha.thumbnails[this.$VideoPlayerUnitX1]);h.appendContent(ha.fallback_link,ha.play_icon);}};ga.prototype.$VideoPlayerUnitXu=function(){"use strict";if(this.$VideoPlayerUnitXc===v||this.$VideoPlayerUnitXc===aa||this.$VideoPlayerUnitXc===y||(this.$VideoPlayerUnitXc===w&&!this.$VideoPlayerUnitX4)){g.addClass(this.$VideoPlayerUnitX2.play_icon,"_5vos");}else if(this.$VideoPlayerUnitXc!==w||!this.$VideoPlayerUnitX4){g.removeClass(this.$VideoPlayerUnitX2.play_icon,"_5vos");g.removeClass(this.$VideoPlayerUnitX2.play_icon,"_5vov");}};ga.prototype.$VideoPlayerUnitXv=function(){"use strict";if(this.$VideoPlayerUnitXc===x){g.show(this.$VideoPlayerUnitX2.spinner);}else g.hide(this.$VideoPlayerUnitX2.spinner);};ga.prototype.$VideoPlayerUnitXw=function(){"use strict";if(this.$VideoPlayerUnitXc===z||this.$VideoPlayerUnitXc===y){this.$VideoPlayerUnitX2.thumbnails.forEach(function(ha){g.hide(ha);});}else g.show(this.$VideoPlayerUnitX2.thumbnails[this.$VideoPlayerUnitX1]);};ga.prototype.$VideoPlayerUnitXt=function(){"use strict";if(!this.$VideoPlayerUnitX4)return;var ha=this.$VideoPlayerUnitX2.pivotThumbs;ha.forEach(function(ja){g.removeClass(ja,"_5vlu");g.removeClass(ja,"_5vou");g.addClass(ja,"_5vot");});g.removeClass(this.$VideoPlayerUnitX2.pivotReplayText,"_5vm5");g.removeClass(this.$VideoPlayerUnitX2.pivotNextText,"_5vm5");if(this.$VideoPlayerUnitXc===w){var ia=ha[this.$VideoPlayerUnitXg()];g.removeClass(ia,"_5vot");g.addClass(ia,"_5vlu");setTimeout(function(){g.addClass(ia,"_5vou");g.addClass(this.$VideoPlayerUnitX2.pivotReplayText,"_5vm5");g.addClass(this.$VideoPlayerUnitX2.pivotNextText,"_5vm5");g.addClass(this.$VideoPlayerUnitX2.play_icon,"_5vov");}.bind(this),fa);}};ga.prototype.$VideoPlayerUnitXs=function(){"use strict";if(!this.$VideoPlayerUnitX4)return;var ha=this.$VideoPlayerUnitX2.story_footers;for(var ia=0;ia<ha.length;ia++)g.conditionShow(ha[ia],ia===this.$VideoPlayerUnitX1);};ga.prototype.$VideoPlayerUnitXo=function(){"use strict";var ha=this.$VideoPlayerUnitX2.pivotThumbs.length;return (this.$VideoPlayerUnitX1+1)%ha;};ga.prototype.$VideoPlayerUnitXg=function(){"use strict";var ha=this.$VideoPlayerUnitX2.pivotThumbs.length;return (this.$VideoPlayerUnitX1-1+ha)%ha;};ga.prototype.$VideoPlayerUnitXf=function(ha){"use strict";this.$VideoPlayerUnitX3.logEvent(p.Events.CAROUSEL_CHANGE,{ad_client_token:this.$VideoPlayerUnitX0.ad_client_token,source_index:this.$VideoPlayerUnitX1,target_index:ha,video_id:this.$VideoPlayerUnitX0.video_ids[ha]});this.$VideoPlayerUnitX7.switchVideo(ha);this.$VideoPlayerUnitX1=ha;this.$VideoPlayerUnitXq();};e.exports=ga;});
__d("VideoAutoplayControllerX",["Arbiter","DOMDimensions","Event","PageVisibility","Run","SubscriptionsHandler","VideoPlayerUnitX","throttle"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o=null,p=500;function q(){"use strict";this.$VideoAutoplayControllerX0=null;this.$VideoAutoplayControllerX1=new l();this.$VideoAutoplayControllerX2={};g.subscribe(['flash/beginPlayback','flash/clickForTracking','flash/expandVideo','flash/finishPlayback','flash/hitBoxClicked','flash/logEvent','flash/pausePlayback','flash/ready','flash/turnOffAutoplay'],this.$VideoAutoplayControllerX3.bind(this));var r=n(this.$VideoAutoplayControllerX4.bind(this),p);this.$VideoAutoplayControllerX1.addSubscriptions(i.listen(window,'scroll',r),i.listen(window,'resize',r),j.addListener(j.hidden,this.$VideoAutoplayControllerX5.bind(this)),j.addListener(j.visible,this.$VideoAutoplayControllerX6.bind(this)));k.onLeave(function(){return this.$VideoAutoplayControllerX1.release();}.bind(this));}q.initVideoUnit=function(r,s){"use strict";if(o==null)o=new q();var t=new m(r,s);o.$VideoAutoplayControllerX2[s.flash_id]=t;if(o.$VideoAutoplayControllerX7(t))o.$VideoAutoplayControllerX4();};q.prototype.$VideoAutoplayControllerX8=function(){"use strict";var r=[];for(var s in this.$VideoAutoplayControllerX2){var t=this.$VideoAutoplayControllerX2[s];if(this.$VideoAutoplayControllerX7(t))r.push(t);}return r;};q.prototype.$VideoAutoplayControllerX7=function(r){"use strict";var s=h.getViewportDimensions().height,t=r.getDOMPosition();if(t.y>0&&t.y+t.height<s)return true;return false;};q.prototype.$VideoAutoplayControllerX3=function(r,s){"use strict";var t=this.$VideoAutoplayControllerX2[s.divID]?this.$VideoAutoplayControllerX2[s.divID]:null;if(r==='flash/turnOffAutoplay'&&this.$VideoAutoplayControllerX0===t)this.$VideoAutoplayControllerX0=null;if(t)t.handleFlashEvent(r,s);};q.prototype.$VideoAutoplayControllerX5=function(){"use strict";this.$VideoAutoplayControllerX9();};q.prototype.$VideoAutoplayControllerX6=function(){"use strict";this.$VideoAutoplayControllerX4();};q.prototype.$VideoAutoplayControllerX9=function(){"use strict";if(this.$VideoAutoplayControllerX0){this.$VideoAutoplayControllerX0.pause(true);this.$VideoAutoplayControllerX0=null;}};q.prototype.$VideoAutoplayControllerX4=function(){"use strict";var r=this.$VideoAutoplayControllerX8(),s=r.length,t=null;if(s==1){t=r[0];t=t.isAutoplayable()?t:null;}else if(s>1){var u=h.getViewportDimensions().height/2;r.forEach(function(v){if(!v.isAutoplayable())return;var w=v.getDOMPosition(),x=w.y+w.height/2,y=Math.abs(x-u);v.playPriority=y;if(!t||v.playPriority<t.playPriority)t=v;});}if(this.$VideoAutoplayControllerX0){if(t!=this.$VideoAutoplayControllerX0){this.$VideoAutoplayControllerX9();this.$VideoAutoplayControllerX0=t;if(this.$VideoAutoplayControllerX0)this.$VideoAutoplayControllerX0.play(true);}}else if(t){this.$VideoAutoplayControllerX0=t;this.$VideoAutoplayControllerX0.play(true);}};e.exports=q;});
__d("HVideoPlayerUnit",["Event","HVideoPlayerLoggerMixin","Run","SubscriptionsHandler","mixin"],function(a,b,c,d,e,f,g,h,i,j,k){var l=k(h);for(var m in l)if(l.hasOwnProperty(m))o[m]=l[m];var n=l===null?null:l.prototype;o.prototype=Object.create(n);o.prototype.constructor=o;o.__superConstructor__=l;o.init=function(p,q){"use strict";return new o(p,q);};function o(p,q){"use strict";this.$HVideoPlayerUnit0=new j();this.$HVideoPlayerUnit1=q;this.$HVideoPlayerUnit2=p;this.initLogger(function(event,r){g.listen(this.$HVideoPlayerUnit1,event,r);}.bind(this));i.onLeave(function(){return this.$HVideoPlayerUnit0.release();}.bind(this));}o.prototype.getSubscriptions=function(){"use strict";return this.$HVideoPlayerUnit0;};o.prototype.getVideoElement=function(){"use strict";return this.$HVideoPlayerUnit1;};o.prototype.getVideoID=function(){"use strict";return this.$HVideoPlayerUnit2;};e.exports=o;});