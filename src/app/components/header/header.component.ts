import { Component } from '@angular/core';
import {NavComponent} from "../nav/nav.component";
import {SearchComponent} from "../search/search.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NavComponent,
    SearchComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
