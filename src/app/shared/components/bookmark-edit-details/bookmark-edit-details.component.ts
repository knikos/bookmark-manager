import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Bookmark } from '../../models/bookmark.model';
import { Group } from '../../models/group.model';

@Component({
  selector: 'app-bookmark-edit-details',
  templateUrl: './bookmark-edit-details.component.html',
  styleUrls: ['./bookmark-edit-details.component.scss']
})
export class BookmarkEditDetailsComponent implements OnInit {
  groups$: Observable<Group[]>;
  groups: Group[] = [];

  constructor(public dialogRef: MatDialogRef<BookmarkEditDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Bookmark, private store: Store<AppState>) {

    this.groups$ = store.select('groups');

  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.groups$.subscribe(groups => {
      this.traverseGroupTree(groups, this.groups);
    });

  }


  traverseGroupTree(treeData: Group[], nodeArray: Group[]) {

    for (let node of treeData) {

      nodeArray.push(node);
      if (node.children.length > 0) {
        this.traverseGroupTree(node.children, nodeArray);
      }

    }
  }
}
