import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OverviewPage } from './pages/overview/overview.page';
import { ResultPage } from './pages/result/result.page';
import { InputFormContainer } from './containers/input-form/input-form.container';
import { StoreModule } from '@phantom/bookmark-store';
import { ReactiveFormsModule } from '@angular/forms';
import { JwPaginationModule } from 'jw-angular-pagination';
import { NgxsModule } from '@ngxs/store';
import { BookmarkListContainer } from './containers/bookmark-list/bookmark-list.container';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    // BrowserAnimationsModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full',
      },
      {
        path: 'overview',
        component: OverviewPage,
        data: { animation: 'overview' },
      },
      {
        path: 'result',
        component: ResultPage,
        data: { animation: 'result' },
      },
    ]),
    NgxsModule,
    StoreModule,
    ReactiveFormsModule,
    JwPaginationModule,
  ],
  declarations: [
    OverviewPage,
    ResultPage,
    InputFormContainer,
    BookmarkListContainer,
  ],
})
export class ShellModule {}
