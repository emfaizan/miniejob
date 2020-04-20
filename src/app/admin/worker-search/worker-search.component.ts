import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-worker-search',
  templateUrl: './worker-search.component.html',
  styleUrls: ['./worker-search.component.css']
})
export class WorkerSearchComponent implements OnInit {
  workers;

  constructor(
    private userService : UserService
  ) { }

  ngOnInit() {
    this.getWorkers();
  }

  getWorkers(){
    this.userService.getWorker()
    .subscribe(as => {
      this.workers = as.workers;
    })
  }

}
