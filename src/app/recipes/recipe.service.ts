import { Recipe } from './recipe.model'
import {  Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
@Injectable()
export class RecipeService{

  recipeChanged = new Subject<Recipe[]>();
  
  private recipes : Recipe[] = [
        new Recipe(
          'Gulab Jamon', 
          'Popular Sweet Dish in Uttar Pradesh', 
          'https://www.ndtv.com/cooks/images/gulab%20jamun%20new.jpg',
          [new Ingredient('French Fries', 3),
          new Ingredient('Namkeen', 20)
        ]
        ),
        new Recipe('RasGulla', 
        ' Popular Sweet Dish in West Bengal', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtzUqKo_IJTLvvTIfPvOeJaq3xcu759zrI86yFPFLS-QxMO_BKfA',
        [new Ingredient('Apple Juice', 3),
        new Ingredient('Maratina', 3)]
      ),
      new Recipe(
        'Burger', 
        'Popular throughout the globe', 
        'https://www.burgerlounge.com/home/lounge-hero-trim-lettuce-v3.png',
        [new Ingredient('French Fries', 3),
        new Ingredient('Namkeen', 20)
      ]
      ),
      new Recipe(
        'Momos', 
        'Popular Sweet Dish China', 
        'https://5.imimg.com/data5/WS/VG/MY-45183056/soya-momos-500x500.jpg',
        [new Ingredient('French Fries', 3),
        new Ingredient('Namkeen', 20)
      ]
      ),
      new Recipe(
        'Chicken Tikka', 
        'Popular Sweet Dish in Induia', 
        'http://glebekitchen.com/wp-content/uploads/2016/12/chickentikkakebab.jpg',
        [new Ingredient('French Fries', 3),
        new Ingredient('Namkeen', 20)
      ]
      )
        
      ];

      constructor(private slService: ShoppingListService){}
      setRecipe(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
      }


       getRecipes(){
           return this.recipes.slice();
       }

       getRecipe(index: number){
            return this.recipes.slice()[index];
       }

       addIngredientsToShoppingList(ingredients: Ingredient[]){
                this.slService.addIngredientFromRecipe(ingredients);
       }

       addRecipe(recipe: Recipe) {
             this.recipes.push(recipe);
             this.recipeChanged.next(this.recipes.slice());
       }

       updateRecipe(index: number, newRecipe: Recipe) {
           this.recipes[index]= newRecipe;
           this.recipeChanged.next(this.recipes.slice());
       }

       deleteRecipe(index: number) {
         this,this.recipes.splice(index, 1);
         this.recipeChanged.next(this.recipes.slice());
         
       }
}