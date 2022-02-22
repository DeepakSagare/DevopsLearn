import {Routes} from '@angular/router'

import {EventListResolver} from './events/services/event-list-resolver.service'
import {EventRouteComponent} from './events/services/event-route-activator.service'
import {Error404Component} from './events/error/error404.component'




import {
    CreateEventComponent,
    EventDetailComponent,
    EventListComponent ,
    CreateSessionComponent
  } from './events/index'
 


export const appRoutes:Routes = [
    {path:"events/new",component:CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']},
    {path:"events",component:EventListComponent, 
        resolve:{events:EventListResolver}},
    {path:"events/:id",component:EventDetailComponent, canActivate:[EventRouteComponent]},
    {path:"events/session/new",component:CreateSessionComponent},
    {path:'404',component:Error404Component},
    {path:"", redirectTo:"events",pathMatch:"full"},
    {path:"user", loadChildren:'src/app/user/user.module#UserModule'},
    
]

