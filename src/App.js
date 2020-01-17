import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

//라우터는 아주 심플한 컴포넌트.
//url에 따라 어느 컴포넌트로 보낼지 정함.(스크린 수)
function App(){
  //라우터는 부분일치해도 맞다고해서 /about url일때 첫번째꺼 두번째꺼 둘다 렌더링해버림
  // ex> /home , /home/introduction 이고 url이 /home이면 둘다렌더링
  // exact옵션으로 진짜 딱 일치했을때만 렌더링하게 만들자
  return (
    //라우터마다 props 보내줌 (ex about으로)
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;