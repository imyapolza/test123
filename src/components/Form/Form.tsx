import { Input } from 'components/Input';
import styles from './Form.style.module.scss';
import { Props } from './Form.types';

export function Form({
  items,
  setForm,
  onKeyDown,
  left,
  top,
}: Props): JSX.Element {
  const onChangeForm = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: number
  ) => {
    setForm((prev: IForm) => {
      const newPrev = { [name]: (e.target as HTMLInputElement).value };

      const result = Object.assign(prev, newPrev);

      return result;
    });
  };

  return (
    <>
      {items.map((item, index) => (
        <td key={index} className={styles.td} style={{ left, top }}>
          <Input
            classNameLabel={styles.label}
            key={index}
            defaultValue={String(item)}
            label={''}
            onKeyDown={onKeyDown}
            onChange={(e) => onChangeForm(e, index)}
          />
        </td>
      ))}
    </>
  );
}
