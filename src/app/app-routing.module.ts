import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
import { ListComponent } from './list/list.component';
import { UserDeviceInfoComponent } from './user-device-info/user-device-info.component';
import { AppversionComponent } from './appversion/appversion.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'task', component: TaskComponent },
  { path: 'list', component: ListComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'deviceinfo', component: UserDeviceInfoComponent },
  { path: 'version', component: AppversionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
