import { trigger, state, style, transition, animate } from '@angular/core';

export const SlideAnimation = trigger(
  'slide', [
    transition(':enter', [
      style({ width: '0%', opacity: '1' }),
      animate('300ms', style({width: '250px', opacity: '1' }))
    ]),
    transition(':leave', [
      style({ width: '250px', opacity: '1'  }),
      animate('300ms', style({width: '0px' , opacity: '1' }))
    ])
  ]
);

export const FadeAnimation = trigger(
  'fade', [
    transition(':enter', [
      style({ opacity: '0' }),
      animate('300ms', style({ opacity: '1' }))
    ]),
    transition(':leave', [
      style({ opacity: '1' }),
      animate('50ms', style({ opacity: '0' }))
    ])
  ]
);
