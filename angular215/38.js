(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{IVaK:function(e,t,i){"use strict";i.d(t,"a",function(){return f});var a=i("fXoL"),n=i("1dEi"),c=i("ofXK"),o=i("1kSV");function r(e,t){1&e&&a.Nb(0,"div",4)}function s(e,t){1&e&&a.Nb(0,"div",5)}function l(e,t){if(1&e){const e=a.Sb();a.Rb(0,"span",13),a.cc("click",function(){a.Ac(e);const t=a.ec().$implicit;return a.ec(2).setTab(t.value)}),a.Qb()}if(2&e){const e=a.ec().$implicit,t=a.ec(2);a.Bb("nav-link ",t.isSelected(e.value)?"active":"",""),a.kc("ngbTooltip",e.title),a.jc("innerHtml",e.label,a.Bc),a.zb("aria-label",e.title)}}function d(e,t){if(1&e){const e=a.Sb();a.Rb(0,"span",14),a.cc("click",function(){a.Ac(e);const t=a.ec().$implicit;return a.ec(2).setTab(t.value)}),a.Qb()}if(2&e){const e=a.ec().$implicit,t=a.ec(2);a.Bb("nav-link ",t.isSelected(e.value)?"active":"",""),a.jc("innerHtml",e.label,a.Bc),a.zb("aria-label",e.title)}}function b(e,t){if(1&e){const e=a.Sb();a.Rb(0,"li",10),a.cc("click",function(t){return a.Ac(e),a.ec(2).stopPropagation(t)}),a.Gc(1,l,1,6,"span",11),a.Gc(2,d,1,5,"span",12),a.Qb()}if(2&e){const e=a.ec(2);a.yb(1),a.jc("ngIf",!e.forWizzard),a.yb(1),a.jc("ngIf",e.forWizzard)}}function u(e,t){if(1&e&&(a.Rb(0,"div",6),a.Rb(1,"ul",7),a.Gc(2,b,3,2,"li",8),a.Qb(),a.Nb(3,"div",9),a.Qb()),2&e){const e=a.ec();a.Bb("field ",e.className,""),a.yb(2),a.jc("ngForOf",e.objects)}}function m(e,t){1&e&&a.Nb(0,"div",15)}let f=(()=>{class e extends n.a{constructor(){super(null),this.setTabEmitter=new a.n}ngOnInit(){super.ngOnInit()}ngOnDestroy(){super.ngOnDestroy(),this.selectedTab=null,this.setTabEmitter=null,this.forWizzard=null}isSelected(e){if(null==this.selectedTab||null==e||""==e.trim())return!1;var t=(""+this.selectedTab).trim();return-1==(e=e.trim()).indexOf("|")?e==t:e.split("|")[1]==t}setTab(e){!this.forWizzard&&this.validateClick()&&this.setTabEmitter.emit(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Gb({type:e,selectors:[["rich-tab-bar"]],inputs:{selectedTab:"selectedTab",forWizzard:"forWizzard"},outputs:{setTabEmitter:"setTabEmitter"},features:[a.vb],decls:4,vars:4,consts:[["class","clear","style","margin-bottom: .3em;",4,"ngIf"],["class","clear","style","margin-bottom: .7em;",4,"ngIf"],["style","width: 100%;",3,"class",4,"ngIf"],["class","clear","style","width: 100%;",4,"ngIf"],[1,"clear",2,"margin-bottom",".3em"],[1,"clear",2,"margin-bottom",".7em"],[2,"width","100%"],[1,"nav","nav-tabs","justify-content-start",2,"margin-left",".5em"],["class","nav-item",3,"click",4,"ngFor","ngForOf"],[1,"clear",2,"margin-bottom",".4em"],[1,"nav-item",3,"click"],["placement","top",3,"class","ngbTooltip","innerHtml","click",4,"ngIf"],[3,"class","innerHtml","click",4,"ngIf"],["placement","top",3,"ngbTooltip","innerHtml","click"],[3,"innerHtml","click"],[1,"clear",2,"width","100%"]],template:function(e,t){1&e&&(a.Gc(0,r,1,0,"div",0),a.Gc(1,s,1,0,"div",1),a.Gc(2,u,4,4,"div",2),a.Gc(3,m,1,0,"div",3)),2&e&&(a.jc("ngIf",t.breakBefore&&!t.breakBeforeDouble&&!t.noRender),a.yb(1),a.jc("ngIf",t.breakBeforeDouble&&!t.noRender),a.yb(1),a.jc("ngIf",!t.noRender),a.yb(1),a.jc("ngIf",!t.noRender))},directives:[c.j,c.i,o.i],encapsulation:2}),e})()},fFX4:function(e,t,i){"use strict";i.d(t,"a",function(){return h});var a=i("1dEi"),n=i("fCXb"),c=i("fXoL"),o=i("3Pt+"),r=i("ofXK"),s=i("1kSV");function l(e,t){1&e&&c.Nb(0,"div",3)}function d(e,t){1&e&&c.Nb(0,"div",4)}function b(e,t){if(1&e){const e=c.Sb();c.Rb(0,"i",14),c.cc("click",function(){return c.Ac(e),c.ec(3).help()}),c.Qb()}if(2&e){const e=c.ec(3);c.kc("ngbTooltip",e.i18n[3][e.language])}}function u(e,t){if(1&e&&(c.Rb(0,"div"),c.Rb(1,"label",12),c.Ic(2),c.Qb(),c.Gc(3,b,1,1,"i",13),c.Qb()),2&e){const e=c.ec(2);c.yb(1),c.kc("for",e.id),c.kc("title",e.titlee),c.zb("aria-label",e.titlee),c.yb(1),c.Kc(" ",e.label," "),c.yb(1),c.jc("ngIf",null!=e.helpMessage&&""!=e.helpMessage.trim())}}function m(e,t){1&e&&c.Nb(0,"div",11)}function f(e,t){if(1&e&&(c.Rb(0,"div",15),c.Nb(1,"div",16),c.Nb(2,"div",17),c.Qb()),2&e){const e=c.ec(2);c.Ab(e.onlyRead?"none":""),c.yb(1),c.lc("id","indicatorError_",e.id,""),c.yb(1),c.lc("id","indicatorInfo_",e.id,"")}}const g=function(e){return{width:e}};function p(e,t){if(1&e&&(c.Rb(0,"div",5),c.Gc(1,u,4,5,"div",6),c.Rb(2,"div"),c.Rb(3,"textarea",7),c.Ic(4,"\t    "),c.Qb(),c.Rb(5,"textarea",8),c.Ic(6,"\t\t"),c.Qb(),c.Qb(),c.Gc(7,m,1,0,"div",9),c.Gc(8,f,3,5,"div",10),c.Nb(9,"div",11),c.Qb()),2&e){const e=c.ec();c.jc("ngStyle",c.pc(12,g,e.widthPerc+"%")),c.yb(1),c.jc("ngIf",null!=e.label),c.yb(1),c.Cb("fieldset angular-editor-container ",e.className," ",e.isInvalid?"is-invalid":"",""),c.yb(1),c.kc("id",e.id),c.jc("formControl",e.ngControl.control),c.yb(2),c.kc("id",e.editorId),c.jc("placeholder",e.placeholderr),c.yb(2),c.jc("ngIf",e.minchars>0||e.maxchars>0),c.yb(1),c.jc("ngIf",e.minchars>0||e.maxchars>0)}}let h=(()=>{class e extends a.a{constructor(e){super(e),this.ngControl=e,this.stringService=new n.a}ngOnInit(){super.ngOnInit(),this.editorId=this.formControlName+"_richeditor"}ngOnDestroy(){this.stopInterval();try{tinymce.remove(this.editor)}catch(e){}this.editor=null,this.editorId=null,this.oldValue=null,this.secureMode=null,this.mobile=null,this.stringService=null,this.counter=0,super.ngOnDestroy()}ngAfterViewInit(){var e=this;tinymce.init({readonly:e.onlyRead?1:0,selector:"#"+e.editorId,theme:e.mobile?"mobile":"silver",plugins:e.getPlugins(),toolbar:e.getButtons(),menubar:!1,convert_urls:0,remove_script_host:0,setup:t=>{e.editor=t,t.on("init",()=>{e.initializeEditor()}),t.on("keyup",()=>{e.setContent(t.getContent())}),t.on("change",()=>{e.setContent(t.getContent())}),t.on("blur",()=>{e.subCounter(),e.setContent(t.getContent()),setTimeout(()=>{e.startInterval()},2e3)}),t.on("mouseleave",()=>{e.subCounter(),setTimeout(()=>{e.startInterval()},2e3)}),t.on("focus",()=>{e.stopInterval(),e.addCounter()}),t.on("mouseenter",()=>{e.stopInterval(),e.addCounter()})}})}getPlugins(){return this.secureMode?"lists, fullscreen":"lists, link, image, media, code, fullscreen"}getButtons(){var e="h1 h2 h3 h4 h5 h6 | bold italic underline ";return e+="| justifyleft justifycenter justifyright justifyfull ",(e+="| bullist numlist | forecolor backcolor ")+(this.secureMode?"| removeformat fullscreen":"| link image media | removeformat code fullscreen")}addCounter(){this.counter++}subCounter(){this.counter--}initializeEditor(){null==this.editor&&setTimeout(()=>{this.initializeEditor()},100),this.startInterval()}startInterval(){null!=this.interval||this.counter>0||(this.interval=setInterval(()=>{this.readToEditor()},500))}stopInterval(){null!=this.interval&&(clearInterval(this.interval),this.interval=null)}readToEditor(){if(null!=this.formGroup){var e=this.formGroup.value[this.formControlName];null==e&&(e=""),e.trim()!=this.oldValue&&(this.oldValue=e.trim(),this.adjustIndicator(e),this.editor.setContent(e),this.editor.contenteditable=!this.onlyRead,this.editor.getBody().style.backgroundColor=this.onlyRead?"#d0dde2":"#fff")}else this.stopInterval()}setContent(e){this.adjustIndicator(e),super.setContent(e)}adjustIndicator(e){var t=document.getElementById("indicatorError_"+this.id),i=document.getElementById("indicatorInfo_"+this.id);if(null!=t&&null!=i&&(t.innerHTML="",i.innerHTML="",this.minchars>0||this.maxchars>0)){var a=this.stringService.countSimpleChars(e),n=this.stringService.countWords(e),c="<br/>=> "+this.i18n[64][this.language]+" = "+n+" "+this.i18n[81][this.language]+".";this.minchars>0&&a<this.minchars?t.innerHTML="Aten\xe7\xe3o: Tamanho ["+a+"] menor que o m\xednimo ["+this.minchars+"]."+c:this.maxchars>0&&a>this.maxchars?t.innerHTML="Aten\xe7\xe3o: Tamanho ["+a+"] maior que o m\xe1ximo ["+this.maxchars+"]."+c:i.innerHTML="Ok: Tamanho ["+a+"] adequado ao intervalo m\xednimo/m\xe1ximo."+c}}}return e.\u0275fac=function(t){return new(t||e)(c.Mb(o.l))},e.\u0275cmp=c.Gb({type:e,selectors:[["rich-editor"]],inputs:{secureMode:"secureMode",mobile:"mobile"},features:[c.vb],decls:3,vars:3,consts:[["class","clear","style","margin-bottom: .3em;",4,"ngIf"],["class","clear","style","margin-bottom: .7em;",4,"ngIf"],["class","field",3,"ngStyle",4,"ngIf"],[1,"clear",2,"margin-bottom",".3em"],[1,"clear",2,"margin-bottom",".7em"],[1,"field",3,"ngStyle"],[4,"ngIf"],[1,"none",3,"id","formControl"],[3,"id","placeholder"],["class","clear",4,"ngIf"],["style","min-height: 2em;",3,"class",4,"ngIf"],[1,"clear"],[3,"for","title"],["class","far fa-question-circle inputActionIcon","placement","top","tabIndex","0",3,"ngbTooltip","click",4,"ngIf"],["placement","top","tabIndex","0",1,"far","fa-question-circle","inputActionIcon",3,"ngbTooltip","click"],[2,"min-height","2em"],[2,"background-color","#f75a36","border-radius",".3em","color","#fff","padding-left","1em",3,"id"],[2,"background-color","#3e7335","border-radius",".3em","color","#fff","padding-left","1em",3,"id"]],template:function(e,t){1&e&&(c.Gc(0,l,1,0,"div",0),c.Gc(1,d,1,0,"div",1),c.Gc(2,p,10,14,"div",2)),2&e&&(c.jc("ngIf",t.breakBefore&&!t.breakBeforeDouble&&!t.noRender),c.yb(1),c.jc("ngIf",t.breakBeforeDouble&&!t.noRender),c.yb(1),c.jc("ngIf",!t.noRender))},directives:[r.j,r.k,o.b,o.m,o.d,s.i],encapsulation:2}),e})()},zbxA:function(e,t,i){"use strict";i.r(t),i.d(t,"DynamiccertificateModule",function(){return q});var a=i("ofXK"),n=i("3Pt+"),c=i("1kSV"),o=i("tmjD"),r=i("tyNb"),s=i("kYp3"),l=i("fXoL"),d=i("JqCM"),b=i("tk/3"),u=i("jhN1"),m=i("dlU0"),f=i("bZwt"),g=i("ONAA"),p=i("1tD9"),h=i("zT7k"),v=i("IVaK"),y=i("ZMR0"),j=i("fFX4"),I=i("n/9U"),E=i("fcMv"),O=i("Ca8N"),R=i("/eUb");function k(e,t){if(1&e){const e=l.Sb();l.Rb(0,"div",16),l.Rb(1,"button",17),l.cc("click",function(){l.Ac(e);const t=l.ec(2);return t.previewCertificate(),t.cancelData()}),l.Nb(2,"i",18),l.Rb(3,"span"),l.Ic(4," Visualizar Pr\xe9via do Certificado "),l.Qb(),l.Qb(),l.Qb()}}function C(e,t){if(1&e){const e=l.Sb();l.Rb(0,"section",7),l.Rb(1,"rich-tab-bar",8),l.cc("setTabEmitter",function(t){return l.Ac(e),l.ec().setTab(t)}),l.Qb(),l.Rb(2,"form",9),l.cc("ngSubmit",function(){return l.Ac(e),l.ec().onObjectFormSubmit()}),l.Rb(3,"div"),l.Nb(4,"rich-input-text",10),l.Nb(5,"rich-input-text",11),l.Nb(6,"div",12),l.Qb(),l.Rb(7,"div"),l.Nb(8,"rich-editor",13),l.Nb(9,"div",12),l.Gc(10,k,5,0,"div",14),l.Nb(11,"div",12),l.Qb(),l.Rb(12,"form-action",15),l.cc("cancelDataEmitter",function(){return l.Ac(e),l.ec().cancelData()}),l.Qb(),l.Qb(),l.Qb()}if(2&e){const e=l.ec();l.yb(1),l.jc("objects",e.tabObjects)("selectedTab",e.tab),l.yb(1),l.jc("formGroup",e.dataForm),l.yb(1),l.Ab(0==e.tab?"":"none"),l.yb(1),l.jc("formGroup",e.dataForm),l.yb(1),l.jc("formGroup",e.dataForm),l.yb(2),l.Ab(1==e.tab?"":"none"),l.yb(1),l.jc("formGroup",e.dataForm),l.yb(2),l.jc("ngIf",null!=e.appointmentpageconfig),l.yb(2),l.jc("validationMessages",e.validationMessages)("processValidation",e.processValidation)}}function T(e,t){if(1&e){const e=l.Sb();l.Rb(0,"button",38),l.cc("click",function(){l.Ac(e);const t=l.ec().$implicit;return l.ec(3).previewCertificateById(t.id)}),l.Rb(1,"span",39),l.Nb(2,"i",40),l.Qb(),l.Rb(3,"span",41),l.Ic(4," Visualizar Pr\xe9via "),l.Qb(),l.Qb()}}function D(e,t){1&e&&l.Nb(0,"div",42)}const x=function(){return{width:"13.1rem","text-align":"left","padding-left":"0.5em !important"}},P=function(){return{width:"2em","text-align":"center",display:"block",float:"left"}},w=function(){return["admin_master"]},S=function(){return["admin"]};function _(e,t){if(1&e){const e=l.Sb();l.Rb(0,"tr",30),l.Nb(1,"td",31),l.Nb(2,"td",32),l.Rb(3,"td",33),l.Rb(4,"div",34),l.Gc(5,T,5,0,"button",35),l.Gc(6,D,1,0,"div",36),l.Rb(7,"edit-delete-action",37),l.cc("editObjectEmitter",function(t){return l.Ac(e),l.ec(3).editObject(t)})("showObjectEmitter",function(t){return l.Ac(e),l.ec(3).showObject(t)})("deleteObjectEmitter",function(t){return l.Ac(e),l.ec(3).deleteObject(t)})("unDeleteObjectEmitter",function(t){return l.Ac(e),l.ec(3).unDeleteObject(t)}),l.Qb(),l.Qb(),l.Qb(),l.Qb()}if(2&e){const e=t.$implicit,i=l.ec(3),a=l.yc(7),n=l.yc(9),c=l.yc(11);l.yb(1),l.jc("innerHtml",e.a1_name,l.Bc),l.yb(1),l.jc("innerHtml",e.a2_defaulthoursLabel,l.Bc),l.yb(3),l.jc("ngIf",!i.auditingExclusions),l.yb(1),l.jc("ngIf",!i.auditingExclusions),l.yb(1),l.jc("auditingExclusions",i.auditingExclusions)("object",e)("logged",i.logged)("noDetail",i.skipToLogin)("expandedStyle",l.oc(14,x))("expandedStyleIcon",l.oc(15,P))("noAction",!(l.oc(16,w).includes(i.logged.category)||l.oc(17,S).includes(i.logged.category)&&i.permissions.includes("appointmentpage_write")))("objectDetail",a)("objectDeleteConfirmation",n)("objectUnDeleteConfirmation",c)}}function A(e,t){1&e&&(l.Rb(0,"tr"),l.Rb(1,"td",43),l.Rb(2,"span"),l.Rb(3,"em"),l.Ic(4,"Nenhum Certificado Especial Cadastrado/Encontrado para o Evento/Atividade"),l.Qb(),l.Qb(),l.Qb(),l.Qb())}function Q(e,t){if(1&e){const e=l.Sb();l.Rb(0,"table",21),l.Rb(1,"thead",22),l.Rb(2,"tr"),l.Rb(3,"th",23),l.Ic(4," Identifica\xe7\xe3o "),l.Qb(),l.Rb(5,"th",24),l.Ic(6," Horas Padr\xe3o "),l.Qb(),l.Rb(7,"th",25),l.Ic(8," A\xe7\xf5es "),l.Qb(),l.Qb(),l.Qb(),l.Rb(9,"tbody"),l.Gc(10,_,8,18,"tr",26),l.Gc(11,A,5,0,"tr",27),l.Rb(12,"tr"),l.Rb(13,"td",28),l.Rb(14,"table-navigator",29),l.cc("previousPageEmitter",function(){return l.Ac(e),l.ec(2).previousPage()})("setPageEmitter",function(t){return l.Ac(e),l.ec(2).setPage(t)})("nextPageEmitter",function(){return l.Ac(e),l.ec(2).nextPage()})("adjustPaginationEmitter",function(t){return l.Ac(e),l.ec(2).adjustPagination(t)}),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Qb()}if(2&e){const e=l.ec(2);l.yb(10),l.jc("ngForOf",e.objects)("ngForTrackBy",e.trackById),l.yb(1),l.jc("ngIf",e.emptyArray(e.objects)),l.yb(3),l.jc("pages",e.pages)("selectedPage",e.selectedPage)("previousPageDisabled",e.previousPageDisabled)("nextPageDisabled",e.nextPageDisabled)("rowsPerPage",e.rowsPerPage)("pageRange",e.pageRange)("totalPages",e.totalPages)("totalRows",e.totalRows)("useAdjustPagination",!0)}}function N(e,t){if(1&e&&(l.Rb(0,"section",19),l.Gc(1,Q,15,12,"table",20),l.Qb()),2&e){const e=l.ec();l.yb(1),l.jc("ngIf",e.objects)}}function G(e,t){if(1&e&&(l.Rb(0,"tr"),l.Rb(1,"th",44),l.Ic(2," Identifica\xe7\xe3o: "),l.Qb(),l.Nb(3,"td",45),l.Qb(),l.Rb(4,"tr"),l.Rb(5,"th",46),l.Ic(6," Horas P.: "),l.Qb(),l.Nb(7,"td",45),l.Qb(),l.Rb(8,"tr"),l.Rb(9,"th",47),l.Ic(10," Template: "),l.Qb(),l.Nb(11,"td",45),l.Qb()),2&e){const e=l.ec();l.yb(3),l.jc("innerHtml",e.selectedObject.a1_name,l.Bc),l.yb(4),l.jc("innerHtml",e.selectedObject.a2_defaulthours,l.Bc),l.yb(4),l.jc("innerHtml",e.selectedObject.a3_template,l.Bc)}}function M(e,t){if(1&e){const e=l.Sb();l.Rb(0,"delete-confirmation",48),l.cc("cancelDataEmitter",function(){return l.Ac(e),l.ec().showObject()}),l.Qb()}if(2&e){const e=l.ec(),t=l.yc(5);l.jc("selectedObject",e.selectedObject)("templateOutlet",t)}}function F(e,t){if(1&e){const e=l.Sb();l.Rb(0,"delete-confirmation",49),l.cc("confirmDeleteObjectEmitter",function(t){return l.Ac(e),l.ec().confirmDeleteObject(t)})("cancelDataEmitter",function(){return l.Ac(e),l.ec().cancelData()}),l.Qb()}if(2&e){const e=l.ec(),t=l.yc(5);l.jc("selectedObject",e.selectedObject)("auditingExclusions",e.auditingExclusions)("templateOutlet",t)}}function H(e,t){if(1&e){const e=l.Sb();l.Rb(0,"delete-confirmation",50),l.cc("confirmDeleteObjectEmitter",function(t){return l.Ac(e),l.ec().confirmUnDeleteObject(t)})("cancelDataEmitter",function(){return l.Ac(e),l.ec().cancelData()}),l.Qb()}if(2&e){const e=l.ec(),t=l.yc(5);l.jc("selectedObject",e.selectedObject)("auditingExclusions",e.auditingExclusions)("templateOutlet",t)}}const B=function(){return["admin_master","admin","system_auditor"]},V=[{path:"",component:(()=>{class e extends s.a{constructor(e,t,i,a,n,c,o,r,s,l,d){super(e,t,i,a,n,c,o,r,s,l,d)}ngOnInit(){var e=this.storageService.localStorageGetItem("_skipToLogin_"+this.getAppId());this.skipToLogin="true"===e,this.setInitializationServices(["dynamiccertificate","appointmentpageconfig","file"]),this.crudService=this.dynamiccertificateService,this.appointmentPage=this.storageService.get()[0],this.sucessErrorMessages={200:"Certificado Especial adicionado com sucesso.",201:"Certificado Especial alterado com sucesso.",204:"Certificado Especial exclu&iacute;do com sucesso.",207:"Certificado Especial restaurado com sucesso.",208:"Certificado Especial exclu&iacute;do [PERMANENTE] com sucesso."},this.tabObjects=[{value:"0",label:"Dados Gerais (*)",title:"Dados Gerais"},{value:"1",label:"Template (*)",title:"Template"}],this.listTitle="Certificados Especiais",this.addTitle="Adicionar Certificado Especial",this.editTitle="Editar Certificado Especial",this.dataForm=new n.f({a1_name:new n.c("",[n.s.required]),a2_defaulthours:new n.c("",[n.s.required]),a3_template:new n.c("",[n.s.required])}),this.loadAppointmentpageconfig(),super.ngOnInit()}afterNgOnInit(){this.parameterName="a1_name|type:string"}ngOnDestroy(){this.tabObjects=null,this.appointmentPage=null,this.appointmentpageconfig=null,super.ngOnDestroy()}loadAppointmentpageconfig(){this.appointmentpageconfig=null,this.appointmentpageconfigService.getAll(1,1," xoo active = true xoo appointmentPageId = "+this.appointmentPage.id).then(e=>{e=this.clearRowZeroObjectsValidated(e),this.emptyArray(e)||(this.appointmentpageconfig=e[0])})}setObject(e){super.setObject(e);var t=null;this.emptyObject(e)||(t=(""+this.mathService.formatNumber(e.a2_defaulthours,1,".")).replace(".",",")),this.dataForm.setValue({a1_name:e.a1_name,a2_defaulthours:t,a3_template:e.a3_template})}getAdditionalConditions(){return" xoo a4_appointmentpageid = "+this.appointmentPage.id+" "+super.getAdditionalConditions()}prepareData(e){return e.a2_defaulthoursLabel=(""+this.mathService.formatNumber(e.a2_defaulthours,1,".")).replace(".",","),e}prepareToSaveUpdate(e){return e.alreadyPreparedToSave||(e.a2_defaulthours=parseFloat((""+e.a2_defaulthours).replace(",",".")),e.a4_appointmentpageid=this.appointmentPage.id,e.alreadyPreparedToSave=!0),e}makeSelectSearchedItemDestaked(e,t){return e.a1_name=this.makeDestak(e.a1_name,t),e}validateFormFields(){return this.errorRequired("a1_name")&&this.addValidationMessage("Identifica&ccedil;&atilde;o &eacute; requerido!"),this.errorRequired("a2_defaulthours")&&this.addValidationMessage("Horas Padr&atilde;o &eacute; requerido!"),this.errorRequired("a3_template")&&this.addValidationMessage("Template &eacute; requerido!"),!this.inValidationMsgs()}preValidateToSaveUpdate(e){return this.emptyObject(this.appointmentPage)&&this.addValidationMessage("Evento/Atividade &eacute; requerido!"),!this.inValidationMsgs()}backToOrigin(){this.crudService.getStorageService().clear(),this.eventEmitterService.get("appointmentpages").emit({})}previewCertificateById(e){this.emptyObject(this.appointmentpageconfig)||(this.setProcessing(!0),this.crudService.load(e).then(e=>{this.previewCertificate2(e.a1_name,e.a3_template)}))}previewCertificate(){if(!this.emptyObject(this.appointmentpageconfig)){this.setProcessing(!0);var e=document.getElementById("a3_template");this.previewCertificate2(this.dataForm.value.a1_name,e.value)}}previewCertificate2(e,t){this.emptyString(t)?this.setProcessing(!1):(t=(t=(t=(t=(t=(t=t.replace("#{pessoa.nome}","<strong>Nome Do Participante</strong>")).replace("#{evento.titulo}","<strong>Titulo do Evento/Congressos</strong>")).replace("#{evento.inicio}","<strong>Data In\xedcio Evento Formato(dd/mm/aaaa)</strong>")).replace("#{evento.fim}","<strong>Data T\xe9rmino Evento Formato(dd/mm/aaaa)</strong>")).replace("#{certificado.horas}","<strong>N\xfamero Horas</strong>")).replace("#{pessoa.como}","<strong>"+e+"</strong>"),this.fileService.load(this.appointmentpageconfig.imgCertificateId).then(e=>{this.generateHtmlCertificate(t,e.link),setTimeout(()=>{this.listData()},1e3)}))}patchValue(e,t){"a1_name"==e&&this.dataForm.patchValue({a1_name:t}),"a2_defaulthours"==e&&this.dataForm.patchValue({a2_defaulthours:t}),"a3_template"==e&&this.dataForm.patchValue({a3_template:t})}}return e.\u0275fac=function(t){return new(t||e)(l.Mb(c.g),l.Mb(d.c),l.Mb(c.a),l.Mb(b.a),l.Mb(r.b),l.Mb(r.a),l.Mb(u.c),l.Mb(m.a),l.Mb(f.a),l.Mb(g.a),l.Mb(p.a))},e.\u0275cmp=l.Gb({type:e,selectors:[["dynamiccertificate-root"]],features:[l.vb],decls:12,vars:12,consts:[[3,"title","editing","searchForm","auditingExclusions","enabledAuditList","disabledAddNew","backToOrigin","onSearchFormSubmitEmitter","listDataEmitter","listDataNoCacheEmitter","auditListEmitter","normalListEmitter","addObjectEmitter","backToOriginEmitter"],[3,"ngIf","ngIfElse"],["listObjects",""],["selectedObjectTemplate",""],["objectDetail",""],["objectDeleteConfirmation",""],["objectUnDeleteConfirmation",""],["aria-label","cadastro e alteracao de Certificados Especiais",1,"dataForm"],[3,"objects","selectedTab","setTabEmitter"],[3,"formGroup","ngSubmit"],["label","Identifica\xe7\xe3o (*)","titlee","Identifica\xe7\xe3o","maxchars","250","formControlName","a1_name","widthPerc","69","ngDefaultControl","",3,"formGroup"],["label","Horas Padr\xe3o (*) - 0,0 para n\xe3o constar","titlee","Horas Padr\xe3o","maskk","0*,0","maxchars","5","minValue","0","maxValue","999","forNumber","true","formControlName","a2_defaulthours","widthPerc","29","ngDefaultControl","",3,"formGroup"],[1,"clear"],["id","a3_template","formControlName","a3_template","ngDefaultControl","",3,"formGroup"],["class","buttons clear",4,"ngIf"],[3,"validationMessages","processValidation","cancelDataEmitter"],[1,"buttons","clear"],[1,"btn","btn-primary","clickable",3,"click"],[1,"far","fa-eye",2,"margin-right",".5em"],["aria-label","lista dos Certificados Especiais"],["class","table","mdbTable","",4,"ngIf"],["mdbTable","",1,"table"],[1,"black","white-text"],["scope","col","title","Identifica\xe7\xe3o","aria-label","Identifica\xe7\xe3o",2,"width","auto"],["scope","col",2,"width","8rem"],["scope","col",2,"width","14.6rem"],["mdbTableCol","",4,"ngFor","ngForOf","ngForTrackBy"],[4,"ngIf"],["colspan","3",1,"navigationBottom"],[3,"pages","selectedPage","previousPageDisabled","nextPageDisabled","rowsPerPage","pageRange","totalPages","totalRows","useAdjustPagination","previousPageEmitter","setPageEmitter","nextPageEmitter","adjustPaginationEmitter"],["mdbTableCol",""],[1,"text",3,"innerHtml"],[1,"number",3,"innerHtml"],[1,"actions"],[1,"buttons"],["class","btn btn-primary clickable","type","button","style","width: 13.1rem; text-align: left; padding-left: .5em !important;",3,"click",4,"ngIf"],["class","clear","style","margin-bottom: .2em;",4,"ngIf"],[3,"auditingExclusions","object","logged","noDetail","expandedStyle","expandedStyleIcon","noAction","objectDetail","objectDeleteConfirmation","objectUnDeleteConfirmation","editObjectEmitter","showObjectEmitter","deleteObjectEmitter","unDeleteObjectEmitter"],["type","button",1,"btn","btn-primary","clickable",2,"width","13.1rem","text-align","left","padding-left",".5em !important",3,"click"],[2,"width","2em","text-align","center","display","block","float","left"],[1,"far","fa-eye"],[2,"margin-left",".4em"],[1,"clear",2,"margin-bottom",".2em"],["colspan","3",1,"text","navigationBottom"],["scope","row","title","Identifica\xe7\xe3o","aria-label","Identifica\xe7\xe3o",1,"text",2,"width","12em"],[1,"text","noBorderRight",3,"innerHtml"],["scope","row","title","Horas Padr\xe3o","aria-label","Horas Padr\xe3o",1,"text"],["scope","row","title","Template","aria-label","Template",1,"text"],["label","do Certificado Especial","info","true",3,"selectedObject","templateOutlet","cancelDataEmitter"],["label","Certificado Especial",3,"selectedObject","auditingExclusions","templateOutlet","confirmDeleteObjectEmitter","cancelDataEmitter"],["label","Certificado Especial","redo","true",3,"selectedObject","auditingExclusions","templateOutlet","confirmDeleteObjectEmitter","cancelDataEmitter"]],template:function(e,t){if(1&e&&(l.Rb(0,"form-toolbar",0),l.cc("onSearchFormSubmitEmitter",function(){return t.onSearchFormSubmit()})("listDataEmitter",function(){return t.listData()})("listDataNoCacheEmitter",function(){return t.listDataNoCache()})("auditListEmitter",function(){return t.auditList()})("normalListEmitter",function(){return t.normalList()})("addObjectEmitter",function(){return t.addObject()})("backToOriginEmitter",function(){return t.backToOrigin()}),l.Qb(),l.Gc(1,C,13,15,"ng-template",1),l.Gc(2,N,2,1,"ng-template",null,2,l.Hc),l.Gc(4,G,12,3,"ng-template",null,3,l.Hc),l.Gc(6,M,1,2,"ng-template",null,4,l.Hc),l.Gc(8,F,1,3,"ng-template",null,5,l.Hc),l.Gc(10,H,1,3,"ng-template",null,6,l.Hc)),2&e){const e=l.yc(3);l.jc("title",t.title)("editing",t.editing)("searchForm",t.searchForm)("auditingExclusions",t.auditingExclusions)("enabledAuditList",l.oc(9,B).includes(t.logged.category)&&!t.skipToLogin)("disabledAddNew",!(l.oc(10,w).includes(t.logged.category)||l.oc(11,S).includes(t.logged.category)&&t.permissions.includes("appointmentpage_write")))("backToOrigin",!0),l.yb(1),l.jc("ngIf",t.editing)("ngIfElse",e)}},directives:[h.a,a.j,v.a,n.t,n.n,n.g,y.a,n.m,n.e,n.b,j.a,I.a,a.i,E.a,O.a,R.a],encapsulation:2}),e})()}];let z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.Kb({type:e}),e.\u0275inj=l.Jb({imports:[[r.c.forChild(V)],r.c]}),e})();var L=i("kS8M");let q=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.Kb({type:e}),e.\u0275inj=l.Jb({imports:[[a.b,n.h,n.q,c.h,o.a.forRoot(),z,L.a]]}),e})()}}]);