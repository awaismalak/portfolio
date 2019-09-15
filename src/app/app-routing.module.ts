import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from '../../src/app/portfolio/portfolio.component';
import {AboutComponent} from '../app/about/about.component';
import { ContactComponent } from '../app/contact/contact.component';
import { ContentComponent } from '../app/content/content.component';
import { DialogComponent } from '../app/shared/components/dialog/dialog.component';
import { from } from 'rxjs';


const routes: Routes = [
  {path:'', component: ContentComponent},
  {path:'portfolio', component: PortfolioComponent},
  {path:'portfolio/:index', component: PortfolioComponent},
  {path:'about', component: AboutComponent } ,
  {path:'contact', component: ContactComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})




export class AppRoutingModule { }
