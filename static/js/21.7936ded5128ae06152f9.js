webpackJsonp([21],{pRdZ:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i={data:function(){var t=this;return{state:0,hou_size_id:"",formValidate:{name:""},poist:[],ruleValidate:{name:[{required:!0,message:"请输入楼盘类型名称!",trigger:"blur"}]},modal1:!1,pag:1,loading2:!0,loading1:!0,total:0,columns1:[{title:"ID",key:"hou_size_id"},{title:"类型名称",key:"hou_size_info"},{title:"操作",align:"center",render:function(a,e){return a("div",[a("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){var a=t;a.state=1,a.modal1=!0,a.loading1=!0,a.hou_size_id=e.row.hou_size_id,a.formValidate.name=e.row.hou_size_info}}},"修改"),a("Poptip",{props:{confirm:!0,transfer:!0,title:"是否继续删除该规格?"},on:{"on-ok":function(){var a=t;a.Axios.post("https://app.gsfzd.com/index.php/admin/hou_size/del",a.Qs.stringify({hou_size_id:e.row.hou_size_id})).then(function(t,e){0===t.data.error?a.positList():a.$Message.error(t.data.errMsg)})}}},[a("Button",{props:{type:"error",size:"small"}},"删除")])])}}],data1:[]}},methods:{shoale:function(){this.$refs.formValidate.resetFields(),this.state=0,this.modal1=!0,this.loading1=!0,console.log(1)},handleSubmit:function(t){var a=this;this.$refs[t].validate(function(t){if(t){var e=a,i={};i=0===e.state?{hou_size_id:"",hou_size_info:e.formValidate.name}:{hou_size_id:e.hou_size_id,hou_size_info:e.formValidate.name},e.Axios.post("https://app.gsfzd.com/index.php/admin/hou_size/add",e.Qs.stringify(i)).then(function(t,a){0===t.data.error?(e.modal1=!1,e.positList(),e.$refs.formValidate.resetFields()):(e.$Message.error(t.data.errMsg),e.loading1=!1)})}else a.$Message.error("添加管理员账号失败!"),a.loading1=!1})},positList:function(){var t=this;t.loading2=!0,t.Axios.post("https://app.gsfzd.com/index.php/admin/hou_size/index",t.Qs.stringify({pag:t.pag,num:11})).then(function(a,e){console.log(a.data.data),t.loading2=!1,0===a.data.error?(t.data1=a.data.data.info,t.total=a.data.data.nodes):t.$Message.error(a.data.errMsg)})},page:function(t){this.pag=t,this.positList()},quanx:function(){var t=this;t.Axios.post("https://app.gsfzd.com/index.php/admin/role/index1").then(function(a,e){0===a.data.error?t.poist=a.data.data:t.$Message.error(a.data.errMsg)})},cancel:function(){this.$Message.info("你点击了取消")}},mounted:function(){this.quanx(),this.positList()}},o={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Layout",{style:{padding:"0 24px 24px"}},[e("Breadcrumb",{style:{margin:"24px 0"}},[e("BreadcrumbItem",[t._v("楼盘管理")]),t._v(" "),e("BreadcrumbItem",[t._v("规格列表")])],1),t._v(" "),e("Content",{style:{padding:"24px",minHeight:"280px",background:"#fff"}},[e("Button",{staticStyle:{"margin-bottom":"15px"},attrs:{type:"primary"},on:{click:function(a){t.shoale()}}},[e("Icon",{attrs:{type:"md-add"}}),t._v("\n      添加规格\n    ")],1),t._v(" "),e("Table",{attrs:{loading:t.loading2,columns:t.columns1,data:t.data1,height:"568",border:""}})],1),t._v(" "),e("div",{staticStyle:{float:"left",width:"100%","text-align":"center","margin-top":"25px"}},[e("Page",{attrs:{total:t.total,"page-size":11},on:{"on-change":t.page}})],1),t._v(" "),e("Modal",{attrs:{title:"请认真填写楼盘规格",loading:t.loading1,styles:{width:"420px"}},on:{"on-ok":function(a){t.handleSubmit("formValidate")},"on-cancel":t.cancel},model:{value:t.modal1,callback:function(a){t.modal1=a},expression:"modal1"}},[e("Form",{ref:"formValidate",attrs:{model:t.formValidate,rules:t.ruleValidate,"label-width":80}},[e("FormItem",{attrs:{label:"类型名称",prop:"name"}},[e("Input",{attrs:{maxlength:18,placeholder:"示例：一室两厅"},model:{value:t.formValidate.name,callback:function(a){t.$set(t.formValidate,"name",a)},expression:"formValidate.name"}})],1)],1)],1)],1)},staticRenderFns:[]};var n=e("VU/8")(i,o,!1,function(t){e("tp5i")},null,null);a.default=n.exports},tp5i:function(t,a){}});
//# sourceMappingURL=21.7936ded5128ae06152f9.js.map