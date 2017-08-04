import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
    declarations: [LoginComponent],
    exports: [LoginComponent, RouterModule],
    imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path: 'login',
                component: LoginComponent
            }
        ])],
    providers: []
})
export class LoginModule {

}

