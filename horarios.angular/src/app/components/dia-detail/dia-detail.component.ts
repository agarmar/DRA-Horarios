/* poder-detail.component.ts */
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { InMemoryDataService } from '../../services/in-memory-data.service';
import { RutinaService } from '../../services/horario.service';
import { SubheaderRutinaService } from '../../services/subheader-rutina.service';

import { Horario, Semana, Sesion, Dia, Donde, Que} from '../../models/horario';

@Component({
  selector: 'app-dia-detail',
  templateUrl: './dia-detail.component.html',
  styleUrls: ['./dia-detail.component.scss']
})
export class DiaComponent implements OnInit {

  @Input()
  dia!: Dia;

  tramos: Array<{de:String, a:String}> = [{de:'De 8:00', a:'a 9:00'}, {de:'De 9:00', a:'a 10:00'}, {de:'De 10:00', a:'a 11:00'},
        {de:'De 11:30', a:'a 12:30'}, {de:'De 12:30', a:'a 13:30'}, {de:'De 13:30', a:'a 14:30'}];
  sesiones!: Sesion[];
  semana!: Semana;

  constructor(
    private rutinaService: RutinaService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getSemana();
  }
  getSemana(): void {
    this.rutinaService.getSemana()
      .subscribe(semana => this.semana = semana);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.rutinaService.updateSemana(this.semana)
      .subscribe(() => this.goBack());
  }

}
