webpackJsonp([17],{R35P:function(t,e){},iwkE:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={data:function(){var t=this;return{state:0,admin_id:"",disabled:!1,positLi:[],poist:[],modal1:!1,pag:1,loading2:!0,loading1:!0,total:0,columns1:[{title:"ID",key:"order_id",align:"center",width:50},{title:"用户ID",key:"user_id",align:"center"},{title:"用户名称",key:"user_name",align:"center"},{title:"楼盘名称",key:"hou_ses_name",align:"center"},{title:"开发商名称",key:"developers_name",align:"center"},{title:"支付状态",key:"order_status",align:"center",render:function(t,e){return t("div",[t("p",0===e.row.order_status?"待支付":"已支付")])}},{title:"支付方式",key:"order_pay",align:"center",render:function(t,e){var a=void 0;switch(e.row.order_pay){case 0:a="支付宝";break;case 1:a="微信";break;case 2:a=银联}return t("div",[t("p",a)])}},{title:"支付时间",key:"addtime",align:"center",width:150,render:function(e,a){return e("div",[e("p",t.timestampToTime(a.row.addtime))])}}],data1:[]}},methods:{positList:function(){var t=this;t.loading2=!0,t.Axios.post("https://app.gsfzd.com/index.php/admin/order/index",t.Qs.stringify({pag:t.pag,num:11})).then(function(e,a){console.log(e.data),t.loading2=!1,0===e.data.error?(t.data1=e.data.data.info,t.total=e.data.data.nodes):t.$Message.error(e.data.errMsg)})},page:function(t){this.pag=t,this.positList()},cancel:function(){this.$Message.info("你点击了取消")}},mounted:function(){this.positList()}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",{style:{padding:"0 24px 24px"}},[a("Breadcrumb",{style:{margin:"24px 0"}},[a("BreadcrumbItem",[t._v("订单管理")])],1),t._v(" "),a("Content",{style:{padding:"24px",minHeight:"280px",background:"#fff"}},[a("Table",{attrs:{loading:t.loading2,columns:t.columns1,data:t.data1,height:"568",border:""}})],1),t._v(" "),a("div",{staticStyle:{float:"left",width:"100%","text-align":"center","margin-top":"25px"}},[a("Page",{attrs:{total:t.total,"page-size":11},on:{"on-change":t.page}})],1)],1)},staticRenderFns:[]};var r=a("VU/8")(n,i,!1,function(t){a("R35P")},null,null);e.default=r.exports}});
//# sourceMappingURL=17.c83f51419655161bd9cb.js.map