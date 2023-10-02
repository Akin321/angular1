import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppinglistService{
    ingredientschanged=new Subject<Ingredient[]>();
    startedediting=new Subject<number>();
 private ingredients:Ingredient[]=[
    new Ingredient('apples',5),
    new Ingredient('tomatoes',10)
    ];
getingredients(){
   return this.ingredients.slice();
}
getingredient(index:number){
return this.ingredients[index];

}

  adds(obj:Ingredient){
   
    this.ingredients.push(obj)
    this.ingredientschanged.next(this.ingredients.slice())
  }
  addingredient(ingredient){
    this.ingredients.push(...ingredient)
    this.ingredientschanged.next(this.ingredients.slice())
  }
  updateingredient(index:number,newIngredient:Ingredient){
    console.log(newIngredient,index)
    this.ingredients[index]=newIngredient;
   
    this.ingredientschanged.next(this.ingredients.slice());
  }
  deleteIngredient(index:number){
    this.ingredients.splice(index,1);
    this.ingredientschanged.next(this.ingredients.slice());
  }
  
}
