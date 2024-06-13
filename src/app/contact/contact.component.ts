import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  constructor() {
    console.log(this.clicked)
  }

  hover: boolean = false;
  boxHover: boolean = false;
  marked: boolean = false;
  clicked: boolean = false;
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
  }

  errorMsg = {
    name: {
      clicked: false,
      message: 'Your name is required',
      field: 'Your name',
      placeholder: 'Your name',
    },
    email: {
      clicked: false,
      message: 'Your email is required'
    },
    message: {
      clicked: false,
      message: 'Your message is empty'
    },
    checkbox: {
      clicked: false,
      message: 'Please accept the privacy policy'
    }
  };

  emptyPlaceholder: string = '';

  errorSymbol: string = 'assets/img/error.svg';
  doneSymbol: string = 'assets/img/done.svg';

  mailTest = false;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
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
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }

  checked(id: string) {
    this.marked = !this.marked;

    if(id == 'checkbox') {
      this.errorMsg.checkbox.clicked = true;
    }
    if(id == 'name') {
      this.errorMsg.name.clicked = true;
      this.errorMsg.name.field = this.emptyPlaceholder;
    }
  }
}