import { Component, OnInit } from '@angular/core';
import { Assignee } from '../model/model.assignee';


@Component({
  selector: 'app-edit-assignee',
  templateUrl: './edit-assignee.component.html',
  styleUrls: ['./edit-assignee.component.css']
})
export class EditAssigneeComponent implements OnInit {

    _mode: number =1;
 	_assignee: Assignee = new Assignee();

    constructor() { }

 	ngOnInit() {
  	}

  	updateAssignee(){
  		
  	}
}
