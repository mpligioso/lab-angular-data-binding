import { Component, OnInit } from '@angular/core';
import {Food, foods} from '../foods';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {
  userInput: string;
  foodArray: Array<Food> = foods;
  newFood: Food = new Food();

  constructor() { }

  ngOnInit() {
    this.foodArray = foods;
  }

  addFood(){
    this.foodArray.push(this.newFood)
    this.newFood = new Food();
  }


}
