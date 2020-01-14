import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//조기 <App /> 는 JSX. html과 js의 혼종.. react에서만 쓰는거
//react 어플리케이션은 하나의 컴포넌트(여기선 App)만 렌더링함. 
ReactDOM.render(<App />, document.getElementById('root'));

