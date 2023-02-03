import { Props } from './TableRow.types';
import styles from './TableRow.style.module.scss';
import { getDataFromObject } from 'components/Table/Table.service';
import clsx from 'clsx';
import {
  useCreateRowMutation,
  useDeleteRowMutation,
  useUpdateRowMutation,
} from 'services/outlayRows';
import { Loader } from 'components/Loader';
import { useDispatch } from 'react-redux';
import {
  createRowAction,
  deleteRowAction,
  updateRowAction,
} from 'redux/slices/table';
import { useEffect, useState } from 'react';
import { Input } from 'components/Input';
import { MainButtons } from 'components/MainButtons';
import { Form } from 'components/Form';
import { onUpdateRow } from 'App.service';

export function TableRow<T>({ data, properties, child }: Props): JSX.Element {
  const [isChangeMode, setChangeMode] = useState<boolean>(false);
  const [isCreateMode, setCreateMode] = useState<boolean>(false);

  const [form, setForm] = useState<IForm>({});

  const dispatch = useDispatch();
  const id = data.id;

  const items = getDataFromObject<Row>(data, properties);

  const [deleteRow, { isLoading }] = useDeleteRowMutation();
  const [updateRow] = useUpdateRowMutation();
  const [createRow] = useCreateRowMutation();

  const level = data.nestingLevel ? Number(data.nestingLevel) : 0;

  const onDoubleClick = () => {
    if (!isCreateMode) setChangeMode(true);
  };

  const onClickTrash = () => {
    if (id) {
      try {
        deleteRow(id);
        dispatch(deleteRowAction(id));
      } catch (err) {
        console.error(err);
      }
    }
  };

  const onClickCreate = () => {
    setCreateMode(true);
  };

  const onKeyDownUpdate = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      updateRow({
        id,
        body: {
          equipmentCosts: form[2],
          estimatedProfit: form[4],
          machineOperatorSalary: 0,
          mainCosts: 0,
          materials: 0,
          mimExploitation: 0,
          overheads: 0,
          rowName: form[0],
          salary: form[1],
          supportCosts: form[3],
        },
      });
      dispatch(updateRowAction({ id, form }));
      setChangeMode(false);
    }
  };

  const onKeyDownCreate = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      createRow({
        id,
        body: {
          equipmentCosts: form[2],
          estimatedProfit: form[4],
          machineOperatorSalary: 0,
          mainCosts: 0,
          materials: 0,
          mimExploitation: 0,
          overheads: 0,
          rowName: form[0],
          salary: form[1],
          supportCosts: form[3],
          parentId: id,
        },
      });
      dispatch(
        createRowAction({ id, form, newNestingLevel: data.nestingLevel + 1 })
      );
      setCreateMode(false);
    }
  };

  return (
    <>
      <tr className={styles.row} onDoubleClick={onDoubleClick}>
        <td className={styles.td} style={{ paddingLeft: `${level * 20}px` }}>
          <MainButtons
            onClickTrash={onClickTrash}
            onClickCreate={onClickCreate}
            isLoading={isLoading}
            level={level}
            disabled={isCreateMode || isChangeMode}
          />
        </td>

        {!isChangeMode && (
          <>
            {items.map((item, index) => (
              <td key={index} className={styles.td}>
                {String(item)}
              </td>
            ))}
          </>
        )}

        {isChangeMode && !isCreateMode && (
          <Form
            items={items}
            setForm={setForm}
            form={form}
            onKeyDown={onKeyDownUpdate}
          />
        )}
      </tr>

      {isCreateMode && !isChangeMode && (
        <tr>
          <Form
            items={items}
            setForm={setForm}
            onKeyDown={onKeyDownCreate}
            left={`${level * 20 + 20}px`}
            top={'10px'}
          />
        </tr>
      )}

      {child &&
        child.map((item, index) => (
          <TableRow<T>
            key={index}
            data={item}
            properties={properties}
            child={Array.isArray(item.child) ? item.child : []}
          />
        ))}
    </>
  );
}
