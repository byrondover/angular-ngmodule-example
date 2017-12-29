import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactService } from './contact.service';

@NgModule({
  imports: [
    SharedModule,
    ContactRoutingModule
  ],
  declarations: [
    ContactComponent
  ],
  providers: [ ContactService ]
})
export class ContactModule { }
