import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Customer } from '../customer';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit,OnChanges {
  @Output() addFormDataEvt = new EventEmitter()
  @Output() closeFormEvt = new EventEmitter()
  @Output() updateFormDataEvt = new EventEmitter()
  @Input()  editData:any
  public changeBtn = true
  public formNotVisisble:boolean = false
  public status = [
    {id:1,name:'Open'},
    {id:2,name:'Error'},
    {id:3,name:'Inactive'},
    {id:4,name:'Success'},
  ]
  customerForm!: FormGroup;
  
  constructor() { }
  ngOnChanges(){
    if(this.editData){
      this.setFormValue()
      this.changeBtn = false
    } 
  }
  ngOnInit() {
    this.customerForm = new FormGroup ({
      name: new FormControl("" , [Validators.required , Validators.pattern(/^[a-zA-Z0-9]{3,25}$/)]),
      description : new FormControl("",[Validators.required ,Validators.pattern(/^([a-zA-Z0-9$&+,:;=?@#|'<>.-^*()%!\s]){3,150}$/)]),
      status:new FormControl("Status",Validators.required ),
      rate:new FormControl("",[Validators.required,Validators.pattern(/[0-9$]/) ]),
      balance: new FormControl("",[Validators.required,Validators.pattern(/[0-9$-]/) ]),
    })
    this.changeBtn = true
  }
  //emitting customer form values
  addFormData(){
  this.addFormDataEvt.emit(this.customerForm.value)
  this.closeForm()
  }
  //emitting boolean value false to close the form
  closeForm(){
   this.closeFormEvt.emit(this.formNotVisisble)
  }
  //setting form values
  setFormValue(){
    this.customerForm.setValue({
      name:this.editData.name,
    description:this.editData.description,
    status:this.editData.status,
    rate:this.editData.rate,
    balance:this.editData.balance
    })
  }
  //emitting updated customer form values
  updateFormData(){
    this.updateFormDataEvt.emit(this.customerForm.value)
    this.closeForm()
  }


}
