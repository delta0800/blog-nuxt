exports.ids=[8],exports.modules={111:function(t,e,o){"use strict";o.r(e);var r={props:{projectList:{type:Array,default:null}}},c=o(1);var n={components:{ProjectItem:Object(c.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"project-item-container"},[t._ssrNode(t._ssrList(t.projectList,(function(e){return"<a"+t._ssrAttr("href",e.project_url)+t._ssrAttr("title","项目地址: "+e.project_url||!1)+' target="_block" class="project-item pointer" data-v-c0938f5e><div class="img-box" data-v-c0938f5e><img'+t._ssrAttr("src",e.img_url)+' alt="图片不见了" data-v-c0938f5e></div> <div class="content" data-v-c0938f5e><h3 data-v-c0938f5e>'+t._ssrEscape(t._s(e.project_name))+"</h3> <p data-v-c0938f5e>"+t._ssrEscape(t._s(e.desc))+"</p></div></a>"})))])}),[],!1,(function(t){var e=o(95);e.__inject__&&e.__inject__(t)}),"c0938f5e","564ce752").exports},head:{title:"独行的博客-作品"},data:()=>({projectList:[]}),created(){this.getProject()},methods:{async getProject(){const t=await this.$axios("/project");this.projectList=t.data.data}}},d=Object(c.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("project-item",{staticClass:"project",attrs:{projectList:this.projectList}})],1)}),[],!1,null,null,"4d9e99fb");e.default=d.exports},69:function(t,e,o){var content=o(96);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=o(3).default;t.exports.__inject__=function(t){r("7fc56098",content,!0,t)}},95:function(t,e,o){"use strict";o.r(e);var r=o(69),c=o.n(r);for(var n in r)"default"!==n&&function(t){o.d(e,t,(function(){return r[t]}))}(n);e.default=c.a},96:function(t,e,o){(t.exports=o(2)(!1)).push([t.i,".project-item-container[data-v-c0938f5e]{color:#000;width:70%;margin:0 auto;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:start;justify-content:flex-start;flex-wrap:wrap}.project-item-container .project-item[data-v-c0938f5e]{position:relative;width:300px;height:400px;margin:20px 10px;background:#666;box-shadow:0 30px 30px rgba(0,0,0,.5)}.project-item-container .project-item:hover .img-box img[data-v-c0938f5e]{opacity:0}.project-item-container .project-item .img-box[data-v-c0938f5e],.project-item-container .project-item .img-box img[data-v-c0938f5e]{position:absolute;top:0;left:0;width:100%;height:100%}.project-item-container .project-item .img-box img[data-v-c0938f5e]{-o-object-fit:cover;object-fit:cover;-webkit-transition:.5s;transition:.5s}.project-item-container .project-item .content[data-v-c0938f5e]{position:absolute;bottom:20px;left:20px;left:10%;width:80%;height:50px;background:#f1f1f1;-webkit-transition:.3s;transition:.3s;overflow:hidden;padding:15px;color:#515a6e}.project-item-container .project-item .content h3[data-v-c0938f5e]{margin:0;padding:0;font-size:20px;text-align:center}.project-item-container .project-item .content p[data-v-c0938f5e]{margin:10px 0 0;padding:0;opacity:0;line-height:1.2em;-webkit-transition:.3s;transition:.3s;text-align:justify}.project-item-container .project-item:hover .content[data-v-c0938f5e]{width:100%;height:100%;bottom:0;left:0}.project-item-container .project-item:hover .content p[data-v-c0938f5e]{opacity:1;-webkit-transition-delay:.3s;transition-delay:.3s}",""])}};