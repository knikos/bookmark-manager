
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Bookmark } from '../../models/bookmark.model';
import { GROUP_ROOT_NODE } from '../../reducers/group.reducer';
import { BookmarkEditDetailsComponent } from '../bookmark-edit-details/bookmark-edit-details.component';
import * as BookmarkActions from './../../actions/boookmark.action';

@Component({
  selector: 'bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.scss']
})
export class BookmarkListComponent implements OnInit {

  bookmarkRepo$: Observable<Bookmark[]>;
  selectedGroupData$: Observable<string>;
  items: Bookmark[] = [];
  selectedGroup: string;

  constructor(private store: Store<AppState>, public dialog: MatDialog) {
    this.bookmarkRepo$ = this.store.select('bookmarks');
    this.selectedGroupData$ = this.store.select('selectedGroup');
  }

  ngOnInit(): void {
    combineLatest(this.bookmarkRepo$, this.selectedGroupData$).subscribe(([data, selectedGroup]) => {

      console.log('Updating list...')
      this.selectedGroup = selectedGroup;
      this.items = Object.values(data).filter(bookmark => (bookmark.group !== null && bookmark.group == this.selectedGroup) || (this.selectedGroup == GROUP_ROOT_NODE && bookmark.group == null));

      console.log(this.items);
    });

  }

  addBookmark($event) {
    this.openAddBookmarkDialog();

  }

  openAddBookmarkDialog(): void {

    const dialogRef = this.dialog.open(BookmarkEditDetailsComponent, {
      minWidth: '25%',
      height: 'fit-content',
      data: { group: this.selectedGroup || GROUP_ROOT_NODE }
    });

    dialogRef.afterClosed().subscribe(result => {

      // if ok was clicked
      if (result) {
        this.store.dispatch(new BookmarkActions.Add(result));
      }
    });
  }
}
