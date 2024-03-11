import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularfirst';
  pageTitle:String="Angular Data Binding Practice";
  a:number=2;
  b:number=2;
  sum: number = this.a + this.b;
  imageUrl:string="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj";
  disable=false;
  message:string="Button is Clicked"
  username:string="";
  isError: boolean = true;
  
  toggleChange(){
    this.disable = !this.disable;
  }
  handleButtonClick(message:string){
    console.log(message);
  }
}
