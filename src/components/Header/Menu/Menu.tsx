import { Props } from './Menu.types';
import styles from './Menu.style.module.scss';
import clsx from 'clsx';

export function Menu({ items }: Props): JSX.Element {
  return (
    <nav className={styles.wrapper}>
      {items.map((item, index) => (
        <a
          className={clsx(styles.link, { [styles.active]: index === 0 })}
          key={index}
          href="/"
          onClick={(e) => e.preventDefault()}
        >
          {item}
        </a>
      ))}
    </nav>
  );
}
