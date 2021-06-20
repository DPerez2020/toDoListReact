import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { Loading } from './components/Loading';
import Routes from './components/Routes';
import generateStore from './redux/store'

function App() {
  const store = generateStore()
  
  return (
    <Provider store={store}>
      <Suspense fallback={'Cargando'}>
        <Routes/>
        {/* <Loading/> */}
      </Suspense>
    </Provider>
  );
}

export default App;
