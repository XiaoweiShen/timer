/*eslint linebreak-style: ["error", "windows"]*/
const timerArgs = process.argv.slice(2); //get the timer arguments
for (let timer of timerArgs) {
  if (timer < 0); //ignore negative number
  if (timer == Number(timer))
    setTimeout(() => {
      process.stdout.write('\x07');
    },timer * 1000);
  else; //ignore non-number input
}
