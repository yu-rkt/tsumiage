import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Message } from '../interfaces/message';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  messageId = this.db.createId();
  uid = 1234;
  constructor(private db: AngularFirestore) {}

  postChat(message: Message) {
    return this.db
      .doc(`rooms/${this.uid}/messages/${this.messageId}`)
      .set(message);
  }

  getAllChat(uid: number): Observable<string[]> {
    return this.db
      .collection<Message>(`rooms/${uid}/messages`, (ref) =>
        ref.where('uid', '==', uid)
      )
      .valueChanges()
      .pipe(
        map((messages) => {
          return messages.map((message) => message.text);
        })
      );
  }
}
