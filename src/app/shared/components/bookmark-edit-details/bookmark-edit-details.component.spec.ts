import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkEditDetailsComponent } from './bookmark-edit-details.component';

describe('BookmarkEditDetailsComponent', () => {
  let component: BookmarkEditDetailsComponent;
  let fixture: ComponentFixture<BookmarkEditDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkEditDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkEditDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
