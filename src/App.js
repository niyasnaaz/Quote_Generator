import { useState, useEffect } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Header from './Header';

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((error) => console.error('Error fetching quote:', error));
  };

  const fetchNewQuote = () => {
    fetchQuote();
  };

  return (
    <>
    <Header/>
    <div className="App d-flex flex-column justify-content-center align-items-center">
      <div className='quote'>
        <h2>{quote}</h2>
        <p className='mt-3'>- {author}</p>
      </div>
      <Button className='btn btn-danger fw-bold' style={{borderRadius:"25px"}} onClick={fetchNewQuote}>Generate New Quote</Button>
    </div>
    </>
  );
}

export default App;
