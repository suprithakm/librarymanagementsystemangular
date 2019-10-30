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
    this.getIssuedBooks();
  }


  callGetBookRegData() {
    this.service.getAllReqBook().subscribe(resData => {
      console.log(resData);
      this.allreq = resData;
      for(let resp of resData){
        this.service.getAllIssuedBooks().subscribe(resDataa => {
          console.log("tran"+resDataa);
          this.allissued = resDataa;
          for(let requ of resDataa){
            console.log("a"+requ.registrationId)
            console.log("b"+resp.registrationId)
         if( requ.registrationId===resp.registrationId){
           
           this.registerid=resp.registrationId;
         }
         
          }
        })
      
      }
  

    });

  }


  getIssuedBooks() {
    this.service.getAllIssuedBooks().subscribe(resData => {
      console.log("tran"+resData);
      this.allissued = resData;
      for(let requ of resData){
      console.log(requ.registrationId);
     
      }
    })
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
