/*!CK:1400632151!*//*1392822797,178138177*/

if (self.CavalryLogger) { CavalryLogger.start_js(["NmrNl"]); }

__d("XGamesGripperNoteUpdaterControllerURIBuilder",["XControllerURIBuilder"],function(a,b,c,d,e,f,g){e.exports=g.create("\/async\/games\/gripper_note_viewed\/",{});});
__d("SidebarAppTickerResizer",["Animation","Arbiter","AsyncRequest","ChatSidebar","CSS","debounce","DOMQuery","Event","SimpleDrag","$","XGamesGripperNoteUpdaterControllerURIBuilder"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q=1e-07,r=1,s=92,t=185,u=85,v=173,w=300,x=46,y=90;function z(aa,ba,ca,da,ea){"use strict";this.$SidebarAppTickerResizer0=p('pagelet_ticker');this.$SidebarAppTickerResizer1=p('pagelet_canvas_nav_content');this.$SidebarAppTickerResizer2=this.$SidebarAppTickerResizer0.parentNode;this.$SidebarAppTickerResizer3=ea;this.$SidebarAppTickerResizer1.style.height=ca;this.$SidebarAppTickerResizer4(aa,ba);if(typeof(ca)==='undefined'||ca===null){this.$SidebarAppTickerResizer5();this.$SidebarAppTickerResizer6(this.$SidebarAppTickerResizer7());}if(da){var fa=m.scry(document.body,'#pagelet_ticker')[0],ga=fa&&fa.parentNode,ha,ia=function(){if(!k.shown(ga))return;var ja=b('XGamesGripperNoteUpdaterControllerURIBuilder'),ka=(new ja()).getURI();new i().setURI(ka).send();da.show();if(ha)ha.unsubscribe();};if(ga&&k.shown(ga)){ia();}else ha=h.subscribe('ticker/show',ia);}this.$SidebarAppTickerResizer8=l(this.$SidebarAppTickerResizer5.bind(this),200);n.listen(window,'resize',this.$SidebarAppTickerResizer8);}z.prototype.$SidebarAppTickerResizer5=function(){"use strict";this.$SidebarAppTickerResizer9();if(this.$SidebarAppTickerResizera&&this.$SidebarAppTickerResizera>r){var aa=(this.$SidebarAppTickerResizera/this.$SidebarAppTickerResizerb)*100,ba=this.$SidebarAppTickerResizerc(0,y-aa);this.$SidebarAppTickerResizerd(ba);}};z.prototype.$SidebarAppTickerResizer4=function(aa,ba){"use strict";var ca=new o(aa);ca.subscribe('start',this.$SidebarAppTickerResizere.bind(this));ca.subscribe(['update','end'],this.$SidebarAppTickerResizerf.bind(this));var da=new o(ba);da.subscribe('start',this.$SidebarAppTickerResizere.bind(this));da.subscribe('update',this.$SidebarAppTickerResizerg.bind(this));da.subscribe('end',this.$SidebarAppTickerResizerh.bind(this));};z.prototype.$SidebarAppTickerResizere=function(aa,event){"use strict";this.$SidebarAppTickerResizeri=event.clientY;this.$SidebarAppTickerResizer9();};z.prototype.$SidebarAppTickerResizer9=function(){"use strict";this.$SidebarAppTickerResizerj=this.$SidebarAppTickerResizer0.offsetHeight;this.$SidebarAppTickerResizerb=this.$SidebarAppTickerResizer2.offsetHeight;this.$SidebarAppTickerResizera=this.$SidebarAppTickerResizer1.offsetHeight;this.$SidebarAppTickerResizerk=this.$SidebarAppTickerResizera;};z.prototype.$SidebarAppTickerResizerf=function(aa,event){"use strict";var ba=(this.$SidebarAppTickerResizera/this.$SidebarAppTickerResizerb)*100,ca=this.$SidebarAppTickerResizerc(event.clientY-this.$SidebarAppTickerResizeri,y-ba);if(aa=='end'){this.$SidebarAppTickerResizerd(ca);h.inform('Ticker/resized');}j.resize();};z.prototype.$SidebarAppTickerResizerg=function(aa,event){"use strict";var ba=-this.$SidebarAppTickerResizera,ca=this.$SidebarAppTickerResizer7()-this.$SidebarAppTickerResizera,da=this.$SidebarAppTickerResizerl(event.clientY-this.$SidebarAppTickerResizeri,ba,ca);this.$SidebarAppTickerResizerc(-da,y);this.$SidebarAppTickerResizerk=this.$SidebarAppTickerResizera+da;this.$SidebarAppTickerResizerk=Math.max(r,this.$SidebarAppTickerResizerk);this.$SidebarAppTickerResizer1.style.height=this.$SidebarAppTickerResizerk+'px';};z.prototype.$SidebarAppTickerResizerh=function(aa,event){"use strict";var ba=this.$SidebarAppTickerResizerk,ca=this.$SidebarAppTickerResizern(this.$SidebarAppTickerResizerk),da=this.$SidebarAppTickerResizerc(this.$SidebarAppTickerResizera-ca,y);if(this.$SidebarAppTickerResizera!=ca){this.$SidebarAppTickerResizer6(ca);this.$SidebarAppTickerResizerd(da);h.inform('Ticker/resized');}new g(this.$SidebarAppTickerResizer1).from('height',ba).to('height',ca).duration(w).go();};z.prototype.$SidebarAppTickerResizerc=function(aa,ba){"use strict";var ca=this.$SidebarAppTickerResizerj+aa,da=(ca/this.$SidebarAppTickerResizerb)*100;da=Math.max(q,Math.min(ba,da));this.$SidebarAppTickerResizer0.style.height=da+'%';return da;};z.prototype.$SidebarAppTickerResizern=function(aa){"use strict";var ba=this.$SidebarAppTickerResizero(),ca=this.$SidebarAppTickerResizer7();return (aa<(ca-x))?((aa<(ba-x))?r:ba):ca;};z.prototype.$SidebarAppTickerResizero=function(){"use strict";return this.$SidebarAppTickerResizer3?u:s;};z.prototype.$SidebarAppTickerResizer7=function(){"use strict";return this.$SidebarAppTickerResizer3?v:t;};z.prototype.$SidebarAppTickerResizerp=function(aa){"use strict";var ba=this.$SidebarAppTickerResizer7();return (aa<0)?r:(aa>ba?ba:aa);};z.prototype.$SidebarAppTickerResizerl=function(aa,ba,ca){"use strict";return (aa<ba)?ba:((aa>ca)?ca:aa);};z.prototype.$SidebarAppTickerResizerd=function(aa){"use strict";new i('/ajax/feed/ticker/resize').setData({height:''+aa}).setMethod('POST').send();};z.prototype.$SidebarAppTickerResizer6=function(aa){"use strict";new i('/ajax/feed/apps/resize').setData({height:''+aa}).setMethod('POST').send();};e.exports=z;});