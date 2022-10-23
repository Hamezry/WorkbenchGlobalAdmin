export const decimalFormatter = (value) => {
  return Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number(value));
};

export const commaFormatter = (value) => {
  return Intl.NumberFormat('en-US').format(Number(value));
};

export const capitalizeWords = (word) => {
  return word
    .split(/[\s_-]/)
    .map((element) => {
      return element.charAt(0).toUpperCase() + element.slice(1);
    })
    .join(' ');
};
