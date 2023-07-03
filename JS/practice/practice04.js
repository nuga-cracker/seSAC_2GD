/*
함수 만들기 실습1
•multifly() 함수를 만들어주세요!
•조건
• 매개변수로 두 개의 숫자를 입력받기
• 두 인자의 곱을 ‘반환’ 하는 함수를 정의
• !! 출력이 아닌 반환하는 함수
• 콘솔창에 출력하고 싶다면 아래처럼 테스트 해보기
• console.log(multifly(3,7)); // 21
• console.log(multifly(2,2)); // 4
*/

// helloWorld1();
// console.log("----");
// function helloWorld1() {
//   console.log("hello world1");
// }

function multifly(num1, num2) {
  return num1 * num2;
}

multifly();

console.log(multifly(3, 7));
console.log(multifly(2, 2));

/*
함수 만들기 실습2
•square() 함수를 만들어주세요!
•조건
• 매개변수로 하나의 숫자를 입력받기
• 입력받은 수의 제곱을 콘솔창에 출력하는 함수 정의
• 콘솔창에 출력하고 싶다면 아래처럼 테스트 해보기
• square(4)// 16
• square(11); // 121
• square(5); // 25
*/

function square(num) {
  console.log(num ** 2);
  return num ** 2;
}

square(4);
square(12);
square(5);
