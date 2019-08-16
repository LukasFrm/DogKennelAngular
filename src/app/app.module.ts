import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { OurDogsComponent } from "./our-dogs/our-dogs.component";
import { Routes, RouterModule } from "@angular/router";
import { ContactsComponent } from "./contacts/contacts.component";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ZyraComponent } from "./our-dogs/zyra/zyra.component";

import { NgxPopper } from "node_modules/angular-popper";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule, MatTooltipModule } from "@angular/material";
import { NgxPopoverImageModule } from "ngx-popover-image";
import { PopoverComponent } from './popover/popover.component';
import {PopoverModule} from 'node_modules/ngx-popover';
import { BrukneComponent } from './brukne/brukne.component';
import { IstagramComponent } from './istagram/istagram.component';
import { GarasComponent } from './garas/garas.component';
import { RedspringsComponent } from './redsprings/redsprings.component';
import { KruopaComponent } from './kruopa/kruopa.component';


const appRoutes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "our-dogs", component: OurDogsComponent },

    { path: "our-dogs/zyra", component: ZyraComponent },
    { path: "our-dogs/brukne", component: BrukneComponent },
    { path: "our-dogs/istagram", component: IstagramComponent },
    { path: "our-dogs/garas", component: GarasComponent },
    { path: "our-dogs/juka", component: GarasComponent },
    { path: "our-dogs/redsprings", component: RedspringsComponent },
    { path: "our-dogs/kruopa", component: KruopaComponent },

  { path: "contacts", component: ContactsComponent },
  { path: "**", component: ErrorPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    OurDogsComponent,
    ContactsComponent,
    ErrorPageComponent,
    ZyraComponent,
    PopoverComponent,
    BrukneComponent,
    IstagramComponent,
    GarasComponent,
    RedspringsComponent,
    KruopaComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    NgxPopper,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTooltipModule,
    NgxPopoverImageModule,
    PopoverModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
