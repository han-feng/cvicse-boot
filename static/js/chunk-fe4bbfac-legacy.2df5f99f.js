(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-fe4bbfac"],{"10cb":function(a,t,e){},e6ef:function(a,t,e){"use strict";e.r(t);e("10cb"),e("450d");var n=e("f3ad"),i=e.n(n),s=e("2ef0"),o={mixins:[{methods:{_switchData:function(a){void 0===this._page_datas&&(this._page_datas={},this._page_data=Object(s.cloneDeep)(this.$data));var t=this._page_datas[a];for(var e in void 0===t&&(t=Object(s.cloneDeep)(this._page_data),this._page_datas[a]=t),t)this.$data[e]=t[e]}},beforeRouteEnter:function(a,t,e){var n=a.fullPath;n&&e(function(a){a._switchData(n)})},beforeRouteUpdate:function(a,t,e){var n=a.fullPath;n&&(this._switchData(n),e())}}],name:"demo-params",components:{Input:i.a},props:{id:{type:String,required:!0}},data:function(){return{data:{value:""}}}},c=e("2877"),d=Object(c.a)(o,function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("d2-container",{attrs:{filename:a.filename,type:"card"}},[e("template",{slot:"header"},[a._v("这个页面会被 keep-alive")]),e("h2",{staticClass:"d2-mt-0"},[a._v("编号："+a._s(a.id))]),e("p",{staticClass:"d2-mt-0"},[a._v("在下面的输入框输入任意字符后，切换到其它页面，再回到此页时输入框文字保留，证明被缓存")]),e("Input",{attrs:{placeholder:"input here"},model:{value:a.data.value,callback:function(t){a.$set(a.data,"value",t)},expression:"data.value"}})],2)},[],!1,null,null,null);d.options.__file="index.vue";t.default=d.exports}}]);