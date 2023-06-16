import logo from './logo.svg';
import './App.css';
import Headers from './Component/Headers';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Component/Cart';
/* import Counter from './Component/Parent'; */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Headers/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Cart" element={<Cart/>}/>
        </Routes>
        </BrowserRouter>
       {/*  <Counter/> */}
     
      </header>
    </div>
  );
}

export default App;
