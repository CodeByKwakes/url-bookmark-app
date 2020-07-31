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
  /**
   * @description
   * @author Kwakes Prempeh
   * @static
   * @param {BookmarkStateModel} state
   * @returns
   * @memberof BookmarkState
   */
  @Selector()
  static getBookmarkList(state: BookmarkStateModel) {
    return state.list;
  }

  /**
   * @description
   * @author Kwakes Prempeh
   * @static
   * @param {BookmarkStateModel} state
   * @returns
   * @memberof BookmarkState
   */
  @Selector()
  static getSelectedBookmark(state: BookmarkStateModel) {
    return state.selectedBookmark;
  }

  constructor(private _bookmarkApi: ApiService) {}

  /**
   * @description
   * @author Kwakes Prempeh
   * @param {StateContext<BookmarkStateModel>} { getState, setState }
   * @returns
   * @memberof BookmarkState
   */
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

  /**
   * @description
   * @author Kwakes Prempeh
   * @param {StateContext<BookmarkStateModel>} { getState, patchState, dispatch }
   * @param {AddBookmark} { url }
   * @returns
   * @memberof BookmarkState
   */
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

  /**
   * @description
   * @author Kwakes Prempeh
   * @param {StateContext<BookmarkStateModel>} { getState, setState }
   * @param {UpdateBookmark} { url, id }
   * @returns
   * @memberof BookmarkState
   */
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

  /**
   * @description
   * @author Kwakes Prempeh
   * @param {StateContext<BookmarkStateModel>} { getState, setState }
   * @param {DeleteBookmark} { id }
   * @returns
   * @memberof BookmarkState
   */
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

  /**
   * @description
   * @author Kwakes Prempeh
   * @param {StateContext<BookmarkStateModel>} { getState, setState }
   * @param {SetSelectedBookmark} { payload }
   * @memberof BookmarkState
   */
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
