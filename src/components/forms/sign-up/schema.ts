import { object, string, ref } from 'yup';

const validationSchema = object({
  displayName: string().max(24).required('Required field!'),
  email: string().email('Invalid email address').required('Required field!'),
  password: string()
    .required('Required field!')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  confirmedPassword: string().test(
    'passwords-match',
    'Password must be equal',
    function (value) {
      return this.parent.password === value;
    }
  )
});

export { validationSchema };
