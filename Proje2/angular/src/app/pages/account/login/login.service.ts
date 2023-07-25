import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap } from 'rxjs';

//gelen response degiştirip baska bır donus uygulamayı dusunursek map uygularız
//tap ise yapılan request ilk yakaldıgımız an localstorag token bilgisini alıcaz
//catch ise:hata olursa observable olarak dondurmek ıcın kullanılır
//of operatörü ile observable tipte bir dönus yapabilmek ıcın 
//observable olanlar subst olabiliyordu
//pipe operatör ise tüm bu rxjs ile alakalı operatörlerin sarmalladıgımız bir observable bir dönüş tipi
@Injectable({
  providedIn: 'root'
}) //Root demek AppModule yani root module dmek
export class LoginService {

  constructor(private http: HttpClient) { }

  signIn(param: any) { //bilgilerimizi bize versin,aynı zmanda arkada token bilgileri tutucaz

    return this.http.post('https://reqres.in/api/login', param).pipe(
      tap((res: any) => {
        console.log('tap', res);

        if (res['token'] != undefined) {
          localStorage.setItem('token', res['token'])
        }

      }),
      map((res: any) => {
        console.log('map', res)

        if (res['token']) {
          return {success:true,redirect:'/',status:200}
        }else{
          return {success:false,redirect:null,status:400};
        }

        
      }),
      catchError(err => {
        console.log('err', err);

        return of<any>(err);
      })
    );
  }
  signOut() {

  }

}

