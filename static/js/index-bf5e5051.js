import{c as P,d as k,Z as G,ae as o,l as u,a0 as O,L as V,r as l,o as B,E as w,w as d,g as T,u as F}from"./index-e3e8e34e.js";import{l as n}from"./components-7e2a82f6.js";import{i as M}from"./icon-b5d84c93.js";import{u as p,C as A}from"./chartLayoutStore-9c757bbb.js";import{u as Z}from"./chartEditStore-a61563c8.js";import"./plugin-6acf2e29.js";var t=(e=>(e.PAGE_SETTING="pageSetting",e.CHART_SETTING="chartSetting",e.CHART_ANIMATION="chartAnimation",e.CHART_DATA="chartData",e.CHART_EVENT="chartEvent",e))(t||{});const j=k({__name:"index",setup(e){const{getDetails:_}=G(p()),{setItem:c}=p(),s=Z(),{ConstructIcon:E,FlashIcon:I,DesktopOutlineIcon:m,LeafIcon:C,RocketIcon:f}=M.ionicons5,h=n(()=>o(()=>import("./index-28f177b7.js"),["static/js/index-28f177b7.js","static/js/index-e3e8e34e.js","static/css/index-7e5579fc.css","static/js/index-f73ef8b2.js","static/js/components-7e2a82f6.js","static/js/chartEditStore-a61563c8.js","static/js/plugin-6acf2e29.js","static/js/icon-b5d84c93.js","static/css/index-d853126f.css","static/js/index-029db510.js","static/js/SettingItem-2a3edcdc.js","static/css/SettingItemBox-36299330.css","static/js/SettingItemBox-5dff6656.js","static/js/CollapseItem-7dde3ac4.js","static/js/index.esm.min-24caa74b.js","static/js/http-a7b30693.js","static/js/lodash-06953b97.js","static/css/index-ce954ed8.css","static/js/index-3b240511.js","static/css/index-ebca6225.css","static/js/chartLayoutStore-9c757bbb.js","static/js/index-34b6d7cf.js","static/css/index-9007df6d.css","static/js/fileTypeEnum-21359a08.js","static/js/file-84751f49.js","static/js/packagesStore-e2ab9429.js","static/css/index-1cbfb036.css"])),v=n(()=>o(()=>import("./index-71efb656.js"),["static/js/index-71efb656.js","static/js/index-e3e8e34e.js","static/css/index-7e5579fc.css","static/js/fileTypeEnum-21359a08.js","static/js/chartEditStore-a61563c8.js","static/js/plugin-6acf2e29.js","static/js/icon-b5d84c93.js","static/js/components-7e2a82f6.js","static/js/StylesSetting-f9984132.js","static/js/SettingItem-2a3edcdc.js","static/css/SettingItemBox-36299330.css","static/js/SettingItemBox-5dff6656.js","static/js/CollapseItem-7dde3ac4.js","static/css/index-a186e403.css"])),R=n(()=>o(()=>import("./index-517ae636.js"),["static/js/index-517ae636.js","static/js/index-e3e8e34e.js","static/css/index-7e5579fc.css","static/js/chartEditStore-a61563c8.js","static/js/plugin-6acf2e29.js","static/js/icon-b5d84c93.js","static/js/SettingItemBox-5dff6656.js","static/css/SettingItemBox-36299330.css","static/js/StylesSetting-f9984132.js","static/js/SettingItem-2a3edcdc.js","static/js/CollapseItem-7dde3ac4.js","static/js/useTargetData.hook-f68fb509.js","static/css/index-7d80fc96.css"])),D=n(()=>o(()=>import("./index-a2698493.js").then(a=>a.i),["static/js/index-a2698493.js","static/js/index-e3e8e34e.js","static/css/index-7e5579fc.css","static/js/components-7e2a82f6.js","static/js/SettingItemBox-5dff6656.js","static/css/SettingItemBox-36299330.css","static/js/chartEditStore-a61563c8.js","static/js/plugin-6acf2e29.js","static/js/icon-b5d84c93.js","static/js/useTargetData.hook-f68fb509.js"])),S=n(()=>o(()=>import("./index-24e129cb.js"),["static/js/index-24e129cb.js","static/js/index-e3e8e34e.js","static/css/index-7e5579fc.css","static/js/SettingItem-2a3edcdc.js","static/css/SettingItemBox-36299330.css","static/js/SettingItemBox-5dff6656.js","static/js/plugin-6acf2e29.js","static/js/icon-b5d84c93.js","static/js/chartEditStore-a61563c8.js","static/js/useTargetData.hook-f68fb509.js","static/js/EditorWorker-7f413163.js","static/js/editorWorker-43a98755.js","static/css/EditorWorker-d7cc37f0.css","static/js/useLifeHandler.hook-2eafe8a2.js","static/css/index-e6f60e63.css"])),L=n(()=>o(()=>import("./index-d1c0f0b3.js"),["static/js/index-d1c0f0b3.js","static/js/index-e3e8e34e.js","static/css/index-7e5579fc.css","static/js/CollapseItem-7dde3ac4.js","static/js/chartEditStore-a61563c8.js","static/js/plugin-6acf2e29.js","static/js/icon-b5d84c93.js","static/js/useTargetData.hook-f68fb509.js","static/css/index-ef74e582.css","static/css/SettingItemBox-36299330.css"])),i=u(_.value),y=u(t.CHART_SETTING),N=()=>{i.value=!0,c(A.DETAILS,!0)},g=()=>{i.value=!1,c(A.DETAILS,!1)};return O(()=>{if(s.getTargetChart.selectId.length!==1)return;const r=s.componentList[s.fetchTargetIndex()];return r!=null&&r.isGroup&&(y.value=t.CHART_SETTING),r}),V(_,a=>{a?N():g()}),t.PAGE_SETTING,[...[{key:t.CHART_SETTING,title:"定制",icon:E,render:R},{key:t.CHART_ANIMATION,title:"动画",icon:C,render:L}],t.CHART_DATA,t.CHART_EVENT],(a,r)=>{const H=l("n-layout-content"),x=l("n-layout");return B(),w(x,{"has-sider":"","sider-placement":"right"},{default:d(()=>[T(H,null,{default:d(()=>[T(F(h))]),_:1})]),_:1})}}}),X=P(j,[["__scopeId","data-v-547f3a86"]]);export{X as default};
