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
    this.db.doc(`messages/${id}`).set(message);
  }

  getChat() {}
}
