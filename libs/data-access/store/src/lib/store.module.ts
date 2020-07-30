import { NgModule } from '@angular/core';
import { ApiModule } from '@phantom/bookmark-api';
import { NgxsModule } from '@ngxs/store';
import { BookmarkState } from './state/bookmark.state';

@NgModule({
  imports: [ApiModule, NgxsModule.forFeature([BookmarkState])],
  exports: [NgxsModule],
})
export class StoreModule {}
