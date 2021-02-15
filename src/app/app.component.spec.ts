import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { TestBed } from '@angular/core/testing';
import { MatTreeModule } from '@angular/material/tree';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { BookmarkManagerWrapperComponent } from './shared/components/bookmark-manager-wrapper/bookmark-manager-wrapper.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        BrowserAnimationsModule,
        MatTreeModule
      ],
      declarations: [
        AppComponent,
        BookmarkManagerWrapperComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'bookmark-manager'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('bookmark-manager');
  });

});
