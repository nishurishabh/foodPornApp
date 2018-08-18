import { Recipe } from './recipe.model'

export class RecipeService{
    
  private recipes : Recipe[] = [
        new Recipe('Gulab Jamon', ' Indian Sweet Dish', 'https://www.ndtv.com/cooks/images/gulab%20jamun%20new.jpg'),
        new Recipe('RasGulla', ' Indian Sweet Dish', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtzUqKo_IJTLvvTIfPvOeJaq3xcu759zrI86yFPFLS-QxMO_BKfA'),
        
      ];


       getRecipes(){
           return this.recipes.slice();
       }
}