import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AssigneeComponent } from './assignee/assignee.component';
import { AboutComponent } from './about/about.component';
import { AssigneeService } from './assignee.service';
import { NewAssigneeComponent } from './new-assignee/new-assignee.component';
import { EditAssigneeComponent } from './edit-assignee/edit-assignee.component';

@NgModule({
  declarations: [
    AppComponent,
    AssigneeComponent,
    AboutComponent,
    NewAssigneeComponent,
    EditAssigneeComponent
  ],
  imports: [
    BrowserModule, 
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
        {path: 'assignees', component: AssigneeComponent},
        {path: 'about', component: AboutComponent},
        {path: 'new-assignee', component: NewAssigneeComponent},
        {path: 'edit-assignee', component: EditAssigneeComponent},
        {path: '', redirectTo:'about', pathMatch:'full'}
    ])
  ],
  providers: [AssigneeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
