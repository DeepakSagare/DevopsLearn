import { Component, Input, OnChanges } from "@angular/core";
import { ISession } from '../model';
import { sequenceEqual } from 'rxjs/operators';

@Component ({
    selector:'session-list',
    templateUrl:'./session-list.html'
})

export class SessionListComponent implements OnChanges{
    @Input() sessions:ISession[]
    @Input() filterBy:string
    @Input() sortBy:string
    visibleSession:ISession[] = [];

    ngOnChanges()
    {
        if(this.sessions){
            this.filterSession(this.filterBy);
        }
    }

    filterSession(value)
    {
        if(value === 'all')
        {
             this.visibleSession = this.sessions.slice(0)   
             this.sortBy === 'name'  ? this.visibleSession.sort(sortByNameAsc) : this.visibleSession.sort(sortByVotesDesc)
        }
        else
        {
             this.visibleSession = this.sessions.filter(s => {return s.level.toLowerCase() === value});
        }
    }
    

}

function sortByNameAsc(s1:ISession, s2:ISession)
{
    if(s1.name > s2.name) {return 1;}
    else if(s1.name === s2.name) {return 0;}
    else{s1.name < s1.name} {return -1;}
}
function sortByVotesDesc(s1:ISession, s2:ISession)
{
    return s2.voters.length - s1.voters.length;
}

