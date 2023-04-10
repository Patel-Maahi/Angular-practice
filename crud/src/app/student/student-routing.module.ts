import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';
import { AddStudentComponent } from './components/add-student/add-student.component';

const routes: Routes = [
  {path:'', redirectTo:'student-list',pathMatch:'full'},
  {path:'student-list',component:StudentListComponent},
  {path:'add-student',component:AddStudentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
