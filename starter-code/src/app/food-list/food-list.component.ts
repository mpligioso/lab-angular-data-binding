import { Component, OnInit } from '@angular/core';
import {Food, foods} from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  userInput: string;
  foodArray: Array<any> = foods;
  todayArray: Array<any> = [];
  totalCalories: number = 0;

  constructor() { }

  ngOnInit() {
  }

  foodToday(oneFood){
    this.todayArray.push(oneFood);
    this.totalCalories += oneFood.calories;
  }
}
