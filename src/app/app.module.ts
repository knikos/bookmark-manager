import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookmarkComponent } from './shared/components/bookmark/bookmark.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookmarkTreeComponent } from './shared/components/bookmark-tree/bookmark-tree.component';
import { MatTreeModule } from '@angular/material/tree';

import {MatIconModule} from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import { bookmarkReducer } from './shared/reducers/bookmark.reducer';
import { groupReducer } from './shared/reducers/group.reducer';
import { GroupComponent } from './shared/components/group/group.component';

@NgModule({
  declarations: [
    AppComponent,
    BookmarkComponent,
    BookmarkTreeComponent,
    GroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTreeModule,
    MatIconModule,
    StoreModule.forRoot({
      bookmarks: bookmarkReducer,
      groups: groupReducer
    }
      )
  ],
  entryComponents: [BookmarkTreeComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
