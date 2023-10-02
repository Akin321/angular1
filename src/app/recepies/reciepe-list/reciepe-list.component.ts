import { Component ,OnDestroy,OnInit, } from '@angular/core';
import { Recipe } from '../recepies.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reciepe-list',
  templateUrl: './reciepe-list.component.html',
  styleUrls: ['./reciepe-list.component.css']
})
export class ReciepeListComponent implements OnInit, OnDestroy{
  subscription:Subscription

  constructor(private recipeservice:RecipeService, private router:Router,private route:ActivatedRoute){}
recipes=this.recipeservice.getrecipes();
ngOnInit(): void {
 this.subscription= this.recipeservice.recipeschanged.subscribe((recipe:Recipe[])=>{
    this.recipes=recipe;
  })
}
 


onnewrecipe(){
  this.router.navigate(['new'],{relativeTo:this.route})
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }






}
