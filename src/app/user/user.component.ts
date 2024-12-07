import { Component, Input, input, Output, EventEmitter, output } from '@angular/core';
//import { EventEmitter } from 'stream';

interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  
  @Input({required: true}) user!: User; 
  @Output() select =new EventEmitter();

  //select = output<string>();

  /*avatar = input.required<string>();
  name = input.required<string>();*/

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

    /*imagePath = computed(() => {
      return 'assets/users/'+this.avatar();
    })*/

  onSelectUser() {
      this.select.emit(this.user.id);
  }

}
