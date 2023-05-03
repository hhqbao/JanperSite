import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout1Component } from './layouts/layout-1/layout-1.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';

const routes: Routes = [
  {
    path: '',
    component: Layout1Component,
    children: [
      { path: 'gallery', component: GalleryPageComponent },
      { path: '', component: HomePageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
