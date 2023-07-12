import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/home/Home'


function App() {
  
  return (<> 
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home></Home>}></Route>
</Routes>
</BrowserRouter>
  </>
  );
}

export default App;
