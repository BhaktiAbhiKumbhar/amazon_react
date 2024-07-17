
import './App.css';
import Cart from './Cart';
import Cloths from './Cloths';
import Header from './Header';

import Home from './Home';

import {Route,BrowserRouter as Router,Routes} from 'react-router-dom';
function App() {
  return (
    <Router>
         <div className='App'>
         <Header/>
         <div className='backgroundImg'>
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/PD24/ACQ/T2/GW/PC-hero-new-kv_-3000x1200_2._CB570221731_.jpg" alt="backgroundImg"/>
    </div>
       
      <Routes>
      <Route exact path="/"element={<Home/>} />
        {/* <Route exact path="/"element={<Product/>} /> */}
        <Route exact path="/Cart"element={<Cart/>} />
        <Route exact path="/Cloths"element={<Cloths/>} />
      </Routes>

    
   </div>
   </Router>
  );
}

export default App;
