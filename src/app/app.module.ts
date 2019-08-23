import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OrdersComponent } from './orders/orders.component';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './shared/nav-menu/nav-menu.component';
import { NavFooterComponent } from './shared/nav-footer/nav-footer.component';
import { TaskComponent } from './task/task.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    HomeComponent,    
    NavMenuComponent,
    NavFooterComponent,
    TaskComponent,
    ListComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
