import{a1 as a,bf as o,c9 as h}from"./index-f9553022.js";const n=a(h,o("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const r=Object.values(t).includes(!0);this.$emit("input",!r)},deep:!0,immediate:!0}},methods:{watchInput(t){const r=e=>e.$watch("hasError",s=>{this.$set(this.errorBag,e._uid,s)},{immediate:!0}),i={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",e=>{e&&(this.errorBag.hasOwnProperty(t._uid)||(i.valid=r(t)))}):i.valid=r(t),i},validate(){return this.inputs.filter(t=>!t.validate(!0)).length===0},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const r=this.inputs.find(e=>e._uid===t._uid);if(!r)return;const i=this.watchers.find(e=>e._uid===r._uid);i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter(e=>e._uid!==r._uid),this.inputs=this.inputs.filter(e=>e._uid!==r._uid),this.$delete(this.errorBag,r._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:r=>this.$emit("submit",r)}},this.$slots.default)}});export{n as _};
