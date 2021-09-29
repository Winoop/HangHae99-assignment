// 리액트 패키지를 불러옵니다.
import React from "react";
import "./style.css";
import styled from "styled-components";

// 함수형 컴포넌트는 이렇게 쓸 수도 있고
// function Bucketlist(props){
// return (
// <div>버킷 리스트</div>
// );
// }

// 이렇게 쓸 수도 있어요. =>가 들어간 함수를 화살표 함수라고 불러요.
// 저희는 앞으로 화살표 함수를 사용할거예요.
// 앗 () 안에 props! 부모 컴포넌트에게 받아온 데이터입니다.
// js 함수가 값을 받아오는 것과 똑같이 받아오네요.
// {list : 어떤 값을 받아온 것!}
const Add = ({ list }) => {
  // Quiz 1: my_list에 ['a', 'b', 'c'] 대신 부모 컴포넌트가 넘겨준 값을 넣으려면 어떻게 해야할까요?

  // 컴포넌트가 뿌려줄 ui 요소(리엑트 엘리먼트라고 불러요.)를 반환해줍니다.
  return (
    <div>
      <h1 style={{ color: "slateblue" }}>단어 추가하기</h1>
      <hr style={{ width: "100%" }} />

      <Content style={{ color: "darkred", textAlign: "left" }}>
        단어
        <br></br>
        <input type="text" size="41" />
      </Content>

      <Content style={{ color: "darkred", textAlign: "left" }}>
        설명
        <br></br>
        <input type="text" size="41" />
      </Content>

      <Content style={{ color: "darkred", textAlign: "left" }}>
        예시
        <br></br>
        <input type="text" size="41" />
      </Content>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <button
        onClick={() => {
          ("/BucketList");
        }}
      >
        추가하기
      </button>
    </div>
  );
};

const Content = styled.h4`
  padding: 16px;
  margin: 8px;
  background-color: aliceblue;
`;

export default Add;

// 우리가 만든 함수형 컴포넌트를 export 해줍니다.
// export 해주면 다른 컴포넌트에서 BucketList 컴포넌트를 불러다 쓸 수 있어요.
