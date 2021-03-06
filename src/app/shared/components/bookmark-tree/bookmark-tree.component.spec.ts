import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNestedTreeNode, MatTreeModule, MatTreeNode } from '@angular/material/tree';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from 'src/app/material/material.module';
import { GroupComponent } from '../group/group.component';

import { BookmarkTreeComponent } from './bookmark-tree.component';

describe('BookmarkTreeComponent', () => {
  let component: BookmarkTreeComponent;
  let fixture: ComponentFixture<BookmarkTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        BrowserAnimationsModule,
        MaterialModule
      ],
      declarations: [BookmarkTreeComponent,
        MatTreeNode,
        MatNestedTreeNode,
        GroupComponent,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
