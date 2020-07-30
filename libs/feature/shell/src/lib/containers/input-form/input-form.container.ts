import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, Select } from '@ngxs/store';
import {
  BookmarkState,
  SetSelectedBookmark,
  UpdateBookmark,
  AddBookmark,
} from '@phantom/bookmark-store';
import { Observable, Subject } from 'rxjs';
import { Bookmark, ApiService } from '@phantom/bookmark-api';
import { takeUntil } from 'rxjs/operators';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ph-input-form',
  templateUrl: './input-form.container.html',
  styleUrls: ['./input-form.container.scss'],
})
export class InputFormContainer implements OnInit, OnDestroy {
  @Select(BookmarkState.getSelectedBookmark) selectedbookmark: Observable<
    Bookmark
  >;

  alertMessage$ = this.bookmarkApi.alertMessage$;
  bookmarkForm: FormGroup;
  editbookmark = false;
  private destory$$ = new Subject();

  get formUrl() {
    return this.bookmarkForm.get('url');
  }

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private bookmarkApi: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.clearForm();
    this.selectedbookmark
      .pipe(takeUntil(this.destory$$))
      .subscribe((bookmark) => {
        if (bookmark) {
          this.bookmarkForm.patchValue({
            url: bookmark.url,
            id: bookmark.id,
            image: bookmark.image,
          });
          this.editbookmark = true;
        } else {
          this.editbookmark = false;
        }
      });
  }

  ngOnDestroy(): void {
    this.destory$$.next();
    this.destory$$.complete();
  }

  onSubmit() {
    if (this.editbookmark) {
      this.store
        .dispatch(
          new UpdateBookmark(
            this.bookmarkForm.value.url,
            this.bookmarkForm.value.id
          )
        )
        .pipe(takeUntil(this.destory$$))
        .subscribe(() => {
          this.clearForm();
        });
    } else {
      this.store
        .dispatch(new AddBookmark(this.bookmarkForm.value.url))
        .pipe(takeUntil(this.destory$$))
        .subscribe(() => this.router.navigate(['result']));
    }
  }

  clearForm() {
    this.bookmarkForm.reset();
    this.store.dispatch(new SetSelectedBookmark(null));
  }

  onCloseAlertMessage() {
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
