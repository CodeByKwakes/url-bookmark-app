import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from '@phantom/util/storage';
import { Observable, of, Subject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  BOOKMARKS_STORAGE_KEY,
  ERROR_ALERT_MESSAGE,
  URL_CHECK_BASE,
  NO_IMAGE_PLACEHOLDER,
} from '../config/constant';
import { Bookmark } from '../model/bookmark.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  /**
   * @description baseurl for checking if url exists
   * @private
   * @memberof ApiService
   */
  private _baseUrl = URL_CHECK_BASE;
  /**
   * @description message for if the url does not exist
   * @private
   * @memberof ApiService
   */
  private _alertErrorMessage = ERROR_ALERT_MESSAGE;
  /**
   * @description subject used to pass alert message on error
   * @private
   * @type {Subject<string>}
   * @memberof ApiService
   */
  private _alert$$: Subject<string> = new Subject<string>();
  /**
   * @description alert message observable
   * @type {Observable<string>}
   * @memberof ApiService
   */
  alertMessage$: Observable<string> = this._alert$$.asObservable();

  constructor(
    private _storageService: StorageService,
    private _http: HttpClient
  ) {}

  /**
   * @description GET list of web urls from local storage or default list
   * @author Kwakes Prempeh
   * @returns {Observable<Bookmark[]>}
   * @memberof ApiService
   */
  getItems(): Observable<Bookmark[]> {
    const storage = this._storageService.getData(BOOKMARKS_STORAGE_KEY);
    let list: Bookmark[] = storage[BOOKMARKS_STORAGE_KEY];

    if (list === null) {
      list = [];
    }
    return of(list);
  }

  /**
   * @description Check if url is exists
   * @author Kwakes Prempeh
   * @param {string} formUrl
   * @param {number} [id=null]
   * @returns {Observable<Bookmark>}
   * @memberof ApiService
   */
  checkIfUrlExists(formUrl: string, id: number = null): Observable<Bookmark> {
    return this._http.get<any>(`${this._baseUrl}${formUrl}`).pipe(
      map(({ url, image }) => {
        image = image ? image : NO_IMAGE_PLACEHOLDER;
        return {
          id,
          url,
          image,
        };
      }),
      catchError(this.handleError.bind(this))
    );
  }

  /**
   * @description set the alert message of the app
   * @author Kwakes Prempeh
   * @param {(string | null)} [message=null]
   * @memberof ApiService
   */
  setAlertMessage(message: string | null = null) {
    this._alert$$.next(message);
  }

  /**
   * @description handele the errors from any http call made
   * @author Kwakes Prempeh
   * @private
   * @param {*} error
   * @returns {Observable<never>}
   * @memberof ApiService
   */
  private handleError(error: any): Observable<never> {
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
}
