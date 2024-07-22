import{g as W,h as j,k as G,l as q}from"../modules/unplugin-icons-DTe1L4h1.js";import{d as D,o,c as l,i as M,H as e,t as N,y as C,D as z,U,R as A,N as J,ag as K,a4 as O,b as k,e as t,l as s,k as g,h as F,g as Q,x as X,F as Y,p as Z,a as ee}from"../modules/vue-CSMtokJN.js";import{a as te,u as se,d as oe,c as ne,s as ae,e as re,p as ie,h as ce,i as le,j as ue,k as de,_ as _e}from"../index-KetQnBNa.js";import{r as pe,u as me,a as fe,S as xe,_ as ve,G as he,b as ke,c as ge,o as ye}from"./useWakeLock-BHoh5og1.js";import{b as be}from"../monaco/bundled-types-Cna9SweA.js";import{b as Ce,c as Se,a as I,S as we}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-BbUL2l48.js";import{_ as $e,C as Ne}from"./ClicksSlider-Bl9OLke1.js";import{_ as ze}from"./DrawingControls.vue_vue_type_style_index_0_lang-qT13Jz1K.js";import{_ as B}from"./IconButton.vue_vue_type_script_setup_true_lang-NkdQOWdg.js";import"../modules/shiki-CkGbWnXJ.js";import"../modules/file-saver-igGfcqei.js";import"./context-BOYu-SJ6.js";const Fe=D({__name:"NoteStatic",props:{no:{},class:{},clicksContext:{}},setup(i){const c=i,{info:r}=Ce(c.no);return(u,m)=>{var f,x;return o(),l($e,{class:M(c.class),note:(f=e(r))==null?void 0:f.note,"note-html":(x=e(r))==null?void 0:x.noteHTML,"clicks-context":u.clicksContext},null,8,["class","note","note-html","clicks-context"])}}}),y=i=>(Z("data-v-f0da48d8"),i=i(),ee(),i),Ie={class:"bg-main h-full slidev-presenter"},Be=y(()=>t("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Current ",-1)),De={class:"relative grid-section next flex flex-col p-2 lg:p-4"},Me={key:1,class:"h-full flex justify-center items-center"},Pe=y(()=>t("div",{class:"text-gray-500"}," End of the presentation ",-1)),Re=[Pe],Ee=y(()=>t("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Next ",-1)),Te={key:0,class:"grid-section note of-auto"},He={key:1,class:"grid-section note grid grid-rows-[1fr_min-content] overflow-hidden"},Le={class:"border-t border-main py-1 px-2 text-sm"},Ve={class:"grid-section bottom flex"},We=y(()=>t("div",{"flex-auto":""},null,-1)),je={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},Ge={class:"progress-bar"},qe=D({__name:"presenter",setup(i){const c=N();pe(),me(c),fe();const{clicksContext:r,currentSlideNo:u,currentSlideRoute:m,hasNext:f,nextRoute:x,slides:P,getPrimaryClicks:R,total:E}=te(),{isDrawing:T}=Se();se({title:`Presenter - ${be}`}),N(!1);const{timer:H,resetTimer:S}=oe(),L=C(()=>P.value.map(h=>ne(h))),n=C(()=>r.value.current<r.value.total?[m.value,r.value.current+1]:f.value?[x.value,0]:null),v=C(()=>n.value&&L.value[n.value[0].no-1]);z(n,()=>{v.value&&n.value&&(v.value.current=n.value[1])},{immediate:!0});const w=U();return A(()=>{const h=c.value.querySelector("#slide-content"),d=J(K()),b=O();z(()=>{if(!b.value||T.value||!re.value)return;const a=h.getBoundingClientRect(),_=(d.x-a.left)/a.width*100,p=(d.y-a.top)/a.height*100;if(!(_<0||_>100||p<0||p>100))return{x:_,y:p}},a=>{ae.cursor=a})}),(h,d)=>{var $;const b=W,a=j,_=G,p=q;return o(),k(Y,null,[t("div",Ie,[t("div",{class:M(["grid-container",`layout${e(ie)}`])},[t("div",{ref_key:"main",ref:c,class:"relative grid-section main flex flex-col"},[s(I,{key:"main",class:"p-2 lg:p-4 flex-auto","is-main":"",onContextmenu:e(ye)},{default:g(()=>[s(xe,{"render-context":"presenter"})]),_:1},8,["onContextmenu"]),(o(),l(Ne,{key:($=e(m))==null?void 0:$.no,"clicks-context":e(R)(e(m)),class:"w-full pb2 px4 flex-none"},null,8,["clicks-context"])),Be],512),t("div",De,[n.value&&v.value?(o(),l(I,{key:"next"},{default:g(()=>[(o(),l(we,{key:n.value[0].no,"clicks-context":v.value,route:n.value[0],"render-context":"previewNext"},null,8,["clicks-context","route"]))]),_:1})):(o(),k("div",Me,Re)),Ee]),w.value&&e(ce)?(o(),k("div",Te,[s(e(w))])):(o(),k("div",He,[(o(),l(Fe,{key:`static-${e(u)}`,no:e(u),class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:F({fontSize:`${e(le)}em`}),"clicks-context":e(r)},null,8,["no","style","clicks-context"])),t("div",Le,[s(B,{title:"Increase font size",onClick:e(ue)},{default:g(()=>[s(b)]),_:1},8,["onClick"]),s(B,{title:"Decrease font size",onClick:e(de)},{default:g(()=>[s(a)]),_:1},8,["onClick"]),Q("v-if",!0)])])),t("div",Ve,[s(ve,{persist:!0}),We,t("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:d[2]||(d[2]=(...V)=>e(S)&&e(S)(...V))},[s(_,{class:"absolute"}),s(p,{class:"absolute opacity-0"})]),t("div",je,X(e(H)),1)]),(o(),l(ze,{key:2}))],2),t("div",Ge,[t("div",{class:"progress h-3px bg-primary transition-all",style:F({width:`${(e(u)-1)/(e(E)-1)*100+1}%`})},null,4)])]),s(he),s(ke),s(ge)],64)}}}),ot=_e(qe,[["__scopeId","data-v-f0da48d8"]]);export{ot as default};
