import{c as D,d as N,b2 as H,ae as L,m as M,l as O,a0 as u,aw as R,r,o as s,e as l,g as o,w as a,u as h,F as f,s as g,E as $,q as m,h as q,t as F,af as v,ag as P,am as U,z as j,A as G}from"./index-9d79f864.js";import{u as J,f as K}from"./chartEditStore-fdfc1aa7.js";import{i as Q}from"./icon-4feaeed1.js";import{l as W}from"./components-c3c77d36.js";import"./plugin-4f43ac29.js";const X=n=>(j("data-v-416aed18"),n=n(),G(),n),Y={class:"go-chart-theme-color"},Z=X(()=>m("span",null,"自定义颜色",-1)),ee={class:"go-flex-items-center"},oe=N({__name:"index",setup(n){H(e=>({"182fe584":w.value}));const x=W(()=>L(()=>import("./index-caaf4919.js"),["static/js/index-caaf4919.js","static/js/index-9d79f864.js","static/css/index-7e5579fc.css","static/js/plugin-4f43ac29.js","static/js/icon-4feaeed1.js","static/js/chartEditStore-fdfc1aa7.js","static/js/components-c3c77d36.js","static/css/index-68dc4b25.css"])),{SquareIcon:te,AddIcon:E}=Q.ionicons5,c=J(),S=M(),d=O(!1),b=u(()=>R(c.getEditCanvasConfig.chartCustomThemeColorInfo)),w=u(()=>S.getAppTheme),I=u(()=>c.getEditCanvasConfig.chartThemeColor),k=()=>{d.value=!0},A=e=>`linear-gradient(to right, ${e.color[0]} 0%, ${e.color[5]} 100%)`,T=e=>U(e).splice(0,6),y=e=>{c.setEditCanvasConfig(K.CHART_THEME_COLOR,e)};return(e,p)=>{const z=r("n-icon"),B=r("n-text"),C=r("n-card"),V=r("n-ellipsis");return s(),l("div",Y,[o(C,{class:"card-box",size:"small",hoverable:"",embedded:"",onClick:k},{default:a(()=>[o(B,{class:"go-flex-items-center"},{default:a(()=>[Z,o(z,{size:"16"},{default:a(()=>[o(h(E))]),_:1})]),_:1})]),_:1}),(s(!0),l(f,null,g(b.value,(t,i)=>(s(),$(C,{key:i,class:P(["card-box",{selected:i===I.value}]),size:"small",hoverable:"",embedded:"",onClick:_=>y(i)},{default:a(()=>[m("div",ee,[o(V,{style:{"text-align":"left",width:"60px"}},{default:a(()=>[q(F(t.name),1)]),_:2},1024),(s(!0),l(f,null,g(T(t.color),_=>(s(),l("span",{class:"theme-color-item",key:_,style:v({backgroundColor:_})},null,4))),128))]),m("div",{class:"theme-bottom",style:v({backgroundImage:A(t)})},null,4)]),_:2},1032,["class","onClick"]))),128)),o(h(x),{modelShow:d.value,"onUpdate:modelShow":p[0]||(p[0]=t=>d.value=t)},null,8,["modelShow"])])}}}),ce=D(oe,[["__scopeId","data-v-416aed18"]]);export{ce as default};
