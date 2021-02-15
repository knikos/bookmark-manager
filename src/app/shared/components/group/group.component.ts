import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Group } from '../../models/group.model';
import * as uuid from 'uuid';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  @Input() group: Group;
  @Input() selected: boolean;
  @Output() selectEvent = new EventEmitter<string>();
  @Output() addEvent = new EventEmitter<Group>();

  constructor(public dialog: MatDialog, private store: Store<AppState>) {
  }

  ngOnInit() {
  }

  select($event: string) {
    if (!this.selected) {
      this.selected = true;
      this.selectEvent.emit(this.group.id);
    }
  }

  onGroupAdd($event) {
    const dialogRef = this.dialog.open(GroupAddDialog, {
      minWidth: '25%',
      height: 'fit-content',
      data: { children: [] }
    });

    dialogRef.afterClosed().subscribe(newGroup => {

      if (newGroup) {
        console.log('ok clicked')
        // clone parent group and add new group to its children
        const clonedParentGroup = Object.assign({}, this.group, { children: [...this.group.children, { ...newGroup, id: uuid.v4() }] });
        this.addEvent.emit(clonedParentGroup);

      }
    });
  }
}

@Component({
  selector: 'group-add-dialog',
  templateUrl: 'group-add-dialog.html',
  styleUrls: ['group-add-dialog.scss']
})
export class GroupAddDialog {

  constructor(public dialogRef: MatDialogRef<GroupAddDialog>, @Inject(MAT_DIALOG_DATA) public data: Group) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }
  isFormValid(): boolean {
    return this.data.name && this.data.name.length > 0;
  }
}