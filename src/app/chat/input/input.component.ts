import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  form = this.fb.group({
    text: ['', [Validators.required, Validators.maxLength(100)]],
  });
  get textControl() {
    return this.form.get('text') as FormControl;
  }
  uid = this.chatService.uid;
  createdAt = this.chatService.createdAt;

  constructor(private fb: FormBuilder, private chatService: ChatService) {}

  ngOnInit(): void {}
  sendMessage() {
    this.chatService.postChat({
      text: this.form.value.text,
      uid: this.uid,
      createdAt: this.createdAt,
    });
  }
}
