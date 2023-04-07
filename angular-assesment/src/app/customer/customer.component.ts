import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  public isFormVisible:boolean = false
  customerData: any;
  editData: any;
  editDataId: any;

  constructor(private customerService:CustomerService) { }

  ngOnInit(){
   this.getCustomer()
  }
  //opening customer form
  openForm(value:boolean){
    this.isFormVisible = value
  }
  //closing customer form
   closeForm(value:boolean){
    this.isFormVisible = value
   }
   //getting customer data from server
   getCustomer(){
    this.customerService.getCustomerData().subscribe((res)=>
    {
      console.log(res)
      this.customerData=res})
   }
   //adding customer data to table
  addCustomer(customerData:Customer){
 this.customerService.addCustomerData(customerData).subscribe((res)=>res)
 this.getCustomer()
  } 
  //deleting customer data from table
  deleteCustomer(id:Customer){
  this.customerService.deleteCustomerData(id).subscribe((res)=>res)
  this.getCustomer()
  }
  //editing customer data selected from table
  editCustomer(id:Customer){
    this.editDataId = id
   this.customerService.getCustomerDataById(id).subscribe((res)=>this.editData=res)
   console.log(this.editData);
  }
  //updating and adding customer data to table
  updateCustomer(customerData:Customer){
   this.customerService.editCustomerData(this.editDataId,customerData).subscribe((res)=>res)
   this.getCustomer()
  }
  //filtering customer data from table according to selected value in dropdown
  filterCustomerData(value:any){

  //  this.customerData=this.customerData.filter((res: { status: any; })=> res.status==value)
   }

}
