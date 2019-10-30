import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-librarian',
  templateUrl: './librarian.component.html',
  styleUrls: ['./librarian.component.css']
})
export class LibrarianComponent implements OnInit {
  
  allissued = [];
  allreq = [];

  constructor(private service: CommonService,private router:Router) {
    this.getIssuedBooks();
    this.callGetBookRegData();
  }

  callGetBookRegData() {
    this.service.getAllReqBook().subscribe(resData => {
      console.log(resData);
      this.allreq = resData;
    
    });
  }

  getIssuedBooks() {
    this.service.getAllIssuedBooks().subscribe(resData => {
      console.log(resData);
      this.allissued = resData;
    })
  }
call(books){
  localStorage.setItem("rid",books.registrationId);
}
  return(returnForm:NgForm,books){
    console.log(returnForm.value )
   
    this.service.returnBooks(returnForm.value.returnDate,localStorage.getItem("rid")).subscribe(resData=>{
    
      console.log(resData);
      if(resData!=null){
      if(resData.fine > 0){
      alert('book returned have to pay fine '+`${resData.fine}`)
      this.getIssuedBooks();
      }else{
        alert('book returned')
        this.getIssuedBooks();
      }

      }else{
        alert('no book to return')
      }
    
    })
  }


  ngOnInit() {
  }

}
