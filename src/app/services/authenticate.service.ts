import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }
  loginUser(credential: any) {

    return new Promise((accept, reject) => {
      if (credential.email == 'brandon@gmail.com'
        && credential.password == 'Overwatch2312@'

      ) {
        accept('login correcto');
      } else {
        reject('contraseña o correo invalida');
      }

    });
  }
}