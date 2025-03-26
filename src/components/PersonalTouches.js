import React from 'react';
import './PersonalTouches.css';

const PersonalTouches = () => {
  const songs = [
    {
      title: "Song 1",
      artist: "Artist 1",
      link: "https://open.spotify.com/track/your-song-1"
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      link: "https://open.spotify.com/track/your-song-2"
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      link: "https://open.spotify.com/track/your-song-3"
    }
  ];

  return (
    <div className="personal-touches">
      <div className="songs-section">
        <h2>Our Favorite Songs</h2>
        <div className="songs-grid">
          {songs.map((song, index) => (
            <a 
              key={index}
              href={song.link}
              target="_blank"
              rel="noopener noreferrer"
              className="song-card"
            >
              <div className="song-content">
                <h3>{song.title}</h3>
                <p>{song.artist}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="map-section">
        <h2>Our Journey Together</h2>
        <div className="map-container">
          {/* Replace with your actual map embed code */}
          <iframe
            src="https://www.google.com/maps/embed?pb=your-map-embed-code"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="final-message">
        <h2>My Final Message to You</h2>
        <div className="message-content">
          <p>
            {/* Add your personal message here */}
            My dearest, this past year has been filled with countless beautiful moments, 
            and I'm grateful for every single one of them. You make my world complete, 
            and I can't wait to create many more memories together. I love you more than words can express.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalTouches; 