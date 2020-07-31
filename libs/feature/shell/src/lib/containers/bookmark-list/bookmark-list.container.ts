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
  /**
   * @description
   * @type {Observable<Bookmark[]>}
   * @memberof BookmarkListContainer
   */
  @Select(BookmarkState.getBookmarkList)
  bookmarks$: Observable<Bookmark[]>;

  /**
   * @description
   * @memberof BookmarkListContainer
   */
  @Output() pageSizeChange = new EventEmitter();

  /**
   * @description array of bookmark items used for pagination
   * @type {Bookmark[]}
   * @memberof BookmarkListContainer
   */
  pageOfBookmarks: Bookmark[];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new GetBookmarks());
  }

  /**
   * @description dispatch the DeleteBookmark action
   * @author Kwakes Prempeh
   * @param {string} id
   * @memberof BookmarkListContainer
   */
  onDeleteBookmark(id: string) {
    this.store.dispatch(new DeleteBookmark(id));
  }
  /**
   * @description dispatch the SetSelectedBookmark action then scroll to top of page
   * @author Kwakes Prempeh
   * @param {Bookmark} payload
   * @memberof BookmarkListContainer
   */
  onEditBookmark(payload: Bookmark) {
    this.store.dispatch(new SetSelectedBookmark(payload));
    this.scrollToTop();
  }

  //

  /**
   * @description update current pagination of items
   * @author Kwakes Prempeh
   * @param {Bookmark[]} pageOfItems
   * @memberof BookmarkListContainer
   */
  onChangePage(pageOfItems: Bookmark[]) {
    this.pageOfBookmarks = pageOfItems;
    this.scrollToTop();
  }

  /**
   * @description scroll to top of page
   * @author Kwakes Prempeh
   * @private
   * @memberof BookmarkListContainer
   */
  private scrollToTop() {
    document.documentElement.scrollTop = 0;
  }
}
