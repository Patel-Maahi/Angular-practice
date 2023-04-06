import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient : HttpClient) { }

//API call to get data from server
  getCustomerData(){
    return this.httpClient.get('http://localhost:3000/customer')
  }
  //API call to post data to server
  addCustomerData(customerData:Customer){
    return this.httpClient.post('http://localhost:3000/customer', customerData)
  }
  //API call to delete data form server
  deleteCustomerData(id:Customer){
    return this.httpClient.delete(`http://localhost:3000/customer/${id}`)
  }
  //API call to add updated data to server
  editCustomerData(id:Customer,customerData:Customer){
    return this.httpClient.put(`http://localhost:3000/customer/${id}`, customerData)
  }
  //API call to get data from server by ID
  getCustomerDataById(id:Customer){
    return this.httpClient.get(`http://localhost:3000/customer/${id}`)
  }
}
