import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Group } from '../../models/group.model';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

    @Input() group: Group;
    @Input() selected: boolean;    
    @Output() selectEvent = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit() {
    }

    select($event: string) {
      if(!this.selected) {
        this.selected = true;
        this.selectEvent.emit(this.group.id);
      }
    }
}
