const randomNum = Math.floor(Math.random() * 100)
export const guessTheNumber = (input) => {
  if(Number.isInteger(input) && input < randomNum) {
    return 'Your guess is kinda low'
  } else if(Number.isInteger(input) && input > randomNum) {
    return 'You too high!!!'
  } else if(input === randomNum) {
    return 'Yeee you win!!!'
    process.exit(0)
  } else if(input.toLowerCase() === 'exit'){
    process.stdout.write('game over! way to quit')
    process.exit(0)
  } else if(!input || isNaN(input)) {
    return 'Insert only integers RAWR!!!'
  }
}
