import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProductoComponent } from './components/card-producto/card-producto.component';
import { SearchComponent } from './components/search/search.component';
import { FormProductComponent } from './components/form-product/form-product.component';

// CM: Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'; 
import { MatSelectModule } from '@angular/material/select';

import { ReactiveFormsModule } from '@angular/forms';
import { SidebarAdminComponent } from './components/sidebar-admin/sidebar-admin.component';
import { NavbarClientsComponent } from './components/navbar-clients/navbar-clients.component';
import { MenuClientsComponent } from './components/menu-clients/menu-clients.component';
import { SubcategoriesComponent } from './components/subcategories/subcategories.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormSubcategoryComponent } from './components/form-subcategory/form-subcategory.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { FormMarcaComponent } from './components/form-marca/form-marca.component';
import { RouterModule } from '@angular/router';
import { TableProductsComponent } from './components/table-products/table-products.component';
import { FormImagesComponent } from './components/form-images/form-images.component';
import { SideOptionsComponent } from './components/side-options/side-options.component';
import { HttpClientModule } from '@angular/common/http';
import { FormCategoryComponent } from './components/form-category/form-category.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';

@NgModule({
  declarations: [
    CardProductoComponent,
    SearchComponent,
    FormProductComponent,
    SidebarAdminComponent,
    NavbarClientsComponent,
    MenuClientsComponent,
    SubcategoriesComponent,
    FooterComponent,
    FormSubcategoryComponent,
    SpinnerComponent,
    FormMarcaComponent,
    TableProductsComponent,
    FormImagesComponent,
    SideOptionsComponent,
    FormCategoryComponent,
    CarruselComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [
    CardProductoComponent,
    FormProductComponent,
    SidebarAdminComponent,
    NavbarClientsComponent,
    NavbarClientsComponent,
    SubcategoriesComponent,
    FooterComponent,
    FormSubcategoryComponent,
    SpinnerComponent,
    FormMarcaComponent,
    FormImagesComponent,
    SideOptionsComponent,
    FormCategoryComponent,
    CarruselComponent,

    // CM: Material
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
})
export class SharedModule { }
