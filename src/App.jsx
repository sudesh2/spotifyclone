
import React , {useState , useEffect} from 'react'
import './App.css'
import {yoururl} from './login';
import Hero from './Hero';

function App() {
  
  const [token,setToken] = useState(null);

  useEffect(() => {
    console.log("lawadu")
    const params = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = params.get('access_token');
    
    if (accessToken) {
      setToken(accessToken);
    }
  }, []);

  return (
    <>
      {token? (
        <div>
          <Hero />
        </div>
      ) : (
      <a href={yoururl()}>login button</a>
      )}
    </>
  );
}

export default App 
