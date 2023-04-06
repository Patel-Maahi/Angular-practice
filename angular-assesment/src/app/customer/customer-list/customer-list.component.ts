import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  @Output() openFormEvt = new EventEmitter()
  @Output() deleteDataEvt = new EventEmitter()
  @Output() editDataEvt = new EventEmitter()
  @Output() filterDataEvt = new EventEmitter()
  @Input()public customerData:any
  searchData:any = ''
  public formVisible:boolean = true
  public status = [
    {id:1,name:'Open'},
    {id:2,name:'Error'},
    {id:3,name:'Inactive'},
    {id:4,name:'Success'},
  ]
  constructor() { }
  ngOnInit(): void {
  }
  //emitting boolean value true to open form
  openForm(){
    this.openFormEvt.emit(this.formVisible)
  }
  //emitting id of data to be deleted
  deleteCustomer(id:Customer){
    this.deleteDataEvt.emit(id)
  }
  //emitting id of data to be edited 
  editCustomer(id:Customer){
    this.editDataEvt.emit(id)
    this.openForm()
  }
  //emitting value of dropdown to filter data
  filterData(value:any){
    this.filterDataEvt.emit(value)
  }
}
