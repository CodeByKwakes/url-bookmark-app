import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from '@phantom/util/storage';
import { Observable, of, Subject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const BOOKMARKS_STORAGE_KEY = 'bookmarks';
export interface Bookmark {
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
  private _alertErrorMessage = 'The url does not exist. Please try again';
  private _alert$$ = new Subject<string>();

  alertMessage$ = this._alert$$.asObservable();

  constructor(
    private _storageService: StorageService,
    private _http: HttpClient
  ) {}

  // GET list of web urls from local storage or default list
  getItems(): Observable<Bookmark[]> {
    const storage = this._storageService.getData(BOOKMARKS_STORAGE_KEY);
    let list: Bookmark[] = storage['bookmarks'];

    if (list === null) {
      list = [];
    }
    return of(list);
  }

  // Check if url is exists
  checkIfUrlExists(formUrl: string, id: number = null): Observable<any> {
    return this._http.get(`${this._baseUrl}${formUrl}`).pipe(
      map((response: any) => {
        const { url, image } = response;
        return {
          id,
          url,
          image,
        };
      }),
      catchError(this.handleError.bind(this))
    );
  }

  // // ADD a new url item to the list of bookmarks
  // addItemToStorage(item: Bookmark) {
  //   const itemsStored = this._storageService.getData(BOOKMARKS_STORAGE_KEY);
  //   let items = [];
  //   if (itemsStored !== null) {
  //     items = itemsStored;
  //   }
  //   items.push(item);
  //   this._storageService.setData(BOOKMARKS_STORAGE_KEY, items);
  // }

  // // DELETE web url from the list and local storage
  // deleteItemFromStorage(id: number) {
  //   const items: Bookmark[] = this._storageService.getData(
  //     BOOKMARKS_STORAGE_KEY
  //   );

  //   const saved = items.filter((item) => {
  //     return item.id !== id;
  //   });
  //   this._storageService.setData(BOOKMARKS_STORAGE_KEY, saved);
  // }

  // // UPDATE edited web url link
  // updateItemInStorage(item: Bookmark, changes: any) {
  //   const items: Bookmark[] = this._storageService.getData(
  //     BOOKMARKS_STORAGE_KEY
  //   );
  //   const index = items.findIndex((i) => i.id === item.id);
  //   const updatedItem = { ...item, ...changes };
  //   items[index] = updatedItem;
  //   this._storageService.setData(BOOKMARKS_STORAGE_KEY, items);
  // }

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
    this._alert$$.next(this._alertErrorMessage);
    return throwError(errorMessage);
  }

  // set the alert message of the app
  setAlertMessage(message: string | null = null) {
    this._alert$$.next(message);
  }
}
