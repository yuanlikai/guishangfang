webpackJsonp([9],{fbdp:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={data:function(){var t=this;return{state:0,admin_id:"",disabled:!1,positLi:[],poist:[],modal1:!1,pag:1,loading2:!0,loading1:!0,total:0,columns1:[{title:"ID",key:"leave_id",align:"center",width:50},{title:"用户ID",key:"user_id",align:"center",width:120},{title:"手机号",key:"user_mobile",align:"center",width:150},{title:"留言内容",key:"leave_info"},{title:"操作",align:"center",width:150,render:function(e,a){return e("div",[e("Poptip",{props:{confirm:!0,transfer:!0,title:"是否继续删除该职位?"},on:{"on-ok":function(){var e=t;e.Axios.post("/api/index.php/admin/leave/del",e.Qs.stringify({leave_id:a.row.leave_id})).then(function(t,a){0===t.data.error?e.positList():e.$Message.error(t.data.errMsg)})}}},[e("Button",{props:{type:"error",size:"small"}},"删除")])])}}],data1:[]}},methods:{positList:function(){var t=this;t.loading2=!0,t.Axios.post("/api/index.php/admin/leave/index",t.Qs.stringify({pag:t.pag,num:11})).then(function(e,a){console.log(e.data),t.loading2=!1,0===e.data.error?(t.data1=e.data.data.info,t.total=e.data.data.nodes):t.$Message.error(e.data.errMsg)})},page:function(t){this.pag=t,this.positList()},cancel:function(){this.$Message.info("你点击了取消")}},mounted:function(){this.positList()}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",{style:{padding:"0 24px 24px"}},[a("Breadcrumb",{style:{margin:"24px 0"}},[a("BreadcrumbItem",[t._v("意见反馈")])],1),t._v(" "),a("Content",{style:{padding:"24px",minHeight:"280px",background:"#fff"}},[a("Table",{attrs:{loading:t.loading2,columns:t.columns1,data:t.data1,height:"568",border:""}})],1),t._v(" "),a("div",{staticStyle:{float:"left",width:"100%","text-align":"center","margin-top":"25px"}},[a("Page",{attrs:{total:t.total,"page-size":11},on:{"on-change":t.page}})],1)],1)},staticRenderFns:[]};var o=a("VU/8")(i,n,!1,function(t){a("gx33")},null,null);e.default=o.exports},gx33:function(t,e){}});
//# sourceMappingURL=9.dfe7de94df3512898847.js.map