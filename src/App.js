import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import './details.js';
import Detail from './details.js';

const URL = 'https://newsapi.org/v2/';
const API_KEY = '3a722e5205484c7c97b73bc22092fe16';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const criteria = 'top-headlines?country=us&category=business';
    const address = URL + '/' + criteria + '&apikey=' + API_KEY;

    axios.get(address)
      .then((response) => {
        setError(null);
        setIsLoaded(true);
        setItems(response.data.articles);
      }).catch(error => {
        alert(error);
      });  }    
  , [])

  function close() {
    setSelectedItem(null);
  }

  if (selectedItem != null) {
    return <Detail
      title={selectedItem.title}
      image={selectedItem.image}
      description={selectedItem.description}
      close={close}
      />
  }

   else if (error) {
      return <p>{error.message}</p>;
    }
    else if (!isLoaded) {
      return <p>Loading...</p>;
    }
    else {
      return (
        <div>
          {items.map(item => (
            <div key={item.title} onClick={e => setSelectedItem(item)}>
              <h1>{item.title}</h1>
              <img src={item.urlToImage}></img>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      );
    }
} 
export default App;
