import {Component, OnInit} from '@angular/core';
import {User} from "../model/user";
import {privateDecrypt} from "node:crypto";
import {UserServiceService} from "../service/user-service.service";
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-user-component',
  standalone: true,
  imports: [NgFor],
  templateUrl: './user-component.component.html',
  styleUrl: './user-component.component.css'
})
export class UserComponentComponent implements OnInit {
  Getusers: User[] = [];

  ngOnInit(): void {
    this.ListUsers()


  }


  constructor(private userService: UserServiceService) {
  }


  ListUsers(): void {
    this.userService.ListUser().subscribe((data: User[]) => {
      this.Getusers = data;

    })
  }

  deleteUser(userId: number): void {
    this.userService.DeleteUser(userId).subscribe(
      response => {
        console.log('User deleted successfully', response);
        this.Getusers = this.Getusers.filter(user => user.userId !== userId);
      },
      error => {
        console.error('There was an error!', error);
      }
    );
  }
}
