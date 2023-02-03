import { Props } from './Menu.types';
import { ReactComponent as ItemIcon } from 'images/left-menu/list-item.svg';
import styles from './Menu.style.module.scss';
import clsx from 'clsx';

export function Menu({ items }: Props): JSX.Element {
  return (
    <div className={styles.menu}>
      {items.map((item, index) => (
        <a
          className={clsx(styles.link, { [styles.active]: index === 4 })}
          key={index}
          href="/"
          onClick={(e) => e.preventDefault()}
        >
          <ItemIcon />
          <span className={styles.item}>{item}</span>
        </a>
      ))}
    </div>
  );
}
