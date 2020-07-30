import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'phantom-tech-test-bookmark-card',
  templateUrl: './bookmark-card.component.html',
  styleUrls: ['./bookmark-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookmarkCardComponent {
  @Input() item: any;
  @Input() isEven: boolean;

  @Output() editItemChange = new EventEmitter();
  @Output() deleteItemChange = new EventEmitter();
}
