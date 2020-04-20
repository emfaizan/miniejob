import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { ActivatedRoute, Router } from '@angular/router';
import PNotify from 'pnotify/dist/es/PNotify';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  jobdetail;

  constructor(
    public jobService: JobService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.getDetails(id);
  }

  getDetails(id){
    this.jobService.getJobDetails(id)
    .subscribe(data => {
      console.log(data);

      this.jobdetail = data;
    });
  }

  acceptWorker(app, jobId, workerId) {
    app.Status = 'Accepted';
    this.jobService.acceptWorker(app.AppliedWorkerId, jobId, workerId)
      .subscribe(data => {
        if(data.success){
          this.router.navigate(['/admin/i/dashboard']);
        }
      });
  }

  declineWorker(app) {
    alert();
    app.Status = 'Declined';
    this.jobService.declineWorker(app.AppliedWorkerId)
      .subscribe(data => {
        if(data.success){
          PNotify.error({
            text: "Worker Declined"
          });
        }
      });
  }

  
}
