import { Component } from '@angular/core';
import { empty } from 'rxjs';
import { EMPTY_SUBSCRIPTION } from 'rxjs/internal/Subscription';
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
  noticiasPrecargadas: any[] = [];

  constructor(){
    this.noticiasPrecargadas = [
      { title: 'El Govern estudia una ampliación de El Prat con una pista nueva sobre el mar', 
      url: 'https://www.lavanguardia.com/files/image_948_465/files/fp/uploads/2023/02/10/63e6856908d5b.r_d.606-413-7822.jpeg', 
      fechaPublicacion: '11/02/2023',
      textoNoticia: 'El Govern tiene en su mano un nuevo proyecto de ampliación del aeropuerto de Barcelona que da una vuelta de tuerca al enfoque con el que se ha abordado el asunto hasta ahora.'
      },
      { title: 'Los Goya coronan As bestas con nueve estatuillas', 
      url: 'https://www.lavanguardia.com/files/image_948_465/uploads/2023/02/12/63e839f64e63d.jpeg', 
      fechaPublicacion: '12/02/2023',
      textoNoticia: 'Finalmente, tras una noche muy reñida, con el número de estatuillas siempre codo a codo, la noche de los premios Goya 2023 acabó siendo para la gran favorita, para ese filme impecable, como todos los de Rodrigo Sorogoyen, que es As bestas , un doloroso e inquietante thriller rural basado en hechos reales que anoche se llevó nueve Goya, incluidos el premio a la mejor película, al mejor director, guion, actor –Denis Ménochet, quien dijo que el filme reivindicaba el amor de las mujeres frente a la fuerza y la locura de los hombres– y al actor de reparto, Luis Zahera. Modelo 77 , la otra gran contendiente, se llevó cinco premios en categorías técnicas, mientras que el drama sobre la maternidad Cinco lobitos se llevó tres: Alauda Ruiz de Azúa por la dirección novel, Laia Costa como mejor actriz y Susi Sánchez como actriz de reparto. En cambio, la gran triunfadora de la Berlinale, Carla Simon y su Alcarràs se fueron de vacío.'
      },
    ];
    };

 

  guardar(): void {
    let noticia: Noticia = {
      title: this.title,
      url: this.url,
      textoNoticia: this.textoNoticia,
      fechaPublicacion: this.fechaPublicacion
    }


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


 
