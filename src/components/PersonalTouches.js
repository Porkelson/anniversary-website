import React from 'react';
import './PersonalTouches.css';

const PersonalTouches = () => {
  const songs = [
    {
      title: "Hard To Say Goodbye",
      artist: "Kiss",
      embed: "https://open.spotify.com/embed/track/4NasktR5Hj5df1iJC6ioJt?utm_source=generator&theme=1"
    },
    {
      title: "Too Sweet",
      artist: "Hozier",
      embed: "https://open.spotify.com/embed/track/19XpFsce28aByvCC4g89tJ?utm_source=generator&theme=1"
    },
    {
      title: "My Love Mine All Mine",
      artist: "Mitski",
      embed: "https://open.spotify.com/embed/track/3vkCueOmm7xQDoJ17W1Pm3?utm_source=generator&theme=1"
    }
  ];

  const shows = [
    {
      title: "Invincible",
      genre: "Superhero/Action",
      description: "THINK MARK"
    },
    {
      title: "Bones",
      genre: "Crime/Drama",
      description: "Our first binge show together"
    },
    {
      title: "Arcane",
      genre: "Animation/Drama",
      description: "Absolute cinema"
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
            <div key={index} className="song-card">
              <iframe 
                title={song.title}
                style={{ borderRadius: "12px" }}
                src={song.embed}
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
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
            and I can't wait to create many more memories together. I love you pookie bear.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalTouches; 