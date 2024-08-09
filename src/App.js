import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export class App extends Component {
  pageSize = 9;
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  };
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar color="#f11946" progress={this.state.progress} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  key="general"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  key="business"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  key="entertainment"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  key="health"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  key="science"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  key="sports"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  key="technology"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
