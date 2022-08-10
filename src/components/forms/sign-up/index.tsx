import { FC } from 'react';
import { Formik, FormikHelpers, Form } from 'formik';

import { Button, Input } from '@ui';
import { ButtonView } from '@enums';

import { validationSchema } from './schema';

import styles from './sign-up.module.scss';

export type SignUpFormValues = {
  displayName: string;
  email: string;
  password: string;
  confirmedPassword: string;
};

type SignUpFormProps = {
  onSignUp: (values: SignUpFormValues) => void;
};

const SignUpForm: FC<SignUpFormProps> = ({ onSignUp }) => {
  const initialValues: SignUpFormValues = {
    displayName: '',
    email: '',
    password: '',
    confirmedPassword: ''
  };

  const onSubmit = (
    values: SignUpFormValues,
    { resetForm }: FormikHelpers<SignUpFormValues>
  ) => {
    onSignUp(values);

    resetForm();
  };

  return (
    <section className={styles.container}>
      <h2>Sign up with your email and password</h2>

      <Formik {...{ initialValues, onSubmit, validationSchema }}>
        <Form>
          <Input label="Display name" name="displayName" type="text" />
          <Input label="Email" name="email" type="email" />
          <Input label="Password" name="password" type="password" />
          <Input
            label="Confirm password"
            name="confirmedPassword"
            type="password"
          />

          <Button submit view={ButtonView.primary} title="Sign Up" />
        </Form>
      </Formik>
    </section>
  );
};

export { SignUpForm };
