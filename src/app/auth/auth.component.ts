import { Component, ComponentFactoryResolver, Host, OnDestroy, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService,AuthResponseData } from "./auth.service";
import { Observable, Subscription } from "rxjs";
import { Router } from "@angular/router";
import { AlertComponent } from "../shared/alert/alert.component";
import { PlaceholderDirective } from "../shared/placeholder/placeholder.directive";

@Component({
    selector:'app-auth',
    templateUrl:'./auth.component.html'
})
export class AuthComponent implements OnDestroy{
    isloginmode=true;
    isloading=false;
    error=null;
    private closesub:Subscription;
    @ViewChild(PlaceholderDirective) alertHost:PlaceholderDirective;
    constructor(private authservice:AuthService,private router:Router,private componentfactory:ComponentFactoryResolver){}
    onswitchmode(){
        this.isloginmode=!this.isloginmode;
    }
    onsubmit(form:NgForm){
        if(!form.valid){
            return;
        }
       const email=form.value.email;
       const password=form.value.password;
       let authobs:Observable<AuthResponseData>
       this.isloading=true;
       if(this.isloginmode){
       authobs= this.authservice.login(email,password)
           }
       else{
        authobs=this.authservice.signup(email,password)

       }
       authobs.subscribe(resData=>{
        console.log(resData);
        this.isloading=false;
        this.router.navigate(['/recipes']);
       },
       errormessage=>{
        console.log(errormessage);
        this.error=errormessage;
       this.showerroralert(errormessage);
        this.isloading=false;
       });
      
        form.reset();

    }
    onhandleerror(){
        this.error=null;
    }
    private showerroralert(message:string){
        const alertcmpfactory=this.componentfactory.resolveComponentFactory(AlertComponent);
        const hostviewcontainerRef=this.alertHost.viewcontainerref;
        hostviewcontainerRef.clear();
        const componentref=hostviewcontainerRef.createComponent(alertcmpfactory);
        componentref.instance.message=message;
        this.closesub=componentref.instance.close.subscribe(()=>{
            this.closesub.unsubscribe();
            hostviewcontainerRef.clear();
        

        })


    }
    ngOnDestroy(): void {
        if(this.closesub){
            console.log(this.closesub)
            this.closesub.unsubscribe();
        }
    }
  
    }

    
