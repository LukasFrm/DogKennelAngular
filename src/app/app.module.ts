import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { OurDogsComponent } from "./our-dogs/our-dogs.component";
import { Routes, RouterModule } from "@angular/router";
import { GalleryComponent } from "./gallery/gallery.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { BreedStandardsComponent } from "./breed-standards/breed-standards.component";
import { LittersComponent } from "./litters/litters.component";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ZyraComponent } from "./our-dogs/zyra/zyra.component";

import { NgxPopper } from "node_modules/angular-popper";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule, MatTooltipModule } from "@angular/material";

const appRoutes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "our-dogs", component: OurDogsComponent },
  // { path: "our-dogs/zyra", component: ZyraComponent },
  { path: "our-dogs/:id", component: ZyraComponent },
  { path: "litters", component: LittersComponent },
  { path: "gallery", component: GalleryComponent },
  { path: "breed-standards", component: BreedStandardsComponent },
  { path: "contacts", component: ContactsComponent },
  { path: "**", component: ErrorPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    OurDogsComponent,
    GalleryComponent,
    ContactsComponent,
    BreedStandardsComponent,
    LittersComponent,
    ErrorPageComponent,
    ZyraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    NgxPopper,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {




  
}
