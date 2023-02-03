import { properties } from "constants/table";

export function getRowsWithLevels(data: Array<Row>) {
  function recursiveRows(item: Row, id: number) {
    let returnedItem = item;

    if (item.child.length) {
      returnedItem = {
        ...returnedItem,
        child: returnedItem.child.map((childItem) =>
          recursiveRows(childItem, id + 1)
        )
      };
    }

    if (0 === id) {
      return { ...returnedItem, nestingLevel: 0 };
    }

    return { ...returnedItem, nestingLevel: id };
  }

  const result = data.map((item) => recursiveRows(item, 0));

  return result;
}

export function onDeleteRow(data: Array<Row>, id: number): Array<Row> {
  function recursiveDelete(tree: Row, id: number): Row | null {
    if (tree.id === id) return null;

    const child = tree.child
      .map((child) => recursiveDelete(child, id))
      .filter((node) => !!node);

    return {
      ...tree,
      child
    };
  }

  const result = data.map((item) => recursiveDelete(item, id));

  return result;
}

export function onUpdateRow(
  id: number,
  data: Array<Row>,
  form: IForm
): Array<Row> {
  function recursiveRows(item: Row, id: number, levelId: number): Row {
    let returnedItem: Row = Object.assign({}, item);

    if (item.child && item.child.length) {
      returnedItem = {
        ...returnedItem,
        child: returnedItem.child.map((childItem) =>
          recursiveRows(childItem, id, levelId + 1)
        )
      };
    }

    if (0 === id) {
      return { ...returnedItem };
    }

    if (item.id === id) {
      properties.forEach((name, index) => {
        const isChange = Object.prototype.hasOwnProperty.call(form, index);
        const nItem = returnedItem as Record<typeof name, typeof name>;

        nItem[name] = isChange ? form[index] : nItem[name];
      });

      return { ...returnedItem, nestingLevel: levelId };
    }

    return { ...returnedItem, nestingLevel: levelId };
  }

  const result = data.map((item) => recursiveRows(item, id, 0));

  return result;
}

export function onCreateRow(
  id: number,
  data: Array<Row>,
  form: IForm,
  newNestingLevel: number
) {
  function recursiveRows(item: Row, id: number, levelId: number) {
    let returnedItem = Object.assign({}, item);

    console.log("item", item, "item.child", item.child);

    if (item.child && item.child.length) {
      returnedItem = {
        ...returnedItem,
        child: returnedItem.child.map((childItem) =>
          recursiveRows(childItem, id, levelId + 1)
        )
      };
    }

    if (0 === id) {
      return { ...returnedItem };
    }

    if (item.id === id) {
      const newItem: Row = Object.assign({}, item);
      const newChilds = returnedItem.child ? [...returnedItem.child] : [];

      properties.forEach((name, index) => {
        const isChange = Object.prototype.hasOwnProperty.call(form, index);

        (newItem as Record<typeof name, typeof name>)[name] = isChange
          ? form[index]
          : 0;
      });

      newItem["nestingLevel"] = newNestingLevel;

      newChilds.push(newItem);

      returnedItem["child"] = newChilds;

      return { ...returnedItem, nestingLevel: levelId };
    }

    return { ...returnedItem, nestingLevel: levelId };
  }

  const result = data.map((item) => recursiveRows(item, id, 0));

  return result;
}
