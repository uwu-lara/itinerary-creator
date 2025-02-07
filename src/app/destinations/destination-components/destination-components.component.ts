import { Component, Type } from '@angular/core';
import { YalaComponent } from '../yala/yala.component';
import { WilpattuComponent } from '../wilpattu/wilpattu.component';
import { AnuradhapuraComponent } from '../anuradhapura/anuradhapura.component';

@Component({
  selector: 'app-destination-components',
  standalone: true,
  imports: [],
  templateUrl: './destination-components.component.html',
  styleUrl: './destination-components.component.scss'
})
export class DestinationComponentsComponent {

}
export const DestinationComponents: { [key: string]: Type<any> } = {
  Yala: YalaComponent,
  Wilpattu: WilpattuComponent,
  Anuradhapura: AnuradhapuraComponent,
}
