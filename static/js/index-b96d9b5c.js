import{c as P,d as k,Z as G,ae as o,l as u,a0 as O,L as V,r as l,o as B,E as w,w as d,g as T,u as F}from"./index-faaf412e.js";import{l as n}from"./components-3a2c7449.js";import{i as M}from"./icon-4c460499.js";import{u as p,C as A}from"./chartLayoutStore-45ff22c0.js";import{u as Z}from"./chartEditStore-070f091b.js";import"./plugin-f61fd98c.js";var t=(e=>(e.PAGE_SETTING="pageSetting",e.CHART_SETTING="chartSetting",e.CHART_ANIMATION="chartAnimation",e.CHART_DATA="chartData",e.CHART_EVENT="chartEvent",e))(t||{});const j=k({__name:"index",setup(e){const{getDetails:_}=G(p()),{setItem:c}=p(),s=Z(),{ConstructIcon:E,FlashIcon:I,DesktopOutlineIcon:m,LeafIcon:C,RocketIcon:f}=M.ionicons5,h=n(()=>o(()=>import("./index-4245d9e4.js"),["static/js/index-4245d9e4.js","static/js/index-faaf412e.js","static/css/index-365d5483.css","static/js/index-5871e128.js","static/js/components-3a2c7449.js","static/js/chartEditStore-070f091b.js","static/js/plugin-f61fd98c.js","static/js/icon-4c460499.js","static/css/index-d853126f.css","static/js/index-1b4ab024.js","static/js/SettingItem-64606c24.js","static/css/SettingItemBox-36299330.css","static/js/SettingItemBox-b072976d.js","static/js/CollapseItem-dd691c5d.js","static/js/index.esm.min-fa373c7c.js","static/js/http-870c1deb.js","static/js/lodash-c4889ab6.js","static/css/index-436e498c.css","static/js/index-d59da41d.js","static/css/index-ebca6225.css","static/js/chartLayoutStore-45ff22c0.js","static/js/index-e76ee069.js","static/css/index-9007df6d.css","static/js/fileTypeEnum-21359a08.js","static/js/file-84751f49.js","static/js/packagesStore-f0ff66a7.js","static/css/index-1b09446c.css"])),v=n(()=>o(()=>import("./index-c7ad2f43.js"),["static/js/index-c7ad2f43.js","static/js/index-faaf412e.js","static/css/index-365d5483.css","static/js/fileTypeEnum-21359a08.js","static/js/chartEditStore-070f091b.js","static/js/plugin-f61fd98c.js","static/js/icon-4c460499.js","static/js/components-3a2c7449.js","static/js/StylesSetting-77072ce2.js","static/js/SettingItem-64606c24.js","static/css/SettingItemBox-36299330.css","static/js/SettingItemBox-b072976d.js","static/js/CollapseItem-dd691c5d.js","static/css/index-e3fceb1b.css"])),R=n(()=>o(()=>import("./index-c434a57b.js"),["static/js/index-c434a57b.js","static/js/index-faaf412e.js","static/css/index-365d5483.css","static/js/chartEditStore-070f091b.js","static/js/plugin-f61fd98c.js","static/js/icon-4c460499.js","static/js/SettingItemBox-b072976d.js","static/css/SettingItemBox-36299330.css","static/js/StylesSetting-77072ce2.js","static/js/SettingItem-64606c24.js","static/js/CollapseItem-dd691c5d.js","static/js/useTargetData.hook-0f87629a.js","static/css/index-7d80fc96.css"])),D=n(()=>o(()=>import("./index-bc6fe3d7.js").then(a=>a.i),["static/js/index-bc6fe3d7.js","static/js/index-faaf412e.js","static/css/index-365d5483.css","static/js/components-3a2c7449.js","static/js/SettingItemBox-b072976d.js","static/css/SettingItemBox-36299330.css","static/js/chartEditStore-070f091b.js","static/js/plugin-f61fd98c.js","static/js/icon-4c460499.js","static/js/useTargetData.hook-0f87629a.js"])),S=n(()=>o(()=>import("./index-600467ac.js"),["static/js/index-600467ac.js","static/js/index-faaf412e.js","static/css/index-365d5483.css","static/js/SettingItem-64606c24.js","static/css/SettingItemBox-36299330.css","static/js/SettingItemBox-b072976d.js","static/js/plugin-f61fd98c.js","static/js/icon-4c460499.js","static/js/chartEditStore-070f091b.js","static/js/noData-9e194391.js","static/js/useTargetData.hook-0f87629a.js","static/js/EditorWorker-6513c396.js","static/js/editorWorker-43a98755.js","static/css/EditorWorker-d7cc37f0.css","static/js/useLifeHandler.hook-25b780ae.js","static/css/index-7ea3a51d.css"])),L=n(()=>o(()=>import("./index-5ad3fcb4.js"),["static/js/index-5ad3fcb4.js","static/js/index-faaf412e.js","static/css/index-365d5483.css","static/js/CollapseItem-dd691c5d.js","static/js/chartEditStore-070f091b.js","static/js/plugin-f61fd98c.js","static/js/icon-4c460499.js","static/js/useTargetData.hook-0f87629a.js","static/css/index-ef74e582.css","static/css/SettingItemBox-36299330.css"])),i=u(_.value),y=u(t.CHART_SETTING),N=()=>{i.value=!0,c(A.DETAILS,!0)},g=()=>{i.value=!1,c(A.DETAILS,!1)};return O(()=>{if(s.getTargetChart.selectId.length!==1)return;const r=s.componentList[s.fetchTargetIndex()];return r!=null&&r.isGroup&&(y.value=t.CHART_SETTING),r}),V(_,a=>{a?N():g()}),t.PAGE_SETTING,[...[{key:t.CHART_SETTING,title:"定制",icon:E,render:R},{key:t.CHART_ANIMATION,title:"动画",icon:C,render:L}],t.CHART_DATA,t.CHART_EVENT],(a,r)=>{const H=l("n-layout-content"),x=l("n-layout");return B(),w(x,{"has-sider":"","sider-placement":"right"},{default:d(()=>[T(H,null,{default:d(()=>[T(F(h))]),_:1})]),_:1})}}}),X=P(j,[["__scopeId","data-v-547f3a86"]]);export{X as default};
