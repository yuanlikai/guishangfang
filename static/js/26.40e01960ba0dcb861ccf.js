webpackJsonp([26],{"8Zzz":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={data:function(){var t=this;return{state:0,admin_id:"",disabled:!1,positLi:[],poist:[],modal1:!1,pag:1,loading2:!0,loading1:!0,total:0,columns1:[{title:"ID",key:"agent_crit_id",align:"center",width:50},{title:"中介ID",key:"agent_id",align:"center",width:80},{title:"用户ID",key:"user_id",align:"center",width:80},{title:"用户昵称",key:"agent_user_nick",align:"center",width:200},{title:"评论内容",key:"agent_info"},{title:"操作",align:"center",width:150,render:function(e,n){return e("div",[e("Poptip",{props:{confirm:!0,transfer:!0,title:"是否继续审核该楼盘评论?"},on:{"on-ok":function(){var e=t;e.Axios.post("https://app.gsfzd.com/index.php/admin/agent/shen",e.Qs.stringify({agent_crit_id:n.row.agent_crit_id,agent_isadout:0})).then(function(t,n){0===t.data.error?(e.positList(),e.$Message.success("审核成功")):e.$Message.error(t.data.errMsg)})}}},[e("Button",{props:{type:"success",size:"small"},style:{marginRight:"5px"}},"审核")]),e("Poptip",{props:{confirm:!0,transfer:!0,title:"是否继续删除该楼盘评论?"},on:{"on-ok":function(){var e=t;e.Axios.post("https://app.gsfzd.com/index.php/admin/agent/pingLunDel",e.Qs.stringify({agent_crit_id:n.row.agent_crit_id})).then(function(t,n){0===t.data.error?e.positList():e.$Message.error(t.data.errMsg)})}}},[e("Button",{props:{type:"error",size:"small"}},"删除")])])}}],data1:[]}},methods:{positList:function(){var t=this;t.loading2=!0,t.Axios.post("https://app.gsfzd.com/index.php/admin/agent/pingLun",t.Qs.stringify({pag:t.pag,num:11})).then(function(e,n){console.log(e.data.data),t.loading2=!1,0===e.data.error?(t.data1=e.data.data.info,t.total=e.data.data.nodes):t.$Message.error(e.data.errMsg)})},page:function(t){this.pag=t,this.positList()},cancel:function(){this.$Message.info("你点击了取消")}},mounted:function(){this.positList()}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",{style:{padding:"0 24px 24px"}},[n("Breadcrumb",{style:{margin:"24px 0"}},[n("BreadcrumbItem",[t._v("中介评论未审核")])],1),t._v(" "),n("Content",{style:{padding:"24px",minHeight:"280px",background:"#fff"}},[n("Table",{attrs:{loading:t.loading2,columns:t.columns1,data:t.data1,height:"568",border:""}})],1),t._v(" "),n("div",{staticStyle:{float:"left",width:"100%","text-align":"center","margin-top":"25px"}},[n("Page",{attrs:{total:t.total,"page-size":11},on:{"on-change":t.page}})],1)],1)},staticRenderFns:[]};var s=n("VU/8")(i,a,!1,function(t){n("KF8j")},null,null);e.default=s.exports},KF8j:function(t,e){}});
//# sourceMappingURL=26.40e01960ba0dcb861ccf.js.map