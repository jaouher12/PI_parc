import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
export class MarketingComponent {
  constructor(private auth: AuthService, private router: Router){}
  ngOnInit(){
    console.log(this.auth.isUserConnected());
    
    if(!this.auth.isUserConnected()){
      this.router.navigateByUrl('/login')
      //this.toastr.error('Unauthorized!', 'Log In to access this page!');
    }
  }
}
