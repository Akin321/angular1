import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private authservice:AuthService,private loggingservice:LoggingService){}
  ngOnInit(): void {
    this.authservice.autologin();
    this.loggingservice.printlog('hello frm app component');
  }
 
 
}
