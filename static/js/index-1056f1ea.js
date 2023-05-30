var fe=Object.defineProperty;var le=Object.getOwnPropertySymbols;var Ee=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable;var ce=(m,c,f)=>c in m?fe(m,c,{enumerable:!0,configurable:!0,writable:!0,value:f}):m[c]=f,K=(m,c)=>{for(var f in c||(c={}))Ee.call(c,f)&&ce(m,f,c[f]);if(le)for(var f of le(c))ve.call(c,f)&&ce(m,f,c[f]);return m};var ue=(m,c,f)=>new Promise((z,y)=>{var T=C=>{try{O(f.next(C))}catch(D){y(D)}},N=C=>{try{O(f.throw(C))}catch(D){y(D)}},O=C=>C.done?z(C.value):Promise.resolve(C.value).then(T,N);O((f=f.apply(m,c)).next())});import{c as ae,d as Z,cL as re,a0 as ie,r as n,o,E as I,w as e,g as t,ai as oe,u as s,h as u,e as _,a3 as X,F as b,s as k,t as g,q as l,Q as he,R as ge,cr as Fe,aO as W,l as j,L as de,z as pe,A as _e,aN as $}from"./index-499f2953.js";import{S as ye}from"./SettingItem-d35d1e79.js";import{S as Y}from"./SettingItemBox-8c2be56a.js";import{g as Ce}from"./plugin-7695364f.js";import{i as se}from"./icon-72b0ee4b.js";import{d as xe}from"./chartEditStore-1f0ad4eb.js";import{u as ee}from"./useTargetData.hook-5c77e865.js";import{M as me}from"./EditorWorker-7d6b03c4.js";import"./editorWorker-43a98755.js";import{n as be}from"./useLifeHandler.hook-7e3befe0.js";/* empty css                                                                   */const De={key:0,class:"no-data go-flex-center"},Be=Z({__name:"index",setup(m){const{CloseIcon:c,AddIcon:f,HelpOutlineIcon:z}=se.ionicons5,{targetData:y,chartEditStore:T}=ee(),N=[re.PARAMS,re.HEADER],O=ie(()=>{const E=y.value.interactActions;return E?E.map(r=>({label:r.interactName,value:r.interactType})):[]}),C=ie(()=>y.value.option),D=(E,r)=>{var i;return E?(i=T.componentList[T.fetchTargetIndex(E)])==null?void 0:i.request.requestParams[r]:{}},S=E=>{if(!E||!y.value.interactActions)return[];const r=y.value.interactActions.find(i=>i.interactType===E);return(r==null?void 0:r.componentEmitEvents[C.value[Fe]])||[]},G=()=>{var i;const r=T.componentList.filter(p=>{const v=p.id!==y.value.id,B=p.chartConfig.chartFrame!==xe.STATIC,w=!p.isGroup;return v&&B&&w}).map(p=>({id:p.id,title:p.chartConfig.title,disabled:!1}));return(i=y.value.events.interactEvents)==null||i.forEach(p=>{r.forEach(v=>{v.id===p.interactComponentId&&(v.disabled=!0)})}),r},P=()=>{y.value.events.interactEvents.push({interactOn:void 0,interactComponentId:void 0,interactFn:{}})},J=E=>{Ce({message:"是否删除此关联交互模块?",onPositiveCallback:()=>{y.value.events.interactEvents.splice(E,1)}})};return(E,r)=>{const i=n("n-icon"),p=n("n-button"),v=n("n-text"),B=n("n-space"),w=n("n-divider"),h=n("n-tag"),x=n("n-select"),M=n("n-input-group"),L=n("n-tooltip"),q=n("n-table"),H=n("n-card"),R=n("n-collapse-item");return O.value.length?(o(),I(R,{key:0,title:"组件交互",name:"1"},{"header-extra":e(()=>[t(p,{type:"primary",tertiary:"",size:"small",onClick:oe(P,["stop"])},{icon:e(()=>[t(i,null,{default:e(()=>[t(s(f))]),_:1})]),default:e(()=>[u(" 新增 ")]),_:1},8,["onClick"])]),default:e(()=>[s(y).events.interactEvents.length?X("",!0):(o(),_("div",De,[t(v,{depth:3},{default:e(()=>[u("暂无内容")]),_:1})])),(o(!0),_(b,null,k(s(y).events.interactEvents,(A,U)=>(o(),I(H,{key:U,class:"n-card-shallow",size:"small"},{default:e(()=>[t(B,{justify:"space-between"},{default:e(()=>[t(v,null,{default:e(()=>[u("关联组件 - "+g(U+1),1)]),_:2},1024),t(p,{type:"error",text:"",size:"small",onClick:F=>J(U)},{icon:e(()=>[t(i,null,{default:e(()=>[t(s(c))]),_:1})]),_:2},1032,["onClick"])]),_:2},1024),t(w,{style:{margin:"10px 0"}}),t(h,{bordered:!1,type:"primary"},{default:e(()=>[u(" 选择目标组件 ")]),_:1}),t(s(Y),{name:"触发事件",alone:!0},{default:e(()=>[O.value?(o(),I(M,{key:0},{default:e(()=>[t(x,{class:"select-type-options",value:A.interactOn,"onUpdate:value":F=>A.interactOn=F,size:"tiny",options:O.value},null,8,["value","onUpdate:value","options"])]),_:2},1024)):X("",!0)]),_:2},1024),t(s(Y),{alone:!0},{name:e(()=>[t(v,null,{default:e(()=>[u("绑定")]),_:1}),t(L,{trigger:"hover"},{trigger:e(()=>[t(i,{size:"21",depth:3},{default:e(()=>[t(s(z))]),_:1})]),default:e(()=>[t(v,null,{default:e(()=>[u("不支持「静态组件」和「分组」")]),_:1})]),_:1})]),default:e(()=>[t(x,{class:"select-type-options","value-field":"id","label-field":"title",size:"tiny",filterable:"",placeholder:"仅展示符合条件的组件",value:A.interactComponentId,"onUpdate:value":F=>A.interactComponentId=F,options:G()},null,8,["value","onUpdate:value","options"])]),_:2},1024),S(A.interactOn).length?(o(),I(s(Y),{key:0,name:"查询结果",alone:!0},{default:e(()=>[t(q,{size:"small",striped:""},{default:e(()=>[l("thead",null,[l("tr",null,[(o(),_(b,null,k(["参数","说明"],F=>l("th",{key:F},g(F),1)),64))])]),l("tbody",null,[(o(!0),_(b,null,k(S(A.interactOn),(F,d)=>(o(),_("tr",{key:d},[l("td",null,g(F.value),1),l("td",null,g(F.label),1)]))),128))])]),_:2},1024)]),_:2},1024)):X("",!0),t(h,{bordered:!1,type:"primary"},{default:e(()=>[u(" 关联目标组件请求参数 ")]),_:1}),(o(),_(b,null,k(N,F=>t(s(Y),{name:F,key:F},{default:e(()=>[(o(!0),_(b,null,k(D(A.interactComponentId,F),(d,a,V)=>(o(),I(s(ye),{key:V,name:`${a}`},{default:e(()=>[t(x,{size:"tiny",value:A.interactFn[a],"onUpdate:value":ne=>A.interactFn[a]=ne,options:S(A.interactOn),clearable:""},null,8,["value","onUpdate:value","options"])]),_:2},1032,["name"]))),128)),he(t(v,{class:"go-pt-1",depth:"3"},{default:e(()=>[u(" 暂无数据 ")]),_:2},1536),[[ge,JSON.stringify(D(A.interactComponentId,F))==="{}"]])]),_:2},1032,["name"])),64))]),_:2},1024))),128))]),_:1})):X("",!0)}}}),we=ae(Be,[["__scopeId","data-v-16b04e35"]]),Ae=`
console.log(e)
`,Oe=`
console.log(echarts)
`,ke=`
console.log(components)
`,Se=`
console.log(node_modules)
`,Te=`
// 在渲染之后才能获取 dom 实例
e.el.addEventListener('click', () => {
  alert('我触发拉~');
}, false)
`,$e=`
await import('https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/lodash.js/4.17.21/lodash.js')

// lodash 默认赋值给 "_"
console.log('isEqual', _.isEqual(['1'], ['1']))
`,Ie=`
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
`,Ne=`
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
`,Me=`
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
`,Le=[{description:"获取当前组件实例",code:Ae},{description:"获取全局 echarts 实例",code:Oe},{description:"获取组件图表集合",code:ke},{description:"获取 nodeModules 实例",code:Se},{description:"获取远程 CDN 库",code:$e},{description:"设置文字组件点击事件",code:Te},{description:"修改图表 tooltip",code:Ie},{description:"添加【轮播列表】样式",code:Ne},{description:"修改【地图】圆点，新增提示自动轮播",code:Me}];const Q=m=>(pe("data-v-d61d8e2e"),m=m(),_e(),m),Ue={class:"func-annotate"},Ve=Q(()=>l("br",null,null,-1)),je={class:"func-keyword"},ze={class:"go-ml-4"},Re=Q(()=>l("p",null,[u("}"),l("span",null,",")],-1)),Pe={class:"go-pl-3"},qe=Q(()=>l("span",{class:"func-keyword"},"async function   ",-1)),He={class:"func-keyNameWord"},Ke=Q(()=>l("p",{class:"go-pl-3 func-keyNameWord"},"}",-1)),We=Q(()=>l("br",null,null,-1)),Ge=Q(()=>l("br",null,null,-1)),Je={class:"go-flex-items-center"},Qe=Z({__name:"index",setup(m){const{targetData:c,chartEditStore:f}=ee(),{DocumentTextIcon:z,ChevronDownIcon:y,PencilIcon:T}=se.ionicons5,N={[W.VNODE_BEFORE_MOUNT]:"渲染之前",[W.VNODE_MOUNTED]:"渲染之后"},O={[W.VNODE_BEFORE_MOUNT]:"此时组件 DOM 还未存在",[W.VNODE_MOUNTED]:"此时组件 DOM 已经存在"},C=j(!1),D=j(W.VNODE_MOUNTED);let S=j(K({},c.value.events.advancedEvents));const G=j(!1),P=()=>{let r="",i="",p="";return G.value=Object.entries(S.value).every(([v,B])=>{try{const w=Object.getPrototypeOf(function(){return ue(this,null,function*(){})}).constructor;return new w(B),!0}catch(w){return i=w.message,p=w.name,r=v,!1}}),{errorFn:r,message:i,name:p}},J=()=>{C.value=!1},E=()=>{if(P().errorFn){window.$message.error("事件函数错误，无法进行保存");return}Object.values(S.value).join("").trim()===""?c.value.events.advancedEvents={vnodeBeforeMount:void 0,vnodeMounted:void 0}:c.value.events.advancedEvents=K({},S.value),J()};return de(()=>C.value,r=>{r&&(S.value=K({},c.value.events.advancedEvents))}),(r,i)=>{const p=n("n-icon"),v=n("n-button"),B=n("n-code"),w=n("n-card"),h=n("n-collapse-item"),x=n("n-text"),M=n("n-space"),L=n("n-tab-pane"),q=n("n-tabs"),H=n("n-layout"),R=n("n-collapse"),A=n("n-scrollbar"),U=n("n-tag"),F=n("n-layout-sider"),d=n("n-modal");return o(),_(b,null,[t(h,{title:"高级事件配置",name:"3"},{"header-extra":e(()=>[t(v,{type:"primary",tertiary:"",size:"small",onClick:i[0]||(i[0]=oe(a=>C.value=!0,["stop"]))},{icon:e(()=>[t(p,null,{default:e(()=>[t(s(T))]),_:1})]),default:e(()=>[u(" 编辑 ")]),_:1})]),default:e(()=>[t(w,{class:"collapse-show-box"},{default:e(()=>[(o(!0),_(b,null,k(s(W),a=>(o(),_("div",{key:a},[l("p",null,[l("span",Ue,"// "+g(N[a]),1),Ve,l("span",je,"async "+g(a),1),u(" (e, components, echarts, node_modules) { ")]),l("p",ze,[t(B,{code:(s(c).events.advancedEvents||{})[a]||"",language:"typescript"},null,8,["code"])]),Re]))),128))]),_:1})]),_:1}),t(d,{class:"go-chart-data-monaco-editor",show:C.value,"onUpdate:show":i[2]||(i[2]=a=>C.value=a),"mask-closable":!1},{default:e(()=>[t(w,{bordered:!1,role:"dialog",size:"small","aria-modal":"true",style:{width:"1200px",height:"700px"}},{header:e(()=>[t(M,null,{default:e(()=>[t(x,null,{default:e(()=>[u("高级事件编辑器（配合源码使用）")]),_:1})]),_:1})]),"header-extra":e(()=>[]),action:e(()=>[t(M,{justify:"space-between"},{default:e(()=>[l("div",Je,[t(U,{bordered:!1,type:"primary"},{icon:e(()=>[t(p,{component:s(z)},null,8,["component"])]),default:e(()=>[u(" 说明 ")]),_:1}),t(x,{class:"go-ml-2",depth:"2"},{default:e(()=>[u("通过提供的参数可为图表增加定制化的tooltip、交互事件等等")]),_:1})]),t(M,null,{default:e(()=>[t(v,{size:"medium",onClick:J},{default:e(()=>[u("取消")]),_:1}),t(v,{size:"medium",type:"primary",onClick:E},{default:e(()=>[u("保存")]),_:1})]),_:1})]),_:1})]),default:e(()=>[t(H,{"has-sider":"","sider-placement":"right"},{default:e(()=>[t(H,{style:{height:"580px","padding-right":"20px"}},{default:e(()=>[t(q,{value:D.value,"onUpdate:value":i[1]||(i[1]=a=>D.value=a),type:"card","tab-style":"min-width: 100px;"},{suffix:e(()=>[t(x,{class:"tab-tip",type:"warning"},{default:e(()=>[u("提示: "+g(O[D.value]),1)]),_:1})]),default:e(()=>[(o(!0),_(b,null,k(s(W),(a,V)=>(o(),I(L,{key:V,tab:`${N[a]}-${a}`,name:a},{default:e(()=>[l("p",Pe,[qe,l("span",He,g(a)+"(e, components, echarts, node_modules)  {",1)]),t(s(me),{modelValue:s(S)[a],"onUpdate:modelValue":ne=>s(S)[a]=ne,height:"480px",language:"javascript"},null,8,["modelValue","onUpdate:modelValue"]),Ke]),_:2},1032,["tab","name"]))),128))]),_:1},8,["value"])]),_:1}),t(F,{"collapsed-width":14,width:340,"show-trigger":"bar","collapse-mode":"transform","content-style":"padding: 12px 12px 0px 12px;margin-left: 3px;"},{default:e(()=>[t(q,{"default-value":"1","justify-content":"space-evenly",type:"segment"},{default:e(()=>[t(L,{tab:"验证结果",name:"1",size:"small"},{default:e(()=>[t(A,{trigger:"none",style:{"max-height":"505px"}},{default:e(()=>[t(R,{class:"go-px-3","arrow-placement":"right","default-expanded-names":[1,2,3]},{default:e(()=>[(o(!0),_(b,null,k([P()],a=>(o(),_(b,{key:a},[t(h,{title:"错误函数",name:1},{default:e(()=>[t(x,{depth:"3"},{default:e(()=>[u(g(a.errorFn||"暂无"),1)]),_:2},1024)]),_:2},1024),t(h,{title:"错误信息",name:2},{default:e(()=>[t(x,{depth:"3"},{default:e(()=>[u(g(a.name||"暂无"),1)]),_:2},1024)]),_:2},1024),t(h,{title:"堆栈信息",name:3},{default:e(()=>[t(x,{depth:"3"},{default:e(()=>[u(g(a.message||"暂无"),1)]),_:2},1024)]),_:2},1024)],64))),128))]),_:1})]),_:1})]),_:1}),t(L,{tab:"变量说明",name:"2"},{default:e(()=>[t(A,{trigger:"none",style:{"max-height":"505px"}},{default:e(()=>[t(R,{class:"go-px-3","arrow-placement":"right","default-expanded-names":[1,2,3,4]},{default:e(()=>[t(h,{title:"e",name:1},{default:e(()=>[t(x,{depth:"3"},{default:e(()=>[u("触发对应生命周期事件时接收的参数")]),_:1})]),_:1}),t(h,{title:"this",name:2},{default:e(()=>[t(x,{depth:"3"},{default:e(()=>[u("图表组件实例")]),_:1}),We,(o(!0),_(b,null,k(["refs","setupState","ctx","props","..."],a=>(o(),I(U,{class:"go-m-1",key:a},{default:e(()=>[u(g(a),1)]),_:2},1024))),128))]),_:1}),t(h,{title:"components",name:3},{default:e(()=>[t(x,{depth:"3"},{default:e(()=>[u("当前大屏内所有组件的集合id 图表组件中的配置id，可以获取其他图表组件进行控制")]),_:1}),t(B,{code:`{
  [id]: component
}`,language:"typescript"})]),_:1}),t(h,{title:"node_modules",name:4},{default:e(()=>[t(x,{depth:"3"},{default:e(()=>[u("以下是内置在代码环境中可用的包变量")]),_:1}),Ge,(o(!0),_(b,null,k(Object.keys(s(be)||{}),a=>(o(),I(U,{class:"go-m-1",key:a},{default:e(()=>[u(g(a),1)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1}),t(L,{tab:"介绍案例",name:"3"},{default:e(()=>[t(A,{trigger:"none",style:{"max-height":"505px"}},{default:e(()=>[t(R,{"arrow-placement":"right"},{default:e(()=>[(o(!0),_(b,null,k(s(Le),(a,V)=>(o(),I(h,{key:V,title:`案例${V+1}：${a.description}`,name:V},{default:e(()=>[t(B,{code:a.code,language:"typescript"},null,8,["code"])]),_:2},1032,["title","name"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["show"])],64)}}}),Xe=ae(Qe,[["__scopeId","data-v-d61d8e2e"]]);const te=m=>(pe("data-v-31f3fb43"),m=m(),_e(),m),Ye={class:"func-annotate"},Ze=te(()=>l("br",null,null,-1)),et={class:"func-keyword"},tt={class:"go-ml-4"},nt=te(()=>l("p",null,[u("}"),l("span",null,",")],-1)),ut={class:"go-pl-3"},at=te(()=>l("span",{class:"func-keyword"},"async function   ",-1)),ot={class:"func-keyNameWord"},st=te(()=>l("p",{class:"go-pl-3 func-keyNameWord"},"}",-1)),lt={class:"go-flex-items-center"},ct=Z({__name:"index",setup(m){const{targetData:c,chartEditStore:f}=ee(),{DocumentTextIcon:z,ChevronDownIcon:y,PencilIcon:T}=se.ionicons5,N={[$.ON_CLICK]:"单击",[$.ON_DBL_CLICK]:"双击",[$.ON_MOUSE_ENTER]:"鼠标进入",[$.ON_MOUSE_LEAVE]:"鼠标移出"},O=j(!1),C=j($.ON_CLICK);let D=j(K({},c.value.events.baseEvent));const S=j(!1),G=()=>{let E="",r="",i="";return S.value=Object.entries(D.value).every(([p,v])=>{try{const B=Object.getPrototypeOf(function(){return ue(this,null,function*(){})}).constructor;return new B(v),!0}catch(B){return r=B.message,i=B.name,E=p,!1}}),{errorFn:E,message:r,name:i}},P=()=>{O.value=!1},J=()=>{if(G().errorFn){window.$message.error("事件函数错误，无法进行保存");return}Object.values(D.value).join("").trim()===""?c.value.events.baseEvent={[$.ON_CLICK]:void 0,[$.ON_DBL_CLICK]:void 0,[$.ON_MOUSE_ENTER]:void 0,[$.ON_MOUSE_LEAVE]:void 0}:c.value.events.baseEvent=K({},D.value),P()};return de(()=>O.value,E=>{E&&(D.value=K({},c.value.events.baseEvent))}),(E,r)=>{const i=n("n-icon"),p=n("n-button"),v=n("n-code"),B=n("n-card"),w=n("n-collapse-item"),h=n("n-text"),x=n("n-space"),M=n("n-tab-pane"),L=n("n-tabs"),q=n("n-layout"),H=n("n-collapse"),R=n("n-scrollbar"),A=n("n-layout-sider"),U=n("n-tag"),F=n("n-modal");return o(),_(b,null,[t(w,{title:"基础事件配置",name:"2"},{"header-extra":e(()=>[t(p,{type:"primary",tertiary:"",size:"small",onClick:r[0]||(r[0]=oe(d=>O.value=!0,["stop"]))},{icon:e(()=>[t(i,null,{default:e(()=>[t(s(T))]),_:1})]),default:e(()=>[u(" 编辑 ")]),_:1})]),default:e(()=>[t(B,{class:"collapse-show-box"},{default:e(()=>[(o(!0),_(b,null,k(s($),d=>(o(),_("div",{key:d},[l("p",null,[l("span",Ye,"// "+g(N[d]),1),Ze,l("span",et,"async "+g(d),1),u(" (mouseEvent) { ")]),l("p",tt,[t(v,{code:(s(c).events.baseEvent||{})[d]||"",language:"typescript"},null,8,["code"])]),nt]))),128))]),_:1})]),_:1}),t(F,{class:"go-chart-data-monaco-editor",show:O.value,"onUpdate:show":r[2]||(r[2]=d=>O.value=d),"mask-closable":!1},{default:e(()=>[t(B,{bordered:!1,role:"dialog",size:"small","aria-modal":"true",style:{width:"1200px",height:"700px"}},{header:e(()=>[t(x,null,{default:e(()=>[t(h,null,{default:e(()=>[u("基础事件编辑器")]),_:1})]),_:1})]),"header-extra":e(()=>[]),action:e(()=>[t(x,{justify:"space-between"},{default:e(()=>[l("div",lt,[t(U,{bordered:!1,type:"primary"},{icon:e(()=>[t(i,{component:s(z)},null,8,["component"])]),default:e(()=>[u(" 说明 ")]),_:1}),t(h,{class:"go-ml-2",depth:"2"},{default:e(()=>[u("编写方式同正常 JavaScript 写法")]),_:1})]),t(x,null,{default:e(()=>[t(p,{size:"medium",onClick:P},{default:e(()=>[u("取消")]),_:1}),t(p,{size:"medium",type:"primary",onClick:J},{default:e(()=>[u("保存")]),_:1})]),_:1})]),_:1})]),default:e(()=>[t(q,{"has-sider":"","sider-placement":"right"},{default:e(()=>[t(q,{style:{height:"580px","padding-right":"20px"}},{default:e(()=>[t(L,{value:C.value,"onUpdate:value":r[1]||(r[1]=d=>C.value=d),type:"card","tab-style":"min-width: 100px;"},{suffix:e(()=>[t(h,{class:"tab-tip",type:"warning"},{default:e(()=>[u("提示: ECharts 组件会拦截鼠标事件")]),_:1})]),default:e(()=>[(o(!0),_(b,null,k(s($),(d,a)=>(o(),I(M,{key:a,tab:`${N[d]}-${d}`,name:d},{default:e(()=>[l("p",ut,[at,l("span",ot,g(d)+"(mouseEvent)  {",1)]),t(s(me),{modelValue:s(D)[d],"onUpdate:modelValue":V=>s(D)[d]=V,height:"480px",language:"javascript"},null,8,["modelValue","onUpdate:modelValue"]),st]),_:2},1032,["tab","name"]))),128))]),_:1},8,["value"])]),_:1}),t(A,{"collapsed-width":14,width:340,"show-trigger":"bar","collapse-mode":"transform","content-style":"padding: 12px 12px 0px 12px;margin-left: 3px;"},{default:e(()=>[t(L,{"default-value":"1","justify-content":"space-evenly",type:"segment"},{default:e(()=>[t(M,{tab:"验证结果",name:"1",size:"small"},{default:e(()=>[t(R,{trigger:"none",style:{"max-height":"505px"}},{default:e(()=>[t(H,{class:"go-px-3","arrow-placement":"right","default-expanded-names":[1,2,3]},{default:e(()=>[(o(!0),_(b,null,k([G()],d=>(o(),_(b,{key:d},[t(w,{title:"错误函数",name:1},{default:e(()=>[t(h,{depth:"3"},{default:e(()=>[u(g(d.errorFn||"暂无"),1)]),_:2},1024)]),_:2},1024),t(w,{title:"错误信息",name:2},{default:e(()=>[t(h,{depth:"3"},{default:e(()=>[u(g(d.name||"暂无"),1)]),_:2},1024)]),_:2},1024),t(w,{title:"堆栈信息",name:3},{default:e(()=>[t(h,{depth:"3"},{default:e(()=>[u(g(d.message||"暂无"),1)]),_:2},1024)]),_:2},1024)],64))),128))]),_:1})]),_:1})]),_:1}),t(M,{tab:"变量说明",name:"2"},{default:e(()=>[t(R,{trigger:"none",style:{"max-height":"505px"}},{default:e(()=>[t(H,{class:"go-px-3","arrow-placement":"right","default-expanded-names":[1,2]},{default:e(()=>[t(w,{title:"mouseEvent",name:1},{default:e(()=>[t(h,{depth:"3"},{default:e(()=>[u("鼠标事件对象")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["show"])],64)}}}),rt=ae(ct,[["__scopeId","data-v-31f3fb43"]]),Ct=Z({__name:"index",setup(m){const{targetData:c}=ee();return j(!1),(f,z)=>{const y=n("n-text"),T=n("n-collapse");return o(),I(T,{class:"go-mt-3","arrow-placement":"right","default-expanded-names":["1","2"]},{default:e(()=>[t(y,{depth:"3"},{default:e(()=>[u(" 组件 id： "),t(y,null,{default:e(()=>[u(g(s(c).id),1)]),_:1})]),_:1}),t(s(we)),t(s(rt)),t(s(Xe))]),_:1})}}});export{Ct as default};
