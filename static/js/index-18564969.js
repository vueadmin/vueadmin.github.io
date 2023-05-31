import{c as P,d as k,Z as G,ae as o,l as u,a0 as O,L as V,r as l,o as B,E as w,w as d,g as T,u as F}from"./index-93132c92.js";import{l as n}from"./components-4a5c84e9.js";import{i as M}from"./icon-cc7e3097.js";import{u as p,C as A}from"./chartLayoutStore-72e59aac.js";import{u as Z}from"./chartEditStore-1f8582ce.js";import"./plugin-09849970.js";var t=(e=>(e.PAGE_SETTING="pageSetting",e.CHART_SETTING="chartSetting",e.CHART_ANIMATION="chartAnimation",e.CHART_DATA="chartData",e.CHART_EVENT="chartEvent",e))(t||{});const j=k({__name:"index",setup(e){const{getDetails:_}=G(p()),{setItem:c}=p(),s=Z(),{ConstructIcon:E,FlashIcon:I,DesktopOutlineIcon:m,LeafIcon:C,RocketIcon:f}=M.ionicons5,h=n(()=>o(()=>import("./index-740f77c9.js"),["static/js/index-740f77c9.js","static/js/index-93132c92.js","static/css/index-7e5579fc.css","static/js/index-9c8fd35a.js","static/js/components-4a5c84e9.js","static/js/chartEditStore-1f8582ce.js","static/js/plugin-09849970.js","static/js/icon-cc7e3097.js","static/css/index-d853126f.css","static/js/index-680f3d87.js","static/js/SettingItem-c34b794d.js","static/css/SettingItemBox-36299330.css","static/js/SettingItemBox-1aafed0b.js","static/js/CollapseItem-5f068bec.js","static/js/index.esm.min-3d378139.js","static/js/http-5a56283a.js","static/js/lodash-3b075bf1.js","static/css/index-ce954ed8.css","static/js/index-02a3ffa7.js","static/css/index-ebca6225.css","static/js/chartLayoutStore-72e59aac.js","static/js/index-59b73112.js","static/css/index-9007df6d.css","static/js/fileTypeEnum-21359a08.js","static/js/file-84751f49.js","static/js/packagesStore-f61f9643.js","static/css/index-08453859.css"])),v=n(()=>o(()=>import("./index-2e45a025.js"),["static/js/index-2e45a025.js","static/js/index-93132c92.js","static/css/index-7e5579fc.css","static/js/fileTypeEnum-21359a08.js","static/js/chartEditStore-1f8582ce.js","static/js/plugin-09849970.js","static/js/icon-cc7e3097.js","static/js/components-4a5c84e9.js","static/js/StylesSetting-871bcd8b.js","static/js/SettingItem-c34b794d.js","static/css/SettingItemBox-36299330.css","static/js/SettingItemBox-1aafed0b.js","static/js/CollapseItem-5f068bec.js","static/css/index-a186e403.css"])),R=n(()=>o(()=>import("./index-f8c87a63.js"),["static/js/index-f8c87a63.js","static/js/index-93132c92.js","static/css/index-7e5579fc.css","static/js/chartEditStore-1f8582ce.js","static/js/plugin-09849970.js","static/js/icon-cc7e3097.js","static/js/SettingItemBox-1aafed0b.js","static/css/SettingItemBox-36299330.css","static/js/StylesSetting-871bcd8b.js","static/js/SettingItem-c34b794d.js","static/js/CollapseItem-5f068bec.js","static/js/useTargetData.hook-52a598e9.js","static/css/index-7d80fc96.css"])),D=n(()=>o(()=>import("./index-f8ab0978.js").then(a=>a.i),["static/js/index-f8ab0978.js","static/js/index-93132c92.js","static/css/index-7e5579fc.css","static/js/components-4a5c84e9.js","static/js/SettingItemBox-1aafed0b.js","static/css/SettingItemBox-36299330.css","static/js/chartEditStore-1f8582ce.js","static/js/plugin-09849970.js","static/js/icon-cc7e3097.js","static/js/useTargetData.hook-52a598e9.js"])),S=n(()=>o(()=>import("./index-ae39431c.js"),["static/js/index-ae39431c.js","static/js/index-93132c92.js","static/css/index-7e5579fc.css","static/js/SettingItem-c34b794d.js","static/css/SettingItemBox-36299330.css","static/js/SettingItemBox-1aafed0b.js","static/js/plugin-09849970.js","static/js/icon-cc7e3097.js","static/js/chartEditStore-1f8582ce.js","static/js/useTargetData.hook-52a598e9.js","static/js/EditorWorker-b1d6a2aa.js","static/js/editorWorker-43a98755.js","static/css/EditorWorker-d7cc37f0.css","static/js/useLifeHandler.hook-a33c6d8f.js","static/css/index-e6f60e63.css"])),L=n(()=>o(()=>import("./index-34bc4027.js"),["static/js/index-34bc4027.js","static/js/index-93132c92.js","static/css/index-7e5579fc.css","static/js/CollapseItem-5f068bec.js","static/js/chartEditStore-1f8582ce.js","static/js/plugin-09849970.js","static/js/icon-cc7e3097.js","static/js/useTargetData.hook-52a598e9.js","static/css/index-ef74e582.css","static/css/SettingItemBox-36299330.css"])),i=u(_.value),y=u(t.CHART_SETTING),N=()=>{i.value=!0,c(A.DETAILS,!0)},g=()=>{i.value=!1,c(A.DETAILS,!1)};return O(()=>{if(s.getTargetChart.selectId.length!==1)return;const r=s.componentList[s.fetchTargetIndex()];return r!=null&&r.isGroup&&(y.value=t.CHART_SETTING),r}),V(_,a=>{a?N():g()}),t.PAGE_SETTING,[...[{key:t.CHART_SETTING,title:"定制",icon:E,render:R},{key:t.CHART_ANIMATION,title:"动画",icon:C,render:L}],t.CHART_DATA,t.CHART_EVENT],(a,r)=>{const H=l("n-layout-content"),x=l("n-layout");return B(),w(x,{"has-sider":"","sider-placement":"right"},{default:d(()=>[T(H,null,{default:d(()=>[T(F(h))]),_:1})]),_:1})}}}),X=P(j,[["__scopeId","data-v-547f3a86"]]);export{X as default};
