(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{IVaK:function(e,t,i){"use strict";i.d(t,"a",function(){return f});var n=i("fXoL"),a=i("1dEi"),c=i("ofXK"),r=i("1kSV");function o(e,t){1&e&&n.Nb(0,"div",4)}function s(e,t){1&e&&n.Nb(0,"div",5)}function l(e,t){if(1&e){const e=n.Sb();n.Rb(0,"span",13),n.cc("click",function(){n.Ac(e);const t=n.ec().$implicit;return n.ec(2).setTab(t.value)}),n.Qb()}if(2&e){const e=n.ec().$implicit,t=n.ec(2);n.Bb("nav-link ",t.isSelected(e.value)?"active":"",""),n.kc("ngbTooltip",e.title),n.jc("innerHtml",e.label,n.Bc),n.zb("aria-label",e.title)}}function b(e,t){if(1&e){const e=n.Sb();n.Rb(0,"span",14),n.cc("click",function(){n.Ac(e);const t=n.ec().$implicit;return n.ec(2).setTab(t.value)}),n.Qb()}if(2&e){const e=n.ec().$implicit,t=n.ec(2);n.Bb("nav-link ",t.isSelected(e.value)?"active":"",""),n.jc("innerHtml",e.label,n.Bc),n.zb("aria-label",e.title)}}function d(e,t){if(1&e){const e=n.Sb();n.Rb(0,"li",10),n.cc("click",function(t){return n.Ac(e),n.ec(2).stopPropagation(t)}),n.Gc(1,l,1,6,"span",11),n.Gc(2,b,1,5,"span",12),n.Qb()}if(2&e){const e=n.ec(2);n.yb(1),n.jc("ngIf",!e.forWizzard),n.yb(1),n.jc("ngIf",e.forWizzard)}}function u(e,t){if(1&e&&(n.Rb(0,"div",6),n.Rb(1,"ul",7),n.Gc(2,d,3,2,"li",8),n.Qb(),n.Nb(3,"div",9),n.Qb()),2&e){const e=n.ec();n.Bb("field ",e.className,""),n.yb(2),n.jc("ngForOf",e.objects)}}function m(e,t){1&e&&n.Nb(0,"div",15)}let f=(()=>{class e extends a.a{constructor(){super(null),this.setTabEmitter=new n.n}ngOnInit(){super.ngOnInit()}ngOnDestroy(){super.ngOnDestroy(),this.selectedTab=null,this.setTabEmitter=null,this.forWizzard=null}isSelected(e){if(null==this.selectedTab||null==e||""==e.trim())return!1;var t=(""+this.selectedTab).trim();return-1==(e=e.trim()).indexOf("|")?e==t:e.split("|")[1]==t}setTab(e){!this.forWizzard&&this.validateClick()&&this.setTabEmitter.emit(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Gb({type:e,selectors:[["rich-tab-bar"]],inputs:{selectedTab:"selectedTab",forWizzard:"forWizzard"},outputs:{setTabEmitter:"setTabEmitter"},features:[n.vb],decls:4,vars:4,consts:[["class","clear","style","margin-bottom: .3em;",4,"ngIf"],["class","clear","style","margin-bottom: .7em;",4,"ngIf"],["style","width: 100%;",3,"class",4,"ngIf"],["class","clear","style","width: 100%;",4,"ngIf"],[1,"clear",2,"margin-bottom",".3em"],[1,"clear",2,"margin-bottom",".7em"],[2,"width","100%"],[1,"nav","nav-tabs","justify-content-start",2,"margin-left",".5em"],["class","nav-item",3,"click",4,"ngFor","ngForOf"],[1,"clear",2,"margin-bottom",".4em"],[1,"nav-item",3,"click"],["placement","top",3,"class","ngbTooltip","innerHtml","click",4,"ngIf"],[3,"class","innerHtml","click",4,"ngIf"],["placement","top",3,"ngbTooltip","innerHtml","click"],[3,"innerHtml","click"],[1,"clear",2,"width","100%"]],template:function(e,t){1&e&&(n.Gc(0,o,1,0,"div",0),n.Gc(1,s,1,0,"div",1),n.Gc(2,u,4,4,"div",2),n.Gc(3,m,1,0,"div",3)),2&e&&(n.jc("ngIf",t.breakBefore&&!t.breakBeforeDouble&&!t.noRender),n.yb(1),n.jc("ngIf",t.breakBeforeDouble&&!t.noRender),n.yb(1),n.jc("ngIf",!t.noRender),n.yb(1),n.jc("ngIf",!t.noRender))},directives:[c.j,c.i,r.i],encapsulation:2}),e})()},OR8O:function(e,t,i){"use strict";i.r(t),i.d(t,"TtematicsubareaModule",function(){return H});var n=i("ofXK"),a=i("3Pt+"),c=i("1kSV"),r=i("tmjD"),o=i("tyNb"),s=i("kYp3"),l=i("fXoL"),b=i("JqCM"),d=i("tk/3"),u=i("jhN1"),m=i("dlU0"),f=i("bZwt"),g=i("ONAA"),h=i("1tD9"),p=i("zT7k"),v=i("IVaK"),j=i("ZMR0"),I=i("fFX4"),y=i("n/9U"),E=i("fcMv"),O=i("Ca8N"),T=i("/eUb");function A(e,t){if(1&e){const e=l.Sb();l.Rb(0,"section",7),l.Rb(1,"rich-tab-bar",8),l.cc("setTabEmitter",function(t){return l.Ac(e),l.ec().setTab(t)}),l.Qb(),l.Rb(2,"form",9),l.cc("ngSubmit",function(){return l.Ac(e),l.ec().onObjectFormSubmit()}),l.Rb(3,"div"),l.Nb(4,"rich-input-text",10),l.Nb(5,"div",11),l.Qb(),l.Rb(6,"div"),l.Nb(7,"rich-editor",12),l.Nb(8,"div",11),l.Qb(),l.Rb(9,"form-action",13),l.cc("cancelDataEmitter",function(){return l.Ac(e),l.ec().cancelData()}),l.Qb(),l.Qb(),l.Qb()}if(2&e){const e=l.ec();l.yb(1),l.jc("objects",e.tabObjects)("selectedTab",e.tab),l.yb(1),l.jc("formGroup",e.dataForm),l.yb(1),l.Ab(0==e.tab?"":"none"),l.yb(1),l.jc("formGroup",e.dataForm),l.yb(2),l.Ab(1==e.tab?"":"none"),l.yb(1),l.jc("formGroup",e.dataForm),l.yb(2),l.jc("validationMessages",e.validationMessages)("processValidation",e.processValidation)}}function R(e,t){1&e&&(l.Rb(0,"th",24),l.Ic(1," A\xe7\xf5es "),l.Qb())}function D(e,t){1&e&&(l.Rb(0,"th",25),l.Ic(1," A\xe7\xf5es "),l.Qb())}const S=function(){return["admin_master"]},k=function(){return["admin"]};function w(e,t){if(1&e){const e=l.Sb();l.Rb(0,"tr",26),l.Nb(1,"td",27),l.Rb(2,"td",28),l.Rb(3,"div",29),l.Rb(4,"edit-delete-action",30),l.cc("editObjectEmitter",function(t){return l.Ac(e),l.ec(3).editObject(t)})("showObjectEmitter",function(t){return l.Ac(e),l.ec(3).showObject(t)})("deleteObjectEmitter",function(t){return l.Ac(e),l.ec(3).deleteObject(t)})("unDeleteObjectEmitter",function(t){return l.Ac(e),l.ec(3).unDeleteObject(t)}),l.Qb(),l.Qb(),l.Qb(),l.Qb()}if(2&e){const e=t.$implicit,i=l.ec(3),n=l.yc(7),a=l.yc(9),c=l.yc(11);l.yb(1),l.jc("innerHtml",e.a1_name,l.Bc),l.yb(3),l.jc("auditingExclusions",i.auditingExclusions)("object",e)("logged",i.logged)("noAction",!(l.oc(8,S).includes(i.logged.category)||l.oc(9,k).includes(i.logged.category)&&i.permissions.includes("appointmentpage_write")))("objectDetail",n)("objectDeleteConfirmation",a)("objectUnDeleteConfirmation",c)}}function x(e,t){if(1&e){const e=l.Sb();l.Rb(0,"table",16),l.Rb(1,"thead",17),l.Rb(2,"tr"),l.Rb(3,"th",18),l.Ic(4," Identifica\xe7\xe3o "),l.Qb(),l.Gc(5,R,2,0,"th",19),l.Gc(6,D,2,0,"th",20),l.Qb(),l.Qb(),l.Rb(7,"tbody"),l.Gc(8,w,5,10,"tr",21),l.Rb(9,"tr"),l.Rb(10,"td",22),l.Rb(11,"table-navigator",23),l.cc("previousPageEmitter",function(){return l.Ac(e),l.ec(2).previousPage()})("setPageEmitter",function(t){return l.Ac(e),l.ec(2).setPage(t)})("nextPageEmitter",function(){return l.Ac(e),l.ec(2).nextPage()})("adjustPaginationEmitter",function(t){return l.Ac(e),l.ec(2).adjustPagination(t)}),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Qb()}if(2&e){const e=l.ec(2);l.yb(5),l.jc("ngIf",!e.auditingExclusions),l.yb(1),l.jc("ngIf",e.auditingExclusions),l.yb(2),l.jc("ngForOf",e.objects)("ngForTrackBy",e.trackById),l.yb(3),l.jc("pages",e.pages)("selectedPage",e.selectedPage)("previousPageDisabled",e.previousPageDisabled)("nextPageDisabled",e.nextPageDisabled)("rowsPerPage",e.rowsPerPage)("pageRange",e.pageRange)("totalPages",e.totalPages)("totalRows",e.totalRows)("useAdjustPagination",!0)}}function C(e,t){if(1&e&&(l.Rb(0,"section",14),l.Gc(1,x,12,13,"table",15),l.Qb()),2&e){const e=l.ec();l.yb(1),l.jc("ngIf",e.objects)}}function Q(e,t){if(1&e&&(l.Rb(0,"tr"),l.Rb(1,"th",31),l.Ic(2," Ident.: "),l.Qb(),l.Nb(3,"td",32),l.Qb(),l.Rb(4,"tr"),l.Rb(5,"th",33),l.Ic(6," Desc.: "),l.Qb(),l.Nb(7,"td",32),l.Qb()),2&e){const e=l.ec();l.yb(3),l.jc("innerHtml",e.selectedObject.a1_name,l.Bc),l.yb(4),l.jc("innerHtml",e.selectedObject.a2_description,l.Bc)}}function P(e,t){if(1&e){const e=l.Sb();l.Rb(0,"delete-confirmation",34),l.cc("cancelDataEmitter",function(){return l.Ac(e),l.ec().showObject()}),l.Qb()}if(2&e){const e=l.ec(),t=l.yc(5);l.jc("selectedObject",e.selectedObject)("templateOutlet",t)}}function M(e,t){if(1&e){const e=l.Sb();l.Rb(0,"delete-confirmation",35),l.cc("confirmDeleteObjectEmitter",function(t){return l.Ac(e),l.ec().confirmDeleteObject(t)})("cancelDataEmitter",function(){return l.Ac(e),l.ec().cancelData()}),l.Qb()}if(2&e){const e=l.ec(),t=l.yc(5);l.jc("selectedObject",e.selectedObject)("auditingExclusions",e.auditingExclusions)("templateOutlet",t)}}function _(e,t){if(1&e){const e=l.Sb();l.Rb(0,"delete-confirmation",36),l.cc("confirmDeleteObjectEmitter",function(t){return l.Ac(e),l.ec().confirmUnDeleteObject(t)})("cancelDataEmitter",function(){return l.Ac(e),l.ec().cancelData()}),l.Qb()}if(2&e){const e=l.ec(),t=l.yc(5);l.jc("selectedObject",e.selectedObject)("auditingExclusions",e.auditingExclusions)("templateOutlet",t)}}const G=function(){return["admin_master","admin","system_auditor"]},N=[{path:"",component:(()=>{class e extends s.a{constructor(e,t,i,n,a,c,r,o,s,l,b){super(e,t,i,n,a,c,r,o,s,l,b)}ngOnInit(){this.setInitializationServices(["tematicsubarea"]),this.crudService=this.ttematicsubareaService,this.tematicArea=this.storageService.get()[0],this.storageService.localStorageSetItem("_tematicAreaId_"+this.getAppId(),this.tematicArea.id,!1),this.sucessErrorMessages={200:"Sub Area Tem\xe1tica adicionada com sucesso.",201:"Sub Area Tem\xe1tica alterada com sucesso.",204:"Sub Area Tem\xe1tica exclu&iacute;da com sucesso.",207:"Sub Area Tem\xe1tica restaurada com sucesso.",208:"Sub Area Tem\xe1tica exclu&iacute;da [PERMANENTE] com sucesso."},this.tabObjects=[{value:"0",label:"Dados Gerais (*)",title:"Dados Gerais"},{value:"1",label:"Desc.",title:"Descricao"}],this.listTitle="Sub Area Tem\xe1ticas",this.addTitle="Adicionar Sub Area Tem\xe1tica",this.editTitle="Editar Sub Area Tem\xe1tica",this.dataForm=new a.f({a1_name:new a.c("",[a.s.required]),a2_description:new a.c("",[])}),super.ngOnInit()}afterNgOnInit(){this.parameterName="a1_name|type:string"}ngOnDestroy(){this.storageService.localStorageRemoveItem("_tematicAreaId_"+this.getAppId()),this.tabObjects=null,this.tematicArea=null,super.ngOnDestroy()}getAdditionalConditions(){return" xoo a3_tematicareaid = "+this.tematicArea.id+" "+super.getAdditionalConditions()}setObject(e){super.setObject(e),this.dataForm.setValue({a1_name:e.a1_name,a2_description:e.a2_description})}prepareToSaveUpdate(e){return e.a3_tematicareaid=this.tematicArea.id,e}makeSelectSearchedItemDestaked(e,t){return e.a1_name=this.makeDestak(e.a1_name,t),e}validateFormFields(){return this.errorRequired("a1_name")&&this.addValidationMessage("Identifica&ccedil;&atilde;o &eacute; requerida!"),!this.inValidationMsgs()}preValidateToSaveUpdate(e){return this.emptyObject(this.tematicArea)&&this.addValidationMessage("Area Tem\xe1tica &eacute; requerida!"),!this.inValidationMsgs()}backToOrigin(){this.storageService.clear(),this.eventEmitterService.get("tematicareas").emit({})}patchValue(e,t){"a1_name"==e&&this.dataForm.patchValue({a1_name:t}),"a2_description"==e&&this.dataForm.patchValue({a2_description:t})}}return e.\u0275fac=function(t){return new(t||e)(l.Mb(c.g),l.Mb(b.c),l.Mb(c.a),l.Mb(d.a),l.Mb(o.b),l.Mb(o.a),l.Mb(u.c),l.Mb(m.a),l.Mb(f.a),l.Mb(g.a),l.Mb(h.a))},e.\u0275cmp=l.Gb({type:e,selectors:[["ttematicsubarea-root"]],features:[l.vb],decls:12,vars:12,consts:[[3,"title","editing","searchForm","auditingExclusions","enabledAuditList","disabledAddNew","backToOrigin","onSearchFormSubmitEmitter","listDataEmitter","listDataNoCacheEmitter","auditListEmitter","normalListEmitter","addObjectEmitter","backToOriginEmitter"],[3,"ngIf","ngIfElse"],["listObjects",""],["selectedObjectTemplate",""],["objectDetail",""],["objectDeleteConfirmation",""],["objectUnDeleteConfirmation",""],["aria-label","cadastro e alteracao de Sub Areas Tem\xe1ticas",1,"dataForm"],[3,"objects","selectedTab","setTabEmitter"],[3,"formGroup","ngSubmit"],["label","Identifica\xe7\xe3o (*)","titlee","Identifica\xe7\xe3o","maxchars","250","formControlName","a1_name","widthPerc","100","placeholderr","","ngDefaultControl","",3,"formGroup"],[1,"clear"],["formControlName","a2_description","ngDefaultControl","",3,"formGroup"],[3,"validationMessages","processValidation","cancelDataEmitter"],["aria-label","lista das Sub Area Tem\xe1ticas"],["class","table","mdbTable","",4,"ngIf"],["mdbTable","",1,"table"],[1,"black","white-text"],["scope","col","title","Identifica\xe7\xe3o","aria-label","Identifica\xe7\xe3o",2,"width","auto"],["scope","col","style","width: 7em;",4,"ngIf"],["scope","col","style","width: 5em;",4,"ngIf"],["mdbTableCol","",4,"ngFor","ngForOf","ngForTrackBy"],["colspan","2",1,"navigationBottom"],[3,"pages","selectedPage","previousPageDisabled","nextPageDisabled","rowsPerPage","pageRange","totalPages","totalRows","useAdjustPagination","previousPageEmitter","setPageEmitter","nextPageEmitter","adjustPaginationEmitter"],["scope","col",2,"width","7em"],["scope","col",2,"width","5em"],["mdbTableCol",""],[1,"text",3,"innerHtml"],[1,"actions"],[1,"buttons"],[3,"auditingExclusions","object","logged","noAction","objectDetail","objectDeleteConfirmation","objectUnDeleteConfirmation","editObjectEmitter","showObjectEmitter","deleteObjectEmitter","unDeleteObjectEmitter"],["scope","row","title","Identifica\xe7\xe3o","aria-label","Identifica\xe7\xe3o",1,"text",2,"width","12em"],[1,"text","noBorderRight",3,"innerHtml"],["scope","row","title","Descri\xe7\xe3o","aria-label","Descri\xe7\xe3o",1,"text"],["label","da Sub Area Tem\xe1tica","info","true",3,"selectedObject","templateOutlet","cancelDataEmitter"],["label","Sub Area Tem\xe1tica",3,"selectedObject","auditingExclusions","templateOutlet","confirmDeleteObjectEmitter","cancelDataEmitter"],["label","Sub Area Tem\xe1tica","redo","true",3,"selectedObject","auditingExclusions","templateOutlet","confirmDeleteObjectEmitter","cancelDataEmitter"]],template:function(e,t){if(1&e&&(l.Rb(0,"form-toolbar",0),l.cc("onSearchFormSubmitEmitter",function(){return t.onSearchFormSubmit()})("listDataEmitter",function(){return t.listData()})("listDataNoCacheEmitter",function(){return t.listDataNoCache()})("auditListEmitter",function(){return t.auditList()})("normalListEmitter",function(){return t.normalList()})("addObjectEmitter",function(){return t.addObject()})("backToOriginEmitter",function(){return t.backToOrigin()}),l.Qb(),l.Gc(1,A,10,13,"ng-template",1),l.Gc(2,C,2,1,"ng-template",null,2,l.Hc),l.Gc(4,Q,8,2,"ng-template",null,3,l.Hc),l.Gc(6,P,1,2,"ng-template",null,4,l.Hc),l.Gc(8,M,1,3,"ng-template",null,5,l.Hc),l.Gc(10,_,1,3,"ng-template",null,6,l.Hc)),2&e){const e=l.yc(3);l.jc("title",t.title)("editing",t.editing)("searchForm",t.searchForm)("auditingExclusions",t.auditingExclusions)("enabledAuditList",l.oc(9,G).includes(t.logged.category))("disabledAddNew",!(l.oc(10,S).includes(t.logged.category)||l.oc(11,k).includes(t.logged.category)&&t.permissions.includes("appointmentpage_write")))("backToOrigin",!0),l.yb(1),l.jc("ngIf",t.editing)("ngIfElse",e)}},directives:[p.a,n.j,v.a,a.t,a.n,a.g,j.a,a.m,a.e,a.b,I.a,y.a,n.i,E.a,O.a,T.a],encapsulation:2}),e})()}];let F=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.Kb({type:e}),e.\u0275inj=l.Jb({imports:[[o.c.forChild(N)],o.c]}),e})();var B=i("kS8M");let H=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.Kb({type:e}),e.\u0275inj=l.Jb({imports:[[n.b,a.h,a.q,c.h,r.a.forRoot(),F,B.a]]}),e})()},fFX4:function(e,t,i){"use strict";i.d(t,"a",function(){return p});var n=i("1dEi"),a=i("fCXb"),c=i("fXoL"),r=i("3Pt+"),o=i("ofXK"),s=i("1kSV");function l(e,t){1&e&&c.Nb(0,"div",3)}function b(e,t){1&e&&c.Nb(0,"div",4)}function d(e,t){if(1&e){const e=c.Sb();c.Rb(0,"i",14),c.cc("click",function(){return c.Ac(e),c.ec(3).help()}),c.Qb()}if(2&e){const e=c.ec(3);c.kc("ngbTooltip",e.i18n[3][e.language])}}function u(e,t){if(1&e&&(c.Rb(0,"div"),c.Rb(1,"label",12),c.Ic(2),c.Qb(),c.Gc(3,d,1,1,"i",13),c.Qb()),2&e){const e=c.ec(2);c.yb(1),c.kc("for",e.id),c.kc("title",e.titlee),c.zb("aria-label",e.titlee),c.yb(1),c.Kc(" ",e.label," "),c.yb(1),c.jc("ngIf",null!=e.helpMessage&&""!=e.helpMessage.trim())}}function m(e,t){1&e&&c.Nb(0,"div",11)}function f(e,t){if(1&e&&(c.Rb(0,"div",15),c.Nb(1,"div",16),c.Nb(2,"div",17),c.Qb()),2&e){const e=c.ec(2);c.Ab(e.onlyRead?"none":""),c.yb(1),c.lc("id","indicatorError_",e.id,""),c.yb(1),c.lc("id","indicatorInfo_",e.id,"")}}const g=function(e){return{width:e}};function h(e,t){if(1&e&&(c.Rb(0,"div",5),c.Gc(1,u,4,5,"div",6),c.Rb(2,"div"),c.Rb(3,"textarea",7),c.Ic(4,"\t    "),c.Qb(),c.Rb(5,"textarea",8),c.Ic(6,"\t\t"),c.Qb(),c.Qb(),c.Gc(7,m,1,0,"div",9),c.Gc(8,f,3,5,"div",10),c.Nb(9,"div",11),c.Qb()),2&e){const e=c.ec();c.jc("ngStyle",c.pc(12,g,e.widthPerc+"%")),c.yb(1),c.jc("ngIf",null!=e.label),c.yb(1),c.Cb("fieldset angular-editor-container ",e.className," ",e.isInvalid?"is-invalid":"",""),c.yb(1),c.kc("id",e.id),c.jc("formControl",e.ngControl.control),c.yb(2),c.kc("id",e.editorId),c.jc("placeholder",e.placeholderr),c.yb(2),c.jc("ngIf",e.minchars>0||e.maxchars>0),c.yb(1),c.jc("ngIf",e.minchars>0||e.maxchars>0)}}let p=(()=>{class e extends n.a{constructor(e){super(e),this.ngControl=e,this.stringService=new a.a}ngOnInit(){super.ngOnInit(),this.editorId=this.formControlName+"_richeditor"}ngOnDestroy(){this.stopInterval();try{tinymce.remove(this.editor)}catch(e){}this.editor=null,this.editorId=null,this.oldValue=null,this.secureMode=null,this.mobile=null,this.stringService=null,this.counter=0,super.ngOnDestroy()}ngAfterViewInit(){var e=this;tinymce.init({readonly:e.onlyRead?1:0,selector:"#"+e.editorId,theme:e.mobile?"mobile":"silver",plugins:e.getPlugins(),toolbar:e.getButtons(),menubar:!1,convert_urls:0,remove_script_host:0,setup:t=>{e.editor=t,t.on("init",()=>{e.initializeEditor()}),t.on("keyup",()=>{e.setContent(t.getContent())}),t.on("change",()=>{e.setContent(t.getContent())}),t.on("blur",()=>{e.subCounter(),e.setContent(t.getContent()),setTimeout(()=>{e.startInterval()},2e3)}),t.on("mouseleave",()=>{e.subCounter(),setTimeout(()=>{e.startInterval()},2e3)}),t.on("focus",()=>{e.stopInterval(),e.addCounter()}),t.on("mouseenter",()=>{e.stopInterval(),e.addCounter()})}})}getPlugins(){return this.secureMode?"lists, fullscreen":"lists, link, image, media, code, fullscreen"}getButtons(){var e="h1 h2 h3 h4 h5 h6 | bold italic underline ";return e+="| justifyleft justifycenter justifyright justifyfull ",(e+="| bullist numlist | forecolor backcolor ")+(this.secureMode?"| removeformat fullscreen":"| link image media | removeformat code fullscreen")}addCounter(){this.counter++}subCounter(){this.counter--}initializeEditor(){null==this.editor&&setTimeout(()=>{this.initializeEditor()},100),this.startInterval()}startInterval(){null!=this.interval||this.counter>0||(this.interval=setInterval(()=>{this.readToEditor()},500))}stopInterval(){null!=this.interval&&(clearInterval(this.interval),this.interval=null)}readToEditor(){if(null!=this.formGroup){var e=this.formGroup.value[this.formControlName];null==e&&(e=""),e.trim()!=this.oldValue&&(this.oldValue=e.trim(),this.adjustIndicator(e),this.editor.setContent(e),this.editor.contenteditable=!this.onlyRead,this.editor.getBody().style.backgroundColor=this.onlyRead?"#d0dde2":"#fff")}else this.stopInterval()}setContent(e){this.adjustIndicator(e),super.setContent(e)}adjustIndicator(e){var t=document.getElementById("indicatorError_"+this.id),i=document.getElementById("indicatorInfo_"+this.id);if(null!=t&&null!=i&&(t.innerHTML="",i.innerHTML="",this.minchars>0||this.maxchars>0)){var n=this.stringService.countSimpleChars(e),a=this.stringService.countWords(e),c="<br/>=> "+this.i18n[64][this.language]+" = "+a+" "+this.i18n[81][this.language]+".";this.minchars>0&&n<this.minchars?t.innerHTML="Aten\xe7\xe3o: Tamanho ["+n+"] menor que o m\xednimo ["+this.minchars+"]."+c:this.maxchars>0&&n>this.maxchars?t.innerHTML="Aten\xe7\xe3o: Tamanho ["+n+"] maior que o m\xe1ximo ["+this.maxchars+"]."+c:i.innerHTML="Ok: Tamanho ["+n+"] adequado ao intervalo m\xednimo/m\xe1ximo."+c}}}return e.\u0275fac=function(t){return new(t||e)(c.Mb(r.l))},e.\u0275cmp=c.Gb({type:e,selectors:[["rich-editor"]],inputs:{secureMode:"secureMode",mobile:"mobile"},features:[c.vb],decls:3,vars:3,consts:[["class","clear","style","margin-bottom: .3em;",4,"ngIf"],["class","clear","style","margin-bottom: .7em;",4,"ngIf"],["class","field",3,"ngStyle",4,"ngIf"],[1,"clear",2,"margin-bottom",".3em"],[1,"clear",2,"margin-bottom",".7em"],[1,"field",3,"ngStyle"],[4,"ngIf"],[1,"none",3,"id","formControl"],[3,"id","placeholder"],["class","clear",4,"ngIf"],["style","min-height: 2em;",3,"class",4,"ngIf"],[1,"clear"],[3,"for","title"],["class","far fa-question-circle inputActionIcon","placement","top","tabIndex","0",3,"ngbTooltip","click",4,"ngIf"],["placement","top","tabIndex","0",1,"far","fa-question-circle","inputActionIcon",3,"ngbTooltip","click"],[2,"min-height","2em"],[2,"background-color","#f75a36","border-radius",".3em","color","#fff","padding-left","1em",3,"id"],[2,"background-color","#3e7335","border-radius",".3em","color","#fff","padding-left","1em",3,"id"]],template:function(e,t){1&e&&(c.Gc(0,l,1,0,"div",0),c.Gc(1,b,1,0,"div",1),c.Gc(2,h,10,14,"div",2)),2&e&&(c.jc("ngIf",t.breakBefore&&!t.breakBeforeDouble&&!t.noRender),c.yb(1),c.jc("ngIf",t.breakBeforeDouble&&!t.noRender),c.yb(1),c.jc("ngIf",!t.noRender))},directives:[o.j,o.k,r.b,r.m,r.d,s.i],encapsulation:2}),e})()}}]);