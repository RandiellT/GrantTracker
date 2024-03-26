//importing the users 
import { Users } from "./user";

//exporting the interface for the login model

export interface Login{
    _id?: string;
    userType: string;
    username: string;
    password: string;
    users: Users[];
}