import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomeComponent,
  },
  {
    path: "products",
    loadComponent: () =>
      import("./pages/products/products.component").then((m) => m.ProductsComponent),
  },
];
