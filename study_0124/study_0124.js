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
