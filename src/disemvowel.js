export const disemvowel = (string) => {
  const stringFilter = string.toLowerCase().replace(/([aeiou])|(\d)|(\W)/g, '')
  return stringFilter
}
