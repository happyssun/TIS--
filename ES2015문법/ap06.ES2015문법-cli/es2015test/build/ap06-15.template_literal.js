"use strict";

/*

    ES2015의 template literal( 백틱, ``) 에 대해서 알아본다.
    template literal 의 용도
    1. 다중 문자열 생성시 사용
    2. 변수 치환

    예제)
    `${yell} ${yell}!!!`
*/

var name = '홍길동';
var age = 20;
var str = "\nabc ".concat(name, "\ndef\nkfa\n");
console.log(str);
var product = {
  name: '도서',
  price: '4200원'
};
var msg = "\n\uC81C\uD488 ".concat(product.name, "\uC758 \uAC00\uACA9\uC740 ").concat(product.price, "\uC785\uB2C8\uB2E4");
console.log(msg);