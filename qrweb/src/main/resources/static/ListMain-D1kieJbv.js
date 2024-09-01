import{a as w}from"./ApiService-DdEtqvLu.js";import{_ as D,u as I,r as c,c as y,b as o,w as a,g as r,h as i,i as n,o as N,j as d,t as p,F as M,e as A,p as B,f as x,a as F}from"./index-DrVIFePG.js";import{s as h}from"./index-D9m3Q_dO.js";import{s as U}from"./index-CRFzPNIl.js";import{s as f}from"./index-C5FAkPlF.js";import"./axios-DsPaXkF5.js";import"./index-BxAzFRmW.js";import"./index-BfFfzviG.js";import"./index-TE-FVBbN.js";import"./index-CgWVNkEZ.js";import"./index-DIv_QINm.js";import"./index-D5-mLJgz.js";import"./index-BxUlChyf.js";import"./index-B-kPBk9N.js";import"./index-B9dtMapd.js";import"./index-DCti7tDK.js";import"./index-CLhGY-_8.js";import"./index-DZ3vGfBU.js";import"./index-CIel3h23.js";import"./index-DQcKX04c.js";import"./index-DwbLaGt_.js";import"./index-B60HhPRJ.js";import"./index-wCWb5A6t.js";const H=u=>(B("data-v-c5543b9e"),u=u(),x(),u),C={class:"card"},R=H(()=>F("div",{class:"font-semibold text-xl mb-4"},"Customer Data",-1)),L={__name:"ListMain",setup(u){const m=I(),_=c([]),v=c(null),g=c(!1),s=c(null);async function S(){try{const l=await w.fetchData("/DataForTesting",m);l.returnCode===0?(_.value=l.returnData,console.log(l.returnData)):m.add({severity:"warn",summary:"Warning",detail:l.msgDescs,life:3e3})}catch(l){console.error("Failed to load data:",l),m.add({severity:"error",summary:"Error",detail:"An error occurred while fetching data.",life:3e3})}}S();function V(){v.value={global:{value:null,matchMode:i.CONTAINS},"insured.FullName":{operator:n.AND,constraints:[{value:null,matchMode:i.STARTS_WITH}]},"buyer.FullName":{operator:n.AND,constraints:[{value:null,matchMode:i.STARTS_WITH}]},"dependents.FullName":{operator:n.AND,constraints:[{value:null,matchMode:i.STARTS_WITH}]},"insured.DateOfBirth":{operator:n.AND,constraints:[{value:null,matchMode:i.DATE_IS}]},"insured.Gender":{operator:n.AND,constraints:[{value:null,matchMode:i.EQUALS}]}}}V();function b(l){s.value=l,console.log("Selected row ID:",JSON.stringify(s.value.data.id)),m.add({severity:"success",summary:`Mã thụ lý: ${s.value.data.id}`,detail:"Đã được nạp dữ liệu để thực hiện nhập CMI",life:6e3}),sessionStorage.setItem("CMI_ID",s.value.data.id)}return(l,T)=>(N(),y("div",C,[R,o(r(U),{value:_.value,paginator:!0,rows:10,dataKey:"id",rowHover:!0,filters:v.value,"onUpdate:filters":T[0]||(T[0]=e=>v.value=e),filterDisplay:"menu",loading:g.value,showGridlines:"",selectionMode:"single",selection:s.value,onRowClick:b},{empty:a(()=>[d(" No data found. ")]),loading:a(()=>[d(" Loading data. Please wait. ")]),default:a(()=>[o(r(h),{field:"buyer.fullName",header:"Mã Thụ Lý",style:{"min-width":"12rem"}},{body:a(({data:e})=>[d(p(e.id),1)]),filter:a(({filterModel:e})=>[o(r(f),{modelValue:e.value,"onUpdate:modelValue":t=>e.value=t,type:"text",placeholder:"Search by Tên Bên Mua Bảo Hiểm"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),o(r(h),{field:"buyer.fullName",header:"Tên Bên Mua Bảo Hiểm",style:{"min-width":"12rem"}},{body:a(({data:e})=>[d(p(e.buyer.fullName),1)]),filter:a(({filterModel:e})=>[o(r(f),{modelValue:e.value,"onUpdate:modelValue":t=>e.value=t,type:"text",placeholder:"Search by Tên Bên Mua Bảo Hiểm"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),o(r(h),{field:"insured.fullName",header:"Tên Người Được Bảo Hiểm",style:{"min-width":"12rem"}},{body:a(({data:e})=>[d(p(e.insured.fullName),1)]),filter:a(({filterModel:e})=>[o(r(f),{modelValue:e.value,"onUpdate:modelValue":t=>e.value=t,type:"text",placeholder:"Search by Tên Người Được Bảo Hiểm"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),o(r(h),{field:"dependents.fullName",header:"Tên Người Phụ Thuộc",style:{"min-width":"12rem"}},{body:a(({data:e})=>[(N(!0),y(M,null,A(e.dependents,t=>(N(),y("div",{key:t.id},p(t.fullName),1))),128))]),filter:a(({filterModel:e})=>[o(r(f),{modelValue:e.value,"onUpdate:modelValue":t=>e.value=t,type:"text",placeholder:"Search by Tên Người Phụ Thuộc"},null,8,["modelValue","onUpdate:modelValue"])]),_:1})]),_:1},8,["value","filters","loading","selection"])]))}},se=D(L,[["__scopeId","data-v-c5543b9e"]]);export{se as default};
