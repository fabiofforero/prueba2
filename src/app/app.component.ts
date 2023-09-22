import { Component } from '@angular/core';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public externaUrl = 'https://portaleventos.cchuila.org/events';

  title = 'portafolio-app';

  public listCategorias: Array<any> = []
  public listEventos: Array<any> = []

  public currentPage = 1; // Página actual
  public itemsPerPage = 10;
  
  constructor(private httpClient: HttpClient, private restService: RestService) {

  }

  ngOnInit() {
 
  }

  public cargarDataCategorias() {
    this.httpClient
      .get('https://portaleventos.cchuila.org/categories')
      .subscribe((respuesta1: any) => { // Asegúrate de especificar el tipo de respuesta
        this.listCategorias = respuesta1;
      });
  }

  public cargarDataEventos() {

    const url = `https://portaleventos.cchuila.org/events`;

    this.httpClient.get(url).subscribe((respuesta2: any) => {
      // Agregar los datos recibidos a la lista actual
      this.listEventos = respuesta2.content;

      // Incrementar el número de página para la próxima solicitud
      

    })
  }
}
