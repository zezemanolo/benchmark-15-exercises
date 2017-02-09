export const stringIndices = (string, index) => {
  const arrString = string.split(' ')
  if (arrString.length < index || index < 0) {
    return ''
  } 
  return arrString[index]
}
