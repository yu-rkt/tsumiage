import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Message } from '../interfaces/message';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private db: AngularFirestore) {}

  postChat(message: Message) {
    const id = this.db.createId();
    const uid = 1234;
    return this.db
      .collection('rooms')
      .doc(`${uid}`)
      .collection('messages')
      .doc(`${id}`)
      .set(message);
  }

  getChat() {}
}
