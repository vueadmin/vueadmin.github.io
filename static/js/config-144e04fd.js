var f=Object.defineProperty,c=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var l=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var n=(i,o,t)=>o in i?f(i,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[o]=t,e=(i,o)=>{for(var t in o||(o={}))l.call(o,t)&&n(i,t,o[t]);if(a)for(var t of a(o))g.call(o,t)&&n(i,t,o[t]);return i},p=(i,o)=>c(i,d(o));var r=(i,o,t)=>(n(i,typeof o!="symbol"?o+"":o,t),t);import{aW as C,af as m}from"./index-20fb0306.js";import{d as h}from"./chartEditStore-eb4e0443.js";import{S as s}from"./index-63f16b81.js";import"./plugin-2033e7b2.js";import"./icon-cb727678.js";import"./SettingItem-11e342fe.js";/* empty css                                                                      */import"./SettingItemBox-6e9bb9c5.js";import"./CollapseItem.vue_vue_type_script_setup_true_lang-561b5bfa.js";import"./chart-169a825c.js";const u={dataset:"https://enjoyer.vueadmin.com/blt/line11.png",fit:"contain",borderRadius:10};class P extends h{constructor(){super(...arguments);r(this,"key",s.key);r(this,"attr",p(e({},C),{w:618,h:618,x:618,y:0,zIndex:400}));r(this,"chartConfig",m(s));r(this,"option",m(u))}}export{P as default,u as option};
