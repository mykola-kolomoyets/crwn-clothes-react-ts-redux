import { FC } from 'react';
import { useField, FieldHookConfig } from 'formik';
import cn from 'classnames';

import styles from './input.module.scss';

type InputProps = { label: string };

const Input: FC<FieldHookConfig<string> & InputProps> = ({
  label,
  ...props
}) => {
  const [field, meta] = useField(props);

  return (
    <div className={styles.input}>
      <label
        className={cn(styles.input__label, {
          [styles.shrink]: !!field.value.length
        })}
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <input className={styles.input__input} {...field} type={props.type} />
      {meta.touched && meta.error ? (
        <div className={styles.input__error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export { Input };
