var c=Object.defineProperty,C=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var n=(e,t,a)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,s=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&n(e,a,t[a]);if(r)for(var a of r(t))E.call(t,a)&&n(e,a,t[a]);return e},i=(e,t)=>C(e,g(t));var o=(e,t,a)=>(n(e,typeof t!="symbol"?t+"":t,a),a);import{A as I,E as y,F as T,G as f,H as N}from"./index-d0be0c94.js";import{aM as h,am as m,cr as l}from"./index-9d79f864.js";import{P as d,d as A,c as P}from"./chartEditStore-fdfc1aa7.js";import"./SettingItem-d4c7149f.js";/* empty css                                                                   */import"./SettingItemBox-bc5c7fd4.js";import"./CollapseItem-2dd7fa1d.js";import"./icon-4feaeed1.js";import"./index.esm.min-6a7b311d.js";import"./http-6e0dd9ca.js";import"./lodash-d9dbefb5.js";import"./plugin-4f43ac29.js";const p={key:"InputsDate",chartKey:"VInputsDate",conKey:"VCInputsDate",title:"时间选择器",category:I.INPUTS,categoryName:y.INPUTS,package:d.INFORMATIONS,chartFrame:A.STATIC,image:"inputs_date.png"},D={[l]:f.DATE,isPanel:0,dataset:N().valueOf()};class j extends P{constructor(){super(...arguments);o(this,"key",p.key);o(this,"attr",i(s({},h),{w:260,h:32,zIndex:-1}));o(this,"chartConfig",m(p));o(this,"interactActions",T);o(this,"option",m(D))}}export{j as default,D as option};
