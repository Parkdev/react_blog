import logo from './logo.svg';
import './App.css';
import { useState } from'react';

function App() {
  // 서버에 가저온 데이터를 가정
  let post = "강남 우동 맛집"
  //state문법 사용하기
  let [글제목, settitle] = useState('남자 코트 추천')
  let [logo, setLogo] = useState('ReactBlog')


return(
    //  JSX 형식
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <div className="list">
        <h4>{ 글제목 }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
