import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-yala',
  standalone: true,
  imports: [],
  templateUrl: './yala.component.html',
  styleUrl: './yala.component.scss'
})
export class YalaComponent {
  @Input() destinationCount!: number;

  constructor() {
    console.log(this.destinationCount);
   }

  

}
