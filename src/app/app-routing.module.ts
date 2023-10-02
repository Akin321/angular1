import { NgModule } from "@angular/core";

import { PreloadAllModules, RouterModule, Routes } from "@angular/router";



const approutes:Routes=[
   {path:'',redirectTo:'/recipes',pathMatch:'full'},
   {path:'recipes',loadChildren:() => import('./recepies/recipes.module').then(m =>m.RecipesModule)},
   {path:'shoppinglist',loadChildren:()=>import('./shoppinglist/shopping-list.module').then(m=>m.ShoppingListModule)},
   {path:'auth',loadChildren:()=>import('./auth/auth.model').then(m=>m.AuthModule)}
   
    
  
    
];


@NgModule({
    imports:[RouterModule.forRoot(approutes,{preloadingStrategy:PreloadAllModules})],
    exports:[RouterModule]

})
export class AppRoutingModule{
   

}