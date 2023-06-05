/* hero.ts */

export interface Tramo {
  hora: number;
  de: string;
  a: string;
}

export interface Profesor {
  id: number;
  abrev: string;
  name: string;
  observaciones: string;
}

export interface Asignatura {
  id: number;
  abrev: string;
  name: string;
  foto: string;
  observaciones: string;
}

export interface Que {
  id: number;
  asignatura: string;
  profesor: string;
  foto: string;
}

export interface Donde {
  id: number;
  dia: string;
  hora: number;
  observaciones: string;
}

export interface Sesion {
  id: number;
  que: Que;
  donde: Donde;
}

export interface Dia {
  id: number;
  name: string;
  sesiones: Sesion[];
}
export interface Semana {
  id: number;
  curso: string;
  grupo: string;
  dias: Dia[];
}

export interface Grupo {
  id: number;
  abrev: string;
  curso: string;
  grupo: string;
}

export interface _Sesion {  //Como Asignatura
  id: number;
  dia: number;
  hora:number;
  observaciones: string;
}
export interface Jornada {
  id: number;
  name: string;
  sesiones: _Sesion[];
}
export interface Horario {
  id: number;
  name: string;
  jornadas: Jornada[];
  sesiones: Sesion[];
}
export interface Horarios {
  id: number;
  name: string;
  semana: Horario[];
}
