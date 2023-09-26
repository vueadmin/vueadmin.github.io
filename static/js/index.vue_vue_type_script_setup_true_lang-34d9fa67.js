import{L as Q}from"./index-e3d67d15.js";import{d as H,a0 as W,j as I,l as Z,ai as S,aj as G,J as B,o as l,D as d,w as e,b as t,u as m,c as V,q as ee,F as j,e as c,a as o,t as O,a9 as U,n as P,h as z,ak as $,H as R,Y as N,al as te,X as E,am as ne,an as oe,ao as se,S as ae,z as le,r as L}from"./index-20fb0306.js";import{i as D}from"./icon-cb727678.js";const ce=c("系统设置"),_e=H({__name:"index",props:{modelShow:Boolean},emits:["update:modelShow"],setup(C,{emit:i}){const w=C,{HelpOutlineIcon:T,CloseIcon:A}=D.ionicons5,s=W(),p=I(!1),f=Z([{key:S.ASIDE_ALL_COLLAPSED,value:s.getAsideAllCollapsed,type:"switch",name:"菜单折叠",desc:"首页菜单折叠时隐藏至界面外"},{key:S.HIDE_PACKAGE_ONE_CATEGORY,value:s.getHidePackageOneCategory,type:"switch",name:"隐藏分类",desc:"工作空间表单分类只有单项时隐藏"},{key:S.CHANGE_LANG_RELOAD,value:s.getChangeLangReload,type:"switch",name:"切换语言",desc:"切换语言重新加载页面",tip:"若遇到部分区域语言切换失败，则建议开启"},{key:"divider1",type:"divider",name:"",desc:"",value:""},{key:S.CHART_TOOLS_STATUS_HIDE,value:s.getChartToolsStatusHide,type:"switch",name:"隐藏工具栏",desc:"鼠标移入时，会展示切换到展开模式"},{key:S.CHART_TOOLS_STATUS,value:s.getChartToolsStatus,type:"select",name:"工具栏展示",desc:"工作空间工具栏展示方式",options:[{label:"侧边栏",value:G.ASIDE},{label:"底部 Dock",value:G.DOCK}]},{key:"divider0",type:"divider",name:"",desc:"",value:""},{key:S.CHART_MOVE_DISTANCE,value:s.getChartMoveDistance,type:"number",name:"移动距离",min:1,step:1,suffix:"px",desc:"工作空间方向键控制移动距离"},{key:S.CHART_ALIGN_RANGE,value:s.getChartAlignRange,type:"number",name:"吸附距离",min:10,step:2,suffix:"px",desc:"工作空间移动图表时的吸附距离"}]);B(()=>w.modelShow,y=>{p.value=y});const k=()=>{i("update:modelShow",!1)},h=(y,_)=>{s.setItem(_.key,_.value)};return(y,_)=>{const u=o("n-h3"),x=o("n-icon"),a=o("n-space"),v=o("n-divider"),b=o("n-text"),g=o("n-switch"),F=o("n-input-number"),Y=o("n-select"),K=o("n-tooltip"),q=o("n-list-item"),J=o("n-list"),X=o("n-modal");return l(),d(X,{show:p.value,"onUpdate:show":_[0]||(_[0]=n=>p.value=n),onAfterLeave:k},{default:e(()=>[t(J,{bordered:"",class:"go-system-setting"},{header:e(()=>[t(a,{justify:"space-between"},{default:e(()=>[t(u,{class:"go-mb-0"},{default:e(()=>[ce]),_:1}),t(x,{size:"20",class:"go-cursor-pointer",onClick:k},{default:e(()=>[t(m(A))]),_:1})]),_:1})]),default:e(()=>[(l(!0),V(j,null,ee(f,n=>(l(),d(q,{key:n.key},{default:e(()=>[n.type==="divider"?(l(),d(v,{key:0,style:{margin:"0"}})):(l(),d(a,{key:1,size:40},{default:e(()=>[t(a,null,{default:e(()=>[t(b,{class:"item-left"},{default:e(()=>[c(O(n.name),1)]),_:2},1024),n.type==="switch"?(l(),d(g,{key:0,value:n.value,"onUpdate:value":[r=>n.value=r,r=>h(r,n)],size:"small"},null,8,["value","onUpdate:value"])):n.type==="number"?(l(),d(F,{key:1,value:n.value,"onUpdate:value":[r=>n.value=r,r=>h(r,n)],class:"input-num-width",size:"small",step:n.step||null,suffix:n.suffix||null,min:n.min||0},null,8,["value","onUpdate:value","step","suffix","min"])):n.type==="select"?(l(),d(Y,{key:2,class:"select-min-width",value:n.value,"onUpdate:value":[r=>n.value=r,r=>h(r,n)],size:"small",options:n.options},null,8,["value","onUpdate:value","options"])):U("",!0)]),_:2},1024),t(a,null,{default:e(()=>[t(b,{class:"item-right"},{default:e(()=>[c(O(n.desc),1)]),_:2},1024),n.tip?(l(),d(K,{key:0,trigger:"hover"},{trigger:e(()=>[t(x,{size:"21"},{default:e(()=>[t(m(T))]),_:1})]),default:e(()=>[P("span",null,O(n.tip),1)]),_:2},1024)):U("",!0)]),_:2},1024)]),_:2},1024))]),_:2},1024))),128))]),_:1})]),_:1},8,["show"])}}});const de=z(_e,[["__scopeId","data-v-fa104537"]]),ue=c("关于我们"),re=c("版权声明："),ie=c(" GoView 版权属于 "),pe=c("https://gitee.com/MTrun/go-view"),me=c(" 项目作者 "),fe=c("协议备注："),ve=c(" 请遵守开源 MIT 协议，以上声明 "),he=c("不可删除"),ye=c("，否则视作侵权行为，后果自负！ "),ge=c("商业授权："),Se=c(" 若不想保留版权声明，请通过仓库/交流群 联系项目作者，进行授权 "),we=H({__name:"index",props:{modelShow:Boolean},emits:["update:modelShow"],setup(C,{emit:i}){const w=C,{HelpOutlineIcon:T,CloseIcon:A}=D.ionicons5,s=I(!1);B(()=>w.modelShow,f=>{s.value=f});const p=()=>{i("update:modelShow",!1)};return(f,k)=>{const h=o("n-h3"),y=o("n-icon"),_=o("n-space"),u=o("n-text"),x=o("n-a"),a=o("n-list-item"),v=o("n-list"),b=o("n-modal");return l(),d(b,{show:s.value,"onUpdate:show":k[0]||(k[0]=g=>s.value=g),onAfterLeave:p},{default:e(()=>[t(v,{bordered:"",class:"go-system-info"},{header:e(()=>[t(_,{justify:"space-between"},{default:e(()=>[t(h,{class:"go-mb-0"},{default:e(()=>[ue]),_:1}),t(y,{size:"20",class:"go-cursor-pointer",onClick:p},{default:e(()=>[t(m(A))]),_:1})]),_:1})]),default:e(()=>[t(a,null,{default:e(()=>[t(_,{class:"go-my-2",size:20},{default:e(()=>[t(u,{class:"item-left"},{default:e(()=>[re]),_:1}),t(u,null,{default:e(()=>[ie,t(x,{href:"https://gitee.com/MTrun/go-view",target:"_blank"},{default:e(()=>[pe]),_:1}),me]),_:1})]),_:1})]),_:1}),t(a,null,{default:e(()=>[t(_,{class:"go-my-2",size:20},{default:e(()=>[t(u,{class:"item-left"},{default:e(()=>[fe]),_:1}),t(u,null,{default:e(()=>[ve,t(u,{type:"error"},{default:e(()=>[he]),_:1}),ye]),_:1})]),_:1})]),_:1}),t(a,null,{default:e(()=>[t(_,{class:"go-mt-2",size:20},{default:e(()=>[t(u,{class:"item-left"},{default:e(()=>[ge]),_:1}),t(u,null,{default:e(()=>[Se]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["show"])}}});const ke=z(we,[["__scopeId","data-v-a1946442"]]),M=""+new URL("../png/person.png",import.meta.url).href,xe={class:"user-info-box"},be=H({__name:"index",setup(C){const{ChatboxEllipsesIcon:i,PersonIcon:w,LogOutOutlineIcon:T,SettingsSharpIcon:A}=D.ionicons5,s=I(!1),p=I(!1),f=I(!1),h=I([{label:"我的信息",key:"info",type:"render",render:()=>E("div",{style:"display: flex; align-items: center; padding: 8px 12px;"},[E($,{round:!0,style:"margin-right: 12px;",src:M}),E("div",null,[E("div",null,[E(ne,{depth:2},{default:()=>{const a=oe(se.GO_SYSTEM_STORE);return a?a[ae.USER_INFO][le.USER_NAME]:"admin"}})])])])},{type:"divider",key:"d1"},{label:R("global.sys_set"),key:"sysSet",icon:N(A)},{label:R("global.contact"),key:"contact",icon:N(i)},{type:"divider",key:"d3"},{label:R("global.logout"),key:"logout",icon:N(T)}]),y=a=>{f.value=!0},_=()=>{p.value=!0},u=()=>{s.value=!0},x=a=>{switch(a){case"contact":u();break;case"sysSet":_();break;case"logout":te();break}};return(a,v)=>{const b=o("n-dropdown");return l(),V(j,null,[t(b,{trigger:"hover",onSelect:x,"show-arrow":!0,options:h.value},{default:e(()=>[P("div",xe,[f.value?(l(),d(m(w),{key:0})):U("",!0),f.value?U("",!0):(l(),d(m($),{key:1,round:"","object-fit":"cover",size:"medium",src:m(M),onError:y},null,8,["src"]))])]),_:1},8,["options"]),t(m(de),{modelShow:p.value,"onUpdate:modelShow":v[0]||(v[0]=g=>p.value=g)},null,8,["modelShow"]),t(m(ke),{modelShow:s.value,"onUpdate:modelShow":v[1]||(v[1]=g=>s.value=g)},null,8,["modelShow"])],64)}}});const Ie=z(be,[["__scopeId","data-v-fb1672e4"]]),Te=H({__name:"index",setup(C){return(i,w)=>(l(),d(m(Q),null,{left:e(()=>[L(i.$slots,"left")]),center:e(()=>[L(i.$slots,"center")]),"ri-left":e(()=>[L(i.$slots,"ri-left")]),"ri-right":e(()=>[t(m(Ie)),L(i.$slots,"ri-right")]),_:3}))}});export{de as G,Te as _};
