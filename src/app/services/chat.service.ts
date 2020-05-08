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

  getAllChat(uid: number): Observable<object[]> {
    return this.db
      .collection<Message>(`rooms/${this.uid}/messages`, (ref) =>
        ref.where('uid', '==', uid).orderBy('createdAt', 'desc').limit(7)
      )
      .valueChanges();
  }
}
