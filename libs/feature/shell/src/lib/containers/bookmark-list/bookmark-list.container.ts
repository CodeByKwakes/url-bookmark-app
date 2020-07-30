import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Bookmark } from '@phantom/bookmark-api';
import {
  BookmarkState,
  DeleteBookmark,
  GetBookmarks,
  SetSelectedBookmark,
} from '@phantom/bookmark-store';
import { Observable } from 'rxjs';

@Component({
  selector: 'phantom-tech-test-bookmark-list',
  templateUrl: './bookmark-list.container.html',
  styleUrls: ['./bookmark-list.container.scss'],
})
export class BookmarkListContainer implements OnInit {
  @Select(BookmarkState.getBookmarkList) bookmarks$: Observable<Bookmark[]>;

  pageOfBookmarks: Bookmark[];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new GetBookmarks());
  }

  deleteBookmark(id: number) {
    this.store.dispatch(new DeleteBookmark(id));
  }

  editBookmark(payload: Bookmark) {
    this.store.dispatch(new SetSelectedBookmark(payload));
  }

  // update current page of items
  onChangePage(pageOfItems: Bookmark[]) {
    this.pageOfBookmarks = pageOfItems;
  }
}
