import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Users } from '../../models/user';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.css'
})
export class ViewUserComponent {
    
    private user: Users[] = [];
    private loginUser!: Users;

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.loadUsers();
    }

    public loadUsers() {
        this.userService.getAllUsers().subscribe(res => {
            this.user = res;
        });
    }

    public loginThisUser(user: Users) {
        this.loginUser = user;
    }

    // public onAddUser(newUsers!) {
    //     this.user = this.user.concat(newUsers!);
    // }

}