import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat/chat.component';
import { SpeechComponent } from './speech/speech.component';
import { InputComponent } from './input/input.component';


@NgModule({
  declarations: [ChatComponent, SpeechComponent, InputComponent],
  imports: [
    CommonModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
