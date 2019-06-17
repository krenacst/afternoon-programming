let samTar = 8;
let noDb = 3;
let noHp = 2;
let himDb = 8;
let himHp = 4;

while (samTar > 0) {
  if (samTar > noHp && noDb > 0) {
    samTar -= noHp; // samTar = samTar - noHp;
    noDb--; // noDb = noDb - 1;
  }
  if (noDb == 0 && samTar > himHp && himDb > 0) {
    samTar -= himHp;
    himDb--;
  }
  if (noDb == 0 && samTar < himHp || samTar < noHp) {
    console.log(samTar);
    break;
  }
}
