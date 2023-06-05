/* grupos.component.ts */

import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RutinaService } from '../../services/horario.service';
import { MessageService } from '../../services/message.service';
import { SubheaderRutinaService } from '../../services/subheader-rutina.service';
import { InMemoryDataService } from 'src/app/services/in-memory-data.service';
import { Horario, Sesion, Donde, Que, Asignatura, Profesor, Grupo } from '../../models/horario';
import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})



@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.scss']
})
export class GruposComponent {

  asignaturas!: Asignatura[];
  grupos!: Grupo[];
  selectedValue: string="";
  selectedAsig: string="";

  grupo: string = '1ºA'

  constructor(
    private rutinaService: RutinaService,
    private messageService: MessageService,
    private router: Router,
    private SubheaderRutinaService: SubheaderRutinaService,
    private inMemoryDataService: InMemoryDataService) {
    this.SubheaderRutinaService.seleccionarDia.subscribe(() => {
      //this.diaSeleccionado = this.SubheaderRutinaService.dia;
      //this.ocultarSemana();
    });
    this.SubheaderRutinaService.verSemana.subscribe(() => {
      //this.mostrarGrupo();//this.mostrarSemana();
    });
  }

  ngOnInit(): void {

    const _grupos = [{id: 11, abrev:'1º-A', curso:'1º', grupo:'A'},
    {id: 12, abrev:'1º-B', curso:'1º', grupo:'B'},
    {id: 21, abrev:'2º-A', curso:'2º', grupo:'A'},
    {id: 22, abrev:'2º-A', curso:'2º', grupo:'B'},
    {id: 31, abrev:'3º-A', curso:'3º', grupo:'A'},
    {id: 32, abrev:'3º-A', curso:'3º', grupo:'B'},
    {id: 41, abrev:'4º-A', curso:'4º', grupo:'A'},
    {id: 42, abrev:'4º-B', curso:'4º', grupo:'B'}]

    this.getGrupos();
    this.grupos = _grupos;
  }

  getGrupos(): void {
//    this.rutinaService.getSemana()
//      .subscribe(semana => this.semana = semana);
  }

  calcular(abrev: string): void {
    //this.semanaCompleta = false;
  }


  save(): void {
 //   this.rutinaService.updateSemana(this.semana)
 //     .subscribe();
  }

  Grupo(): string {
    return this.grupo;
  }
  //getSemana(): Observable<Semana> {
  //  return this.http.get<Semana>(this.rutinasUrl)
  //    .pipe(
  //      tap(_ => this.log('carga semana')),
  //      catchError(this.handleError<Semana>('getSemana'))
  //    );
  //}

}
