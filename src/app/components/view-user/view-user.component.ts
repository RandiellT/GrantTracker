//Taken from Jensen (2018)
//Taken from Angular (n.d.)
//Standard file convention when a component is generated for a no standlone component

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

}
