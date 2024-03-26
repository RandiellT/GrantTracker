import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Users } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent implements OnInit{

    @Output() addUsers: EventEmitter<Users> = new EventEmitter<Users>();

    private newUsers!: Users;

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.newUsers = {
        _id: '',
        userType: '',
        username: '',
        password: '',
        orgName: '',
        email: '',
        registerDate: ''
        };
    }

    public onSubmit() {
        this.userService.addUser(this.newUsers).subscribe(res => {
        this.addUsers.emit(res);
        });
    }
}


