import {Component,  OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {EventService} from './services/event.service'
import {IEvent, ISession} from '../model/index'
@Component({
        templateUrl:"./event-detail.html",
        styles:[`
        
        .event-image {height:100px; !important}
        `]
})

export class EventDetailComponent implements OnInit{
    event:IEvent
    addMode:boolean
    filterBy:string="all"
    sortBy:string

    constructor(private eventService:EventService, private route:ActivatedRoute)
    {}

    ngOnInit()
    {
      this.event =  this.eventService.GetEventById(+this.route.snapshot.params["id"])
    }

    addSession()
    {
      this.addMode = true;
    }

    saveNewSession(event:ISession)
    {
      console.log(event)
      const id = Math.max.apply(null, this.event.sessions.map(i=>i.id));
      event.id = id+1;
      this.event.sessions.push(event);
      this.eventService.updateSession(event);
      this.addMode = false
    }
    cancelNewSession()
    {
      this.addMode=false
    }

}