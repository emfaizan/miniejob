import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-position-details',
  templateUrl: './position-details.component.html',
  styleUrls: ['./position-details.component.css']
})
export class PositionDetailsComponent implements OnInit {

  constructor(
    public jobService: JobService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    if (id !== '0') {
      this.getPositionDetails(id);
    }
  }

  getPositionDetails(id){
    
  }

}
