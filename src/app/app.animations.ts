import { trigger, state, style, transition, animate } from '@angular/core';

export const SlideAnimation = trigger(
  'slideItIn', [
    transition(':enter', [
      style({ width: '0%', opacity: '1' }),
      animate('300ms', style({width: '70%', opacity: '1' }))
    ]),
    transition(':leave', [
      style({ width: '100%' }),
      animate('300ms', style({width: '0px' , opacity: '0' }))
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
      animate('300ms', style({ opacity: '0' }))
    ])
  ]
);
