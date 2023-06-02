import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddProductPageComponent } from './pages/add-product-page/add-product-page.component';
import { UpdateProductPageComponent } from './pages/update-product-page/update-product-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AddSubcategoryPageComponent } from './pages/add-subcategory-page/add-subcategory-page.component';
import { UpdateSubcategoryPageComponent } from './pages/update-subcategory-page/update-subcategory-page.component';
import { UpdateMarcaPageComponent } from './pages/update-marca-page/update-marca-page.component';
import { AddMarcaPageComponent } from './pages/add-marca-page/add-marca-page.component';
import { ViewProductsPageComponent } from './pages/view-products-page/view-products-page.component';
import { AddImagesPageComponent } from './pages/add-images-page/add-images-page.component';
import { AddCategoryPageComponent } from './pages/add-category-page/add-category-page.component';

@NgModule({
  declarations: [
    AddProductPageComponent,
    UpdateProductPageComponent,
    HomePageComponent,
    AddSubcategoryPageComponent,
    UpdateSubcategoryPageComponent,
    UpdateMarcaPageComponent,
    AddMarcaPageComponent,
    ViewProductsPageComponent,
    AddImagesPageComponent,
    AddCategoryPageComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
