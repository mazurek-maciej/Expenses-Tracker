import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Layout from './layout';
import reducers from './reducers';
import firebaseConfig from './config/firebaseConfig';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  compose(
    composeEnhancers(
      applyMiddleware(
        reduxThunk.withExtraArgument({ getFirebase, getFirestore })
      ),
      reactReduxFirebase(firebaseConfig, {
        useFirestoreForProfile: true,
        userProfile: 'users',
        attachAuthIsReady: true,
      }),
      reduxFirestore(firebaseConfig)
    )
  )
);

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <Layout>
        <App />
      </Layout>
    </Provider>,
    document.getElementById('root')
  );
  serviceWorker.unregister();
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
