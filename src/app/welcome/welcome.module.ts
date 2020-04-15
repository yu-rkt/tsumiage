import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';

import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    FooterComponent,
    MatButtonModule,
  ],
})
export class WelcomeModule {}
