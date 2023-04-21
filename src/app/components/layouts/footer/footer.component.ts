import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoginServiceService } from '../../../services/login-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  cdate: any
  constructor(private login: LoginServiceService){
  }

  ngOnInit(): void {
    this.cdate = new Date().getFullYear()
    
  }

}
