import logo from './logo.svg';
import './App.css';

import * as React from 'react';
import Button from '@mui/material/Button';



function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
          The Lamborghini Huracan tecnica is a great supercar
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.lamborghini.com/en-en/models/huracan/huracan-tecnica"
          target="-blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant="contained"
        href="https://www.lamborghini.com/en-en/models/huracan/huracan-tecnica"
        target="-blank"
        rel="noopener noreferrer">Lamborghini</Button>;
        <Button variant="contained"
        href="http://www.instagram.com"
        target="-blank"
        rel="noopener noreferrer">instagram</Button>;
       <Button type="submit" color="primary">submit</Button>
       <Button type="submit" color="secondary" variant="outlined">submit</Button>
       <Button variant="contained" 
        href="https://www.ferrari.com/en-US"
        target="-blank"
        rel="noopener noreferrer">Ferrari S.P.A</Button>
      </header>
      
    </div>
  );
}

export default App;
