import {
  transition,
  trigger,
  query,
  style,
  stagger,
  animate,
} from '@angular/animations';

export const fadeInGrowAnimation = trigger('fadeInGrow', [
  transition(':enter', [
    query(':enter', [
      style({ opacity: 0 }),
      stagger('50ms', [animate('500ms', style({ opacity: 1 }))]),
    ]),
  ]),
]);
