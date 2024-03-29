import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-intro',
  templateUrl: 'intro.page.html',
  styleUrls: ['intro.page.scss'],
})
export class IntroPage implements OnInit {

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
      class:"slide-3"
    }
    
  ]
  constructor( private router:Router,
    private storage: Storage) {}

  goToHome(){
    console.log("go to home");
    this.router.navigateByUrl('menu/home')
    
}

skipIntro(){
  console.log("skip intro");
  this.router.navigateByUrl('menu/home')
}

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.storage.set('yaviLaIntro',true);
  }

}
