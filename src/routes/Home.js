import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  //async는 getMovie가 시간이 걸릴수 있으니 기다리라는 소리
  //뭘 기다려? axios를! 을 표시하는게 axios 앞에 await
  getMovies = async () => {
    //객체.data.data.movies를 한번에 가져오는것(ES6)
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false }); //{movies : movies}를 줄인것
  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 3000);
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">"Loading..."</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movies => (
              <Movie
                key={movies.id}
                id={movies.id}
                year={movies.year}
                title={movies.title}
                summary={movies.summary}
                poster={movies.medium_cover_image}
                genres={movies.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
