import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-button',
  templateUrl: './chat-button.component.html',
  styleUrls: ['./chat-button.component.scss'],
})
export class ChatButtonComponent implements OnInit {
  @Output() botType = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
