var c=Object.defineProperty,f=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;var n=(i,o,t)=>o in i?c(i,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[o]=t,p=(i,o)=>{for(var t in o||(o={}))g.call(o,t)&&n(i,t,o[t]);if(a)for(var t of a(o))l.call(o,t)&&n(i,t,o[t]);return i},e=(i,o)=>f(i,d(o));var r=(i,o,t)=>(n(i,typeof o!="symbol"?o+"":o,t),t);import{aM as C,am as m}from"./index-f624bd08.js";import{c as x}from"./chartEditStore-f20ea3be.js";import{ad as s}from"./index-92e1c4b0.js";import"./plugin-392dd411.js";import"./icon-528b13ce.js";import"./SettingItem-66dc5001.js";/* empty css                                                                   */import"./SettingItemBox-c26e9867.js";import"./CollapseItem-df57b4b9.js";import"./index.esm.min-3f70e301.js";import"./http-1bad4015.js";import"./lodash-522896cc.js";const h="/static/png/Line4.png",u={dataset:h,fit:"contain",borderRadius:0};class q extends x{constructor(){super(...arguments);r(this,"key",s.key);r(this,"attr",e(p({},C),{w:618,h:618,x:618,y:0,zIndex:2e3}));r(this,"chartConfig",m(s));r(this,"option",m(u))}}export{q as default,u as option};
