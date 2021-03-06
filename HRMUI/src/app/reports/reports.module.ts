import {NgModule} from '@angular/core';
import {ReportsComponent} from './reports.component';
import {CommonModule} from '@angular/common';
import {AttendanceReportComponent} from './attendance/attendance.component';
import {PerformanceReportComponent} from './performance/performance.component';
import {RouterModule} from '@angular/router';
@NgModule({
    imports: [CommonModule,
        RouterModule.forChild([])
    ],
    declarations: [ReportsComponent,
        AttendanceReportComponent,
        PerformanceReportComponent],
    providers: []
})

export class ReportModule {
    public title: string = 'reports sidebar';

}
