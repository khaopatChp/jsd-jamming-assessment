import React, { useState } from 'react';
import TrackList from '../TrackList/TrackList'

import './Playlist.css';

function Playlist({playlistTracks, playlistName, onRemove, onNameChange, onSave}) {
  
  function  handleNameChange(e) {
    onNameChange(e.target.value);
  }
  
  return (
    <div className="Playlist">
      <input defaultValue={'New Playlist'}  onChange={handleNameChange}/>
      <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true}/>
      <button className="Playlist-save" onClick={onSave}>SAVE TO SPOTIFY</button>
    </div>
    );
}

export default Playlist;
