import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationsService } from '../services/notifications.service';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-notifications-manager',
  templateUrl: './notifications-manager.component.html',
  styleUrls: ['./notifications-manager.component.scss']
})
export class NotificationsManagerComponent implements OnInit {
  notificationsCount$: Observable<number>
  constructor(private notificationsService: NotificationsService) {

  }

  ngOnInit(): void {
    this.notificationsCount$ = this.notificationsService.count$
  }

  addNotification() {
    this.getCountValue((countVal) => {
    this.notificationsService.setCount(++countVal)
    });
  }

  removeNotification() {
    //if (this.notificationsCount == 0) {
    //  return;
    //}
    //this.notificationsCount--;
  }

  resetCount() {
    //this.notificationsCount = 0;
  }
  getCountValue(callback){
    this.notificationsCount$.pipe(first()).subscribe(callback)
  }


}
