import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private service:CommonService,private router:Router) { }
  
  add(addForm:NgForm){
    if(addForm.value.type==='admin'){
      alert('cannot add admin')
      this.router.navigateByUrl('/adduser')
    }else{
   console.log(localStorage.getItem('token'));
    this.service.addUser(addForm.value).subscribe(resData=>{
      if(resData){
        addForm.reset();
        alert('user added successfully');
      }
      else{
        alert('user already exist');
      }
    })
  }
  }
  adminhome(){
    this.router.navigateByUrl("/admin-home");
  }
  ngOnInit() {
  }

}
