import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import PNotify from 'pnotify/dist/es/PNotify';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  model = { firstName: "", lastName: "", email: "", address: "", city: "Karachi"};

  constructor(
    private userService : UserService
  ) { }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo(){
    this.userService.getUser()
    .subscribe(as => {
      this.model.firstName = as.user[0].FirstName;
      this.model.lastName = as.user[0].LastName;
      this.model.address = as.user[0].Address;
      this.model.email = as.user[0].Email;
      this.model.city = as.user[0].City;
    })
  }

  onSubmit() {
    this.userService.updateUser(this.model)
      .subscribe(data => {
        console.log("Updated profile", data)
        if(data.success){
          PNotify.success({
            text: "Profile updated successfully"
          });
        }
      });
  }

}
