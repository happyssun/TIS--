"use strict";

/*
 (구조) 분해 할당에 대해서 알아본다.


*/
var points = [20, 30, 40];
var x1 = points[0];
var y1 = points[1];
var z1 = points[2];
console.log(x1, y1, z1);

//분해할당
var x2 = points[0],
  y2 = points[1],
  z2 = points[2]; //points에 있는 값들을 가져간다
console.log(x2, y2, z2);

// 두번째 값 무시하기
var x3 = points[0],
  z3 = points[2];
console.log(x3, z3);

//두번째, 세번쨰 값 무시하기
var x4 = points[0],
  w4 = points[3];
console.log(x4, w4);

/*객체 분해 할당 연산자
-배열에서는 순서대로 매칭.. 객체에서는 이름으로 매칭, 그래서 객체는 이름이 꼭 같아야함*/

var car = {
  type: 't',
  color: 's',
  model: 2021
};

// 1. ES5에서의 분해할당
var type1 = car.type;
var color1 = car.color;
var model1 = car.model;
console.log(type1, color1, model1); // t s 2021

// 2. ES2015에서의 분해할당
var type = car.type,
  color = car.color,
  model = car.model,
  gear = car.gear;
console.log(type, color, model, gear); // t s 2021 undefined

var type2 = car.type,
  color2 = car.color,
  model2 = car.model,
  gear2 = car.gear;
console.log(type2, color2, model2, gear2); // t s 2021 undefined

var func1 = function func1(_ref) {
  var type = _ref.type,
    color = _ref.color;
  console.log(type);
  console.log(color);
};
func1(car);
var func2 = function func2(car) {
  var type = car.type,
    color = car.color;
  console.log(type);
  console.log(color);
};
func2(car);