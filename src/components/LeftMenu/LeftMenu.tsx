import { menu, subTitle, title } from 'constants/left-menu';
import { ReactComponent as ArrowIcon } from 'images/left-menu/arrow.svg';
import styles from './LeftMenu.style.module.scss';
import { Menu } from './Menu';

export function LeftMenu(): JSX.Element {
  return (
    <nav className={styles.wrapper}>
      <div className={styles.head}>
        <div>
          <h2 className={styles.title}>{title}</h2>
          <span className={styles.subTitle}>{subTitle}</span>
        </div>
        <button>
          <ArrowIcon />
        </button>
      </div>

      <Menu items={menu} />
    </nav>
  );
}
