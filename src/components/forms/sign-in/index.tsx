import { FC, useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import { firebaseService } from '@api';
import { Button } from '@ui';
import { ButtonView } from '@enums';

const SignInForm: FC = () => {
  const getRedirectStatus = async () => {
    const response = await getRedirectResult(firebaseService.auth);

    if (response) {
      const userDocRef = await firebaseService.getUserDocRef(response);
    }
  };

  const onSignIn = async () => {
    const response = await firebaseService.signInWithGooglePopup();

    const userDocRef = await firebaseService.getUserDocRef(response);
  };

  useEffect(() => {
    getRedirectStatus();
  }, []);

  return (
    <section>
      <h1>Sign in</h1>

      <form>
        <Button view={ButtonView.primary} title="Sign in" />
        <Button view={ButtonView.blue} title="Sign in with Google" />
        {/* <button onClick={onSignIn}>Sign in with Google</button>
        <button onClick={firebaseService.signInWithGoogleRedirect}>
          Sign in with Google
        </button> */}
      </form>
    </section>
  );
};

export { SignInForm };
