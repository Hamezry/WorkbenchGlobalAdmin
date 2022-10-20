/**
 * 
 * @param {number} number 
 * @param {number} parts 
 */
function splitNumberIntoParts(number, parts) {
  const arr = new Array();
  arr[0] = 0;
  const temp = []


  let n = Math.round(number / parts);

  for (let i = 0; i < parts; i++) {
    temp.push(n)
  }

  return temp
}


console.log(splitNumberIntoParts(21, 10))