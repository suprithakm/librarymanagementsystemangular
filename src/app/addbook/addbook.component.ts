import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private service:CommonService) { }
  
  add(addForm:NgForm){
    this.service.addBook(addForm.value).subscribe(resData=>{
      if(resData){
        addForm.reset();
        console.log(resData)
        alert('book added successfully');
      }else{
        console.log(resData)
        alert('book already exist');
      }
    })
  }

  ngOnInit() {
  }

}
