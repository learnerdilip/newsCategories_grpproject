import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SelectCategory extends Component {
  state = {
    news: []
  };

  componentDidMount() {
    const api_key = "41f62212190b4ef68512cf121cfc796b";
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`)
      .then(response => response.json())
      .then(news => {
        const newsFetch = news.articles;
        this.setState({
          news: newsFetch
        });
      })
      .catch(err => {
        console.warn("error", err);
      });
  }
  render() {
    return (
      <div>
        <h2>
          {this.state.news.map(newsarticle => {
            return <li> {newsarticle.title} </li>;
          })}
        </h2>
        <Link to={"/Entertainment"}>entertainment</Link>
        <Link to={"/Sports"}>Sports</Link>
        <Link to={"/Business"}>Business</Link>
        <Link to={"/Social"}>Social</Link>
        <Link to={"/Space"}>Space</Link>
        <Link to={"/Etc"}>Etc</Link>
      </div>
    );
  }
}

// const apicategories = [
//   "business",
//   "entertainment",
//   "general",
//   "health",
//   "science",
//   "sports",
//   "technology",
// ];
// const catarr = apicategories.map(cat => {
//   return <Link to={`/${cat}`}>{cat}</Link>;
// });
// console.log(this.state.news);
/* { <ul>
      {this.state.news.map(newsarticle => {
        return <li> {newsarticle.title} </li>;
      })}
    </ul>
    <ul>{catarr}</ul> } */
