import React, { useState } from 'react';
import './Listening.css';

const songs = [
  { src: './song1.mp3', img: './song1.jpg', name: 'Song 1' },
  { src: './song2.mp3', img: './song2.jpg', name: 'Song 2' },
  { src: './song3.mp3', img: './song3.jpg', name: 'Song 3' }
];

const Listening = () => {
  const [currentSong, setCurrentSong] = useState(0);

  const playSong = (index) => {
    setCurrentSong(index);
    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.src = songs[index].src;
    audioPlayer.load();
    audioPlayer.play();
  };

  const nextSong = () => {
    setCurrentSong((currentSong + 1) % songs.length);
    playSong((currentSong + 1) % songs.length);
  };

  const prevSong = () => {
    setCurrentSong((currentSong - 1 + songs.length) % songs.length);
    playSong((currentSong - 1 + songs.length) % songs.length);
  };

  return (
    <div className="listening-container">
      <div className="home-header">
        <span>Home</span><span>About</span><span>Contact</span>
        <hr />
      </div>

      <div className="music-player">
        <audio id="audio-player" controls>
          <source id="audio-source" src={songs[currentSong].src} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>

        <div className="controls">
          <button onClick={prevSong}>Previous</button>
          <button onClick={nextSong}>Next</button>
        </div>

        <div className="song-list">
          {songs.map((song, index) => (
            <div className="song-item" key={index} onClick={() => playSong(index)}>
              <img src={song.img} alt={song.name} />
              <div className="song-name">{song.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listening;
