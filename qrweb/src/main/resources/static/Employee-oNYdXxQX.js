import{s as l}from"./index-Cvs_lX9L.js";import{a as i}from"./ApiService-DdEtqvLu.js";import{u as c,r as d,c as m,a as r,b as u,o as p}from"./index-CvNpON1A.js";import"./index-DD3pjRwu.js";import"./index-Dgapt_6m.js";import"./axios-DsPaXkF5.js";const _={class:"card"},f={class:"card"},h=r("div",{class:"font-semibold text-xl mb-4"},"Nhân Viên Tư Vấn",-1),E={__name:"Employee",setup(b){const o=c(),t=d([null]);async function s(){try{const e=await i.fetchData("/Employee",o);e.returnCode===0?t.value=e.returnData.map(a=>({label:a.fullName,icon:"pi pi-fw pi-user",items:[{label:"Mã nhân viên  : "+a.id},{label:"Mã đơn vị        : "+a.divno},{label:"Tháng Làm Việc   : "+a.wkm},{label:"Tỉ lệ hoa hồng(%): "+a.discount}]})):o.add({severity:"warn",summary:"Warning",detail:e.msgDescs,life:3e3})}catch(e){console.error("Failed to load jobs:",e),o.add({severity:"error",summary:"Error",detail:"An error occurred while fetching jobs.",life:3e3})}}return s(),(e,a)=>{const n=l;return p(),m("div",_,[r("div",f,[h,u(n,{model:t.value},null,8,["model"])])])}}};export{E as default};
