import {Component, OnInit} from '@angular/core';
import {User} from "../model/user";
import {privateDecrypt} from "node:crypto";
import {UserServiceService} from "../service/user-service.service";

@Component({
  selector: 'app-user-component',
  standalone: true,
  imports: [],
  templateUrl: './user-component.component.html',
  styleUrl: './user-component.component.css'
})
export class UserComponentComponent implements OnInit {
  Getusers: User[] = [];

  ngOnInit(): void {
  }

  constructor(private userService: UserServiceService) {
  }


  Getusers(): void {
    this.userService.ListUser().subscribe((data: User[]) => {
      this.Getusers = data;

    })
  }


}
