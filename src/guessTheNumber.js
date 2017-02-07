const min = Math.ceil(1)
const max = Math.floor(100)
const randomNum = Math.floor(Math.random() * (max - min + 1) + min)
const getUserInput = document.querySelector('input#guess-number')
const guessTheNumber = (inputValue) => {
  inputValue = getUserInput.value
  if(inputValue.toLowerCase() === 'exit') {
    alert('Game Over! Reload browser to restart game!')
  } else if(inputValue === '' || isNaN(inputValue)) {
    alert('Only integers RAWR!!!')
  } else if(Number(inputValue) < Number(randomNum)) {
    alert(('You\'re kinda low! OMG!!!'))
  } else if(Number(inputValue) > Number(randomNum)) {
    alert(('You\'re flying kind of high buddy LAWL!!!'))
  } else {
    alert('YOU WIN!!! Reload browser to restart game!')
  }
}
