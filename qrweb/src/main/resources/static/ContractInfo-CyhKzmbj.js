import{s as L}from"./index-DmanoTMN.js";import{s as z}from"./index-DLljfwEu.js";import{_ as A,u as V,r as w,k as $,w as j,o as D,a as t,c as g,e as E,t as y,d as M,F as O,l as R,v as W,b as G}from"./index-L1qYOGGG.js";import{a as k}from"./axios-DsPaXkF5.js";import"./index-BQZbuLes.js";const H={setup(){const l=V(),d=w([]),f=w([]),r=w([]),F=w(""),I=async(s,a,e)=>{const c=s.target.files[0];if(c){const o=new FileReader;o.onload=async p=>{d.value[a][e]=p.target.result;const m=new FormData;m.append("file",c);try{if((await k.post("/api/check-font",m,{headers:{"Content-Type":"multipart/form-data"}})).data.isFont)if(e==="front"){const h=await k.post("/api/process-upload",m,{headers:{"Content-Type":"multipart/form-data"}});h.data.status==="success"?(b(h.data.detections[0].message,a),l.add({severity:"success",summary:"Upload Success",detail:"File uploaded and processed successfully!",life:3e3})):h.data.status==="warning"?(b(h.data.new_data,a),l.add({severity:"warn",summary:"Upload Warning",detail:"File uploaded with warnings. Please check!",life:3e3})):(v(a,e),l.add({severity:"error",summary:"Upload Error",detail:"Please select a clearer image for accurate information!",life:5e3}))}else v(a,e),l.add({severity:"error",summary:"Upload Error",detail:"Back image is not suitable, please choose another one!",life:5e3});else e==="front"&&(v(a,e),l.add({severity:"error",summary:"Upload Error",detail:"Please select a clearer image for accurate information!",life:5e3}))}catch(_){console.error("Error uploading file:",_),v(a,e),l.add({severity:"error",summary:"Upload Failed",detail:"Failed to upload the file. Please try again.",life:3e3})}},o.readAsDataURL(c)}},v=(s,a)=>{d.value[s][a]=null;const e=document.getElementById(`${a}-upload-${s}`);e&&(e.value="")},x=(s,a)=>s===a?'<span class="text-green-500">Match</span>':'<span class="text-red-500">Not Match</span>',i=()=>{let s=!0;for(let a=0;a<d.value.length;a++){const e=d.value[a];(!e.front||!e.back)&&(s=!1,l.add({severity:"warn",summary:"Incomplete Uploads",detail:`Please upload both front and back images for ${e.type} ${a+1}.`,life:5e3}))}s&&C()},n=s=>{const{insured:a,buyer:e,dependents:c}=s;f.value=[{...a,type:"Insured"},{...e,type:"Buyer"},...c.map(o=>({...o,type:"Dependent"}))],d.value=[{...a,type:"Insured",front:null,back:null},{...e,type:"Buyer",front:null,back:null},...c.map(o=>({...o,type:"Dependent",front:null,back:null}))],r.value=d.value.map(o=>{var p;return{NationalID:{oldData:o.nationalID,newData:""},CitizenID:{oldData:o.citizenID,newData:""},DateOfBirth:{oldData:u(o.dateOfBirth),newData:""},FullName:{oldData:o.fullName,newData:""},Address:{oldData:o.address,newData:""},Gender:{oldData:((p=o.gender)==null?void 0:p.name)||"",newData:""}}})},u=s=>{if(!s||s.length!==8)return s;const a=s.slice(0,2),e=s.slice(2,4),c=s.slice(4);return`${a}/${e}/${c}`},b=(s,a)=>{var o,p,m,_,h,N,B,P;const e=d.value[a],c={NationalID:{oldData:((o=f.value[a])==null?void 0:o.nationalID)||"",newData:s.id_identity_card||e.nationalID},CitizenID:{oldData:((p=f.value[a])==null?void 0:p.citizenID)||"",newData:s.id_passport||e.citizenID},DateOfBirth:{oldData:((m=f.value[a])==null?void 0:m.dateOfBirth)||"",newData:u(s.birth_date)||e.dateOfBirth},FullName:{oldData:((_=f.value[a])==null?void 0:_.fullName)||"",newData:s.fullname||e.fullName},Address:{oldData:((h=f.value[a])==null?void 0:h.address)||"",newData:s.address||e.address},Gender:{oldData:((B=(N=f.value[a])==null?void 0:N.gender)==null?void 0:B.name)||"",newData:s.gender||((P=e.gender)==null?void 0:P.name)||""}};r.value[a]=c},C=async()=>{const s=d.value.map((e,c)=>{var m;const p={...f.value.find(_=>_.id===e.id)||{},...(m=r.value[c])==null?void 0:m.newData};return console.log(JSON.stringify(p)),{[e.type.toLowerCase()]:p}}),a={insured:s.find(e=>e.insured),buyer:s.find(e=>e.buyer),dependents:s.filter(e=>e.dependents).map(e=>e.dependents).flat()};try{(await k.post("/v1/api/DataForTesting",{updatedData:a,notes:F.value})).data.status==="success"?l.add({severity:"success",summary:"Update Success",detail:"Data updated successfully!",life:3e3}):l.add({severity:"warn",summary:"Update Warning",detail:"Data update with warnings. Please check!",life:3e3})}catch(e){console.error("Error updating data:",e),l.add({severity:"error",summary:"Update Failed",detail:"Failed to update data. Please try again.",life:3e3})}},T=async s=>{try{if(!s)l.add({severity:"warn",summary:"Missing ID",detail:"CMI_ID is missing. Please provide a valid ID.",life:3e3});else{const a=await k.get(`/v4/api/fortest/${s}`);n(a.data)}}catch(a){console.error("Failed to load buyer:",a),l.add({severity:"error",summary:"Data Load Error",detail:"Failed to load data. Please try again later.",life:3e3})}},U=sessionStorage.getItem("CMI_ID");return U&&T(U),{people:d,comparisonData:r,notes:F,handleUpload:I,compareFields:x,validateUploads:i,sendUpdatedData:C}}},S={class:"flex flex-col gap-8"},J={class:"card flex-1 flex flex-col gap-4 p-4"},q={class:"font-semibold text-xl"},K={class:"font-semibold text-xl"},Q={class:"grid grid-cols-2 gap-4"},X={class:"flex flex-col gap-2"},Y=["for"],Z=["id","onChange"],ee={class:"flex flex-col gap-2"},ae=["for"],te=["id","onChange"],se={class:"flex items-center justify-center"},oe={key:0,class:"w-full h-auto"},le=["src"],re={class:"flex items-center justify-center"},de={key:0,class:"w-full h-auto"},ne=["src"],ce={class:"card flex-1 flex flex-col gap-4 p-4"},ie={class:"font-semibold text-xl"},ue={class:"min-w-full mt-4 border-separate border-spacing-2 border border-gray-300"},pe=t("thead",null,[t("tr",null,[t("th",{class:"border border-gray-400 px-4 py-2"},"Field"),t("th",{class:"border border-gray-400 px-4 py-2"},"Old Data"),t("th",{class:"border border-gray-400 px-4 py-2"},"New Data"),t("th",{class:"border border-gray-400 px-4 py-2"},"Comparison")])],-1),fe={class:"border border-gray-300 px-4 py-2"},me={class:"border border-gray-300 px-4 py-2"},ye={class:"border border-gray-300 px-4 py-2"},_e=["innerHTML"],he={class:"card flex flex-col gap-4 p-4"},De=t("div",{class:"font-semibold text-xl"},"Notes",-1),ve={class:"flex flex-col gap-2"},ge=t("label",{for:"notes",class:"font-medium"},"Notes",-1),be={class:"card flex flex-col gap-4 p-4"};function we(l,d,f,r,F,I){const v=z,x=L;return D(),$(x,null,{default:j(()=>[t("div",S,[(D(!0),g(O,null,E(r.people,(i,n)=>(D(),g("div",{key:n,class:"flex flex-col md:flex-row gap-8 mb-8"},[t("div",J,[t("div",q,y(n+1)+". Upload ID Cards for "+y(i.type),1),t("div",K,y(i.fullName),1),t("div",Q,[t("div",X,[t("label",{for:"front-upload-"+n,class:"font-medium"},"Upload Front Side",8,Y),t("input",{id:"front-upload-"+n,type:"file",accept:"image/*",onChange:u=>r.handleUpload(u,n,"front"),class:"border rounded p-2"},null,40,Z)]),t("div",ee,[t("label",{for:"back-upload-"+n,class:"font-medium"},"Upload Back Side",8,ae),t("input",{id:"back-upload-"+n,type:"file",accept:"image/*",onChange:u=>r.handleUpload(u,n,"back"),class:"border rounded p-2"},null,40,te)]),t("div",se,[i.front?(D(),g("div",oe,[t("img",{src:i.front,width:"250",class:"object-cover border rounded"},null,8,le)])):M("",!0)]),t("div",re,[i.back?(D(),g("div",de,[t("img",{src:i.back,width:"250",class:"object-cover border rounded"},null,8,ne)])):M("",!0)])])]),t("div",ce,[t("div",ie,"Compare Data for "+y(i.type)+" "+y(n+1),1),t("table",ue,[pe,t("tbody",null,[(D(!0),g(O,null,E(r.comparisonData[n],(u,b)=>(D(),g("tr",{key:b},[t("td",fe,y(b),1),t("td",me,y(u.oldData),1),t("td",ye,y(u.newData),1),t("td",{class:"border border-gray-300 px-4 py-2",innerHTML:r.compareFields(u.oldData,u.newData)},null,8,_e)]))),128))])])])]))),128)),t("div",he,[De,t("div",ve,[ge,R(t("textarea",{id:"notes",rows:"6","onUpdate:modelValue":d[0]||(d[0]=i=>r.notes=i),placeholder:"Add any additional notes here",class:"border rounded p-2"},null,512),[[W,r.notes]])])]),t("div",be,[G(v,{onClick:r.validateUploads,class:"btn btn-success",label:"Cập Nhật"},null,8,["onClick"])])])]),_:1})}const Ue=A(H,[["render",we]]);export{Ue as default};
