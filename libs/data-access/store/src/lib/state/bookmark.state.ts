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

const idGenerator = () => '_' + Math.random().toString(36).substr(2, 9);
export class BookmarkStateModel {
  list: Bookmark[];
  selectedBookmark: Bookmark;
}

@State<BookmarkStateModel>({
  name: 'bookmarks',
  defaults: {
    list: [],
    selectedBookmark: null,
  },
})
@Injectable()
export class BookmarkState {
  @Selector()
  static getBookmarkList(state: BookmarkStateModel) {
    return state.list;
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
          list: result,
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
        const id = idGenerator();
        const item = {
          ...result,
          id,
        };
        patchState({
          list: [...state.list, item],
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
        const BookmarkList = [...state.list];
        const BookmarkIndex = BookmarkList.findIndex((item) => item.id === id);
        const updateItem = {
          ...result,
          id,
        };
        BookmarkList[BookmarkIndex] = updateItem;

        setState({
          ...state,
          list: BookmarkList,
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
        const filteredArray = state.list.filter((item) => item.id !== id);
        setState({
          ...state,
          list: filteredArray,
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
