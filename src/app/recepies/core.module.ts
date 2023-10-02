import { NgModule } from "@angular/core";
import { ShoppinglistService } from "../shoppinglist/shopping-list.service";
import { RecipeService } from "./recipe.service";
import { AuthInterceptorService } from "../auth/auth-interceptor.service";
import{HTTP_INTERCEPTORS} from '@angular/common/http'


@NgModule({
    providers:[
        ShoppinglistService, RecipeService,
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService,multi:true},
    ]
})
export class CoreModule{}