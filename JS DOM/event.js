const btn1 = document.querySelector(".btn--black");
const btn2 = document.querySelector(".btn--green");
const btn3 = document.querySelector(".btn--blue");
const btn4 = document.querySelector(".btn--red");

// btn1.addEventListener(동작이름, function () {});
btn1.addEventListener("click", function () {
  alert("버튼 1을 클릭");
});

// btn1.addEventListener(동작이름, function () {});
btn1.addEventListener("mouseover", function () {
  btn1.style.backgroundColor = "gray";
});

// btn2
const container = document.getElementById("container");
console.log(container);

btn2.addEventListener("click", () => {
  const div = document.createElement("div");
  div.innerText = "안녕";
  div.style.backgroundColor = "pink";
  container.append(div);
});

// btn3
function changeColor("click,()=>"){
 const divs = document.querySelectorAll("#container div");
    for(let div of divs){
       console.log 
    }
    // 맨 마지막 요소만 빨강색으로 변경
    divs[9].style.back
}