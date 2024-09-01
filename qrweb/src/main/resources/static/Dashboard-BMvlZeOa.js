import{s as D}from"./index-Cq7uxerw.js";import{s as v}from"./index-DKvQpFtm.js";import{s as x}from"./index-CEo_Okom.js";import{s as N}from"./index-CYryf9SN.js";import{s as C}from"./index-Dag0tOx7.js";import{f as O}from"./fetchOptionsMixin-BlPY6uDo.js";import{a as g}from"./axios-DsPaXkF5.js";import{_ as w,r as V,u as B,c as m,a as t,b as n,d as p,F as E,e as U,o as c,p as R,f as T}from"./index-Co5BgI-D.js";import"./index-ILv-FfIU.js";import"./index-Dz7yIZa8.js";import"./index-AD-4nzxZ.js";import"./index-CWHUfEpn.js";import"./index-DtdoC3QH.js";import"./index-BMmx-0W9.js";import"./index-B4MhMIbh.js";import"./index-MU3BYy2F.js";import"./index-CbtzplM7.js";const A={mixins:[O],data(){return{insured:{id:"",type_id:{},nationalID:"",citizenID:"",fullName:"",dateOfBirth:"",gender:{},address:"",issuingPlace:"",nationality:{},visaNumber:"",mobilePhone:"",email:"",age:"",education:{},maritalStatus:{},profession:{},majorCategory:{},mediumCategory:{},minorCategory:{},companyName:"",position:"",jobDescription:"",monthlyIncome:"",postalCode:"",companyPhone:"",branchNumber:"",relationShip:{}},buyer:{id:"",type_id:{},nationalID:"",citizenID:"",fullName:"",dateOfBirth:"",gender:{},address:"",issuingPlace:"",nationality:{},visaNumber:"",relationShip:{},mobilePhone:"",email:"",age:"",education:{},maritalStatus:{},profession:{},majorCategory:{},mediumCategory:{},minorCategory:{},companyName:"",position:"",jobDescription:"",monthlyIncome:"",postalCode:"",companyPhone:"",branchNumber:""},dependents:[],toast:null,CMI_ID:null,selectedOptions:{},dynamicOptions:{},showQRBuyer:!1,showQRInsured:!1,fileInputRefBuyer:V(null),fileInputRefInsured:V(null),loading:!1,showImageBuyer:!1,showImageInsure:!1}},computed:{isCitizenIDBuyer(){return this.buyer.type_id.code==="ID_CARD_1"},isCitizenIDInsured(){return this.insured.type_id.code==="ID_CARD_1"}},methods:{async fetchData(){this.loading=!0;try{const o=await g.get("/v4/api/data"),e=this.extractPrefixes(o.data);await Promise.all(e.map(l=>this.fetchAuto(l)))}catch(o){console.error("Error fetching data:",o)}finally{this.loading=!1}},extractPrefixes(o){return[...new Set(o.map(e=>e.prefix))]},async fetchAuto(o){this.loading=!0;try{const e=await g.get(`/v4/api/data/prefix/${o}`);this.dynamicOptions[o]=e.data.map(l=>({code:l.key,name:l.value})),this.selectedOptions[o]=""}catch(e){console.error(`Error fetching options for prefix ${o}:`,e)}finally{this.loading=!1}},calculateAge(o){if(!o)return"";const e=new Date(o),l=new Date;let h=l.getFullYear()-e.getFullYear();const s=l.getMonth()-e.getMonth();return(s<0||s===0&&l.getDate()<e.getDate())&&h--,h},updateAge(){this.insured.age=this.calculateAge(this.insured.dateOfBirth),this.buyer.age=this.calculateAge(this.buyer.dateOfBirth),this.dependents.forEach(o=>{o.age=this.calculateAge(o.dateOfBirth)})},validateForm(){const o=[];return this.buyer.nationalID||o.push("Số chứng minh nhân dân của bên mua bảo hiểm là bắt buộc."),this.buyer.fullName||o.push("Họ tên của bên mua bảo hiểm là bắt buộc."),this.insured.nationalID||o.push("Số chứng minh nhân dân của người được bảo hiểm là bắt buộc."),this.insured.fullName||o.push("Họ tên của người được bảo hiểm là bắt buộc."),this.dependents.forEach((e,l)=>{e.nationalID||o.push(`Số chứng minh nhân dân của người phụ thuộc ${l+1} là bắt buộc.`),e.fullName||o.push(`Họ tên của người phụ thuộc ${l+1} là bắt buộc.`)}),o},async submitForm(){const o=this.validateForm();if(o.length>0){o.forEach(l=>this.toast.add({severity:"error",summary:"Lỗi",detail:l,life:3e3}));return}console.log("Submitting form with data:",this.insured,this.dependents),this.insured.id=this.insured.nationalID,this.buyer.id=this.buyer.nationalID;var e={id:this.uuidv4(),insured:this.insured,buyer:this.buyer,dependents:this.dependents};console.log(JSON.stringify(e)),this.loading=!0;try{const l=await g.post("/v1/api/DataForTesting",e);l.data.status==="success"?this.toast.add({severity:"success",summary:"Thành công",detail:l.data.message,life:3e3}):this.toast.add({severity:"error",summary:"Lỗi",detail:l.data.message,life:3e3}),console.log(l)}catch(l){console.error("Error submitting form:",l),this.toast.add({severity:"error",summary:"Lỗi",detail:"Không thể gửi dữ liệu.",life:3e3})}finally{this.loading=!1}},uuidv4(){return"10000000-1000-4000-8000-100000000000".replace(/[018]/g,o=>(+o^crypto.getRandomValues(new Uint8Array(1))[0]&15>>+o/4).toString(16))},addDependent(){this.dependents.push({id:"",type_id:{},nationalID:"",citizenID:"",fullName:"",dateOfBirth:"",gender:{},address:"",issuingPlace:"",nationality:{},visaNumber:"",relationShip:{},mobilePhone:"",email:"",age:"",education:{},maritalStatus:{},profession:{},majorCategory:{},mediumCategory:{},minorCategory:{},companyName:"",position:"",jobDescription:"",monthlyIncome:"",postalCode:"",companyPhone:"",branchNumber:""})},removeDependent(o){this.dependents.splice(o,1)},onBuyerTypeChange(){this.showQRBuyer=this.isCitizenIDBuyer},onInsuredTypeChange(){this.showQRInsured=this.isCitizenIDInsured},formatDate(o){if(!o||o.length!==8)return"";const e=o.substring(0,2),l=o.substring(2,4),h=o.substring(4,8);return`${e}/${l}/${h}`},async handleFileUploadBuyer(){const o=this.$refs.fileInputRefBuyer;if(!o||o.files.length===0){this.toast.add({severity:"warn",summary:"Warning",detail:"Please select a file to upload.",life:3e3});return}const e=new FormData;e.append("file",o.files[0]),this.loading=!0;try{const l=await g.post("/api/process-upload",e,{headers:{"Content-Type":"multipart/form-data"}});l.data.status==="success"?(this.updateFormWithResponse(l.data.detections[0].message,"buyer"),this.toast.add({severity:"success",summary:"Success",detail:l.data.message,life:3e3})):l.data.status==="warning"?(this.updateFormWithResponse(l.data.new_data,"buyer"),this.toast.add({severity:"warn",summary:"Warning",detail:l.data.message,life:3e3})):(this.toast.add({severity:"error",summary:"Error",detail:l.data.message,life:3e3}),this.showImageBuyer=!1)}catch(l){console.error("Error uploading file:",l),this.toast.add({severity:"error",summary:"Error",detail:"Failed to upload file.",life:3e3}),this.showImageBuyer=!1}finally{this.loading=!1}},async handleFileUploadInsured(){const o=this.$refs.fileInputRefInsured;if(!o||o.files.length===0){this.toast.add({severity:"warn",summary:"Warning",detail:"Please select a file to upload.",life:3e3}),this.showImageBuyer=!1,this.showImageInsure=!1;return}const e=new FormData;e.append("file",o.files[0]),this.loading=!0;try{const l=await g.post("/api/process-upload",e,{headers:{"Content-Type":"multipart/form-data"}});l.data.status==="success"?(this.updateFormWithResponse(l.data.detections[0].message,"insured"),this.toast.add({severity:"success",summary:"Success",detail:l.data.message,life:3e3})):l.data.status==="warning"?(this.updateFormWithResponse(l.data.new_data,"insured"),this.toast.add({severity:"warn",summary:"Warning",detail:l.data.message,life:3e3})):(this.toast.add({severity:"error",summary:"Error",detail:l.data.message,life:3e3}),this.showImageInsure=!1)}catch(l){console.error("Error uploading file:",l),this.showImageInsure=!1,this.toast.add({severity:"error",summary:"Error",detail:"Failed to upload file.",life:3e3})}finally{this.loading=!1}},updateFormWithResponse(o,e){console.log(o);const l=this.formatDate(o.birth_date);var h;o.gender=="Nam"?h={code:"MALE",name:"Nam"}:h={code:"FEMALE",name:"Nữ"},e==="buyer"?(this.buyer.nationalID=o.id_identity_card||"",this.buyer.citizenID=o.id_passport||"",this.buyer.fullName=o.fullname||"",this.buyer.dateOfBirth=l||"",this.buyer.gender=h||"",this.buyer.address=o.address||"",this.showImageBuyer=!0):e==="insured"&&(this.insured.nationalID=o.id_identity_card||"",this.insured.citizenID=o.id_passport||"",this.insured.fullName=o.fullname||"",this.insured.dateOfBirth=l||"",this.insured.gender=h||"",this.insured.address=o.address||"",this.showImageInsure=!0)}},watch:{"insured.dateOfBirth":"updateAge","buyer.dateOfBirth":"updateAge",dependents:{handler(){this.updateAge()},deep:!0},"buyer.type_id":"onBuyerTypeChange","insured.type_id":"onInsuredTypeChange"},mounted(){this.toast=B(),this.fetchData()}},a=o=>(R("data-v-c3287942"),o=o(),T(),o),F={class:"p-6"},P={class:"card p-6 mb-6 w-full"},S=a(()=>t("h2",{class:"text-xl font-semibold mb-4"},"Bên Mua Bảo Hiểm",-1)),k={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},z={key:0,class:"flex flex-col"},G=a(()=>t("label",{for:"buyerDocumentType",class:"mb-2"},"Loại giấy tờ",-1)),L={class:"flex flex-col"},M=a(()=>t("label",{for:"buyerIdNumber",class:"mb-2"},"Số chứng minh nhân dân",-1)),J={class:"flex flex-col"},Y=a(()=>t("label",{for:"buyerCitizenID",class:"mb-2"},"Số căn cước công dân",-1)),j={class:"flex flex-col"},H=a(()=>t("label",{for:"buyerFullName",class:"mb-2"},"Họ tên",-1)),W={class:"flex flex-col"},Q=a(()=>t("label",{for:"buyerAddress",class:"mb-2"},"Địa chỉ",-1)),q={class:"flex flex-col"},X=a(()=>t("label",{for:"buyerBirthdate",class:"mb-2"},"Ngày sinh",-1)),K={class:"flex flex-col"},Z=a(()=>t("label",{for:"buyerAge",class:"mb-2"},"Tuổi",-1)),$={key:1,class:"flex flex-col"},ee=a(()=>t("label",{for:"buyerJob",class:"mb-2"},"Nghề Nghiệp",-1)),se={key:2,class:"flex flex-col"},te=a(()=>t("label",{for:"buyerGender",class:"mb-2"},"Giới Tính",-1)),oe={key:3,class:"flex items-center mt-6"},ie={key:0},le={class:"card p-6 mt-8 w-full"},ne=a(()=>t("h2",{class:"text-xl font-semibold mb-4"},"Người Được Bảo Hiểm",-1)),ae={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},re={key:0,class:"flex flex-col"},de=a(()=>t("label",{for:"insuredDocumentType",class:"mb-2"},"Loại giấy tờ",-1)),ue={class:"flex flex-col"},me=a(()=>t("label",{for:"insuredIdNumber",class:"mb-2"},"Số chứng minh nhân dân",-1)),ce={class:"flex flex-col"},he=a(()=>t("label",{for:"insuredCitizenID",class:"mb-2"},"Số căn cước công dân",-1)),pe={class:"flex flex-col"},fe=a(()=>t("label",{for:"insuredFullName",class:"mb-2"},"Họ tên",-1)),ye={class:"flex flex-col"},be=a(()=>t("label",{for:"insuredAddress",class:"mb-2"},"Địa chỉ",-1)),ge={class:"flex flex-col"},_e=a(()=>t("label",{for:"insuredBirthdate",class:"mb-2"},"Ngày sinh",-1)),Ie={class:"flex flex-col"},Ve=a(()=>t("label",{for:"insuredAge",class:"mb-2"},"Tuổi",-1)),De={key:1,class:"flex flex-col"},ve=a(()=>t("label",{for:"insuredJob",class:"mb-2"},"Nghề Nghiệp",-1)),xe={class:"flex flex-col md:flex-row gap-4 mt-6"},Ne={class:"flex flex-col w-full md:w-1/2"},Ce=a(()=>t("label",{for:"insuredGender",class:"mb-2"},"Giới Tính",-1)),Oe={class:"flex flex-col"},we=a(()=>t("label",{for:"insuredGender",class:"mb-2"},"Người Phụ Thuộc",-1)),Be={key:2,class:"flex flex-col"},Ee=a(()=>t("label",{for:"insuredGender",class:"mb-2"},"Nhập nhanh thông tin",-1)),Ue={key:3},Re={class:"card p-6 mt-8 w-full"},Te=a(()=>t("h2",{class:"text-xl font-semibold mb-4"},"Người Phụ Thuộc",-1)),Ae={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},Fe={key:0,class:"flex flex-col"},Pe=a(()=>t("label",{for:"insuredJob",class:"mb-2"},"Loại đối tượng",-1)),Se={class:"flex flex-col"},ke=["for"],ze={class:"flex flex-col"},Ge=["for"],Le={class:"flex flex-col"},Me=["for"],Je={class:"flex flex-col"},Ye=["for"],je={class:"flex flex-col"},He=["for"],We={class:"flex flex-col"},Qe=["for"],qe={class:"flex flex-col"},Xe=["for"],Ke={class:"flex flex-col"},Ze=["for"],$e={class:"flex flex-col"},es=a(()=>t("label",{for:"insuredGender",class:"mb-2"},"Hành động",-1)),ss={class:"card p-6 mt-8 w-full"},ts=a(()=>t("h2",{class:"text-xl font-semibold mb-4"},"Hoàn thành thư giới thiệu",-1)),os={class:"flex justify-start mt-4"};function is(o,e,l,h,s,y){const f=C,u=N,_=x,b=v,I=D;return c(),m("div",F,[t("div",P,[S,t("div",k,[s.dynamicOptions.DOCUMENT_TYPE&&s.dynamicOptions.DOCUMENT_TYPE.length?(c(),m("div",z,[G,n(f,{id:"buyerDocumentType",modelValue:s.buyer.type_id,"onUpdate:modelValue":e[0]||(e[0]=i=>s.buyer.type_id=i),options:s.dynamicOptions.DOCUMENT_TYPE,optionLabel:"name"},null,8,["modelValue","options"])])):p("",!0),t("div",L,[M,n(u,{id:"buyerIdNumber",modelValue:s.buyer.nationalID,"onUpdate:modelValue":e[1]||(e[1]=i=>s.buyer.nationalID=i),type:"text"},null,8,["modelValue"])]),t("div",J,[Y,n(u,{id:"buyerCitizenID",modelValue:s.buyer.citizenID,"onUpdate:modelValue":e[2]||(e[2]=i=>s.buyer.citizenID=i),type:"text"},null,8,["modelValue"])]),t("div",j,[H,n(u,{id:"buyerFullName",modelValue:s.buyer.fullName,"onUpdate:modelValue":e[3]||(e[3]=i=>s.buyer.fullName=i),type:"text"},null,8,["modelValue"])]),t("div",W,[Q,n(u,{id:"buyerAddress",modelValue:s.buyer.address,"onUpdate:modelValue":e[4]||(e[4]=i=>s.buyer.address=i),type:"text"},null,8,["modelValue"])]),t("div",q,[X,n(_,{id:"buyerBirthdate",modelValue:s.buyer.dateOfBirth,"onUpdate:modelValue":e[5]||(e[5]=i=>s.buyer.dateOfBirth=i)},null,8,["modelValue"])]),t("div",K,[Z,n(u,{id:"buyerAge",modelValue:s.buyer.age,"onUpdate:modelValue":e[6]||(e[6]=i=>s.buyer.age=i),readonly:"true",type:"text"},null,8,["modelValue"])]),s.dynamicOptions.MAJOR_CATEGORY&&s.dynamicOptions.MAJOR_CATEGORY.length?(c(),m("div",$,[ee,n(f,{id:"buyerJob",modelValue:s.buyer.majorCategory,"onUpdate:modelValue":e[7]||(e[7]=i=>s.buyer.majorCategory=i),options:s.dynamicOptions.MAJOR_CATEGORY,optionLabel:"name"},null,8,["modelValue","options"])])):p("",!0),s.dynamicOptions.GENDER&&s.dynamicOptions.GENDER.length?(c(),m("div",se,[te,n(f,{id:"buyerGender",modelValue:s.buyer.gender,"onUpdate:modelValue":e[8]||(e[8]=i=>s.buyer.gender=i),options:s.dynamicOptions.GENDER,optionLabel:"name",placeholder:"Chọn giới tính"},null,8,["modelValue","options"])])):p("",!0),s.showQRBuyer?(c(),m("div",oe,[t("div",null,[t("input",{type:"file",ref:"fileInputRefBuyer",onChange:e[9]||(e[9]=(...i)=>y.handleFileUploadBuyer&&y.handleFileUploadBuyer(...i)),style:{display:"none"}},null,544),n(b,{id:"btn1",label:"Nhận diện nhanh thông tin qua mã QR CCCD",onClick:e[10]||(e[10]=i=>o.$refs.fileInputRefBuyer.click())})]),s.showImageBuyer?(c(),m("div",ie,[n(I,{src:`/api/card-image/${s.buyer.citizenID}`,alt:`${s.insured.buyer}`,width:"250"},null,8,["src","alt"])])):p("",!0)])):p("",!0)])]),t("div",le,[ne,t("div",ae,[s.dynamicOptions.DOCUMENT_TYPE&&s.dynamicOptions.DOCUMENT_TYPE.length?(c(),m("div",re,[de,n(f,{id:"insuredDocumentType",modelValue:s.insured.type_id,"onUpdate:modelValue":e[11]||(e[11]=i=>s.insured.type_id=i),options:s.dynamicOptions.DOCUMENT_TYPE,optionLabel:"name"},null,8,["modelValue","options"])])):p("",!0),t("div",ue,[me,n(u,{id:"insuredIdNumber",modelValue:s.insured.nationalID,"onUpdate:modelValue":e[12]||(e[12]=i=>s.insured.nationalID=i),type:"text"},null,8,["modelValue"])]),t("div",ce,[he,n(u,{id:"insuredCitizenID",modelValue:s.insured.citizenID,"onUpdate:modelValue":e[13]||(e[13]=i=>s.insured.citizenID=i),type:"text"},null,8,["modelValue"])]),t("div",pe,[fe,n(u,{id:"insuredFullName",modelValue:s.insured.fullName,"onUpdate:modelValue":e[14]||(e[14]=i=>s.insured.fullName=i),type:"text"},null,8,["modelValue"])]),t("div",ye,[be,n(u,{id:"insuredAddress",modelValue:s.insured.address,"onUpdate:modelValue":e[15]||(e[15]=i=>s.insured.address=i),type:"text"},null,8,["modelValue"])]),t("div",ge,[_e,n(_,{id:"insuredBirthdate",modelValue:s.insured.dateOfBirth,"onUpdate:modelValue":e[16]||(e[16]=i=>s.insured.dateOfBirth=i)},null,8,["modelValue"])]),t("div",Ie,[Ve,n(u,{id:"insuredAge",modelValue:s.insured.age,"onUpdate:modelValue":e[17]||(e[17]=i=>s.insured.age=i),readonly:"true",type:"text"},null,8,["modelValue"])]),s.dynamicOptions.MAJOR_CATEGORY&&s.dynamicOptions.MAJOR_CATEGORY.length?(c(),m("div",De,[ve,n(f,{id:"insuredJob",modelValue:s.insured.majorCategory,"onUpdate:modelValue":e[18]||(e[18]=i=>s.insured.majorCategory=i),options:s.dynamicOptions.MAJOR_CATEGORY,optionLabel:"name"},null,8,["modelValue","options"])])):p("",!0),t("div",xe,[t("div",Ne,[Ce,n(f,{id:"insuredGender",modelValue:s.insured.gender,"onUpdate:modelValue":e[19]||(e[19]=i=>s.insured.gender=i),options:s.dynamicOptions.GENDER,optionLabel:"name",placeholder:"Chọn giới tính"},null,8,["modelValue","options"])])]),t("div",Oe,[we,n(b,{label:"Thêm Người Phụ Thuộc",class:"p-button-info",onClick:y.addDependent},null,8,["onClick"])]),s.showQRInsured?(c(),m("div",Be,[Ee,t("input",{type:"file",ref:"fileInputRefInsured",onChange:e[20]||(e[20]=(...i)=>y.handleFileUploadInsured&&y.handleFileUploadInsured(...i)),style:{display:"none"}},null,544),n(b,{id:"btn2",label:"Nhận diện nhanh thông tin qua mã QR CCCD",onClick:e[21]||(e[21]=i=>o.$refs.fileInputRefInsured.click())})])):p("",!0),s.showImageInsure?(c(),m("div",Ue,[n(I,{src:`/api/card-image/${s.insured.citizenID}`,alt:`${s.insured.citizenID}`,width:"250"},null,8,["src","alt"])])):p("",!0)])]),t("div",Re,[Te,(c(!0),m(E,null,U(s.dependents,(i,r)=>(c(),m("div",{key:r,class:"bg-gray-100 p-4 rounded-lg mb-4"},[t("div",Ae,[s.dynamicOptions.RELATIONSHIP&&s.dynamicOptions.RELATIONSHIP.length?(c(),m("div",Fe,[Pe,n(f,{id:"insuredJob",modelValue:s.insured.relationShip,"onUpdate:modelValue":e[22]||(e[22]=d=>s.insured.relationShip=d),options:s.dynamicOptions.RELATIONSHIP,optionLabel:"name"},null,8,["modelValue","options"])])):p("",!0),t("div",Se,[t("label",{for:"dependentIdNumber_"+r,class:"mb-2"},"Số chứng minh nhân dân",8,ke),n(u,{id:"dependentIdNumber_"+r,modelValue:i.nationalID,"onUpdate:modelValue":d=>i.nationalID=d,type:"text"},null,8,["id","modelValue","onUpdate:modelValue"])]),t("div",ze,[t("label",{for:"dependentCitizenID_"+r,class:"mb-2"},"Số căn cước công dân",8,Ge),n(u,{id:"dependentCitizenID_"+r,modelValue:i.citizenID,"onUpdate:modelValue":d=>i.citizenID=d,type:"text"},null,8,["id","modelValue","onUpdate:modelValue"])]),t("div",Le,[t("label",{for:"dependentFullName_"+r,class:"mb-2"},"Họ tên",8,Me),n(u,{id:"dependentFullName_"+r,modelValue:i.fullName,"onUpdate:modelValue":d=>i.fullName=d,type:"text"},null,8,["id","modelValue","onUpdate:modelValue"])]),t("div",Je,[t("label",{for:"dependentAddress_"+r,class:"mb-2"},"Địa chỉ",8,Ye),n(u,{id:"dependentAddress_"+r,modelValue:i.address,"onUpdate:modelValue":d=>i.address=d,type:"text"},null,8,["id","modelValue","onUpdate:modelValue"])]),t("div",je,[t("label",{for:"dependentBirthdate_"+r,class:"mb-2"},"Ngày sinh",8,He),n(_,{id:"dependentBirthdate_"+r,modelValue:i.dateOfBirth,"onUpdate:modelValue":d=>i.dateOfBirth=d},null,8,["id","modelValue","onUpdate:modelValue"])]),t("div",We,[t("label",{for:"dependentAge_"+r,class:"mb-2"},"Tuổi",8,Qe),n(u,{id:"dependentAge_"+r,readonly:"true",modelValue:i.age,"onUpdate:modelValue":d=>i.age=d,type:"text"},null,8,["id","modelValue","onUpdate:modelValue"])]),t("div",qe,[t("label",{for:"dependentGender_"+r,class:"mb-2"},"Giới Tính",8,Xe),n(f,{id:"dependentGender_"+r,modelValue:i.gender,"onUpdate:modelValue":d=>i.gender=d,options:s.dynamicOptions.GENDER,optionLabel:"name",placeholder:"Chọn giới tính"},null,8,["id","modelValue","onUpdate:modelValue","options"])]),t("div",Ke,[t("label",{for:"dependentJob_"+r,class:"mb-2"},"Nghề Nghiệp",8,Ze),n(f,{id:"dependentJob_"+r,modelValue:i.majorCategory,"onUpdate:modelValue":d=>i.majorCategory=d,options:s.dynamicOptions.MAJOR_CATEGORY,optionLabel:"name",placeholder:"Chọn nghề nghiệp"},null,8,["id","modelValue","onUpdate:modelValue","options"])]),t("div",$e,[es,n(b,{label:"Xóa",class:"p-button-danger",onClick:d=>y.removeDependent(r)},null,8,["onClick"])])])]))),128))]),t("div",ss,[ts,t("div",os,[n(b,{label:"Xác nhận thông tin và gửi đi",onClick:y.submitForm},null,8,["onClick"])])])])}const Ds=w(A,[["render",is],["__scopeId","data-v-c3287942"]]);export{Ds as default};
