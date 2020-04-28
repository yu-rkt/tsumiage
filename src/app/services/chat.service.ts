import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Message } from '../interfaces/message';
import { tap } from 'rxjs/operators';

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

  getChat(uid: number) {
    return this.db
      .collection('rooms', (ref) => ref.where('1234', '==', uid))
      .valueChanges()
      .pipe(tap((rooms) => console.log(rooms)));
  }
}
