/*!CK:3469453029!*//*1392692648,178138177*/

if (self.CavalryLogger) { CavalryLogger.start_js(["bnVoQ"]); }

__d("EgoAdsObjectSet",["DOM","csx"],function(a,b,c,d,e,f,g,h){function i(){"use strict";this._allEgoUnits=[];this._egoUnits=[];}i.prototype.init=function(k){"use strict";this._allEgoUnits=k;this._egoUnits=[];this._allEgoUnits.forEach(function(l){var m=j(l);if(!m||!m.holdout)this._egoUnits.push(l);},this);};i.prototype.getCount=function(){"use strict";return this._egoUnits.length;};i.prototype.forEach=function(k,l){"use strict";this._egoUnits.forEach(k,l);};i.prototype.getUnit=function(k){"use strict";return this._egoUnits[k];};i.prototype.getHoldoutAdIDsForSpace=function(k,l){"use strict";if(!k||!l)return [];var m=[];for(var n=0;k>0&&n<this._allEgoUnits.length;n++){var o=this._allEgoUnits[n],p=l(o),q=j(o);if(k>=p&&q&&q.holdout)m.push(q.adid);k-=p;}return m;};i.prototype.getHoldoutAdIDsForNumAds=function(k){"use strict";k=Math.min(k,this._allEgoUnits.length);var l=[];for(var m=0;m<k;m++){var n=this._allEgoUnits[m],o=j(n);if(o&&o.holdout)l.push(o.adid);}return l;};function j(k){var l=g.scry(k,"div._4u8")[0],m=l&&l.getAttribute('data-ad');return m&&JSON.parse(m)||undefined;}e.exports=i;});
__d("rayInterceptsBox",["invariant"],function(a,b,c,d,e,f,g){function h(j,k){var l=Object.keys(j);k.forEach(function(m){g(l.indexOf(m)!==-1);g(typeof j[m]==='number');});}var i={check:function(j,k){h(j,['minX','maxX','minY','maxY']);h(k,['x','y','dx','dy']);g(j.maxX>j.minX&&j.maxY>j.minY);if(k.dx===0&&k.dy===0)return false;if(k.x>=j.minX&&k.x<=j.maxX&&k.y>=j.minY&&k.y<=j.maxY)return true;var l=(j.minX-k.x)/k.dx,m=(j.maxX-k.x)/k.dx,n=(j.minY-k.y)/k.dy,o=(j.maxY-k.y)/k.dy,p=Math.max(Math.min(l,m),Math.min(n,o)),q=Math.min(Math.max(l,m),Math.max(n,o));if(p<0)return false;if(p>q)return false;return true;}};e.exports=i;});
__d("AdsMouseStateStore",["Arbiter","DOM","Event","Vector","$","copyProperties","invariant","keyMirror","rayInterceptsBox","throttle"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){"use strict";var q=30,r=500,s=n({STATIONARY:null,INTENT:null,HOVER:null,NO_INTENT:null}),t,u,v,w,x;function y(){t=s.STATIONARY;u=0;v=0;w=Date.now();x='pagelet_ego_pane';}y();function z(event){try{return {x:event.clientX||event.x,y:event.clientY||event.y};}catch(ba){var ca=Math.random()*1000;return {x:ca,y:ca};}}var aa=l(new g(),{getState:function(){return t;},updateRhcID:function(ba){m(k(ba));x=ba;},getRhcID:function(){return x;},onPageTransition:function(event){y();},onMouseMove:function(event){this.calculateState(z(event));},__updateMousePos:function(ba){u=ba.x;v=ba.y;},isRhcPresent:function(){if(!h.scry(document.body,'#'+x).length)return false;var ba=this.getRhcDimensions();return (ba.y>0&&ba.x>0);},getRhc:function(){return k(x);},getRhcPosition:function(){return j.getElementPosition(this.getRhc());},getRhcScreenPos:function(){var ba=j.getScrollPosition(),ca=this.getRhcPosition();return {x:ca.x-ba.x,y:ca.y-ba.y};},getRhcDimensions:function(){return j.getElementDimensions(this.getRhc());},getRhcBoundingBox:function(){var ba=this.getRhcDimensions(),ca=this.getRhcScreenPos();return {minX:ca.x,maxX:ca.x+ba.x,minY:ca.y,maxY:ca.y+ba.y};},isPosContainedInRhc:function(ba){var ca=this.getRhcBoundingBox();return (ba.x>=ca.minX&&ba.x<=ca.maxX&&ba.y>=ca.minY&&ba.y<=ca.maxY);},hasMovedMinDistance:function(ba){var ca=ba.x-u,da=ba.y-v;return (ca*ca+da*da)>=q*q;},tooSoon:function(){return Date.now()-w<r;},_updateTime:function(){w=Date.now();},calculateState:function(ba){if(this.tooSoon())return;this._updateTime();if(!this.isRhcPresent())return;if(this.isPosContainedInRhc(ba)){this.transitionToState(s.HOVER);this.__updateMousePos(ba);this.scheduleCheckup();return;}else if(!this.hasMovedMinDistance(ba)){this.transitionToState(s.STATIONARY);return;}var ca=(this.isMovingTowardsRhc(ba))?s.INTENT:s.NO_INTENT;this.transitionToState(ca);this.__updateMousePos(ba);this.scheduleCheckup();},isMovingTowardsRhc:function(ba){var ca={x:u,y:v};if(this.isPosContainedInRhc(ca))return true;var da=this.getRhcBoundingBox(),ea={x:u,y:v,dx:ba.x-u,dy:ba.y-v};return o.check(da,ea);},scheduleCheckup:function(){var ba={x:u,y:v};setTimeout(function(){this.calculateState(ba);}.bind(this),r*1.5);},transitionToState:function(ba){if(ba===t)return;t=ba;aa.inform('change');}});i.listen(document,'mousemove',p(aa.onMouseMove.bind(aa),r));g.subscribe('page_transition',aa.onPageTransition);aa.STATES=s;aa.MIN_MOVE_DISTANCE=q;aa.THROTTLE_TIME=r;e.exports=aa;});