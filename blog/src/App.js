import logo from './logo.svg';
import './App.css';
import { useState } from'react';

function App() {
  // 서버에 가저온 데이터를 가정
  let post = "강남 우동 맛집"
  //state문법 사용하기
  let [logo, setLogo] = useState('ReactBlog')
  let [글제목, settitle] = useState('남자 코트 추천')
  let [글제목2, settitle2] = useState('여자 코트 추천')
  let [글제목3, settitle3] = useState('겨울 코트 추천')
  
  
return(
    //  JSX 형식
    <div className="App">
      {/* 헤더 */}

      <div className="black-nav">
        <h4>{logo}</h4>
      </div>

      {/* 본문 */}

      <div className="list">
        <h4>{ 글제목 }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목2 }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목3 }</h4>
        <p>2월 17일 발행</p>
      </div>

    </div>
  );
}

export default App;
