/* prof-detail.component.ts */
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { InMemoryDataService } from '../../services/in-memory-data.service';
import { RutinaService } from '../../services/horario.service';
import { Profesor } from '../../models/horario';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-prof-detail',
  templateUrl: './prof-detail.component.html',
  styleUrls: ['./prof-detail.component.scss']
})
export class ProfesorComponent implements OnInit {

  @Input()
  profesores: Profesor[] | undefined;
  profesor: Profesor | undefined;
  abrev: any;
  esEditar : boolean = false;
  index: any;

  constructor(
    private route: ActivatedRoute,
    private rutinaService: RutinaService,
    private location: Location,
    private inMemoryDataService: InMemoryDataService
  ) { }

  ngOnInit(): void {
    this.getProfesores();
    //this.profesores = this.inMemoryDataService.createDb().profesores;
    this.abrev = this.route.snapshot.paramMap.get('id');
    //this.profesor = this.profesores![1];
    //this.profesores.forEach((prof, index) =>{
   //   if (prof.abrev == this.abrev)
    //  this.profesor = prof;
   // });
  }
  getProfesores(): void {
    this.rutinaService.getProfesores()
      .subscribe(profesores => this.profesores = profesores);
  }

  editar(): void {
    this.esEditar = true;
  }

  save(index: number, observaciones: string): void {
   // this.profesores![index].observaciones = observaciones;
    this.rutinaService.updateProfesor(this.profesores![index])
      .subscribe();
  }




  edit(observaciones: string, profesor: Profesor): void {
  }


 // getProfesor(): void {
   // this.rutinaService.getProfesor(this.id)
   //   .subscribe(profesor => this.profesor = profesor);
 // }

}
