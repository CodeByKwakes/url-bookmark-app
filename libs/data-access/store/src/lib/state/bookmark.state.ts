import { Injectable } from '@angular/core';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { Bookmark, ApiService } from '@phantom/bookmark-api';
import {
  GetBookmarks,
  AddBookmark,
  UpdateBookmark,
  DeleteBookmark,
  SetSelectedBookmark,
} from './bookmark.actions';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';

export class BookmarkStateModel {
  bookmarks: Bookmark[];
  selectedBookmark: Bookmark;
}

@State<BookmarkStateModel>({
  name: 'bookmarks',
  defaults: {
    bookmarks: [],
    selectedBookmark: null,
  },
})
@Injectable()
export class BookmarkState {
  @Selector()
  static getBookmarkList(state: BookmarkStateModel) {
    return state.bookmarks;
  }

  @Selector()
  static getSelectedBookmark(state: BookmarkStateModel) {
    return state.selectedBookmark;
  }

  constructor(private _bookmarkApi: ApiService) {}

  @Action(GetBookmarks)
  getBookmarks({ getState, setState }: StateContext<BookmarkStateModel>) {
    return this._bookmarkApi.getItems().pipe(
      tap((result) => {
        const state = getState();
        setState({
          ...state,
          bookmarks: result,
        });
      })
    );
  }

  @Action(AddBookmark)
  addBookmark(
    { getState, patchState }: StateContext<BookmarkStateModel>,
    { payload }: AddBookmark
  ) {
    return of(payload).pipe(
      tap((result) => {
        const state = getState();
        patchState({
          bookmarks: [...state.bookmarks, result],
        });
      })
    );
  }

  @Action(UpdateBookmark)
  updateBookmark(
    { getState, setState }: StateContext<BookmarkStateModel>,
    { payload, id }: UpdateBookmark
  ) {
    return of({ payload, id }).pipe(
      tap((result) => {
        const state = getState();
        const BookmarkList = [...state.bookmarks];
        const BookmarkIndex = BookmarkList.findIndex((item) => item.id === id);
        BookmarkList[BookmarkIndex] = result.payload;
        setState({
          ...state,
          bookmarks: BookmarkList,
        });
      })
    );
  }

  @Action(DeleteBookmark)
  deleteBookmark(
    { getState, setState }: StateContext<BookmarkStateModel>,
    { id }: DeleteBookmark
  ) {
    return of(id).pipe(
      tap(() => {
        const state = getState();
        const filteredArray = state.bookmarks.filter((item) => item.id !== id);
        setState({
          ...state,
          bookmarks: filteredArray,
        });
      })
    );
  }

  @Action(SetSelectedBookmark)
  setSelectedBookmarkId(
    { getState, setState }: StateContext<BookmarkStateModel>,
    { payload }: SetSelectedBookmark
  ) {
    const state = getState();
    setState({
      ...state,
      selectedBookmark: payload,
    });
  }
}
