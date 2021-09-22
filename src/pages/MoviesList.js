import React from "react";
import './MoviesList.css';
class MoviesList extends React.Component{
  constructor(props){
    super(props);
    this.state={loading:true, movie:[],page:1}
  }
  async componentDidMount(){
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=dec47b2aeb60c1ba8891551257dfe3b3&language=en-US&page="+this.state.page;
    const response=await fetch(url);
    const data=await response.json();
    this.setState({movie:data.results,loading:false});
  }
  pre=()=>{
    const Pre=document.getElementById("pre")
    const Nex=document.getElementById("nex")
    if(this.state.page==1){
      Pre.disabled=true;
    }
    if(this.state.page>1){
      this.setState({page:this.state.page-1});
      Pre.disabled=false;
      Nex.disabled=false;
    }
  }
  nex=()=>{
    const Pre=document.getElementById("pre")
    const Nex=document.getElementById("nex")
    if(this.state.page==500){
      Nex.disabled=true;
      Pre.disabled=false;
    }
    if(this.state.page<500){
      this.setState({page:this.state.page+1});
      console.log(this.state.page)
      Nex.disabled=false;
      Pre.disabled=false;
    }
  }
  render(){
    if(this.state.loading){
      return <div>loading...</div>;
    }
  if(!this.state.movie.length){
    return<div>Didn't get a movie</div>
  }
  return(
    <div>
      <div>
      <button onClick={this.pre} id="pre">Pre</button><button onClick={this.nex} id="nex">Nex</button>
      </div>
      {this.state.movie.map(movielist=>(
        <div id="Word">
        <img src={"https://image.tmdb.org/t/p/w500"+movielist.poster_path}/>
        <br/>
        <button>Liked</button>
        <button>Blocked</button>
        <div>{movielist.title}</div>
        <div>Release Date: {movielist.release_date}</div>
        <div>Vote Count: {movielist.vote_count}| Average Score: {movielist.vote_average}/10</div>
        <div>{movielist.overview}</div>
        </div>
      ))}
    </div>
  )

  }
}

export default MoviesList;
