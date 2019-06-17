const ident = (valaki) => {
  const person = { name1: 'John', name2: 'Doe', age: 35 };
  console.log('His name is: ', person['name1'], ',', 'his second name is:', person['name2'], ',', 'His age is: ', person['age'], '.');
};
ident();

const telszam = (arr) => {
  let b = [];
  let j = 0;
  for (let i = 0; i < 2; i++) {
    arr[i] = b[j];
  }
  return b;

  let c = [];
  let g = 0;
  for (let k = 0; k < 7; k++) {
    arr[i + 2] = c[g];
  }
  return c;
};
telszam();
