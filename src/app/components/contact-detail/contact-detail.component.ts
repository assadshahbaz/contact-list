import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContact } from 'src/app/core/models/contact.model';
import { ContactsService } from 'src/app/core/services/contacts.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  contact_detail: IContact;

  constructor(
    private contactsService: ContactsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(id => {
      this.getContactsByID(+id.id);
    });
  }


  getContactsByID(id: number) {
    this.contactsService.getContactsByID(id)
      .subscribe(resp => {
        this.contact_detail = resp
      })
  }

}
