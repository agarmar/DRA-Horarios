/* rutinas.component.ts */
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Semana, Dia } from '../../models/horario';
import { RutinaService } from '../../services/horario.service';
import { MessageService } from '../../services/message.service';
import { SubheaderRutinaService } from '../../services/subheader-rutina.service';
import { InMemoryDataService } from 'src/app/services/in-memory-data.service';
import { Horario, Sesion, Donde, Que, Asignatura, Profesor } from '../../models/horario';

@Component({
  selector: 'app-rutinas',
  templateUrl: './rutinas.component.html',
  styleUrls: ['./rutinas.component.scss'],
})

export class RutinasComponent {
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


  asignaturas!: Asignatura[];
  profesores!: Profesor[];
  selectedValue: string="";
  selectedAsig: string="";

  constructor(private rutinaService: RutinaService, private messageService: MessageService, private router: Router, private SubheaderRutinaService: SubheaderRutinaService, private inMemoryDataService: InMemoryDataService) {
    this.SubheaderRutinaService.seleccionarDia.subscribe(() => {   });
    this.SubheaderRutinaService.verSemana.subscribe(() => {  });
  }

  ngOnInit(): void {

    const asignaturas = [{abrev:'Mat', name:'Matemáticas', foto:'matematicas.png', observaciones:''}, {abrev:'Len', name:'Lengua', foto:'lengua.png', observaciones:''},
    {abrev:'Ing', name:'Inglés', foto:'ingles.png', observaciones:''},
       {abrev:'CSO', name:'Ciencias Sociales', foto:'sociales.png', observaciones:''},{abrev:'ByG', name:'Biología y Geología', foto:'biologia.png', observaciones:''},
       {abrev:'EF', name:'Educación Física', foto:'edFisica.png', observaciones:''},
       {abrev:'Mus', name:'Música', foto:'musica.png', observaciones:''},{abrev:'Dib', name:'Dibujo', foto:'dibujo.png', observaciones:''},
       {abrev:'Rel', name:'Religión', foto:'religion-png', observaciones:''},{abrev:'Tec', name:'Tecnología', foto:'tecnologia.png', observaciones:''} ];
    const profesores = [{abrev:'MRon', name:'Manolo Rondón', observaciones:''}, {abrev:'ARom', name:'Antonia Romero', observaciones:''},
        {abrev:'ACri', name:'Ainhoa Criado', observaciones:''},
        {abrev:'MSes', name:'María Dolores Sesé', observaciones:''}, {abrev:'PFlo', name:'Presen Flores', observaciones:''}, {abrev:'DDio', name:'David de Dios', observaciones:''},
        {abrev:'EPer', name:'Efi Perals', observaciones:''}, {abrev:'CCan', name:'Carmen Cano', observaciones:''}, {abrev:'AAli', name:'Antonio Alías', observaciones:''},
        {abrev:'GMañ', name:'Gabriel Mañas', observaciones:''}];

        this.asignaturas = this.inMemoryDataService.createDb().asignaturas; //asignaturas;
        this.profesores = this.inMemoryDataService.createDb().profesores; // profesores

    this.getSemana();
    this.dias = this.semana.dias;
    this.sesiones = this.horario.sesiones;
  }

  getSemana(): void {
    this.rutinaService.getSemana()
      .subscribe(semana => this.semana = semana);
  }

  borrar(_dia: number): void {
    this.semana.dias.forEach((dia, index) =>{
      if (index == _dia) {
        dia.sesiones.forEach((sesion, index)=> {
          sesion.donde.observaciones='';
          sesion.que.asignatura='';
          sesion.que.profesor='';
        });
      }
    });
    this.rutinaService.updateSemana(this.semana)
    .subscribe();
  }
  nada(_dia: number): void {
    this.semana!.dias.forEach((dia, index) =>{
        dia.sesiones.forEach((sesion, index)=> {
        const i = sesion.donde.observaciones='';
        });
    });
  }

  save(): void {
    this.rutinaService.updateSemana(this.semana)
      .subscribe();
  }




  calcular(abrev: string): void {
    //this.semana.dias.forEach((dia, index) =>{
    //  if (index == _dia) {
    //    dia.sesiones.forEach((sesion, index)=> {
    //      sesion.donde.observaciones='';
    //      sesion.que.asignatura='';
    //      sesion.que.profesor='';
    //    });
    //  }
   // });
  }

}

