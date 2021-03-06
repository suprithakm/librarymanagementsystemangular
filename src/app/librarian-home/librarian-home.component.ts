import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-librarian-home',
  templateUrl: './librarian-home.component.html',
  styleUrls: ['./librarian-home.component.css']
})
export class LibrarianHomeComponent implements OnInit {
allreq:[]
allissued:[]
registerid:String;
gen:boolean
genn:boolean
  constructor(private service: CommonService) {
    this.callGetBookRegData();

  }


  callGetBookRegData() {
    this.service.getAllReqBook().subscribe(resData => {
      console.log(resData);
      this.allreq = resData;
    });

  }


  

  acceptRequest(regid){
    console.log(regid)
    this.service.acceptRequest(regid).subscribe(resData=>{
      console.log(resData);
      this.callGetBookRegData();
   if(resData!=null){
      alert('book is issued')
     
   }else{
     alert('book already issued')
   }

    })
  }
  

  ngOnInit() {
  }

}
