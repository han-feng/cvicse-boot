(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-b1413790"],{"0f6c":function(t,e){t.exports=function(t){var e={};function n(s){if(e[s])return e[s].exports;var r=e[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:s})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=282)}({282:function(t,e,n){"use strict";e.__esModule=!0;var s,r=n(283),o=(s=r)&&s.__esModule?s:{default:s};o.default.install=function(t){t.component(o.default.name,o.default)},e.default=o.default},283:function(t,e,n){"use strict";e.__esModule=!0,e.default={name:"ElRow",componentName:"ElRow",props:{tag:{type:String,default:"div"},gutter:Number,type:String,justify:{type:String,default:"start"},align:{type:String,default:"top"}},computed:{style:function(){var t={};return this.gutter&&(t.marginLeft="-"+this.gutter/2+"px",t.marginRight=t.marginLeft),t}},render:function(t){return t(this.tag,{class:["el-row","start"!==this.justify?"is-justify-"+this.justify:"","top"!==this.align?"is-align-"+this.align:"",{"el-row--flex":"flex"===this.type}],style:this.style},this.$slots.default)}}}})},1951:function(t,e,n){},"7a0f":function(t,e,n){},eb2e:function(t,e,n){"use strict";n.r(e);n("7a0f"),n("450d");var s=n("0f6c"),r=n.n(s),o=(n("1951"),n("eedf")),a={name:"page1",components:{Button:n.n(o).a,Row:r.a}},i=n("2877"),u=Object(i.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("d2-container",[n("h1",{staticClass:"d2-mt-0"},[t._v("权限测试")]),t.checkPermission("/demo/test1")?n("Row",{staticClass:"d2-mb"},[n("Button",[t._v("默认按钮")]),n("Button",{attrs:{type:"primary"}},[t._v("主要按钮")]),n("Button",{attrs:{type:"success"}},[t._v("成功按钮")]),n("Button",{attrs:{type:"info"}},[t._v("信息按钮")]),t.checkPermission("/demo/test2")?n("Button",{attrs:{type:"warning"}},[t._v("警告按钮")]):t._e(),t.checkPermission("/demo/test3")?n("Button",{attrs:{type:"danger"}},[t._v("危险按钮")]):t._e()],1):t._e(),t.checkPermission("/demo/test2")?n("Row",{staticClass:"d2-mb"},[n("Button",{attrs:{plain:""}},[t._v("朴素按钮")]),n("Button",{attrs:{type:"primary",plain:""}},[t._v("主要按钮")]),n("Button",{attrs:{type:"success",plain:""}},[t._v("成功按钮")]),n("Button",{attrs:{type:"info",plain:""}},[t._v("信息按钮")]),n("Button",{attrs:{type:"warning",plain:""}},[t._v("警告按钮")]),t.checkPermission("/demo/test3")?n("Button",{attrs:{type:"danger",plain:""}},[t._v("危险按钮")]):t._e()],1):t._e(),t.checkPermission("/demo/test3")?n("Row",{staticClass:"d2-mb"},[n("Button",{attrs:{round:""}},[t._v("圆角按钮")]),n("Button",{attrs:{type:"primary",round:""}},[t._v("主要按钮")]),n("Button",{attrs:{type:"success",round:""}},[t._v("成功按钮")]),n("Button",{attrs:{type:"info",round:""}},[t._v("信息按钮")]),n("Button",{attrs:{type:"warning",round:""}},[t._v("警告按钮")]),n("Button",{attrs:{type:"danger",round:""}},[t._v("危险按钮")])],1):t._e()],1)},[],!1,null,null,null);u.options.__file="index.vue";e.default=u.exports}}]);