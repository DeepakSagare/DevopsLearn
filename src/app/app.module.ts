import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'

import {EventsAppComponent } from './events-app.component';
import {NavBarComonent} from './nav/nav-bar.component'
import {EventService } from './events/services/event.service'
import {appRoutes} from './routes'
import {Error404Component} from './events/error/error404.component'
import {EventRouteComponent} from './events/services/event-route-activator.service'
import {EventListResolver } from "./events/services/event-list-resolver.service";
import {LoginAuthService} from './user/login.auth.service'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'


import {
  CreateEventComponent,
  EventDetailComponent,
  EventListComponent,
  EventThumbnailComponent,
  CreateSessionComponent,
  SessionListComponent  
} from './events/index'

import {
  Toastr, TOASTR_TOKEN, CollapsibleWellCOmponent, DurationPipe
} from './common/index'

import {
  LoginComponent,
  ProfileComponent
} from './user/index'

//declare let toastr:Toastr

@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailComponent,
    NavBarComonent,   
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    CollapsibleWellCOmponent,
    SessionListComponent,
    DurationPipe   ,
    LoginComponent,
    ProfileComponent 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EventService, 
    //{
     // provide: TOASTR_TOKEN,
      //useValue: toastr
    //},
    EventRouteComponent,
    LoginAuthService,
    {
      provide:'canDeactivateCreateEvent',
      useValue:checkDirtyStatus
    },
    EventListResolver
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }


export function checkDirtyStatus(component:CreateEventComponent)
{
  if(component.isDirty)
    return window.confirm('you not saved the event do you want to continue')
  return true;
}
