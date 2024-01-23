2강 핵심
1. classname
2. 데이터 바인딩 (중괄호)
3. 오브젝트형 자료 (중괄호 두번)
---
      
1. class 는 반드시 classname으로
2. class는 class를 선언해주세요 하는 뜻

3. 변수 선언방식
### var (variable)
- **재선언**되고 __업데이트__ 될 수 있다.
- 호이스팅
  - 변수와 함수선언이 맨 위로 이동하는 특성이있다.
- var의 문제점
  - 외부에 있는 var 변수를 함수안에서 재정의했을때 외부 var이 변경된다
```js
var greeter = "hey";
var times = 4;

if (time > 3) {
    var greeter = "say hello world";
}

console.log(greeter) // "say hello world" 이 출력된다.
``` 

### let
- var의 문제를 해결할 수 있는 변수 선언
- 블록범위 기준으로 정의된다.
- let으로 선언된 변수는 해당 블록 내에서만 사용 가능하다.
```js
let greeting = "Hello";
let times = 4;

if (times > 3) {
    let hello = "Hello World";
    console.log(hello); // Hello World 출력
}
console.log(hello); // hello is not defined
```
- let은 __업데이트__ 될 수 있지만, __재선언__은 불가능하다.
- let또한 호이스팅 된다.
- 호이스팅하면 초기화하지않고 __참조 오류__를 내뿜는다.

### Const
- 재선언, 업데이트 불가능
- 블록 범위 내 접근가능
- 개체의 속성은 업데이트가 가능하다

```js
const greeting = {
    a: "Hello"
    b: "World"
}
// 위 상태에서
// greeting = {
//     words: "Hellodsf"
//} 은 오류를 내지만
// greeting .message = "say hello instead" 는 가능하다 (업데이트)
```

- 중괄호로 데이터 바인딩 가능
- style은 반드시 중괄호로 값을 입력해야한다. 오브젝트 형 자료이기 때문
- class와 유사하게 font-size또 뺄샘을 그대로 인식하기때문에 -는 빼야한다.