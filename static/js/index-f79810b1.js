var O=(m,I,f)=>new Promise((L,y)=>{var T=o=>{try{b(f.next(o))}catch(g){y(g)}},i=o=>{try{b(f.throw(o))}catch(g){y(g)}},b=o=>o.done?L(o.value):Promise.resolve(o.value).then(T,i);b((f=f.apply(m,I)).next())});import{d as _e,k as pe,j as U,ah as me,aI as k,J as fe,a as s,o as r,c as E,b as e,w as t,u as n,n as w,a9 as V,Q as ge,U as ve,e as _,t as D,bX as P,D as S,bY as Ce,F as Y,q as H,E as $,ag as be,aO as he,R as we,s as ye,x as ke,h as Ee}from"./index-20fb0306.js";import{F as N}from"./fileTypeEnum-21359a08.js";import{u as Se,E as u}from"./chartEditStore-eb4e0443.js";/* empty css                                                                      */import{l as Ie}from"./index-e3d67d15.js";import{i as M}from"./icon-cb727678.js";import{S as Le}from"./StylesSetting-8d59f60a.js";import{b as Te}from"./project.api-bcdd5979.js";import"./plugin-2033e7b2.js";import"./SettingItem-11e342fe.js";import"./SettingItemBox-6e9bb9c5.js";import"./CollapseItem.vue_vue_type_script_setup_true_lang-561b5bfa.js";const xe=""+new URL("../png/noImage.png",import.meta.url).href,ze=m=>(ye("data-v-340a9d3c"),m=m(),ke(),m),Re={class:"go-canvas-setting"},Fe={class:"upload-box"},Oe=["src"],Ue={class:"upload-img"},De=ze(()=>w("img",{src:xe},null,-1)),Pe=_("背景颜色"),$e={class:"picker-height"},Ne=_("应用类型"),Ae=_("背景控制"),Ge=_(" 清除背景 "),Be=_(" 清除颜色 "),Ve=_("适配方式"),Ye=_e({__name:"index",setup(m){const{ColorPaletteIcon:I}=M.ionicons5,{ScaleIcon:f,FitToScreenIcon:L,FitToHeightIcon:y,FitToWidthIcon:T}=M.carbon,i=Se(),b=pe(),o=i.getEditCanvasConfig,g=i.getEditCanvas,x=U(),z=U(!1),R=U(0),X=Ie(()=>me(()=>import("./index-7bbcba93.js"),["./index-7bbcba93.js","./index-20fb0306.js","../css/index-79930e9d.css","./chartEditStore-eb4e0443.js","./plugin-2033e7b2.js","./icon-cb727678.js","./index-e3d67d15.js","../css/index-615698a0.css","../css/index-39f06c17.css"],import.meta.url)),K=[{label:"应用颜色",value:0},{label:"应用背景",value:1}],j=[{key:"ChartTheme",title:"主题颜色",icon:I,render:X}],q=[{key:k.FIT,title:"自适应",icon:f,desc:"自适应比例展示，页面会有留白"},{key:k.SCROLL_Y,title:"Y轴滚动",icon:T,desc:"X轴铺满，Y轴自适应滚动"},{key:k.SCROLL_X,title:"X轴滚动",icon:y,desc:"Y轴铺满，X轴自适应滚动"},{key:k.FULL,title:"铺满",icon:L,desc:"强行拉伸画面，填充所有视图"}];fe(()=>o.selectColor,c=>{R.value=c?0:1},{immediate:!0});const A=c=>c>50,G=()=>{i.computedScale()},J=l=>O(this,[l],function*({file:c}){x.value=[];const d=c.file.type;return c.file.size>1024*1024*P?(window.$message.warning(`图片超出 ${P}M 限制，请重新上传！`),!1):d!==N.PNG&&d!==N.JPEG&&d!==N.GIF?(window.$message.warning("文件格式不符合，请重新上传！"),!1):!0}),W=c=>{o.selectColor=c==0},Q=()=>{i.setEditCanvasConfig(u.BACKGROUND_IMAGE,void 0),i.setEditCanvasConfig(u.SELECT_COLOR,!0)},Z=()=>{z.value=!0,setTimeout(()=>{z.value=!1})},ee=()=>{i.setEditCanvasConfig(u.BACKGROUND,void 0),o.backgroundImage&&i.setEditCanvasConfig(u.SELECT_COLOR,!1),Z()},te=c=>{const{file:l}=c;be(()=>O(this,null,function*(){if(l.file){const d=new File([l.file],`${he()}_index_background.png`,{type:l.file.type});let v=new FormData;v.append("object",d);const p=yield Te(v);if(p&&p.code===we.SUCCESS){p.data.fileurl?i.setEditCanvasConfig(u.BACKGROUND_IMAGE,`${p.data.fileurl}?time=${new Date().getTime()}`):i.setEditCanvasConfig(u.BACKGROUND_IMAGE,`${b.getFetchInfo.OSSUrl||""}${p.data.fileName}?time=${new Date().getTime()}`),i.setEditCanvasConfig(u.SELECT_COLOR,!1);return}window.$message.error("添加图片失败，请稍后重试！")}else window.$message.error("添加图片失败，请稍后重试！")}))},oe=c=>{i.setEditCanvasConfig(u.PREVIEW_SCALE_TYPE,c)};return(c,l)=>{const d=s("n-input-number"),v=s("n-form-item"),p=s("n-form"),h=s("n-text"),ae=s("n-upload-dragger"),ne=s("n-upload"),se=s("n-color-picker"),C=s("n-space"),le=s("n-select"),F=s("n-button"),B=s("n-icon"),ie=s("n-tooltip"),ce=s("n-button-group"),de=s("n-divider"),re=s("n-tab-pane"),ue=s("n-tabs");return r(),E("div",Re,[e(p,{inline:"","label-width":45,size:"small","label-placement":"left"},{default:t(()=>[e(v,{label:"宽度"},{default:t(()=>[e(d,{size:"small",value:n(o).width,"onUpdate:value":[l[0]||(l[0]=a=>n(o).width=a),G],disabled:n(g).lockScale,validator:A},null,8,["value","disabled"])]),_:1}),e(v,{label:"高度"},{default:t(()=>[e(d,{size:"small",value:n(o).height,"onUpdate:value":[l[1]||(l[1]=a=>n(o).height=a),G],disabled:n(g).lockScale,validator:A},null,8,["value","disabled"])]),_:1})]),_:1}),w("div",Fe,[e(ne,{"file-list":x.value,"onUpdate:file-list":l[2]||(l[2]=a=>x.value=a),"show-file-list":!1,customRequest:te,onBeforeUpload:J},{default:t(()=>[e(ae,null,{default:t(()=>[n(o).backgroundImage?(r(),E("img",{key:0,class:"upload-show",src:n(o).backgroundImage,alt:"背景"},null,8,Oe)):V("",!0),ge(w("div",Ue,[De,e(h,{class:"upload-desc",depth:"3"},{default:t(()=>[_(" 背景图需小于 "+D(n(P))+"M ，格式为 png/jpg/gif 的文件 ",1)]),_:1})],512),[[ve,!n(o).backgroundImage]])]),_:1})]),_:1},8,["file-list"])]),e(C,{vertical:"",size:12},{default:t(()=>[e(C,null,{default:t(()=>[e(h,null,{default:t(()=>[Pe]),_:1}),w("div",$e,[z.value?V("",!0):(r(),S(se,{key:0,size:"small",style:{width:"250px"},value:n(o).background,"onUpdate:value":l[3]||(l[3]=a=>n(o).background=a),showPreview:!0,swatches:n(Ce)},null,8,["value","swatches"]))])]),_:1}),e(C,null,{default:t(()=>[e(h,null,{default:t(()=>[Ne]),_:1}),e(le,{size:"small",style:{width:"250px"},value:R.value,"onUpdate:value":[l[4]||(l[4]=a=>R.value=a),W],disabled:!n(o).backgroundImage,options:K},null,8,["value","disabled"])]),_:1}),e(C,null,{default:t(()=>[e(h,null,{default:t(()=>[Ae]),_:1}),e(F,{class:"clear-btn",size:"small",disabled:!n(o).backgroundImage,onClick:Q},{default:t(()=>[Ge]),_:1},8,["disabled"]),e(F,{class:"clear-btn",size:"small",disabled:!n(o).background,onClick:ee},{default:t(()=>[Be]),_:1},8,["disabled"])]),_:1}),e(C,null,{default:t(()=>[e(h,null,{default:t(()=>[Ve]),_:1}),e(ce,null,{default:t(()=>[(r(),E(Y,null,H(q,a=>e(F,{key:a.key,type:n(o).previewScaleType===a.key?"primary":"tertiary",ghost:"",size:"small",onClick:He=>oe(a.key)},{default:t(()=>[e(ie,{"show-arrow":!1,trigger:"hover"},{trigger:t(()=>[e(B,{class:"select-preview-icon",size:"18"},{default:t(()=>[(r(),S($(a.icon)))]),_:2},1024)]),default:t(()=>[_(" "+D(a.desc),1)]),_:2},1024)]),_:2},1032,["type","onClick"])),64))]),_:1})]),_:1})]),_:1}),e(n(Le),{isCanvas:!0,chartStyles:n(o)},null,8,["chartStyles"]),e(de,{style:{margin:"10px 0"}}),e(ue,{class:"tabs-box",size:"small",type:"segment"},{default:t(()=>[(r(),E(Y,null,H(j,a=>e(re,{key:a.key,name:a.key,size:"small","display-directive":"show:lazy"},{tab:t(()=>[e(C,null,{default:t(()=>[w("span",null,D(a.title),1),e(B,{size:"16",class:"icon-position"},{default:t(()=>[(r(),S($(a.icon)))]),_:2},1024)]),_:2},1024)]),default:t(()=>[(r(),S($(a.render)))]),_:2},1032,["name"])),64))]),_:1})])}}});const nt=Ee(Ye,[["__scopeId","data-v-340a9d3c"]]);export{nt as default};
