var f=Object.defineProperty,c=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var r=(i,t,o)=>t in i?f(i,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[t]=o,e=(i,t)=>{for(var o in t||(t={}))b.call(t,o)&&r(i,o,t[o]);if(n)for(var o of n(t))g.call(t,o)&&r(i,o,t[o]);return i},p=(i,t)=>c(i,d(t));var a=(i,t,o)=>(r(i,typeof t!="symbol"?t+"":t,o),o);import{aW as l,af as m}from"./index-20fb0306.js";import{d as C}from"./chartEditStore-eb4e0443.js";import{a3 as s}from"./index-63f16b81.js";import"./plugin-2033e7b2.js";import"./icon-cb727678.js";import"./SettingItem-11e342fe.js";/* empty css                                                                      */import"./SettingItemBox-6e9bb9c5.js";import"./CollapseItem.vue_vue_type_script_setup_true_lang-561b5bfa.js";import"./chart-169a825c.js";const h={dataset:"https://enjoyer.vueadmin.com/blt/rabbit3.png",fit:"contain",borderRadius:10};class P extends C{constructor(){super(...arguments);a(this,"key",s.key);a(this,"attr",p(e({},l),{w:618,h:1e3,x:382,y:0,zIndex:500}));a(this,"chartConfig",m(s));a(this,"option",m(h))}}export{P as default,h as option};
