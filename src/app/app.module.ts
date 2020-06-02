import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfessionalComponent } from './professional/professional.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'resume', component: ResumeComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'professional', component: ProfessionalComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResumeComponent,
    CoursesComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    ProfessionalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
