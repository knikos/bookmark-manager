import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from 'src/app/material/material.module';
import { BookmarkListComponent } from '../bookmark-list/bookmark-list.component';
import { BookmarkTreeComponent } from '../bookmark-tree/bookmark-tree.component';

import { BookmarkManagerWrapperComponent } from './bookmark-manager-wrapper.component';

describe('BookmarkManagerWrapperComponent', () => {
  let component: BookmarkManagerWrapperComponent;
  let fixture: ComponentFixture<BookmarkManagerWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        StoreModule.forRoot({}),
        MaterialModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        {
          provide: MatDialogRef,
          useValue: {}
        },
      ],
      declarations: [BookmarkManagerWrapperComponent, BookmarkTreeComponent, BookmarkListComponent, MatToolbar, MatIcon, MatSidenav]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkManagerWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
