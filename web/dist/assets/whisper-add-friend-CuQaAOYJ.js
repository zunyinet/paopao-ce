import{O as b,_ as B}from"./index-v3l9hw1O.js";import{S as C,I as N,T as V,b as W,e as q,i as z}from"./naive-ui-DNcWoFGl.js";import{d as A,H as i,e as F,q as I,w as s,j as a,k as n,A as l,x as r}from"./@vue-CQsYufSu.js";const R={class:"whisper-wrap"},S={class:"whisper-line"},T={class:"whisper-line send-wrap"},U=A({__name:"whisper-add-friend",props:{show:{type:Boolean,default:!1},user:{}},emits:["success"],setup(p,{emit:u}){const d=p,o=i(""),t=i(!1),m=u,_=()=>{m("success")},h=()=>{t.value=!0,b({user_id:d.user.id,greetings:o.value}).then(e=>{window.$message.success("发送成功"),t.value=!1,o.value="",_()}).catch(e=>{t.value=!1})};return(e,c)=>{const w=C,f=N,g=V,v=W,x=q,y=z;return F(),I(y,{show:e.show,"onUpdate:show":_,class:"whisper-card",preset:"card",size:"small",title:"申请添加朋友","mask-closable":!1,bordered:!1,style:{width:"360px"}},{default:s(()=>[a("div",R,[n(g,{"show-icon":!1},{default:s(()=>[l(" 发送添加朋友申请给: "),n(f,{style:{"max-width":"100%"}},{default:s(()=>[n(w,{type:"success"},{default:s(()=>[l(r(e.user.nickname)+"@"+r(e.user.username),1)]),_:1})]),_:1})]),_:1}),a("div",S,[n(v,{type:"textarea",placeholder:"请输入真挚的问候语",autosize:{minRows:5,maxRows:10},value:o.value,"onUpdate:value":c[0]||(c[0]=k=>o.value=k),maxlength:"120","show-count":""},null,8,["value"])]),a("div",T,[n(x,{strong:"",secondary:"",type:"primary",loading:t.value,onClick:h},{default:s(()=>[l(" 发送 ")]),_:1},8,["loading"])])])]),_:1},8,["show"])}}}),M=B(U,[["__scopeId","data-v-60be56a2"]]);export{M as W};