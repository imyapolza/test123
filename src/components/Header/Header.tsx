import { ReactComponent as MenuIcon } from 'images/header/menu.svg';
import { ReactComponent as ShareIcon } from 'images/header/share.svg';
import { menu } from 'constants/header';
import { Menu } from 'components/Header/Menu';
import styles from './Header.style.module.scss';

export function Header(): JSX.Element {
  return (
    <header className={styles.wrapper}>
      <button>
        <MenuIcon />;
      </button>
      <button>
        <ShareIcon className={styles.share} />;
      </button>

      <Menu items={menu} />
    </header>
  );
}
