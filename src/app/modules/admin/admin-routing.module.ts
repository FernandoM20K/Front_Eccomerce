import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryPageComponent } from './pages/add-category-page/add-category-page.component';
import { AddImagesPageComponent } from './pages/add-images-page/add-images-page.component';
import { AddProductPageComponent } from './pages/add-product-page/add-product-page.component';
import { AddSubcategoryPageComponent } from './pages/add-subcategory-page/add-subcategory-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UpdateProductPageComponent } from './pages/update-product-page/update-product-page.component';
import { UpdateSubcategoryPageComponent } from './pages/update-subcategory-page/update-subcategory-page.component';
import { ViewProductsPageComponent } from './pages/view-products-page/view-products-page.component';
import { AddMarcaPageComponent } from './pages/add-marca-page/add-marca-page.component';
import { UpdateMarcaPageComponent } from './pages/update-marca-page/update-marca-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: 'view-products',
        component: ViewProductsPageComponent
      },
      {
        path: 'add-product',
        component: AddProductPageComponent
      },
      {
        path: 'edit-product/:id',
        component: UpdateProductPageComponent
      },
      {
        path: 'add-category',
        component: AddCategoryPageComponent
      },
      {
        path: 'add-subcategory',
        component: AddSubcategoryPageComponent
      },
      {
        path: 'edit-subcategory/:id',
        component: UpdateSubcategoryPageComponent
      },
      {
        path: 'images/:id',
        component: AddImagesPageComponent
      },
      // {
      //   path: 'view-marcas',
      // },
      {
        path: 'add-marca',
        component: AddMarcaPageComponent
      },
      {
        path: 'edit-marca/:id',
        component: UpdateMarcaPageComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
