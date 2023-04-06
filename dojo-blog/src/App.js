

import Home from './Home';

function App() {
 const title = 'welcome to the new';
 const likes = 50;
 // const person ={name:'yoshi', age: 30}
 const link = "http://www.google.com";

  return (
    <div className="App">//1st container
      <div className="content">
        <h1>{title}</h1>
      <p>liked {likes} times</p>

      {/* <p>{ person }</p> */}
      <p> {10} </p>
      <p>{"hello, ninjas"}</p>
      <p>{ [1,2,3,4,5] }</p>
      {/*<p>{math.random() *10 }</p>*/}

    <a href={link} >google site</a>
    </div>
  </div>
  );
}

export default App;
