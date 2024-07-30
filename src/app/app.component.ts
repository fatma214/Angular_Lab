import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import NavbarComponent from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
NavbarComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,FooterComponent,HomeComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  // userName:string ="fatma";
  // haveCar:boolean =true;
  // userAge:number=24;
  // changeName(x:any){
  //   this.userName=x.target.value
  // }
  // changeAge(){
  //   this.userAge=Math.floor(Math.random()*100);
  // }
}
