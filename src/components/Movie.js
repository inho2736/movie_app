import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

//여기서는 state가 필요하지 않으므로 function컴포넌트 사용

function Movie({ id, year, title, summary, poster, genres }) {
  ///
  //console.log(props); //
  // 함수의 파라미터를 props로 지정해서 콘솔에 찍으면 그냥 딱 저 위에 객체모양으로 나옴
  // 클래스의 this.props 는 디테일 컴포넌트에서 보이는 것처럼 로케이션과 히스토리 형태로 좀더 복잡하게 나옴.
  //
  //map함수 각 element에 유일한 key 있어야 하는데 여기는 id없음
  //map에 index(이름 아무거나)있으니 그거로 써서 오류 없애기
  return (
    //리액트 라우터 공식문서가면 링크의 to에 객체쓰는것 나옴
    <div className="movie">
      <Link
        to={{
          pathname: `/movie/${id}`,
          state: {
            year,
            title,
            summary,
            poster,
            genres
          }
        }}
      >
        <div className="movie">
          <img src={poster} alt={title} title={title} />
          <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <ul className="movie__genres">
              {genres.map((genre, index) => (
                <li key={index} className="genres__genre">
                  {genre}
                </li>
              ))}
            </ul>
            <h5 className="movie__year">{year}</h5>
            <p className="movie__summary">{summary.slice(0, 180)}...</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
