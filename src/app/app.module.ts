import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Layout1Component } from './layouts/layout-1/layout-1.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LeftNavMenuComponent } from './components/left-nav-menu/left-nav-menu.component';
import { SimpleContactFormComponent } from './components/simple-contact-form/simple-contact-form.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';

@NgModule({
  declarations: [
    AppComponent,
    Layout1Component,
    HomePageComponent,
    GalleryPageComponent,
    LeftNavMenuComponent,
    SimpleContactFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
