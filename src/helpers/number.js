export const toPercentage = (number) => {
  let percentage = Math.round(number * 100).toString() + "%"
  return percentage
}
