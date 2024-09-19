import { Component } from '@angular/core';
import { VERSION } from '@angular/core';  // Importamos la versión de Angular

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  angularVersion = VERSION.full;  // Aquí almacenamos la versión de Angular
}
