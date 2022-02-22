import {Component} from '@angular/core'
import {LoginAuthService} from '../user/login.auth.service'
import {ISession} from '../model/event.model'
import {EventService} from '../events/services/event.service'


@Component({
    selector:"nav-bar",
    templateUrl:'./nav-bar.html',
    styles:[` 
        li > a.active {color:#F97924}
    `]
})

export class NavBarComonent{
    searchTerm:string = ""
    foundSessions:ISession[]

    constructor(private auth:LoginAuthService,
                private eventService:EventService){}

    searchSession(searchTerm)
    {
        this.eventService.searchSession(searchTerm).subscribe(
            sessions=>{
                this.foundSessions = sessions
                console.log(this.foundSessions)
            })
    }
}   