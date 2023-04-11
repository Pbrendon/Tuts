

import Home from './Home';

import {BrowserRouter as Router ,Route, Routes} from "react-router-dom"
import Navbar from "./navbar";
function App() {
 const title = 'welcome to the new';
 const likes = 50;
 // const person ={name:'yoshi', age: 30}
 const link = "http://www.google.com";

  return (


          <Router>
              <div ClassName="app">
                  <Navbar/>
                  <div ClassName = "content">

                      <Routes>
                          <Route path= "/" element={<Home/>}/>

                      </Routes>


</div>
    </div>
  </Router>
  );
}

export default App;
