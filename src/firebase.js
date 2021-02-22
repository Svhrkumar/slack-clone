import firebase from 'firebase';
const firebaseConfig = {
	apiKey: 'AIzaSyAyQr0JZX90xDFAVTNzxgf5KnGtGttPiHQ',
	authDomain: 'slack-clone-f75e7.firebaseapp.com',
	databaseURL: 'https://slack-clone-f75e7.firebaseio.com',
	projectId: 'slack-clone-f75e7',
	storageBucket: 'slack-clone-f75e7.appspot.com',
	messagingSenderId: '706844670162',
	appId: '1:706844670162:web:ecdd286ae8c8c668c2d50b',
	measurementId: 'G-8B019G0EGX',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
