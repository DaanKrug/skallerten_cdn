(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{IVaK:function(e,t,i){"use strict";i.d(t,"a",function(){return f});var n=i("fXoL"),a=i("1dEi"),c=i("ofXK"),o=i("1kSV");function s(e,t){1&e&&n.Nb(0,"div",4)}function l(e,t){1&e&&n.Nb(0,"div",5)}function r(e,t){if(1&e){const e=n.Sb();n.Rb(0,"span",13),n.cc("click",function(){n.Ac(e);const t=n.ec().$implicit;return n.ec(2).setTab(t.value)}),n.Qb()}if(2&e){const e=n.ec().$implicit,t=n.ec(2);n.Bb("nav-link ",t.isSelected(e.value)?"active":"",""),n.kc("ngbTooltip",e.title),n.jc("innerHtml",e.label,n.Bc),n.zb("aria-label",e.title)}}function b(e,t){if(1&e){const e=n.Sb();n.Rb(0,"span",14),n.cc("click",function(){n.Ac(e);const t=n.ec().$implicit;return n.ec(2).setTab(t.value)}),n.Qb()}if(2&e){const e=n.ec().$implicit,t=n.ec(2);n.Bb("nav-link ",t.isSelected(e.value)?"active":"",""),n.jc("innerHtml",e.label,n.Bc),n.zb("aria-label",e.title)}}function u(e,t){if(1&e){const e=n.Sb();n.Rb(0,"li",10),n.cc("click",function(t){return n.Ac(e),n.ec(2).stopPropagation(t)}),n.Gc(1,r,1,6,"span",11),n.Gc(2,b,1,5,"span",12),n.Qb()}if(2&e){const e=n.ec(2);n.yb(1),n.jc("ngIf",!e.forWizzard),n.yb(1),n.jc("ngIf",e.forWizzard)}}function d(e,t){if(1&e&&(n.Rb(0,"div",6),n.Rb(1,"ul",7),n.Gc(2,u,3,2,"li",8),n.Qb(),n.Nb(3,"div",9),n.Qb()),2&e){const e=n.ec();n.Bb("field ",e.className,""),n.yb(2),n.jc("ngForOf",e.objects)}}function m(e,t){1&e&&n.Nb(0,"div",15)}let f=(()=>{class e extends a.a{constructor(){super(null),this.setTabEmitter=new n.n}ngOnInit(){super.ngOnInit()}ngOnDestroy(){super.ngOnDestroy(),this.selectedTab=null,this.setTabEmitter=null,this.forWizzard=null}isSelected(e){if(null==this.selectedTab||null==e||""==e.trim())return!1;var t=(""+this.selectedTab).trim();return-1==(e=e.trim()).indexOf("|")?e==t:e.split("|")[1]==t}setTab(e){!this.forWizzard&&this.validateClick()&&this.setTabEmitter.emit(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Gb({type:e,selectors:[["rich-tab-bar"]],inputs:{selectedTab:"selectedTab",forWizzard:"forWizzard"},outputs:{setTabEmitter:"setTabEmitter"},features:[n.vb],decls:4,vars:4,consts:[["class","clear","style","margin-bottom: .3em;",4,"ngIf"],["class","clear","style","margin-bottom: .7em;",4,"ngIf"],["style","width: 100%;",3,"class",4,"ngIf"],["class","clear","style","width: 100%;",4,"ngIf"],[1,"clear",2,"margin-bottom",".3em"],[1,"clear",2,"margin-bottom",".7em"],[2,"width","100%"],[1,"nav","nav-tabs","justify-content-start",2,"margin-left",".5em"],["class","nav-item",3,"click",4,"ngFor","ngForOf"],[1,"clear",2,"margin-bottom",".4em"],[1,"nav-item",3,"click"],["placement","top",3,"class","ngbTooltip","innerHtml","click",4,"ngIf"],[3,"class","innerHtml","click",4,"ngIf"],["placement","top",3,"ngbTooltip","innerHtml","click"],[3,"innerHtml","click"],[1,"clear",2,"width","100%"]],template:function(e,t){1&e&&(n.Gc(0,s,1,0,"div",0),n.Gc(1,l,1,0,"div",1),n.Gc(2,d,4,4,"div",2),n.Gc(3,m,1,0,"div",3)),2&e&&(n.jc("ngIf",t.breakBefore&&!t.breakBeforeDouble&&!t.noRender),n.yb(1),n.jc("ngIf",t.breakBeforeDouble&&!t.noRender),n.yb(1),n.jc("ngIf",!t.noRender),n.yb(1),n.jc("ngIf",!t.noRender))},directives:[c.j,c.i,o.i],encapsulation:2}),e})()},NQX8:function(e,t,i){"use strict";i.d(t,"a",function(){return m});var n=i("fXoL"),a=i("RwhR"),c=i("ofXK");function o(e,t){if(1&e){const e=n.Sb();n.Rb(0,"i",14),n.cc("click",function(){return n.Ac(e),n.ec().help()}),n.Qb()}if(2&e){const e=n.ec();n.kc("ngbTooltip",e.i18n[3][e.language])}}function s(e,t){if(1&e&&(n.Rb(0,"div"),n.Rb(1,"span",15),n.Ic(2),n.Qb(),n.Qb()),2&e){const e=n.ec();n.yb(2),n.Mc(" ",e.i18n[4][e.language]," ",e.timeout," ",e.i18n[5][e.language]," ")}}function l(e,t){if(1&e&&(n.Rb(0,"span"),n.Ic(1),n.Qb()),2&e){const e=n.ec(2);n.yb(1),n.Kc(" ",e.i18n[6][e.language]," ")}}function r(e,t){if(1&e&&(n.Rb(0,"span"),n.Ic(1),n.Qb()),2&e){const e=n.ec(2);n.yb(1),n.Kc(" ",e.i18n[7][e.language]," ")}}function b(e,t){if(1&e){const e=n.Sb();n.Rb(0,"button",12),n.cc("click",function(){return n.Ac(e),n.ec().cancelContinueProcess()}),n.Nb(1,"i",16),n.Gc(2,l,2,1,"span",8),n.Gc(3,r,2,1,"span",8),n.Qb()}if(2&e){const e=n.ec();n.yb(2),n.jc("ngIf",e.fitMode),n.yb(1),n.jc("ngIf",!e.fitMode)}}function u(e,t){if(1&e&&(n.Rb(0,"span"),n.Ic(1),n.Qb()),2&e){const e=n.ec();n.yb(1),n.Kc(" ",e.i18n[8][e.language]," ")}}function d(e,t){if(1&e&&(n.Rb(0,"span"),n.Ic(1),n.Qb()),2&e){const e=n.ec();n.yb(1),n.Kc(" ",e.i18n[9][e.language]," ")}}let m=(()=>{class e extends a.a{constructor(){super(),this.confirmContinueProcessEmitter=new n.n,this.cancelContinueProcessEmitter=new n.n,this.timeoutEmitter=new n.n}ngOnInit(){setTimeout(()=>{this.setContent()},10),this.startTimeoutInterval()}ngOnDestroy(){this.titlee=null,this.content=null,this.noCancel=null,this.confirmContinueProcessEmitter=null,this.cancelContinueProcessEmitter=null,this.timeoutEmitter=null,this.timeout=null,this.clearTimeoutInterval()}minusTimeoutInterval(){if(!(this.timeout>0))return this.clearTimeoutInterval(),void this.timedout();this.timeout--}startTimeoutInterval(){null==this.timeoutInterval&&null!=this.timeout&&this.timeout>0&&(this.timeoutInterval=setInterval(()=>{this.minusTimeoutInterval()},1e3))}clearTimeoutInterval(){null!=this.timeoutInterval&&(clearInterval(this.timeoutInterval),this.timeoutInterval=null)}setContent(){var e=document.getElementById("contentConfirmationTitle"),t=document.getElementById("contentConfirmationBody");null!=e&&null!=t?(e.innerHTML=this.titlee,t.innerHTML=this.content):setTimeout(()=>{this.setContent()},10)}confirmContinueProcess(){this.confirmContinueProcessEmitter.emit()}cancelContinueProcess(){this.cancelContinueProcessEmitter.emit()}timedout(){this.timeoutEmitter.emit()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Gb({type:e,selectors:[["continue-confirmation"]],inputs:{titlee:"titlee",content:"content",noCancel:"noCancel",timeout:"timeout"},outputs:{confirmContinueProcessEmitter:"confirmContinueProcessEmitter",cancelContinueProcessEmitter:"cancelContinueProcessEmitter",timeoutEmitter:"timeoutEmitter"},features:[n.vb],decls:23,vars:6,consts:[[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],[1,"modal-body"],[1,"table","tableInfo"],["id","contentConfirmationTitle"],["class","far fa-question-circle inputActionIcon","placement","top","tabIndex","0",3,"ngbTooltip","click",4,"ngIf"],[1,"noBorderRight",2,"font-size",".9em"],["id","contentConfirmationBody"],[4,"ngIf"],[1,"modal-footer"],[1,"buttons","clear"],["class","btn btn-primary clickable",3,"click",4,"ngIf"],[1,"btn","btn-primary","clickable",3,"click"],[1,"fas","fa-check-double",2,"margin-right",".5em"],["placement","top","tabIndex","0",1,"far","fa-question-circle","inputActionIcon",3,"ngbTooltip","click"],[2,"color","#d01616"],[1,"fas","fa-ban",2,"margin-right",".5em"]],template:function(e,t){1&e&&(n.Rb(0,"div",0),n.Rb(1,"h4",1),n.Ic(2),n.Qb(),n.Qb(),n.Rb(3,"div",2),n.Rb(4,"table",3),n.Rb(5,"thead"),n.Rb(6,"tr"),n.Rb(7,"th"),n.Rb(8,"h5"),n.Nb(9,"span",4),n.Gc(10,o,1,1,"i",5),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(11,"tbody"),n.Rb(12,"tr"),n.Rb(13,"td",6),n.Nb(14,"div",7),n.Gc(15,s,3,3,"div",8),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(16,"div",9),n.Rb(17,"div",10),n.Gc(18,b,4,2,"button",11),n.Rb(19,"button",12),n.cc("click",function(){return t.confirmContinueProcess()}),n.Nb(20,"i",13),n.Gc(21,u,2,1,"span",8),n.Gc(22,d,2,1,"span",8),n.Qb(),n.Qb(),n.Qb()),2&e&&(n.yb(2),n.Kc(" ",t.i18n[2][t.language]," "),n.yb(8),n.jc("ngIf",null!=t.helpMessage&&""!=t.helpMessage.trim()),n.yb(5),n.jc("ngIf",null!=t.timeout&&t.timeout>0),n.yb(3),n.jc("ngIf",!t.noCancel),n.yb(3),n.jc("ngIf",t.fitMode),n.yb(1),n.jc("ngIf",!t.fitMode))},directives:[c.j],encapsulation:2}),e})()},PpFK:function(e,t,i){"use strict";i.r(t),i.d(t,"WsubmissionevaluationModule",function(){return U});var n=i("ofXK"),a=i("3Pt+"),c=i("1kSV"),o=i("tmjD"),s=i("tyNb"),l=i("kYp3"),r=i("fXoL"),b=i("JqCM"),u=i("tk/3"),d=i("jhN1"),m=i("dlU0"),f=i("bZwt"),h=i("ONAA"),g=i("1tD9"),p=i("zT7k"),v=i("n6RT"),y=i("Ca8N"),j=i("IVaK"),I=i("/eUb"),R=i("NQX8");function O(e,t){1&e&&(r.Rb(0,"th",25),r.Ic(1," A\xe7\xf5es "),r.Qb())}function Q(e,t){1&e&&(r.Rb(0,"th",26),r.Ic(1," A\xe7\xf5es "),r.Qb())}function E(e,t){1&e&&(r.Rb(0,"tr",20),r.Rb(1,"td",27),r.Rb(2,"em"),r.Ic(3,"Nenhuma avalia\xe7\xe3o encontrada para este trabalho."),r.Qb(),r.Qb(),r.Qb())}function S(e,t){1&e&&(r.Rb(0,"div",39),r.Rb(1,"div",40),r.Nb(2,"i",41),r.Rb(3,"span"),r.Ic(4," Submiss\xe3o desclassificada por estar fora das regras do evento! "),r.Qb(),r.Qb(),r.Nb(5,"div",42),r.Qb())}function A(e,t){1&e&&(r.Rb(0,"div",39),r.Rb(1,"div",40),r.Nb(2,"i",41),r.Rb(3,"span"),r.Ic(4," Submiss\xe3o desclassificada por suspeita de pl\xe1gio! "),r.Qb(),r.Qb(),r.Nb(5,"div",42),r.Qb())}function T(e,t){if(1&e&&(r.Rb(0,"td",21),r.Nb(1,"div",37),r.Gc(2,S,6,0,"div",38),r.Gc(3,A,6,0,"div",38),r.Qb()),2&e){const e=r.ec().$implicit;r.yb(1),r.jc("innerHtml",e.a9_conceptLabel,r.Bc),r.yb(1),r.jc("ngIf",e.a11_outofsubmissionrules),r.yb(1),r.jc("ngIf",e.a12_hasplagiarism)}}function w(e,t){1&e&&(r.Rb(0,"td",43),r.Ic(1," Avalia\xe7\xe3o n\xe3o Confirmada/Finalizada "),r.Qb())}function C(e,t){if(1&e){const e=r.Sb();r.Rb(0,"button",44),r.cc("click",function(){r.Ac(e);const t=r.ec().$implicit,i=r.ec(2),n=r.yc(12);return i.returnEvaluatioToEvaluator(t.id,n)}),r.Nb(1,"i",45),r.Qb()}if(2&e){const e=r.ec().$implicit;r.jc("disabled",!e.a7_finished)}}const _=function(){return["admin_master"]},D=function(){return["admin"]},N=function(){return["aproved","reproved","presented"]};function k(e,t){if(1&e){const e=r.Sb();r.Rb(0,"tr",20),r.Nb(1,"td",28),r.Nb(2,"td",28),r.Nb(3,"td",29),r.Rb(4,"td",21),r.Nb(5,"rich-yesno-marker",30),r.Qb(),r.Nb(6,"td",29),r.Gc(7,T,4,3,"td",31),r.Gc(8,w,2,0,"td",32),r.Rb(9,"td",33),r.Rb(10,"div",34),r.Gc(11,C,2,1,"button",35),r.Rb(12,"edit-delete-action",36),r.cc("editObjectEmitter",function(t){return r.Ac(e),r.ec(2).editObject(t)})("showObjectEmitter",function(t){return r.Ac(e),r.ec(2).showObject(t)})("deleteObjectEmitter",function(t){return r.Ac(e),r.ec(2).deleteObject(t)})("unDeleteObjectEmitter",function(t){return r.Ac(e),r.ec(2).unDeleteObject(t)}),r.Qb(),r.Qb(),r.Qb(),r.Qb()}if(2&e){const e=t.$implicit,i=r.ec(2),n=r.yc(6),a=r.yc(8),c=r.yc(10);r.yb(1),r.jc("innerHtml",e.a1_name,r.Bc),r.yb(1),r.jc("innerHtml",e.a2_email,r.Bc),r.yb(1),r.jc("innerHtml",e.a3_position,r.Bc),r.yb(2),r.jc("yes",e.a7_finished),r.yb(1),r.jc("innerHtml",e.averageLabel,r.Bc),r.yb(1),r.jc("ngIf",e.a7_finished),r.yb(1),r.jc("ngIf",!e.a7_finished),r.yb(3),r.jc("ngIf",!i.auditingExclusions),r.yb(1),r.jc("auditingExclusions",i.auditingExclusions)("object",e)("logged",i.logged)("noEdit",!0)("noAction",!r.oc(16,_).includes(i.logged.category)&&!(r.oc(17,D).includes(i.logged.category)&&i.permissions.includes("appointmentpage_write"))||r.oc(18,N).includes(i.submission.a4_status)||e.a7_finished&&!i.auditingExclusions)("objectDetail",n)("objectDeleteConfirmation",a)("objectUnDeleteConfirmation",c)}}function x(e,t){if(1&e&&(r.Rb(0,"table",8),r.Rb(1,"thead",9),r.Rb(2,"tr"),r.Rb(3,"th",10),r.Ic(4," Avaliador "),r.Qb(),r.Rb(5,"th",11),r.Ic(6," E-mail "),r.Qb(),r.Rb(7,"th",12),r.Ic(8," Ord. "),r.Qb(),r.Rb(9,"th",13),r.Ic(10," Fin. "),r.Qb(),r.Rb(11,"th",14),r.Ic(12," M\xe9dia "),r.Qb(),r.Rb(13,"th",15),r.Ic(14," Conceito "),r.Qb(),r.Gc(15,O,2,0,"th",16),r.Gc(16,Q,2,0,"th",17),r.Qb(),r.Qb(),r.Rb(17,"tbody"),r.Gc(18,E,4,0,"tr",18),r.Gc(19,k,13,19,"tr",19),r.Rb(20,"tr",20),r.Rb(21,"td",21),r.Rb(22,"strong"),r.Ic(23,"M\xe9dia Final/Conceito Final"),r.Qb(),r.Qb(),r.Nb(24,"td",21),r.Nb(25,"td",21),r.Nb(26,"td",21),r.Rb(27,"td",22),r.Rb(28,"strong"),r.Ic(29),r.Qb(),r.Qb(),r.Rb(30,"td",21),r.Rb(31,"strong"),r.Ic(32),r.Qb(),r.Qb(),r.Nb(33,"td",23),r.Qb(),r.Rb(34,"tr"),r.Nb(35,"td",24),r.Qb(),r.Qb(),r.Qb()),2&e){const e=r.ec();r.yb(15),r.jc("ngIf",!e.auditingExclusions),r.yb(1),r.jc("ngIf",e.auditingExclusions),r.yb(2),r.jc("ngIf",e.emptyArray(e.objects)),r.yb(1),r.jc("ngForOf",e.objects)("ngForTrackBy",e.trackById),r.yb(10),r.Jc(e.submission.finalAverageLabel),r.yb(3),r.Jc(e.submission.finalConceptLabel)}}function P(e,t){if(1&e&&(r.Rb(0,"tr",20),r.Rb(1,"td",21),r.Ic(2),r.Qb(),r.Rb(3,"td",22),r.Ic(4),r.Qb(),r.Rb(5,"td",22),r.Ic(6),r.Qb(),r.Rb(7,"td",23),r.Ic(8),r.Qb(),r.Qb()),2&e){const e=t.$implicit;r.yb(2),r.Lc(" ",e.a5_position," - ",e.a4_evaluationpointname," "),r.yb(2),r.Kc(" ",e.a1_valueLabel," "),r.yb(2),r.Kc(" ",e.a7_weight," "),r.yb(2),r.Kc(" ",e.a2_relevanceLabel," ")}}function M(e,t){if(1&e&&(r.Rb(0,"table",8),r.Rb(1,"thead",9),r.Rb(2,"tr"),r.Rb(3,"th",59),r.Ic(4," Ponto de Avalia\xe7\xe3o "),r.Qb(),r.Rb(5,"th",60),r.Ic(6," Nota "),r.Qb(),r.Rb(7,"th",61),r.Ic(8," Peso (%) "),r.Qb(),r.Rb(9,"th",62),r.Ic(10," Relev\xe2ncia "),r.Qb(),r.Qb(),r.Qb(),r.Rb(11,"tbody"),r.Gc(12,P,9,5,"tr",19),r.Rb(13,"tr"),r.Nb(14,"td",63),r.Qb(),r.Qb(),r.Qb()),2&e){const e=r.ec(2);r.yb(12),r.jc("ngForOf",e.selectedObject.submissionevaluationpoints)("ngForTrackBy",e.trackById)}}const G=function(){return{value:"0",label:"Dados Gerais",title:"Dados Gerais"}},F=function(){return{value:"1",label:"Pontos de Avalia\xe7\xe3o",title:"Pontos de Avalia\xe7\xe3o"}},B=function(){return{value:"2",label:"Coment\xe1rios / Sugest\xf5es / Observa\xe7\xf5es",title:"Coment\xe1rios / Sugest\xf5es / Observa\xe7\xf5es"}},z=function(e,t,i){return[e,t,i]};function L(e,t){if(1&e){const e=r.Sb();r.Rb(0,"tr"),r.Rb(1,"td",46),r.Rb(2,"div",47),r.Rb(3,"rich-tab-bar",48),r.cc("setTabEmitter",function(t){return r.Ac(e),r.ec().setModalTab(t)}),r.Qb(),r.Rb(4,"div"),r.Rb(5,"table",49),r.Rb(6,"tbody"),r.Rb(7,"tr"),r.Rb(8,"th",50),r.Ic(9," Avaliador: "),r.Qb(),r.Nb(10,"td",51),r.Qb(),r.Rb(11,"tr"),r.Rb(12,"th",52),r.Ic(13," E-mail: "),r.Qb(),r.Nb(14,"td",51),r.Qb(),r.Rb(15,"tr"),r.Rb(16,"th",53),r.Ic(17," Ord. Apres.: "),r.Qb(),r.Nb(18,"td",51),r.Qb(),r.Rb(19,"tr"),r.Rb(20,"th",54),r.Ic(21," Finalizada: "),r.Qb(),r.Nb(22,"td",51),r.Qb(),r.Rb(23,"tr"),r.Rb(24,"th",55),r.Ic(25," M\xe9dia: "),r.Qb(),r.Nb(26,"td",51),r.Qb(),r.Rb(27,"tr"),r.Rb(28,"th",56),r.Ic(29," Conceito: "),r.Qb(),r.Nb(30,"td",51),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Rb(31,"div"),r.Gc(32,M,15,2,"table",2),r.Nb(33,"div",42),r.Qb(),r.Rb(34,"div",57),r.Nb(35,"div",58),r.Qb(),r.Qb(),r.Qb(),r.Qb()}if(2&e){const e=r.ec();r.yb(3),r.jc("objects",r.rc(21,z,r.oc(18,G),r.oc(19,F),r.oc(20,B)))("selectedTab",e.modalTab),r.yb(1),r.Ab(0==e.modalTab?"":"none"),r.yb(6),r.jc("innerHtml",e.selectedObject.a1_name,r.Bc),r.yb(4),r.jc("innerHtml",e.selectedObject.a2_email,r.Bc),r.yb(4),r.jc("innerHtml",e.selectedObject.a3_position,r.Bc),r.yb(4),r.jc("innerHtml",e.selectedObject.a7_finished?"Sim":"N\xe3o",r.Bc),r.yb(4),r.jc("innerHtml",e.selectedObject.averageLabel,r.Bc),r.yb(4),r.jc("innerHtml",e.selectedObject.a9_conceptLabel,r.Bc),r.yb(1),r.Ab(1==e.modalTab?"":"none"),r.yb(1),r.jc("ngIf",e.selectedObject.submissionevaluationpoints),r.yb(2),r.Ab(2==e.modalTab?"":"none")}}function H(e,t){if(1&e){const e=r.Sb();r.Rb(0,"delete-confirmation",64),r.cc("cancelDataEmitter",function(){return r.Ac(e),r.ec().showObject()}),r.Qb()}if(2&e){const e=r.ec(),t=r.yc(4);r.jc("selectedObject",e.selectedObject)("templateOutlet",t)}}function K(e,t){if(1&e){const e=r.Sb();r.Rb(0,"delete-confirmation",65),r.cc("confirmDeleteObjectEmitter",function(t){return r.Ac(e),r.ec().confirmDeleteObject(t)})("cancelDataEmitter",function(){return r.Ac(e),r.ec().cancelData()}),r.Qb()}if(2&e){const e=r.ec(),t=r.yc(4);r.jc("selectedObject",e.selectedObject)("auditingExclusions",e.auditingExclusions)("templateOutlet",t)}}function V(e,t){if(1&e){const e=r.Sb();r.Rb(0,"delete-confirmation",66),r.cc("confirmDeleteObjectEmitter",function(t){return r.Ac(e),r.ec().confirmUnDeleteObject(t)})("cancelDataEmitter",function(){return r.Ac(e),r.ec().cancelData()}),r.Qb()}if(2&e){const e=r.ec(),t=r.yc(4);r.jc("selectedObject",e.selectedObject)("auditingExclusions",e.auditingExclusions)("templateOutlet",t)}}function X(e,t){if(1&e){const e=r.Sb();r.Rb(0,"continue-confirmation",67),r.cc("confirmContinueProcessEmitter",function(){return r.Ac(e),r.ec().confirmContinueProcessMessage()})("cancelContinueProcessEmitter",function(){return r.Ac(e),r.ec().cancelContinueProcessMessage()}),r.Qb()}}const $=function(){return["admin_master","admin","system_auditor"]},q=[{path:"",component:(()=>{class e extends l.a{constructor(e,t,i,n,a,c,o,s,l,r,b){super(e,t,i,n,a,c,o,s,l,r,b)}ngOnInit(){this.setInitializationServices(["submissionevaluation","submission","appointmentpage","submissionevaluationpoint"]),this.crudService=this.wsubmissionevaluationService,this.submission=this.storageService.get()[0],this.storageService.localStorageSetItem("_submissionId_"+this.getAppId(),this.submission.id,!1),this.sucessErrorMessages={204:"Avalia\xe7\xe3o Submiss\xe3o Trabalho exclu&iacute;da com sucesso.",207:"Avalia\xe7\xe3o Submiss\xe3o Trabalho restaurada com sucesso.",208:"Avalia\xe7\xe3o Submiss\xe3o Trabalho exclu&iacute;da [PERMANENTE] com sucesso."},this.listTitle="Avalia\xe7\xf5es Submiss\xe3o Trabalho",this.dataForm=new a.f({}),this.a9_concepts=[{value:"reject",label:"REPROVADO"},{value:"acceptlowconcurrency",label:"APROVAR SE A COMPETI\xc7\xc3O FOR BAIXA"},{value:"accept",label:"APROVAR"},{value:"acceptprioritarily",label:"APROVAR PRIORITARIAMENTE"}],this.a2_relevances=[{value:"none",label:"Nenhuma"},{value:"low",label:"Baixa"},{value:"medium",label:"M\xe9dia"},{value:"high",label:"Alta"}],this.wsubmissionevaluationService.invalidateCache(),super.ngOnInit()}afterNgOnInit(){this.parameterName="",this.submission=this.prepareDataSubmission(this.submission)}afterListData(){this.loadSubmissionevaluationpoints(0)}listDataNoCache(){super.listDataNoCache(),this.submissionService.load(this.submission.id).then(e=>{this.submission=this.prepareDataSubmission(e)})}setSelectedObject(e){super.setSelectedObject(e),!this.emptyObject(e)&&e.id>0&&setTimeout(()=>{this.setSelectedObjectComment()},200)}setSelectedObjectComment(){if(null!=this.detailModal||null!=this.deleteModal){var e=document.getElementById("selectedObjectComment");null!=e?e.innerHTML=this.emptyString(this.selectedObject.a10_comment)?'<div class="alert-info">Sem Coment\xe1rios/Sugest\xf5es/Observa\xe7\xf5es por parte do avaliador</div>':this.stringService.paragraphToDiv2(this.selectedObject.a10_comment):setTimeout(()=>{this.setSelectedObjectComment()},100)}}ngOnDestroy(){this.storageService.localStorageRemoveItem("_submissionId_"+this.getAppId()),this.submission=null,this.a9_concepts=null,this.a2_relevances=null,super.ngOnDestroy()}getAdditionalConditions(){return this.selectedPage=-1,this.rowsPerPage=-1," xoo a5_submissionid = "+this.submission.id+" "+super.getAdditionalConditions()}makeSelectSearchedItemDestaked(e,t){return e}prepareDataSubmission(e){return e.finalConceptLabel=this.getLabelForKey(this.a9_concepts,e.finalConcept),e.finalAverageLabel=this.mathService.formatNumber(e.finalAverage,2,".").replace(".",","),e}prepareData(e){return e.a9_conceptLabel=this.getLabelForKey(this.a9_concepts,e.a9_concept),e}backToOrigin(){this.setProcessing(!0),this.appointmentPageService.load(this.submission.a6_appointmentpageid).then(e=>{this.setProcessing(!1),this.processObjectAndValidationResult(e,!0)&&(this.storageService.localStorageRemoveItem("_submissionId_"+this.getAppId()),this.crudService.getStorageService().clear(),this.eventEmitterService.get("submissions").emit({object:e}))})}loadSubmissionevaluationpoints(e){if(e>=this.objects.length)this.setProcessing(!1);else{var t=this.objects[e],i=" xoo a6_submissionevaluationid = "+t.id;this.wssubmissionevaluationpointService.invalidateCache(),this.wssubmissionevaluationpointService.getAll(-1,-1,i).then(i=>{i=this.clearRowZeroObjectsValidated(i),t.submissionevaluationpoints=this.prepareDataSubmissionEvaluationPoints(i),this.calculateAverageSingle(t),this.loadSubmissionevaluationpoints(e+1)})}}prepareDataSubmissionEvaluationPoints(e){for(var t=e.length,i=0;i<t;i++)e[i].a1_valueLabel=this.mathService.formatNumber(e[i].a1_value,2,".").replace(".",","),e[i].a2_relevanceLabel=this.getLabelForKey(this.a2_relevances,e[i].a2_relevance);return e}calculateAverageSingle(e){if(!e.a7_finished)return e.average=0,void(e.averageLabel="0,00");for(var t=e.submissionevaluationpoints,i=t.length,n=0,a=0;a<i;a++)n=this.mathService.sumAverage(n,t[a].a1_value,t[a].a8_validatepresenceonly?0:t[a].a7_weight,i,2);e.average=this.mathService.parseDouble(n,2,"."),e.averageLabel=this.mathService.formatNumber(e.average,2,".").replace(".",",")}getOwnerOwnerIdForSubmissionEvaluation(){return"enroll"==this.logged.category?this.logged.ownerId:this.storageService.localStorageGetItem("_ownerId_"+this.getAppId())}cancelProcess(){this.selectedObject.a7_finished=this.selectedObject.old_a7_finished,this.listData(),this.selectedObject=null}continueProcess(){this.confirmReturnEvaluatioToEvaluator()}returnEvaluatioToEvaluator(e,t){this.setProcessing(!0),this.crudService.load(e).then(e=>{this.setProcessing(!1),this.processObjectAndValidationResult(e,!0)&&(this.setSelectedObject(e),this.continueProcessOpenMessage(t))})}confirmReturnEvaluatioToEvaluator(){this.setProcessing(!0),this.selectedObject.old_a7_finished=this.selectedObject.a7_finished,this.selectedObject.a7_finished=!1,this.selectedObject.ownerId=this.storageService.localStorageGetItem("_ownerId_"+this.getAppId()),this.selectedObject.ownerOwnerId=this.getOwnerOwnerIdForSubmissionEvaluation(),this.selectedObject._token=this.storageService.localStorageGetItem("_token_"+this.getAppId()),this.crudService.update(this.selectedObject.id,this.selectedObject).then(e=>{if(this.emptyObject(e)||201!=e.code)return this.addValidationStatusMessage(500,"Falha ao Desconfirmar Finaliza\xe7\xe3o"),this.clearMessages(3e3),void this.setProcessing(!1);this.selectedObject=null,this.addValidationStatusMessage(200,"Desconfirmar Finaliza\xe7\xe3o efetuada com sucesso"),this.clearMessages(3e3),this.listDataNoCache()})}}return e.\u0275fac=function(t){return new(t||e)(r.Mb(c.g),r.Mb(b.c),r.Mb(c.a),r.Mb(u.a),r.Mb(s.b),r.Mb(s.a),r.Mb(d.c),r.Mb(m.a),r.Mb(f.a),r.Mb(h.a),r.Mb(g.a))},e.\u0275cmp=r.Gb({type:e,selectors:[["wsubmissionevaluation-root"]],features:[r.vb],decls:13,vars:10,consts:[[3,"title","editing","searchForm","auditingExclusions","enabledAuditList","hiddeSearch","disabledAddNew","backToOrigin","onSearchFormSubmitEmitter","listDataEmitter","listDataNoCacheEmitter","auditListEmitter","normalListEmitter","backToOriginEmitter"],["aria-label","lista das Avalia\xe7\xf5es Submiss\xe3o Trabalho"],["class","table","mdbTable","",4,"ngIf"],["selectedObjectTemplate",""],["objectDetail",""],["objectDeleteConfirmation",""],["objectUnDeleteConfirmation",""],["returnToEvaluator",""],["mdbTable","",1,"table"],[1,"black","white-text"],["scope","col","title","Avaliador","aria-label","Avaliador",2,"width","auto"],["scope","col","title","E-mail Avaliador","aria-label","E-mail Avaliador",2,"width","12rem"],["scope","col","title","Ordem Apresenta\xe7\xe3o","aria-label","Ordem Apresenta\xe7\xe3o",2,"width","3rem"],["scope","col","title","Finalizada","aria-label","Finalizada",2,"width","7rem"],["scope","col","title","M\xe9dia","aria-label","M\xe9dia",2,"width","4rem"],["scope","col","title","Conceito","aria-label","Conceito",2,"width","13rem"],["scope","col","style","width: 9em;",4,"ngIf"],["scope","col","style","width: 5em;",4,"ngIf"],["mdbTableCol","",4,"ngIf"],["mdbTableCol","",4,"ngFor","ngForOf","ngForTrackBy"],["mdbTableCol",""],[1,"text"],[1,"number"],[1,"text","noBorderRight"],["colspan","7",1,"navigationBottom"],["scope","col",2,"width","9em"],["scope","col",2,"width","5em"],["colspan","7",1,"text","noBorderRight"],[1,"text",3,"innerHtml"],[1,"number",3,"innerHtml"],[3,"yes"],["class","text",4,"ngIf"],["class","text","style","color: #902828;",4,"ngIf"],[1,"actions"],[1,"buttons"],["class","btn btn-primary clickable","type","button","placement","left","ngbTooltip","Desconfirmar Finaliza\xe7\xe3o e Habilitar p/ Avaliador","aria-label","Desconfirmar Finaliza\xe7\xe3o e Habilitar p/ Avaliador",3,"disabled","click",4,"ngIf"],[3,"auditingExclusions","object","logged","noEdit","noAction","objectDetail","objectDeleteConfirmation","objectUnDeleteConfirmation","editObjectEmitter","showObjectEmitter","deleteObjectEmitter","unDeleteObjectEmitter"],[2,"margin-bottom",".5rem",3,"innerHtml"],["style","margin-bottom: .5rem;",4,"ngIf"],[2,"margin-bottom",".5rem"],[1,"alert-danger",2,"padding",".3rem .7rem","border-radius",".25rem"],[1,"fas","fa-exclamation-triangle",2,"margin-right",".5em"],[1,"clear"],[1,"text",2,"color","#902828"],["type","button","placement","left","ngbTooltip","Desconfirmar Finaliza\xe7\xe3o e Habilitar p/ Avaliador","aria-label","Desconfirmar Finaliza\xe7\xe3o e Habilitar p/ Avaliador",1,"btn","btn-primary","clickable",3,"disabled","click"],[1,"fas","fa-undo-alt"],["colspan","2",1,"noBorderRight",2,"padding","0"],[2,"min-height","21em"],[3,"objects","selectedTab","setTabEmitter"],[1,"table","tableInfo",2,"font-size","1rem"],["scope","row","title","Avaliador","aria-label","Avaliador",1,"text",2,"width","12em"],[1,"text","noBorderRight",3,"innerHtml"],["scope","row","title","E-mail Avaliador","aria-label","E-mail Avaliador",1,"text"],["scope","row","title","Ordem Apresenta\xe7\xe3o","aria-label","Ordem Apresenta\xe7\xe3o",1,"text"],["scope","row","title","Finalizada","aria-label","Finalizada",1,"text"],["scope","row","title","M\xe9dia","aria-label","M\xe9dia",1,"text"],["scope","row","title","Conceito","aria-label","Conceito",1,"text"],[2,"font-size","1rem","max-height","20em","overflow-x","hidden","overflow-y","auto"],["id","selectedObjectComment"],["scope","col",2,"width","auto"],["scope","col",2,"width","3.5em"],["scope","col",2,"width","5.5em"],["scope","col",2,"width","7.5em"],["colspan","4",1,"navigationBottom"],["label","da Avalia\xe7\xe3o Submiss\xe3o Trabalho","info","true",3,"selectedObject","templateOutlet","cancelDataEmitter"],["label","Avalia\xe7\xe3o Submiss\xe3o Trabalho",3,"selectedObject","auditingExclusions","templateOutlet","confirmDeleteObjectEmitter","cancelDataEmitter"],["label","Avalia\xe7\xe3o Submiss\xe3o Trabalho","redo","true",3,"selectedObject","auditingExclusions","templateOutlet","confirmDeleteObjectEmitter","cancelDataEmitter"],["titlee","Desconfirmar Finaliza\xe7\xe3o e Habilitar p/ Avaliador?","content","A avalia\xe7\xe3o volta ao status <strong>N\xe3o Confirmada</strong>\n\t                                de modo que o respectivo avaliador pode voltar\n\t                                a avaliar o artigo/trabalho recebido. As notas e m\xe9dias\n\t                                atribuidas ser\xe3o recalculadas de modo a refletir\n\t                                a altera\xe7\xe3o realizada.",3,"confirmContinueProcessEmitter","cancelContinueProcessEmitter"]],template:function(e,t){1&e&&(r.Rb(0,"form-toolbar",0),r.cc("onSearchFormSubmitEmitter",function(){return t.onSearchFormSubmit()})("listDataEmitter",function(){return t.listData()})("listDataNoCacheEmitter",function(){return t.listDataNoCache()})("auditListEmitter",function(){return t.auditList()})("normalListEmitter",function(){return t.normalList()})("backToOriginEmitter",function(){return t.backToOrigin()}),r.Qb(),r.Rb(1,"section",1),r.Gc(2,x,36,7,"table",2),r.Qb(),r.Gc(3,L,36,25,"ng-template",null,3,r.Hc),r.Gc(5,H,1,2,"ng-template",null,4,r.Hc),r.Gc(7,K,1,3,"ng-template",null,5,r.Hc),r.Gc(9,V,1,3,"ng-template",null,6,r.Hc),r.Gc(11,X,1,0,"ng-template",null,7,r.Hc)),2&e&&(r.jc("title",t.title)("editing",!1)("searchForm",t.searchForm)("auditingExclusions",t.auditingExclusions)("enabledAuditList",r.oc(9,$).includes(t.logged.category))("hiddeSearch",!0)("disabledAddNew",!0)("backToOrigin",!0),r.yb(2),r.jc("ngIf",t.objects))},directives:[p.a,n.j,n.i,v.a,y.a,c.i,j.a,I.a,R.a],encapsulation:2}),e})()}];let J=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.Kb({type:e}),e.\u0275inj=r.Jb({imports:[[s.c.forChild(q)],s.c]}),e})();var W=i("kS8M");let U=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.Kb({type:e}),e.\u0275inj=r.Jb({imports:[[n.b,a.h,a.q,c.h,o.a.forRoot(),J,W.a]]}),e})()},n6RT:function(e,t,i){"use strict";i.d(t,"a",function(){return u});var n=i("1dEi"),a=i("fXoL"),c=i("ofXK");const o=function(){return{color:"#3d8e33"}},s=function(){return{color:"#868383"}};function l(e,t){if(1&e&&(a.Rb(0,"span",3),a.Nb(1,"i",4),a.Rb(2,"span",5),a.Ic(3),a.Qb(),a.Qb()),2&e){const e=a.ec();a.jc("ngStyle",!e.disabled&&a.oc(3,o)||e.disabled&&a.oc(4,s)),a.yb(3),a.Lc(" ",e.onlyAdditionalText?"":e.i18n[78][e.language]," ",e.additionalText," ")}}const r=function(){return{color:"#d01616"}};function b(e,t){if(1&e&&(a.Rb(0,"span",6),a.Nb(1,"i",7),a.Rb(2,"span",5),a.Ic(3),a.Qb(),a.Qb()),2&e){const e=a.ec();a.jc("ngStyle",!e.disabled&&a.oc(3,r)||e.disabled&&a.oc(4,s)),a.yb(3),a.Lc(" ",e.onlyAdditionalText?"":e.i18n[79][e.language]," ",e.additionalText," ")}}let u=(()=>{class e extends n.a{constructor(){super(null)}ngOnInit(){super.ngOnInit()}ngOnDestroy(){super.ngOnDestroy(),this.yes=null,this.onlyAdditionalText=null,this.additionalText=null}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Gb({type:e,selectors:[["rich-yesno-marker"]],inputs:{yes:"yes",onlyAdditionalText:"onlyAdditionalText",additionalText:"additionalText"},features:[a.vb],decls:3,vars:2,consts:[[2,"padding-top",".3em"],["style","font-size: 1.2em;",3,"ngStyle",4,"ngIf"],["style","font-size: 1.1em;",3,"ngStyle",4,"ngIf"],[2,"font-size","1.2em",3,"ngStyle"],[1,"far","fa-check-square",2,"margin-left","1em"],[2,"margin-left",".3em","font-weight","bold"],[2,"font-size","1.1em",3,"ngStyle"],[1,"far","fa-square",2,"margin-left","1em"]],template:function(e,t){1&e&&(a.Rb(0,"div",0),a.Gc(1,l,4,5,"span",1),a.Gc(2,b,4,5,"span",2),a.Qb()),2&e&&(a.yb(1),a.jc("ngIf",t.yes),a.yb(1),a.jc("ngIf",!t.yes))},directives:[c.j,c.k],encapsulation:2}),e})()}}]);