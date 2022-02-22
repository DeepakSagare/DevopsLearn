import { Component, Input } from "@angular/core";

@Component({
    selector:'collapsible-well',
    templateUrl:'./collapsible-well.html'
})

export class CollapsibleWellCOmponent{
    visible:boolean = false;

    toggleContent()
    {
        this.visible = !this.visible;
    }
}