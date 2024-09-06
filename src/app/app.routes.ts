import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {BasketComponent} from "./pages/basket/basket.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {AdminComponent} from "./pages/admin/admin.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', redirectTo: ''},
  {path: 'basket', component: BasketComponent},
  {path: 'admin', component: AdminComponent},
  {path: '**', component: NotFoundComponent}
];
