// 워닝 없애고 싶으면
/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from'react';

function App() {
  // 서버에 가저온 데이터를 가정
  let post = "강남 우동 맛집"
  //state문법 사용하기
  let [logo, setLogo] = useState('ReactBlog')
  // let [글제목1, settitle] = useState('남자 코트 추천')
  // let [글제목2, settitle2] = useState('여자 코트 추천')
  // let [글제목3, settitle3] = useState('겨울 코트 추천')
  // 이렇게 일일히 설정해도 되지만 array를 이용해서 하나의 변수로 사용가능하다
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);

  // 동적인 UI만들기
  let [modal, setModal] = useState(false);

  //함수만들기
  function 함수() {
    console.log(1);
  }

  //스타일 만들기
  let btnstyle = { marginTop: '10px' }
  
  
return(
    //  JSX 형식
    <div className="App">

      {/* 헤더 */}

      <div className="flex bg-gray-800 px-3 py-2">
        <h4 className='bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium'>{logo}</h4>
      </div>

      {/* 본문 */}

      <button className='bg-gray-900 text-white rounded-md px-3 py-2 mr-3'
      onClick={ () => {
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }}>가나다순정렬</button>

      <button className='bg-gray-900 text-white rounded-md px-3 py-2 m-3'
      onClick={ () => {
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        글제목변경(copy);
        }}>글 수정</button>


      {
        글제목.map((item, index) => {
          return (
            <div className="list p-3" key={index}>
              <div className='flex '>
                <h4 className='text-base font-bold mb-3 mr-3' onClick={ () => { setModal(!modal) }}> { item } </h4>
                <span onClick={ () => {
                    let copy = [...따봉]
                    copy[index] += 1;
                    따봉변경(copy) 
                  } }>👍</span> { 따봉[index] }
              </div>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }

      {/* <div className="list">
        <h4>{ 글제목[0] } <span onClick={ () => { 따봉변경(따봉+1) } }>👍</span> { 따봉 } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={ modal == true ? ()=>{setModal(false)} : ()=>{setModal(true)} }>{ 글제목[2] }</h4>
        <h4 onClick={ ()=> { setModal(!modal) } }>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {/* <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div> */}

      {/* 모델 역할을 하는 html */}
      {/* <Modal></Modal>*/}
      {/* <Modal/> 중 택 1 */}
      

      {/* if (modal == true) {
        <Modal/>  
      } */}
      {
        modal == true? <Modal/> : null
      }

    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
