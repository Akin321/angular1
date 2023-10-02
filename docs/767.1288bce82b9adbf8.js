"use strict";(self.webpackChunkmyproject=self.webpackChunkmyproject||[]).push([[767],{4767:(G,g,p)=>{p.r(g),p.d(g,{RecipesModule:()=>Y});var c=p(95),a=p(2895),e=p(4946),u=p(5359),m=p(6814);const Z=function(t){return[t]};let _=(()=>{var t;class r{}return(t=r).\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-reciepe-item"]],inputs:{recipe:"recipe",index:"index"},decls:8,vars:6,consts:[["routerLinkActive","active",1,"list-group-item","clearfix",2,"cursor","pointer",3,"routerLink"],[1,"pull-left"],[1,"list-group-item-heading"],[1,"list-group-item-text"],[1,"pull-right"],["alt","recipe-img",1,"img-responsive",2,"max-height","50px",3,"src"]],template:function(i,n){1&i&&(e.TgZ(0,"a",0)(1,"div",1)(2,"h4",2),e._uU(3),e.qZA(),e.TgZ(4,"p",3),e._uU(5),e.qZA()(),e.TgZ(6,"span",4),e._UZ(7,"img",5),e.qZA()()),2&i&&(e.Q6J("routerLink",e.VKq(4,Z,n.index)),e.xp6(3),e.Oqu(n.recipe.name),e.xp6(2),e.Oqu(n.recipe.description),e.xp6(2),e.Q6J("src",n.recipe.imagepath,e.LSH))},dependencies:[a.rH,a.Od]}),r})();function R(t,r){if(1&t&&e._UZ(0,"app-reciepe-item",4),2&t){const i=r.index;e.Q6J("recipe",r.$implicit)("index",i)}}let C=(()=>{var t;class r{constructor(i,n,s){this.recipeservice=i,this.router=n,this.route=s,this.recipes=this.recipeservice.getrecipes()}ngOnInit(){this.subscription=this.recipeservice.recipeschanged.subscribe(i=>{this.recipes=i})}onnewrecipe(){this.router.navigate(["new"],{relativeTo:this.route})}ngOnDestroy(){this.subscription.unsubscribe()}}return(t=r).\u0275fac=function(i){return new(i||t)(e.Y36(u.j),e.Y36(a.F0),e.Y36(a.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-reciepe-list"]],decls:10,vars:1,consts:[[1,"'row"],[1,"col-xs-12"],[1,"btn","btn-success",3,"click"],[3,"recipe","index",4,"ngFor","ngForOf"],[3,"recipe","index"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"button",2),e.NdJ("click",function(){return n.onnewrecipe()}),e._uU(3,"New Recipe"),e.qZA(),e._UZ(4,"hr"),e.qZA()(),e._UZ(5,"hr")(6,"hr"),e.TgZ(7,"div",0)(8,"div",1),e.YNc(9,R,1,2,"app-reciepe-item",3),e.qZA()()),2&i&&(e.xp6(9),e.Q6J("ngForOf",n.recipes))},dependencies:[m.sg,_]}),r})(),T=(()=>{var t;class r{constructor(){}ngOnInit(){}}return(t=r).\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recepies"]],decls:5,vars:0,consts:[[1,"row"],[1,"col-md-5"],[1,"col-md-7"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"app-reciepe-list"),e.qZA(),e.TgZ(3,"div",2),e._UZ(4,"router-outlet"),e.qZA()())},dependencies:[a.lC,C]}),r})();var A=p(8180),b=p(7398),y=p(6376);let U=(()=>{var t;class r{constructor(i,n){this.authservice=i,this.router=n}canActivate(i,n){return this.authservice.user.pipe((0,A.q)(1),(0,b.U)(s=>!!s||this.router.createUrlTree(["/auth"])))}}return(t=r).\u0275fac=function(i){return new(i||t)(e.LFG(y.e),e.LFG(a.F0))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),r})(),x=(()=>{var t;class r{}return(t=r).\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipe-start"]],decls:2,vars:0,template:function(i,n){1&i&&(e.TgZ(0,"h3"),e._uU(1,"please select a recipe"),e.qZA())}}),r})();function w(t,r){if(1&t){const o=e.EpF();e.TgZ(0,"div",19)(1,"div",20),e._UZ(2,"input",21),e.qZA(),e.TgZ(3,"div",22),e._UZ(4,"input",23),e.qZA(),e.TgZ(5,"div",22)(6,"button",5),e.NdJ("click",function(){const s=e.CHM(o).index,d=e.oxw();return e.KtG(d.ondeleteing(s))}),e._uU(7,"X"),e.qZA()()()}2&t&&e.Q6J("formGroupName",r.index)}let v=(()=>{var t;class r{constructor(i,n,s){this.route=i,this.recipeservice=n,this.router=s,this.editmode=!1}ngOnInit(){this.route.params.subscribe(i=>{this.id=+i.id,this.editmode=null!=i.id,this.initform()})}onsubmit(){this.editmode?this.recipeservice.updaterecipe(this.id,this.recipeform.value):this.recipeservice.addrecipe(this.recipeform.value),this.oncancel()}oncancel(){this.router.navigate(["../"],{relativeTo:this.route})}onaddingredient(){this.recipeform.get("ingredients").push(new c.cw({name:new c.NI(null,c.kI.required),amount:new c.NI(null,[c.kI.required,c.kI.pattern(/^[1-9]+[0-9]*$/)])}))}initform(){let i="",n="",s="",d=new c.Oe([]);if(this.editmode){const l=this.recipeservice.getrecipebyid(this.id);if(i=l.name,s=l.description,n=l.imagepath,l.ingredients)for(let f of l.ingredients)d.push(new c.cw({name:new c.NI(f.name,c.kI.required),amount:new c.NI(f.amount,[c.kI.required,c.kI.pattern(/^[1-9]+[0-9]*$/)])}))}this.recipeform=new c.cw({name:new c.NI(i,c.kI.required),imagepath:new c.NI(n,c.kI.required),description:new c.NI(s,c.kI.required),ingredients:d})}getcontrols(){return this.recipeform.get("ingredients").controls}ondeleteing(i){this.recipeform.get("ingredients").removeAt(i)}}return(t=r).\u0275fac=function(i){return new(i||t)(e.Y36(a.gz),e.Y36(u.j),e.Y36(a.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipe-edit"]],decls:40,vars:4,consts:[[1,"row"],[1,"col-xs-12"],[3,"formGroup","ngSubmit"],[1,"btn-toolbar"],["type","submit",1,"btn","btn-success",3,"disabled"],["type","button",1,"btn","btn-danger",3,"click"],[1,"form-gorup"],["for","name"],["type","'text","id","name","formControlName","name",1,"form-control"],["for","imagepath"],["type","text","id","imagepath","formControlName","imagepath",1,"form-control"],["imagepath",""],[1,"img-responsive",3,"src"],[1,"form-group"],["for","description"],["type","'text","id","description","row","6","formControlName","description",1,"form-control"],["formArrayName","ingredients",1,"col-xs-12"],["class","row","style","margin-top:10px",3,"formGroupName",4,"ngFor","ngForOf"],["type","button",1,"'btn","btn-success",3,"click"],[1,"row",2,"margin-top","10px",3,"formGroupName"],[1,"col-xs-8"],["type","text","formControlName","name",1,"form-control"],[1,"col-xs-2"],["type","number","formControlName","amount",1,"form-control"]],template:function(i,n){if(1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"form",2),e.NdJ("ngSubmit",function(){return n.onsubmit()}),e.TgZ(3,"div",0)(4,"div",1)(5,"div",3)(6,"button",4),e._uU(7,"Save"),e.qZA(),e.TgZ(8,"button",5),e.NdJ("click",function(){return n.oncancel()}),e._uU(9,"Cancel"),e.qZA()()()(),e.TgZ(10,"div",0)(11,"div",1)(12,"div",6)(13,"label",7),e._uU(14,"Name"),e.qZA(),e._UZ(15,"input",8),e.qZA()()(),e.TgZ(16,"div",0)(17,"div",1)(18,"div",6)(19,"label",9),e._uU(20,"Image url"),e.qZA(),e._UZ(21,"input",10,11),e.qZA()()(),e.TgZ(23,"div",0)(24,"div",1),e._UZ(25,"img",12),e.qZA()(),e.TgZ(26,"div",0)(27,"div",1)(28,"div",13)(29,"label",14),e._uU(30,"Description"),e.qZA(),e._UZ(31,"textarea",15),e.qZA()()(),e.TgZ(32,"div",0)(33,"div",16),e.YNc(34,w,8,1,"div",17),e._UZ(35,"hr"),e.TgZ(36,"div",0)(37,"div",1)(38,"button",18),e.NdJ("click",function(){return n.onaddingredient()}),e._uU(39,"Add Ingredient"),e.qZA()()()()()()()()),2&i){const s=e.MAs(22);e.xp6(2),e.Q6J("formGroup",n.recipeform),e.xp6(4),e.Q6J("disabled",!n.recipeform.valid),e.xp6(19),e.Q6J("src",s.value,e.LSH),e.xp6(9),e.Q6J("ngForOf",n.getcontrols())}},dependencies:[c._Y,c.Fj,c.wV,c.JJ,c.JL,c.sg,c.u,c.x0,c.CE,m.sg],styles:["textarea.ng-invalid.ng-touched[_ngcontent-%COMP%], input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}"]}),r})();var q=p(6853);function F(t,r){if(1&t&&(e.TgZ(0,"li",12),e._uU(1),e.qZA()),2&t){const o=r.$implicit;e.xp6(1),e.AsE(" ",o.name,"-",o.amount," ")}}const I=function(){return["edit"]};let N=(()=>{var t;class r{constructor(i,n,s){this.recipeservice=i,this.route=n,this.router=s}ngOnInit(){this.route.params.subscribe(i=>{this.id=+i.id,this.recipeitem=this.recipeservice.getrecipebyid(this.id)})}addlist(){this.recipeservice.add_ing_in_shplist(this.recipeitem.ingredients)}ondelete(){this.recipeservice.deleterecipe(this.id),this.router.navigate(["/recipes"])}}return(t=r).\u0275fac=function(i){return new(i||t)(e.Y36(u.j),e.Y36(a.gz),e.Y36(a.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-reciepe-detail"]],decls:30,vars:6,consts:[[1,"row"],[1,"col-xs-12"],["alt","",1,"img-responsive",2,"max-height","300PX",3,"src"],[1,"'row"],["appDropdown","",1,"btn-group"],["type","button",1,"btn","btn-primary","dropdown-toggle"],[1,"caret"],[1,"dropdown-menu"],[2,"cursor","pointer",3,"click"],[2,"cursor","pointer",3,"routerLink"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"img",2),e.qZA()(),e.TgZ(3,"div",3)(4,"div",1)(5,"h1"),e._uU(6),e.qZA()()(),e.TgZ(7,"div",0)(8,"div",1)(9,"div",4)(10,"button",5),e._uU(11,"Manage Recipe "),e._UZ(12,"span",6),e.qZA(),e.TgZ(13,"ul",7)(14,"li")(15,"a",8),e.NdJ("click",function(){return n.addlist()}),e._uU(16,"shopping list"),e.qZA()(),e.TgZ(17,"li")(18,"a",9),e._uU(19,"edit Recipe"),e.qZA()(),e.TgZ(20,"li")(21,"a",8),e.NdJ("click",function(){return n.ondelete()}),e._uU(22,"delete Recipe"),e.qZA()()()()()(),e.TgZ(23,"div",0)(24,"div",1),e._uU(25),e.qZA()(),e.TgZ(26,"div",0)(27,"div",1)(28,"ul",10),e.YNc(29,F,2,2,"li",11),e.qZA()()()),2&i&&(e.xp6(2),e.Q6J("src",n.recipeitem.imagepath,e.LSH),e.xp6(4),e.Oqu(n.recipeitem.name),e.xp6(12),e.Q6J("routerLink",e.DdM(5,I)),e.xp6(7),e.hij(" ",n.recipeitem.description," "),e.xp6(4),e.Q6J("ngForOf",n.recipeitem.ingredients))},dependencies:[a.rH,q.w,m.sg]}),r})();var k=p(4993);let h=(()=>{var t;class r{constructor(i,n){this.datastorage=i,this.recipeservice=n}resolve(i,n){const s=this.recipeservice.getrecipes();return 0===s.length?this.datastorage.fetchrecipes():s}}return(t=r).\u0275fac=function(i){return new(i||t)(e.LFG(k.J),e.LFG(u.j))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),r})();const J=[{path:"",component:T,canActivate:[U],children:[{path:"",component:x},{path:"new",component:v},{path:":id",component:N,resolve:[h]},{path:":id/edit",component:v,resolve:[h]}]}];let L=(()=>{var t;class r{}return(t=r).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.Bz.forChild(J),a.Bz]}),r})();var O=p(6208);let Y=(()=>{var t;class r{}return(t=r).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.UX,L,O.m]}),r})()}}]);