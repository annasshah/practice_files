import Approuter from "./config/routerConfig/Index";
import { Provider } from "react-redux";
import {store} from './config/redux/store/Index'


function App() {
  return (
    <div >

      <Provider store={store}>
        <Approuter />
      </Provider>

    </div>
  );
}

export default App;
