import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-librarian',
  templateUrl: './librarian.component.html',
  styleUrls: ['./librarian.component.css']
})
export class LibrarianComponent implements OnInit {
  allissued=[];
 allreq=[];

  constructor(private service: CommonService) {
    
    this.getIssuedBooks();
    
  }


  callGetBookRegData() {
    this.service.getAllReqBook().subscribe(resData => {
      console.log(resData);
      this.allreq = resData;

    });

  }

  getIssuedBooks(){
    this.service.getAllIssuedBooks().subscribe(resData=>{
      console.log(resData);
      this.allissued=resData;
    })
  }

 


  ngOnInit() {
  }

}
