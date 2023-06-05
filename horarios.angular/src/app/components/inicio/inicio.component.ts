//import { Component } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit{
  @Input()
  //url: string = "https://www.mmlpqtpkasjdashdjahd.com";
  //url: string = "https://stackblitz.com/angular/lmgnrrorpnla?file=src%2Fapp%2Fheroes%2Fheroes.component.html";
  url: string = "https://stackblitz.com/angular/eaarvvdlplgp?file=src%2Fapp%2Fhero.service.ts";
  urlSafe!: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}

