(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-017b6387"],{"0413":function(e,t,a){"use strict";a("c6aa")},7240:function(e,t,a){"use strict";a.r(t);var n=a("7a23");const c={style:{height:"60px"}};function d(e,t,a,d,i,b){const o=Object(n["O"])("el-table-column"),l=Object(n["O"])("el-table"),r=Object(n["P"])("loading"),s=Object(n["P"])("infinite-scroll");return Object(n["eb"])((Object(n["F"])(),Object(n["k"])("div",{class:"table-wrapper","infinite-scroll-disabled":e.loading,"infinite-scroll-distance":"20"},[Object(n["o"])(l,{data:e.tableData,border:""},{append:Object(n["db"])(()=>[Object(n["eb"])(Object(n["o"])("div",c,null,512),[[r,e.loading]])]),default:Object(n["db"])(()=>[Object(n["o"])(o,{prop:"date",label:"日期",width:"180"}),Object(n["o"])(o,{prop:"name",label:"姓名",width:"180"}),Object(n["o"])(o,{prop:"address",label:"地址"})]),_:1},8,["data"])],8,["infinite-scroll-disabled"])),[[s,e.load]])}var i=a("9ab4"),b=Object(n["p"])({setup:function(){var e=this,t=Object(n["J"])({tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],loading:!1}),a=function(){t.loading=!0,setTimeout((function(){return Object(i["b"])(e,void 0,void 0,(function(){var e;return Object(i["c"])(this,(function(a){for(e=0;e<5;e++)t.tableData.push({date:(t.tableData.length-3).toString(),name:"加载数据",address:"说一段神话，话说那么一家"});return t.loading=!1,[2]}))}))}),2e3)};return Object(i["a"])(Object(i["a"])({},Object(n["V"])(t)),{load:a})}});a("0413");b.render=d;t["default"]=b},c6aa:function(e,t,a){}}]);
//# sourceMappingURL=chunk-017b6387.f9d30be6.js.map