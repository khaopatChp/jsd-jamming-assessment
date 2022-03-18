import React, { useState } from 'react';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

import Spotify from '../../utils/Spotify';


import './App.css';


function App() {
  const [searchResults,setSearchResults] = useState([]);
  
  const [playlistName,setPlaylistName] = useState('newPlaylist');

  const [playlistTracks,setPlaylistTracks] = useState([]);

  const addTrack =(track) =>{
    if (playlistTracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    } 

      setPlaylistTracks((prev) => {
        return [...prev, track];
    }) 
  }

  const RemoveTrack = (track) => {
      setPlaylistTracks((prev) => {
      return prev.filter((currentTrack) => currentTrack.id  !== track.id);
    })
  }

  const updatePlaylistName =(name) =>{
    setPlaylistName(name);
  }

  const savePlaylist = () => {
    const trackURIs = playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(playlistName, trackURIs).then(() =>{
      setPlaylistName('New Playlist');
      setPlaylistTracks([]);
    })
  }

  const search = (term) => {
    Spotify.getAccessToken()
    Spotify.search(term).then(searchResults => {
      setSearchResults(searchResults)
    })
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={search}/>
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack}/>
          <Playlist playlistTracks={playlistTracks} playlistName={playlistName} onRemove={RemoveTrack} onNameChange={updatePlaylistName} onSave={savePlaylist}/>
        </div>
      </div>
    </div>
  );
}

export default App;
