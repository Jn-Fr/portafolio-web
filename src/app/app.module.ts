import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MeComponent } from './components/me/me.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { InterestsComponent } from './components/interests/interests.component';
import { CertificationsComponent } from './components/certifications/certifications.component';

@NgModule({
  declarations: [
    AppComponent,
    MeComponent,
    ExperienceComponent,
    SidebarComponent,
    EducationComponent,
    SkillsComponent,
    InterestsComponent,
    CertificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
