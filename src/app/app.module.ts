import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AwesomePipe } from './contact/awesome.pipe';
import { ContactComponent } from './contact/contact.component';
import { ContactService } from './contact/contact.service';
import { ContactHighlightDirective } from './contact/contact-highlight.directive';
import { HighlightDirective } from './highlight.directive';
import { TitleComponent } from './title.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    TitleComponent,

    AwesomePipe,
    ContactComponent,
    ContactHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ContactService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
