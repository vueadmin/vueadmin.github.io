var f=Object.defineProperty,s=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var i=(p,e,r)=>e in p?f(p,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):p[e]=r,a=(p,e)=>{for(var r in e||(e={}))C.call(e,r)&&i(p,r,e[r]);if(o)for(var r of o(e))c.call(e,r)&&i(p,r,e[r]);return p},m=(p,e)=>s(p,g(e));var t=(p,e,r)=>(i(p,typeof e!="symbol"?e+"":e,r),r);import{aK as u,ak as n}from"./index-bf5e9e89.js";import{P as h,d as y,c as E}from"./chartEditStore-68139809.js";import{n as d,o as F}from"./index-d703fa48.js";import"./plugin-d9d5359a.js";import"./icon-7b13cf26.js";import"./SettingItem-23e91160.js";/* empty css                                                                   */import"./SettingItemBox-44099fe1.js";import"./CollapseItem-1d851254.js";import"./index.esm.min-734a26c9.js";import"./http-0c17ef5b.js";import"./lodash-cd7358a6.js";const l={key:"FlipperNumber",chartKey:"VFlipperNumber",conKey:"VCFlipperNumber",title:"数字翻牌-需动态触发",category:d.MORE,categoryName:F.MORE,package:h.DECORATES,chartFrame:y.COMMON,image:"flipper-number.png"},N={dataset:3234,flipperLength:6,flipperBgColor:"#16293E",flipperTextColor:"#4A9EF8FF",flipperWidth:30,flipperHeight:50,flipperRadius:5,flipperGap:10,flipperType:"down",flipperSpeed:450};class S extends E{constructor(){super(...arguments);t(this,"key",l.key);t(this,"attr",m(a({},u),{w:300,h:100,zIndex:-1}));t(this,"chartConfig",n(l));t(this,"option",n(N))}}export{S as default,N as option};
