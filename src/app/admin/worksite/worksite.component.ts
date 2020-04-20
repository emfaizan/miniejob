import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-worksite',
  templateUrl: './worksite.component.html',
  styleUrls: ['./worksite.component.css']
})
export class WorksiteComponent implements OnInit {
  model = { Name: "", Description: "", Phone: "", Industry: "0"}

  constructor( private userService: UserService) { }

  ngOnInit() {
    this.getWorksite();
  }

  getWorksite(){
    this.userService.getWorksiteInfo()
      .subscribe(data => {
        data = this.model;
        console.log(this.model);
      });
  }

  onSubmit() {
    console.log(this.model);
  }

}
