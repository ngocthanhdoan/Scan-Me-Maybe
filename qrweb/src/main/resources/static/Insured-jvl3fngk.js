import{s as O}from"./index-Ca39QGAR.js";import{s as C}from"./index-BkxJvHHw.js";import{s as N}from"./index-0lFhcqRZ.js";import{s as D}from"./index-8PMP36tk.js";import{s as T}from"./index-Bdlbu_tZ.js";import{s as U}from"./index-DR9Lyk6F.js";import{s as k}from"./index-DrGI3cAq.js";import{f as A}from"./fetchOptionsMixin-BlPY6uDo.js";import{a as f}from"./axios-DsPaXkF5.js";import{_ as E,u as M,k as i,w as s,o as l,a as r,j as v,t as h,d as t,c as R,b as u,p as P,f as S}from"./index-IoMVe8y6.js";import"./index-BZloBvo-.js";import"./index-DdOPNKRD.js";import"./index-CRxmK-cS.js";import"./index-B_o7IA-b.js";import"./index-CMXQUE2i.js";import"./index-BfIUJ2ij.js";import"./index-m-fOHe52.js";const x={mixins:[A],data(){return{insured:{id:"",type_id:{},nationalID:"",citizenID:"",fullName:"",dateOfBirth:"",gender:{},address:"",issuingPlace:"",nationality:{},visaNumber:"",insuranceRelationship:"",mobilePhone:"",email:"",age:"",education:{},maritalStatus:{},profession:{},majorCategory:{},mediumCategory:{},minorCategory:{},companyName:"",position:"",jobDescription:"",monthlyIncome:"",postalCode:"",companyPhone:"",branchNumber:""},messenger:null,toast:null,CMI_ID:null,selectedOptions:{},dynamicOptions:{}}},methods:{async fetchData(){try{const a=await f.get("/v4/api/data"),o=this.extractPrefixes(a.data);await Promise.all(o.map(c=>this.fetchAuto(c)))}catch(a){console.error("Error fetching data:",a)}},extractPrefixes(a){return[...new Set(a.map(o=>o.prefix))]},async fetchAuto(a){try{const o=await f.get(`/v4/api/data/prefix/${a}`);this.dynamicOptions[a]=o.data.map(c=>({code:c.key,name:c.value})),this.selectedOptions[a]=""}catch(o){console.error(`Error fetching options for prefix ${a}:`,o)}},async loadinsured(a){try{if(a==null)this.messenger='Không tìm thấy mã thụ lý, vui lòng quay về trang "Danh sách các đơn thụ lý" và chọn đơn xử lý!';else{const o=await f.get(`/v4/api/fortest/${a}/insured`);o!=null&&(this.toast.add({severity:"success",summary:"Success",detail:"Tra tìm thành công!",life:3e3}),this.insured=o.data)}}catch(o){console.error("Failed to load insured:",o),this.toast.add({severity:"error",summary:"Error",detail:"An error occurred while fetching insured data.",life:3e3})}},async submitForm(){try{console.log(this.insured);const a=await f.put(`/v4/api/fortest/${this.CMI_ID}/insured`,this.insured);a.data?this.toast.add({severity:"success",summary:"Thành công",detail:a.data.message,life:3e3}):this.toast.add({severity:"error",summary:"Lỗi",detail:a.data.message,life:3e3})}catch(a){console.error("Error submitting form:",a),this.toast.add({severity:"error",summary:"Lỗi",detail:"Không thể gửi dữ liệu.",life:3e3})}}},mounted(){this.toast=M(),this.fetchData(),this.CMI_ID=sessionStorage.getItem("CMI_ID"),!this.CMI_ID||this.CMI_ID==""?this.messenger='Không tìm thấy mã thụ lý, vui lòng quay về trang "Danh sách các đơn thụ lý" và chọn đơn xử lý!':this.loadinsured(this.CMI_ID)}},m=a=>(P("data-v-50e311eb"),a=a(),S(),a),L={class:""},Y={key:1,class:"card flex flex-col gap-4"},G=m(()=>r("div",{class:"font-semibold text-xl"},"Người được bảo hiểm",-1)),j=m(()=>r("label",{for:"CMI_ID"},"Mã thụ lý",-1)),w=m(()=>r("label",{for:"type_id"},"Loại giấy tờ",-1)),B=m(()=>r("label",{for:"nationalID"},"Số chứng minh",-1)),F=m(()=>r("label",{for:"nationalID"},"Số Căn cước",-1)),z=m(()=>r("label",{for:"fullName"},"Họ tên",-1)),J=m(()=>r("label",{for:"dob"},"Ngày tháng năm sinh",-1)),K=m(()=>r("label",{for:"gender"},"Giới tính",-1)),q=m(()=>r("label",{for:"address"},"Địa chỉ",-1)),H=m(()=>r("label",{for:"issuingPlace"},"Nơi cấp",-1)),Q=m(()=>r("label",{for:"nationality"},"Quốc tịch",-1)),W=m(()=>r("label",{for:"visaNumber"},"Số thị thực nhập cảnh",-1)),X=m(()=>r("label",{for:"insuranceRelationship"},"Quan hệ bảo hiểm",-1)),Z=m(()=>r("label",{for:"mobilePhone"},"Số điện thoại di động",-1)),$=m(()=>r("label",{for:"email"},"Email",-1)),ee=m(()=>r("label",{for:"age"},"Tuổi",-1)),oe={for:"education"},ne=m(()=>r("label",{for:"maritalStatus"},"Tình trạng hôn nhân",-1)),le=m(()=>r("label",{for:"majorCategory"},"Phân loại lớn",-1)),ie=m(()=>r("label",{for:"mediumCategory"},"Phân loại trung",-1)),se=m(()=>r("label",{for:"minorCategory"},"Phân loại nhỏ",-1)),te=m(()=>r("label",{for:"companyName"},"Tên công ty",-1)),re=m(()=>r("label",{for:"position"},"Chức vụ",-1)),ue=m(()=>r("label",{for:"jobDescription"},"Nội dung nghề nghiệp",-1)),de=m(()=>r("label",{for:"monthlyIncome"},"Thu nhập tháng",-1)),me=m(()=>r("label",{for:"postalCode"},"Mã vùng",-1)),ae=m(()=>r("label",{for:"companyPhone"},"Điện thoại công ty",-1)),pe=m(()=>r("label",{for:"branchNumber"},"Số máy nhánh",-1));function ye(a,o,c,ce,e,_){const V=k,p=U,d=T,y=D,g=N,b=C,I=O;return l(),i(I,{class:"flex flex-col"},{default:s(()=>[r("div",L,[e.messenger!==null?(l(),i(V,{key:0,severity:"error"},{default:s(()=>[v(h(e.messenger),1)]),_:1})):t("",!0),e.messenger==null?(l(),R("div",Y,[G,e.CMI_ID?(l(),i(d,{key:0},{default:s(()=>[u(p,{id:"CMI_ID",modelValue:e.CMI_ID,"onUpdate:modelValue":o[0]||(o[0]=n=>e.CMI_ID=n),readonly:!0},null,8,["modelValue"]),j]),_:1})):t("",!0),e.dynamicOptions.DOCUMENT_TYPE&&e.dynamicOptions.DOCUMENT_TYPE.length?(l(),i(d,{key:1,readonly:""},{default:s(()=>[w,u(y,{modelValue:e.insured.type_id,"onUpdate:modelValue":o[1]||(o[1]=n=>e.insured.type_id=n),options:e.dynamicOptions.DOCUMENT_TYPE,optionLabel:"name"},null,8,["modelValue","options"])]),_:1})):t("",!0),e.insured?(l(),i(d,{key:2},{default:s(()=>[u(p,{id:"nationalID",modelValue:e.insured.citizenID,"onUpdate:modelValue":o[2]||(o[2]=n=>e.insured.citizenID=n),readonly:!0},null,8,["modelValue"]),B]),_:1})):t("",!0),e.insured?(l(),i(d,{key:3},{default:s(()=>[u(p,{id:"nationalID",modelValue:e.insured.nationalID,"onUpdate:modelValue":o[3]||(o[3]=n=>e.insured.nationalID=n),readonly:!0},null,8,["modelValue"]),F]),_:1})):t("",!0),e.insured?(l(),i(d,{key:4},{default:s(()=>[u(p,{id:"fullName",modelValue:e.insured.fullName,"onUpdate:modelValue":o[4]||(o[4]=n=>e.insured.fullName=n)},null,8,["modelValue"]),z]),_:1})):t("",!0),e.insured?(l(),i(d,{key:5},{default:s(()=>[u(g,{id:"dob",modelValue:e.insured.dateOfBirth,"onUpdate:modelValue":o[5]||(o[5]=n=>e.insured.dateOfBirth=n),dateFormat:"mm/dd/yy"},null,8,["modelValue"]),J]),_:1})):t("",!0),e.dynamicOptions.GENDER&&e.dynamicOptions.GENDER.length?(l(),i(d,{key:6},{default:s(()=>[K,u(y,{modelValue:e.insured.gender,"onUpdate:modelValue":o[6]||(o[6]=n=>e.insured.gender=n),options:e.dynamicOptions.GENDER,optionLabel:"name"},null,8,["modelValue","options"])]),_:1})):t("",!0),e.insured?(l(),i(d,{key:7},{default:s(()=>[u(p,{id:"address",modelValue:e.insured.address,"onUpdate:modelValue":o[7]||(o[7]=n=>e.insured.address=n)},null,8,["modelValue"]),q]),_:1})):t("",!0),e.insured?(l(),i(d,{key:8},{default:s(()=>[u(p,{id:"issuingPlace",modelValue:e.insured.issuingPlace,"onUpdate:modelValue":o[8]||(o[8]=n=>e.insured.issuingPlace=n)},null,8,["modelValue"]),H]),_:1})):t("",!0),e.dynamicOptions.NATIONALITY&&e.dynamicOptions.NATIONALITY.length?(l(),i(d,{key:9},{default:s(()=>[Q,u(y,{modelValue:e.insured.nationality,"onUpdate:modelValue":o[9]||(o[9]=n=>e.insured.nationality=n),options:e.dynamicOptions.NATIONALITY,optionLabel:"name"},null,8,["modelValue","options"])]),_:1})):t("",!0),e.insured?(l(),i(d,{key:10},{default:s(()=>[u(p,{id:"visaNumber",modelValue:e.insured.visaNumber,"onUpdate:modelValue":o[10]||(o[10]=n=>e.insured.visaNumber=n)},null,8,["modelValue"]),W]),_:1})):t("",!0),e.insured?(l(),i(d,{key:11},{default:s(()=>[u(p,{id:"insuranceRelationship",modelValue:e.insured.insuranceRelationship,"onUpdate:modelValue":o[11]||(o[11]=n=>e.insured.insuranceRelationship=n)},null,8,["modelValue"]),X]),_:1})):t("",!0),e.insured?(l(),i(d,{key:12},{default:s(()=>[u(p,{id:"mobilePhone",modelValue:e.insured.mobilePhone,"onUpdate:modelValue":o[12]||(o[12]=n=>e.insured.mobilePhone=n)},null,8,["modelValue"]),Z]),_:1})):t("",!0),e.insured?(l(),i(d,{key:13},{default:s(()=>[u(p,{id:"email",modelValue:e.insured.email,"onUpdate:modelValue":o[13]||(o[13]=n=>e.insured.email=n)},null,8,["modelValue"]),$]),_:1})):t("",!0),e.insured?(l(),i(d,{key:14},{default:s(()=>[u(p,{id:"age",modelValue:e.insured.age,"onUpdate:modelValue":o[14]||(o[14]=n=>e.insured.age=n)},null,8,["modelValue"]),ee]),_:1})):t("",!0),e.dynamicOptions.EDUCATION&&e.dynamicOptions.EDUCATION.length?(l(),i(d,{key:15},{default:s(()=>[r("label",oe,"Học lực "+h(e.insured.education),1),u(y,{modelValue:e.insured.education,"onUpdate:modelValue":o[15]||(o[15]=n=>e.insured.education=n),options:e.dynamicOptions.EDUCATION,optionLabel:"name"},null,8,["modelValue","options"])]),_:1})):t("",!0),e.dynamicOptions.MARITAL_STATUS&&e.dynamicOptions.MARITAL_STATUS.length?(l(),i(d,{key:16},{default:s(()=>[ne,u(y,{modelValue:e.insured.maritalStatus,"onUpdate:modelValue":o[16]||(o[16]=n=>e.insured.maritalStatus=n),options:e.dynamicOptions.MARITAL_STATUS,optionLabel:"name"},null,8,["modelValue","options"])]),_:1})):t("",!0),e.dynamicOptions.MAJOR_CATEGORY&&e.dynamicOptions.MAJOR_CATEGORY.length?(l(),i(d,{key:17},{default:s(()=>[le,u(y,{modelValue:e.insured.majorCategory,"onUpdate:modelValue":o[17]||(o[17]=n=>e.insured.majorCategory=n),options:e.dynamicOptions.MAJOR_CATEGORY,optionLabel:"name"},null,8,["modelValue","options"])]),_:1})):t("",!0),e.dynamicOptions.MEDIUM_CATEGORY&&e.dynamicOptions.MEDIUM_CATEGORY.length?(l(),i(d,{key:18},{default:s(()=>[ie,u(y,{modelValue:e.insured.mediumCategory,"onUpdate:modelValue":o[18]||(o[18]=n=>e.insured.mediumCategory=n),options:e.dynamicOptions.MEDIUM_CATEGORY,optionLabel:"name"},null,8,["modelValue","options"])]),_:1})):t("",!0),e.dynamicOptions.MINOR_CATEGORY&&e.dynamicOptions.MINOR_CATEGORY.length?(l(),i(d,{key:19},{default:s(()=>[se,u(y,{modelValue:e.insured.minorCategory,"onUpdate:modelValue":o[19]||(o[19]=n=>e.insured.minorCategory=n),options:e.dynamicOptions.MINOR_CATEGORY,optionLabel:"name"},null,8,["modelValue","options"])]),_:1})):t("",!0),e.insured?(l(),i(d,{key:20},{default:s(()=>[u(p,{id:"companyName",modelValue:e.insured.companyName,"onUpdate:modelValue":o[20]||(o[20]=n=>e.insured.companyName=n)},null,8,["modelValue"]),te]),_:1})):t("",!0),e.insured?(l(),i(d,{key:21},{default:s(()=>[u(p,{id:"position",modelValue:e.insured.position,"onUpdate:modelValue":o[21]||(o[21]=n=>e.insured.position=n)},null,8,["modelValue"]),re]),_:1})):t("",!0),e.insured?(l(),i(d,{key:22},{default:s(()=>[u(p,{id:"jobDescription",modelValue:e.insured.jobDescription,"onUpdate:modelValue":o[22]||(o[22]=n=>e.insured.jobDescription=n)},null,8,["modelValue"]),ue]),_:1})):t("",!0),e.insured?(l(),i(d,{key:23},{default:s(()=>[u(p,{id:"monthlyIncome",modelValue:e.insured.monthlyIncome,"onUpdate:modelValue":o[23]||(o[23]=n=>e.insured.monthlyIncome=n)},null,8,["modelValue"]),de]),_:1})):t("",!0),e.insured?(l(),i(d,{key:24},{default:s(()=>[u(p,{id:"postalCode",modelValue:e.insured.postalCode,"onUpdate:modelValue":o[24]||(o[24]=n=>e.insured.postalCode=n)},null,8,["modelValue"]),me]),_:1})):t("",!0),e.insured?(l(),i(d,{key:25},{default:s(()=>[u(p,{id:"companyPhone",modelValue:e.insured.companyPhone,"onUpdate:modelValue":o[25]||(o[25]=n=>e.insured.companyPhone=n)},null,8,["modelValue"]),ae]),_:1})):t("",!0),e.insured?(l(),i(d,{key:26},{default:s(()=>[u(p,{id:"branchNumber",modelValue:e.insured.branchNumber,"onUpdate:modelValue":o[26]||(o[26]=n=>e.insured.branchNumber=n)},null,8,["modelValue"]),pe]),_:1})):t("",!0),u(b,{label:"Submit",icon:"pi pi-check",onClick:_.submitForm},null,8,["onClick"])])):t("",!0)])]),_:1})}const ve=E(x,[["render",ye],["__scopeId","data-v-50e311eb"]]);export{ve as default};
