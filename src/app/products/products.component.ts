import { Component } from '@angular/core';
import { Meal } from '../meal';
import { ProductComponent } from "../product/product.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  meals: Meal[] = [
    {
      "strMeal": "Laksa King Prawn Noodles",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/rvypwy1503069308.jpg",
      "idMeal": "52821"
    },
    {
      "strMeal": "Mediterranean Pasta Salad",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg",
      "idMeal": "52777"
    },
    {
      "strMeal": "Mee goreng mamak",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/xquakq1619787532.jpg",
      "idMeal": "53048"
    },
    {
      "strMeal": "Nasi lemak",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/wai9bw1619788844.jpg",
      "idMeal": "53051"
    },
    {
      "strMeal": "Portuguese fish stew (Caldeirada de peixe)",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/do7zps1614349775.jpg",
      "idMeal": "53045"
    },
    {
      "strMeal": "Recheado Masala Fish",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/uwxusv1487344500.jpg",
      "idMeal": "52809"
    },
    {
      "strMeal": "Salmon Avocado Salad",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/1549542994.jpg",
      "idMeal": "52960"
    },
    {
      "strMeal": "Salmon Prawn Risotto",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/xxrxux1503070723.jpg",
      "idMeal": "52823"
    },
    {
      "strMeal": "Saltfish and Ackee",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/vytypy1511883765.jpg",
      "idMeal": "52936"
    },
    {
      "strMeal": "Seafood fideuà",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/wqqvyq1511179730.jpg",
      "idMeal": "52836"
    },
    {
      "strMeal": "Shrimp Chow Fun",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/1529445434.jpg",
      "idMeal": "52953"
    },
    {
      "strMeal": "Sledz w Oleju (Polish Herrings)",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/7ttta31593350374.jpg",
      "idMeal": "53023"
    },
    {
      "strMeal": "Spring onion and prawn empanadas",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/1c5oso1614347493.jpg",
      "idMeal": "53040"
    },
    {
      "strMeal": "Sushi",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/g046bb1663960946.jpg",
      "idMeal": "53065"
    },
    {
      "strMeal": "Three Fish Pie",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/spswqs1511558697.jpg",
      "idMeal": "52882"
    },
    {
      "strMeal": "Tuna and Egg Briks",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/2dsltq1560461468.jpg",
      "idMeal": "52975"
    }
  ];
}
