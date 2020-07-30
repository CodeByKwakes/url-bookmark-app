import { Component, OnInit, HostBinding } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import {
  BookmarkState,
  GetBookmarks,
  DeleteBookmark,
  SetSelectedBookmark,
} from '@phantom/bookmark-store';
import { Bookmark } from '@phantom/bookmark-api';
import { Observable } from 'rxjs';
import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate,
} from '@angular/animations';
export const fadeInGrowAnimation = trigger('fadeInGrow', [
  transition(':enter', [
    query(':enter', [
      style({ opacity: 0 }),
      stagger('50ms', [animate('500ms', style({ opacity: 1 }))]),
    ]),
  ]),
]);
@Component({
  selector: 'phantom-tech-test-bookmark-list',
  templateUrl: './bookmark-list.container.html',
  styleUrls: ['./bookmark-list.container.scss'],
  // animations: [fadeInGrowAnimation],
})
export class BookmarkListContainer implements OnInit {
  @Select(BookmarkState.getBookmarkList) bookmarks$: Observable<Bookmark[]>;
  noImageAvailable =
    'https://upload.wikimedia.org/wikipedia/commons/6/62/%22No_Image%22_placeholder.png';

  pageOfBookmarks: Bookmark[];

  @HostBinding('@fadeInGrow') animate = true;
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
