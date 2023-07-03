// 0~100의 숫자 중에서 2또는 5의 배수 총합 구하기
// 나머지 연산자 % 사용
// 5%3 -> 2 (5를 3으로 나눈 나머지의 2의 값을 반환)

// 2또는 5의 배수의 합!
// 1. for문으로
let sum3 = 0;
for (let i = 0; i < 101; i++) {
  if (i % 2 === 0 || i % 5 === 0) {
    sum3 = sum3 + i;
  }
}
console.log(sum3);

// 2.while
let sum4 = 0;

let n6 = 0;
while (n6 < 101) {
  if (n6 % 2 === 0 || n6 % 5 === 0) {
    sum4 += n6;
  }
  n6++;
}
console.log(sum4);
