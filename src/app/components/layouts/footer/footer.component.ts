import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoginServiceService } from '../../../services/login-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  isLoggedIn$!: Observable<boolean>
  loggedIn!: any
  cdate: any
  constructor(private login: LoginServiceService){
  }

  ngOnInit(): void {
    this.cdate = new Date().getFullYear()

      this.loggedIn = localStorage.getItem('loggedIn')
      if(this.loggedIn){
        this.isLoggedIn$ = of(this.loggedIn ==='true')
      }
      else{
        this.isLoggedIn$ = this.login.isLoggedIn()
      }
    
  }

}
