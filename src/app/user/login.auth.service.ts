import {Injectable} from '@angular/core' 
import {IUser} from './index'
import { last } from '@angular/router/src/utils/collection'

@Injectable()
export class LoginAuthService{

    currentUser:IUser

   
    loginUser(userName:string, password:string):IUser
    {
       
         this.currentUser = {
            id : 1,
            firstName : 'Deepak',
            lastName: 'Sagare',
            userName:'dsag466'
        }
        console.log(this.currentUser)
        return this.currentUser
    }
    isAuthenticated()
    {
              
        return !!this.currentUser;
    }

    updateCurrentUser(fName:string, lName:string)
    {
        this.currentUser.firstName = fName;
        this.currentUser.lastName = lName;
    }

   

}