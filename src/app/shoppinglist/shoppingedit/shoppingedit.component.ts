import { Component,OnDestroy,OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppinglistService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoppingedit',
  templateUrl: './shoppingedit.component.html',
  styleUrls: ['./shoppingedit.component.css']
})
export class ShoppingeditComponent implements OnInit,OnDestroy {
  @ViewChild('f') slform:NgForm;
subscription:Subscription
editmode=false;
edititemindex=0;
editeditem:Ingredient;
constructor(private shoppinglistservice:ShoppinglistService){}
ngOnInit(): void {
 this.subscription= this.shoppinglistservice.startedediting.
 subscribe((index:number)=>{
  this.editmode=true;
  this.edititemindex=index;
  this.editeditem=this.shoppinglistservice.getingredient(index);
  this.slform.setValue({
    name:this.editeditem.name,
    amount:this.editeditem.amount
  })
 })
}
onadd(form:NgForm){
  const value=form.value;
  const newIngredient=new Ingredient(value.name,value.amount)
  if(this.editmode){
    this.shoppinglistservice.updateingredient(this.edititemindex,newIngredient)
   
    this.editmode=false;
  }
  else{
    this.shoppinglistservice.adds(newIngredient);
  }
  form.reset();

}
onclear(){
  this.slform.reset();
  this.editmode=false;

}

ondelete(){
  this.shoppinglistservice.deleteIngredient(this.edititemindex);
  this.onclear();

}
ngOnDestroy(): void {
  this.subscription.unsubscribe;
}
}
 