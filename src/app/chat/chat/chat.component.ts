import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  chats$ = this.chatService.getAllChat(this.chatService.uid);

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {}
}
