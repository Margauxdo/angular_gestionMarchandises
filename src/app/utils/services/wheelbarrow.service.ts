import { Injectable } from '@angular/core';
import {WheelBarrow} from "../../domain/wheelBarrow";

@Injectable({
  providedIn: 'root'
})
export class WheelbarrowService {

  catalogue: WheelBarrow[] = [];
  wheelBarrow1: WheelBarrow = {
    id: 1,
    name: 'La Gustave 1',
    description: 'Desc Wheel Barrow 1',
    price: 34.99,
    quantity: 5,
    wheelNumber: 1,
  };
  wheelBarrow2: WheelBarrow = {
    id: 2,
    name: 'La Gustave 2',
    description: 'Desc Wheel Barrow 2',
    price: 59.99,
    quantity: 11,
    wheelNumber: 3,
  };
  wheelBarrow3: WheelBarrow = {
    id: 3,
    name: 'La Gustave 3 (dite la Gus)',
    description: 'Desc Wheel Barrow 3',
    price: 149.99,
    quantity: 4,
    wheelNumber: 3,
  };

  constructor() {
    this.catalogue.push(this.wheelBarrow1, this.wheelBarrow2, this.wheelBarrow3);
  }
}
