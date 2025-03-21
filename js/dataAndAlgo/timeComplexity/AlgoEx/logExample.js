function logTime(arr) {
  let numberOfLoops = 0
  for (let i = 1; i < arr.length; i *= 2) {
    numberOfLoops++
  }
  return numberOfLoops
}
let loopsA = logTime([1]) // 0 loops
let loopsB = logTime([1, 2]) // 1 loop
let loopsC = logTime([1, 2, 3, 4]) // 2 loops
let loopsD = logTime([1, 2, 3, 4, 5, 6, 7, 8]) // 3 loops
let loopsE = logTime(Array(16)) // 4 loops
let loopsF = logTime(Array(1000)) // only 10 loops!!
let loopsG = logTime(Array(100000)) // Only 7 more loops despite being 100x the size!
console.log(loopsG)