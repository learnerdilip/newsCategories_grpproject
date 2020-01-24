import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NewsPage extends Component {
  state = {
    news: []
  };
  componentDidMount() {
    const api_key = "41f62212190b4ef68512cf121cfc796b";
    console.log(this.props, "HEREERER");
    const selectedcategory = this.props.match.params.category;
    fetch(
      `https://newsapi.org/v2/top-headlines?category=${selectedcategory}&country=us&apiKey=${api_key}`
    )
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
    console.log("LATEST STATE", this.state.news);
    return (
      <div>
        <ul>
          {this.state.news.map(newsarticle => {
            return <li> {newsarticle.title} </li>;
          })}
        </ul>
        <Link to={"./"}>Go to Home Page</Link>
      </div>
    );
  }
}
