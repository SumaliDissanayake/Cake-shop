import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllCakesComponent } from './all-cakes/all-cakes.component';
import { ChocolateCakeComponent } from './chocolate-cake/chocolate-cake.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ChristmasCakeComponent } from './christmas-cake/christmas-cake.component';
import { GateauComponent } from './gateau/gateau.component';
import { RibbonCakeComponent } from './ribbon-cake/ribbon-cake.component';
import { CupCakeComponent } from './cup-cake/cup-cake.component';
import { OurPromotionComponent } from './our-promotion/our-promotion.component';
import { SpecialOrdersComponent } from './special-orders/special-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    AllCakesComponent,
    ChocolateCakeComponent,
    HomeComponent,
    AboutComponent,
    ChristmasCakeComponent,
    GateauComponent,
    RibbonCakeComponent,
    CupCakeComponent,
    OurPromotionComponent,
    SpecialOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
