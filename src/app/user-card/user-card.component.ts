import { Component, Input } from '@angular/core';

interface UserData {
  userName: string;
  userCount: number;
  userImage: string;
  persentIcon: boolean;
  persent: number;
  longText: string;
}

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() userData: UserData[];
}
