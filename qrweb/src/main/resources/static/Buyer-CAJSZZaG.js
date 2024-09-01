import{s as O}from"./index-BEaF1NZ-.js";import{s as C}from"./index-DZ3vGfBU.js";import{s as N}from"./index-DjwzLH5h.js";import{s as D}from"./index-TE-FVBbN.js";import{s as T}from"./index-BpPMvXNe.js";import{s as U}from"./index-C5FAkPlF.js";import{s as k}from"./index-ryBxCfZ1.js";import{f as A}from"./fetchOptionsMixin-BlPY6uDo.js";import{a as c}from"./axios-DsPaXkF5.js";import{_ as E,u as M,k as t,w as i,o as n,a as s,j as v,t as f,d as r,c as R,b as u,p as P,f as S}from"./index-DrVIFePG.js";import"./index-BxAzFRmW.js";import"./index-CgWVNkEZ.js";import"./index-DG2SHMK_.js";import"./index-DCti7tDK.js";import"./index-BvrffgUy.js";import"./index-D5-mLJgz.js";import"./index-DIv_QINm.js";const x={mixins:[A],data(){return{buyer:{id:"",type_id:{},nationalID:"",citizenID:"",fullName:"",dateOfBirth:"",gender:{},address:"",issuingPlace:"",nationality:{},visaNumber:"",insuranceRelationship:"",mobilePhone:"",email:"",age:"",education:{},maritalStatus:{},profession:{},majorCategory:{},mediumCategory:{},minorCategory:{},companyName:"",position:"",jobDescription:"",monthlyIncome:"",postalCode:"",companyPhone:"",branchNumber:""},messenger:null,toast:null,CMI_ID:null,selectedOptions:{},dynamicOptions:{}}},methods:{async fetchData(){try{const d=await c.get("/v4/api/data"),o=this.extractPrefixes(d.data);await Promise.all(o.map(b=>this.fetchAuto(b)))}catch(d){console.error("Error fetching data:",d)}},extractPrefixes(d){return[...new Set(d.map(o=>o.prefix))]},async fetchAuto(d){try{const o=await c.get(`/v4/api/data/prefix/${d}`);this.dynamicOptions[d]=o.data.map(b=>({code:b.key,name:b.value})),this.selectedOptions[d]=""}catch(o){console.error(`Error fetching options for prefix ${d}:`,o)}},async loadbuyer(d){try{if(d==null)this.messenger='Không tìm thấy mã thụ lý, vui lòng quay về trang "Danh sách các đơn thụ lý" và chọn đơn xử lý!';else{const o=await c.get(`/v4/api/fortest/${d}/buyer`);o!=null&&(this.toast.add({severity:"success",summary:"Success",detail:"Tra tìm thành công!",life:3e3}),this.buyer=o.data)}}catch(o){console.error("Failed to load buyer:",o),this.toast.add({severity:"error",summary:"Error",detail:"An error occurred while fetching buyer data.",life:3e3})}},async submitForm(){try{console.log(this.buyer);const d=await c.put(`/v4/api/fortest/${this.CMI_ID}/buyer`,this.buyer);d.data?this.toast.add({severity:"success",summary:"Thành công",detail:d.data.message,life:3e3}):this.toast.add({severity:"error",summary:"Lỗi",detail:d.data.message,life:3e3})}catch(d){console.error("Error submitting form:",d),this.toast.add({severity:"error",summary:"Lỗi",detail:"Không thể gửi dữ liệu.",life:3e3})}}},mounted(){this.toast=M(),this.fetchData(),this.CMI_ID=sessionStorage.getItem("CMI_ID"),!this.CMI_ID||this.CMI_ID==""?this.messenger='Không tìm thấy mã thụ lý, vui lòng quay về trang "Danh sách các đơn thụ lý" và chọn đơn xử lý!':this.loadbuyer(this.CMI_ID)}},a=d=>(P("data-v-fee62528"),d=d(),S(),d),L={class:""},Y={key:1,class:"card flex flex-col gap-4"},G=a(()=>s("div",{class:"font-semibold text-xl"},"Bên mua bảo hiểm",-1)),j=a(()=>s("label",{for:"CMI_ID"},"Mã thụ lý",-1)),w=a(()=>s("label",{for:"type_id"},"Loại giấy tờ",-1)),B=a(()=>s("label",{for:"nationalID"},"Số chứng minh",-1)),F=a(()=>s("label",{for:"nationalID"},"Số Căn cước",-1)),z=a(()=>s("label",{for:"fullName"},"Họ tên",-1)),J=a(()=>s("label",{for:"dob"},"Ngày tháng năm sinh",-1)),K=a(()=>s("label",{for:"gender"},"Giới tính",-1)),q=a(()=>s("label",{for:"address"},"Địa chỉ",-1)),H=a(()=>s("label",{for:"issuingPlace"},"Nơi cấp",-1)),Q=a(()=>s("label",{for:"nationality"},"Quốc tịch",-1)),W=a(()=>s("label",{for:"visaNumber"},"Số thị thực nhập cảnh",-1)),X=a(()=>s("label",{for:"insuranceRelationship"},"Quan hệ bảo hiểm",-1)),Z=a(()=>s("label",{for:"mobilePhone"},"Số điện thoại di động",-1)),$=a(()=>s("label",{for:"email"},"Email",-1)),ee=a(()=>s("label",{for:"age"},"Tuổi",-1)),oe={for:"education"},le=a(()=>s("label",{for:"maritalStatus"},"Tình trạng hôn nhân",-1)),ne=a(()=>s("label",{for:"majorCategory"},"Phân loại lớn",-1)),te=a(()=>s("label",{for:"mediumCategory"},"Phân loại trung",-1)),ie=a(()=>s("label",{for:"minorCategory"},"Phân loại nhỏ",-1)),re=a(()=>s("label",{for:"companyName"},"Tên công ty",-1)),se=a(()=>s("label",{for:"position"},"Chức vụ",-1)),ue=a(()=>s("label",{for:"jobDescription"},"Nội dung nghề nghiệp",-1)),me=a(()=>s("label",{for:"monthlyIncome"},"Thu nhập tháng",-1)),ae=a(()=>s("label",{for:"postalCode"},"Mã vùng",-1)),de=a(()=>s("label",{for:"companyPhone"},"Điện thoại công ty",-1)),ye=a(()=>s("label",{for:"branchNumber"},"Số máy nhánh",-1));function pe(d,o,b,be,e,h){const _=k,y=U,m=T,p=D,V=N,g=C,I=O;return n(),t(I,{class:"flex flex-col"},{default:i(()=>[s("div",L,[e.messenger!==null?(n(),t(_,{key:0,severity:"error"},{default:i(()=>[v(f(e.messenger),1)]),_:1})):r("",!0),e.messenger==null?(n(),R("div",Y,[G,e.CMI_ID?(n(),t(m,{key:0},{default:i(()=>[u(y,{id:"CMI_ID",modelValue:e.CMI_ID,"onUpdate:modelValue":o[0]||(o[0]=l=>e.CMI_ID=l),readonly:!0},null,8,["modelValue"]),j]),_:1})):r("",!0),e.dynamicOptions.DOCUMENT_TYPE&&e.dynamicOptions.DOCUMENT_TYPE.length?(n(),t(m,{key:1,readonly:""},{default:i(()=>[w,u(p,{modelValue:e.buyer.type_id,"onUpdate:modelValue":o[1]||(o[1]=l=>e.buyer.type_id=l),options:e.dynamicOptions.DOCUMENT_TYPE,optionLabel:"name"},null,8,["modelValue","options"])]),_:1})):r("",!0),e.buyer?(n(),t(m,{key:2},{default:i(()=>[u(y,{id:"nationalID",modelValue:e.buyer.citizenID,"onUpdate:modelValue":o[2]||(o[2]=l=>e.buyer.citizenID=l),readonly:!0},null,8,["modelValue"]),B]),_:1})):r("",!0),e.buyer?(n(),t(m,{key:3},{default:i(()=>[u(y,{id:"nationalID",modelValue:e.buyer.nationalID,"onUpdate:modelValue":o[3]||(o[3]=l=>e.buyer.nationalID=l),readonly:!0},null,8,["modelValue"]),F]),_:1})):r("",!0),e.buyer?(n(),t(m,{key:4},{default:i(()=>[u(y,{id:"fullName",modelValue:e.buyer.fullName,"onUpdate:modelValue":o[4]||(o[4]=l=>e.buyer.fullName=l)},null,8,["modelValue"]),z]),_:1})):r("",!0),e.buyer?(n(),t(m,{key:5},{default:i(()=>[u(V,{id:"dob",modelValue:e.buyer.dateOfBirth,"onUpdate:modelValue":o[5]||(o[5]=l=>e.buyer.dateOfBirth=l),dateFormat:"mm/dd/yy"},null,8,["modelValue"]),J]),_:1})):r("",!0),e.dynamicOptions.GENDER&&e.dynamicOptions.GENDER.length?(n(),t(m,{key:6},{default:i(()=>[K,u(p,{modelValue:e.buyer.gender,"onUpdate:modelValue":o[6]||(o[6]=l=>e.buyer.gender=l),options:e.dynamicOptions.GENDER,optionLabel:"name"},null,8,["modelValue","options"])]),_:1})):r("",!0),e.buyer?(n(),t(m,{key:7},{default:i(()=>[u(y,{id:"address",modelValue:e.buyer.address,"onUpdate:modelValue":o[7]||(o[7]=l=>e.buyer.address=l)},null,8,["modelValue"]),q]),_:1})):r("",!0),e.buyer?(n(),t(m,{key:8},{default:i(()=>[u(y,{id:"issuingPlace",modelValue:e.buyer.issuingPlace,"onUpdate:modelValue":o[8]||(o[8]=l=>e.buyer.issuingPlace=l)},null,8,["modelValue"]),H]),_:1})):r("",!0),e.dynamicOptions.NATIONALITY&&e.dynamicOptions.NATIONALITY.length?(n(),t(m,{key:9},{default:i(()=>[Q,u(p,{modelValue:e.buyer.nationality,"onUpdate:modelValue":o[9]||(o[9]=l=>e.buyer.nationality=l),options:e.dynamicOptions.NATIONALITY,optionLabel:"name"},null,8,["modelValue","options"])]),_:1})):r("",!0),e.buyer?(n(),t(m,{key:10},{default:i(()=>[u(y,{id:"visaNumber",modelValue:e.buyer.visaNumber,"onUpdate:modelValue":o[10]||(o[10]=l=>e.buyer.visaNumber=l)},null,8,["modelValue"]),W]),_:1})):r("",!0),e.buyer?(n(),t(m,{key:11},{default:i(()=>[u(y,{id:"insuranceRelationship",modelValue:e.buyer.insuranceRelationship,"onUpdate:modelValue":o[11]||(o[11]=l=>e.buyer.insuranceRelationship=l)},null,8,["modelValue"]),X]),_:1})):r("",!0),e.buyer?(n(),t(m,{key:12},{default:i(()=>[u(y,{id:"mobilePhone",modelValue:e.buyer.mobilePhone,"onUpdate:modelValue":o[12]||(o[12]=l=>e.buyer.mobilePhone=l)},null,8,["modelValue"]),Z]),_:1})):r("",!0),e.buyer?(n(),t(m,{key:13},{default:i(()=>[u(y,{id:"email",modelValue:e.buyer.email,"onUpdate:modelValue":o[13]||(o[13]=l=>e.buyer.email=l)},null,8,["modelValue"]),$]),_:1})):r("",!0),e.buyer?(n(),t(m,{key:14},{default:i(()=>[u(y,{id:"age",modelValue:e.buyer.age,"onUpdate:modelValue":o[14]||(o[14]=l=>e.buyer.age=l)},null,8,["modelValue"]),ee]),_:1})):r("",!0),e.dynamicOptions.EDUCATION&&e.dynamicOptions.EDUCATION.length?(n(),t(m,{key:15},{default:i(()=>[s("label",oe,"Học lực "+f(e.buyer.education),1),u(p,{modelValue:e.buyer.education,"onUpdate:modelValue":o[15]||(o[15]=l=>e.buyer.education=l),options:e.dynamicOptions.EDUCATION,optionLabel:"name"},null,8,["modelValue","options"])]),_:1})):r("",!0),e.dynamicOptions.MARITAL_STATUS&&e.dynamicOptions.MARITAL_STATUS.length?(n(),t(m,{key:16},{default:i(()=>[le,u(p,{modelValue:e.buyer.maritalStatus,"onUpdate:modelValue":o[16]||(o[16]=l=>e.buyer.maritalStatus=l),options:e.dynamicOptions.MARITAL_STATUS,optionLabel:"name"},null,8,["modelValue","options"])]),_:1})):r("",!0),e.dynamicOptions.MAJOR_CATEGORY&&e.dynamicOptions.MAJOR_CATEGORY.length?(n(),t(m,{key:17},{default:i(()=>[ne,u(p,{modelValue:e.buyer.majorCategory,"onUpdate:modelValue":o[17]||(o[17]=l=>e.buyer.majorCategory=l),options:e.dynamicOptions.MAJOR_CATEGORY,optionLabel:"name"},null,8,["modelValue","options"])]),_:1})):r("",!0),e.dynamicOptions.MEDIUM_CATEGORY&&e.dynamicOptions.MEDIUM_CATEGORY.length?(n(),t(m,{key:18},{default:i(()=>[te,u(p,{modelValue:e.buyer.mediumCategory,"onUpdate:modelValue":o[18]||(o[18]=l=>e.buyer.mediumCategory=l),options:e.dynamicOptions.MEDIUM_CATEGORY,optionLabel:"name"},null,8,["modelValue","options"])]),_:1})):r("",!0),e.dynamicOptions.MINOR_CATEGORY&&e.dynamicOptions.MINOR_CATEGORY.length?(n(),t(m,{key:19},{default:i(()=>[ie,u(p,{modelValue:e.buyer.minorCategory,"onUpdate:modelValue":o[19]||(o[19]=l=>e.buyer.minorCategory=l),options:e.dynamicOptions.MINOR_CATEGORY,optionLabel:"name"},null,8,["modelValue","options"])]),_:1})):r("",!0),e.buyer?(n(),t(m,{key:20},{default:i(()=>[u(y,{id:"companyName",modelValue:e.buyer.companyName,"onUpdate:modelValue":o[20]||(o[20]=l=>e.buyer.companyName=l)},null,8,["modelValue"]),re]),_:1})):r("",!0),e.buyer?(n(),t(m,{key:21},{default:i(()=>[u(y,{id:"position",modelValue:e.buyer.position,"onUpdate:modelValue":o[21]||(o[21]=l=>e.buyer.position=l)},null,8,["modelValue"]),se]),_:1})):r("",!0),e.buyer?(n(),t(m,{key:22},{default:i(()=>[u(y,{id:"jobDescription",modelValue:e.buyer.jobDescription,"onUpdate:modelValue":o[22]||(o[22]=l=>e.buyer.jobDescription=l)},null,8,["modelValue"]),ue]),_:1})):r("",!0),e.buyer?(n(),t(m,{key:23},{default:i(()=>[u(y,{id:"monthlyIncome",modelValue:e.buyer.monthlyIncome,"onUpdate:modelValue":o[23]||(o[23]=l=>e.buyer.monthlyIncome=l)},null,8,["modelValue"]),me]),_:1})):r("",!0),e.buyer?(n(),t(m,{key:24},{default:i(()=>[u(y,{id:"postalCode",modelValue:e.buyer.postalCode,"onUpdate:modelValue":o[24]||(o[24]=l=>e.buyer.postalCode=l)},null,8,["modelValue"]),ae]),_:1})):r("",!0),e.buyer?(n(),t(m,{key:25},{default:i(()=>[u(y,{id:"companyPhone",modelValue:e.buyer.companyPhone,"onUpdate:modelValue":o[25]||(o[25]=l=>e.buyer.companyPhone=l)},null,8,["modelValue"]),de]),_:1})):r("",!0),e.buyer?(n(),t(m,{key:26},{default:i(()=>[u(y,{id:"branchNumber",modelValue:e.buyer.branchNumber,"onUpdate:modelValue":o[26]||(o[26]=l=>e.buyer.branchNumber=l)},null,8,["modelValue"]),ye]),_:1})):r("",!0),u(g,{label:"Submit",icon:"pi pi-check",onClick:h.submitForm},null,8,["onClick"])])):r("",!0)])]),_:1})}const ve=E(x,[["render",pe],["__scopeId","data-v-fee62528"]]);export{ve as default};
