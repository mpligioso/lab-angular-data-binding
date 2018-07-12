import { Pipe, PipeTransform } from '@angular/core';
import { foods, Food } from './foods'

@Pipe({
  name: 'foodFilter'
})
export class FoodFilterPipe implements PipeTransform {

  transform(value: Array<Food>, searchTerm: string): Array<Food> {
    if (!value){
      return [];
    }

    if (!searchTerm){
      return value
    }

    searchTerm = searchTerm.toLowerCase();

    const results: Array<Food> = [];

    value.forEach((oneFood) => {
      const lowerName = oneFood.name.toLowerCase();

      if (lowerName.includes(searchTerm)){
        results.push(oneFood);
      }
    })

    return results
  }

}
