var c=Object.defineProperty,g=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var e=(r,a,t)=>a in r?c(r,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[a]=t,i=(r,a)=>{for(var t in a||(a={}))C.call(a,t)&&e(r,t,a[t]);if(m)for(var t of m(a))y.call(a,t)&&e(r,t,a[t]);return r},n=(r,a)=>g(r,f(a));var o=(r,a,t)=>(e(r,typeof a!="symbol"?a+"":a,t),t);import{aM as h,am as p}from"./index-9d79f864.js";import{P as u,d as I,c as d}from"./chartEditStore-fdfc1aa7.js";import{A as l,E}from"./index-d0be0c94.js";import"./plugin-4f43ac29.js";import"./icon-4feaeed1.js";import"./SettingItem-d4c7149f.js";/* empty css                                                                   */import"./SettingItemBox-bc5c7fd4.js";import"./CollapseItem-2dd7fa1d.js";import"./index.esm.min-6a7b311d.js";import"./http-6e0dd9ca.js";import"./lodash-d9dbefb5.js";const s={key:"Iframe",chartKey:"VIframe",conKey:"VCIframe",title:"远程网页",category:l.MORE,categoryName:E.MORE,package:u.INFORMATIONS,chartFrame:I.COMMON,image:"iframe.png"},M={dataset:"https://www.mtruning.club/",borderRadius:0};class D extends d{constructor(){super(...arguments);o(this,"key",s.key);o(this,"attr",n(i({},h),{w:1200,h:800,zIndex:-1}));o(this,"chartConfig",p(s));o(this,"option",p(M))}}export{D as default,M as option};
