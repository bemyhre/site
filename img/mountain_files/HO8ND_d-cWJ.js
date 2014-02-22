/*!CK:3892293565!*//*1392697307,178163779*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Z7Fjl"]); }

__d("PopoverMenu.react",["CSS","InlineBlock.react","Popover","PopoverMenu","React","ReactPropTypes","SubscriptionsHandler","cx","joinClasses","areEqual"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q=k.createClass({displayName:'ReactPopoverMenu',statics:{getFirstChild:function(r){var s=r.children;return Array.isArray(s)?s[0]:s;},getButtonSize:function(r){var s=q.getFirstChild(r);return s&&s.type.getButtonSize(s.props);}},propTypes:{alignh:l.oneOf(['left','center','right']),alignv:l.oneOf(['baseline','bottom','middle','top']),layerBehaviors:l.array,menu:l.object,disabled:l.bool},getDefaultProps:function(){return {alignv:'middle'};},_menuSubscriptions:null,componentDidMount:function(){var r=this.refs.root.getDOMNode(),s=r.firstChild;g.addClass(s,"_p");this._popover=new i(r,s,this.props.layerBehaviors,{alignh:this.props.alignh,disabled:this.props.disabled});this._popoverMenu=new j(this._popover,s,this._createMenu(this.props.menu),this.props.behaviors);},componentDidUpdate:function(r){if(!p(r.menu,this.props.menu)){if(this._menuSubscriptions){this._menuSubscriptions.release();this._menuSubscriptions=null;}this._popoverMenu.setMenu(this._createMenu(this.props.menu));}if(this.props.alignh!==r.alignh)this._popoverMenu.getPopover().getLayer().setAlignment(this.props.alignh);if(this.props.disabled!==r.disabled)if(this.props.disabled){this._popoverMenu.disable();}else this._popoverMenu.enable();},render:function(){var r=q.getFirstChild(this.props);r.props.className=o(r.props.className||'',"_p");return this.transferPropsTo(h({className:"uiPopover",ref:"root",disabled:null},this.props.children));},componentWillUnmount:function(){if(this._menuSubscriptions){this._menuSubscriptions.release();this._menuSubscriptions=null;}},_createMenu:function(r){var s=new r.ctor(r.menuitems,r.config);this._menuSubscriptions=new m();if(r.onItemClick)this._menuSubscriptions.addSubscriptions(s.subscribe('itemclick',r.onItemClick));if(r.onItemFocus)this._menuSubscriptions.addSubscriptions(s.subscribe('focus',r.onItemFocus));if(r.onItemBlur)this._menuSubscriptions.addSubscriptions(s.subscribe('blur',r.onItemBlur));if(r.onChange)this._menuSubscriptions.addSubscriptions(s.subscribe('change',r.onChange));if(this.props.onShow)this._menuSubscriptions.addSubscriptions(this._popover.subscribe('show',this.props.onShow));if(this.props.onHide)this._menuSubscriptions.addSubscriptions(this._popover.subscribe('hide',this.props.onHide));return s;},showPopover:function(r){this._popover.showLayer();if(r){var s=this._popoverMenu.getMenu();s.blur();s.focusAnItem(r);}},hidePopover:function(){this._popover.hideLayer();},getFocusedItem:function(){var r=this._popoverMenu.getMenu();return r.getFocusedItem();}});e.exports=q;});
__d("ReactMenu",["Menu","MenuItem","MenuSelectableItem","MenuTheme","SelectableMenu","cx","flattenArray","joinClasses","merge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var p=Array.prototype.slice;function q(s){s.mountComponentIntoNode=true;}function r(s,t){if(!Array.isArray(t))t=p.call(arguments,1);var u={ctor:g,menuitems:m(t||[]),config:{theme:j,maxheight:s?s.maxheight:null,className:s?s.className:null}};return o(u,s);}r.SelectableMenu=function(s,t){if(!Array.isArray(t))t=p.call(arguments,1);var u={ctor:k,menuitems:m(t),config:{className:n("_57di",s?s.className:null),theme:j,multiple:s&&s.multiple,maxheight:s?s.maxheight:null}};return o(u,s);};r.Item=function(s,t){if(!Array.isArray(t))t=p.call(arguments,1);var u={ctor:h,reactChildren:t};q(u);return o(u,s);};r.SelectableItem=function(s,t){if(!Array.isArray(t))t=p.call(arguments,1);var u={ctor:i,reactChildren:t};q(u);return o(u,s);};r.putOnReactComponentCostume=q;e.exports=r;});
__d("ReactXUIMenu",["ReactMenu","XUIMenuTheme"],function(a,b,c,d,e,f,g,h){function i(j,k){if(!Array.isArray(k))k=Array.prototype.slice.call(arguments,1);var l=g.apply(null,arguments);l.config.theme=h;return l;}i.SelectableMenu=function(j,k){if(!Array.isArray(k))k=Array.prototype.slice.call(arguments,1);var l=g.SelectableMenu(j,k);l.config.theme=h;return l;};i.Item=g.Item;i.SelectableItem=g.SelectableItem;e.exports=i;});
__d("UFIOrderingModeSelector.react",["InlineBlock.react","Link.react","LoadingIndicator.react","React","Image.react","ReactXUIMenu","PopoverMenu.react","cx","ix"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var p=l.SelectableMenu,q=l.SelectableItem,r=j.createClass({displayName:'UFIOrderingModeSelector',getInitialState:function(){var s=null;this.props.orderingmodes.map(function(t){if(t.selected)s=t;});return {selectedMode:s};},onMenuItemClick:function(s,t){var u=t.item.getValue();this.props.orderingmodes.map(function(v){if(v.value===u)this.setState({selectedMode:v});}.bind(this));this.props.onOrderChanged(u);},render:function(){var s=null;if(this.props.currentOrderingMode!=this.state.selectedMode.value)s=i({className:"UFIOrderingModeSelectorLoading",color:"white",size:"small"});var t=p({onItemClick:this.onMenuItemClick},this.props.orderingmodes.map(function(u){return (q({key:u.value,value:u.value,selected:u.value===this.state.selectedMode.value},u.name));}.bind(this)));return (j.DOM.div({className:"UFIOrderingModeSelector"},s,g(null,m({className:"UFIOrderingModeSelectorPopover",menu:t,alignh:"right"},h(null,this.state.selectedMode.name,k({className:"UFIOrderingModeSelectorDownCaret",src:o('/images/ui/xhp/link/more/down_caret.gif')}))))));}});e.exports=r;});