import { NgModule } from "@angular/core";
import { ShoppinglistComponent } from "./shoppinglist.component";
import { ShoppingeditComponent } from "./shoppingedit/shoppingedit.component";

import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { SharedModule } from "../shared/shared.module";


   


@NgModule({
    declarations:[
      ShoppinglistComponent,
    
      ShoppingeditComponent,
        
    ],
    imports:[
        SharedModule,
        FormsModule,
        RouterModule.forChild([{path:'',component:ShoppinglistComponent}])
       
    ],
   
})
export class ShoppingListModule{}