import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
visible :boolean = false

constructor(private routes:Router){}

changeVisible(){
  if(this.visible=!this.visible){
    this.routes.navigate(['add-student'])
  }
}
}
