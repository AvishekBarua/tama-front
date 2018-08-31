import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'; 

import { Assignee } from './model/model.assignee';

@Injectable()
export class AssigneeService {

  private get_url: string = "http://localhost:8098/task/search"; 
  private post_url: string = "http://localhost:8098/task/assignees"; 

  constructor(private _http: Http) { }

  getAssignees(search_value: string, size: number, page: number){
     return this._http.get("http://localhost:8098/task/search?search_value=" + search_value 
  			+ "&size=" + size + "&page=" + page)
  		.map((response: Response) => response.json());

  }


  getAllAssignees(){
  	return this._http.get(this.get_url)
  		.map((response: Response) => response.json());
  }

  saveAssignee(assignee: Assignee){
    return this._http.post(this.post_url, assignee)
      .map((response: Response) => response.json());
  } 

}
