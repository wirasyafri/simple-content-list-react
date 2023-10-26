import { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Main from './components/Main';
import animesData from './data/animesdata';
import Search from './components/Search';
import NumResult from './components/NumResult';
import Box from './components/Box';
import AnimeList from './components/AnimeLIst';
import AnimeDetail from './components/AnimeDetail';

export default function App() {
  const [animes, setAnimes] = useState(animesData);
  const [selectedAnime, setSelectedAnime] = useState(animes[0]);

  function handleSelectedAnime(id) {
    const newAnime = animes.filter((anime) => anime.mal_id === id);
    setSelectedAnime(newAnime[0]);
  }  
  

  return (
    <>
      
      {/* <Navbar animes={animes}/> */}
      {/* <Main animes={animes}/> */}

      {/* gunakan dua kode diatas jika ingin menggunakan teknik drilling */}

      
      <Navbar>
        <Search>
          <NumResult animes={animes}/>
        </Search>
      </Navbar>
      <Main>
        <Box>
          <AnimeList animes={animes} onSelectedAnime={handleSelectedAnime}/>
        </Box>
        <Box>
          <AnimeDetail selectedAnime={selectedAnime}/>
        </Box>
      </Main>
    </>
  );
}
