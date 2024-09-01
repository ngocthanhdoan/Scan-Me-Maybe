import{s as M}from"./index-Bn6GqD6L.js";import{af as W,o,c as m,q as r,a as p,B as j,Q as K,S as D,a9 as A,R as H,s as P,M as F,e as k,t as I,b as g,N as C,w as b,k as h,O as B,F as U,n as v,ak as T,d as y,j as z,ab as Z,u as q,r as G,aP as Y}from"./index-wbK7PbNL.js";import{s as Q}from"./index-DotoiDRJ.js";import{s as X}from"./index-CkDAxgev.js";import{s as J}from"./index-BklI6w48.js";import{a as $}from"./index-DD0AH57U.js";var V={name:"UploadIcon",extends:W},x=p("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z",fill:"currentColor"},null,-1),_=[x];function ee(e,l,t,a,n,i){return o(),m("svg",r({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),_,16)}V.render=ee;var le=function(l){var t=l.dt;return`
.p-fileupload input[type="file"] {
    display: none;
}

.p-fileupload-advanced {
    border: 1px solid `.concat(t("fileupload.border.color"),`;
    border-radius: `).concat(t("fileupload.border.radius"),`;
    background: `).concat(t("fileupload.background"),`;
    color: `).concat(t("fileupload.color"),`;
}

.p-fileupload-header {
    display: flex;
    align-items: center;
    padding: `).concat(t("fileupload.header.padding"),`;
    background: `).concat(t("fileupload.header.background"),`;
    color: `).concat(t("fileupload.header.color"),`;
    border-style: solid;
    border-width: `).concat(t("fileupload.header.border.width"),`;
    border-color: `).concat(t("fileupload.header.border.color"),`;
    border-radius: `).concat(t("fileupload.header.border.radius"),`;
    gap: `).concat(t("fileupload.header.gap"),`;
}

.p-fileupload-content {
    border: 1px solid transparent;
    position: relative;
    transition: border-color `).concat(t("fileupload.transition.duration"),`;
    padding: `).concat(t("fileupload.content.padding"),`;
}

.p-fileupload-content .p-progressbar {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: `).concat(t("fileupload.progressbar.height"),`;
}

.p-fileupload-file-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1.125rem;
}

.p-fileupload-file {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: `).concat(t("fileupload.file.padding"),`;
    border-bottom: 1px solid `).concat(t("fileupload.file.border.color"),`;
    gap: `).concat(t("fileupload.file.gap"),`;
}

.p-fileupload-file:last-child {
    border-bottom: 0;
}

.p-fileupload-file-info {
    display: flex;
    flex-direction: column;
    gap: `).concat(t("fileupload.file.info.gap"),`;
}

.p-fileupload-file-thumbnail {
    flex-shrink: 0;
}

.p-fileupload-file-actions {
    margin-left: auto;
}

.p-fileupload-highlight {
    border: 1px dashed `).concat(t("fileupload.content.highlight.border.color"),`;
}

.p-fileupload-advanced .p-message {
    margin-top: 0;
}

.p-fileupload-basic {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: `).concat(t("fileupload.basic.gap"),`;
}
`)},te={root:function(l){var t=l.props;return["p-fileupload p-fileupload-".concat(t.mode," p-component")]},header:"p-fileupload-header",pcChooseButton:"p-fileupload-choose-button",pcUploadButton:"p-fileupload-upload-button",pcCancelButton:"p-fileupload-cancel-button",content:"p-fileupload-content",fileList:"p-fileupload-file-list",file:"p-fileupload-file",fileThumbnail:"p-fileupload-file-thumbnail",fileInfo:"p-fileupload-file-info",fileName:"p-fileupload-file-name",fileSize:"p-fileupload-file-size",pcFileBadge:"p-fileupload-file-badge",fileActions:"p-fileupload-file-actions",pcFileRemoveButton:"p-fileupload-file-remove-button"},ie=j.extend({name:"fileupload",theme:le,classes:te}),ne={name:"BaseFileUpload",extends:P,props:{name:{type:String,default:null},url:{type:String,default:null},mode:{type:String,default:"advanced"},multiple:{type:Boolean,default:!1},accept:{type:String,default:null},disabled:{type:Boolean,default:!1},auto:{type:Boolean,default:!1},maxFileSize:{type:Number,default:null},invalidFileSizeMessage:{type:String,default:"{0}: Invalid file size, file size should be smaller than {1}."},invalidFileTypeMessage:{type:String,default:"{0}: Invalid file type, allowed file types: {1}."},fileLimit:{type:Number,default:null},invalidFileLimitMessage:{type:String,default:"Maximum number of files exceeded, limit is {0} at most."},withCredentials:{type:Boolean,default:!1},previewWidth:{type:Number,default:50},chooseLabel:{type:String,default:null},uploadLabel:{type:String,default:null},cancelLabel:{type:String,default:null},customUpload:{type:Boolean,default:!1},showUploadButton:{type:Boolean,default:!0},showCancelButton:{type:Boolean,default:!0},chooseIcon:{type:String,default:void 0},uploadIcon:{type:String,default:void 0},cancelIcon:{type:String,default:void 0},style:null,class:null,chooseButtonProps:{type:null,default:null},uploadButtonProps:{type:Object,default:function(){return{severity:"secondary"}}},cancelButtonProps:{type:Object,default:function(){return{severity:"secondary"}}}},style:ie,provide:function(){return{$pcFileUpload:this,$parentInstance:this}}},R={name:"FileContent",hostName:"FileUpload",extends:P,emits:["remove"],props:{files:{type:Array,default:function(){return[]}},badgeSeverity:{type:String,default:"warn"},badgeValue:{type:String,default:null},previewWidth:{type:Number,default:50},templates:{type:null,default:null}},methods:{formatSize:function(l){var t,a=1024,n=3,i=((t=this.$primevue.config.locale)===null||t===void 0?void 0:t.fileSizeTypes)||["B","KB","MB","GB","TB","PB","EB","ZB","YB"];if(l===0)return"0 ".concat(i[0]);var u=Math.floor(Math.log(l)/Math.log(a)),s=parseFloat((l/Math.pow(a,u)).toFixed(n));return"".concat(s," ").concat(i[u])}},components:{Button:M,Badge:$,TimesIcon:A}},ae=["alt","src","width"];function se(e,l,t,a,n,i){var u=F("Badge"),s=F("TimesIcon"),f=F("Button");return o(!0),m(U,null,k(t.files,function(d,c){return o(),m("div",r({key:d.name+d.type+d.size,class:e.cx("file"),ref_for:!0},e.ptm("file")),[p("img",r({role:"presentation",class:e.cx("fileThumbnail"),alt:d.name,src:d.objectURL,width:t.previewWidth,ref_for:!0},e.ptm("fileThumbnail")),null,16,ae),p("div",r({class:e.cx("fileInfo"),ref_for:!0},e.ptm("fileInfo")),[p("div",r({class:e.cx("fileName"),ref_for:!0},e.ptm("fileName")),I(d.name),17),p("span",r({class:e.cx("fileSize"),ref_for:!0},e.ptm("fileSize")),I(i.formatSize(d.size)),17)],16),g(u,{value:t.badgeValue,class:C(e.cx("pcFileBadge")),severity:t.badgeSeverity,unstyled:e.unstyled,pt:e.ptm("pcFileBadge")},null,8,["value","class","severity","unstyled","pt"]),p("div",r({class:e.cx("fileActions"),ref_for:!0},e.ptm("fileActions")),[g(f,{onClick:function(Be){return e.$emit("remove",c)},text:"",rounded:"",severity:"danger",class:C(e.cx("pcFileRemoveButton")),unstyled:e.unstyled,pt:e.ptm("pcFileRemoveButton")},{icon:b(function(S){return[t.templates.fileremoveicon?(o(),h(B(t.templates.fileremoveicon),{key:0,class:C(S.class),file:d,index:c},null,8,["class","file","index"])):(o(),h(s,r({key:1,class:S.class,"aria-hidden":"true",ref_for:!0},e.ptm("pcFileRemoveButton").icon),null,16,["class"]))]}),_:2},1032,["onClick","class","unstyled","pt"])],16)],16)}),128)}R.render=se;function w(e){return ue(e)||re(e)||N(e)||oe()}function oe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function re(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ue(e){if(Array.isArray(e))return E(e)}function L(e,l){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=N(e))||l){t&&(e=t);var a=0,n=function(){};return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(d){throw d},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,u=!0,s=!1;return{s:function(){t=t.call(e)},n:function(){var d=t.next();return u=d.done,d},e:function(d){s=!0,i=d},f:function(){try{u||t.return==null||t.return()}finally{if(s)throw i}}}}function N(e,l){if(e){if(typeof e=="string")return E(e,l);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?E(e,l):void 0}}function E(e,l){(l==null||l>e.length)&&(l=e.length);for(var t=0,a=Array(l);t<l;t++)a[t]=e[t];return a}var O={name:"FileUpload",extends:ne,inheritAttrs:!1,emits:["select","uploader","before-upload","progress","upload","error","before-send","clear","remove","remove-uploaded-file"],duplicateIEEvent:!1,data:function(){return{uploadedFileCount:0,files:[],messages:[],focused:!1,progress:null,uploadedFiles:[]}},methods:{upload:function(){this.hasFiles&&this.uploader()},onBasicUploaderClick:function(l){l.button===0&&!this.hasFiles&&this.$refs.fileInput.click()},onFileSelect:function(l){if(l.type!=="drop"&&this.isIE11()&&this.duplicateIEEvent){this.duplicateIEEvent=!1;return}this.messages=[],this.files=this.files||[];var t=l.dataTransfer?l.dataTransfer.files:l.target.files,a=L(t),n;try{for(a.s();!(n=a.n()).done;){var i=n.value;this.isFileSelected(i)||this.validate(i)&&(this.isImage(i)&&(i.objectURL=window.URL.createObjectURL(i)),this.files.push(i))}}catch(u){a.e(u)}finally{a.f()}this.$emit("select",{originalEvent:l,files:this.files}),this.fileLimit&&this.checkFileLimit(),this.auto&&this.hasFiles&&!this.isFileLimitExceeded()&&this.uploader(),l.type!=="drop"&&this.isIE11()?this.clearIEInput():this.clearInputElement()},choose:function(){this.$refs.fileInput.click()},uploader:function(){var l=this;if(this.customUpload)this.fileLimit&&(this.uploadedFileCount+=this.files.length),this.$emit("uploader",{files:this.files}),this.clear();else{var t=new XMLHttpRequest,a=new FormData;this.$emit("before-upload",{xhr:t,formData:a});var n=L(this.files),i;try{for(n.s();!(i=n.n()).done;){var u=i.value;a.append(this.name,u,u.name)}}catch(s){n.e(s)}finally{n.f()}t.upload.addEventListener("progress",function(s){s.lengthComputable&&(l.progress=Math.round(s.loaded*100/s.total)),l.$emit("progress",{originalEvent:s,progress:l.progress})}),t.onreadystatechange=function(){if(t.readyState===4){var s;l.progress=0,t.status>=200&&t.status<300?(l.fileLimit&&(l.uploadedFileCount+=l.files.length),l.$emit("upload",{xhr:t,files:l.files})):l.$emit("error",{xhr:t,files:l.files}),(s=l.uploadedFiles).push.apply(s,w(l.files)),l.clear()}},t.open("POST",this.url,!0),this.$emit("before-send",{xhr:t,formData:a}),t.withCredentials=this.withCredentials,t.send(a)}},clear:function(){this.files=[],this.messages=null,this.$emit("clear"),this.isAdvanced&&this.clearInputElement()},onFocus:function(){this.focused=!0},onBlur:function(){this.focused=!1},isFileSelected:function(l){if(this.files&&this.files.length){var t=L(this.files),a;try{for(t.s();!(a=t.n()).done;){var n=a.value;if(n.name+n.type+n.size===l.name+l.type+l.size)return!0}}catch(i){t.e(i)}finally{t.f()}}return!1},isIE11:function(){return!!window.MSInputMethodContext&&!!document.documentMode},validate:function(l){return this.accept&&!this.isFileTypeValid(l)?(this.messages.push(this.invalidFileTypeMessage.replace("{0}",l.name).replace("{1}",this.accept)),!1):this.maxFileSize&&l.size>this.maxFileSize?(this.messages.push(this.invalidFileSizeMessage.replace("{0}",l.name).replace("{1}",this.formatSize(this.maxFileSize))),!1):!0},isFileTypeValid:function(l){var t=this.accept.split(",").map(function(s){return s.trim()}),a=L(t),n;try{for(a.s();!(n=a.n()).done;){var i=n.value,u=this.isWildcard(i)?this.getTypeClass(l.type)===this.getTypeClass(i):l.type==i||this.getFileExtension(l).toLowerCase()===i.toLowerCase();if(u)return!0}}catch(s){a.e(s)}finally{a.f()}return!1},getTypeClass:function(l){return l.substring(0,l.indexOf("/"))},isWildcard:function(l){return l.indexOf("*")!==-1},getFileExtension:function(l){return"."+l.name.split(".").pop()},isImage:function(l){return/^image\//.test(l.type)},onDragEnter:function(l){this.disabled||(l.stopPropagation(),l.preventDefault())},onDragOver:function(l){this.disabled||(!this.isUnstyled&&K(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!0),l.stopPropagation(),l.preventDefault())},onDragLeave:function(){this.disabled||(!this.isUnstyled&&D(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!1))},onDrop:function(l){if(!this.disabled){!this.isUnstyled&&D(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!1),l.stopPropagation(),l.preventDefault();var t=l.dataTransfer?l.dataTransfer.files:l.target.files,a=this.multiple||t&&t.length===1;a&&this.onFileSelect(l)}},remove:function(l){this.clearInputElement();var t=this.files.splice(l,1)[0];this.files=w(this.files),this.$emit("remove",{file:t,files:this.files})},removeUploadedFile:function(l){var t=this.uploadedFiles.splice(l,1)[0];this.uploadedFiles=w(this.uploadedFiles),this.$emit("remove-uploaded-file",{file:t,files:this.uploadedFiles})},clearInputElement:function(){this.$refs.fileInput.value=""},clearIEInput:function(){this.$refs.fileInput&&(this.duplicateIEEvent=!0,this.$refs.fileInput.value="")},formatSize:function(l){var t,a=1024,n=3,i=((t=this.$primevue.config.locale)===null||t===void 0?void 0:t.fileSizeTypes)||["B","KB","MB","GB","TB","PB","EB","ZB","YB"];if(l===0)return"0 ".concat(i[0]);var u=Math.floor(Math.log(l)/Math.log(a)),s=parseFloat((l/Math.pow(a,u)).toFixed(n));return"".concat(s," ").concat(i[u])},isFileLimitExceeded:function(){return this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount&&this.focused&&(this.focused=!1),this.fileLimit&&this.fileLimit<this.files.length+this.uploadedFileCount},checkFileLimit:function(){this.isFileLimitExceeded()&&this.messages.push(this.invalidFileLimitMessage.replace("{0}",this.fileLimit.toString()))},onMessageClose:function(){this.messages=null}},computed:{isAdvanced:function(){return this.mode==="advanced"},isBasic:function(){return this.mode==="basic"},chooseButtonClass:function(){return[this.cx("pcChooseButton"),this.class]},basicFileChosenLabel:function(){var l;if(this.auto)return this.chooseButtonLabel;if(this.hasFiles){var t;return this.files&&this.files.length===1?this.files[0].name:(t=this.$primevue.config.locale)===null||t===void 0||(t=t.fileChosenMessage)===null||t===void 0?void 0:t.replace("{0}",this.files.length)}return((l=this.$primevue.config.locale)===null||l===void 0?void 0:l.noFileChosenMessage)||""},hasFiles:function(){return this.files&&this.files.length>0},hasUploadedFiles:function(){return this.uploadedFiles&&this.uploadedFiles.length>0},chooseDisabled:function(){return this.disabled||this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount},uploadDisabled:function(){return this.disabled||!this.hasFiles||this.fileLimit&&this.fileLimit<this.files.length},cancelDisabled:function(){return this.disabled||!this.hasFiles},chooseButtonLabel:function(){return this.chooseLabel||this.$primevue.config.locale.choose},uploadButtonLabel:function(){return this.uploadLabel||this.$primevue.config.locale.upload},cancelButtonLabel:function(){return this.cancelLabel||this.$primevue.config.locale.cancel},completedLabel:function(){return this.$primevue.config.locale.completed},pendingLabel:function(){return this.$primevue.config.locale.pending}},components:{Button:M,ProgressBar:J,Message:X,FileContent:R,PlusIcon:Q,UploadIcon:V,TimesIcon:A},directives:{ripple:H}},de=["multiple","accept","disabled"],ce=["files"],pe=["accept","disabled","multiple"];function fe(e,l,t,a,n,i){var u=F("Button"),s=F("ProgressBar"),f=F("Message"),d=F("FileContent");return i.isAdvanced?(o(),m("div",r({key:0,class:e.cx("root")},e.ptmi("root")),[p("input",r({ref:"fileInput",type:"file",onChange:l[0]||(l[0]=function(){return i.onFileSelect&&i.onFileSelect.apply(i,arguments)}),multiple:e.multiple,accept:e.accept,disabled:i.chooseDisabled},e.ptm("input")),null,16,de),p("div",r({class:e.cx("header")},e.ptm("header")),[v(e.$slots,"header",{files:n.files,uploadedFiles:n.uploadedFiles,chooseCallback:i.choose,uploadCallback:i.uploader,clearCallback:i.clear},function(){return[g(u,r({label:i.chooseButtonLabel,class:i.chooseButtonClass,style:e.style,disabled:e.disabled,unstyled:e.unstyled,onClick:i.choose,onKeydown:T(i.choose,["enter"]),onFocus:i.onFocus,onBlur:i.onBlur},e.chooseButtonProps,{pt:e.ptm("pcChooseButton")}),{icon:b(function(c){return[v(e.$slots,"chooseicon",{},function(){return[(o(),h(B(e.chooseIcon?"span":"PlusIcon"),r({class:[c.class,e.chooseIcon],"aria-hidden":"true"},e.ptm("pcChooseButton").icon),null,16,["class"]))]})]}),_:3},16,["label","class","style","disabled","unstyled","onClick","onKeydown","onFocus","onBlur","pt"]),e.showUploadButton?(o(),h(u,r({key:0,class:e.cx("pcUploadButton"),label:i.uploadButtonLabel,onClick:i.uploader,disabled:i.uploadDisabled,unstyled:e.unstyled},e.uploadButtonProps,{pt:e.ptm("pcUploadButton")}),{icon:b(function(c){return[v(e.$slots,"uploadicon",{},function(){return[(o(),h(B(e.uploadIcon?"span":"UploadIcon"),r({class:[c.class,e.uploadIcon],"aria-hidden":"true"},e.ptm("pcUploadButton").icon,{"data-pc-section":"uploadbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","label","onClick","disabled","unstyled","pt"])):y("",!0),e.showCancelButton?(o(),h(u,r({key:1,class:e.cx("pcCancelButton"),label:i.cancelButtonLabel,onClick:i.clear,disabled:i.cancelDisabled,unstyled:e.unstyled},e.cancelButtonProps,{pt:e.ptm("pcCancelButton")}),{icon:b(function(c){return[v(e.$slots,"cancelicon",{},function(){return[(o(),h(B(e.cancelIcon?"span":"TimesIcon"),r({class:[c.class,e.cancelIcon],"aria-hidden":"true"},e.ptm("pcCancelButton").icon,{"data-pc-section":"cancelbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","label","onClick","disabled","unstyled","pt"])):y("",!0)]})],16),p("div",r({ref:"content",class:e.cx("content"),onDragenter:l[1]||(l[1]=function(){return i.onDragEnter&&i.onDragEnter.apply(i,arguments)}),onDragover:l[2]||(l[2]=function(){return i.onDragOver&&i.onDragOver.apply(i,arguments)}),onDragleave:l[3]||(l[3]=function(){return i.onDragLeave&&i.onDragLeave.apply(i,arguments)}),onDrop:l[4]||(l[4]=function(){return i.onDrop&&i.onDrop.apply(i,arguments)})},e.ptm("content"),{"data-p-highlight":!1}),[v(e.$slots,"content",{files:n.files,uploadedFiles:n.uploadedFiles,removeUploadedFileCallback:i.removeUploadedFile,removeFileCallback:i.remove,progress:n.progress,messages:n.messages},function(){return[i.hasFiles?(o(),h(s,{key:0,value:n.progress,showValue:!1,unstyled:e.unstyled,pt:e.ptm("pcProgressbar")},null,8,["value","unstyled","pt"])):y("",!0),(o(!0),m(U,null,k(n.messages,function(c){return o(),h(f,{key:c,severity:"error",onClose:i.onMessageClose,unstyled:e.unstyled,pt:e.ptm("pcMessage")},{default:b(function(){return[z(I(c),1)]}),_:2},1032,["onClose","unstyled","pt"])}),128)),i.hasFiles?(o(),m("div",{key:1,class:C(e.cx("fileList"))},[g(d,{files:n.files,onRemove:i.remove,badgeValue:i.pendingLabel,previewWidth:e.previewWidth,templates:e.$slots,unstyled:e.unstyled,pt:e.pt},null,8,["files","onRemove","badgeValue","previewWidth","templates","unstyled","pt"])],2)):y("",!0),i.hasUploadedFiles?(o(),m("div",{key:2,class:C(e.cx("fileList"))},[g(d,{files:n.uploadedFiles,onRemove:i.removeUploadedFile,badgeValue:i.completedLabel,badgeSeverity:"success",previewWidth:e.previewWidth,templates:e.$slots,unstyled:e.unstyled,pt:e.pt},null,8,["files","onRemove","badgeValue","previewWidth","templates","unstyled","pt"])],2)):y("",!0)]}),e.$slots.empty&&!i.hasFiles&&!i.hasUploadedFiles?(o(),m("div",Z(r({key:0},e.ptm("empty"))),[v(e.$slots,"empty")],16)):y("",!0)],16)],16)):i.isBasic?(o(),m("div",r({key:1,class:e.cx("root")},e.ptmi("root")),[(o(!0),m(U,null,k(n.messages,function(c){return o(),h(f,{key:c,severity:"error",onClose:i.onMessageClose,unstyled:e.unstyled,pt:e.ptm("pcMessages")},{default:b(function(){return[z(I(c),1)]}),_:2},1032,["onClose","unstyled","pt"])}),128)),g(u,r({label:i.chooseButtonLabel,class:i.chooseButtonClass,style:e.style,disabled:e.disabled,unstyled:e.unstyled,onMouseup:i.onBasicUploaderClick,onKeydown:T(i.choose,["enter"]),onFocus:i.onFocus,onBlur:i.onBlur},e.ptm("pcButton")),{icon:b(function(c){return[!i.hasFiles||e.auto?v(e.$slots,"uploadicon",{key:0},function(){return[(o(),h(B(e.uploadIcon?"span":"UploadIcon"),r({class:[c.class,e.uploadIcon],"aria-hidden":"true"},e.ptm("pcButton").icon),null,16,["class"]))]}):v(e.$slots,"chooseicon",{key:1},function(){return[(o(),h(B(e.chooseIcon?"span":"PlusIcon"),r({class:[c.class,e.chooseIcon],"aria-hidden":"true"},e.ptm("pcButton").icon),null,16,["class"]))]})]}),_:3},16,["label","class","style","disabled","unstyled","onMouseup","onKeydown","onFocus","onBlur"]),e.auto?y("",!0):v(e.$slots,"filelabel",{key:0,class:C(e.cx("filelabel"))},function(){return[p("span",{class:C(e.cx("filelabel")),files:n.files},I(i.basicFileChosenLabel),11,ce)]}),i.hasFiles?y("",!0):(o(),m("input",r({key:1,ref:"fileInput",type:"file",accept:e.accept,disabled:e.disabled,multiple:e.multiple,onChange:l[5]||(l[5]=function(){return i.onFileSelect&&i.onFileSelect.apply(i,arguments)}),onFocus:l[6]||(l[6]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:l[7]||(l[7]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)})},e.ptm("input")),null,16,pe))],16)):y("",!0)}O.render=fe;const he={class:"grid grid-cols-12 gap-8"},me={class:"col-span-full lg:col-span-6"},ge={class:"card"},ve=p("div",{class:"font-semibold text-xl mb-4"},"Advanced",-1),ye={class:"col-span-full lg:col-span-6"},be={class:"card"},Fe=p("div",{class:"font-semibold text-xl mb-4"},"Basic",-1),Ce={class:"card flex flex-col gap-6 items-center justify-center"},Ee={__name:"FileDoc",setup(e){const l=q(),t=G();function a(){t.value.upload()}function n(){l.add({severity:"info",summary:"Success",detail:"File Uploaded",life:3e3})}return(i,u)=>{const s=O,f=Y,d=M;return o(),m("div",he,[p("div",me,[p("div",ge,[ve,g(s,{name:"demo[]",onUploader:n,multiple:!0,accept:"image/*",maxFileSize:1e6,customUpload:""})])]),p("div",ye,[p("div",be,[Fe,p("div",Ce,[g(f),g(s,{ref_key:"fileupload",ref:t,mode:"basic",name:"demo[]",accept:"image/*",maxFileSize:1e6,onUploader:n,customUpload:""},null,512),g(d,{label:"Upload",onClick:a,severity:"secondary"})])])])])}}};export{Ee as default};
