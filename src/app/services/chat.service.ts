import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Message } from '../interfaces/message';
import { Observable } from 'rxjs';
import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  messageId = this.db.createId();
  uid = 1234;
  createdAt = firestore.Timestamp.now();
  constructor(private db: AngularFirestore) {}

  postChat(message: Message) {
    return this.db
      .doc(`rooms/${this.uid}/messages/${this.messageId}`)
      .set(message);
  }

  getAllChat(uid: number): Observable<Message[]> {
    return this.db
      .collection<Message>(`rooms/${this.uid}/messages`, (ref) =>
        ref.where('uid', '==', uid).orderBy('createdAt', 'asc').limit(4)
      )
      .valueChanges();
  }

  // addTodo() {
  //   const botMessage = '今日やることを書き出してみましょう！';

  // }

  // addDone() {

  // }

  // addThought() {

  // }
}
