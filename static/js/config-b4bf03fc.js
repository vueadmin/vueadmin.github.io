var f=Object.defineProperty,c=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var l=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var a=(i,o,t)=>o in i?f(i,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[o]=t,e=(i,o)=>{for(var t in o||(o={}))l.call(o,t)&&a(i,t,o[t]);if(n)for(var t of n(o))g.call(o,t)&&a(i,t,o[t]);return i},m=(i,o)=>c(i,d(o));var r=(i,o,t)=>(a(i,typeof o!="symbol"?o+"":o,t),t);import{aM as C,am as p}from"./index-9d79f864.js";import{c as b}from"./chartEditStore-fdfc1aa7.js";import{ab as s}from"./index-d0be0c94.js";import"./plugin-4f43ac29.js";import"./icon-4feaeed1.js";import"./SettingItem-d4c7149f.js";/* empty css                                                                   */import"./SettingItemBox-bc5c7fd4.js";import"./CollapseItem-2dd7fa1d.js";import"./index.esm.min-6a7b311d.js";import"./http-6e0dd9ca.js";import"./lodash-d9dbefb5.js";const h={dataset:"http://enjoyer.vueadmin.com/blt/line8.png",fit:"contain",borderRadius:0};class R extends b{constructor(){super(...arguments);r(this,"key",s.key);r(this,"attr",m(e({},C),{w:618,h:618,x:618,y:0,zIndex:2e3}));r(this,"chartConfig",p(s));r(this,"option",p(h))}}export{R as default,h as option};
