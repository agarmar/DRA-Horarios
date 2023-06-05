/* app-routing.module.ts */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutinaComponent } from './components/grupo/rutina.component';
import { SemanaComponent } from './components/semana/semana.component';
import { RutinasComponent } from './components/editarHorarios/rutinas.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CalendarioComponent } from './components/aula/calendario.component';
import { ProfesoresComponent } from './components/profesor/calendario.component';
import { GruposComponent } from './components/gruposSinImplementar/grupos.component';
import { SesionComponent } from './components/sesion-detail/sesion-detail.component';
import { AsignaturaComponent } from './components/asig-detail/asig-detail.component';
import { ProfesorComponent } from './components/prof-detail/prof-detail.component';
import { DiasSemanaComponent } from './components/dias-semana/dias-semana.component';
import { SubheaderRutinaComponent } from './components/subheader-horario/subheader-rutina.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'aula', component: CalendarioComponent },
  { path: 'profesor', component: ProfesoresComponent },
  { path: 'grupos', component: GruposComponent },
  { path: 'dias-semana', component: DiasSemanaComponent },
  { path: 'grupo', component: RutinaComponent,
    children: [
      { path: '', redirectTo: 'semana', pathMatch: 'full' },
      { path: 'semana', component: SemanaComponent,
        children: [
          { path: 'sesion/:id', component: SesionComponent },
          { path: 'asig/:id', component: AsignaturaComponent },
          { path: 'prof/:id', component: ProfesorComponent },
          { path: 'dias-semana', component: DiasSemanaComponent },
        ]
      },
      { path: 'edicion', component: RutinasComponent, },
      { path: 'subheader', component: SubheaderRutinaComponent, }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

