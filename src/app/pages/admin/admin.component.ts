import { Component } from '@angular/core';
import {WheelbarrowFormComponent} from "../../components/wheelbarrow-form/wheelbarrow-form.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    WheelbarrowFormComponent
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
