import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Message } from '../interfaces/message';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private db: AngularFirestore) {}

  postChat(message: Message) {
    const messageId = this.db.createId();
    const uid = 1234;
    return this.db.doc(`rooms/${uid}/messages/${messageId}`).set(message);
  }

  getChat() {}
}
