import { Component } from '@angular/core';
import {WheelbarrowService} from "../../utils/services/wheelbarrow.service";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-wheelbarrow-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './wheelbarrow-form.component.html',
  styleUrl: './wheelbarrow-form.component.css'
})
export class WheelbarrowFormComponent {
  wheelbarrowForm: any;

  constructor(private wheelbarrowService: WheelbarrowService) {
  }
}
