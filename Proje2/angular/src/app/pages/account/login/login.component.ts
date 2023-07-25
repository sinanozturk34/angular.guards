import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  loginForm:FormGroup = this.formBuilder.group({
    email:['eve.holt@reqres.in'],
    password:['eve.holt@reqres.in']
  })
  constructor(private formBuilder:FormBuilder,private loginService:LoginService,private router:Router){}
 
  ngOnInit(): void {
   
  }



  login(){
     
    const param = this.loginForm.value;

    console.log('loginParam',param);
    
    this.loginService.signIn(param).subscribe(response => {
      //eger successfuly olduysak ozman redirect ol home sayfasına
      //hata varsada alert ile hatayı fırlatır 

      // console.log('response-login-component',response);
      

      if(response.status !=200){
        alert(response.error?.error);
      }else{
        console.log('loginedIn',response);
        this.router.navigateByUrl(response.redirect)
        
      }
    });

  }

}
