import{d as V,bh as N,ah as O,O as F,j as H,a1 as u,a as c,o as s,c as l,b as o,w as a,u as n,F as f,q as g,D as L,n as p,e as M,t as R,ax as x,a5 as $,af as q,s as P,x as j,aF as U,h as G}from"./index-20fb0306.js";import{u as J,E as K}from"./chartEditStore-eb4e0443.js";import{i as Q}from"./icon-cb727678.js";import{l as W}from"./index-e3d67d15.js";import"./plugin-2033e7b2.js";const X=r=>(P("data-v-4ce90fea"),r=r(),j(),r),Y={class:"go-chart-theme-color"},Z=X(()=>p("span",null,"自定义颜色",-1)),ee={class:"go-flex-items-center"},oe=V({__name:"index",setup(r){N(e=>({d133daf6:n(w)}));const v=W(()=>O(()=>import("./index-a91fba3c.js"),["./index-a91fba3c.js","./index-20fb0306.js","../css/index-79930e9d.css","./noData-e5cefb25.js","./plugin-2033e7b2.js","./icon-cb727678.js","./chartEditStore-eb4e0443.js","./index-e3d67d15.js","../css/index-615698a0.css","../css/index-db178c17.css"],import.meta.url)),{SquareIcon:te,AddIcon:S}=Q.ionicons5,d=J(),E=F(),i=H(!1),b=u(()=>U(d.getEditCanvasConfig.chartCustomThemeColorInfo)),w=u(()=>E.getAppTheme),I=u(()=>d.getEditCanvasConfig.chartThemeColor),k=()=>{i.value=!0},T=e=>`linear-gradient(to right, ${e.color[0]} 0%, ${e.color[5]} 100%)`,y=e=>q(e).splice(0,6),z=e=>{d.setEditCanvasConfig(K.CHART_THEME_COLOR,e)};return(e,C)=>{const A=c("n-icon"),B=c("n-text"),h=c("n-card"),D=c("n-ellipsis");return s(),l("div",Y,[o(h,{class:"card-box",size:"small",hoverable:"",embedded:"",onClick:k},{default:a(()=>[o(B,{class:"go-flex-items-center"},{default:a(()=>[Z,o(A,{size:"16"},{default:a(()=>[o(n(S))]),_:1})]),_:1})]),_:1}),(s(!0),l(f,null,g(n(b),(t,_)=>(s(),L(h,{key:_,class:$(["card-box",{selected:_===n(I)}]),size:"small",hoverable:"",embedded:"",onClick:m=>z(_)},{default:a(()=>[p("div",ee,[o(D,{style:{"text-align":"left",width:"60px"}},{default:a(()=>[M(R(t.name),1)]),_:2},1024),(s(!0),l(f,null,g(y(t.color),m=>(s(),l("span",{class:"theme-color-item",key:m,style:x({backgroundColor:m})},null,4))),128))]),p("div",{class:"theme-bottom",style:x({backgroundImage:T(t)})},null,4)]),_:2},1032,["class","onClick"]))),128)),o(n(v),{modelShow:i.value,"onUpdate:modelShow":C[0]||(C[0]=t=>i.value=t)},null,8,["modelShow"])])}}});const le=G(oe,[["__scopeId","data-v-4ce90fea"]]);export{le as default};
