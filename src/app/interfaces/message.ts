import { firestore } from 'firebase';

export interface Message {
  text: string;
  uid: number;
  createdAt: firestore.Timestamp;
}
