/* 배열 심화 */

console.log("hi");
let array1 = ["a", "b", "c", "d", "e"];
// 문자열에도 순서가 있더라
// 배열에도 순서가 있습니다. 문자열보다 훨씬 더 중요한 순서입니다.
// Index라고 부릅니다.
console.log(array1);
// console.log(array1.length);
// console.log(array1[0]);

// array1의 마지막 글자를 출력해보세요. => e가 출력되어야함

// console.log("e");

// array1.push("f");

// console.log(array1[4]);

// //배열의 최대 인덱스값 구하는 법 = 배열.length - 1
// console.log(array1[array1.length - 1]);

// 배열.push 함수 // 배열의 마지막에 값을 추가

array1.push("f", "g", "h");
// push 함수 ()안에는 값을 집어넣으면 되는데 하나의 값이 아니라 쉼표로 구분해서 여러 개의 값을 동시에 넣을 수도 있다.

// 배열.unshift 함수 // 배열의 앞에 추가
// unshift 함수는 push 함수와 사용법이 같다.
array1.unshift("0", "1", "2");

//push 함수는 마지막 인덱스 뒤에 입력한 순서대로 들어가고, unshift 함수는 인덱스 0번 앞에 입력한 순서대로 통째로 들어감

// 배열.pop 함수 : ()안에 아무것도 안넣음
// array1.pop();
// array1.pop(); : 한번에 하나씩 맨뒤에 인덱스를 지움
// array1.pop();

// 배열.shift 함수 // pop 함수랑 같은 사용법.
// array1.shift();
// array1.shift();
// array1.shift();

// pop과 shift 모두 하나씩 지우는 공통점이 있지만, pop은 뒤부터 shift는 앞부터 지움

array1.splice(0, 3);
array1.splice(length - 3, 3);
// 배열.splice 함수 : splice(제거를 시작할 index, 지울 횟수)처럼 입력

console.log(array1);

let array2 = [1, 2, 3, 4, 5];

//push 사용해서 뒤에 6,7,8 추가

array2.push("6", "7", "8");
console.log(array2);

// unshift 사용해서 앞에 -2, -1, 0 추가

array2.unshift("-2", "-1", "0");
console.log(array2);

// pop 사용해서 8제거

array2.pop("8");
console.log(array2);

// shift 사용해서 -2, -1 제거

array2.shift("-2");
array2.shift("-1");
console.log(array2);

// splice 사용해서 0~2제가

array2.splice(0, 3);
console.log(array2);

// 4~6제거

array2.splice(1, 3);
console.log(array2);

let array3 = [
  "박건태",
  "곽찬영",
  "김다하",
  "김현진",
  "서경림",
  "최예나",
  "허승원",
  "이종훈",
];

const index = array3.findIndex((name) => {
  if (name === "김다하") {
    return name;
  }
});
// -1 해당 index값이 없을 때, 0이상 index 값이 있다
// 만약 index 라는 변수가 0이상이라면
if (index >= 0) {
  array3.splice(index, 1);
}

console.log(array3);

/* if문 js */
const isPersonAdult = (name, age) => {
  // 인자를 받아올 수 있다. 위치는 () 안, 여러개의 인자는 ,로 구분
  // 받아오는 인자의 이름은 함수를 만드는 사람의 임의대로 조절가능하면 값은 여러개 받아올수 있으나 통상적으로 5개로 합의
  // 인자값의 순서는 꼭 지겨야함
  //   const name = prompt("이름을 입력해주세요.");

  if (name.length <= 1) {
    return alert("이름을 제대로 입력해주세요.");
  }
  //   const age = prompt("나이도 입력해주세요.");
  if (age < 19) {
    //    return alert("청소년입니다");
    return console.log("청소년 입니다.");
  }
  console.log(`${name} 님은 성인입니다.`);
};

console.log(isPersonAdult("최예나", 15));

// isPersonAdult("최예나", 21);
// 인자값 순서대로 넣어야함
