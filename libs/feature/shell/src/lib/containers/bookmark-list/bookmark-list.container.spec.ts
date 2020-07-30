import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkListContainer } from './bookmark-list.container';

describe('BookmarkListContainer', () => {
  let component: BookmarkListContainer;
  let fixture: ComponentFixture<BookmarkListContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkListContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkListContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
