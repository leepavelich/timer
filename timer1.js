const times = process.argv
  .slice(2)
  .map(x => Number(x))
  .filter(x => x >= 0)
  .filter(x => typeof x === 'number')
  .map(x => x * 10);

if (!times.length) return;

for (let time of times) {
  setTimeout(() => process.stdout.write('\x07'), time);
}
