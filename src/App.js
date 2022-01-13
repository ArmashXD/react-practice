import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import { Route, Routes } from "react-router-dom";
import MainNav from './components/Layout/MainNav';
import Block from './components/Practice/Block';
import {useState} from 'react';


function App() {
  return (
    <div >
        <Block />

      {/* <MainNav/> */}
      {/* <Routes>
        <Route path='/' element={  <AllMeetupsPage/>  } />
        <Route path='/new-meetup' element={ <NewMeetupPage/> } />
        <Route path='/favorites' element={<FavoritesPage/>} />
      </Routes> */}
    </div>
  );
}

export default App;
