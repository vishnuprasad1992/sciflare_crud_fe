import { useEffect, useState } from 'react';
import './App.css';
import AppRouter from './AppRouter';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(token)
    }
  }, [ isLoggedIn]);
  return (
    <div className="App">
      <AppRouter isUserLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
