// consle.log("hi")

// 알럿트 - 경고 -> 알림
// alert("뭘 봐");
// alert() 괄호 안에 글을 적으면 그대로 경고창 띄워줌 문자열 string 스츠링
// 잘못했을때 => 내가 개발해놓은 흐름대로 사용자가 흘러가지 않을때?
// ++ 좋은 소식을 알릴때도 가능
// alert("환용합니다.");

const 안녕 = "ㅎㅇ";
// alert(안녕);

// 컨펌 -> 확인한다.
// if 조건문
// if (나의 조건) {
// 내가 작성하고 싶은 코드는 항상 {} 안에 적음
// }

// else => 엘쓰 = 선행되어서 선언한 조건이 아니면
// 앞의 조건이 아닌 모든 조건을 말함
// 100 => 1:99
// if (confirm("정말 지울거임?")) {
//   console.log("삭제 ㄱㄱ");
//   return;
// } else {
//   console.log("삭제 ㄴㄴ");
// }

document.write("<button  id='btn'>MyBtn</button>");

const btn = document.getElementById("btn");

btn.ineerText = "버튼";

// btn.onclick = () => {
//   // const name = prompt("이름이 모에요?");
//   // const realname = "정수영";
//   // if (name.length === 0) {
//   //   return alert("이름을 입력하세요.");
//   // }
//   // if (name !== realName) {
//   //   return alert("이름이 다릅니다.");
//   // }

//   // alert("이름이 맞네요!");
//   const text = "정수영";
//   const first = "수영";
//   const last = "정";
//   console.log({ text });
//   const fullName = `${last} ${first}`; // ``안에는 변수 적을 수 있음 ${} 안에 변수명 적으면 됨

//   // 문자열 + 문자열 하고 싶을 때는 기호 + 를 사용해서 붙임
//   // 띄워쓰기 1칸을 구현하고 싶을 때 ``사용 `${변수명} ${변수명2}`
//   // 문자열의 길이 = 변수명.length
//   console.log(fullName.length);
//   // 문자열의 길이가 0일때 ==== 빈 문자열 === 아무것도 안씀
//   btn.innerText = `${last} ${first}`;
// };

// 함수 선언하기

// const/let/var 화살표 함수
// function 함수명
function 더하기() {
  // 코드 작성하는 곳
  // console.log("더하기 하겠음");
  // const a = 50;
  // const b = 49;
  // const res = a * b;
  // const ta = "50";
  // const tb = "49";
  // const tres = ta / tb;
  // console.log(res);
  // console.log(typeof a, b);
  // console.log(typeof ta, tb);
  // console.log(tres);
  // 비교하는 법
  // 문자열 ==, !=, ===, !==는 반대 또는 아니다 뜻
  // == 같다, === 같다, != 다르다, !== 다르다
  // == 얕은 비교, !=
  // === 깊은 비교 => 타입체크까지 함, !==
  // 3개가 더 안전하고 좋음
  // if (a == ta) {
  //   console.log("같은 값입니다.");
  // } else {
  //   console.log("다른 값입니다.");
  // }
  // 더하기 +, 빼기 -, 곱하기 *, 나누기 /
}

// 문자열, 숫자
// null, undefined => 아무 값도 없음
// null vs undefined
// null => 아무 값도 없는 값
let baby = {
  regi: null,
};

// baby.regi = "123123123312";

// const me = 'me'
// [] array

// object 오브젝트, 압젝ㅌ 객체

// Primitive value 원시적인 기초적인 친구들 => 문자열, 숫자,
// undifined, null

//object 압젝트, 오브젝트 객체 {}, []
// {} object 객체
// [] = array 배열

// 메모리를 따로 할당해서 만들어줌
// 비용이 발생 모시고 있는 긋이 대우

// {}=> 객체
const user = {
  name: "정수영", // ,로 구분
  tel: "01012341234",
  id: "123123",
};

const 유저확인 = () => {
  console.log(user);

  // 1.user의 하위 값 접근법 2가지 있음
  console.log(user.name);
  console.log(user.tel);
  console.log(user.id);

  console.log(user["name"]);
  console.log(user["tel"]);
  console.log(user["id"]);

  // 1. me라는 이름의 변수를 선언하고 객체를 만든다.
  const me = {
    first: "수영",
    last: "정",
    age: 26,
    gender: "남성",
    family: {
      father: "정아빠",
      mother: "정엄마",
    },
  };
  // 2. me라는 객체 안에 값으로 first => 이름, last => 성
  // 3. me의 last와 first를 각각 출력해보세요. console.log()
  console.log(me.last, me.first);
  console.log(me["last"], me["first"]);

  console.log(me);
  console.log(me.family.father);
};

let array = ["a", "b", "c", "d", "e", "f", "g"];
let users = [];
const 배열확인 = () => {
  console.log("배열 만들어요");
  // 삭제하는 법 pop, shift 내장함수 사용
  // 배열.pop() => () 안에 아무것도 안넣음 대신에 제일 뒤에거 한개지룸// 여러개 안돼
  // array.pop();
  // array.shift();
  // 배열.splice() => (index, count) 몇 번째 인덱스인지 넣고, 해당 index부터 삭제를 몇 번 할지
  const string = prompt("삭제하고 싶은 알파벳을 입력하세요/");
  const index = array.findIndex((text) => {
    // text랑 내가 입력할 무언거라 같은게 있다면
    if (text === string) {
      return text;
    }
  });

  if (index < 0) {
    return alert("없음");
  }

  array.splice(index, 1);
  // 배열은 순서가 있음
  // const text = prompt("알파벳을 입력하세요.");
  // array.push(text); // push() => 배열의 제일 마지막 아이템을 추가함

  // array.unshift("e", "f", "g"); // unshit
  // array.push(text);
  console.log(array.length);
  // const index = array.length - 1;
  console.log(array[index]);
  console.log(array);
};
// function, const, let, var 중 하나를 선택해서 함수명 배열가지고놀기를 만들어주세요.
function 배열가지고놀기() {
  let array = ["a", "b", "c", "d"];
  // d뒤에 e추가하셈
  // 배열.push() 사용
  array.push("e");
  console.log(array);
  array.push("f");
  console.log(array);
  array.push("g", "h", "i");
  console.log(array);
}
const unshift배우기 = () => {
  let array = ["a", "b", "c", "d"];
  array.push("e");
  console.log(array);
  array.push("f");
  console.log(array);
  array.push("g", "h", "i");
  console.log(array);
};
btn.onclick = 배열가지고놀기;

// 1. 배열 만드는 법 => 배열을 선언하는 법
// 2. 배열에 추가하는 법 2가지
// 2-1. push 함수 사용
// 2-2. unshift 함수 사용
