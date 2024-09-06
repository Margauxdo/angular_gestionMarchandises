import {Component, OnInit} from '@angular/core';
import {BasketService} from "../../utils/services/basket.service";
import {WheelBarrow} from "../../domain/wheelBarrow";
import {BasketRowComponent} from "../../components/basket-row/basket-row.component";
import {BasketRow} from "../../domain/basketRow";

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

}
