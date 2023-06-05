/* hero-search.component.ts */
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Profesor } from '../../models/horario';
import { RutinaService } from '../../services/horario.service';

@Component({
  selector: 'app-rutina-search',
  templateUrl: './rutina-search.component.html',
  styleUrls: ['./rutina-search.component.scss']
})

export class RutinaSearchComponent implements OnInit {
  //rutinas$!: Observable<Rutina[]>;
  private searchTerms = new Subject<string>();
  constructor(private rutinaService: RutinaService) { }
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    //this.rutinas$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      //debounceTime(300),
      // ignore new term if same as previous term
      //distinctUntilChanged(),
      // switch to new search observable each time the term changes
     // switchMap((term: string) => this.rutinaService.searchRutinas(term)),
    //);
  }
}
