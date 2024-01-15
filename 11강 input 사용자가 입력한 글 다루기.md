## input 사용하기
1. 종류가 여러개
- text, textarea 등등
2. 비슷한 내용으로 selectbox도 있다.
3. 입력한 값 가져오기
```html
<input onChange={(e) => {함수}>
```
- e.target: 이벤트가 발생한 html 태그
- e.target.value: 입력한 

- 비고
> 이벤트가 상위 요소로 퍼지는 현상: 이벤트 버블링
     - 이걸 막고 싶으면
```js
(e)=> {
    e.stopPropagation(); 이외 함수
}
```

#### 숙제
글 추가 삭제 만들어보기

cf) splice() 원하는 순번 삭제하기