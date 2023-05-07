var V=Object.defineProperty,J=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var E=(e,t,r)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))U.call(t,r)&&E(e,r,t[r]);if(k)for(var r of k(t))W.call(t,r)&&E(e,r,t[r]);return e},I=(e,t)=>J(e,Q(t));var y=(e,t,r)=>new Promise((o,i)=>{var d=a=>{try{p(r.next(a))}catch(u){i(u)}},_=a=>{try{p(r.throw(a))}catch(u){i(u)}},p=a=>a.done?o(a.value):Promise.resolve(a.value).then(d,_);p((r=r.apply(e,t)).next())});import{g as b}from"./storage-7aac2acd.js";import{c as v,d as g,o as c,e as l,s as D,ag as S,u as n,ao as O,af as f,ap as w,aq as G,ar as P,B as h,as as q,at as B,G as A,F as M,a0 as m,au as X,n as Y,l as N,av as Z,aw as ee,ax as $,q as te,g as C,a3 as T,w as oe,ay as ne,az as L,aA as re,S as ae}from"./index-bf5e9e89.js";import{u as se,f as ie,a as ce}from"./index-d703fa48.js";import{u as F}from"./useLifeHandler.hook-ff6bc608.js";import{u as x,C as ue}from"./chartEditStore-68139809.js";import"./SettingItem-23e91160.js";/* empty css                                                                   */import"./SettingItemBox-44099fe1.js";import"./CollapseItem-1d851254.js";import"./icon-7b13cf26.js";import"./index.esm.min-734a26c9.js";import"./http-0c17ef5b.js";import"./lodash-cd7358a6.js";import"./plugin-d9d5359a.js";const z=(e,t)=>({zIndex:t+1,left:`${e.x}px`,top:`${e.y}px`}),H=(e,t)=>({width:`${t?t*e.w:e.w}px`,height:`${t?t*e.h:e.h}px`}),j=e=>({display:e.hide?"none":"block"}),K=e=>{const t={};return e&&e.overFlowHidden&&(t.overflow="hidden"),t},le=e=>{const t=e.selectColor?{background:e.background}:{background:`url(${e.backgroundImage}) center center / cover no-repeat !important`};return s({position:"relative",width:e.width?`${e.width||100}px`:"100%",height:e.height?`${e.height}px`:"100%"},t)};const de=g({__name:"index",props:{groupData:{type:Object,required:!0},themeSetting:{type:Object,required:!0},themeColor:{type:Object,required:!0},groupIndex:{type:Number,required:!0}},setup(e){return(t,r)=>(c(!0),l(M,null,D(e.groupData.groupList,o=>(c(),l("div",{class:S(["chart-item",n(O)(o.styles.animations)]),key:o.id,style:f(s(s(s(s(s(s({},n(z)(o.attr,e.groupIndex)),n(w)(o.styles)),n(G)(o.styles)),n(j)(o.status)),n(K)(o.preview)),n(P)(o.styles)))},[(c(),h(A(o.chartConfig.chartKey),q({id:o.id,chartConfig:o,themeSetting:e.themeSetting,themeColor:e.themeColor,style:s({},n(H)(o.attr))},B(n(F)(o))),null,16,["id","chartConfig","themeSetting","themeColor","style"]))],6))),128))}}),pe=v(de,[["__scopeId","data-v-3933053a"]]);const _e=g({__name:"index",setup(e){const{initDataPond:t,clearMittDataPondMap:r}=se(),o=x(),i=m(()=>o.editCanvasConfig.chartThemeSetting),d=m(()=>X(o.editCanvasConfig.chartCustomThemeColorInfo)[o.editCanvasConfig.chartThemeColor]);return r(),Y(()=>{t(o.requestGlobalConfig)}),(_,p)=>(c(!0),l(M,null,D(n(o).componentList,(a,u)=>(c(),l("div",{class:S(["chart-item",n(O)(a.styles.animations)]),key:a.id,style:f(s(s(s(s(s(s({},n(z)(a.attr,u)),n(w)(a.styles)),n(G)(a.styles)),n(j)(a.status)),n(K)(a.preview)),n(P)(a.styles)))},[a.isGroup?(c(),h(n(pe),{key:0,groupData:a,groupIndex:u,themeSetting:n(i),themeColor:n(d)},null,8,["groupData","groupIndex","themeSetting","themeColor"])):(c(),h(A(a.chartConfig.chartKey),q({key:1,id:a.id,chartConfig:a,themeSetting:n(i),themeColor:n(d),style:s({},n(H)(a.attr))},B(n(F)(a))),null,16,["id","chartConfig","themeSetting","themeColor","style"]))],6))),128))}}),R=v(_e,[["__scopeId","data-v-5d390a24"]]),he=e=>{const t=N(!1),r=setInterval(()=>{if(window.$vue.component){clearInterval(r);const o=i=>{window.$vue.component(i.chartConfig.chartKey)||window.$vue.component(i.chartConfig.chartKey,ie(i.chartConfig))};e.componentList.forEach(i=>y(void 0,null,function*(){i.isGroup?i.groupList.forEach(d=>{o(d)}):o(i)})),t.value=!0}},200);return{show:t}},ge=e=>{const t=x();t.requestGlobalConfig=e[ue.REQUEST_GLOBAL_CONFIG]};const ye=g({__name:"suspenseIndex",setup(e){return y(this,null,function*(){let t,r;[t,r]=Z(()=>b()),yield t,r();const o=x();ee(`预览-${o.editCanvasConfig.projectName}`);const i=m(()=>s(s({},le(o.editCanvasConfig)),w(o.editCanvasConfig))),d=m(()=>{const u=o.editCanvasConfig.previewScaleType;return u===$.SCROLL_Y||u===$.SCROLL_X});ge(o);const{entityRef:_,previewRef:p}=ce(o),{show:a}=he(o);return(u,Ce)=>(c(),l("div",{class:S(`go-preview ${n(o).editCanvasConfig.previewScaleType}`)},[n(d)?(c(),l("div",{key:0,ref_key:"entityRef",ref:_,class:"go-preview-entity"},[te("div",{ref_key:"previewRef",ref:p,class:"go-preview-scale"},[n(a)?(c(),l("div",{key:0,style:f(n(i))},[C(n(R))],4)):T("",!0)],512)],512)):(c(),l("div",{key:1,ref_key:"previewRef",ref:p,class:"go-preview-scale"},[n(a)?(c(),l("div",{key:0,style:f(n(i))},[C(n(R))],4)):T("",!0)],512))],2))})}}),fe=v(ye,[["__scopeId","data-v-9fd91fbe"]]),me=g({__name:"index",setup(e){return(t,r)=>(c(),h(ne,null,{default:oe(()=>[C(fe)]),_:1}))}}),Pe=g({__name:"wrapper",setup(e){let t=N(Date.now());return[L.JSON,L.CHART_TO_PREVIEW].forEach(r=>{window.opener&&window.opener.addEventListener(r,o=>y(this,null,function*(){const i=yield b();re(ae.GO_CHART_STORAGE_LIST,[I(s({},o.detail),{id:i.id})]),t.value=Date.now()}))}),(r,o)=>(c(),h(me,{key:n(t)}))}});export{Pe as default};
