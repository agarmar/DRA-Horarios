/* app.module.ts */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { InMemoryDataService } from './services/in-memory-data.service';
import { AppComponent } from './app.component';
import { MessagesComponent } from './components/messages/messages.component';
import { RutinaSearchComponent } from './components/rutina-search/rutina-search.component';
import { RutinaComponent } from './components/grupo/rutina.component';
import { SemanaComponent } from './components/semana/semana.component';
import { RutinasComponent } from './components/editarHorarios/rutinas.component';
import { DiaComponent } from './components/dia-detail/dia-detail.component';
import { SesionComponent } from './components/sesion-detail/sesion-detail.component';
import { AsignaturaComponent } from './components/asig-detail/asig-detail.component';
import { ProfesorComponent } from './components/prof-detail/prof-detail.component';
import { DiasSemanaComponent } from './components/dias-semana/dias-semana.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CalendarioComponent } from './components/aula/calendario.component';
import { ProfesoresComponent } from './components/profesor/calendario.component';
import { GruposComponent } from './components/gruposSinImplementar/grupos.component';
import { SubheaderRutinaComponent } from './components/subheader-horario/subheader-rutina.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    RutinaSearchComponent,
    RutinaComponent,
    SemanaComponent,
    RutinasComponent,
    DiaComponent,
    SesionComponent,
    AsignaturaComponent,
    ProfesorComponent,
    DiasSemanaComponent,
    MenuPrincipalComponent,
    InicioComponent,
    CalendarioComponent,
    ProfesoresComponent,
    GruposComponent,
    SubheaderRutinaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'inicio', component: InicioComponent },
      { path: 'aula', component: CalendarioComponent },
      { path: 'profesor', component: ProfesoresComponent },
      { path: 'dias-semana', component: DiasSemanaComponent },
      { path: 'rutina', component: RutinaComponent, },
      { path: 'rutina/semana', component: SemanaComponent,
        children: [
          { path: 'sesion/:id', component: SesionComponent },
          { path: 'asig/:id', component: AsignaturaComponent },
          { path: 'prof/:id', component: ProfesorComponent },
          { path: 'dias-semana', component: DiasSemanaComponent },
        ]
      },
      { path: 'rutina/rutinas', component: RutinasComponent },
      { path: 'rutina/rutinas/:id', component: DiaComponent },
      { path: 'rutina/semana/dias-semana', component: DiasSemanaComponent },
      { path: 'rutina/semana/:id', component: DiaComponent },
    ]),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
