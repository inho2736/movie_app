import React from 'react';
import PropTypes from "prop-types";

//이건 function component
// function App() {
//   return <div>hello</div>;
// }

//이게 class component 고 
//react는 기본적으로 모든 class component의 render 메소드를 호출함
// class App extends React.Component{
//   state = {count : 0};  
//   render(){
//     return (<div>        </div>);
//   }
// }


//동적 데이터를 담는 state를 가지는게 class component의 특징
class App extends React.Component{
  state = {
    count : 0
  };
  //안에 메소드 선언. 자바스크립트 문법임.
  add = () => {
    //react에서 state의 값 직접mutate하면 안됨.
    //이렇게하면 값 변경후 render가 자동 재실행 되지 않아 변경값이 화면에 안나옴    
    //this.state.count = 1;
    //따라서 setState써야함(setState는 state 값 바꾸고 render함수 자동 재실행해줌)
    //virtual DOM덕에 새로고침없이 값 변화 바로 뿌려줌
    //this.setState({count : 1});
    //this.setState({count : this.state.count + 1});
    //setstate에서 state 또 접근하는건 좋지않으니
    this.setState( current => ( {count : current.count + 1} ) );
  };
  minus = () => {
    //this.setState({count : -1});
    //this.setState({count : this.state.count - 1});
    this.setState( current => ( {count : current.count - 1} ) );
  };
  render(){
    return (
      //버튼에 onClick prop이 내장되어있음. react의 특징!
      <div>
        <h1>The number is :{this.state.count}</h1>
        <button onClick = {this.add}>add</button>
        <button onClick = {this.minus}>minus</button>
      </div>
    );
  }
}

export default App;
// React.Component 에서 render말고 다른 메소드 중 life cycle method
// 리액트가 컴포넌트 생성하고 없애는 것
// 렌더함수 수행전후로 여러 method 수행됨
//마운팅(컴포넌트 생성) 업데이팅(위에서 우리가 만든 method 수행) 언마운팅(컴포넌트 종료)
//https://reactjs-kr.firebaseapp.com/docs/react-component.html