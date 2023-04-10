import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpclient:HttpClient) { }

getCustomerData(): Observable<Customer>{
  return this.httpclient.get<Customer>('http://localhost:3000/customer')
}
addCustomerData(customerData:Customer): Observable<Customer>{
  return this.httpclient.post<Customer>('http://localhost:3000/customer', customerData)
}
deleteCustomerData(id:Customer):Observable<Customer>{
  return this.httpclient.delete<Customer>(`http://localhost:3000/customer/${id}`)
}
editCustomerData(id:Customer,customerData:Customer):Observable<Customer>{
  return this.httpclient.put<Customer>(`http://localhost:3000/customer/${id}`, customerData)
}
getCustomerDataById(id:Customer):Observable<Customer>{
  return this.httpclient.get<Customer>(`http://localhost:3000/customer/${id}`)
}
}
