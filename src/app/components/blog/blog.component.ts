import { Component } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia.interface';



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  
  title: string = "";
  url: string = "";
  fechaPublicacion: string ="";
  textoNoticia: string ="";
  arrNoticias: Noticia[] = [];
  contactos: string = "";
  contador: number = 1;

  guardar(): void {
    let noticia: Noticia = {
      title: this.title,
      url: this.url,
      textoNoticia: this.textoNoticia,
      fechaPublicacion: this.fechaPublicacion
    }

    this.arrNoticias.push(noticia);
    console.log(this.arrNoticias)
    this.cargarDatos();
    this.contador++;

    this.title = "";
    this.url = ""
  }

  cargarDatos(): void {
    this.contactos = "";
    this.arrNoticias.forEach(noticia => {
      this.contactos += `<li> ${noticia.title} ${noticia.fechaPublicacion}</li>`
    });
  }




  /*todasNoticias: Noticia [] = [];

 constructor(){
  this.todasNoticias = new Array (
  )
 }
 
  titulo: string = "";
  url: string = "";
  textoNoticia: string = "";
  fechaPublicacion: string = "";
  noticia: string = "";

  arrNoticias: Noticia[] = [];

  guardarNoticia(): void {
    let noticia: Noticia ={
      titulo: this.titulo,
      url: this.url,
      textoNoticia: this.textoNoticia,
      fechaPublicacion: this.fechaPublicacion,
    }

    this.arrNoticias.push(noticia);
    this.cargarNoticias();

    this.titulo = "";
    this.url= "";
    this.textoNoticia= "";
    this.fechaPublicacion= "";
  }

    cargarNoticias() : void {
      this.arrNoticias.forEach(noticia => {
        this.noticia += `<article> ${noticia.titulo}</article>`
      });

    }*/


  } 


 
