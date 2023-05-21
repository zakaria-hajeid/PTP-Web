import { apiNames } from './../../../../../Shared/Constant/apiNames';
import { IdentityService } from './../../../../../Shared/service/IdentityService/IdentityService';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDto } from 'src/app/Shared/Model/User/AddUserDto';
import { signalRservices } from 'src/app/Core/Srvices/SignalRservice';

@Component({
  selector: 'app-user-regester',
  templateUrl: './user-regester.component.html',
  styleUrls: ['./user-regester.component.scss']
})
export class UserRegesterComponent implements OnInit {
  RegisterForm: FormGroup;
userRegisterResponse :[];
  userDto :UserDto
  constructor(private fb: FormBuilder, private identityService:IdentityService
    ,private SignalRservices:signalRservices) {
this.userDto=new UserDto();

   }

  ngOnInit(): void {

    this.RegisterForm = this.fb.group({
      UserName: ['', Validators.required],
      name : ['', [Validators.required]],
      Password: ['', [Validators.required, Validators.minLength(15)]],
    });
debugger;
    const r=this.SignalRservices.addUserRegisterEventTOallSubscriber;

  }
  onSubmit(form: FormGroup) {
    debugger;
    this.userDto.UserName=this.RegisterForm.get('UserName').value;
    this.userDto.name=this.RegisterForm.get('name').value;
    this.userDto.Password=this.RegisterForm.get('Password').value;




    this.identityService.register(this.userDto).subscribe(
      (result) => {
console.log(result)
debugger;
this.SignalRservices.ReigsteruserAddEvent(result);
      },
      (error) => {
      }
    );

  }

}

