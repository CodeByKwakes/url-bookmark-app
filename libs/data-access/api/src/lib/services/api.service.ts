import { Injectable } from '@angular/core';
import { StorageService } from '@phantom/util/storage';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

const BOOKMARKS_STORAGE_KEY = 'bookmark_list';
export interface BookmarkItem {
  id: number;
  url: string;
  image?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _baseUrl =
    'https://api.linkpreview.net/?key=44f1419ca66071d034e5fd027f9d3173&q=';
  private _errorSubject$ = new Subject<string>();

  errorMessage$ = this._errorSubject$.asObservable();

  constructor(
    private _storageService: StorageService,
    private _http: HttpClient
  ) {}

  // GET list of web urls from local storage or default list
  getItems(): BookmarkItem[] {
    let list: BookmarkItem[] = this._storageService.getData(
      BOOKMARKS_STORAGE_KEY
    );
    if (list === null) {
      list = [];
    }
    return list;
  }

  // ADD a new url item to the list of bookmarks
  addItem(item: BookmarkItem) {
    const itemsStored = this._storageService.getData(BOOKMARKS_STORAGE_KEY);
    let items = [];
    if (itemsStored !== null) {
      items = itemsStored;
    }
    items.push(item);
    this._storageService.setData(BOOKMARKS_STORAGE_KEY, items);
  }

  // DELETE web url from the list and local storage
  deleteItem(id: number) {
    const items: BookmarkItem[] = this._storageService.getData(
      BOOKMARKS_STORAGE_KEY
    );

    const saved = items.filter((item) => {
      return item.id !== id;
    });
    this._storageService.setData(BOOKMARKS_STORAGE_KEY, saved);
  }

  // UPDATE edited web url link
  updateItem(item: BookmarkItem, changes: any) {
    const items: BookmarkItem[] = this._storageService.getData(
      BOOKMARKS_STORAGE_KEY
    );
    const index = items.findIndex((i) => i.id === item.id);
    const updatedItem = { ...item, ...changes };
    items[index] = updatedItem;
    this._storageService.setData(BOOKMARKS_STORAGE_KEY, items);
  }

  // Check if url is exists
  checkIfUrlExists(url: string): Observable<any> {
    return this._http.get(`${this._baseUrl}${url}`).pipe(
      tap((data) => console.log('checkIfUrlExists', data)),
      catchError(this.handleError)
    );
  }

  // handele the errors from any http call made
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  // set the alert message of the app
  setAlertMessage(message: string | null = null) {
    this._errorSubject$.next(message);
  }
}
