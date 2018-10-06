import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router, PreloadAllModules } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";


import { HomeComponent } from "./core/home/home.component";


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {path: 'recipes', loadChildren: './recipes/recipe.module#RecipesModule'},
    { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {

}