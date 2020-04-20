import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UpcomingJobsComponent } from './upcoming-jobs/upcoming-jobs.component';

@NgModule({
  declarations: [LayoutComponent, HomeComponent, UpcomingJobsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'i',
        component: LayoutComponent,
        children: [
          { path: 'home', component: HomeComponent },
          { path: 'upcoming-jobs', component: UpcomingJobsComponent }
        ]
      }
    ])
  ]
})
export class WorkerModule { }
