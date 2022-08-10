import { FC } from 'react';
import cn from 'classnames';

import { ButtonView } from '@enums';

import styles from './button.module.scss';

type ButtonProps = {
  submit?: boolean;
  title: string;
  view: ButtonView;
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({ submit, title, view, onClick }) => {
  const className = cn(styles.button, {
    [styles.button__primary]: view === ButtonView.primary,
    [styles.button__inverted]: view === ButtonView.inverted,
    [styles.button__blue]: view === ButtonView.blue
  });

  return (
    <button type={submit ? 'submit' : 'button'} {...{ className, onClick }}>
      {title}
    </button>
  );
};

export { Button };
