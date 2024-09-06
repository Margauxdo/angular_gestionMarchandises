import {Component, Input} from '@angular/core';
import {WheelBarrow} from "../../domain/wheelBarrow";
import {BasketService} from "../../utils/services/basket.service";
import {FormsModule} from "@angular/forms";

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
    // this.basketService.basket.push(this.wheelbarrow);
    this.basketService.basket.push({
      wheelbarrow: this.wheelbarrow,
      quantity: this._wheelbarrowQuantity
    });
    console.log(this.basketService.basket);

  }

  set wheelbarrowQuantity(value: number) {
    this._wheelbarrowQuantity = value;
    console.log(this._wheelbarrowQuantity);
  }

  protected readonly parseInt = parseInt;
}
