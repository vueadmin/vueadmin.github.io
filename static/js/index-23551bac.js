import{d as Q,$ as X,l as h,Y as a,a1 as v,a as r,o as n,D as c,w as t,b as o,u as y,c as b,q as I,E as A,n as u,t as H,F as B,ba as Z,s as tt,x as et,h as ot}from"./index-20fb0306.js";import{g as st}from"./plugin-2033e7b2.js";import{i as w}from"./icon-cb727678.js";import{u as nt}from"./useKeyboard.hook-0c1f8f7b.js";import{u as at}from"./useSync.hook-b03903fa.js";import{u as rt,a as ct,H as d}from"./chartEditStore-eb4e0443.js";import{u as L,C as _}from"./chartLayoutStore-b4f2137a.js";import"./index-63f16b81.js";import"./SettingItem-11e342fe.js";/* empty css                                                                      */import"./SettingItemBox-6e9bb9c5.js";import"./CollapseItem.vue_vue_type_script_setup_true_lang-561b5bfa.js";import"./chart-169a825c.js";import"./project.api-bcdd5979.js";const lt=l=>(tt("data-v-73bd34c5"),l=l(),et(),l),it={class:"save-btn"},pt=lt(()=>u("span",null,"保存",-1)),dt=Q({__name:"index",setup(l){const{LayersIcon:x,BarChartIcon:D,PrismIcon:E,HomeIcon:F,ArrowBackIcon:R,ArrowForwardIcon:K}=w.ionicons5,{SaveIcon:T}=w.carbon,{setItem:z}=L(),{dataSyncUpdate:$}=at(),{getLayers:q,getCharts:N,getDetails:O}=X(L()),k=rt(),g=ct(),P=h([{key:_.CHARTS,select:N,title:"图表组件",icon:a(D)},{key:_.LAYERS,select:q,title:"图层控制",icon:a(x)},{key:_.DETAILS,select:O,title:"详情设置",icon:a(E)}]),V=v(()=>g.getBackStack.length>1),W=v(()=>g.getForwardStack.length>0),Y=h([{key:d.BACK_STACK,select:V,title:"后退",icon:a(R)},{key:d.FORWARD_STACK,select:W,title:"前进",icon:a(K)}]),M=s=>s.key===_.DETAILS?s.select?"":"primary":s.select?"primary":"",U=s=>{z(s.key,!s.select)},j=s=>{switch(s.key){case d.BACK_STACK:k.setBack();break;case d.FORWARD_STACK:k.setForward();break}},G=()=>{st({message:"确定已保存了数据（Ctrl / ⌘ + S），并返回到首页吗？",isMaskClosable:!0,onPositiveCallback:()=>{Z(),nt()}})};return(s,i)=>{const C=r("n-icon"),p=r("n-button"),m=r("n-tooltip"),S=r("n-divider"),f=r("n-space");return n(),c(f,{class:"header-left-btn",size:25},{default:t(()=>[o(p,{size:"small",quaternary:"",onClick:i[0]||(i[0]=e=>G())},{icon:t(()=>[o(C,{depth:3},{default:t(()=>[o(y(F))]),_:1})]),_:1}),o(f,null,{default:t(()=>[(n(!0),b(B,null,I(P,e=>(n(),c(m,{key:e.key,placement:"bottom",trigger:"hover"},{trigger:t(()=>[o(p,{size:"small",ghost:"",type:M(e),focusable:!1,onClick:J=>U(e)},{default:t(()=>[(n(),c(A(e.icon)))]),_:2},1032,["type","onClick"])]),default:t(()=>[u("span",null,H(e.title),1)]),_:2},1024))),128)),o(S,{vertical:""}),(n(!0),b(B,null,I(Y,e=>(n(),c(m,{key:e.key,placement:"bottom",trigger:"hover"},{trigger:t(()=>[o(p,{size:"small",ghost:"",type:"primary",disabled:!e.select,onClick:J=>j(e)},{default:t(()=>[(n(),c(A(e.icon)))]),_:2},1032,["disabled","onClick"])]),default:t(()=>[u("span",null,H(e.title),1)]),_:2},1024))),128)),o(S,{vertical:""}),o(m,{placement:"bottom",trigger:"hover"},{trigger:t(()=>[u("div",it,[o(p,{size:"small",type:"primary",ghost:"",onClick:i[1]||(i[1]=e=>y($)())},{icon:t(()=>[o(C,null,{default:t(()=>[o(y(T))]),_:1})]),_:1})])]),default:t(()=>[pt]),_:1})]),_:1})]),_:1})}}});const Ht=ot(dt,[["__scopeId","data-v-73bd34c5"]]);export{Ht as default};
