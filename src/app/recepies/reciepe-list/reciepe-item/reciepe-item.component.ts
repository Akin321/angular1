import { Component, Input,  } from '@angular/core';
import { Recipe } from '../../recepies.model';


@Component({
  selector: 'app-reciepe-item',
  templateUrl: './reciepe-item.component.html',
  styleUrls: ['./reciepe-item.component.css']
})
export class ReciepeItemComponent {
 
  @Input() recipe:Recipe;
  @Input() index:number;

  


}
