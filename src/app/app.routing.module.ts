import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

import { AuthGuard } from "./auth/auth.guard.service";


const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: "full" },
    { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}