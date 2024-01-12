1. 블로그 목록 만들기 할거임

- return 안에는 하나의 div로 시작해서 하나의 div로 끝내야한다.

### 리엑트 state는?

- 자료 잠깐 저장할땐 변수 let var const
- 리엑트에는 state도 있다.

### state 문법은?
1. import {useState}
2. userState(보관할 자료)
3. let [작명, 작명] 으로 변수에 저장


```js
import { useState } from'react';
let [a,b] = useState('남자 코트 추천')
{a}
```
- 위에서 a는 변수
- b는 state 변경을 도와주는 함수 (디스트럭처링)

### Destructuring(비구조화) 문법
- [1,2,3]는 어레이 (배열)
    - ex) let num = [1,2,3]
    - 1과 2가 너무 유용할때
- let a = num[0]; // 1
- let c = num[1]; // 2

- let [a, c] = [1, 2]; // a=1, c=2 // 이거 디스트럭쳐링
- 그래서 언제 쓸까?
    - 변수랑 state는 차이점이 있다.
    - 변수의 글자가 갑자기 변경이 됐을때 -> html의 변경요청을 해야한다.
    - 하지만 state는 값이 변경되면 __자동으로 재렌더링이 된다__