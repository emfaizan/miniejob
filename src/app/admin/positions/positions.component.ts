import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {
  positions = [];

  constructor(
    private jobService: JobService
  ) { }

  ngOnInit() {
    this.getPositions();
  }

  getPositions() {
    this.jobService.getPositionsFromServer()
      .subscribe(data => {
        this.positions = data.positions;
      });
  }
}
