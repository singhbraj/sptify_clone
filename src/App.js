import React, {useEffect, useState} from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromResponse } from './spotify';
import SpotifyWebAPi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer'


const spotify = new SpotifyWebAPi();



function App() {

  //const [token, setToken] = useState(null);
  const [{ user, token },dispatch] = useDataLayerValue();

// Run code based on given condition 
useEffect(()=>{

  const hash = getTokenFromResponse();
  window.location.hash = "";
  const _token = hash.access_token;
  if(_token)
  {  
    dispatch({
      type:'SET_TOKEN',
      token:_token 
    })
   
    spotify.setAccessToken(_token);
    spotify.getMe().then(user => {
      
        dispatch({
          type:'SET_USER',
          user:user
        })
    })

    spotify.getUserPlaylists().then((playlists) => {
      dispatch({
        type: "SET_PLAYLISTS",
        playlists,
      });
    });

    spotify.getPlaylist('5HMi1IDa43MSurCVNsnK4P').then(response => {
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response 
      })
    } )
  }
  

},[]);



  return (
    <div className="app">
    {
      token ? (
      <Player spotify={spotify} />
      ) : (
        <Login />
      )
    }
   
    
    </div>
  );
}

export default App;
