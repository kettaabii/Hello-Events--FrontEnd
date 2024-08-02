import {Component, OnInit} from '@angular/core';
import {User} from "../model/user";
import {UserServiceService} from "../service/user-service.service";
import {ContactServiceService} from "../service/contact-service.service";
import {Contact} from "../model/contact";
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-contact-component',
  standalone: true,
  imports: [NgFor],
  templateUrl: './contact-component.component.html',
  styleUrl: './contact-component.component.css'
})
export class ContactComponentComponent implements OnInit{

  GetContacts: Contact[] = [];

  ngOnInit(): void {
    this.ListContacts()


  }


  constructor(private contactService: ContactServiceService) {
  }


  ListContacts(): void {
    this.contactService.showAllMessages().subscribe((data: Contact[]) => {
      this.GetContacts = data;

    })
  }


}
