var O=Object.defineProperty;var u=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var E=(e,n,t)=>n in e?O(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,c=(e,n)=>{for(var t in n||(n={}))f.call(n,t)&&E(e,t,n[t]);if(u)for(var t of u(n))d.call(n,t)&&E(e,t,n[t]);return e};import{aO as r,ci as N}from"./index-cf8681a3.js";const v={},i={echarts:N},y=e=>{if(!e.events)return{};const n={};for(const s in e.events.baseEvent){const o=e.events.baseEvent[s];o&&(n[s]=_(o))}const t=e.events.advancedEvents||{},m={[r.VNODE_BEFORE_MOUNT](s){v[e.id]=s.component;const o=(t[r.VNODE_BEFORE_MOUNT]||"").trim();a(o,s)},[r.VNODE_MOUNTED](s){const o=(t[r.VNODE_MOUNTED]||"").trim();a(o,s)}};return c(c({},n),m)};function _(e){try{return new Function(`
      return (
        async function(mouseEvent){
          ${e}
        }
      )`)()}catch(n){console.error(n)}}function a(e,n){try{Function(`
      "use strict";
      return (
        async function(e, components, node_modules){
          const {${Object.keys(i).join()}} = node_modules;
          ${e}
        }
      )`)().bind(n==null?void 0:n.component)(n,v,i)}catch(t){console.error(t)}}export{i as n,y as u};
