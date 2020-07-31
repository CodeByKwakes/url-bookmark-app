import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  @Output() pageSizeChange = new EventEmitter();

  pageOfBookmarks: Bookmark[];
  selectedIndex = null;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new GetBookmarks());
  }

  onDeleteBookmark(id: string) {
    this.store.dispatch(new DeleteBookmark(id));
  }

  onEditBookmark(payload: Bookmark) {
    this.store.dispatch(new SetSelectedBookmark(payload));
    this.scrollToTop();
  }

  // update current page of items
  onChangePage(pageOfItems: Bookmark[]) {
    this.pageOfBookmarks = pageOfItems;
    this.scrollToTop();
  }

  private scrollToTop() {
    document.documentElement.scrollTop = 0;
  }
}
