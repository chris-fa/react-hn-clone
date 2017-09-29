import React, { Component } from 'react';
import firebase from '../firebase';

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
    return (
      <div>Hello world</div>
    );
  }
}

export default HomePage;
