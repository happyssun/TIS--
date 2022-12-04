/*
 (구조) 분해 할당에 대해서 알아본다.


*/
const points = [20, 30, 40];
const x1 = points[0];
const y1 = points[1];
const z1 = points[2];

console.log(x1, y1, z1);

//분해할당
const [x2, y2, z2] = points; //points에 있는 값들을 가져간다
console.log(x2, y2, z2);

// 두번째 값 무시하기
const [x3, , z3] = points;
console.log(x3, z3);

//두번째, 세번쨰 값 무시하기
const [x4, , , w4] = points;

console.log(x4, w4);

/*객체 분해 할당 연산자
-배열에서는 순서대로 매칭.. 객체에서는 이름으로 매칭, 그래서 객체는 이름이 꼭 같아야함*/

const car = {
  type: 't',
  color: 's',
  model: 2021,
};

// 1. ES5에서의 분해할당
const type1 = car.type;
const color1 = car.color;
const model1 = car.model;
console.log(type1, color1, model1); // t s 2021

// 2. ES2015에서의 분해할당
const { type, color, model, gear } = car;
console.log(type, color, model, gear); // t s 2021 undefined

const { type: type2, color: color2, model: model2, gear: gear2 } = car;
console.log(type2, color2, model2, gear2); // t s 2021 undefined

const func1 = ({ type, color }) => {
  console.log(type);
  console.log(color);
};
func1(car);

const func2 = function (car) {
  const { type, color } = car;
  console.log(type);
  console.log(color);
};
func2(car);
