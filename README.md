# Nacker Hews [![Build Status](https://travis-ci.org/chris-fa/react-hn-clone.svg?branch=master)](https://travis-ci.org/chris-fa/react-hn-clone)

It's some kind of prototype of Hacker News developed in less than 8 hours (needed to read some docs). The objective was to use the following technologies:

- [React](https://reactjs.org/)
- [ReactRouter](https://reacttraining.com/react-router/web/guides/philosophy)
- [Jest](https://facebook.github.io/jest/)
- [Enzyme](http://airbnb.io/enzyme/)
- [create-react-app](https://github.com/facebookincubator/create-react-app)
- [Yarn](https://yarnpkg.com/en/)

These are techs I used as helpers since they were out of the scope but I needed their functionalities.
- [Bulma](http://bulma.io/): CSS framework (Javascript-less)
- [Firebase](https://firebase.google.com): Cloud database

The only features are "news" and their "comments". However, the project has 100% test coverage, except on these files:

- `src/index.js`: this is the browser entry point, can't test this with unit test
- `src/registerServiceWorker.js`: this comes by default with `create-react-app`. You can almost assume it should be tested already by the maintainers.
- `src/server/Api.js`: this one is actually my bad. However, since the backend is Firebase (not a REST service), and it was being used only as a helper tool, I decided to leave it alone (Also, to actually test it I'd need to read lots of docs on how to test Firebase object, and that is out of the scope of this task).
