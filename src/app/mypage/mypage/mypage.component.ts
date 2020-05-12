import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.scss'],
})
export class MypageComponent implements OnInit {
  uid = this.chatService.uid;
  posts$ = this.chatService.getAllChat(this.uid);

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {}
}
