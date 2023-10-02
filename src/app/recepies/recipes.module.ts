import { NgModule } from "@angular/core";
import { RecepiesComponent } from "./recepies.component";
import { ReciepeListComponent } from "./reciepe-list/reciepe-list.component";
import { ReciepeDetailComponent } from "./reciepe-detail/reciepe-detail.component";
import { ReciepeItemComponent } from "./reciepe-list/reciepe-item/reciepe-item.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";

import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RecipesRoutingModule } from "./recipes-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations:[
        RecepiesComponent,
    ReciepeListComponent,
    ReciepeDetailComponent,
    ReciepeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent,

    ],
    imports:[ReactiveFormsModule,RecipesRoutingModule,SharedModule],
   
})
export class RecipesModule{}