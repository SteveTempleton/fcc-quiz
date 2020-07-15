/**
 * Write a program that prints the numbers from 1 to 100.
 * But for multiples of three print "Zero" instead of the number and for the multiples of five print "Cool".
 * For numbers which are multiples of both three and five print "ZeroCool".
 * This should be written in Javascript and be able to run in the console.
 */
for (i = 1; i < 101; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("ZeroCool")
  }
  else if (i % 3 == 0) {
    console.log("Zero");
  }
  else if (i % 5 == 0) {
    console.log("Cool");
  }
  else {
    console.log(i)
  }
}
