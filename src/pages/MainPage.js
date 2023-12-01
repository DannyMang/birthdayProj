import React, { useEffect, useState } from 'react';
import Sound from 'react-sound';
import dudu from '../assets/img/baby-bubu-bubu-dudu.gif';
import snowflowerSound from '../assets/sounds/snowflower.mp3';
import './MainPage.css';
import ImageSlider from './ImageSlider';
import imageOne from '../assets/img/hmart.jpg';
import imageTwo from '../assets/img/bowling.jpg';
import imageThree from '../assets/img/sjsu.jpg';
import imageFour from '../assets/img/yummy.jpg';
import imageSeven from '../assets/img/newYears.jpg';
import imageSix from '../assets/img/paris.jpg';
import imageFive from '../assets/img/sick.jpg';
import imageEight from '../assets/img/spoon.jpg';
import imageNine from '../assets/img/haircut.jpg';
import image10 from '../assets/img/bakabear.jpg';
import sabrinaCarp from '../assets/img/sabrina.jpg';
import image11 from '../assets/img/BAKAEAT.jpg';
import vacation from '../assets/img/vacation.jpg';
import image12 from '../assets/img/taylorswift.jpg';
import image13 from '../assets/img/waterlantern.jpg';
import image14 from '../assets/img/prebreakup.jpg';
import image16 from '../assets/img/halloween.jpg';
import image17 from '../assets/img/fourthJuly.jpg';
import image21 from '../assets/img/starvation.jpg';
import image23 from '../assets/img/beachDay.jpg';
import image24 from '../assets/img/pumpkinpatch.jpg';
import image25 from '../assets/img/:3.jpg';



function MainPage() {
  const duduStyle = {
    width: '50%', 
  };
  

  const chatBoxStyle = {
    position: 'absolute',
    bottom: -70,
    left: 0,
    width: '100%',
    padding: '20px',
    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))',
    textAlign: 'center',
    transform: 'translateY(-50%)', 
  };

  const [typingText, setTypingText] = useState('');
  const [isAudioPlaying, setAudioPlaying] = useState(true);
  const [showImageSlider, setImageSlider] = useState(false);
  const imageArray = [imageOne,imageTwo,imageThree,imageFour, imageFive, imageSix, imageSeven, imageEight, imageNine, image10, sabrinaCarp, image11, vacation, image12, image13, image14,image16, image17, image21, image23, image24, image25, dudu, dudu];
  const messagesTwo =[
    'tb to first time we eat corn dog at da Hmart on first date :3',
    'bowling double date when I had my super sexy perm ',
    'baka first time stepping foot on sjsu :3',
    'me rmbr all the times u make me food. me miss baka cooking. me really appreciated all the times u cooked for me especially the time baka made chiken noodle soop when i was sick',
    'throwback to baka sickness Rest in peace',
    ' Baka Cream ',
    'New years with da Bubu :3',
    'Good food with da bubu :3',
    'Throwback to the mason cut (GG)',
    'CuteBakaBear ( recent) w/ Bubu',
    'first concert with the Bakapooks!',
    'BAKA EAT TOO MUCH !!!!!!!!! ',
    'vacation with da BubuFam',
    'Baka in her Taylor Swift Eras(idk how to enlarge image)',
    'water lantern festival! dudu enjoyed this day very much... dudu still wonders about what bubu wrote...',
    'prebreakup dudu :( dudu sory for getting mad pose',
    ' super last minute halloweeny with Big Sexy Wolf Dudu and Little red riding bubu',
    'post breakup baka+pooks, baka still remembers the drive home super vividly with the bright fireworks and pooks right beside him, i guess it is true that if baka and pooks ever broke up, baka will always be there to drive her.... such a simp baka....',
    'the time baka starved because he missed bubu ;-;',
    'BakaBeachDay', 
    'baka pumpkin patch day with all da Dudu Friends :3',
    'happy 2 years :3',
    'anyways... that was da slideshow...',
    'dudu has just one thing he wanted to ask you... before you moved away for college...'
  ]
  useEffect(() => {
    const messages = [
      'Hey bubu! dudu here :3',
      'I made this website for you because ur Baka and not because I have no money....',
      'Well dudu is going to make lots of money one day... hopefully....',
      'Hopefully bubus needs dont get more expensive as dudu gets money...',
      'Daniel is very busy this year so he made me (dudu) do all da work this year',
      'JK I was created by Daniel, i am a sentient being hahaha',
      'welp its been one hell of a year with bubu :3 ', 
      'cheers to this year and many more years to come (hopefully), many more backscratches and huggies',
      'dudu hopes you dont move too far away from bubu ;-;',
      'dudu does want you to have good education tho....', 
      'wharever baka is... dudu will be there in spirit!',
      'even if we are broken up, dudu will drive to the ends of earth to follow baka!!!!',
      'Actually other way around, baka be following dudu too much',
      'anyways dudu loved watched youtube rewind growing up so this is a recap of all of dudus favoirte moments this year',
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
      else {
        setImageSlider(true);
      }
    };
    const audio = new Audio(snowflowerSound);
    audio.load(); 

    // Start typing animation
    typeText();
  }, []);

  return (
    <div>
      {showImageSlider ? (
        <ImageSlider images={imageArray} messages={messagesTwo} />
      ) : (
        <div>
          <div style={duduStyle}>
            <img src={dudu} alt="Dudu" />
          </div>
          <div style={chatBoxStyle}>
            <p>{typingText}</p>
          </div>
        </div>
      )}
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
