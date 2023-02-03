import { Loader } from 'components/Loader';
import { TableRow } from 'components/TableRow';
import { caption, properties } from 'constants/table';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { useGetRowsQuery } from 'services/outlayRows';
import styles from './Table.style.module.scss';
import { Props } from './Table.types';

export function Table({ thead }: Props): JSX.Element {
  const { isLoading } = useGetRowsQuery(null);

  const data = useSelector((state: RootState) => state.tableReducer.rows);

  return (
    <section className={styles.wrapper}>
      <div className={styles.caption}>
        <span className={styles.span}>{caption}</span>
      </div>
      <div className={styles.table__wrapper}>
        <table className={styles.table}>
          <caption className={styles.caption__real}>
            <span>{caption}</span>
          </caption>

          <thead className={styles.thead}>
            <tr>
              {thead.map(({ text, width }, index) => (
                <th
                  className={styles.th}
                  key={index}
                  scope="col"
                  style={{ width }}
                >
                  {text}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {data &&
              data.map((item, index) => (
                <TableRow<Row & DetailedProps>
                  key={index}
                  data={item}
                  properties={properties}
                  child={item['child']}
                />
              ))}
          </tbody>
        </table>

        {isLoading && <Loader />}
      </div>
    </section>
  );
}
