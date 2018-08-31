import { Component, OnInit } from '@angular/core';
import { AssigneeService } from '../assignee.service'; 
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assignee',
  templateUrl: './assignee.component.html',
  styleUrls: ['./assignee.component.css']
})

export class AssigneeComponent implements OnInit {

  assignees : any;
  search_value: string="";
  size: number=5;
  currentPage: number=0;

  pages:any;
  
  constructor(private _assigneeService: AssigneeService, public router:Router) { }
  
  ngOnInit() {
  	this._assigneeService.getAllAssignees()
      .subscribe(
      		resAssigneeData => {
      			this.assignees=resAssigneeData
      		},
      		error => {
      			console.log(error)
      		}
       );
  	  }

  doSearch(){            // cusotm search_value    
  //  console.log(this.search_value);
  //  console.log(this.size);
  //  console.log(this.currentPage);

  	this._assigneeService.getAssignees(this.search_value, this.size, this.currentPage)
      .subscribe(
      		resAssigneeData => {
      			this.assignees=resAssigneeData;
            this.pages= new Array(resAssigneeData.totalPages)
      		},
      		error => {
      			console.log(error)
      		}
       );
  }

  search(){
  	this.doSearch();
  }


  gotoPage(i:number){
    this.currentPage=i;
    this.doSearch();
  }

  onEditAssignee(id: number){
    this.router.navigate(['edit-assignee', id]);
  }

}


