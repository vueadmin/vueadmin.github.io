var E=(e,t,a)=>new Promise((o,s)=>{var i=n=>{try{u(a.next(n))}catch(r){s(r)}},g=n=>{try{u(a.throw(n))}catch(r){s(r)}},u=n=>n.done?o(n.value):Promise.resolve(n.value).then(i,g);u((a=a.apply(e,t)).next())});import{M as A}from"./index-8de68efd.js";import{_ as F}from"./index-9a4c65ea.js";import{u as K,E as x}from"./chartEditStore-773be825.js";import{u as I,a as b}from"./chartLayoutStore-6f905c7a.js";import{cq as T,cr as k,cs as $,ct as R,a as M,cu as N,cv as G,cw as P,cx as U,c as H,d as V,l as q,a0 as Y,L as z,al as J,r as L,o as h,e as C,q as _,F as Q,s as W,g as c,u as m,w as f,h as O,t as S,ag as X,cy as Z,aB as j}from"./index-db98ece3.js";import{a as tt,b as et,l as at}from"./plugin-54402248.js";import{c as p}from"./components-a3cd2bb7.js";import{f as D,c as B,d as nt}from"./index-35093e64.js";import"./icon-fb380718.js";import"./index-c81317c1.js";import"./SettingItem-34f55708.js";/* empty css                                                                   */import"./SettingItemBox-42414ad4.js";import"./CollapseItem-cb939767.js";import"./index.esm.min-1ed21616.js";import"./http-8bb7445e.js";import"./lodash-9426ef50.js";function st(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}var ot=st;function rt(e,t,a){var o=-1,s=e.length;t<0&&(t=-t>s?0:s+t),a=a>s?s:a,a<0&&(a+=s),s=t>a?0:a-t>>>0,t>>>=0;for(var i=Array(s);++o<s;)i[o]=e[o+t];return i}var it=rt,lt=T,ct=it;function ut(e,t){return t.length<2?e:lt(e,ct(t,0,-1))}var dt=ut,_t=k,mt=ot,ft=dt,pt=$;function gt(e,t){return t=_t(t,e),e=ft(e,t),e==null||delete e[pt(mt(t))]}var ht=gt,Ct=R;function vt(e){return Ct(e)?void 0:e}var yt=vt,Et=M,xt=U,bt=ht,Lt=k,Ot=N,St=yt,Dt=G,Bt=P,kt=1,wt=2,At=4,Ft=Dt(function(e,t){var a={};if(e==null)return a;var o=!1;t=Et(t,function(i){return i=Lt(i,e),o||(o=i.length>1),i}),Ot(e,Bt(e),a),o&&(a=xt(a,kt|wt|At,St));for(var s=t.length;s--;)bt(a,t[s]);return a}),Kt=Ft;const It={class:"go-content-charts-item-animation-patch"},Tt=["onDragstart","onDblclick"],$t={class:"list-header"},Rt={class:"list-center go-flex-center go-transition"},Mt={class:"list-bottom"},Nt=V({__name:"index",props:{menuOptions:{type:Array,default:()=>[]}},setup(e){const t=K(),a=I(),o=q(),s=Y(()=>a.getChartType),i=(n,r)=>{p(r.chartKey,D(r)),p(r.conKey,B(r)),n.dataTransfer.setData(Z.DRAG_KEY,j(Kt(r,["image"]))),t.setEditCanvas(x.IS_CREATE,!0)},g=()=>{t.setEditCanvas(x.IS_CREATE,!1)},u=n=>E(this,null,function*(){console.log("item ===>",n);const r=["Backgrounds","Rabbits","Clothing","Informations","Other"];try{tt(),p(n.chartKey,D(n)),p(n.conKey,B(n));let l=yield nt(n);t.addComponentList(l,!1,!0),t.setTargetSelectChart(l.id),r.includes(n.package)&&t.setLock(!0,!0),et()}catch(l){at(),window.$message.warning("图表正在研发中, 敬请期待...")}});return z(()=>s.value,n=>{n===b.DOUBLE&&J(()=>{o.value.classList.add("miniAnimation")})}),(n,r)=>{const l=L("n-ellipsis"),v=L("n-text");return h(),C("div",It,[_("div",{ref_key:"contentChartsItemBoxRef",ref:o,class:X(["go-content-charts-item-box",[m(s)===m(b).DOUBLE?"double":"single"]])},[(h(!0),C(Q,null,W(e.menuOptions,(d,w)=>(h(),C("div",{class:"item-box",key:w,draggable:"",onDragstart:y=>i(y,d),onDragend:g,onDblclick:y=>u(d)},[_("div",$t,[c(m(A),{class:"list-header-control-btn",mini:!0,disabled:!0}),c(v,{class:"list-header-text",depth:"3"},{default:f(()=>[c(l,null,{default:f(()=>[O(S(d.title),1)]),_:2},1024)]),_:2},1024)]),_("div",Rt,[c(m(F),{class:"list-img",chartConfig:d},null,8,["chartConfig"])]),_("div",Mt,[c(v,{class:"list-bottom-text",depth:"3"},{default:f(()=>[c(l,{style:{"max-width":"90%"}},{default:f(()=>[O(S(d.title),1)]),_:2},1024)]),_:2},1024)])],40,Tt))),128))],2)])}}}),se=H(Nt,[["__scopeId","data-v-3abad67a"]]);export{se as default};
