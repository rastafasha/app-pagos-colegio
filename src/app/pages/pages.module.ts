import { NgModule } from '@angular/core';


import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { PAGES_ROUTES } from './pages.routes';

import { PagesComponent } from './pages.component';


// pipe
import { EscapeHtmlPipe } from '../pipes/keep-html.pipe';
// import {KeysPipe} from '../pipes/keys.pipe';
import { OrderModule } from 'ngx-order-pipe';

// Import Angular plugin.
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
// import { CKEditorModule } from 'ckeditor4-angular';

// paginacion
import { NgxPaginationModule } from 'ngx-pagination';

//paginas
import { DashboardComponent } from './dashboard/dashboard.component';

import{SliderIndexComponent} from './slider/slider-index/slider-index.component';
import{SliderEditComponent} from './slider/slider-edit/slider-edit.component';
import { ComponentsModule } from "../components/components.module";
import { ConfigComponent } from './config/config.component';
import { TasabcvComponent } from './tasabcv/tasabcv.component';



@NgModule({
    declarations: [
        PagesComponent,
        EscapeHtmlPipe,
        // KeysPipe,
        DashboardComponent,
        SliderIndexComponent,
        SliderEditComponent,
        ConfigComponent,
        TasabcvComponent

    ],
    exports: [
        PagesComponent,
        EscapeHtmlPipe,
        // KeysPipe,
        NgxPaginationModule,
        CKEditorModule,
        DashboardComponent,
        SliderIndexComponent,
        SliderEditComponent,
        ConfigComponent,
        TasabcvComponent


    ],
    imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    OrderModule,
    NgxPaginationModule,
    CKEditorModule,
    SharedModule,
    ComponentsModule
]
})

export class PagesModule {}
