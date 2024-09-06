import { Injectable } from '@angular/core';
import {BasketRow} from "../../domain/basketRow";

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  basket: BasketRow[] = [];

  constructor() { }
}
