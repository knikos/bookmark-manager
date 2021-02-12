import { BookmarkRepository } from "./shared/models/bookmark-repository.model";
import { Group } from "./shared/models/group.model";

export interface AppState {
    groups: Group[];
    bookmarks: BookmarkRepository;
}