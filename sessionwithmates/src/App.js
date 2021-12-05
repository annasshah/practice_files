import './App.css';
import Spinner from './assets/Spinner'
import Buttons from './components/Button';
import AppRouter from './config/AppRouter';
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
    username:'name',
    age:6
  }

  return (
    <div className="App">

      <AppRouter />

      
    {/* <Spinner /> */}

    {/* <Buttons value={obj} onClick={()=>console.log(obj.username)} /> */}

  
     
    </div>
  );
}

export default App;
