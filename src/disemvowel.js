export const disemvowel = (string) => {
  const filteredString = string.toLowerCase().replace(/[aeiou]|\d|\W/g, '')
  return filteredString
}
