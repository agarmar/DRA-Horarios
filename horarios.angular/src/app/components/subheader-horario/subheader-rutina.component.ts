import { Component } from '@angular/core';
//import { Semana, Rutina, Ejercicio, Dia } from '../../models/rutina';
import { RutinaService } from '../../services/horario.service';
import { MessageService } from '../../services/message.service';
import { SubheaderRutinaService } from '../../services/subheader-rutina.service';
import { InMemoryDataService } from 'src/app/services/in-memory-data.service';

import { Semana, Sesion, Dia } from '../../models/horario';

@Component({
  selector: 'app-subheader-rutina',
  templateUrl: './subheader-rutina.component.html',
  styleUrls: ['./subheader-rutina.component.scss']
})
export class SubheaderRutinaComponent {
  semana!: Semana;
  dias!: Dia[];
  //ejercicios!: Ejercicio[];
  semanaCompleta: boolean = false;
  diaSeleccionado!: Dia;

  sesiones!: Sesion[];

  //tramos: Array<{de:String, a:String}> = [{de:'De 8:00', a:'a 9:00'}, {de:'De 9:00', a:'a 10:00'}, {de:'De 10:00', a:'a 11:00'},
  //      {de:'De 11:30', a:'a 12:30'}, {de:'De 12:30', a:'a 13:30'}, {de:'De 13:30', a:'a 14:30'}];


  constructor(private rutinaService: RutinaService, private messageService: MessageService, private subheaderRutinaService: SubheaderRutinaService, private inMemoryDataService: InMemoryDataService) { }

  ngOnInit(): void {
    this.getSemana();
    this.semana = this.inMemoryDataService.createDb().semana;
    this.dias = this.semana.dias;
    //this.ejercicios = this.dias.map(dia => dia.ejercicios).flat();
    this.sesiones = this.dias.map(dia => dia.sesiones).flat();
  }

  getSemana(): void {
    this.rutinaService.getSemana()
      .subscribe(semana => this.semana = semana);

  }

  seleccionarDia(dia: Dia) {
    this.subheaderRutinaService.dia = dia;
    this.subheaderRutinaService.seleccionarDia.next();
  }

  //delete(rutina: Rutina): void {  }
}



