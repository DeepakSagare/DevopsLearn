import {
    ProfileComponent,
    LoginComponent
} from './index'
import {Routes} from '@angular/router'

export const UserRoutes:Routes = [
    {path:'profile',component:ProfileComponent},
    {path:'login',component:LoginComponent}
]