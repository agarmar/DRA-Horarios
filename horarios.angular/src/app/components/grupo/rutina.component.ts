/*app.component.ts*/
import { Component } from '@angular/core';
import { SubheaderRutinaService } from '../../services/subheader-rutina.service';


@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.component.html',
  styleUrls: ['./rutina.component.scss'],

})
export class RutinaComponent {
  title = 'HORARIOS';
  constructor(private SubheaderRutinaService: SubheaderRutinaService) { }

  verSemana() {
    this.SubheaderRutinaService.verSemana.next();
  }

}
