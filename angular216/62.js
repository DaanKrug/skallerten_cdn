(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{UeiL:function(e,t,i){"use strict";i.r(t),i.d(t,"ConferenceactivityconferencistModule",function(){return _});var c=i("ofXK"),n=i("3Pt+"),a=i("1kSV"),o=i("tmjD"),r=i("tyNb"),s=i("kYp3"),l=i("fXoL"),b=i("JqCM"),d=i("tk/3"),u=i("jhN1"),m=i("dlU0"),g=i("bZwt"),p=i("ONAA"),f=i("1tD9"),E=i("zT7k"),j=i("fcMv"),h=i("Ca8N"),O=i("/eUb");function P(e,t){1&e&&(l.Rb(0,"th",20),l.Ic(1," A\xe7\xf5es "),l.Qb())}function y(e,t){1&e&&(l.Rb(0,"th",21),l.Ic(1," A\xe7\xf5es "),l.Qb())}const v=function(){return["admin_master"]},A=function(){return["admin"]};function D(e,t){if(1&e){const e=l.Sb();l.Rb(0,"tr",22),l.Nb(1,"td",23),l.Nb(2,"td",23),l.Nb(3,"td",23),l.Rb(4,"td",24),l.Rb(5,"div",25),l.Rb(6,"edit-delete-action",26),l.cc("lockEmitter",function(t){return l.Ac(e),l.ec(3).lock(t)})("unlockEmitter",function(t){return l.Ac(e),l.ec(3).unlock(t)})("showObjectEmitter",function(t){return l.Ac(e),l.ec(3).showObject(t)})("deleteObjectEmitter",function(t){return l.Ac(e),l.ec(3).deleteObject(t)})("unDeleteObjectEmitter",function(t){return l.Ac(e),l.ec(3).unDeleteObject(t)}),l.Qb(),l.Qb(),l.Qb(),l.Qb()}if(2&e){const e=t.$implicit,i=l.ec(3),c=l.yc(6),n=l.yc(8),a=l.yc(10);l.yb(1),l.jc("innerHtml",e.a1_name,l.Bc),l.yb(1),l.jc("innerHtml",e.a2_email,l.Bc),l.yb(1),l.jc("innerHtml",e.activeLabel,l.Bc),l.yb(3),l.jc("auditingExclusions",i.auditingExclusions)("object",e)("logged",i.logged)("noEdit",!0)("noAction",!(l.oc(12,v).includes(i.logged.category)||l.oc(13,A).includes(i.logged.category)&&i.permissions.includes("appointmentpage_write")))("lockUnLock",!0)("objectDetail",c)("objectDeleteConfirmation",n)("objectUnDeleteConfirmation",a)}}function R(e,t){1&e&&(l.Rb(0,"tr"),l.Rb(1,"td",27),l.Rb(2,"span"),l.Rb(3,"em"),l.Ic(4,"Nenhum Participante Cadastrado/Encontrado para a Atividade Especial"),l.Qb(),l.Qb(),l.Qb(),l.Qb())}function w(e,t){if(1&e){const e=l.Sb();l.Rb(0,"table",9),l.Rb(1,"thead",10),l.Rb(2,"tr"),l.Rb(3,"th",11),l.Ic(4," Nome "),l.Qb(),l.Rb(5,"th",12),l.Ic(6," E-mail "),l.Qb(),l.Rb(7,"th",13),l.Ic(8," Part. "),l.Qb(),l.Gc(9,P,2,0,"th",14),l.Gc(10,y,2,0,"th",15),l.Qb(),l.Qb(),l.Rb(11,"tbody"),l.Gc(12,D,7,14,"tr",16),l.Gc(13,R,5,0,"tr",17),l.Rb(14,"tr"),l.Rb(15,"td",18),l.Rb(16,"table-navigator",19),l.cc("previousPageEmitter",function(){return l.Ac(e),l.ec(2).previousPage()})("setPageEmitter",function(t){return l.Ac(e),l.ec(2).setPage(t)})("nextPageEmitter",function(){return l.Ac(e),l.ec(2).nextPage()})("adjustPaginationEmitter",function(t){return l.Ac(e),l.ec(2).adjustPagination(t)}),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Qb()}if(2&e){const e=l.ec(2);l.yb(9),l.jc("ngIf",!e.auditingExclusions),l.yb(1),l.jc("ngIf",e.auditingExclusions),l.yb(2),l.jc("ngForOf",e.objects)("ngForTrackBy",e.trackById),l.yb(1),l.jc("ngIf",e.emptyArray(e.objects)),l.yb(3),l.jc("pages",e.pages)("selectedPage",e.selectedPage)("previousPageDisabled",e.previousPageDisabled)("nextPageDisabled",e.nextPageDisabled)("rowsPerPage",e.rowsPerPage)("pageRange",e.pageRange)("totalPages",e.totalPages)("totalRows",e.totalRows)("useAdjustPagination",!0)}}function k(e,t){if(1&e&&(l.Rb(0,"section",7),l.Gc(1,w,17,14,"table",8),l.Qb()),2&e){const e=l.ec();l.yb(1),l.jc("ngIf",e.objects)}}function x(e,t){if(1&e&&(l.Rb(0,"tr"),l.Rb(1,"th",28),l.Ic(2," Nome: "),l.Qb(),l.Nb(3,"td",29),l.Qb(),l.Rb(4,"tr"),l.Rb(5,"th",30),l.Ic(6," E-mail: "),l.Qb(),l.Nb(7,"td",29),l.Qb(),l.Rb(8,"tr"),l.Rb(9,"th",31),l.Ic(10," Participou: "),l.Qb(),l.Nb(11,"td",29),l.Qb()),2&e){const e=l.ec();l.yb(3),l.jc("innerHtml",e.selectedObject.a1_name,l.Bc),l.yb(4),l.jc("innerHtml",e.selectedObject.a2_email,l.Bc),l.yb(4),l.jc("innerHtml",e.selectedObject.activeLabel,l.Bc)}}function Q(e,t){if(1&e){const e=l.Sb();l.Rb(0,"delete-confirmation",32),l.cc("cancelDataEmitter",function(){return l.Ac(e),l.ec().showObject()}),l.Qb()}if(2&e){const e=l.ec(),t=l.yc(4);l.jc("selectedObject",e.selectedObject)("templateOutlet",t)}}function N(e,t){if(1&e){const e=l.Sb();l.Rb(0,"delete-confirmation",33),l.cc("confirmDeleteObjectEmitter",function(t){return l.Ac(e),l.ec().confirmDeleteObject(t)})("cancelDataEmitter",function(){return l.Ac(e),l.ec().cancelData()}),l.Qb()}if(2&e){const e=l.ec(),t=l.yc(4);l.jc("selectedObject",e.selectedObject)("auditingExclusions",e.auditingExclusions)("templateOutlet",t)}}function I(e,t){if(1&e){const e=l.Sb();l.Rb(0,"delete-confirmation",34),l.cc("confirmDeleteObjectEmitter",function(t){return l.Ac(e),l.ec().confirmUnDeleteObject(t)})("cancelDataEmitter",function(){return l.Ac(e),l.ec().cancelData()}),l.Qb()}if(2&e){const e=l.ec(),t=l.yc(4);l.jc("selectedObject",e.selectedObject)("auditingExclusions",e.auditingExclusions)("templateOutlet",t)}}const S=function(){return["admin_master","admin","system_auditor"]},C=[{path:"",component:(()=>{class e extends s.a{constructor(e,t,i,c,n,a,o,r,s,l,b){super(e,t,i,c,n,a,o,r,s,l,b)}ngOnInit(){this.setInitializationServices(["conferenceactivityconferencist","appointmentpage"]),this.crudService=this.conferenceactivityconferencistService,this.conferenceActivity=this.storageService.get()[0],this.sucessErrorMessages={2010:"Participante Atividade Especial des-confirmado participa\xe7\xe3o com sucesso.",2011:"Participante Atividade Especial confirmado participa\xe7\xe3o com sucesso.",204:"Participante Atividade Especial exclu&iacute;do com sucesso.",207:"Participante Atividade Especial restaurado com sucesso.",208:"Participante Atividade Especial exclu&iacute;do [PERMANENTE] com sucesso."},this.listTitle="Participantes Atividade Especial",this.dataForm=new n.f({}),super.ngOnInit()}afterNgOnInit(){this.parameterName="a1_name|type:string/a2_email|type:string"}ngOnDestroy(){this.conferenceActivity=null,super.ngOnDestroy()}getAdditionalConditions(){return" xoo a4_conferenceactivityid = "+this.conferenceActivity.id+" "+super.getAdditionalConditions()}prepareData(e){return e.alreadyPrepared||(e.activeLabel=["true",1,!0].includes(e.active)?"Sim":"N\xe3o",e.alreadyPrepared=!0),e}makeSelectSearchedItemDestaked(e,t){return e.a1_name=this.makeDestak(e.a1_name,t),e.a2_email=this.makeDestak(e.a2_email,t),e}backToOrigin(){this.crudService.getStorageService().clear(),this.appointmentPageService.load(this.conferenceActivity.a8_appointmentpageid).then(e=>{this.processObjectAndValidationResult(e,!0)&&this.eventEmitterService.get("conferenceactivitys").emit({object:e})})}}return e.\u0275fac=function(t){return new(t||e)(l.Mb(a.g),l.Mb(b.c),l.Mb(a.a),l.Mb(d.a),l.Mb(r.b),l.Mb(r.a),l.Mb(u.c),l.Mb(m.a),l.Mb(g.a),l.Mb(p.a),l.Mb(f.a))},e.\u0275cmp=l.Gb({type:e,selectors:[["conferenceactivityconferencist-root"]],features:[l.vb],decls:11,vars:9,consts:[[3,"title","editing","searchForm","auditingExclusions","enabledAuditList","disabledAddNew","backToOrigin","onSearchFormSubmitEmitter","listDataEmitter","listDataNoCacheEmitter","auditListEmitter","normalListEmitter","addObjectEmitter","backToOriginEmitter"],[3,"ngIf"],["listObjects",""],["selectedObjectTemplate",""],["objectDetail",""],["objectDeleteConfirmation",""],["objectUnDeleteConfirmation",""],["aria-label","lista dos Participantes da Atividade Especial"],["class","table","mdbTable","",4,"ngIf"],["mdbTable","",1,"table"],[1,"black","white-text"],["scope","col","title","Nome","aria-label","Nome",2,"width","auto"],["scope","col","title","E-mail","aria-label","E-mail",2,"width","12rem"],["scope","col","title","Participou","aria-label","Participou",2,"width","4rem"],["scope","col","style","width: 9em;",4,"ngIf"],["scope","col","style","width: 5em;",4,"ngIf"],["mdbTableCol","",4,"ngFor","ngForOf","ngForTrackBy"],[4,"ngIf"],["colspan","4",1,"navigationBottom"],[3,"pages","selectedPage","previousPageDisabled","nextPageDisabled","rowsPerPage","pageRange","totalPages","totalRows","useAdjustPagination","previousPageEmitter","setPageEmitter","nextPageEmitter","adjustPaginationEmitter"],["scope","col",2,"width","9em"],["scope","col",2,"width","5em"],["mdbTableCol",""],[1,"text",3,"innerHtml"],[1,"actions"],[1,"buttons"],[3,"auditingExclusions","object","logged","noEdit","noAction","lockUnLock","objectDetail","objectDeleteConfirmation","objectUnDeleteConfirmation","lockEmitter","unlockEmitter","showObjectEmitter","deleteObjectEmitter","unDeleteObjectEmitter"],["colspan","4",1,"text","navigationBottom"],["scope","row","title","Nome","aria-label","Nome",1,"text",2,"width","7em"],[1,"text","noBorderRight",3,"innerHtml"],["scope","row","title","E-mail","aria-label","E-mail",1,"text"],["scope","row","title","Participou","aria-label","Participou",1,"text"],["label","do Participante Atividade Especial","info","true",3,"selectedObject","templateOutlet","cancelDataEmitter"],["label","Participante Atividade Especial",3,"selectedObject","auditingExclusions","templateOutlet","confirmDeleteObjectEmitter","cancelDataEmitter"],["label","Participante Atividade Especial","redo","true",3,"selectedObject","auditingExclusions","templateOutlet","confirmDeleteObjectEmitter","cancelDataEmitter"]],template:function(e,t){1&e&&(l.Rb(0,"form-toolbar",0),l.cc("onSearchFormSubmitEmitter",function(){return t.onSearchFormSubmit()})("listDataEmitter",function(){return t.listData()})("listDataNoCacheEmitter",function(){return t.listDataNoCache()})("auditListEmitter",function(){return t.auditList()})("normalListEmitter",function(){return t.normalList()})("addObjectEmitter",function(){return t.addObject()})("backToOriginEmitter",function(){return t.backToOrigin()}),l.Qb(),l.Gc(1,k,2,1,"ng-template",1,2,l.Hc),l.Gc(3,x,12,3,"ng-template",null,3,l.Hc),l.Gc(5,Q,1,2,"ng-template",null,4,l.Hc),l.Gc(7,N,1,3,"ng-template",null,5,l.Hc),l.Gc(9,I,1,3,"ng-template",null,6,l.Hc)),2&e&&(l.jc("title",t.title)("editing",t.editing)("searchForm",t.searchForm)("auditingExclusions",t.auditingExclusions)("enabledAuditList",l.oc(8,S).includes(t.logged.category))("disabledAddNew",!0)("backToOrigin",!0),l.yb(1),l.jc("ngIf",!t.editing))},directives:[E.a,c.j,c.i,j.a,h.a,O.a],encapsulation:2}),e})()}];let M=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.Kb({type:e}),e.\u0275inj=l.Jb({imports:[[r.c.forChild(C)],r.c]}),e})();var T=i("kS8M");let _=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.Kb({type:e}),e.\u0275inj=l.Jb({imports:[[c.b,n.h,n.q,a.h,o.a.forRoot(),M,T.a]]}),e})()}}]);