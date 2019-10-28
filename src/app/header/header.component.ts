import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
 
 
  constructor(private service:CommonService,
    private router:Router) {
      this.isAdminLogin();
      this.isLibrarianLogin();
      this.isStudentLogin()

    }

   isAdminLogin():Boolean{
     console.log(this.service.IsAdminLogin())
    return this.service.IsAdminLogin();
    }
  isLibrarianLogin():Boolean{
      return this.service.IsLibrarianLogin();
      }
     isStudentLogin():Boolean{
        return this.service.IsStudentLogin();
        }
   logout(){
     this.service.isadminLogin=false;
     this.service.islibrarianLogin=false;
     this.service.isstudentLogin=false;
    this.router.navigateByUrl('')
  }

  
  ngOnInit() {
  }

}
