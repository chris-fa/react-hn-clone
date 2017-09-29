import React, { Component } from 'react';
import firebase from '../firebase';
import 'bulma/css/bulma.css';

class HomePage extends Component {
  constructor() {
    super();

    this.state = {
      news: [],
    };
  }

  componentWillMount() {
    const newsRef = firebase.database().ref('news');
    newsRef.once('value')
      .then(snapshot => {
        const news = snapshot.val();

        this.setState({ news });
      });
  }

  render() {
    const { news } = this.state;
    const newsBox = news.map(n => (
      <div className="box" key={ n.id }>
        <div className="content">
          <p>
            <a href={ n.url }><strong>{ n.title }</strong></a> <small>({ n.url })</small>
            <br />
            { n.up } <span className="icon"><i className="fa fa-home"></i></span>
            <strong>{ n.comments ? n.comments.length : 0 } comments</strong>
          </p>
        </div>

      </div>
    ));

    return (
      <div style={{margin: '0 24px' }}>
        { newsBox }
      </div>
    );
  }
}

export default HomePage;
