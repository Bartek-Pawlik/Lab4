import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListcomponentComponent } from './listcomponent/listcomponent.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListcomponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data-binding-app';

  clicks : number = 0;
  dbl : string = "";
  show : boolean = true;

  //function to increment number of clicks
  incr()
  {
    this.clicks++;
  }
  //function to show and hide text
  dblClick()
  {
      this.show = !this.show;
  }
}
