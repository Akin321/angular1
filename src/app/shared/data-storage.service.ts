import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "../recepies/recipe.service";
import { Recipe } from "../recepies/recepies.model";
import { exhaustMap, map, take, tap } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";

@Injectable({providedIn:'root'})
export class DataStorage {
    constructor(private http:HttpClient,private recipeservice:RecipeService,private authservice:AuthService){}
    storeRecipes(){
        const recipes=this.recipeservice.getrecipes();
        this.http.put('https://ng-course-recipe-book-b4f6f-default-rtdb.firebaseio.com/recipes.json',recipes)
        .subscribe(response=>{
            console.log(response)
        })
    }
    fetchrecipes(){
       
            return this.http.get<Recipe[]>('https://ng-course-recipe-book-b4f6f-default-rtdb.firebaseio.com/recipes.json')
        .pipe(
            map(recipes=>{
                return recipes.map(recipes=>{
                    return{...recipes,ingredients:recipes.ingredients?recipes.ingredients:[]};
                })
            }),
            tap((recipes)=>{
                this.recipeservice.setrecipes(recipes);
            }) )

    }
       
        
        
       
        


}

