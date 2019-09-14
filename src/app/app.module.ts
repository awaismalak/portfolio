import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { FontAwesomeModule, FaIconLibrary, FaConfig } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { SharedService } from '../app/shared/services/shared.service';
// import { far } from '@fortawesome/free-regular-svg-icons';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { FocopyRightComponent } from './focopy-right/focopy-right.component';
import { DialogComponent } from './shared/components/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    FocopyRightComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { 


  constructor(library: FaIconLibrary, faConfig: FaConfig) {
    library.addIconPacks(fas, fab);
    faConfig.defaultPrefix = 'fab';
    // library.addIcons(faTwitter, faFacebook)
  }
}
