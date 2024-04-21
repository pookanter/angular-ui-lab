import { Component } from "@angular/core";
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { IProducts } from "../../../../libs/types";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  title = "angular-ui-lab";
  products: IProducts.Product[] = [
    {
      id: 1,
      name: "Red Running Shoes",
      price: 3290,
      quantity: 10,
      image: "/assets/shoes/red-sneaker.jpg",
      rating: 4,
    },
    {
      id: 2,
      name: "Indy Yeezy Shoes",
      price: 5420,
      quantity: 15,
      image: "/assets/shoes/yeezy-sneaker.jpg",
      rating: 3,
    },
    {
      id: 3,
      name: "Green Sport Shoes",
      price: 2990,
      quantity: 0,
      image: "/assets/shoes/green-sneaker.jpg",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Pink Walking Shoes",
      price: 1990,
      quantity: 12,
      image: "/assets/shoes/pink-sneaker.jpg",
      rating: 3.5,
    },
  ];
}
