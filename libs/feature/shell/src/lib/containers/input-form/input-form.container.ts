import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { ApiService, Bookmark } from '@phantom/bookmark-api';
import {
  AddBookmark,
  BookmarkState,
  SetSelectedBookmark,
  UpdateBookmark,
} from '@phantom/bookmark-store';
import { combineLatest, Observable, Subject } from 'rxjs';
import { distinctUntilChanged, map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'phantom-tech-test-input-form',
  templateUrl: './input-form.container.html',
  styleUrls: ['./input-form.container.scss'],
})
export class InputFormContainer implements OnInit, OnDestroy {
  @Select(BookmarkState.getSelectedBookmark)
  selectedbookmark$: Observable<Bookmark>;

  private _destory$$ = new Subject();
  private _updateAlertMessage$$ = new Subject<string>();

  alertMessageVM$ = combineLatest([
    this.bookmarkApi.alertMessage$.pipe(distinctUntilChanged()),
    this._updateAlertMessage$$.asObservable().pipe(distinctUntilChanged()),
  ]).pipe(
    map(([error, update]) => ({ error, update })),
    distinctUntilChanged()
  );

  bookmarkForm: FormGroup;
  isBookmarkEdit = false;

  get formUrl() {
    return this.bookmarkForm.get('url');
  }

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private bookmarkApi: ApiService,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.clearForm();
    this.selectedbookmark$
      .pipe(takeUntil(this._destory$$))
      .subscribe((bookmark) => {
        if (bookmark) {
          this.bookmarkForm.patchValue({
            url: bookmark.url,
            id: bookmark.id,
            image: bookmark.image,
          });
          this.isBookmarkEdit = true;
        } else {
          this.isBookmarkEdit = false;
        }
      });
  }

  ngOnDestroy(): void {
    this._destory$$.next();
    this._destory$$.complete();
  }

  onSubmit() {
    if (this.isBookmarkEdit) {
      this.store
        .dispatch(
          new UpdateBookmark(
            this.bookmarkForm.value.url,
            this.bookmarkForm.value.id
          )
        )
        .pipe(takeUntil(this._destory$$))
        .subscribe(() => {
          const { id, url } = this.bookmarkForm.value;
          console.log(id, url);
          this.clearForm();
          this._updateAlertMessage$$.next(`ID: ${id} - ${url}`);
          setTimeout(() => {
            this._updateAlertMessage$$.next(null);
          }, 3000);
        });
    } else {
      this.store
        .dispatch(new AddBookmark(this.bookmarkForm.value.url))
        .pipe(takeUntil(this._destory$$))
        .subscribe(() => {
          this.onCloseAlertMessage();
          this.router.navigate(['result']);
        });
    }
  }

  clearForm() {
    this.bookmarkForm.reset();
    this.onCloseAlertMessage();
    this.store.dispatch(new SetSelectedBookmark(null));
  }

  onCloseAlertMessage() {
    this._updateAlertMessage$$.next(null);
    this.bookmarkApi.setAlertMessage(null);
  }

  private createForm() {
    const urlRegex = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    this.bookmarkForm = this.fb.group({
      url: ['', [Validators.required, Validators.pattern(urlRegex)]],
      id: [''],
      image: [''],
    });
  }
}
