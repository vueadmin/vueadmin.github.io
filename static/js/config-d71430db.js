var f=Object.defineProperty,c=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;var a=(i,o,t)=>o in i?f(i,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[o]=t,e=(i,o)=>{for(var t in o||(o={}))g.call(o,t)&&a(i,t,o[t]);if(n)for(var t of n(o))l.call(o,t)&&a(i,t,o[t]);return i},p=(i,o)=>c(i,d(o));var r=(i,o,t)=>(a(i,typeof o!="symbol"?o+"":o,t),t);import{aW as C,af as m}from"./index-20fb0306.js";import{d as h}from"./chartEditStore-eb4e0443.js";import{i as s}from"./index-63f16b81.js";import"./plugin-2033e7b2.js";import"./icon-cb727678.js";import"./SettingItem-11e342fe.js";/* empty css                                                                      */import"./SettingItemBox-6e9bb9c5.js";import"./CollapseItem.vue_vue_type_script_setup_true_lang-561b5bfa.js";import"./chart-169a825c.js";const u={dataset:"https://enjoyer.vueadmin.com/blt/decoration7.png",fit:"contain",borderRadius:10};class R extends h{constructor(){super(...arguments);r(this,"key",s.key);r(this,"attr",p(e({},C),{w:318,h:318,x:0,y:682,zIndex:700}));r(this,"chartConfig",m(s));r(this,"option",m(u))}}export{R as default,u as option};
