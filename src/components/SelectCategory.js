import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SelectCategory extends Component {
  state = {
    news: []
  };

  componentDidMount() {
    const api_key = "6bd1b0ea767f47919421ad8e3f978060";
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
        <div className="categories">
          <Link to={"/entertainment"}>Entertainment</Link>
          <Link to={"/sports"}>Sports</Link>
          <Link to={"/business"}>Business</Link>
          <Link to={"/health"}>Health</Link>
          <Link to={"/science"}>Science</Link>
          <Link to={"/technology"}>Technology</Link>
          <Link to={"/general"}>General</Link>
        </div>
        <div className="homenews">
          {this.state.news.map((newsarticle, index) => {
            return (
              <div key={index} className="newscard">
                <img alt={newsarticle.title} src={newsarticle.urlToImage} />
                <div className="newscarddetail">
                  <h3> {newsarticle.title} </h3>
                  <p> {newsarticle.description}</p>
                  <button>
                    <a href={newsarticle.url}>source</a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="categories">
          <Link to={"/entertainment"}>Entertainment</Link>
          <Link to={"/sports"}>Sports</Link>
          <Link to={"/business"}>Business</Link>
          <Link to={"/health"}>Health</Link>
          <Link to={"/science"}>Science</Link>
          <Link to={"/technology"}>Technology</Link>
          <Link to={"/general"}>General</Link>
        </div>
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
