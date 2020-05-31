import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { Contacts, Contact, ContactName, ContactField } from '@ionic-native/contacts/ngx';
import { ToastController } from '@ionic/angular';
import { async } from '@angular/core/testing';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  myContacts: Contact[] = [];

  constructor(private contacts: Contacts, private callNumber: CallNumber, private sms: SMS, private toastCtrl: ToastController) {}

  loadContacts(){
    let options = {
      filter: '',
      multiple: true,
      hasPhoneNumber: true
    };
    this.contacts.find(['*'], options).then((contacts: Contact[]) => {
      this.myContacts = contacts;
      console.log('Contacts: ', contacts);
      
    })
  }

  sendSms(contact: Contact) {
    this.sms.send(contact.phoneNumbers[ 0 ].value, 'c mon msg');
  }

  call(Contact: Contact) {
    this.callNumber.callNumber(Contact.phoneNumbers[ 0 ].value, true);
  }

  createContact(){
    let contact: Contact = this.contacts.create();

    contact.name = new ContactName(null, 'Zeze', 'Bosse');
    contact.phoneNumbers = [ new ContactField('mobile', '0634567890') ];
    contact.save().then(
      async () => {
        let toast = await this.toastCtrl.create({
          message: 'Contact ajouté.'
        });
        toast.present();
      },
      (error: any) => console.error('La sauvegarde du contact a échoué.', error)
    );
  }
  ngOnInit() {}

}
