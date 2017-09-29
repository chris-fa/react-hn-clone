import React, { Component } from 'react';
import 'bulma/css/bulma.css';

import { getNews } from '../server/Api';
import Entry from './components/Entry';

class NewsPage extends Component {
  constructor() {
    super();

    this.state = {
      news: [],
    };
  }

  componentWillMount() {
    this.loadNews();
  }

  loadNews() {
    getNews(news => this.setState({ news }));
  }

  render() {
    const { news } = this.state;

    return (
      <div style={{margin: '0 24px' }}>
        { news.map(n =>
          <div className="box" key={ n.id }>
            <Entry { ...n } />
          </div>
        )}
      </div>
    );
  }
}

export default NewsPage;
