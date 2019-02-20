import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!Object.keys(args).length) return value
    return value.sort((a,b) => {
      const itemValue = args.name == 'conditionName' ? a.resource.code.text.toLowerCase() : new Date(a.resource.dateRecorded);
      const itemValue1 = args.name == 'conditionName' ? b.resource.code.text.toLowerCase() : new Date(b.resource.dateRecorded);
      if(args.name == 'conditionName'){        
        if(args.isAscending){
          return itemValue < itemValue1 ? 1 : itemValue > itemValue1 ? -1 : 0 ;
        } else {
          return itemValue < itemValue1 ? -1 : itemValue > itemValue1 ? 1 : 0 ;
        }
      } else {
        return args.isAscending ? itemValue - itemValue1 : itemValue1 - itemValue;
      } 
      
    })
  }

}
