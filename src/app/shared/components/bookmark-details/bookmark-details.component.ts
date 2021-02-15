import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Bookmark } from '../../models/bookmark.model';
import { Group } from '../../models/group.model';


export interface DialogDataType {
  bookmark: Bookmark;
  enabled: boolean;
  title: string;
}

@Component({
  selector: 'app-bookmark-details',
  templateUrl: './bookmark-details.component.html',
  styleUrls: ['./bookmark-details.component.scss']
})
export class BookmarkDetailsComponent implements OnInit {
  groups$: Observable<Group[]>;
  groups: Group[] = [];
  data: DialogDataType;

  constructor(public dialogRef: MatDialogRef<BookmarkDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public injectedData: DialogDataType, private store: Store<AppState>) {

    this.groups$ = store.select('groups');


    this.data = Object.assign({}, { bookmark: { name: '', url: '', group: '' } }, injectedData);
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

    if (treeData != null && Array.isArray(treeData))
      for (let node of treeData) {

        nodeArray.push(node);
        if (node.children.length > 0) {
          this.traverseGroupTree(node.children, nodeArray);
        }

      }
  }

  isFormValid(): boolean {
    return this.data.bookmark && this.data.bookmark.name && this.data.bookmark.url && this.data.bookmark.name.length > 0 && this.data.bookmark.url.length > 0;
  }
}
