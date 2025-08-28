let arr = [2, 4, 9, 10, 45, 67, 8, 90];
console.log(arr, "boshlanishdagi array");

let juftSonlar = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    juftSonlar.push(arr[i]);
  }
}

console.log(juftSonlar, "juft sonlarga ajratilgan array");
