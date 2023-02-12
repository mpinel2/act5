import { Component } from '@angular/core';
import { Noticia } from './interfaces/noticia.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: string = "";
  url: string = "";
  textoNoticia: string = "";
  fechaPublicacion: string = "";

  arrNoticias: Noticia[] = [];

  guardarNoticia(): void {
    let noticia: Noticia ={
      titulo: this.titulo,
      url: this.url,
      textoNoticia: this.textoNoticia,
      fechaPublicacion: this.fechaPublicacion
    }

    this.arrNoticias.push(noticia);

    this.titulo =""
    this.url= ""
    this.textoNoticia= ""
    this.fechaPublicacion= ""


  }

}
