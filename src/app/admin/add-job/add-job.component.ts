import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import PNotify from 'pnotify/dist/es/PNotify';


@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {
  positions = [];
  model = { id: 0, jobtitle: "", position: "0", description: "", startTime: new Date(), endTime: new Date(), city: "Karachi", salary: "", jobtype: "0" }

  constructor(
    private jobService: JobService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.getPositions();
    if (id !== '0') {
      this.getJobDetails(id);
    }
  }

  getJobDetails(id) {
    this.jobService.getJobDetails(id)
      .subscribe(data => {
        this.model.id = data.Id;
        this.model.jobtitle = data.Title;
        this.model.salary = data.Salary;
        this.model.city = data.City;
        this.model.startTime = new Date(data.StartTime);
        this.model.endTime = new Date(data.EndTime);
        this.model.description = data.Description;
        this.model.position = data.PositionId;
        this.model.jobtype = data.JobTypeId;

        console.log("Job", this.model);
      });
  }

  getPositions() {
    this.jobService.getPositionsFromServer()
      .subscribe(data => {
        this.positions = data.positions;
      });
  }

  onSubmit() {
    console.log(this.model);
    this.jobService.saveJob(this.model)
      .subscribe(data => {
        console.log("SAVE JOB STATUS", data)
        if(data.success){
          PNotify.success({
            text: "Job saved successfully"
          });

          this.router.navigate(['/admin/i/dashboard']);
        }
      });
  }

}
