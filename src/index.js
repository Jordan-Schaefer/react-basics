import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import JSON from './db.json'

import Header from './components/header';
import NewsList from './components/news-list';


class App extends Component {
  state = {
    news: JSON,
    filtered: []
  }

  getKeyword = (event) => {
    let keyword = event.target.value;
    let filtered = this.state.news.filter((item) => {
      return item.title.indexOf(keyword) > -1
    });
    this.setState({
      filtered
    })
  }

  render () {
    const filt = this.state.filtered;
    return (
      <div>
        <Header keyWords={this.getKeyword}/>
        <NewsList news={filt.length === 0 ? this.state.news : filt}>
          Hello
        </NewsList>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
