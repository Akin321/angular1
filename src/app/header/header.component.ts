import {Component, OnDestroy, OnInit} from '@angular/core';
import { DataStorage } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
@Component ({
selector:'app-header',
templateUrl:'./header.component.html'

})

export class HeaderComponent implements OnInit,OnDestroy{
    private userSub:Subscription;
    isauthenticated=false;
    constructor(private datastorage:DataStorage,private authservice:AuthService){}
    ngOnInit(): void {
      this.userSub = this.authservice.user.subscribe(user=>{
            this.isauthenticated=!!user
            console.log(!user);
            console.log(!!user);
        }
             )
    }
    onsavedata(){
        this.datastorage.storeRecipes();
    }
    onfetchdata(){
        this.datastorage.fetchrecipes().subscribe();
    }
    onlogout(){
        this.authservice.logout();
    }
    ngOnDestroy(): void {
        this.userSub.unsubscribe();
    }
}