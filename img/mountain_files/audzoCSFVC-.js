/*!CK:1786697287!*//*1392822888,178175255*/

if (self.CavalryLogger) { CavalryLogger.start_js(["bgqdJ"]); }

__d("FundingSourceForRecharge",["AsyncRequest","AdManagerFunding"],function(a,b,c,d,e,f,g,h){var i=123097351040126,j={addNewFundingSource:function(k,l){function m(n){if(n.credential_state)new g().setURI('/ajax/ads/aymt/tips/unsettled_account/recharge/').setMethod('POST').setData({ad_account_id:k,added_funding_source:true}).send();}h.addCredential(l,i,k,null,m);}};e.exports=j;});
__d("AYMTTipLogger",["Event","AsyncRequest"],function(a,b,c,d,e,f,g,h){var i={init:function(j,k,l,m,n){g.listen(j,'click',function(event){new h('/ajax/ads/aymt/logging/click').setData({tip_class:k,signature:l,conversion_type:m,extra_data:n}).send();});}};e.exports=i;});