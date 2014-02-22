/*!CK:1683761623!*//*1392692657,178127443*/

if (self.CavalryLogger) { CavalryLogger.start_js(["CX71G"]); }

__d("ComposerXHiddenInputClear",[],function(a,b,c,d,e,f){function g(h){h.element.value='';}e.exports=g;});
__d("ComposerXSessionInputClear",[],function(a,b,c,d,e,f){function g(h){h.element.value=(new Date()).valueOf().toString().substr(0,10);}e.exports=g;});
__d("ComposerXTokenizer",["CSS","CurrentUser","DOM","DOMQuery","Token","Tokenizer"],function(a,b,c,d,e,f,g,h,i,j,k,l){for(var m in l)if(l.hasOwnProperty(m))o[m]=l[m];var n=l===null?null:l.prototype;o.prototype=Object.create(n);o.prototype.constructor=o;o.__superConstructor__=l;function o(p,q){"use strict";l.call(this,p,q);this._loadingIndicatorText='';}o.prototype.createDecorativeToken=function(p,q){"use strict";var r=new k(p,this.paramName),s=r.createElement(false,q);r.setElement(s);if(h.getID()==p.uid)j.scry(s,'input[type="hidden"]').forEach(i.remove);return r;};o.prototype.setLoadingIndicatorText=function(p){"use strict";this._loadingIndicatorText=p;};o.prototype.addLoadingIndicator=function(){"use strict";if(this._loadingIndicator)return;this._loadingIndicator=this.createDecorativeToken({text:this._loadingIndicatorText},'loadingIndicator');i.appendContent(this.tokenarea,this._loadingIndicator.element);this.updateTokenarea();};o.prototype.removeToken=function(p){"use strict";if(p===this._loadingIndicator){this.removeLoadingIndicator();this.inform('removeLoadingIndicator');}else n.removeToken.call(this,p);};o.prototype.removeLoadingIndicator=function(){"use strict";if(!this._loadingIndicator)return;i.remove(this._loadingIndicator.element);this._loadingIndicator=null;this.updateTokenarea();};o.prototype.updateTokenareaVisibility=function(){"use strict";g.conditionShow(this.tokenarea,this.tokens.length!==0||this._loadingIndicator);};o.prototype.findToken=function(p){"use strict";var q=this._tokenKey(p);if(q in this.unique)return this.unique[q];return null;};o.prototype.replaceToken=function(p){"use strict";var q=this.findToken(p.getInfo());if(q){var r=q.getElement();q.setElement(p.getElement());i.replace(r,p.getElement());return true;}else{this.addToken(p);return false;}};e.exports=o;});
__d("ComposerXPrivacyWidgetTags",["Arbiter","CurrentUser","copyProperties","getObjectValues"],function(a,b,c,d,e,f,g,h,i,j){function k(l){"use strict";this._privacyWidget=l.getComponent('mainprivacywidget').element;this._mentionsInput=l.getComponent('maininput').instance;this._placeTypeahead=l.getComponent('placetagger')?l.getComponent('placetagger').instance:null;this._friendsTokenizer=l.getComponent('withtagger')?l.getComponent('withtagger').instance:null;this._init();}k.prototype._init=function(){"use strict";this._subscriptions=[this._mentionsInput.subscribe('update',this._informChangedTags.bind(this))];if(this._placeTypeahead){this._subscriptions.push(this._placeTypeahead.subscribe('select',this._onPlaceSelect.bind(this)));this._subscriptions.push(g.subscribe('Events/autoSuggestionSelected',this._onPlaceSelect.bind(this)));this._subscriptions.push(this._placeTypeahead.subscribe('unselect',this._onPlaceUnselect.bind(this)));}if(this._friendsTokenizer)this._subscriptions.push(this._friendsTokenizer.subscribe(['addToken','removeToken'],this._informChangedTags.bind(this)));};k.prototype._getTaggedNamesForAudience=function(){"use strict";var l={},m=this._mentionsInput.getMentions();for(var n in m)if(m[n].type=='user')l[n]=m[n].text;if(this._friendsTokenizer)this._friendsTokenizer.getTokens().map(function(o){l[o.getValue()]=o.getText();});delete l[h.getID()];return j(l);};k.prototype._onPlaceSelect=function(l,m){"use strict";this._placeType=m.selected.place_type;this._informChangedTags();};k.prototype._onPlaceUnselect=function(l,m){"use strict";this._placeType=null;this._informChangedTags();};k.prototype._informChangedTags=function(){"use strict";var l=[];if(this._friendsTokenizer)l=this._friendsTokenizer.getTokens();var m=null;if(this._placeType==='Event')m=this._placeTypeahead.getCore().getHiddenValue();g.inform('Composer/changedtags',{withTags:l,mention:this._mentionsInput.getMentions(),eventTag:m});};k.prototype.destroy=function(){"use strict";while(this._subscriptions.length)this._subscriptions.pop().unsubscribe();};i(k.prototype,{_subscriptions:null,_placeType:null});e.exports=k;});
__d("ComposerXStatusAttachment",["Arbiter","ComposerXAttachment","ComposerXAttachmentUtils","ComposerXController","ComposerXDragDrop","ComposerXPrivacyWidgetTags","DOM","Event","OGComposerJSConstants","Parent","URI","URLScraper","copyProperties","csx","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){for(var v in h)if(h.hasOwnProperty(v))x[v]=h[v];var w=h===null?null:h.prototype;x.prototype=Object.create(w);x.prototype.constructor=x;x.__superConstructor__=h;function x(y,z,aa){"use strict";h.call(this);this._root=y;this._tagger=z;this._config=aa;}x.prototype.getRoot=function(){"use strict";return this._root;};x.prototype.initWithComponents=function(){"use strict";var y=this.getComponent('maininput');i.initMentions(y,this._config.mentionsPlaceholder);this._tagger.init(this);this._privacyWidgetTags=new l(this);var z=m.find(y.element,'textarea.input');if(!this._scraper){this._scraper=new r(z);this._scraper.subscribe('match',function(ba,ca){var da=new q(this._config.scraper_endpoint);da.addQueryData({scrape_url:encodeURIComponent(ca.url)});j.getAttachment(this._root,da.toString());}.bind(this));}this._scraper.enable();this._scraper.check();if(this._config.plus_version){this._dragdrop=new k(this._root,this._composerID,this._config.targetID);this._dragdrop.enableURLDropping();}var aa=m.scry(this._root,"._9s");if(aa.length>0)this._removeListener=n.listen(aa[0],'click',function(){var ba=m.find(this._root,'input[name="hide_object_attachment"]');ba.value=1;j.getAttachment(this._root,o.AttachmentURI);}.bind(this));g.inform('ComposerXStatusAttachment/ready',null,g.BEHAVIOR_STATE);};x.prototype.cleanup=function(){"use strict";this._tagger.cleanup();this._privacyWidgetTags.destroy();this._privacyWidgetTags=null;this._scraper.disable();if(this._removeListener){this._removeListener.remove();this._removeListener=null;}if(this._dragdrop){this._dragdrop.deactivate();this._dragdrop=null;}};x.prototype.reset=function(){"use strict";this._tagger.reset();};x.prototype.canSwitchAway=function(){"use strict";return !p.byClass(this._root,'async_saving');};x.prototype.allowOGTagPreview=function(){"use strict";return true;};s(x.prototype,{_privacyWidgetTags:null,_scraper:null,_dragdrop:null,_removeListener:null,attachmentClassName:"_4j"});e.exports=x;});
__d("ComposerXImplicitLocation",[],function(a,b,c,d,e,f){function g(h,i,j,k){"use strict";this._citySharer=h;this._placeTagger=i;this._hiddenInput=j;this._subscriptions=[];this._subscribeChangeCity();this._subscribeSelect();this._subscribeUnselect();}g.prototype.cleanup=function(){"use strict";while(this._subscriptions.length)this._subscriptions.pop().unsubscribe();};g.prototype.disable=function(){"use strict";if(!this._placeTagger.getCore().getValue()){this._disableImplicit=true;this._citySharer.saveCityInfo();this._citySharer.clearCity();}this._placeTagger.getData().setBootstrapEndpoint('/ajax/places/typeahead/recent_tag.php');};g.prototype.enable=function(){"use strict";if(!this._placeTagger.getCore().getValue()){this._citySharer.restoreCityInfo();this._disableImplicit=false;}this._placeTagger.getData().resetBootstrapEndpoint();};g.prototype.selectPlace=function(h){"use strict";if(h.place_type=='city'){this._citySharer.changeCity(h.text,h.uid,h.city_id);this._placeTagger.getCore().setCity(h.city_id,true);}if(h.city_id){if(!this._disableImplicit){this._citySharer.changeCity(h.city_name,h.city_page_id,h.city_id);}else this._citySharer.setCityData(h.city_name,h.city_page_id,h.city_id);}else this._citySharer.clearCity();this._citySharer.addPlace(h);};g.prototype.unselectPlace=function(){"use strict";this._hiddenInput.value=this._citySharer.getValue();this._citySharer.clearPlace();if(this._disableImplicit)this.disable();};g.prototype._subscribeChangeCity=function(){"use strict";this._subscriptions.push(this._citySharer.subscribe('change',function(h,i){if(!this._placeTagger.getCore().getHiddenValue())this._hiddenInput.value=this._citySharer.getValue();if(i&&i.city_id)this._placeTagger.getCore().setCity(i.city_id,true);}.bind(this)));};g.prototype._subscribeSelect=function(){"use strict";this._subscriptions.push(this._placeTagger.subscribe('select',function(h,i){this.selectPlace(i.selected);}.bind(this)));};g.prototype._subscribeUnselect=function(){"use strict";this._subscriptions.push(this._placeTagger.subscribe('unselect',this.unselectPlace.bind(this)));};e.exports=g;});
__d("ComposerXNUX",["AsyncRequest","ComposerXDragDrop","CSS","DOM","Event","SubscriptionsHandler","csx","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o={},p={};function q(s,t,u){var v=u.dataTransfer.items;if(v){var w=h.filterImages(v);if(!w.length)return;}r.acknowledgeDialog(s,t);}var r={CAMERA_NUX:'camera_nux_seen',ADD_MORE_NUX:'add_more_nux_seen',HMU_NUX:'hmu_nux_seen',HMU_POST_NUX:'hmu_post_nux_seen',FACEREC_SUGGESTIONS_NUX:'facerec_suggestions_nux_seen',TAGGING_FLYOUT_NUX:'tagging_flyout_nux_seen',onInit:function(s,t,u){if(o[u])return;p[u]=p[u]||new l();var v=p[u];v.engage();var w=s.getRoot();i.addClass(w,"_4bka");var x=j.scry(w,"._3o-a");x.forEach(function(y){v.addSubscriptions(k.listen(y,'click',r.acknowledgeDialog.bind(null,u,s)));});if(u==r.CAMERA_NUX)v.addSubscriptions(k.listen(document,'dragenter',q.bind(null,u,s)));v.addSubscriptions(s.subscribe('cancel',r.sendMarkSeenRequest.bind(null,u)),s.subscribe('hide',v.release.bind(v)));s.setContext(t).show();},acknowledgeDialog:function(s,t){r.sendMarkSeenRequest(s);t.hide();},sendMarkSeenRequest:function(s){if(!o[s]){new g('/ajax/photos/composer/mark_nux_seen.php').setData({type:s}).send();o[s]=true;}},onCleanup:function(s){s.hide();}};e.exports=r;});
__d("ComposerXCameraIconBehavior",["ComposerXMediaUploadHandler","ComposerXNUX","CSS","Event","cx"],function(a,b,c,d,e,f,g,h,i,j,k){var l={initCameraIcon:function(m){this._cameraIcon=m.getComponent('cameraicon');if(!this._config.showCameraIcon){i.hide(this._cameraIcon.element);return;}i.show(this._cameraIcon.element);var n=this._cameraIcon.instance,o=new g(this._config.composerID);this._listeners.push(j.listen(this._cameraIcon.element,'click',function(){o.fetchAttachments();}.bind(this)));this._subscriptions.push(n.subscribe('change',function(){o.handleFileSelected(n);i.addClass(this._cameraIcon.element,"_19_a");}.bind(this)));if(this._config.plusNUXDialog){h.onInit(this._config.plusNUXDialog,this._cameraIcon.element,h.CAMERA_NUX);this._onCleanup.push(function(){h.onCleanup(this._config.plusNUXDialog);}.bind(this));}}};e.exports=l;});
__d("ComposerXStandardTagger",["Arbiter","ArbiterMixin","AsyncRequest","ComposerXImplicitLocation","CSS","CurrentUser","DOM","Event","Focus","Input","Keys","StickyPlaceholderInput","WeakToken","copyProperties","cx","isEmpty","mixin"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){var x=w(h);for(var y in x)if(x.hasOwnProperty(y))aa[y]=x[y];var z=x===null?null:x.prototype;aa.prototype=Object.create(z);aa.prototype.constructor=aa;aa.__superConstructor__=x;function aa(ba){"use strict";this._listeners=[];this._subscriptions=[];this._onCleanup=[];this._config=ba||{};this._taggers={};this._taggerIcons={};this._onTaggerShowCallbacks={};this._onTaggerHideCallbacks={};this._withTokens={};this._currentTagger=null;this._socialTextSelectors={};}aa.prototype.init=function(ba){"use strict";this._mentionsInput=ba.getComponent('maininput');this._withTagger=ba.getComponent('withtagger');this._withTaggerIcon=ba.getComponent('withtaggericon');this._placeTagger=ba.getComponent('placetagger');this._hiddenExplicitPlace=ba.getComponent('explicitplaceinput');this._citySharerIcon=ba.getComponent('citysharericon');this._hiddenPlaceInput=ba.getComponent('hiddenplaceinput');this._placeNameInput=ba.getComponent('placenameinput');this._sessionID=ba.getComponent('hiddensessionid');if(this._hasMentionsInput())this._input=m.scry(this._mentionsInput.element,'textarea.input')[0];this._withTagger&&this.initAndRegisterWithTagger();this._placeTagger&&this.initAndRegisterPlaceTagger();this._placeTagger&&this.registerAutoEventSuggestion();if(this._hasMentionsInput())this._listeners.push(n.listen(this._mentionsInput.element,'mousedown',this._onMentionsInputClicked.bind(this)));};aa.prototype.registerAutoEventSuggestion=function(){"use strict";this._subscriptions.push(g.subscribe('Events/autoSuggestionConfirmed',function(ba,ca){this._toggleTagger('place');g.inform("Events/autoSuggestionSelected",ca);o.set(this._input);}.bind(this)));};aa.prototype.initAndRegisterPlaceTagger=function(){"use strict";this.registerTagger('place',this._placeTagger,this._citySharerIcon);this.initTaggerInput('place',this._placeTagger.instance.getCore().getElement());this._initCitySharer();this._initPlaceTagger();};aa.prototype.initAndRegisterWithTagger=function(){"use strict";this.registerTagger('with',this._withTagger,this._withTaggerIcon);this.initTaggerInput('with',this._withTagger.instance.getInput());this._initWithTagger();};aa.prototype.cleanup=function(){"use strict";this._hideTaggers();this._listeners.forEach(function(ba){ba.remove();});this._listeners=[];this._subscriptions.forEach(function(ba){ba.unsubscribe();});this._subscriptions=[];this._onCleanup.forEach(function(ba){ba();});this._onCleanup=[];if(this._citySharerIcon)this._implicitLocation.cleanup();};aa.prototype.reset=function(){"use strict";if(this._socialTextRequest)this._socialTextRequest.abort();};aa.prototype.registerTagger=function(ba,ca,da){"use strict";this._taggers[ba]=ca;if(this.hasIcons()){this._taggerIcons[ba]=da;this._listeners.push(n.listen(this._taggerIcons[ba].element,'click',this._toggleTagger.bind(this,ba)));}};aa.prototype.initTaggerInput=function(ba,ca){"use strict";var da=this._config.placeholders||{};if(da[ba])r.setPlaceholderText(ca,da[ba]);this._onTaggerShowCallbacks[ba]=o.set.bind(null,ca);this._listeners.push(n.listen(ca,'keydown',function(ea){if(n.getKeyCode(ea)==q.RETURN&&!p.getValue(ea.getTarget())){this._hideTaggers();setTimeout(o.set.bind(null,this._input),0);}}.bind(this)));};aa.prototype.setTaggerCallback=function(ba,ca){"use strict";this._onTaggerShowCallbacks[ba]=ca;};aa.prototype.setTaggerHideCallback=function(ba,ca){"use strict";this._onTaggerHideCallbacks[ba]=ca;};aa.prototype._initCitySharer=function(){"use strict";this._implicitLocation=new j(this._citySharerIcon.instance,this._placeTagger.instance,this._hiddenPlaceInput.element);if(this._config.disableImplicitCity){this._implicitLocation.disable();}else this._implicitLocation.enable();};aa.prototype._onMentionsInputClicked=function(){"use strict";this._hideTaggers();};aa.prototype._initWithTagger=function(){"use strict";this._subscriptions.push(this._withTagger.instance.subscribe(['addToken','removeToken'],function(ba,ca){if(ba==='addToken'){this._withTokens[ca.info.uid]=ca;}else if(ba==='removeToken')delete this._withTokens[ca.info.uid];this._updateWithTaggerUI();}.bind(this)));this.addSocialTextSelector('with','span.withToken');this.refreshWithTaggerPlaceholder();};aa.prototype.getWithTaggerPlaceholder=function(){"use strict";return this._config.placeholders?this._config.placeholders['with']:null;};aa.prototype.refreshWithTaggerPlaceholder=function(){"use strict";var ba=this.getWithTaggerPlaceholder();if(ba)this._withTagger.instance.setPlaceholder(ba);};aa.prototype._initPlaceTagger=function(){"use strict";this._subscriptions.push(this._placeTagger.instance.subscribe('select',function(ba,ca){this._hiddenPlaceInput.element.value=ca.selected.uid;this._placeNameInput.element.value=ca.selected.text;this._hiddenExplicitPlace.element.value=true;this._placeType=ca.selected.place_type;this._updateTaggedText();this._hideTaggers();o.set(this._input);}.bind(this)));this._subscriptions.push(this._placeTagger.instance.subscribe('unselect',function(ba,ca){this._hiddenExplicitPlace.element.value=false;this._placeNameInput.element.value='';this._placeType=null;this._updateTaggedText();}.bind(this)));this.addSocialTextSelector('place','span.placeToken');};aa.prototype.addSocialTextSelector=function(ba,ca){"use strict";this._socialTextSelectors[ba]=ca;};aa.prototype.addSubscription=function(ba){"use strict";this._subscriptions.push(ba);};aa.prototype.hasIcons=function(){"use strict";return true;};aa.prototype._showTagger=function(ba){"use strict";this._currentTagger=ba;k.show(this._taggers[ba].element);if(this.hasIcons())k.addClass(this._taggerIcons[ba].element,"_509o");if(ba==='with')new i().setURI('/ajax/fof/user_education.php').setData({increment:1}).send();if(this._onTaggerShowCallbacks[ba])this._onTaggerShowCallbacks[ba]();};aa.prototype._hideTagger=function(ba){"use strict";k.hide(this._taggers[ba].element);if(this.hasIcons())k.removeClass(this._taggerIcons[ba].element,"_509o");if(this._onTaggerHideCallbacks[ba])this._onTaggerHideCallbacks[ba]();if(this._currentTagger===ba)this._currentTagger=null;};aa.prototype._hideTaggers=function(){"use strict";for(var ba in this._taggers)this._hideTagger(ba);this._currentTagger=null;this.inform('hidetaggers');};aa.prototype.isAnyTaggerShown=function(){"use strict";return !!this._currentTagger;};aa.prototype.switchToTagger=function(ba){"use strict";this._hideTaggers();this._showTagger(ba);};aa.prototype._toggleTagger=function(ba){"use strict";if(k.shown(this._taggers[ba].element)){this._hideTaggers();}else this.switchToTagger(ba);};aa.prototype._getTaggedTextData=function(){"use strict";if(this._hasPlaceTagger())var ba=this._placeTagger.instance.getCore(),ca=ba.getHiddenValue(),da=ca&&ba.getValue();var ea=((this._withTagger&&this._withTagger.instance.getTokens())||[]).filter(function(fa){return fa.info.uid!=l.getID();});if(!ea.length&&!da)return {};return {people:ea.map(function(fa){return fa.info.uid;}),weakReferences:ea.filter(function(fa,ga,ha){return (fa instanceof s);}).map(function(fa){return fa.info.uid;}),place:da,placeID:ca,isNonSpecificPlace:this._isNonSpecificPlace()};};aa.prototype._updateTaggedText=function(){"use strict";if(this._hasMentionsInput()){var ba=this._getTaggedTextData();if(this.getExtraTaggedTextData)ba=t(ba,this.getExtraTaggedTextData());++this._requestID;if(v(ba)){this._mentionsInput.instance.setAuxContent(null);g.inform('reflow');return;}ba.requestID=this._requestID;ba.sessionID=this._sessionID.element.value,this._socialTextRequest=new i();this._socialTextRequest.setURI('/ajax/metacomposer/social_text.php').setData(ba).setHandler(this._handleSocialText.bind(this)).send();}};aa.prototype._updateWithTaggerUI=function(){"use strict";setTimeout(r.update.bind(null,this._withTagger.instance.getInput()),0);if(this._hasWithTaggerIcon())k.conditionClass(this._withTaggerIcon.element,"_1dsa",this._withTagger.instance.getFirstToken());this._updateTaggedText();};aa.prototype._handleSocialText=function(ba){"use strict";if(ba.payload.requestID===this._requestID){var ca=this._mentionsInput.instance;ca.setAuxContent(ba.payload.rendered);this._input.setAttribute('aria-labelledby',m.getID(ca.getAuxContentRoot()));g.inform('reflow');for(var da in this._socialTextSelectors){var ea=this._socialTextSelectors[da],fa=m.scry(ca.getAuxContentRoot(),ea);for(var ga=0;ga<fa.length;ga++){this._listeners.push(n.listen(fa[ga],'click',this.switchToTagger.bind(this,da)));this._listeners.push(n.listen(fa[ga],'mousedown',n.kill));}}}};aa.prototype._isNonSpecificPlace=function(){"use strict";return this._placeType=='city'||this._placeType=='state_province'||this._placeType=='country';};aa.prototype._hasMentionsInput=function(){"use strict";return this._mentionsInput!==undefined;};aa.prototype._hasPlaceTagger=function(){"use strict";return this._placeTagger!==undefined;};aa.prototype._hasWithTaggerIcon=function(){"use strict";return this._withTaggerIcon!==undefined;};t(aa.prototype,{_placeType:null,_requestID:0,_socialTextRequest:null});e.exports=aa;});
__d("ComposerXPlusTagger",["ComposerXCameraIconBehavior","ComposerXStandardTagger","classWithMixins","mixin"],function(a,b,c,d,e,f,g,h,i,j){var k=i(h,j(g));for(var l in k)if(k.hasOwnProperty(l))n[l]=k[l];var m=k===null?null:k.prototype;n.prototype=Object.create(m);n.prototype.constructor=n;n.__superConstructor__=k;function n(o){"use strict";k.call(this,o);this._eventuallyTagger=null;}n.prototype.init=function(o){"use strict";m.init.call(this,o);if(o.getComponent('cameraicon'))this.initCameraIcon(o);};n.prototype._nonObstrusiveSwitchToTagger=function(o){"use strict";var p=this._onTaggerShowCallbacks[o];delete this._onTaggerShowCallbacks[o];this.switchToTagger(o);this._dontHideTaggerOnMentionsFocus=o;this._onTaggerShowCallbacks[o]=p;};n.prototype.eventuallySwitchToTagger=function(o){"use strict";if(!this.isAnyTaggerShown()){this._nonObstrusiveSwitchToTagger(o);}else if(this._currentTagger!==o)this._eventuallyTagger=o;};n.prototype.switchToTagger=function(o){"use strict";if(this._eventuallyTagger===o)this._eventuallyTagger=null;this._nonEventuallyHideTaggers();this._showTagger(o);};n.prototype._hideTaggers=function(){"use strict";m._hideTaggers.call(this);if(this._eventuallyTagger){this._nonObstrusiveSwitchToTagger(this._eventuallyTagger);this._eventuallyTagger=null;}};n.prototype._nonEventuallyHideTaggers=function(){"use strict";m._hideTaggers.call(this);};n.prototype._onMentionsInputClicked=function(){"use strict";if(this._currentTagger!=this._dontHideTaggerOnMentionsFocus){this.eventuallySwitchToTagger(this._dontHideTaggerOnMentionsFocus);m._onMentionsInputClicked.call(this);}};e.exports=n;});
__d("ComposerXOGTaggerBehavior",["Arbiter","ComposerXController","CSS","DOM","DOMQuery","OGComposerJSConstants","Run","URI","csx","cx","tx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r=null;m.onBeforeUnload(function(){if(r&&r.isSet())return "You haven't finished your post yet. Do you want to leave without finishing?";});var s={initOGTagger:function(t){this._attachmentRoot=t.getRoot();this._showPreview=t.allowOGTagPreview();this._ogTagger=t.getComponent('ogtagger');this._ogIcon=t.getComponent('ogtaggericon');this._ogCustomIconID=null;r=this._ogTagger.instance;this.registerTagger('ogtagger',this._ogTagger,this._ogIcon);this.setTaggerCallback('ogtagger',this._ogTagger.instance.showTagger.bind(this._ogTagger.instance));this.setTaggerHideCallback('ogtagger',this._ogTagger.instance.hideTagger.bind(this._ogTagger.instance));this.addSubscription(this._ogTagger.instance.subscribe('changed',this._handleOGActionChanged.bind(this)));this.addSubscription(this._placeTagger.instance.subscribe(['select','unselect'],this._handlePlaceChanged.bind(this)));this.addSocialTextSelector('ogtagger','span.og_composer_object');this.addSubscription(g.subscribe('composer/initializedAttachment',function(){if(this._ogTagger.instance.isSet())g.inform('composer/deactivateDragdrop');}.bind(this)));this.addSubscription(g.subscribe('composer/ogCustomIconSelected',function(v,w){this._ogCustomIconID=w;}.bind(this)));this.subscribe('hidetaggers',this.hideTypeaheadView.bind(this));if(this._config.hasOGSuggestions&&!this._ogTagger.instance.suggestIconShown()){var u=k.find(this._ogIcon.element,"._5xlw");this._ogTagger.instance.showSuggestCount(u);this._ogTagger.instance.getVerbTypeahead().getData().bootstrapData.show_suggestions=true;}},_handleOGActionChanged:function(){this._ogCustomIconID=null;this._updateTaggedText();i.conditionClass(this._ogIcon.element,"_4-jh",this._ogTagger.instance.isSet());if(this._ogTagger.instance.isSet()){this._ogIcon.element.setAttribute('aria-selected','true');this._ogIcon.element.removeAttribute('role');}else{this._ogIcon.element.setAttribute('aria-selected','false');this._ogIcon.element.setAttribute('role','button');}if(this._showPreview&&this._ogTagger.instance.isSet()){g.inform('composer/deactivateDragdrop');this._hideTagger('ogtagger');if(this._ogTagger.instance.getObjectID()){var t=j.find(this._attachmentRoot,'input[name="hide_object_attachment"]');t.value=0;var u=new n(l.AttachmentURI);u.addQueryData({objectid:this._ogTagger.instance.getObjectID()});h.getAttachment(this._attachmentRoot,u.toString());}}else{g.inform('composer/reactivateDragdrop');var v=j.scry(this._attachmentRoot,"div.fbComposerOGAttachmentPreview");if(v.length>0)h.getAttachment(this._attachmentRoot,l.AttachmentURI);}},_handlePlaceChanged:function(t,u){var v=u.selected?u.selected.uid:0;this._ogTagger.instance.setPlaceID(v);},cleanupOGTagger:function(){r=null;},getExtraTaggedTextData:function(){if(!this._ogTagger.instance.isSet())return null;var t={actionID:this._ogTagger.instance.getActionTypeID(),objectID:this._ogTagger.instance.getObjectID(),objectStr:this._ogTagger.instance.getObjectStr(),objectQuery:this._ogTagger.instance.getObjectQuery(),ogLocationID:this._ogTagger.instance.getLocationID()};if(this._ogCustomIconID)t.actionIconID=this._ogCustomIconID;return t;},hideTypeaheadView:function(){this._ogTagger.instance.getNounTypeahead().getView().hide();}};e.exports=s;});
__d("ComposerXPlusTaggerWithOG",["ComposerXOGTaggerBehavior","ComposerXPlusTagger","classWithMixins","mixin"],function(a,b,c,d,e,f,g,h,i,j){var k=i(h,j(g));for(var l in k)if(k.hasOwnProperty(l))n[l]=k[l];var m=k===null?null:k.prototype;n.prototype=Object.create(m);n.prototype.constructor=n;n.__superConstructor__=k;function n(){"use strict";if(k!==null)k.apply(this,arguments);}n.prototype.init=function(o){"use strict";m.init.call(this,o);this.initOGTagger(o);};n.prototype.cleanup=function(){"use strict";m.cleanup.call(this);this.cleanupOGTagger();};e.exports=n;});
__d("BanzaiNectarSimple",["Banzai"],function(a,b,c,d,e,f,g){function h(j){return {log:function(k,l,m){var n={e:l,a:m};g.post('nectar_simple:'+k,n,j);}};}var i=h();i.create=h;e.exports=i;});
__d("RTLKeys",["CurrentLocale","Keys","copyProperties"],function(a,b,c,d,e,f,g,h,i){var j=i({},h);if(g.isRTL()){j.LEFT=h.RIGHT;j.RIGHT=h.LEFT;}e.exports=j;});
__d("OGComposerTagger",["ArbiterMixin","BanzaiNectarSimple","CSS","DOM","Event","Input","RTLKeys","StickyPlaceholderInput","csx","mixin","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r=p(g);for(var s in r)if(r.hasOwnProperty(s))u[s]=r[s];var t=r===null?null:r.prototype;u.prototype=Object.create(t);u.prototype.constructor=u;u.__superConstructor__=r;function u(v,w,x,y,z){"use strict";this._verbTypeahead=v;this._nounTypeahead=w;this._locationTypeahead=x;this._hiddenObjectStr=y;this._suggestionMechanismInput=z;this._objectQuery=null;this._verbSpan=null;this._suggestIconElement=null;this._suggestIconShown=false;v.getCore().preventFocusChangeOnTab=true;w.getCore().preventFocusChangeOnTab=true;w.getCore().keepFocused=false;this._watchCloseButton(w);this._watchCloseButton(x);var aa=w.getCore().getElement(),ba=v.getCore().getElement(),ca=x.getCore().getElement();q([v.subscribe('select',function(da,ea){this._suggestionMechanismInput.value=ea.selected.suggestion_mechanism;if(ea.selected.type=='page'){w.getCore().setHiddenValue(ea.selected.uid);v.getCore().setHiddenValue(ea.selected.at_id);this.inform('changed');return;}var fa=w.getData();fa.dirty();fa.queryData.at_id=ea.selected.uid;fa.bootstrapData.at_id=ea.selected.uid;fa.bootstrap();w.getView().setContext(ea.selected);n.setPlaceholderText(aa,ea.selected.prompt);j.setContent(this._getVerbSpan(),ea.selected.prompt_text);this._showNounTypeahead();}.bind(this)),w.subscribe('select',function(da,ea){this._suggestionMechanismInput.value='';if(ea.selected.uid){y.value='';}else{w.getCore().setHiddenValue('');y.value=ea.selected.text.trim();}this._objectQuery=ea.selected.query;if(ea.selected.location_phrase&&!this._nounTypeahead.getData().queryData.place_id){this._locationTypeahead.getCore().reset();var fa=x.getData();fa.dirty();fa.bootstrap();n.setPlaceholderText(ca,'where?');j.setContent(this._getPhraseSpan(),ea.selected.location_phrase+' in');this._showLocationTypeahead();}else this.inform('changed');}.bind(this)),x.subscribe('select',function(da,ea){this.inform('changed');}.bind(this)),w.subscribe('unselect',function(da,ea){y.value='';this.inform('changed');}.bind(this)),k.listen(ba,'keydown',function(event){if(k.getKeyCode(event)==m.SPACE||k.getKeyCode(event)==m.RIGHT){v.getView().select(false);event.kill();}if(k.getKeyCode(event)!=m.BACKSPACE&&k.getKeyCode(event)!=m.DELETE&&k.getKeyCode(event)!=m.SPACE&&v.getData().value!=="")h.log('og_composer_waterfall','verb_typeahead',{search_string:v.getData().value});}),k.listen(aa,'keydown',function(event){if((k.getKeyCode(event)==m.BACKSPACE||k.getKeyCode(event)==m.LEFT)&&l.isEmpty(this._getNounInput()))this._showVerbTypeahead();}.bind(this)),k.listen(ca,'keydown',function(event){if((k.getKeyCode(event)==m.BACKSPACE||k.getKeyCode(event)==m.LEFT)&&l.isEmpty(ca))this._showNounTypeahead();}.bind(this))]);}u.prototype.showTagger=function(){"use strict";this._nounTypeahead.getCore().setEnabled(true);if(this.isSet()&&!this._suggestionMechanismInput.value){if(this.getLocationID()){this._showLocationTypeahead();}else this._showNounTypeahead();}else if(this.isSet()){this._verbTypeahead.getCore().reset();this._nounTypeahead.getCore().reset();this._locationTypeahead.getCore().reset();this.inform('changed');this._showVerbTypeahead();}else this._showVerbTypeahead();if(this._suggestIconElement)i.hide(this._suggestIconElement);};u.prototype.hideTagger=function(){"use strict";if(this.isSet()&&i.shown(this._locationTypeahead.getElement())){i.hide(this._locationTypeahead.getElement());this.inform('changed');}this._nounTypeahead.getCore().setEnabled(false);};u.prototype.isSet=function(){"use strict";return !!(this.getObjectID()||this.getObjectStr());};u.prototype.reset=function(){"use strict";this._nounTypeahead.getCore().reset();this._verbTypeahead.getCore().reset();this._locationTypeahead.getCore().reset();this._hiddenObjectStr.value='';this._objectQuery=null;this.setPlaceID(0);};u.prototype.getActionTypeID=function(){"use strict";return this._verbTypeahead.getCore().getHiddenValue();};u.prototype.getObjectID=function(){"use strict";return this._nounTypeahead.getCore().getHiddenValue();};u.prototype.setPlaceID=function(v){"use strict";var w=this._nounTypeahead.getData();if(v!=w.bootstrapData.place_id){w.bootstrapData.place_id=v;w.queryData.place_id=v;if(w.bootstrapData.at_id){w.dirty();w.bootstrap();}}};u.prototype.getObjectStr=function(){"use strict";return this._hiddenObjectStr.value;};u.prototype.getObjectQuery=function(){"use strict";return this._objectQuery;};u.prototype.getLocationID=function(){"use strict";return this._locationTypeahead.getCore().getHiddenValue();};u.prototype.getVerbTypeahead=function(){"use strict";return this._verbTypeahead;};u.prototype.getNounTypeahead=function(){"use strict";return this._nounTypeahead;};u.prototype._getVerbSpan=function(){"use strict";if(!this._verbSpan){this._verbSpan=j.create('span',{className:'verbText'});j.prependContent(this._nounTypeahead.getElement(),this._verbSpan);q(k.listen(this._verbSpan,'click',function(){this._showVerbTypeahead();return false;}.bind(this)));}return this._verbSpan;};u.prototype._getPhraseSpan=function(){"use strict";if(!this._phraseSpan){this._phraseSpan=j.create('span',{className:'verbText'});j.prependContent(this._locationTypeahead.getElement(),this._phraseSpan);q(k.listen(this._phraseSpan,'click',function(){this._showNounTypeahead();return false;}.bind(this)));}return this._phraseSpan;};u.prototype._getNounInput=function(){"use strict";return this._nounTypeahead.getCore().getElement();};u.prototype._showVerbTypeahead=function(){"use strict";i.show(this._verbTypeahead.getElement());i.hide(this._nounTypeahead.getElement());i.hide(this._locationTypeahead.getElement());this._verbTypeahead.getCore().reset();this._nounTypeahead.getCore().reset();this._locationTypeahead.getCore().reset();this._verbTypeahead.getCore().getElement().focus();};u.prototype._showNounTypeahead=function(){"use strict";i.hide(this._verbTypeahead.getElement());i.show(this._nounTypeahead.getElement());i.hide(this._locationTypeahead.getElement());this._nounTypeahead.getCore().getElement().focus();};u.prototype._showLocationTypeahead=function(){"use strict";i.hide(this._verbTypeahead.getElement());i.hide(this._nounTypeahead.getElement());i.show(this._locationTypeahead.getElement());this._locationTypeahead.getCore().getElement().focus();};u.prototype._watchCloseButton=function(v){"use strict";var w=j.scry(v.getElement(),'.uiCloseButton')[0];if(!w)w=j.scry(v.getElement(),"._50zy")[0];q(k.listen(w,'click',function(){this._showVerbTypeahead();return false;}.bind(this)));};u.prototype.suggestIconShown=function(){"use strict";return this._suggestIconShown;};u.prototype.showSuggestCount=function(v){"use strict";this._suggestIconShown=true;this._suggestIconElement=v;i.show(v);};e.exports=u;});
__d("ComposerXOGTaggerReset",["CSS"],function(a,b,c,d,e,f,g){function h(i){i.instance.reset();g.hide(i.element);}e.exports=h;});
__d("ComposerXPeopleTaggerReset",["CSS"],function(a,b,c,d,e,f,g){function h(i){i.instance.reset();g.hide(i.element);}e.exports=h;});
__d("ComposerXPlaceTaggerReset",["CSS"],function(a,b,c,d,e,f,g){function h(i){i.instance.getCore().reset();g.hide(i.element);}e.exports=h;});
__d("PlacesTypeaheadRendererUtil",[],function(a,b,c,d,e,f){var g=/[.,+*?$|#{}()\^\-\[\]\\\/!@%"~=<>_:;]/g;function h(k,l){return k.end>l.end||k.start<l.start;}function i(k,l){if(!k)return [];var m=[];k=k.replace(g,' ');var n=k.split(' ');for(var o=0;o<n.length;o++){if(!n[o])continue;var p=n[o];if(o<n.length-1)p=p+'[ ,]';var q=new RegExp(' '+p,'i'),r=q.exec((' '+l+' '));if(r){var s={start:r.index,end:r.index+n[o].length};if(m.every(h.bind(null,s)))m.push(s);}else return [];}m.sort(function(t,u){return t.start-u.start;});return m;}var j={match_positions:i};e.exports=j;});
__d("PlacesTypeaheadRenderer",["DOM","PlacesTypeaheadRendererUtil"],function(a,b,c,d,e,f,g,h){function i(j,k){var l=[],m=j.photo;if(m)l.push(g.create('img',{alt:'',src:m}));if(j.text){var n=g.create('span',{className:'text'},""),o=j.text;if(j.address)o=o+" \u00b7 "+j.address;var p=[];if(j.value)p=h.match_positions(j.value,o);if(p.length>0){var q=0;for(var r=0;r<p.length;r++){var s=p[r].start,t=p[r].end;g.appendContent(n,o.substr(q,(s-q)));g.appendContent(n,g.create('span',{className:'bold'},o.substr(s,t-s)));q=t;}g.appendContent(n,o.substr(q));}else{g.appendContent(n,g.create('span',{className:'bold'},j.text));if(j.address)g.appendContent(n," \u00b7 "+j.address);}l.push(g.create('span',{},n));}var u=j.subtext,v=j.category;if(u||v){var w=[];u&&w.push(u);v&&w.push(v);l.push(g.create('span',{className:'subtext'},w.join(' \u00b7 ')));}return g.create('li',{className:j.type||''},l);}i.className='places';e.exports=i;});
__d("OGComposerActionTypeTypeaheadRenderer",["CSS","DOM","CompactTypeaheadRenderer","cx"],function(a,b,c,d,e,f,g,h,i,j){function k(l,m){var n=i(l,m);h.prependContent(n,l.icon);if(l.type=='action_type'){var o=h.create('i',{className:'arrowRight'});h.prependContent(n,o);}var p=h.scry(n,'span');if(p.length==1)g.addClass(p[0],"_5lpy");return n;}k.className="compact _47i9";e.exports=k;});
__d("OGComposerObjectDataSource",["createArrayFrom","DataSource"],function(a,b,c,d,e,f,g,h){for(var i in h)if(h.hasOwnProperty(i))k[i]=h[i];var j=h===null?null:h.prototype;k.prototype=Object.create(j);k.prototype.constructor=k;k.__superConstructor__=h;function k(){"use strict";if(h!==null)h.apply(this,arguments);}k.prototype.addEntries=function(l,m){"use strict";var n=this.processEntries(g(l||[]),m);if(m){var o=this.getQueryCache();o[this.normalizeString(m).flatValue]=n;}};e.exports=k;});
__d("OGComposerTypeaheadMetrics",["TypeaheadMetrics"],function(a,b,c,d,e,f,g){for(var h in g)if(g.hasOwnProperty(h))j[h]=g[h];var i=g===null?null:g.prototype;j.prototype=Object.create(i);j.prototype.constructor=j;j.__superConstructor__=g;function j(){"use strict";if(g!==null)g.apply(this,arguments);}j.prototype.submit=function(){"use strict";if(this.hasStats())this.stats.at_id=this.data.queryData.at_id;i.submit.call(this);};e.exports=j;});
__d("OGNounTypeaheadView",["CSS","DOM","HubsTypeaheadView","OGComposerJSConstants","ScrollableArea","csx","cx","fbt","throttle","tidyEvent","tx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r;for(var s in i)if(i.hasOwnProperty(s))u[s]=i[s];var t=i===null?null:i.prototype;u.prototype=Object.create(t);u.prototype.constructor=u;u.__superConstructor__=i;function u(){"use strict";if(i!==null)i.apply(this,arguments);}u.prototype._bindScrollListener=function(){"use strict";this._getScrollableArea()&&p(r.subscribe('scroll',o(this._checkScroll.bind(this))));};u.prototype._checkScroll=function(){"use strict";var v=this._getLastItemID();if(r.isScrolledToBottom()&&this._lastItemID!==v){this._lastItemID=v;this.inform('scrolledtobottom',{scrollableArea:r});}};u.prototype._createFreeFormNode=function(v){"use strict";var w={orig_text:v,icon:this.defaultIcon,text:v,type:'calltoaction'};if(this.actionTypeID==j.ActionTypeIDs.COMPOSER_LOOKS_FOR)w.location_phrase=n._("looking for {object}",[n.param("object",v)]);return w;};u.prototype._getScrollableArea=function(){"use strict";if(!this._scrollableArea)this._scrollableArea=k.getInstance(this.content);return r=this._scrollableArea;};u.prototype._getLastItemID=function(){"use strict";var v=this.items[this.items.length-1];return v&&v.getAttribute('aria-label');};u.prototype.init=function(){"use strict";this.content=h.find(this.element,"div._52yd");t.init.call(this);p([this.subscribe(['render','reset'],this._updateView.bind(this)),this.subscribe('highlight',this._scrollIntoView.bind(this)),this.subscribeOnce('render',this._bindScrollListener.bind(this))]);};u.prototype._scrollIntoView=function(v,w){"use strict";if(this._getScrollableArea()){this.ignoreMouseover=true;r.scrollIntoView(w.element,false);}};u.prototype.setContext=function(v){"use strict";this.defaultIcon=v.default_icon;this.actionTypeID=v.uid;};u.prototype._updateView=function(){"use strict";this._lastItemID=null;g.conditionClass(this.element,"_52yc",this.items.length);};u.prototype._createCustomAddNode=function(){"use strict";return {text:"Add your own...",type:'calltoaction customadd',icon:this.defaultIcon};};u.prototype.render=function(v,w,x){"use strict";if(w.length&&v==='')w.push(this._createCustomAddNode());return t.render.call(this,v,w,x);};u.prototype.select=function(v){"use strict";var w=this.results[this.index];if(w&&w.type.match('customadd')){this.causalElement.focus();this.layer.hide();return;}return t.select.call(this,v);};e.exports=u;});
__d("TypeaheadCustomFirstSelection",[],function(a,b,c,d,e,f){function g(h){"use strict";this.$TypeaheadCustomFirstSelection0=null;this.$TypeaheadCustomFirstSelection1=h;}g.prototype.enable=function(){"use strict";var h=this.$TypeaheadCustomFirstSelection1.getView();this.$TypeaheadCustomFirstSelection0=h.subscribe('beforeRender',function(i,j){j.results.unshift(h.custom_first_item);});};g.prototype.disable=function(){"use strict";this.$TypeaheadCustomFirstSelection1.getView().unsubscribe(this.$TypeaheadCustomFirstSelection0);this.$TypeaheadCustomFirstSelection0=null;};e.exports=g;});
__d("TypeaheadShowAllBootstrapOnFocus",["TypeaheadShowBootstrapOnFocus"],function(a,b,c,d,e,f,g){for(var h in g)if(g.hasOwnProperty(h))j[h]=g[h];var i=g===null?null:g.prototype;j.prototype=Object.create(i);j.prototype.constructor=j;j.__superConstructor__=g;function j(){"use strict";if(g!==null)g.apply(this,arguments);}j.prototype.getMaxBootstrapEntries=function(){"use strict";return undefined;};e.exports=j;});
__d("OGComposerLocationTypeaheadRenderer",["CompactTypeaheadRenderer"],function(a,b,c,d,e,f,g){function h(i,j){i.subtext='';return g(i,j);}h.className=g.className;e.exports=h;});
__d("OGComposerObjectTypeaheadRenderer",["CompactTypeaheadRenderer","DOM"],function(a,b,c,d,e,f,g,h){function i(j,k){var l=g(j,k),m=j.icon;if(m)h.prependContent(l,m);return l;}i.className=g.className;e.exports=i;});