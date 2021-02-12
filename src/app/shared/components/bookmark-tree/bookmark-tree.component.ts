import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { Store } from '@ngrx/store';
import { Group } from '../../models/group.model';
import { BookmarkRepository } from '../../models/bookmark-repository.model';
import { AppState } from 'src/app/app.state';
import { Observable } from 'rxjs';


@Component({
  selector: 'bookmark-tree',
  templateUrl: './bookmark-tree.component.html',
  styleUrls: ['./bookmark-tree.component.css']
})
export class BookmarkTreeComponent implements OnInit {

groupData: Observable<Group[]>;
  selectedGroupId: string;

  treeControl = new NestedTreeControl<Group>(node => node.children);
  dataSource = new MatTreeNestedDataSource<Group>();

  constructor(private groupStore: Store<AppState>) {
    
    this.groupData=this.groupStore.select('groups');
  }

  hasChild = (_: number, node: Group) => !!node.children && node.children.length > 0;

  ngOnInit(): void {
     this.groupData.subscribe((data)=> {
      this.dataSource.data = data;
     });
  }

  selectGroup($event: string) {
    this.selectedGroupId = $event;
  }
}
