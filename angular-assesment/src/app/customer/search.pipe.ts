import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchData:any) {
    if(!searchData)
    {
      return value
    }
    return value.filter((item:any)=>{
      return  item.name.toUpperCase().match(searchData.toUpperCase())
    })
  }
}
