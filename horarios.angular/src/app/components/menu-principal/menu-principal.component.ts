import { Component, Input, OnInit } from '@angular/core';
import { SubheaderRutinaService } from '../../services/subheader-rutina.service';
import { AppComponent } from '../../app.component';
import { GruposComponent } from '../gruposSinImplementar/grupos.component';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  template: 'grupo: {{grupo}}',
  styleUrls: ['./menu-principal.component.scss']
})
export class MenuPrincipalComponent implements OnInit {

  title = 'Horarios';
  grupo: any;
  profesor = 'MRon';
  aula = 'Taller Tec';

 // @Input() //grupo: string;

  constructor(
    private SubheaderRutinaService: SubheaderRutinaService,
    private GruposComponent: GruposComponent

    ) {
     // this.GruposComponent.Grupo(() => {
        //this.mostrarGrupo()//this.grupo;
     // });

      this.SubheaderRutinaService.verSemana.subscribe(() => {
        //this.mostrarSemana();
      });

   }

  verSemana() {
    this.SubheaderRutinaService.verSemana.next();
  }

  ngOnInit(): void {
    this.mostrarGrupo();
    //this.grupo = grupo;
  }

  mostrarGrupo(): void {
    //this.rutinaService.getSemana()
    //.subscribe(semana => this.semana = semana);
    this.grupo = this.GruposComponent.Grupo();
      //.subscribe(grupo => this.grupo = grupo)
      ;
    //this.grupo;
  }

}

