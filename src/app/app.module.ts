import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { HttpModule } from '@angular/http';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';





import { UserComponent } from './user/user.component';
import { LoginUserComponent } from './user/login-user/login-user.component';
import { SignupUserComponent } from './user/signup-user/signup-user.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user/user.service';





@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginUserComponent,
    SignupUserComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    SharedModule,
    CoreModule,
    ShoppingListModule,
    AuthModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
