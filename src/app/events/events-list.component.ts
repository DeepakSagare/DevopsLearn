import {Component, OnInit} from '@angular/core'
import {EventService} from './services/event.service'

import {ActivatedRoute} from '@angular/router'
import {IEvent} from '../model/index'



@Component({
    
    templateUrl:'./event-list.html'

})

export class EventListComponent implements OnInit{
    events: IEvent[]

    constructor(private eventService:EventService,  private route:ActivatedRoute)
    {
        
    }

    ngOnInit()
    {
        this.events = this.route.snapshot.data['events']
    }

   

}

