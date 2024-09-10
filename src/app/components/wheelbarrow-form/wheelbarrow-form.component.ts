import {Component} from '@angular/core';
import {WheelbarrowService} from "../../utils/services/wheelbarrow.service";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {WheelBarrow} from "../../domain/wheelBarrow";

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

  wheelbarrowForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    wheelNumber: new FormControl(1, [Validators.required]),
    price: new FormControl(0, [Validators.required]),
    stock: new FormControl(1, [Validators.required]),
  });

  constructor(private wheelbarrowService: WheelbarrowService) {
  }

  saveWheelBarrow() {
    if (this.wheelbarrowForm.valid) {
      console.log(this.wheelbarrowForm.value);
      this.wheelbarrowService.saveWheelBarrow(this.wheelbarrowForm.value as WheelBarrow);
      this.wheelbarrowForm.reset();
    }
  }
}
