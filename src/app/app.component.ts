import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//my try
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
//my try

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-learnings';
  /*my tyr*/
  title1 = 'angular-learnings1';
  title2 = 'angular-learnings2';
  title3 = 'angular-learnings3';
  title4 = 'angular-learnings4';
  title5 = 'angular-learnings5';

  users = DUMMY_USERS;
  selectUserId = 'u1';

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectUserId)!;
  }

  onSelectUser(id: string) {
    //console.log('Selected used with id '+ id);

    this.selectUserId = id;
  }
  /*my try*/
}
