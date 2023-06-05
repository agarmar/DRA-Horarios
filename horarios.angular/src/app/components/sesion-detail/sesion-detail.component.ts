/* sesion-detail.component.ts */
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { InMemoryDataService } from '../../services/in-memory-data.service';
import { RutinaService } from '../../services/horario.service';
import { Horario, _Sesion, Semana, Dia, Sesion, Donde, Tramo } from '../../models/horario';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-sesion-detail',
  templateUrl: './sesion-detail.component.html',
  styleUrls: ['./sesion-detail.component.scss'] //'../dia-detail/dia-detail.component.scss',
})
export class SesionComponent implements OnInit {

  @Input()
  _sesiones: _Sesion[] | undefined;
  _sesion: _Sesion | undefined;
   //semanas: Semana[] | undefined;
 // horario: Horario | undefined;
 // semana: Semana | undefined;
 // sesion: Sesion | undefined;
 // donde: Donde | undefined;

  tramos: Tramo[] | undefined;
  tramo: Tramo | undefined;
  dia: any;
  _dia: any;
  hora: any;
  esEditar : boolean = false;
  observaciones: any;

  constructor(
    private route: ActivatedRoute,
    private rutinaService: RutinaService,
    private location: Location,
    private inMemoryDataService: InMemoryDataService,
  ) { }

  ngOnInit(): void {
    this.getSesiones();
    //this.getSesion();
   // this.getSemana();
    //this.getHorarios();
   // this.getHorario();
    //this.horario!.sesiones[0].sesiones[0].observaciones = "Lunes 1";
    //this.semana = this.inMemoryDataService.createDb().semana;
    //this.getTramos();
    //const obser = "observaciones 0 - 0";
    //this.semana!.dias[0].sesiones[0].donde.observaciones = obser;

    const id = this.route.snapshot.paramMap.get('id');
    const n = id!.indexOf("-");
    this.dia = id!.substring(0,n);  //lunes,martes,
    this.hora = id!.substring(n+1);  //1,2,
    if(this.dia == 'lunes') this._dia = 0;
    if(this.dia == 'martes') this._dia = 1;
    if(this.dia == 'miercoles') this._dia = 2;
    if(this.dia == 'jueves') this._dia = 3;
    if(this.dia == 'viernes') this._dia = 4;


    this.tramos = this.inMemoryDataService.createDb().tramos;
    this.tramo = this.tramos![1];
    this.tramos!.forEach((tramo, index) =>{
      if (tramo.hora == this.hora)
      this.tramo = tramo;
    });

   // if(this.dia == 'lunes') {
  //    this._dia = 0;
 //     this._sesion = this._sesiones![this.hora-1];//this.sesion = this.semana!.dias[0].sesiones[this.hora-1];
      //this.donde = this.semana!.dias[0].sesiones[this.hora-1].donde;
 //   }
 //   if(this.dia == 'martes') this._sesiones![this.hora+5];// this.sesion = this.semana!.dias[1].sesiones[this.hora-1];
    //if(this.dia == 'martes') this.donde = this.semana!.dias[1].sesiones[this.hora-1].donde;
    //if(this.dia == 'miercoles') this.donde = this.semana!.dias[2].sesiones[this.hora-1].donde;
    //if(this.dia == 'jueves') this.donde = this.semana!.dias[3].sesiones[this.hora-1].donde;
    //if(this.dia == 'viernes') this.donde = this.semana!.dias[4].sesiones[this.hora-1].donde;

  }

  getSemana(): void {
   // this.rutinaService.getSemana()
   //   .subscribe(semana => this.semana = semana);
    //  this.semana!.dias[0].sesiones[0].donde.observaciones ="leche"
  }
  getSesiones(): void {
    this.rutinaService.getSesiones()
      .subscribe(_sesiones => this._sesiones = _sesiones);
    //  this.semana!.dias[0].sesiones[0].donde.observaciones ="leche"
  }
  editar(): void {
    this.esEditar = true;
  }
  edit(observaciones: string, dia:string, hora:number): void { // L, 1
  }

  getSesion(): void {
  //  const id = this.route.snapshot.paramMap.get('id');
  //  const n = id!.indexOf("-");
 //   this.dia = id!.substring(0,n);
 //   this.hora = id!.substring(n+1);
  }
  //saveObserv(id: number, j: number, observaciones: string): void {
  saveObserv(index: number, sesion: _Sesion, observaciones: string): void {
    //const sesion: _Sesion = this.horario!.jornadas[i].sesiones[j];
    //this.rutinaService.updateSesion(this._sesiones![id])
    //sesion.observaciones = "prueba";
    this._sesiones![0].observaciones = "prueba";
    this.rutinaService.updateSesion(this._sesiones![index])
      .subscribe();
  }

  getHorario(): void {
    //this.rutinaService.getHorario()
    //  .subscribe(horario => {this.horario = horario; this.observaciones = "Lunes 1"; this.horario!.jornadas[0].sesiones[0].observaciones = "Lunes 1";});

  }
  getHorarios(): void {
   // this.rutinaService.getHorarios()
   //   .subscribe(semanas => {this.semanas = semanas; this.semana = semanas[0];});
      //this.semana = this.semanas![0];
  }

  getTramos(): void {
    this.rutinaService.getTramos()
      .subscribe(tramos => this.tramos = tramos);
  }

  save(i: number, j: number, observaciones: string): void {
    //this.observaciones = observaciones;
   // this.rutinaService.updateHorario(this.horario!)
   //   .subscribe();

    //this.horario!.sesiones[i].sesiones[j].observaciones = "Lunes 1";
    //this.profesores![index].observaciones = observaciones;
    //this.semana!.dias[i].sesiones[j].donde.observaciones = observaciones;
    // this.rutinaService.updateSemana(this.semana!)
    //  .subscribe();
   // this.rutinaService.updateProfesor(this.profesores![index])
    //  .subscribe();
  }
  saveObservaciones(i: number, j: number, observaciones: string): void {
    //this.observaciones = observaciones;
   // const sesion: _Sesion = this.horario!.jornadas[i].sesiones[j];
   // this.rutinaService.updateObservaciones(i,j,observaciones, sesion)
   //   .subscribe();

   // this.observaciones = observaciones;
  }


}
