/* rutina.service.ts */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Horario, _Sesion, Semana, Dia, Asignatura, Profesor, Tramo } from '../models/horario';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RutinaService {
  private rutinasUrl = 'api/semana';
  private horariosUrl = 'api/semanas';
  private horarioUrl = 'api/horario';
  private sesionesUrl = 'api/sesiones';
  private asignaturasUrl = 'api/asignaturas';
  private profesoresUrl = 'api/profesores';
  private tramosUrl = 'api/tramos';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient, private messageService: MessageService) { }

   /** GETs from the server */
   getHorarios(): Observable<Semana[]> {
    return this.http.get<Semana[]>(this.horariosUrl)
      .pipe(
        tap(_ => this.log('carga horarios')),
        catchError(this.handleError<Semana[]>('getHorarios',[]))
      );
  }

   getSemana(): Observable<Semana> {
    return this.http.get<Semana>(this.rutinasUrl)
      .pipe(
        tap(_ => this.log('carga semana')),
        catchError(this.handleError<Semana>('getSemana'))
      );
  }

  getHorario(): Observable<Horario> {
    return this.http.get<Horario>(this.horarioUrl)
      .pipe(
        tap(_ => this.log('carga semana')),
        catchError(this.handleError<Horario>('getSemana'))
      );
  }

  getAsignaturas(): Observable<Asignatura[]> {
    return this.http.get<Asignatura[]>(this.asignaturasUrl)
      .pipe(
        tap(_ => this.log('carga asignaturas')),
        catchError(this.handleError<Asignatura[]>('getAsignaturas',[]))
      );
  }
  getProfesores(): Observable<Profesor[]> {
    return this.http.get<Profesor[]>(this.profesoresUrl)
      .pipe(
        tap(_ => this.log('carga profesores')),
        catchError(this.handleError<Profesor[]>('getProfesores',[]))
      );
  }
  getTramos(): Observable<Tramo[]> {
    return this.http.get<Tramo[]>(this.tramosUrl)
      .pipe(
        tap(_ => this.log('carga tramos')),
        catchError(this.handleError<Tramo[]>('getTramos',[]))
      );
  }

  getSesiones(): Observable<_Sesion[]> {
    return this.http.get<_Sesion[]>(this.sesionesUrl)
      .pipe(
        tap(_ => this.log('carga sesiones')),
        catchError(this.handleError<_Sesion[]>('getSesiones',[]))
      );
  }

  /* GETs  */
  getAsignatura(name: string): Observable<Asignatura> {
    const url = `${this.asignaturasUrl}/${name}`;
    return this.http.get<Asignatura>(url).pipe(
      tap(_ => this.log(`carga asignatura name=${name}`)),
    catchError(this.handleError<Asignatura>(`getAsignatura name=${name}`))
    );
  }

  getDia(): Observable<Dia> {
    return this.http.get<Dia>(this.rutinasUrl)
      .pipe(
        tap(_ => this.log('carga dia')),
        catchError(this.handleError<Dia>('getDia'))
      );
  }

   /** PUT: update on the server */
   updateAsignatura(asignatura: Asignatura): Observable<any> {
    return this.http.put(this.asignaturasUrl, asignatura, this.httpOptions).pipe(
      tap(_ => this.log(`actualiza asignatura abrev=${asignatura.abrev}`)),
      catchError(this.handleError<any>('updateAsignatura'))
    );
  }
  updateProfesor(profesor: Profesor): Observable<any> {
    return this.http.put(this.profesoresUrl, profesor, this.httpOptions).pipe(
      tap(_ => this.log(`actualiza profesor id=${profesor.abrev}`)),
      catchError(this.handleError<any>('updateProfesor'))
    );
  }
  updateTramo(tramo: Tramo): Observable<any> {
    return this.http.put(this.tramosUrl, tramo, this.httpOptions).pipe(
      tap(_ => this.log(`actualiza tramo id=${tramo.hora}`)),
      catchError(this.handleError<any>('updateTramo'))
    );
  }
  updateSesion(sesion: _Sesion): Observable<any> {
    return this.http.put(this.sesionesUrl, sesion, this.httpOptions).pipe(
      tap(_ => this.log(`actualiza tramo id=${sesion.id}`)),
      catchError(this.handleError<any>('updateSesion'))
    );
  }
  updateSemana(semana: Semana): Observable<any> {
    //return this.http.put(this.rutinasUrl, semana, this.httpOptions).pipe(
    return this.http.put('api/semana/', semana, this.httpOptions).pipe(
      tap(_ => this.log(`actualiza semana id=${semana.grupo}`)),
      catchError(this.handleError<any>('updateSemana'))
    );
  }

  updateHorario(horario: Horario): Observable<any> {
    return this.http.put(this.horarioUrl, horario, this.httpOptions).pipe(
      tap(_ => this.log(`actualiza horario id=${horario.id}`)),
      catchError(this.handleError<any>('updateHorario'))
    );
  }

  updateObservaciones(i: number, j: number, obser: String, sesion: _Sesion): Observable<any> {
    const url = `${this.horariosUrl}/${sesion.id}`;
    return this.http.put('api/horarios/sesiones/1/sesiones', sesion, this.httpOptions).pipe(
      tap(_ => this.log(`actualiza horario id=${sesion.id}`)),
      catchError(this.handleError<any>('updateHorario'))
    );
  }

  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a RutinaService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`RutinaService: ${message}`);
  }

}
