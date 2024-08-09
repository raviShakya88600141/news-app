import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  articles = [
    {
      source: { id: "news-com-au", name: "News.com.au" },
      author: "Andrew McMurtry",
      title: "‘Tragic news’: Cricket legend dead at 55",
      description:
        "The cricket world has been left in shock and mourning after the death of former England batter Graham Thorpe died at the age of 55, the England and Wales Cricket Board announced.",
      url: "https://www.news.com.au/sport/cricket/cricket-world-rocked-by-graham-thorpes-shock-death-at-55/news-story/ed8a0bc6709f344da0430289730f4f5c",
      urlToImage:
        "https://content.api.news/v3/images/bin/e32e9b9d7467a5a05905c06f44dcab31",
      publishedAt: "2024-08-05T07:53:00Z",
      content:
        "The cricket world has been left in shock and mourning after the death of former England batter Graham Thorpe died at the age of 55, the England and Wales Cricket Board announced.\r\nThe left-hander has… [+2510 chars]",
    },
    {
      source: { id: "bbc-sport", name: "BBC Sport" },
      author: null,
      title: "Graham Thorpe: Former England batter dies aged 55",
      description:
        "Former England and Surrey batter Graham Thorpe dies aged 55, says the England and Wales Cricket Board.",
      url: "http://www.bbc.co.uk/sport/cricket/articles/c06kkkkjmz6o",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_sport/eb7a/live/5c0f70d0-6139-11ee-ac8c-9d18dbc280ea.png",
      publishedAt: "2024-08-05T07:37:18.2643617Z",
      content:
        "Former England and Surrey batter Graham Thorpe has died aged 55, the England and Wales Cricket Board has announced.\r\nThorpe played 100 Tests for England between 1993 and 2005, as well as 82 one-day i… [+975 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }
  async updateNews() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });
    this.props.setProgress(40);
    let data = await fetch(url);
    let parseData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=e7a815f5e0f5401094e5a8f36f7fe322&pageSize=${this.props.pageSize}`;
    // this.setState({
    //   loading: true,
    // });
    // let data = await fetch(url);
    // let parseData = await data.json();
    // console.log(parseData);
    // this.setState({
    //   articles: parseData.articles,
    //   totalResults: parseData.totalResults,
    //   loading: false,
    // });
    this.updateNews();
  }
  handlePrevBtn = async () => {
    // console.log("prev");
    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
    //   this.props.category
    // }&apiKey=e7a815f5e0f5401094e5a8f36f7fe322&pageSize=${
    //   this.props.pageSize
    // }&page=${this.state.page - 1}`;
    // this.setState({
    //   loading: true,
    // });
    // let data = await fetch(url);
    // let parseData = await data.json();
    // this.setState({
    //   articles: parseData.articles,
    //   page: this.state.page - 1,
    //   loading: false,
    // });
    this.setState({
      page: this.state.page - 1,
    });
    this.updateNews();
  };
  handleNextBtn = async () => {
    // console.log("next");
    // if (
    //   this.state.page > Math.ceil(this.state.totalResults / this.props.pageSize)
    // ) {
    //   return "";
    // }

    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
    //   this.props.category
    // }&apiKey=e7a815f5e0f5401094e5a8f36f7fe322&pageSize=${
    //   this.props.pageSize
    // }&page=${this.state.page + 1}`;
    // this.setState({
    //   loading: true,
    // });
    // let data = await fetch(url);
    // let parseData = await data.json();
    // this.setState({
    //   articles: parseData.articles,
    //   page: this.state.page + 1,
    //   loading: false,
    // });
    this.setState({
      page: this.state.page + 1,
    });
    this.updateNews();
  };
  fetchMoreData = async () => {
    this.setState({
      page: this.statepage + 1,
    });
    this.updateNews();
  };
  render() {
    return (
      <>
        <h2 className="my-4 text-center">NewsApp - Top Headlines</h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((elem) => {
                return (
                  <div className="col-md-4 my-2" key={elem.url}>
                    <NewsItem
                      title={
                        elem.title ? elem.title.slice(0, 45) : "No headline"
                      }
                      desc={
                        elem.description
                          ? elem.description.slice(0, 88)
                          : "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available"
                      }
                      imgUrl={
                        elem.urlToImage
                          ? elem.urlToImage
                          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlqsyY5rh2kAACkIXtTDO97F5_Hsa7bCYDEg&s"
                      }
                      newsUrl={elem.url}
                      author={elem.author}
                      publishedAt={elem.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="row">
          {!this.state.loading &&
            this.state.articles.map((elem) => {
              return (
                <div className="col-md-4 my-2" key={elem.url}>
                  <NewsItem
                    title={elem.title ? elem.title.slice(0, 45) : "No headline"}
                    desc={
                      elem.description
                        ? elem.description.slice(0, 88)
                        : "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available"
                    }
                    imgUrl={
                      elem.urlToImage
                        ? elem.urlToImage
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlqsyY5rh2kAACkIXtTDO97F5_Hsa7bCYDEg&s"
                    }
                    newsUrl={elem.url}
                    author={elem.author}
                    publishedAt={elem.publishedAt}
                  />
                </div>
              );
            })}
        </div> */}
        {/* <div className="container d-flex justify-content-between my-4">
          <button
            disabled={this.state.page <= 1}
            type="button"
            onClick={this.handlePrevBtn}
            className="btn btn-dark"
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            onClick={this.handleNextBtn}
            className="btn btn-dark"
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  }
}

export default News;
