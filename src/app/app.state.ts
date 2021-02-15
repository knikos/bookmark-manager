import { Bookmark } from "./shared/models/bookmark.model";
import { Group } from "./shared/models/group.model";

export interface AppState {
    groups: Group[];
    bookmarks: Bookmark[];
    selectedGroup: string;
}