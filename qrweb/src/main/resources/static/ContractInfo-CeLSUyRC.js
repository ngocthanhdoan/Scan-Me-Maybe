import{s as D}from"./index-DJVj2piI.js";import{s as x}from"./index-9Lfi-6_l.js";import{_ as C,k as N,w as v,o as r,a as e,c,e as f,t as d,b,d as _,F as y,l as I,v as k}from"./index-BKJvn89u.js";import"./index-BlKxdR1x.js";import"./index-DT4muVXe.js";const w={data(){return{people:[],comparisonData:[],notes:""}},methods:{handleUpload(o,a,m){const i=o.target.files[0];if(i){const l=new FileReader;l.onload=u=>{this.$set(this.people[a],m,u.target.result)},l.readAsDataURL(i)}},compareFields(o,a){return o===a?'<span class="text-green-500">Match</span>':'<span class="text-red-500">Not Match</span>'},loadFormData(o){const{insured:a,buyer:m,dependents:i}=o;this.people=[{...a,type:"Insured",front:null,back:null},{...m,type:"Buyer",front:null,back:null},...i.map(l=>({...l,type:"Dependent",front:null,back:null}))],this.comparisonData=this.people.map(l=>({Name:{oldData:"",newData:""},Address:{oldData:"",newData:""}}))}},mounted(){const o={id:"f0fc93a0-1f03-457a-b96d-fc3ef72b1005",insured:{id:"113123123123",type_id:{code:"ID_CARD_0",name:"Chứng minh nhân dân"},nationalID:"113123123123",citizenID:"131313",fullName:"131231231",dateOfBirth:"2024-08-25T17:00:00.000Z",gender:{code:null,name:null},address:"123123123",issuingPlace:"",nationality:{code:null,name:null},visaNumber:"",insuranceRelationship:null,mobilePhone:"",email:"",age:"0",education:{code:null,name:null},maritalStatus:{code:null,name:null},profession:{code:null,name:null},majorCategory:{code:"IT",name:"Công nghệ thông tin"},mediumCategory:{code:null,name:null},minorCategory:{code:null,name:null},companyName:"",position:"",jobDescription:"",monthlyIncome:"",postalCode:"",companyPhone:"",branchNumber:"",relationShip:{code:"FOR_MALE",name:"Vợ"}},buyer:{id:"12313123",type_id:{code:"ID_CARD_0",name:"Chứng minh nhân dân"},nationalID:"12313123",citizenID:"13123123",fullName:"123123123123",dateOfBirth:"",gender:{code:null,name:null},address:"12312313",issuingPlace:"",nationality:{code:null,name:null},visaNumber:"",insuranceRelationship:null,mobilePhone:"",email:"",age:"",education:{code:null,name:null},maritalStatus:{code:null,name:null},profession:{code:null,name:null},majorCategory:{code:null,name:null},mediumCategory:{code:null,name:null},minorCategory:{code:null,name:null},companyName:"",position:"",jobDescription:"",monthlyIncome:"",postalCode:"",companyPhone:"",branchNumber:"",relationShip:{code:null,name:null}},dependents:[{id:"",type_id:{code:null,name:null},nationalID:"35345345",citizenID:"3445334",fullName:"353453534",dateOfBirth:"2024-08-19T17:00:00.000Z",gender:{code:"MALE",name:"Nam"},address:"3453453534",issuingPlace:"",nationality:{code:null,name:null},visaNumber:"",insuranceRelationship:null,mobilePhone:"",email:"",age:"0",education:{code:null,name:null},maritalStatus:{code:null,name:null},profession:{code:null,name:null},majorCategory:{code:null,name:null},mediumCategory:{code:null,name:null},minorCategory:{code:null,name:null},companyName:"",position:"",jobDescription:"",monthlyIncome:"",postalCode:"",companyPhone:"",branchNumber:"",relationShip:{code:null,name:null}},{id:"",type_id:{code:null,name:null},nationalID:"23424534534",citizenID:"242342342",fullName:"436534534",dateOfBirth:"2024-08-05T17:00:00.000Z",gender:{code:"MALE",name:"Nam"},address:"34234234",issuingPlace:"",nationality:{code:null,name:null},visaNumber:"",insuranceRelationship:null,mobilePhone:"",email:"",age:"0",education:{code:null,name:null},maritalStatus:{code:null,name:null},profession:{code:null,name:null},majorCategory:{code:"ECONOMICS",name:"Kinh tế"},mediumCategory:{code:null,name:null},minorCategory:{code:null,name:null},companyName:"",position:"",jobDescription:"",monthlyIncome:"",postalCode:"",companyPhone:"",branchNumber:"",relationShip:{code:null,name:null}}]};this.loadFormData(o)}},P={class:"flex flex-col gap-8"},S={class:"card flex-1 flex flex-col gap-4 p-4"},F={class:"font-semibold text-xl"},j={class:"flex flex-col gap-4"},B={class:"flex flex-col gap-2"},M=["for"],R=["id","onChange"],A={key:0,class:"mt-2"},O={class:"flex flex-col gap-2"},U=["for"],L=["id","onChange"],T={key:0,class:"mt-2"},E={class:"card flex-1 flex flex-col gap-4 p-4"},V={class:"font-semibold text-xl"},z={class:"min-w-full mt-4 border-separate border-spacing-2 border border-gray-300"},Z=e("thead",null,[e("tr",null,[e("th",{class:"border border-gray-400 px-4 py-2"},"Field"),e("th",{class:"border border-gray-400 px-4 py-2"},"Old Data"),e("th",{class:"border border-gray-400 px-4 py-2"},"New Data"),e("th",{class:"border border-gray-400 px-4 py-2"},"Comparison")])],-1),H={class:"border border-gray-300 px-4 py-2"},K={class:"border border-gray-300 px-4 py-2"},q={class:"border border-gray-300 px-4 py-2"},G=["innerHTML"],J={class:"card flex flex-col gap-4 p-4"},Q=e("div",{class:"font-semibold text-xl"},"Notes",-1),W={class:"flex flex-col gap-2"},X=e("label",{for:"notes",class:"font-medium"},"Notes",-1);function Y(o,a,m,i,l,u){const p=x,g=D;return r(),N(g,null,{default:v(()=>[e("div",P,[(r(!0),c(y,null,f(l.people,(t,n)=>(r(),c("div",{key:n,class:"flex flex-col md:flex-row gap-8 mb-8"},[e("div",S,[e("div",F,d(n+1)+". Upload ID Cards for "+d(t.type),1),e("div",j,[e("div",B,[e("label",{for:"front-upload-"+n,class:"font-medium"},"Upload Front Side",8,M),e("input",{id:"front-upload-"+n,type:"file",accept:"image/*",onChange:s=>u.handleUpload(s,n,"front"),class:"border rounded p-2"},null,40,R),t.front?(r(),c("div",A,[b(p,{src:t.front,width:"250",class:"w-full h-auto object-cover border rounded"},null,8,["src"])])):_("",!0)]),e("div",O,[e("label",{for:"back-upload-"+n,class:"font-medium"},"Upload Back Side",8,U),e("input",{id:"back-upload-"+n,type:"file",accept:"image/*",onChange:s=>u.handleUpload(s,n,"back"),class:"border rounded p-2"},null,40,L),t.back?(r(),c("div",T,[b(p,{src:t.back,width:"250",class:"w-full h-auto object-cover border rounded"},null,8,["src"])])):_("",!0)])])]),e("div",E,[e("div",V,"Compare Data for "+d(t.type)+" "+d(n+1),1),e("table",z,[Z,e("tbody",null,[(r(!0),c(y,null,f(l.comparisonData[n],(s,h)=>(r(),c("tr",{key:h},[e("td",H,d(h),1),e("td",K,d(s.oldData),1),e("td",q,d(s.newData),1),e("td",{class:"border border-gray-300 px-4 py-2",innerHTML:u.compareFields(s.oldData,s.newData)},null,8,G)]))),128))])])])]))),128)),e("div",J,[Q,e("div",W,[X,I(e("textarea",{id:"notes",rows:"6","onUpdate:modelValue":a[0]||(a[0]=t=>l.notes=t),placeholder:"Add any additional notes here",class:"border rounded p-2"},null,512),[[k,l.notes]])])])])]),_:1})}const ae=C(w,[["render",Y]]);export{ae as default};
