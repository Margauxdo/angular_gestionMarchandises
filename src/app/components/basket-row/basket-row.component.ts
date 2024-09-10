import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BasketService} from "../../utils/services/basket.service";
import {BasketRow} from "../../domain/basketRow";
import {FormsModule} from "@angular/forms";
import {formatNumberAsArray} from "../../utils/helper";

@Component({
  selector: 'app-basket-row[basketRow]',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './basket-row.component.html',
  styleUrl: './basket-row.component.css'
})
export class BasketRowComponent {

  @Input() basketRow!: BasketRow;
  @Output() wheelbarrowToDelete = new EventEmitter<{id: number, quantity: number}>();

  constructor(private basketService: BasketService) {
  }

  deleteWheelbarrow() {
    this.wheelbarrowToDelete.emit({id: this.basketRow.wheelbarrow.id, quantity: this.basketRow.quantity});
  }

  set quantity(value: number) {
    this.basketRow.wheelbarrow.stock += this.basketRow.quantity - value;
    this.basketRow.quantity = value;
  }

  protected readonly parseInt = parseInt;
  protected readonly formatNumberAsArray = formatNumberAsArray;

  updateQuantity(quantity: number) {
    if (quantity > 0) {
      this.quantity = quantity;
    } else {
      this.basketRow.wheelbarrow.stock += this.basketRow.quantity;
      this.basketService.basket.splice(this.basketService.basket.indexOf(this.basketRow), 1);
    }
  }
}
