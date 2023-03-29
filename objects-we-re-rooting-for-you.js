//function called judgeVegetable()that will decide which vegetable is best based on a given judging characteristic


const judgeVegetable = function (vegetables, metric){
  const resultsArray = [];
  const bestVeg = [];

// loop through vegetables array
  for (let i = 0; i < vegetables.length; i++) {

// push metric info from i loop to new resultsArray
    resultsArray.push(vegetables[i][metric]);
  }

// use Math.max() fucntion to find largest integer in resultsArray
  const winner = Math.max(...resultsArray);

// loop through vegetables array
  for (let j = 0; j < vegetables.length; j++) {

// use if statement to compare info from j loop to winner (largest integer in resultsArray) and find match
    if (vegetables[j][metric] === winner){

// push match to bestVeg array
      bestVeg.push(vegetables[j].submitter);
    }
  } let winResult = bestVeg.toString(); 
  return winResult;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric))
