import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import ProfileEdit from './pages/ProfileEdit';

export default function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/search" element={ <Search /> } />
          <Route path="/album/:id" element={ <Album /> } />
          <Route path="/favorites" element={ <Favorites /> } />
          <Route path="/profile" element={ <Profile /> } />
          <Route path="/profile/edit" element={ <ProfileEdit /> } />
          <Route path="/*" element={ <NotFound /> } />
        </Routes>
      </React.StrictMode>
    </div>

  );
}
