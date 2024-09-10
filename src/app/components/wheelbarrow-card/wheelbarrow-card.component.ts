import {Component, Input} from '@angular/core';
import {WheelBarrow} from "../../domain/wheelBarrow";
import {BasketService} from "../../utils/services/basket.service";
import {FormsModule} from "@angular/forms";
import {of} from "rxjs";
import {formatNumberAsArray} from "../../utils/helper";

@Component({
  selector: 'app-wheelbarrow-card[wheelbarrow]',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './wheelbarrow-card.component.html',
  styleUrl: './wheelbarrow-card.component.css'
})
export class WheelbarrowCardComponent {

  @Input() wheelbarrow!: WheelBarrow;
  private _wheelbarrowQuantity: number = 0;

  constructor(private basketService: BasketService) {
  }

  addWheelbarrowToBasket(): void {
    if (this._wheelbarrowQuantity) {
      const index = this.basketService.basket.findIndex(row => row.wheelbarrow === this.wheelbarrow);

      if (index) {
        this.basketService.basket.push({
          wheelbarrow: this.wheelbarrow,
          quantity: this._wheelbarrowQuantity
        });
      } else {
        this.basketService.basket[index].quantity += this._wheelbarrowQuantity;
      }

      this.wheelbarrow.stock -= this._wheelbarrowQuantity;
    }
  }

  set wheelbarrowQuantity(value: number) {
    this._wheelbarrowQuantity = value;
  }

  protected readonly parseInt = parseInt;
  protected readonly of = of;
  protected readonly formatNumberAsArray = formatNumberAsArray;
}
