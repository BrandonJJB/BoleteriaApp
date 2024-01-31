import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  registerValidation_message = {

    email: [

      { type: "required", message: "el email es obligatorio" },
      { type: "pattern", message: " el email ingresado no es valido" }
    ],

    password: [

      { type: "required", message: "Debes colocar una contraseña" },
      { type: "pattern", message: "la contraseña debe tener: letra mayuscula, letra minuscula,numero, caracter especial!" }
    ],

    password_conf: [
      { type: "required", message: "Debes confirmar tu contraseña" },
      { type: "pattern", message: "Tus contraseñas no coinciden" }
    ],

    name: [
      { type: "required", message: "Debes escribir tu nombre" },
      { type: "pattern", message: "Tu nombre solo debe llevar letras" }

    ],

    last_name: [
      { type: "required", message: "Debes escribir tu apellido" },
      { type: "pattern", message: "Tu apellido solo debe llevar letras" }

    ]

  }
  registerMessage: any;
  constructor(private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private storage: Storage,
    private AuthenticateService: AuthenticateService) {

    this.registerForm = this.formBuilder.group({
      email: new FormControl("", Validators.compose([Validators.required, Validators.pattern(
        "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
      )
      ])
      ),
      password: new FormControl("", Validators.compose([Validators.required, Validators.pattern(('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')),
      ])
      ),
      password_conf: new FormControl("", Validators.compose([Validators.required, Validators.pattern(('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')),

      ])
      ),
      name: new FormControl("", Validators.compose([Validators.required, Validators.pattern(("^[A-Za-z]+(?:[ -][A-Za-z]+)*$")
      )
      ])
      ),
      last_name: new FormControl("", Validators.compose([Validators.required, Validators.pattern(("^[A-Za-z]+(?:[ -][A-Za-z]+)*$")
      )
      ])
      ),

    }
    )

  }



  ngOnInit() {
  }
  register(register_data: any) {

    if (register_data.password == register_data.password_conf) {



      console.log(register_data);
      this.AuthenticateService.registerUser(register_data).then(res => {
        this.registerMessage = res;
        this.storage.set('userRegisteredIn', true)
        this.navCtrl.navigateForward('/login');
      }).catch(err => {
        this.registerMessage = err;
      });

    } else { console.log('no coinciden las contraseñas') }
  }
}
