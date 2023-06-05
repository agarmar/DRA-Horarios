/*in-memory-data.service.ts */
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    const que11 = { id: 11, asignatura: 'Mat', profesor: 'MRon', foto: 'matematicas.png' };
    const que12 = { id: 12, asignatura: 'Len', profesor: 'ARom', foto: 'lengua.png' };
    const que13 = { id: 13, asignatura: 'Ing', profesor: 'ACri', foto: 'ingles.png' };
    const que14 = { id: 14, asignatura: 'CSO', profesor: 'MSes', foto: 'sociales.png' };
    const que15 = { id: 15, asignatura: 'ByG', profesor: 'PFlo', foto: 'biologia.png' };
    const que16 = { id: 16, asignatura: 'EF',  profesor: 'DDio', foto: 'edFisica.png' };
    const que17 = { id: 17, asignatura: 'Mus', profesor: 'EPer', foto: 'musica.png' };
    const que18 = { id: 18, asignatura: 'Dib', profesor: 'CCan', foto: 'dibujo.png' };
    const que19 = { id: 19, asignatura: 'Rel', profesor: 'AAli', foto: 'religion.png' };
    const que10 = { id: 10, asignatura: 'Tec', profesor: 'GMañ', foto: 'tecnologia.png' };

    const sesion11 = { id: 11, que: que15, donde: { id: 11, dia: 'L', hora: 1, observaciones:'' } };
    const sesion12 = { id: 12, que: que19, donde: { id: 12, dia: 'L', hora: 2, observaciones:'' } };
    const sesion13 = { id: 13, que: que16, donde: { id: 13, dia: 'L', hora: 3, observaciones:'' } };
    const sesion14 = { id: 14, que: que10, donde: { id: 14, dia: 'L', hora: 4, observaciones:'' } };
    const sesion15 = { id: 15, que: que14, donde: { id: 15, dia: 'L', hora: 5, observaciones:'' } };
    const sesion16 = { id: 16, que: que13, donde: { id: 16, dia: 'L', hora: 6, observaciones:'' } };

    const sesion21 = { id: 21, que: que12, donde: { id: 21, dia: 'M', hora: 1, observaciones:'' } };
    const sesion22 = { id: 22, que: que11, donde: { id: 22, dia: 'M', hora: 2, observaciones:'' } };
    const sesion23 = { id: 23, que: que18, donde: { id: 23, dia: 'M', hora: 3, observaciones:'' } };
    const sesion24 = { id: 24, que: que17, donde: { id: 24, dia: 'M', hora: 4, observaciones:'' } };
    const sesion25 = { id: 25, que: que14, donde: { id: 25, dia: 'M', hora: 5, observaciones:'' } };
    const sesion26 = { id: 26, que: que13, donde: { id: 26, dia: 'M', hora: 6, observaciones:'' } };

    const sesion31 = { id: 31, que: que14, donde: { id: 31, dia: 'X', hora: 1, observaciones:'' } };
    const sesion32 = { id: 32, que: que12, donde: { id: 32, dia: 'X', hora: 2, observaciones:'' } };
    const sesion33 = { id: 33, que: que16, donde: { id: 33, dia: 'X', hora: 3, observaciones:'' } };
    const sesion34 = { id: 34, que: que19, donde: { id: 34, dia: 'X', hora: 4, observaciones:'' } };
    const sesion35 = { id: 35, que: que11, donde: { id: 35, dia: 'X', hora: 5, observaciones:'' } };
    const sesion36 = { id: 36, que: que10, donde: { id: 36, dia: 'X', hora: 6, observaciones:'' } };

    const sesion41 = { id: 41, que: que12, donde: { id: 41, dia: 'J', hora: 1, observaciones:'' } };
    const sesion42 = { id: 42, que: que15, donde: { id: 42, dia: 'J', hora: 2, observaciones:'' } };
    const sesion43 = { id: 43, que: que11, donde: { id: 43, dia: 'J', hora: 3, observaciones:'' } };
    const sesion44 = { id: 44, que: que13, donde: { id: 44, dia: 'J', hora: 4, observaciones:'' } };
    const sesion45 = { id: 45, que: que10, donde: { id: 45, dia: 'J', hora: 5, observaciones:'' } };
    const sesion46 = { id: 46, que: que18, donde: { id: 46, dia: 'J', hora: 6, observaciones:'' } };

    const sesion51 = { id: 51, que: que11, donde: { id: 51, dia: 'V', hora: 1, observaciones:'' } };
    const sesion52 = { id: 52, que: que10, donde: { id: 52, dia: 'V', hora: 2, observaciones:'' } };
    const sesion53 = { id: 53, que: que12, donde: { id: 53, dia: 'V', hora: 3, observaciones:'' } };
    const sesion54 = { id: 54, que: que15, donde: { id: 54, dia: 'V', hora: 4, observaciones:'' } };
    const sesion55 = { id: 55, que: que14, donde: { id: 55, dia: 'V', hora: 5, observaciones:'' } };
    const sesion56 = { id: 56, que: que13, donde: { id: 56, dia: 'V', hora: 6, observaciones:'' } };

    const lunes = { id: 1, name: 'lunes', sesiones: [sesion11, sesion12, sesion13, sesion14, sesion15, sesion16] };
    const martes = { id: 2, name: 'martes', sesiones: [sesion21, sesion22, sesion23, sesion24, sesion25, sesion26] };
    const miercoles = { id: 3, name: 'miercoles', sesiones: [sesion31, sesion32, sesion33, sesion34, sesion35, sesion36] };
    const jueves = { id: 4, name: 'jueves', sesiones: [sesion41, sesion42, sesion43, sesion44, sesion45, sesion46] };
    const viernes = { id: 5, name: 'viernes', sesiones: [sesion51, sesion52, sesion53, sesion54, sesion55, sesion56] };

    const semana = { id: 11, curso: '1º', grupo: 'A', dias: [lunes, martes, miercoles, jueves, viernes] };
    const semanas =[{id:1, semana: semana}];

    const tramos = [{hora: 1, de:'De 8:00', a:'a 9:00'}, {hora: 2, de:'De 9:00', a:'a 10:00'}, {hora: 3, de:'De 10:00', a:'a 11:00'},
       {hora: 4, de:'De 11:30', a:'a 12:30'}, {hora: 5, de:'De 12:30', a:'a 13:30'}, {hora: 6, de:'De 13:30', a:'a 14:30'}];

    const dias = [{dia:'L', name:'lunes'}, {dia:'M', name:'martes'}, {dia:'X', name:'miercoles'}, {dia:'J', name:'jueves'}, {dia:'V', name:'viernes'}];

    const asignaturas = [{id: 1, abrev:'Mat', name:'Matemáticas', foto:'matematicas.png', observaciones:''},{id: 2, abrev:'Len', name:'Lengua', foto:'lengua.png', observaciones:''},
      {id: 3, abrev:'Ing', name:'Inglés', foto:'ingles.png', observaciones:''},
       {id: 4, abrev:'CSO', name:'Ciencias Sociales', foto:'sociales.png', observaciones:''},{id: 5, abrev:'ByG', name:'Biología y Geología', foto:'biologia.png', observaciones:''},
       {id: 6, abrev:'EF', name:'Educación Física', foto:'edFisica.png', observaciones:''},
       {id: 7, abrev:'Mus', name:'Música', foto:'musica.png', observaciones:''},{id: 8, abrev:'Dib', name:'Dibujo', foto:'dibujo.png', observaciones:''},
       {id: 9, abrev:'Rel', name:'Religión', foto:'religion.png', observaciones:''},{id: 10, abrev:'Tec', name:'Tecnología', foto:'tecnologia.png', observaciones:''} ];

    const profesores = [{id: 1, abrev:'MRon', name:'Manolo Rondón', observaciones:''}, {id: 2, abrev:'ARom', name:'Antonia Romero', observaciones:''},
        {id: 3, abrev:'ACri', name:'Ainhoa Criado', observaciones:''},
        {id: 4, abrev:'MSes', name:'María Dolores Sesé', observaciones:''}, {id: 5, abrev:'PFlo', name:'Presen Flores', observaciones:''}, {id: 6, abrev:'DDio', name:'David de Dios', observaciones:''},
        {id: 7, abrev:'EPer', name:'Efi Perals', observaciones:''}, {id: 8, abrev:'CCan', name:'Carmen Cano', observaciones:''}, {id: 9, abrev:'AAli', name:'Antonio Alías', observaciones:''},
        {id: 10, abrev:'GMañ', name:'Gabriel Mañas', observaciones:''}];



    const asig11 = {id: 1, abrev:'Mat', name:'Matemáticas', foto:'matematicas.png', observaciones:''};
    const prof11 = {id: 1, abrev:'MRon', name:'Manolo Rondón', observaciones:''};

    const _sesion11 = { id: 11, name:'', asig: asig11, prof: prof11, dia: 0, hora: 0, observaciones:'' };
    const _sesion12 = { id: 12, name:'', asig: asig11, prof: prof11, dia: 0, hora: 1, observaciones:'' };
    const _sesion13 = { id: 13, name:'', asig: asig11, prof: prof11, dia: 0, hora: 2, observaciones:'' };
    const _sesion14 = { id: 14, name:'', asig: asig11, prof: prof11, dia: 0, hora: 3, observaciones:'' };
    const _sesion15 = { id: 15, name:'', asig: asig11, prof: prof11, dia: 0, hora: 4, observaciones:'' };
    const _sesion16 = { id: 16, name:'', asig: asig11, prof: prof11, dia: 0, hora: 5, observaciones:'' };

    const _sesion21 = { id: 21, name:'', asig: asig11, prof: prof11, dia: 1, hora: 0, observaciones:'' };
    const _sesion22 = { id: 22, name:'', asig: asig11, prof: prof11, dia: 1, hora: 1, observaciones:'' };
    const _sesion23 = { id: 23, name:'', asig: asig11, prof: prof11, dia: 1, hora: 2, observaciones:'' };
    const _sesion24 = { id: 24, name:'', asig: asig11, prof: prof11, dia: 1, hora: 3, observaciones:'' };
    const _sesion25 = { id: 25, name:'', asig: asig11, prof: prof11, dia: 1, hora: 4, observaciones:'' };
    const _sesion26 = { id: 26, name:'', asig: asig11, prof: prof11, dia: 1, hora: 5, observaciones:'' };

    const _sesion31 = { id: 31, name:'', asig: asig11, prof: prof11, dia: 2, hora: 0, observaciones:'' };
    const _sesion32 = { id: 32, name:'', asig: asig11, prof: prof11, dia: 2, hora: 1, observaciones:'' };
    const _sesion33 = { id: 33, name:'', asig: asig11, prof: prof11, dia: 2, hora: 2, observaciones:'' };
    const _sesion34 = { id: 34, name:'', asig: asig11, prof: prof11, dia: 2, hora: 3, observaciones:'' };
    const _sesion35 = { id: 35, name:'', asig: asig11, prof: prof11, dia: 2, hora: 4, observaciones:'' };
    const _sesion36 = { id: 36, name:'', asig: asig11, prof: prof11, dia: 2, hora: 5, observaciones:'' };

    const _sesion41 = { id: 31, name:'', asig: asig11, prof: prof11, dia: 3, hora: 0, observaciones:'' };
    const _sesion42 = { id: 32, name:'', asig: asig11, prof: prof11, dia: 3, hora: 1, observaciones:'' };
    const _sesion43 = { id: 33, name:'', asig: asig11, prof: prof11, dia: 3, hora: 2, observaciones:'' };
    const _sesion44 = { id: 34, name:'', asig: asig11, prof: prof11, dia: 3, hora: 3, observaciones:'' };
    const _sesion45 = { id: 35, name:'', asig: asig11, prof: prof11, dia: 3, hora: 4, observaciones:'' };
    const _sesion46 = { id: 36, name:'', asig: asig11, prof: prof11, dia: 3, hora: 5, observaciones:'' };

    const _sesion51 = { id: 31, name:'', asig: asig11, prof: prof11, dia: 4, hora: 0, observaciones:'' };
    const _sesion52 = { id: 32, name:'', asig: asig11, prof: prof11, dia: 4, hora: 1, observaciones:'' };
    const _sesion53 = { id: 33, name:'', asig: asig11, prof: prof11, dia: 4, hora: 2, observaciones:'' };
    const _sesion54 = { id: 34, name:'', asig: asig11, prof: prof11, dia: 4, hora: 3, observaciones:'' };
    const _sesion55 = { id: 35, name:'', asig: asig11, prof: prof11, dia: 4, hora: 4, observaciones:'' };
    const _sesion56 = { id: 36, name:'', asig: asig11, prof: prof11, dia: 4, hora: 5, observaciones:'' };

    const jornada1 = { id: 1, name:'', sesiones: [_sesion11, _sesion12, _sesion13, _sesion14, _sesion15] };
    const jornada2 = { id: 2, name:'', sesiones: [_sesion21, _sesion22, _sesion23, _sesion24, _sesion25] };
    const jornada3 = { id: 3, name:'', sesiones: [_sesion31, _sesion32, _sesion33, _sesion34, _sesion35] };
    const jornada4 = { id: 4, name:'', sesiones: [_sesion41, _sesion42, _sesion43, _sesion44, _sesion45] };
    const jornada5 = { id: 1, name:'', sesiones: [_sesion51, _sesion52, _sesion53, _sesion54, _sesion55] };

    const horario = { id: 1, name:'', jornadas: [jornada1, jornada2, jornada3, jornada4, jornada5] };
    const horarios = { id: 1, name:'', semana: [horario] };

    const sesiones = [_sesion11, _sesion12, _sesion13, _sesion14, _sesion15, _sesion16,
      _sesion21, _sesion22, _sesion23, _sesion24, _sesion25, _sesion26,
      _sesion31, _sesion32, _sesion33, _sesion34, _sesion35, _sesion36,
      _sesion41, _sesion42, _sesion43, _sesion44, _sesion45, _sesion46,
      _sesion51, _sesion52, _sesion53, _sesion54, _sesion55, _sesion56];

    return { sesiones, horarios, horario, semana, asignaturas, profesores, tramos};

  }


}

