import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject,  Subject,  catchError, throwError } from "rxjs";
import { User } from "./user.model";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";
import { enviroment } from "src/enviroments/enviroment";

export interface AuthResponseData{
    kind:string;
    idToken:string;
    email:string;
    refreshToken:string;
    expiresIn:string;
    localid:string;
    registered?:boolean;
}

@Injectable({providedIn:'root'})
export class AuthService{
    user =new BehaviorSubject<User>(null);
    private tokenexpirationtimer:any;
    constructor(private http:HttpClient,private router:Router){}
    signup(email:string,password:string){
       return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+enviroment.firebaseapikey ,
        {
            email:email,
            password:password,
            returnSecureToken:true
        }).pipe(catchError(this.handleerror),tap(resData=>{
            this.handleauthentication(
                resData.email,
                resData.localid,
                resData.idToken,
                +resData.expiresIn,

            )
            
            
           }));

    }
    login(email:string,password:string){
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+enviroment.firebaseapikey,
           {
            email:email,
            password:password,
            returnSecureToken:true
           } ).pipe(tap(resData=>{
            this.handleauthentication(
                resData.email,
                resData.localid,
                resData.idToken,
                +resData.expiresIn,

            )
            
            
           }));;
    }
    private handleerror(errorRes:HttpErrorResponse){
        let errormessage='an unknown error occured';
        if(!errorRes.error ||!errorRes.error.error){
            return throwError(errormessage);

        }
        switch (errorRes.error.error.message){
            case 'EMAIL_EXISTS':
                errormessage='this email exist already';
                break;
             case 'EMAIL_NOT_FOUND':
                    errormessage='this email does not exist';
                    break;
            case 'INVALID_PASSWORD':
                errormessage="THIS PASSWORD IS NOT CORRECT";
                break;
        }
        return throwError(errormessage);

    }
    private handleauthentication(email:string,userid:string,token:string,expiresIn:number){
        const expirationDate=new Date(new Date().getTime()+ expiresIn*1000);
            const user=new User(email,userid,token,expirationDate);
            this.user.next(user);
            this.autologout(expiresIn*1000)
            localStorage.setItem('userdata',JSON.stringify(user));


    }
    logout(){
        this.user.next(null);
        this.router.navigate(['/auth']);
        localStorage.removeItem('userdata');
        if(this.tokenexpirationtimer){
            clearTimeout(this.tokenexpirationtimer)
        }
        this.tokenexpirationtimer=null;
    }
    autologin(){
        const userdata:{
            email:string,id:string,
            _token:string,_tokenExpirationDate:string
        }=JSON.parse(localStorage.getItem('userdata'));
        if(!userdata){
            return ;
        }
        const loadedUser=new User(userdata.email,userdata.id,userdata._token,new Date(userdata._tokenExpirationDate));
        if(loadedUser.token){
            this.user.next(loadedUser);
            const expirationDuration=new Date(userdata._tokenExpirationDate).getTime()-new Date().getTime()
            this.autologout(expirationDuration);
        }


    }
    autologout(expirationDuration:number){
        console.log(expirationDuration);
        this.tokenexpirationtimer=setTimeout(()=>{
            this.logout();
         } ,expirationDuration);
         }

}