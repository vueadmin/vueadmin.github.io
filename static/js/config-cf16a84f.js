var f=Object.defineProperty,c=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var l=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var e=(i,o,t)=>o in i?f(i,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[o]=t,n=(i,o)=>{for(var t in o||(o={}))l.call(o,t)&&e(i,t,o[t]);if(a)for(var t of a(o))y.call(o,t)&&e(i,t,o[t]);return i},p=(i,o)=>c(i,d(o));var r=(i,o,t)=>(e(i,typeof o!="symbol"?o+"":o,t),t);import{aW as g,af as m}from"./index-20fb0306.js";import{d as C}from"./chartEditStore-eb4e0443.js";import{y as s}from"./index-63f16b81.js";import"./plugin-2033e7b2.js";import"./icon-cb727678.js";import"./SettingItem-11e342fe.js";/* empty css                                                                      */import"./SettingItemBox-6e9bb9c5.js";import"./CollapseItem.vue_vue_type_script_setup_true_lang-561b5bfa.js";import"./chart-169a825c.js";const h={dataset:"https://enjoyer.vueadmin.com/blt/jewelry2.png",fit:"contain",borderRadius:10};class P extends C{constructor(){super(...arguments);r(this,"key",s.key);r(this,"attr",p(n({},g),{w:400,h:300,x:502,y:84,zIndex:800}));r(this,"chartConfig",m(s));r(this,"option",m(h))}}export{P as default,h as option};
