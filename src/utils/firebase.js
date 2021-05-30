import firestore from '@react-native-firebase/firestore';
import { setItems } from '../store/actions';
import { store } from '../store/store';
import auth from '@react-native-firebase/auth';

class FirestoreClass {

    registerEvents = () => {
        firestore().collection("items")
            .onSnapshot((snapshot) => {
                store.dispatch(setItems(snapshot.docs));
                console.log('snapshot', snapshot.docs);
                snapshot.docChanges().forEach((change) => {
                    if (change.type === "added") {
                        console.log("added: ", change.doc.data());
                    }
                    if (change.type === "modified") {
                        console.log("modified: ", change.doc.data());
                    }
                    if (change.type === "removed") {
                        console.log("removed: ", change.doc.data());
                    }
                });
            });


        // firestore()
        //     .collection('items')
        //     .get()
        //     .then(querySnapshot => {
        //         console.log('Total items: ', querySnapshot);
        //         // store.dispatch(setItems(querySnapshot));
        //         querySnapshot.forEach(documentSnapshot => {
        //             console.log('Item ID: ', documentSnapshot.id, documentSnapshot.data());
        //         });
        //     });
    }

    updateItem = (data) => {
        firestore()
            .collection('items')
            .doc(data.doc)
            .update({
                isChecked: data.isChecked,
            })
            .then(() => {
                console.log('Item updated!');
            });
    }

    addItem = (data) => {
        console.log('adding ', data)
        firestore()
            .collection('items')
            .add({
                title: data.title,
                uid: data.uid,
                isChecked: data.isChecked
            })
            .then(() => {
                console.log('Item added!');
            });
    }

    logout = async () => {
        return await auth().signOut();
    }
}
export const firestoreService = new FirestoreClass();