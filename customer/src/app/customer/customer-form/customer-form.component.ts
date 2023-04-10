import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent {

  public status = [
    {id:1,name:'Open'},
    {id:2,name:'Error'},
    {id:3,name:'Inactive'},
    {id:4,name:'Success'},
  ]
  
  customerForm!: FormGroup;
  constructor(private customerService:CustomerService) {
    this.customerForm = new FormGroup ({
      name: new FormControl("" , [Validators.required , Validators.pattern(/^[a-zA-Z0-9]{3,25}$/)]),
      description : new FormControl("",[Validators.required ,Validators.pattern(/^([a-zA-Z0-9$&+,:;=?@#|'<>.-^*()%!\s]){3,150}$/)]),
      status:new FormControl("Status",Validators.required ),
      rate:new FormControl("",[Validators.required,Validators.pattern(/[0-9]/) ]),
      balance: new FormControl("",[Validators.required,Validators.pattern(/[0-9]/) ]),
    })
   }

   
   addCustomer(formData=this.customerForm): void{
    this.customerService.addCustomerData(formData.value).subscribe((res)=>console.log(res)
    )
    
   }
}
