(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{Bc1F:function(e,t,i){"use strict";i.r(t),i.d(t,"UserModule",function(){return Z});var n=i("ofXK"),c=i("3Pt+"),s=i("1kSV"),a=i("tyNb"),l=i("kYp3"),o=i("fXoL"),r=i("JqCM"),d=i("tk/3"),b=i("jhN1"),u=i("dlU0"),m=i("bZwt"),f=i("ONAA"),g=i("1tD9"),p=i("zT7k"),h=i("IVaK"),v=i("ZMR0"),y=i("ZEYb"),j=i("n/9U"),k=i("fcMv"),P=i("Ca8N"),E=i("/eUb");function O(e,t){1&e&&(o.Rb(0,"div"),o.Rb(1,"div",19),o.Nb(2,"i",20),o.Rb(3,"span"),o.Ic(4,'Selecione uma categoria para a pessoa/usu\xe1rio, na aba "Dados Gerais".'),o.Qb(),o.Qb(),o.Nb(5,"div",17),o.Qb())}function I(e,t){1&e&&(o.Rb(0,"div"),o.Rb(1,"div",22),o.Nb(2,"i",20),o.Rb(3,"span"),o.Ic(4,"Nenhuma permiss\xe3o dispon\xedvel, para a categoria selecionada."),o.Qb(),o.Qb(),o.Nb(5,"div",17),o.Qb())}function R(e,t){if(1&e){const e=o.Sb();o.Rb(0,"input",31),o.cc("click",function(){o.Ac(e);const t=o.ec().$implicit;return o.ec(3).uncheckPermission(t.value)}),o.Qb()}if(2&e){const e=o.ec().$implicit,t=o.ec(3);o.lc("id","chk_",e.value,""),o.jc("disabled",null!=e.dependOf&&!t.selectedPermissions.includes(e.dependOf))}}function w(e,t){if(1&e){const e=o.Sb();o.Rb(0,"input",32),o.cc("click",function(){o.Ac(e);const t=o.ec().$implicit;return o.ec(3).checkPermission(t.value)}),o.Qb()}if(2&e){const e=o.ec().$implicit,t=o.ec(3);o.lc("id","chk_",e.value,""),o.jc("disabled",null!=e.dependOf&&!t.selectedPermissions.includes(e.dependOf))}}function Q(e,t){if(1&e){const e=o.Sb();o.Rb(0,"input",31),o.cc("click",function(){o.Ac(e);const t=o.ec().$implicit;return o.ec(3).uncheckPermission(t.value+"_write")}),o.Qb()}if(2&e){const e=o.ec().$implicit,t=o.ec(3);o.lc("id","chk_",e.value+"_write",""),o.jc("disabled",null!=e.dependOf&&!t.selectedPermissions.includes(e.dependOf)||!t.selectedPermissions.includes(e.value))}}function A(e,t){if(1&e){const e=o.Sb();o.Rb(0,"input",32),o.cc("click",function(){o.Ac(e);const t=o.ec().$implicit;return o.ec(3).checkPermission(t.value+"_write")}),o.Qb()}if(2&e){const e=o.ec().$implicit,t=o.ec(3);o.lc("id","chk_",e.value+"_write",""),o.jc("disabled",null!=e.dependOf&&!t.selectedPermissions.includes(e.dependOf)||!t.selectedPermissions.includes(e.value))}}function C(e,t){if(1&e&&(o.Rb(0,"div",23),o.Rb(1,"div",24),o.Gc(2,R,1,2,"input",25),o.Gc(3,w,1,2,"input",26),o.Qb(),o.Rb(4,"div",27),o.Rb(5,"label",28),o.Ic(6),o.Qb(),o.Qb(),o.Nb(7,"div",17),o.Rb(8,"div",29),o.Gc(9,Q,1,2,"input",25),o.Gc(10,A,1,2,"input",26),o.Qb(),o.Rb(11,"div",30),o.Rb(12,"label",28),o.Ic(13," + Write "),o.Qb(),o.Qb(),o.Nb(14,"div",17),o.Qb()),2&e){const e=t.$implicit,i=o.ec(3);o.Bb("field ",e.breakBefore?"clear":"",""),o.yb(2),o.jc("ngIf",i.selectedPermissions.includes(e.value)),o.yb(1),o.jc("ngIf",!i.selectedPermissions.includes(e.value)),o.yb(2),o.Bb("clickable ",null==e.dependOf||i.selectedPermissions.includes(e.dependOf)?"":"disabled",""),o.lc("for","chk_",e.value,""),o.yb(1),o.Kc(" ",e.label," (Read) "),o.yb(3),o.jc("ngIf",i.selectedPermissions.includes(e.value+"_write")),o.yb(1),o.jc("ngIf",!i.selectedPermissions.includes(e.value+"_write")),o.yb(2),o.Bb("clickable ",null!=e.dependOf&&!i.selectedPermissions.includes(e.dependOf)||!i.selectedPermissions.includes(e.value)?"disabled":"",""),o.lc("for","chk_",e.value+"_write","")}}function D(e,t){if(1&e&&(o.Rb(0,"div"),o.Gc(1,I,6,0,"div",16),o.Gc(2,C,15,16,"div",21),o.Nb(3,"div",17),o.Qb()),2&e){const e=o.ec(2);o.yb(1),o.jc("ngIf",0==e.disponiblePermissions.length),o.yb(1),o.jc("ngForOf",e.disponiblePermissions)}}const S=function(){return{value:"0",label:"Dados Gerais (*)",title:"Dados Gerais"}},x=function(){return{value:"1",label:"Permiss\xf5es de Acesso",title:"Permiss\xf5es de Acesso"}},G=function(e,t){return[e,t]};function N(e,t){if(1&e){const e=o.Sb();o.Rb(0,"section",7),o.Rb(1,"rich-tab-bar",8),o.cc("setTabEmitter",function(t){return o.Ac(e),o.ec().setTab(t)}),o.Qb(),o.Rb(2,"form",9),o.cc("ngSubmit",function(){return o.Ac(e),o.ec().onObjectFormSubmit()}),o.Rb(3,"div"),o.Nb(4,"rich-input-text",10),o.Nb(5,"rich-input-text",11),o.Rb(6,"rich-input-text",12),o.cc("valueChangedEmitter",function(t){return o.Ac(e),o.ec().validatePasswordForce(t)}),o.Qb(),o.Nb(7,"rich-input-select",13),o.Qb(),o.Rb(8,"div"),o.Rb(9,"div",14),o.Rb(10,"div",15),o.Gc(11,O,6,0,"div",16),o.Gc(12,D,4,2,"div",16),o.Qb(),o.Nb(13,"div",17),o.Qb(),o.Nb(14,"div",17),o.Qb(),o.Rb(15,"form-action",18),o.cc("cancelDataEmitter",function(){return o.Ac(e),o.ec().cancelData()}),o.Qb(),o.Qb(),o.Qb()}if(2&e){const e=o.ec();o.yb(1),o.jc("objects",o.qc(21,G,o.oc(19,S),o.oc(20,x)))("selectedTab",e.tab),o.yb(1),o.jc("formGroup",e.dataForm),o.yb(1),o.Ab(0==e.tab?"":"none"),o.yb(1),o.jc("formGroup",e.dataForm),o.yb(1),o.jc("formGroup",e.dataForm),o.yb(1),o.jc("formGroup",e.dataForm),o.yb(1),o.jc("objects",e.categories),o.yb(1),o.Ab(1==e.tab?"":"none"),o.yb(3),o.jc("ngIf",null==e.disponiblePermissions),o.yb(1),o.jc("ngIf",null!=e.disponiblePermissions),o.yb(3),o.jc("validationMessages",e.validationMessages)("processValidation",e.processValidation)("passwordValidationMessage",e.passwordValidationMessage)("additionalMsgsInfo",e.formInfo)}}function M(e,t){1&e&&(o.Rb(0,"th",44),o.Ic(1," A\xe7\xf5es "),o.Qb())}function T(e,t){1&e&&(o.Rb(0,"th",45),o.Ic(1," A\xe7\xf5es "),o.Qb())}function B(e,t){if(1&e){const e=o.Sb();o.Rb(0,"button",53),o.cc("click",function(){o.Ac(e);const t=o.ec().$implicit;return o.ec(3).toUserPaymentTickets(t.id)}),o.Nb(1,"i",54),o.Qb()}if(2&e){const e=o.ec().$implicit;o.jc("disabled","admin_master"==e.category)}}const F=function(){return["admin_master"]},U=function(){return["admin"]};function V(e,t){if(1&e){const e=o.Sb();o.Rb(0,"tr",46),o.Rb(1,"td",47),o.Ic(2),o.Qb(),o.Nb(3,"td",48),o.Rb(4,"td",49),o.Rb(5,"div",50),o.Gc(6,B,2,1,"button",51),o.Rb(7,"edit-delete-action",52),o.cc("showObjectEmitter",function(t){return o.Ac(e),o.ec(3).showObject(t)})("lockEmitter",function(t){return o.Ac(e),o.ec(3).lock(t)})("unlockEmitter",function(t){return o.Ac(e),o.ec(3).unlock(t)})("editObjectEmitter",function(t){return o.Ac(e),o.ec(3).editObject(t)})("deleteObjectEmitter",function(t){return o.Ac(e),o.ec(3).deleteObject(t)})("unDeleteObjectEmitter",function(t){return o.Ac(e),o.ec(3).unDeleteObject(t)}),o.Qb(),o.Qb(),o.Qb(),o.Qb()}if(2&e){const e=t.$implicit,i=o.ec(3),n=o.yc(9),c=o.yc(11),s=o.yc(7);o.yb(2),o.Lc(" ",e.name," <",e.email,"> "),o.yb(1),o.jc("innerHtml",e.categoryLabel,o.Bc),o.yb(3),o.jc("ngIf",!i.auditingExclusions),o.yb(1),o.jc("auditingExclusions",i.auditingExclusions)("object",e)("logged",i.logged)("noAction",!(o.oc(12,F).includes(i.logged.category)||o.oc(13,U).includes(i.logged.category)&&i.permissions.includes("user_write")))("objectDeleteConfirmation",n)("objectUnDeleteConfirmation",c)("objectDetail",s)("lockUnLock",!0)}}function L(e,t){if(1&e){const e=o.Sb();o.Rb(0,"table",35),o.Rb(1,"thead",36),o.Rb(2,"tr"),o.Rb(3,"th",37),o.Ic(4," Nome + E-mail "),o.Qb(),o.Rb(5,"th",38),o.Ic(6," Cat./Perm. "),o.Qb(),o.Gc(7,M,2,0,"th",39),o.Gc(8,T,2,0,"th",40),o.Qb(),o.Qb(),o.Rb(9,"tbody"),o.Gc(10,V,8,14,"tr",41),o.Rb(11,"tr"),o.Rb(12,"td",42),o.Rb(13,"table-navigator",43),o.cc("previousPageEmitter",function(){return o.Ac(e),o.ec(2).previousPage()})("setPageEmitter",function(t){return o.Ac(e),o.ec(2).setPage(t)})("nextPageEmitter",function(){return o.Ac(e),o.ec(2).nextPage()})("adjustPaginationEmitter",function(t){return o.Ac(e),o.ec(2).adjustPagination(t)}),o.Qb(),o.Qb(),o.Qb(),o.Qb(),o.Qb()}if(2&e){const e=o.ec(2);o.yb(7),o.jc("ngIf",!e.auditingExclusions),o.yb(1),o.jc("ngIf",e.auditingExclusions),o.yb(2),o.jc("ngForOf",e.objects)("ngForTrackBy",e.trackById),o.yb(3),o.jc("pages",e.pages)("selectedPage",e.selectedPage)("previousPageDisabled",e.previousPageDisabled)("nextPageDisabled",e.nextPageDisabled)("rowsPerPage",e.rowsPerPage)("pageRange",e.pageRange)("totalPages",e.totalPages)("totalRows",e.totalRows)("useAdjustPagination",!0)}}function _(e,t){if(1&e&&(o.Rb(0,"section",33),o.Gc(1,L,14,13,"table",34),o.Qb()),2&e){const e=o.ec();o.yb(1),o.jc("ngIf",e.objects)}}function z(e,t){if(1&e&&(o.Rb(0,"tr"),o.Rb(1,"th",55),o.Ic(2," Nome: "),o.Qb(),o.Rb(3,"td",56),o.Ic(4),o.Qb(),o.Qb(),o.Rb(5,"tr"),o.Rb(6,"th",57),o.Ic(7," E-mail: "),o.Qb(),o.Rb(8,"td",56),o.Ic(9),o.Qb(),o.Qb(),o.Rb(10,"tr"),o.Rb(11,"th",57),o.Ic(12," Categoria/Permiss\xe3o: "),o.Qb(),o.Rb(13,"td",56),o.Ic(14),o.Qb(),o.Qb(),o.Rb(15,"tr"),o.Rb(16,"th",57),o.Ic(17," Ativa: "),o.Qb(),o.Rb(18,"td",56),o.Ic(19),o.Qb(),o.Qb()),2&e){const e=o.ec();o.yb(4),o.Kc(" ",e.selectedObject.name," "),o.yb(5),o.Kc(" ",e.selectedObject.email," "),o.yb(5),o.Kc(" ",e.selectedObject.categoryLabel," "),o.yb(5),o.Kc(" ",e.selectedObject.active?"Sim":"N\xe3o"," ")}}function q(e,t){if(1&e){const e=o.Sb();o.Rb(0,"delete-confirmation",58),o.cc("cancelDataEmitter",function(){return o.Ac(e),o.ec().showObject()}),o.Qb()}if(2&e){const e=o.ec(),t=o.yc(5);o.jc("selectedObject",e.selectedObject)("templateOutlet",t)}}function K(e,t){if(1&e){const e=o.Sb();o.Rb(0,"delete-confirmation",59),o.cc("confirmDeleteObjectEmitter",function(t){return o.Ac(e),o.ec().confirmDeleteObject(t)})("cancelDataEmitter",function(){return o.Ac(e),o.ec().cancelData()}),o.Qb()}if(2&e){const e=o.ec(),t=o.yc(5);o.jc("selectedObject",e.selectedObject)("auditingExclusions",e.auditingExclusions)("templateOutlet",t)}}function $(e,t){if(1&e){const e=o.Sb();o.Rb(0,"delete-confirmation",60),o.cc("confirmDeleteObjectEmitter",function(t){return o.Ac(e),o.ec().confirmUnDeleteObject(t)})("cancelDataEmitter",function(){return o.Ac(e),o.ec().cancelData()}),o.Qb()}if(2&e){const e=o.ec(),t=o.yc(5);o.jc("selectedObject",e.selectedObject)("auditingExclusions",e.auditingExclusions)("templateOutlet",t)}}const H=function(){return["admin_master","admin","system_auditor"]},W=[{path:"",component:(()=>{class e extends l.a{constructor(e,t,i,n,c,s,a,l,o,r,d){super(e,t,i,n,c,s,a,l,o,r,d)}ngOnInit(){this.setInitializationServices(["user"]),this.crudService=this.userService,this.sucessErrorMessages={200:"Pessoa/Usu\xe1rio adicionada com sucesso.",201:"Pessoa/Usu\xe1rio alterada com sucesso.",2010:"Pessoa/Usu\xe1rio inativada com sucesso.",2011:"Pessoa/Usu\xe1rio ativada com sucesso.",204:"Pessoa/Usu\xe1rio exclu\xedda com sucesso.",207:"Pessoa/Usu\xe1rio restaurada com sucesso.",208:"Pessoa/Usu\xe1rio exclu\xedda [PERMANENTE] com sucesso."},this.listTitle="Pessoas/Usu\xe1rios",this.addTitle="Adicionar Pessoa/Usu\xe1rio",this.editTitle="Editar Pessoa/Usu\xe1rio",this.formInfo=["** Requerido para criar usu\xe1rio. Em branco mant\xe9m o valor atual."],this.dataForm=new c.f({name:new c.c("",[c.s.required]),email:new c.c("",[c.s.required,c.s.email]),password:new c.c("",[]),category:new c.c("",[c.s.required])}),this.allCategories=[{value:"enroll",label:"Gestor de Submiss\xf5es"},{value:"admin",label:"Administrador"},{value:"system_auditor",label:"Auditor do Sistema"}],this.categories=[this.allCategories[0]],this.permissionsAuditor=[{value:"mailerconfig",label:"Configura\xe7\xe3o Envio E-mail",dependOf:null,breakBefore:!1},{value:"symplaintegrationconfig",label:"Configura\xe7\xe3o Site Sympla",dependOf:null,breakBefore:!1},{value:"itaubankconfig",label:"Configura\xe7\xe3o Pagamento Ita\xfa",dependOf:null,breakBefore:!1},{value:"accountingentry",label:"Lan\xe7amento Caixa",dependOf:null,breakBefore:!1},{value:"applog",label:"Log do Sistema",dependOf:null,breakBefore:!1},{value:"appointmentpage",label:"Evento/Atividade",dependOf:null,breakBefore:!1},{value:"file",label:"Arquivo",dependOf:null,breakBefore:!1},{value:"image",label:"Imagem",dependOf:null,breakBefore:!1},{value:"simplemail",label:"Envio E-mail",dependOf:null,breakBefore:!1},{value:"blogarticle",label:"Artigo Blog",dependOf:null,breakBefore:!0},{value:"blogarticlecomment",label:"Coment\xe1rio Artigo Blog",dependOf:"blogarticle",breakBefore:!1},{value:"pagemenu",label:"Menu",dependOf:null,breakBefore:!0},{value:"pagemenuitem",label:"Item Menu",dependOf:"pagemenu",breakBefore:!1},{value:"pagemenuitemfile",label:"Arquivo Item Menu",dependOf:"pagemenuitem",breakBefore:!1},{value:"user",label:"Pessoas/Usu\xe1rios",dependOf:null,breakBefore:!0},{value:"userpaymentticket",label:"Ticket Pagto. Pessoa/Usu\xe1rio",dependOf:"user",breakBefore:!1}],this.permissionsAdmin=this.permissionsAuditor,this.permissionsExternal=[{value:"simplemail",label:"Envio E-mail",dependOf:null,breakBefore:!1}],this.permissionsEnroll=[{value:"appointmentpage",label:"Evento / Atividade",dependOf:null,breakBefore:!1},{value:"simplemail",label:"Envio E-mail",dependOf:null,breakBefore:!1}],super.ngOnInit()}afterNgOnInit(){this.parameterName="name/email","admin_master"==this.logged.category&&(this.categories=[this.allCategories[1],this.allCategories[2]])}ngOnDestroy(){this.passwordValidationMessage=null,this.categories=null,this.allCategories=null,this.disponiblePermissions=null,this.permissionsAuditor=null,this.permissionsAdmin=null,this.permissionsEnroll=null,this.permissionsExternal=null,this.selectedPermissions=null,super.ngOnDestroy()}setTab(e){super.setTab(e),1==e&&this.adjustPermissions(this.dataForm.value.category)}setObject(e){super.setObject(e),this.dataForm.setValue({name:e.name,email:e.email,password:null,category:e.category}),this.adjustPermissions(e.category)}adjustPermissions(e){if(this.selectedPermissions=[],this.disponiblePermissions=null,!this.emptyString(e)&&(this.disponiblePermissions=this.permissionsEnroll,"system_auditor"==e&&(this.disponiblePermissions=this.permissionsAuditor),"admin"==e&&(this.disponiblePermissions=this.permissionsAdmin),"external"==e&&(this.disponiblePermissions=this.permissionsExternal),null!=this.selectedObject.id&&this.selectedObject.id>0))for(var t=this.selectedObject.permissions.split(","),i=t.length,n=this.disponiblePermissions.length,c=0;c<i;c++)for(var s=0;s<n;s++)if(t[c]==this.disponiblePermissions[s].value||t[c]==this.disponiblePermissions[s].value+"_write"){this.selectedPermissions=[...this.selectedPermissions,t[c]];break}}checkPermission(e){this.selectedPermissions.includes(e)||this.selectedPermissions.unshift(e)}uncheckPermission(e){this.selectedPermissions=this.removeFromArray(this.selectedPermissions,e),"blogarticle"==e&&this.uncheckPermission("blogarticlecomment"),"pagemenu"==e&&this.uncheckPermission("pagemenuitem"),"pagemenuitem"==e&&this.uncheckPermission("pagemenuitemfile"),"user"==e&&this.uncheckPermission("userpaymentticket"),-1==e.indexOf("_write")&&this.uncheckPermission(e+"_write")}makeSelectSearchedItemDestaked(e,t){return e.name=this.makeDestak(e.name,t),e.email=this.makeDestak(e.email,t),e}prepareData(e){return e.categoryLabel=this.getLabelForKey(this.allCategories,e.category),e}prepareToSaveUpdate(e){return e.permissions=this.selectedPermissions.join(","),e}validateFormFields(){return this.errorRequired("name")&&this.addValidationMessage("Nome \xe9 requerido!"),this.errorRequired("category")&&this.addValidationMessage("Categoria/Permiss\xe3o \xe9 requerida!"),this.errorRequired("email")&&this.addValidationMessage("E-mail \xe9 requerido!"),this.errorEmail("email")&&this.addValidationMessage("E-mail deve ser um endere\xe7o de email v\xe1lido!"),!this.inValidationMsgs()}validatePasswordForce(e){if(this.validationMessages=null,this.processValidation=!1,this.passwordValidationMessage=null,!this.emptyString(e)){var t=this.stringService.validatePassword(e,!0);200!=t.code?(this.processValidation=!0,this.addValidationMessage(t.msg)):this.passwordValidationMessage=t}}preValidateToSaveUpdate(e){if(this.passwordValidationMessage=null,this.emptyString(e.email)&&this.addValidationMessage("E-mail \xe9 requerido!"),this.stringService.validateEmail(e.email)||this.addValidationMessage("E-mail deve ser um endere\xe7o de email v\xe1lido!"),!this.emptyString(e.password)){var t=this.stringService.validatePassword(e.password,!1);977!=t.code||this.idObjectEdit>0||this.addValidationMessage(t.msg),200!=t.code&&977!=t.code&&this.addValidationMessage(t.msg)}return!this.inValidationMsgs()}toUserPaymentTickets(e){this.crudService.loadFromCache(e).then(e=>{this.processObjectAndValidationResult(e,!0)&&this.eventEmitterService.get("userpaymenttickets").emit({object:e})})}}return e.\u0275fac=function(t){return new(t||e)(o.Mb(s.g),o.Mb(r.c),o.Mb(s.a),o.Mb(d.a),o.Mb(a.b),o.Mb(a.a),o.Mb(b.c),o.Mb(u.a),o.Mb(m.a),o.Mb(f.a),o.Mb(g.a))},e.\u0275cmp=o.Gb({type:e,selectors:[["user-root"]],features:[o.vb],decls:12,vars:11,consts:[[3,"title","editing","searchForm","auditingExclusions","enabledAuditList","disabledAddNew","onSearchFormSubmitEmitter","listDataEmitter","listDataNoCacheEmitter","auditListEmitter","normalListEmitter","addObjectEmitter"],[3,"ngIf","ngIfElse"],["listObjects",""],["selectedObjectTemplate",""],["objectDetail",""],["objectDeleteConfirmation",""],["objectUnDeleteConfirmation",""],["aria-label","cadastro e altera\xe7\xe3o das pessoas/usu\xe1rios"],[3,"objects","selectedTab","setTabEmitter"],[1,"dataForm",3,"formGroup","ngSubmit"],["label","Nome (*)","titlee","Nome","maxchars","100","forAlphaName","true","formControlName","name","widthPerc","98","ngDefaultControl","",3,"formGroup"],["label","E-mail (**)","titlee","E-mail","maxchars","100","formControlName","email","widthPerc","38","ngDefaultControl","",3,"formGroup"],["label","Senha (**)","titlee","Senha","maxchars","100","forPassword","true","formControlName","password","widthPerc","29","ngDefaultControl","",3,"formGroup","valueChangedEmitter"],["label","Cat./Perm. (*)","titlee","Categoria/Permiss\xe3o","formControlName","category","widthPerc","30","ngDefaultControl","",3,"objects"],[1,"field",2,"width","99%"],[1,"fieldset"],[4,"ngIf"],[1,"clear"],[3,"validationMessages","processValidation","passwordValidationMessage","additionalMsgsInfo","cancelDataEmitter"],[1,"alert","alert-danger"],[1,"fas","fa-exclamation-triangle"],["style","width: 19em; font-size: .95em;",3,"class",4,"ngFor","ngForOf"],[1,"alert","alert-info"],[2,"width","19em","font-size",".95em"],[1,"field",2,"width","1.5em"],["type","checkbox","checked","checked",3,"id","disabled","click",4,"ngIf"],["type","checkbox",3,"id","disabled","click",4,"ngIf"],[1,"field","label",2,"margin-left",".3em","width","calc(98% - 2em)"],[3,"for"],[1,"field",2,"width","1.5em","margin-left","1.5em"],[1,"field","label",2,"margin-left",".3em","width","calc(98% - 3.5em)"],["type","checkbox","checked","checked",3,"id","disabled","click"],["type","checkbox",3,"id","disabled","click"],["aria-label","lista das pessoas/usu\xe1rios"],["class","table","mdbTable","",4,"ngIf"],["mdbTable","",1,"table"],[1,"black","white-text"],["scope","col",2,"width","auto"],["scope","col","title","Categoria/Permiss\xe3o","aria-label","Categoria/Permiss\xe3o",2,"width","10em"],["scope","col","style","width: 11em;",4,"ngIf"],["scope","col","style","width: 5em;",4,"ngIf"],["mdbTableCol","",4,"ngFor","ngForOf","ngForTrackBy"],["colspan","3",1,"navigationBottom"],[3,"pages","selectedPage","previousPageDisabled","nextPageDisabled","rowsPerPage","pageRange","totalPages","totalRows","useAdjustPagination","previousPageEmitter","setPageEmitter","nextPageEmitter","adjustPaginationEmitter"],["scope","col",2,"width","11em"],["scope","col",2,"width","5em"],["mdbTableCol",""],[1,"text"],[1,"text",3,"innerHtml"],[1,"actions"],[1,"buttons"],["class","btn btn-primary clickable","type","button","placement","left","ngbTooltip","Tickets de Evento do Usu\xe1rio","aria-label","Tickets de Evento do Usu\xe1rio",3,"disabled","click",4,"ngIf"],[3,"auditingExclusions","object","logged","noAction","objectDeleteConfirmation","objectUnDeleteConfirmation","objectDetail","lockUnLock","showObjectEmitter","lockEmitter","unlockEmitter","editObjectEmitter","deleteObjectEmitter","unDeleteObjectEmitter"],["type","button","placement","left","ngbTooltip","Tickets de Evento do Usu\xe1rio","aria-label","Tickets de Evento do Usu\xe1rio",1,"btn","btn-primary","clickable",3,"disabled","click"],[1,"far","fa-money-bill-alt"],["scope","row",1,"text",2,"width","11em"],[1,"text","noBorderRight"],["scope","row",1,"text"],["label","Pessoa / Usu\xe1rio","info","true",3,"selectedObject","templateOutlet","cancelDataEmitter"],["label","Pessoa / Usu\xe1rio",3,"selectedObject","auditingExclusions","templateOutlet","confirmDeleteObjectEmitter","cancelDataEmitter"],["label","Pessoa / Usu\xe1rio","redo","true",3,"selectedObject","auditingExclusions","templateOutlet","confirmDeleteObjectEmitter","cancelDataEmitter"]],template:function(e,t){if(1&e&&(o.Rb(0,"form-toolbar",0),o.cc("onSearchFormSubmitEmitter",function(){return t.onSearchFormSubmit()})("listDataEmitter",function(){return t.listData()})("listDataNoCacheEmitter",function(){return t.listDataNoCache()})("auditListEmitter",function(){return t.auditList()})("normalListEmitter",function(){return t.normalList()})("addObjectEmitter",function(){return t.addObject()}),o.Qb(),o.Gc(1,N,16,24,"ng-template",1),o.Gc(2,_,2,1,"ng-template",null,2,o.Hc),o.Gc(4,z,20,4,"ng-template",null,3,o.Hc),o.Gc(6,q,1,2,"ng-template",null,4,o.Hc),o.Gc(8,K,1,3,"ng-template",null,5,o.Hc),o.Gc(10,$,1,3,"ng-template",null,6,o.Hc)),2&e){const e=o.yc(3);o.jc("title",t.title)("editing",t.editing)("searchForm",t.searchForm)("auditingExclusions",t.auditingExclusions)("enabledAuditList",o.oc(8,H).includes(t.logged.category))("disabledAddNew",!(o.oc(9,F).includes(t.logged.category)||o.oc(10,U).includes(t.logged.category)&&t.permissions.includes("user_write"))),o.yb(1),o.jc("ngIf",t.editing)("ngIfElse",e)}},directives:[p.a,n.j,h.a,c.t,c.n,c.g,v.a,c.m,c.e,c.b,y.a,j.a,n.i,k.a,P.a,s.i,E.a],encapsulation:2}),e})()}];let X=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.Kb({type:e}),e.\u0275inj=o.Jb({imports:[[a.c.forChild(W)],a.c]}),e})();var J=i("kS8M");let Z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.Kb({type:e}),e.\u0275inj=o.Jb({imports:[[n.b,c.h,c.q,s.h,X,J.a]]}),e})()},IVaK:function(e,t,i){"use strict";i.d(t,"a",function(){return f});var n=i("fXoL"),c=i("1dEi"),s=i("ofXK"),a=i("1kSV");function l(e,t){1&e&&n.Nb(0,"div",4)}function o(e,t){1&e&&n.Nb(0,"div",5)}function r(e,t){if(1&e){const e=n.Sb();n.Rb(0,"span",13),n.cc("click",function(){n.Ac(e);const t=n.ec().$implicit;return n.ec(2).setTab(t.value)}),n.Qb()}if(2&e){const e=n.ec().$implicit,t=n.ec(2);n.Bb("nav-link ",t.isSelected(e.value)?"active":"",""),n.kc("ngbTooltip",e.title),n.jc("innerHtml",e.label,n.Bc),n.zb("aria-label",e.title)}}function d(e,t){if(1&e){const e=n.Sb();n.Rb(0,"span",14),n.cc("click",function(){n.Ac(e);const t=n.ec().$implicit;return n.ec(2).setTab(t.value)}),n.Qb()}if(2&e){const e=n.ec().$implicit,t=n.ec(2);n.Bb("nav-link ",t.isSelected(e.value)?"active":"",""),n.jc("innerHtml",e.label,n.Bc),n.zb("aria-label",e.title)}}function b(e,t){if(1&e){const e=n.Sb();n.Rb(0,"li",10),n.cc("click",function(t){return n.Ac(e),n.ec(2).stopPropagation(t)}),n.Gc(1,r,1,6,"span",11),n.Gc(2,d,1,5,"span",12),n.Qb()}if(2&e){const e=n.ec(2);n.yb(1),n.jc("ngIf",!e.forWizzard),n.yb(1),n.jc("ngIf",e.forWizzard)}}function u(e,t){if(1&e&&(n.Rb(0,"div",6),n.Rb(1,"ul",7),n.Gc(2,b,3,2,"li",8),n.Qb(),n.Nb(3,"div",9),n.Qb()),2&e){const e=n.ec();n.Bb("field ",e.className,""),n.yb(2),n.jc("ngForOf",e.objects)}}function m(e,t){1&e&&n.Nb(0,"div",15)}let f=(()=>{class e extends c.a{constructor(){super(null),this.setTabEmitter=new n.n}ngOnInit(){super.ngOnInit()}ngOnDestroy(){super.ngOnDestroy(),this.selectedTab=null,this.setTabEmitter=null,this.forWizzard=null}isSelected(e){if(null==this.selectedTab||null==e||""==e.trim())return!1;var t=(""+this.selectedTab).trim();return-1==(e=e.trim()).indexOf("|")?e==t:e.split("|")[1]==t}setTab(e){!this.forWizzard&&this.validateClick()&&this.setTabEmitter.emit(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Gb({type:e,selectors:[["rich-tab-bar"]],inputs:{selectedTab:"selectedTab",forWizzard:"forWizzard"},outputs:{setTabEmitter:"setTabEmitter"},features:[n.vb],decls:4,vars:4,consts:[["class","clear","style","margin-bottom: .3em;",4,"ngIf"],["class","clear","style","margin-bottom: .7em;",4,"ngIf"],["style","width: 100%;",3,"class",4,"ngIf"],["class","clear","style","width: 100%;",4,"ngIf"],[1,"clear",2,"margin-bottom",".3em"],[1,"clear",2,"margin-bottom",".7em"],[2,"width","100%"],[1,"nav","nav-tabs","justify-content-start",2,"margin-left",".5em"],["class","nav-item",3,"click",4,"ngFor","ngForOf"],[1,"clear",2,"margin-bottom",".4em"],[1,"nav-item",3,"click"],["placement","top",3,"class","ngbTooltip","innerHtml","click",4,"ngIf"],[3,"class","innerHtml","click",4,"ngIf"],["placement","top",3,"ngbTooltip","innerHtml","click"],[3,"innerHtml","click"],[1,"clear",2,"width","100%"]],template:function(e,t){1&e&&(n.Gc(0,l,1,0,"div",0),n.Gc(1,o,1,0,"div",1),n.Gc(2,u,4,4,"div",2),n.Gc(3,m,1,0,"div",3)),2&e&&(n.jc("ngIf",t.breakBefore&&!t.breakBeforeDouble&&!t.noRender),n.yb(1),n.jc("ngIf",t.breakBeforeDouble&&!t.noRender),n.yb(1),n.jc("ngIf",!t.noRender),n.yb(1),n.jc("ngIf",!t.noRender))},directives:[s.j,s.i,a.i],encapsulation:2}),e})()},ZEYb:function(e,t,i){"use strict";i.d(t,"a",function(){return O});var n=i("fXoL"),c=i("1dEi"),s=i("3Pt+"),a=i("ofXK"),l=i("1kSV");function o(e,t){1&e&&n.Nb(0,"div",3)}function r(e,t){1&e&&n.Nb(0,"div",4)}function d(e,t){if(1&e){const e=n.Sb();n.Rb(0,"i",14),n.cc("click",function(){return n.Ac(e),n.ec(3).help()}),n.Qb()}if(2&e){const e=n.ec(3);n.kc("ngbTooltip",e.i18n[3][e.language])}}function b(e,t){if(1&e&&(n.Rb(0,"div"),n.Rb(1,"label",12),n.Ic(2),n.Qb(),n.Gc(3,d,1,1,"i",13),n.Qb()),2&e){const e=n.ec(2);n.yb(1),n.kc("for",e.id),n.kc("title",e.titlee),n.zb("aria-label",e.titlee),n.yb(1),n.Kc(" ",e.label," "),n.yb(1),n.jc("ngIf",null!=e.helpMessage&&""!=e.helpMessage.trim())}}function u(e,t){if(1&e&&(n.Rb(0,"div",15),n.Rb(1,"label",16),n.Ic(2),n.Qb(),n.Qb()),2&e){const e=n.ec(2);n.yb(1),n.kc("for",e.id),n.zb("aria-label",e.titlee),n.yb(1),n.Kc(" ",e.labelByPlaceholder," ")}}function m(e,t){if(1&e&&(n.Rb(0,"option",22),n.Ic(1),n.Qb()),2&e){const e=n.ec(3);n.jc("selected",null==e.ngControl.control.value),n.yb(1),n.Kc(" ",e.minusOneLabel," ")}}function f(e,t){if(1&e&&(n.Rb(0,"option",23),n.Ic(1),n.Qb()),2&e){const e=n.ec(3);n.jc("selected",null==e.ngControl.control.value),n.yb(1),n.Kc(" ",e.zeroLabel," ")}}function g(e,t){if(1&e&&(n.Rb(0,"option",24),n.Ic(1),n.Qb()),2&e){const e=n.ec(3);n.jc("selected",null==e.ngControl.control.value),n.yb(1),n.Kc(" ",e.emptyLabel," ")}}function p(e,t){if(1&e&&(n.Rb(0,"option",25),n.Ic(1),n.Qb()),2&e){const e=t.$implicit;n.kc("value",null!=e.id?e.id:e.value),n.yb(1),n.Mc(" ",null!=e.name?e.name:""," ",null==e.name&&null!=e.label?e.label:""," ",null==e.name&&null==e.label&&null!=e.identifier?e.identifier:""," ")}}const h=function(){return{color:"#767676"}},v=function(){return{}};function y(e,t){if(1&e){const e=n.Sb();n.Rb(0,"select",17),n.cc("change",function(){return n.Ac(e),n.ec(2).valueChanged()})("focus",function(){return n.Ac(e),n.ec(2).focused=!0})("blur",function(){return n.Ac(e),n.ec(2).focused=!1}),n.Gc(1,m,2,2,"option",18),n.Gc(2,f,2,2,"option",19),n.Gc(3,g,2,2,"option",20),n.Gc(4,p,2,4,"option",21),n.Qb()}if(2&e){const e=n.ec(2);n.Bb("form-control clickable ",e.className,""),n.Eb("is-invalid",e.isInvalid),n.kc("id",e.id),n.jc("ngStyle",e.empty?n.oc(12,h):n.oc(13,v))("formControl",e.ngControl.control),n.yb(1),n.jc("ngIf",null!=e.minusOneLabel),n.yb(1),n.jc("ngIf",null!=e.zeroLabel),n.yb(1),n.jc("ngIf",null!=e.emptyLabel),n.yb(1),n.jc("ngForOf",e.objects)}}function j(e,t){if(1&e&&n.Nb(0,"input",26),2&e){const e=n.ec(2);n.kc("id",e.id),n.jc("formControl",e.ngControl.control)}}function k(e,t){if(1&e&&n.Nb(0,"input",27),2&e){const e=n.ec(2);n.Bb("form-control ",e.className,""),n.lc("id","",e.id,"_fake"),n.jc("value",e.readOnlyLabel)}}const P=function(e){return{width:e}};function E(e,t){if(1&e&&(n.Rb(0,"div",5),n.Gc(1,b,4,5,"div",6),n.Gc(2,u,3,3,"div",7),n.Gc(3,y,5,14,"select",8),n.Gc(4,j,1,2,"input",9),n.Gc(5,k,1,5,"input",10),n.Nb(6,"div",11),n.Qb()),2&e){const e=n.ec();n.jc("ngStyle",n.pc(6,P,e.widthPerc+"%")),n.yb(1),n.jc("ngIf",null!=e.label),n.yb(1),n.jc("ngIf",null!=e.labelByPlaceholder&&e.focused),n.yb(1),n.jc("ngIf",!e.onlyRead),n.yb(1),n.jc("ngIf",e.onlyRead),n.yb(1),n.jc("ngIf",e.onlyRead)}}let O=(()=>{class e extends c.a{constructor(e){super(e),this.ngControl=e,this.valueChangedEmitter=new n.n}ngOnInit(){super.ngOnInit(),this.empty=!0}ngOnDestroy(){super.ngOnDestroy(),this.valueChangedEmitter=null,this.empty=null}valueChanged(){var e=document.getElementById(this.id);this.empty=["","0","-1",0,-1].includes(e.value),this.valueChangedEmitter.emit(e.value)}}return e.\u0275fac=function(t){return new(t||e)(n.Mb(s.l))},e.\u0275cmp=n.Gb({type:e,selectors:[["rich-input-select"]],outputs:{valueChangedEmitter:"valueChangedEmitter"},features:[n.vb],decls:3,vars:3,consts:[["class","clear","style","margin-bottom: .3em;",4,"ngIf"],["class","clear","style","margin-bottom: .7em;",4,"ngIf"],["class","field",3,"ngStyle",4,"ngIf"],[1,"clear",2,"margin-bottom",".3em"],[1,"clear",2,"margin-bottom",".7em"],[1,"field",3,"ngStyle"],[4,"ngIf"],["class","placeholderLabel",4,"ngIf"],["style","height: calc(1.5em + 0.65rem + 2px);",3,"id","class","ngStyle","is-invalid","formControl","change","focus","blur",4,"ngIf"],["type","text","style","display: none !important;","readonly","true",3,"id","formControl",4,"ngIf"],["type","text","style","width: 100%;","readonly","true",3,"id","class","value",4,"ngIf"],[1,"clear"],[3,"for","title"],["class","far fa-question-circle inputActionIcon","placement","top","tabIndex","0",3,"ngbTooltip","click",4,"ngIf"],["placement","top","tabIndex","0",1,"far","fa-question-circle","inputActionIcon",3,"ngbTooltip","click"],[1,"placeholderLabel"],[3,"for"],[2,"height","calc(1.5em + 0.65rem + 2px)",3,"id","ngStyle","formControl","change","focus","blur"],["value","-1",3,"selected",4,"ngIf"],["value","0",3,"selected",4,"ngIf"],["value","",3,"selected",4,"ngIf"],[3,"value",4,"ngFor","ngForOf"],["value","-1",3,"selected"],["value","0",3,"selected"],["value","",3,"selected"],[3,"value"],["type","text","readonly","true",2,"display","none !important",3,"id","formControl"],["type","text","readonly","true",2,"width","100%",3,"id","value"]],template:function(e,t){1&e&&(n.Gc(0,o,1,0,"div",0),n.Gc(1,r,1,0,"div",1),n.Gc(2,E,7,8,"div",2)),2&e&&(n.jc("ngIf",t.breakBefore&&!t.breakBeforeDouble&&!t.noRender),n.yb(1),n.jc("ngIf",t.breakBeforeDouble&&!t.noRender),n.yb(1),n.jc("ngIf",!t.noRender))},directives:[a.j,a.k,l.i,s.r,s.m,s.d,a.i,s.p,s.u,s.b],encapsulation:2}),e})()}}]);