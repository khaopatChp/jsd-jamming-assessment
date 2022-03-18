import React, { useState } from 'react';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';


import './App.css';


function App() {
  const [searchResults,setSearchResults] = useState([
    { name: 'name1', artist: 'artist1', album: 'album1',id: 1},
    { name: 'name2', artist: 'artist2', album: 'album2',id: 2}
  ]);
  
  const [playlistName,setPlaylistName] = useState('newPlaylist');

  const [playlistTracks,setPlaylistTracks] = useState([
    { name: 'playlistName1', artist: 'playlistArtist1', album: 'playlistAlbum1',id: 3}, 
    { name: 'playlistName2', artist: 'playlistArtist2', album: 'playlistAlbum2', id: 4}
  ]);

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
  }

  const search = (term) => {
    console.log(term);
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
