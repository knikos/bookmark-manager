import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookmarkComponent } from './shared/components/bookmark/bookmark.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookmarkTreeComponent } from './shared/components/bookmark-tree/bookmark-tree.component';
import { StoreModule } from '@ngrx/store';
import { bookmarkReducer } from './shared/reducers/bookmark.reducer';
import { groupReducer } from './shared/reducers/group.reducer';
import { GroupAddDialog, GroupComponent } from './shared/components/group/group.component';
import { BookmarkListComponent } from './shared/components/bookmark-list/bookmark-list.component';
import { selectedGroupReducer } from './shared/reducers/selected-group-id.reducer';
import { MaterialModule } from './material/material.module';
import { BookmarkDetailsComponent } from './shared/components/bookmark-details/bookmark-details.component';
import { FormsModule } from '@angular/forms';
import { BookmarkManagerWrapperComponent } from './shared/components/bookmark-manager-wrapper/bookmark-manager-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    BookmarkComponent,
    BookmarkTreeComponent,
    GroupComponent,
    BookmarkListComponent,
    BookmarkDetailsComponent,
    GroupAddDialog,
    BookmarkManagerWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    StoreModule.forRoot({
      bookmarks: bookmarkReducer,
      groups: groupReducer,
      selectedGroup: selectedGroupReducer,
    }
    )
  ],
  entryComponents: [BookmarkTreeComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  mobileQuery: MediaQueryList;
}
