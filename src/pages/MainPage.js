import React, { useEffect, useState } from 'react';
import Sound from 'react-sound';
import dudu from '../assets/img/baby-bubu-bubu-dudu.gif';
import wallpaper from '../assets/img/hlelokityt.jpeg';
import snowflowerSound from '../assets/sounds/snowflower.mp3';
import './MainPage.css';

function MainPage() {
  const duduStyle = {
    width: '50%', // Adjust the size of the Dudu image
  };

  const chatBoxStyle = {
    position: 'absolute',
    bottom: -70,
    left: 0,
    width: '100%',
    padding: '20px',
    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))',
    textAlign: 'center',
    transform: 'translateY(-50%)', // Center the box vertically
  };

  const [typingText, setTypingText] = useState('');
  const [isAudioPlaying, setAudioPlaying] = useState(true);

  useEffect(() => {
    const messages = [
      'Hey bubu! dudu here :3',
      'I made this website for you because ur Baka and not because I have no money....',
      'Well dudu is going to make lots of money one day... hopefully....',
      'Hopefully bubus needs dont get more expensive as dudu gets money...',
      'Daniel is very busy this year so he made me (dudu) do all da work this year',
      'JK I was created by Daniel, i am a sentient being hahaha',
      'welp its been one hell of a year with bubu :3 ', 
      'cheers to this year and many more years to come :D, many more backscratches and huggies',
      'dudu loved watched youtube rewind growing up so this is a recap video of all of dudus favoirte moments this year',
      'Hope you enjoy this :>',
    ];

    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex < messages.length) {
        const currentMessage = messages[currentIndex];
        setTypingText(currentMessage);
        currentIndex += 1;
        setTimeout(typeText, 6000); 
      }
    };
    const audio = new Audio(snowflowerSound);
    audio.load(); 

    // Start typing animation
    typeText();
  }, []);

  return (
    <div>
      <div style={duduStyle}>
        <img src={dudu} alt="Dudu" />
      </div>
      <div style={chatBoxStyle}>
        <p>{typingText}</p>
      </div>
      {isAudioPlaying && (
        <Sound
          url={snowflowerSound}
          playStatus={Sound.status.PLAYING}
          onFinishedPlaying={() => setAudioPlaying(false)}
        />
      )}
    </div>
  );
}

export default MainPage;
