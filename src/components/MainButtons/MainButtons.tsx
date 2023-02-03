import styles from './MainButtons.style.module.scss';
import { ReactComponent as DocumentIcon } from 'images/main/document.svg';
import { ReactComponent as TrashIcon } from 'images/main/trash.svg';
import clsx from 'clsx';
import { Props } from './MainButtons.types';
import { Loader } from 'components/Loader';
import { ReactComponent as LineToChildIcon } from 'images/main/line-to-child.svg';

export function MainButtons({
  onClickTrash,
  onClickCreate,
  isLoading,
  level,
  disabled,
}: Props): JSX.Element {
  return (
    <>
      {!isLoading && (
        <div className={styles.icons}>
          <div className={styles.buttons}>
            {isLoading && <Loader />}
            <button
              className={styles.button}
              onClick={onClickCreate}
              disabled={disabled}
            >
              <DocumentIcon className={styles.document} />
            </button>
            <button
              className={clsx(styles.trash, styles.button)}
              onClick={onClickTrash}
              disabled={disabled}
            >
              <TrashIcon />
            </button>
          </div>

          {level !== 0 && (
            <>
              <LineToChildIcon className={styles.line} />
            </>
          )}
        </div>
      )}
    </>
  );
}
