import { Component } from '@angular/core';

interface User {
  userName: string;
  userImage: string;
}


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users: User[] = [
    { userName: 'John Doe', userImage: 'user1.svg' },
    { userName: 'Jane Smith', userImage: 'user2.svg' },
    { userName: 'Alice Johnson', userImage: 'user3.svg' },
    { userName: 'John Doe', userImage: 'user1.svg' },
    { userName: 'Jane Smith', userImage: 'user2.svg' },
    { userName: 'Alice Johnson', userImage: 'user3.svg' },
    { userName: 'John Doe', userImage: 'user1.svg' },
    { userName: 'Jane Smith', userImage: 'user2.svg' },
    { userName: 'Alice Johnson', userImage: 'user3.svg' },
    { userName: 'John Doe', userImage: 'user1.svg' },
    { userName: 'Jane Smith', userImage: 'user2.svg' },
    { userName: 'Alice Johnson', userImage: 'user3.svg' },
  ];
}
