(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{bUNk:function(e,t,i){"use strict";i.r(t),i.d(t,"MaterialModule",function(){return L});var n=i("ofXK"),c=i("3Pt+"),a=i("1kSV"),l=i("tyNb"),o=i("kYp3"),s=i("fXoL"),r=i("JqCM"),u=i("tk/3"),d=i("jhN1"),b=i("dlU0"),m=i("bZwt"),f=i("ONAA"),g=i("1tD9"),h=i("zT7k"),p=i("ZMR0"),j=i("d3lv"),y=i("n/9U"),E=i("fcMv"),O=i("Ca8N"),v=i("/eUb");function I(e,t){if(1&e){const e=s.Sb();s.Rb(0,"section",7),s.Rb(1,"form",8),s.cc("ngSubmit",function(){return s.Ac(e),s.ec().onObjectFormSubmit()}),s.Rb(2,"div"),s.Nb(3,"rich-input-text",9),s.Nb(4,"rich-input-text",10),s.Rb(5,"rich-filter-selector",11),s.cc("infoContainEmitter",function(){return s.Ac(e),s.ec().infoMeasureUnitContain()})("filterObjectsEmitter",function(t){return s.Ac(e),s.ec().filterMeasureUnits(t)})("valueChangedEmitter",function(t){return s.Ac(e),s.ec().setSelectedMeasureUnit(t)}),s.Qb(),s.Qb(),s.Rb(6,"form-action",12),s.cc("cancelDataEmitter",function(){return s.Ac(e),s.ec().cancelData()}),s.Qb(),s.Qb(),s.Qb()}if(2&e){const e=s.ec();s.yb(1),s.jc("formGroup",e.dataForm),s.yb(2),s.jc("formGroup",e.dataForm),s.yb(1),s.jc("formGroup",e.dataForm),s.yb(1),s.jc("selectedObject",e.selectedMeasureUnit)("objects",e.measureUnits),s.yb(1),s.jc("validationMessages",e.validationMessages)("processValidation",e.processValidation)}}function M(e,t){1&e&&(s.Rb(0,"th",24),s.Ic(1," A\xe7\xf5es "),s.Qb())}function R(e,t){1&e&&(s.Rb(0,"th",25),s.Ic(1," A\xe7\xf5es "),s.Qb())}const U=function(){return["admin_master"]},D=function(){return["admin"]};function P(e,t){if(1&e){const e=s.Sb();s.Rb(0,"tr",26),s.Nb(1,"td",27),s.Rb(2,"td",28),s.Ic(3),s.Qb(),s.Rb(4,"td",29),s.Rb(5,"div",30),s.Rb(6,"edit-delete-action",31),s.cc("showObjectEmitter",function(t){return s.Ac(e),s.ec(3).showObject(t)})("editObjectEmitter",function(t){return s.Ac(e),s.ec(3).editObject(t)})("deleteObjectEmitter",function(t){return s.Ac(e),s.ec(3).deleteObject(t)})("unDeleteObjectEmitter",function(t){return s.Ac(e),s.ec(3).unDeleteObject(t)}),s.Qb(),s.Qb(),s.Qb(),s.Qb()}if(2&e){const e=t.$implicit,i=s.ec(3),n=s.yc(9),c=s.yc(11),a=s.yc(7);s.yb(1),s.jc("innerHtml",e.name,s.Bc),s.yb(2),s.Lc(" ",e.units," ",e.measureUnitName," "),s.yb(3),s.jc("auditingExclusions",i.auditingExclusions)("object",e)("logged",i.logged)("noAction",!(s.oc(10,U).includes(i.logged.category)||s.oc(11,D).includes(i.logged.category)&&i.permissions.includes("accountingentry_write")))("objectDeleteConfirmation",n)("objectUnDeleteConfirmation",c)("objectDetail",a)}}function Q(e,t){if(1&e){const e=s.Sb();s.Rb(0,"table",15),s.Rb(1,"thead",16),s.Rb(2,"tr"),s.Rb(3,"th",17),s.Ic(4," Identifica\xe7\xe3o "),s.Qb(),s.Rb(5,"th",18),s.Ic(6," Volume + U.M. "),s.Qb(),s.Gc(7,M,2,0,"th",19),s.Gc(8,R,2,0,"th",20),s.Qb(),s.Qb(),s.Rb(9,"tbody"),s.Gc(10,P,7,12,"tr",21),s.Rb(11,"tr"),s.Rb(12,"td",22),s.Rb(13,"table-navigator",23),s.cc("previousPageEmitter",function(){return s.Ac(e),s.ec(2).previousPage()})("setPageEmitter",function(t){return s.Ac(e),s.ec(2).setPage(t)})("nextPageEmitter",function(){return s.Ac(e),s.ec(2).nextPage()})("adjustPaginationEmitter",function(t){return s.Ac(e),s.ec(2).adjustPagination(t)}),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb()}if(2&e){const e=s.ec(2);s.yb(7),s.jc("ngIf",e.auditingExclusions),s.yb(1),s.jc("ngIf",!e.auditingExclusions),s.yb(2),s.jc("ngForOf",e.objects)("ngForTrackBy",e.trackById),s.yb(3),s.jc("pages",e.pages)("selectedPage",e.selectedPage)("previousPageDisabled",e.previousPageDisabled)("nextPageDisabled",e.nextPageDisabled)("rowsPerPage",e.rowsPerPage)("pageRange",e.pageRange)("totalPages",e.totalPages)("totalRows",e.totalRows)("useAdjustPagination",!0)}}function w(e,t){if(1&e&&(s.Rb(0,"section",13),s.Gc(1,Q,14,13,"table",14),s.Qb()),2&e){const e=s.ec();s.yb(1),s.jc("ngIf",e.objects)}}function S(e,t){if(1&e&&(s.Rb(0,"tr"),s.Rb(1,"th",32),s.Ic(2," Identifica\xe7\xe3o: "),s.Qb(),s.Rb(3,"td",33),s.Ic(4),s.Qb(),s.Qb(),s.Rb(5,"tr"),s.Rb(6,"th",34),s.Ic(7," Volume: "),s.Qb(),s.Rb(8,"td",33),s.Ic(9),s.Qb(),s.Qb()),2&e){const e=s.ec();s.yb(4),s.Kc(" ",e.selectedObject.name," "),s.yb(5),s.Lc(" ",e.selectedObject.units," ",e.selectedObject.measureUnitName," ")}}function A(e,t){if(1&e){const e=s.Sb();s.Rb(0,"delete-confirmation",35),s.cc("cancelDataEmitter",function(){return s.Ac(e),s.ec().showObject()}),s.Qb()}if(2&e){const e=s.ec(),t=s.yc(5);s.jc("selectedObject",e.selectedObject)("templateOutlet",t)}}function C(e,t){if(1&e){const e=s.Sb();s.Rb(0,"delete-confirmation",36),s.cc("confirmDeleteObjectEmitter",function(t){return s.Ac(e),s.ec().confirmDeleteObject(t)})("cancelDataEmitter",function(){return s.Ac(e),s.ec().cancelData()}),s.Qb()}if(2&e){const e=s.ec(),t=s.yc(5);s.jc("selectedObject",e.selectedObject)("auditingExclusions",e.auditingExclusions)("templateOutlet",t)}}function x(e,t){if(1&e){const e=s.Sb();s.Rb(0,"delete-confirmation",37),s.cc("confirmDeleteObjectEmitter",function(t){return s.Ac(e),s.ec().confirmUnDeleteObject(t)})("cancelDataEmitter",function(){return s.Ac(e),s.ec().cancelData()}),s.Qb()}if(2&e){const e=s.ec(),t=s.yc(5);s.jc("selectedObject",e.selectedObject)("auditingExclusions",e.auditingExclusions)("templateOutlet",t)}}const k=function(){return["admin_master","admin","system_auditor"]},G=[{path:"",component:(()=>{class e extends o.a{constructor(e,t,i,n,c,a,l,o,s,r,u){super(e,t,i,n,c,a,l,o,s,r,u)}ngOnInit(){this.setInitializationServices(["material","measureunit"]),this.crudService=this.materialService,this.sucessErrorMessages={200:"Material/Produto adicionado com sucesso.",201:"Material/Produto alterado com sucesso.",204:"Material/Produto exclu\xeddo com sucesso.",207:"Material/Produto restaurado com sucesso.",208:"Material/Produto exclu\xeddo [PERMANENTE] com sucesso."},this.listTitle="Materiais/Produtos",this.addTitle="Adicionar Material/Produto",this.editTitle="Editar Material/Produto",this.dataForm=new c.f({name:new c.c("",[c.s.required]),units:new c.c("",[c.s.required])}),super.ngOnInit()}afterNgOnInit(){this.parameterName="name",this.loadMeasureUnits()}ngOnDestroy(){this.selectedMeasureUnit=null,this.measureUnits=null,super.ngOnDestroy()}setObject(e){super.setObject(e),this.dataForm.setValue({name:e.name,units:e.units}),e.id>0?this.setSelectedMeasureUnit(e.measureUnitId):this.measureUnits.length>0&&this.setSelectedMeasureUnit(this.measureUnits[0].id)}setSelectedMeasureUnit(e){this.selectedMeasureUnit=this.getFromArrayById(this.measureUnits,e,null),!this.emptyObject(e)&&e>0&&this.emptyObject(this.selectedMeasureUnit)&&this.measureUnitService.load(e).then(e=>{this.processObjectAndValidationResult(e,!0)&&(this.measureUnits.unshift(e),this.selectedMeasureUnit=e)})}filterMeasureUnits(e){this.preFilterByName(e)&&this.loadMeasureUnits()}loadMeasureUnits(){this.selectedMeasureUnit=null,this.measureUnitService.getAll(1,5,this.getNameToFilterCondition()).then(e=>{this.measureUnits=this.clearRowZeroObjectsValidated(e),this.measureUnits.length>0&&this.setSelectedMeasureUnit(this.measureUnits[0].id),this.setProcessing(!1)})}infoMeasureUnitContain(){this.infoContainGeneric("a","a","Unidades Medida","Unidade Medida","unidade medida","pela identifica\xe7\xe3o")}prepareToSaveUpdate(e){return e.measureUnitId=this.selectedMeasureUnit.id,e.measureUnitName=this.selectedMeasureUnit.name,e}makeSelectSearchedItemDestaked(e,t){return e.name=this.makeDestak(e.name,t),e}validateFormFields(){return this.errorRequired("name")&&this.addValidationMessage("Identifica\xe7\xe3o \xe9 requerida!"),this.errorRequired("units")&&this.addValidationMessage("Volume/(Qtde) \xe9 requerido!"),null==this.selectedMeasureUnit&&this.addValidationMessage("Unidade Medida \xe9 requerida!"),!this.inValidationMsgs()}}return e.\u0275fac=function(t){return new(t||e)(s.Mb(a.g),s.Mb(r.c),s.Mb(a.a),s.Mb(u.a),s.Mb(l.b),s.Mb(l.a),s.Mb(d.c),s.Mb(b.a),s.Mb(m.a),s.Mb(f.a),s.Mb(g.a))},e.\u0275cmp=s.Gb({type:e,selectors:[["material-root"]],features:[s.vb],decls:12,vars:11,consts:[[3,"title","editing","searchForm","auditingExclusions","enabledAuditList","disabledAddNew","onSearchFormSubmitEmitter","listDataEmitter","listDataNoCacheEmitter","auditListEmitter","normalListEmitter","addObjectEmitter"],[3,"ngIf","ngIfElse"],["listObjects",""],["selectedObjectTemplate",""],["objectDetail",""],["objectDeleteConfirmation",""],["objectUnDeleteConfirmation",""],["aria-label","cadastro e altera\xe7\xe3o dos materiais/produtos"],[1,"dataForm",3,"formGroup","ngSubmit"],["label","Identifica\xe7\xe3o (*)","titlee","Identifica\xe7\xe3o","maxchars","30","formControlName","name","widthPerc","69","ngDefaultControl","",3,"formGroup"],["label","Volume/(Qtde) (*)","titlee","Volume/(Qtde)","maxchars","10","minValue","1","maxValue","4294967295","forNumber","true","formControlName","units","widthPerc","29","ngDefaultControl","",3,"formGroup"],["id","selectOneMeasureUnit","label","Unidade Medida","emptyLabel","Selecione",3,"selectedObject","objects","infoContainEmitter","filterObjectsEmitter","valueChangedEmitter"],[3,"validationMessages","processValidation","cancelDataEmitter"],["aria-label","lista dos materiais/produtos"],["class","table","mdbTable","",4,"ngIf"],["mdbTable","",1,"table"],[1,"black","white-text"],["scope","col",2,"width","auto"],["scope","col","title","Volume e Unidade Medida","aria-label","Volume e Unidade Medida",2,"width","9em"],["scope","col","style","width: 5em;",4,"ngIf"],["scope","col","style","width: 7em;",4,"ngIf"],["mdbTableCol","",4,"ngFor","ngForOf","ngForTrackBy"],["colspan","3",1,"navigationBottom"],[3,"pages","selectedPage","previousPageDisabled","nextPageDisabled","rowsPerPage","pageRange","totalPages","totalRows","useAdjustPagination","previousPageEmitter","setPageEmitter","nextPageEmitter","adjustPaginationEmitter"],["scope","col",2,"width","5em"],["scope","col",2,"width","7em"],["mdbTableCol",""],[1,"text",3,"innerHtml"],[1,"number"],[1,"actions"],[1,"buttons"],[3,"auditingExclusions","object","logged","noAction","objectDeleteConfirmation","objectUnDeleteConfirmation","objectDetail","showObjectEmitter","editObjectEmitter","deleteObjectEmitter","unDeleteObjectEmitter"],["scope","row",1,"text",2,"width","7.5em"],[1,"text","noBorderRight"],["scope","row",1,"text"],["label","Material / Produto","info","true",3,"selectedObject","templateOutlet","cancelDataEmitter"],["label","Material / Produto",3,"selectedObject","auditingExclusions","templateOutlet","confirmDeleteObjectEmitter","cancelDataEmitter"],["label","Material / Produto","redo","true",3,"selectedObject","auditingExclusions","templateOutlet","confirmDeleteObjectEmitter","cancelDataEmitter"]],template:function(e,t){if(1&e&&(s.Rb(0,"form-toolbar",0),s.cc("onSearchFormSubmitEmitter",function(){return t.onSearchFormSubmit()})("listDataEmitter",function(){return t.listData()})("listDataNoCacheEmitter",function(){return t.listDataNoCache()})("auditListEmitter",function(){return t.auditList()})("normalListEmitter",function(){return t.normalList()})("addObjectEmitter",function(){return t.addObject()}),s.Qb(),s.Gc(1,I,7,7,"ng-template",1),s.Gc(2,w,2,1,"ng-template",null,2,s.Hc),s.Gc(4,S,10,3,"ng-template",null,3,s.Hc),s.Gc(6,A,1,2,"ng-template",null,4,s.Hc),s.Gc(8,C,1,3,"ng-template",null,5,s.Hc),s.Gc(10,x,1,3,"ng-template",null,6,s.Hc)),2&e){const e=s.yc(3);s.jc("title",t.title)("editing",t.editing)("searchForm",t.searchForm)("auditingExclusions",t.auditingExclusions)("enabledAuditList",s.oc(8,k).includes(t.logged.category))("disabledAddNew",!(s.oc(9,U).includes(t.logged.category)||s.oc(10,D).includes(t.logged.category)&&t.permissions.includes("accountingentry_write"))),s.yb(1),s.jc("ngIf",t.editing)("ngIfElse",e)}},directives:[h.a,n.j,c.t,c.n,c.g,p.a,c.m,c.e,c.b,j.a,y.a,n.i,E.a,O.a,v.a],encapsulation:2}),e})()}];let N=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.Kb({type:e}),e.\u0275inj=s.Jb({imports:[[l.c.forChild(G)],l.c]}),e})();var F=i("kS8M");let L=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.Kb({type:e}),e.\u0275inj=s.Jb({imports:[[n.b,c.h,c.q,a.h,N,F.a]]}),e})()},d3lv:function(e,t,i){"use strict";i.d(t,"a",function(){return I});var n=i("fXoL"),c=i("1dEi"),a=i("ofXK"),l=i("1kSV"),o=i("3Pt+");function s(e,t){1&e&&n.Nb(0,"div",3)}function r(e,t){1&e&&n.Nb(0,"div",4)}function u(e,t){if(1&e){const e=n.Sb();n.Rb(0,"div"),n.Rb(1,"label",17),n.Ic(2),n.Qb(),n.Rb(3,"i",18),n.cc("click",function(){return n.Ac(e),n.ec(3).infoContain()}),n.Qb(),n.Rb(4,"i",19),n.cc("click",function(){return n.Ac(e),n.ec(3).filterObjects()}),n.Qb(),n.Qb()}if(2&e){const e=n.ec(3);n.yb(1),n.lc("for","",e.id,"Contain"),n.mc("title","",e.titlee," ",e.i18n[66][e.language],""),n.zb("aria-label",e.titlee+" "+e.i18n[66][e.language]),n.yb(1),n.Lc(" ",e.label," ",e.i18n[66][e.language]," "),n.yb(1),n.kc("ngbTooltip",e.i18n[3][e.language]),n.yb(1),n.kc("ngbTooltip",e.i18n[65][e.language])}}function d(e,t){if(1&e&&(n.Rb(0,"div",15),n.Gc(1,u,5,8,"div",7),n.Nb(2,"input",16),n.Qb()),2&e){const e=n.ec(2);n.yb(1),n.jc("ngIf",null!=e.titlee),n.yb(1),n.Bb("form-control rich-select-input ",e.className,""),n.lc("id","",e.id,"Contain")}}function b(e,t){if(1&e){const e=n.Sb();n.Rb(0,"i",18),n.cc("click",function(){return n.Ac(e),n.ec(3).help()}),n.Qb()}if(2&e){const e=n.ec(3);n.kc("ngbTooltip",e.i18n[3][e.language])}}function m(e,t){if(1&e&&(n.Rb(0,"div"),n.Rb(1,"label",17),n.Ic(2),n.Qb(),n.Gc(3,b,1,1,"i",20),n.Qb()),2&e){const e=n.ec(2);n.yb(1),n.lc("for","",e.id,"Select"),n.kc("title",e.titlee),n.zb("aria-label",e.titlee),n.yb(1),n.Kc(" ",e.label," "),n.yb(1),n.jc("ngIf",null!=e.helpMessage&&""!=e.helpMessage.trim())}}function f(e,t){if(1&e&&(n.Rb(0,"div",21),n.Rb(1,"label",22),n.Ic(2),n.Qb(),n.Qb()),2&e){const e=n.ec(2);n.yb(1),n.kc("for",e.id),n.zb("aria-label",e.titlee),n.yb(1),n.Kc(" ",e.labelByPlaceholder," ")}}function g(e,t){if(1&e&&(n.Rb(0,"option",23),n.Ic(1),n.Qb()),2&e){const e=n.ec(2);n.jc("selected",null==e.selectedObject),n.yb(1),n.Kc(" ",e.minusOneLabel," ")}}function h(e,t){if(1&e&&(n.Rb(0,"option",24),n.Ic(1),n.Qb()),2&e){const e=n.ec(2);n.jc("selected",null==e.selectedObject),n.yb(1),n.Kc(" ",e.zeroLabel," ")}}function p(e,t){if(1&e&&(n.Rb(0,"option",25),n.Ic(1),n.Qb()),2&e){const e=n.ec(2);n.jc("selected",null==e.selectedObject),n.yb(1),n.Kc(" ",e.emptyLabel," ")}}function j(e,t){if(1&e&&(n.Rb(0,"option",26),n.Ic(1),n.Qb()),2&e){const e=t.$implicit,i=n.ec(2);n.kc("value",null!=e.id?e.id:e.value),n.jc("selected",null!=i.selectedObject&&(null!=e.id&&i.selectedObject.id==e.id||null!=e.value&&i.selectedObject.value==e.value)),n.yb(1),n.Mc(" ",null!=e.name?e.name:""," ",null==e.name&&null!=e.label?e.label:""," ",null==e.name&&null==e.label&&null!=e.identifier?e.identifier:""," ")}}const y=function(e){return{width:e}},E=function(){return{color:"#767676"}},O=function(){return{}};function v(e,t){if(1&e){const e=n.Sb();n.Rb(0,"div",5),n.Gc(1,d,3,5,"div",6),n.Rb(2,"div",5),n.Gc(3,m,4,5,"div",7),n.Gc(4,f,3,3,"div",8),n.Rb(5,"select",9),n.cc("change",function(){return n.Ac(e),n.ec().valueChanged()})("focus",function(){return n.Ac(e),n.ec().focused=!0})("blur",function(){return n.Ac(e),n.ec().focused=!1}),n.Gc(6,g,2,2,"option",10),n.Gc(7,h,2,2,"option",11),n.Gc(8,p,2,2,"option",12),n.Gc(9,j,2,5,"option",13),n.Qb(),n.Qb(),n.Nb(10,"div",14),n.Qb()}if(2&e){const e=n.ec();n.jc("ngStyle",n.pc(16,y,e.widthPerc+"%")),n.yb(1),n.jc("ngIf",!e.onlySelect),n.yb(1),n.jc("ngStyle",n.pc(18,y,(e.onlySelect?100:65)+"%")),n.yb(1),n.jc("ngIf",null!=e.titlee),n.yb(1),n.jc("ngIf",null!=e.labelByPlaceholder&&e.focused),n.yb(1),n.Cb("form-control rich-select-input ",e.className," ",e.isInvalid?"is-invalid":"",""),n.lc("id","",e.id,"Select"),n.jc("ngStyle",null==e.selectedObject?n.oc(20,E):n.oc(21,O))("disabled",e.onlyRead),n.yb(1),n.jc("ngIf",null!=e.minusOneLabel),n.yb(1),n.jc("ngIf",null!=e.zeroLabel),n.yb(1),n.jc("ngIf",null!=e.emptyLabel),n.yb(1),n.jc("ngForOf",e.objects)}}let I=(()=>{class e extends c.a{constructor(){super(null),this.infoContainEmitter=new n.n,this.filterObjectsEmitter=new n.n,this.valueChangedEmitter=new n.n}ngOnInit(){super.ngOnInit()}ngOnDestroy(){super.ngOnDestroy(),this.infoContainEmitter=null,this.filterObjectsEmitter=null,this.valueChangedEmitter=null}infoContain(){this.infoContainEmitter.emit()}filterObjects(){var e=document.getElementById(this.id+"Contain");this.filterObjectsEmitter.emit(e.value)}valueChanged(){var e=document.getElementById(this.id+"Select");this.valueChangedEmitter.emit(e.value)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Gb({type:e,selectors:[["rich-filter-selector"]],outputs:{infoContainEmitter:"infoContainEmitter",filterObjectsEmitter:"filterObjectsEmitter",valueChangedEmitter:"valueChangedEmitter"},features:[n.vb],decls:3,vars:3,consts:[["class","clear","style","margin-bottom: .3em;",4,"ngIf"],["class","clear","style","margin-bottom: .7em;",4,"ngIf"],["class","field",3,"ngStyle",4,"ngIf"],[1,"clear",2,"margin-bottom",".3em"],[1,"clear",2,"margin-bottom",".7em"],[1,"field",3,"ngStyle"],["class","field","style","width: 33%;",4,"ngIf"],[4,"ngIf"],["class","placeholderLabel",4,"ngIf"],[3,"id","ngStyle","disabled","change","focus","blur"],["value","-1",3,"selected",4,"ngIf"],["value","0",3,"selected",4,"ngIf"],["value","",3,"selected",4,"ngIf"],[3,"value","selected",4,"ngFor","ngForOf"],[1,"clear"],[1,"field",2,"width","33%"],[2,"width","100%",3,"id"],[3,"for","title"],["placement","top","tabIndex","0",1,"far","fa-question-circle","inputActionIcon",3,"ngbTooltip","click"],["placement","top","tabIndex","0",1,"fas","fa-filter","inputActionIcon",3,"ngbTooltip","click"],["class","far fa-question-circle inputActionIcon","placement","top","tabIndex","0",3,"ngbTooltip","click",4,"ngIf"],[1,"placeholderLabel"],[3,"for"],["value","-1",3,"selected"],["value","0",3,"selected"],["value","",3,"selected"],[3,"value","selected"]],template:function(e,t){1&e&&(n.Gc(0,s,1,0,"div",0),n.Gc(1,r,1,0,"div",1),n.Gc(2,v,11,22,"div",2)),2&e&&(n.jc("ngIf",t.breakBefore&&!t.breakBeforeDouble&&!t.noRender),n.yb(1),n.jc("ngIf",t.breakBeforeDouble&&!t.noRender),n.yb(1),n.jc("ngIf",!t.noRender))},directives:[a.j,a.k,a.i,l.i,o.p,o.u],encapsulation:2}),e})()}}]);