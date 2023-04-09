import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';
import { first } from 'rxjs';
import { LoginUserService } from '../Services/login-user.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss','../../../../assets/front-template/css/vendor.css','../../../../assets/front-template/css/utility.css','../../../../assets/front-template/css/app.css']
})
export class SignInComponent implements OnInit {

  form:any ={}
  loading = false;
  //submitted = false;
  //returnUrl!: string;
  error = '';

  constructor( private LoginUserService:LoginUserService ,private router:Router ,private route: ActivatedRoute){}
  ngOnInit() {

  }
  userLogin(){
  this.loading =true;
  this.LoginUserService.login(this.form.email,this.form.password)
  .pipe(first())
   .subscribe
   (
    () => {
      this.router.navigate(['']);
    },

error =>{
  this.error =error;
  this.loading=false;
});

  }

}
