import { state, trigger, style, group, animate, transition } from '@angular/animations';

export const ANIMATIONS = {
  flyInOut: trigger('flyInOut', [
    state('in', style({
      width: 120,
      transform: 'translateX(0)', opacity: 1
    })),
    state('hovered', style({
      transform: 'scale3d(1.05, 1.05, 1.05)',
      backgroundColor: '#333',
      color: 'white'
    })),
    transition('void => *', [
      style({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
      group([
        animate('0.3s 0.1s ease', style({
          transform: 'translateX(0)',
          // width: 120
        })),
        animate('0.3s ease', style({
          opacity: 1
        }))
      ])
    ]),
    transition('* => void', [
      group([
        animate('0.3s ease', style({
          transform: 'translateX(50px)',
          // width: 10
        })),
        animate('0.3s 0.2s ease', style({
          opacity: 0
        }))
      ])
    ]),
    transition('active => hovered', [
      animate('0.3s 0s ease-out', style({
          transform: 'scale3d(1.05, 1.05, 1.05)',
          backgroundColor: '#333',
          color: 'white'
        }))
    ]),
    transition('hovered => active', [
      animate('0.3s 0s ease-out', style({
          transform: 'scale3d(1, 1, 1)',
          backgroundColor: 'white',
          color: 'rgb(51, 51, 51)'
        }))
    ]),
  ])
}
