var f=Object.defineProperty,c=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var e=(i,o,t)=>o in i?f(i,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[o]=t,m=(i,o)=>{for(var t in o||(o={}))g.call(o,t)&&e(i,t,o[t]);if(a)for(var t of a(o))h.call(o,t)&&e(i,t,o[t]);return i},p=(i,o)=>c(i,d(o));var r=(i,o,t)=>(e(i,typeof o!="symbol"?o+"":o,t),t);import{aM as l,am as n}from"./index-ceb04263.js";import{c as C}from"./chartEditStore-66e39698.js";import{ae as s}from"./index-b8b80fff.js";import"./plugin-6413e978.js";import"./icon-e92a95d4.js";import"./SettingItem-f4ab2ff5.js";/* empty css                                                                   */import"./SettingItemBox-fd503d2d.js";import"./CollapseItem-1c06d7a4.js";import"./index.esm.min-ce17e730.js";import"./http-d36ff187.js";import"./lodash-a6b644ed.js";const u={dataset:"https://enjoyer.vueadmin.com/blt/other2.png",fit:"contain",borderRadius:0};class R extends C{constructor(){super(...arguments);r(this,"key",s.key);r(this,"attr",p(m({},l),{w:2e3,h:1e3,x:0,y:0,zIndex:3100}));r(this,"chartConfig",n(s));r(this,"option",n(u))}}export{R as default,u as option};
