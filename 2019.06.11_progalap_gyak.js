cons call = (callback, ...params) 
const korKerulet = (r, pi) => {
  return 2 * r * pi;
};

const korTerulet = (r, pi) => {
  return r * pi * pi;
};

const hszogKerulet = (a, b, c) => {
  if (a > b + c || b > a + c || c > a + b) { return 'Ilyen háromszög nincs.'; }
  { return a + b + c; }
};

const hszogTerulet = (a, m) => {
  return (a * m) / 2;
};
const nszogKerulet = (d, e) => {
  if (d = e) { return 'Ez a négyszög négyzet.'; }
  return 2 * d + 2 * e;
};
const nszogTerulet = (d, e) => {
  return d * e;
};
const sqhas_A = (f, g, h) => {
  return f * g * h;
};
const sqhas_V = (f, g, h) => {
  return 2 * f * g + 2 * f * h + 2 * g * h;
};
const gomb_A = (r) => {
  return 4 * r * r * 3.14;
};
const gomb_V = (r) => {
  return 4 / 3 * r * r * r / 3 * 3.14 / 3;
};
