import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
    products:product [] =[
    {title:"T-shirt",imageUrl:"../../assets/images/1.jpg",price:6000,onSale:true},
    {title:"phone",imageUrl:"../../assets/images/2.jpg",price:222,onSale:true},
    {title:"shirt",imageUrl:"../../assets/images/3.jpg",price:111,onSale:true},
    {title:"toshiba tv",imageUrl:"../../assets/images/5.jpg",price:111,onSale:true},
   ]
}

interface product{
      title:string,
      imageUrl:string,
      price:number,
      onSale:boolean
}
