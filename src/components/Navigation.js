import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    //<a href = '/'>이렇게 안하는 이유는 이렇게 하면 새로고침되어서 나오기 때문
    //(리액트 죽었다가 다시 생성되는..)
    //우리는 spa를 원하니깐 link를 쓰자

    //주의
    //Link는 router 밖에서 쓸 수없다. 
    //App.js 가보면 Navigation 컴포넌트가 라우터 안에 있음
    //Link를 router밖에서 쓸수 없다는 소리지 모든걸 router안에 넣어야한다는건 아님.
    //Link쓸때만 써라 이말..?
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;