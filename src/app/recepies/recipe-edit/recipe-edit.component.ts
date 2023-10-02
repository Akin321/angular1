import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recepies.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  editmode=false;
  recipeform:FormGroup
  constructor(private route:ActivatedRoute,private recipeservice:RecipeService,private router:Router){}
  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id=+params['id'];
      this.editmode=params['id']!=null;
     this.initform();

    })
  }
    onsubmit(){
      /*const newrecipe=new Recipe(this.recipeform.value['name'],this.recipeform.value['description'],
      this.recipeform.value['imagepath'],this.recipeform.value['ingredients'])*/
      if(this.editmode){
        this.recipeservice.updaterecipe(this.id,this.recipeform.value)
      }
      else{
        this.recipeservice.addrecipe(this.recipeform.value)
      }
      this.oncancel();

    }
    oncancel(){
      this.router.navigate(['../'],{relativeTo:this.route})
    }
    
  
  onaddingredient(){
    (<FormArray>this.recipeform.get('ingredients')).push(
      new FormGroup({
        name:new FormControl(null,Validators.required),
        amount:new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/) ])
      })
    )
  }
  private initform(){
    let recipename='';
    let recipeimagepath=''
    let recipedescription='';
    let recipeingredients =new FormArray([]);
    if(this.editmode){
      const recipe=this.recipeservice.getrecipebyid(this.id);
      recipename=recipe.name;
      recipedescription=recipe.description;
      recipeimagepath=recipe.imagepath;
      if(recipe['ingredients']){
        for(let ingredient of recipe.ingredients){
          recipeingredients.push(
           new FormGroup({
            name:new FormControl(ingredient.name,Validators.required),
             amount:new FormControl(ingredient.amount, [Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/) ])
           })
           );
        }
      }
    }
    this.recipeform = new FormGroup({
      'name':new FormControl(recipename,Validators.required),
      'imagepath': new FormControl(recipeimagepath,Validators.required),
      'description':new FormControl(recipedescription,Validators.required,),
      'ingredients':recipeingredients

    });
   

    }
    getcontrols(){
     return (<FormArray>this.recipeform.get('ingredients')).controls;

  }
  ondeleteing(index:number){
    (<FormArray>this.recipeform.get('ingredients')).removeAt(index);
  }

}
