import './App.css';
import Spinner from './assets/Spinner'
import Buttons from './components/Button';
import AppRouter from './config/AppRouter';
import { Provider } from 'react-redux';
import store from './config/redux/store'
// import { createTheme, ThemeProvider } from '@mui/material';


function App() {
  // const theme = createTheme({
  //   palette:{
  //     primary:{
  //       main:'#000000'
  //     },
  //     secondary:{
  //       main:'#D3D3D3'
  //     }
  //   }
  // })



  let obj = {
    username: 'name',
    age: 6
  }

  return (

    <Provider store={store}>

      <AppRouter />

    </Provider>

  );
}

export default App;
