import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recepies.model';
import { RecipeService } from '../recipe.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-reciepe-detail',
  templateUrl: './reciepe-detail.component.html',
  styleUrls: ['./reciepe-detail.component.css']
})
export class ReciepeDetailComponent implements OnInit {
 recipeitem:Recipe;
 id:number;
constructor(private recipeservice:RecipeService, private route:ActivatedRoute,private router:Router){}
ngOnInit(): void {
  this.route.params.subscribe((params:Params)=>{this.id=+params['id'],
  this.recipeitem=this.recipeservice.getrecipebyid(this.id);});
  
}

addlist(){
this.recipeservice.add_ing_in_shplist(this.recipeitem.ingredients);
}
ondelete(){
  this.recipeservice.deleterecipe(this.id);
  this.router.navigate(['/recipes'])
}
}
