import firebase from '../firebase';

export function getNews(callback) {
  const newsRef = firebase.database().ref('news');
  newsRef.once('value')
    .then(snapshot => {
      let news = snapshot.val();

      // Sorry, no time for defining testing strategy on firebase, so
      // this part is crap-code
      news = news.map(n => {
        if (!n.comments) {
          n.comments = []
        }

        return n;
      });

      callback(news);
    });
};
