import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';

import { MatButtonModule } from '@angular/material/button';
import { TopContentComponent } from './top-content/top-content.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [WelcomeComponent, TopContentComponent, ButtonComponent],
  imports: [CommonModule, WelcomeRoutingModule, MatButtonModule],
})
export class WelcomeModule {}
