import { Bookmark } from "./bookmark.model";

export interface BookmarkRepository {
    [key:string]: Bookmark;
}
