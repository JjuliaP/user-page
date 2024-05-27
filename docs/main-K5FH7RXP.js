import{a as we}from"./chunk-Z3GPI3YO.js";import{$ as ae,A as u,Aa as me,Ba as ue,Ca as T,D as te,Da as ge,Ea as fe,F as W,Fa as he,G as j,Ha as D,I as ne,Ia as z,K as ie,Ka as be,L as H,M as re,Ma as ve,N as m,Na as _e,Oa as ye,Pa as Ce,Q as oe,Qa as Oe,Ra as Me,S as V,Sa as Ee,T as se,U as g,W as s,X as a,Y as d,a as $,aa as E,ba as k,c as G,e as C,ea as pe,f as Y,g as h,h as q,i as R,ja as p,k as N,ka as B,l as A,la as Z,m as O,n as M,o as b,oa as f,p as J,q as Q,qa as x,r as S,s as X,sa as v,ta as _,v as L,wa as le,x as ee,xa as ce,y as U,ya as de}from"./chunk-7GGRNWUP.js";var I="Service workers are disabled or not supported by this browser";function Le(t){return R(()=>Y(new Error(t)))}var w=class{constructor(e){if(this.serviceWorker=e,!e)this.worker=this.events=this.registration=Le(I);else{let n=N(e,"controllerchange").pipe(h(()=>e.controller)),i=R(()=>C(e.controller)),r=q(i,n);this.worker=r.pipe(M(y=>!!y)),this.registration=this.worker.pipe(S(()=>e.getRegistration()));let K=N(e,"message").pipe(h(y=>y.data)).pipe(M(y=>y&&y.type)).pipe(Q());K.connect(),this.events=K}}postMessage(e,o){return this.worker.pipe(b(1),X(n=>{n.postMessage($({action:e},o))})).toPromise().then(()=>{})}postMessageWithOperation(e,o,n){let i=this.waitForOperationCompleted(n),r=this.postMessage(e,o);return Promise.all([r,i]).then(([,c])=>c)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(e){let o;return typeof e=="string"?o=n=>n.type===e:o=n=>e.includes(n.type),this.events.pipe(M(o))}nextEventOfType(e){return this.eventsOfType(e).pipe(b(1))}waitForOperationCompleted(e){return this.eventsOfType("OPERATION_COMPLETED").pipe(M(o=>o.nonce===e),b(1),h(o=>{if(o.result!==void 0)return o.result;throw new Error(o.error)})).toPromise()}get isEnabled(){return!!this.serviceWorker}},Ue=(()=>{let e=class e{get isEnabled(){return this.sw.isEnabled}constructor(n){if(this.sw=n,this.pushManager=null,this.subscriptionChanges=new G,!n.isEnabled){this.messages=O,this.notificationClicks=O,this.subscription=O;return}this.messages=this.sw.eventsOfType("PUSH").pipe(h(r=>r.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(h(r=>r.data)),this.pushManager=this.sw.registration.pipe(h(r=>r.pushManager));let i=this.pushManager.pipe(S(r=>r.getSubscription()));this.subscription=A(i,this.subscriptionChanges)}requestSubscription(n){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(I));let i={userVisibleOnly:!0},r=this.decodeBase64(n.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),c=new Uint8Array(new ArrayBuffer(r.length));for(let l=0;l<r.length;l++)c[l]=r.charCodeAt(l);return i.applicationServerKey=c,this.pushManager.pipe(S(l=>l.subscribe(i)),b(1)).toPromise().then(l=>(this.subscriptionChanges.next(l),l))}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(I));let n=i=>{if(i===null)throw new Error("Not subscribed to push notifications.");return i.unsubscribe().then(r=>{if(!r)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null)})};return this.subscription.pipe(b(1),S(n)).toPromise()}decodeBase64(n){return atob(n)}};e.\u0275fac=function(i){return new(i||e)(U(w))},e.\u0275prov=L({token:e,factory:e.\u0275fac});let t=e;return t})(),We=(()=>{let e=class e{get isEnabled(){return this.sw.isEnabled}constructor(n){if(this.sw=n,!n.isEnabled){this.versionUpdates=O,this.unrecoverable=O;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(I));let n=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:n},n)}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(I));let n=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:n},n)}};e.\u0275fac=function(i){return new(i||e)(U(w))},e.\u0275prov=L({token:e,factory:e.\u0275fac});let t=e;return t})();var Se=new ee("");function je(t,e,o,n){return()=>{if(!(z(n)&&"serviceWorker"in navigator&&o.enabled!==!1))return;navigator.serviceWorker.addEventListener("controllerchange",()=>{navigator.serviceWorker.controller!==null&&navigator.serviceWorker.controller.postMessage({action:"INITIALIZE"})});let i;if(typeof o.registrationStrategy=="function")i=o.registrationStrategy();else{let[c,...l]=(o.registrationStrategy||"registerWhenStable:30000").split(":");switch(c){case"registerImmediately":i=C(null);break;case"registerWithDelay":i=xe(+l[0]||0);break;case"registerWhenStable":i=l[0]?A(Pe(t),xe(+l[0])):Pe(t);break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${o.registrationStrategy}`)}}t.get(oe).runOutsideAngular(()=>i.pipe(b(1)).subscribe(()=>navigator.serviceWorker.register(e,{scope:o.scope}).catch(c=>console.error("Service worker registration failed with:",c))))}}function xe(t){return C(null).pipe(J(t))}function Pe(t){return t.get(ce).isStable.pipe(M(o=>o))}function He(t,e){return new w(z(e)&&t.enabled!==!1?navigator.serviceWorker:void 0)}var P=class{};function Ie(t,e={}){return te([Ue,We,{provide:Se,useValue:t},{provide:P,useValue:e},{provide:w,useFactory:He,deps:[P,H]},{provide:le,useFactory:je,deps:[ne,Se,P,H],multi:!0}])}var ke=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=u({type:e,selectors:[["app-page-not-found"]],standalone:!0,features:[f],decls:7,vars:0,consts:[[1,"flex","items-center","flex-col","mt-12","gap-5"],[1,"text-supporting-3"],[1,"display3"],["routerLink","/",1,"cursor-pointer","text-primary-b","no-underline","hover:underline"]],template:function(i,r){i&1&&(s(0,"div",0)(1,"h1",1),p(2,"404 - Page Not Found"),a(),s(3,"p",2),p(4,"The page you are looking for does not exist."),a(),s(5,"a",3),p(6,"Go to Home"),a()())},encapsulation:2});let t=e;return t})();var Te=[{path:"",redirectTo:"/user-list",pathMatch:"full"},{path:"user-list",loadComponent:()=>import("./chunk-KON3GZYN.js").then(t=>t.UserListComponent)},{path:"user-edit",loadChildren:()=>import("./chunk-HRBULFLQ.js").then(t=>t.UserEditModule)},{path:"roles",loadChildren:()=>import("./chunk-7XXSEXVH.js").then(t=>t.RolesPermissionsModule)},{path:"**",component:ke}];var De=(t,e)=>t.headers.has(we)?C(new be({status:200,body:t.body})):e(t);var Fe={providers:[{provide:me,useClass:ue},Me(Te),Ie("ngsw-worker.js",{enabled:!de(),registrationStrategy:"registerWhenStable:30000"}),ve(_e([De]))]};var Be=t=>({collapsed:t}),Ze=t=>({"text-primary-b":t});function ze(t,e){t&1&&d(0,"img",19)}function Ke(t,e){t&1&&d(0,"img",20)}function $e(t,e){if(t&1){let o=ae();s(0,"li",21),E("click",function(){let i=W(o).$implicit,r=k();return j(r.onMenuItemClick(i.name))})("keypress",function(){let i=W(o).$implicit,r=k();return j(r.onMenuItemClick(i.name))}),s(1,"a",22),p(2),a()()}if(t&2){let o=e.$implicit,n=e.index,i=k();g("ngClass",x(5,Ze,i.selectedMenuItem===o.name)),se("aria-labelledby",o.name)("tabindex",n),m(),pe("routerLink",o.link),m(),Z(" ",o.name," ")}}var Re=(()=>{let e=class e{constructor(){this.sidebarOpen=new ie,this.isSidebarOpen=!1,this.selectedMenuItem="User List",this.date=new Date("2020-09-23"),this.menuItems=[{name:"User List",link:"user-list"},{name:"User Edit",link:"user-edit"},{name:"Roles and Permissions",link:"roles"},{name:"Settings",link:"settings"}],this.screenMdWidth=parseFloat(getComputedStyle(document.body).getPropertyValue("--screen-md"))}onResize(){window.innerWidth<this.screenMdWidth&&(this.isSidebarOpen=!1,this.sidebarOpen.emit(this.isSidebarOpen))}onToggleSidebarClick(){this.isSidebarOpen=!this.isSidebarOpen,this.sidebarOpen.emit(this.isSidebarOpen)}onMenuItemClick(n){this.selectedMenuItem=n}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=u({type:e,selectors:[["app-menu"]],hostBindings:function(i,r){i&1&&E("resize",function(l){return r.onResize(l)},!1,re)},outputs:{sidebarOpen:"sidebarOpen"},standalone:!0,features:[f],decls:33,vars:27,consts:[[1,"sidebar","bg-primary-w","border-r","border-ui-g5",3,"ngClass"],[1,"sidebar__toggle-btn","w-6","h-6","mb-[50px]",3,"click"],["src","assets/icons/hamburger-24.svg","alt","Hamburger icon",4,"ngIf"],["src","assets/icons/hamburger-close-24.svg","alt","Hamburger icon",4,"ngIf"],[1,"sidebar__date","flex","flex-col","items-start","gap-[3px]","border-b","border-secondary-bg-lighten90","mb-6","pb-4"],[1,"body2","text-ui-g4"],[1,"text-ui-g1"],[1,"sidebar__nav"],[1,"sidebar__nav-items"],[1,"nav-item"],[1,"nav-item__title","items-center","grid"],[1,"nav-item__icon","w-10","h-10","flex","items-center"],["src","assets/icons/raporty-40.svg","alt","Raporty icon"],[1,"nav-item__label","body3","ml-3"],[1,"nav-item","active"],["src","assets/icons/odbiorcy-40.svg","alt","Odbiorcy icon"],[1,"nav-item__label","display3","text-primary-b","ml-3"],["type","square",1,"nav-item__subitems","list-square","text-ui-g3","body3"],["class","hover-focus","role","button",3,"ngClass","click","keypress",4,"ngFor","ngForOf"],["src","assets/icons/hamburger-24.svg","alt","Hamburger icon"],["src","assets/icons/hamburger-close-24.svg","alt","Hamburger icon"],["role","button",1,"hover-focus",3,"click","keypress","ngClass"],[3,"routerLink"]],template:function(i,r){i&1&&(s(0,"aside",0)(1,"button",1),E("click",function(){return r.onToggleSidebarClick()}),V(2,ze,1,0,"img",2)(3,Ke,1,0,"img",3),a(),s(4,"div",4)(5,"span",5),p(6),v(7,"date"),v(8,"date"),a(),s(9,"h1",6),p(10),v(11,"date"),v(12,"date"),a(),s(13,"span",5),p(14),v(15,"date"),v(16,"date"),a()(),s(17,"nav",7)(18,"ul",8)(19,"li",9)(20,"div",10)(21,"span",11),d(22,"img",12),a(),s(23,"span",13),p(24,"Statistics"),a()()(),s(25,"li",14)(26,"div",10)(27,"span",11),d(28,"img",15),a(),s(29,"span",16),p(30,"Users"),a()(),s(31,"ul",17),V(32,$e,3,7,"li",18),a()()()()()),i&2&&(g("ngClass",x(25,Be,!r.isSidebarOpen)),m(2),g("ngIf",!r.isSidebarOpen),m(),g("ngIf",r.isSidebarOpen),m(3),B(r.isSidebarOpen?_(7,7,r.date,"cccc"):_(8,10,r.date,"ccc")),m(4),Z(" ",r.isSidebarOpen?_(11,13,r.date,"d LLLL"):_(12,16,r.date,"d LL")," "),m(4),B(r.isSidebarOpen?_(15,19,r.date,"yyyy"):_(16,22,r.date,"yy")),m(18),g("ngForOf",r.menuItems))},dependencies:[he,D,T,ge,fe,Ee,Oe],styles:['[_nghost-%COMP%]{grid-area:aside}.sidebar[_ngcontent-%COMP%]{display:grid;grid-template-columns:32px auto 32px;grid-template-rows:32px repeat(6,max-content)}.sidebar__toggle-btn[_ngcontent-%COMP%]{grid-area:2/2/3/-2}.sidebar__date[_ngcontent-%COMP%]{grid-column:2/-2;grid-row:3}.sidebar__nav[_ngcontent-%COMP%]{grid-column:1/-1;grid-row:4}.sidebar__nav-items[_ngcontent-%COMP%]{list-style-type:square;margin:0;padding:0}.sidebar__nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{cursor:pointer;box-shadow:0 1px 1px #d3d3d3;margin-bottom:1px}.sidebar__nav[_ngcontent-%COMP%]   .nav-item__subitems[_ngcontent-%COMP%]{display:grid;grid-template-columns:32px 52px auto 32px;grid-template-rows:repeat(4,1fr);padding:0}.sidebar__nav[_ngcontent-%COMP%]   .nav-item__subitems[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{grid-column:3/-1;height:38px;list-style-position:inside;padding:12px 0}.sidebar__nav[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%]{background-color:#eaeaea}.sidebar__nav[_ngcontent-%COMP%]   .nav-item__title[_ngcontent-%COMP%]{grid-template-columns:32px min-content auto;grid-template-areas:". icon label";color:#6e7075;align-items:center}.sidebar__nav[_ngcontent-%COMP%]   .nav-item__icon[_ngcontent-%COMP%]{grid-area:icon}.sidebar__nav[_ngcontent-%COMP%]   .nav-item__label[_ngcontent-%COMP%]{grid-area:label}.collapsed[_ngcontent-%COMP%]   .nav-item__label[_ngcontent-%COMP%], .collapsed[_ngcontent-%COMP%]   .nav-item__subitems[_ngcontent-%COMP%]{display:none}.collapsed[_ngcontent-%COMP%]   .nav-item__title[_ngcontent-%COMP%]{grid-template-columns:auto max-content auto}.collapsed[_ngcontent-%COMP%]   .sidebar__date[_ngcontent-%COMP%]{align-items:center;max-width:2ch}']});let t=e;return t})();var Ne=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=u({type:e,selectors:[["app-header"]],standalone:!0,features:[f],decls:25,vars:0,consts:[[1,"flex","border-t","border-b","border-ui-g5","border-solid","h-16","bg-primary-w","justify-between","flex-row","header"],[1,"flex"],[1,"flex","flex-col","justify-center","items-center","py-2.5","px-3.5","border-r","border-ui-g5","border-solid","max-w-[120px]","w-screen"],[1,"text-ui-g4","input2"],[1,"text-ui-g1","body2"],[1,"border-l","border-ui-g5","border-solid","w-16","h-16","flex","justify-center","items-center"],["src","assets/icons/bellcounter-40.svg","alt","Bell icon"],[1,"flex","justify-center","items-center","border-l","border-ui-g5","border-solid","px-5","py-3"],["src","assets/icons/avatar.svg","alt","Avatar"],[1,"input1","pl-4","pr-2","text-ui-g3"],["src","assets/icons/triangle-down.svg","alt","Open button"]],template:function(i,r){i&1&&(s(0,"header",0)(1,"div",1)(2,"div",2)(3,"div",3),p(4,"ZLECENIA"),a(),s(5,"div",4),p(6,"245"),a()(),s(7,"div",2)(8,"div",3),p(9,"DEPOZYTY"),a(),s(10,"div",4),p(11,"245"),a()(),s(12,"div",2)(13,"div",3),p(14,"ZAM\xD3WIENIA"),a(),s(15,"div",4),p(16,"245"),a()()(),s(17,"div",1)(18,"div",5),d(19,"img",6),a(),s(20,"div",7),d(21,"img",8),s(22,"span",9),p(23,"Warsztat A12"),a(),d(24,"img",10),a()()())},styles:["header[_ngcontent-%COMP%]{grid-area:header;box-shadow:4px 4px 10px #00000014}"]});let t=e;return t})();var Ge=t=>({"nav-open":t}),Ae=(()=>{let e=class e{constructor(){this.title="User Page",this.isSidebarOpen=!1}setSidebarState(n){this.isSidebarOpen=n}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=u({type:e,selectors:[["app-root"]],standalone:!0,features:[f],decls:5,vars:3,consts:[[1,"app-layout",3,"ngClass"],[3,"sidebarOpen"],[1,"z-10"],[1,"main"]],template:function(i,r){i&1&&(s(0,"div",0)(1,"app-menu",1),E("sidebarOpen",function(l){return r.setSidebarState(l)}),a(),d(2,"app-header",2),s(3,"main",3),d(4,"router-outlet"),a()()),i&2&&g("ngClass",x(1,Ge,r.isSidebarOpen))},dependencies:[Ce,D,T,Re,Ne],styles:['.app-layout[_ngcontent-%COMP%]{display:grid;grid-template-areas:"aside header" "aside main  " "aside main  ";height:100vh;grid-template-columns:minmax(64px,min-content) auto;grid-template-rows:62px auto}.app-layout.nav-open[_ngcontent-%COMP%]{grid-template-columns:276px auto}.main[_ngcontent-%COMP%]{grid-area:main}']});let t=e;return t})();ye(Ae,Fe).catch(t=>console.error(t));
