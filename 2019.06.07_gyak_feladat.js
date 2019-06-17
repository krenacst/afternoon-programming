const walk = (firstStep, secondStep) => {
  switch (firstStep) {
    case 'up':
      switch (secondStep) {
        case 'up':
          console.log('Tultoltad!');
          console.log('X');
          break;
        case 'down':
          console.log('Ez a négyes mező');
          console.log('4');
          break;
        case 'left':
          console.log('Ez a nullás mező');
          console.log('0');
          break;
        case 'right':
          console.log('Ez a kettes mező');
          console.log('2');
          break;
      }
      break;
    case 'left':
      switch (secondStep) {
        case 'up':
          console.log('Ez a nullás mező');
          console.log('0');
          break;
        case 'down':
          console.log('Ez a hatos mező');
          console.log('6');
          break;
        case 'left':
          console.log('Tultoltad');
          console.log('X');
          break;
        case 'right':
          console.log('Ez a négyes mező');
          console.log('4');
          break;
      }
      break;
    case 'down':
      switch (secondStep) {
        case 'up':
          console.log('Ez a kettes mező!');
          console.log('2');
          break;
        case 'down':
          console.log('Ez a nyolcas mező');
          console.log('8');
          break;
        case 'left':
          console.log('Ez a négyes mező');
          console.log('4');
          break;
        case 'right':
          console.log('Tultoltad');
          console.log('X');
          break;
      }
      break;
    case 'right':
      switch (secondStep) {
        case 'up':
          console.log('Ez a négyes mező');
          console.log('4');
          break;
        case 'down':
          console.log('Tultoltad');
          console.log('X');
          break;
        case 'left':
          console.log('Ez a hatos mező');
          console.log('6');
          break;
        case 'right':
          console.log('Ez a nyolcas mező');
          console.log('8');
          break;
      }
  }
};
walk('up', 'right');
