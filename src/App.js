import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./movies";
import "./movie.css";

// function Food(props) {
//   console.log(props);
//   return (
//     <>
//       <h1>I like {props.name}</h1>
//     </>
//   );
// }

// const foods = [{ name: "ramen" }, { name: "jaja" }, { name: "lolo" }];

// function App() {
//   return (
//     <>
//       {foods.map((fav) => (
//         <Food name={fav.name} />
//       ))}
//     </>
//   );
// }

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log("시작");
  // }
  // state = {
  // count: 0,
  // };
  // add = () => {
  //   this.setState((current) => ({ count: current.count + 1 }));
  // };
  // minus = () => {
  //   this.setState((current) => ({ count: current.count - 1 }));
  // };

  // componentDidMount() {
  //   console.log("디드마운트");
  // }

  // componentDidUpdate() {
  //   console.log("업데이트");
  // }

  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      " https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    // console.log(movies);
    this.setState({ movies: movies, isLoading: false });
  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 3000);
    this.getMovies();
  }

  render() {
    // console.log("렌더링");
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

{
  /* <button onClick={this.minus}>Minus</button>  */
}
{
  /* <button onClick={this.add}>Add</button> */
}
{
  /* <h1>The number is: {this.state.count}</h1> */
}
{
  /* // 시작할때 , 랜더할때,  업데이트, 마운트할때, 언마우트 */
}
export default App;
