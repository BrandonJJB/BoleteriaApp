import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
loginForm: FormGroup;
validation_message={
  email:[

    {type: "required", message: "el email es obligatorio"},
    {type: "pattern", message: " el email ingresado no es valido"}
  ],

  password:[
    
    {type: "required", message: "Debes colocar una contraseña"},
    {type: "pattern", message: "la contraseña debe tener: letra mayuscula, letra minuscula,numero, caracter especial!"}
  ]
}
  constructor(private formBuilder: FormBuilder) { 

    this.loginForm=this.formBuilder.group({
      email: new FormControl( "",Validators.compose([Validators.required,Validators.pattern(
            "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
          )
        ])
      ),
      password: new FormControl( "",Validators.compose([Validators.required,Validators.pattern(('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'))
    ])
  )

       }
    )
    
    }
  

  ngOnInit() {

  }

  login(login_data:any){
    console.log (login_data);
  }
  
  }
