var f=Object.defineProperty,c=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var l=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var n=(i,o,t)=>o in i?f(i,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[o]=t,m=(i,o)=>{for(var t in o||(o={}))l.call(o,t)&&n(i,t,o[t]);if(a)for(var t of a(o))g.call(o,t)&&n(i,t,o[t]);return i},p=(i,o)=>c(i,d(o));var r=(i,o,t)=>(n(i,typeof o!="symbol"?o+"":o,t),t);import{aM as C,am as e}from"./index-12776f38.js";import{c as h}from"./chartEditStore-3ab88adb.js";import{$ as s}from"./index-b47c1603.js";import"./plugin-ebadb7ac.js";import"./icon-54d2b417.js";import"./SettingItem-93e574ed.js";/* empty css                                                                   */import"./SettingItemBox-8ad1f53c.js";import"./CollapseItem-b8838832.js";import"./index.esm.min-0c1bbf27.js";import"./http-b34b9610.js";import"./lodash-bd53b66d.js";const u={dataset:"https://enjoyer.vueadmin.com/blt/line16.png",fit:"contain",borderRadius:0};class R extends h{constructor(){super(...arguments);r(this,"key",s.key);r(this,"attr",p(m({},C),{w:618,h:618,x:618,y:0,zIndex:3200}));r(this,"chartConfig",e(s));r(this,"option",e(u))}}export{R as default,u as option};
