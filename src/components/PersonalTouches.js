import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './PersonalTouches.css';

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
  { title: "Invincible",  genre: "Superhero / Action",  description: "THINK MARK" },
  { title: "Bones",       genre: "Crime / Drama",        description: "Our first binge show together" },
  { title: "Arcane",      genre: "Animation / Drama",    description: "Absolute cinema" },
];

const tabs = [
  { id: 'songs', label: '🎵 Songs' },
  { id: 'shows', label: '📺 Shows' },
  { id: 'note',  label: '💌 Note'  },
];

export default function PersonalTouches() {
  const [activeTab, setActiveTab] = useState('songs');

  return (
    <div className="personal-touches">
      <div className="pt-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`pt-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            {activeTab === tab.id && <motion.div className="pt-tab-indicator" layoutId="tabIndicator" />}
          </button>
        ))}
      </div>

      {/* All panels stay mounted — iframes never re-fetch. Visibility toggled via CSS. */}
      <div className="pt-panel-wrap">
        <div className={`pt-panel ${activeTab === 'songs' ? 'pt-panel--active' : ''}`}>
          <div className="pt-songs-grid">
            {songs.map((song, i) => (
              <div key={i} className="pt-song-card">
                <div className="pt-song-meta">
                  <span className="pt-song-title">{song.title}</span>
                  <span className="pt-song-artist">{song.artist}</span>
                </div>
                <iframe
                  title={song.title}
                  src={song.embed}
                  width="100%"
                  frameBorder="0"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="pt-spotify-embed"
                />
              </div>
            ))}
          </div>
        </div>

        <div className={`pt-panel ${activeTab === 'shows' ? 'pt-panel--active' : ''}`}>
          <div className="pt-shows-grid">
            {shows.map((show, i) => (
              <div key={i} className="pt-show-card">
                <div className="pt-show-poster">
                  <span className="pt-show-initial">{show.title[0]}</span>
                </div>
                <div className="pt-show-info">
                  <h3 className="pt-show-title">{show.title}</h3>
                  <span className="pt-show-genre">{show.genre}</span>
                  <p className="pt-show-desc">{show.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`pt-panel ${activeTab === 'note' ? 'pt-panel--active' : ''}`}>
          <div className="pt-note">
            <div className="pt-note-card">
              <span className="pt-note-icon">♥</span>
              <p className="pt-note-text">
                My dearest, this past year has been filled with countless beautiful moments,
                and I'm grateful for every single one of them. You make my world complete,
                and I can't wait to create many more memories together. I love you pookie bear.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
