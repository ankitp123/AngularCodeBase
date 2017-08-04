import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NavBarModule} from './navbar/navbar.module';
import {AccountModule} from './accounts/accounts-module';
import {LoginModule} from './login/login.module';
import {SystemModule} from './system/system.module';
import {ReportModule} from './reports/reports.module';
import {TimeSheetModule} from "./time-sheet/time-sheet.module";
import {PIMModule} from "./pim/pim.module";
import {PRMModule} from "./prm/prm.module";
import {RecruitmentModule} from "./recruitment/recruitment.module";
import {TeamModule} from "./team/team.module";
import {LeaveMgmtModule} from "./leave management/leave-mgmt.module";

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,

        HttpModule,

        AccountModule,
        LoginModule,
        NavBarModule,

        ReportModule,
        SystemModule,
        TimeSheetModule,
        PIMModule,
        PRMModule,
        RecruitmentModule,
        TeamModule,
        LeaveMgmtModule,

        RouterModule.forRoot([{
            path: '',
            component: HomeComponent,
        }, {
            path: '**',
            component: HomeComponent
        }, ] ),
    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    bootstrap: [AppComponent],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy}
    ]
    // exports :[RouterModule]
})
export class AppModule {
}
