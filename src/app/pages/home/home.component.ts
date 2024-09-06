import {Component, OnInit} from '@angular/core';
import {WheelBarrow} from "../../domain/wheelBarrow";
import {WheelbarrowService} from "../../utils/services/wheelbarrow.service";
import {WheelbarrowCardComponent} from "../../components/wheelbarrow-card/wheelbarrow-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    WheelbarrowCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  catalogue: WheelBarrow[] = [];

  constructor(private wheelBarrowService: WheelbarrowService) {
  }

  ngOnInit(): void {
    this.catalogue = this.wheelBarrowService.catalogue;
    console.log(this.catalogue);
  }
}
