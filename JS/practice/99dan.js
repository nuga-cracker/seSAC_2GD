// 이중포문 사용 (포문 안에 포문)
// 구구단 2단~9단 출력하기

// for(let i = 초기값; i < 범위; i++){
//     for(dsg)
// }

for (let i = 2; i < 10; i++) {
  console.log(`----${i}단----`);
  for (let j = 1; j < 10; j++) {
    console.log(`${i}x${j} = ${i * j}`);
  }
}
