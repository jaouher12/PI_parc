import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  

  constructor(private auth: AuthService, private router: Router){}
  ngOnInit(){
    console.log(this.auth.isUserConnected());
    
    if(!this.auth.isUserConnected()){
      this.router.navigateByUrl('/login')
      //this.toastr.error('Unauthorized!', 'Log In to access this page!');
    }
  }
}