import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { NgForm } from '@angular/forms';
import { BookTransaction } from '../bookstransaction';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {
  selectedBook = {
    transactionId: null,
    fine: null,
    issueDate: null,
    registrationId: null,
    returnDate: null
}
  
issued:[]
  constructor(private service:CommonService,private router:Router) { 
    this.getIssuedBooks();
  }

  selectBook(books) {
    this.selectedBook = books;
  }

  getIssuedBooks(){
    this.service.getAllIssuedBook(localStorage.getItem('token')).subscribe(resData=>{
      console.log(resData);
      this.issued=resData;
    })
  }
 

  ngOnInit() {
  }

}
