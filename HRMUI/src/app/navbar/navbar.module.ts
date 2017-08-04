import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavBarComponent} from './navbar.component';
import {RouterModule} from '@angular/router';
import {ReportsComponent} from '../reports/reports.component';
import {AttendanceReportComponent} from '../reports/attendance/attendance.component';
import {PerformanceReportComponent} from '../reports/performance/performance.component';
import {SystemComponent} from '../system/system.component';
import {RecruitmentComponent} from '../recruitment/recruitment.component';
import {ReportModule} from '../reports/reports.module';
import {SystemModule} from '../system/system.module';
import {CreateJobComponent} from '../recruitment/create-job/create-job.component';
import {TimeSheetComponent} from '../time-sheet/time-sheet.component';
import {FillTimeSheetComponent} from '../time-sheet/fill-timesheet/fill-timesheet.component';
import {PRMComponent} from '../prm/prm.component';
import {ProjectsComponent} from '../prm/projects/projects.component';
import {EmpDetailsComponent} from '../pim/emp-details/emp-details.component';
import {PIMComponent} from '../pim/pim.component';
import {TeamComponent} from "../team/team.component";
import {UserComponent} from "../team/user/user.component";
import {UserGroupComponent} from "../team/user-group/user-group.component";
import {UserRoleComponent} from "../team/user-role/user-role.component";
import {LeaveMgmtComponent} from "../leave management/leave-mgmt.component";
import {ApplyLeaveComponent} from "../leave management/apply-leave/apply-leave.component";

@NgModule({
    imports: [CommonModule,
        ReportModule,
        SystemModule,
        RouterModule.forChild([
            {
                path: 'control',
                component: NavBarComponent,
                children: [
                    {
                        path: 'reports',
                        component: ReportsComponent,
                        children: [
                            {
                                path: 'attendance',
                                component: AttendanceReportComponent
                            },
                            {
                                path: 'performance',
                                component: PerformanceReportComponent
                            },
                            {
                                path: '', redirectTo: 'performance', pathMatch: 'full'
                            }
                        ]
                    },
                    {
                        path: 'system',
                        component: SystemComponent
                    },
                    {
                        path: 'time-sheet',
                        component: TimeSheetComponent,
                        children: [
                            {
                                path: 'fill-time-sheet',
                                component: FillTimeSheetComponent
                            },
                            {
                                path: '', redirectTo: 'fill-time-sheet', pathMatch: 'full'
                            }
                        ]
                    },
                    {
                        path: 'pim',
                        component: PIMComponent,
                        children: [
                            {
                                path: 'emp-details',
                                component: EmpDetailsComponent
                            },
                            {
                                path: 'emp-history',
                                component: EmpDetailsComponent
                            },
                            {
                                path: '', redirectTo: 'emp-details', pathMatch: 'full'
                            }
                        ]
                    },
                    {
                        path: 'recruitment',
                        component: RecruitmentComponent,
                        children: [
                            {
                                path: 'create-job',
                                component: CreateJobComponent
                            },
                            {
                                path: '', redirectTo: 'create-job', pathMatch: 'full'
                            }

                        ]
                    },
                    {
                        path: 'prm',
                        component: PRMComponent,
                        children: [
                            {
                                path: 'projects',
                                component: ProjectsComponent
                            },
                            {
                                path: 'add-project',
                                component: ProjectsComponent
                            },
                            {
                                path: '', redirectTo: 'projects', pathMatch: 'full'
                            }
                        ]
                    },
                    {
                        path: 'team',
                        component: TeamComponent,
                        children: [
                            {
                                path: 'user',
                                component: UserComponent
                            },
                            {
                                path: 'user-group',
                                component: UserGroupComponent
                            },
                            {
                                path: 'user-role',
                                component: UserRoleComponent
                            },
                            {
                             path: '', redirectTo: 'user', pathMatch: 'full'
                             }
                        ]
                    },
                    {
                        path: 'leave',
                        component: LeaveMgmtComponent,
                        children: [
                            {
                                path: 'apply-leave',
                                component: ApplyLeaveComponent
                            },
                            {
                                path: 'view-leave',
                                component: ApplyLeaveComponent
                            },
                            {
                                path: '', redirectTo: 'apply-leave', pathMatch: 'full'
                            }
                        ]
                    },
                ]
            },

        ])
    ],
    declarations: [NavBarComponent],
    exports: [NavBarComponent, RouterModule]
})

export class NavBarModule {

}
