/*app.component.ts*/
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: '<app-menu-principal [grupo]="grupo"></app-menu-principal>',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  public title = 'HORARIOS';
  public grupo = '1º-A';
  //localStorage.setItem(grupo, '1ºA')
}


