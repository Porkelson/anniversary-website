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

  const shows = [
    {
      title: "Show 1",
      genre: "Genre 1",
      description: "Why we love it"
    },
    {
      title: "Show 2",
      genre: "Genre 2",
      description: "Why we love it"
    },
    {
      title: "Show 3",
      genre: "Genre 3",
      description: "Why we love it"
    }
  ];

  return (
    <div className="personal-touches">
      <div className="songs-section">
        <h2>Our Favorite Songs</h2>
        <p className="section-description">
          Here are some songs that remind us of special moments together. 
          Click on any song to listen to it on Spotify!
        </p>
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

      <div className="shows-section">
        <h2>Our Favorite Shows</h2>
        <p className="section-description">
          These are the shows we love watching together. 
          Each one holds special memories of our cozy evenings!
        </p>
        <div className="shows-grid">
          {shows.map((show, index) => (
            <div key={index} className="show-card">
              <div className="show-content">
                <h3>{show.title}</h3>
                <p className="show-genre">{show.genre}</p>
                <p className="show-description">{show.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="final-message">
        <h2>My Final Message to You</h2>
        <div className="message-content">
          <p>
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