import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import{map} from'rxjs/operators'

@Component({
  selector: 'app-student-operation',
  templateUrl: './student-operation.component.html',
  styleUrls: ['./student-operation.component.css']
})
export class StudentOperationComponent implements OnInit {

  allbooks=[];
  request=false;
  id:string

  searchValue:String;

  constructor(private service:CommonService ) 
    {this.callGetBookData();
    }
   

  

   callGetBookData(){
  this.service.getAllBook().subscribe(data=>{
      this.allbooks=data;
      console.log(this.allbooks);

    })
  }

  requestForBook(books){
    this.service.getrequest(localStorage.getItem('token'),books).subscribe(data=>{
      if(data!=null){
      console.log(data);
      localStorage.setItem('registerId',data.registrationId)
      this.id=data.bookId;
      alert('request sent')
      this.callGetBookData();
      }else{
        alert('this book is not available')
      }

    })
  }
  
  cancel(books){
   this.service.cancelRequest( books).subscribe(resData=>{
     if(resData){
    alert('book request cancelled')
    this.callGetBookData();
   }else{
     alert('no request to cancel')
   }
   })

  }
 


  ngOnInit() {
  }

}
