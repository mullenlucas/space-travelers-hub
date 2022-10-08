import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import RocketsPage from './components/rockets/rocketsPage';
import MissionPage from './components/missions/missionsPage';
import ProfilePage from './components/profile/profilePage';

const routes = [
  {
    id: 1,
    path: '/',
    name: 'Rockets',
  },
  {
    id: 2,
    path: '/missions',
    name: 'Missions',
  },
  {
    id: 2,
    path: '/profile',
    name: 'My Profile',
  },
];

function App() {
  return (
    <div className="App">
      <Router className="App">
        <Nav title="Space Travelers&apos; Hub" routes={routes} />
        <Routes>
          <Route path="/" element={<RocketsPage />} />
          <Route path="/missions" element={<MissionPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/*" element={<p>404 Page not found</p>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
