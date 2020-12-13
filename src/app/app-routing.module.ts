import { SpecialOrdersComponent } from './special-orders/special-orders.component';
import { OurPromotionComponent } from './our-promotion/our-promotion.component';
import { CupCakeComponent } from './cup-cake/cup-cake.component';
import { RibbonCakeComponent } from './ribbon-cake/ribbon-cake.component';
import { GateauComponent } from './gateau/gateau.component';
import { ChristmasCakeComponent } from './christmas-cake/christmas-cake.component';
import { ChocolateCakeComponent } from './chocolate-cake/chocolate-cake.component';
import { AboutComponent } from './about/about.component';
import { AllCakesComponent } from './all-cakes/all-cakes.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [
  {path: '', redirectTo: '/ChocolateCake', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'AllCakes', component: AllCakesComponent},
  {path: 'About', component: AboutComponent},
  {path: 'ChocolateCake', component: ChocolateCakeComponent},
  {path: 'ChristmasCake', component: ChristmasCakeComponent},
  {path: 'Gateau', component: GateauComponent},
  {path: 'RibbonCake', component: RibbonCakeComponent},
  {path: 'CupCake', component: CupCakeComponent},
  {path: 'OurPromotion', component: OurPromotionComponent},
  {path: 'SpecialOrders', component: SpecialOrdersComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
