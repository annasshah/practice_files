import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
  // import your route components too

  import {Login,Signup,Dashboard} from '.'

  
  export default function RouterApp() {


      return (
          <Router>
              <Routes>
                  <Route path='/' element={<Dashboard/>} />
                  <Route path='/login' element={<Login/>} />
                  <Route path='/signup' element={<Signup/>} />
              </Routes>
              
          </Router>
      )
  }
  