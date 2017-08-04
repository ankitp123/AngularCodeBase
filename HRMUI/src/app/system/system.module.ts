import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SystemComponent} from './system.component';
import {RouterModule} from '@angular/router';
import {RecruitmentComponent} from "../recruitment/recruitment.component";
import {RecruitmentModule} from "../recruitment/recruitment.module";
@NgModule({
    imports: [CommonModule,
        RouterModule.forChild([])
    ],
    declarations: [SystemComponent
    ],
    providers: [],
    exports: []
})

export class SystemModule {

}