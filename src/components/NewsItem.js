import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, desc, imgUrl, newsUrl, author, publishedAt } = this.props;
    return (
      <div>
        <div className="card">
          <img
            src={imgUrl}
            className="card-img-top"
            style={{ height: "200px" }}
            alt="Loading"
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{desc}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                Last updated by {author ? author : "Unkown"}
                <br /> on {new Date(publishedAt).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
