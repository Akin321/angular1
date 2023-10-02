
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppinglistService } from "../shoppinglist/shopping-list.service";
import { Recipe } from "./recepies.model"
import {  Injectable} from "@angular/core";
@Injectable()

export class RecipeService{
    recipeschanged = new Subject<Recipe[]>();
   
/*recipes:Recipe[]=[new Recipe('Tasty Schnitzel','A super tasty Schnitzel',
'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/800px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',[
    new Ingredient('meat',1),
    new Ingredient('frenchfries',20)
    
]),
new Recipe('BigFatBurger','beef burger',
'https://cdn-cmjom.nitrocdn.com/FpMsHpAgoVrRMnuAdmBhGkyiizdsWlSU/assets/images/optimized/rev-dd2c928/wp-content/uploads/2015/07/king-burger-541x633.png',[
    new Ingredient('Buns',1),
    new Ingredient('meat',1),

])]*/
private recipes:Recipe[]=[];
constructor(private shoppinglist:ShoppinglistService){}
getrecipes(){
    return this.recipes.slice();
}
getrecipebyid(index:number){
    return this.recipes[index];
}
add_ing_in_shplist(ingredients:Ingredient[]){
this.shoppinglist.addingredient(ingredients)

}
addrecipe(recipe:Recipe){
    this.recipes.push(recipe);
    this.recipeschanged.next(this.recipes.slice());
}
updaterecipe(index:number,newrecipe:Recipe){
    this.recipes[index]=newrecipe;
    this.recipeschanged.next(this.recipes.slice());
}
deleterecipe(index:number){
    console.log(index);
    this.recipes.splice(index,1);
    console.log(this.recipes)
    this.recipeschanged.next(this.recipes.slice());
}
setrecipes(recipes:Recipe[]){
this.recipes=recipes;
this.recipeschanged.next(this.recipes.slice());
}
}