(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"6Ucp":function(e,t,a){"use strict";a.r(t),a.d(t,"AppThemeModule",function(){return H});var i=a("ofXK"),n=a("3Pt+"),c=a("1kSV"),l=a("tyNb"),o=a("kYp3"),r=a("fXoL"),s=a("JqCM"),b=a("tk/3"),u=a("jhN1"),d=a("dlU0"),m=a("bZwt"),g=a("ONAA"),h=a("1tD9"),f=a("zT7k"),p=a("IVaK"),j=a("lc5t"),v=a("ZMR0"),y=a("ZEYb"),I=a("TDBB"),R=a("n/9U"),k=a("fcMv"),O=a("Ca8N"),D=a("/eUb");const A=function(){return{value:"0",label:"Imagem (*)",title:"Imagem"}},E=function(){return{value:"1",label:"Dados Gerais (*)",title:"Dados Gerais"}},w=function(e,t){return[e,t]};function T(e,t){if(1&e){const e=r.Sb();r.Rb(0,"rich-tab-bar",7),r.cc("setTabEmitter",function(t){return r.Ac(e),r.ec().setTab(t)}),r.Qb(),r.Rb(1,"section",8),r.Rb(2,"form",9),r.cc("ngSubmit",function(){return r.Ac(e),r.ec().onObjectFormSubmit()}),r.Rb(3,"div"),r.Rb(4,"rich-image-selector",10),r.cc("valueChangedEmitter",function(t){return r.Ac(e),r.ec().setSelectedImage(t)}),r.Qb(),r.Qb(),r.Rb(5,"div"),r.Nb(6,"rich-input-text",11),r.Nb(7,"rich-input-select",12),r.Nb(8,"rich-input-select",13),r.Rb(9,"rich-checkbox-multi",14),r.cc("valueChangedAddEmitter",function(t){return r.Ac(e),r.ec().checkTheme(t)})("valueChangedRemoveEmitter",function(t){return r.Ac(e),r.ec().uncheckTheme(t)}),r.Qb(),r.Nb(10,"rich-input-text",15),r.Nb(11,"rich-input-select",16),r.Nb(12,"rich-input-select",17),r.Nb(13,"rich-input-text",18),r.Nb(14,"rich-input-text",19),r.Nb(15,"rich-input-select",20),r.Nb(16,"div",21),r.Qb(),r.Rb(17,"form-action",22),r.cc("cancelDataEmitter",function(){return r.Ac(e),r.ec().cancelData()}),r.Qb(),r.Qb(),r.Qb()}if(2&e){const e=r.ec();r.jc("objects",r.qc(29,w,r.oc(27,A),r.oc(28,E)))("selectedTab",e.tab),r.yb(2),r.jc("formGroup",e.dataForm),r.yb(1),r.Ab(0==e.tab?"":"none"),r.yb(1),r.jc("oldSelectedObject",e.atualImage)("selectedObject",e.selectedImage)("objects",e.themeimages)("onlySelect",!0),r.yb(1),r.Ab(1==e.tab?"":"none"),r.yb(1),r.jc("formGroup",e.dataForm),r.yb(1),r.jc("objects",e.themes),r.yb(1),r.jc("objects",e.organizations),r.yb(1),r.jc("objects",e.themes)("selectedObjects",e.selectedThemes),r.yb(1),r.jc("formGroup",e.dataForm),r.yb(1),r.jc("objects",e.positionsX),r.yb(1),r.jc("objects",e.positionsY),r.yb(1),r.jc("formGroup",e.dataForm),r.yb(1),r.jc("formGroup",e.dataForm),r.yb(1),r.jc("objects",e.backgroundRepeats),r.yb(2),r.jc("validationMessages",e.validationMessages)("processValidation",e.processValidation)("additionalMsgsInfo",e.formInfo)}}function C(e,t){1&e&&(r.Rb(0,"th",33),r.Ic(1," A\xe7\xf5es "),r.Qb())}function S(e,t){1&e&&(r.Rb(0,"th",34),r.Ic(1," A\xe7\xf5es "),r.Qb())}const N=function(){return["admin_master"]};function P(e,t){if(1&e){const e=r.Sb();r.Rb(0,"tr",35),r.Nb(1,"td",36),r.Rb(2,"td",37),r.Rb(3,"div",38),r.Rb(4,"edit-delete-action",39),r.cc("lockEmitter",function(t){return r.Ac(e),r.ec(3).lock(t)})("unlockEmitter",function(t){return r.Ac(e),r.ec(3).unlock(t)})("showObjectEmitter",function(t){return r.Ac(e),r.ec(3).showObject(t)})("editObjectEmitter",function(t){return r.Ac(e),r.ec(3).editObject(t)})("deleteObjectEmitter",function(t){return r.Ac(e),r.ec(3).deleteObject(t)})("unDeleteObjectEmitter",function(t){return r.Ac(e),r.ec(3).unDeleteObject(t)}),r.Qb(),r.Qb(),r.Qb(),r.Qb()}if(2&e){const e=t.$implicit,a=r.ec(3),i=r.yc(9),n=r.yc(11),c=r.yc(7);r.yb(1),r.jc("innerHtml",e.name,r.Bc),r.yb(3),r.jc("auditingExclusions",a.auditingExclusions)("object",e)("logged",a.logged)("noAction",!r.oc(9,N).includes(a.logged.category))("objectDeleteConfirmation",i)("objectUnDeleteConfirmation",n)("lockUnLock",!0)("objectDetail",c)}}function x(e,t){if(1&e){const e=r.Sb();r.Rb(0,"table",25),r.Rb(1,"thead",26),r.Rb(2,"tr"),r.Rb(3,"th",27),r.Ic(4," Identifica\xe7\xe3o "),r.Qb(),r.Gc(5,C,2,0,"th",28),r.Gc(6,S,2,0,"th",29),r.Qb(),r.Qb(),r.Rb(7,"tbody"),r.Gc(8,P,5,10,"tr",30),r.Rb(9,"tr"),r.Rb(10,"td",31),r.Rb(11,"table-navigator",32),r.cc("previousPageEmitter",function(){return r.Ac(e),r.ec(2).previousPage()})("setPageEmitter",function(t){return r.Ac(e),r.ec(2).setPage(t)})("nextPageEmitter",function(){return r.Ac(e),r.ec(2).nextPage()})("adjustPaginationEmitter",function(t){return r.Ac(e),r.ec(2).adjustPagination(t)}),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb()}if(2&e){const e=r.ec(2);r.yb(5),r.jc("ngIf",!e.auditingExclusions),r.yb(1),r.jc("ngIf",e.auditingExclusions),r.yb(2),r.jc("ngForOf",e.objects)("ngForTrackBy",e.trackById),r.yb(3),r.jc("pages",e.pages)("selectedPage",e.selectedPage)("previousPageDisabled",e.previousPageDisabled)("nextPageDisabled",e.nextPageDisabled)("rowsPerPage",e.rowsPerPage)("pageRange",e.pageRange)("totalPages",e.totalPages)("totalRows",e.totalRows)("useAdjustPagination",!0)}}function Q(e,t){if(1&e&&(r.Rb(0,"section",23),r.Gc(1,x,12,13,"table",24),r.Qb()),2&e){const e=r.ec();r.yb(1),r.jc("ngIf",e.objects)}}function L(e,t){if(1&e&&(r.Rb(0,"tr"),r.Rb(1,"td",40),r.Nb(2,"img",41),r.Qb(),r.Qb(),r.Rb(3,"tr"),r.Rb(4,"th",42),r.Ic(5," Identifica\xe7\xe3o: "),r.Qb(),r.Rb(6,"td",43),r.Ic(7),r.Qb(),r.Qb(),r.Rb(8,"tr"),r.Rb(9,"th",44),r.Ic(10," Skin Default: "),r.Qb(),r.Nb(11,"td",36),r.Rb(12,"th",45),r.Ic(13," Org. Layout: "),r.Qb(),r.Nb(14,"td",46),r.Qb(),r.Rb(15,"tr"),r.Rb(16,"th",47),r.Ic(17," Altura Cab.: "),r.Qb(),r.Rb(18,"td",48),r.Ic(19),r.Qb(),r.Rb(20,"th",44),r.Ic(21," Repetir?: "),r.Qb(),r.Nb(22,"td",46),r.Qb(),r.Rb(23,"tr"),r.Rb(24,"th",44),r.Ic(25,"Posi\xe7\xe3o X: "),r.Qb(),r.Nb(26,"td",36),r.Rb(27,"th",44),r.Ic(28," Posi\xe7\xe3o Y: "),r.Qb(),r.Nb(29,"td",46),r.Qb(),r.Rb(30,"tr"),r.Rb(31,"th",44),r.Ic(32," Largura: "),r.Qb(),r.Rb(33,"td",48),r.Ic(34),r.Qb(),r.Rb(35,"th",44),r.Ic(36," Altura: "),r.Qb(),r.Rb(37,"td",49),r.Ic(38),r.Qb(),r.Qb()),2&e){const e=r.ec();r.yb(2),r.jc("src",e.atualImage.link,r.Cc),r.yb(5),r.Kc(" ",e.selectedObject.name," "),r.yb(4),r.jc("innerHtml",e.selectedObject.defaultThemeLabel,r.Bc),r.yb(3),r.jc("innerHtml",e.selectedObject.organizationLabel,r.Bc),r.yb(5),r.Kc(" ",e.selectedObject.imageHeight,"em "),r.yb(3),r.jc("innerHtml",e.selectedObject.backgroundRepeatLabel,r.Bc),r.yb(4),r.jc("innerHtml",e.selectedObject.positionXLabel,r.Bc),r.yb(3),r.jc("innerHtml",e.selectedObject.positionYLabel,r.Bc),r.yb(5),r.Kc(" ",e.selectedObject.backgroundWidth,"% "),r.yb(4),r.Kc(" ",e.selectedObject.backgroundHeight,"% ")}}function G(e,t){if(1&e){const e=r.Sb();r.Rb(0,"delete-confirmation",50),r.cc("cancelDataEmitter",function(){return r.Ac(e),r.ec().showObject()}),r.Qb()}if(2&e){const e=r.ec(),t=r.yc(5);r.jc("selectedObject",e.selectedObject)("templateOutlet",t)}}function F(e,t){if(1&e){const e=r.Sb();r.Rb(0,"delete-confirmation",51),r.cc("confirmDeleteObjectEmitter",function(t){return r.Ac(e),r.ec().confirmDeleteObject(t)})("cancelDataEmitter",function(){return r.Ac(e),r.ec().cancelData()}),r.Qb()}if(2&e){const e=r.ec(),t=r.yc(5);r.jc("selectedObject",e.selectedObject)("auditingExclusions",e.auditingExclusions)("templateOutlet",t)}}function M(e,t){if(1&e){const e=r.Sb();r.Rb(0,"delete-confirmation",52),r.cc("confirmDeleteObjectEmitter",function(t){return r.Ac(e),r.ec().confirmUnDeleteObject(t)})("cancelDataEmitter",function(){return r.Ac(e),r.ec().cancelData()}),r.Qb()}if(2&e){const e=r.ec(),t=r.yc(5);r.jc("selectedObject",e.selectedObject)("auditingExclusions",e.auditingExclusions)("templateOutlet",t)}}const z=[{path:"",component:(()=>{class e extends o.a{constructor(e,t,a,i,n,c,l,o,r,s,b){super(e,t,a,i,n,c,l,o,r,s,b)}ngOnInit(){this.setInitializationServices(["apptheme"]),this.crudService=this.appThemeService,this.sucessErrorMessages={200:"Tema Aplica\xe7\xe3o adicionado com sucesso.",201:"Tema Aplica\xe7\xe3o alterado com sucesso.",2010:"Tema Aplica\xe7\xe3o inativado com sucesso.",2011:"Tema Aplica\xe7\xe3o ativado com sucesso.",204:"Tema Aplica\xe7\xe3o exclu\xeddo com sucesso.",207:"Tema Aplica\xe7\xe3o restaurado com sucesso.",208:"Tema Aplica\xe7\xe3o exclu\xeddo [PERMANENTE] com sucesso."},this.listTitle="Temas",this.addTitle="Adicionar Tema Aplica\xe7\xe3o",this.editTitle="Editar Tema Aplica\xe7\xe3o",this.formInfo=["** Propriedades da imagem."],this.dataForm=new n.f({name:new n.c("",[n.s.required]),defaultTheme:new n.c("",[n.s.required]),organization:new n.c("",[n.s.required]),imageHeight:new n.c("",[n.s.required]),positionX:new n.c("",[n.s.required]),positionY:new n.c("",[n.s.required]),backgroundWidth:new n.c("",[n.s.required]),backgroundHeight:new n.c("",[n.s.required]),backgroundRepeat:new n.c("",[n.s.required])}),this.organizations=[{value:"mode01",label:"Navega\xe7\xe3o no Topo, Pol\xedticas Acima Navega\xe7\xe3o"},{value:"mode02",label:"Navega\xe7\xe3o no Topo, Pol\xedticas Abaixo Navega\xe7\xe3o"},{value:"mode03",label:"Navega\xe7\xe3o no Topo, Pol\xedticas no Rodap\xe9"},{value:"mode04",label:"T\xedtulo e Descri\xe7\xe3o + Imagem Acima, Navega\xe7\xe3o + Pol\xedticas Abaixo Imagem"},{value:"mode05",label:"Imagem Acima, Navega\xe7\xe3o + Pol\xedticas Abaixo Imagem"},{value:"mode06",label:"Navega\xe7\xe3o + Pol\xedticas Acima, T\xedtulo e Descri\xe7\xe3o + Imagem Abaixo Navega\xe7\xe3o"},{value:"mode07",label:"Navega\xe7\xe3o + Pol\xedticas Acima, Imagem Abaixo Navega\xe7\xe3o"}],this.positionsX=[{value:"left",label:"A esquerda"},{value:"center",label:"Centralizar"},{value:"right",label:"A direita"}],this.positionsY=[{value:"top",label:"Acima"},{value:"center",label:"Centralizar"},{value:"bottom",label:"Abaixo"}],this.backgroundRepeats=[{value:"repeat",label:"Repetir"},{value:"no-repeat",label:"N\xe3o Repetir"}],this.themeimages=[{value:"aircity-min.jpg",label:"Aircity"},{value:"aircity2-min.jpg",label:"Aircity 2"},{value:"autumforest-min.jpg",label:"Autum Forest"},{value:"bardcup-min.jpg",label:"Bard Cup"},{value:"calw01-min.jpg",label:"Calw 01 - Deutschland"},{value:"calw02-min.jpg",label:"Calw 02 - Deutschland"},{value:"calw03-min.jpg",label:"Calw 03 - Deutschland"},{value:"calw04-min.jpg",label:"Calw 04 - Deutschland"},{value:"calw05-min.jpg",label:"Calw 05 - Deutschland"},{value:"camping-min.jpg",label:"Camping"},{value:"citylogic-min.jpg",label:"City Logic"},{value:"cups-min.jpg",label:"Cups"},{value:"curvedsunset-min.jpg",label:"Curved Sunset"},{value:"dresden01-min.jpg",label:"Dresden 01 - Deutschland"},{value:"dresden02-min.jpeg",label:"Dresden 02 - Deutschland"},{value:"dresden03-min.jpg",label:"Dresden 03 - Deutschland"},{value:"dresden04-min.jpg",label:"Dresden 04 - Deutschland"},{value:"dresden05-min.jpg",label:"Dresden 05 - Deutschland"},{value:"dresden06-min.jpg",label:"Dresden 06 - Deutschland"},{value:"dresden07-min.jpg",label:"Dresden 07 - Deutschland"},{value:"dresden08-min.jpg",label:"Dresden 08 - Deutschland"},{value:"dresden09-min.jpg",label:"Dresden 09 - Deutschland"},{value:"flow-min.jpg",label:"Flow"},{value:"flowermountain-min.jpg",label:"Spring Mountain"},{value:"hemingway-min.jpg",label:"Hemingway"},{value:"lanterns-min.jpg",label:"Lanterns"},{value:"lowforest-min.jpg",label:"Low Forest"},{value:"nightcity-min.jpg",label:"Night City"},{value:"path-min.jpg",label:"Tree Weg"},{value:"pinkbridge-min.jpg",label:"Pink Bridge"},{value:"rivercity-min.jpg",label:"River City"},{value:"road-min.jpg",label:"Road"},{value:"schneestrasse-min.jpg",label:"Schnee Strasse"},{value:"smogpark-min.jpg",label:"Smog Park"},{value:"sunset-min.jpg",label:"Sunset"},{value:"sunshineonroad-min.jpg",label:"Sunshine On Road"},{value:"venicesunshine-min.jpg",label:"Venice Sunshine"},{value:"wintermountain-min.jpg",label:"Winter Mountain"}],super.ngOnInit()}afterNgOnInit(){this.parameterName="name"}ngOnDestroy(){this.organizations=null,this.positionsX=null,this.positionsY=null,this.backgroundRepeats=null,this.themeimages=null,this.selectedThemes=null,this.atualImage=null,this.selectedImage=null,super.ngOnDestroy()}checkTheme(e){this.selectedThemes=this.checkObjectOnOptions(this.selectedThemes,e)}uncheckTheme(e){this.selectedThemes=this.uncheckObjectOnOptions(this.selectedThemes,e)}setObject(e){if(super.setObject(e),this.dataForm.setValue({name:e.name,defaultTheme:e.defaultTheme,organization:e.organization,imageHeight:e.imageHeight,positionX:e.positionX,positionY:e.positionY,backgroundWidth:e.backgroundWidth,backgroundHeight:e.backgroundHeight,backgroundRepeat:e.backgroundRepeat}),this.selectedThemes=[],this.atualImage=null,this.selectedImage=null,null!=e&&null!=e.id&&e.id>0){var t=this.storageService.localStorageGetItem("_cdn_"+this.getAppId());this.atualImage={name:this.getLabelForKey(this.themeimages,e.image),link:t+"/headers/"+e.image,image:e.image},this.selectedThemes=e.themes.split(",")}}setSelectedObject(e){if(super.setSelectedObject(e),this.atualImage=null,null!=e&&null!=e.id&&e.id>0){var t=this.storageService.localStorageGetItem("_cdn_"+this.getAppId());this.atualImage={name:this.getLabelForKey(this.themeimages,e.image),link:t+"/headers/"+e.image,image:e.image}}}setSelectedImage(e){var t=this.storageService.localStorageGetItem("_cdn_"+this.getAppId());this.selectedImage={name:this.getLabelForKey(this.themeimages,e),link:t+"/headers/"+e,image:e}}prepareData(e){return e.defaultThemeLabel=this.getLabelForKey(this.themes,e.defaultTheme),e.organizationLabel=this.getLabelForKey(this.organizations,e.organization),e.backgroundRepeatLabel=this.getLabelForKey(this.backgroundRepeats,e.backgroundRepeat),e.positionXLabel=this.getLabelForKey(this.positionsX,e.positionX),e.positionYLabel=this.getLabelForKey(this.positionsY,e.positionY),e.backgroundRepeatLabel=this.getLabelForKey(this.backgroundRepeats,e.backgroundRepeat),e}makeSelectSearchedItemDestaked(e,t){return e.name=this.makeDestak(e.name,t),e}prepareToSaveUpdate(e){this.checkObjectOnOptions(this.selectedThemes,e.defaultTheme),e.themes=this.selectedThemes.join(",");var t=null==this.selectedImage?this.atualImage:this.selectedImage;return e.image=null!=t&&null!=t.image?t.image:"",e}preValidateToSaveUpdate(e){return this.emptyObject(this.selectedImage)&&this.emptyObject(this.atualImage)&&this.addValidationMessage("Imagem \xe9 requerida!"),!this.inValidationMsgs()}validateFormFields(){return this.errorRequired("name")&&this.addValidationMessage("Identifica\xe7\xe3o \xe9 requerida!"),this.errorRequired("defaultTheme")&&this.addValidationMessage("Skin Default \xe9 requerida!"),this.errorRequired("organization")&&this.addValidationMessage("Organiza\xe7\xe3o Layout \xe9 requerida!"),this.errorRequired("imageHeight")&&this.addValidationMessage("Altura Cabe\xe7alho Imagem \xe9 requerida!"),this.errorRequired("positionX")&&this.addValidationMessage("Posi\xe7\xe3o X Imagem \xe9 requerida!"),this.errorRequired("positionY")&&this.addValidationMessage("Posi\xe7\xe3o Y Imagem \xe9 requerida!"),this.errorRequired("backgroundWidth")&&this.addValidationMessage("Largura Imagem \xe9 requerida!"),this.errorRequired("backgroundHeight")&&this.addValidationMessage("Altura Imagem \xe9 requerida!"),this.errorRequired("backgroundRepeat")&&this.addValidationMessage("Repetir Imagem \xe9 requerida!"),!this.inValidationMsgs()}callbackAfterUpdate(e){this.listDataNoCache(),this.eventEmitterService.get("loadAppConfig").emit({})}}return e.\u0275fac=function(t){return new(t||e)(r.Mb(c.g),r.Mb(s.c),r.Mb(c.a),r.Mb(b.a),r.Mb(l.b),r.Mb(l.a),r.Mb(u.c),r.Mb(d.a),r.Mb(m.a),r.Mb(g.a),r.Mb(h.a))},e.\u0275cmp=r.Gb({type:e,selectors:[["apptheme-root"]],features:[r.vb],decls:12,vars:10,consts:[[3,"title","editing","searchForm","auditingExclusions","enabledAuditList","disabledAddNew","onSearchFormSubmitEmitter","listDataEmitter","listDataNoCacheEmitter","auditListEmitter","normalListEmitter","addObjectEmitter"],[3,"ngIf","ngIfElse"],["listObjects",""],["selectedObjectTemplate",""],["objectDetail",""],["objectDeleteConfirmation",""],["objectUnDeleteConfirmation",""],[3,"objects","selectedTab","setTabEmitter"],["aria-label","cadastro e altera\xe7\xe3o dos temas da aplica\xe7\xe3o",1,"dataForm"],[1,"dataForm",3,"formGroup","ngSubmit"],["id","selectTheme","label","Imagem Para o Tema","emptyLabel","Selecione",3,"oldSelectedObject","selectedObject","objects","onlySelect","valueChangedEmitter"],["label","Identifica\xe7\xe3o (*)","titlee","Identifica\xe7\xe3o","maxchars","30","formControlName","name","widthPerc","60","ngDefaultControl","",3,"formGroup"],["label","Skin Default (*)","titlee","Skin Default","formControlName","defaultTheme","widthPerc","39","ngDefaultControl","",3,"objects"],["label","Organiza\xe7\xe3o Layout (*)","titlee","Organiza\xe7\xe3o Layout","formControlName","organization","widthPerc","99","ngDefaultControl","",3,"objects"],["breakBefore","true","label","Skins Selecion\xe1veis","widthPerc","99","widthInput","10",3,"objects","selectedObjects","valueChangedAddEmitter","valueChangedRemoveEmitter"],["label","Altura Cab. (em) (*) (**)","titlee","Altura Cabe\xe7alho (em)","maxchars","2","minValue","10","maxValue","20","forNumber","true","formControlName","imageHeight","widthPerc","48","ngDefaultControl","",3,"formGroup"],["label","Posi\xe7\xe3o X (*) (**)","titlee","Posi\xe7\xe3o X","formControlName","positionX","widthPerc","25","ngDefaultControl","",3,"objects"],["label","Posi\xe7\xe3o Y (*) (**)","titlee","Posi\xe7\xe3o Y","formControlName","positionY","widthPerc","25","ngDefaultControl","",3,"objects"],["label","Largura (%) (*)","titlee","Largura (%)","maxchars","3","minValue","10","maxValue","100","forNumber","true","formControlName","backgroundWidth","widthPerc","33","ngDefaultControl","",3,"formGroup"],["label","Altura (%) (*)","titlee","Altura (%)","maxchars","3","minValue","10","maxValue","100","forNumber","true","formControlName","backgroundHeight","widthPerc","33","ngDefaultControl","",3,"formGroup"],["label","Repetir? (*) (**)","titlee","Repetir?","formControlName","backgroundRepeat","widthPerc","32","ngDefaultControl","",3,"objects"],[1,"clear"],[3,"validationMessages","processValidation","additionalMsgsInfo","cancelDataEmitter"],["aria-label","lista dos temas da aplica\xe7\xe3o"],["class","table","mdbTable","",4,"ngIf"],["mdbTable","",1,"table"],[1,"black","white-text"],["scope","col",2,"width","auto"],["scope","col","style","width: 9em;",4,"ngIf"],["scope","col","style","width: 5em;",4,"ngIf"],["mdbTableCol","",4,"ngFor","ngForOf","ngForTrackBy"],["colspan","2",1,"navigationBottom"],[3,"pages","selectedPage","previousPageDisabled","nextPageDisabled","rowsPerPage","pageRange","totalPages","totalRows","useAdjustPagination","previousPageEmitter","setPageEmitter","nextPageEmitter","adjustPaginationEmitter"],["scope","col",2,"width","9em"],["scope","col",2,"width","5em"],["mdbTableCol",""],[1,"text",3,"innerHtml"],[1,"actions"],[1,"buttons"],[3,"auditingExclusions","object","logged","noAction","objectDeleteConfirmation","objectUnDeleteConfirmation","lockUnLock","objectDetail","lockEmitter","unlockEmitter","showObjectEmitter","editObjectEmitter","deleteObjectEmitter","unDeleteObjectEmitter"],["colspan","4",1,"text","noBorderRight"],[2,"width","100%","height","10em","border","0",3,"src"],["scope","row",1,"text",2,"width","8em"],["colspan","3",1,"text","noBorderRight"],["scope","row",1,"text"],["scope","row","title","Organiza\xe7\xe3o Layout","aria-label","Organiza\xe7\xe3o Layout",1,"text",2,"width","7em"],[1,"text","noBorderRight",3,"innerHtml"],["scope","row","title","Altura Cabe\xe7alho","aria-label","Altura Cabe\xe7alho",1,"text"],[1,"text"],[1,"text","noBorderRight"],["label","Tema Aplica\xe7\xe3o","info","true","colspan","4",3,"selectedObject","templateOutlet","cancelDataEmitter"],["label","Tema Aplica\xe7\xe3o","colspan","4",3,"selectedObject","auditingExclusions","templateOutlet","confirmDeleteObjectEmitter","cancelDataEmitter"],["label","Tema Aplica\xe7\xe3o","redo","true","colspan","4",3,"selectedObject","auditingExclusions","templateOutlet","confirmDeleteObjectEmitter","cancelDataEmitter"]],template:function(e,t){if(1&e&&(r.Rb(0,"form-toolbar",0),r.cc("onSearchFormSubmitEmitter",function(){return t.onSearchFormSubmit()})("listDataEmitter",function(){return t.listData()})("listDataNoCacheEmitter",function(){return t.listDataNoCache()})("auditListEmitter",function(){return t.auditList()})("normalListEmitter",function(){return t.normalList()})("addObjectEmitter",function(){return t.addObject()}),r.Qb(),r.Gc(1,T,18,32,"ng-template",1),r.Gc(2,Q,2,1,"ng-template",null,2,r.Hc),r.Gc(4,L,39,10,"ng-template",null,3,r.Hc),r.Gc(6,G,1,2,"ng-template",null,4,r.Hc),r.Gc(8,F,1,3,"ng-template",null,5,r.Hc),r.Gc(10,M,1,3,"ng-template",null,6,r.Hc)),2&e){const e=r.yc(3);r.jc("title",t.title)("editing",t.editing)("searchForm",t.searchForm)("auditingExclusions",t.auditingExclusions)("enabledAuditList",r.oc(8,N).includes(t.logged.category))("disabledAddNew",!r.oc(9,N).includes(t.logged.category)),r.yb(1),r.jc("ngIf",t.editing)("ngIfElse",e)}},directives:[f.a,i.j,p.a,n.t,n.n,n.g,j.a,v.a,n.m,n.e,n.b,y.a,I.a,R.a,i.i,k.a,O.a,D.a],encapsulation:2}),e})()}];let B=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.Kb({type:e}),e.\u0275inj=r.Jb({imports:[[l.c.forChild(z)],l.c]}),e})();var q=a("kS8M");let H=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.Kb({type:e}),e.\u0275inj=r.Jb({imports:[[i.b,n.h,n.q,c.h,B,q.a]]}),e})()},IVaK:function(e,t,a){"use strict";a.d(t,"a",function(){return g});var i=a("fXoL"),n=a("1dEi"),c=a("ofXK"),l=a("1kSV");function o(e,t){1&e&&i.Nb(0,"div",4)}function r(e,t){1&e&&i.Nb(0,"div",5)}function s(e,t){if(1&e){const e=i.Sb();i.Rb(0,"span",13),i.cc("click",function(){i.Ac(e);const t=i.ec().$implicit;return i.ec(2).setTab(t.value)}),i.Qb()}if(2&e){const e=i.ec().$implicit,t=i.ec(2);i.Bb("nav-link ",t.isSelected(e.value)?"active":"",""),i.kc("ngbTooltip",e.title),i.jc("innerHtml",e.label,i.Bc),i.zb("aria-label",e.title)}}function b(e,t){if(1&e){const e=i.Sb();i.Rb(0,"span",14),i.cc("click",function(){i.Ac(e);const t=i.ec().$implicit;return i.ec(2).setTab(t.value)}),i.Qb()}if(2&e){const e=i.ec().$implicit,t=i.ec(2);i.Bb("nav-link ",t.isSelected(e.value)?"active":"",""),i.jc("innerHtml",e.label,i.Bc),i.zb("aria-label",e.title)}}function u(e,t){if(1&e){const e=i.Sb();i.Rb(0,"li",10),i.cc("click",function(t){return i.Ac(e),i.ec(2).stopPropagation(t)}),i.Gc(1,s,1,6,"span",11),i.Gc(2,b,1,5,"span",12),i.Qb()}if(2&e){const e=i.ec(2);i.yb(1),i.jc("ngIf",!e.forWizzard),i.yb(1),i.jc("ngIf",e.forWizzard)}}function d(e,t){if(1&e&&(i.Rb(0,"div",6),i.Rb(1,"ul",7),i.Gc(2,u,3,2,"li",8),i.Qb(),i.Nb(3,"div",9),i.Qb()),2&e){const e=i.ec();i.Bb("field ",e.className,""),i.yb(2),i.jc("ngForOf",e.objects)}}function m(e,t){1&e&&i.Nb(0,"div",15)}let g=(()=>{class e extends n.a{constructor(){super(null),this.setTabEmitter=new i.n}ngOnInit(){super.ngOnInit()}ngOnDestroy(){super.ngOnDestroy(),this.selectedTab=null,this.setTabEmitter=null,this.forWizzard=null}isSelected(e){if(null==this.selectedTab||null==e||""==e.trim())return!1;var t=(""+this.selectedTab).trim();return-1==(e=e.trim()).indexOf("|")?e==t:e.split("|")[1]==t}setTab(e){!this.forWizzard&&this.validateClick()&&this.setTabEmitter.emit(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Gb({type:e,selectors:[["rich-tab-bar"]],inputs:{selectedTab:"selectedTab",forWizzard:"forWizzard"},outputs:{setTabEmitter:"setTabEmitter"},features:[i.vb],decls:4,vars:4,consts:[["class","clear","style","margin-bottom: .3em;",4,"ngIf"],["class","clear","style","margin-bottom: .7em;",4,"ngIf"],["style","width: 100%;",3,"class",4,"ngIf"],["class","clear","style","width: 100%;",4,"ngIf"],[1,"clear",2,"margin-bottom",".3em"],[1,"clear",2,"margin-bottom",".7em"],[2,"width","100%"],[1,"nav","nav-tabs","justify-content-start",2,"margin-left",".5em"],["class","nav-item",3,"click",4,"ngFor","ngForOf"],[1,"clear",2,"margin-bottom",".4em"],[1,"nav-item",3,"click"],["placement","top",3,"class","ngbTooltip","innerHtml","click",4,"ngIf"],[3,"class","innerHtml","click",4,"ngIf"],["placement","top",3,"ngbTooltip","innerHtml","click"],[3,"innerHtml","click"],[1,"clear",2,"width","100%"]],template:function(e,t){1&e&&(i.Gc(0,o,1,0,"div",0),i.Gc(1,r,1,0,"div",1),i.Gc(2,d,4,4,"div",2),i.Gc(3,m,1,0,"div",3)),2&e&&(i.jc("ngIf",t.breakBefore&&!t.breakBeforeDouble&&!t.noRender),i.yb(1),i.jc("ngIf",t.breakBeforeDouble&&!t.noRender),i.yb(1),i.jc("ngIf",!t.noRender),i.yb(1),i.jc("ngIf",!t.noRender))},directives:[c.j,c.i,l.i],encapsulation:2}),e})()},ZEYb:function(e,t,a){"use strict";a.d(t,"a",function(){return O});var i=a("fXoL"),n=a("1dEi"),c=a("3Pt+"),l=a("ofXK"),o=a("1kSV");function r(e,t){1&e&&i.Nb(0,"div",3)}function s(e,t){1&e&&i.Nb(0,"div",4)}function b(e,t){if(1&e){const e=i.Sb();i.Rb(0,"i",14),i.cc("click",function(){return i.Ac(e),i.ec(3).help()}),i.Qb()}if(2&e){const e=i.ec(3);i.kc("ngbTooltip",e.i18n[3][e.language])}}function u(e,t){if(1&e&&(i.Rb(0,"div"),i.Rb(1,"label",12),i.Ic(2),i.Qb(),i.Gc(3,b,1,1,"i",13),i.Qb()),2&e){const e=i.ec(2);i.yb(1),i.kc("for",e.id),i.kc("title",e.titlee),i.zb("aria-label",e.titlee),i.yb(1),i.Kc(" ",e.label," "),i.yb(1),i.jc("ngIf",null!=e.helpMessage&&""!=e.helpMessage.trim())}}function d(e,t){if(1&e&&(i.Rb(0,"div",15),i.Rb(1,"label",16),i.Ic(2),i.Qb(),i.Qb()),2&e){const e=i.ec(2);i.yb(1),i.kc("for",e.id),i.zb("aria-label",e.titlee),i.yb(1),i.Kc(" ",e.labelByPlaceholder," ")}}function m(e,t){if(1&e&&(i.Rb(0,"option",22),i.Ic(1),i.Qb()),2&e){const e=i.ec(3);i.jc("selected",null==e.ngControl.control.value),i.yb(1),i.Kc(" ",e.minusOneLabel," ")}}function g(e,t){if(1&e&&(i.Rb(0,"option",23),i.Ic(1),i.Qb()),2&e){const e=i.ec(3);i.jc("selected",null==e.ngControl.control.value),i.yb(1),i.Kc(" ",e.zeroLabel," ")}}function h(e,t){if(1&e&&(i.Rb(0,"option",24),i.Ic(1),i.Qb()),2&e){const e=i.ec(3);i.jc("selected",null==e.ngControl.control.value),i.yb(1),i.Kc(" ",e.emptyLabel," ")}}function f(e,t){if(1&e&&(i.Rb(0,"option",25),i.Ic(1),i.Qb()),2&e){const e=t.$implicit;i.kc("value",null!=e.id?e.id:e.value),i.yb(1),i.Mc(" ",null!=e.name?e.name:""," ",null==e.name&&null!=e.label?e.label:""," ",null==e.name&&null==e.label&&null!=e.identifier?e.identifier:""," ")}}const p=function(){return{color:"#767676"}},j=function(){return{}};function v(e,t){if(1&e){const e=i.Sb();i.Rb(0,"select",17),i.cc("change",function(){return i.Ac(e),i.ec(2).valueChanged()})("focus",function(){return i.Ac(e),i.ec(2).focused=!0})("blur",function(){return i.Ac(e),i.ec(2).focused=!1}),i.Gc(1,m,2,2,"option",18),i.Gc(2,g,2,2,"option",19),i.Gc(3,h,2,2,"option",20),i.Gc(4,f,2,4,"option",21),i.Qb()}if(2&e){const e=i.ec(2);i.Bb("form-control clickable ",e.className,""),i.Eb("is-invalid",e.isInvalid),i.kc("id",e.id),i.jc("ngStyle",e.empty?i.oc(12,p):i.oc(13,j))("formControl",e.ngControl.control),i.yb(1),i.jc("ngIf",null!=e.minusOneLabel),i.yb(1),i.jc("ngIf",null!=e.zeroLabel),i.yb(1),i.jc("ngIf",null!=e.emptyLabel),i.yb(1),i.jc("ngForOf",e.objects)}}function y(e,t){if(1&e&&i.Nb(0,"input",26),2&e){const e=i.ec(2);i.kc("id",e.id),i.jc("formControl",e.ngControl.control)}}function I(e,t){if(1&e&&i.Nb(0,"input",27),2&e){const e=i.ec(2);i.Bb("form-control ",e.className,""),i.lc("id","",e.id,"_fake"),i.jc("value",e.readOnlyLabel)}}const R=function(e){return{width:e}};function k(e,t){if(1&e&&(i.Rb(0,"div",5),i.Gc(1,u,4,5,"div",6),i.Gc(2,d,3,3,"div",7),i.Gc(3,v,5,14,"select",8),i.Gc(4,y,1,2,"input",9),i.Gc(5,I,1,5,"input",10),i.Nb(6,"div",11),i.Qb()),2&e){const e=i.ec();i.jc("ngStyle",i.pc(6,R,e.widthPerc+"%")),i.yb(1),i.jc("ngIf",null!=e.label),i.yb(1),i.jc("ngIf",null!=e.labelByPlaceholder&&e.focused),i.yb(1),i.jc("ngIf",!e.onlyRead),i.yb(1),i.jc("ngIf",e.onlyRead),i.yb(1),i.jc("ngIf",e.onlyRead)}}let O=(()=>{class e extends n.a{constructor(e){super(e),this.ngControl=e,this.valueChangedEmitter=new i.n}ngOnInit(){super.ngOnInit(),this.empty=!0}ngOnDestroy(){super.ngOnDestroy(),this.valueChangedEmitter=null,this.empty=null}valueChanged(){var e=document.getElementById(this.id);this.empty=["","0","-1",0,-1].includes(e.value),this.valueChangedEmitter.emit(e.value)}}return e.\u0275fac=function(t){return new(t||e)(i.Mb(c.l))},e.\u0275cmp=i.Gb({type:e,selectors:[["rich-input-select"]],outputs:{valueChangedEmitter:"valueChangedEmitter"},features:[i.vb],decls:3,vars:3,consts:[["class","clear","style","margin-bottom: .3em;",4,"ngIf"],["class","clear","style","margin-bottom: .7em;",4,"ngIf"],["class","field",3,"ngStyle",4,"ngIf"],[1,"clear",2,"margin-bottom",".3em"],[1,"clear",2,"margin-bottom",".7em"],[1,"field",3,"ngStyle"],[4,"ngIf"],["class","placeholderLabel",4,"ngIf"],["style","height: calc(1.5em + 0.65rem + 2px);",3,"id","class","ngStyle","is-invalid","formControl","change","focus","blur",4,"ngIf"],["type","text","style","display: none !important;","readonly","true",3,"id","formControl",4,"ngIf"],["type","text","style","width: 100%;","readonly","true",3,"id","class","value",4,"ngIf"],[1,"clear"],[3,"for","title"],["class","far fa-question-circle inputActionIcon","placement","top","tabIndex","0",3,"ngbTooltip","click",4,"ngIf"],["placement","top","tabIndex","0",1,"far","fa-question-circle","inputActionIcon",3,"ngbTooltip","click"],[1,"placeholderLabel"],[3,"for"],[2,"height","calc(1.5em + 0.65rem + 2px)",3,"id","ngStyle","formControl","change","focus","blur"],["value","-1",3,"selected",4,"ngIf"],["value","0",3,"selected",4,"ngIf"],["value","",3,"selected",4,"ngIf"],[3,"value",4,"ngFor","ngForOf"],["value","-1",3,"selected"],["value","0",3,"selected"],["value","",3,"selected"],[3,"value"],["type","text","readonly","true",2,"display","none !important",3,"id","formControl"],["type","text","readonly","true",2,"width","100%",3,"id","value"]],template:function(e,t){1&e&&(i.Gc(0,r,1,0,"div",0),i.Gc(1,s,1,0,"div",1),i.Gc(2,k,7,8,"div",2)),2&e&&(i.jc("ngIf",t.breakBefore&&!t.breakBeforeDouble&&!t.noRender),i.yb(1),i.jc("ngIf",t.breakBeforeDouble&&!t.noRender),i.yb(1),i.jc("ngIf",!t.noRender))},directives:[l.j,l.k,o.i,c.r,c.m,c.d,l.i,c.p,c.u,c.b],encapsulation:2}),e})()}}]);