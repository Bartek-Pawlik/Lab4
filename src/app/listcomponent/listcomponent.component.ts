import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-listcomponent',
  imports: [NgFor],
  templateUrl: './listcomponent.component.html',
  styleUrl: './listcomponent.component.css'
})
export class ListcomponentComponent {

  presidents: any[] =
  [{name: "Higgins", term:"2011-"},
  {name: "McAleese", term:"1997-2011"},
  {name: "Robinson", term:"1990-1997"},
  {name: "Hillery", term:"1976-1990"},
  {name: "O Dalaigh", term:"1974-1976"},
  {name: "Joe", term:"1999-2003"},
  {name: "Bartek", term:"2003-2007"}];
}
