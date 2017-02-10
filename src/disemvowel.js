export const disemvowel = (string) => {
  const filteredString = string.toLowerCase().replace(/[aeiou]|\d|\W|\_/g, '')
  return filteredString
}
