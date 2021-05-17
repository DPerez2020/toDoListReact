import React from 'react';
import { Provider } from 'react-redux';
import Routes from './components/Routes';
import generateStore from './redux/store'

function App() {
  const store = generateStore()
  return (
    <Provider store={store}>
      <Routes/> 
    </Provider>
  );
}

export default App;
