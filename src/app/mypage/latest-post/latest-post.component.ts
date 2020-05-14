import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/interfaces/message';

@Component({
  selector: 'app-latest-post',
  templateUrl: './latest-post.component.html',
  styleUrls: ['./latest-post.component.scss'],
})
export class LatestPostComponent implements OnInit {
  @Input() post: Message;

  text = this.post.text;
  maxLength = 20;
  cutText = '';
  if(this.text.length > this.maxLength) {
    this.cutText = this.text.substr(0, this.maxLength) + '...';
  }
  constructor() {}

  ngOnInit(): void {}
}
