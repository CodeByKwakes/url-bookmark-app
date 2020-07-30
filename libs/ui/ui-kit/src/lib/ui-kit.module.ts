import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkCardComponent } from './components/bookmark-card/bookmark-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BookmarkCardComponent],
  exports: [BookmarkCardComponent],
})
export class UiKitModule {}
