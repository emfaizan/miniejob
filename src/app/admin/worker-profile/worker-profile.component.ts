import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import PNotify from 'pnotify/dist/es/PNotify';

@Component({
  selector: 'app-worker-profile',
  templateUrl: './worker-profile.component.html',
  styleUrls: ['./worker-profile.component.css']
})
export class WorkerProfileComponent implements OnInit {

  worker: any;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  getWorkerDetails(id){
    this.userService.getWorkerById(id)
    .subscribe(data => {
      console.log(data);
      if(data.success){
        this.worker = data.worker;
      }
      else{
        PNotify.error({
          text: "No Worker Found"
        });
      }
    });
  }

}
