// Your code here.

/*

printing 1 to 100 , 
each number divisible by 5 will instead print 'FIZZ'
each number divisible by 3 will instead print 'BUZZ'

*/
let counter = 1

while (counter <= 100) {
  if (counter % 5 == 0) console.log('FIZZ');
  else if (counter % 3 == 0) console.log('BUZZ');
  else console.log(counter);
  counter ++;
}