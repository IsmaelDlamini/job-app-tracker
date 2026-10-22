import { User } from '../models/user.model';
import { firebaseAuth } from '../firebase.web';
import { firestore } from '../firebase.web';
import { getDoc, doc } from 'firebase/firestore';


export class UserService {

    db = firestore;

    async getUser(): Promise<User | undefined> { 

        if (!firebaseAuth.currentUser) {
            return undefined;
        }

        const uid = firebaseAuth.currentUser?.uid;
        const userDoc = doc(this.db, 'users', uid!);
        const snapshot = await getDoc(userDoc);

        const userData = snapshot.data();

        return {
            ...(userData as User), 
            id: snapshot.id
        } ;

    }
}