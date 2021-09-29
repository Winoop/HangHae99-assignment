import React from "react";
import BucketList from "./BucketList";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Add from "./add";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["a", "b", "c"],
    };

    this.text = React.createRef();
  }

  componentDidMount() {}

  render() {
    return (
      <AppWrap className="App">
        <Container>
          <Route
            path="/"
            exact
            render={(props) => <BucketList></BucketList>}
          ></Route>
          <Route path="/add" exact>
            <Add />
          </Route>
        </Container>
        {/* <InputWrap>
          <input type="text" ref={this.text} />
          <button onClick={() => {}}>추가하기</button>
        </InputWrap> */}
      </AppWrap>
    );
  }
}

const AppWrap = styled.div`
  background-color: #eee;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  background-color: #fff;
  width: 50vw;
  max-width: 350px;
  margin: auto;
  height: 80vh;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
`;

const InputWrap = styled.div`
  background-color: #fff;
  width: 50vw;
  max-width: 350px;
  margin: auto;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Content = styled.h4`
  padding: 16px;
  margin: 8px;
  background-color: aliceblue;
`;
export default App;
