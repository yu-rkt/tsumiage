import { Component, OnInit, Input } from '@angular/core';
import { Message } from './node_modules/src/app/interfaces/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  @Input() chat: Message;

  constructor() {}

  ngOnInit(): void {}
}
