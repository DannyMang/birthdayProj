// App.js
import cinmarol from '../src/assets/img/cinmarol.gif';
import './App.css';
import React, { useState } from 'react';
import PasswordInput from './components/PasswordInput';
import MainPage from './pages/MainPage';
import wallpaper from '../src/assets/img/hlelokityt.jpeg';

function App() {
  const [isPasswordCorrect, setPasswordCorrect] = useState(false);
  const handlePasswordEntered = () => {
    setPasswordCorrect(true);
  };

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundImage: `url(${isPasswordCorrect ? wallpaper : cinmarol})` }}>
        {isPasswordCorrect ? (
          <MainPage />
        ) : (
          <div>
            <img src={cinmarol} className="App-logo" alt="logo" />
            <PasswordInput onPasswordEntered={handlePasswordEntered} />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
