import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActionsSubject, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Bookmark } from '../../models/bookmark.model';
import { BookmarkEditDetailsComponent } from '../bookmark-edit-details/bookmark-edit-details.component';
import * as BookmarkActions from './../../actions/boookmark.action';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {

  @Input() bookmark: Bookmark;
  bookmarkRepository$: Observable<Bookmark[]>;

  constructor(private store: Store<AppState>, public dialog: MatDialog) {
    this.bookmarkRepository$ = store.select('bookmarks');

  }
  ngOnInit(): void {
  }

  onOpenInNewTab($event) {
    window.open("//" + this.bookmark.url, '_blank');
  }
  onEdit($event) {

    this.openDialog();
  }
  onDelete($event) {
    this.store.dispatch(new BookmarkActions.Remove(this.bookmark));

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(BookmarkEditDetailsComponent, {
      minWidth: '25%',
      height: 'fit-content',
      data: this.bookmark
    });

    dialogRef.afterClosed().subscribe(result => {

      // if ok was clicked
      if (result) {
        this.bookmark = result;
        this.store.dispatch(new BookmarkActions.Update(this.bookmark));
      }
    });
  }
}
