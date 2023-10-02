import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector:'[appplaceholder]'
})
export class PlaceholderDirective{
    constructor(public viewcontainerref:ViewContainerRef){}
}