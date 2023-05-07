import{c as P,d as k,Z as G,ae as o,l as u,a0 as O,L as V,r as l,o as B,B as w,w as d,g as T,u as F}from"./index-bf5e9e89.js";import{l as n}from"./components-5392f6c4.js";import{i as M}from"./icon-7b13cf26.js";import{u as p,C as A}from"./chartLayoutStore-5710b396.js";import{u as Z}from"./chartEditStore-68139809.js";import"./plugin-d9d5359a.js";var t=(e=>(e.PAGE_SETTING="pageSetting",e.CHART_SETTING="chartSetting",e.CHART_ANIMATION="chartAnimation",e.CHART_DATA="chartData",e.CHART_EVENT="chartEvent",e))(t||{});const j=k({__name:"index",setup(e){const{getDetails:_}=G(p()),{setItem:c}=p(),s=Z(),{ConstructIcon:E,FlashIcon:I,DesktopOutlineIcon:m,LeafIcon:C,RocketIcon:f}=M.ionicons5,h=n(()=>o(()=>import("./index-692eb81c.js"),["static/js/index-692eb81c.js","static/js/index-bf5e9e89.js","static/css/index-324766d4.css","static/js/index-2ed4d4c9.js","static/js/components-5392f6c4.js","static/js/chartEditStore-68139809.js","static/js/plugin-d9d5359a.js","static/js/icon-7b13cf26.js","static/css/index-d853126f.css","static/js/index-d703fa48.js","static/js/SettingItem-23e91160.js","static/css/SettingItemBox-36299330.css","static/js/SettingItemBox-44099fe1.js","static/js/CollapseItem-1d851254.js","static/js/index.esm.min-734a26c9.js","static/js/http-0c17ef5b.js","static/js/lodash-cd7358a6.js","static/css/index-340160bb.css","static/js/index-91e2335f.js","static/css/index-ebca6225.css","static/js/chartLayoutStore-5710b396.js","static/js/index-8ac86d05.js","static/css/index-9007df6d.css","static/js/fileTypeEnum-21359a08.js","static/css/index-6b9d276d.css"])),v=n(()=>o(()=>import("./index-1075e6dc.js"),["static/js/index-1075e6dc.js","static/js/index-bf5e9e89.js","static/css/index-324766d4.css","static/js/fileTypeEnum-21359a08.js","static/js/chartEditStore-68139809.js","static/js/plugin-d9d5359a.js","static/js/icon-7b13cf26.js","static/js/components-5392f6c4.js","static/js/StylesSetting-d79e2868.js","static/js/SettingItem-23e91160.js","static/css/SettingItemBox-36299330.css","static/js/SettingItemBox-44099fe1.js","static/js/CollapseItem-1d851254.js","static/css/index-e3fceb1b.css"])),R=n(()=>o(()=>import("./index-b6c16f0c.js"),["static/js/index-b6c16f0c.js","static/js/index-bf5e9e89.js","static/css/index-324766d4.css","static/js/chartEditStore-68139809.js","static/js/plugin-d9d5359a.js","static/js/icon-7b13cf26.js","static/js/SettingItemBox-44099fe1.js","static/css/SettingItemBox-36299330.css","static/js/StylesSetting-d79e2868.js","static/js/SettingItem-23e91160.js","static/js/CollapseItem-1d851254.js","static/js/useTargetData.hook-773d641f.js","static/css/index-7d80fc96.css"])),D=n(()=>o(()=>import("./index-34835e15.js").then(a=>a.i),["static/js/index-34835e15.js","static/js/index-bf5e9e89.js","static/css/index-324766d4.css","static/js/components-5392f6c4.js","static/js/SettingItemBox-44099fe1.js","static/css/SettingItemBox-36299330.css","static/js/chartEditStore-68139809.js","static/js/plugin-d9d5359a.js","static/js/icon-7b13cf26.js","static/js/useTargetData.hook-773d641f.js"])),S=n(()=>o(()=>import("./index-e9de02d7.js"),["static/js/index-e9de02d7.js","static/js/index-bf5e9e89.js","static/css/index-324766d4.css","static/js/SettingItem-23e91160.js","static/css/SettingItemBox-36299330.css","static/js/SettingItemBox-44099fe1.js","static/js/plugin-d9d5359a.js","static/js/icon-7b13cf26.js","static/js/chartEditStore-68139809.js","static/js/noData-9e194391.js","static/js/useTargetData.hook-773d641f.js","static/js/EditorWorker-44e5efae.js","static/js/editorWorker-09f50f3f.js","static/css/EditorWorker-d7cc37f0.css","static/js/useLifeHandler.hook-ff6bc608.js","static/css/index-7ea3a51d.css"])),L=n(()=>o(()=>import("./index-3ba335ba.js"),["static/js/index-3ba335ba.js","static/js/index-bf5e9e89.js","static/css/index-324766d4.css","static/js/CollapseItem-1d851254.js","static/js/chartEditStore-68139809.js","static/js/plugin-d9d5359a.js","static/js/icon-7b13cf26.js","static/js/useTargetData.hook-773d641f.js","static/css/index-ef74e582.css","static/css/SettingItemBox-36299330.css"])),i=u(_.value),y=u(t.CHART_SETTING),N=()=>{i.value=!0,c(A.DETAILS,!0)},g=()=>{i.value=!1,c(A.DETAILS,!1)};return O(()=>{if(s.getTargetChart.selectId.length!==1)return;const r=s.componentList[s.fetchTargetIndex()];return r!=null&&r.isGroup&&(y.value=t.CHART_SETTING),r}),V(_,a=>{a?N():g()}),t.PAGE_SETTING,[...[{key:t.CHART_SETTING,title:"定制",icon:E,render:R},{key:t.CHART_ANIMATION,title:"动画",icon:C,render:L}],t.CHART_DATA,t.CHART_EVENT],(a,r)=>{const H=l("n-layout-content"),x=l("n-layout");return B(),w(x,{"has-sider":"","sider-placement":"right"},{default:d(()=>[T(H,null,{default:d(()=>[T(F(h))]),_:1})]),_:1})}}}),X=P(j,[["__scopeId","data-v-547f3a86"]]);export{X as default};
