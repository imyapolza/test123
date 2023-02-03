import { Props } from './Input.types';
import styles from './Input.style.module.scss';
import clsx from 'clsx';

export function Input({ label, classNameLabel,  ...rest }: Props): JSX.Element {
  return (
    <label className={clsx(styles.label, classNameLabel)}>
      {label}
      <input className={styles.input} {...rest} />
    </label>
  );
}
