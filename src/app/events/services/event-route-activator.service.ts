import {Router,CanActivate, ActivatedRouteSnapshot, RouterEvent} from '@angular/router'
import {Injectable} from '@angular/core'
import {EventService} from './event.service'

@Injectable()
export class EventRouteComponent implements CanActivate{
    constructor(private router:Router, private eventService:EventService)
    {}

    canActivate(route:ActivatedRouteSnapshot)
    {
        const eventExists = !!this.eventService.GetEventById(+route.params["id"])

        if(!eventExists)
            this.router.navigate(['/404'])
        return eventExists
    }

}