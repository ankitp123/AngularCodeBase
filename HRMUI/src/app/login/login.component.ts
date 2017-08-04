import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginInfo} from './login.model';

@Component({
    moduleId: module.id,
    selector: 'login-form',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    ngOnInit(): void {
    }

    constructor(private router: Router) {

    }

    public loginInfo: LoginInfo = new LoginInfo();

    public login() {
        this.router.navigate(["/control"])
        //todo: implement login functionality here and route inside app!

    }
}
