import { Component } from '@angular/core';

interface UserData {
  userName: string;
  userCount: number;
  userImage: string;
  persentIcon: boolean;
  persent: number;
  longText: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  userData: UserData[] = [
    {
      userName: 'Total User',
      userCount: 462,
      userImage: 'userData.svg',
      persentIcon: true,
      persent:3.5,
      longText: 'Up from yesterday'
    },
    {
      userName: 'Present',
      userCount: 402,
      userImage: 'present.svg',
      persentIcon: true,
      persent: 1.3,
      longText: 'Up from pas week'
    },
    {
      userName: 'Absent',
      userCount: 60,
      userImage: 'absent.svg',
      persentIcon: false,
      persent: 4.3,
      longText: 'Down from yesterday'
    },
    {
      userName: 'Active',
      userCount: 2040,
      userImage: 'active.svg',
      persentIcon: true,
      persent: 1.8,
      longText: 'Up from yesterday'
    },
    {
      userName: 'Idle',
      userCount: 2030,
      userImage: 'idle.svg',
      persentIcon: true,
      persent: 1.8,
      longText: 'Up from yesterday'
    },
  ];
}
