import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  // Interpolacion -> Conexion entre en componente y html
  nombre = 'Juan'

  constructor () {
    setInterval( () => this.nombre = 'Javier' , 3000 )

    setInterval(() => this.deshabilitado = false , 3000)
  }

  getSumar = (numero1: number ,numero2: number) => {
      return numero1 + numero2
  }

  // Property Binding
  textPlaceHolder = 'Escriba algo aqui..'
  deshabilitado = true
  imgSrc = 'https://i.ytimg.com/vi/qJxYoiFzIC0/maxresdefault.jpg'

 

}
