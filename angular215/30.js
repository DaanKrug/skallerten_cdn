(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{IVaK:function(e,t,i){"use strict";i.d(t,"a",function(){return g});var n=i("fXoL"),c=i("1dEi"),l=i("ofXK"),o=i("1kSV");function a(e,t){1&e&&n.Nb(0,"div",4)}function s(e,t){1&e&&n.Nb(0,"div",5)}function r(e,t){if(1&e){const e=n.Sb();n.Rb(0,"span",13),n.cc("click",function(){n.Ac(e);const t=n.ec().$implicit;return n.ec(2).setTab(t.value)}),n.Qb()}if(2&e){const e=n.ec().$implicit,t=n.ec(2);n.Bb("nav-link ",t.isSelected(e.value)?"active":"",""),n.kc("ngbTooltip",e.title),n.jc("innerHtml",e.label,n.Bc),n.zb("aria-label",e.title)}}function u(e,t){if(1&e){const e=n.Sb();n.Rb(0,"span",14),n.cc("click",function(){n.Ac(e);const t=n.ec().$implicit;return n.ec(2).setTab(t.value)}),n.Qb()}if(2&e){const e=n.ec().$implicit,t=n.ec(2);n.Bb("nav-link ",t.isSelected(e.value)?"active":"",""),n.jc("innerHtml",e.label,n.Bc),n.zb("aria-label",e.title)}}function b(e,t){if(1&e){const e=n.Sb();n.Rb(0,"li",10),n.cc("click",function(t){return n.Ac(e),n.ec(2).stopPropagation(t)}),n.Gc(1,r,1,6,"span",11),n.Gc(2,u,1,5,"span",12),n.Qb()}if(2&e){const e=n.ec(2);n.yb(1),n.jc("ngIf",!e.forWizzard),n.yb(1),n.jc("ngIf",e.forWizzard)}}function d(e,t){if(1&e&&(n.Rb(0,"div",6),n.Rb(1,"ul",7),n.Gc(2,b,3,2,"li",8),n.Qb(),n.Nb(3,"div",9),n.Qb()),2&e){const e=n.ec();n.Bb("field ",e.className,""),n.yb(2),n.jc("ngForOf",e.objects)}}function m(e,t){1&e&&n.Nb(0,"div",15)}let g=(()=>{class e extends c.a{constructor(){super(null),this.setTabEmitter=new n.n}ngOnInit(){super.ngOnInit()}ngOnDestroy(){super.ngOnDestroy(),this.selectedTab=null,this.setTabEmitter=null,this.forWizzard=null}isSelected(e){if(null==this.selectedTab||null==e||""==e.trim())return!1;var t=(""+this.selectedTab).trim();return-1==(e=e.trim()).indexOf("|")?e==t:e.split("|")[1]==t}setTab(e){!this.forWizzard&&this.validateClick()&&this.setTabEmitter.emit(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Gb({type:e,selectors:[["rich-tab-bar"]],inputs:{selectedTab:"selectedTab",forWizzard:"forWizzard"},outputs:{setTabEmitter:"setTabEmitter"},features:[n.vb],decls:4,vars:4,consts:[["class","clear","style","margin-bottom: .3em;",4,"ngIf"],["class","clear","style","margin-bottom: .7em;",4,"ngIf"],["style","width: 100%;",3,"class",4,"ngIf"],["class","clear","style","width: 100%;",4,"ngIf"],[1,"clear",2,"margin-bottom",".3em"],[1,"clear",2,"margin-bottom",".7em"],[2,"width","100%"],[1,"nav","nav-tabs","justify-content-start",2,"margin-left",".5em"],["class","nav-item",3,"click",4,"ngFor","ngForOf"],[1,"clear",2,"margin-bottom",".4em"],[1,"nav-item",3,"click"],["placement","top",3,"class","ngbTooltip","innerHtml","click",4,"ngIf"],[3,"class","innerHtml","click",4,"ngIf"],["placement","top",3,"ngbTooltip","innerHtml","click"],[3,"innerHtml","click"],[1,"clear",2,"width","100%"]],template:function(e,t){1&e&&(n.Gc(0,a,1,0,"div",0),n.Gc(1,s,1,0,"div",1),n.Gc(2,d,4,4,"div",2),n.Gc(3,m,1,0,"div",3)),2&e&&(n.jc("ngIf",t.breakBefore&&!t.breakBeforeDouble&&!t.noRender),n.yb(1),n.jc("ngIf",t.breakBeforeDouble&&!t.noRender),n.yb(1),n.jc("ngIf",!t.noRender),n.yb(1),n.jc("ngIf",!t.noRender))},directives:[l.j,l.i,o.i],encapsulation:2}),e})()},UVNK:function(e,t,i){"use strict";i.r(t),i.d(t,"BlogArticleModule",function(){return U});var n=i("ofXK"),c=i("3Pt+"),l=i("1kSV"),o=i("tyNb"),a=i("kYp3"),s=i("fXoL"),r=i("JqCM"),u=i("tk/3"),b=i("jhN1"),d=i("dlU0"),m=i("bZwt"),g=i("ONAA"),f=i("1tD9"),h=i("zT7k"),p=i("IVaK"),I=i("ZMR0"),y=i("d3lv"),v=i("fFX4"),j=i("n/9U"),O=i("fcMv"),M=i("Ca8N"),P=i("/eUb");const k=function(){return{value:"0",label:"Dados Gerais (*)",title:"Dados Gerais"}},E=function(){return{value:"1",label:"Conte\xfado (*)",title:"Conte\xfado"}},R=function(e,t){return[e,t]};function C(e,t){if(1&e){const e=s.Sb();s.Rb(0,"section",7),s.Rb(1,"rich-tab-bar",8),s.cc("setTabEmitter",function(t){return s.Ac(e),s.ec().setTab(t)}),s.Qb(),s.Rb(2,"form",9),s.cc("ngSubmit",function(){return s.Ac(e),s.ec().onObjectFormSubmit()}),s.Rb(3,"div"),s.Nb(4,"rich-input-text",10),s.Nb(5,"rich-input-text",11),s.Nb(6,"rich-input-text",12),s.Rb(7,"rich-filter-selector",13),s.cc("valueChangedEmitter",function(t){return s.Ac(e),s.ec().setSelectedPageMenu(t)}),s.Qb(),s.Rb(8,"rich-filter-selector",14),s.cc("valueChangedEmitter",function(t){return s.Ac(e),s.ec().setSelectedPageMenuItem(t)}),s.Qb(),s.Nb(9,"div",15),s.Qb(),s.Rb(10,"div"),s.Nb(11,"rich-editor",16),s.Qb(),s.Rb(12,"form-action",17),s.cc("cancelDataEmitter",function(){return s.Ac(e),s.ec().cancelData()}),s.Qb(),s.Qb(),s.Qb()}if(2&e){const e=s.ec();s.yb(1),s.jc("objects",s.qc(21,R,s.oc(19,k),s.oc(20,E)))("selectedTab",e.tab),s.yb(1),s.jc("formGroup",e.dataForm),s.yb(1),s.Ab(0==e.tab?"":"none"),s.yb(1),s.jc("formGroup",e.dataForm),s.yb(1),s.jc("formGroup",e.dataForm),s.yb(1),s.jc("formGroup",e.dataForm),s.yb(1),s.jc("selectedObject",e.selectedPageMenu)("objects",e.pageMenus),s.yb(1),s.jc("selectedObject",e.selectedPageMenuItem)("objects",e.pageMenuItems),s.yb(2),s.Ab(1==e.tab?"":"none"),s.yb(1),s.jc("formGroup",e.dataForm),s.yb(1),s.jc("validationMessages",e.validationMessages)("processValidation",e.processValidation)}}function A(e,t){1&e&&(s.Rb(0,"th",29),s.Ic(1," A\xe7\xf5es "),s.Qb())}function S(e,t){1&e&&(s.Rb(0,"th",30),s.Ic(1," A\xe7\xf5es "),s.Qb())}function Q(e,t){if(1&e&&(s.Rb(0,"div",41),s.Ic(1),s.Qb()),2&e){const e=s.ec().$implicit,t=s.ec(3);s.yb(1),s.Kc(" ",t.urlBaseDomain+"?blog="+e.link," ")}}function x(e,t){if(1&e){const e=s.Sb();s.Rb(0,"button",42),s.cc("click",function(){s.Ac(e);const t=s.ec().$implicit;return s.ec(3).toBlogArticleComments(t.id)}),s.Nb(1,"i",43),s.Qb()}}function D(e,t){if(1&e){const e=s.Sb();s.Rb(0,"button",44),s.cc("click",function(){s.Ac(e);const t=s.ec().$implicit,i=s.ec(3);return i.lock(t.id,i.lockConfirm)}),s.Nb(1,"i",45),s.Qb()}if(2&e){const e=s.ec().$implicit,t=s.ec(3);s.jc("disabled",t.logged.id!=e.ownerId)}}function w(e,t){if(1&e){const e=s.Sb();s.Rb(0,"button",46),s.cc("click",function(){s.Ac(e);const t=s.ec().$implicit,i=s.ec(3);return i.unlock(t.id,i.unlockConfirm)}),s.Nb(1,"i",47),s.Qb()}if(2&e){const e=s.ec().$implicit,t=s.ec(3);s.jc("disabled",t.logged.id!=e.ownerId)}}const T=function(){return["admin_master"]},G=function(){return["admin"]};function B(e,t){if(1&e){const e=s.Sb();s.Rb(0,"tr",31),s.Rb(1,"td",32),s.Nb(2,"div",33),s.Gc(3,Q,2,1,"div",34),s.Qb(),s.Rb(4,"td",32),s.Nb(5,"div",33),s.Nb(6,"div",33),s.Qb(),s.Rb(7,"td",35),s.Rb(8,"div",36),s.Gc(9,x,2,0,"button",37),s.Gc(10,D,2,1,"button",38),s.Gc(11,w,2,1,"button",39),s.Rb(12,"edit-delete-action",40),s.cc("showObjectEmitter",function(t){return s.Ac(e),s.ec(3).showObject(t)})("editObjectEmitter",function(t){return s.Ac(e),s.ec(3).editObject(t)})("deleteObjectEmitter",function(t){return s.Ac(e),s.ec(3).deleteObject(t)})("unDeleteObjectEmitter",function(t){return s.Ac(e),s.ec(3).unDeleteObject(t)}),s.Qb(),s.Qb(),s.Qb(),s.Qb()}if(2&e){const e=t.$implicit,i=s.ec(3),n=s.yc(9),c=s.yc(11),l=s.yc(7);s.yb(2),s.jc("innerHtml",e.title,s.Bc),s.yb(1),s.jc("ngIf",!(e.pageMenuId>0&&e.pageMenuItemId>0)),s.yb(2),s.jc("innerHtml",i.getPageMenuName(e.pageMenuId),s.Bc),s.yb(1),s.jc("innerHtml",i.getPageMenuItemName(e.pageMenuItemId),s.Bc),s.yb(3),s.jc("ngIf",!i.auditingExclusions),s.yb(1),s.jc("ngIf",e.active&&!i.auditingExclusions),s.yb(1),s.jc("ngIf",!e.active&&!i.auditingExclusions),s.yb(1),s.jc("auditingExclusions",i.auditingExclusions)("object",e)("logged",i.logged)("noAction",!(s.oc(14,T).includes(i.logged.category)||s.oc(15,G).includes(i.logged.category)&&i.permissions.includes("blogarticle_write")))("objectDeleteConfirmation",n)("objectUnDeleteConfirmation",c)("objectDetail",l)}}function L(e,t){if(1&e){const e=s.Sb();s.Rb(0,"table",20),s.Rb(1,"thead",21),s.Rb(2,"tr"),s.Rb(3,"th",22),s.Ic(4," Identifica\xe7\xe3o + Link P\xfablico "),s.Qb(),s.Rb(5,"th",23),s.Ic(6," Menu + Item "),s.Qb(),s.Gc(7,A,2,0,"th",24),s.Gc(8,S,2,0,"th",25),s.Qb(),s.Qb(),s.Rb(9,"tbody"),s.Gc(10,B,13,16,"tr",26),s.Rb(11,"tr"),s.Rb(12,"td",27),s.Rb(13,"table-navigator",28),s.cc("previousPageEmitter",function(){return s.Ac(e),s.ec(2).previousPage()})("setPageEmitter",function(t){return s.Ac(e),s.ec(2).setPage(t)})("nextPageEmitter",function(){return s.Ac(e),s.ec(2).nextPage()})("adjustPaginationEmitter",function(t){return s.Ac(e),s.ec(2).adjustPagination(t)}),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb()}if(2&e){const e=s.ec(2);s.yb(7),s.jc("ngIf",!e.auditingExclusions),s.yb(1),s.jc("ngIf",e.auditingExclusions),s.yb(2),s.jc("ngForOf",e.objects)("ngForTrackBy",e.trackById),s.yb(3),s.jc("pages",e.pages)("selectedPage",e.selectedPage)("previousPageDisabled",e.previousPageDisabled)("nextPageDisabled",e.nextPageDisabled)("rowsPerPage",e.rowsPerPage)("pageRange",e.pageRange)("totalPages",e.totalPages)("totalRows",e.totalRows)("useAdjustPagination",!0)}}function N(e,t){if(1&e&&(s.Rb(0,"section",18),s.Gc(1,L,14,13,"table",19),s.Qb()),2&e){const e=s.ec();s.yb(1),s.jc("ngIf",e.objects)}}function F(e,t){if(1&e&&(s.Rb(0,"tr"),s.Rb(1,"th",51),s.Ic(2," Link P\xfablico: "),s.Qb(),s.Rb(3,"td",49),s.Ic(4),s.Qb(),s.Qb()),2&e){const e=s.ec(2);s.yb(4),s.Kc(" ",e.urlBaseDomain+"?blog="+e.selectedObject.link," ")}}function V(e,t){if(1&e&&(s.Rb(0,"tr"),s.Rb(1,"th",48),s.Ic(2," Identifica\xe7\xe3o: "),s.Qb(),s.Rb(3,"td",49),s.Ic(4),s.Qb(),s.Qb(),s.Gc(5,F,5,1,"tr",50),s.Rb(6,"tr"),s.Rb(7,"th",51),s.Ic(8," Link Artigo Anterior: "),s.Qb(),s.Rb(9,"td",49),s.Ic(10),s.Qb(),s.Qb(),s.Rb(11,"tr"),s.Rb(12,"th",51),s.Ic(13," Link Pr\xf3ximo Artigo: "),s.Qb(),s.Rb(14,"td",49),s.Ic(15),s.Qb(),s.Qb(),s.Rb(16,"tr"),s.Rb(17,"th",51),s.Ic(18," Menu: "),s.Qb(),s.Rb(19,"td",49),s.Ic(20),s.Qb(),s.Qb(),s.Rb(21,"tr"),s.Rb(22,"th",51),s.Ic(23," Item Menu: "),s.Qb(),s.Rb(24,"td",49),s.Ic(25),s.Qb(),s.Qb()),2&e){const e=s.ec();s.yb(4),s.Kc(" ",e.selectedObject.title," "),s.yb(1),s.jc("ngIf",!(e.selectedObject.pageMenuId>0&&e.selectedObject.pageMenuItemId>0)),s.yb(5),s.Kc(" ",e.emptyString(e.selectedObject.previousLink)?"":e.urlBaseDomain+"?blog="+e.selectedObject.previousLink," "),s.yb(5),s.Kc(" ",e.emptyString(e.selectedObject.nextLink)?"":e.urlBaseDomain+"?blog="+e.selectedObject.nextLink," "),s.yb(5),s.Kc(" ",null!=e.selectedPageMenu?e.selectedPageMenu.name:"Nenhum"," "),s.yb(5),s.Kc(" ",null!=e.selectedPageMenuItem?e.selectedPageMenuItem.name:"Nenhum"," ")}}function z(e,t){if(1&e){const e=s.Sb();s.Rb(0,"delete-confirmation",52),s.cc("cancelDataEmitter",function(){return s.Ac(e),s.ec().showObject()}),s.Qb()}if(2&e){const e=s.ec(),t=s.yc(5);s.jc("selectedObject",e.selectedObject)("templateOutlet",t)}}function H(e,t){if(1&e){const e=s.Sb();s.Rb(0,"delete-confirmation",53),s.cc("confirmDeleteObjectEmitter",function(t){return s.Ac(e),s.ec().confirmDeleteObject(t)})("cancelDataEmitter",function(){return s.Ac(e),s.ec().cancelData()}),s.Qb()}if(2&e){const e=s.ec(),t=s.yc(5);s.jc("selectedObject",e.selectedObject)("auditingExclusions",e.auditingExclusions)("templateOutlet",t)}}function K(e,t){if(1&e){const e=s.Sb();s.Rb(0,"delete-confirmation",54),s.cc("confirmDeleteObjectEmitter",function(t){return s.Ac(e),s.ec().confirmUnDeleteObject(t)})("cancelDataEmitter",function(){return s.Ac(e),s.ec().cancelData()}),s.Qb()}if(2&e){const e=s.ec(),t=s.yc(5);s.jc("selectedObject",e.selectedObject)("auditingExclusions",e.auditingExclusions)("templateOutlet",t)}}const q=function(){return["admin_master","admin","system_auditor"]},_=[{path:"",component:(()=>{class e extends a.a{constructor(e,t,i,n,c,l,o,a,s,r,u){super(e,t,i,n,c,l,o,a,s,r,u)}ngOnInit(){this.setInitializationServices(["blogarticle","pagemenu","pagemenuitem"]),this.crudService=this.blogArticleService,this.sucessErrorMessages={200:"Artigo Blog adicionado com sucesso.",201:"Artigo Blog alterado com sucesso.",204:"Artigo Blog exclu\xeddo com sucesso.",207:"Artigo Blog restaurado com sucesso.",208:"Artigo Blog exclu\xeddo [PERMANENTE] com sucesso."},this.listTitle="Artigos Blog",this.addTitle="Adicionar Artigo Blog",this.editTitle="Editar Artigo Blog",this.dataForm=new c.f({title:new c.c("",[c.s.required]),content:new c.c("",[c.s.required]),previousLink:new c.c("",[]),nextLink:new c.c("",[])}),super.ngOnInit()}afterNgOnInit(){this.parameterName="title",this.selectOptionsLabel="Menu",this.selectOptionsLabel2="Item Menu",this.loadPageMenus()}ngOnDestroy(){this.selectedPageMenu=null,this.pageMenus=null,this.selectedPageMenuItem=null,this.pageMenuItems=null,this.allPageMenus=null,this.allPageMenuItems=null,super.ngOnDestroy()}loadPageMenus(){this.selectedPageMenu=null,this.selectedPageMenuItem=null,this.selectOptionsValues=[{value:0,label:""}],this.specialConditions=[""],this.selectOptionsValues2=[{value:0,label:""}],this.specialConditions2=[""],this.pageMenuService.getAll(-1,-1,this.getNameToFilterCondition()+" xoo forBlogArticle = true ").then(e=>{this.pageMenus=this.clearRowZeroObjectsValidated(e),this.allPageMenus=this.pageMenus;for(var t=this.allPageMenus.length,i=0;i<t;i++)this.specialConditions=[...this.specialConditions," xoo pageMenuId = "+this.allPageMenus[i].id],this.selectOptionsValues=[...this.selectOptionsValues,{value:i+1,label:this.allPageMenus[i].name}];this.pageMenuItemService.getAll(-1,-1,this.getNameToFilterCondition()+" xoo forBlogArticle = true ").then(e=>{this.allPageMenuItems=this.clearRowZeroObjectsValidated(e)})})}filterBySelect(e){super.filterBySelect(e),this.selectOptionsValues2=[{value:0,label:""}],this.specialConditions2=[""];var t=this.allPageMenuItems.length;if(t>0&&e>0)for(var i=0;i<t;i++)this.allPageMenuItems[i].pageMenuId==this.allPageMenus[e-1].id&&(this.specialConditions2=[...this.specialConditions2," xoo pageMenuItemId = "+this.allPageMenuItems[i].id],this.selectOptionsValues2=[...this.selectOptionsValues2,{value:i+1,label:this.allPageMenuItems[i].name}])}getPageMenuName(e){if(this.emptyArray(this.allPageMenus))return"";for(var t=this.allPageMenus.length,i=0;i<t;i++)if(this.allPageMenus[i].id==e)return this.allPageMenus[i].name;return""}getPageMenuItemName(e){if(this.emptyArray(this.allPageMenuItems))return"";for(var t=this.allPageMenuItems.length,i=0;i<t;i++)if(this.allPageMenuItems[i].id==e)return this.allPageMenuItems[i].name;return""}setSelectedPageMenu(e,t){this.selectedPageMenu=null,this.selectedPageMenuItem=null,this.pageMenuItems=[],!this.emptyObject(e)&&e>0&&(this.selectedPageMenu=this.getFromArrayById(this.pageMenus,e,null),this.loadPageMenuItems(t))}setSelectedPageMenuItem(e){this.selectedPageMenuItem=!this.emptyObject(e)&&e>0?this.getFromArrayById(this.pageMenuItems,e,null):null}loadPageMenuItems(e){var t=this.getNameToFilterCondition()+" xoo forBlogArticle = true xoo pageMenuId = "+this.selectedPageMenu.id;this.pageMenuItemService.getAll(-1,-1,t).then(t=>{this.pageMenuItems=this.clearRowZeroObjectsValidated(t),this.setProcessing(!1),this.emptyArray(this.pageMenuItems)||this.setSelectedPageMenuItem(this.emptyObject(e)?this.pageMenuItems[0].id:e)})}setObject(e){super.setObject(e),this.dataForm.setValue({title:e.title,content:e.content,previousLink:e.previousLink,nextLink:e.nextLink}),!this.emptyObject(e.id)&&e.id>0?this.setSelectedPageMenu(e.pageMenuId,e.pageMenuItemId):this.setSelectedPageMenu(null,null)}prepareToSaveUpdate(e){return e.content=this.stringService.unentityLtGt(e.content),e.pageMenuId=this.emptyObject(this.selectedPageMenu)||this.emptyObject(this.selectedPageMenuItem)?0:this.selectedPageMenu.id,e.pageMenuItemId=this.emptyObject(this.selectedPageMenu)||this.emptyObject(this.selectedPageMenuItem)?0:this.selectedPageMenuItem.id,e}makeSelectSearchedItemDestaked(e,t){return e.title=this.makeDestak(e.title,t),e}validateFormFields(){return this.errorRequired("title")&&this.addValidationMessage("Identifica\xe7\xe3o \xe9 requerida!"),this.errorRequired("content")&&this.addValidationMessage("Conte\xfado \xe9 requerido!"),!this.inValidationMsgs()}toBlogArticleComments(e){this.crudService.loadFromCache(e).then(e=>{this.processObjectAndValidationResult(e,!0)&&this.eventEmitterService.get("blogarticlecomments").emit({object:e})})}}return e.\u0275fac=function(t){return new(t||e)(s.Mb(l.g),s.Mb(r.c),s.Mb(l.a),s.Mb(u.a),s.Mb(o.b),s.Mb(o.a),s.Mb(b.c),s.Mb(d.a),s.Mb(m.a),s.Mb(g.a),s.Mb(f.a))},e.\u0275cmp=s.Gb({type:e,selectors:[["blogarticle-root"]],features:[s.vb],decls:12,vars:16,consts:[[3,"title","editing","searchForm","auditingExclusions","enabledAuditList","disabledAddNew","moreFilters","selectOptionsLabel","selectOptionsValues","selectOptionsLabel2","selectOptionsValues2","onSearchFormSubmitEmitter","listDataEmitter","listDataNoCacheEmitter","auditListEmitter","normalListEmitter","addObjectEmitter","moreFilterOptionsEmitter","lessFilterOptionsEmitter","filterBySelectEmitter","filterBySelectEmitter2"],[3,"ngIf","ngIfElse"],["listObjects",""],["selectedObjectTemplate",""],["objectDetail",""],["objectDeleteConfirmation",""],["objectUnDeleteConfirmation",""],["aria-label","cadastro e altera\xe7\xe3o dos artigos blog"],[3,"objects","selectedTab","setTabEmitter"],[1,"dataForm",3,"formGroup","ngSubmit"],["label","Identifica\xe7\xe3o (*)","titlee","Identifica\xe7\xe3o","maxchars","200","forAlphaNum","true","formControlName","title","widthPerc","99","ngDefaultControl","",3,"formGroup"],["label","Link Artigo Anterior","titlee","Link Artigo Anterior","maxchars","250","formControlName","previousLink","widthPerc","99","ngDefaultControl","",3,"formGroup"],["label","Link Pr\xf3ximo Artigo","titlee","Link Pr\xf3ximo Artigo","maxchars","250","formControlName","nextLink","widthPerc","99","ngDefaultControl","",3,"formGroup"],["id","selectOnePageMenu","label","Menu","widthPerc","49","minusOneLabel","Nenhum","onlySelect","true",3,"selectedObject","objects","valueChangedEmitter"],["id","selectOnePageMenuItem","label","Item Menu","widthPerc","49","minusOneLabel","Nenhum","onlySelect","true",3,"selectedObject","objects","valueChangedEmitter"],[1,"clear"],["formControlName","content","ngDefaultControl","",3,"formGroup"],[3,"validationMessages","processValidation","cancelDataEmitter"],["aria-label","lista dos artigos blog"],["class","table","mdbTable","",4,"ngIf"],["mdbTable","",1,"table"],[1,"black","white-text"],["scope","col",2,"width","auto"],["scope","col",2,"width","8em"],["scope","col","style","width: 11em;",4,"ngIf"],["scope","col","style","width: 5em;",4,"ngIf"],["mdbTableCol","",4,"ngFor","ngForOf","ngForTrackBy"],["colspan","3",1,"navigationBottom"],[3,"pages","selectedPage","previousPageDisabled","nextPageDisabled","rowsPerPage","pageRange","totalPages","totalRows","useAdjustPagination","previousPageEmitter","setPageEmitter","nextPageEmitter","adjustPaginationEmitter"],["scope","col",2,"width","11em"],["scope","col",2,"width","5em"],["mdbTableCol",""],[1,"text"],[3,"innerHtml"],["style","text-decoration: underline; color: #01f;","title","Link P\xfablico do Artigo","aria-label","Link P\xfablico do Artigo",4,"ngIf"],[1,"actions"],[1,"buttons"],["class","btn btn-primary clickable","type","button","placement","left","ngbTooltip","Gerenciar Coment\xe1rios","aria-label","Gerenciar Coment\xe1rios",3,"click",4,"ngIf"],["class","btn btn-primary clickable","type","button","placement","left","ngbTooltip","Desabilitar Coment\xe1rios","aria-label","Desabilitar Coment\xe1rios",3,"disabled","click",4,"ngIf"],["class","btn btn-primary clickable","type","button","placement","left","ngbTooltip","Habilitar Coment\xe1rios","aria-label","Habilitar Coment\xe1rios",3,"disabled","click",4,"ngIf"],[3,"auditingExclusions","object","logged","noAction","objectDeleteConfirmation","objectUnDeleteConfirmation","objectDetail","showObjectEmitter","editObjectEmitter","deleteObjectEmitter","unDeleteObjectEmitter"],["title","Link P\xfablico do Artigo","aria-label","Link P\xfablico do Artigo",2,"text-decoration","underline","color","#01f"],["type","button","placement","left","ngbTooltip","Gerenciar Coment\xe1rios","aria-label","Gerenciar Coment\xe1rios",1,"btn","btn-primary","clickable",3,"click"],[1,"far","fa-comments"],["type","button","placement","left","ngbTooltip","Desabilitar Coment\xe1rios","aria-label","Desabilitar Coment\xe1rios",1,"btn","btn-primary","clickable",3,"disabled","click"],[1,"fas","fa-comment"],["type","button","placement","left","ngbTooltip","Habilitar Coment\xe1rios","aria-label","Habilitar Coment\xe1rios",1,"btn","btn-primary","clickable",3,"disabled","click"],[1,"fas","fa-comment-slash"],["scope","col",1,"text",2,"width","7.5em"],[1,"text","noBorderRight"],[4,"ngIf"],["scope","col",1,"text"],["label","Artigo Blog","info","true",3,"selectedObject","templateOutlet","cancelDataEmitter"],["label","Artigo Blog",3,"selectedObject","auditingExclusions","templateOutlet","confirmDeleteObjectEmitter","cancelDataEmitter"],["label","Artigo Blog","redo","true",3,"selectedObject","auditingExclusions","templateOutlet","confirmDeleteObjectEmitter","cancelDataEmitter"]],template:function(e,t){if(1&e&&(s.Rb(0,"form-toolbar",0),s.cc("onSearchFormSubmitEmitter",function(){return t.onSearchFormSubmit()})("listDataEmitter",function(){return t.listData()})("listDataNoCacheEmitter",function(){return t.listDataNoCache()})("auditListEmitter",function(){return t.auditList()})("normalListEmitter",function(){return t.normalList()})("addObjectEmitter",function(){return t.addObject()})("moreFilterOptionsEmitter",function(){return t.moreFilterOptions()})("lessFilterOptionsEmitter",function(){return t.lessFilterOptions()})("filterBySelectEmitter",function(e){return t.filterBySelect(e)})("filterBySelectEmitter2",function(e){return t.filterBySelect2(e)}),s.Qb(),s.Gc(1,C,13,24,"ng-template",1),s.Gc(2,N,2,1,"ng-template",null,2,s.Hc),s.Gc(4,V,26,6,"ng-template",null,3,s.Hc),s.Gc(6,z,1,2,"ng-template",null,4,s.Hc),s.Gc(8,H,1,3,"ng-template",null,5,s.Hc),s.Gc(10,K,1,3,"ng-template",null,6,s.Hc)),2&e){const e=s.yc(3);s.jc("title",t.title)("editing",t.editing)("searchForm",t.searchForm)("auditingExclusions",t.auditingExclusions)("enabledAuditList",s.oc(13,q).includes(t.logged.category))("disabledAddNew",!(s.oc(14,T).includes(t.logged.category)||s.oc(15,G).includes(t.logged.category)&&t.permissions.includes("blogarticle_write")))("moreFilters",t.moreFilters)("selectOptionsLabel",t.selectOptionsLabel)("selectOptionsValues",t.selectOptionsValues)("selectOptionsLabel2",t.selectOptionsLabel2)("selectOptionsValues2",t.selectOptionsValues2),s.yb(1),s.jc("ngIf",t.editing)("ngIfElse",e)}},directives:[h.a,n.j,p.a,c.t,c.n,c.g,I.a,c.m,c.e,c.b,y.a,v.a,j.a,n.i,O.a,M.a,l.i,P.a],encapsulation:2}),e})()}];let $=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.Kb({type:e}),e.\u0275inj=s.Jb({imports:[[o.c.forChild(_)],o.c]}),e})();var X=i("kS8M");let U=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.Kb({type:e}),e.\u0275inj=s.Jb({imports:[[n.b,c.h,c.q,l.h,$,X.a]]}),e})()},d3lv:function(e,t,i){"use strict";i.d(t,"a",function(){return M});var n=i("fXoL"),c=i("1dEi"),l=i("ofXK"),o=i("1kSV"),a=i("3Pt+");function s(e,t){1&e&&n.Nb(0,"div",3)}function r(e,t){1&e&&n.Nb(0,"div",4)}function u(e,t){if(1&e){const e=n.Sb();n.Rb(0,"div"),n.Rb(1,"label",17),n.Ic(2),n.Qb(),n.Rb(3,"i",18),n.cc("click",function(){return n.Ac(e),n.ec(3).infoContain()}),n.Qb(),n.Rb(4,"i",19),n.cc("click",function(){return n.Ac(e),n.ec(3).filterObjects()}),n.Qb(),n.Qb()}if(2&e){const e=n.ec(3);n.yb(1),n.lc("for","",e.id,"Contain"),n.mc("title","",e.titlee," ",e.i18n[66][e.language],""),n.zb("aria-label",e.titlee+" "+e.i18n[66][e.language]),n.yb(1),n.Lc(" ",e.label," ",e.i18n[66][e.language]," "),n.yb(1),n.kc("ngbTooltip",e.i18n[3][e.language]),n.yb(1),n.kc("ngbTooltip",e.i18n[65][e.language])}}function b(e,t){if(1&e&&(n.Rb(0,"div",15),n.Gc(1,u,5,8,"div",7),n.Nb(2,"input",16),n.Qb()),2&e){const e=n.ec(2);n.yb(1),n.jc("ngIf",null!=e.titlee),n.yb(1),n.Bb("form-control rich-select-input ",e.className,""),n.lc("id","",e.id,"Contain")}}function d(e,t){if(1&e){const e=n.Sb();n.Rb(0,"i",18),n.cc("click",function(){return n.Ac(e),n.ec(3).help()}),n.Qb()}if(2&e){const e=n.ec(3);n.kc("ngbTooltip",e.i18n[3][e.language])}}function m(e,t){if(1&e&&(n.Rb(0,"div"),n.Rb(1,"label",17),n.Ic(2),n.Qb(),n.Gc(3,d,1,1,"i",20),n.Qb()),2&e){const e=n.ec(2);n.yb(1),n.lc("for","",e.id,"Select"),n.kc("title",e.titlee),n.zb("aria-label",e.titlee),n.yb(1),n.Kc(" ",e.label," "),n.yb(1),n.jc("ngIf",null!=e.helpMessage&&""!=e.helpMessage.trim())}}function g(e,t){if(1&e&&(n.Rb(0,"div",21),n.Rb(1,"label",22),n.Ic(2),n.Qb(),n.Qb()),2&e){const e=n.ec(2);n.yb(1),n.kc("for",e.id),n.zb("aria-label",e.titlee),n.yb(1),n.Kc(" ",e.labelByPlaceholder," ")}}function f(e,t){if(1&e&&(n.Rb(0,"option",23),n.Ic(1),n.Qb()),2&e){const e=n.ec(2);n.jc("selected",null==e.selectedObject),n.yb(1),n.Kc(" ",e.minusOneLabel," ")}}function h(e,t){if(1&e&&(n.Rb(0,"option",24),n.Ic(1),n.Qb()),2&e){const e=n.ec(2);n.jc("selected",null==e.selectedObject),n.yb(1),n.Kc(" ",e.zeroLabel," ")}}function p(e,t){if(1&e&&(n.Rb(0,"option",25),n.Ic(1),n.Qb()),2&e){const e=n.ec(2);n.jc("selected",null==e.selectedObject),n.yb(1),n.Kc(" ",e.emptyLabel," ")}}function I(e,t){if(1&e&&(n.Rb(0,"option",26),n.Ic(1),n.Qb()),2&e){const e=t.$implicit,i=n.ec(2);n.kc("value",null!=e.id?e.id:e.value),n.jc("selected",null!=i.selectedObject&&(null!=e.id&&i.selectedObject.id==e.id||null!=e.value&&i.selectedObject.value==e.value)),n.yb(1),n.Mc(" ",null!=e.name?e.name:""," ",null==e.name&&null!=e.label?e.label:""," ",null==e.name&&null==e.label&&null!=e.identifier?e.identifier:""," ")}}const y=function(e){return{width:e}},v=function(){return{color:"#767676"}},j=function(){return{}};function O(e,t){if(1&e){const e=n.Sb();n.Rb(0,"div",5),n.Gc(1,b,3,5,"div",6),n.Rb(2,"div",5),n.Gc(3,m,4,5,"div",7),n.Gc(4,g,3,3,"div",8),n.Rb(5,"select",9),n.cc("change",function(){return n.Ac(e),n.ec().valueChanged()})("focus",function(){return n.Ac(e),n.ec().focused=!0})("blur",function(){return n.Ac(e),n.ec().focused=!1}),n.Gc(6,f,2,2,"option",10),n.Gc(7,h,2,2,"option",11),n.Gc(8,p,2,2,"option",12),n.Gc(9,I,2,5,"option",13),n.Qb(),n.Qb(),n.Nb(10,"div",14),n.Qb()}if(2&e){const e=n.ec();n.jc("ngStyle",n.pc(16,y,e.widthPerc+"%")),n.yb(1),n.jc("ngIf",!e.onlySelect),n.yb(1),n.jc("ngStyle",n.pc(18,y,(e.onlySelect?100:65)+"%")),n.yb(1),n.jc("ngIf",null!=e.titlee),n.yb(1),n.jc("ngIf",null!=e.labelByPlaceholder&&e.focused),n.yb(1),n.Cb("form-control rich-select-input ",e.className," ",e.isInvalid?"is-invalid":"",""),n.lc("id","",e.id,"Select"),n.jc("ngStyle",null==e.selectedObject?n.oc(20,v):n.oc(21,j))("disabled",e.onlyRead),n.yb(1),n.jc("ngIf",null!=e.minusOneLabel),n.yb(1),n.jc("ngIf",null!=e.zeroLabel),n.yb(1),n.jc("ngIf",null!=e.emptyLabel),n.yb(1),n.jc("ngForOf",e.objects)}}let M=(()=>{class e extends c.a{constructor(){super(null),this.infoContainEmitter=new n.n,this.filterObjectsEmitter=new n.n,this.valueChangedEmitter=new n.n}ngOnInit(){super.ngOnInit()}ngOnDestroy(){super.ngOnDestroy(),this.infoContainEmitter=null,this.filterObjectsEmitter=null,this.valueChangedEmitter=null}infoContain(){this.infoContainEmitter.emit()}filterObjects(){var e=document.getElementById(this.id+"Contain");this.filterObjectsEmitter.emit(e.value)}valueChanged(){var e=document.getElementById(this.id+"Select");this.valueChangedEmitter.emit(e.value)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Gb({type:e,selectors:[["rich-filter-selector"]],outputs:{infoContainEmitter:"infoContainEmitter",filterObjectsEmitter:"filterObjectsEmitter",valueChangedEmitter:"valueChangedEmitter"},features:[n.vb],decls:3,vars:3,consts:[["class","clear","style","margin-bottom: .3em;",4,"ngIf"],["class","clear","style","margin-bottom: .7em;",4,"ngIf"],["class","field",3,"ngStyle",4,"ngIf"],[1,"clear",2,"margin-bottom",".3em"],[1,"clear",2,"margin-bottom",".7em"],[1,"field",3,"ngStyle"],["class","field","style","width: 33%;",4,"ngIf"],[4,"ngIf"],["class","placeholderLabel",4,"ngIf"],[3,"id","ngStyle","disabled","change","focus","blur"],["value","-1",3,"selected",4,"ngIf"],["value","0",3,"selected",4,"ngIf"],["value","",3,"selected",4,"ngIf"],[3,"value","selected",4,"ngFor","ngForOf"],[1,"clear"],[1,"field",2,"width","33%"],[2,"width","100%",3,"id"],[3,"for","title"],["placement","top","tabIndex","0",1,"far","fa-question-circle","inputActionIcon",3,"ngbTooltip","click"],["placement","top","tabIndex","0",1,"fas","fa-filter","inputActionIcon",3,"ngbTooltip","click"],["class","far fa-question-circle inputActionIcon","placement","top","tabIndex","0",3,"ngbTooltip","click",4,"ngIf"],[1,"placeholderLabel"],[3,"for"],["value","-1",3,"selected"],["value","0",3,"selected"],["value","",3,"selected"],[3,"value","selected"]],template:function(e,t){1&e&&(n.Gc(0,s,1,0,"div",0),n.Gc(1,r,1,0,"div",1),n.Gc(2,O,11,22,"div",2)),2&e&&(n.jc("ngIf",t.breakBefore&&!t.breakBeforeDouble&&!t.noRender),n.yb(1),n.jc("ngIf",t.breakBeforeDouble&&!t.noRender),n.yb(1),n.jc("ngIf",!t.noRender))},directives:[l.j,l.k,l.i,o.i,a.p,a.u],encapsulation:2}),e})()},fFX4:function(e,t,i){"use strict";i.d(t,"a",function(){return p});var n=i("1dEi"),c=i("fCXb"),l=i("fXoL"),o=i("3Pt+"),a=i("ofXK"),s=i("1kSV");function r(e,t){1&e&&l.Nb(0,"div",3)}function u(e,t){1&e&&l.Nb(0,"div",4)}function b(e,t){if(1&e){const e=l.Sb();l.Rb(0,"i",14),l.cc("click",function(){return l.Ac(e),l.ec(3).help()}),l.Qb()}if(2&e){const e=l.ec(3);l.kc("ngbTooltip",e.i18n[3][e.language])}}function d(e,t){if(1&e&&(l.Rb(0,"div"),l.Rb(1,"label",12),l.Ic(2),l.Qb(),l.Gc(3,b,1,1,"i",13),l.Qb()),2&e){const e=l.ec(2);l.yb(1),l.kc("for",e.id),l.kc("title",e.titlee),l.zb("aria-label",e.titlee),l.yb(1),l.Kc(" ",e.label," "),l.yb(1),l.jc("ngIf",null!=e.helpMessage&&""!=e.helpMessage.trim())}}function m(e,t){1&e&&l.Nb(0,"div",11)}function g(e,t){if(1&e&&(l.Rb(0,"div",15),l.Nb(1,"div",16),l.Nb(2,"div",17),l.Qb()),2&e){const e=l.ec(2);l.Ab(e.onlyRead?"none":""),l.yb(1),l.lc("id","indicatorError_",e.id,""),l.yb(1),l.lc("id","indicatorInfo_",e.id,"")}}const f=function(e){return{width:e}};function h(e,t){if(1&e&&(l.Rb(0,"div",5),l.Gc(1,d,4,5,"div",6),l.Rb(2,"div"),l.Rb(3,"textarea",7),l.Ic(4,"\t    "),l.Qb(),l.Rb(5,"textarea",8),l.Ic(6,"\t\t"),l.Qb(),l.Qb(),l.Gc(7,m,1,0,"div",9),l.Gc(8,g,3,5,"div",10),l.Nb(9,"div",11),l.Qb()),2&e){const e=l.ec();l.jc("ngStyle",l.pc(12,f,e.widthPerc+"%")),l.yb(1),l.jc("ngIf",null!=e.label),l.yb(1),l.Cb("fieldset angular-editor-container ",e.className," ",e.isInvalid?"is-invalid":"",""),l.yb(1),l.kc("id",e.id),l.jc("formControl",e.ngControl.control),l.yb(2),l.kc("id",e.editorId),l.jc("placeholder",e.placeholderr),l.yb(2),l.jc("ngIf",e.minchars>0||e.maxchars>0),l.yb(1),l.jc("ngIf",e.minchars>0||e.maxchars>0)}}let p=(()=>{class e extends n.a{constructor(e){super(e),this.ngControl=e,this.stringService=new c.a}ngOnInit(){super.ngOnInit(),this.editorId=this.formControlName+"_richeditor"}ngOnDestroy(){this.stopInterval();try{tinymce.remove(this.editor)}catch(e){}this.editor=null,this.editorId=null,this.oldValue=null,this.secureMode=null,this.mobile=null,this.stringService=null,this.counter=0,super.ngOnDestroy()}ngAfterViewInit(){var e=this;tinymce.init({readonly:e.onlyRead?1:0,selector:"#"+e.editorId,theme:e.mobile?"mobile":"silver",plugins:e.getPlugins(),toolbar:e.getButtons(),menubar:!1,convert_urls:0,remove_script_host:0,setup:t=>{e.editor=t,t.on("init",()=>{e.initializeEditor()}),t.on("keyup",()=>{e.setContent(t.getContent())}),t.on("change",()=>{e.setContent(t.getContent())}),t.on("blur",()=>{e.subCounter(),e.setContent(t.getContent()),setTimeout(()=>{e.startInterval()},2e3)}),t.on("mouseleave",()=>{e.subCounter(),setTimeout(()=>{e.startInterval()},2e3)}),t.on("focus",()=>{e.stopInterval(),e.addCounter()}),t.on("mouseenter",()=>{e.stopInterval(),e.addCounter()})}})}getPlugins(){return this.secureMode?"lists, fullscreen":"lists, link, image, media, code, fullscreen"}getButtons(){var e="h1 h2 h3 h4 h5 h6 | bold italic underline ";return e+="| justifyleft justifycenter justifyright justifyfull ",(e+="| bullist numlist | forecolor backcolor ")+(this.secureMode?"| removeformat fullscreen":"| link image media | removeformat code fullscreen")}addCounter(){this.counter++}subCounter(){this.counter--}initializeEditor(){null==this.editor&&setTimeout(()=>{this.initializeEditor()},100),this.startInterval()}startInterval(){null!=this.interval||this.counter>0||(this.interval=setInterval(()=>{this.readToEditor()},500))}stopInterval(){null!=this.interval&&(clearInterval(this.interval),this.interval=null)}readToEditor(){if(null!=this.formGroup){var e=this.formGroup.value[this.formControlName];null==e&&(e=""),e.trim()!=this.oldValue&&(this.oldValue=e.trim(),this.adjustIndicator(e),this.editor.setContent(e),this.editor.contenteditable=!this.onlyRead,this.editor.getBody().style.backgroundColor=this.onlyRead?"#d0dde2":"#fff")}else this.stopInterval()}setContent(e){this.adjustIndicator(e),super.setContent(e)}adjustIndicator(e){var t=document.getElementById("indicatorError_"+this.id),i=document.getElementById("indicatorInfo_"+this.id);if(null!=t&&null!=i&&(t.innerHTML="",i.innerHTML="",this.minchars>0||this.maxchars>0)){var n=this.stringService.countSimpleChars(e),c=this.stringService.countWords(e),l="<br/>=> "+this.i18n[64][this.language]+" = "+c+" "+this.i18n[81][this.language]+".";this.minchars>0&&n<this.minchars?t.innerHTML="Aten\xe7\xe3o: Tamanho ["+n+"] menor que o m\xednimo ["+this.minchars+"]."+l:this.maxchars>0&&n>this.maxchars?t.innerHTML="Aten\xe7\xe3o: Tamanho ["+n+"] maior que o m\xe1ximo ["+this.maxchars+"]."+l:i.innerHTML="Ok: Tamanho ["+n+"] adequado ao intervalo m\xednimo/m\xe1ximo."+l}}}return e.\u0275fac=function(t){return new(t||e)(l.Mb(o.l))},e.\u0275cmp=l.Gb({type:e,selectors:[["rich-editor"]],inputs:{secureMode:"secureMode",mobile:"mobile"},features:[l.vb],decls:3,vars:3,consts:[["class","clear","style","margin-bottom: .3em;",4,"ngIf"],["class","clear","style","margin-bottom: .7em;",4,"ngIf"],["class","field",3,"ngStyle",4,"ngIf"],[1,"clear",2,"margin-bottom",".3em"],[1,"clear",2,"margin-bottom",".7em"],[1,"field",3,"ngStyle"],[4,"ngIf"],[1,"none",3,"id","formControl"],[3,"id","placeholder"],["class","clear",4,"ngIf"],["style","min-height: 2em;",3,"class",4,"ngIf"],[1,"clear"],[3,"for","title"],["class","far fa-question-circle inputActionIcon","placement","top","tabIndex","0",3,"ngbTooltip","click",4,"ngIf"],["placement","top","tabIndex","0",1,"far","fa-question-circle","inputActionIcon",3,"ngbTooltip","click"],[2,"min-height","2em"],[2,"background-color","#f75a36","border-radius",".3em","color","#fff","padding-left","1em",3,"id"],[2,"background-color","#3e7335","border-radius",".3em","color","#fff","padding-left","1em",3,"id"]],template:function(e,t){1&e&&(l.Gc(0,r,1,0,"div",0),l.Gc(1,u,1,0,"div",1),l.Gc(2,h,10,14,"div",2)),2&e&&(l.jc("ngIf",t.breakBefore&&!t.breakBeforeDouble&&!t.noRender),l.yb(1),l.jc("ngIf",t.breakBeforeDouble&&!t.noRender),l.yb(1),l.jc("ngIf",!t.noRender))},directives:[a.j,a.k,o.b,o.m,o.d,s.i],encapsulation:2}),e})()}}]);