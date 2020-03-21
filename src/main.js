import React from 'react';
import ReactDom from 'react-dom';
import './styles/reset.scss';
import AppRouter from './routes/AppRoutes';


const App = () => (
  <AppRouter />
);

ReactDom.render(<App />, document.getElementById('app'));

// 热更新
if (module.hot) {
  module.hot.accept(err => {
    if (err) {
      console.error('module.hot，', err);
    }
  });
}