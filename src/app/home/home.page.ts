import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slides=[
    {
      title: "Bienvenido a Foreman!",
      description:"Explora un nuevo nivel de conveniencia en la compra de boletos.",
      img:"../../assets/img/img1.jpg",
      help_text: "Swipe para continuar",
    },
    {
      title: "Tu Portal Personalizado de Boletos con Foreman",
      description:"Inicia tu viaje con Foreman, tu destino para boletos personalizados.",
      img:"../../assets/img/img2.jpg",
      help_text: "Swipe para continuar",
    },
    {
      title: "Comodidad en la Palma de tu Mano con Foreman",
      description:"¡Salta las filas y accede a tus eventos preferidos de manera fácil y rápida con Foreman!",
      img:"../../assets/img/img3.jpg",
      help_text: "Swipe para continuar",
    }
    
  ]
  constructor() {}

}
