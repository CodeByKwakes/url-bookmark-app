import { Component, OnInit } from '@angular/core';
import { BookmarkState } from '@phantom/bookmark-store';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Bookmark } from '@phantom/bookmark-api';
import { Router } from '@angular/router';

@Component({
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {
  @Select(BookmarkState.getSelectedBookmark) bookmark$: Observable<Bookmark>;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onRouteToOverview() {
    this.router.navigate(['overview']);
  }
}
