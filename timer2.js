const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter a value: ', answer => {
  if (answer === 'b') process.stdout.write('\x07')
  if (Number(answer) > 0 && Number(answer) < 10) {
    console.log('setting timer for x seconds...')
    setTimeout(() => process.stdout.write('\x07'), answer * 1000)

    process.on('SIGINT', () => {
      console.log('Thanks for using me, ciao!')
      process.exit();
    });
  };
  rl.close()
})