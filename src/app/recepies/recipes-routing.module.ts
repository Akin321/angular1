import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecepiesComponent } from "./recepies.component";
import { AuthGuard } from "../auth/auth.guard";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { ReciepeDetailComponent } from "./reciepe-detail/reciepe-detail.component";
import { RecipeResolver } from "./recipes-resolver.service";
const routes:Routes=[
    {path:'',component:RecepiesComponent,
    canActivate:[AuthGuard],
    children:
[{path:'',component:RecipeStartComponent},
{path:'new',component:RecipeEditComponent},
{path:':id',component :ReciepeDetailComponent,
resolve:[RecipeResolver]},

{path:':id/edit',component:RecipeEditComponent,resolve:[RecipeResolver]}
]},
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]

})
export class RecipesRoutingModule{

}