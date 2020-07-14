import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    //영화 각각 클릭이 아닌 그냥 url로만 들어가면 location.state가 안보내지므로
    //undefined임
    //props의 history에 있는 함수들로 리다이렉트 하기
    const { location, history } = this.props;
    // console.log(location.state);
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    //렌더함수 실행 후 componentDidMount실행되므로 리다이렉트 전에 렌더됨
    //렌더에서 location.state없는 경우를 한번더 체크해야 에러안남
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}
export default Detail;
