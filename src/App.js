import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';

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
          <Route path="/" element={<p>Rockets page goes here</p>} />
          <Route path="/missions" element={<p>Missions page goes here</p>} />
          <Route path="/profile" element={<p>Profile page goes here</p>} />
          <Route path="/*" element={<p>404 Page not found</p>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
