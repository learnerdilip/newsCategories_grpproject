import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NewsPage extends Component {
  state = {
    news: []
  };
  componentDidMount() {
    const api_key = "6bd1b0ea767f47919421ad8e3f978060";
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
        <div className="categories">
          <Link to={"./"}>Go to Home Page</Link>
        </div>
        <div>
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
          <Link to={"./"}>Go to Home Page</Link>
        </div>
      </div>
    );
  }
}
