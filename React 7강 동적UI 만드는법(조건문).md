## 동적인 UI만드는 Step
1. html css로 미리 디자인 완성
```html
<div className="modal">
    <h4>제목</h4>
    <p>날짜</p>
    <p>상세내용</p>
</div>
```

2. 출력할 위치에 컴포넌트 조건문 삽입
```react
{modal == true? <Modal/> : null} 
```

2. UI의 현재 상태를 state로 저장
```react
let [modal, setModal] = useState(false);
```

3. state에 따라 UI가 어떻게 보일지 작성 (조건문)
```html

<h4 onClick={ modal == true ? ()=>{setModal(false)} : ()=>{setModal(true)} }>{ 글제목[2] }</h4> // 내가 처음에 했던 방식
<h4 onClick={ ()=> { setModal(!modal) } }>{ 글제목[2] }</h4> // 더 요약 할 수 있는 방법ㄴ
```

