/* asig-detail.component.ts */
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { InMemoryDataService } from '../../services/in-memory-data.service';
import { RutinaService } from '../../services/horario.service';
import { Asignatura } from '../../models/horario';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-asig-detail',
  templateUrl: './asig-detail.component.html',
  styleUrls: ['./asig-detail.component.scss']
})

@Input( "asignatura.observaciones")

export class AsignaturaComponent implements OnInit {

 asignaturas: Asignatura[] | undefined;
 asignatura: Asignatura | undefined;
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
    this.getAsignaturas();
    this.abrev = this.route.snapshot.paramMap.get('id');
  }

  getAsignaturas(): void {
    this.rutinaService.getAsignaturas()
      .subscribe(asignaturas => this.asignaturas = asignaturas);
  }
  editar(): void {
    this.esEditar = true;
  }

  save(index: number, observaciones: string): void {
    this.asignaturas![index].observaciones = observaciones;
    this.rutinaService.updateAsignatura(this.asignaturas![index])
      .subscribe();
  }


  getAsignatura(): void {
    this.rutinaService.getAsignatura(this.abrev)
      .subscribe(asignatura => this.asignatura = asignatura);
  }

}
