import { Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { HomeComponent } from './home/home.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { MailComponent } from './mail/mail.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'imprint', component: ImprintComponent},
    { path: 'privacy', component: PrivacyPolicyComponent},
    { path: 'mail', component: MailComponent},
];
