import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import JSON from './db.json'

// components

import Header from './components/header';
import NewsList from './components/news-list';


class App extends Component {

  state = {
    news: JSON
  }

  render () {

    return (
      <div>
        <Header />
        <NewsList news={this.state.news}>
          Hello
        </NewsList>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
