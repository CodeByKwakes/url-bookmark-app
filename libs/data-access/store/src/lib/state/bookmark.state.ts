import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ApiService, Bookmark } from '@phantom/bookmark-api';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import {
  AddBookmark,
  DeleteBookmark,
  GetBookmarks,
  SetSelectedBookmark,
  UpdateBookmark,
} from './bookmark.actions';

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
    { getState, patchState, dispatch }: StateContext<BookmarkStateModel>,
    { url }: AddBookmark
  ) {
    return this._bookmarkApi.checkIfUrlExists(url).pipe(
      tap((result) => {
        const state = getState();
        const id = state.bookmarks.length + 1;
        const item = {
          ...result,
          id,
        };
        patchState({
          bookmarks: [...state.bookmarks, item],
        });
        dispatch(new SetSelectedBookmark(item));
      })
    );
  }

  @Action(UpdateBookmark)
  updateBookmark(
    { getState, setState }: StateContext<BookmarkStateModel>,
    { url, id }: UpdateBookmark
  ) {
    return this._bookmarkApi.checkIfUrlExists(url).pipe(
      tap((result) => {
        const state = getState();
        const BookmarkList = [...state.bookmarks];
        const BookmarkIndex = BookmarkList.findIndex((item) => item.id === id);
        const updateItem = {
          ...result,
          id,
        };
        BookmarkList[BookmarkIndex] = updateItem;

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
