import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Bookmark } from '../../models/bookmark.model';
import { BookmarkDetailsComponent } from '../bookmark-details/bookmark-details.component';
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


  onClickBookmark() {
    this.openBookmarkDialog("Bookmark details", false);
  }

  onOpenInNewTab($event) {
    window.open("//" + this.bookmark.url, '_blank');
  }

  onEdit($event) {
    this.openBookmarkDialog('Edit bookmark details', true);
  }

  onDelete($event) {
    this.store.dispatch(new BookmarkActions.Remove(this.bookmark));
  }

  openBookmarkDialog(title: string, enabled: boolean): void {
    const dialogRef = this.dialog.open(BookmarkDetailsComponent, {
      minWidth: '25%',
      height: 'fit-content',
      data: {
        bookmark: Object.assign({}, this.bookmark),
        title: title,
        enabled: enabled
      }
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
