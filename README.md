# Nacker Hews [![Build Status](https://travis-ci.org/chris-fa/react-hn-clone.svg?branch=master)](https://travis-ci.org/chris-fa/react-hn-clone)

It's kind of a Hacker News project developed in less than 8 hours (needed to read some docs). The objective is to use the following technologies:

- React
- ReactRouter
- Jest
- Enzyme
- create-react-app
- Yarn

These are tech I used as helpers since 
- Bulma
- Firebase

It just have "news" and their "comments", but it has 100% test coverage except on these files:

- `index.js`: this is the browser entry point, can't test this with unit test
- `registerServiceWorker.js`: this comes by default with `create-react-app`. You can almost assume it should be tested already by the maintainers.
- `Api.js`: this one is actually my bad, however, since the backend is Firebase (not a REST service), and it's only a helper tool (and to actually test it I'd need to read lots of docs on how to test Firebase object, and that is out of the scope of this task) I decided to leave it alone.
