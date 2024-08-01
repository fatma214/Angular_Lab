import { Component, Input } from '@angular/core';
import { Meal } from '../meal';

@Component({
  selector: 'app-meal-card',
  standalone: true,
  imports: [],
  templateUrl: './meal-card.component.html',
  styleUrl: './meal-card.component.css'
})
export class MealCardComponent {
@Input() meal:Meal ={} as Meal


}

