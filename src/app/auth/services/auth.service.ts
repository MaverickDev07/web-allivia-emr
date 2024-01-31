import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { of, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment.prod';


import { Authentication, User } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _usuario!: User;

  get usuario() {
    return { ...this._usuario };
  }


  constructor( private http: HttpClient ) { }


  login( email: string, password: string ) {
    const url  = `${ this.baseUrl }/auth/login`;
    return this.http.post<Authentication>( url, {email,password},{  observe: 'response'} )
    .pipe(
      tap( resp => {
   
        if ( resp.ok ) {
        localStorage.setItem('token', resp.body!.token );
        }

        localStorage.setItem('name', "Dr. "+resp.body!.user.nombre+" "+resp.body?.user.apellido );
        localStorage.setItem('photo_profile', resp.body!.user.nombrearchivo! );
        if(resp.body!.user.path==undefined || resp.body!.user.path===''){
          localStorage.setItem('photo_profile', "../../../../assets/img/avatar.png");
        }
      }),
      map( resp => resp.ok ),
      catchError( err =>{
       return of(err.error.message);
      } )
    );
  }




  validateToken(): Observable<boolean> {

    const url = `${ this.baseUrl }/auth/renew`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '' );

    return this.http.get<Authentication>( url, { headers } )
        .pipe(
          map( resp => {
            localStorage.setItem('token', resp.token! );
            this._usuario = {
              nombre: resp.user!.nombre,
              usuario_id: resp.user.usuario_id,
              email: resp.user.email!
            }

            return resp.ok;
          }),
          catchError( err => of(false) )
        );

  }

  logout() {
    localStorage.clear();
  }


}

