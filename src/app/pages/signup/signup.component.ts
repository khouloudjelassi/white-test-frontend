import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService,private snack: MatSnackBar) { }

  public user ={
    firstName:'',
    lastName:'',
    username:'',
    password:'',
    email:'',
    phone:''
  }

  ngOnInit(): void {
  }

  formSubmit(){
   console.log(this.user);
   if(this.user.username=='' || this.user.username==null){
     //alert('user is required !!')
     this.snack.open("user name is required !!",'x')
     return;
   }
//addUser : user
this.userService.addUser(this.user).subscribe(
  (data)=>{
    //success
    console.log(data);
   // alert('success');
   Swal.fire('success','user is registered','success');
  },
  (error)=>{
    //error
    console.log(error);
    this.snack.open("wrong !!",'x')
  }
)


  }
}
