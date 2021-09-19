import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DramaComponent } from './drama/drama.component';
import { SciFictionComponent } from './sci-fiction/sci-fiction.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactUsComponent,
    PagenotfoundComponent,
    DramaComponent,
    SciFictionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
