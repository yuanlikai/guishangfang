webpackJsonp([0],{"66U2":function(t,s){},AdD9:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("oCJy"),n={components:{expandRow:e.a},data:function(){var t=this;return{state:0,admin_id:"",disabled:!1,positLi:[],poist:[],modal1:!1,pag:1,loading2:!0,loading1:!0,total:0,columns10:[{type:"expand",width:50,render:function(t,s){return t(e.a,{props:{row:s.row}})}},{title:"ID",align:"center",key:"user_post_id",width:50},{title:"标题",key:"user_post_title"},{title:"小区名",key:"user_post_plot"},{title:"地址",key:"user_address"},{title:"户型",key:"age",render:function(t,s){return t("div",[t("p",s.row.user_post_room+"室"+s.row.user_post_type.split(",")[0]+"室"+s.row.user_post_type.split(",")[1]+"卫")])}},{title:"总价(¥)",key:"user_post_pirce"},{title:"房屋类型",key:"hou_type_title"},{title:"操作",align:"center",width:100,render:function(s,a){return s("div",[s("Poptip",{props:{confirm:!0,transfer:!0,title:"是否继续删除该个人房源?"},on:{"on-ok":function(){var s=t;s.Axios.post("/api/index.php/admin/user/postDel",s.Qs.stringify({user_post_id:a.row.user_post_id})).then(function(t,a){0===t.data.error?s.positList():s.$Message.error(t.data.errMsg)})}}},[s("Button",{props:{type:"error",size:"small"}},"删除")])])}}],data9:[]}},methods:{positList:function(){var t=this;t.loading2=!0,t.Axios.post("/api/index.php/admin/user/OkAudit",t.Qs.stringify({pag:t.pag,num:11})).then(function(s,a){console.log(s.data),t.loading2=!1,0===s.data.error?(t.data9=s.data.data.info,t.total=s.data.data.nodes):t.$Message.error(s.data.errMsg)})},page:function(t){this.pag=t,this.positList()},cancel:function(){this.$Message.info("你点击了取消")}},mounted:function(){this.positList()}},o={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("Layout",{style:{padding:"0 24px 24px"}},[a("Breadcrumb",{style:{margin:"24px 0"}},[a("BreadcrumbItem",[t._v("个人房源已审核")])],1),t._v(" "),a("Content",{style:{padding:"24px",minHeight:"280px",background:"#fff"}},[a("Table",{attrs:{loading:t.loading2,columns:t.columns10,data:t.data9,height:"568",border:""}})],1),t._v(" "),a("div",{staticStyle:{float:"left",width:"100%","text-align":"center","margin-top":"25px"}},[a("Page",{attrs:{total:t.total,"page-size":11},on:{"on-change":t.page}})],1)],1)},staticRenderFns:[]};var r=a("VU/8")(n,o,!1,function(t){a("G5co")},null,null);s.default=r.exports},G5co:function(t,s){},oCJy:function(t,s,a){"use strict";var e={props:{row:Object},data:function(){return{modal1:!1,img:""}},methods:{imgUrl:function(t){this.modal1=!0,this.img=t}}},n={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("Row",{staticClass:"expand-row"},[a("Col",{attrs:{span:"4"}},[a("span",{staticClass:"expand-key"},[t._v("面积: ")]),t._v(" "),a("span",{staticClass:"expand-value"},[t._v(t._s(t.row.user_post_area)+"m²")])]),t._v(" "),a("Col",{attrs:{span:"3"}},[a("span",{staticClass:"expand-key"},[t._v("装修: ")]),t._v(" "),a("span",{staticClass:"expand-value"},[t._v(t._s(t.row.user_post_adron))])]),t._v(" "),a("Col",{attrs:{span:"3"}},[a("span",{staticClass:"expand-key"},[t._v("朝向: ")]),t._v(" "),a("span",{staticClass:"expand-value"},[t._v(t._s(t.row.user_post_aspect))])]),t._v(" "),a("Col",{attrs:{span:"4"}},[a("span",{staticClass:"expand-key"},[t._v("建筑年代: ")]),t._v(" "),a("span",{staticClass:"expand-value"},[t._v(t._s(t.row.user_post_year)+"年")])]),t._v(" "),a("Col",{attrs:{span:"3"}},[a("span",{staticClass:"expand-key"},[t._v("楼层: ")]),t._v(" "),a("span",{staticClass:"expand-value"},[t._v(t._s(t.row.user_post_floor)+" / "+t._s(t.row.user_post_floors))])]),t._v(" "),a("Col",{attrs:{span:"4"}},[a("span",{staticClass:"expand-key"},[t._v("产权年限: ")]),t._v(" "),a("span",{staticClass:"expand-value"},[t._v(t._s(t.row.user_post_right)+"年")])]),t._v(" "),a("Col",{attrs:{span:"3"}},[a("span",{staticClass:"expand-key"},[t._v("状态: ")]),t._v(" "),a("span",{staticClass:"expand-value"},[t._v(t._s(0===t.row.user_post_audit?"已审核":"未审核"))])])],1),t._v(" "),a("Row",{staticClass:"expand-row"},[a("Col",{attrs:{span:"24"}},[a("span",{staticClass:"expand-key"},[t._v("房源相册: ")]),t._v(" "),t._l(JSON.parse(t.row.user_pics),function(s,e){return a("img",{key:e,staticStyle:{height:"20px","margin-right":"6px",cursor:"pointer"},attrs:{src:s.url,alt:""},on:{click:function(a){t.imgUrl(s.url)}}})})],2)],1),t._v(" "),a("Row",[a("Col",{attrs:{span:"24"}},[a("span",{staticClass:"expand-key"},[t._v("详情介绍: ")]),t._v(" "),a("span",{staticClass:"expand-value"},[t._v(t._s(t.row.user_post_content))])])],1),t._v(" "),a("Modal",{attrs:{title:"个人房源相册详情",styles:{textAlign:"center"}},model:{value:t.modal1,callback:function(s){t.modal1=s},expression:"modal1"}},[a("img",{staticStyle:{"max-width":"100%"},attrs:{src:t.img,alt:""}})])],1)},staticRenderFns:[]};var o=a("VU/8")(e,n,!1,function(t){a("66U2")},"data-v-1f5f0b27",null);s.a=o.exports}});
//# sourceMappingURL=0.a2d40839ceeacf2f02ab.js.map