import{d as a}from"./vue-b220ace6.js";import{M as e}from"./Modal-f5e0cc6c.js";import{F as i}from"./FullScreenModal-b7264cb2.js";import{Q as l,s as _,t as r,V as c,v as u,z as p,A as m,B as d,L as h,E as f,D as g,x as o}from"./index-f9553022.js";import{_ as x}from"./VDialog-a94128dd.js";import{_ as w}from"./VContainer-1e078d75.js";const v=a({name:"ConfirmShutdownModal",mixins:[e,i],methods:{close(){this.dialog=!1},async shutdownApplication(){await l.shutdownApp()?(this.$store.state.authenticated=!1,await this.$router.push({name:"login"}),this.$toast.success(this.$t("toast.shutdownSuccess").toString())):this.$toast.error(this.$t("toast.shutdownError").toString()),this.close()}}});var C=function(){var t=this,s=t._self._c;return t._self._setupProxy,s(x,{attrs:{scrollable:"","max-width":"750px","content-class":t.phoneLayout?"rounded-0":"rounded-form",fullscreen:!1},model:{value:t.dialog,callback:function(n){t.dialog=n},expression:"dialog"}},[s(r,[s(c,{staticClass:"pa-0"},[s(u,{staticClass:"ma-4 primarytext--text"},[s("h3",[t._v(t._s(t.$t("modals.shutdown.title")))])])],1),s(p,[s(w,[s(m,[s(d,[s("span",[t._v(t._s(t.$t("modals.shutdown.content")))])])],1)],1)],1),s(h),s(f,{staticClass:"justify-end"},[s(g),s(o,{staticClass:"accent white--text elevation-0 px-4",on:{click:t.shutdownApplication}},[t._v(" "+t._s(t.$t("yes"))+" ")]),s(o,{staticClass:"error white--text elevation-0 px-4",on:{click:t.close}},[t._v(" "+t._s(t.$t("no"))+" ")])],1)],1)],1)},$=[],y=_(v,C,$,!1,null,null,null,null);const F=y.exports;export{F as default};
