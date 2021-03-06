import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat/chat.component';
import { SpeechComponent } from './speech/speech.component';
import { InputComponent } from './input/input.component';

import { SharedModule } from '../shared/shared.module';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ChatComponent, SpeechComponent, InputComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
    SharedModule,
    TextFieldModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
  ],
})
export class ChatModule {}
