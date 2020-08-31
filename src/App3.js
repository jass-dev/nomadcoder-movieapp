import React from 'react';
import axios from "axios";
import Movie from "./Movie";
import "./App.css";


class App3 extends React.Component{
  state = {
    isLoading : true,
    movies : []  
  };


  getMovies  = async() => {
    const {data : {data : {movies} } } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating&order_by=desc");
    this.setState({movies, isLoading : false})
    console.log(movies);
  }

  componentDidMount(){
    // setTimeout(
    //   ()=>{
    //     this.setState({isLoading : false})
    //   }, 3000);  
      this.getMovies();
  }
  
  render(){
    const {isLoading, movies} = this.state;
    return <section className="container">
      {this.state.isLoading ? 
        (<div className= 'loader'>
          <span className="loader_text">Loading..</span>
        </div>) :(
          <div className="movies">
            {movies.map( movie => {
                      console.log(movie); 
                      return <Movie key={movie.id}
                                    id = {movie.id}
                                    title={movie.title}
                                    year ={movie.year}
                                    poster = {movie.medium_cover_image}
                                    summary = {movie.summary}
                                    genres = {movie.genres}/>
                      })}
          </div>
        )
      
      }
    </section>;
  }

}



export default App3;
