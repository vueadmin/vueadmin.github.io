import{c as b,d as w,r as l,o as n,e as r,g as t,w as o,h as x,t as B,q as d,f as a,Q as k,R as y,u as C,a3 as S,B as u,ag as f}from"./index-bf5e9e89.js";import{i as $}from"./icon-7b13cf26.js";const N={key:0,class:"top go-mt-0 go-flex-no-wrap"},T={class:"mt-1"},I={class:"aside"},V=w({__name:"index",props:{title:String,showTop:{type:Boolean,default:!0},showBottom:{type:Boolean,default:!1},flex:{type:Boolean,default:!1},backIcon:{type:Boolean,default:!0},depth:{type:Number,default:1},xScroll:{type:Boolean,default:!1},disabledScroll:{type:Boolean,default:!1}},emits:["back"],setup(e,{emit:h}){const{ChevronBackOutlineIcon:p}=$.ionicons5,m=()=>{h("back")};return(s,z)=>{const _=l("n-text"),g=l("n-ellipsis"),i=l("n-space"),v=l("n-icon"),c=l("n-scrollbar");return n(),r("div",{class:f(["go-content-box",[`bg-depth${e.depth}`,e.flex&&"flex"]])},[e.showTop?(n(),r("div",N,[t(i,{class:"go-flex-no-wrap",size:5},{default:o(()=>[t(g,null,{default:o(()=>[t(_,null,{default:o(()=>[x(B(e.title),1)]),_:1})]),_:1}),d("div",T,[a(s.$slots,"icon",{},void 0,!0)])]),_:3}),t(i,{class:"go-flex-no-wrap",align:"center",style:{gap:"4px"}},{default:o(()=>[a(s.$slots,"top-right",{},void 0,!0),k(t(v,{size:"20",class:"go-cursor-pointer go-d-block",onClick:m},{default:o(()=>[t(C(p))]),_:1},512),[[y,e.backIcon]])]),_:3})])):S("",!0),d("div",{class:f(["content",{"content-height-show-top-bottom":e.showBottom||e.showTop,"content-height-show-both":e.showBottom&&e.showTop}])},[e.disabledScroll?a(s.$slots,"default",{key:0},void 0,!0):e.xScroll?(n(),u(c,{key:1,"x-scrollable":""},{default:o(()=>[t(c,null,{default:o(()=>[a(s.$slots,"default",{},void 0,!0)]),_:3})]),_:3})):(n(),u(c,{key:2},{default:o(()=>[a(s.$slots,"default",{},void 0,!0)]),_:3}))],2),d("div",I,[a(s.$slots,"aside",{},void 0,!0)])],2)}}}),E=b(V,[["__scopeId","data-v-6c2da2dc"]]);export{E as C};
