import { Provider } from 'react-redux';
import './App.css';
import { store } from './redux/store';
import { RouterApp } from './router';

function App() {
  return (

    <Provider store={store}>
      <RouterApp />
    </Provider>
    
  );
}

export default App;
