import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LanguageService } from '../services/language/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', 'contact-mobile.component.scss']
})
export class ContactComponent {

  constructor(public languageService : LanguageService) {

  }

  hover: boolean = false;
  boxHover: boolean = false;
  marked: boolean = false;
  clicked: boolean = false;
  http = inject(HttpClient);
  router = inject(Router);

  contactData = {
    name: '',
    email: '',
    message: '',
  }

  errorMsg = {
    name: {
      clicked: false,
      messageEn: 'Your name is required',
      messageDe: 'Ihr Name ist erforderlich',
      fieldEn: 'Your name',
      fieldDe: 'Ihr Name',
      placeholderEn: 'Your name',
      placeholderDe: 'Ihr Name'
    },
    email: {
      clicked: false,
      messageEn: 'Your email is required',
      messageDe: 'Ihre E-Mail ist erforderlich',
      fieldEn: 'Your email',
      fieldDe: 'Ihre E-Mail',
      placeholderEn: 'Your email',
      placeholderDe: 'Ihre E-Mail'
    },
    message: {
      clicked: false,
      messageEn: 'Your message is empty',
      messageDe: 'Ihre Nachricht ist leer',
      fieldEn: 'Your message',
      fieldDe: 'Ihre Nachricht',
      placeholderEn: 'Your message',
      placeholderDe: 'Ihre Nachricht'
    },
    checkbox: {
      clicked: false,
      messageEn: 'Please accept the privacy policy',
      messageDe: 'Bitte akzeptieren Sie die Datenschutzerklärung'
    }
  };

  emptyPlaceholder: string = '';

  errorSymbol: string = 'assets/img/error.svg';
  doneSymbol: string = 'assets/img/done.svg';

  mailTest = false;

  post = {
    endPoint: 'https://pirathib-mahalingam.ch/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    // if(!ngForm.form.valid) {

    //   this.checked('name');
    //   this.checked('email');
    //   this.checked('message');
    // }
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest && this.marked) {

      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
        // this.router.navigate(['/mail']);
        this.openNewTab();
        this.marked = !this.marked;
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.marked = !this.marked;
      ngForm.resetForm();
    } else {
      this.checked('name');
      this.checked('email');
      this.checked('message');
      this.proofCheckbox();
    }
  }


  openNewTab() {
    window.open('https://www.pirathib-mahalingam.ch/mail', '_blank');
  }

  proofCheckbox() {
    this.errorMsg.checkbox.clicked = true;
  }

  checked(id: string) {
    if (id == 'checkbox') {
      this.errorMsg.checkbox.clicked = true;
      this.marked = !this.marked;
    }
    if (id == 'name') {
      this.errorMsg.name.clicked = true;
      this.errorMsg.name.fieldEn = this.emptyPlaceholder;
      this.errorMsg.name.fieldDe = this.emptyPlaceholder;
    }
    if (id == 'email') {
      this.errorMsg.email.clicked = true;
      this.errorMsg.email.fieldEn = this.emptyPlaceholder;
      this.errorMsg.email.fieldDe = this.emptyPlaceholder;
    }
    if (id == 'message') {
      this.errorMsg.message.clicked = true;
      this.errorMsg.message.fieldEn = this.emptyPlaceholder;
      this.errorMsg.message.fieldDe = this.emptyPlaceholder;
    }
  }
}