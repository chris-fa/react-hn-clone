import React, { Component } from 'react';
import 'bulma/css/bulma.css';

import { getNews } from '../server/Api';
import Entry from './components/Entry';
import CommentPanel from './components/CommentPanel';

class NewsPage extends Component {
  constructor() {
    super();

    this.state = {
      selectedEntry: null,
      news: [],
    };

    this.onCommentLinkClick       = this.onCommentLinkClick.bind(this);
    this.onCommentPanelCloseClick = this.onCommentPanelCloseClick.bind(this);
  }

  componentWillMount() {
    this.loadNews();
  }

  loadNews() {
    getNews(news => this.setState({ news }));
  }

  onCommentLinkClick(id) {
    this.setState((prevState, props) => ({
      selectedEntry: prevState.news.find(n => n.id === id),
    }));
  }

  onCommentPanelCloseClick() {
    this.setState((prevState, props) => ({
      selectedEntry: null,
    }));
  }

  render() {
    const { news } = this.state;

    return (
      <div className="columns">
        <div className="column">
          <div style={{margin: '0 24px' }}>
            { news.map(n =>
              <div className="box" key={ n.id }>
                <Entry { ...n } onCommentLinkClick={ this.onCommentLinkClick } />
              </div>
            )}
          </div>
        </div>

        { this.state.selectedEntry !== null &&
            <div className="column">
              <div style={{margin: '0 24px' }}>
                <CommentPanel
                  comments={ this.state.selectedEntry.comments }
                  onCloseClick={ this.onCommentPanelCloseClick } />
              </div>
            </div>
        }
      </div>
    );
  }
}

export default NewsPage;
