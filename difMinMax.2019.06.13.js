const difMinMax = (minArr, maxArr) => {
  const minArray = (minArr) => {
    let min = Number.POSITIVE_INFINITY;
    for (let i = 0; i < minArr.length; i++) {
      if (minArr[i] < min && minArr[i] % 2 === 0) {
        min = minArr[i];
      }
    }

    return min;
  };

  const maxArray = (maxArr) => {
    let max = Number.NEGATIVE_INFINITY;
    for (let j = 0; j < maxArr.length; j++) {
      if (maxArr[j] > max && maxArr[j] % 3 === 0) {
        max = maxArr[j];
      }
    }
    return max;
  };

  return maxArray(maxArr) - minArray(minArr);
};
let maxArr = [3, 5, 99, 8, 5];
let minArr = [12, 3, 16, 45, 10];

let t = difMinMax(minArr, maxArr);
if (t < 0) { console.log('Negatív eredményt kapnál! Próbáld újra!'); } else { console.log('A két tömb minimum és maximum értéke közötti különbség: ', t); }
