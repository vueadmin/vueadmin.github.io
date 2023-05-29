import{c as P,d as k,Z as G,ae as o,l as u,a0 as O,L as V,r as l,o as B,E as w,w as d,g as T,u as F}from"./index-ceb04263.js";import{l as n}from"./components-b84b2119.js";import{i as M}from"./icon-e92a95d4.js";import{u as p,C as A}from"./chartLayoutStore-7d9a2dd0.js";import{u as Z}from"./chartEditStore-66e39698.js";import"./plugin-6413e978.js";var t=(e=>(e.PAGE_SETTING="pageSetting",e.CHART_SETTING="chartSetting",e.CHART_ANIMATION="chartAnimation",e.CHART_DATA="chartData",e.CHART_EVENT="chartEvent",e))(t||{});const j=k({__name:"index",setup(e){const{getDetails:_}=G(p()),{setItem:c}=p(),s=Z(),{ConstructIcon:E,FlashIcon:I,DesktopOutlineIcon:m,LeafIcon:C,RocketIcon:f}=M.ionicons5,h=n(()=>o(()=>import("./index-37824d4a.js"),["static/js/index-37824d4a.js","static/js/index-ceb04263.js","static/css/index-7e5579fc.css","static/js/index-75f95d30.js","static/js/components-b84b2119.js","static/js/chartEditStore-66e39698.js","static/js/plugin-6413e978.js","static/js/icon-e92a95d4.js","static/css/index-d853126f.css","static/js/index-b8b80fff.js","static/js/SettingItem-f4ab2ff5.js","static/css/SettingItemBox-36299330.css","static/js/SettingItemBox-fd503d2d.js","static/js/CollapseItem-1c06d7a4.js","static/js/index.esm.min-ce17e730.js","static/js/http-d36ff187.js","static/js/lodash-a6b644ed.js","static/css/index-baf5e9df.css","static/js/index-c8b1af7e.js","static/css/index-ebca6225.css","static/js/chartLayoutStore-7d9a2dd0.js","static/js/index-dcad4f13.js","static/css/index-9007df6d.css","static/js/fileTypeEnum-21359a08.js","static/js/file-84751f49.js","static/js/packagesStore-66a64033.js","static/css/index-60e4b605.css"])),v=n(()=>o(()=>import("./index-32979d42.js"),["static/js/index-32979d42.js","static/js/index-ceb04263.js","static/css/index-7e5579fc.css","static/js/fileTypeEnum-21359a08.js","static/js/chartEditStore-66e39698.js","static/js/plugin-6413e978.js","static/js/icon-e92a95d4.js","static/js/components-b84b2119.js","static/js/StylesSetting-c8a3fe0b.js","static/js/SettingItem-f4ab2ff5.js","static/css/SettingItemBox-36299330.css","static/js/SettingItemBox-fd503d2d.js","static/js/CollapseItem-1c06d7a4.js","static/css/index-a186e403.css"])),R=n(()=>o(()=>import("./index-5ca91e90.js"),["static/js/index-5ca91e90.js","static/js/index-ceb04263.js","static/css/index-7e5579fc.css","static/js/chartEditStore-66e39698.js","static/js/plugin-6413e978.js","static/js/icon-e92a95d4.js","static/js/SettingItemBox-fd503d2d.js","static/css/SettingItemBox-36299330.css","static/js/StylesSetting-c8a3fe0b.js","static/js/SettingItem-f4ab2ff5.js","static/js/CollapseItem-1c06d7a4.js","static/js/useTargetData.hook-5fa14525.js","static/css/index-7d80fc96.css"])),D=n(()=>o(()=>import("./index-27fb9bd9.js").then(a=>a.i),["static/js/index-27fb9bd9.js","static/js/index-ceb04263.js","static/css/index-7e5579fc.css","static/js/components-b84b2119.js","static/js/SettingItemBox-fd503d2d.js","static/css/SettingItemBox-36299330.css","static/js/chartEditStore-66e39698.js","static/js/plugin-6413e978.js","static/js/icon-e92a95d4.js","static/js/useTargetData.hook-5fa14525.js"])),S=n(()=>o(()=>import("./index-1397af30.js"),["static/js/index-1397af30.js","static/js/index-ceb04263.js","static/css/index-7e5579fc.css","static/js/SettingItem-f4ab2ff5.js","static/css/SettingItemBox-36299330.css","static/js/SettingItemBox-fd503d2d.js","static/js/plugin-6413e978.js","static/js/icon-e92a95d4.js","static/js/chartEditStore-66e39698.js","static/js/useTargetData.hook-5fa14525.js","static/js/EditorWorker-a2a07979.js","static/js/editorWorker-43a98755.js","static/css/EditorWorker-d7cc37f0.css","static/js/useLifeHandler.hook-496ae650.js","static/css/index-e6f60e63.css"])),L=n(()=>o(()=>import("./index-05515bae.js"),["static/js/index-05515bae.js","static/js/index-ceb04263.js","static/css/index-7e5579fc.css","static/js/CollapseItem-1c06d7a4.js","static/js/chartEditStore-66e39698.js","static/js/plugin-6413e978.js","static/js/icon-e92a95d4.js","static/js/useTargetData.hook-5fa14525.js","static/css/index-ef74e582.css","static/css/SettingItemBox-36299330.css"])),i=u(_.value),y=u(t.CHART_SETTING),N=()=>{i.value=!0,c(A.DETAILS,!0)},g=()=>{i.value=!1,c(A.DETAILS,!1)};return O(()=>{if(s.getTargetChart.selectId.length!==1)return;const r=s.componentList[s.fetchTargetIndex()];return r!=null&&r.isGroup&&(y.value=t.CHART_SETTING),r}),V(_,a=>{a?N():g()}),t.PAGE_SETTING,[...[{key:t.CHART_SETTING,title:"定制",icon:E,render:R},{key:t.CHART_ANIMATION,title:"动画",icon:C,render:L}],t.CHART_DATA,t.CHART_EVENT],(a,r)=>{const H=l("n-layout-content"),x=l("n-layout");return B(),w(x,{"has-sider":"","sider-placement":"right"},{default:d(()=>[T(H,null,{default:d(()=>[T(F(h))]),_:1})]),_:1})}}}),X=P(j,[["__scopeId","data-v-547f3a86"]]);export{X as default};
