(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cfad0"],{6572:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content element-doc"},[n("h1",[e._v("列配置")]),n("h2",[e._v("复选框")]),n("kv-code-snippet",[n("div"),n("element-demo0",{attrs:{slot:"source"},slot:"source"}),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <kv-datagrid :columns="columns" :data="data"></kv-datagrid>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { type: "checkbox" },\n          { key: "name", title: "姓名" },\n          { key: "age", title: "年龄" },\n          { key: "address", title: "地址" }\n        ],\n        data: [\n          {\n            key: "1",\n            name: "John Brown",\n            age: 16,\n            address: "New York No. 1 Lake Park"\n          },\n          {\n            key: "2",\n            name: "Jim Green",\n            age: 18,\n            address: "London No. 1 Lake Park"\n          },\n          {\n            key: "3",\n            name: "Joe Black",\n            age: 30,\n            address: "Sidney No. 1 Lake Park"\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n')])])])],2),n("h2",[e._v("行号")]),n("kv-code-snippet",[n("div"),n("element-demo1",{attrs:{slot:"source"},slot:"source"}),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <kv-datagrid :columns="columns" :data="data"></kv-datagrid>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { type: "index" },\n          { key: "name", title: "姓名" },\n          { key: "age", title: "年龄" },\n          { key: "address", title: "地址" }\n        ],\n        data: [\n          {\n            key: "1",\n            name: "John Brown",\n            age: 16,\n            address: "New York No. 1 Lake Park"\n          },\n          {\n            key: "2",\n            name: "Jim Green",\n            age: 18,\n            address: "London No. 1 Lake Park"\n          },\n          {\n            key: "3",\n            name: "Joe Black",\n            age: 30,\n            address: "Sidney No. 1 Lake Park"\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n')])])])],2),n("h2",[e._v("固定列")]),n("kv-code-snippet",[n("div"),n("element-demo2",{attrs:{slot:"source"},slot:"source"}),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <div style="max-width:1980px;">\n    <kv-datagrid :columns="columns" :data="data"></kv-datagrid>\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { key: "name", title: "姓名", width: 120, fixed: "left" },\n          { key: "age", title: "年龄", width: 80, fixed: "left" },\n          { key: "weight", title: "体重", width: 80, fixed: "left" },\n          { key: "height", title: "身高", width: 200 },\n          { key: "value1", title: "指标1", width: 200 },\n          { key: "value2", title: "指标2", width: 200 },\n          { key: "value3", title: "指标3", width: 200 },\n          { key: "value4", title: "指标4", width: 200 },\n          { key: "value5", title: "指标5", width: 200 },\n          { key: "status", title: "健康状况", width: 200, fixed: "right" }\n        ],\n        data: [\n          {\n            name: "tom",\n            age: 18,\n            weight: 60,\n            height: 180,\n            value1: 1,\n            value2: 2,\n            value3: 3,\n            value4: 4,\n            value5: 5,\n            status: "良好"\n          },\n          {\n            name: "tom",\n            age: 18,\n            weight: 60,\n            height: 180,\n            value1: 1,\n            value2: 2,\n            value3: 3,\n            value4: 4,\n            value5: 5,\n            status: "良好"\n          },\n          {\n            name: "tom",\n            age: 18,\n            weight: 60,\n            height: 180,\n            value1: 1,\n            value2: 2,\n            value3: 3,\n            value4: 4,\n            value5: 5,\n            status: "良好"\n          },\n          {\n            name: "tom",\n            age: 18,\n            weight: 60,\n            height: 180,\n            value1: 1,\n            value2: 2,\n            value3: 3,\n            value4: 4,\n            value5: 5,\n            status: "良好"\n          },\n          {\n            name: "tom",\n            age: 18,\n            weight: 60,\n            height: 180,\n            value1: 1,\n            value2: 2,\n            value3: 3,\n            value4: 4,\n            value5: 5,\n            status: "良好"\n          },\n          {\n            name: "tom",\n            age: 18,\n            weight: 60,\n            height: 180,\n            value1: 1,\n            value2: 2,\n            value3: 3,\n            value4: 4,\n            value5: 5,\n            status: "良好"\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n')])])])],2)],1)},l=[],i=n("cebc"),d={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("kv-datagrid",{attrs:{columns:e.columns,data:e.data}})]],2)},t=[],n={data:function(){return{columns:[{type:"checkbox"},{key:"name",title:"姓名"},{key:"age",title:"年龄"},{key:"address",title:"地址"}],data:[{key:"1",name:"John Brown",age:16,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:18,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:30,address:"Sidney No. 1 Lake Park"}]}}};return Object(i["a"])({},n,{render:e,staticRenderFns:t})}(),"element-demo1":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("kv-datagrid",{attrs:{columns:e.columns,data:e.data}})]],2)},t=[],n={data:function(){return{columns:[{type:"index"},{key:"name",title:"姓名"},{key:"age",title:"年龄"},{key:"address",title:"地址"}],data:[{key:"1",name:"John Brown",age:16,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:18,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:30,address:"Sidney No. 1 Lake Park"}]}}};return Object(i["a"])({},n,{render:e,staticRenderFns:t})}(),"element-demo2":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("div",{staticStyle:{"max-width":"1980px"}},[n("kv-datagrid",{attrs:{columns:e.columns,data:e.data}})],1)]],2)},t=[],n={data:function(){return{columns:[{key:"name",title:"姓名",width:120,fixed:"left"},{key:"age",title:"年龄",width:80,fixed:"left"},{key:"weight",title:"体重",width:80,fixed:"left"},{key:"height",title:"身高",width:200},{key:"value1",title:"指标1",width:200},{key:"value2",title:"指标2",width:200},{key:"value3",title:"指标3",width:200},{key:"value4",title:"指标4",width:200},{key:"value5",title:"指标5",width:200},{key:"status",title:"健康状况",width:200,fixed:"right"}],data:[{name:"tom",age:18,weight:60,height:180,value1:1,value2:2,value3:3,value4:4,value5:5,status:"良好"},{name:"tom",age:18,weight:60,height:180,value1:1,value2:2,value3:3,value4:4,value5:5,status:"良好"},{name:"tom",age:18,weight:60,height:180,value1:1,value2:2,value3:3,value4:4,value5:5,status:"良好"},{name:"tom",age:18,weight:60,height:180,value1:1,value2:2,value3:3,value4:4,value5:5,status:"良好"},{name:"tom",age:18,weight:60,height:180,value1:1,value2:2,value3:3,value4:4,value5:5,status:"良好"},{name:"tom",age:18,weight:60,height:180,value1:1,value2:2,value3:3,value4:4,value5:5,status:"良好"}]}}};return Object(i["a"])({},n,{render:e,staticRenderFns:t})}()}},s=d,u=n("2877"),r=Object(u["a"])(s,a,l,!1,null,null,null);t["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0cfad0.af226310.js.map