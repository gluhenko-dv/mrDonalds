<<<<<<< HEAD
export const totalPriceItems = (order) => order.price * order.count;

export const formatCurrency = (value) =>
  value.toLocaleString("ru-RU", {
=======
export const toLocalRu = (param) =>
  param.toLocaleString("ru-RU", {
>>>>>>> a69f97973e7d5804f8585a9b7820797cd24280f7
    style: "currency",
    currency: "RUB",
  });
