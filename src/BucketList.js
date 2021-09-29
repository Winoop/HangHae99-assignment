// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

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
const BucketList = ({ list }) => {
  const history = useHistory();

  return (
    <div>
      <Title>MY DICTIONARY</Title>
      <Line />
      <Content>안캉스; 내부의 '안'과 바캉스의 합성어.</Content>
      <Content>닭고야; 닭가슴살, 고구마, 야채의 줄임말.</Content>
      <Content>혼동노; 혼자 동전 노래방을 가다의 준말.</Content>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <button
        onClick={() => {
          history.push("/add");
        }}
      >
        추가하기
      </button>
    </div>
  );
};

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  background-color: aliceblue;
`;

const Content = styled.h4`
  padding: 16px;
  margin: 8px;
  background-color: aliceblue;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
`;

// 우리가 만든 함수형 컴포넌트를 export 해줍니다.
// export 해주면 다른 컴포넌트에서 BucketList 컴포넌트를 불러다 쓸 수 있어요.
export default BucketList;
