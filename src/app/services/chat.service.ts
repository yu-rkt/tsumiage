import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Message } from '../interfaces/message';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private db: AngularFirestore) {}

  postChat(message: Message) {
    const roomId = this.db.createId();
    const messageId = this.db.createId();
    return this.db
      .collection('rooms')
      .doc(`${roomId}`)
      .collection('messages')
      .doc(`${messageId}`)
      .set(message);
  }

  getChat() {}
}
