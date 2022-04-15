import { useState } from 'react';
import './App.css';

function App() {

  const [user, setUser] = useState({});
  const [info, setInfo] = useState('');
  const [onLoad, setOnLoad] = useState(false);

  const handleClick = () => {
    setOnLoad(true);
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setInfo(data.name);
        setOnLoad(false);
      })
      .catch(err => console.log(err));
  }

  const handleShowDetail = () => {
    setInfo(JSON.stringify(user));
  }

  return (
    <div className="App">

      <button onClick={handleClick}>Show</button>
      {onLoad ?
        <p>Loading ...</p> :
        <h2 
          style={{cursor: 'pointer'}}
          onClick={handleShowDetail}
        >{info}</h2>
      }
    </div>
  );
}

export default App;
