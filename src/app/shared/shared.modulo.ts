import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { BannerplanesComponent } from './bannerplanes/bannerplanes.component';

// Pipes
//import { PipesModule } from '../pipes/pipes.module';





@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        //PipesModule
    ],
    declarations: [
        HeaderComponent,
        MenuComponent,
        FooterComponent,
        BannerplanesComponent,
    ],
    exports: [
        HeaderComponent,
        MenuComponent,
        FooterComponent,
        BannerplanesComponent
    ]
})

export class SharedModule {}
