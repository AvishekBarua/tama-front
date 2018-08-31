import { Component, OnInit } from '@angular/core';
import { AssigneeService } from '../assignee.service';
import { Assignee } from '../model/model.assignee';


@Component({
  selector: 'app-new-assignee',
  templateUrl: './new-assignee.component.html',
  styleUrls: ['./new-assignee.component.css']
})
export class NewAssigneeComponent implements OnInit {

	_assignee: Assignee = new Assignee();

	_mode: number = 1;

	constructor(private _assigneeService: AssigneeService) { }

	ngOnInit() {
	}

	saveAssignee(){
		console.log(this._assignee);
		this._assigneeService.saveAssignee(this._assignee)
			.subscribe(
	      		resAssigneeData => {
	      			console.log(resAssigneeData);
	      			this._assignee=resAssigneeData;
	      			this._mode=2; 

	      		},
	      		error => {
	      			console.log(error)
	      		}
	       );
	}

	initialize(){
		this._assignee.name="";
		this._assignee.email="";
		this._assignee.photo="";
		this._assignee.assignedDate=new Date();;
		this._mode=1;

		console.log("initiliza",this._assignee);
		console.log("initiliza",this._mode);
	}

}
