import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { ActionsSubject, Store } from '@ngrx/store';
import { Group } from '../../models/group.model';
import { AppState } from 'src/app/app.state';
import { Observable } from 'rxjs';
import { Update } from '../../actions/selected-group.action';
import { Bookmark } from '../../models/bookmark.model';


@Component({
  selector: 'bookmark-tree',
  templateUrl: './bookmark-tree.component.html',
  styleUrls: ['./bookmark-tree.component.scss']
})
export class BookmarkTreeComponent implements OnInit {

  groupData$: Observable<Group[]>;
  selectedGroupData$: Observable<string>;
  bookmarkRepo$: Observable<Bookmark[]>;

  treeControl = new NestedTreeControl<Group>(node => node.children);
  dataSource = new MatTreeNestedDataSource<Group>();

  selectedGroupId: string;
  previouslySelectedGroupId: string;

  constructor(private appState: Store<AppState>) {

    this.groupData$ = this.appState.select('groups');
    this.selectedGroupData$ = this.appState.select('selectedGroup');
  }

  hasChild = (_: number, node: Group) => !!node.children && node.children.length > 0;

  ngOnInit(): void {
    this.groupData$.subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  selectGroup($event: string) {
    if (this.selectedGroupId != $event) {
      this.selectedGroupId = $event;
      this.appState.dispatch(new Update(this.selectedGroupId));

    }
  }


  selecteNodeAndReturnRootNode(treeData: Group[], nodeId: string): Group {
    //process current node here

    let foundNode: Group = null;
    for (let node of treeData) {    // treeData.forEach(node => {
      if (node.id == nodeId) {
        foundNode = node;
        foundNode.selected = true;
        break;
      }
      if (node.children.length > 0) {
        if (this.selecteNodeAndReturnRootNode(node.children, nodeId) !== null) { // if node found
          return node; // return parent node
        };
      }

    }
    return foundNode;
  }


}
