(function(e){function t(t){for(var a,r,d=t[0],l=t[1],s=t[2],c=0,u=[];c<d.length;c++)r=d[c],i[r]&&u.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);h&&h(t);while(u.length)u.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var d=n[r];0!==i[d]&&(a=!1)}a&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={app:0},i={app:0},o=[];function d(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-251989a4":"2c230fa3","chunk-2d0afa3c":"e800122b","chunk-2d0ba870":"62b8f788","chunk-2d0cc013":"e168c198","chunk-2d0cfad0":"d69c6b75","chunk-2d2138c6":"016ea647","chunk-2d217dcf":"f0095df4","chunk-5bc516b4":"9d2f576d"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-5bc516b4":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-251989a4":"31d6cfe0","chunk-2d0afa3c":"31d6cfe0","chunk-2d0ba870":"31d6cfe0","chunk-2d0cc013":"31d6cfe0","chunk-2d0cfad0":"31d6cfe0","chunk-2d2138c6":"31d6cfe0","chunk-2d217dcf":"31d6cfe0","chunk-5bc516b4":"f63291ae"}[e]+".css",i=l.p+a,o=document.getElementsByTagName("link"),d=0;d<o.length;d++){var s=o[d],c=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(c===a||c===i))return t()}var u=document.getElementsByTagName("style");for(d=0;d<u.length;d++){s=u[d],c=s.getAttribute("data-href");if(c===a||c===i)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var a=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.request=a,delete r[e],h.parentNode.removeChild(h),n(o)},h.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(h)}).then(function(){r[e]=0}));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise(function(t,n){a=i[e]=[t,n]});t.push(a[2]=o);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=d(e),s=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");o.type=a,o.request=r,n[1](o)}i[e]=void 0}};var u=setTimeout(function(){s({type:"timeout",target:c})},12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/datagrid/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var h=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1c32":function(e,t,n){},"1e87":function(e,t,n){},2111:function(e,t,n){e.exports=n.p+"img/code.171332f1.svg"},"56d7":function(e,t,n){"use strict";n.r(t);n("ac6a"),n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],o={name:"app"},d=o,l=(n("5c0b"),n("2877")),s=Object(l["a"])(d,r,i,!1,null,null,null),c=s.exports,u=n("8c4f");a["a"].use(u["a"]);var h,p,f,g,v,m,y,x=new u["a"]({routes:[{path:"/",component:function(){return n.e("chunk-5bc516b4").then(n.bind(null,"6511"))},children:[{path:"/",name:"example",component:function(){return n.e("chunk-2d2138c6").then(n.bind(null,"acc1"))}},{path:"/example/basic",name:"example-basic",component:function(){return n.e("chunk-2d2138c6").then(n.bind(null,"acc1"))}},{path:"/example/column",name:"example-column",component:function(){return n.e("chunk-2d0cfad0").then(n.bind(null,"6572"))}},{path:"/example/resize",name:"example-resize",component:function(){return n.e("chunk-2d0ba870").then(n.bind(null,"381f"))}},{path:"/example/style",name:"example-style",component:function(){return n.e("chunk-2d0afa3c").then(n.bind(null,"0ed5"))}},{path:"/example/render",name:"example-render",component:function(){return n.e("chunk-251989a4").then(n.bind(null,"f6f9"))}},{path:"/example/data",name:"example-data",component:function(){return n.e("chunk-2d217dcf").then(n.bind(null,"c914"))}},{path:"/example/pagination",name:"example-pagination",component:function(){return n.e("chunk-2d0cc013").then(n.bind(null,"4ba0"))}}]}]}),b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"kv-code-snippet"},[a("div",{staticClass:"kv-code-snippet--demo"},[e._t("source")],2),a("div",{staticClass:"kv-code-snippet--desc"},[e._t("default"),a("span",{staticClass:"kv-code-snippet--icon-code",on:{click:function(t){e.showCode=!e.showCode}}},[e.showCode?a("img",{attrs:{src:n("caa4")}}):a("img",{attrs:{src:n("2111")}})])],2),a("div",{directives:[{name:"show",rawName:"v-show",value:e.showCode,expression:"showCode"}],staticClass:"kv-code-snippet--code highlight"},[e._t("highlight")],2)])},k=[],w={data:function(){return{showCode:!1}}},C=w,S=(n("a937"),Object(l["a"])(C,b,k,!1,null,"61362286",null)),I=S.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:["kv-datagrid",{"kv-datagrid-border":e.columnRows.length>1||e.border},{"kv-datagrid-stripe":e.stripe}],style:e.tableStyle},[e.showHeader?a("div",{ref:"headerWrapper",staticClass:"kv-datagrid--header",style:{"padding-right":e.vScrollSize+"px"}},[e.leftFixedColumns.length>0?a("div",{staticClass:"kv-datagrid--header-left",style:{width:e.leftBodyWidth+"px"}},[a("table-header",{style:{width:e.bodyWidth+"px"}})],1):e._e(),a("div",{ref:"header",staticClass:"kv-datagrid--header-center"},[a("table-header",{attrs:{"column-rows":e.columnRows}})],1),e.rightFixedColumns.length>0?a("div",{staticClass:"kv-datagrid--header-right",style:{width:e.rightBodyWidth+"px",right:e.vScrollSize+"px"}},[a("table-header",{style:{width:e.bodyWidth+"px"}})],1):e._e()]):e._e(),a("div",{class:["kv-datagird--body",{"kv-datagird--body-vscroll":e.vScrollSize}]},[e.leftFixedColumns.length>0?a("div",{directives:[{name:"mousewheel",rawName:"v-mousewheel",value:e.handleMousewheel,expression:"handleMousewheel"}],ref:"leftBody",staticClass:"kv-datagrid--body-left",style:{width:e.leftBodyWidth+"px",height:e.bodyHeight-e.hScrollSize+"px"}},[a("table-body",{style:{width:e.bodyWidth+"px"}})],1):e._e(),a("div",{ref:"body",staticClass:"kv-datagrid--body-center",style:e.bodyStyle,on:{scroll:e.handleBodyScroll}},[e.dataSource.length>0?a("table-body",{on:{"on-after-render":e.handleBodyLayoutResize}}):a("div",{staticClass:"kv-datagrid--placeholder",style:{width:e.dataSource.length<1?e.bodyWidth+"px":"auto"}},[a("div",{class:["kv-datagrid--placeholder-empty",{"kv-datagrid--placeholder-fit":e.fit}]},[a("div",{staticClass:"kv-datagrid--placeholder-image"},[a("img",{attrs:{src:n("9f55")}})]),a("p",[e._v("暂无数据")])])])],1),e.rightFixedColumns.length>0?a("div",{directives:[{name:"mousewheel",rawName:"v-mousewheel",value:e.handleMousewheel,expression:"handleMousewheel"}],ref:"rightBody",staticClass:"kv-datagrid--body-right",style:{width:e.rightBodyWidth+"px",height:e.bodyHeight-e.hScrollSize+"px",right:e.vScrollSize+"px"}},[a("table-body",{style:{width:e.bodyWidth+"px"}})],1):e._e()]),a("div",{ref:"footerWrapper",staticClass:"kv-datagrid--footer",style:{"padding-right":e.vScrollSize+"px"}},[e.leftFixedColumns.length>0?a("div",{staticClass:"kv-datagrid--body-left",style:{width:e.leftBodyWidth+"px"}},[a("table-footer",{style:{width:e.bodyWidth+"px"}})],1):e._e(),e.footer.length>0?a("div",{ref:"footer",staticClass:"kv-datagrid--footer-center"},[a("table-footer")],1):e._e(),e.rightFixedColumns.length>0?a("div",{staticClass:"kv-datagrid--body-right",style:{width:e.rightBodyWidth+"px",right:e.vScrollSize+"px"}},[a("table-footer",{style:{width:e.bodyWidth+"px"}})],1):e._e()]),e.pagination&&e.dataSource.length>0?a("div",{ref:"page",staticClass:"kv-datagrid--footer-pagination"},[a("table-pagination",{attrs:{"page-total":e.pageTotal,"page-size":e.pageSize,"page-index":e.pageIndex},on:{"on-change":e.handlePageChange}})],1):e._e()])},P=[],N=n("a745"),T=n.n(N),z=(n("d263"),n("55dd"),n("cebc")),E=(n("c5f6"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",{staticClass:"kv-datagrid--header-table",attrs:{cellspacing:"0",cellpadding:"0",border:"0"}},[n("colgroup",e._l(e.leafColumns,function(e,t){return n("col",{key:t,style:e.colStyle})}),0),e._l(e.columnRows,function(t,a){return n("tr",{key:a,staticClass:"kv-datagrid--header-row"},e._l(t,function(e,t){return n("table-column",{key:t,staticClass:"kv-datagrid--header-column",attrs:{column:e}})}),1)}),e._l(e.data,function(t,a){return n("tr",{key:"key_"+a},e._l(e.leafColumns,function(e,r){return n("table-cell",{key:"k_"+r,staticClass:"kv-datagrid--body-cell",attrs:{type:"header",column:e,row:t,"row-index":a}})}),1)})],2)}),H=[],M={inject:["datagrid"],props:{column:{type:Object}},render:function(e){var t=this.column,n=t.title,a=t.columnFormatter,r=t.sort,i=n;a&&(i=a.call(this.datagrid,e,{column:this.column}));var o="";return r&&(o=e("div",{class:"kv-datagrid--column-sort"},[e("i",{class:["kv-datagrid--column-sort-up",{"kv-datagrid--column-sort-active":"asc"==this.orderType}]}),e("i",{class:["kv-datagrid--column-sort-down",{"kv-datagrid--column-sort-active":"desc"==this.orderType}]})])),e("th",{attrs:{colspan:this.column.colSpan,rowspan:this.column.rowSpan},class:this.getColumnClass(),on:{click:this.handleCellClick}},[e("div",{class:"kv-datagird--column-content"},[i]),o])},computed:{orderType:{get:function(){return this.datagrid.orderKey!==this.column.key?null:this.datagrid.orderType},set:function(e){this.datagrid.orderType=e}},orderKey:{get:function(){return this.datagrid.orderKey},set:function(e){this.datagrid.orderKey=e}}},methods:{getColumnClass:function(){var e=this.column,t=e.type,n=e.headerAlign,a=e.sort,r=[];return t&&r.push("kv-datagrid--column-type-".concat(t)),n&&r.push("kv-datagrid--align-".concat(n)),a&&r.push("kv-datagrid--header-sort"),r.join(" ")},sortDataSource:function(){var e=this,t=this.column,n=t.key,a=t.sort;if(a){switch(this.orderKey!==n&&(this.orderType="normal"),this.orderType){case"asc":this.orderType="desc";break;case"desc":this.orderType="normal";break;default:this.orderType="asc";break}this.orderKey=n;var r=this.datagrid.initProxyDataSource(this.datagrid.data);"normal"==this.orderType&&(this.datagrid.dataSource=r),r.sort(function(t,n){return"asc"==e.orderType?t.data[e.orderKey]>n.data[e.orderKey]?1:-1:"desc"==e.orderType?t.data[e.orderKey]>n.data[e.orderKey]?-1:1:void 0}),this.datagrid.dataSource=r}},handleCellClick:function(){this.sortDataSource()}}},$=M,j=Object(l["a"])($,h,p,!1,null,null,null),B=j.exports,O={inject:["datagrid"],props:{type:{type:String,default:"body"},column:{type:Object},row:{type:Object},rowIndex:{type:Number},columnIndex:{type:Number},cellClass:{type:Function},cellStyle:{type:Function}},render:function(e){var t=this.getCellSpan(),n=t.rowspan,a=t.colspan;if(!n||!a)return"";var r=this.column,i=r.key,o=r.headerFormatter,d=r.formatter,l=r.footerFormatter,s=r.render,c=r.edit;o&&"header"===this.type&&(d=o),l&&"footer"===this.type&&(d=l);var u=this.row.data[i],h={data:this.row.data,row:this.row,column:this.column,value:u,index:this.rowIndex};return d&&(u=d.call(this.datagrid,e,h)),s&&(u=s.call(this.datagrid,e,u,h)),this.edit&&c&&(u=c&&c.call(this.datagrid,e,h)),e("td",{attrs:{rowspan:n,colspan:a},style:this.tableCellStyle,on:{click:this.handleCellClick},class:this.tableCellClass},[u])},computed:{tableCellClass:function(){var e=this.column,t=e.type,n=e.align,a=[];if(t&&a.push("kv-datagrid--cell-type-".concat(t)),n&&a.push("kv-datagrid--align-".concat(n)),this.cellClass){var r={index:this.rowIndex,data:this.row.data,row:this.row,column:this.column};a.push(this.cellClass.call(this.datagrid,r))}return a.join(" ")},tableCellStyle:function(){if(this.cellStyle){var e={index:this.rowIndex,data:this.row.data,row:this.row,column:this.column};return this.cellStyle.call(this.datagrid,e)}},edit:function(){var e=this.column.key,t=this.datagrid;return t.editIndex==this.rowIndex&&t.editKey==e}},methods:{handleCellClick:function(){var e=this.column,t=e.edit,n=e.key;t&&n&&(this.datagrid.editIndex=this.rowIndex,this.datagrid.editKey=n)},getCellSpan:function(){var e=1,t=1,n=this.datagrid.cellSpan,a=this.row,r=this.column,i=this.rowIndex,o=this.columnIndex;if(n){var d=n({row:a,column:r,rowIndex:i,columnIndex:o})||{rowspan:e,colspan:t};e=d.rowspan,t=d.colspan}return{rowspan:e,colspan:t}}}},F=O,W=Object(l["a"])(F,f,g,!1,null,null,null),D=W.exports,R={components:{TableColumn:B,TableCell:D},inject:["datagrid"],computed:{data:function(){return this.datagrid.headerDataSource},leafColumns:function(){return this.datagrid.leafColumns},columnRows:function(){return this.datagrid.columnRows}}},A=R,L=Object(l["a"])(A,E,H,!1,null,null,null),K=L.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",{staticClass:"kv-datagrid--body-table",attrs:{cellspacing:"0",cellpadding:"0",border:"0"}},[n("colgroup",e._l(e.leafColumns,function(e,t){return n("col",{key:t,style:e.colStyle})}),0),e._l(e.data,function(t,a){return[n("table-row",{key:a,staticClass:"kv-datagrid--body-row",attrs:{row:t,"row-class":e.rowClass,"row-style":e.rowStyle,"row-index":a}},e._l(e.leafColumns,function(r,i){return n("table-cell",{key:i,staticClass:"kv-datagrid--body-cell",attrs:{column:r,row:t,"row-index":a,"cell-class":e.cellClass,"cell-style":e.cellStyle,"column-index":i}})}),1),t.expand?n("table-row-expansion",{key:"ex-"+a,attrs:{row:t}}):e._e()]})],2)},V=[],Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.row.hidden?e._e():n("tr",{class:[{"kv-datagird--row-hover":e.row.hover},{"kv-datagird--row-selected":e.row.selected},e.tableRowClass],style:e.tableRowStyle,on:{mouseenter:e.handleMouseEnter,mouseleave:e.handleMouseLeave,click:e.handleClick}},[e._t("default")],2)},J=[],G={inject:["datagrid"],props:{row:{type:Object},rowIndex:{type:Number},rowClass:{type:Function},rowStyle:{type:Function}},computed:{tableRowClass:function(){if(this.rowClass){var e={index:this.rowIndex,data:this.row.data,row:this.row};return this.rowClass.call(this.datagrid,e)}},tableRowStyle:function(){if(this.rowStyle){var e={index:this.rowIndex,data:this.row.data,row:this.row};return this.rowStyle.call(this.datagrid,e)}},dataSource:function(){return this.datagrid.dataSource}},methods:{handleMouseEnter:function(){this.row.hover=!0},handleMouseLeave:function(){this.row.hover=!1},handleClick:function(){this.datagrid.select&&(this.row.selected=!0)},collapseChildNodes:function(e){var t=this;this.dataSource.forEach(function(n){n.parentId==e.id&&(n.hidden=!0,t.collapseChildNodes(n))})},expandChildNodes:function(e){var t=this;this.dataSource.forEach(function(n){n.parentId==e.id&&(n.hidden=!e.treeNodeExpand||e.hidden,t.expandChildNodes(n))})}},watch:{"row.checked":function(e){var t=this.datagrid,n=t.dataSource.filter(function(e){return e.checked});t.dataSource.length==n.length?(t.checkedAll=!0,t.indeterminate=!1):(t.checkedAll=!1,t.indeterminate=n.length>0)},"row.selected":function(e){var t=this;if(e){var n=this.datagrid.dataSource;n.map(function(e){e.id!=t.row.id&&(e.selected=!1)})}},"row.treeNodeExpand":function(e){this.datagrid.treeKey&&(e?this.expandChildNodes(this.row):this.collapseChildNodes(this.row))}}},Q=G,U=Object(l["a"])(Q,Y,J,!1,null,null,null),X=U.exports,Z={inject:["datagrid"],props:{row:{type:Object}},render:function(e){var t=this.datagrid.$scopedSlots,n="expansion",a=t.expansion;if(!a)for(var r in t)if(/^expansion-/.test(r)){a=t[r],n=r;break}return e("tr",{class:["kv-datagrid--body-row-expansion","kv-datagrid--body-".concat(n)]},[e("td",{attrs:{colspan:this.datagrid.leafColumns.length}},[a({row:this.row,data:this.row.data})])])}},ee=Z,te=Object(l["a"])(ee,v,m,!1,null,null,null),ne=te.exports,ae={components:{TableRow:X,TableCell:D,TableRowExpansion:ne},inject:["datagrid"],computed:{data:function(){return this.datagrid.dataSource},leafColumns:function(){return this.datagrid.leafColumns},rowClass:function(){return this.datagrid.rowClass},rowStyle:function(){return this.datagrid.rowStyle},cellClass:function(){return this.datagrid.cellClass},cellStyle:function(){return this.datagrid.cellStyle}},mounted:function(){this.$emit("on-after-render")}},re=ae,ie=Object(l["a"])(re,q,V,!1,null,null,null),oe=ie.exports,de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",{staticClass:"kv-datagrid--footer-table",attrs:{cellspacing:"0",cellpadding:"0",border:"0"}},[n("colgroup",e._l(e.leafColumns,function(e,t){return n("col",{key:t,style:e.colStyle})}),0),e._l(e.data,function(t,a){return n("tr",{key:a,staticClass:"kv-datagrid--footer-row"},e._l(e.leafColumns,function(e,r){return n("table-cell",{key:r,staticClass:"kv-datagrid--body-cell",attrs:{type:"footer",column:e,row:t,"row-index":a}})}),1)})],2)},le=[],se={components:{TableCell:D},inject:["datagrid"],computed:{data:function(){return this.datagrid.footerDataSource},leafColumns:function(){return this.datagrid.leafColumns}}},ce=se,ue=Object(l["a"])(ce,de,le,!1,null,null,null),he=ue.exports,pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"kv-datagrid--pagination"},[n("span",[e._v("共 "+e._s(e.pageTotal)+" 条")]),n("span",[n("div",{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:e.handleOutsideClick,expression:"handleOutsideClick"}],staticClass:"kv-datagrid--pagination-select",on:{click:function(t){e.showDropdown=!e.showDropdown}}},[e._v("\n      "+e._s(e.currentPageSize)+"条/页\n      "),n("i",{staticClass:"kv-icon-down"}),e.showDropdown?n("div",{staticClass:"kv-datagrid--pagination-select-dropdown"},e._l(e.pageSizes,function(t,a){return n("div",{key:a,class:["kv-datagrid--pagination-select-option",{"kv-datagrid--pagination-select-active":t==e.currentPageSize}],on:{click:function(n){return n.stopPropagation(),e.handleSelctSize(t)}}},[e._v(e._s(t)+"条/页")])}),0):e._e()])]),n("pager",{staticClass:"kv-datagrid--pagination-pager",attrs:{"page-count":e.currentPageCount,"page-number":e.pageNumber,"page-index":e.currentPageIndex},on:{"on-change":e.handlePagerChange}}),n("span",[e._v("\n    前往\n    "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputPageIndex,expression:"inputPageIndex"}],staticClass:"kv-datagrid--pagination-number",attrs:{min:1,max:e.currentPageCount,type:"number",autocomplete:"off"},domProps:{value:e.inputPageIndex},on:{change:e.handleInputChange,keyup:function(t){return t.type.indexOf("key")||13===t.keyCode?e.handleInputChange(t):null},input:function(t){t.target.composing||(e.inputPageIndex=t.target.value)}}}),e._v("\n    页\n  ")])],1)},fe=[],ge=n("bfb3"),ve=n.n(ge),me=n("e814"),ye=n.n(me),xe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"kv-datagrid--page"},[n("li",{class:["kv-datagrid--page-number",{"kv-datagrid--page-disabled":e.pageIndex<2}],on:{click:function(t){return e.handlePageIndexChange(e.pageIndex-1)}}},[n("i",{staticClass:"kv-icon-left"})]),n("li",{class:["kv-datagrid--page-number",{"kv-datagrid--page-avtive":1==e.pageIndex}],on:{click:function(t){return e.handlePageIndexChange(1)}}},[e._v("1")]),e.showPrevMore?n("li",{staticClass:"kv-datagrid--page-number kv-datagrid--page-prev",on:{mouseenter:function(t){e.prevMoreHover=!0},mouseleave:function(t){e.prevMoreHover=!1},click:function(t){return e.handlePageIndexChange(e.pageIndex-e.pageNumber+2)}}},[e.prevMoreHover?n("i",{staticClass:"kv-icon-doubleleft"}):n("i",[e._v("•••")])]):e._e(),e._l(e.pageList,function(t,a){return n("li",{key:a,class:["kv-datagrid--page-number",{"kv-datagrid--page-avtive":e.pageIndex==t}],on:{click:function(n){return e.handlePageIndexChange(t)}}},[e._v(e._s(t))])}),e.showNextMore?n("li",{staticClass:"kv-datagrid--page-number kv-datagrid--page-next",on:{mouseenter:function(t){e.nextMoreHover=!0},mouseleave:function(t){e.nextMoreHover=!1},click:function(t){return e.handlePageIndexChange(e.pageIndex+e.pageNumber-2)}}},[e.nextMoreHover?n("i",{staticClass:"kv-icon-doubleright"}):n("i",[e._v("•••")])]):e._e(),e.pageCount>1?n("li",{class:["kv-datagrid--page-number",{"kv-datagrid--page-avtive":e.pageIndex==e.pageCount}],on:{click:function(t){return e.handlePageIndexChange(e.pageCount)}}},[e._v(e._s(e.pageCount))]):e._e(),n("li",{class:["kv-datagrid--page-number",{"kv-datagrid--page-disabled":e.pageIndex>e.pageCount-1}],on:{click:function(t){return e.handlePageIndexChange(e.pageIndex+1)}}},[n("i",{staticClass:"kv-icon-right"})])],2)},be=[],ke={data:function(){return{prevMoreHover:!1,nextMoreHover:!1}},props:{pageIndex:{type:Number},pageCount:{type:Number},pageNumber:{type:Number}},computed:{showPrevMore:function(){return this.pageIndex>this.pageNumber-(this.pageNumber-1)/2&&this.pageCount>this.pageNumber},showNextMore:function(){return this.pageIndex<this.pageCount-(this.pageNumber+1)/2&&this.pageCount>this.pageNumber},pageList:function(){var e=2,t=this.pageCount;if(this.showPrevMore&&!this.showNextMore&&(e=this.pageCount-(this.pageNumber-2)-1),!this.showPrevMore&&this.showNextMore&&(e=2,t=this.pageNumber+1),this.showPrevMore&&this.showNextMore){var n=Math.floor(this.pageNumber/2);e=this.pageIndex-n,t=this.pageIndex+n+1}for(var a=[],r=e;r<t;r++)a.push(r);return a}},methods:{handlePageIndexChange:function(e){this.pageIndex!=e&&(e<1||e>this.pageCount||this.$emit("on-change",e))}}},we=ke,Ce=Object(l["a"])(we,xe,be,!1,null,null,null),Se=Ce.exports,Ie=function(){return document.addEventListener?function(e,t,n){e&&t&&n&&e.addEventListener(t,n,!1)}:function(e,t,n){e&&t&&n&&e.attachEvent("on"+t,n)}}(),_e=[],Pe="@@clickoutsideContext",Ne=0;function Te(e,t,n){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!(n&&n.context&&a.target&&r.target)||e.contains(a.target)||e.contains(r.target)||e===a.target||n.context.popperElm&&(n.context.popperElm.contains(a.target)||n.context.popperElm.contains(r.target))||(t.expression&&e[Pe].methodName&&n.context[e[Pe].methodName]?n.context[e[Pe].methodName]():e[Pe].bindingFn&&e[Pe].bindingFn())}}Ie(document,"mousedown",function(e){return y=e}),Ie(document,"mouseup",function(e){_e.forEach(function(t){return t[Pe].documentHandler(e,y)})});var ze={bind:function(e,t,n){_e.push(e);var a=Ne++;e[Pe]={id:a,documentHandler:Te(e,t,n),methodName:t.expression,bindingFn:t.value}},update:function(e,t,n){e[Pe].documentHandler=Te(e,t,n),e[Pe].methodName=t.expression,e[Pe].bindingFn=t.value},unbind:function(e){for(var t=_e.length,n=0;n<t;n++)if(_e[n][Pe].id===e[Pe].id){_e.splice(n,1);break}delete e[Pe]}},Ee={components:{Pager:Se},directives:{Clickoutside:ze},data:function(){return{currentPageIndex:this.pageIndex,currentPageSize:10,inputPageIndex:this.pageIndex,showDropdown:!1}},props:{pageTotal:{type:Number,default:0},pageSize:{type:Number,default:10},pageCount:{type:Number,default:0},pageIndex:{type:Number,default:1},pageNumber:{type:Number,default:5},pageSizes:{type:Array,default:function(){return[10,20,50,100]}}},computed:{currentPageCount:function(){return this.pageTotal?Math.max(1,Math.ceil(this.pageTotal/this.currentPageSize)):this.pageCount?Math.max(1,this.pageCount):null}},methods:{handlePagerChange:function(e){this.currentPageIndex=e},handleInputChange:function(){var e=ye()(this.inputPageIndex,10);if(ve()(e))this.inputPageIndex=this.currentPageIndex;else{var t=this.getValidPageIndex(e);this.inputPageIndex=t,this.currentPageIndex=t}},getValidPageIndex:function(e){return e=ye()(e,10),ve()(e)?1:e>this.currentPageCount?this.currentPageCount:e<1?1:e},handleSelctSize:function(e){this.currentPageSize=e,this.showDropdown=!1},handleOutsideClick:function(){var e=this;setTimeout(function(){e.showDropdown=!1},10)}},watch:{currentPageIndex:function(e){this.inputPageIndex=e,this.$emit("on-change",e,this.currentPageSize)},currentPageSize:function(e){var t=this.currentPageIndex;this.currentPageIndex=this.getValidPageIndex(t),t==this.currentPageIndex&&this.$emit("on-change",t,this.currentPageSize)},pageIndex:function(e){var t=this.getValidPageIndex(e);this.currentPageIndex=t,this.inputPageIndex=t},pageSize:function(e){this.currentPageSize=e}}},He=Ee,Me=Object(l["a"])(He,pe,fe,!1,null,null,null),$e=Me.exports,je="undefined"!==typeof navigator&&navigator.userAgent.toLowerCase().indexOf("firefox")>-1,Be={bind:function(e,t){var n=t.value;e.addEventListener(je?"DOMMouseScroll":"mousewheel",function(e){var t=e.deltaY;!t&&e.detail&&(t=40*e.detail),!t&&e.wheelDeltaY&&(t=-e.wheelDeltaY),!t&&e.wheelDelta&&(t=-e.wheelDelta),n.apply(this,[e,t])})}},Oe=function(e,t){var n;return function(){var a=this,r=arguments;n&&clearTimeout(n),n=setTimeout(function(){e.apply(a,r)},t)}},Fe=0,We=function(){if(Fe>0)return Fe;var e=document.createElement("div");e.style.visibility="hidden",e.style.width="100px",e.style.position="absolute",e.style.top="-9999px",document.body.appendChild(e);var t=e.offsetWidth;e.style.overflow="scroll";var n=document.createElement("div");n.style.width="100%",e.appendChild(n);var a=n.offsetWidth;return e.parentNode.removeChild(e),Fe=t-a,Fe},De=n("5176"),Re=n.n(De),Ae=n("774e"),Le=n.n(Ae),Ke=0,qe=function(e){return Ke++,{id:Ke,parentId:null,hover:!1,checked:!1,selected:!1,expand:!1,hidden:!1,isLeaf:!0,treeNodeExpand:!0,data:e}},Ve=function(e){return Le()(e,function(e){return qe(e)})},Ye=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return t.forEach(function(t){var o=t.children;i++;var d=qe(t);d.id=i,d.level=r,d.parentId=a,n.push(d),!T()(o)||o.length<=0||(d.isLeaf=!1,e(o,n,d.id,d.level+1,i))}),n},Je=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{class:["kv-datagrid-checkbox",{"kv-datagrid-checkbox-checked":e.value,"kv-datagrid-checkbox-indeterminate":!e.value&&e.indeterminate}]},[n("span",{staticClass:"kv-datagrid-checkbox--inner"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],staticClass:"kv-datagrid-checkbox--inner-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.model)?e._i(e.model,null)>-1:e.model},on:{change:function(t){var n=e.model,a=t.target,r=!!a.checked;if(Array.isArray(n)){var i=null,o=e._i(n,i);a.checked?o<0&&(e.model=n.concat([i])):o>-1&&(e.model=n.slice(0,o).concat(n.slice(o+1)))}else e.model=r}}})])])},Ge=[],Qe={props:{value:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1}},computed:{model:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},Ue=Qe,Xe=Object(l["a"])(Ue,Je,Ge,!1,null,null,null),Ze=Xe.exports,et={width:40,key:"",separate:!1,columnFormatter:function(e){var t=this;return e(Ze,{attrs:{indeterminate:this.indeterminate,value:this.checkedAll},nativeOn:{click:function(){var e=!t.checkedAll;t.checkedAll=e,t.indeterminate=!1,t.dataSource.map(function(t){t.checked=e})}}})},formatter:function(e,t){var n=t.row;return e(Ze,{attrs:{value:n.checked},nativeOn:{click:function(){n.checked=!n.checked}}})}},tt={width:40,key:"",separate:!1,columnFormatter:function(e){return e("div",["#"])},formatter:function(e,t){var n=t.index;return e("div",[n+1])}},nt={width:40,key:"",separate:!1,formatter:function(e,t){var n=t.row;return e("div",{class:["kv-datagrid--body-cell-expansion",{"kv-datagrid--body-cell-expansion-active":n.expand}],on:{click:function(){n.expand=!n.expand}}},[e("i",{class:"kv-icon-right"})])}},at={separate:!1,render:function(e,t,n){var a=n.row;return e("div",{class:["kv-datagrid--body-cell-tree",{"kv-datagrid--body-cell-tree-space":a.isLeaf},{"kv-datagrid--body-cell-tree-expand":a.treeNodeExpand}],style:{"padding-left":"".concat(15*a.level,"px")}},[e("i",{class:"kv-icon-caret-right",on:{click:function(){a.treeNodeExpand=!a.treeNodeExpand}}}),t])}},rt={checkbox:et,index:tt,expansion:nt,tree:at},it=function(e){var t=e.type,n=rt[t];n&&Re()(e,n),e.isLeaf=!0,e.colStyle={width:"".concat(e.width,"px"),minWidth:"".concat(e.width,"px")}},ot={name:"datagird",components:{TableHeader:K,TableBody:oe,TableFooter:he,TablePagination:$e},directives:{Mousewheel:Be},provide:function(){return{datagrid:this}},data:function(){var e=this.init(),t=e.treeKey,n=e.columnRows,a=e.leafColumns,r=e.leftFixedColumns,i=e.rightFixedColumns;return{columnRows:n,leafColumns:a,leftFixedColumns:r,rightFixedColumns:i,headerDataSource:Ve(this.header),dataSource:this.initProxyDataSource(t),footerDataSource:Ve(this.footer),vScrollSize:0,hScrollSize:0,leftBodyWidth:0,rightBodyWidth:0,bodyWidth:0,bodyHeight:0,headerHeight:0,footerHeight:0,checkedAll:!1,indeterminate:!1,height:0,orderType:null,orderKey:null,treeKey:t,editIndex:-1,editKey:null,pageIndex:1,pageSize:10,pageTotal:0}},props:{columns:{type:Array,default:function(){return[]}},header:{type:Array,default:function(){return[]}},data:{type:Array,default:function(){return[]}},footer:{type:Array,default:function(){return[]}},fit:{type:Boolean,default:!1},border:{type:Boolean,default:!0},stripe:{type:Boolean,default:!1},select:{type:Boolean,default:!1},maxHeight:{type:Number},rowClass:{type:Function},rowStyle:{type:Function},cellClass:{type:Function},cellStyle:{type:Function},cellSpan:{type:Function},pagination:{type:Boolean,default:!1},showHeader:{type:Boolean,default:!0},loadData:{type:Function}},computed:{bodyStyle:function(){return this.maxHeight==this.height?{height:"".concat(this.bodyHeight,"px")}:this.fit?{height:"".concat(this.bodyHeight,"px")}:void 0},tableStyle:function(){if(this.height)return{maxHeight:"".concat(this.height,"px")}}},methods:{init:function(){this.initSortFixedColumns();var e=this.initColumnRows(this.columns),t=this.initColumnToParams(e);return Object(z["a"])({columnRows:e},t)},initSortFixedColumns:function(){var e=["left",void 0,"right"];this.columns.sort(function(t,n){var a=e.indexOf(t.fixed),r=e.indexOf(n.fixed);return Math.abs(a)-Math.abs(r)})},initColumnRows:function(e,t){var n=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return r[a]=r[a]||[],e.forEach(function(e){var i=e.children;T()(i)&&i.length>0&&n.initColumnRows(i,t,a+1,r),e.level=a+1,r[a].push(e)}),r.filter(function(e){return e.length>0})},initColumnToParams:function(e){var t=this,n=[],a=[],r=[],i=null,o=function o(d){var l=d.children,s=d.fixed,c=d.type,u=(d.separate,d.key);if(T()(l)&&l.length>0){var h=0;return l.forEach(function(e){e.fixed=s,o(e),h+=e.colSpan}),d.colSpan=h,void(d.rowSpan=1)}"left"===s&&n.push(d),"right"===s&&a.push(d),it.call(t,d),"tree"==c&&!t.treeKey&&u&&(i=u),r.push(d),d.colSpan=1,d.rowSpan=e.length-d.level+1};return this.columns.forEach(function(e){o(e)}),{leftFixedColumns:n,rightFixedColumns:a,leafColumns:r,treeKey:i}},initProxyDataSource:function(e,t){return e||this.treeKey?Ye(this.data):Ve(t||this.data)},handleBodyLayoutResize:function(){if(!(this.dataSource.length<1)){var e=this.$refs.body;if(e){this.vScrollSize=e.scrollHeight>e.offsetHeight?We():0,this.hScrollSize=e.scrollWidth>e.offsetWidth?We():0;var t=this.leftFixedColumns.length,n=this.rightFixedColumns.length;if(!(t<1&&n<1)){var a=e.querySelector("tr"),r=a.querySelectorAll("td"),i=this.leafColumns.length,o=0,d=this.border?1:0;r.forEach(function(e,a){var r=e.offsetWidth;a<t&&(o+=r),a>=i-n&&(d+=r)}),this.leftBodyWidth=o,this.rightBodyWidth=d,this.bodyWidth=a.offsetWidth,this.bodyHeight=e.offsetHeight}}}},handleBodyScroll:function(){var e=this.$refs.body;if(e){var t=e.scrollLeft,n=e.scrollTop;this.$refs.header&&(this.$refs.header.scrollLeft=t),this.$refs.leftBody&&(this.$refs.leftBody.scrollTop=n),this.$refs.rightBody&&(this.$refs.rightBody.scrollTop=n),this.$refs.footer&&(this.$refs.footer.scrollLeft=t)}},handleMousewheel:function(e,t){var n=this.$refs.body,a=n.scrollTop;t<0&&0!==a&&e.preventDefault(),t>0&&n.scrollHeight-n.clientHeight>a&&e.preventDefault(),this.$refs.body.scrollTop+=t},handleLayoutReize:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=function(){e.handleBodyLayoutResize(),e.handleBodyScroll(),e.handleBodyResize()};if(t>0)return Oe(n,t);n()},handleBodyResize:function(){this.$refs.header&&(this.bodyWidth=this.$refs.header.firstChild.offsetWidth);var e=!1;if(this.fit?(e=!0,this.height=this.maxHeight||this.$el.parentNode.clientHeight):(this.height=this.$el.offsetHeight,e=this.height==this.maxHeight),e){this.$refs.headerWrapper&&(this.headerHeight=this.$refs.headerWrapper.offsetHeight),this.$refs.footerWrapper&&(this.footerHeight=this.$refs.footerWrapper.offsetHeight),this.$refs.page&&(this.footerHeight+=this.$refs.page.offsetHeight);var t=this.$refs.body;t&&(this.hScrollSize=t.scrollWidth>t.offsetWidth?We():0,this.bodyHeight=this.height-this.headerHeight-this.footerHeight,this.vScrollSize=t.scrollHeight>this.bodyHeight?We():0)}else this.height=0},handlePageChange:function(e,t){var n=this;if(this.pagination&&this.loadData){var a={pageIndex:e,pageSize:t,orderKey:this.orderKey,orderType:this.orderType},r=function(a){var r=a.total,i=a.rows;n.dataSource=n.initProxyDataSource(null,i),n.pageIndex=e,n.pageSize=t,n.pageTotal=r};this.loadData(a,r)}}},created:function(){this.handlePageChange(this.pageIndex,this.pageSize)},mounted:function(){window.addEventListener("resize",this.handleLayoutReize(100)),this.handleBodyResize()}},dt=ot,lt=Object(l["a"])(dt,_,P,!1,null,null,null),st=lt.exports,ct=n("1487"),ut=n.n(ct);n("1e87"),n("581d"),n("1c32");a["a"].config.productionTip=!1,a["a"].component("kv-code-snippet",I),a["a"].component("kv-datagrid",st),x.afterEach(function(){a["a"].nextTick(function(){var e=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(e,ut.a.highlightBlock)})}),new a["a"]({router:x,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("5e27"),r=n.n(a);r.a},"5e27":function(e,t,n){},"9f55":function(e,t,n){e.exports=n.p+"img/empty.89d1da07.svg"},a937:function(e,t,n){"use strict";var a=n("bff1"),r=n.n(a);r.a},bff1:function(e,t,n){},caa4:function(e,t,n){e.exports=n.p+"img/code-open.a6b56caf.svg"}});
//# sourceMappingURL=app.c66e0d53.js.map