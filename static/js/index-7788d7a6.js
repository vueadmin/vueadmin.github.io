var G=(m,k,f)=>new Promise((A,v)=>{var w=c=>{try{u(f.next(c))}catch(p){v(p)}},i=c=>{try{u(f.throw(c))}catch(p){v(p)}},u=c=>c.done?A(c.value):Promise.resolve(c.value).then(w,i);u((f=f.apply(m,k)).next())});import{c as re,d as _e,l as z,ae as pe,az as b,L as Ce,r as a,o as r,e as h,g as e,w as t,u as o,q as E,a3 as N,Q as me,h as _,t as L,cI as T,R as fe,E as y,cJ as Fe,F as V,s as $,G as x,an as ge,cK as Ee,z as ve,A as be}from"./index-f624bd08.js";import{F as O}from"./fileTypeEnum-21359a08.js";import{u as he,f as C}from"./chartEditStore-f20ea3be.js";/* empty css                                                                   */import{l as ye}from"./components-d8c79bd4.js";import{i as H}from"./icon-528b13ce.js";import{_ as ke}from"./StylesSetting-a5591839.js";import"./plugin-392dd411.js";import"./SettingItem-66dc5001.js";import"./SettingItemBox-c26e9867.js";import"./CollapseItem-df57b4b9.js";const Ae="/static/png/noImage.png";const we=m=>(ve("data-v-144d0f34"),m=m(),be(),m),Be={class:"go-canvas-setting"},Ie={class:"upload-box"},Se=["src"],De={class:"upload-img"},ze=we(()=>E("img",{src:Ae},null,-1)),Le={class:"picker-height"},Te=_e({__name:"index",setup(m){const{ColorPaletteIcon:k}=H.ionicons5,{ScaleIcon:f,FitToScreenIcon:A,FitToHeightIcon:v,FitToWidthIcon:w}=H.carbon,i=he(),u=i.getEditCanvasConfig,c=i.getEditCanvas,p=z(),B=z(!1),I=z(0),Y=ye(()=>pe(()=>import("./index-5a639aab.js"),["static/js/index-5a639aab.js","static/js/index-f624bd08.js","static/css/index-365d5483.css","static/js/chartEditStore-f20ea3be.js","static/js/plugin-392dd411.js","static/js/icon-528b13ce.js","static/js/components-d8c79bd4.js","static/css/index-144061d0.css"])),K=[{label:"应用颜色",value:0},{label:"应用背景",value:1}],M=[{key:"ChartTheme",title:"主题颜色",icon:k,render:Y}],X=[{key:b.FIT,title:"自适应",icon:f,desc:"自适应比例展示，页面会有留白"},{key:b.SCROLL_Y,title:"Y轴滚动",icon:w,desc:"X轴铺满，Y轴自适应滚动"},{key:b.SCROLL_X,title:"X轴滚动",icon:v,desc:"Y轴铺满，X轴自适应滚动"},{key:b.FULL,title:"铺满",icon:A,desc:"强行拉伸画面，填充所有视图"}];Ce(()=>u.selectColor,s=>{I.value=s?0:1},{immediate:!0});const R=s=>s>50,U=()=>{i.computedScale()},q=l=>G(this,[l],function*({file:s}){p.value=[];const d=s.file.type;return s.file.size>1024*1024*T?(window.$message.warning(`图片超出 ${T}M 限制，请重新上传！`),!1):d!==O.PNG&&d!==O.JPEG&&d!==O.GIF?(window.$message.warning("文件格式不符合，请重新上传！"),!1):!0}),J=s=>{u.selectColor=s==0},W=()=>{i.setEditCanvasConfig(C.BACKGROUND_IMAGE,void 0),i.setEditCanvasConfig(C.SELECT_COLOR,!0)},j=()=>{B.value=!0,setTimeout(()=>{B.value=!1})},Q=()=>{i.setEditCanvasConfig(C.BACKGROUND,void 0),u.backgroundImage&&i.setEditCanvasConfig(C.SELECT_COLOR,!1),j()},Z=s=>{const{file:l}=s;ge(()=>{if(l.file){const d=Ee(l.file);i.setEditCanvasConfig(C.BACKGROUND_IMAGE,d),i.setEditCanvasConfig(C.SELECT_COLOR,!1)}else window.$message.error("添加图片失败，请稍后重试！")})},ee=s=>{i.setEditCanvasConfig(C.PREVIEW_SCALE_TYPE,s)};return(s,l)=>{const d=a("n-input-number"),S=a("n-form-item"),te=a("n-form"),g=a("n-text"),ue=a("n-upload-dragger"),ne=a("n-upload"),oe=a("n-color-picker"),F=a("n-space"),ae=a("n-select"),D=a("n-button"),P=a("n-icon"),se=a("n-tooltip"),le=a("n-button-group"),ie=a("n-divider"),ce=a("n-tab-pane"),de=a("n-tabs");return r(),h("div",Be,[e(te,{inline:"","label-width":45,size:"small","label-placement":"left"},{default:t(()=>[e(S,{label:"宽度"},{default:t(()=>[e(d,{size:"small",value:o(u).width,"onUpdate:value":[l[0]||(l[0]=n=>o(u).width=n),U],disabled:o(c).lockScale,validator:R},null,8,["value","disabled"])]),_:1}),e(S,{label:"高度"},{default:t(()=>[e(d,{size:"small",value:o(u).height,"onUpdate:value":[l[1]||(l[1]=n=>o(u).height=n),U],disabled:o(c).lockScale,validator:R},null,8,["value","disabled"])]),_:1})]),_:1}),E("div",Ie,[e(ne,{"file-list":p.value,"onUpdate:fileList":l[2]||(l[2]=n=>p.value=n),"show-file-list":!1,customRequest:Z,onBeforeUpload:q},{default:t(()=>[e(ue,null,{default:t(()=>[o(u).backgroundImage?(r(),h("img",{key:0,class:"upload-show",src:o(u).backgroundImage,alt:"背景"},null,8,Se)):N("",!0),me(E("div",De,[ze,e(g,{class:"upload-desc",depth:"3"},{default:t(()=>[_(" 背景图需小于 "+L(o(T))+"M ，格式为 png/jpg/gif 的文件 ",1)]),_:1})],512),[[fe,!o(u).backgroundImage]])]),_:1})]),_:1},8,["file-list"])]),e(F,{vertical:"",size:12},{default:t(()=>[e(F,null,{default:t(()=>[e(g,null,{default:t(()=>[_("背景颜色")]),_:1}),E("div",Le,[B.value?N("",!0):(r(),y(oe,{key:0,size:"small",style:{width:"250px"},value:o(u).background,"onUpdate:value":l[3]||(l[3]=n=>o(u).background=n),showPreview:!0,swatches:o(Fe)},null,8,["value","swatches"]))])]),_:1}),e(F,null,{default:t(()=>[e(g,null,{default:t(()=>[_("应用类型")]),_:1}),e(ae,{size:"small",style:{width:"250px"},value:I.value,"onUpdate:value":[l[4]||(l[4]=n=>I.value=n),J],disabled:!o(u).backgroundImage,options:K},null,8,["value","disabled"])]),_:1}),e(F,null,{default:t(()=>[e(g,null,{default:t(()=>[_("背景控制")]),_:1}),e(D,{class:"clear-btn",size:"small",disabled:!o(u).backgroundImage,onClick:W},{default:t(()=>[_(" 清除背景 ")]),_:1},8,["disabled"]),e(D,{class:"clear-btn",size:"small",disabled:!o(u).background,onClick:Q},{default:t(()=>[_(" 清除颜色 ")]),_:1},8,["disabled"])]),_:1}),e(F,null,{default:t(()=>[e(g,null,{default:t(()=>[_("适配方式")]),_:1}),e(le,null,{default:t(()=>[(r(),h(V,null,$(X,n=>e(D,{key:n.key,type:o(u).previewScaleType===n.key?"primary":"tertiary",ghost:"",size:"small",onClick:xe=>ee(n.key)},{default:t(()=>[e(se,{"show-arrow":!1,trigger:"hover"},{trigger:t(()=>[e(P,{class:"select-preview-icon",size:"18"},{default:t(()=>[(r(),y(x(n.icon)))]),_:2},1024)]),default:t(()=>[_(" "+L(n.desc),1)]),_:2},1024)]),_:2},1032,["type","onClick"])),64))]),_:1})]),_:1})]),_:1}),e(o(ke),{isCanvas:!0,chartStyles:o(u)},null,8,["chartStyles"]),e(ie,{style:{margin:"10px 0"}}),e(de,{class:"tabs-box",size:"small",type:"segment"},{default:t(()=>[(r(),h(V,null,$(M,n=>e(ce,{key:n.key,name:n.key,size:"small","display-directive":"show:lazy"},{tab:t(()=>[e(F,null,{default:t(()=>[E("span",null,L(n.title),1),e(P,{size:"16",class:"icon-position"},{default:t(()=>[(r(),y(x(n.icon)))]),_:2},1024)]),_:2},1024)]),default:t(()=>[(r(),y(x(n.render)))]),_:2},1032,["name"])),64))]),_:1})])}}}),Xe=re(Te,[["__scopeId","data-v-144d0f34"]]);export{Xe as default};
