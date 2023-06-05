import { Component } from '@angular/core';
import { Semana} from '../../models/horario';
import { RutinaService } from '../../services/horario.service';
import { MessageService } from '../../services/message.service';
@Component({
  selector: 'app-dias-semana',
  templateUrl: './dias-semana.component.html',
  styleUrls: ['./dias-semana.component.scss']
})
export class DiasSemanaComponent {
  semana: Semana | undefined;

  constructor(private rutinaService: RutinaService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getSemana();
  }

  getSemana(): void {
    this.rutinaService.getSemana()
      .subscribe(semana => this.semana = semana);

  }

}
