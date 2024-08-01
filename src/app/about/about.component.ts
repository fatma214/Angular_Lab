import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
@Input() name!:string;
@Output() addMessage :EventEmitter<string>=new EventEmitter()
sendMsg(){
  console.log("hellow from aobut");
  this.addMessage.emit("hellow i am comming from about ----------- ")
}
}
