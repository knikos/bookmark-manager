import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { ActionsSubject, Store } from '@ngrx/store';
import { Group } from '../../models/group.model';
import { AppState } from 'src/app/app.state';
import { Observable } from 'rxjs';
import { Update } from '../../actions/selected-group.action';
import { Bookmark } from '../../models/bookmark.model';
import * as GroupActions from './../../actions/group.action';


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

  @Output() selectGroupEvent = new EventEmitter<string>();

  selectedGroupId: string;
  previouslySelectedGroupId: string;

  constructor(private store: Store<AppState>) {

    this.groupData$ = this.store.select('groups');
    this.selectedGroupData$ = this.store.select('selectedGroup');
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
      this.store.dispatch(new Update(this.selectedGroupId));
      this.selectGroupEvent.emit(this.selectedGroupId);
    }
  }


  addGroup($event: Group) {

    let clonedCopy: Group = { ...this.dataSource.data[0], children: [] };
    clonedCopy = this.updateNodeAndReturnClonedCopy(this.dataSource.data[0], $event, clonedCopy);

    // // add new group under selected group children
    this.store.dispatch(new GroupActions.Update(Object.assign({}, clonedCopy)));
  }


  updateNodeAndReturnClonedCopy(rootNode: Group, nodeToUpdate: Group, newTreeRootNode: Group): Group {

    newTreeRootNode = { ...rootNode, children: [] };
    for (let node of rootNode.children) {
      if (node.id == nodeToUpdate.id) {
        newTreeRootNode = { ...newTreeRootNode, children: [...newTreeRootNode.children, nodeToUpdate] };
      }
      else if (node.children.length > 0) {
        const newChildNode = this.updateNodeAndReturnClonedCopy(node, nodeToUpdate, newTreeRootNode);
        newTreeRootNode = { ...newTreeRootNode, children: [...newTreeRootNode.children, newChildNode] };
      }
      else {
        newTreeRootNode = { ...newTreeRootNode, children: [...newTreeRootNode.children, node] };

      }
    }
    return newTreeRootNode;
  }


}
