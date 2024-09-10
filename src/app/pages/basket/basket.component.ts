import {Component, OnInit} from '@angular/core';
import {BasketService} from "../../utils/services/basket.service";
import {WheelBarrow} from "../../domain/wheelBarrow";
import {BasketRowComponent} from "../../components/basket-row/basket-row.component";
import {BasketRow} from "../../domain/basketRow";
import {WheelbarrowService} from "../../utils/services/wheelbarrow.service";

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [
    BasketRowComponent
  ],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent implements OnInit {

  basket: BasketRow[] = [];

  constructor(private basketService: BasketService) {
  }

  ngOnInit() {
    this.basket = this.basketService.basket;
  }

  deleteWheelbarrowFromBasket(event: {id: number, quantity: number}) {
    const index: number = this.basketService.basket.findIndex(row => row.wheelbarrow.id === event.id);
    this.basketService.basket[index].wheelbarrow.stock += event.quantity;
    this.basketService.basket.splice(index, 1);
  }
}
