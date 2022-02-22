import { Component } from '@angular/core';
import {LoginAuthService} from './login.auth.service'
import {Router} from '@angular/router'

@Component({
    templateUrl:'./login.html'
})

export class LoginComponent
{
     constructor(private auth:LoginAuthService,
                private router:Router){}
    


    login(formValues:any)
    {
        this.auth.loginUser(formValues.userName, formValues.password)
        this.router.navigate(['events'])
    }

    cancel()
    {this.router.navigate(['events'])}

}