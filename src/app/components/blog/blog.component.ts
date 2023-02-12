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
  noticiaCargada: string = "";
  noticiaPrecargada: any = this.guardar

 

  guardar(): void {
    let noticia: Noticia = {
      title: this.title,
      url: this.url,
      textoNoticia: this.textoNoticia,
      fechaPublicacion: this.fechaPublicacion
    }

    console.log(this.noticiaPrecargada);


  

    this.arrNoticias.push(noticia);
 
 

    this.title = "";
    this.url = "";
    this.fechaPublicacion = "";
    this.textoNoticia ="";
  }

  




  /*todasNoticias: Noticia [] = [];

 constructor(){
  this.arrNoticias = new Array (
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


 
