/* semana.component.ts */
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { Semana, Dia } from '../../models/horario';
import { RutinaService } from '../../services/horario.service';
import { MessageService } from '../../services/message.service';
import { SubheaderRutinaService } from '../../services/subheader-rutina.service';
import { InMemoryDataService } from 'src/app/services/in-memory-data.service';
import { Horario, Sesion, Donde, Que } from '../../models/horario';

@Component({
  selector: 'app-semana',
  templateUrl: './semana.component.html',
  styleUrls: ['./semana.component.scss'],
})

export class SemanaComponent {
  semana!: Semana;
  dias!: Dia[];
  semanaCompleta: boolean = true;
  diaSeleccionado!: Dia;

  horario!: Horario;
  _dias: String[] = ['L', 'M', 'X', 'J', 'V'];
  _horas: number[] = [1, 2, 3, 4, 5, 6];
  tramos: Array<{de:String, a:String}> = [{de:'De 8:00', a:'a 9:00'}, {de:'De 9:00', a:'a 10:00'}, {de:'De 10:00', a:'a 11:00'},
        {de:'De 11:30', a:'a 12:30'}, {de:'De 12:30', a:'a 13:30'}, {de:'De 13:30', a:'a 14:30'}];
  tramoDe: String[] = ['De 8:00', 'De 9:00', 'De 10:00', 'De 11:30', 'De 12:30', 'De 13:30'];
  tramoA: String[] = ['a 9:00', 'a 10:00', 'a 11:00', 'a 12:30', 'a 13:30', 'De 14:30'];
  sesiones!: Sesion[];

  constructor(private rutinaService: RutinaService,
    private messageService: MessageService,
    private router: Router,
    private SubheaderRutinaService: SubheaderRutinaService,
    private inMemoryDataService: InMemoryDataService,
    private location: Location) {
    this.SubheaderRutinaService.seleccionarDia.subscribe(() => {
      this.diaSeleccionado = this.SubheaderRutinaService.dia;
      this.ocultarSemana();
    });
    this.SubheaderRutinaService.verSemana.subscribe(() => {
      this.mostrarSemana();
    });
  }

  ngOnInit(): void {
    this.getSemana();
    this.dias = this.semana.dias;
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

  ocultarSemana(): void { this.semanaCompleta = false; }

  mostrarSemana(): void { this.semanaCompleta = true; }

}
