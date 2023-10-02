import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from './shopping-list.service';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css'],
  
})
export class ShoppinglistComponent implements OnInit,OnDestroy{
  private igchanged:Subscription
  constructor(private shoppinglist:ShoppinglistService,private loggingservice:LoggingService){}
  ingredients:Ingredient[]=this.shoppinglist.getingredients();
  ngOnInit(): void {
   
    this.igchanged=this.shoppinglist.ingredientschanged.subscribe((ing:Ingredient[])=>{
      this.ingredients=ing})
      this.loggingservice.printlog('hello frm shp-list cmponent')
  }
  ngOnDestroy(): void {
    this.igchanged.unsubscribe();
  }
  onedititem(index:number){
    this.shoppinglist.startedediting.next(index);
  }

}
  
  
  

