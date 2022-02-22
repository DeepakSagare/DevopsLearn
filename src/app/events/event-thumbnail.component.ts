import {Component, Input, Output, EventEmitter} from '@angular/core'
import {IEvent} from '../model/index'

@Component({
    selector : 'event-thumbnail',
    templateUrl: './event-thumbnail.html',
    styles:[`
    .green {color:#003300}
    .bold {font-weight:bold}
    .thumbnail {min-height:210px}
    `]
})

export class EventThumbnailComponent{
    @Input() event:IEvent

    getEarlyClassStart()
    {
        if(this.event && this.event.time === '8:00 am')
            return 'green bold';
        return '';
    }
    
}
