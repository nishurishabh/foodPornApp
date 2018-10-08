import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router, PreloadAllModules } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";


import { HomeComponent } from "./core/home/home.component";

import { LoginUserComponent } from "./user/login-user/login-user.component";
import { SignupUserComponent } from "./user/signup-user/signup-user.component";
import { DashboardComponent } from "./user/dashboard/dashboard.component";


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {path: 'recipes', loadChildren: './recipes/recipe.module#RecipesModule'},
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'shopping-list', component: ShoppingListComponent},
    { path: 'loginUser', component: LoginUserComponent},
    { path: 'signupUser', component: SignupUserComponent},
    { path: 'dashboard', component: DashboardComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {

}