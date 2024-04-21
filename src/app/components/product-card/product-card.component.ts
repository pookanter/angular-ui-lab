import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { IProducts } from "@libs";

interface Star {
  id: number;
  value: number;
}
@Component({
  selector: "app-product-card",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./product-card.component.html",
  styleUrl: "./product-card.component.scss",
})
export class ProductCardComponent implements OnInit {
  @Input() data: IProducts.Product = null;
  stars: Star[] = [
    { id: 1, value: 0.5 },
    { id: 2, value: 1 },
    { id: 3, value: 1.5 },
    { id: 4, value: 2 },
    { id: 5, value: 2.5 },
    { id: 6, value: 3 },
    { id: 7, value: 3.5 },
    { id: 8, value: 4 },
    { id: 9, value: 4.5 },
    { id: 10, value: 5 },
  ];

  ngOnInit(): void {
    // let value = 0.5;
    // for (let i = 0; i < this.data.rating; i++) {
    //   this.stars.push({
    //     id: i + 1,
    //     checked: i < this.data.rating,
    //   });
    // }
  }
}
