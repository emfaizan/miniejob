import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { LeftsidebarComponent } from './layout/leftsidebar/leftsidebar.component';
import { HomeComponent } from './home/home.component';
import { WorkerSearchComponent } from './worker-search/worker-search.component';
import { RouterModule } from '@angular/router';
import { WorksiteComponent } from './worksite/worksite.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AddJobComponent } from './add-job/add-job.component';
import { PositionsComponent } from './positions/positions.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { FormsModule } from '@angular/forms';
import { PositionDetailsComponent } from './position-details/position-details.component';
import { WorkerProfileComponent } from './worker-profile/worker-profile.component';

@NgModule({
  declarations: [LayoutComponent, HomeComponent, WorkerSearchComponent, LeftsidebarComponent, WorksiteComponent, UserprofileComponent, AddJobComponent, PositionsComponent, JobDetailComponent, PositionDetailsComponent, WorkerProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'i',
        component: LayoutComponent,
        children: [
          { path: 'dashboard', component: HomeComponent },
          { path: 'worksite', component: WorksiteComponent },
          { path: 'search-worker', component: WorkerSearchComponent },
          { path: 'my-account', component: UserprofileComponent },
          { path: 'add-job/:id', component: AddJobComponent },
          { path: 'positions', component: PositionsComponent },
          { path: 'job/:id', component: JobDetailComponent },
          { path: 'position/:id', component: PositionDetailsComponent },
          { path: 'worker/:id', component: WorkerProfileComponent }
        ]
      }
    ])
  ]
})
export class AdminModule { }
