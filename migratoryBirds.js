// fonte: https://www.hackerrank.com/challenges/migratory-birds/

// solução baseada em: https://www.youtube.com/watch?v=3lOVeAaytMI
const migratoryBirds = (arr) => {
  const counterBirds = {};

  arr.forEach(bird => {
    counterBirds[bird] = (counterBirds[bird] || 0) + 1;
  })

  const moreRepeteadBird = Math.max(...Object.values(counterBirds));


  const bird = Object.keys(counterBirds).find(bird => counterBirds[bird] === moreRepeteadBird);

  return bird;
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3]))

/* minha solução que estoura o limite de tempo

function migratoryBirds(arr) {
  // Write your code hoere
  let result = 0;
  let frequency = 0;

  const sortedArr = arr.sort()


  for (let number of sortedArr) {

    const numberFrequency = sortedArr.filter(num => num === number).length

    if (numberFrequency > frequency) {
      frequency = numberFrequency;

      result = number;
    }
  }

  return result;
}
*/


/*
Solução feita com a ajuda do Tulio, porém não passa em um dos testes:
function migratoryBirds(arr) {
    // Write your code here
    let result = 0;
    let frequency = 0;
    
    const sortedArr = arr.sort()
    
    // console.log(sortedArr)
    
    // let actual = sortedArr[0];
    // let actualCount = 0;
    
    // for (let number of sortedArr) {
    //   if (number !== actual) {
    //     if (actualCount > frequency) {
    //       result = actual;
    //       frequency = actualCount;
    //     }
        
    //     actualCount = 0;
    //     actual = number;
    //   }
      
    //   if (number === actual) {
    //     actualCount += 1;
    //   }
    // }
    
    return result;
}
*/