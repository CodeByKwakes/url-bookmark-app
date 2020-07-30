import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { StoreModule } from '@phantom/bookmark-store';
import { JwPaginationModule } from 'jw-angular-pagination';
import { BookmarkListContainer } from './containers/bookmark-list/bookmark-list.container';
import { InputFormContainer } from './containers/input-form/input-form.container';
import { OverviewPage } from './pages/overview/overview.page';
import { ResultPage } from './pages/result/result.page';
import { UiKitModule } from '@phantom/ui-kit';
@NgModule({
  imports: [
    CommonModule,
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
    UiKitModule,
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
