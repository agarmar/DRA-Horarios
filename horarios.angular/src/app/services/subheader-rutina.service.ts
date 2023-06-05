import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Dia } from '../models/horario';

@Injectable({
  providedIn: 'root'
})
export class SubheaderRutinaService {

  public dia!: Dia;

  public verSemana = new Subject<void>();

  public seleccionarDia = new Subject<void>();

  constructor() { }
}
