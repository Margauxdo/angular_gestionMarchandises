import {Component, Input} from '@angular/core';
import {WheelBarrow} from "../../domain/wheelBarrow";
import {BasketService} from "../../utils/services/basket.service";
import {BasketRow} from "../../domain/basketRow";

@Component({
  selector: 'app-basket-row[basketRow]',
  standalone: true,
  imports: [],
  templateUrl: './basket-row.component.html',
  styleUrl: './basket-row.component.css'
})
export class BasketRowComponent {

  @Input() basketRow!: BasketRow;

  constructor(private basketService: BasketService) {
  }

  deleteWheelbarrowFromBasket() {
    this.basketService.basket.splice(this.basketService.basket.indexOf(this.basketRow), 1);
  }
}
