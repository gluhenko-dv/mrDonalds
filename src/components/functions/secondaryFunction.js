export const toLocalRu = (param) =>
  param.toLocaleString("ru-RU", {
    style: "currency",
    currency: "RUB",
  });
