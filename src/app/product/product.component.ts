import { Component, Input } from '@angular/core';
import { Meal } from '../meal';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
 @Input() meal:Meal = {} as Meal
}
