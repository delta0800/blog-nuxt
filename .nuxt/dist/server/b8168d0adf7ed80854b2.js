exports.ids=[7],exports.modules={110:function(e,t,n){"use strict";n.r(t);var r={props:{friendlylinkList:{type:Array,default:null},toolsLinkList:{type:Array,default:null}}},l=n(1);var d={components:{LinkCard:Object(l.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"friendly-comp-page"},[e._ssrNode('<h2 data-v-5e8369b2>友链：</h2> <div class="friendly-container" data-v-5e8369b2>'+e._ssrList(e.friendlylinkList,(function(t){return'<div class="link-item" data-v-5e8369b2><a'+e._ssrAttr("href",t.blog_url)+' target="_block" class="link-item-a" data-v-5e8369b2><div class="link-header" data-v-5e8369b2><img'+e._ssrAttr("src",t.blog_imgurl)+' alt class="link-logo" data-v-5e8369b2> <h3 data-v-5e8369b2>'+e._ssrEscape(e._s(t.blog_name))+'</h3></div> <p class="link-desc" data-v-5e8369b2>'+e._ssrEscape(e._s(t.blog_desc))+"</p></a></div>"}))+'</div> <h2 data-v-5e8369b2>工具：</h2> <div class="friendly-container" data-v-5e8369b2>'+e._ssrList(e.toolsLinkList,(function(t){return'<div class="link-item" data-v-5e8369b2><a'+e._ssrAttr("href",t.blog_url)+' target="_block" class="link-item-a" data-v-5e8369b2><div class="link-header" data-v-5e8369b2><img'+e._ssrAttr("src",t.blog_imgurl)+' alt class="link-logo" data-v-5e8369b2> <h3 data-v-5e8369b2>'+e._ssrEscape(e._s(t.blog_name))+'</h3></div> <p class="link-desc" data-v-5e8369b2>'+e._ssrEscape(e._s(t.blog_desc))+"</p></a></div>"}))+"</div>")])}),[],!1,(function(e){var t=n(93);t.__inject__&&t.__inject__(e)}),"5e8369b2","53eb8194").exports},head:{title:"独行的博客-链接"},data:()=>({friendlylinkList:[],toolsLinkList:[]}),created(){this.getFriendlyLink(),this.getToolsLink()},methods:{async getFriendlyLink(){const e=await this.$axios("/friendlink");this.friendlylinkList=e.data},async getToolsLink(){const e=await this.$axios("/toollink");this.toolsLinkList=e.data}}},o=Object(l.a)(d,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"friendly-page"},[t("LinkCard",{attrs:{friendlylinkList:this.friendlylinkList,toolsLinkList:this.toolsLinkList}})],1)}),[],!1,null,null,"2c793e18");t.default=o.exports},68:function(e,t,n){var content=n(94);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var r=n(3).default;e.exports.__inject__=function(e){r("da38dab2",content,!0,e)}},93:function(e,t,n){"use strict";n.r(t);var r=n(68),l=n.n(r);for(var d in r)"default"!==d&&function(e){n.d(t,e,(function(){return r[e]}))}(d);t.default=l.a},94:function(e,t,n){(e.exports=n(2)(!1)).push([e.i,".friendly-comp-page[data-v-5e8369b2]{width:80%;margin:0 auto;padding-left:10px}.friendly-comp-page h2[data-v-5e8369b2]{margin-left:-20px}.friendly-comp-page .friendly-container[data-v-5e8369b2]{display:-webkit-box;display:flex;flex-wrap:wrap;background:#fff}.friendly-comp-page .friendly-container .link-item[data-v-5e8369b2]{margin:20px 12px 10px;border-radius:5px;-webkit-transition:.6s;transition:.6s;background:linear-gradient(225deg,transparent 15px,#6a82ce 0) 100%,linear-gradient(45deg,transparent 15px,#826dc2 0) 0;background-size:50% 100%;background-repeat:no-repeat}.friendly-comp-page .friendly-container .link-item:hover .link-item-a>.link-header>.link-logo[data-v-5e8369b2]{-webkit-transform:translateY(0);transform:translateY(0)}.friendly-comp-page .friendly-container .link-item .link-item-a[data-v-5e8369b2]{width:280px;height:150px;display:block;color:#fff}.friendly-comp-page .friendly-container .link-item .link-item-a .link-header[data-v-5e8369b2]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.friendly-comp-page .friendly-container .link-item .link-item-a .link-header .link-logo[data-v-5e8369b2]{width:50px;height:50px;margin:10px;border-radius:50%;-webkit-transition:.3s;transition:.3s;-webkit-transform:translateY(-24px);transform:translateY(-24px)}.friendly-comp-page .friendly-container .link-item .link-item-a .link-desc[data-v-5e8369b2]{text-indent:32px;padding:0 10px;line-height:20px;margin:0;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden;text-overflow:ellipsis}",""])}};