import {Component} from '@angular/core'
import {Router} from '@angular/router'
import {EventService} from './services/event.service'


@Component({
    templateUrl:'./create-event.html',
    styleUrls:['./create-event.css']
    
})

export class CreateEventComponent{
    newEvent
    isDirty:boolean=false;
    constructor(private route:Router, private eventService:EventService)
    {

    }

    saveEvent(formValues)
    {
        this.eventService.saveEvent(formValues)
        this.route.navigate(['/events'])
    }
    cancel(){
        this.route.navigate(['/events'])
    }
}