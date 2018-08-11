import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe('Gulab Jamon', ' Indian Sweet Dish', 'https://www.ndtv.com/cooks/images/gulab%20jamun%20new.jpg'),
    new Recipe('Gulab Jamon', ' Indian Sweet Dish', 'https://www.ndtv.com/cooks/images/gulab%20jamun%20new.jpg'),
    new Recipe('Gulab Jamon', ' Indian Sweet Dish', 'https://www.ndtv.com/cooks/images/gulab%20jamun%20new.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
