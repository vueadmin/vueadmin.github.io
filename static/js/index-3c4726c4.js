var Fe=Object.defineProperty,Ee=Object.defineProperties;var ke=Object.getOwnPropertyDescriptors;var ce=Object.getOwnPropertySymbols;var xe=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable;var re=(c,d,m)=>d in c?Fe(c,d,{enumerable:!0,configurable:!0,writable:!0,value:m}):c[d]=m,Z=(c,d)=>{for(var m in d||(d={}))xe.call(d,m)&&re(c,m,d[m]);if(ce)for(var m of ce(d))be.call(d,m)&&re(c,m,d[m]);return c},ee=(c,d)=>Ee(c,ke(d));import{c as de,d as _e,b0 as ye,ae as Ae,l as oe,p as te,L as pe,ak as T,a0 as ne,cR as De,cS as we,cT as Ie,r as s,o as v,e as E,g as e,w as o,q as i,F as z,s as U,ag as se,Q as $e,R as Be,u as r,af as Q,a3 as le,h as b,al as H,cU as Te,cV as He,z as ve,A as me,M as ie,B as j,t as Se}from"./index-bf5e9e89.js";import{n as Oe}from"./noData-9e194391.js";import{g as R}from"./plugin-d9d5359a.js";import{i as fe}from"./icon-7b13cf26.js";import{u as Re,f as q}from"./chartEditStore-68139809.js";import{l as ze}from"./components-5392f6c4.js";const ae=c=>(ve("data-v-e343b444"),c=c(),me(),c),Ue={key:0,class:"create-color-setting"},Le=b("名称:"),Me=b("底部图表仅展示 7 条数据"),Pe={class:"color-list-box go-mt-3","x-gap":12,"y-gap":12,cols:4},Ne=b(" 删除颜色 "),Ve={class:"go-flex-items-center"},je=ae(()=>i("span",{class:"go-mr-4"},"添加",-1)),qe={class:"expend-color-box"},Qe=b("默认扩展色："),Ge=["onClick"],Je=ae(()=>i("div",{class:"n-color-picker-checkboard"},null,-1)),Ke=b("透明扩展色："),We=["onClick"],Xe=ae(()=>i("div",{class:"n-color-picker-checkboard"},null,-1)),Ye=_e({__name:"index",props:{selectColor:Object},emits:["updateColor"],setup(c,{emit:d}){const m=c;ye(n=>({"05db3b1c":_.color}));const{AddIcon:G,TrashIcon:J}=fe.ionicons5,K=ze(()=>Ae(()=>import("./index-b49e596e.js"),["static/js/index-b49e596e.js","static/js/index.esm.min-734a26c9.js","static/js/index-bf5e9e89.js","static/css/index-324766d4.css","static/js/chartEditStore-68139809.js","static/js/plugin-d9d5359a.js","static/js/icon-7b13cf26.js"])),l=oe(),_=te({index:-1,color:""});pe(()=>{var n;return(n=m.selectColor)==null?void 0:n.id},()=>{var n;l.value=T(m.selectColor),_.index=0,_.color=(n=l.value)==null?void 0:n.color[0]},{immediate:!0,deep:!1});const I=ne(()=>h(_.color)),h=n=>{if(!n)return{default:[],fade:[]};const a=36,f=[],y=[],t=[];for(let u=0;u<a;u++)y.unshift(De(n,1/100*(u+1))),f.push(we(n,3.5/100*(u+1)));return f.forEach((u,F)=>{t.unshift(Ie(u,1/100*(F+1)))}),{default:[...y.reverse().splice(0,parseInt(`${a/2}`)-9),...f.splice(0,parseInt(`${a/2}`))],fade:t.reverse().splice(0,27)}},p=n=>({backgroundColor:n}),g=(n,a)=>{_.color=n,_.index=a},k=(n,a)=>{n&&(_.color=n),a&&(_.index=a),H(()=>{d("updateColor",l.value)})},L=(n,a)=>{const f=a?Te(n):He(n);l.value&&(l.value.color[_.index]=f),H(()=>{d("updateColor",l.value)})},S=()=>{var a,f,y;const n=((f=l.value)==null?void 0:f.color[((a=l.value)==null?void 0:a.color.length)-1])||"#2c2c31";(y=l.value)==null||y.color.push(n),H(()=>{d("updateColor",l.value)})},M=n=>{var a,f;(a=l.value)==null||a.color.splice(n,1),n===_.index&&k((f=l.value)==null?void 0:f.color[n-1],n-1)},W=()=>{H(()=>{d("updateColor",l.value)})};return(n,a)=>{const f=s("n-input-group-label"),y=s("n-input"),t=s("n-input-group"),u=s("n-tag"),F=s("n-space"),A=s("n-color-picker"),P=s("n-icon"),O=s("n-tooltip"),$=s("n-button"),X=s("n-scrollbar"),B=s("n-card"),N=s("n-text"),V=s("n-divider");return l.value?(v(),E("div",Ue,[e(B,{bordered:!1,role:"dialog",size:"small","aria-modal":"true"},{default:o(()=>[e(F,{justify:"space-between"},{default:o(()=>[e(t,null,{default:o(()=>[e(f,null,{default:o(()=>[Le]),_:1}),e(y,{class:"create-color-name",value:l.value.name,"onUpdate:value":a[0]||(a[0]=x=>l.value.name=x),valueModifiers:{trim:!0},maxlength:"8","show-count":"",clearable:"",onChange:W},null,8,["value"])]),_:1}),e(u,{type:"warning"},{default:o(()=>[Me]),_:1})]),_:1}),e(X,{style:{"max-height":"132px"}},{default:o(()=>[i("div",Pe,[(v(!0),E(z,null,U(l.value.color,(x,C)=>(v(),E("div",{class:"color-list-item",key:C},[i("div",{class:se(["go-flex-items-center",{select:C===_.index}])},[e(A,{style:{width:"95px"},value:l.value.color[C],"onUpdate:value":D=>l.value.color[C]=D,"show-preview":!0,modes:["hex"],onComplete:D=>k(D,C),"onUpdate:show":D=>g(x,C)},null,8,["value","onUpdate:value","onComplete","onUpdate:show"]),$e(i("div",null,[e(O,{trigger:"hover"},{trigger:o(()=>[e(P,{class:"go-ml-1 go-cursor-pointer",size:"16",depth:3,onClick:D=>M(C)},{default:o(()=>[e(r(J))]),_:2},1032,["onClick"])]),default:o(()=>[Ne]),_:2},1024)],512),[[Be,C>5]])],2)]))),128)),i("div",null,[e($,{type:"primary",secondary:"",onClick:S},{default:o(()=>[i("div",Ve,[je,e(P,{size:"16"},{default:o(()=>[e(r(G))]),_:1})])]),_:1})])])]),_:1})]),_:1}),i("div",qe,[e(B,{class:"go-mt-3 expend-color",bordered:!1,role:"dialog",size:"small","aria-modal":"true"},{default:o(()=>[e(N,null,{default:o(()=>[Qe]),_:1}),e(V,{style:{margin:"10px 0"}}),e(F,{size:[4,0],justify:"center"},{default:o(()=>[(v(!0),E(z,null,U(r(I).default,(x,C)=>(v(),E("div",{class:"color-computed-item",key:C,onClick:D=>L(x,!1)},[Je,i("div",{style:Q(p(x))},null,4)],8,Ge))),128))]),_:1})]),_:1}),e(B,{class:"go-mt-3 expend-color",bordered:!1,role:"dialog",size:"small","aria-modal":"true"},{default:o(()=>[e(N,null,{default:o(()=>[Ke]),_:1}),e(V,{style:{margin:"10px 0"}}),e(F,{size:[4,0],justify:"center"},{default:o(()=>[(v(!0),E(z,null,U(r(I).fade,(x,C)=>(v(),E("div",{class:"color-computed-item",key:C,onClick:D=>L(x,!0)},[Xe,i("div",{style:Q(p(x))},null,4)],8,We))),128))]),_:1})]),_:1})]),e(r(K),{color:r(T)(l.value.color).splice(0,7)},null,8,["color"])])):le("",!0)}}}),Ze=de(Ye,[["__scopeId","data-v-e343b444"]]);const Ce=c=>(ve("data-v-07525464"),c=c(),me(),c),eo={class:"create-content"},oo={class:"create-color-setting-box"},to={key:1,class:"no-data go-flex-center"},no=["src"],so=b("暂未选择自定义颜色"),lo={class:"color-list-box"},ao={class:"color-list"},uo=Ce(()=>i("span",null," 创建 ",-1)),co=Ce(()=>i("span",null," 应用数据 ",-1)),ro=b(" 暂无自定义颜色， "),io=b("立即创建"),_o={class:"go-flex-items-center"},po=b(" 删除自定义颜色 "),vo=b("操作完成"),mo=_e({__name:"index",props:{modelShow:Boolean},emits:["update:modelShow","editSaveHandle"],setup(c,{emit:d}){const m=c,{DuplicateOutlineIcon:G,TrashIcon:J,ArrowDownIcon:K}=fe.ionicons5,l={id:ie(),name:"未命名",color:["#6ae5bb","#69e3de","#5ac5ee","#5ac4ee","#4498ec","#3c7ddf"]},_=Re(),I=oe(!1);let h=te(_.getEditCanvasConfig.chartCustomThemeColorInfo||[]);const p=oe(void 0),g=te({selectInfo:h[0]});pe(()=>m.modelShow,t=>{I.value=t,t&&h.length&&(g.selectInfo=h[0])});const k=ne(()=>{var t;return(t=g==null?void 0:g.selectInfo)==null?void 0:t.id}),L=ne(()=>_.getEditCanvasConfig.chartThemeColor),S=t=>{t.id!==k.value&&(p.value!==void 0?R({message:"当前有变动未保存，是否直接放弃修改？",onPositiveCallback:()=>{p.value=void 0,g.selectInfo=t}}):g.selectInfo=t)},M=()=>{const t=()=>{const u=ee(Z({},T(l)),{id:ie()});g.selectInfo=u,h.push(u),S(u),p.value=u,a(!1)};p.value!==void 0?R({message:"当前有变动未保存，是否直接放弃修改？",onPositiveCallback:()=>{p.value=void 0,t()}}):t()},W=t=>{const u=()=>{h.splice(t,1),_.setEditCanvasConfig(q.CHART_CUSTOM_THEME_COLOR_INFO,T(h)),H(()=>{h.length?S(h[t-1>-1?t-1:t]):g.selectInfo=void 0})};p.value!==void 0?R({message:"当前有变动未保存，是否直接放弃修改？",onPositiveCallback:()=>{p.value=void 0,u()}}):R({message:"是否删除此颜色？",onPositiveCallback:()=>{u()}})},n=t=>{p.value=t},a=(t=!0)=>{if(!p.value)return;const u=h.findIndex(F=>{var A;return F.id===((A=p.value)==null?void 0:A.id)});if(u!==-1){t&&window.$message.success("数据应用成功！");const F=T(ee(Z({},p.value),{name:p.value.name||"未定义"}));h.splice(u,1,F),p.value=void 0;const A=_.getEditCanvasConfig.chartThemeColor;_.setEditCanvasConfig(q.CHART_THEME_COLOR,"dark"),H(()=>{_.setEditCanvasConfig(q.CHART_CUSTOM_THEME_COLOR_INFO,T(h)),_.setEditCanvasConfig(q.CHART_THEME_COLOR,A)})}else window.$message.error("数据应用失败！")},f=()=>{const t=()=>{p.value=void 0,g.selectInfo=void 0,d("update:modelShow",!1)};p.value!==void 0?R({message:"当前有变动未保存，是否直接放弃修改？",onPositiveCallback:()=>{t()}}):t()},y=t=>`linear-gradient(to right, ${t.color[0]} 0%, ${t.color[5]} 100%)`;return(t,u)=>{const F=s("n-text"),A=s("n-timeline-item"),P=s("n-timeline"),O=s("n-icon"),$=s("n-button"),X=s("n-badge"),B=s("n-space"),N=s("n-divider"),V=s("n-a"),x=s("n-ellipsis"),C=s("n-card"),D=s("n-tooltip"),he=s("n-modal");return v(),j(he,{class:"go-chart-create-color",show:I.value,"onUpdate:show":u[0]||(u[0]=w=>I.value=w),"mask-closable":!1,closeOnEsc:!1},{default:o(()=>[e(C,{bordered:!1,role:"dialog",size:"small","aria-modal":"true",style:{width:"900px",height:"720px"}},{header:o(()=>[]),"header-extra":o(()=>[]),action:o(()=>[e(B,{justify:"end"},{default:o(()=>[e($,{onClick:f},{default:o(()=>[vo]),_:1})]),_:1})]),default:o(()=>[i("div",eo,[i("div",oo,[r(k)?(v(),j(r(Ze),{key:0,selectColor:g.selectInfo,onUpdateColor:n},null,8,["selectColor"])):(v(),E("div",to,[i("img",{src:r(Oe),alt:"暂无数据"},null,8,no),e(F,{depth:3},{default:o(()=>[so]),_:1})]))]),i("div",lo,[e(P,{class:"pond-item-timeline",style:{width:"20px"}},{default:o(()=>[e(A,{type:"info"}),e(A,{type:"success"})]),_:1}),i("div",ao,[e(B,null,{default:o(()=>[e($,{class:se(["create-btn",{"is-full":!r(k)}]),type:"primary",ghost:!r(k),secondary:!!r(k),onClick:M},{icon:o(()=>[e(O,null,{default:o(()=>[e(r(G))]),_:1})]),default:o(()=>[uo]),_:1},8,["class","ghost","secondary"]),r(k)?(v(),j(X,{key:0,show:p.value!==void 0,dot:""},{default:o(()=>[e($,{class:"create-btn",type:"info",secondary:"",onClick:a},{icon:o(()=>[e(O,null,{default:o(()=>[e(r(K))]),_:1})]),default:o(()=>[co]),_:1})]),_:1},8,["show"])):le("",!0)]),_:1}),e(N,{style:{margin:"10px 0"}}),r(k)?le("",!0):(v(),j(F,{key:0,class:"not-data-text",depth:3},{default:o(()=>[ro,e(V,{onClick:M},{default:o(()=>[io]),_:1})]),_:1})),(v(!0),E(z,null,U(r(h),(w,ue)=>(v(),E("div",{class:"color-card-box",key:ue},[e(C,{class:se(["color-card",{selected:w.id===r(k)}]),size:"small",hoverable:"",embedded:"",onClick:Y=>S(w)},{default:o(()=>[i("div",_o,[e(x,{style:{"text-align":"left",width:"70px"}},{default:o(()=>[b(Se(w.name),1)]),_:2},1024),(v(!0),E(z,null,U(w.color,(Y,ge)=>(v(),E("span",{class:"theme-color-item",key:ge,style:Q({backgroundColor:Y})},null,4))),128))]),i("div",{class:"theme-bottom",style:Q({backgroundImage:y(w)})},null,4)]),_:2},1032,["class","onClick"]),e(D,{trigger:"hover"},{trigger:o(()=>[e($,{text:"",disabled:w.id===r(L),onClick:Y=>W(ue)},{default:o(()=>[e(O,{class:"go-ml-1 go-cursor-pointer",size:"16",depth:3},{default:o(()=>[e(r(J))]),_:1})]),_:2},1032,["disabled","onClick"])]),default:o(()=>[po]),_:2},1024)]))),128))])])])]),_:1})]),_:1},8,["show"])}}}),xo=de(mo,[["__scopeId","data-v-07525464"]]);export{xo as default};
