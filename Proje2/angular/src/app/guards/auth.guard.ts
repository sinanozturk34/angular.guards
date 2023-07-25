import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements  CanActivate{
  //apiden kullanıcı bazlı cekilecek kısım
  userPages = [
    // {
    //   url:'/crm'
    // },
    {
      url:'/admin'
    }
  ]
 

   
  constructor(private router:Router)  {
   

  }


   canActivate(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean
    | UrlTree{

     console.log('route',route);
     console.log('state',state);//redirect yapma şansı
     
     

//kullanıcı authticated ise sayfaya erişim saglabilriz.true döndürür degilse false döndürür
//login sürecini(facebook,instagram,google) 3rd bir servisin userinfo yada login endpoind tetikleyerek işlem yapıyoruz.
//kendi api çalışırken access_token kontrol etmek yeterli,bu sebeple boolean tipi yeterli olucaktır
      
  const token = localStorage.getItem('token');
  const userHasPermission = this.userPages.find(x=> x.url == state.url);//yani kullanıcının bu sayfaya yetkisivar ise.

  if(token != undefined && userHasPermission){
    return true
  }
  //kullanıcının token yetkisi yok sayfa yönlendirebilriz
  this.router.navigateByUrl('unauthorized');
  
  //api tarafında url bazlı yetkilendirme varsa state url kullabilriz
  //state.url;
return false;
    }
   
}
