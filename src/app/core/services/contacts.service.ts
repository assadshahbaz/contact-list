import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IContact } from "../../core/models/contact.model";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  baseURL = "https://611f7adf9771bf001785c987.mockapi.io/";

  constructor(
    private http: HttpClient
  ) { }

  getContacts() {
    return this.http.get<Array<IContact>>(`${this.baseURL}contacts`);
  }

  getContactsByID(id: number) {
    return this.http.get<IContact>(`${this.baseURL}contacts/${id}`);
  }

}
