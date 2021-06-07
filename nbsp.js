const allLis = document.querySelectorAll('li');
const allLisInnerTextArrays = [];
const lastTwoWordsWithNBSP = [];
const allLisInnerTextArraysWithNBSP = [];
arrayOfStrings = [];

 

// all li's node list -> text only arrays
allLis.forEach(
  e => allLisInnerTextArrays.push(e.innerText.split(' '))
);

// add the last two words (+ an nbsp) to lastTwoWordsWithNBSP array
allLisInnerTextArrays.forEach(
  function(e) {
    lastTwoWordsWithNBSP.push(`${e[e.length -2]}&nbsp;${e[e.length -1]}`)
  });

// remove last two words
allLisInnerTextArrays.forEach(
  function(e) {
    if (e.length > 3) {e.splice(-2, 2)}
  });

// add last 2 words + nbsp
allLisInnerTextArrays.forEach(
  function(e) {
    e.push(lastTwoWordsWithNBSP[allLisInnerTextArrays.indexOf(e)])
  });

// add space back in, convert to array of strings 
allLisInnerTextArrays.forEach(
  e => arrayOfStrings.push(allLisInnerTextArrays[allLisInnerTextArrays.indexOf(e)].join(', '))
)


// function whichString() {
//   for (i = 0; i < arrayOfStrings.length; i++) {
//     return arrayOfStrings.indexOf(i)
//   }
// }

// function NodeListToArray(nl) {
//   return Array.from(nl)
// }



// replace w new new
// STUCK HERE!!!!
// allLis.forEach(e => e.innerHTML = arrayOfStrings[0])



console.log(arrayOfStrings);
