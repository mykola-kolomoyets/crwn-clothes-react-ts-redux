import { FC } from 'react';

import { firebaseService } from '@api';

import { SignInForm, SignUpForm, SignUpFormValues } from '@forms';

import styles from './login.module.scss';

const Login: FC = () => {
  const onSignUp = async (values: SignUpFormValues) => {
    const response = await firebaseService.signUpUserWithEmailAndPassword(
      values
    );

    console.log(response);
  };

  return (
    <section className={styles.container}>
      <div>
        <SignInForm />
      </div>

      <div>
        <SignUpForm onSignUp={onSignUp} />
      </div>
    </section>
  );
};

export default Login;
