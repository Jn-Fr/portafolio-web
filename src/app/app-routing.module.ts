import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { InterestsComponent } from './components/interests/interests.component';
import { MeComponent } from './components/me/me.component';
import { SkillsComponent } from './components/skills/skills.component';

export const routes: Routes = [
  { path: 'me', component: MeComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'education', component: EducationComponent },
  { path: 'education', component: EducationComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'interests', component: InterestsComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: '**', redirectTo: 'me', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
