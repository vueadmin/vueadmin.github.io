var fe=Object.defineProperty;var le=Object.getOwnPropertySymbols;var Ee=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var ce=(m,c,f)=>c in m?fe(m,c,{enumerable:!0,configurable:!0,writable:!0,value:f}):m[c]=f,K=(m,c)=>{for(var f in c||(c={}))Ee.call(c,f)&&ce(m,f,c[f]);if(le)for(var f of le(c))he.call(c,f)&&ce(m,f,c[f]);return m};var oe=(m,c,f)=>new Promise((z,y)=>{var S=C=>{try{O(f.next(C))}catch(D){y(D)}},M=C=>{try{O(f.throw(C))}catch(D){y(D)}},O=C=>C.done?z(C.value):Promise.resolve(C.value).then(S,M);O((f=f.apply(m,c)).next())});import{c as ue,d as Z,cI as ie,a0 as de,r as n,u as a,o as s,B as I,w as e,g as t,ba as ae,e as p,q as l,a3 as X,s as $,h as o,t as g,F as b,Q as ve,R as ge,cp as Fe,aM as W,l as j,L as re,z as _e,A as pe,aL as T}from"./index-564e271e.js";import{S as ye}from"./SettingItem-ffe98ce0.js";import{S as Y}from"./SettingItemBox-6ed96494.js";import{g as Ce}from"./plugin-8276e592.js";import{i as se}from"./icon-472382c6.js";import{d as xe}from"./chartEditStore-a19f0a3f.js";import{n as be}from"./noData-9e194391.js";import{u as ee}from"./useTargetData.hook-6d85837e.js";import{M as me}from"./EditorWorker-712a8a0b.js";import"./editorWorker-09f50f3f.js";import{n as De}from"./useLifeHandler.hook-3455c1bf.js";/* empty css                                                                   */const Be=o(" 新增 "),we={key:0,class:"no-data go-flex-center"},Ae=["src"],Oe=o("暂无内容"),$e=o(" 选择目标组件 "),ke=o("绑定"),Se=o("不支持「静态组件」和「分组」"),Te=o(" 关联目标组件请求参数 "),Ie=o(" 暂无数据 "),Me=Z({__name:"index",setup(m){const{CloseIcon:c,AddIcon:f,HelpOutlineIcon:z}=se.ionicons5,{targetData:y,chartEditStore:S}=ee(),M=[ie.PARAMS,ie.HEADER],O=de(()=>{const E=y.value.interactActions;return E?E.map(i=>({label:i.interactName,value:i.interactType})):[]}),C=de(()=>y.value.option),D=(E,i)=>{var d;return E?(d=S.componentList[S.fetchTargetIndex(E)])==null?void 0:d.request.requestParams[i]:{}},k=E=>{if(!E||!y.value.interactActions)return[];const i=y.value.interactActions.find(d=>d.interactType===E);return(i==null?void 0:i.componentEmitEvents[C.value[Fe]])||[]},G=()=>{var d;const i=S.componentList.filter(_=>{const h=_.id!==y.value.id,B=_.chartConfig.chartFrame!==xe.STATIC,w=!_.isGroup;return h&&B&&w}).map(_=>({id:_.id,title:_.chartConfig.title,disabled:!1}));return(d=y.value.events.interactEvents)==null||d.forEach(_=>{i.forEach(h=>{h.id===_.interactComponentId&&(h.disabled=!0)})}),i},P=()=>{y.value.events.interactEvents.push({interactOn:void 0,interactComponentId:void 0,interactFn:{}})},J=E=>{Ce({message:"是否删除此关联交互模块?",onPositiveCallback:()=>{y.value.events.interactEvents.splice(E,1)}})};return(E,i)=>{const d=n("n-icon"),_=n("n-button"),h=n("n-text"),B=n("n-space"),w=n("n-divider"),v=n("n-tag"),x=n("n-select"),N=n("n-input-group"),L=n("n-tooltip"),q=n("n-table"),H=n("n-card"),R=n("n-collapse-item");return a(O).length?(s(),I(R,{key:0,title:"组件交互",name:"1"},{"header-extra":e(()=>[t(_,{type:"primary",tertiary:"",size:"small",onClick:ae(P,["stop"])},{icon:e(()=>[t(d,null,{default:e(()=>[t(a(f))]),_:1})]),default:e(()=>[Be]),_:1},8,["onClick"])]),default:e(()=>[a(y).events.interactEvents.length?X("",!0):(s(),p("div",we,[l("img",{src:a(be),alt:"暂无数据"},null,8,Ae),t(h,{depth:3},{default:e(()=>[Oe]),_:1})])),(s(!0),p(b,null,$(a(y).events.interactEvents,(A,U)=>(s(),I(H,{key:U,class:"n-card-shallow",size:"small"},{default:e(()=>[t(B,{justify:"space-between"},{default:e(()=>[t(h,null,{default:e(()=>[o("关联组件 - "+g(U+1),1)]),_:2},1024),t(_,{type:"error",text:"",size:"small",onClick:F=>J(U)},{icon:e(()=>[t(d,null,{default:e(()=>[t(a(c))]),_:1})]),_:2},1032,["onClick"])]),_:2},1024),t(w,{style:{margin:"10px 0"}}),t(v,{bordered:!1,type:"primary"},{default:e(()=>[$e]),_:1}),t(a(Y),{name:"触发事件",alone:!0},{default:e(()=>[a(O)?(s(),I(N,{key:0},{default:e(()=>[t(x,{class:"select-type-options",value:A.interactOn,"onUpdate:value":F=>A.interactOn=F,size:"tiny",options:a(O)},null,8,["value","onUpdate:value","options"])]),_:2},1024)):X("",!0)]),_:2},1024),t(a(Y),{alone:!0},{name:e(()=>[t(h,null,{default:e(()=>[ke]),_:1}),t(L,{trigger:"hover"},{trigger:e(()=>[t(d,{size:"21",depth:3},{default:e(()=>[t(a(z))]),_:1})]),default:e(()=>[t(h,null,{default:e(()=>[Se]),_:1})]),_:1})]),default:e(()=>[t(x,{class:"select-type-options","value-field":"id","label-field":"title",size:"tiny",filterable:"",placeholder:"仅展示符合条件的组件",value:A.interactComponentId,"onUpdate:value":F=>A.interactComponentId=F,options:G()},null,8,["value","onUpdate:value","options"])]),_:2},1024),k(A.interactOn).length?(s(),I(a(Y),{key:0,name:"查询结果",alone:!0},{default:e(()=>[t(q,{size:"small",striped:""},{default:e(()=>[l("thead",null,[l("tr",null,[(s(),p(b,null,$(["参数","说明"],F=>l("th",{key:F},g(F),1)),64))])]),l("tbody",null,[(s(!0),p(b,null,$(k(A.interactOn),(F,r)=>(s(),p("tr",{key:r},[l("td",null,g(F.value),1),l("td",null,g(F.label),1)]))),128))])]),_:2},1024)]),_:2},1024)):X("",!0),t(v,{bordered:!1,type:"primary"},{default:e(()=>[Te]),_:1}),(s(),p(b,null,$(M,F=>t(a(Y),{name:F,key:F},{default:e(()=>[(s(!0),p(b,null,$(D(A.interactComponentId,F),(r,u,V)=>(s(),I(a(ye),{key:V,name:`${u}`},{default:e(()=>[t(x,{size:"tiny",value:A.interactFn[u],"onUpdate:value":ne=>A.interactFn[u]=ne,options:k(A.interactOn),clearable:""},null,8,["value","onUpdate:value","options"])]),_:2},1032,["name"]))),128)),ve(t(h,{class:"go-pt-1",depth:"3"},{default:e(()=>[Ie]),_:2},1536),[[ge,JSON.stringify(D(A.interactComponentId,F))==="{}"]])]),_:2},1032,["name"])),64))]),_:2},1024))),128))]),_:1})):X("",!0)}}}),Ne=ue(Me,[["__scopeId","data-v-da3793f4"]]),Le=`
console.log(e)
`,Ue=`
console.log(echarts)
`,Ve=`
console.log(components)
`,je=`
console.log(node_modules)
`,ze=`
// 在渲染之后才能获取 dom 实例
e.el.addEventListener('click', () => {
  alert('我触发拉~');
}, false)
`,Re=`
await import('https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/lodash.js/4.17.21/lodash.js')

// lodash 默认赋值给 "_"
console.log('isEqual', _.isEqual(['1'], ['1']))
`,Pe=`
// 获取echart实例
const chart = this.refs.vChartRef.chart

// 图表设置tooltip
chart.setOption({
  tooltip: {
    trigger: 'axis', //item
    enterable: true, 
    formatter (params) {
      return\`
        <div>
          <img src="https://portrait.gitee.com/uploads/avatars/user/1654/4964818_MTrun_1653229420.png!avatar30">
          <b><a href="https://gitee.com/dromara/go-view">《这是一个自定义的tooltip》</a></b>
        <div>
        <div style='border-radius:35px;color:#666'>
        \${Object.entries(params[0].value).map(kv => \`<div>\${kv[0]}:\${kv[1]}</div>\`).join('')}
        </div>
      \`;
    },
  }
})
`,qe=`
// 组件样式作用域标识
const scoped = this.subTree.scopeId
function loadStyleString(css){
	let style = document.createElement('style')
	style.type = 'text/css'
	style.appendChild(document.createTextNode(css))
	let head = document.getElementsByTagName('head')[0]
	head.appendChild(style)
}
loadStyleString(\`
.dv-scroll-board[\${scoped}] {
  position: relative;
  overflow: hidden;
}
.dv-scroll-board[\${scoped}]::before {
  content: '';
  display: block;
  position: absolute;
  top: -20%;
  left: -100%;
  width: 550px;
  height: 60px;
  transform: rotate(-45deg);
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0));
  animation: cross 2s infinite;
}
@keyframes cross{
  to{
    top: 80%;
    left: 100%;
    transform: rotate(-45deg);
  }
}
\`)
`,He=`
const chart = this.refs.vChartRef.chart
// 定义地图原点大小 同理可自定义标签等等内容
this.props.chartConfig.option.series[0].symbolSize = (val) => {
  return Math.sqrt(val[2]) / 3;
}
this.setupState.vEchartsSetOption();
let i = 0; // 当前轮播索引
const len = 3; // 轮播部分提示
(function showTips() {
  const action = (type, dataIndex) => {
    chart.dispatchAction({
      type,
      dataIndex,
      seriesIndex: 0,
    });
  }
  setInterval(() => {
    action("downplay", i);
    action("hideTip", i);
    if (i === len) i = 0;
    i++;
    action("highlight", i);
    action("showTip", i);
  }, 2000);
})()
`,Ke=[{description:"获取当前组件实例",code:Le},{description:"获取全局 echarts 实例",code:Ue},{description:"获取组件图表集合",code:Ve},{description:"获取 nodeModules 实例",code:je},{description:"获取远程 CDN 库",code:Re},{description:"设置文字组件点击事件",code:ze},{description:"修改图表 tooltip",code:Pe},{description:"添加【轮播列表】样式",code:qe},{description:"修改【地图】圆点，新增提示自动轮播",code:He}];const Q=m=>(_e("data-v-d61d8e2e"),m=m(),pe(),m),We=o(" 编辑 "),Ge={class:"func-annotate"},Je=Q(()=>l("br",null,null,-1)),Qe={class:"func-keyword"},Xe=o(" (e, components, echarts, node_modules) { "),Ye={class:"go-ml-4"},Ze=Q(()=>l("p",null,[o("}"),l("span",null,",")],-1)),et=o("高级事件编辑器（配合源码使用）"),tt={class:"go-pl-3"},nt=Q(()=>l("span",{class:"func-keyword"},"async function   ",-1)),ot={class:"func-keyNameWord"},ut=Q(()=>l("p",{class:"go-pl-3 func-keyNameWord"},"}",-1)),at=o("触发对应生命周期事件时接收的参数"),st=o("图表组件实例"),lt=Q(()=>l("br",null,null,-1)),ct=o("当前大屏内所有组件的集合id 图表组件中的配置id，可以获取其他图表组件进行控制"),it=o("以下是内置在代码环境中可用的包变量"),dt=Q(()=>l("br",null,null,-1)),rt={class:"go-flex-items-center"},_t=o(" 说明 "),pt=o("通过提供的参数可为图表增加定制化的tooltip、交互事件等等"),mt=o("取消"),ft=o("保存"),Et=Z({__name:"index",setup(m){const{targetData:c,chartEditStore:f}=ee(),{DocumentTextIcon:z,ChevronDownIcon:y,PencilIcon:S}=se.ionicons5,M={[W.VNODE_BEFORE_MOUNT]:"渲染之前",[W.VNODE_MOUNTED]:"渲染之后"},O={[W.VNODE_BEFORE_MOUNT]:"此时组件 DOM 还未存在",[W.VNODE_MOUNTED]:"此时组件 DOM 已经存在"},C=j(!1),D=j(W.VNODE_MOUNTED);let k=j(K({},c.value.events.advancedEvents));const G=j(!1),P=()=>{let i="",d="",_="";return G.value=Object.entries(k.value).every(([h,B])=>{try{const w=Object.getPrototypeOf(function(){return oe(this,null,function*(){})}).constructor;return new w(B),!0}catch(w){return d=w.message,_=w.name,i=h,!1}}),{errorFn:i,message:d,name:_}},J=()=>{C.value=!1},E=()=>{if(P().errorFn){window.$message.error("事件函数错误，无法进行保存");return}Object.values(k.value).join("").trim()===""?c.value.events.advancedEvents={vnodeBeforeMount:void 0,vnodeMounted:void 0}:c.value.events.advancedEvents=K({},k.value),J()};return re(()=>C.value,i=>{i&&(k.value=K({},c.value.events.advancedEvents))}),(i,d)=>{const _=n("n-icon"),h=n("n-button"),B=n("n-code"),w=n("n-card"),v=n("n-collapse-item"),x=n("n-text"),N=n("n-space"),L=n("n-tab-pane"),q=n("n-tabs"),H=n("n-layout"),R=n("n-collapse"),A=n("n-scrollbar"),U=n("n-tag"),F=n("n-layout-sider"),r=n("n-modal");return s(),p(b,null,[t(v,{title:"高级事件配置",name:"3"},{"header-extra":e(()=>[t(h,{type:"primary",tertiary:"",size:"small",onClick:d[0]||(d[0]=ae(u=>C.value=!0,["stop"]))},{icon:e(()=>[t(_,null,{default:e(()=>[t(a(S))]),_:1})]),default:e(()=>[We]),_:1})]),default:e(()=>[t(w,{class:"collapse-show-box"},{default:e(()=>[(s(!0),p(b,null,$(a(W),u=>(s(),p("div",{key:u},[l("p",null,[l("span",Ge,"// "+g(M[u]),1),Je,l("span",Qe,"async "+g(u),1),Xe]),l("p",Ye,[t(B,{code:(a(c).events.advancedEvents||{})[u]||"",language:"typescript"},null,8,["code"])]),Ze]))),128))]),_:1})]),_:1}),t(r,{class:"go-chart-data-monaco-editor",show:C.value,"onUpdate:show":d[2]||(d[2]=u=>C.value=u),"mask-closable":!1},{default:e(()=>[t(w,{bordered:!1,role:"dialog",size:"small","aria-modal":"true",style:{width:"1200px",height:"700px"}},{header:e(()=>[t(N,null,{default:e(()=>[t(x,null,{default:e(()=>[et]),_:1})]),_:1})]),"header-extra":e(()=>[]),action:e(()=>[t(N,{justify:"space-between"},{default:e(()=>[l("div",rt,[t(U,{bordered:!1,type:"primary"},{icon:e(()=>[t(_,{component:a(z)},null,8,["component"])]),default:e(()=>[_t]),_:1}),t(x,{class:"go-ml-2",depth:"2"},{default:e(()=>[pt]),_:1})]),t(N,null,{default:e(()=>[t(h,{size:"medium",onClick:J},{default:e(()=>[mt]),_:1}),t(h,{size:"medium",type:"primary",onClick:E},{default:e(()=>[ft]),_:1})]),_:1})]),_:1})]),default:e(()=>[t(H,{"has-sider":"","sider-placement":"right"},{default:e(()=>[t(H,{style:{height:"580px","padding-right":"20px"}},{default:e(()=>[t(q,{value:D.value,"onUpdate:value":d[1]||(d[1]=u=>D.value=u),type:"card","tab-style":"min-width: 100px;"},{suffix:e(()=>[t(x,{class:"tab-tip",type:"warning"},{default:e(()=>[o("提示: "+g(O[D.value]),1)]),_:1})]),default:e(()=>[(s(!0),p(b,null,$(a(W),(u,V)=>(s(),I(L,{key:V,tab:`${M[u]}-${u}`,name:u},{default:e(()=>[l("p",tt,[nt,l("span",ot,g(u)+"(e, components, echarts, node_modules)  {",1)]),t(a(me),{modelValue:a(k)[u],"onUpdate:modelValue":ne=>a(k)[u]=ne,height:"480px",language:"javascript"},null,8,["modelValue","onUpdate:modelValue"]),ut]),_:2},1032,["tab","name"]))),128))]),_:1},8,["value"])]),_:1}),t(F,{"collapsed-width":14,width:340,"show-trigger":"bar","collapse-mode":"transform","content-style":"padding: 12px 12px 0px 12px;margin-left: 3px;"},{default:e(()=>[t(q,{"default-value":"1","justify-content":"space-evenly",type:"segment"},{default:e(()=>[t(L,{tab:"验证结果",name:"1",size:"small"},{default:e(()=>[t(A,{trigger:"none",style:{"max-height":"505px"}},{default:e(()=>[t(R,{class:"go-px-3","arrow-placement":"right","default-expanded-names":[1,2,3]},{default:e(()=>[(s(!0),p(b,null,$([P()],u=>(s(),p(b,{key:u},[t(v,{title:"错误函数",name:1},{default:e(()=>[t(x,{depth:"3"},{default:e(()=>[o(g(u.errorFn||"暂无"),1)]),_:2},1024)]),_:2},1024),t(v,{title:"错误信息",name:2},{default:e(()=>[t(x,{depth:"3"},{default:e(()=>[o(g(u.name||"暂无"),1)]),_:2},1024)]),_:2},1024),t(v,{title:"堆栈信息",name:3},{default:e(()=>[t(x,{depth:"3"},{default:e(()=>[o(g(u.message||"暂无"),1)]),_:2},1024)]),_:2},1024)],64))),128))]),_:1})]),_:1})]),_:1}),t(L,{tab:"变量说明",name:"2"},{default:e(()=>[t(A,{trigger:"none",style:{"max-height":"505px"}},{default:e(()=>[t(R,{class:"go-px-3","arrow-placement":"right","default-expanded-names":[1,2,3,4]},{default:e(()=>[t(v,{title:"e",name:1},{default:e(()=>[t(x,{depth:"3"},{default:e(()=>[at]),_:1})]),_:1}),t(v,{title:"this",name:2},{default:e(()=>[t(x,{depth:"3"},{default:e(()=>[st]),_:1}),lt,(s(!0),p(b,null,$(["refs","setupState","ctx","props","..."],u=>(s(),I(U,{class:"go-m-1",key:u},{default:e(()=>[o(g(u),1)]),_:2},1024))),128))]),_:1}),t(v,{title:"components",name:3},{default:e(()=>[t(x,{depth:"3"},{default:e(()=>[ct]),_:1}),t(B,{code:`{
  [id]: component
}`,language:"typescript"})]),_:1}),t(v,{title:"node_modules",name:4},{default:e(()=>[t(x,{depth:"3"},{default:e(()=>[it]),_:1}),dt,(s(!0),p(b,null,$(Object.keys(a(De)||{}),u=>(s(),I(U,{class:"go-m-1",key:u},{default:e(()=>[o(g(u),1)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1}),t(L,{tab:"介绍案例",name:"3"},{default:e(()=>[t(A,{trigger:"none",style:{"max-height":"505px"}},{default:e(()=>[t(R,{"arrow-placement":"right"},{default:e(()=>[(s(!0),p(b,null,$(a(Ke),(u,V)=>(s(),I(v,{key:V,title:`案例${V+1}：${u.description}`,name:V},{default:e(()=>[t(B,{code:u.code,language:"typescript"},null,8,["code"])]),_:2},1032,["title","name"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["show"])],64)}}}),ht=ue(Et,[["__scopeId","data-v-d61d8e2e"]]);const te=m=>(_e("data-v-31f3fb43"),m=m(),pe(),m),vt=o(" 编辑 "),gt={class:"func-annotate"},Ft=te(()=>l("br",null,null,-1)),yt={class:"func-keyword"},Ct=o(" (mouseEvent) { "),xt={class:"go-ml-4"},bt=te(()=>l("p",null,[o("}"),l("span",null,",")],-1)),Dt=o("基础事件编辑器"),Bt=o("提示: ECharts 组件会拦截鼠标事件"),wt={class:"go-pl-3"},At=te(()=>l("span",{class:"func-keyword"},"async function   ",-1)),Ot={class:"func-keyNameWord"},$t=te(()=>l("p",{class:"go-pl-3 func-keyNameWord"},"}",-1)),kt=o("鼠标事件对象"),St={class:"go-flex-items-center"},Tt=o(" 说明 "),It=o("编写方式同正常 JavaScript 写法"),Mt=o("取消"),Nt=o("保存"),Lt=Z({__name:"index",setup(m){const{targetData:c,chartEditStore:f}=ee(),{DocumentTextIcon:z,ChevronDownIcon:y,PencilIcon:S}=se.ionicons5,M={[T.ON_CLICK]:"单击",[T.ON_DBL_CLICK]:"双击",[T.ON_MOUSE_ENTER]:"鼠标进入",[T.ON_MOUSE_LEAVE]:"鼠标移出"},O=j(!1),C=j(T.ON_CLICK);let D=j(K({},c.value.events.baseEvent));const k=j(!1),G=()=>{let E="",i="",d="";return k.value=Object.entries(D.value).every(([_,h])=>{try{const B=Object.getPrototypeOf(function(){return oe(this,null,function*(){})}).constructor;return new B(h),!0}catch(B){return i=B.message,d=B.name,E=_,!1}}),{errorFn:E,message:i,name:d}},P=()=>{O.value=!1},J=()=>{if(G().errorFn){window.$message.error("事件函数错误，无法进行保存");return}Object.values(D.value).join("").trim()===""?c.value.events.baseEvent={[T.ON_CLICK]:void 0,[T.ON_DBL_CLICK]:void 0,[T.ON_MOUSE_ENTER]:void 0,[T.ON_MOUSE_LEAVE]:void 0}:c.value.events.baseEvent=K({},D.value),P()};return re(()=>O.value,E=>{E&&(D.value=K({},c.value.events.baseEvent))}),(E,i)=>{const d=n("n-icon"),_=n("n-button"),h=n("n-code"),B=n("n-card"),w=n("n-collapse-item"),v=n("n-text"),x=n("n-space"),N=n("n-tab-pane"),L=n("n-tabs"),q=n("n-layout"),H=n("n-collapse"),R=n("n-scrollbar"),A=n("n-layout-sider"),U=n("n-tag"),F=n("n-modal");return s(),p(b,null,[t(w,{title:"基础事件配置",name:"2"},{"header-extra":e(()=>[t(_,{type:"primary",tertiary:"",size:"small",onClick:i[0]||(i[0]=ae(r=>O.value=!0,["stop"]))},{icon:e(()=>[t(d,null,{default:e(()=>[t(a(S))]),_:1})]),default:e(()=>[vt]),_:1})]),default:e(()=>[t(B,{class:"collapse-show-box"},{default:e(()=>[(s(!0),p(b,null,$(a(T),r=>(s(),p("div",{key:r},[l("p",null,[l("span",gt,"// "+g(M[r]),1),Ft,l("span",yt,"async "+g(r),1),Ct]),l("p",xt,[t(h,{code:(a(c).events.baseEvent||{})[r]||"",language:"typescript"},null,8,["code"])]),bt]))),128))]),_:1})]),_:1}),t(F,{class:"go-chart-data-monaco-editor",show:O.value,"onUpdate:show":i[2]||(i[2]=r=>O.value=r),"mask-closable":!1},{default:e(()=>[t(B,{bordered:!1,role:"dialog",size:"small","aria-modal":"true",style:{width:"1200px",height:"700px"}},{header:e(()=>[t(x,null,{default:e(()=>[t(v,null,{default:e(()=>[Dt]),_:1})]),_:1})]),"header-extra":e(()=>[]),action:e(()=>[t(x,{justify:"space-between"},{default:e(()=>[l("div",St,[t(U,{bordered:!1,type:"primary"},{icon:e(()=>[t(d,{component:a(z)},null,8,["component"])]),default:e(()=>[Tt]),_:1}),t(v,{class:"go-ml-2",depth:"2"},{default:e(()=>[It]),_:1})]),t(x,null,{default:e(()=>[t(_,{size:"medium",onClick:P},{default:e(()=>[Mt]),_:1}),t(_,{size:"medium",type:"primary",onClick:J},{default:e(()=>[Nt]),_:1})]),_:1})]),_:1})]),default:e(()=>[t(q,{"has-sider":"","sider-placement":"right"},{default:e(()=>[t(q,{style:{height:"580px","padding-right":"20px"}},{default:e(()=>[t(L,{value:C.value,"onUpdate:value":i[1]||(i[1]=r=>C.value=r),type:"card","tab-style":"min-width: 100px;"},{suffix:e(()=>[t(v,{class:"tab-tip",type:"warning"},{default:e(()=>[Bt]),_:1})]),default:e(()=>[(s(!0),p(b,null,$(a(T),(r,u)=>(s(),I(N,{key:u,tab:`${M[r]}-${r}`,name:r},{default:e(()=>[l("p",wt,[At,l("span",Ot,g(r)+"(mouseEvent)  {",1)]),t(a(me),{modelValue:a(D)[r],"onUpdate:modelValue":V=>a(D)[r]=V,height:"480px",language:"javascript"},null,8,["modelValue","onUpdate:modelValue"]),$t]),_:2},1032,["tab","name"]))),128))]),_:1},8,["value"])]),_:1}),t(A,{"collapsed-width":14,width:340,"show-trigger":"bar","collapse-mode":"transform","content-style":"padding: 12px 12px 0px 12px;margin-left: 3px;"},{default:e(()=>[t(L,{"default-value":"1","justify-content":"space-evenly",type:"segment"},{default:e(()=>[t(N,{tab:"验证结果",name:"1",size:"small"},{default:e(()=>[t(R,{trigger:"none",style:{"max-height":"505px"}},{default:e(()=>[t(H,{class:"go-px-3","arrow-placement":"right","default-expanded-names":[1,2,3]},{default:e(()=>[(s(!0),p(b,null,$([G()],r=>(s(),p(b,{key:r},[t(w,{title:"错误函数",name:1},{default:e(()=>[t(v,{depth:"3"},{default:e(()=>[o(g(r.errorFn||"暂无"),1)]),_:2},1024)]),_:2},1024),t(w,{title:"错误信息",name:2},{default:e(()=>[t(v,{depth:"3"},{default:e(()=>[o(g(r.name||"暂无"),1)]),_:2},1024)]),_:2},1024),t(w,{title:"堆栈信息",name:3},{default:e(()=>[t(v,{depth:"3"},{default:e(()=>[o(g(r.message||"暂无"),1)]),_:2},1024)]),_:2},1024)],64))),128))]),_:1})]),_:1})]),_:1}),t(N,{tab:"变量说明",name:"2"},{default:e(()=>[t(R,{trigger:"none",style:{"max-height":"505px"}},{default:e(()=>[t(H,{class:"go-px-3","arrow-placement":"right","default-expanded-names":[1,2]},{default:e(()=>[t(w,{title:"mouseEvent",name:1},{default:e(()=>[t(v,{depth:"3"},{default:e(()=>[kt]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["show"])],64)}}}),Ut=ue(Lt,[["__scopeId","data-v-31f3fb43"]]),Vt=o(" 组件 id： "),Zt=Z({__name:"index",setup(m){const{targetData:c}=ee();return j(!1),(f,z)=>{const y=n("n-text"),S=n("n-collapse");return s(),I(S,{class:"go-mt-3","arrow-placement":"right","default-expanded-names":["1","2"]},{default:e(()=>[t(y,{depth:"3"},{default:e(()=>[Vt,t(y,null,{default:e(()=>[o(g(a(c).id),1)]),_:1})]),_:1}),t(a(Ne)),t(a(Ut)),t(a(ht))]),_:1})}}});export{Zt as default};
