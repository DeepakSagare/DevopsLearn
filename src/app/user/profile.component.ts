import{Component, OnInit, Inject} from '@angular/core'
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms'
import {LoginAuthService} from './login.auth.service'
import { Router } from '@angular/router'
import {Toastr, TOASTR_TOKEN} from '../common/toastr.service'


@Component({
    templateUrl:'./profile.html'
})

export class ProfileComponent implements OnInit{

    profileForm:FormGroup
   

    constructor(private auth:LoginAuthService,
                private router:Router,
                @Inject(TOASTR_TOKEN) private toastr:Toastr ){}
    ngOnInit()
    {
        this.profileForm = new  FormGroup({
        firstName:new FormControl(this.auth.currentUser.firstName, Validators.required),    
        lastName:new  FormControl(this.auth.currentUser.lastName, Validators.required)
        })
    }
    saveProfile(formValues)
    {
        this.auth.updateCurrentUser(formValues.firstName, formValues.lastName)
        //this.router.navigate(['events'])
        this.toastr.success("Profile Saved");
    }
    cancel()
    {
        this.router.navigate(['events'])
    }

    }

