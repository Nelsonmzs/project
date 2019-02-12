import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemcarouselComponent } from './itemcarousel/itemcarousel.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { FooterComponent } from './footer/footer.component';
import { RedessociaisComponent } from './redessociais/redessociais.component';
import { DestinosNacComponent } from './destinos-nac/destinos-nac.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    NavbarComponent,
    ItemcarouselComponent,
    FooterComponent,
    RedessociaisComponent,
    DestinosNacComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
