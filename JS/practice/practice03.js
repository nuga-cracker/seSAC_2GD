let number = "12345";
let string = "문자";
let Object = "null";

console.log(typeof 12345, "isn't", typeof "문자", "data type");
console.log(
  "typeof를 Array이나 null에 사용하면 " +
    typeof null +
    " 결과를 얻을 수 있습니다."
);

// 변수 mathScore, engScore 를 만들어 주세요.
// •mathScore = “77”; engScore = “88”;
// •시험 점수 평균을 계산하여 avgScore 에 저장하고, 이를 출력하는 프로
// 그램을 작성하세요!
// •명시적 형 변환을 사용하여 평균 점수가 정확하게 나와야 합니다!

mathScore = prompt("수학 점수를 입력 하세요");
let engScore = prompt("영어 점수를 입력 하세요");
// let avg = (mathScore + engScore) / 2;
// console.log(avg);

console.log(mathScore);
console.log(engScore);

console.log(typeof mathScore);

mathScore = Number(mathScore);
engScore = Number(engScore);

let avg = (mathScore + engScore) / 2;

console.log(avg);
