export const caption = "Строительно-монтажные работы";

export const table = {
  thead: [
    { text: "Уровень", width: "12%" },
    { text: "Наименование работ", width: "20%" },
    { text: "Основная з/п" },
    { text: "Оборудование" },
    { text: "Накладные расходы" },
    { text: "Сметная прибыль" }
  ],
  tbody: [
    ["Южная строительная площадка", "20 348", "1750", "108,07", "1 209 122,5"],
    ["Южная строительная площадка", "20 348", "1750", "108,07", "1 209 122,5"],
    ["Южная строительная площадка", "20 348", "1750", "108,07", "1 209 122,5"]
  ]
};

export const properties: Array<
  "rowName" | "salary" | "equipmentCosts" | "supportCosts" | "estimatedProfit" | number
> = ["rowName", "salary", "equipmentCosts", "supportCosts", "estimatedProfit"];
