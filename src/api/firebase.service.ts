import { initializeApp, FirebaseApp } from 'firebase/app';

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  Auth,
  UserCredential,
  createUserWithEmailAndPassword
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  Firestore
} from 'firebase/firestore';

import { SignUpFormValues } from '@forms';

class FirebaseService {
  constructor() {
    this.googleAuthProvider.setCustomParameters({
      prompt: 'select_account'
    });
  }

  private readonly firebaseConfig = {
    apiKey: 'AIzaSyCPf3FBCGKpa1VE5wdzqeSYSLL9hbTHS-w',
    authDomain: 'crwn-db-80daf.firebaseapp.com',
    projectId: 'crwn-db-80daf',
    storageBucket: 'crwn-db-80daf.appspot.com',
    messagingSenderId: '1035404743242',
    appId: '1:1035404743242:web:f613d11565a338c1530cb3'
  };

  private readonly googleAuthProvider: GoogleAuthProvider =
    new GoogleAuthProvider();

  private readonly firebaseApp: FirebaseApp = initializeApp(
    this.firebaseConfig
  );

  private readonly db: Firestore = getFirestore();

  public auth: Auth = getAuth();

  public signInWithGooglePopup = () =>
    signInWithPopup(this.auth, this.googleAuthProvider);

  public signInWithGoogleRedirect = () =>
    signInWithRedirect(this.auth, this.googleAuthProvider);

  public createUserDocumentFromAuth = async (
    user: UserCredential,
    additionalInformation = {}
  ) => {
    const userDocRef = await doc(this.db, 'users', user.user.uid);

    const userSnapshot = await getDoc(userDocRef);

    const userExists = userSnapshot.exists();

    if (!userExists) {
      try {
        const { displayName, email } = user.user;

        const createdAt = new Date();

        const userCreateData = {
          createdAt,
          email,
          displayName,
          ...additionalInformation
        };

        await setDoc(userDocRef, userCreateData);
      } catch (err) {
        console.log('Error creating the user: ' + err);
      }
    }

    return userDocRef;
  };

  public getUserDocRef = async (user: UserCredential) =>
    await this.createUserDocumentFromAuth(user);

  public signUpUserWithEmailAndPassword = async ({
    displayName,
    email,
    password
  }: SignUpFormValues) => {
    const user = await createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    );

    return this.createUserDocumentFromAuth(user, { displayName });
  };
}

export const firebaseService = new FirebaseService();
