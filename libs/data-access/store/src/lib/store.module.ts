import { NgModule } from '@angular/core';
import { ApiModule } from '@phantom/bookmark-api';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  imports: [ApiModule, NgxsModule.forFeature()],
  exports: [NgxsModule],
})
export class StoreModule {}
