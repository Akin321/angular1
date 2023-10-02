import { Directive, TemplateRef, ViewContainerRef ,ElementRef, HostListener, HostBinding} from "@angular/core";

@Directive({
    selector:"[appDropdown]"
}

)
export class DropdownDirective{
    
    @HostBinding('class.open') isopen=false;
    @HostListener('click') toggleopen(){
        this.isopen=!this.isopen
    }
    


constructor(private elementref:ElementRef){

}

}