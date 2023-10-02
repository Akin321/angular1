import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Recipe } from "./recepies.model";
import { DataStorage } from "../shared/data-storage.service";
import { RecipeService } from "./recipe.service";

@Injectable({providedIn:'root'})
export class RecipeResolver implements Resolve<Recipe[]>{
constructor(private datastorage:DataStorage,private recipeservice:RecipeService){}
resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    const recipes=this.recipeservice.getrecipes();
    if(recipes.length===0){
        return this.datastorage.fetchrecipes();
    }else{
        return recipes;
    }
    

}

}