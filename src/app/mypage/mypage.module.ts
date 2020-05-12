import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MypageRoutingModule } from './mypage-routing.module';
import { MypageComponent } from './mypage/mypage.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { LatestPostComponent } from './latest-post/latest-post.component';

@NgModule({
  declarations: [MypageComponent, LatestPostComponent],
  imports: [CommonModule, MypageRoutingModule, MatTabsModule, MatCardModule],
})
export class MypageModule {}
