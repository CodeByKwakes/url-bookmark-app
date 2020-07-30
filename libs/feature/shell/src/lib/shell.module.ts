import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OverviewPage } from './pages/overview/overview.page';
import { ResultPage } from './pages/result/result.page';

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
      },
      {
        path: 'result',
        component: ResultPage,
      },
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
  declarations: [OverviewPage, ResultPage],
})
export class ShellModule {}
