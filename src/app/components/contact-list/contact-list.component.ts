import { Component, OnInit } from '@angular/core';
import { ContactsService } from "../../core/services/contacts.service";
import { IContact } from "../../core/models/contact.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts: Array<IContact> = [];

  constructor(
    private router: Router,
    private contactsService: ContactsService,
  ) { }

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts() {
    this.contactsService.getContacts()
      .subscribe(resp => {
        this.contacts = resp;
        this.router.navigate(['/contact-detail/' + resp[0].id]);
      })
  }


}
