import{ad as t,Y as n,j as A,ae as E,af as U,ag as V,d as B,c as N,n as k,b as c,w as m,u as a,F as G,a as h,o as j,ah as u,h as K}from"./index-20fb0306.js";import{l as _}from"./index-e3d67d15.js";import{_ as Y}from"./index.vue_vue_type_script_setup_true_lang-34d9fa67.js";import{u as I,a as $}from"./chartEditStore-eb4e0443.js";import{l as z}from"./plugin-2033e7b2.js";import{i as b}from"./icon-cb727678.js";const{CopyIcon:F,CutIcon:W,ClipboardOutlineIcon:X,TrashIcon:q,ChevronDownIcon:J,ChevronUpIcon:Q,LockOpenOutlineIcon:Z,LockClosedOutlineIcon:ee,EyeOutlineIcon:te,EyeOffOutlineIcon:oe}=b.ionicons5,{UpToTopIcon:ne,DownToBottomIcon:ae,PaintBrushIcon:le,Carbon3DSoftwareIcon:ie,Carbon3DCursorIcon:re}=b.carbon,e=I(),O=(o=3)=>({type:"divider",key:`d${o}`}),f=[{label:"锁定",key:t.LOCK,icon:n(ee),fnHandle:e.setLock},{label:"解锁",key:t.UNLOCK,icon:n(Z),fnHandle:e.setUnLock},{label:"隐藏",key:t.HIDE,icon:n(oe),fnHandle:e.setHide},{label:"显示",key:t.SHOW,icon:n(te),fnHandle:e.setShow},{type:"divider",key:"d0"},{label:"复制",key:t.COPY,icon:n(F),fnHandle:e.setCopy},{label:"剪切",key:t.CUT,icon:n(W),fnHandle:e.setCut},{label:"粘贴",key:t.PARSE,icon:n(X),fnHandle:e.setParse},{type:"divider",key:"d1"},{label:"置顶",key:t.TOP,icon:n(ne),fnHandle:e.setTop},{label:"置底",key:t.BOTTOM,icon:n(ae),fnHandle:e.setBottom},{label:"上移",key:t.UP,icon:n(Q),fnHandle:e.setUp},{label:"下移",key:t.DOWN,icon:n(J),fnHandle:e.setDown},{type:"divider",key:"d2"},{label:"清空剪贴板",key:t.CLEAR,icon:n(le),fnHandle:e.setRecordChart},{label:"删除",key:t.DELETE,icon:n(q),fnHandle:e.removeComponentList}],y=[{label:"创建分组",key:t.GROUP,icon:n(ie),fnHandle:e.setGroup},{label:"解除分组",key:t.UN_GROUP,icon:n(re),fnHandle:e.setUnGroup}],se=[t.PARSE,t.CLEAR],S=(o,l)=>{if(!l)return o;const i=[];return l.forEach(d=>{i.push(...o.filter(r=>r.key===d))}),i},ce=(o,l)=>l?o.filter(i=>l.findIndex(d=>d!==i.key)!==-1):o,s=A([]),de=(o,l,i,d,r)=>{o.stopPropagation(),o.preventDefault();let p=o.target;for(;p instanceof SVGElement;)p=p.parentNode;e.setTargetSelectChart(l&&l.id),e.setRightMenuShow(!1),e.getTargetChart.selectId.length>1?s.value=y:s.value=f,l||(s.value=S(E(s.value),se)),d&&(s.value=ce([...y,O(),...f],d)),r&&(s.value=S([...y,O(),...f],r)),i&&(s.value=i(U(E(s.value)),[...y,...f],l)),V().then(()=>{e.setMousePosition(o.clientX,o.clientY),e.setRightMenuShow(!0)})},ue=()=>(s.value=f,{menuOptions:s,defaultOptions:f,defaultMultiSelectOptions:y,handleContextMenu:de,onClickOutSide:()=>{e.setRightMenuShow(!1)},handleMenuSelect:i=>{e.setRightMenuShow(!1);const d=s.value.filter(r=>r.key===i);s.value.forEach(r=>{if(r.key===i){if(r.fnHandle){r.fnHandle();return}d||z()}})},mousePosition:e.getMousePosition}),_e={class:"go-chart"},fe={style:{overflow:"hidden",display:"flex"}},pe=B({__name:"index",setup(o){const l=$(),i=I();l.canvasInit(i.getEditCanvas);const d=_(()=>u(()=>import("./index-23551bac.js"),["./index-23551bac.js","./index-20fb0306.js","../css/index-79930e9d.css","./plugin-2033e7b2.js","./icon-cb727678.js","./useKeyboard.hook-0c1f8f7b.js","./chartEditStore-eb4e0443.js","./useSync.hook-b03903fa.js","./chartLayoutStore-b4f2137a.js","./index-63f16b81.js","./SettingItem-11e342fe.js","../css/StylesSetting-7ca7a4ce.css","./SettingItemBox-6e9bb9c5.js","./CollapseItem.vue_vue_type_script_setup_true_lang-561b5bfa.js","./chart-169a825c.js","./project.api-bcdd5979.js","../css/index-647e4d8d.css"],import.meta.url)),r=_(()=>u(()=>import("./index-26d898e2.js"),["./index-26d898e2.js","./index-20fb0306.js","../css/index-79930e9d.css","./index-e3d67d15.js","./icon-cb727678.js","../css/index-615698a0.css","./chartEditStore-eb4e0443.js","./plugin-2033e7b2.js","./useSyncUpdate.hook-6a50f8e1.js","./useSync.hook-b03903fa.js","./chartLayoutStore-b4f2137a.js","./index-63f16b81.js","./SettingItem-11e342fe.js","../css/StylesSetting-7ca7a4ce.css","./SettingItemBox-6e9bb9c5.js","./CollapseItem.vue_vue_type_script_setup_true_lang-561b5bfa.js","./chart-169a825c.js","./project.api-bcdd5979.js","./lodash-819dc23a.js","../css/index-ccc2f080.css"],import.meta.url)),p=_(()=>u(()=>import("./index-26f8c6ba.js"),["./index-26f8c6ba.js","./index-20fb0306.js","../css/index-79930e9d.css","./icon-cb727678.js","./chartEditStore-eb4e0443.js","./plugin-2033e7b2.js","./project.api-bcdd5979.js","./useSync.hook-b03903fa.js","./chartLayoutStore-b4f2137a.js","./index-63f16b81.js","./SettingItem-11e342fe.js","../css/StylesSetting-7ca7a4ce.css","./SettingItemBox-6e9bb9c5.js","./CollapseItem.vue_vue_type_script_setup_true_lang-561b5bfa.js","./chart-169a825c.js","../css/index-4b4fa8e2.css"],import.meta.url)),g=_(()=>u(()=>import("./index-b803ee23.js"),["./index-b803ee23.js","./index-20fb0306.js","../css/index-79930e9d.css","./index-2f0d3686.js","./icon-cb727678.js","../css/index-9325846c.css","./chartLayoutStore-b4f2137a.js","./chartEditStore-eb4e0443.js","./plugin-2033e7b2.js","./index-63f16b81.js","./SettingItem-11e342fe.js","../css/StylesSetting-7ca7a4ce.css","./SettingItemBox-6e9bb9c5.js","./CollapseItem.vue_vue_type_script_setup_true_lang-561b5bfa.js","./chart-169a825c.js","./index-e3d67d15.js","../css/index-615698a0.css","./index.vue_vue_type_script_setup_true_lang-34d9fa67.js","../css/index-dc86d379.css","../css/index-58f902b6.css"],import.meta.url)),H=_(()=>u(()=>import("./index-f3f87510.js").then(C=>C.i),["./index-f3f87510.js","./index-20fb0306.js","../css/index-79930e9d.css","./index-2f0d3686.js","./icon-cb727678.js","../css/index-9325846c.css","./index-e3d67d15.js","../css/index-615698a0.css","./index-63f16b81.js","./SettingItem-11e342fe.js","../css/StylesSetting-7ca7a4ce.css","./SettingItemBox-6e9bb9c5.js","./CollapseItem.vue_vue_type_script_setup_true_lang-561b5bfa.js","./chartEditStore-eb4e0443.js","./plugin-2033e7b2.js","./chart-169a825c.js","./chartLayoutStore-b4f2137a.js","../css/index-c9726ad8.css"],import.meta.url)),P=_(()=>u(()=>import("./index-83313d04.js"),["./index-83313d04.js","./index-20fb0306.js","../css/index-79930e9d.css","./index-e3d67d15.js","./icon-cb727678.js","../css/index-615698a0.css","./chartLayoutStore-b4f2137a.js","./chartEditStore-eb4e0443.js","./plugin-2033e7b2.js","../css/index-96678e28.css"],import.meta.url)),T=_(()=>u(()=>import("./index-03ed3642.js"),["./index-03ed3642.js","./chartLayoutStore-b4f2137a.js","./index-20fb0306.js","../css/index-79930e9d.css","./chartEditStore-eb4e0443.js","./plugin-2033e7b2.js","./icon-cb727678.js"],import.meta.url)),{menuOptions:R,onClickOutSide:w,mousePosition:v,handleMenuSelect:x}=ue();return(C,ye)=>{const D=h("n-layout-content"),L=h("n-layout"),M=h("n-dropdown");return j(),N(G,null,[k("div",_e,[c(L,null,{default:m(()=>[c(a(Y),null,{left:m(()=>[c(a(d))]),center:m(()=>[c(a(p))]),"ri-left":m(()=>[c(a(r))]),_:1}),c(D,{"content-style":"overflow:hidden; display: flex"},{default:m(()=>[k("div",fe,[c(a(H)),c(a(g))]),c(a(P))]),_:1})]),_:1})]),c(M,{placement:"bottom-start",trigger:"manual",size:"small",x:a(v).x,y:a(v).y,options:a(R),show:a(i).getRightMenuShow,"on-clickoutside":a(w),onSelect:a(x)},null,8,["x","y","options","show","on-clickoutside","onSelect"]),c(a(T))],64)}}});const me=K(pe,[["__scopeId","data-v-28f723f0"]]),Se=Object.freeze(Object.defineProperty({__proto__:null,default:me},Symbol.toStringTag,{value:"Module"}));export{O as d,Se as i,ue as u};
