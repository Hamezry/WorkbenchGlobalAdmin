export const decimalFormatter = (value) => {
  return Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number(value));
}

export const commaFormatter = (value) => {
  return Intl.NumberFormat('en-US').format(Number(value));
}

