(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d224894"],{e10b:function(t,e,s){"use strict";s.r(e);var a=s("be94"),n=(s("f4f9"),s("450d"),s("c2cc")),r=s.n(n),o=(s("cbb5"),s("8bbc")),i=s.n(o),c=(s("7a0f"),s("0f6c")),d=s.n(c),l=(s("b8e0"),s("a4c4")),u=s.n(l),h=(s("1951"),s("eedf")),p=s.n(h),m=s("2f62"),_={name:"demo-auth",components:{Button:p.a,Card:u.a,Row:d.a,Tag:i.a,Col:r.a},data:()=>({pages:["/demo/page1","/demo/page2","/demo/page3","/demo/notfound"],items:["/demo/test1","/demo/test2","/demo/test3","/demo/test4"]}),computed:Object(a.a)({},Object(m.e)("session",{name:t=>t.user.name,permissions:t=>t.user.permissions}))},v=s("2877"),g=Object(v.a)(_,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("d2-container",[s("Row",{attrs:{type:"flex",align:"stretch",gutter:10}},[s("Col",{attrs:{span:6}},[s("Card",{staticStyle:{height:"100%"},attrs:{shadow:"hover"}},[s("div",{attrs:{slot:"header"},slot:"header"},[s("span",[t._v("已授权许可")]),s("Tag",{staticStyle:{float:"right"}},[t._v("当前用户："+t._s(t.name))])],1),t._l(t.permissions,function(e){return s("div",{key:e,staticClass:"d2-m-5"},[s("Tag",[t._v(t._s(e))])],1)})],2)],1),s("Col",{attrs:{span:6}},[s("Card",{staticStyle:{height:"100%"},attrs:{shadow:"hover"}},[s("div",{attrs:{slot:"header"},slot:"header"},[s("span",[t._v("有权访问内容")])]),t._l(t.pages,function(e){return s("div",{key:e,staticClass:"d2-m-5"},[t.checkPermission(e)?s("Button",{attrs:{type:"success"},on:{click:function(s){return t.$router.push(e)}}},[t._v(t._s(e))]):t._e()],1)}),t._l(t.items,function(e){return s("div",{key:e,staticClass:"d2-m-5"},[t.checkPermission(e)?s("Tag",{attrs:{type:"success"}},[t._v(t._s(e))]):t._e()],1)})],2)],1),s("Col",{attrs:{span:6}},[s("Card",{staticStyle:{height:"100%"},attrs:{shadow:"hover"}},[s("div",{attrs:{slot:"header"},slot:"header"},[s("span",[t._v("无权访问内容")])]),t._l(t.pages,function(e){return s("div",{key:e,staticClass:"d2-m-5"},[t.checkPermission(e)?t._e():s("Button",{attrs:{type:"danger"},on:{click:function(s){return t.$router.push(e)}}},[t._v(t._s(e))])],1)}),t._l(t.items,function(e){return s("div",{key:e,staticClass:"d2-m-5"},[t.checkPermission(e)?t._e():s("Tag",{attrs:{type:"danger"}},[t._v(t._s(e))])],1)})],2)],1),s("Col",{attrs:{span:6}},[s("Card",{staticStyle:{height:"100%"},attrs:{shadow:"hover"}},[s("div",{attrs:{slot:"header"},slot:"header"},[s("span",[t._v("匹配算法性能对比")]),s("Button",{staticStyle:{float:"right",padding:"5px"},attrs:{type:"success"}},[s("d2-icon",{attrs:{name:"play"}}),t._v("测试")],1)],1)])],1)],1)],1)},[],!1,null,null,null);e.default=g.exports}}]);